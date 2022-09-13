import { Collection } from "../../../util/collection.ts";
/** Returns all active threads in the guild, including public and private threads. Threads are ordered by their `id`, in descending order. */ export async function getActiveThreads(bot, guildId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.THREAD_ACTIVE(guildId));
    return {
        threads: new Collection(result.threads.map((t)=>{
            const thread = bot.transformers.channel(bot, {
                channel: t
            });
            return [
                thread.id,
                thread
            ];
        })),
        members: new Collection(result.members.map((m)=>{
            const member = bot.transformers.threadMember(bot, m);
            return [
                member.id,
                member
            ];
        }))
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRMaXN0QWN0aXZlVGhyZWFkcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuXG4vKiogUmV0dXJucyBhbGwgYWN0aXZlIHRocmVhZHMgaW4gdGhlIGd1aWxkLCBpbmNsdWRpbmcgcHVibGljIGFuZCBwcml2YXRlIHRocmVhZHMuIFRocmVhZHMgYXJlIG9yZGVyZWQgYnkgdGhlaXIgYGlkYCwgaW4gZGVzY2VuZGluZyBvcmRlci4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVUaHJlYWRzKGJvdDogQm90LCBndWlsZElkOiBiaWdpbnQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPERpc2NvcmRMaXN0QWN0aXZlVGhyZWFkcz4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJHRVRcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5USFJFQURfQUNUSVZFKGd1aWxkSWQpLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgdGhyZWFkczogbmV3IENvbGxlY3Rpb24oXG4gICAgICByZXN1bHQudGhyZWFkcy5tYXAoKHQpID0+IHtcbiAgICAgICAgY29uc3QgdGhyZWFkID0gYm90LnRyYW5zZm9ybWVycy5jaGFubmVsKGJvdCwgeyBjaGFubmVsOiB0IH0pO1xuICAgICAgICByZXR1cm4gW3RocmVhZC5pZCwgdGhyZWFkXTtcbiAgICAgIH0pLFxuICAgICksXG4gICAgbWVtYmVyczogbmV3IENvbGxlY3Rpb24oXG4gICAgICByZXN1bHQubWVtYmVycy5tYXAoKG0pID0+IHtcbiAgICAgICAgY29uc3QgbWVtYmVyID0gYm90LnRyYW5zZm9ybWVycy50aHJlYWRNZW1iZXIoYm90LCBtKTtcbiAgICAgICAgcmV0dXJuIFttZW1iZXIuaWQsIG1lbWJlcl07XG4gICAgICB9KSxcbiAgICApLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLFNBQVMsVUFBVSxRQUFRLDZCQUE2QixDQUFDO0FBRXpELDZJQUE2SSxDQUM3SSxPQUFPLGVBQWUsZ0JBQWdCLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRTtJQUNoRSxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLEtBQUssRUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQzVDLEFBQUM7SUFFRixPQUFPO1FBQ0wsT0FBTyxFQUFFLElBQUksVUFBVSxDQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBSztZQUN4QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsT0FBTyxFQUFFLENBQUM7YUFBRSxDQUFDLEFBQUM7WUFDN0QsT0FBTztnQkFBQyxNQUFNLENBQUMsRUFBRTtnQkFBRSxNQUFNO2FBQUMsQ0FBQztTQUM1QixDQUFDLENBQ0g7UUFDRCxPQUFPLEVBQUUsSUFBSSxVQUFVLENBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFLO1lBQ3hCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQUFBQztZQUNyRCxPQUFPO2dCQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUFFLE1BQU07YUFBQyxDQUFDO1NBQzVCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCJ9