/** Delete a webhook permanently. Returns a undefined on success */ export async function deleteWebhookWithToken(bot, webhookId, webhookToken) {
    await bot.rest.runMethod(bot.rest, "DELETE", bot.constants.routes.WEBHOOK(webhookId, webhookToken));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIERlbGV0ZSBhIHdlYmhvb2sgcGVybWFuZW50bHkuIFJldHVybnMgYSB1bmRlZmluZWQgb24gc3VjY2VzcyAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVdlYmhvb2tXaXRoVG9rZW4oYm90OiBCb3QsIHdlYmhvb2tJZDogYmlnaW50LCB3ZWJob29rVG9rZW46IHN0cmluZykge1xuICBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8dW5kZWZpbmVkPihib3QucmVzdCwgXCJERUxFVEVcIiwgYm90LmNvbnN0YW50cy5yb3V0ZXMuV0VCSE9PSyh3ZWJob29rSWQsIHdlYmhvb2tUb2tlbikpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLG1FQUFtRSxDQUNuRSxPQUFPLGVBQWUsc0JBQXNCLENBQUMsR0FBUSxFQUFFLFNBQWlCLEVBQUUsWUFBb0IsRUFBRTtJQUM5RixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztDQUNoSCJ9