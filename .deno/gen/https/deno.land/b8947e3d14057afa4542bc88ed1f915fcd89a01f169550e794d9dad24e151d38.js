import { GatewayOpcodes } from "../../types/shared.ts";
import { ShardSocketCloseCodes, ShardState } from "./types.ts";
export function startHeartbeating(shard, interval) {
    //   gateway.debug("GW HEARTBEATING_STARTED", { shardId, interval });
    shard.heart.interval = interval;
    // Only set the shard's state to `Unidentified`
    // if heartbeating has not been started due to an identify or resume action.
    if ([
        ShardState.Disconnected,
        ShardState.Offline
    ].includes(shard.state)) {
        shard.state = ShardState.Unidentified;
    }
    // The first heartbeat needs to be send with a random delay between `0` and `interval`
    // Using a `setTimeout(_, jitter)` here to accomplish that.
    // `Math.random()` can be `0` so we use `0.5` if this happens
    // Reference: https://discord.com/developers/docs/topics/gateway#heartbeating
    const jitter = Math.ceil(shard.heart.interval * (Math.random() || 0.5));
    shard.heart.timeoutId = setTimeout(()=>{
        // Using a direct socket.send call here because heartbeat requests are reserved by us.
        shard.socket?.send(JSON.stringify({
            op: GatewayOpcodes.Heartbeat,
            d: shard.previousSequenceNumber
        }));
        shard.heart.lastBeat = Date.now();
        shard.heart.acknowledged = false;
        // After the random heartbeat jitter we can start a normal interval.
        shard.heart.intervalId = setInterval(async ()=>{
            // gateway.debug("GW DEBUG", `Running setInterval in heartbeat file. Shard: ${shardId}`);
            // gateway.debug("GW HEARTBEATING", { shardId, shard: currentShard });
            // The Shard did not receive a heartbeat ACK from Discord in time,
            // therefore we have to assume that the connection has failed or got "zombied".
            // The Shard needs to start a re-identify action accordingly.
            // Reference: https://discord.com/developers/docs/topics/gateway#heartbeating-example-gateway-heartbeat-ack
            if (!shard.heart.acknowledged) {
                shard.close(ShardSocketCloseCodes.ZombiedConnection, "Zombied connection, did not receive an heartbeat ACK in time.");
                return await shard.identify();
            }
            shard.heart.acknowledged = false;
            // Using a direct socket.send call here because heartbeat requests are reserved by us.
            shard.socket?.send(JSON.stringify({
                op: GatewayOpcodes.Heartbeat,
                d: shard.previousSequenceNumber
            }));
            shard.heart.lastBeat = Date.now();
            shard.events.heartbeat?.(shard);
        }, shard.heart.interval);
    }, jitter);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRld2F5T3Bjb2RlcyB9IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcbmltcG9ydCB7IFNoYXJkLCBTaGFyZFNvY2tldENsb3NlQ29kZXMsIFNoYXJkU3RhdGUgfSBmcm9tIFwiLi90eXBlcy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRIZWFydGJlYXRpbmcoc2hhcmQ6IFNoYXJkLCBpbnRlcnZhbDogbnVtYmVyKSB7XG4gIC8vICAgZ2F0ZXdheS5kZWJ1ZyhcIkdXIEhFQVJUQkVBVElOR19TVEFSVEVEXCIsIHsgc2hhcmRJZCwgaW50ZXJ2YWwgfSk7XG5cbiAgc2hhcmQuaGVhcnQuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcblxuICAvLyBPbmx5IHNldCB0aGUgc2hhcmQncyBzdGF0ZSB0byBgVW5pZGVudGlmaWVkYFxuICAvLyBpZiBoZWFydGJlYXRpbmcgaGFzIG5vdCBiZWVuIHN0YXJ0ZWQgZHVlIHRvIGFuIGlkZW50aWZ5IG9yIHJlc3VtZSBhY3Rpb24uXG4gIGlmIChbU2hhcmRTdGF0ZS5EaXNjb25uZWN0ZWQsIFNoYXJkU3RhdGUuT2ZmbGluZV0uaW5jbHVkZXMoc2hhcmQuc3RhdGUpKSB7XG4gICAgc2hhcmQuc3RhdGUgPSBTaGFyZFN0YXRlLlVuaWRlbnRpZmllZDtcbiAgfVxuXG4gIC8vIFRoZSBmaXJzdCBoZWFydGJlYXQgbmVlZHMgdG8gYmUgc2VuZCB3aXRoIGEgcmFuZG9tIGRlbGF5IGJldHdlZW4gYDBgIGFuZCBgaW50ZXJ2YWxgXG4gIC8vIFVzaW5nIGEgYHNldFRpbWVvdXQoXywgaml0dGVyKWAgaGVyZSB0byBhY2NvbXBsaXNoIHRoYXQuXG4gIC8vIGBNYXRoLnJhbmRvbSgpYCBjYW4gYmUgYDBgIHNvIHdlIHVzZSBgMC41YCBpZiB0aGlzIGhhcHBlbnNcbiAgLy8gUmVmZXJlbmNlOiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNoZWFydGJlYXRpbmdcbiAgY29uc3Qgaml0dGVyID0gTWF0aC5jZWlsKHNoYXJkLmhlYXJ0LmludGVydmFsICogKE1hdGgucmFuZG9tKCkgfHwgMC41KSk7XG4gIHNoYXJkLmhlYXJ0LnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vIFVzaW5nIGEgZGlyZWN0IHNvY2tldC5zZW5kIGNhbGwgaGVyZSBiZWNhdXNlIGhlYXJ0YmVhdCByZXF1ZXN0cyBhcmUgcmVzZXJ2ZWQgYnkgdXMuXG4gICAgc2hhcmQuc29ja2V0Py5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG9wOiBHYXRld2F5T3Bjb2Rlcy5IZWFydGJlYXQsXG4gICAgICBkOiBzaGFyZC5wcmV2aW91c1NlcXVlbmNlTnVtYmVyLFxuICAgIH0pKTtcblxuICAgIHNoYXJkLmhlYXJ0Lmxhc3RCZWF0ID0gRGF0ZS5ub3coKTtcbiAgICBzaGFyZC5oZWFydC5hY2tub3dsZWRnZWQgPSBmYWxzZTtcblxuICAgIC8vIEFmdGVyIHRoZSByYW5kb20gaGVhcnRiZWF0IGppdHRlciB3ZSBjYW4gc3RhcnQgYSBub3JtYWwgaW50ZXJ2YWwuXG4gICAgc2hhcmQuaGVhcnQuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIGdhdGV3YXkuZGVidWcoXCJHVyBERUJVR1wiLCBgUnVubmluZyBzZXRJbnRlcnZhbCBpbiBoZWFydGJlYXQgZmlsZS4gU2hhcmQ6ICR7c2hhcmRJZH1gKTtcblxuICAgICAgLy8gZ2F0ZXdheS5kZWJ1ZyhcIkdXIEhFQVJUQkVBVElOR1wiLCB7IHNoYXJkSWQsIHNoYXJkOiBjdXJyZW50U2hhcmQgfSk7XG5cbiAgICAgIC8vIFRoZSBTaGFyZCBkaWQgbm90IHJlY2VpdmUgYSBoZWFydGJlYXQgQUNLIGZyb20gRGlzY29yZCBpbiB0aW1lLFxuICAgICAgLy8gdGhlcmVmb3JlIHdlIGhhdmUgdG8gYXNzdW1lIHRoYXQgdGhlIGNvbm5lY3Rpb24gaGFzIGZhaWxlZCBvciBnb3QgXCJ6b21iaWVkXCIuXG4gICAgICAvLyBUaGUgU2hhcmQgbmVlZHMgdG8gc3RhcnQgYSByZS1pZGVudGlmeSBhY3Rpb24gYWNjb3JkaW5nbHkuXG4gICAgICAvLyBSZWZlcmVuY2U6IGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy9nYXRld2F5I2hlYXJ0YmVhdGluZy1leGFtcGxlLWdhdGV3YXktaGVhcnRiZWF0LWFja1xuICAgICAgaWYgKCFzaGFyZC5oZWFydC5hY2tub3dsZWRnZWQpIHtcbiAgICAgICAgc2hhcmQuY2xvc2UoXG4gICAgICAgICAgU2hhcmRTb2NrZXRDbG9zZUNvZGVzLlpvbWJpZWRDb25uZWN0aW9uLFxuICAgICAgICAgIFwiWm9tYmllZCBjb25uZWN0aW9uLCBkaWQgbm90IHJlY2VpdmUgYW4gaGVhcnRiZWF0IEFDSyBpbiB0aW1lLlwiLFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBzaGFyZC5pZGVudGlmeSgpO1xuICAgICAgfVxuXG4gICAgICBzaGFyZC5oZWFydC5hY2tub3dsZWRnZWQgPSBmYWxzZTtcblxuICAgICAgLy8gVXNpbmcgYSBkaXJlY3Qgc29ja2V0LnNlbmQgY2FsbCBoZXJlIGJlY2F1c2UgaGVhcnRiZWF0IHJlcXVlc3RzIGFyZSByZXNlcnZlZCBieSB1cy5cbiAgICAgIHNoYXJkLnNvY2tldD8uc2VuZChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG9wOiBHYXRld2F5T3Bjb2Rlcy5IZWFydGJlYXQsXG4gICAgICAgICAgZDogc2hhcmQucHJldmlvdXNTZXF1ZW5jZU51bWJlcixcbiAgICAgICAgfSksXG4gICAgICApO1xuXG4gICAgICBzaGFyZC5oZWFydC5sYXN0QmVhdCA9IERhdGUubm93KCk7XG5cbiAgICAgIHNoYXJkLmV2ZW50cy5oZWFydGJlYXQ/LihzaGFyZCk7XG4gICAgfSwgc2hhcmQuaGVhcnQuaW50ZXJ2YWwpO1xuICB9LCBqaXR0ZXIpO1xufVxu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