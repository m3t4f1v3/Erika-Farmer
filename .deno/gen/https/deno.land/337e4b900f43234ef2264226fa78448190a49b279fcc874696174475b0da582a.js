import { hasGuildPermissions, requireBotGuildPermissions } from "../permissions.ts";
export default function editMember(bot) {
    const editMemberOld = bot.helpers.editMember;
    bot.helpers.editMember = async function(guildId, memberId, options) {
        const requiredPerms = [];
        if (options.roles) requiredPerms.push("MANAGE_ROLES");
        // NULL IS ALLOWED
        if (options.nick !== undefined) requiredPerms.push("MANAGE_NICKNAMES");
        if (options.channelId !== undefined) requiredPerms.push("MOVE_MEMBERS");
        if (options.mute !== undefined) requiredPerms.push("MUTE_MEMBERS");
        if (options.deaf !== undefined) requiredPerms.push("DEAFEN_MEMBERS");
        if (options.communicationDisabledUntil) {
            const guild = bot.guilds.get(guildId);
            if (guild) {
                if (guild.ownerId === memberId) throw new Error("You can not timeout the servers owner.");
            }
            if (hasGuildPermissions(bot, guildId, memberId, [
                "ADMINISTRATOR"
            ])) {
                throw new Error("You can not timeout a server administrator.");
            }
        }
        if (requiredPerms.length) {
            requireBotGuildPermissions(bot, guildId, requiredPerms);
        }
        return await editMemberOld(guildId, memberId, options);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUsIFBlcm1pc3Npb25TdHJpbmdzIH0gZnJvbSBcIi4uLy4uL2RlcHMudHNcIjtcbmltcG9ydCB7IGhhc0d1aWxkUGVybWlzc2lvbnMsIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zLCByZXF1aXJlR3VpbGRQZXJtaXNzaW9ucyB9IGZyb20gXCIuLi9wZXJtaXNzaW9ucy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0TWVtYmVyKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGVkaXRNZW1iZXJPbGQgPSBib3QuaGVscGVycy5lZGl0TWVtYmVyO1xuXG4gIGJvdC5oZWxwZXJzLmVkaXRNZW1iZXIgPSBhc3luYyBmdW5jdGlvbiAoZ3VpbGRJZCwgbWVtYmVySWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXF1aXJlZFBlcm1zOiBQZXJtaXNzaW9uU3RyaW5nc1tdID0gW107XG4gICAgaWYgKG9wdGlvbnMucm9sZXMpIHJlcXVpcmVkUGVybXMucHVzaChcIk1BTkFHRV9ST0xFU1wiKTtcbiAgICAvLyBOVUxMIElTIEFMTE9XRURcbiAgICBpZiAob3B0aW9ucy5uaWNrICE9PSB1bmRlZmluZWQpIHJlcXVpcmVkUGVybXMucHVzaChcIk1BTkFHRV9OSUNLTkFNRVNcIik7XG4gICAgaWYgKG9wdGlvbnMuY2hhbm5lbElkICE9PSB1bmRlZmluZWQpIHJlcXVpcmVkUGVybXMucHVzaChcIk1PVkVfTUVNQkVSU1wiKTtcbiAgICBpZiAob3B0aW9ucy5tdXRlICE9PSB1bmRlZmluZWQpIHJlcXVpcmVkUGVybXMucHVzaChcIk1VVEVfTUVNQkVSU1wiKTtcbiAgICBpZiAob3B0aW9ucy5kZWFmICE9PSB1bmRlZmluZWQpIHJlcXVpcmVkUGVybXMucHVzaChcIkRFQUZFTl9NRU1CRVJTXCIpO1xuXG4gICAgaWYgKG9wdGlvbnMuY29tbXVuaWNhdGlvbkRpc2FibGVkVW50aWwpIHtcbiAgICAgIGNvbnN0IGd1aWxkID0gYm90Lmd1aWxkcy5nZXQoZ3VpbGRJZCk7XG4gICAgICBpZiAoZ3VpbGQpIHtcbiAgICAgICAgaWYgKGd1aWxkLm93bmVySWQgPT09IG1lbWJlcklkKSB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuIG5vdCB0aW1lb3V0IHRoZSBzZXJ2ZXJzIG93bmVyLlwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0d1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZElkLCBtZW1iZXJJZCwgW1wiQURNSU5JU1RSQVRPUlwiXSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbiBub3QgdGltZW91dCBhIHNlcnZlciBhZG1pbmlzdHJhdG9yLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVxdWlyZWRQZXJtcy5sZW5ndGgpIHtcbiAgICAgIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zKGJvdCwgZ3VpbGRJZCwgcmVxdWlyZWRQZXJtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGVkaXRNZW1iZXJPbGQoZ3VpbGRJZCwgbWVtYmVySWQsIG9wdGlvbnMpO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMsbUJBQW1CLEVBQUUsMEJBQTBCLFFBQWlDLG1CQUFtQixDQUFDO0FBRTdHLGVBQWUsU0FBUyxVQUFVLENBQUMsR0FBaUIsRUFBRTtJQUNwRCxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQUFBQztJQUU3QyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxlQUFnQixPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtRQUNuRSxNQUFNLGFBQWEsR0FBd0IsRUFBRSxBQUFDO1FBQzlDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELGtCQUFrQjtRQUNsQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEUsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJFLElBQUksT0FBTyxDQUFDLDBCQUEwQixFQUFFO1lBQ3RDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxBQUFDO1lBQ3RDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2FBQzNGO1lBRUQsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtnQkFBQyxlQUFlO2FBQUMsQ0FBQyxFQUFFO2dCQUNsRSxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7YUFDaEU7U0FDRjtRQUVELElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUN4QiwwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3hELENBQUM7Q0FDSCxDQUFBIn0=