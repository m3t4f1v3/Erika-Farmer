import { cloneChannel } from "./src/channels.ts";
import { sendAutocompleteChoices } from "./src/sendAutoCompleteChoices.ts";
import { sendDirectMessage } from "./src/sendDirectMessage.ts";
import { suppressEmbeds } from "./src/suppressEmbeds.ts";
import { archiveThread, editThread, lockThread, unarchiveThread, unlockThread } from "./src/threads.ts";
import { disconnectMember } from "./src/disconnectMember.ts";
import { getMembersPaginated } from "./src/getMembersPaginated.ts";
import { moveMember } from "./src/moveMember.ts";
import { fetchAndRetrieveMembers } from "./src/fetchAndRetrieveMembers.ts";
import { sendTextMessage } from "./src/sendTextMessage.ts";
export function enableHelpersPlugin(rawBot) {
    const bot = rawBot;
    bot.helpers.fetchAndRetrieveMembers = (guildId) => fetchAndRetrieveMembers(bot, guildId);
    bot.helpers.sendDirectMessage = (userId, content) => sendDirectMessage(bot, userId, content);
    bot.helpers.sendTextMessage = (channelId, content) => sendTextMessage(bot, channelId, content);
    bot.helpers.suppressEmbeds = (channelId, messageId) => suppressEmbeds(bot, channelId, messageId);
    bot.helpers.archiveThread = (threadId) => archiveThread(bot, threadId);
    bot.helpers.unarchiveThread = (threadId) => unarchiveThread(bot, threadId);
    bot.helpers.lockThread = (threadId) => lockThread(bot, threadId);
    bot.helpers.unlockThread = (threadId) => unlockThread(bot, threadId);
    bot.helpers.editThread = (threadId, options, reason) => editThread(bot, threadId, options, reason);
    bot.helpers.cloneChannel = (channel, reason) => cloneChannel(bot, channel, reason);
    bot.helpers.sendAutocompleteChoices = (interactionId, interactionToken, choices) => sendAutocompleteChoices(bot, interactionId, interactionToken, choices);
    bot.helpers.disconnectMember = (guildId, memberId) => disconnectMember(bot, guildId, memberId);
    bot.helpers.getMembersPaginated = (guildId, options) => getMembersPaginated(bot, guildId, options);
    bot.helpers.moveMember = (guildId, memberId, channelId) => moveMember(bot, guildId, memberId, channelId);
    return bot;
}
export * from "./src/channels.ts";
export * from "./src/disconnectMember.ts";
export * from "./src/fetchAndRetrieveMembers.ts";
export * from "./src/getMembersPaginated.ts";
export * from "./src/moveMember.ts";
export * from "./src/sendAutoCompleteChoices.ts";
export * from "./src/sendDirectMessage.ts";
export * from "./src/sendPrivateInteractionResponse.ts";
export * from "./src/sendTextMessage.ts";
export * from "./src/suppressEmbeds.ts";
export * from "./src/threads.ts";
export default enableHelpersPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFnQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQXVEM0QsTUFBTSxVQUFVLG1CQUFtQixDQUFzQixNQUFTO0lBRWhFLE1BQU0sR0FBRyxHQUFHLE1BQXlDLENBQUM7SUFFdEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsR0FBRyxDQUNwQyxPQUFlLEVBQ2YsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEdBQThCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxDQUM5QixNQUFjLEVBQ2QsT0FBK0IsRUFDL0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsQ0FDNUIsU0FBaUIsRUFDakIsT0FBK0IsRUFDL0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLENBQUMsU0FBaUIsRUFBRSxTQUFpQixFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqSCxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0UsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25GLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RSxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0UsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FDdkIsUUFBZ0IsRUFDaEIsT0FBcUIsRUFDckIsTUFBZSxFQUNmLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxPQUFnQixFQUFFLE1BQWUsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckcsR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsR0FBRyxDQUNwQyxhQUFxQixFQUNyQixnQkFBd0IsRUFDeEIsT0FBeUMsRUFDekMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQWUsRUFBRSxRQUFnQixFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9HLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEdBQUcsQ0FDaEMsT0FBZSxFQUNmLE9BQXlCLEVBQ3pCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQ3ZCLE9BQWUsRUFDZixRQUFnQixFQUNoQixTQUFpQixFQUNqQixFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRW5ELE9BQU8sR0FBOEIsQ0FBQztBQUN4QyxDQUFDO0FBR0QsY0FBYyxtQkFBbUIsQ0FBQztBQUNsQyxjQUFjLDJCQUEyQixDQUFDO0FBQzFDLGNBQWMsa0NBQWtDLENBQUM7QUFDakQsY0FBYyw4QkFBOEIsQ0FBQztBQUM3QyxjQUFjLHFCQUFxQixDQUFDO0FBQ3BDLGNBQWMsa0NBQWtDLENBQUM7QUFDakQsY0FBYyw0QkFBNEIsQ0FBQztBQUMzQyxjQUFjLHlDQUF5QyxDQUFDO0FBQ3hELGNBQWMsMEJBQTBCLENBQUM7QUFDekMsY0FBYyx5QkFBeUIsQ0FBQztBQUN4QyxjQUFjLGtCQUFrQixDQUFDO0FBQ2pDLGVBQWUsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25DaG9pY2UsXG4gIEJvdCxcbiAgQ2hhbm5lbCxcbiAgQ29sbGVjdGlvbixcbiAgQ3JlYXRlTWVzc2FnZSxcbiAgRmluYWxIZWxwZXJzLFxuICBMaXN0R3VpbGRNZW1iZXJzLFxuICBNZW1iZXIsXG4gIE1lc3NhZ2UsXG59IGZyb20gXCIuL2RlcHMudHNcIjtcbmltcG9ydCB7IGNsb25lQ2hhbm5lbCB9IGZyb20gXCIuL3NyYy9jaGFubmVscy50c1wiO1xuaW1wb3J0IHsgc2VuZEF1dG9jb21wbGV0ZUNob2ljZXMgfSBmcm9tIFwiLi9zcmMvc2VuZEF1dG9Db21wbGV0ZUNob2ljZXMudHNcIjtcbmltcG9ydCB7IHNlbmREaXJlY3RNZXNzYWdlIH0gZnJvbSBcIi4vc3JjL3NlbmREaXJlY3RNZXNzYWdlLnRzXCI7XG5pbXBvcnQgeyBzdXBwcmVzc0VtYmVkcyB9IGZyb20gXCIuL3NyYy9zdXBwcmVzc0VtYmVkcy50c1wiO1xuaW1wb3J0IHsgYXJjaGl2ZVRocmVhZCwgZWRpdFRocmVhZCwgbG9ja1RocmVhZCwgTW9kaWZ5VGhyZWFkLCB1bmFyY2hpdmVUaHJlYWQsIHVubG9ja1RocmVhZCB9IGZyb20gXCIuL3NyYy90aHJlYWRzLnRzXCI7XG5pbXBvcnQgeyBkaXNjb25uZWN0TWVtYmVyIH0gZnJvbSBcIi4vc3JjL2Rpc2Nvbm5lY3RNZW1iZXIudHNcIjtcbmltcG9ydCB7IGdldE1lbWJlcnNQYWdpbmF0ZWQgfSBmcm9tIFwiLi9zcmMvZ2V0TWVtYmVyc1BhZ2luYXRlZC50c1wiO1xuaW1wb3J0IHsgbW92ZU1lbWJlciB9IGZyb20gXCIuL3NyYy9tb3ZlTWVtYmVyLnRzXCI7XG5pbXBvcnQgeyBmZXRjaEFuZFJldHJpZXZlTWVtYmVycyB9IGZyb20gXCIuL3NyYy9mZXRjaEFuZFJldHJpZXZlTWVtYmVycy50c1wiO1xuaW1wb3J0IHsgQm90V2l0aENhY2hlIH0gZnJvbSBcIi4uL2NhY2hlL3NyYy9hZGRDYWNoZUNvbGxlY3Rpb25zLnRzXCI7XG5pbXBvcnQgeyBzZW5kVGV4dE1lc3NhZ2UgfSBmcm9tIFwiLi9zcmMvc2VuZFRleHRNZXNzYWdlLnRzXCI7XG5cbmV4cG9ydCB0eXBlIEJvdFdpdGhIZWxwZXJzUGx1Z2luPEIgZXh0ZW5kcyBCb3QgPSBCb3Q+ID0gT21pdDxCLCBcImhlbHBlcnNcIj4gJiBIZWxwZXJGdW5jdGlvbnNGcm9tSGVscGVyUGx1Z2luO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlbHBlckZ1bmN0aW9uc0Zyb21IZWxwZXJQbHVnaW4ge1xuICBoZWxwZXJzOiBGaW5hbEhlbHBlcnMgJiB7XG4gICAgZmV0Y2hBbmRSZXRyaWV2ZU1lbWJlcnM6IChcbiAgICAgIGd1aWxkSWQ6IGJpZ2ludCxcbiAgICApID0+IFByb21pc2U8Q29sbGVjdGlvbjxiaWdpbnQsIE1lbWJlcj4+O1xuICAgIHNlbmREaXJlY3RNZXNzYWdlOiAoXG4gICAgICB1c2VySWQ6IGJpZ2ludCxcbiAgICAgIGNvbnRlbnQ6IHN0cmluZyB8IENyZWF0ZU1lc3NhZ2UsXG4gICAgKSA9PiBQcm9taXNlPE1lc3NhZ2U+O1xuICAgIHNlbmRUZXh0TWVzc2FnZTogKFxuICAgICAgY2hhbm5lbElkOiBiaWdpbnQsXG4gICAgICBjb250ZW50OiBzdHJpbmcgfCBDcmVhdGVNZXNzYWdlLFxuICAgICkgPT4gUHJvbWlzZTxNZXNzYWdlPjtcbiAgICBzdXBwcmVzc0VtYmVkczogKFxuICAgICAgY2hhbm5lbElkOiBiaWdpbnQsXG4gICAgICBtZXNzYWdlSWQ6IGJpZ2ludCxcbiAgICApID0+IFByb21pc2U8TWVzc2FnZT47XG4gICAgYXJjaGl2ZVRocmVhZDogKHRocmVhZElkOiBiaWdpbnQpID0+IFByb21pc2U8Q2hhbm5lbD47XG4gICAgdW5hcmNoaXZlVGhyZWFkOiAodGhyZWFkSWQ6IGJpZ2ludCkgPT4gUHJvbWlzZTxDaGFubmVsPjtcbiAgICBsb2NrVGhyZWFkOiAodGhyZWFkSWQ6IGJpZ2ludCkgPT4gUHJvbWlzZTxDaGFubmVsPjtcbiAgICB1bmxvY2tUaHJlYWQ6ICh0aHJlYWRJZDogYmlnaW50KSA9PiBQcm9taXNlPENoYW5uZWw+O1xuICAgIGVkaXRUaHJlYWQ6IChcbiAgICAgIHRocmVhZElkOiBiaWdpbnQsXG4gICAgICBvcHRpb25zOiBNb2RpZnlUaHJlYWQsXG4gICAgICByZWFzb24/OiBzdHJpbmcsXG4gICAgKSA9PiBQcm9taXNlPENoYW5uZWw+O1xuICAgIGNsb25lQ2hhbm5lbDogKFxuICAgICAgY2hhbm5lbDogQ2hhbm5lbCxcbiAgICAgIHJlYXNvbj86IHN0cmluZyxcbiAgICApID0+IFByb21pc2U8Q2hhbm5lbD47XG4gICAgc2VuZEF1dG9jb21wbGV0ZUNob2ljZXM6IChcbiAgICAgIGludGVyYWN0aW9uSWQ6IGJpZ2ludCxcbiAgICAgIGludGVyYWN0aW9uVG9rZW46IHN0cmluZyxcbiAgICAgIGNob2ljZXM6IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvbkNob2ljZVtdLFxuICAgICkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgICBkaXNjb25uZWN0TWVtYmVyOiAoXG4gICAgICBndWlsZElkOiBiaWdpbnQsXG4gICAgICBtZW1iZXJJZDogYmlnaW50LFxuICAgICkgPT4gUHJvbWlzZTxNZW1iZXI+O1xuICAgIGdldE1lbWJlcnNQYWdpbmF0ZWQ6IChcbiAgICAgIGd1aWxkSWQ6IGJpZ2ludCxcbiAgICAgIG9wdGlvbnM6IExpc3RHdWlsZE1lbWJlcnMsXG4gICAgKSA9PiBQcm9taXNlPENvbGxlY3Rpb248YmlnaW50LCBNZW1iZXI+PjtcbiAgICBtb3ZlTWVtYmVyOiAoXG4gICAgICBndWlsZElkOiBiaWdpbnQsXG4gICAgICBtZW1iZXJJZDogYmlnaW50LFxuICAgICAgY2hhbm5lbElkOiBiaWdpbnQsXG4gICAgKSA9PiBQcm9taXNlPE1lbWJlcj47XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVIZWxwZXJzUGx1Z2luPEIgZXh0ZW5kcyBCb3QgPSBCb3Q+KHJhd0JvdDogQik6IEJvdFdpdGhIZWxwZXJzUGx1Z2luPEI+IHtcbiAgLy8gRk9SQ0UgT1ZFUlJJREUgVEhFIFRZUEUgU08gV0UgQ0FOIFNFVFVQIEZVTkNUSU9OU1xuICBjb25zdCBib3QgPSByYXdCb3QgYXMgdW5rbm93biBhcyBCb3RXaXRoSGVscGVyc1BsdWdpbjtcblxuICBib3QuaGVscGVycy5mZXRjaEFuZFJldHJpZXZlTWVtYmVycyA9IChcbiAgICBndWlsZElkOiBiaWdpbnQsXG4gICkgPT4gZmV0Y2hBbmRSZXRyaWV2ZU1lbWJlcnMoYm90IGFzIHVua25vd24gYXMgQm90V2l0aENhY2hlLCBndWlsZElkKTtcbiAgYm90LmhlbHBlcnMuc2VuZERpcmVjdE1lc3NhZ2UgPSAoXG4gICAgdXNlcklkOiBiaWdpbnQsXG4gICAgY29udGVudDogc3RyaW5nIHwgQ3JlYXRlTWVzc2FnZSxcbiAgKSA9PiBzZW5kRGlyZWN0TWVzc2FnZShib3QsIHVzZXJJZCwgY29udGVudCk7XG4gIGJvdC5oZWxwZXJzLnNlbmRUZXh0TWVzc2FnZSA9IChcbiAgICBjaGFubmVsSWQ6IGJpZ2ludCxcbiAgICBjb250ZW50OiBzdHJpbmcgfCBDcmVhdGVNZXNzYWdlLFxuICApID0+IHNlbmRUZXh0TWVzc2FnZShib3QsIGNoYW5uZWxJZCwgY29udGVudCk7XG4gIGJvdC5oZWxwZXJzLnN1cHByZXNzRW1iZWRzID0gKGNoYW5uZWxJZDogYmlnaW50LCBtZXNzYWdlSWQ6IGJpZ2ludCkgPT4gc3VwcHJlc3NFbWJlZHMoYm90LCBjaGFubmVsSWQsIG1lc3NhZ2VJZCk7XG4gIGJvdC5oZWxwZXJzLmFyY2hpdmVUaHJlYWQgPSAodGhyZWFkSWQ6IGJpZ2ludCkgPT4gYXJjaGl2ZVRocmVhZChib3QsIHRocmVhZElkKTtcbiAgYm90LmhlbHBlcnMudW5hcmNoaXZlVGhyZWFkID0gKHRocmVhZElkOiBiaWdpbnQpID0+IHVuYXJjaGl2ZVRocmVhZChib3QsIHRocmVhZElkKTtcbiAgYm90LmhlbHBlcnMubG9ja1RocmVhZCA9ICh0aHJlYWRJZDogYmlnaW50KSA9PiBsb2NrVGhyZWFkKGJvdCwgdGhyZWFkSWQpO1xuICBib3QuaGVscGVycy51bmxvY2tUaHJlYWQgPSAodGhyZWFkSWQ6IGJpZ2ludCkgPT4gdW5sb2NrVGhyZWFkKGJvdCwgdGhyZWFkSWQpO1xuICBib3QuaGVscGVycy5lZGl0VGhyZWFkID0gKFxuICAgIHRocmVhZElkOiBiaWdpbnQsXG4gICAgb3B0aW9uczogTW9kaWZ5VGhyZWFkLFxuICAgIHJlYXNvbj86IHN0cmluZyxcbiAgKSA9PiBlZGl0VGhyZWFkKGJvdCwgdGhyZWFkSWQsIG9wdGlvbnMsIHJlYXNvbik7XG4gIGJvdC5oZWxwZXJzLmNsb25lQ2hhbm5lbCA9IChjaGFubmVsOiBDaGFubmVsLCByZWFzb24/OiBzdHJpbmcpID0+IGNsb25lQ2hhbm5lbChib3QsIGNoYW5uZWwsIHJlYXNvbik7XG4gIGJvdC5oZWxwZXJzLnNlbmRBdXRvY29tcGxldGVDaG9pY2VzID0gKFxuICAgIGludGVyYWN0aW9uSWQ6IGJpZ2ludCxcbiAgICBpbnRlcmFjdGlvblRva2VuOiBzdHJpbmcsXG4gICAgY2hvaWNlczogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uQ2hvaWNlW10sXG4gICkgPT4gc2VuZEF1dG9jb21wbGV0ZUNob2ljZXMoYm90LCBpbnRlcmFjdGlvbklkLCBpbnRlcmFjdGlvblRva2VuLCBjaG9pY2VzKTtcbiAgYm90LmhlbHBlcnMuZGlzY29ubmVjdE1lbWJlciA9IChndWlsZElkOiBiaWdpbnQsIG1lbWJlcklkOiBiaWdpbnQpID0+IGRpc2Nvbm5lY3RNZW1iZXIoYm90LCBndWlsZElkLCBtZW1iZXJJZCk7XG4gIGJvdC5oZWxwZXJzLmdldE1lbWJlcnNQYWdpbmF0ZWQgPSAoXG4gICAgZ3VpbGRJZDogYmlnaW50LFxuICAgIG9wdGlvbnM6IExpc3RHdWlsZE1lbWJlcnMsXG4gICkgPT4gZ2V0TWVtYmVyc1BhZ2luYXRlZChib3QsIGd1aWxkSWQsIG9wdGlvbnMpO1xuICBib3QuaGVscGVycy5tb3ZlTWVtYmVyID0gKFxuICAgIGd1aWxkSWQ6IGJpZ2ludCxcbiAgICBtZW1iZXJJZDogYmlnaW50LFxuICAgIGNoYW5uZWxJZDogYmlnaW50LFxuICApID0+IG1vdmVNZW1iZXIoYm90LCBndWlsZElkLCBtZW1iZXJJZCwgY2hhbm5lbElkKTtcblxuICByZXR1cm4gYm90IGFzIEJvdFdpdGhIZWxwZXJzUGx1Z2luPEI+O1xufVxuXG4vLyBFWFBPUlQgRVZFUllUSElORyBIRVJFIFNPIFVTRVJTIENBTiBPUFQgVE8gVVNFIEZVTkNUSU9OUyBESVJFQ1RMWVxuZXhwb3J0ICogZnJvbSBcIi4vc3JjL2NoYW5uZWxzLnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvZGlzY29ubmVjdE1lbWJlci50c1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL2ZldGNoQW5kUmV0cmlldmVNZW1iZXJzLnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvZ2V0TWVtYmVyc1BhZ2luYXRlZC50c1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL21vdmVNZW1iZXIudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy9zZW5kQXV0b0NvbXBsZXRlQ2hvaWNlcy50c1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3NlbmREaXJlY3RNZXNzYWdlLnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvc2VuZFByaXZhdGVJbnRlcmFjdGlvblJlc3BvbnNlLnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvc2VuZFRleHRNZXNzYWdlLnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvc3VwcHJlc3NFbWJlZHMudHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90aHJlYWRzLnRzXCI7XG5leHBvcnQgZGVmYXVsdCBlbmFibGVIZWxwZXJzUGx1Z2luO1xuIl19