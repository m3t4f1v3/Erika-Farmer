/** Create a reaction for the message. Reaction takes the form of **name:id** for custom guild emoji, or Unicode characters. Requires READ_MESSAGE_HISTORY and ADD_REACTIONS */ export async function addReaction(bot, channelId, messageId, reaction) {
    if (reaction.startsWith("<:")) {
        reaction = reaction.substring(2, reaction.length - 1);
    } else if (reaction.startsWith("<a:")) {
        reaction = reaction.substring(3, reaction.length - 1);
    }
    await bot.rest.runMethod(bot.rest, "PUT", bot.constants.routes.CHANNEL_MESSAGE_REACTION_ME(channelId, messageId, reaction), {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIENyZWF0ZSBhIHJlYWN0aW9uIGZvciB0aGUgbWVzc2FnZS4gUmVhY3Rpb24gdGFrZXMgdGhlIGZvcm0gb2YgKipuYW1lOmlkKiogZm9yIGN1c3RvbSBndWlsZCBlbW9qaSwgb3IgVW5pY29kZSBjaGFyYWN0ZXJzLiBSZXF1aXJlcyBSRUFEX01FU1NBR0VfSElTVE9SWSBhbmQgQUREX1JFQUNUSU9OUyAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFJlYWN0aW9uKGJvdDogQm90LCBjaGFubmVsSWQ6IGJpZ2ludCwgbWVzc2FnZUlkOiBiaWdpbnQsIHJlYWN0aW9uOiBzdHJpbmcpIHtcbiAgaWYgKHJlYWN0aW9uLnN0YXJ0c1dpdGgoXCI8OlwiKSkge1xuICAgIHJlYWN0aW9uID0gcmVhY3Rpb24uc3Vic3RyaW5nKDIsIHJlYWN0aW9uLmxlbmd0aCAtIDEpO1xuICB9IGVsc2UgaWYgKHJlYWN0aW9uLnN0YXJ0c1dpdGgoXCI8YTpcIikpIHtcbiAgICByZWFjdGlvbiA9IHJlYWN0aW9uLnN1YnN0cmluZygzLCByZWFjdGlvbi5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDx1bmRlZmluZWQ+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUFVUXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuQ0hBTk5FTF9NRVNTQUdFX1JFQUNUSU9OX01FKGNoYW5uZWxJZCwgbWVzc2FnZUlkLCByZWFjdGlvbiksXG4gICAge30sXG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsK0tBQStLLENBQy9LLE9BQU8sZUFBZSxXQUFXLENBQUMsR0FBUSxFQUFFLFNBQWlCLEVBQUUsU0FBaUIsRUFBRSxRQUFnQixFQUFFO0lBQ2xHLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QixRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2RCxNQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUVELE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3RCLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQ2hGLEVBQUUsQ0FDSCxDQUFDO0NBQ0gifQ==