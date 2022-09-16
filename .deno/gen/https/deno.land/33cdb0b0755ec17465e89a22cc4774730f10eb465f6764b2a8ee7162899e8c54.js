export function setupCacheEdits(bot) {
    const { GUILD_MEMBER_ADD, GUILD_MEMBER_REMOVE, MESSAGE_REACTION_ADD, MESSAGE_REACTION_REMOVE, MESSAGE_REACTION_REMOVE_ALL, } = bot.handlers;
    bot.handlers.GUILD_MEMBER_ADD = function (_, data, shardId) {
        const payload = data.d;
        const guild = bot.guilds.get(bot.transformers.snowflake(payload.guild_id));
        if (guild)
            guild.memberCount++;
        GUILD_MEMBER_ADD(bot, data, shardId);
    };
    bot.handlers.GUILD_MEMBER_REMOVE = function (_, data, shardId) {
        const payload = data.d;
        const guild = bot.guilds.get(bot.transformers.snowflake(payload.guild_id));
        if (guild)
            guild.memberCount--;
        GUILD_MEMBER_REMOVE(bot, data, shardId);
    };
    bot.handlers.MESSAGE_REACTION_ADD = function (_, data, shardId) {
        const payload = data.d;
        const messageId = bot.transformers.snowflake(payload.message_id);
        const message = bot.messages.get(messageId);
        const emoji = bot.transformers.emoji(bot, payload.emoji);
        if (message) {
            const reactions = message.reactions?.map((r) => r.emoji.name);
            const toSet = {
                count: 1,
                me: bot.transformers.snowflake(payload.user_id) === bot.id,
                emoji: emoji,
            };
            if (!message.reactions || !reactions) {
                message.reactions = [toSet];
            }
            else if (!reactions.includes(emoji.name)) {
                message.reactions?.push(toSet);
            }
            else {
                const current = message.reactions?.[reactions.indexOf(emoji.name)];
                if (current) {
                    current.count++;
                }
            }
        }
        MESSAGE_REACTION_ADD(bot, data, shardId);
    };
    bot.handlers.MESSAGE_REACTION_REMOVE = function (_, data, shardId) {
        const payload = data.d;
        const messageId = bot.transformers.snowflake(payload.message_id);
        const message = bot.messages.get(messageId);
        const emoji = bot.transformers.emoji(bot, payload.emoji);
        if (message) {
            const reactions = message.reactions?.map((r) => r.emoji.name);
            if (reactions?.indexOf(emoji.name) !== undefined) {
                const current = message.reactions?.[reactions.indexOf(emoji.name)];
                if (current) {
                    if (current.count > 0) {
                        current.count--;
                    }
                    if (current.count === 0) {
                        message.reactions?.splice(reactions?.indexOf(emoji.name), 1);
                    }
                }
            }
        }
        MESSAGE_REACTION_REMOVE(bot, data, shardId);
    };
    bot.handlers.MESSAGE_REACTION_REMOVE_ALL = function (_, data, shardId) {
        const payload = data.d;
        const messageId = bot.transformers.snowflake(payload.message_id);
        const message = bot.messages.get(messageId);
        if (message) {
            message.reactions = undefined;
        }
        MESSAGE_REACTION_REMOVE_ALL(bot, data, shardId);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXBDYWNoZUVkaXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dXBDYWNoZUVkaXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE1BQU0sVUFBVSxlQUFlLENBQWdCLEdBQW9CO0lBQ2pFLE1BQU0sRUFDSixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsMkJBQTJCLEdBQzVCLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUVqQixHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUEwQixDQUFDO1FBRWhELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTNFLElBQUksS0FBSztZQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUvQixnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztJQUVGLEdBQUcsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFDM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQTZCLENBQUM7UUFFbkQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFM0UsSUFBSSxLQUFLO1lBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9CLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFD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LEVBQUU7d0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDakI7b0JBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTt3QkFDdkIsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQzlEO2lCQUVGO2FBQ0Y7U0FDRjtRQUVELHVCQUF1QixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0lBRUYsR0FBRyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsR0FBRyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTztRQUNuRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBb0MsQ0FBQztRQUUxRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakUsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUMsSUFBSSxPQUFPLEVBQUU7WUFFWCxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUMvQjtRQUVELDJCQUEyQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgQm90LFxuICBEaXNjb3JkR3VpbGRNZW1iZXJBZGQsXG4gIERpc2NvcmRHdWlsZE1lbWJlclJlbW92ZSxcbiAgRGlzY29yZE1lc3NhZ2VSZWFjdGlvbkFkZCxcbiAgRGlzY29yZE1lc3NhZ2VSZWFjdGlvblJlbW92ZSxcbiAgRGlzY29yZE1lc3NhZ2VSZWFjdGlvblJlbW92ZUFsbCxcbn0gZnJvbSBcIi4uL2RlcHMudHNcIjtcbmltcG9ydCB0eXBlIHsgQm90V2l0aENhY2hlIH0gZnJvbSBcIi4vYWRkQ2FjaGVDb2xsZWN0aW9ucy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBDYWNoZUVkaXRzPEIgZXh0ZW5kcyBCb3Q+KGJvdDogQm90V2l0aENhY2hlPEI+KSB7XG4gIGNvbnN0IHtcbiAgICBHVUlMRF9NRU1CRVJfQURELFxuICAgIEdVSUxEX01FTUJFUl9SRU1PVkUsXG4gICAgTUVTU0FHRV9SRUFDVElPTl9BREQsXG4gICAgTUVTU0FHRV9SRUFDVElPTl9SRU1PVkUsXG4gICAgTUVTU0FHRV9SRUFDVElPTl9SRU1PVkVfQUxMLFxuICB9ID0gYm90LmhhbmRsZXJzO1xuXG4gIGJvdC5oYW5kbGVycy5HVUlMRF9NRU1CRVJfQUREID0gZnVuY3Rpb24gKF8sIGRhdGEsIHNoYXJkSWQpIHtcbiAgICBjb25zdCBwYXlsb2FkID0gZGF0YS5kIGFzIERpc2NvcmRHdWlsZE1lbWJlckFkZDtcblxuICAgIGNvbnN0IGd1aWxkID0gYm90Lmd1aWxkcy5nZXQoYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZF9pZCkpO1xuXG4gICAgaWYgKGd1aWxkKSBndWlsZC5tZW1iZXJDb3VudCsrO1xuXG4gICAgR1VJTERfTUVNQkVSX0FERChib3QsIGRhdGEsIHNoYXJkSWQpO1xuICB9O1xuXG4gIGJvdC5oYW5kbGVycy5HVUlMRF9NRU1CRVJfUkVNT1ZFID0gZnVuY3Rpb24gKF8sIGRhdGEsIHNoYXJkSWQpIHtcbiAgICBjb25zdCBwYXlsb2FkID0gZGF0YS5kIGFzIERpc2NvcmRHdWlsZE1lbWJlclJlbW92ZTtcblxuICAgIGNvbnN0IGd1aWxkID0gYm90Lmd1aWxkcy5nZXQoYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZF9pZCkpO1xuXG4gICAgaWYgKGd1aWxkKSBndWlsZC5tZW1iZXJDb3VudC0tO1xuXG4gICAgR1VJTERfTUVNQkVSX1JFTU9WRShib3QsIGRhdGEsIHNoYXJkSWQpO1xuICB9O1xuXG4gIGJvdC5oYW5kbGVycy5NRVNTQUdFX1JFQUNUSU9OX0FERCA9IGZ1bmN0aW9uIChfLCBkYXRhLCBzaGFyZElkKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGRhdGEuZCBhcyBEaXNjb3JkTWVzc2FnZVJlYWN0aW9uQWRkO1xuXG4gICAgY29uc3QgbWVzc2FnZUlkID0gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5tZXNzYWdlX2lkKTtcbiAgICBjb25zdCBtZXNzYWdlID0gYm90Lm1lc3NhZ2VzLmdldChtZXNzYWdlSWQpO1xuXG4gICAgY29uc3QgZW1vamkgPSBib3QudHJhbnNmb3JtZXJzLmVtb2ppKGJvdCwgcGF5bG9hZC5lbW9qaSk7XG5cbiAgICAvLyBpZiB0aGUgbWVzc2FnZSBpcyBjYWNoZWRcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgY29uc3QgcmVhY3Rpb25zID0gbWVzc2FnZS5yZWFjdGlvbnM/Lm1hcCgocikgPT4gci5lbW9qaS5uYW1lKTtcbiAgICAgIGNvbnN0IHRvU2V0ID0ge1xuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgbWU6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQudXNlcl9pZCkgPT09IGJvdC5pZCxcbiAgICAgICAgZW1vamk6IGVtb2ppLFxuICAgICAgfTtcblxuICAgICAgLy8gaWYgdGhlcmVzIG5vIHJlYWN0aW9uIGFkZCBpdFxuICAgICAgaWYgKCFtZXNzYWdlLnJlYWN0aW9ucyB8fCAhcmVhY3Rpb25zKSB7XG4gICAgICAgIG1lc3NhZ2UucmVhY3Rpb25zID0gW3RvU2V0XTtcbiAgICAgIH0gZWxzZSBpZiAoIXJlYWN0aW9ucy5pbmNsdWRlcyhlbW9qaS5uYW1lKSkge1xuICAgICAgICBtZXNzYWdlLnJlYWN0aW9ucz8ucHVzaCh0b1NldCk7XG4gICAgICB9IGVsc2UgeyAvLyBvdGhlcndpc2UgdGhlIHJlYWN0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgc28gKzEgdG8gdGhlIHJlYWN0aW9uIGNvdW50XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBtZXNzYWdlLnJlYWN0aW9ucz8uW3JlYWN0aW9ucy5pbmRleE9mKGVtb2ppLm5hbWUpXTtcblxuICAgICAgICAvLyByZXdyaXRlXG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgY3VycmVudC5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgTUVTU0FHRV9SRUFDVElPTl9BREQoYm90LCBkYXRhLCBzaGFyZElkKTtcbiAgfTtcblxuICBib3QuaGFuZGxlcnMuTUVTU0FHRV9SRUFDVElPTl9SRU1PVkUgPSBmdW5jdGlvbiAoXywgZGF0YSwgc2hhcmRJZCkge1xuICAgIGNvbnN0IHBheWxvYWQgPSBkYXRhLmQgYXMgRGlzY29yZE1lc3NhZ2VSZWFjdGlvblJlbW92ZTtcblxuICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQubWVzc2FnZV9pZCk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGJvdC5tZXNzYWdlcy5nZXQobWVzc2FnZUlkKTtcblxuICAgIGNvbnN0IGVtb2ppID0gYm90LnRyYW5zZm9ybWVycy5lbW9qaShib3QsIHBheWxvYWQuZW1vamkpO1xuXG4gICAgLy8gaWYgdGhlIG1lc3NhZ2UgaXMgY2FjaGVkXG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IHJlYWN0aW9ucyA9IG1lc3NhZ2UucmVhY3Rpb25zPy5tYXAoKHIpID0+IHIuZW1vamkubmFtZSk7XG5cbiAgICAgIGlmIChyZWFjdGlvbnM/LmluZGV4T2YoZW1vamkubmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gbWVzc2FnZS5yZWFjdGlvbnM/LltyZWFjdGlvbnMuaW5kZXhPZihlbW9qaS5uYW1lKV07XG5cbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICBpZiAoY3VycmVudC5jb3VudCA+IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnQuY291bnQtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZGVsZXRlIHdoZW4gY291bnQgaXMgMFxuICAgICAgICAgIGlmIChjdXJyZW50LmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBtZXNzYWdlLnJlYWN0aW9ucz8uc3BsaWNlKHJlYWN0aW9ucz8uaW5kZXhPZihlbW9qaS5uYW1lKSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdoZW4gc29tZW9uZSBkZWxldGVkIGEgcmVhY3Rpb24gdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBjYWNoZSBqdXN0IHBhc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIE1FU1NBR0VfUkVBQ1RJT05fUkVNT1ZFKGJvdCwgZGF0YSwgc2hhcmRJZCk7XG4gIH07XG5cbiAgYm90LmhhbmRsZXJzLk1FU1NBR0VfUkVBQ1RJT05fUkVNT1ZFX0FMTCA9IGZ1bmN0aW9uIChfLCBkYXRhLCBzaGFyZElkKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGRhdGEuZCBhcyBEaXNjb3JkTWVzc2FnZVJlYWN0aW9uUmVtb3ZlQWxsO1xuXG4gICAgY29uc3QgbWVzc2FnZUlkID0gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5tZXNzYWdlX2lkKTtcbiAgICBjb25zdCBtZXNzYWdlID0gYm90Lm1lc3NhZ2VzLmdldChtZXNzYWdlSWQpO1xuXG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIC8vIHdoZW4gYW4gYWRtaW4gZGVsZXRlZCBhbGwgdGhlIHJlYWN0aW9ucyBvZiBhIG1lc3NhZ2VcbiAgICAgIG1lc3NhZ2UucmVhY3Rpb25zID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIE1FU1NBR0VfUkVBQ1RJT05fUkVNT1ZFX0FMTChib3QsIGRhdGEsIHNoYXJkSWQpO1xuICB9O1xufVxuIl19