/** Get pinned messages in this channel. */ export async function getPins(bot, channelId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.CHANNEL_PINS(channelId));
    return result.map((msg)=>bot.transformers.message(bot, msg)
    );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuLyoqIEdldCBwaW5uZWQgbWVzc2FnZXMgaW4gdGhpcyBjaGFubmVsLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBpbnMoYm90OiBCb3QsIGNoYW5uZWxJZDogYmlnaW50KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkTWVzc2FnZVtdPihcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkNIQU5ORUxfUElOUyhjaGFubmVsSWQpLFxuICApO1xuXG4gIHJldHVybiByZXN1bHQubWFwKChtc2cpID0+IGJvdC50cmFuc2Zvcm1lcnMubWVzc2FnZShib3QsIG1zZykpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDJDQUEyQyxDQUMzQyxPQUFPLGVBQWUsT0FBTyxDQUFDLEdBQVEsRUFBRSxTQUFpQixFQUFFO0lBQ3pELE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FDN0MsQUFBQztJQUVGLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQUEsQ0FBQyxDQUFDO0NBQ2hFIn0=