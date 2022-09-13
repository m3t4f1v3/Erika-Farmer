/** Remove a role from the member */ export async function removeRole(bot, guildId, memberId, roleId, reason) {
    await bot.rest.runMethod(bot.rest, "DELETE", bot.constants.routes.GUILD_MEMBER_ROLE(guildId, memberId, roleId), {
        reason
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIFJlbW92ZSBhIHJvbGUgZnJvbSB0aGUgbWVtYmVyICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlUm9sZShib3Q6IEJvdCwgZ3VpbGRJZDogYmlnaW50LCBtZW1iZXJJZDogYmlnaW50LCByb2xlSWQ6IGJpZ2ludCwgcmVhc29uPzogc3RyaW5nKSB7XG4gIGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDx1bmRlZmluZWQ+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiREVMRVRFXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuR1VJTERfTUVNQkVSX1JPTEUoZ3VpbGRJZCwgbWVtYmVySWQsIHJvbGVJZCksXG4gICAgeyByZWFzb24gfSxcbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxvQ0FBb0MsQ0FDcEMsT0FBTyxlQUFlLFVBQVUsQ0FBQyxHQUFRLEVBQUUsT0FBZSxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWUsRUFBRTtJQUM3RyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUN0QixHQUFHLENBQUMsSUFBSSxFQUNSLFFBQVEsRUFDUixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUNqRTtRQUFFLE1BQU07S0FBRSxDQUNYLENBQUM7Q0FDSCJ9