import { requireBotChannelPermissions } from "../../permissions.ts";
export default function getArchivedThreads(bot) {
    const getArchivedThreadsOld = bot.helpers.getArchivedThreads;
    bot.helpers.getArchivedThreads = async function (channelId, options) {
        const channel = await bot.channels.get(channelId);
        if (channel) {
            await requireBotChannelPermissions(bot, channel, options?.type === "private" ? ["READ_MESSAGE_HISTORY", "MANAGE_THREADS"] : ["READ_MESSAGE_HISTORY"]);
        }
        return await getArchivedThreadsOld(channelId, options);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXJjaGl2ZWRUaHJlYWRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0QXJjaGl2ZWRUaHJlYWRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFLE1BQU0sQ0FBQyxPQUFPLFVBQVUsa0JBQWtCLENBQUMsR0FBaUI7SUFDMUQsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBRTdELEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxXQUFXLFNBQVMsRUFBRSxPQUFPO1FBQ2pFLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxNQUFNLDRCQUE0QixDQUNoQyxHQUFHLEVBQ0gsT0FBTyxFQUNQLE9BQU8sRUFBRSxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FDcEcsQ0FBQztTQUNIO1FBRUQsT0FBTyxNQUFNLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90V2l0aENhY2hlIH0gZnJvbSBcIi4uLy4uLy4uL2RlcHMudHNcIjtcbmltcG9ydCB7IHJlcXVpcmVCb3RDaGFubmVsUGVybWlzc2lvbnMgfSBmcm9tIFwiLi4vLi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QXJjaGl2ZWRUaHJlYWRzKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGdldEFyY2hpdmVkVGhyZWFkc09sZCA9IGJvdC5oZWxwZXJzLmdldEFyY2hpdmVkVGhyZWFkcztcblxuICBib3QuaGVscGVycy5nZXRBcmNoaXZlZFRocmVhZHMgPSBhc3luYyBmdW5jdGlvbiAoY2hhbm5lbElkLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGF3YWl0IGJvdC5jaGFubmVscy5nZXQoY2hhbm5lbElkKTtcblxuICAgIGlmIChjaGFubmVsKSB7XG4gICAgICBhd2FpdCByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKFxuICAgICAgICBib3QsXG4gICAgICAgIGNoYW5uZWwsXG4gICAgICAgIG9wdGlvbnM/LnR5cGUgPT09IFwicHJpdmF0ZVwiID8gW1wiUkVBRF9NRVNTQUdFX0hJU1RPUllcIiwgXCJNQU5BR0VfVEhSRUFEU1wiXSA6IFtcIlJFQURfTUVTU0FHRV9ISVNUT1JZXCJdLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgZ2V0QXJjaGl2ZWRUaHJlYWRzT2xkKGNoYW5uZWxJZCwgb3B0aW9ucyk7XG4gIH07XG59XG4iXX0=