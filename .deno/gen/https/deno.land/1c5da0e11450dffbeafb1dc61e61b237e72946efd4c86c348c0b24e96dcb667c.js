export async function unpinMessage(bot, channelId, messageId) {
    await bot.rest.runMethod(bot.rest, "DELETE", bot.constants.routes.CHANNEL_PIN(channelId, messageId));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVW5waW4gYSBtZXNzYWdlIGluIGEgY2hhbm5lbC4gUmVxdWlyZXMgTUFOQUdFX01FU1NBR0VTLiAqL1xuaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnBpbk1lc3NhZ2UoYm90OiBCb3QsIGNoYW5uZWxJZDogYmlnaW50LCBtZXNzYWdlSWQ6IGJpZ2ludCkge1xuICBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8dW5kZWZpbmVkPihib3QucmVzdCwgXCJERUxFVEVcIiwgYm90LmNvbnN0YW50cy5yb3V0ZXMuQ0hBTk5FTF9QSU4oY2hhbm5lbElkLCBtZXNzYWdlSWQpKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLGVBQWUsWUFBWSxDQUFDLEdBQVEsRUFBRSxTQUFpQixFQUFFLFNBQWlCLEVBQUU7SUFDakYsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7Q0FDakgifQ==