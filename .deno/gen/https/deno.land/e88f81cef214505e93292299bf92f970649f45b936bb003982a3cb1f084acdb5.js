import { requireBotChannelPermissions } from "../permissions.ts";
export default function createWebhook(bot) {
    const createWebhookOld = bot.helpers.createWebhook;
    bot.helpers.createWebhook = async function (channelId, options) {
        requireBotChannelPermissions(bot, channelId, ["MANAGE_WEBHOOKS"]);
        if (options.name === "clyde" ||
            !bot.utils.validateLength(options.name, { min: 2, max: 32 })) {
            throw new Error("The webhook name can not be clyde and it must be between 2 and 32 characters long.");
        }
        return await createWebhookOld(channelId, options);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2ViaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZVdlYmhvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakUsTUFBTSxDQUFDLE9BQU8sVUFBVSxhQUFhLENBQUMsR0FBaUI7SUFDckQsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVuRCxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLFdBQVcsU0FBUyxFQUFFLE9BQU87UUFDNUQsNEJBQTRCLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUVsRSxJQUVFLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTztZQUN4QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUM1RDtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQ2Isb0ZBQW9GLENBQ3JGLENBQUM7U0FDSDtRQUVELE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdFdpdGhDYWNoZSB9IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5pbXBvcnQgeyByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zIH0gZnJvbSBcIi4uL3Blcm1pc3Npb25zLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYmhvb2soYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgY29uc3QgY3JlYXRlV2ViaG9va09sZCA9IGJvdC5oZWxwZXJzLmNyZWF0ZVdlYmhvb2s7XG5cbiAgYm90LmhlbHBlcnMuY3JlYXRlV2ViaG9vayA9IGFzeW5jIGZ1bmN0aW9uIChjaGFubmVsSWQsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKGJvdCwgY2hhbm5lbElkLCBbXCJNQU5BR0VfV0VCSE9PS1NcIl0pO1xuXG4gICAgaWYgKFxuICAgICAgLy8gU3BlY2lmaWMgdXNlcm5hbWVzIHRoYXQgZGlzY29yZCBkb2VzIG5vdCBhbGxvd1xuICAgICAgb3B0aW9ucy5uYW1lID09PSBcImNseWRlXCIgfHxcbiAgICAgICFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgob3B0aW9ucy5uYW1lLCB7IG1pbjogMiwgbWF4OiAzMiB9KVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlRoZSB3ZWJob29rIG5hbWUgY2FuIG5vdCBiZSBjbHlkZSBhbmQgaXQgbXVzdCBiZSBiZXR3ZWVuIDIgYW5kIDMyIGNoYXJhY3RlcnMgbG9uZy5cIixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGNyZWF0ZVdlYmhvb2tPbGQoY2hhbm5lbElkLCBvcHRpb25zKTtcbiAgfTtcbn1cbiJdfQ==