import { ChannelTypes } from "../../deps.ts";
import { requireBotGuildPermissions } from "../permissions.ts";
export default function deleteChannel(bot) {
    const deleteChannelOld = bot.helpers.deleteChannel;
    bot.helpers.deleteChannel = async function (channelId, reason) {
        const channel = bot.channels.get(channelId);
        if (channel?.guildId) {
            const guild = bot.guilds.get(channel.guildId);
            if (!guild)
                throw new Error("GUILD_NOT_FOUND");
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
            requireBotGuildPermissions(bot, guild, isThread ? ["MANAGE_THREADS"] : ["MANAGE_CHANNELS"]);
        }
        return await deleteChannelOld(channelId, reason);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlQ2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGV0ZUNoYW5uZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0QsTUFBTSxDQUFDLE9BQU8sVUFBVSxhQUFhLENBQUMsR0FBaUI7SUFDckQsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVuRCxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLFdBQVcsU0FBUyxFQUFFLE1BQU07UUFDM0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUMsSUFBSSxPQUFPLEVBQUUsT0FBTyxFQUFFO1lBQ3BCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSztnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFL0MsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRTtnQkFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEtBQUssU0FBUyxFQUFFO2dCQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDdEQ7WUFFRCxNQUFNLFFBQVEsR0FBRztnQkFDZixZQUFZLENBQUMsZUFBZTtnQkFDNUIsWUFBWSxDQUFDLGlCQUFpQjtnQkFDOUIsWUFBWSxDQUFDLGtCQUFrQjthQUNoQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFekIsMEJBQTBCLENBQ3hCLEdBQUcsRUFDSCxLQUFLLEVBQ0wsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FDcEQsQ0FBQztTQUNIO1FBRUQsT0FBTyxNQUFNLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90V2l0aENhY2hlLCBDaGFubmVsVHlwZXMgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMgfSBmcm9tIFwiLi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlQ2hhbm5lbChib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBkZWxldGVDaGFubmVsT2xkID0gYm90LmhlbHBlcnMuZGVsZXRlQ2hhbm5lbDtcblxuICBib3QuaGVscGVycy5kZWxldGVDaGFubmVsID0gYXN5bmMgZnVuY3Rpb24gKGNoYW5uZWxJZCwgcmVhc29uKSB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGJvdC5jaGFubmVscy5nZXQoY2hhbm5lbElkKTtcblxuICAgIGlmIChjaGFubmVsPy5ndWlsZElkKSB7XG4gICAgICBjb25zdCBndWlsZCA9IGJvdC5ndWlsZHMuZ2V0KGNoYW5uZWwuZ3VpbGRJZCk7XG4gICAgICBpZiAoIWd1aWxkKSB0aHJvdyBuZXcgRXJyb3IoXCJHVUlMRF9OT1RfRk9VTkRcIik7XG5cbiAgICAgIGlmIChndWlsZC5ydWxlc0NoYW5uZWxJZCA9PT0gY2hhbm5lbElkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJVTEVTX0NIQU5ORUxfQ0FOTk9UX0JFX0RFTEVURURcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChndWlsZC5wdWJsaWNVcGRhdGVzQ2hhbm5lbElkID09PSBjaGFubmVsSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVVBEQVRFU19DSEFOTkVMX0NBTk5PVF9CRV9ERUxFVEVEXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1RocmVhZCA9IFtcbiAgICAgICAgQ2hhbm5lbFR5cGVzLkd1aWxkTmV3c1RocmVhZCxcbiAgICAgICAgQ2hhbm5lbFR5cGVzLkd1aWxkUHVibGljVGhyZWFkLFxuICAgICAgICBDaGFubmVsVHlwZXMuR3VpbGRQcml2YXRlVGhyZWFkLFxuICAgICAgXS5pbmNsdWRlcyhjaGFubmVsLnR5cGUpO1xuXG4gICAgICByZXF1aXJlQm90R3VpbGRQZXJtaXNzaW9ucyhcbiAgICAgICAgYm90LFxuICAgICAgICBndWlsZCxcbiAgICAgICAgaXNUaHJlYWQgPyBbXCJNQU5BR0VfVEhSRUFEU1wiXSA6IFtcIk1BTkFHRV9DSEFOTkVMU1wiXSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUNoYW5uZWxPbGQoY2hhbm5lbElkLCByZWFzb24pO1xuICB9O1xufVxuIl19