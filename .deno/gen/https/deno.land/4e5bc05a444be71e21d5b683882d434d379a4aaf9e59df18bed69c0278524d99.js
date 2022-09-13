/** Get a guild scheduled event. */ export async function getScheduledEvent(bot, guildId, eventId, options) {
    const event = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.GUILD_SCHEDULED_EVENT(guildId, eventId, options?.withUserCount));
    return bot.transformers.scheduledEvent(bot, event);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkU2NoZWR1bGVkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG4vKiogR2V0IGEgZ3VpbGQgc2NoZWR1bGVkIGV2ZW50LiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNjaGVkdWxlZEV2ZW50KFxuICBib3Q6IEJvdCxcbiAgZ3VpbGRJZDogYmlnaW50LFxuICBldmVudElkOiBiaWdpbnQsXG4gIG9wdGlvbnM/OiB7IHdpdGhVc2VyQ291bnQ/OiBib29sZWFuIH0sXG4pIHtcbiAgY29uc3QgZXZlbnQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZFNjaGVkdWxlZEV2ZW50PihcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkdVSUxEX1NDSEVEVUxFRF9FVkVOVChndWlsZElkLCBldmVudElkLCBvcHRpb25zPy53aXRoVXNlckNvdW50KSxcbiAgKTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy5zY2hlZHVsZWRFdmVudChib3QsIGV2ZW50KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxtQ0FBbUMsQ0FDbkMsT0FBTyxlQUFlLGlCQUFpQixDQUNyQyxHQUFRLEVBQ1IsT0FBZSxFQUNmLE9BQWUsRUFDZixPQUFxQyxFQUNyQztJQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3BDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUNyRixBQUFDO0lBRUYsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDcEQifQ==