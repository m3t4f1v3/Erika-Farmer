/** Creates a new Stage instance associated to a Stage channel. Requires the user to be a moderator of the Stage channel. */ export async function createStageInstance(bot, options) {
    const result = await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.STAGE_INSTANCES(), {
        channel_id: options.channelId.toString(),
        topic: options.topic,
        send_start_notification: options.sendStartNotification
    });
    return bot.transformers.stageInstance(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRTdGFnZUluc3RhbmNlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuLyoqIENyZWF0ZXMgYSBuZXcgU3RhZ2UgaW5zdGFuY2UgYXNzb2NpYXRlZCB0byBhIFN0YWdlIGNoYW5uZWwuIFJlcXVpcmVzIHRoZSB1c2VyIHRvIGJlIGEgbW9kZXJhdG9yIG9mIHRoZSBTdGFnZSBjaGFubmVsLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0YWdlSW5zdGFuY2UoYm90OiBCb3QsIG9wdGlvbnM6IENyZWF0ZVN0YWdlSW5zdGFuY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPERpc2NvcmRTdGFnZUluc3RhbmNlPihcbiAgICBib3QucmVzdCxcbiAgICBcIlBPU1RcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5TVEFHRV9JTlNUQU5DRVMoKSxcbiAgICB7XG4gICAgICBjaGFubmVsX2lkOiBvcHRpb25zLmNoYW5uZWxJZC50b1N0cmluZygpLFxuICAgICAgdG9waWM6IG9wdGlvbnMudG9waWMsXG4gICAgICBzZW5kX3N0YXJ0X25vdGlmaWNhdGlvbjogb3B0aW9ucy5zZW5kU3RhcnROb3RpZmljYXRpb24sXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy5zdGFnZUluc3RhbmNlKGJvdCwgcmVzdWx0KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTdGFnZUluc3RhbmNlIHtcbiAgY2hhbm5lbElkOiBiaWdpbnQ7XG4gIHRvcGljOiBzdHJpbmc7XG4gIC8qKiBOb3RpZnkgQGV2ZXJ5b25lIHRoYXQgdGhlIHN0YWdlIGluc3RhbmNlIGhhcyBzdGFydGVkLiBSZXF1aXJlcyB0aGUgTUVOVElPTl9FVkVSWU9ORSBwZXJtaXNzaW9uLiAqL1xuICBzZW5kU3RhcnROb3RpZmljYXRpb24/OiBib29sZWFuO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDRIQUE0SCxDQUM1SCxPQUFPLGVBQWUsbUJBQW1CLENBQUMsR0FBUSxFQUFFLE9BQTRCLEVBQUU7SUFDaEYsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxDQUFDLElBQUksRUFDUixNQUFNLEVBQ04sR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQ3RDO1FBQ0UsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1FBQ3hDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQix1QkFBdUIsRUFBRSxPQUFPLENBQUMscUJBQXFCO0tBQ3ZELENBQ0YsQUFBQztJQUVGLE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3BEIn0=