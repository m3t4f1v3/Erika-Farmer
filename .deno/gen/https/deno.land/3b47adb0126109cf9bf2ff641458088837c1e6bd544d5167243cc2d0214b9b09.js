/** Returns the code and uses of the vanity url for this server if it is enabled else `code` will be null. Requires the `MANAGE_GUILD` permission. */ export async function getVanityUrl(bot, guildId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.GUILD_VANITY_URL(guildId));
    return {
        uses: result.uses,
        code: result.code
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRJbnZpdGVNZXRhZGF0YSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbi8qKiBSZXR1cm5zIHRoZSBjb2RlIGFuZCB1c2VzIG9mIHRoZSB2YW5pdHkgdXJsIGZvciB0aGlzIHNlcnZlciBpZiBpdCBpcyBlbmFibGVkIGVsc2UgYGNvZGVgIHdpbGwgYmUgbnVsbC4gUmVxdWlyZXMgdGhlIGBNQU5BR0VfR1VJTERgIHBlcm1pc3Npb24uICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VmFuaXR5VXJsKGJvdDogQm90LCBndWlsZElkOiBiaWdpbnQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPFBhcnRpYWw8RGlzY29yZEludml0ZU1ldGFkYXRhPj4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJHRVRcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5HVUlMRF9WQU5JVFlfVVJMKGd1aWxkSWQpLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgdXNlczogcmVzdWx0LnVzZXMsXG4gICAgY29kZTogcmVzdWx0LmNvZGUsXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EscUpBQXFKLENBQ3JKLE9BQU8sZUFBZSxZQUFZLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRTtJQUM1RCxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLEtBQUssRUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FDL0MsQUFBQztJQUVGLE9BQU87UUFDTCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0tBQ2xCLENBQUM7Q0FDSCJ9