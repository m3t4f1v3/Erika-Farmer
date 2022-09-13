/** Returns the new webhook object for the given id, this call does not require authentication and returns no user in the webhook object. */ export async function getWebhookWithToken(bot, webhookId, token) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.WEBHOOK(webhookId, token));
    return bot.transformers.webhook(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRXZWJob29rIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuLyoqIFJldHVybnMgdGhlIG5ldyB3ZWJob29rIG9iamVjdCBmb3IgdGhlIGdpdmVuIGlkLCB0aGlzIGNhbGwgZG9lcyBub3QgcmVxdWlyZSBhdXRoZW50aWNhdGlvbiBhbmQgcmV0dXJucyBubyB1c2VyIGluIHRoZSB3ZWJob29rIG9iamVjdC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWJob29rV2l0aFRva2VuKGJvdDogQm90LCB3ZWJob29rSWQ6IGJpZ2ludCwgdG9rZW46IHN0cmluZykge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZFdlYmhvb2s+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiR0VUXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuV0VCSE9PSyh3ZWJob29rSWQsIHRva2VuKSxcbiAgKTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy53ZWJob29rKGJvdCwgcmVzdWx0KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSw0SUFBNEksQ0FDNUksT0FBTyxlQUFlLG1CQUFtQixDQUFDLEdBQVEsRUFBRSxTQUFpQixFQUFFLEtBQWEsRUFBRTtJQUNwRixNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLEtBQUssRUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUMvQyxBQUFDO0lBRUYsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDOUMifQ==