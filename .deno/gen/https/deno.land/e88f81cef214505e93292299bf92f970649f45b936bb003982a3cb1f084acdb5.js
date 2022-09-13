import { requireBotChannelPermissions } from "../permissions.ts";
export default function createWebhook(bot) {
    const createWebhookOld = bot.helpers.createWebhook;
    bot.helpers.createWebhook = async function(channelId, options) {
        requireBotChannelPermissions(bot, channelId, [
            "MANAGE_WEBHOOKS"
        ]);
        if (// Specific usernames that discord does not allow
        options.name === "clyde" || !bot.utils.validateLength(options.name, {
            min: 2,
            max: 32
        })) {
            throw new Error("The webhook name can not be clyde and it must be between 2 and 32 characters long.");
        }
        return await createWebhookOld(channelId, options);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyB9IGZyb20gXCIuLi9wZXJtaXNzaW9ucy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVXZWJob29rKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGNyZWF0ZVdlYmhvb2tPbGQgPSBib3QuaGVscGVycy5jcmVhdGVXZWJob29rO1xuXG4gIGJvdC5oZWxwZXJzLmNyZWF0ZVdlYmhvb2sgPSBhc3luYyBmdW5jdGlvbiAoY2hhbm5lbElkLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyhib3QsIGNoYW5uZWxJZCwgW1wiTUFOQUdFX1dFQkhPT0tTXCJdKTtcblxuICAgIGlmIChcbiAgICAgIC8vIFNwZWNpZmljIHVzZXJuYW1lcyB0aGF0IGRpc2NvcmQgZG9lcyBub3QgYWxsb3dcbiAgICAgIG9wdGlvbnMubmFtZSA9PT0gXCJjbHlkZVwiIHx8XG4gICAgICAhYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKG9wdGlvbnMubmFtZSwgeyBtaW46IDIsIG1heDogMzIgfSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGUgd2ViaG9vayBuYW1lIGNhbiBub3QgYmUgY2x5ZGUgYW5kIGl0IG11c3QgYmUgYmV0d2VlbiAyIGFuZCAzMiBjaGFyYWN0ZXJzIGxvbmcuXCIsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBjcmVhdGVXZWJob29rT2xkKGNoYW5uZWxJZCwgb3B0aW9ucyk7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBUyw0QkFBNEIsUUFBUSxtQkFBbUIsQ0FBQztBQUVqRSxlQUFlLFNBQVMsYUFBYSxDQUFDLEdBQWlCLEVBQUU7SUFDdkQsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQUFBQztJQUVuRCxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxlQUFnQixTQUFTLEVBQUUsT0FBTyxFQUFFO1FBQzlELDRCQUE0QixDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFBQyxpQkFBaUI7U0FBQyxDQUFDLENBQUM7UUFFbEUsSUFDRSxpREFBaUQ7UUFDakQsT0FBTyxDQUFDLElBQUksS0FBSyxPQUFPLElBQ3hCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUFFLEdBQUcsRUFBRSxDQUFDO1lBQUUsR0FBRyxFQUFFLEVBQUU7U0FBRSxDQUFDLEVBQzVEO1lBQ0EsTUFBTSxJQUFJLEtBQUssQ0FDYixvRkFBb0YsQ0FDckYsQ0FBQztTQUNIO1FBRUQsT0FBTyxNQUFNLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNuRCxDQUFDO0NBQ0gsQ0FBQSJ9