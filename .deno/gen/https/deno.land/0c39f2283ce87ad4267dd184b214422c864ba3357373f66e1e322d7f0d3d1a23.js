export async function handleMessageDelete(bot, data) {
    const payload = data.d;
    bot.events.messageDelete(bot, {
        id: bot.transformers.snowflake(payload.id),
        channelId: bot.transformers.snowflake(payload.channel_id),
        guildId: payload.guild_id ? bot.transformers.snowflake(payload.guild_id) : undefined
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkR2F0ZXdheVBheWxvYWQsIERpc2NvcmRNZXNzYWdlRGVsZXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VEZWxldGUoYm90OiBCb3QsIGRhdGE6IERpc2NvcmRHYXRld2F5UGF5bG9hZCkge1xuICBjb25zdCBwYXlsb2FkID0gZGF0YS5kIGFzIERpc2NvcmRNZXNzYWdlRGVsZXRlO1xuXG4gIGJvdC5ldmVudHMubWVzc2FnZURlbGV0ZShib3QsIHtcbiAgICBpZDogYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5pZCksXG4gICAgY2hhbm5lbElkOiBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmNoYW5uZWxfaWQpLFxuICAgIGd1aWxkSWQ6IHBheWxvYWQuZ3VpbGRfaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmd1aWxkX2lkKSA6IHVuZGVmaW5lZCxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxlQUFlLG1CQUFtQixDQUFDLEdBQVEsRUFBRSxJQUEyQixFQUFFO0lBQy9FLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLEFBQXdCLEFBQUM7SUFFL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFO1FBQzVCLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzFDLFNBQVMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3pELE9BQU8sRUFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTO0tBQ3JGLENBQUMsQ0FBQztDQUNKIn0=