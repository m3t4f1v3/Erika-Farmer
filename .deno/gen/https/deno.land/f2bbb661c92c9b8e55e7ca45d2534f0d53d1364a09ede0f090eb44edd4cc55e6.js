import { Collection } from "../../util/collection.ts";
export async function getReactions(bot, channelId, messageId, reaction, options) {
    if (reaction.startsWith("<:")) {
        reaction = reaction.substring(2, reaction.length - 1);
    }
    else if (reaction.startsWith("<a:")) {
        reaction = reaction.substring(3, reaction.length - 1);
    }
    const users = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.CHANNEL_MESSAGE_REACTION(channelId, messageId, encodeURIComponent(reaction), options));
    return new Collection(users.map((u) => {
        const user = bot.transformers.user(bot, u);
        return [user.id, user];
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UmVhY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0UmVhY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUt0RCxNQUFNLENBQUMsS0FBSyxVQUFVLFlBQVksQ0FDaEMsR0FBUSxFQUNSLFNBQWlCLEVBQ2pCLFNBQWlCLEVBQ2pCLFFBQWdCLEVBQ2hCLE9BQXNCO0lBRXRCLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QixRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2RDtTQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3BDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQzNHLENBQUM7SUFFRixPQUFPLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkVXNlciB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbi8qKiBHZXQgYSBsaXN0IG9mIHVzZXJzIHRoYXQgcmVhY3RlZCB3aXRoIHRoaXMgZW1vamkuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVhY3Rpb25zKFxuICBib3Q6IEJvdCxcbiAgY2hhbm5lbElkOiBiaWdpbnQsXG4gIG1lc3NhZ2VJZDogYmlnaW50LFxuICByZWFjdGlvbjogc3RyaW5nLFxuICBvcHRpb25zPzogR2V0UmVhY3Rpb25zLFxuKSB7XG4gIGlmIChyZWFjdGlvbi5zdGFydHNXaXRoKFwiPDpcIikpIHtcbiAgICByZWFjdGlvbiA9IHJlYWN0aW9uLnN1YnN0cmluZygyLCByZWFjdGlvbi5sZW5ndGggLSAxKTtcbiAgfSBlbHNlIGlmIChyZWFjdGlvbi5zdGFydHNXaXRoKFwiPGE6XCIpKSB7XG4gICAgcmVhY3Rpb24gPSByZWFjdGlvbi5zdWJzdHJpbmcoMywgcmVhY3Rpb24ubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBjb25zdCB1c2VycyA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkVXNlcltdPihcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkNIQU5ORUxfTUVTU0FHRV9SRUFDVElPTihjaGFubmVsSWQsIG1lc3NhZ2VJZCwgZW5jb2RlVVJJQ29tcG9uZW50KHJlYWN0aW9uKSwgb3B0aW9ucyksXG4gICk7XG5cbiAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKHVzZXJzLm1hcCgodSkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBib3QudHJhbnNmb3JtZXJzLnVzZXIoYm90LCB1KTtcbiAgICByZXR1cm4gW3VzZXIuaWQsIHVzZXJdO1xuICB9KSk7XG59XG5cbi8qKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZXNvdXJjZXMvY2hhbm5lbCNnZXQtcmVhY3Rpb25zLXF1ZXJ5LXN0cmluZy1wYXJhbXMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UmVhY3Rpb25zIHtcbiAgLyoqIEdldCB1c2VycyBhZnRlciB0aGlzIHVzZXIgSWQgKi9cbiAgYWZ0ZXI/OiBzdHJpbmc7XG4gIC8qKiBNYXggbnVtYmVyIG9mIHVzZXJzIHRvIHJldHVybiAoMS0xMDApICovXG4gIGxpbWl0PzogbnVtYmVyO1xufVxuIl19