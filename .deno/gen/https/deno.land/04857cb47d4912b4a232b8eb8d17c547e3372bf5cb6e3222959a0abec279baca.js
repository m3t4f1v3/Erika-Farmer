export async function getDiscovery(bot, guildId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.DISCOVERY_METADATA(guildId));
    return {
        guildId,
        primaryCategoryId: result.primary_category_id,
        keywords: result.keywords ?? undefined,
        emojiDiscoverabilityEnabled: result.emoji_discoverability_enabled,
        partnerActionedTimestamp: result.partner_actioned_timestamp
            ? Date.parse(result.partner_actioned_timestamp)
            : undefined,
        partnerApplicationTimestamp: result.partner_application_timestamp
            ? Date.parse(result.partner_application_timestamp)
            : undefined,
        categoryIds: result.category_ids,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGlzY292ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0RGlzY292ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxLQUFLLFVBQVUsWUFBWSxDQUFDLEdBQVEsRUFBRSxPQUFlO0lBQzFELE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUNqRCxDQUFDO0lBRUYsT0FBTztRQUNMLE9BQU87UUFDUCxpQkFBaUIsRUFBRSxNQUFNLENBQUMsbUJBQW1CO1FBQzdDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVM7UUFDdEMsMkJBQTJCLEVBQUUsTUFBTSxDQUFDLDZCQUE2QjtRQUNqRSx3QkFBd0IsRUFBRSxNQUFNLENBQUMsMEJBQTBCO1lBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztZQUMvQyxDQUFDLENBQUMsU0FBUztRQUNiLDJCQUEyQixFQUFFLE1BQU0sQ0FBQyw2QkFBNkI7WUFDL0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDZCQUE2QixDQUFDO1lBQ2xELENBQUMsQ0FBQyxTQUFTO1FBQ2IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxZQUFZO0tBQ2pDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkRGlzY292ZXJ5TWV0YWRhdGEgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG4vKiogUmV0dXJucyB0aGUgZGlzY292ZXJ5IG1ldGFkYXRhIG9iamVjdCBmb3IgdGhlIGd1aWxkLiBSZXF1aXJlcyB0aGUgYE1BTkFHRV9HVUlMRGAgcGVybWlzc2lvbi4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREaXNjb3ZlcnkoYm90OiBCb3QsIGd1aWxkSWQ6IGJpZ2ludCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZERpc2NvdmVyeU1ldGFkYXRhPihcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkRJU0NPVkVSWV9NRVRBREFUQShndWlsZElkKSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGd1aWxkSWQsXG4gICAgcHJpbWFyeUNhdGVnb3J5SWQ6IHJlc3VsdC5wcmltYXJ5X2NhdGVnb3J5X2lkLFxuICAgIGtleXdvcmRzOiByZXN1bHQua2V5d29yZHMgPz8gdW5kZWZpbmVkLFxuICAgIGVtb2ppRGlzY292ZXJhYmlsaXR5RW5hYmxlZDogcmVzdWx0LmVtb2ppX2Rpc2NvdmVyYWJpbGl0eV9lbmFibGVkLFxuICAgIHBhcnRuZXJBY3Rpb25lZFRpbWVzdGFtcDogcmVzdWx0LnBhcnRuZXJfYWN0aW9uZWRfdGltZXN0YW1wXG4gICAgICA/IERhdGUucGFyc2UocmVzdWx0LnBhcnRuZXJfYWN0aW9uZWRfdGltZXN0YW1wKVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgcGFydG5lckFwcGxpY2F0aW9uVGltZXN0YW1wOiByZXN1bHQucGFydG5lcl9hcHBsaWNhdGlvbl90aW1lc3RhbXBcbiAgICAgID8gRGF0ZS5wYXJzZShyZXN1bHQucGFydG5lcl9hcHBsaWNhdGlvbl90aW1lc3RhbXApXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBjYXRlZ29yeUlkczogcmVzdWx0LmNhdGVnb3J5X2lkcyxcbiAgfTtcbn1cbiJdfQ==