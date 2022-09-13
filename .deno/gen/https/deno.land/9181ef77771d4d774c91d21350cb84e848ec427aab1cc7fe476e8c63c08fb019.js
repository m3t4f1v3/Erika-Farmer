/** Removes all reactions for all emojis on this message. */ export async function removeAllReactions(bot, channelId, messageId) {
    await bot.rest.runMethod(bot.rest, "DELETE", bot.constants.routes.CHANNEL_MESSAGE_REACTIONS(channelId, messageId));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIFJlbW92ZXMgYWxsIHJlYWN0aW9ucyBmb3IgYWxsIGVtb2ppcyBvbiB0aGlzIG1lc3NhZ2UuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQWxsUmVhY3Rpb25zKGJvdDogQm90LCBjaGFubmVsSWQ6IGJpZ2ludCwgbWVzc2FnZUlkOiBiaWdpbnQpIHtcbiAgYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPHVuZGVmaW5lZD4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJERUxFVEVcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5DSEFOTkVMX01FU1NBR0VfUkVBQ1RJT05TKGNoYW5uZWxJZCwgbWVzc2FnZUlkKSxcbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSw0REFBNEQsQ0FDNUQsT0FBTyxlQUFlLGtCQUFrQixDQUFDLEdBQVEsRUFBRSxTQUFpQixFQUFFLFNBQWlCLEVBQUU7SUFDdkYsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDdEIsR0FBRyxDQUFDLElBQUksRUFDUixRQUFRLEVBQ1IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUNyRSxDQUFDO0NBQ0gifQ==