export async function getDmChannel(bot, userId) {
    if (userId === bot.id)
        throw new Error(bot.constants.Errors.YOU_CAN_NOT_DM_THE_BOT_ITSELF);
    const dmChannelData = await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.USER_DM(), {
        recipient_id: userId.toString(),
    });
    return bot.transformers.channel(bot, { channel: dmChannelData });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RG1DaGFubmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0RG1DaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxLQUFLLFVBQVUsWUFBWSxDQUFDLEdBQVEsRUFBRSxNQUFjO0lBQ3pELElBQUksTUFBTSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBRTNGLE1BQU0sYUFBYSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQWlCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQy9HLFlBQVksRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFO0tBQ2hDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm90IH0gZnJvbSBcIi4uLy4uL2JvdC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZENoYW5uZWwgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG4vKiogR2V0IGEgdXNlcidzIGRtIGNoYW5uZWwuIFRoaXMgaXMgcmVxdWlyZWQgaW4gb3JkZXIgdG8gc2VuZCBhIERNLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERtQ2hhbm5lbChib3Q6IEJvdCwgdXNlcklkOiBiaWdpbnQpIHtcbiAgaWYgKHVzZXJJZCA9PT0gYm90LmlkKSB0aHJvdyBuZXcgRXJyb3IoYm90LmNvbnN0YW50cy5FcnJvcnMuWU9VX0NBTl9OT1RfRE1fVEhFX0JPVF9JVFNFTEYpO1xuXG4gIGNvbnN0IGRtQ2hhbm5lbERhdGEgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZENoYW5uZWw+KGJvdC5yZXN0LCBcIlBPU1RcIiwgYm90LmNvbnN0YW50cy5yb3V0ZXMuVVNFUl9ETSgpLCB7XG4gICAgcmVjaXBpZW50X2lkOiB1c2VySWQudG9TdHJpbmcoKSxcbiAgfSk7XG5cbiAgcmV0dXJuIGJvdC50cmFuc2Zvcm1lcnMuY2hhbm5lbChib3QsIHsgY2hhbm5lbDogZG1DaGFubmVsRGF0YSB9KTtcbn1cbiJdfQ==