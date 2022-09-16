export async function addReactions(bot, channelId, messageId, reactions, ordered = false) {
    if (!ordered) {
        await Promise.all(reactions.map((reaction) => bot.helpers.addReaction(channelId, messageId, reaction)));
    }
    else {
        for (const reaction of reactions) {
            bot.events.debug("Running for of loop in addReactions function.");
            await bot.helpers.addReaction(channelId, messageId, reaction);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkUmVhY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkUmVhY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxLQUFLLFVBQVUsWUFBWSxDQUNoQyxHQUFRLEVBQ1IsU0FBaUIsRUFDakIsU0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsT0FBTyxHQUFHLEtBQUs7SUFFZixJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pHO1NBQU07UUFDTCxLQUFLLE1BQU0sUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMvRDtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm90IH0gZnJvbSBcIi4uLy4uL2JvdC50c1wiO1xuXG4vKiogQWRkcyBtdWx0aXBsZSByZWFjdGlvbnMgdG8gYSBtZXNzYWdlLiBJZiBgb3JkZXJlZGAgaXMgdHJ1ZShkZWZhdWx0IGlzIGZhbHNlKSwgaXQgd2lsbCBhZGQgdGhlIHJlYWN0aW9ucyBvbmUgYXQgYSB0aW1lIGluIHRoZSBvcmRlciBwcm92aWRlZC4gTm90ZTogUmVhY3Rpb24gdGFrZXMgdGhlIGZvcm0gb2YgKipuYW1lOmlkKiogZm9yIGN1c3RvbSBndWlsZCBlbW9qaSwgb3IgVW5pY29kZSBjaGFyYWN0ZXJzLiBSZXF1aXJlcyBSRUFEX01FU1NBR0VfSElTVE9SWSBhbmQgQUREX1JFQUNUSU9OUyAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFJlYWN0aW9ucyhcbiAgYm90OiBCb3QsXG4gIGNoYW5uZWxJZDogYmlnaW50LFxuICBtZXNzYWdlSWQ6IGJpZ2ludCxcbiAgcmVhY3Rpb25zOiBzdHJpbmdbXSxcbiAgb3JkZXJlZCA9IGZhbHNlLFxuKSB7XG4gIGlmICghb3JkZXJlZCkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKHJlYWN0aW9ucy5tYXAoKHJlYWN0aW9uKSA9PiBib3QuaGVscGVycy5hZGRSZWFjdGlvbihjaGFubmVsSWQsIG1lc3NhZ2VJZCwgcmVhY3Rpb24pKSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCByZWFjdGlvbiBvZiByZWFjdGlvbnMpIHtcbiAgICAgIGJvdC5ldmVudHMuZGVidWcoXCJSdW5uaW5nIGZvciBvZiBsb29wIGluIGFkZFJlYWN0aW9ucyBmdW5jdGlvbi5cIik7XG4gICAgICBhd2FpdCBib3QuaGVscGVycy5hZGRSZWFjdGlvbihjaGFubmVsSWQsIG1lc3NhZ2VJZCwgcmVhY3Rpb24pO1xuICAgIH1cbiAgfVxufVxuIl19