export async function deleteIntegration(bot, guildId, id) {
    await bot.rest.runMethod(bot.rest, "DELETE", bot.constants.routes.GUILD_INTEGRATION(guildId, id));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlSW50ZWdyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWxldGVJbnRlZ3JhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLENBQUMsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEdBQVEsRUFBRSxPQUFlLEVBQUUsRUFBVTtJQUMzRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9HLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIERlbGV0ZSB0aGUgYXR0YWNoZWQgaW50ZWdyYXRpb24gb2JqZWN0IGZvciB0aGUgZ3VpbGQgd2l0aCB0aGlzIGlkLiBSZXF1aXJlcyBNQU5BR0VfR1VJTEQgcGVybWlzc2lvbi4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnRlZ3JhdGlvbihib3Q6IEJvdCwgZ3VpbGRJZDogYmlnaW50LCBpZDogYmlnaW50KSB7XG4gIGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDx1bmRlZmluZWQ+KGJvdC5yZXN0LCBcIkRFTEVURVwiLCBib3QuY29uc3RhbnRzLnJvdXRlcy5HVUlMRF9JTlRFR1JBVElPTihndWlsZElkLCBpZCkpO1xufVxuIl19