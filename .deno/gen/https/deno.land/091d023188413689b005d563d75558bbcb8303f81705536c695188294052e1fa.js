/** Modify the given emoji. Requires the MANAGE_EMOJIS permission. */ export async function editEmoji(bot, guildId, id, options) {
    const result = await bot.rest.runMethod(bot.rest, "PATCH", bot.constants.routes.GUILD_EMOJI(guildId, id), {
        name: options.name,
        // NEED TERNARY TO SUPPORT NULL AS VALID
        roles: options.roles ? options.roles.map((role)=>role.toString()
        ) : options.roles
    });
    return bot.transformers.emoji(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRFbW9qaSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbi8qKiBNb2RpZnkgdGhlIGdpdmVuIGVtb2ppLiBSZXF1aXJlcyB0aGUgTUFOQUdFX0VNT0pJUyBwZXJtaXNzaW9uLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVkaXRFbW9qaShib3Q6IEJvdCwgZ3VpbGRJZDogYmlnaW50LCBpZDogYmlnaW50LCBvcHRpb25zOiBNb2RpZnlHdWlsZEVtb2ppKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkRW1vamk+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUEFUQ0hcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5HVUlMRF9FTU9KSShndWlsZElkLCBpZCksXG4gICAge1xuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgICAgLy8gTkVFRCBURVJOQVJZIFRPIFNVUFBPUlQgTlVMTCBBUyBWQUxJRFxuICAgICAgcm9sZXM6IG9wdGlvbnMucm9sZXMgPyBvcHRpb25zLnJvbGVzLm1hcCgocm9sZSkgPT4gcm9sZS50b1N0cmluZygpKSA6IG9wdGlvbnMucm9sZXMsXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy5lbW9qaShib3QsIHJlc3VsdCk7XG59XG5cbi8qKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvZW1vamkjbW9kaWZ5LWd1aWxkLWVtb2ppICovXG5leHBvcnQgaW50ZXJmYWNlIE1vZGlmeUd1aWxkRW1vamkge1xuICAvKiogTmFtZSBvZiB0aGUgZW1vamkgKi9cbiAgbmFtZT86IHN0cmluZztcbiAgLyoqIFJvbGVzIGFsbG93ZWQgdG8gdXNlIHRoaXMgZW1vamkgKi9cbiAgcm9sZXM/OiBiaWdpbnRbXSB8IG51bGw7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EscUVBQXFFLENBQ3JFLE9BQU8sZUFBZSxTQUFTLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRSxFQUFVLEVBQUUsT0FBeUIsRUFBRTtJQUNoRyxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLE9BQU8sRUFDUCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUM3QztRQUNFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQix3Q0FBd0M7UUFDeEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUFBLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSztLQUNwRixDQUNGLEFBQUM7SUFFRixPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUM1QyJ9