export default function leaveThread(bot) {
    const leaveThreadOld = bot.helpers.leaveThread;
    bot.helpers.leaveThread = async function(threadId) {
        const channel = bot.channels.get(threadId);
        if (channel && !channel.archived) {
            throw new Error("You can not leave an archived channel.");
        }
        return await leaveThreadOld(threadId);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vLi4vZGVwcy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWF2ZVRocmVhZChib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBsZWF2ZVRocmVhZE9sZCA9IGJvdC5oZWxwZXJzLmxlYXZlVGhyZWFkO1xuXG4gIGJvdC5oZWxwZXJzLmxlYXZlVGhyZWFkID0gYXN5bmMgZnVuY3Rpb24gKHRocmVhZElkKSB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGJvdC5jaGFubmVscy5nZXQodGhyZWFkSWQpO1xuXG4gICAgaWYgKGNoYW5uZWwgJiYgIWNoYW5uZWwuYXJjaGl2ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW4gbm90IGxlYXZlIGFuIGFyY2hpdmVkIGNoYW5uZWwuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBsZWF2ZVRocmVhZE9sZCh0aHJlYWRJZCk7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsZUFBZSxTQUFTLFdBQVcsQ0FBQyxHQUFpQixFQUFFO0lBQ3JELE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxBQUFDO0lBRS9DLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGVBQWdCLFFBQVEsRUFBRTtRQUNsRCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQUFBQztRQUUzQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsT0FBTyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN2QyxDQUFDO0NBQ0gsQ0FBQSJ9