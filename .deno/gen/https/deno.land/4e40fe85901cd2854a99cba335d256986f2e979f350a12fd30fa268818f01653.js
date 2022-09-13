import { GatewayIntents, GatewayOpcodes } from "../../types/shared.ts";
/**
 * Highly recommended to use this function to fetch members instead of getMember from REST.
 * REST: 50/s global(across all shards) rate limit with ALL requests this included
 * GW(this function): 120/m(PER shard) rate limit. Meaning if you have 8 shards your limit is now 960/m.
 */ export function fetchMembers(bot, guildId, shardId, options) {
    // You can request 1 member without the intent
    // Check if intents is not 0 as proxy ws won't set intents in other instances
    if (bot.intents && (!options?.limit || options.limit > 1) && !(bot.intents & GatewayIntents.GuildMembers)) {
        throw new Error(bot.constants.Errors.MISSING_INTENT_GUILD_MEMBERS);
    }
    if (options?.userIds?.length) {
        options.limit = options.userIds.length;
    }
    return new Promise((resolve)=>{
        const nonce = `${guildId}-${Date.now()}`;
        bot.cache.fetchAllMembersProcessingRequests.set(nonce, resolve);
        const shard = bot.gateway.manager.shards.get(shardId);
        if (!shard) {
            throw new Error(`Shard (id: ${shardId}) not found.`);
        }
        shard.send({
            op: GatewayOpcodes.RequestGuildMembers,
            d: {
                guild_id: guildId.toString(),
                // If a query is provided use it, OR if a limit is NOT provided use ""
                query: options?.query || (options?.limit ? undefined : ""),
                limit: options?.limit || 0,
                presences: options?.presences || false,
                user_ids: options?.userIds?.map((id)=>id.toString()
                ),
                nonce
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IEdhdGV3YXlJbnRlbnRzLCBHYXRld2F5T3Bjb2RlcyB9IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcblxuLyoqXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgZnVuY3Rpb24gdG8gZmV0Y2ggbWVtYmVycyBpbnN0ZWFkIG9mIGdldE1lbWJlciBmcm9tIFJFU1QuXG4gKiBSRVNUOiA1MC9zIGdsb2JhbChhY3Jvc3MgYWxsIHNoYXJkcykgcmF0ZSBsaW1pdCB3aXRoIEFMTCByZXF1ZXN0cyB0aGlzIGluY2x1ZGVkXG4gKiBHVyh0aGlzIGZ1bmN0aW9uKTogMTIwL20oUEVSIHNoYXJkKSByYXRlIGxpbWl0LiBNZWFuaW5nIGlmIHlvdSBoYXZlIDggc2hhcmRzIHlvdXIgbGltaXQgaXMgbm93IDk2MC9tLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNZW1iZXJzKFxuICBib3Q6IEJvdCxcbiAgZ3VpbGRJZDogYmlnaW50LFxuICBzaGFyZElkOiBudW1iZXIsXG4gIG9wdGlvbnM/OiBPbWl0PFJlcXVlc3RHdWlsZE1lbWJlcnMsIFwiZ3VpbGRJZFwiPixcbikge1xuICAvLyBZb3UgY2FuIHJlcXVlc3QgMSBtZW1iZXIgd2l0aG91dCB0aGUgaW50ZW50XG4gIC8vIENoZWNrIGlmIGludGVudHMgaXMgbm90IDAgYXMgcHJveHkgd3Mgd29uJ3Qgc2V0IGludGVudHMgaW4gb3RoZXIgaW5zdGFuY2VzXG4gIGlmIChib3QuaW50ZW50cyAmJiAoIW9wdGlvbnM/LmxpbWl0IHx8IG9wdGlvbnMubGltaXQgPiAxKSAmJiAhKGJvdC5pbnRlbnRzICYgR2F0ZXdheUludGVudHMuR3VpbGRNZW1iZXJzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihib3QuY29uc3RhbnRzLkVycm9ycy5NSVNTSU5HX0lOVEVOVF9HVUlMRF9NRU1CRVJTKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy51c2VySWRzPy5sZW5ndGgpIHtcbiAgICBvcHRpb25zLmxpbWl0ID0gb3B0aW9ucy51c2VySWRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG5vbmNlID0gYCR7Z3VpbGRJZH0tJHtEYXRlLm5vdygpfWA7XG4gICAgYm90LmNhY2hlLmZldGNoQWxsTWVtYmVyc1Byb2Nlc3NpbmdSZXF1ZXN0cy5zZXQobm9uY2UsIHJlc29sdmUpO1xuXG4gICAgY29uc3Qgc2hhcmQgPSBib3QuZ2F0ZXdheS5tYW5hZ2VyLnNoYXJkcy5nZXQoc2hhcmRJZCk7XG4gICAgaWYgKCFzaGFyZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaGFyZCAoaWQ6ICR7c2hhcmRJZH0pIG5vdCBmb3VuZC5gKTtcbiAgICB9XG5cbiAgICBzaGFyZC5zZW5kKHtcbiAgICAgIG9wOiBHYXRld2F5T3Bjb2Rlcy5SZXF1ZXN0R3VpbGRNZW1iZXJzLFxuICAgICAgZDoge1xuICAgICAgICBndWlsZF9pZDogZ3VpbGRJZC50b1N0cmluZygpLFxuICAgICAgICAvLyBJZiBhIHF1ZXJ5IGlzIHByb3ZpZGVkIHVzZSBpdCwgT1IgaWYgYSBsaW1pdCBpcyBOT1QgcHJvdmlkZWQgdXNlIFwiXCJcbiAgICAgICAgcXVlcnk6IG9wdGlvbnM/LnF1ZXJ5IHx8IChvcHRpb25zPy5saW1pdCA/IHVuZGVmaW5lZCA6IFwiXCIpLFxuICAgICAgICBsaW1pdDogb3B0aW9ucz8ubGltaXQgfHwgMCxcbiAgICAgICAgcHJlc2VuY2VzOiBvcHRpb25zPy5wcmVzZW5jZXMgfHwgZmFsc2UsXG4gICAgICAgIHVzZXJfaWRzOiBvcHRpb25zPy51c2VySWRzPy5tYXAoKGlkKSA9PiBpZC50b1N0cmluZygpKSxcbiAgICAgICAgbm9uY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9KSBhcyBQcm9taXNlPHZvaWQ+O1xufVxuXG4vKiogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvdG9waWNzL2dhdGV3YXkjcmVxdWVzdC1ndWlsZC1tZW1iZXJzICovXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RHdWlsZE1lbWJlcnMge1xuICAvKiogaWQgb2YgdGhlIGd1aWxkIHRvIGdldCBtZW1iZXJzIGZvciAqL1xuICBndWlsZElkOiBiaWdpbnQ7XG4gIC8qKiBTdHJpbmcgdGhhdCB1c2VybmFtZSBzdGFydHMgd2l0aCwgb3IgYW4gZW1wdHkgc3RyaW5nIHRvIHJldHVybiBhbGwgbWVtYmVycyAqL1xuICBxdWVyeT86IHN0cmluZztcbiAgLyoqIE1heGltdW0gbnVtYmVyIG9mIG1lbWJlcnMgdG8gc2VuZCBtYXRjaGluZyB0aGUgcXVlcnk7IGEgbGltaXQgb2YgMCBjYW4gYmUgdXNlZCB3aXRoIGFuIGVtcHR5IHN0cmluZyBxdWVyeSB0byByZXR1cm4gYWxsIG1lbWJlcnMgKi9cbiAgbGltaXQ6IG51bWJlcjtcbiAgLyoqIFVzZWQgdG8gc3BlY2lmeSBpZiB3ZSB3YW50IHRoZSBwcmVzZW5jZXMgb2YgdGhlIG1hdGNoZWQgbWVtYmVycyAqL1xuICBwcmVzZW5jZXM/OiBib29sZWFuO1xuICAvKiogVXNlZCB0byBzcGVjaWZ5IHdoaWNoIHVzZXJzIHlvdSB3aXNoIHRvIGZldGNoICovXG4gIHVzZXJJZHM/OiBiaWdpbnRbXTtcbiAgLyoqIE5vbmNlIHRvIGlkZW50aWZ5IHRoZSBHdWlsZCBNZW1iZXJzIENodW5rIHJlc3BvbnNlICovXG4gIG5vbmNlPzogc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMsY0FBYyxFQUFFLGNBQWMsUUFBUSx1QkFBdUIsQ0FBQztBQUV2RTs7OztHQUlHLENBQ0gsT0FBTyxTQUFTLFlBQVksQ0FDMUIsR0FBUSxFQUNSLE9BQWUsRUFDZixPQUFlLEVBQ2YsT0FBOEMsRUFDOUM7SUFDQSw4Q0FBOEM7SUFDOUMsNkVBQTZFO0lBQzdFLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN6RyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7S0FDcEU7SUFFRCxJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FDeEM7SUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFLO1FBQzlCLE1BQU0sS0FBSyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEFBQUM7UUFDekMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWhFLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEFBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ1QsRUFBRSxFQUFFLGNBQWMsQ0FBQyxtQkFBbUI7WUFDdEMsQ0FBQyxFQUFFO2dCQUNELFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUM1QixzRUFBc0U7Z0JBQ3RFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUMxRCxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDO2dCQUMxQixTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsSUFBSSxLQUFLO2dCQUN0QyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUssRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFBQSxDQUFDO2dCQUN0RCxLQUFLO2FBQ047U0FDRixDQUFDLENBQUM7S0FDSixDQUFDLENBQWtCO0NBQ3JCIn0=