import { requireBotChannelPermissions, requireBotGuildPermissions } from "./permissions.ts";
export default function editMember(bot) {
    const editMemberOld = bot.helpers.editMember;
    bot.helpers.editMember = async function (guildId, memberId, options) {
        const requiredPerms = new Set();
        if (options.nick) {
            if (options.nick.length > 32) {
                throw new Error("NICKNAMES_MAX_LENGTH");
            }
            requiredPerms.add("MANAGE_NICKNAMES");
        }
        if (options.roles)
            requiredPerms.add("MANAGE_ROLES");
        if (options.mute !== undefined || options.deaf !== undefined ||
            options.channelId !== undefined) {
            const memberVoiceState = (await bot.guilds.get(guildId))
                ?.voiceStates.get(memberId);
            if (!memberVoiceState?.channelId) {
                throw new Error("MEMBER_NOT_IN_VOICE_CHANNEL");
            }
            if (options.mute !== undefined) {
                requiredPerms.add("MUTE_MEMBERS");
            }
            if (options.deaf !== undefined) {
                requiredPerms.add("DEAFEN_MEMBERS");
            }
            if (options.channelId) {
                const requiredVoicePerms = new Set([
                    "CONNECT",
                    "MOVE_MEMBERS",
                ]);
                if (memberVoiceState) {
                    await requireBotChannelPermissions(bot, memberVoiceState?.channelId, [
                        ...requiredVoicePerms,
                    ]);
                }
                await requireBotChannelPermissions(bot, options.channelId, [
                    ...requiredVoicePerms,
                ]);
            }
        }
        await requireBotGuildPermissions(bot, guildId, [
            ...requiredPerms,
        ]);
        return await editMemberOld(guildId, memberId, options);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdE1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXRNZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLDRCQUE0QixFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUYsTUFBTSxDQUFDLE9BQU8sVUFBVSxVQUFVLENBQUMsR0FBaUI7SUFDbEQsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFFN0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxXQUFXLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTztRQUNqRSxNQUFNLGFBQWEsR0FBMkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUV4RCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7Z0JBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUN6QztZQUNELGFBQWEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN2QztRQUVELElBQUksT0FBTyxDQUFDLEtBQUs7WUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJELElBQ0UsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTO1lBQ3hELE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUMvQjtZQUNBLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0RCxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFOUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRTtnQkFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2FBQ2hEO1lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNuQztZQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLGFBQWEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNyQztZQUVELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtnQkFDckIsTUFBTSxrQkFBa0IsR0FBMkIsSUFBSSxHQUFHLENBQUM7b0JBQ3pELFNBQVM7b0JBQ1QsY0FBYztpQkFDZixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDcEIsTUFBTSw0QkFBNEIsQ0FDaEMsR0FBRyxFQUNILGdCQUFnQixFQUFFLFNBQVMsRUFDM0I7d0JBQ0UsR0FBRyxrQkFBa0I7cUJBQ3RCLENBQ0YsQ0FBQztpQkFDSDtnQkFDRCxNQUFNLDRCQUE0QixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFO29CQUN6RCxHQUFHLGtCQUFrQjtpQkFDdEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUVELE1BQU0sMEJBQTBCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUM3QyxHQUFHLGFBQWE7U0FDakIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUsIFBlcm1pc3Npb25TdHJpbmdzIH0gZnJvbSBcIi4uL2RlcHMudHNcIjtcbmltcG9ydCB7IHJlcXVpcmVCb3RDaGFubmVsUGVybWlzc2lvbnMsIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zIH0gZnJvbSBcIi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdE1lbWJlcihib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBlZGl0TWVtYmVyT2xkID0gYm90LmhlbHBlcnMuZWRpdE1lbWJlcjtcblxuICBib3QuaGVscGVycy5lZGl0TWVtYmVyID0gYXN5bmMgZnVuY3Rpb24gKGd1aWxkSWQsIG1lbWJlcklkLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcmVxdWlyZWRQZXJtczogU2V0PFBlcm1pc3Npb25TdHJpbmdzPiA9IG5ldyBTZXQoKTtcblxuICAgIGlmIChvcHRpb25zLm5pY2spIHtcbiAgICAgIGlmIChvcHRpb25zLm5pY2subGVuZ3RoID4gMzIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTklDS05BTUVTX01BWF9MRU5HVEhcIik7XG4gICAgICB9XG4gICAgICByZXF1aXJlZFBlcm1zLmFkZChcIk1BTkFHRV9OSUNLTkFNRVNcIik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucm9sZXMpIHJlcXVpcmVkUGVybXMuYWRkKFwiTUFOQUdFX1JPTEVTXCIpO1xuXG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5tdXRlICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5kZWFmICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIG9wdGlvbnMuY2hhbm5lbElkICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IG1lbWJlclZvaWNlU3RhdGUgPSAoYXdhaXQgYm90Lmd1aWxkcy5nZXQoZ3VpbGRJZCkpXG4gICAgICAgID8udm9pY2VTdGF0ZXMuZ2V0KG1lbWJlcklkKTtcblxuICAgICAgaWYgKCFtZW1iZXJWb2ljZVN0YXRlPy5jaGFubmVsSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTUVNQkVSX05PVF9JTl9WT0lDRV9DSEFOTkVMXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5tdXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVxdWlyZWRQZXJtcy5hZGQoXCJNVVRFX01FTUJFUlNcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmRlYWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXF1aXJlZFBlcm1zLmFkZChcIkRFQUZFTl9NRU1CRVJTXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jaGFubmVsSWQpIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRWb2ljZVBlcm1zOiBTZXQ8UGVybWlzc2lvblN0cmluZ3M+ID0gbmV3IFNldChbXG4gICAgICAgICAgXCJDT05ORUNUXCIsXG4gICAgICAgICAgXCJNT1ZFX01FTUJFUlNcIixcbiAgICAgICAgXSk7XG4gICAgICAgIGlmIChtZW1iZXJWb2ljZVN0YXRlKSB7XG4gICAgICAgICAgYXdhaXQgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyhcbiAgICAgICAgICAgIGJvdCxcbiAgICAgICAgICAgIG1lbWJlclZvaWNlU3RhdGU/LmNoYW5uZWxJZCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLi4ucmVxdWlyZWRWb2ljZVBlcm1zLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHJlcXVpcmVCb3RDaGFubmVsUGVybWlzc2lvbnMoYm90LCBvcHRpb25zLmNoYW5uZWxJZCwgW1xuICAgICAgICAgIC4uLnJlcXVpcmVkVm9pY2VQZXJtcyxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZElkLCBbXG4gICAgICAuLi5yZXF1aXJlZFBlcm1zLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IGVkaXRNZW1iZXJPbGQoZ3VpbGRJZCwgbWVtYmVySWQsIG9wdGlvbnMpO1xuICB9O1xufVxuIl19