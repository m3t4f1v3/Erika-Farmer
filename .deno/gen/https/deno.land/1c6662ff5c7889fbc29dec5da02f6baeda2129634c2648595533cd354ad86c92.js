/** Add a role to the member */ export async function addRole(bot, guildId, memberId, roleId, reason) {
    await bot.rest.runMethod(bot.rest, "PUT", bot.constants.routes.GUILD_MEMBER_ROLE(guildId, memberId, roleId), {
        reason
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIEFkZCBhIHJvbGUgdG8gdGhlIG1lbWJlciAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFJvbGUoYm90OiBCb3QsIGd1aWxkSWQ6IGJpZ2ludCwgbWVtYmVySWQ6IGJpZ2ludCwgcm9sZUlkOiBiaWdpbnQsIHJlYXNvbj86IHN0cmluZykge1xuICBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8dW5kZWZpbmVkPihcbiAgICBib3QucmVzdCxcbiAgICBcIlBVVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkdVSUxEX01FTUJFUl9ST0xFKGd1aWxkSWQsIG1lbWJlcklkLCByb2xlSWQpLFxuICAgIHsgcmVhc29uIH0sXG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsK0JBQStCLENBQy9CLE9BQU8sZUFBZSxPQUFPLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRSxRQUFnQixFQUFFLE1BQWMsRUFBRSxNQUFlLEVBQUU7SUFDMUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDdEIsR0FBRyxDQUFDLElBQUksRUFDUixLQUFLLEVBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFDakU7UUFBRSxNQUFNO0tBQUUsQ0FDWCxDQUFDO0NBQ0gifQ==