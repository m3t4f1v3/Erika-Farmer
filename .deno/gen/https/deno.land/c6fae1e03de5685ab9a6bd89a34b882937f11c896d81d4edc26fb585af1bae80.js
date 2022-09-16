export async function removeThreadMember(bot, threadId, userId) {
    await bot.rest.runMethod(bot.rest, "DELETE", bot.constants.routes.THREAD_USER(threadId, userId));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlVGhyZWFkTWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVtb3ZlVGhyZWFkTWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxLQUFLLFVBQVUsa0JBQWtCLENBQUMsR0FBUSxFQUFFLFFBQWdCLEVBQUUsTUFBYztJQUNqRixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM5RyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vLi4vYm90LnRzXCI7XG5cbi8qKiBSZW1vdmVzIGEgdXNlciBmcm9tIGEgdGhyZWFkLiBSZXF1aXJlcyB0aGUgTUFOQUdFX1RIUkVBRFMgcGVybWlzc2lvbiBvciB0aGF0IHlvdSBhcmUgdGhlIGNyZWF0b3Igb2YgdGhlIHRocmVhZC4gQWxzbyByZXF1aXJlcyB0aGUgdGhyZWFkIGlzIG5vdCBhcmNoaXZlZC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVUaHJlYWRNZW1iZXIoYm90OiBCb3QsIHRocmVhZElkOiBiaWdpbnQsIHVzZXJJZDogYmlnaW50KSB7XG4gIGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDx1bmRlZmluZWQ+KGJvdC5yZXN0LCBcIkRFTEVURVwiLCBib3QuY29uc3RhbnRzLnJvdXRlcy5USFJFQURfVVNFUih0aHJlYWRJZCwgdXNlcklkKSk7XG59XG4iXX0=