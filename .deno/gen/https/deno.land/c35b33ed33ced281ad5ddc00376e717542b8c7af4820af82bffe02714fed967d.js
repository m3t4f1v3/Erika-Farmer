import { requireBotGuildPermissions } from "../permissions.ts";
export default function createRole(bot) {
    const createRoleOld = bot.helpers.createRole;
    bot.helpers.createRole = async function(guildId, options, reason) {
        requireBotGuildPermissions(bot, guildId, [
            "MANAGE_ROLES"
        ]);
        return await createRoleOld(guildId, options, reason);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMgfSBmcm9tIFwiLi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUm9sZShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBjcmVhdGVSb2xlT2xkID0gYm90LmhlbHBlcnMuY3JlYXRlUm9sZTtcblxuICBib3QuaGVscGVycy5jcmVhdGVSb2xlID0gYXN5bmMgZnVuY3Rpb24gKFxuICAgIGd1aWxkSWQsXG4gICAgb3B0aW9ucyxcbiAgICByZWFzb24sXG4gICkge1xuICAgIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zKGJvdCwgZ3VpbGRJZCwgW1wiTUFOQUdFX1JPTEVTXCJdKTtcblxuICAgIHJldHVybiBhd2FpdCBjcmVhdGVSb2xlT2xkKGd1aWxkSWQsIG9wdGlvbnMsIHJlYXNvbik7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBUywwQkFBMEIsUUFBUSxtQkFBbUIsQ0FBQztBQUUvRCxlQUFlLFNBQVMsVUFBVSxDQUFDLEdBQWlCLEVBQUU7SUFDcEQsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEFBQUM7SUFFN0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsZUFDdkIsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ047UUFDQSwwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQUMsY0FBYztTQUFDLENBQUMsQ0FBQztRQUUzRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDdEQsQ0FBQztDQUNILENBQUEifQ==