import { GatewayCloseEventCodes } from "../../types/shared.ts";
import { ShardSocketCloseCodes, ShardState } from "./types.ts";
export async function handleClose(shard, close) {
    //   gateway.debug("GW CLOSED", { shardId, payload: event });
    shard.stopHeartbeating();
    switch(close.code){
        case ShardSocketCloseCodes.TestingFinished:
            {
                shard.state = ShardState.Offline;
                shard.events.disconnected?.(shard);
                return;
            }
        // On these codes a manual start will be done.
        case ShardSocketCloseCodes.Shutdown:
        case ShardSocketCloseCodes.ReIdentifying:
        case ShardSocketCloseCodes.Resharded:
        case ShardSocketCloseCodes.ResumeClosingOldConnection:
        case ShardSocketCloseCodes.ZombiedConnection:
            {
                shard.state = ShardState.Disconnected;
                shard.events.disconnected?.(shard);
                // gateway.debug("GW CLOSED_RECONNECT", { shardId, payload: event });
                return;
            }
        // Gateway connection closes which require a new identify.
        case GatewayCloseEventCodes.UnknownOpcode:
        case GatewayCloseEventCodes.NotAuthenticated:
        case GatewayCloseEventCodes.InvalidSeq:
        case GatewayCloseEventCodes.RateLimited:
        case GatewayCloseEventCodes.SessionTimedOut:
            {
                shard.state = ShardState.Identifying;
                shard.events.disconnected?.(shard);
                return await shard.identify();
            }
        // When these codes are received something went really wrong.
        // On those we cannot start a reconnect attempt.
        case GatewayCloseEventCodes.AuthenticationFailed:
        case GatewayCloseEventCodes.InvalidShard:
        case GatewayCloseEventCodes.ShardingRequired:
        case GatewayCloseEventCodes.InvalidApiVersion:
        case GatewayCloseEventCodes.InvalidIntents:
        case GatewayCloseEventCodes.DisallowedIntents:
            {
                shard.state = ShardState.Offline;
                shard.events.disconnected?.(shard);
                throw new Error(close.reason || "Discord gave no reason! GG! You broke Discord!");
            }
        // Gateway connection closes on which a resume is allowed.
        case GatewayCloseEventCodes.UnknownError:
        case GatewayCloseEventCodes.DecodeError:
        case GatewayCloseEventCodes.AlreadyAuthenticated:
        default:
            {
                shard.state = ShardState.Resuming;
                shard.events.disconnected?.(shard);
                return await shard.resume();
            }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRld2F5Q2xvc2VFdmVudENvZGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3NoYXJlZC50c1wiO1xuaW1wb3J0IHsgU2hhcmQsIFNoYXJkU29ja2V0Q2xvc2VDb2RlcywgU2hhcmRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzLnRzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVDbG9zZShzaGFyZDogU2hhcmQsIGNsb3NlOiBDbG9zZUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vICAgZ2F0ZXdheS5kZWJ1ZyhcIkdXIENMT1NFRFwiLCB7IHNoYXJkSWQsIHBheWxvYWQ6IGV2ZW50IH0pO1xuXG4gIHNoYXJkLnN0b3BIZWFydGJlYXRpbmcoKTtcblxuICBzd2l0Y2ggKGNsb3NlLmNvZGUpIHtcbiAgICBjYXNlIFNoYXJkU29ja2V0Q2xvc2VDb2Rlcy5UZXN0aW5nRmluaXNoZWQ6IHtcbiAgICAgIHNoYXJkLnN0YXRlID0gU2hhcmRTdGF0ZS5PZmZsaW5lO1xuICAgICAgc2hhcmQuZXZlbnRzLmRpc2Nvbm5lY3RlZD8uKHNoYXJkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBPbiB0aGVzZSBjb2RlcyBhIG1hbnVhbCBzdGFydCB3aWxsIGJlIGRvbmUuXG4gICAgY2FzZSBTaGFyZFNvY2tldENsb3NlQ29kZXMuU2h1dGRvd246XG4gICAgY2FzZSBTaGFyZFNvY2tldENsb3NlQ29kZXMuUmVJZGVudGlmeWluZzpcbiAgICBjYXNlIFNoYXJkU29ja2V0Q2xvc2VDb2Rlcy5SZXNoYXJkZWQ6XG4gICAgY2FzZSBTaGFyZFNvY2tldENsb3NlQ29kZXMuUmVzdW1lQ2xvc2luZ09sZENvbm5lY3Rpb246XG4gICAgY2FzZSBTaGFyZFNvY2tldENsb3NlQ29kZXMuWm9tYmllZENvbm5lY3Rpb246IHtcbiAgICAgIHNoYXJkLnN0YXRlID0gU2hhcmRTdGF0ZS5EaXNjb25uZWN0ZWQ7XG4gICAgICBzaGFyZC5ldmVudHMuZGlzY29ubmVjdGVkPy4oc2hhcmQpO1xuXG4gICAgICAvLyBnYXRld2F5LmRlYnVnKFwiR1cgQ0xPU0VEX1JFQ09OTkVDVFwiLCB7IHNoYXJkSWQsIHBheWxvYWQ6IGV2ZW50IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBHYXRld2F5IGNvbm5lY3Rpb24gY2xvc2VzIHdoaWNoIHJlcXVpcmUgYSBuZXcgaWRlbnRpZnkuXG4gICAgY2FzZSBHYXRld2F5Q2xvc2VFdmVudENvZGVzLlVua25vd25PcGNvZGU6XG4gICAgY2FzZSBHYXRld2F5Q2xvc2VFdmVudENvZGVzLk5vdEF1dGhlbnRpY2F0ZWQ6XG4gICAgY2FzZSBHYXRld2F5Q2xvc2VFdmVudENvZGVzLkludmFsaWRTZXE6XG4gICAgY2FzZSBHYXRld2F5Q2xvc2VFdmVudENvZGVzLlJhdGVMaW1pdGVkOlxuICAgIGNhc2UgR2F0ZXdheUNsb3NlRXZlbnRDb2Rlcy5TZXNzaW9uVGltZWRPdXQ6IHtcbiAgICAgIHNoYXJkLnN0YXRlID0gU2hhcmRTdGF0ZS5JZGVudGlmeWluZztcbiAgICAgIHNoYXJkLmV2ZW50cy5kaXNjb25uZWN0ZWQ/LihzaGFyZCk7XG5cbiAgICAgIHJldHVybiBhd2FpdCBzaGFyZC5pZGVudGlmeSgpO1xuICAgIH1cbiAgICAvLyBXaGVuIHRoZXNlIGNvZGVzIGFyZSByZWNlaXZlZCBzb21ldGhpbmcgd2VudCByZWFsbHkgd3JvbmcuXG4gICAgLy8gT24gdGhvc2Ugd2UgY2Fubm90IHN0YXJ0IGEgcmVjb25uZWN0IGF0dGVtcHQuXG4gICAgY2FzZSBHYXRld2F5Q2xvc2VFdmVudENvZGVzLkF1dGhlbnRpY2F0aW9uRmFpbGVkOlxuICAgIGNhc2UgR2F0ZXdheUNsb3NlRXZlbnRDb2Rlcy5JbnZhbGlkU2hhcmQ6XG4gICAgY2FzZSBHYXRld2F5Q2xvc2VFdmVudENvZGVzLlNoYXJkaW5nUmVxdWlyZWQ6XG4gICAgY2FzZSBHYXRld2F5Q2xvc2VFdmVudENvZGVzLkludmFsaWRBcGlWZXJzaW9uOlxuICAgIGNhc2UgR2F0ZXdheUNsb3NlRXZlbnRDb2Rlcy5JbnZhbGlkSW50ZW50czpcbiAgICBjYXNlIEdhdGV3YXlDbG9zZUV2ZW50Q29kZXMuRGlzYWxsb3dlZEludGVudHM6IHtcbiAgICAgIHNoYXJkLnN0YXRlID0gU2hhcmRTdGF0ZS5PZmZsaW5lO1xuICAgICAgc2hhcmQuZXZlbnRzLmRpc2Nvbm5lY3RlZD8uKHNoYXJkKTtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGNsb3NlLnJlYXNvbiB8fCBcIkRpc2NvcmQgZ2F2ZSBubyByZWFzb24hIEdHISBZb3UgYnJva2UgRGlzY29yZCFcIik7XG4gICAgfVxuICAgIC8vIEdhdGV3YXkgY29ubmVjdGlvbiBjbG9zZXMgb24gd2hpY2ggYSByZXN1bWUgaXMgYWxsb3dlZC5cbiAgICBjYXNlIEdhdGV3YXlDbG9zZUV2ZW50Q29kZXMuVW5rbm93bkVycm9yOlxuICAgIGNhc2UgR2F0ZXdheUNsb3NlRXZlbnRDb2Rlcy5EZWNvZGVFcnJvcjpcbiAgICBjYXNlIEdhdGV3YXlDbG9zZUV2ZW50Q29kZXMuQWxyZWFkeUF1dGhlbnRpY2F0ZWQ6XG4gICAgZGVmYXVsdDoge1xuICAgICAgc2hhcmQuc3RhdGUgPSBTaGFyZFN0YXRlLlJlc3VtaW5nO1xuICAgICAgc2hhcmQuZXZlbnRzLmRpc2Nvbm5lY3RlZD8uKHNoYXJkKTtcblxuICAgICAgcmV0dXJuIGF3YWl0IHNoYXJkLnJlc3VtZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJTQUFTLHNCQUFzQixRQUFRLHVCQUF1QixDQUFDO0FBQy9ELFNBQWdCLHFCQUFxQixFQUFFLFVBQVUsUUFBUSxZQUFZLENBQUM7QUFFdEUsT0FBTyxlQUFlLFdBQVcsQ0FBQyxLQUFZLEVBQUUsS0FBaUIsRUFBaUI7SUFDaEYsNkRBQTZEO0lBRTdELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRXpCLE9BQVEsS0FBSyxDQUFDLElBQUk7UUFDaEIsS0FBSyxxQkFBcUIsQ0FBQyxlQUFlO1lBQUU7Z0JBQzFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRW5DLE9BQU87YUFDUjtRQUNELDhDQUE4QztRQUM5QyxLQUFLLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztRQUNwQyxLQUFLLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztRQUN6QyxLQUFLLHFCQUFxQixDQUFDLFNBQVMsQ0FBQztRQUNyQyxLQUFLLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDO1FBQ3RELEtBQUsscUJBQXFCLENBQUMsaUJBQWlCO1lBQUU7Z0JBQzVDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztnQkFDdEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRW5DLHFFQUFxRTtnQkFDckUsT0FBTzthQUNSO1FBQ0QsMERBQTBEO1FBQzFELEtBQUssc0JBQXNCLENBQUMsYUFBYSxDQUFDO1FBQzFDLEtBQUssc0JBQXNCLENBQUMsZ0JBQWdCLENBQUM7UUFDN0MsS0FBSyxzQkFBc0IsQ0FBQyxVQUFVLENBQUM7UUFDdkMsS0FBSyxzQkFBc0IsQ0FBQyxXQUFXLENBQUM7UUFDeEMsS0FBSyxzQkFBc0IsQ0FBQyxlQUFlO1lBQUU7Z0JBQzNDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRW5DLE9BQU8sTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDL0I7UUFDRCw2REFBNkQ7UUFDN0QsZ0RBQWdEO1FBQ2hELEtBQUssc0JBQXNCLENBQUMsb0JBQW9CLENBQUM7UUFDakQsS0FBSyxzQkFBc0IsQ0FBQyxZQUFZLENBQUM7UUFDekMsS0FBSyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QyxLQUFLLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDO1FBQzlDLEtBQUssc0JBQXNCLENBQUMsY0FBYyxDQUFDO1FBQzNDLEtBQUssc0JBQXNCLENBQUMsaUJBQWlCO1lBQUU7Z0JBQzdDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBRW5DLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxnREFBZ0QsQ0FBQyxDQUFDO2FBQ25GO1FBQ0QsMERBQTBEO1FBQzFELEtBQUssc0JBQXNCLENBQUMsWUFBWSxDQUFDO1FBQ3pDLEtBQUssc0JBQXNCLENBQUMsV0FBVyxDQUFDO1FBQ3hDLEtBQUssc0JBQXNCLENBQUMsb0JBQW9CLENBQUM7UUFDakQ7WUFBUztnQkFDUCxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUVuQyxPQUFPLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO0tBQ0Y7Q0FDRiJ9