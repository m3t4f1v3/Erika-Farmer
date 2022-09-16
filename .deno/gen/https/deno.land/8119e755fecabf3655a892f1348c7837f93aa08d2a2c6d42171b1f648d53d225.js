import { GatewayOpcodes } from "../../types/shared.ts";
export function editShardStatus(bot, shardId, data) {
    const shard = bot.gateway.manager.shards.get(shardId);
    if (!shard) {
        throw new Error(`Shard (id: ${shardId}) not found.`);
    }
    shard.send({
        op: GatewayOpcodes.PresenceUpdate,
        d: {
            since: null,
            afk: false,
            activities: data.activities.map((activity) => ({
                name: activity.name,
                type: activity.type,
                url: activity.url,
                created_at: activity.createdAt,
                timestamps: activity.startedAt || activity.endedAt
                    ? {
                        start: activity.startedAt,
                        end: activity.endedAt,
                    }
                    : undefined,
                application_id: activity.applicationId?.toString(),
                details: activity.details,
                state: activity.state,
                emoji: activity.emoji
                    ? {
                        name: activity.emoji.name,
                        id: activity.emoji.id?.toString(),
                        animated: activity.emoji.animated,
                    }
                    : undefined,
                party: activity.partyId
                    ? {
                        id: activity.partyId.toString(),
                        size: activity.partyMaxSize,
                    }
                    : undefined,
                assets: activity.largeImage || activity.largeText || activity.smallImage || activity.smallText
                    ? {
                        large_image: activity.largeImage,
                        large_text: activity.largeText,
                        small_image: activity.smallImage,
                        small_text: activity.smallText,
                    }
                    : undefined,
                secrets: activity.join || activity.spectate || activity.match
                    ? {
                        join: activity.join,
                        spectate: activity.spectate,
                        match: activity.match,
                    }
                    : undefined,
                instance: activity.instance,
                flags: activity.flags,
                buttons: activity.buttons,
            })),
            status: data.status,
        },
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdFNoYXJkU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdFNoYXJkU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVEsRUFBRSxPQUFlLEVBQUUsSUFBa0I7SUFDM0UsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLE9BQU8sY0FBYyxDQUFDLENBQUM7S0FDdEQ7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ1QsRUFBRSxFQUFFLGNBQWMsQ0FBQyxjQUFjO1FBQ2pDLENBQUMsRUFBRTtZQUNELEtBQUssRUFBRSxJQUFJO1lBQ1gsR0FBRyxFQUFFLEtBQUs7WUFDVixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtnQkFDbkIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUNuQixHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUc7Z0JBQ2pCLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FBUztnQkFDOUIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLE9BQU87b0JBQ2hELENBQUMsQ0FBQzt3QkFDQSxLQUFLLEVBQUUsUUFBUSxDQUFDLFNBQVM7d0JBQ3pCLEdBQUcsRUFBRSxRQUFRLENBQUMsT0FBTztxQkFDdEI7b0JBQ0QsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2IsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFO2dCQUNsRCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87Z0JBQ3pCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztnQkFDckIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO29CQUNuQixDQUFDLENBQUM7d0JBQ0EsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSTt3QkFDekIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRTt3QkFDakMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUTtxQkFDbEM7b0JBQ0QsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2IsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPO29CQUNyQixDQUFDLENBQUM7d0JBQ0EsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUMvQixJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7cUJBQzVCO29CQUNELENBQUMsQ0FBQyxTQUFTO2dCQUNiLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsU0FBUztvQkFDNUYsQ0FBQyxDQUFDO3dCQUNBLFdBQVcsRUFBRSxRQUFRLENBQUMsVUFBVTt3QkFDaEMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUFTO3dCQUM5QixXQUFXLEVBQUUsUUFBUSxDQUFDLFVBQVU7d0JBQ2hDLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FBUztxQkFDL0I7b0JBQ0QsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2IsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSztvQkFDM0QsQ0FBQyxDQUFDO3dCQUNBLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTt3QkFDbkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO3dCQUMzQixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7cUJBQ3RCO29CQUNELENBQUMsQ0FBQyxTQUFTO2dCQUNiLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtnQkFDM0IsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO2dCQUNyQixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87YUFDMUIsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm90IH0gZnJvbSBcIi4uLy4uL2JvdC50c1wiO1xuaW1wb3J0IHsgQWN0aXZpdHkgfSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtZXJzL2FjdGl2aXR5LnRzXCI7XG5pbXBvcnQgeyBTdGF0dXNUeXBlcyB9IGZyb20gXCIuLi8uLi90cmFuc2Zvcm1lcnMvcHJlc2VuY2UudHNcIjtcbmltcG9ydCB7IEdhdGV3YXlPcGNvZGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3NoYXJlZC50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFNoYXJkU3RhdHVzKGJvdDogQm90LCBzaGFyZElkOiBudW1iZXIsIGRhdGE6IFN0YXR1c1VwZGF0ZSkge1xuICBjb25zdCBzaGFyZCA9IGJvdC5nYXRld2F5Lm1hbmFnZXIuc2hhcmRzLmdldChzaGFyZElkKTtcbiAgaWYgKCFzaGFyZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2hhcmQgKGlkOiAke3NoYXJkSWR9KSBub3QgZm91bmQuYCk7XG4gIH1cblxuICBzaGFyZC5zZW5kKHtcbiAgICBvcDogR2F0ZXdheU9wY29kZXMuUHJlc2VuY2VVcGRhdGUsXG4gICAgZDoge1xuICAgICAgc2luY2U6IG51bGwsXG4gICAgICBhZms6IGZhbHNlLFxuICAgICAgYWN0aXZpdGllczogZGF0YS5hY3Rpdml0aWVzLm1hcCgoYWN0aXZpdHkpID0+ICh7XG4gICAgICAgIG5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgIHR5cGU6IGFjdGl2aXR5LnR5cGUsXG4gICAgICAgIHVybDogYWN0aXZpdHkudXJsLFxuICAgICAgICBjcmVhdGVkX2F0OiBhY3Rpdml0eS5jcmVhdGVkQXQsXG4gICAgICAgIHRpbWVzdGFtcHM6IGFjdGl2aXR5LnN0YXJ0ZWRBdCB8fCBhY3Rpdml0eS5lbmRlZEF0XG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICBzdGFydDogYWN0aXZpdHkuc3RhcnRlZEF0LFxuICAgICAgICAgICAgZW5kOiBhY3Rpdml0eS5lbmRlZEF0LFxuICAgICAgICAgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgYXBwbGljYXRpb25faWQ6IGFjdGl2aXR5LmFwcGxpY2F0aW9uSWQ/LnRvU3RyaW5nKCksXG4gICAgICAgIGRldGFpbHM6IGFjdGl2aXR5LmRldGFpbHMsXG4gICAgICAgIHN0YXRlOiBhY3Rpdml0eS5zdGF0ZSxcbiAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lOiBhY3Rpdml0eS5lbW9qaS5uYW1lLFxuICAgICAgICAgICAgaWQ6IGFjdGl2aXR5LmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IGFjdGl2aXR5LmVtb2ppLmFuaW1hdGVkLFxuICAgICAgICAgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgcGFydHk6IGFjdGl2aXR5LnBhcnR5SWRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIGlkOiBhY3Rpdml0eS5wYXJ0eUlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzaXplOiBhY3Rpdml0eS5wYXJ0eU1heFNpemUsXG4gICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBhc3NldHM6IGFjdGl2aXR5LmxhcmdlSW1hZ2UgfHwgYWN0aXZpdHkubGFyZ2VUZXh0IHx8IGFjdGl2aXR5LnNtYWxsSW1hZ2UgfHwgYWN0aXZpdHkuc21hbGxUZXh0XG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICBsYXJnZV9pbWFnZTogYWN0aXZpdHkubGFyZ2VJbWFnZSxcbiAgICAgICAgICAgIGxhcmdlX3RleHQ6IGFjdGl2aXR5LmxhcmdlVGV4dCxcbiAgICAgICAgICAgIHNtYWxsX2ltYWdlOiBhY3Rpdml0eS5zbWFsbEltYWdlLFxuICAgICAgICAgICAgc21hbGxfdGV4dDogYWN0aXZpdHkuc21hbGxUZXh0LFxuICAgICAgICAgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgc2VjcmV0czogYWN0aXZpdHkuam9pbiB8fCBhY3Rpdml0eS5zcGVjdGF0ZSB8fCBhY3Rpdml0eS5tYXRjaFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgam9pbjogYWN0aXZpdHkuam9pbixcbiAgICAgICAgICAgIHNwZWN0YXRlOiBhY3Rpdml0eS5zcGVjdGF0ZSxcbiAgICAgICAgICAgIG1hdGNoOiBhY3Rpdml0eS5tYXRjaCxcbiAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGluc3RhbmNlOiBhY3Rpdml0eS5pbnN0YW5jZSxcbiAgICAgICAgZmxhZ3M6IGFjdGl2aXR5LmZsYWdzLFxuICAgICAgICBidXR0b25zOiBhY3Rpdml0eS5idXR0b25zLFxuICAgICAgfSkpLFxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICB9LFxuICB9KTtcbn1cblxuLyoqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3RvcGljcy9nYXRld2F5I3VwZGF0ZS1zdGF0dXMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzVXBkYXRlIHtcbiAgLy8gLyoqIFVuaXggdGltZSAoaW4gbWlsbGlzZWNvbmRzKSBvZiB3aGVuIHRoZSBjbGllbnQgd2VudCBpZGxlLCBvciBudWxsIGlmIHRoZSBjbGllbnQgaXMgbm90IGlkbGUgKi9cbiAgLy8gc2luY2U6IG51bWJlciB8IG51bGw7XG4gIC8qKiBUaGUgdXNlcidzIGFjdGl2aXRpZXMgKi9cbiAgYWN0aXZpdGllczogQWN0aXZpdHlbXTtcbiAgLyoqIFRoZSB1c2VyJ3MgbmV3IHN0YXR1cyAqL1xuICBzdGF0dXM6IFN0YXR1c1R5cGVzO1xuICAvLyAvKiogV2hldGhlciBvciBub3QgdGhlIGNsaWVudCBpcyBhZmsgKi9cbiAgLy8gYWZrOiBib29sZWFuO1xufVxuIl19