/** Delete messages from the channel. 2-100. Requires the MANAGE_MESSAGES permission */ export async function deleteMessages(bot, channelId, ids, reason) {
    if (ids.length < 2) {
        throw new Error(bot.constants.Errors.DELETE_MESSAGES_MIN);
    }
    if (ids.length > 100) {
        console.warn(`This endpoint only accepts a maximum of 100 messages. Deleting the first 100 message ids provided.`);
    }
    await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.CHANNEL_BULK_DELETE(channelId), {
        messages: ids.splice(0, 100).map((id)=>id.toString()
        ),
        reason
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIERlbGV0ZSBtZXNzYWdlcyBmcm9tIHRoZSBjaGFubmVsLiAyLTEwMC4gUmVxdWlyZXMgdGhlIE1BTkFHRV9NRVNTQUdFUyBwZXJtaXNzaW9uICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVzc2FnZXMoYm90OiBCb3QsIGNoYW5uZWxJZDogYmlnaW50LCBpZHM6IGJpZ2ludFtdLCByZWFzb24/OiBzdHJpbmcpIHtcbiAgaWYgKGlkcy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGJvdC5jb25zdGFudHMuRXJyb3JzLkRFTEVURV9NRVNTQUdFU19NSU4pO1xuICB9XG5cbiAgaWYgKGlkcy5sZW5ndGggPiAxMDApIHtcbiAgICBjb25zb2xlLndhcm4oYFRoaXMgZW5kcG9pbnQgb25seSBhY2NlcHRzIGEgbWF4aW11bSBvZiAxMDAgbWVzc2FnZXMuIERlbGV0aW5nIHRoZSBmaXJzdCAxMDAgbWVzc2FnZSBpZHMgcHJvdmlkZWQuYCk7XG4gIH1cblxuICBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8dW5kZWZpbmVkPihib3QucmVzdCwgXCJQT1NUXCIsIGJvdC5jb25zdGFudHMucm91dGVzLkNIQU5ORUxfQlVMS19ERUxFVEUoY2hhbm5lbElkKSwge1xuICAgIG1lc3NhZ2VzOiBpZHMuc3BsaWNlKDAsIDEwMCkubWFwKChpZCkgPT4gaWQudG9TdHJpbmcoKSksXG4gICAgcmVhc29uLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx1RkFBdUYsQ0FDdkYsT0FBTyxlQUFlLGNBQWMsQ0FBQyxHQUFRLEVBQUUsU0FBaUIsRUFBRSxHQUFhLEVBQUUsTUFBZSxFQUFFO0lBQ2hHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQzNEO0lBRUQsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsa0dBQWtHLENBQUMsQ0FBQyxDQUFDO0tBQ3BIO0lBRUQsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUN6RyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFBQSxDQUFDO1FBQ3ZELE1BQU07S0FDUCxDQUFDLENBQUM7Q0FDSiJ9