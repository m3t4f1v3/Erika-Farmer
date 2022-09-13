/** Returns the list of sticker packs available to Nitro subscribers. */ export async function nitroStickerPacks(bot) {
    const packs = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.NITRO_STICKER_PACKS());
    return packs.map((pack)=>bot.transformers.stickerPack(bot, pack)
    );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkU3RpY2tlclBhY2sgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG4vKiogUmV0dXJucyB0aGUgbGlzdCBvZiBzdGlja2VyIHBhY2tzIGF2YWlsYWJsZSB0byBOaXRybyBzdWJzY3JpYmVycy4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuaXRyb1N0aWNrZXJQYWNrcyhib3Q6IEJvdCkge1xuICBjb25zdCBwYWNrcyA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkU3RpY2tlclBhY2tbXT4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJHRVRcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5OSVRST19TVElDS0VSX1BBQ0tTKCksXG4gICk7XG5cbiAgcmV0dXJuIHBhY2tzLm1hcCgocGFjaykgPT4gYm90LnRyYW5zZm9ybWVycy5zdGlja2VyUGFjayhib3QsIHBhY2spKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSx3RUFBd0UsQ0FDeEUsT0FBTyxlQUFlLGlCQUFpQixDQUFDLEdBQVEsRUFBRTtJQUNoRCxNQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNwQyxHQUFHLENBQUMsSUFBSSxFQUNSLEtBQUssRUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUMzQyxBQUFDO0lBRUYsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7SUFBQSxDQUFDLENBQUM7Q0FDckUifQ==