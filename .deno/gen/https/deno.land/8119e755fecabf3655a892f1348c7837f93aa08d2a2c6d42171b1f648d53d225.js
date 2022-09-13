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
            activities: data.activities.map((activity)=>({
                    name: activity.name,
                    type: activity.type,
                    url: activity.url,
                    created_at: activity.createdAt,
                    timestamps: activity.startedAt || activity.endedAt ? {
                        start: activity.startedAt,
                        end: activity.endedAt
                    } : undefined,
                    application_id: activity.applicationId?.toString(),
                    details: activity.details,
                    state: activity.state,
                    emoji: activity.emoji ? {
                        name: activity.emoji.name,
                        id: activity.emoji.id?.toString(),
                        animated: activity.emoji.animated
                    } : undefined,
                    party: activity.partyId ? {
                        id: activity.partyId.toString(),
                        size: activity.partyMaxSize
                    } : undefined,
                    assets: activity.largeImage || activity.largeText || activity.smallImage || activity.smallText ? {
                        large_image: activity.largeImage,
                        large_text: activity.largeText,
                        small_image: activity.smallImage,
                        small_text: activity.smallText
                    } : undefined,
                    secrets: activity.join || activity.spectate || activity.match ? {
                        join: activity.join,
                        spectate: activity.spectate,
                        match: activity.match
                    } : undefined,
                    instance: activity.instance,
                    flags: activity.flags,
                    buttons: activity.buttons
                })
            ),
            status: data.status
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IEFjdGl2aXR5IH0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybWVycy9hY3Rpdml0eS50c1wiO1xuaW1wb3J0IHsgU3RhdHVzVHlwZXMgfSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtZXJzL3ByZXNlbmNlLnRzXCI7XG5pbXBvcnQgeyBHYXRld2F5T3Bjb2RlcyB9IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRTaGFyZFN0YXR1cyhib3Q6IEJvdCwgc2hhcmRJZDogbnVtYmVyLCBkYXRhOiBTdGF0dXNVcGRhdGUpIHtcbiAgY29uc3Qgc2hhcmQgPSBib3QuZ2F0ZXdheS5tYW5hZ2VyLnNoYXJkcy5nZXQoc2hhcmRJZCk7XG4gIGlmICghc2hhcmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNoYXJkIChpZDogJHtzaGFyZElkfSkgbm90IGZvdW5kLmApO1xuICB9XG5cbiAgc2hhcmQuc2VuZCh7XG4gICAgb3A6IEdhdGV3YXlPcGNvZGVzLlByZXNlbmNlVXBkYXRlLFxuICAgIGQ6IHtcbiAgICAgIHNpbmNlOiBudWxsLFxuICAgICAgYWZrOiBmYWxzZSxcbiAgICAgIGFjdGl2aXRpZXM6IGRhdGEuYWN0aXZpdGllcy5tYXAoKGFjdGl2aXR5KSA9PiAoe1xuICAgICAgICBuYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICB0eXBlOiBhY3Rpdml0eS50eXBlLFxuICAgICAgICB1cmw6IGFjdGl2aXR5LnVybCxcbiAgICAgICAgY3JlYXRlZF9hdDogYWN0aXZpdHkuY3JlYXRlZEF0LFxuICAgICAgICB0aW1lc3RhbXBzOiBhY3Rpdml0eS5zdGFydGVkQXQgfHwgYWN0aXZpdHkuZW5kZWRBdFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgc3RhcnQ6IGFjdGl2aXR5LnN0YXJ0ZWRBdCxcbiAgICAgICAgICAgIGVuZDogYWN0aXZpdHkuZW5kZWRBdCxcbiAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGFwcGxpY2F0aW9uX2lkOiBhY3Rpdml0eS5hcHBsaWNhdGlvbklkPy50b1N0cmluZygpLFxuICAgICAgICBkZXRhaWxzOiBhY3Rpdml0eS5kZXRhaWxzLFxuICAgICAgICBzdGF0ZTogYWN0aXZpdHkuc3RhdGUsXG4gICAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZTogYWN0aXZpdHkuZW1vamkubmFtZSxcbiAgICAgICAgICAgIGlkOiBhY3Rpdml0eS5lbW9qaS5pZD8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGFuaW1hdGVkOiBhY3Rpdml0eS5lbW9qaS5hbmltYXRlZCxcbiAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIHBhcnR5OiBhY3Rpdml0eS5wYXJ0eUlkXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICBpZDogYWN0aXZpdHkucGFydHlJZC50b1N0cmluZygpLFxuICAgICAgICAgICAgc2l6ZTogYWN0aXZpdHkucGFydHlNYXhTaXplLFxuICAgICAgICAgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgYXNzZXRzOiBhY3Rpdml0eS5sYXJnZUltYWdlIHx8IGFjdGl2aXR5LmxhcmdlVGV4dCB8fCBhY3Rpdml0eS5zbWFsbEltYWdlIHx8IGFjdGl2aXR5LnNtYWxsVGV4dFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgbGFyZ2VfaW1hZ2U6IGFjdGl2aXR5LmxhcmdlSW1hZ2UsXG4gICAgICAgICAgICBsYXJnZV90ZXh0OiBhY3Rpdml0eS5sYXJnZVRleHQsXG4gICAgICAgICAgICBzbWFsbF9pbWFnZTogYWN0aXZpdHkuc21hbGxJbWFnZSxcbiAgICAgICAgICAgIHNtYWxsX3RleHQ6IGFjdGl2aXR5LnNtYWxsVGV4dCxcbiAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIHNlY3JldHM6IGFjdGl2aXR5LmpvaW4gfHwgYWN0aXZpdHkuc3BlY3RhdGUgfHwgYWN0aXZpdHkubWF0Y2hcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgIGpvaW46IGFjdGl2aXR5LmpvaW4sXG4gICAgICAgICAgICBzcGVjdGF0ZTogYWN0aXZpdHkuc3BlY3RhdGUsXG4gICAgICAgICAgICBtYXRjaDogYWN0aXZpdHkubWF0Y2gsXG4gICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBpbnN0YW5jZTogYWN0aXZpdHkuaW5zdGFuY2UsXG4gICAgICAgIGZsYWdzOiBhY3Rpdml0eS5mbGFncyxcbiAgICAgICAgYnV0dG9uczogYWN0aXZpdHkuYnV0dG9ucyxcbiAgICAgIH0pKSxcbiAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXG4gICAgfSxcbiAgfSk7XG59XG5cbi8qKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSN1cGRhdGUtc3RhdHVzICovXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c1VwZGF0ZSB7XG4gIC8vIC8qKiBVbml4IHRpbWUgKGluIG1pbGxpc2Vjb25kcykgb2Ygd2hlbiB0aGUgY2xpZW50IHdlbnQgaWRsZSwgb3IgbnVsbCBpZiB0aGUgY2xpZW50IGlzIG5vdCBpZGxlICovXG4gIC8vIHNpbmNlOiBudW1iZXIgfCBudWxsO1xuICAvKiogVGhlIHVzZXIncyBhY3Rpdml0aWVzICovXG4gIGFjdGl2aXRpZXM6IEFjdGl2aXR5W107XG4gIC8qKiBUaGUgdXNlcidzIG5ldyBzdGF0dXMgKi9cbiAgc3RhdHVzOiBTdGF0dXNUeXBlcztcbiAgLy8gLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBjbGllbnQgaXMgYWZrICovXG4gIC8vIGFmazogYm9vbGVhbjtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxTQUFT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