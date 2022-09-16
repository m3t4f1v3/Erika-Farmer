export async function handleGuildMemberAdd(bot, data) {
    const payload = data.d;
    const guildId = bot.transformers.snowflake(payload.guild_id);
    const user = bot.transformers.user(bot, payload.user);
    const member = bot.transformers.member(bot, payload, guildId, user.id);
    bot.events.guildMemberAdd(bot, member, user);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1VJTERfTUVNQkVSX0FERC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdVSUxEX01FTUJFUl9BREQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxDQUFDLEtBQUssVUFBVSxvQkFBb0IsQ0FBQyxHQUFRLEVBQUUsSUFBMkI7SUFDOUUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQTBCLENBQUM7SUFDaEQsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRHYXRld2F5UGF5bG9hZCwgRGlzY29yZEd1aWxkTWVtYmVyQWRkIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUd1aWxkTWVtYmVyQWRkKGJvdDogQm90LCBkYXRhOiBEaXNjb3JkR2F0ZXdheVBheWxvYWQpIHtcbiAgY29uc3QgcGF5bG9hZCA9IGRhdGEuZCBhcyBEaXNjb3JkR3VpbGRNZW1iZXJBZGQ7XG4gIGNvbnN0IGd1aWxkSWQgPSBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmd1aWxkX2lkKTtcbiAgY29uc3QgdXNlciA9IGJvdC50cmFuc2Zvcm1lcnMudXNlcihib3QsIHBheWxvYWQudXNlcik7XG4gIGNvbnN0IG1lbWJlciA9IGJvdC50cmFuc2Zvcm1lcnMubWVtYmVyKGJvdCwgcGF5bG9hZCwgZ3VpbGRJZCwgdXNlci5pZCk7XG4gIGJvdC5ldmVudHMuZ3VpbGRNZW1iZXJBZGQoYm90LCBtZW1iZXIsIHVzZXIpO1xufVxuIl19