import { GatewayOpcodes } from "../../types/shared.ts";
import { createLeakyBucket } from "../../util/bucket.ts";
import { delay } from "../../util/utils.ts";
import { decompressWith } from "./deps.ts";
import { GATEWAY_RATE_LIMIT_RESET_INTERVAL, ShardState } from "./types.ts";
const decoder = new TextDecoder();
export async function handleMessage(shard, message) {
    message = message.data;
    // If message compression is enabled,
    // Discord might send zlib compressed payloads.
    if (shard.gatewayConfig.compress && message instanceof Blob) {
        message = decompressWith(new Uint8Array(await message.arrayBuffer()), 0, (slice)=>decoder.decode(slice)
        );
    }
    // Safeguard incase decompression failed to make a string.
    if (typeof message !== "string") return;
    const messageData = JSON.parse(message);
    //   gateway.debug("GW RAW", { shardId, payload: messageData });
    // TODO: remove
    // console.log({ messageData: censor(messageData) });
    switch(messageData.op){
        case GatewayOpcodes.Heartbeat:
            {
                // TODO: can this actually happen
                if (!shard.isOpen()) return;
                shard.heart.lastBeat = Date.now();
                // Discord randomly sends this requiring an immediate heartbeat back.
                // Using a direct socket.send call here because heartbeat requests are reserved by us.
                shard.socket?.send(JSON.stringify({
                    op: GatewayOpcodes.Heartbeat,
                    d: shard.previousSequenceNumber
                }));
                shard.events.heartbeat?.(shard);
                break;
            }
        case GatewayOpcodes.Hello:
            {
                const interval = messageData.d.heartbeat_interval;
                shard.startHeartbeating(interval);
                if (shard.state !== ShardState.Resuming) {
                    // HELLO has been send on a non resume action.
                    // This means that the shard starts a new session,
                    // therefore the rate limit interval has been reset too.
                    shard.bucket = createLeakyBucket({
                        max: shard.calculateSafeRequests(),
                        refillInterval: GATEWAY_RATE_LIMIT_RESET_INTERVAL,
                        refillAmount: shard.calculateSafeRequests(),
                        // Waiting acquires should not be lost on a re-identify.
                        waiting: shard.bucket.waiting
                    });
                }
                shard.events.hello?.(shard);
                break;
            }
        case GatewayOpcodes.HeartbeatACK:
            {
                shard.heart.acknowledged = true;
                shard.heart.lastAck = Date.now();
                // Manually calculating the round trip time for users who need it.
                if (shard.heart.lastBeat) {
                    shard.heart.rtt = shard.heart.lastAck - shard.heart.lastBeat;
                }
                shard.events.heartbeatAck?.(shard);
                break;
            }
        case GatewayOpcodes.Reconnect:
            {
                //   gateway.debug("GW RECONNECT", { shardId });
                shard.events.requestedReconnect?.(shard);
                await shard.resume();
                break;
            }
        case GatewayOpcodes.InvalidSession:
            {
                //   gateway.debug("GW INVALID_SESSION", { shardId, payload: messageData });
                const resumable = messageData.d;
                shard.events.invalidSession?.(shard, resumable);
                // We need to wait for a random amount of time between 1 and 5
                // Reference: https://discord.com/developers/docs/topics/gateway#resuming
                await delay(Math.floor((Math.random() * 4 + 1) * 1000));
                shard.resolves.get("INVALID_SESSION")?.(messageData);
                shard.resolves.delete("INVALID_SESSION");
                // When resumable is false we need to re-identify
                if (!resumable) {
                    await shard.identify();
                    break;
                }
                // The session is invalid but apparently it is resumable
                await shard.resume();
                break;
            }
    }
    if (messageData.t === "RESUMED") {
        // gateway.debug("GW RESUMED", { shardId });
        shard.state = ShardState.Connected;
        shard.events.resumed?.(shard);
        // Continue the requests which have been queued since the shard went offline.
        shard.offlineSendQueue.map((resolve)=>resolve()
        );
        shard.resolves.get("RESUMED")?.(messageData);
        shard.resolves.delete("RESUMED");
    } else if (messageData.t === "READY") {
        const payload = messageData.d;
        shard.sessionId = payload.session_id;
        shard.state = ShardState.Connected;
        // Continue the requests which have been queued since the shard went offline.
        // Important when this is a re-identify
        shard.offlineSendQueue.map((resolve)=>resolve()
        );
        shard.resolves.get("READY")?.(messageData);
        shard.resolves.delete("READY");
    }
    // Update the sequence number if it is present
    // `s` can be either `null` or a `number`.
    // In order to prevent update misses when `s` is `0` we check against null.
    if (messageData.s !== null) {
        shard.previousSequenceNumber = messageData.s;
    }
    // The necessary handling required for the Shards connection has been finished.
    // Now the event can be safely forwarded.
    shard.events.message?.(shard, messageData);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNjb3JkR2F0ZXdheVBheWxvYWQsIERpc2NvcmRIZWxsbywgRGlzY29yZFJlYWR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IEdhdGV3YXlPcGNvZGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3NoYXJlZC50c1wiO1xuaW1wb3J0IHsgY3JlYXRlTGVha3lCdWNrZXQgfSBmcm9tIFwiLi4vLi4vdXRpbC9idWNrZXQudHNcIjtcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSBcIi4uLy4uL3V0aWwvdXRpbHMudHNcIjtcbmltcG9ydCB7IGRlY29tcHJlc3NXaXRoIH0gZnJvbSBcIi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgR0FURVdBWV9SQVRFX0xJTUlUX1JFU0VUX0lOVEVSVkFMLCBTaGFyZCwgU2hhcmRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzLnRzXCI7XG5cbmNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2Uoc2hhcmQ6IFNoYXJkLCBtZXNzYWdlOiBNZXNzYWdlRXZlbnQ8YW55Pik6IFByb21pc2U8dm9pZD4ge1xuICBtZXNzYWdlID0gbWVzc2FnZS5kYXRhO1xuXG4gIC8vIElmIG1lc3NhZ2UgY29tcHJlc3Npb24gaXMgZW5hYmxlZCxcbiAgLy8gRGlzY29yZCBtaWdodCBzZW5kIHpsaWIgY29tcHJlc3NlZCBwYXlsb2Fkcy5cbiAgaWYgKHNoYXJkLmdhdGV3YXlDb25maWcuY29tcHJlc3MgJiYgbWVzc2FnZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICBtZXNzYWdlID0gZGVjb21wcmVzc1dpdGgoXG4gICAgICBuZXcgVWludDhBcnJheShhd2FpdCBtZXNzYWdlLmFycmF5QnVmZmVyKCkpLFxuICAgICAgMCxcbiAgICAgIChzbGljZTogVWludDhBcnJheSkgPT4gZGVjb2Rlci5kZWNvZGUoc2xpY2UpLFxuICAgICk7XG4gIH1cblxuICAvLyBTYWZlZ3VhcmQgaW5jYXNlIGRlY29tcHJlc3Npb24gZmFpbGVkIHRvIG1ha2UgYSBzdHJpbmcuXG4gIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuXG4gIGNvbnN0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlKSBhcyBEaXNjb3JkR2F0ZXdheVBheWxvYWQ7XG4gIC8vICAgZ2F0ZXdheS5kZWJ1ZyhcIkdXIFJBV1wiLCB7IHNoYXJkSWQsIHBheWxvYWQ6IG1lc3NhZ2VEYXRhIH0pO1xuXG4gIC8vIFRPRE86IHJlbW92ZVxuICAvLyBjb25zb2xlLmxvZyh7IG1lc3NhZ2VEYXRhOiBjZW5zb3IobWVzc2FnZURhdGEpIH0pO1xuXG4gIHN3aXRjaCAobWVzc2FnZURhdGEub3ApIHtcbiAgICBjYXNlIEdhdGV3YXlPcGNvZGVzLkhlYXJ0YmVhdDoge1xuICAgICAgLy8gVE9ETzogY2FuIHRoaXMgYWN0dWFsbHkgaGFwcGVuXG4gICAgICBpZiAoIXNoYXJkLmlzT3BlbigpKSByZXR1cm47XG5cbiAgICAgIHNoYXJkLmhlYXJ0Lmxhc3RCZWF0ID0gRGF0ZS5ub3coKTtcbiAgICAgIC8vIERpc2NvcmQgcmFuZG9tbHkgc2VuZHMgdGhpcyByZXF1aXJpbmcgYW4gaW1tZWRpYXRlIGhlYXJ0YmVhdCBiYWNrLlxuICAgICAgLy8gVXNpbmcgYSBkaXJlY3Qgc29ja2V0LnNlbmQgY2FsbCBoZXJlIGJlY2F1c2UgaGVhcnRiZWF0IHJlcXVlc3RzIGFyZSByZXNlcnZlZCBieSB1cy5cbiAgICAgIHNoYXJkLnNvY2tldD8uc2VuZChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG9wOiBHYXRld2F5T3Bjb2Rlcy5IZWFydGJlYXQsXG4gICAgICAgICAgZDogc2hhcmQucHJldmlvdXNTZXF1ZW5jZU51bWJlcixcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgICAgc2hhcmQuZXZlbnRzLmhlYXJ0YmVhdD8uKHNoYXJkKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgR2F0ZXdheU9wY29kZXMuSGVsbG86IHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gKG1lc3NhZ2VEYXRhLmQgYXMgRGlzY29yZEhlbGxvKS5oZWFydGJlYXRfaW50ZXJ2YWw7XG5cbiAgICAgIHNoYXJkLnN0YXJ0SGVhcnRiZWF0aW5nKGludGVydmFsKTtcblxuICAgICAgaWYgKHNoYXJkLnN0YXRlICE9PSBTaGFyZFN0YXRlLlJlc3VtaW5nKSB7XG4gICAgICAgIC8vIEhFTExPIGhhcyBiZWVuIHNlbmQgb24gYSBub24gcmVzdW1lIGFjdGlvbi5cbiAgICAgICAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSBzaGFyZCBzdGFydHMgYSBuZXcgc2Vzc2lvbixcbiAgICAgICAgLy8gdGhlcmVmb3JlIHRoZSByYXRlIGxpbWl0IGludGVydmFsIGhhcyBiZWVuIHJlc2V0IHRvby5cbiAgICAgICAgc2hhcmQuYnVja2V0ID0gY3JlYXRlTGVha3lCdWNrZXQoe1xuICAgICAgICAgIG1heDogc2hhcmQuY2FsY3VsYXRlU2FmZVJlcXVlc3RzKCksXG4gICAgICAgICAgcmVmaWxsSW50ZXJ2YWw6IEdBVEVXQVlfUkFURV9MSU1JVF9SRVNFVF9JTlRFUlZBTCxcbiAgICAgICAgICByZWZpbGxBbW91bnQ6IHNoYXJkLmNhbGN1bGF0ZVNhZmVSZXF1ZXN0cygpLFxuICAgICAgICAgIC8vIFdhaXRpbmcgYWNxdWlyZXMgc2hvdWxkIG5vdCBiZSBsb3N0IG9uIGEgcmUtaWRlbnRpZnkuXG4gICAgICAgICAgd2FpdGluZzogc2hhcmQuYnVja2V0LndhaXRpbmcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzaGFyZC5ldmVudHMuaGVsbG8/LihzaGFyZCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIEdhdGV3YXlPcGNvZGVzLkhlYXJ0YmVhdEFDSzoge1xuICAgICAgc2hhcmQuaGVhcnQuYWNrbm93bGVkZ2VkID0gdHJ1ZTtcbiAgICAgIHNoYXJkLmhlYXJ0Lmxhc3RBY2sgPSBEYXRlLm5vdygpO1xuICAgICAgLy8gTWFudWFsbHkgY2FsY3VsYXRpbmcgdGhlIHJvdW5kIHRyaXAgdGltZSBmb3IgdXNlcnMgd2hvIG5lZWQgaXQuXG4gICAgICBpZiAoc2hhcmQuaGVhcnQubGFzdEJlYXQpIHtcbiAgICAgICAgc2hhcmQuaGVhcnQucnR0ID0gc2hhcmQuaGVhcnQubGFzdEFjayAtIHNoYXJkLmhlYXJ0Lmxhc3RCZWF0O1xuICAgICAgfVxuXG4gICAgICBzaGFyZC5ldmVudHMuaGVhcnRiZWF0QWNrPy4oc2hhcmQpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBHYXRld2F5T3Bjb2Rlcy5SZWNvbm5lY3Q6IHtcbiAgICAgIC8vICAgZ2F0ZXdheS5kZWJ1ZyhcIkdXIFJFQ09OTkVDVFwiLCB7IHNoYXJkSWQgfSk7XG5cbiAgICAgIHNoYXJkLmV2ZW50cy5yZXF1ZXN0ZWRSZWNvbm5lY3Q/LihzaGFyZCk7XG5cbiAgICAgIGF3YWl0IHNoYXJkLnJlc3VtZSgpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBHYXRld2F5T3Bjb2Rlcy5JbnZhbGlkU2Vzc2lvbjoge1xuICAgICAgLy8gICBnYXRld2F5LmRlYnVnKFwiR1cgSU5WQUxJRF9TRVNTSU9OXCIsIHsgc2hhcmRJZCwgcGF5bG9hZDogbWVzc2FnZURhdGEgfSk7XG4gICAgICBjb25zdCByZXN1bWFibGUgPSBtZXNzYWdlRGF0YS5kIGFzIGJvb2xlYW47XG5cbiAgICAgIHNoYXJkLmV2ZW50cy5pbnZhbGlkU2Vzc2lvbj8uKHNoYXJkLCByZXN1bWFibGUpO1xuXG4gICAgICAvLyBXZSBuZWVkIHRvIHdhaXQgZm9yIGEgcmFuZG9tIGFtb3VudCBvZiB0aW1lIGJldHdlZW4gMSBhbmQgNVxuICAgICAgLy8gUmVmZXJlbmNlOiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNyZXN1bWluZ1xuICAgICAgYXdhaXQgZGVsYXkoTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQgKyAxKSAqIDEwMDApKTtcblxuICAgICAgc2hhcmQucmVzb2x2ZXMuZ2V0KFwiSU5WQUxJRF9TRVNTSU9OXCIpPy4obWVzc2FnZURhdGEpO1xuICAgICAgc2hhcmQucmVzb2x2ZXMuZGVsZXRlKFwiSU5WQUxJRF9TRVNTSU9OXCIpO1xuXG4gICAgICAvLyBXaGVuIHJlc3VtYWJsZSBpcyBmYWxzZSB3ZSBuZWVkIHRvIHJlLWlkZW50aWZ5XG4gICAgICBpZiAoIXJlc3VtYWJsZSkge1xuICAgICAgICBhd2FpdCBzaGFyZC5pZGVudGlmeSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgc2Vzc2lvbiBpcyBpbnZhbGlkIGJ1dCBhcHBhcmVudGx5IGl0IGlzIHJlc3VtYWJsZVxuICAgICAgYXdhaXQgc2hhcmQucmVzdW1lKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtZXNzYWdlRGF0YS50ID09PSBcIlJFU1VNRURcIikge1xuICAgIC8vIGdhdGV3YXkuZGVidWcoXCJHVyBSRVNVTUVEXCIsIHsgc2hhcmRJZCB9KTtcblxuICAgIHNoYXJkLnN0YXRlID0gU2hhcmRTdGF0ZS5Db25uZWN0ZWQ7XG4gICAgc2hhcmQuZXZlbnRzLnJlc3VtZWQ/LihzaGFyZCk7XG5cbiAgICAvLyBDb250aW51ZSB0aGUgcmVxdWVzdHMgd2hpY2ggaGF2ZSBiZWVuIHF1ZXVlZCBzaW5jZSB0aGUgc2hhcmQgd2VudCBvZmZsaW5lLlxuICAgIHNoYXJkLm9mZmxpbmVTZW5kUXVldWUubWFwKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuXG4gICAgc2hhcmQucmVzb2x2ZXMuZ2V0KFwiUkVTVU1FRFwiKT8uKG1lc3NhZ2VEYXRhKTtcbiAgICBzaGFyZC5yZXNvbHZlcy5kZWxldGUoXCJSRVNVTUVEXCIpO1xuICB9IC8vIEltcG9ydGFudCBmb3IgZnV0dXJlIHJlc3VtZXMuXG4gIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLnQgPT09IFwiUkVBRFlcIikge1xuICAgIGNvbnN0IHBheWxvYWQgPSBtZXNzYWdlRGF0YS5kIGFzIERpc2NvcmRSZWFkeTtcblxuICAgIHNoYXJkLnNlc3Npb25JZCA9IHBheWxvYWQuc2Vzc2lvbl9pZDtcbiAgICBzaGFyZC5zdGF0ZSA9IFNoYXJkU3RhdGUuQ29ubmVjdGVkO1xuXG4gICAgLy8gQ29udGludWUgdGhlIHJlcXVlc3RzIHdoaWNoIGhhdmUgYmVlbiBxdWV1ZWQgc2luY2UgdGhlIHNoYXJkIHdlbnQgb2ZmbGluZS5cbiAgICAvLyBJbXBvcnRhbnQgd2hlbiB0aGlzIGlzIGEgcmUtaWRlbnRpZnlcbiAgICBzaGFyZC5vZmZsaW5lU2VuZFF1ZXVlLm1hcCgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcblxuICAgIHNoYXJkLnJlc29sdmVzLmdldChcIlJFQURZXCIpPy4obWVzc2FnZURhdGEpO1xuICAgIHNoYXJkLnJlc29sdmVzLmRlbGV0ZShcIlJFQURZXCIpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBzZXF1ZW5jZSBudW1iZXIgaWYgaXQgaXMgcHJlc2VudFxuICAvLyBgc2AgY2FuIGJlIGVpdGhlciBgbnVsbGAgb3IgYSBgbnVtYmVyYC5cbiAgLy8gSW4gb3JkZXIgdG8gcHJldmVudCB1cGRhdGUgbWlzc2VzIHdoZW4gYHNgIGlzIGAwYCB3ZSBjaGVjayBhZ2FpbnN0IG51bGwuXG4gIGlmIChtZXNzYWdlRGF0YS5zICE9PSBudWxsKSB7XG4gICAgc2hhcmQucHJldmlvdXNTZXF1ZW5jZU51bWJlciA9IG1lc3NhZ2VEYXRhLnM7XG4gIH1cblxuICAvLyBUaGUgbmVjZXNzYXJ5IGhhbmRsaW5nIHJlcXVpcmVkIGZvciB0aGUgU2hhcmRzIGNvbm5lY3Rpb24gaGFzIGJlZW4gZmluaXNoZWQuXG4gIC8vIE5vdyB0aGUgZXZlbnQgY2FuIGJlIHNhZmVseSBmb3J3YXJkZWQuXG4gIHNoYXJkLmV2ZW50cy5tZXNzYWdlPy4oc2hhcmQsIG1lc3NhZ2VEYXRh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