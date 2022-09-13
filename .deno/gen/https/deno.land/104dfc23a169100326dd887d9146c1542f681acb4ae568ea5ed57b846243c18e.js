/** Returns the initial Interaction response. Functions the same as Get Webhook Message */ export async function getOriginalInteractionResponse(bot, token) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.INTERACTION_ORIGINAL_ID_TOKEN(bot.applicationId, token));
    return bot.transformers.message(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuLyoqIFJldHVybnMgdGhlIGluaXRpYWwgSW50ZXJhY3Rpb24gcmVzcG9uc2UuIEZ1bmN0aW9ucyB0aGUgc2FtZSBhcyBHZXQgV2ViaG9vayBNZXNzYWdlICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JpZ2luYWxJbnRlcmFjdGlvblJlc3BvbnNlKGJvdDogQm90LCB0b2tlbjogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkTWVzc2FnZT4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJHRVRcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5JTlRFUkFDVElPTl9PUklHSU5BTF9JRF9UT0tFTihib3QuYXBwbGljYXRpb25JZCwgdG9rZW4pLFxuICApO1xuXG4gIHJldHVybiBib3QudHJhbnNmb3JtZXJzLm1lc3NhZ2UoYm90LCByZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBGQUEwRixDQUMxRixPQUFPLGVBQWUsOEJBQThCLENBQUMsR0FBUSxFQUFFLEtBQWEsRUFBRTtJQUM1RSxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLEtBQUssRUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUM3RSxBQUFDO0lBRUYsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDOUMifQ==