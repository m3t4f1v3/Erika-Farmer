export function handleTypingStart(bot, data) {
    const payload = data.d;
    const guildId = payload.guild_id ? bot.transformers.snowflake(payload.guild_id) : undefined;
    const userId = bot.transformers.snowflake(payload.user_id);
    bot.events.typingStart(bot, {
        guildId,
        channelId: bot.transformers.snowflake(payload.channel_id),
        userId,
        timestamp: payload.timestamp,
        member: payload.member && guildId ? bot.transformers.member(bot, payload.member, guildId, userId) : undefined
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkR2F0ZXdheVBheWxvYWQsIERpc2NvcmRUeXBpbmdTdGFydCB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUeXBpbmdTdGFydChib3Q6IEJvdCwgZGF0YTogRGlzY29yZEdhdGV3YXlQYXlsb2FkKSB7XG4gIGNvbnN0IHBheWxvYWQgPSBkYXRhLmQgYXMgRGlzY29yZFR5cGluZ1N0YXJ0O1xuXG4gIGNvbnN0IGd1aWxkSWQgPSBwYXlsb2FkLmd1aWxkX2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZF9pZCkgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IHVzZXJJZCA9IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQudXNlcl9pZCk7XG5cbiAgYm90LmV2ZW50cy50eXBpbmdTdGFydChib3QsIHtcbiAgICBndWlsZElkLFxuICAgIGNoYW5uZWxJZDogYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5jaGFubmVsX2lkKSxcbiAgICB1c2VySWQsXG4gICAgdGltZXN0YW1wOiBwYXlsb2FkLnRpbWVzdGFtcCxcbiAgICBtZW1iZXI6IHBheWxvYWQubWVtYmVyICYmIGd1aWxkSWQgPyBib3QudHJhbnNmb3JtZXJzLm1lbWJlcihib3QsIHBheWxvYWQubWVtYmVyLCBndWlsZElkLCB1c2VySWQpIDogdW5kZWZpbmVkLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLFNBQVMsaUJBQWlCLENBQUMsR0FBUSxFQUFFLElBQTJCLEVBQUU7SUFDdkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQUFBc0IsQUFBQztJQUU3QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLEFBQUM7SUFDNUYsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxBQUFDO0lBRTNELEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUMxQixPQUFPO1FBQ1AsU0FBUyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDekQsTUFBTTtRQUNOLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztRQUM1QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFNBQVM7S0FDOUcsQ0FBQyxDQUFDO0NBQ0oifQ==