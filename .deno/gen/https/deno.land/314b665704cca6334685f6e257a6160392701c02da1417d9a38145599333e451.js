import { requireBotChannelPermissions } from "../permissions.ts";
export default function editWebhook(bot) {
    const editWebhookOld = bot.helpers.editWebhook;
    bot.helpers.editWebhook = async function(webhookId, options, fromChannelId) {
        if (options.channelId) requireBotChannelPermissions(bot, options.channelId, [
            "MANAGE_WEBHOOKS"
        ]);
        if (fromChannelId) requireBotChannelPermissions(bot, fromChannelId, [
            "MANAGE_WEBHOOKS"
        ]);
        if (options.name) {
            if (// Specific usernames that discord does not allow
            options.name === "clyde" || !bot.utils.validateLength(options.name, {
                min: 2,
                max: 32
            })) {
                throw new Error("The webhook name can not be clyde and it must be between 2 and 32 characters long.");
            }
        }
        return await editWebhookOld(webhookId, options);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyB9IGZyb20gXCIuLi9wZXJtaXNzaW9ucy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0V2ViaG9vayhib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBlZGl0V2ViaG9va09sZCA9IGJvdC5oZWxwZXJzLmVkaXRXZWJob29rO1xuXG4gIGJvdC5oZWxwZXJzLmVkaXRXZWJob29rID0gYXN5bmMgZnVuY3Rpb24gKHdlYmhvb2tJZCwgb3B0aW9ucywgZnJvbUNoYW5uZWxJZCkge1xuICAgIGlmIChvcHRpb25zLmNoYW5uZWxJZCkgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyhib3QsIG9wdGlvbnMuY2hhbm5lbElkLCBbXCJNQU5BR0VfV0VCSE9PS1NcIl0pO1xuICAgIGlmIChmcm9tQ2hhbm5lbElkKSByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKGJvdCwgZnJvbUNoYW5uZWxJZCwgW1wiTUFOQUdFX1dFQkhPT0tTXCJdKTtcblxuICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gU3BlY2lmaWMgdXNlcm5hbWVzIHRoYXQgZGlzY29yZCBkb2VzIG5vdCBhbGxvd1xuICAgICAgICBvcHRpb25zLm5hbWUgPT09IFwiY2x5ZGVcIiB8fFxuICAgICAgICAhYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKG9wdGlvbnMubmFtZSwgeyBtaW46IDIsIG1heDogMzIgfSlcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJUaGUgd2ViaG9vayBuYW1lIGNhbiBub3QgYmUgY2x5ZGUgYW5kIGl0IG11c3QgYmUgYmV0d2VlbiAyIGFuZCAzMiBjaGFyYWN0ZXJzIGxvbmcuXCIsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGVkaXRXZWJob29rT2xkKHdlYmhvb2tJZCwgb3B0aW9ucyk7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBUyw0QkFBNEIsUUFBUSxtQkFBbUIsQ0FBQztBQUVqRSxlQUFlLFNBQVMsV0FBVyxDQUFDLEdBQWlCLEVBQUU7SUFDckQsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEFBQUM7SUFFL0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZUFBZ0IsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUU7UUFDM0UsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLDRCQUE0QixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQUMsaUJBQWlCO1NBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksYUFBYSxFQUFFLDRCQUE0QixDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUU7WUFBQyxpQkFBaUI7U0FBQyxDQUFDLENBQUM7UUFFekYsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQ0UsaURBQWlEO1lBQ2pELE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUN4QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQUUsR0FBRyxFQUFFLEVBQUU7YUFBRSxDQUFDLEVBQzVEO2dCQUNBLE1BQU0sSUFBSSxLQUFLLENBQ2Isb0ZBQW9GLENBQ3JGLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxNQUFNLGNBQWMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDakQsQ0FBQztDQUNILENBQUEifQ==