import { GuildFeatures } from "../../deps.ts";
import { requireBotGuildPermissions } from "../permissions.ts";
export default function editGuild(bot) {
    const editGuildOld = bot.helpers.editGuild;
    bot.helpers.editGuild = async function(guildId, options, shardId) {
        if (options.features?.includes(GuildFeatures.Community)) {
            requireBotGuildPermissions(bot, guildId, [
                "ADMINISTRATOR"
            ]);
        } else {
            requireBotGuildPermissions(bot, guildId, [
                "MANAGE_GUILD"
            ]);
        }
        return await editGuildOld(guildId, options, shardId);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUsIEd1aWxkRmVhdHVyZXMgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMgfSBmcm9tIFwiLi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdEd1aWxkKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGVkaXRHdWlsZE9sZCA9IGJvdC5oZWxwZXJzLmVkaXRHdWlsZDtcblxuICBib3QuaGVscGVycy5lZGl0R3VpbGQgPSBhc3luYyBmdW5jdGlvbiAoZ3VpbGRJZCwgb3B0aW9ucywgc2hhcmRJZCkge1xuICAgIGlmIChvcHRpb25zLmZlYXR1cmVzPy5pbmNsdWRlcyhHdWlsZEZlYXR1cmVzLkNvbW11bml0eSkpIHtcbiAgICAgIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zKGJvdCwgZ3VpbGRJZCwgW1wiQURNSU5JU1RSQVRPUlwiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zKGJvdCwgZ3VpbGRJZCwgW1wiTUFOQUdFX0dVSUxEXCJdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgZWRpdEd1aWxkT2xkKGd1aWxkSWQsIG9wdGlvbnMsIHNoYXJkSWQpO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJTQUF1QixhQUFhLFFBQVEsZUFBZSxDQUFDO0FBQzVELFNBQVMsMEJBQTBCLFFBQVEsbUJBQW1CLENBQUM7QUFFL0QsZUFBZSxTQUFTLFNBQVMsQ0FBQyxHQUFpQixFQUFFO0lBQ25ELE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxBQUFDO0lBRTNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLGVBQWdCLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO1FBQ2pFLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZELDBCQUEwQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7Z0JBQUMsZUFBZTthQUFDLENBQUMsQ0FBQztTQUM3RCxNQUFNO1lBQ0wsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtnQkFBQyxjQUFjO2FBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsT0FBTyxNQUFNLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3RELENBQUM7Q0FDSCxDQUFBIn0=