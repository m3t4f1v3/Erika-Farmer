/** Modify the discovery metadata for the guild. Requires the MANAGE_GUILD permission. Returns the updated discovery metadata object on success. */ export async function editDiscovery(bot, guildId, data) {
    const result = await bot.rest.runMethod(bot.rest, "PATCH", bot.constants.routes.DISCOVERY_METADATA(guildId), {
        primary_category_id: data.primaryCategoryId,
        keywords: data.keywords,
        emoji_discoverability_enabled: data.emojiDiscoverabilityEnabled
    });
    return {
        guildId,
        primaryCategoryId: result.primary_category_id,
        keywords: result.keywords ?? undefined,
        emojiDiscoverabilityEnabled: result.emoji_discoverability_enabled,
        partnerActionedTimestamp: result.partner_actioned_timestamp ? Date.parse(result.partner_actioned_timestamp) : undefined,
        partnerApplicationTimestamp: result.partner_application_timestamp ? Date.parse(result.partner_application_timestamp) : undefined,
        categoryIds: result.category_ids
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmREaXNjb3ZlcnlNZXRhZGF0YSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbi8qKiBNb2RpZnkgdGhlIGRpc2NvdmVyeSBtZXRhZGF0YSBmb3IgdGhlIGd1aWxkLiBSZXF1aXJlcyB0aGUgTUFOQUdFX0dVSUxEIHBlcm1pc3Npb24uIFJldHVybnMgdGhlIHVwZGF0ZWQgZGlzY292ZXJ5IG1ldGFkYXRhIG9iamVjdCBvbiBzdWNjZXNzLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVkaXREaXNjb3ZlcnkoYm90OiBCb3QsIGd1aWxkSWQ6IGJpZ2ludCwgZGF0YTogTW9kaWZ5R3VpbGREaXNjb3ZlcnlNZXRhZGF0YSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZERpc2NvdmVyeU1ldGFkYXRhPihcbiAgICBib3QucmVzdCxcbiAgICBcIlBBVENIXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuRElTQ09WRVJZX01FVEFEQVRBKGd1aWxkSWQpLFxuICAgIHtcbiAgICAgIHByaW1hcnlfY2F0ZWdvcnlfaWQ6IGRhdGEucHJpbWFyeUNhdGVnb3J5SWQsXG4gICAgICBrZXl3b3JkczogZGF0YS5rZXl3b3JkcyxcbiAgICAgIGVtb2ppX2Rpc2NvdmVyYWJpbGl0eV9lbmFibGVkOiBkYXRhLmVtb2ppRGlzY292ZXJhYmlsaXR5RW5hYmxlZCxcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgZ3VpbGRJZCxcbiAgICBwcmltYXJ5Q2F0ZWdvcnlJZDogcmVzdWx0LnByaW1hcnlfY2F0ZWdvcnlfaWQsXG4gICAga2V5d29yZHM6IHJlc3VsdC5rZXl3b3JkcyA/PyB1bmRlZmluZWQsXG4gICAgZW1vamlEaXNjb3ZlcmFiaWxpdHlFbmFibGVkOiByZXN1bHQuZW1vamlfZGlzY292ZXJhYmlsaXR5X2VuYWJsZWQsXG4gICAgcGFydG5lckFjdGlvbmVkVGltZXN0YW1wOiByZXN1bHQucGFydG5lcl9hY3Rpb25lZF90aW1lc3RhbXBcbiAgICAgID8gRGF0ZS5wYXJzZShyZXN1bHQucGFydG5lcl9hY3Rpb25lZF90aW1lc3RhbXApXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBwYXJ0bmVyQXBwbGljYXRpb25UaW1lc3RhbXA6IHJlc3VsdC5wYXJ0bmVyX2FwcGxpY2F0aW9uX3RpbWVzdGFtcFxuICAgICAgPyBEYXRlLnBhcnNlKHJlc3VsdC5wYXJ0bmVyX2FwcGxpY2F0aW9uX3RpbWVzdGFtcClcbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIGNhdGVnb3J5SWRzOiByZXN1bHQuY2F0ZWdvcnlfaWRzLFxuICB9O1xufVxuXG4vLyBUT0RPOiBhZGQgZG9jcyBsaW5rXG5leHBvcnQgaW50ZXJmYWNlIE1vZGlmeUd1aWxkRGlzY292ZXJ5TWV0YWRhdGEge1xuICAvKiogVGhlIGlkIG9mIHRoZSBwcmltYXJ5IGRpc2NvdmVyeSBjYXRlZ29yeS4gRGVmYXVsdDogMCAqL1xuICBwcmltYXJ5Q2F0ZWdvcnlJZD86IG51bWJlciB8IG51bGw7XG4gIC8qKiBVcCB0byAxMCBkaXNjb3Zlcnkgc2VhcmNoIGtleXdvcmRzLiBEZWZhdWx0OiBudWxsICovXG4gIGtleXdvcmRzPzogc3RyaW5nW10gfCBudWxsO1xuICAvKiogV2hldGhlciBndWlsZCBpbmZvIGlzIHNob3duIHdoZW4gY3VzdG9tIGVtb2ppcyBhcmUgY2xpY2tlZC4gRGVmYXVsdDogdHJ1ZSAqL1xuICBlbW9qaURpc2NvdmVyYWJpbGl0eUVuYWJsZWQ/OiBib29sZWFuIHwgbnVsbDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxtSkFBbUosQ0FDbkosT0FBTyxlQUFlLGFBQWEsQ0FBQyxHQUFRLEVBQUUsT0FBZSxFQUFFLElBQWtDLEVBQUU7SUFDakcsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxDQUFDLElBQUksRUFDUixPQUFPLEVBQ1AsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQ2hEO1FBQ0UsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtRQUMzQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLDJCQUEyQjtLQUNoRSxDQUNGLEFBQUM7SUFFRixPQUFPO1FBQ0wsT0FBTztRQUNQLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7UUFDN0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUksU0FBUztRQUN0QywyQkFBMkIsRUFBRSxNQUFNLENBQUMsNkJBQTZCO1FBQ2pFLHdCQUF3QixFQUFFLE1BQU0sQ0FBQywwQkFBMEIsR0FDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsR0FDN0MsU0FBUztRQUNiLDJCQUEyQixFQUFFLE1BQU0sQ0FBQyw2QkFBNkIsR0FDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsR0FDaEQsU0FBUztRQUNiLFdBQVcsRUFBRSxNQUFNLENBQUMsWUFBWTtLQUNqQyxDQUFDO0NBQ0gifQ==