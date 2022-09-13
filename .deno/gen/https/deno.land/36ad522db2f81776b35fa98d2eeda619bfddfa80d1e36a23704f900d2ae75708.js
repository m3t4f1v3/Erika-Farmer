/** Fetches command permissions for a specific command for your application in a guild. Returns a GuildApplicationCommandPermissions object. */ export async function getApplicationCommandPermission(bot, guildId, commandId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.COMMANDS_PERMISSION(bot.applicationId, guildId, commandId));
    return bot.transformers.applicationCommandPermission(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRHdWlsZEFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25zIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuLyoqIEZldGNoZXMgY29tbWFuZCBwZXJtaXNzaW9ucyBmb3IgYSBzcGVjaWZpYyBjb21tYW5kIGZvciB5b3VyIGFwcGxpY2F0aW9uIGluIGEgZ3VpbGQuIFJldHVybnMgYSBHdWlsZEFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25zIG9iamVjdC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uKGJvdDogQm90LCBndWlsZElkOiBiaWdpbnQsIGNvbW1hbmRJZDogYmlnaW50KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkR3VpbGRBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9ucz4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJHRVRcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5DT01NQU5EU19QRVJNSVNTSU9OKGJvdC5hcHBsaWNhdGlvbklkLCBndWlsZElkLCBjb21tYW5kSWQpLFxuICApO1xuXG4gIHJldHVybiBib3QudHJhbnNmb3JtZXJzLmFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb24oYm90LCByZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLCtJQUErSSxDQUMvSSxPQUFPLGVBQWUsK0JBQStCLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRSxTQUFpQixFQUFFO0lBQ2xHLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUNoRixBQUFDO0lBRUYsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNuRSJ9