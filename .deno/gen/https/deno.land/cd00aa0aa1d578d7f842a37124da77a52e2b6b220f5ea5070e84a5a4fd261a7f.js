import { requireBotChannelPermissions } from "../../permissions.ts";
export default function addToThread(bot) {
    const addToThreadOld = bot.helpers.addToThread;
    bot.helpers.addToThread = async function (threadId, userId) {
        if (userId === bot.id) {
            throw new Error("To add the bot to a thread, you must use bot.helpers.joinThread()");
        }
        const channel = bot.channels.get(threadId);
        if (channel) {
            if (channel.archived) {
                throw new Error("Cannot add user to thread if thread is archived.");
            }
            await requireBotChannelPermissions(bot, channel, ["SEND_MESSAGES"]);
        }
        return await addToThreadOld(threadId, userId);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVG9UaHJlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRUb1RocmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRSxNQUFNLENBQUMsT0FBTyxVQUFVLFdBQVcsQ0FBQyxHQUFpQjtJQUNuRCxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUUvQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLFdBQVcsUUFBUSxFQUFFLE1BQU07UUFDeEQsSUFBSSxNQUFNLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNyQixNQUFNLElBQUksS0FBSyxDQUNiLG1FQUFtRSxDQUNwRSxDQUFDO1NBQ0g7UUFFRCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2FBQ3JFO1lBRUQsTUFBTSw0QkFBNEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztTQUNyRTtRQUVELE9BQU8sTUFBTSxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyB9IGZyb20gXCIuLi8uLi9wZXJtaXNzaW9ucy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb1RocmVhZChib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBhZGRUb1RocmVhZE9sZCA9IGJvdC5oZWxwZXJzLmFkZFRvVGhyZWFkO1xuXG4gIGJvdC5oZWxwZXJzLmFkZFRvVGhyZWFkID0gYXN5bmMgZnVuY3Rpb24gKHRocmVhZElkLCB1c2VySWQpIHtcbiAgICBpZiAodXNlcklkID09PSBib3QuaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUbyBhZGQgdGhlIGJvdCB0byBhIHRocmVhZCwgeW91IG11c3QgdXNlIGJvdC5oZWxwZXJzLmpvaW5UaHJlYWQoKVwiLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFubmVsID0gYm90LmNoYW5uZWxzLmdldCh0aHJlYWRJZCk7XG5cbiAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgaWYgKGNoYW5uZWwuYXJjaGl2ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFkZCB1c2VyIHRvIHRocmVhZCBpZiB0aHJlYWQgaXMgYXJjaGl2ZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKGJvdCwgY2hhbm5lbCwgW1wiU0VORF9NRVNTQUdFU1wiXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGFkZFRvVGhyZWFkT2xkKHRocmVhZElkLCB1c2VySWQpO1xuICB9O1xufVxuIl19