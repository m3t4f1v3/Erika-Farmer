export async function getGuildPreview(bot, guildId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.GUILD_PREVIEW(guildId));
    return {
        id: bot.transformers.snowflake(result.id),
        name: result.name,
        icon: result.icon ?? undefined,
        splash: result.splash ?? undefined,
        discoverySplash: result.discovery_splash ?? undefined,
        emojis: result.emojis.map((emoji) => bot.transformers.emoji(bot, emoji)),
        features: result.features,
        approximateMemberCount: result.approximate_member_count,
        approximatePresenceCount: result.approximate_presence_count,
        description: result.description ?? undefined,
        stickers: result.stickers.map((sticker) => bot.transformers.sticker(bot, sticker)),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3VpbGRQcmV2aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0R3VpbGRQcmV2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxLQUFLLFVBQVUsZUFBZSxDQUFDLEdBQVEsRUFBRSxPQUFlO0lBQzdELE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FDNUMsQ0FBQztJQUVGLE9BQU87UUFDTCxFQUFFLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUztRQUM5QixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTO1FBQ2xDLGVBQWUsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLElBQUksU0FBUztRQUNyRCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7UUFDekIsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLHdCQUF3QjtRQUN2RCx3QkFBd0IsRUFBRSxNQUFNLENBQUMsMEJBQTBCO1FBQzNELFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxJQUFJLFNBQVM7UUFDNUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDbkYsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRHdWlsZFByZXZpZXcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG4vKiogUmV0dXJucyB0aGUgZ3VpbGQgcHJldmlldyBvYmplY3QgZm9yIHRoZSBnaXZlbiBpZC4gSWYgdGhlIGJvdCBpcyBub3QgaW4gdGhlIGd1aWxkLCB0aGVuIHRoZSBndWlsZCBtdXN0IGJlIERpc2NvdmVyYWJsZS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHdWlsZFByZXZpZXcoYm90OiBCb3QsIGd1aWxkSWQ6IGJpZ2ludCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZEd1aWxkUHJldmlldz4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJHRVRcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5HVUlMRF9QUkVWSUVXKGd1aWxkSWQpLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgaWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHJlc3VsdC5pZCksXG4gICAgbmFtZTogcmVzdWx0Lm5hbWUsXG4gICAgaWNvbjogcmVzdWx0Lmljb24gPz8gdW5kZWZpbmVkLFxuICAgIHNwbGFzaDogcmVzdWx0LnNwbGFzaCA/PyB1bmRlZmluZWQsXG4gICAgZGlzY292ZXJ5U3BsYXNoOiByZXN1bHQuZGlzY292ZXJ5X3NwbGFzaCA/PyB1bmRlZmluZWQsXG4gICAgZW1vamlzOiByZXN1bHQuZW1vamlzLm1hcCgoZW1vamkpID0+IGJvdC50cmFuc2Zvcm1lcnMuZW1vamkoYm90LCBlbW9qaSkpLFxuICAgIGZlYXR1cmVzOiByZXN1bHQuZmVhdHVyZXMsXG4gICAgYXBwcm94aW1hdGVNZW1iZXJDb3VudDogcmVzdWx0LmFwcHJveGltYXRlX21lbWJlcl9jb3VudCxcbiAgICBhcHByb3hpbWF0ZVByZXNlbmNlQ291bnQ6IHJlc3VsdC5hcHByb3hpbWF0ZV9wcmVzZW5jZV9jb3VudCxcbiAgICBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uID8/IHVuZGVmaW5lZCxcbiAgICBzdGlja2VyczogcmVzdWx0LnN0aWNrZXJzLm1hcCgoc3RpY2tlcikgPT4gYm90LnRyYW5zZm9ybWVycy5zdGlja2VyKGJvdCwgc3RpY2tlcikpLFxuICB9O1xufVxuIl19