/** Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the BAN_MEMBERS permission. */ export async function getBan(bot, guildId, memberId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.GUILD_BAN(guildId, memberId));
    return {
        reason: result.reason,
        user: bot.transformers.user(bot, result.user)
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRCYW4gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG4vKiogUmV0dXJucyBhIGJhbiBvYmplY3QgZm9yIHRoZSBnaXZlbiB1c2VyIG9yIGEgNDA0IG5vdCBmb3VuZCBpZiB0aGUgYmFuIGNhbm5vdCBiZSBmb3VuZC4gUmVxdWlyZXMgdGhlIEJBTl9NRU1CRVJTIHBlcm1pc3Npb24uICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmFuKGJvdDogQm90LCBndWlsZElkOiBiaWdpbnQsIG1lbWJlcklkOiBiaWdpbnQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPERpc2NvcmRCYW4+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiR0VUXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuR1VJTERfQkFOKGd1aWxkSWQsIG1lbWJlcklkKSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHJlYXNvbjogcmVzdWx0LnJlYXNvbixcbiAgICB1c2VyOiBib3QudHJhbnNmb3JtZXJzLnVzZXIoYm90LCByZXN1bHQudXNlciksXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0Esa0lBQWtJLENBQ2xJLE9BQU8sZUFBZSxNQUFNLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRSxRQUFnQixFQUFFO0lBQ3hFLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQ2xELEFBQUM7SUFFRixPQUFPO1FBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1FBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQztLQUM5QyxDQUFDO0NBQ0gifQ==