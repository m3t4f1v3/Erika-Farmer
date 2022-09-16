import { requireBotGuildPermissions } from "../permissions.ts";
export default function editBotNickname(bot) {
    const editBotNicknameOld = bot.helpers.editBotNickname;
    bot.helpers.editBotNickname = async function (guildId, options) {
        requireBotGuildPermissions(bot, guildId, ["CHANGE_NICKNAME"]);
        return await editBotNicknameOld(guildId, options);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdEJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXRCb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0QsTUFBTSxDQUFDLE9BQU8sVUFBVSxlQUFlLENBQUMsR0FBaUI7SUFDdkQsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUV2RCxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLFdBQVcsT0FBTyxFQUFFLE9BQU87UUFDNUQsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUU5RCxPQUFPLE1BQU0sa0JBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMgfSBmcm9tIFwiLi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdEJvdE5pY2tuYW1lKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGVkaXRCb3ROaWNrbmFtZU9sZCA9IGJvdC5oZWxwZXJzLmVkaXRCb3ROaWNrbmFtZTtcblxuICBib3QuaGVscGVycy5lZGl0Qm90Tmlja25hbWUgPSBhc3luYyBmdW5jdGlvbiAoZ3VpbGRJZCwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zKGJvdCwgZ3VpbGRJZCwgW1wiQ0hBTkdFX05JQ0tOQU1FXCJdKTtcblxuICAgIHJldHVybiBhd2FpdCBlZGl0Qm90Tmlja25hbWVPbGQoZ3VpbGRJZCwgb3B0aW9ucyk7XG4gIH07XG59XG4iXX0=