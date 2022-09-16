export function handleTypingStart(bot, data) {
    const payload = data.d;
    const guildId = payload.guild_id ? bot.transformers.snowflake(payload.guild_id) : undefined;
    const userId = bot.transformers.snowflake(payload.user_id);
    bot.events.typingStart(bot, {
        guildId,
        channelId: bot.transformers.snowflake(payload.channel_id),
        userId,
        timestamp: payload.timestamp,
        member: payload.member && guildId ? bot.transformers.member(bot, payload.member, guildId, userId) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVFlQSU5HX1NUQVJULmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVFlQSU5HX1NUQVJULnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxHQUFRLEVBQUUsSUFBMkI7SUFDckUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQXVCLENBQUM7SUFFN0MsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUYsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTNELEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUMxQixPQUFPO1FBQ1AsU0FBUyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDekQsTUFBTTtRQUNOLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztRQUM1QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztLQUM5RyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90IH0gZnJvbSBcIi4uLy4uL2JvdC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZEdhdGV3YXlQYXlsb2FkLCBEaXNjb3JkVHlwaW5nU3RhcnQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVHlwaW5nU3RhcnQoYm90OiBCb3QsIGRhdGE6IERpc2NvcmRHYXRld2F5UGF5bG9hZCkge1xuICBjb25zdCBwYXlsb2FkID0gZGF0YS5kIGFzIERpc2NvcmRUeXBpbmdTdGFydDtcblxuICBjb25zdCBndWlsZElkID0gcGF5bG9hZC5ndWlsZF9pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZ3VpbGRfaWQpIDogdW5kZWZpbmVkO1xuICBjb25zdCB1c2VySWQgPSBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLnVzZXJfaWQpO1xuXG4gIGJvdC5ldmVudHMudHlwaW5nU3RhcnQoYm90LCB7XG4gICAgZ3VpbGRJZCxcbiAgICBjaGFubmVsSWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuY2hhbm5lbF9pZCksXG4gICAgdXNlcklkLFxuICAgIHRpbWVzdGFtcDogcGF5bG9hZC50aW1lc3RhbXAsXG4gICAgbWVtYmVyOiBwYXlsb2FkLm1lbWJlciAmJiBndWlsZElkID8gYm90LnRyYW5zZm9ybWVycy5tZW1iZXIoYm90LCBwYXlsb2FkLm1lbWJlciwgZ3VpbGRJZCwgdXNlcklkKSA6IHVuZGVmaW5lZCxcbiAgfSk7XG59XG4iXX0=