import { ChannelTypes } from "../../deps.ts";
import { requireBotGuildPermissions } from "../permissions.ts";
export default function deleteChannel(bot) {
    const deleteChannelOld = bot.helpers.deleteChannel;
    bot.helpers.deleteChannel = async function(channelId, reason) {
        const channel = bot.channels.get(channelId);
        if (channel?.guildId) {
            const guild = bot.guilds.get(channel.guildId);
            if (!guild) throw new Error("GUILD_NOT_FOUND");
            if (guild.rulesChannelId === channelId) {
                throw new Error("RULES_CHANNEL_CANNOT_BE_DELETED");
            }
            if (guild.publicUpdatesChannelId === channelId) {
                throw new Error("UPDATES_CHANNEL_CANNOT_BE_DELETED");
            }
            const isThread = [
                ChannelTypes.GuildNewsThread,
                ChannelTypes.GuildPublicThread,
                ChannelTypes.GuildPrivateThread, 
            ].includes(channel.type);
            requireBotGuildPermissions(bot, guild, isThread ? [
                "MANAGE_THREADS"
            ] : [
                "MANAGE_CHANNELS"
            ]);
        }
        return await deleteChannelOld(channelId, reason);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUsIENoYW5uZWxUeXBlcyB9IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5pbXBvcnQgeyByZXF1aXJlQm90R3VpbGRQZXJtaXNzaW9ucyB9IGZyb20gXCIuLi9wZXJtaXNzaW9ucy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVDaGFubmVsKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGRlbGV0ZUNoYW5uZWxPbGQgPSBib3QuaGVscGVycy5kZWxldGVDaGFubmVsO1xuXG4gIGJvdC5oZWxwZXJzLmRlbGV0ZUNoYW5uZWwgPSBhc3luYyBmdW5jdGlvbiAoY2hhbm5lbElkLCByZWFzb24pIHtcbiAgICBjb25zdCBjaGFubmVsID0gYm90LmNoYW5uZWxzLmdldChjaGFubmVsSWQpO1xuXG4gICAgaWYgKGNoYW5uZWw/Lmd1aWxkSWQpIHtcbiAgICAgIGNvbnN0IGd1aWxkID0gYm90Lmd1aWxkcy5nZXQoY2hhbm5lbC5ndWlsZElkKTtcbiAgICAgIGlmICghZ3VpbGQpIHRocm93IG5ldyBFcnJvcihcIkdVSUxEX05PVF9GT1VORFwiKTtcblxuICAgICAgaWYgKGd1aWxkLnJ1bGVzQ2hhbm5lbElkID09PSBjaGFubmVsSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUlVMRVNfQ0hBTk5FTF9DQU5OT1RfQkVfREVMRVRFRFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGd1aWxkLnB1YmxpY1VwZGF0ZXNDaGFubmVsSWQgPT09IGNoYW5uZWxJZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVUERBVEVTX0NIQU5ORUxfQ0FOTk9UX0JFX0RFTEVURURcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzVGhyZWFkID0gW1xuICAgICAgICBDaGFubmVsVHlwZXMuR3VpbGROZXdzVGhyZWFkLFxuICAgICAgICBDaGFubmVsVHlwZXMuR3VpbGRQdWJsaWNUaHJlYWQsXG4gICAgICAgIENoYW5uZWxUeXBlcy5HdWlsZFByaXZhdGVUaHJlYWQsXG4gICAgICBdLmluY2x1ZGVzKGNoYW5uZWwudHlwZSk7XG5cbiAgICAgIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zKFxuICAgICAgICBib3QsXG4gICAgICAgIGd1aWxkLFxuICAgICAgICBpc1RocmVhZCA/IFtcIk1BTkFHRV9USFJFQURTXCJdIDogW1wiTUFOQUdFX0NIQU5ORUxTXCJdLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgZGVsZXRlQ2hhbm5lbE9sZChjaGFubmVsSWQsIHJlYXNvbik7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlNBQXVCLFlBQVksUUFBUSxlQUFlLENBQUM7QUFDM0QsU0FBUywwQkFBMEIsUUFBUSxtQkFBbUIsQ0FBQztBQUUvRCxlQUFlLFNBQVMsYUFBYSxDQUFDLEdBQWlCLEVBQUU7SUFDdkQsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQUFBQztJQUVuRCxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxlQUFnQixTQUFTLEVBQUUsTUFBTSxFQUFFO1FBQzdELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxBQUFDO1FBRTVDLElBQUksT0FBTyxFQUFFLE9BQU8sRUFBRTtZQUNwQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEFBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFL0MsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRTtnQkFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEtBQUssU0FBUyxFQUFFO2dCQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDdEQ7WUFFRCxNQUFNLFFBQVEsR0FBRztnQkFDZixZQUFZLENBQUMsZUFBZTtnQkFDNUIsWUFBWSxDQUFDLGlCQUFpQjtnQkFDOUIsWUFBWSxDQUFDLGtCQUFrQjthQUNoQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEFBQUM7WUFFekIsMEJBQTBCLENBQ3hCLEdBQUcsRUFDSCxLQUFLLEVBQ0wsUUFBUSxHQUFHO2dCQUFDLGdCQUFnQjthQUFDLEdBQUc7Z0JBQUMsaUJBQWlCO2FBQUMsQ0FDcEQsQ0FBQztTQUNIO1FBRUQsT0FBTyxNQUFNLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNsRCxDQUFDO0NBQ0gsQ0FBQSJ9