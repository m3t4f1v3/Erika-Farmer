export async function pruneMembers(bot, guildId, options) {
    if (options.days && options.days < 1)
        throw new Error(bot.constants.Errors.PRUNE_MIN_DAYS);
    if (options.days && options.days > 30)
        throw new Error(bot.constants.Errors.PRUNE_MAX_DAYS);
    const result = await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.GUILD_PRUNE(guildId), {
        days: options.days,
        compute_prune_count: options.computePruneCount,
        include_roles: options.includeRoles,
    });
    return result.pruned;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJ1bmVNZW1iZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJ1bmVNZW1iZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE1BQU0sQ0FBQyxLQUFLLFVBQVUsWUFBWSxDQUFDLEdBQVEsRUFBRSxPQUFlLEVBQUUsT0FBd0I7SUFDcEYsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0YsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFNUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxDQUFDLElBQUksRUFDUixNQUFNLEVBQ04sR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUN6QztRQUNFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixtQkFBbUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCO1FBQzlDLGFBQWEsRUFBRSxPQUFPLENBQUMsWUFBWTtLQUNwQyxDQUNGLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm90IH0gZnJvbSBcIi4uLy4uL2JvdC50c1wiO1xuXG4vKipcbiAqIEJlZ2luIGEgcHJ1bmUgb3BlcmF0aW9uLiBSZXF1aXJlcyB0aGUgS0lDS19NRU1CRVJTIHBlcm1pc3Npb24uIFJldHVybnMgYW4gb2JqZWN0IHdpdGggb25lICdwcnVuZWQnIGtleSBpbmRpY2F0aW5nIHRoZSBudW1iZXIgb2YgbWVtYmVycyB0aGF0IHdlcmUgcmVtb3ZlZCBpbiB0aGUgcHJ1bmUgb3BlcmF0aW9uLiBGb3IgbGFyZ2UgZ3VpbGRzIGl0J3MgcmVjb21tZW5kZWQgdG8gc2V0IHRoZSBjb21wdXRlUHJ1bmVDb3VudCBvcHRpb24gdG8gZmFsc2UsIGZvcmNpbmcgJ3BydW5lZCcgdG8gbnVsbC4gRmlyZXMgbXVsdGlwbGUgR3VpbGQgTWVtYmVyIFJlbW92ZSBHYXRld2F5IGV2ZW50cy5cbiAqXG4gKiBCeSBkZWZhdWx0LCBwcnVuZSB3aWxsIG5vdCByZW1vdmUgdXNlcnMgd2l0aCByb2xlcy4gWW91IGNhbiBvcHRpb25hbGx5IGluY2x1ZGUgc3BlY2lmaWMgcm9sZXMgaW4geW91ciBwcnVuZSBieSBwcm92aWRpbmcgdGhlIHJvbGVzIChyZXNvbHZlZCB0byBpbmNsdWRlX3JvbGVzIGludGVybmFsbHkpIHBhcmFtZXRlci4gQW55IGluYWN0aXZlIHVzZXIgdGhhdCBoYXMgYSBzdWJzZXQgb2YgdGhlIHByb3ZpZGVkIHJvbGUocykgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgcHJ1bmUgYW5kIHVzZXJzIHdpdGggYWRkaXRpb25hbCByb2xlcyB3aWxsIG5vdC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBydW5lTWVtYmVycyhib3Q6IEJvdCwgZ3VpbGRJZDogYmlnaW50LCBvcHRpb25zOiBCZWdpbkd1aWxkUHJ1bmUpIHtcbiAgaWYgKG9wdGlvbnMuZGF5cyAmJiBvcHRpb25zLmRheXMgPCAxKSB0aHJvdyBuZXcgRXJyb3IoYm90LmNvbnN0YW50cy5FcnJvcnMuUFJVTkVfTUlOX0RBWVMpO1xuICBpZiAob3B0aW9ucy5kYXlzICYmIG9wdGlvbnMuZGF5cyA+IDMwKSB0aHJvdyBuZXcgRXJyb3IoYm90LmNvbnN0YW50cy5FcnJvcnMuUFJVTkVfTUFYX0RBWVMpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDx7IHBydW5lZDogbnVtYmVyIH0+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUE9TVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkdVSUxEX1BSVU5FKGd1aWxkSWQpLFxuICAgIHtcbiAgICAgIGRheXM6IG9wdGlvbnMuZGF5cyxcbiAgICAgIGNvbXB1dGVfcHJ1bmVfY291bnQ6IG9wdGlvbnMuY29tcHV0ZVBydW5lQ291bnQsXG4gICAgICBpbmNsdWRlX3JvbGVzOiBvcHRpb25zLmluY2x1ZGVSb2xlcyxcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiByZXN1bHQucHJ1bmVkO1xufVxuXG4vKiogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2d1aWxkI2JlZ2luLWd1aWxkLXBydW5lICovXG5leHBvcnQgaW50ZXJmYWNlIEJlZ2luR3VpbGRQcnVuZSB7XG4gIC8qKiBOdW1iZXIgb2YgZGF5cyB0byBwcnVuZSAoMSBvciBtb3JlKSwgZGVmYXVsdDogNyAqL1xuICBkYXlzPzogbnVtYmVyO1xuICAvKiogV2hldGhlciAncHJ1bmVkJyBpcyByZXR1cm5lZCwgZGlzY291cmFnZWQgZm9yIGxhcmdlIGd1aWxkcywgZGVmYXVsdDogdHJ1ZSAqL1xuICBjb21wdXRlUHJ1bmVDb3VudD86IGJvb2xlYW47XG4gIC8qKiBSb2xlKHMpIHJvIGluY2x1ZGUsIGRlZmF1bHQ6IG5vbmUgKi9cbiAgaW5jbHVkZVJvbGVzPzogc3RyaW5nW107XG59XG4iXX0=