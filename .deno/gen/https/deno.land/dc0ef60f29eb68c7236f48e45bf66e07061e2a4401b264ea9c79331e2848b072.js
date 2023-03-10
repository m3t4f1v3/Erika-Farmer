export default function joinThread(bot) {
    const joinThreadOld = bot.helpers.joinThread;
    bot.helpers.joinThread = async function (threadId) {
        const channel = bot.channels.get(threadId);
        if (channel && !channel.archived) {
            throw new Error("You can not join an archived channel.");
        }
        return await joinThreadOld(threadId);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pblRocmVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpvaW5UaHJlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE9BQU8sVUFBVSxVQUFVLENBQUMsR0FBaUI7SUFDbEQsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFFN0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxXQUFXLFFBQVE7UUFDL0MsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0MsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUMxRDtRQUVELE9BQU8sTUFBTSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdFdpdGhDYWNoZSB9IGZyb20gXCIuLi8uLi8uLi9kZXBzLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGpvaW5UaHJlYWQoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgY29uc3Qgam9pblRocmVhZE9sZCA9IGJvdC5oZWxwZXJzLmpvaW5UaHJlYWQ7XG5cbiAgYm90LmhlbHBlcnMuam9pblRocmVhZCA9IGFzeW5jIGZ1bmN0aW9uICh0aHJlYWRJZCkge1xuICAgIGNvbnN0IGNoYW5uZWwgPSBib3QuY2hhbm5lbHMuZ2V0KHRocmVhZElkKTtcblxuICAgIGlmIChjaGFubmVsICYmICFjaGFubmVsLmFyY2hpdmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuIG5vdCBqb2luIGFuIGFyY2hpdmVkIGNoYW5uZWwuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBqb2luVGhyZWFkT2xkKHRocmVhZElkKTtcbiAgfTtcbn1cbiJdfQ==