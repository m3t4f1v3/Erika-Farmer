export async function nitroStickerPacks(bot) {
    const packs = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.NITRO_STICKER_PACKS());
    return packs.map((pack) => bot.transformers.stickerPack(bot, pack));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibml0cm9TdGlja2VyUGFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuaXRyb1N0aWNrZXJQYWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLENBQUMsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEdBQVE7SUFDOUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDcEMsR0FBRyxDQUFDLElBQUksRUFDUixLQUFLLEVBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FDM0MsQ0FBQztJQUVGLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRTdGlja2VyUGFjayB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbi8qKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHN0aWNrZXIgcGFja3MgYXZhaWxhYmxlIHRvIE5pdHJvIHN1YnNjcmliZXJzLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5pdHJvU3RpY2tlclBhY2tzKGJvdDogQm90KSB7XG4gIGNvbnN0IHBhY2tzID0gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPERpc2NvcmRTdGlja2VyUGFja1tdPihcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLk5JVFJPX1NUSUNLRVJfUEFDS1MoKSxcbiAgKTtcblxuICByZXR1cm4gcGFja3MubWFwKChwYWNrKSA9PiBib3QudHJhbnNmb3JtZXJzLnN0aWNrZXJQYWNrKGJvdCwgcGFjaykpO1xufVxuIl19