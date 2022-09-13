/** Create a new role for the guild. Requires the MANAGE_ROLES permission. */ export async function createRole(bot, guildId, options, reason) {
    const result = await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.GUILD_ROLES(guildId), {
        name: options.name,
        color: options.color,
        hoist: options.hoist,
        mentionable: options.mentionable,
        permissions: bot.utils.calculateBits(options?.permissions || []),
        icon: options.icon,
        unicode_emoji: options.unicodeEmoji,
        reason
    });
    return bot.transformers.role(bot, {
        role: result,
        guildId
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRSb2xlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IFBlcm1pc3Npb25TdHJpbmdzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3NoYXJlZC50c1wiO1xuXG4vKiogQ3JlYXRlIGEgbmV3IHJvbGUgZm9yIHRoZSBndWlsZC4gUmVxdWlyZXMgdGhlIE1BTkFHRV9ST0xFUyBwZXJtaXNzaW9uLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJvbGUoYm90OiBCb3QsIGd1aWxkSWQ6IGJpZ2ludCwgb3B0aW9uczogQ3JlYXRlR3VpbGRSb2xlLCByZWFzb24/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPERpc2NvcmRSb2xlPihib3QucmVzdCwgXCJQT1NUXCIsIGJvdC5jb25zdGFudHMucm91dGVzLkdVSUxEX1JPTEVTKGd1aWxkSWQpLCB7XG4gICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yLFxuICAgIGhvaXN0OiBvcHRpb25zLmhvaXN0LFxuICAgIG1lbnRpb25hYmxlOiBvcHRpb25zLm1lbnRpb25hYmxlLFxuICAgIHBlcm1pc3Npb25zOiBib3QudXRpbHMuY2FsY3VsYXRlQml0cyhvcHRpb25zPy5wZXJtaXNzaW9ucyB8fCBbXSksXG4gICAgaWNvbjogb3B0aW9ucy5pY29uLFxuICAgIHVuaWNvZGVfZW1vamk6IG9wdGlvbnMudW5pY29kZUVtb2ppLFxuICAgIHJlYXNvbixcbiAgfSk7XG5cbiAgcmV0dXJuIGJvdC50cmFuc2Zvcm1lcnMucm9sZShib3QsIHtcbiAgICByb2xlOiByZXN1bHQsXG4gICAgZ3VpbGRJZCxcbiAgfSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlR3VpbGRSb2xlIHtcbiAgLyoqIE5hbWUgb2YgdGhlIHJvbGUsIGRlZmF1bHQ6IFwibmV3IHJvbGVcIiAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKiogQml0d2lzZSB2YWx1ZSBvZiB0aGUgZW5hYmxlZC9kaXNhYmxlZCBwZXJtaXNzaW9ucywgZGVmYXVsdDogZXZlcnlvbmUgcGVybWlzc2lvbnMgaW4gZ3VpbGQgKi9cbiAgcGVybWlzc2lvbnM/OiBQZXJtaXNzaW9uU3RyaW5nc1tdO1xuICAvKiogUkdCIGNvbG9yIHZhbHVlLCBkZWZhdWx0OiAwICovXG4gIGNvbG9yPzogbnVtYmVyO1xuICAvKiogV2hldGhlciB0aGUgcm9sZSBzaG91bGQgYmUgZGlzcGxheWVkIHNlcGFyYXRlbHkgaW4gdGhlIHNpZGViYXIsIGRlZmF1bHQ6IGZhbHNlICovXG4gIGhvaXN0PzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgdGhlIHJvbGUgc2hvdWxkIGJlIG1lbnRpb25hYmxlLCBkZWZhdWx0OiBmYWxzZSAqL1xuICBtZW50aW9uYWJsZT86IGJvb2xlYW47XG4gIC8qKiBUaGUgcm9sZSdzIHVuaWNvZGUgZW1vamkgKGlmIHRoZSBndWlsZCBoYXMgdGhlIGBST0xFX0lDT05TYCBmZWF0dXJlKSAqL1xuICB1bmljb2RlRW1vamk/OiBzdHJpbmc7XG4gIC8qKiB0aGUgcm9sZSdzIGljb24gaW1hZ2UgKGlmIHRoZSBndWlsZCBoYXMgdGhlIGBST0xFX0lDT05TYCBmZWF0dXJlKSAqL1xuICBpY29uPzogc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLDZFQUE2RSxDQUM3RSxPQUFPLGVBQWUsVUFBVSxDQUFDLEdBQVEsRUFBRSxPQUFlLEVBQUUsT0FBd0IsRUFBRSxNQUFlLEVBQUU7SUFDckcsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBYyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDaEgsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1FBQ2hDLFdBQVcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUNoRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxZQUFZO1FBQ25DLE1BQU07S0FDUCxDQUFDLEFBQUM7SUFFSCxPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNoQyxJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU87S0FDUixDQUFDLENBQUM7Q0FDSiJ9