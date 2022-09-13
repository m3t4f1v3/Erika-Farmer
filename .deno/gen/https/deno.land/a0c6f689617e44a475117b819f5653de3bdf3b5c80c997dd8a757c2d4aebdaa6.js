/** Ban a user from the guild and optionally delete previous messages sent by the user. Requires the BAN_MEMBERS permission. */ export async function banMember(bot, guildId, id, options) {
    await bot.rest.runMethod(bot.rest, "PUT", bot.constants.routes.GUILD_BAN(guildId, id), options ? {
        delete_message_days: options.deleteMessageDays,
        reason: options.reason
    } : {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIEJhbiBhIHVzZXIgZnJvbSB0aGUgZ3VpbGQgYW5kIG9wdGlvbmFsbHkgZGVsZXRlIHByZXZpb3VzIG1lc3NhZ2VzIHNlbnQgYnkgdGhlIHVzZXIuIFJlcXVpcmVzIHRoZSBCQU5fTUVNQkVSUyBwZXJtaXNzaW9uLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJhbk1lbWJlcihib3Q6IEJvdCwgZ3VpbGRJZDogYmlnaW50LCBpZDogYmlnaW50LCBvcHRpb25zPzogQ3JlYXRlR3VpbGRCYW4pIHtcbiAgYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPHVuZGVmaW5lZD4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJQVVRcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5HVUlMRF9CQU4oZ3VpbGRJZCwgaWQpLFxuICAgIG9wdGlvbnNcbiAgICAgID8ge1xuICAgICAgICBkZWxldGVfbWVzc2FnZV9kYXlzOiBvcHRpb25zLmRlbGV0ZU1lc3NhZ2VEYXlzLFxuICAgICAgICByZWFzb246IG9wdGlvbnMucmVhc29uLFxuICAgICAgfVxuICAgICAgOiB7fSxcbiAgKTtcbn1cblxuLyoqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZCNjcmVhdGUtZ3VpbGQtYmFuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUd1aWxkQmFuIHtcbiAgLyoqIE51bWJlciBvZiBkYXlzIHRvIGRlbGV0ZSBtZXNzYWdlcyBmb3IgKDAtNykgKi9cbiAgZGVsZXRlTWVzc2FnZURheXM/OiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNztcbiAgLyoqIFJlYXNvbiBmb3IgdGhlIGJhbiAqL1xuICByZWFzb24/OiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsK0hBQStILENBQy9ILE9BQU8sZUFBZSxTQUFTLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRSxFQUFVLEVBQUUsT0FBd0IsRUFBRTtJQUMvRixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUN0QixHQUFHLENBQUMsSUFBSSxFQUNSLEtBQUssRUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUMzQyxPQUFPLEdBQ0g7UUFDQSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCO1FBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtLQUN2QixHQUNDLEVBQUUsQ0FDUCxDQUFDO0NBQ0gifQ==