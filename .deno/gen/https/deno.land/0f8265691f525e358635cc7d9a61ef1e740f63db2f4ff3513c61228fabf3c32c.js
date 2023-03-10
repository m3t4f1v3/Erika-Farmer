export async function handleChannelDelete(bot, data) {
    const payload = data.d;
    if (!payload.guild_id)
        return;
    bot.events.channelDelete(bot, bot.transformers.channel(bot, {
        channel: payload,
        guildId: payload.guild_id ? bot.transformers.snowflake(payload.guild_id) : undefined,
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0hBTk5FTF9ERUxFVEUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDSEFOTkVMX0RFTEVURS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLENBQUMsS0FBSyxVQUFVLG1CQUFtQixDQUFDLEdBQVEsRUFBRSxJQUEyQjtJQUM3RSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBbUIsQ0FBQztJQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7UUFBRSxPQUFPO0lBRTlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUN0QixHQUFHLEVBQ0gsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1FBQzVCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE9BQU8sRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDckYsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkQ2hhbm5lbCwgRGlzY29yZEdhdGV3YXlQYXlsb2FkIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoYW5uZWxEZWxldGUoYm90OiBCb3QsIGRhdGE6IERpc2NvcmRHYXRld2F5UGF5bG9hZCkge1xuICBjb25zdCBwYXlsb2FkID0gZGF0YS5kIGFzIERpc2NvcmRDaGFubmVsO1xuICBpZiAoIXBheWxvYWQuZ3VpbGRfaWQpIHJldHVybjtcblxuICBib3QuZXZlbnRzLmNoYW5uZWxEZWxldGUoXG4gICAgYm90LFxuICAgIGJvdC50cmFuc2Zvcm1lcnMuY2hhbm5lbChib3QsIHtcbiAgICAgIGNoYW5uZWw6IHBheWxvYWQsXG4gICAgICBndWlsZElkOiBwYXlsb2FkLmd1aWxkX2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZF9pZCkgOiB1bmRlZmluZWQsXG4gICAgfSksXG4gICk7XG59XG4iXX0=