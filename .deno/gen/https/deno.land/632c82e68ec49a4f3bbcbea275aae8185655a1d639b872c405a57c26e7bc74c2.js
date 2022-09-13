import { GatewayOpcodes } from "../../types/shared.ts";
import { ShardSocketCloseCodes, ShardState } from "./types.ts";
export async function resume(shard) {
    //   gateway.debug("GW RESUMING", { shardId });
    // It has been requested to resume the Shards session.
    // It's possible that the shard is still connected with Discord's gateway therefore we need to forcefully close it.
    if (shard.isOpen()) {
        shard.close(ShardSocketCloseCodes.ResumeClosingOldConnection, "Reconnecting the shard, closing old connection.");
    }
    // Shard has never identified, so we cannot resume.
    if (!shard.sessionId) {
        // gateway.debug(
        //   "GW DEBUG",
        //   `[Error] Trying to resume a shard (id: ${shardId}) that was not first identified.`,
        // );
        return await shard.identify();
    // throw new Error(`[SHARD] Trying to resume a shard (id: ${shard.id}) which was never identified`);
    }
    shard.state = ShardState.Resuming;
    // Before we can resume, we need to create a new connection with Discord's gateway.
    await shard.connect();
    shard.send({
        op: GatewayOpcodes.Resume,
        d: {
            token: `Bot ${shard.gatewayConfig.token}`,
            session_id: shard.sessionId,
            seq: shard.previousSequenceNumber ?? 0
        }
    }, true);
    return new Promise((resolve)=>{
        shard.resolves.set("RESUMED", ()=>resolve()
        );
        // If it is attempted to resume with an invalid session id,
        // Discord sends an invalid session payload
        // Not erroring here since it is easy that this happens, also it would be not catchable
        shard.resolves.set("INVALID_SESSION", ()=>{
            shard.resolves.delete("RESUMED");
            resolve();
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRld2F5T3Bjb2RlcyB9IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcbmltcG9ydCB7IFNoYXJkLCBTaGFyZFNvY2tldENsb3NlQ29kZXMsIFNoYXJkU3RhdGUgfSBmcm9tIFwiLi90eXBlcy50c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdW1lKHNoYXJkOiBTaGFyZCk6IFByb21pc2U8dm9pZD4ge1xuICAvLyAgIGdhdGV3YXkuZGVidWcoXCJHVyBSRVNVTUlOR1wiLCB7IHNoYXJkSWQgfSk7XG4gIC8vIEl0IGhhcyBiZWVuIHJlcXVlc3RlZCB0byByZXN1bWUgdGhlIFNoYXJkcyBzZXNzaW9uLlxuICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHNoYXJkIGlzIHN0aWxsIGNvbm5lY3RlZCB3aXRoIERpc2NvcmQncyBnYXRld2F5IHRoZXJlZm9yZSB3ZSBuZWVkIHRvIGZvcmNlZnVsbHkgY2xvc2UgaXQuXG4gIGlmIChzaGFyZC5pc09wZW4oKSkge1xuICAgIHNoYXJkLmNsb3NlKFNoYXJkU29ja2V0Q2xvc2VDb2Rlcy5SZXN1bWVDbG9zaW5nT2xkQ29ubmVjdGlvbiwgXCJSZWNvbm5lY3RpbmcgdGhlIHNoYXJkLCBjbG9zaW5nIG9sZCBjb25uZWN0aW9uLlwiKTtcbiAgfVxuXG4gIC8vIFNoYXJkIGhhcyBuZXZlciBpZGVudGlmaWVkLCBzbyB3ZSBjYW5ub3QgcmVzdW1lLlxuICBpZiAoIXNoYXJkLnNlc3Npb25JZCkge1xuICAgIC8vIGdhdGV3YXkuZGVidWcoXG4gICAgLy8gICBcIkdXIERFQlVHXCIsXG4gICAgLy8gICBgW0Vycm9yXSBUcnlpbmcgdG8gcmVzdW1lIGEgc2hhcmQgKGlkOiAke3NoYXJkSWR9KSB0aGF0IHdhcyBub3QgZmlyc3QgaWRlbnRpZmllZC5gLFxuICAgIC8vICk7XG5cbiAgICByZXR1cm4gYXdhaXQgc2hhcmQuaWRlbnRpZnkoKTtcblxuICAgIC8vIHRocm93IG5ldyBFcnJvcihgW1NIQVJEXSBUcnlpbmcgdG8gcmVzdW1lIGEgc2hhcmQgKGlkOiAke3NoYXJkLmlkfSkgd2hpY2ggd2FzIG5ldmVyIGlkZW50aWZpZWRgKTtcbiAgfVxuXG4gIHNoYXJkLnN0YXRlID0gU2hhcmRTdGF0ZS5SZXN1bWluZztcblxuICAvLyBCZWZvcmUgd2UgY2FuIHJlc3VtZSwgd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB3aXRoIERpc2NvcmQncyBnYXRld2F5LlxuICBhd2FpdCBzaGFyZC5jb25uZWN0KCk7XG5cbiAgc2hhcmQuc2VuZCh7XG4gICAgb3A6IEdhdGV3YXlPcGNvZGVzLlJlc3VtZSxcbiAgICBkOiB7XG4gICAgICB0b2tlbjogYEJvdCAke3NoYXJkLmdhdGV3YXlDb25maWcudG9rZW59YCxcbiAgICAgIHNlc3Npb25faWQ6IHNoYXJkLnNlc3Npb25JZCxcbiAgICAgIHNlcTogc2hhcmQucHJldmlvdXNTZXF1ZW5jZU51bWJlciA/PyAwLFxuICAgIH0sXG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNoYXJkLnJlc29sdmVzLnNldChcIlJFU1VNRURcIiwgKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICAvLyBJZiBpdCBpcyBhdHRlbXB0ZWQgdG8gcmVzdW1lIHdpdGggYW4gaW52YWxpZCBzZXNzaW9uIGlkLFxuICAgIC8vIERpc2NvcmQgc2VuZHMgYW4gaW52YWxpZCBzZXNzaW9uIHBheWxvYWRcbiAgICAvLyBOb3QgZXJyb3JpbmcgaGVyZSBzaW5jZSBpdCBpcyBlYXN5IHRoYXQgdGhpcyBoYXBwZW5zLCBhbHNvIGl0IHdvdWxkIGJlIG5vdCBjYXRjaGFibGVcbiAgICBzaGFyZC5yZXNvbHZlcy5zZXQoXCJJTlZBTElEX1NFU1NJT05cIiwgKCkgPT4ge1xuICAgICAgc2hhcmQucmVzb2x2ZXMuZGVsZXRlKFwiUkVTVU1FRFwiKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlNBQVMsY0FBYyxRQUFRLHVCQUF1QixDQUFDO0FBQ3ZELFNBQWdCLHFCQUFxQixFQUFFLFVBQVUsUUFBUSxZQUFZLENBQUM7QUFFdEUsT0FBTyxlQUFlLE1BQU0sQ0FBQyxLQUFZLEVBQWlCO0lBQ3hELCtDQUErQztJQUMvQyxzREFBc0Q7SUFDdEQsbUhBQW1IO0lBQ25ILElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLEVBQUUsaURBQWlELENBQUMsQ0FBQztLQUNsSDtJQUVELG1EQUFtRDtJQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtRQUNwQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHdGQUF3RjtRQUN4RixLQUFLO1FBRUwsT0FBTyxNQUFNLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUU5QixvR0FBb0c7S0FDckc7SUFFRCxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFFbEMsbUZBQW1GO0lBQ25GLE1BQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXRCLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDVCxFQUFFLEVBQUUsY0FBYyxDQUFDLE1BQU07UUFDekIsQ0FBQyxFQUFFO1lBQ0QsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsVUFBVSxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzNCLEdBQUcsRUFBRSxLQUFLLENBQUMsc0JBQXNCLElBQUksQ0FBQztTQUN2QztLQUNGLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFVCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFLO1FBQzlCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFNLE9BQU8sRUFBRTtRQUFBLENBQUMsQ0FBQztRQUMvQywyREFBMkQ7UUFDM0QsMkNBQTJDO1FBQzNDLHVGQUF1RjtRQUN2RixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFNO1lBQzFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFDO0NBQ0oifQ==