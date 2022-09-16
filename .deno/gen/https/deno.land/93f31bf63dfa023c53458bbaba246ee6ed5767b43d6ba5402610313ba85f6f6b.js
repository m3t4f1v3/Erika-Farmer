import setupCreateMessagePermChecks from "./create.ts";
import setupDeleteMessagePermChecks from "./delete.ts";
import setupGetMessagePermChecks from "./get.ts";
import setupPinMessagePermChecks from "./pin.ts";
import setupReactionsPermChecks from "./reactions.ts";
export default function setupMessagesPermChecks(bot) {
    setupReactionsPermChecks(bot);
    setupDeleteMessagePermChecks(bot);
    setupGetMessagePermChecks(bot);
    setupPinMessagePermChecks(bot);
    setupCreateMessagePermChecks(bot);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sNEJBQTRCLE1BQU0sYUFBYSxDQUFDO0FBQ3ZELE9BQU8sNEJBQTRCLE1BQU0sYUFBYSxDQUFDO0FBQ3ZELE9BQU8seUJBQXlCLE1BQU0sVUFBVSxDQUFDO0FBQ2pELE9BQU8seUJBQXlCLE1BQU0sVUFBVSxDQUFDO0FBQ2pELE9BQU8sd0JBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsTUFBTSxDQUFDLE9BQU8sVUFBVSx1QkFBdUIsQ0FBQyxHQUFpQjtJQUMvRCx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5Qiw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQix5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQiw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90V2l0aENhY2hlIH0gZnJvbSBcIi4uLy4uL2RlcHMudHNcIjtcbmltcG9ydCBzZXR1cENyZWF0ZU1lc3NhZ2VQZXJtQ2hlY2tzIGZyb20gXCIuL2NyZWF0ZS50c1wiO1xuaW1wb3J0IHNldHVwRGVsZXRlTWVzc2FnZVBlcm1DaGVja3MgZnJvbSBcIi4vZGVsZXRlLnRzXCI7XG5pbXBvcnQgc2V0dXBHZXRNZXNzYWdlUGVybUNoZWNrcyBmcm9tIFwiLi9nZXQudHNcIjtcbmltcG9ydCBzZXR1cFBpbk1lc3NhZ2VQZXJtQ2hlY2tzIGZyb20gXCIuL3Bpbi50c1wiO1xuaW1wb3J0IHNldHVwUmVhY3Rpb25zUGVybUNoZWNrcyBmcm9tIFwiLi9yZWFjdGlvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBNZXNzYWdlc1Blcm1DaGVja3MoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgc2V0dXBSZWFjdGlvbnNQZXJtQ2hlY2tzKGJvdCk7XG4gIHNldHVwRGVsZXRlTWVzc2FnZVBlcm1DaGVja3MoYm90KTtcbiAgc2V0dXBHZXRNZXNzYWdlUGVybUNoZWNrcyhib3QpO1xuICBzZXR1cFBpbk1lc3NhZ2VQZXJtQ2hlY2tzKGJvdCk7XG4gIHNldHVwQ3JlYXRlTWVzc2FnZVBlcm1DaGVja3MoYm90KTtcbn1cbiJdfQ==