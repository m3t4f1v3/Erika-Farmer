import { requireBotChannelPermissions } from "../permissions.ts";
export function pinMessage(bot) {
    const pinMessageOld = bot.helpers.pinMessage;
    bot.helpers.pinMessage = async function(channelId, messageId) {
        requireBotChannelPermissions(bot, channelId, [
            "MANAGE_MESSAGES", 
        ]);
        return await pinMessageOld(channelId, messageId);
    };
}
export function unpinMessage(bot) {
    const unpinMessageOld = bot.helpers.unpinMessage;
    bot.helpers.unpinMessage = async function(channelId, messageId) {
        requireBotChannelPermissions(bot, channelId, [
            "MANAGE_MESSAGES", 
        ]);
        return await unpinMessageOld(channelId, messageId);
    };
}
export default function setupPinMessagePermChecks(bot) {
    pinMessage(bot);
    unpinMessage(bot);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyB9IGZyb20gXCIuLi9wZXJtaXNzaW9ucy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGluTWVzc2FnZShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBwaW5NZXNzYWdlT2xkID0gYm90LmhlbHBlcnMucGluTWVzc2FnZTtcblxuICBib3QuaGVscGVycy5waW5NZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKFxuICAgIGNoYW5uZWxJZCxcbiAgICBtZXNzYWdlSWQsXG4gICkge1xuICAgIHJlcXVpcmVCb3RDaGFubmVsUGVybWlzc2lvbnMoYm90LCBjaGFubmVsSWQsIFtcbiAgICAgIFwiTUFOQUdFX01FU1NBR0VTXCIsXG4gICAgXSk7XG5cbiAgICByZXR1cm4gYXdhaXQgcGluTWVzc2FnZU9sZChjaGFubmVsSWQsIG1lc3NhZ2VJZCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnBpbk1lc3NhZ2UoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgY29uc3QgdW5waW5NZXNzYWdlT2xkID0gYm90LmhlbHBlcnMudW5waW5NZXNzYWdlO1xuXG4gIGJvdC5oZWxwZXJzLnVucGluTWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChcbiAgICBjaGFubmVsSWQsXG4gICAgbWVzc2FnZUlkLFxuICApIHtcbiAgICByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKGJvdCwgY2hhbm5lbElkLCBbXG4gICAgICBcIk1BTkFHRV9NRVNTQUdFU1wiLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IHVucGluTWVzc2FnZU9sZChjaGFubmVsSWQsIG1lc3NhZ2VJZCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwUGluTWVzc2FnZVBlcm1DaGVja3MoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgcGluTWVzc2FnZShib3QpO1xuICB1bnBpbk1lc3NhZ2UoYm90KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxTQUFTLDRCQUE0QixRQUFRLG1CQUFtQixDQUFDO0FBRWpFLE9BQU8sU0FBUyxVQUFVLENBQUMsR0FBaUIsRUFBRTtJQUM1QyxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQUFBQztJQUU3QyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxlQUN2QixTQUFTLEVBQ1QsU0FBUyxFQUNUO1FBQ0EsNEJBQTRCLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUMzQyxpQkFBaUI7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLGFBQWEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDbEQsQ0FBQztDQUNIO0FBRUQsT0FBTyxTQUFTLFlBQVksQ0FBQyxHQUFpQixFQUFFO0lBQzlDLE1BQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxBQUFDO0lBRWpELEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLGVBQ3pCLFNBQVMsRUFDVCxTQUFTLEVBQ1Q7UUFDQSw0QkFBNEIsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFO1lBQzNDLGlCQUFpQjtTQUNsQixDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sZUFBZSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNwRCxDQUFDO0NBQ0g7QUFFRCxlQUFlLFNBQVMseUJBQXlCLENBQUMsR0FBaUIsRUFBRTtJQUNuRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ25CLENBQUEifQ==