/** Removes the bot from a thread. Requires the thread is not archived. */ export async function leaveThread(bot, threadId) {
    await bot.rest.runMethod(bot.rest, "DELETE", bot.constants.routes.THREAD_ME(threadId));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi8uLi9ib3QudHNcIjtcblxuLyoqIFJlbW92ZXMgdGhlIGJvdCBmcm9tIGEgdGhyZWFkLiBSZXF1aXJlcyB0aGUgdGhyZWFkIGlzIG5vdCBhcmNoaXZlZC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsZWF2ZVRocmVhZChib3Q6IEJvdCwgdGhyZWFkSWQ6IGJpZ2ludCkge1xuICBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8dW5kZWZpbmVkPihib3QucmVzdCwgXCJERUxFVEVcIiwgYm90LmNvbnN0YW50cy5yb3V0ZXMuVEhSRUFEX01FKHRocmVhZElkKSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsMEVBQTBFLENBQzFFLE9BQU8sZUFBZSxXQUFXLENBQUMsR0FBUSxFQUFFLFFBQWdCLEVBQUU7SUFDNUQsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztDQUNuRyJ9