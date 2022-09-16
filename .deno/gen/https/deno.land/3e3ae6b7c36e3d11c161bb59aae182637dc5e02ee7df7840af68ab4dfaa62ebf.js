export default function createGuild(bot) {
    const createGuildOld = bot.helpers.createGuild;
    bot.helpers.createGuild = async function (options) {
        if (bot.guilds.size > 10) {
            throw new Error("A bot can not create a guild if it is already in 10 guilds.");
        }
        if (options.name &&
            !bot.utils.validateLength(options.name, { min: 2, max: 100 })) {
            throw new Error("The guild name must be between 2 and 100 characters.");
        }
        return await createGuildOld(options);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlR3VpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGVHdWlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsT0FBTyxVQUFVLFdBQVcsQ0FBQyxHQUFpQjtJQUNuRCxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUUvQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLFdBQVcsT0FBTztRQUMvQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUNiLDZEQUE2RCxDQUM5RCxDQUFDO1NBQ0g7UUFFRCxJQUNFLE9BQU8sQ0FBQyxJQUFJO1lBQ1osQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFDN0Q7WUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDekU7UUFFRCxPQUFPLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHdWlsZChib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBjcmVhdGVHdWlsZE9sZCA9IGJvdC5oZWxwZXJzLmNyZWF0ZUd1aWxkO1xuXG4gIGJvdC5oZWxwZXJzLmNyZWF0ZUd1aWxkID0gYXN5bmMgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAoYm90Lmd1aWxkcy5zaXplID4gMTApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJBIGJvdCBjYW4gbm90IGNyZWF0ZSBhIGd1aWxkIGlmIGl0IGlzIGFscmVhZHkgaW4gMTAgZ3VpbGRzLlwiLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvcHRpb25zLm5hbWUgJiZcbiAgICAgICFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgob3B0aW9ucy5uYW1lLCB7IG1pbjogMiwgbWF4OiAxMDAgfSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBndWlsZCBuYW1lIG11c3QgYmUgYmV0d2VlbiAyIGFuZCAxMDAgY2hhcmFjdGVycy5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGNyZWF0ZUd1aWxkT2xkKG9wdGlvbnMpO1xuICB9O1xufVxuIl19