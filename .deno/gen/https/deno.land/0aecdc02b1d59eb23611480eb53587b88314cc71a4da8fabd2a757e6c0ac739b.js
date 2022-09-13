export async function handleVoiceStateUpdate(bot, data) {
    const payload = data.d;
    if (!payload.guild_id) return;
    const guildId = bot.transformers.snowflake(payload.guild_id);
    bot.events.voiceStateUpdate(bot, bot.transformers.voiceState(bot, {
        voiceState: payload,
        guildId
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkR2F0ZXdheVBheWxvYWQsIERpc2NvcmRWb2ljZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVZvaWNlU3RhdGVVcGRhdGUoYm90OiBCb3QsIGRhdGE6IERpc2NvcmRHYXRld2F5UGF5bG9hZCkge1xuICBjb25zdCBwYXlsb2FkID0gZGF0YS5kIGFzIERpc2NvcmRWb2ljZVN0YXRlO1xuICBpZiAoIXBheWxvYWQuZ3VpbGRfaWQpIHJldHVybjtcblxuICBjb25zdCBndWlsZElkID0gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZF9pZCk7XG5cbiAgYm90LmV2ZW50cy52b2ljZVN0YXRlVXBkYXRlKGJvdCwgYm90LnRyYW5zZm9ybWVycy52b2ljZVN0YXRlKGJvdCwgeyB2b2ljZVN0YXRlOiBwYXlsb2FkLCBndWlsZElkIH0pKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLGVBQWUsc0JBQXNCLENBQUMsR0FBUSxFQUFFLElBQTJCLEVBQUU7SUFDbEYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQUFBcUIsQUFBQztJQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPO0lBRTlCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQUFBQztJQUU3RCxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFBRSxVQUFVLEVBQUUsT0FBTztRQUFFLE9BQU87S0FBRSxDQUFDLENBQUMsQ0FBQztDQUN0RyJ9