import { higherRolePosition } from "../permissions.ts";
import { highestRole, requireBotGuildPermissions } from "../permissions.ts";
export default function addRole(bot) {
    const addRoleOld = bot.helpers.addRole;
    bot.helpers.addRole = async function (guildId, memberId, roleId, reason) {
        const guild = bot.guilds.get(guildId);
        if (guild) {
            const role = guild.roles.get(roleId);
            if (role) {
                const botRole = highestRole(bot, guild, bot.id);
                if (!higherRolePosition(bot, guild, botRole.id, role.id)) {
                    throw new Error(`The bot can not add this role to the member because it does not have a role higher than the role ID: ${role.id}.`);
                }
            }
            requireBotGuildPermissions(bot, guild, ["MANAGE_ROLES"]);
        }
        return await addRoleOld(guildId, memberId, roleId, reason);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1RSxNQUFNLENBQUMsT0FBTyxVQUFVLE9BQU8sQ0FBQyxHQUFpQjtJQUMvQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUV2QyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLFdBQ3pCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU07UUFFTixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ3hELE1BQU0sSUFBSSxLQUFLLENBQ2Isd0dBQXdHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FDbkgsQ0FBQztpQkFDSDthQUNGO1lBRUQsMEJBQTBCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxPQUFPLE1BQU0sVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgaGlnaGVyUm9sZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3Blcm1pc3Npb25zLnRzXCI7XG5pbXBvcnQgeyBoaWdoZXN0Um9sZSwgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMgfSBmcm9tIFwiLi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUm9sZShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBhZGRSb2xlT2xkID0gYm90LmhlbHBlcnMuYWRkUm9sZTtcblxuICBib3QuaGVscGVycy5hZGRSb2xlID0gYXN5bmMgZnVuY3Rpb24gKFxuICAgIGd1aWxkSWQsXG4gICAgbWVtYmVySWQsXG4gICAgcm9sZUlkLFxuICAgIHJlYXNvbixcbiAgKSB7XG4gICAgY29uc3QgZ3VpbGQgPSBib3QuZ3VpbGRzLmdldChndWlsZElkKTtcbiAgICBpZiAoZ3VpbGQpIHtcbiAgICAgIGNvbnN0IHJvbGUgPSBndWlsZC5yb2xlcy5nZXQocm9sZUlkKTtcbiAgICAgIGlmIChyb2xlKSB7XG4gICAgICAgIGNvbnN0IGJvdFJvbGUgPSBoaWdoZXN0Um9sZShib3QsIGd1aWxkLCBib3QuaWQpO1xuXG4gICAgICAgIGlmICghaGlnaGVyUm9sZVBvc2l0aW9uKGJvdCwgZ3VpbGQsIGJvdFJvbGUuaWQsIHJvbGUuaWQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBib3QgY2FuIG5vdCBhZGQgdGhpcyByb2xlIHRvIHRoZSBtZW1iZXIgYmVjYXVzZSBpdCBkb2VzIG5vdCBoYXZlIGEgcm9sZSBoaWdoZXIgdGhhbiB0aGUgcm9sZSBJRDogJHtyb2xlLmlkfS5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZCwgW1wiTUFOQUdFX1JPTEVTXCJdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgYWRkUm9sZU9sZChndWlsZElkLCBtZW1iZXJJZCwgcm9sZUlkLCByZWFzb24pO1xuICB9O1xufVxuIl19