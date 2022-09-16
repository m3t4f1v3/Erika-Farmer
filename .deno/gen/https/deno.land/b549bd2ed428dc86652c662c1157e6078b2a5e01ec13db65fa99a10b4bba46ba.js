export async function createGuild(bot, options) {
    const result = await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.GUILDS(), {
        name: options.name,
        afk_channel_id: options.afkChannelId,
        afk_timeout: options.afkTimeout,
        channels: options.channels,
        default_message_notifications: options.defaultMessageNotifications,
        explicit_content_filter: options.explicitContentFilter,
        icon: options.icon,
        roles: options.roles,
        system_channel_flags: options.systemChannelFlags,
        system_channel_id: options.systemChannelId,
        verification_level: options.verificationLevel,
    });
    return bot.transformers.guild(bot, { guild: result, shardId: 0 });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlR3VpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGVHdWlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSxNQUFNLENBQUMsS0FBSyxVQUFVLFdBQVcsQ0FBQyxHQUFRLEVBQUUsT0FBb0I7SUFDOUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBZSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNyRyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsY0FBYyxFQUFFLE9BQU8sQ0FBQyxZQUFZO1FBQ3BDLFdBQVcsRUFBRSxPQUFPLENBQUMsVUFBVTtRQUMvQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7UUFDMUIsNkJBQTZCLEVBQUUsT0FBTyxDQUFDLDJCQUEyQjtRQUNsRSx1QkFBdUIsRUFBRSxPQUFPLENBQUMscUJBQXFCO1FBQ3RELElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGtCQUFrQjtRQUNoRCxpQkFBaUIsRUFBRSxPQUFPLENBQUMsZUFBZTtRQUMxQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsaUJBQWlCO0tBQzlDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybWVycy9jaGFubmVsLnRzXCI7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybWVycy9yb2xlLnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkR3VpbGQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHtcbiAgRGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25MZXZlbHMsXG4gIEV4cGxpY2l0Q29udGVudEZpbHRlckxldmVscyxcbiAgU3lzdGVtQ2hhbm5lbEZsYWdzLFxuICBWZXJpZmljYXRpb25MZXZlbHMsXG59IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcblxuLyoqIENyZWF0ZSBhIG5ldyBndWlsZC4gUmV0dXJucyBhIGd1aWxkIG9iamVjdCBvbiBzdWNjZXNzLiBGaXJlcyBhIEd1aWxkIENyZWF0ZSBHYXRld2F5IGV2ZW50LiBUaGlzIGVuZHBvaW50IGNhbiBiZSB1c2VkIG9ubHkgYnkgYm90cyBpbiBsZXNzIHRoYW4gMTAgZ3VpbGRzLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUd1aWxkKGJvdDogQm90LCBvcHRpb25zOiBDcmVhdGVHdWlsZCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZEd1aWxkPihib3QucmVzdCwgXCJQT1NUXCIsIGJvdC5jb25zdGFudHMucm91dGVzLkdVSUxEUygpLCB7XG4gICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgIGFma19jaGFubmVsX2lkOiBvcHRpb25zLmFma0NoYW5uZWxJZCxcbiAgICBhZmtfdGltZW91dDogb3B0aW9ucy5hZmtUaW1lb3V0LFxuICAgIGNoYW5uZWxzOiBvcHRpb25zLmNoYW5uZWxzLFxuICAgIGRlZmF1bHRfbWVzc2FnZV9ub3RpZmljYXRpb25zOiBvcHRpb25zLmRlZmF1bHRNZXNzYWdlTm90aWZpY2F0aW9ucyxcbiAgICBleHBsaWNpdF9jb250ZW50X2ZpbHRlcjogb3B0aW9ucy5leHBsaWNpdENvbnRlbnRGaWx0ZXIsXG4gICAgaWNvbjogb3B0aW9ucy5pY29uLFxuICAgIHJvbGVzOiBvcHRpb25zLnJvbGVzLFxuICAgIHN5c3RlbV9jaGFubmVsX2ZsYWdzOiBvcHRpb25zLnN5c3RlbUNoYW5uZWxGbGFncyxcbiAgICBzeXN0ZW1fY2hhbm5lbF9pZDogb3B0aW9ucy5zeXN0ZW1DaGFubmVsSWQsXG4gICAgdmVyaWZpY2F0aW9uX2xldmVsOiBvcHRpb25zLnZlcmlmaWNhdGlvbkxldmVsLFxuICB9KTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy5ndWlsZChib3QsIHsgZ3VpbGQ6IHJlc3VsdCwgc2hhcmRJZDogMCB9KTtcbn1cblxuLyoqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZCNjcmVhdGUtZ3VpbGQgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlR3VpbGQge1xuICAvKiogTmFtZSBvZiB0aGUgZ3VpbGQgKDEtMTAwIGNoYXJhY3RlcnMpICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIEJhc2U2NCAxMjh4MTI4IGltYWdlIGZvciB0aGUgZ3VpbGQgaWNvbiAqL1xuICBpY29uPzogc3RyaW5nO1xuICAvKiogVmVyaWZpY2F0aW9uIGxldmVsICovXG4gIHZlcmlmaWNhdGlvbkxldmVsPzogVmVyaWZpY2F0aW9uTGV2ZWxzO1xuICAvKiogRGVmYXVsdCBtZXNzYWdlIG5vdGlmaWNhdGlvbiBsZXZlbCAqL1xuICBkZWZhdWx0TWVzc2FnZU5vdGlmaWNhdGlvbnM/OiBEZWZhdWx0TWVzc2FnZU5vdGlmaWNhdGlvbkxldmVscztcbiAgLyoqIEV4cGxpY2l0IGNvbnRlbnQgZmlsdGVyIGxldmVsICovXG4gIGV4cGxpY2l0Q29udGVudEZpbHRlcj86IEV4cGxpY2l0Q29udGVudEZpbHRlckxldmVscztcbiAgLyoqIE5ldyBndWlsZCByb2xlcyAoZmlyc3Qgcm9sZSBpcyB0aGUgZXZlcnlvbmUgcm9sZSkgKi9cbiAgcm9sZXM/OiBSb2xlW107XG4gIC8qKiBOZXcgZ3VpbGQncyBjaGFubmVscyAqL1xuICBjaGFubmVscz86IFBhcnRpYWw8Q2hhbm5lbD5bXTtcbiAgLyoqIElkIGZvciBhZmsgY2hhbm5lbCAqL1xuICBhZmtDaGFubmVsSWQ/OiBzdHJpbmc7XG4gIC8qKiBBZmsgdGltZW91dCBpbiBzZWNvbmRzICovXG4gIGFma1RpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKiBUaGUgaWQgb2YgdGhlIGNoYW5uZWwgd2hlcmUgZ3VpbGQgbm90aWNlcyBzdWNoIGFzIHdlbGNvbWUgbWVzc2FnZXMgYW5kIGJvb3N0IGV2ZW50cyBhcmUgcG9zdGVkICovXG4gIHN5c3RlbUNoYW5uZWxJZD86IHN0cmluZztcbiAgLyoqIFN5c3RlbSBjaGFubmVsIGZsYWdzICovXG4gIHN5c3RlbUNoYW5uZWxGbGFncz86IFN5c3RlbUNoYW5uZWxGbGFncztcbn1cbiJdfQ==