export function handleGuildScheduledEventCreate(bot, data, shardId) {
    const payload = data.d;
    bot.events.scheduledEventCreate(bot, bot.transformers.scheduledEvent(bot, payload));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1VJTERfU0NIRURVTEVEX0VWRU5UX0NSRUFURS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdVSUxEX1NDSEVEVUxFRF9FVkVOVF9DUkVBVEUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxVQUFVLCtCQUErQixDQUFDLEdBQVEsRUFBRSxJQUEyQixFQUFFLE9BQWU7SUFDcEcsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQTBCLENBQUM7SUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm90IH0gZnJvbSBcIi4uLy4uLy4uL2JvdC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZEdhdGV3YXlQYXlsb2FkLCBEaXNjb3JkU2NoZWR1bGVkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlR3VpbGRTY2hlZHVsZWRFdmVudENyZWF0ZShib3Q6IEJvdCwgZGF0YTogRGlzY29yZEdhdGV3YXlQYXlsb2FkLCBzaGFyZElkOiBudW1iZXIpIHtcbiAgY29uc3QgcGF5bG9hZCA9IGRhdGEuZCBhcyBEaXNjb3JkU2NoZWR1bGVkRXZlbnQ7XG4gIGJvdC5ldmVudHMuc2NoZWR1bGVkRXZlbnRDcmVhdGUoYm90LCBib3QudHJhbnNmb3JtZXJzLnNjaGVkdWxlZEV2ZW50KGJvdCwgcGF5bG9hZCkpO1xufVxuIl19