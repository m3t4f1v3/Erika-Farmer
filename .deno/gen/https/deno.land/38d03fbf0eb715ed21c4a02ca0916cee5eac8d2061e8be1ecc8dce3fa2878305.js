import { higherRolePosition } from "../permissions.ts";
import { highestRole, requireBotGuildPermissions } from "../permissions.ts";
export default function removeRole(bot) {
    const removeRoleOld = bot.helpers.removeRole;
    bot.helpers.removeRole = async function(guildId, memberId, roleId, reason) {
        const guild = bot.guilds.get(guildId);
        if (guild) {
            const role = guild.roles.get(roleId);
            if (role) {
                const botRole = highestRole(bot, guild, bot.id);
                if (!higherRolePosition(bot, guild, botRole.id, role.id)) {
                    throw new Error(`The bot can not add this role to the member because it does not have a role higher than the role ID: ${role.id}.`);
                }
            }
            requireBotGuildPermissions(bot, guild, [
                "MANAGE_ROLES"
            ]);
        }
        return await removeRoleOld(guildId, memberId, roleId, reason);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgaGlnaGVyUm9sZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3Blcm1pc3Npb25zLnRzXCI7XG5pbXBvcnQgeyBoaWdoZXN0Um9sZSwgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMgfSBmcm9tIFwiLi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlUm9sZShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCByZW1vdmVSb2xlT2xkID0gYm90LmhlbHBlcnMucmVtb3ZlUm9sZTtcblxuICBib3QuaGVscGVycy5yZW1vdmVSb2xlID0gYXN5bmMgZnVuY3Rpb24gKFxuICAgIGd1aWxkSWQsXG4gICAgbWVtYmVySWQsXG4gICAgcm9sZUlkLFxuICAgIHJlYXNvbixcbiAgKSB7XG4gICAgY29uc3QgZ3VpbGQgPSBib3QuZ3VpbGRzLmdldChndWlsZElkKTtcbiAgICBpZiAoZ3VpbGQpIHtcbiAgICAgIGNvbnN0IHJvbGUgPSBndWlsZC5yb2xlcy5nZXQocm9sZUlkKTtcbiAgICAgIGlmIChyb2xlKSB7XG4gICAgICAgIGNvbnN0IGJvdFJvbGUgPSBoaWdoZXN0Um9sZShib3QsIGd1aWxkLCBib3QuaWQpO1xuXG4gICAgICAgIGlmICghaGlnaGVyUm9sZVBvc2l0aW9uKGJvdCwgZ3VpbGQsIGJvdFJvbGUuaWQsIHJvbGUuaWQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBib3QgY2FuIG5vdCBhZGQgdGhpcyByb2xlIHRvIHRoZSBtZW1iZXIgYmVjYXVzZSBpdCBkb2VzIG5vdCBoYXZlIGEgcm9sZSBoaWdoZXIgdGhhbiB0aGUgcm9sZSBJRDogJHtyb2xlLmlkfS5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZCwgW1wiTUFOQUdFX1JPTEVTXCJdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgcmVtb3ZlUm9sZU9sZChndWlsZElkLCBtZW1iZXJJZCwgcm9sZUlkLCByZWFzb24pO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMsa0JBQWtCLFFBQVEsbUJBQW1CLENBQUM7QUFDdkQsU0FBUyxXQUFXLEVBQUUsMEJBQTBCLFFBQVEsbUJBQW1CLENBQUM7QUFFNUUsZUFBZSxTQUFTLFVBQVUsQ0FBQyxHQUFpQixFQUFFO0lBQ3BELE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxBQUFDO0lBRTdDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLGVBQ3ZCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDTjtRQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxBQUFDO1FBQ3RDLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEFBQUM7WUFDckMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxBQUFDO2dCQUVoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDeEQsTUFBTSxJQUFJLEtBQUssQ0FDYixDQUFDLHFHQUFxRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ25ILENBQUM7aUJBQ0g7YUFDRjtZQUVELDBCQUEwQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7Z0JBQUMsY0FBYzthQUFDLENBQUMsQ0FBQztTQUMxRDtRQUVELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDL0QsQ0FBQztDQUNILENBQUEifQ==