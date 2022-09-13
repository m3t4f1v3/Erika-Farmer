import { ShardState } from "./types.ts";
export async function connect(shard) {
    // Only set the shard to `Connecting` state,
    // if the connection request does not come from an identify or resume action.
    if (![
        ShardState.Identifying,
        ShardState.Resuming
    ].includes(shard.state)) {
        shard.state = ShardState.Connecting;
    }
    shard.events.connecting?.(shard);
    // Explicitly setting the encoding to json, since we do not support ETF.
    const socket = new WebSocket(`${shard.gatewayConfig.url}/?v=${shard.gatewayConfig.version}&encoding=json`);
    shard.socket = socket;
    // TODO: proper event handling
    socket.onerror = (event)=>console.log({
            error: event
        })
    ;
    socket.onclose = (event)=>shard.handleClose(event)
    ;
    socket.onmessage = (message)=>shard.handleMessage(message)
    ;
    return new Promise((resolve)=>{
        socket.onopen = ()=>{
            // Only set the shard to `Unidentified` state,
            // if the connection request does not come from an identify or resume action.
            if (![
                ShardState.Identifying,
                ShardState.Resuming
            ].includes(shard.state)) {
                shard.state = ShardState.Unidentified;
            }
            shard.events.connected?.(shard);
            resolve();
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFyZCwgU2hhcmRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzLnRzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0KHNoYXJkOiBTaGFyZCk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBPbmx5IHNldCB0aGUgc2hhcmQgdG8gYENvbm5lY3RpbmdgIHN0YXRlLFxuICAvLyBpZiB0aGUgY29ubmVjdGlvbiByZXF1ZXN0IGRvZXMgbm90IGNvbWUgZnJvbSBhbiBpZGVudGlmeSBvciByZXN1bWUgYWN0aW9uLlxuICBpZiAoIVtTaGFyZFN0YXRlLklkZW50aWZ5aW5nLCBTaGFyZFN0YXRlLlJlc3VtaW5nXS5pbmNsdWRlcyhzaGFyZC5zdGF0ZSkpIHtcbiAgICBzaGFyZC5zdGF0ZSA9IFNoYXJkU3RhdGUuQ29ubmVjdGluZztcbiAgfVxuICBzaGFyZC5ldmVudHMuY29ubmVjdGluZz8uKHNoYXJkKTtcblxuICAvLyBFeHBsaWNpdGx5IHNldHRpbmcgdGhlIGVuY29kaW5nIHRvIGpzb24sIHNpbmNlIHdlIGRvIG5vdCBzdXBwb3J0IEVURi5cbiAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldChgJHtzaGFyZC5nYXRld2F5Q29uZmlnLnVybH0vP3Y9JHtzaGFyZC5nYXRld2F5Q29uZmlnLnZlcnNpb259JmVuY29kaW5nPWpzb25gKTtcbiAgc2hhcmQuc29ja2V0ID0gc29ja2V0O1xuXG4gIC8vIFRPRE86IHByb3BlciBldmVudCBoYW5kbGluZ1xuICBzb2NrZXQub25lcnJvciA9IChldmVudCkgPT4gY29uc29sZS5sb2coeyBlcnJvcjogZXZlbnQgfSk7XG5cbiAgc29ja2V0Lm9uY2xvc2UgPSAoZXZlbnQpID0+IHNoYXJkLmhhbmRsZUNsb3NlKGV2ZW50KTtcblxuICBzb2NrZXQub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHNoYXJkLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIC8vIE9ubHkgc2V0IHRoZSBzaGFyZCB0byBgVW5pZGVudGlmaWVkYCBzdGF0ZSxcbiAgICAgIC8vIGlmIHRoZSBjb25uZWN0aW9uIHJlcXVlc3QgZG9lcyBub3QgY29tZSBmcm9tIGFuIGlkZW50aWZ5IG9yIHJlc3VtZSBhY3Rpb24uXG4gICAgICBpZiAoIVtTaGFyZFN0YXRlLklkZW50aWZ5aW5nLCBTaGFyZFN0YXRlLlJlc3VtaW5nXS5pbmNsdWRlcyhzaGFyZC5zdGF0ZSkpIHtcbiAgICAgICAgc2hhcmQuc3RhdGUgPSBTaGFyZFN0YXRlLlVuaWRlbnRpZmllZDtcbiAgICAgIH1cbiAgICAgIHNoYXJkLmV2ZW50cy5jb25uZWN0ZWQ/LihzaGFyZCk7XG5cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiU0FBZ0IsVUFBVSxRQUFRLFlBQVksQ0FBQztBQUUvQyxPQUFPLGVBQWUsT0FBTyxDQUFDLEtBQVksRUFBaUI7SUFDekQsNENBQTRDO0lBQzVDLDZFQUE2RTtJQUM3RSxJQUFJLENBQUM7UUFBQyxVQUFVLENBQUMsV0FBVztRQUFFLFVBQVUsQ0FBQyxRQUFRO0tBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hFLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztLQUNyQztJQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBRWpDLHdFQUF3RTtJQUN4RSxNQUFNLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEFBQUM7SUFDM0csS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFFdEIsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEdBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUFFLEtBQUssRUFBRSxLQUFLO1NBQUUsQ0FBQztJQUFBLENBQUM7SUFFMUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFFckQsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLE9BQU8sR0FBSyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUFBLENBQUM7SUFFN0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sR0FBSztRQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQU07WUFDcEIsOENBQThDO1lBQzlDLDZFQUE2RTtZQUM3RSxJQUFJLENBQUM7Z0JBQUMsVUFBVSxDQUFDLFdBQVc7Z0JBQUUsVUFBVSxDQUFDLFFBQVE7YUFBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hFLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQzthQUN2QztZQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBRWhDLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQztLQUNILENBQUMsQ0FBQztDQUNKIn0=