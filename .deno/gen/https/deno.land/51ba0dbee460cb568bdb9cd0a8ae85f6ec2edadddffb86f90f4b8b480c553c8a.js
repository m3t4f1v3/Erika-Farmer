import { GatewayOpcodes } from "../../types/shared.ts";
import { ShardSocketCloseCodes, ShardState } from "./types.ts";
export async function identify(shard) {
    // A new identify has been requested even though there is already a connection open.
    // Therefore we need to close the old connection and heartbeating before creating a new one.
    if (shard.state === ShardState.Connected) {
        console.log("CLOSING EXISTING SHARD: #" + shard.id);
        shard.close(ShardSocketCloseCodes.ReIdentifying, "Re-identifying closure of old connection.");
    }
    shard.state = ShardState.Identifying;
    shard.events.identifying?.(shard);
    // It is possible that the shard is in Heartbeating state but not identified,
    // so check whether there is already a gateway connection existing.
    // If not we need to create one before we identify.
    if (!shard.isOpen()) {
        await shard.connect();
    }
    // Wait until an identify is free for this shard.
    await shard.requestIdentify();
    shard.send({
        op: GatewayOpcodes.Identify,
        d: {
            token: `Bot ${shard.gatewayConfig.token}`,
            compress: shard.gatewayConfig.compress,
            properties: shard.gatewayConfig.properties,
            intents: shard.gatewayConfig.intents,
            shard: [
                shard.id,
                shard.totalShards
            ],
            presence: await shard.makePresence?.(shard.id)
        }
    }, true);
    return new Promise((resolve)=>{
        shard.resolves.set("READY", ()=>{
            shard.events.identified?.(shard);
            resolve();
        });
        // When identifying too fast,
        // Discord sends an invalid session payload.
        // This can safely be ignored though and the shard starts a new identify action.
        shard.resolves.set("INVALID_SESSION", ()=>{
            shard.resolves.delete("READY");
            resolve();
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRld2F5T3Bjb2RlcyB9IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcbmltcG9ydCB7IFNoYXJkLCBTaGFyZFNvY2tldENsb3NlQ29kZXMsIFNoYXJkU3RhdGUgfSBmcm9tIFwiLi90eXBlcy50c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaWRlbnRpZnkoc2hhcmQ6IFNoYXJkKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIEEgbmV3IGlkZW50aWZ5IGhhcyBiZWVuIHJlcXVlc3RlZCBldmVuIHRob3VnaCB0aGVyZSBpcyBhbHJlYWR5IGEgY29ubmVjdGlvbiBvcGVuLlxuICAvLyBUaGVyZWZvcmUgd2UgbmVlZCB0byBjbG9zZSB0aGUgb2xkIGNvbm5lY3Rpb24gYW5kIGhlYXJ0YmVhdGluZyBiZWZvcmUgY3JlYXRpbmcgYSBuZXcgb25lLlxuICBpZiAoc2hhcmQuc3RhdGUgPT09IFNoYXJkU3RhdGUuQ29ubmVjdGVkKSB7XG4gICAgY29uc29sZS5sb2coXCJDTE9TSU5HIEVYSVNUSU5HIFNIQVJEOiAjXCIgKyBzaGFyZC5pZCk7XG4gICAgc2hhcmQuY2xvc2UoU2hhcmRTb2NrZXRDbG9zZUNvZGVzLlJlSWRlbnRpZnlpbmcsIFwiUmUtaWRlbnRpZnlpbmcgY2xvc3VyZSBvZiBvbGQgY29ubmVjdGlvbi5cIik7XG4gIH1cblxuICBzaGFyZC5zdGF0ZSA9IFNoYXJkU3RhdGUuSWRlbnRpZnlpbmc7XG4gIHNoYXJkLmV2ZW50cy5pZGVudGlmeWluZz8uKHNoYXJkKTtcblxuICAvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IHRoZSBzaGFyZCBpcyBpbiBIZWFydGJlYXRpbmcgc3RhdGUgYnV0IG5vdCBpZGVudGlmaWVkLFxuICAvLyBzbyBjaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFscmVhZHkgYSBnYXRld2F5IGNvbm5lY3Rpb24gZXhpc3RpbmcuXG4gIC8vIElmIG5vdCB3ZSBuZWVkIHRvIGNyZWF0ZSBvbmUgYmVmb3JlIHdlIGlkZW50aWZ5LlxuICBpZiAoIXNoYXJkLmlzT3BlbigpKSB7XG4gICAgYXdhaXQgc2hhcmQuY29ubmVjdCgpO1xuICB9XG5cbiAgLy8gV2FpdCB1bnRpbCBhbiBpZGVudGlmeSBpcyBmcmVlIGZvciB0aGlzIHNoYXJkLlxuICBhd2FpdCBzaGFyZC5yZXF1ZXN0SWRlbnRpZnkoKTtcblxuICBzaGFyZC5zZW5kKHtcbiAgICBvcDogR2F0ZXdheU9wY29kZXMuSWRlbnRpZnksXG4gICAgZDoge1xuICAgICAgdG9rZW46IGBCb3QgJHtzaGFyZC5nYXRld2F5Q29uZmlnLnRva2VufWAsXG4gICAgICBjb21wcmVzczogc2hhcmQuZ2F0ZXdheUNvbmZpZy5jb21wcmVzcyxcbiAgICAgIHByb3BlcnRpZXM6IHNoYXJkLmdhdGV3YXlDb25maWcucHJvcGVydGllcyxcbiAgICAgIGludGVudHM6IHNoYXJkLmdhdGV3YXlDb25maWcuaW50ZW50cyxcbiAgICAgIHNoYXJkOiBbc2hhcmQuaWQsIHNoYXJkLnRvdGFsU2hhcmRzXSxcbiAgICAgIHByZXNlbmNlOiBhd2FpdCBzaGFyZC5tYWtlUHJlc2VuY2U/LihzaGFyZC5pZCksXG4gICAgfSxcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2hhcmQucmVzb2x2ZXMuc2V0KFwiUkVBRFlcIiwgKCkgPT4ge1xuICAgICAgc2hhcmQuZXZlbnRzLmlkZW50aWZpZWQ/LihzaGFyZCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgLy8gV2hlbiBpZGVudGlmeWluZyB0b28gZmFzdCxcbiAgICAvLyBEaXNjb3JkIHNlbmRzIGFuIGludmFsaWQgc2Vzc2lvbiBwYXlsb2FkLlxuICAgIC8vIFRoaXMgY2FuIHNhZmVseSBiZSBpZ25vcmVkIHRob3VnaCBhbmQgdGhlIHNoYXJkIHN0YXJ0cyBhIG5ldyBpZGVudGlmeSBhY3Rpb24uXG4gICAgc2hhcmQucmVzb2x2ZXMuc2V0KFwiSU5WQUxJRF9TRVNTSU9OXCIsICgpID0+IHtcbiAgICAgIHNoYXJkLnJlc29sdmVzLmRlbGV0ZShcIlJFQURZXCIpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiU0FBUyxjQUFjLFFBQVEsdUJBQXVCLENBQUM7QUFDdkQsU0FBZ0IscUJBQXFCLEVBQUUsVUFBVSxRQUFRLFlBQVksQ0FBQztBQUV0RSxPQUFPLGVBQWUsUUFBUSxDQUFDLEtBQVksRUFBaUI7SUFDMUQsb0ZBQW9GO0lBQ3BGLDRGQUE0RjtJQUM1RixJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO0tBQy9GO0lBRUQsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBRWxDLDZFQUE2RTtJQUM3RSxtRUFBbUU7SUFDbkUsbURBQW1EO0lBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkIsTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDdkI7SUFFRCxpREFBaUQ7SUFDakQsTUFBTSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFOUIsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNULEVBQUUsRUFBRSxjQUFjLENBQUMsUUFBUTtRQUMzQixDQUFDLEVBQUU7WUFDRCxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxRQUFRLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBQ3RDLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVU7WUFDMUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTztZQUNwQyxLQUFLLEVBQUU7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQUUsS0FBSyxDQUFDLFdBQVc7YUFBQztZQUNwQyxRQUFRLEVBQUUsTUFBTSxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDL0M7S0FDRixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBSztRQUM5QixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBTTtZQUNoQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQztRQUNILDZCQUE2QjtRQUM3Qiw0Q0FBNEM7UUFDNUMsZ0ZBQWdGO1FBQ2hGLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQU07WUFDMUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7Q0FDSiJ9