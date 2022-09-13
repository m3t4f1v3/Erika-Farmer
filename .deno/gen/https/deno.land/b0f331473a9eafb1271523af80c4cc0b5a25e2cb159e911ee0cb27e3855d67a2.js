import { ChannelTypes } from "../../../deps.ts";
import { requireBotChannelPermissions } from "../../permissions.ts";
export default function removeThreadMember(bot) {
    const removeThreadMemberOld = bot.helpers.removeThreadMember;
    bot.helpers.removeThreadMember = async function(threadId, userId) {
        if (userId === bot.id) {
            throw new Error("To remove the bot from a thread, you must use bot.helpers.leaveThread()");
        }
        const channel = bot.channels.get(threadId);
        if (channel) {
            if (channel.archived) {
                throw new Error("Cannot remove user from thread if thread is archived.");
            }
            if (!(bot.id === channel.ownerId && channel.type === ChannelTypes.GuildPrivateThread)) {
                await requireBotChannelPermissions(bot, channel, [
                    "MANAGE_MESSAGES"
                ]);
            }
        }
        return await removeThreadMemberOld(threadId, userId);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUsIENoYW5uZWxUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9kZXBzLnRzXCI7XG5pbXBvcnQgeyByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zIH0gZnJvbSBcIi4uLy4uL3Blcm1pc3Npb25zLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVRocmVhZE1lbWJlcihib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCByZW1vdmVUaHJlYWRNZW1iZXJPbGQgPSBib3QuaGVscGVycy5yZW1vdmVUaHJlYWRNZW1iZXI7XG5cbiAgYm90LmhlbHBlcnMucmVtb3ZlVGhyZWFkTWVtYmVyID0gYXN5bmMgZnVuY3Rpb24gKHRocmVhZElkLCB1c2VySWQpIHtcbiAgICBpZiAodXNlcklkID09PSBib3QuaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUbyByZW1vdmUgdGhlIGJvdCBmcm9tIGEgdGhyZWFkLCB5b3UgbXVzdCB1c2UgYm90LmhlbHBlcnMubGVhdmVUaHJlYWQoKVwiLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFubmVsID0gYm90LmNoYW5uZWxzLmdldCh0aHJlYWRJZCk7XG5cbiAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgaWYgKGNoYW5uZWwuYXJjaGl2ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiQ2Fubm90IHJlbW92ZSB1c2VyIGZyb20gdGhyZWFkIGlmIHRocmVhZCBpcyBhcmNoaXZlZC5cIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAhKGJvdC5pZCA9PT0gY2hhbm5lbC5vd25lcklkICYmXG4gICAgICAgICAgY2hhbm5lbC50eXBlID09PSBDaGFubmVsVHlwZXMuR3VpbGRQcml2YXRlVGhyZWFkKVxuICAgICAgKSB7XG4gICAgICAgIGF3YWl0IHJlcXVpcmVCb3RDaGFubmVsUGVybWlzc2lvbnMoYm90LCBjaGFubmVsLCBbXCJNQU5BR0VfTUVTU0FHRVNcIl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCByZW1vdmVUaHJlYWRNZW1iZXJPbGQodGhyZWFkSWQsIHVzZXJJZCk7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlNBQXVCLFlBQVksUUFBUSxrQkFBa0IsQ0FBQztBQUM5RCxTQUFTLDRCQUE0QixRQUFRLHNCQUFzQixDQUFDO0FBRXBFLGVBQWUsU0FBUyxrQkFBa0IsQ0FBQyxHQUFpQixFQUFFO0lBQzVELE1BQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQUFBQztJQUU3RCxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLGVBQWdCLFFBQVEsRUFBRSxNQUFNLEVBQUU7UUFDakUsSUFBSSxNQUFNLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNyQixNQUFNLElBQUksS0FBSyxDQUNiLHlFQUF5RSxDQUMxRSxDQUFDO1NBQ0g7UUFFRCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQUFBQztRQUUzQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDcEIsTUFBTSxJQUFJLEtBQUssQ0FDYix1REFBdUQsQ0FDeEQsQ0FBQzthQUNIO1lBRUQsSUFDRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsT0FBTyxJQUMxQixPQUFPLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUNuRDtnQkFDQSxNQUFNLDRCQUE0QixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7b0JBQUMsaUJBQWlCO2lCQUFDLENBQUMsQ0FBQzthQUN2RTtTQUNGO1FBRUQsT0FBTyxNQUFNLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN0RCxDQUFDO0NBQ0gsQ0FBQSJ9