import { requireBotChannelPermissions } from "../permissions.ts";
export function deleteMessage(bot) {
    const deleteMessageOld = bot.helpers.deleteMessage;
    bot.helpers.deleteMessage = async function (channelId, messageId, reason, milliseconds) {
        const message = bot.messages.get(messageId);
        if (message?.authorId === bot.id) {
            return deleteMessageOld(channelId, messageId, reason, milliseconds);
        }
        const channel = bot.channels.get(channelId);
        if (channel?.guildId) {
            requireBotChannelPermissions(bot, channel, [
                "MANAGE_MESSAGES",
            ]);
        }
        else {
            throw new Error(`You can only delete messages in a channel which has a guild id. Channel ID: ${channelId} Message Id: ${messageId}`);
        }
        return await deleteMessageOld(channelId, messageId, reason, milliseconds);
    };
}
export function deleteMessages(bot) {
    const deleteMessagesOld = bot.helpers.deleteMessages;
    bot.helpers.deleteMessages = async function (channelId, ids, reason) {
        const channel = bot.channels.get(channelId);
        if (!channel?.guildId) {
            throw new Error(`Bulk deleting messages is only allowed in channels which has a guild id. Channel ID: ${channelId} IDS: ${ids.join(" ")}`);
        }
        const oldestAllowed = Date.now() - 1209600000;
        ids = ids.filter((id) => {
            const createdAt = Number(id / 4194304n + 1420070400000n);
            if (createdAt > oldestAllowed)
                return true;
            console.log(`[Permission Plugin] Skipping bulk message delete of ID ${id} because it is older than 2 weeks.`);
            return false;
        });
        if (ids.length < 2) {
            throw new Error("Bulk message delete requires at least 2 messages.");
        }
        requireBotChannelPermissions(bot, channel, [
            "MANAGE_MESSAGES",
        ]);
        return await deleteMessagesOld(channelId, ids, reason);
    };
}
export default function setupDeleteMessagePermChecks(bot) {
    deleteMessage(bot);
    deleteMessages(bot);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpFLE1BQU0sVUFBVSxhQUFhLENBQUMsR0FBaUI7SUFDN0MsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVuRCxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLFdBQy9CLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVk7UUFFWixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QyxJQUFJLE9BQU8sRUFBRSxRQUFRLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNoQyxPQUFPLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxPQUFPLEVBQUUsT0FBTyxFQUFFO1lBQ3BCLDRCQUE0QixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7Z0JBQ3pDLGlCQUFpQjthQUNsQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FDYiwrRUFBK0UsU0FBUyxnQkFBZ0IsU0FBUyxFQUFFLENBQ3BILENBQUM7U0FDSDtRQUVELE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxHQUFpQjtJQUM5QyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBRXJELEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssV0FDaEMsU0FBUyxFQUNULEdBQUcsRUFDSCxNQUFNO1FBRU4sTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FDYix3RkFBd0YsU0FBUyxTQUMvRixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDZCxFQUFFLENBQ0gsQ0FBQztTQUNIO1FBR0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUU5QyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLGNBQWMsQ0FBQyxDQUFDO1lBRXpELElBQUksU0FBUyxHQUFHLGFBQWE7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FDVCwwREFBMEQsRUFBRSxvQ0FBb0MsQ0FDakcsQ0FBQztZQUNGLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztTQUN0RTtRQUVELDRCQUE0QixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDekMsaUJBQWlCO1NBQ2xCLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxVQUFVLDRCQUE0QixDQUFDLEdBQWlCO0lBQ3BFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdFdpdGhDYWNoZSB9IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5pbXBvcnQgeyByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zIH0gZnJvbSBcIi4uL3Blcm1pc3Npb25zLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVNZXNzYWdlKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGRlbGV0ZU1lc3NhZ2VPbGQgPSBib3QuaGVscGVycy5kZWxldGVNZXNzYWdlO1xuXG4gIGJvdC5oZWxwZXJzLmRlbGV0ZU1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbiAoXG4gICAgY2hhbm5lbElkLFxuICAgIG1lc3NhZ2VJZCxcbiAgICByZWFzb24sXG4gICAgbWlsbGlzZWNvbmRzLFxuICApIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYm90Lm1lc3NhZ2VzLmdldChtZXNzYWdlSWQpO1xuICAgIC8vIERFTEVUSU5HIFNFTEYgTUVTU0FHRVMgSVMgQUxXQVlTIEFMTE9XRURcbiAgICBpZiAobWVzc2FnZT8uYXV0aG9ySWQgPT09IGJvdC5pZCkge1xuICAgICAgcmV0dXJuIGRlbGV0ZU1lc3NhZ2VPbGQoY2hhbm5lbElkLCBtZXNzYWdlSWQsIHJlYXNvbiwgbWlsbGlzZWNvbmRzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFubmVsID0gYm90LmNoYW5uZWxzLmdldChjaGFubmVsSWQpO1xuICAgIGlmIChjaGFubmVsPy5ndWlsZElkKSB7XG4gICAgICByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKGJvdCwgY2hhbm5lbCwgW1xuICAgICAgICBcIk1BTkFHRV9NRVNTQUdFU1wiLFxuICAgICAgXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFlvdSBjYW4gb25seSBkZWxldGUgbWVzc2FnZXMgaW4gYSBjaGFubmVsIHdoaWNoIGhhcyBhIGd1aWxkIGlkLiBDaGFubmVsIElEOiAke2NoYW5uZWxJZH0gTWVzc2FnZSBJZDogJHttZXNzYWdlSWR9YCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZU1lc3NhZ2VPbGQoY2hhbm5lbElkLCBtZXNzYWdlSWQsIHJlYXNvbiwgbWlsbGlzZWNvbmRzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU1lc3NhZ2VzKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzT2xkID0gYm90LmhlbHBlcnMuZGVsZXRlTWVzc2FnZXM7XG5cbiAgYm90LmhlbHBlcnMuZGVsZXRlTWVzc2FnZXMgPSBhc3luYyBmdW5jdGlvbiAoXG4gICAgY2hhbm5lbElkLFxuICAgIGlkcyxcbiAgICByZWFzb24sXG4gICkge1xuICAgIGNvbnN0IGNoYW5uZWwgPSBib3QuY2hhbm5lbHMuZ2V0KGNoYW5uZWxJZCk7XG4gICAgaWYgKCFjaGFubmVsPy5ndWlsZElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBCdWxrIGRlbGV0aW5nIG1lc3NhZ2VzIGlzIG9ubHkgYWxsb3dlZCBpbiBjaGFubmVscyB3aGljaCBoYXMgYSBndWlsZCBpZC4gQ2hhbm5lbCBJRDogJHtjaGFubmVsSWR9IElEUzogJHtcbiAgICAgICAgICBpZHMuam9pbihcIiBcIilcbiAgICAgICAgfWAsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIDIgV0VFS1NcbiAgICBjb25zdCBvbGRlc3RBbGxvd2VkID0gRGF0ZS5ub3coKSAtIDEyMDk2MDAwMDA7XG5cbiAgICBpZHMgPSBpZHMuZmlsdGVyKChpZCkgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlZEF0ID0gTnVtYmVyKGlkIC8gNDE5NDMwNG4gKyAxNDIwMDcwNDAwMDAwbik7XG4gICAgICAvLyBJRiBNRVNTQUdFIElTIE9MREVSIFRIQU4gMiBXRUVLU1xuICAgICAgaWYgKGNyZWF0ZWRBdCA+IG9sZGVzdEFsbG93ZWQpIHJldHVybiB0cnVlO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFtQZXJtaXNzaW9uIFBsdWdpbl0gU2tpcHBpbmcgYnVsayBtZXNzYWdlIGRlbGV0ZSBvZiBJRCAke2lkfSBiZWNhdXNlIGl0IGlzIG9sZGVyIHRoYW4gMiB3ZWVrcy5gLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChpZHMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQnVsayBtZXNzYWdlIGRlbGV0ZSByZXF1aXJlcyBhdCBsZWFzdCAyIG1lc3NhZ2VzLlwiKTtcbiAgICB9XG5cbiAgICByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKGJvdCwgY2hhbm5lbCwgW1xuICAgICAgXCJNQU5BR0VfTUVTU0FHRVNcIixcbiAgICBdKTtcblxuICAgIHJldHVybiBhd2FpdCBkZWxldGVNZXNzYWdlc09sZChjaGFubmVsSWQsIGlkcywgcmVhc29uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBEZWxldGVNZXNzYWdlUGVybUNoZWNrcyhib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBkZWxldGVNZXNzYWdlKGJvdCk7XG4gIGRlbGV0ZU1lc3NhZ2VzKGJvdCk7XG59XG4iXX0=