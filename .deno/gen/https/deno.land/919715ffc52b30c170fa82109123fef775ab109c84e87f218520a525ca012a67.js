export async function deleteInteractionResponse(bot, token, messageId) {
    await bot.rest.runMethod(bot.rest, "DELETE", messageId
        ? bot.constants.routes.INTERACTION_ID_TOKEN_MESSAGE_ID(bot.applicationId, token, messageId)
        : bot.constants.routes.INTERACTION_ORIGINAL_ID_TOKEN(bot.applicationId, token));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlSW50ZXJhY3Rpb25SZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGV0ZUludGVyYWN0aW9uUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxDQUFDLEtBQUssVUFBVSx5QkFBeUIsQ0FBQyxHQUFRLEVBQUUsS0FBYSxFQUFFLFNBQWtCO0lBQ3pGLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3RCLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsUUFBUSxFQUNSLFNBQVM7UUFDUCxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDO1FBQzNGLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUNqRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm90IH0gZnJvbSBcIi4uLy4uLy4uL2JvdC50c1wiO1xuXG4vKiogVG8gZGVsZXRlIHlvdXIgcmVzcG9uc2UgdG8gYSBhcHBsaWNhdGlvbiBjb21tYW5kLiBJZiBhIG1lc3NhZ2UgaWQgaXMgbm90IHByb3ZpZGVkLCBpdCB3aWxsIGRlZmF1bHQgdG8gZGVsZXRpbmcgdGhlIG9yaWdpbmFsIHJlc3BvbnNlLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludGVyYWN0aW9uUmVzcG9uc2UoYm90OiBCb3QsIHRva2VuOiBzdHJpbmcsIG1lc3NhZ2VJZD86IGJpZ2ludCkge1xuICBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8dW5kZWZpbmVkPihcbiAgICBib3QucmVzdCxcbiAgICBcIkRFTEVURVwiLFxuICAgIG1lc3NhZ2VJZFxuICAgICAgPyBib3QuY29uc3RhbnRzLnJvdXRlcy5JTlRFUkFDVElPTl9JRF9UT0tFTl9NRVNTQUdFX0lEKGJvdC5hcHBsaWNhdGlvbklkLCB0b2tlbiwgbWVzc2FnZUlkKVxuICAgICAgOiBib3QuY29uc3RhbnRzLnJvdXRlcy5JTlRFUkFDVElPTl9PUklHSU5BTF9JRF9UT0tFTihib3QuYXBwbGljYXRpb25JZCwgdG9rZW4pLFxuICApO1xufVxuIl19