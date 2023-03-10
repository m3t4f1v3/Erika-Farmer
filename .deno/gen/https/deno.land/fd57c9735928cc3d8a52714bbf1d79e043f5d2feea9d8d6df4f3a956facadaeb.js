import { higherRolePosition } from "../permissions.ts";
import { highestRole, requireBotGuildPermissions } from "../permissions.ts";
export default function editRole(bot) {
    const editRoleOld = bot.helpers.editRole;
    bot.helpers.editRole = async function (guildId, id, options) {
        const guild = bot.guilds.get(guildId);
        if (guild) {
            const role = guild.roles.get(id);
            if (role) {
                const botRole = highestRole(bot, guild, bot.id);
                if (!higherRolePosition(bot, guild, botRole.id, role.id)) {
                    throw new Error(`The bot can not add this role to the member because it does not have a role higher than the role ID: ${role.id}.`);
                }
            }
            requireBotGuildPermissions(bot, guild, ["MANAGE_ROLES"]);
        }
        return await editRoleOld(guildId, id, options);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVFLE1BQU0sQ0FBQyxPQUFPLFVBQVUsUUFBUSxDQUFDLEdBQWlCO0lBQ2hELE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBRXpDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssV0FDMUIsT0FBTyxFQUNQLEVBQUUsRUFDRixPQUFPO1FBRVAsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQyxJQUFJLElBQUksRUFBRTtnQkFDUixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRWhELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUN4RCxNQUFNLElBQUksS0FBSyxDQUNiLHdHQUF3RyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQ25ILENBQUM7aUJBQ0g7YUFDRjtZQUVELDBCQUEwQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsT0FBTyxNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgaGlnaGVyUm9sZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3Blcm1pc3Npb25zLnRzXCI7XG5pbXBvcnQgeyBoaWdoZXN0Um9sZSwgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMgfSBmcm9tIFwiLi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFJvbGUoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgY29uc3QgZWRpdFJvbGVPbGQgPSBib3QuaGVscGVycy5lZGl0Um9sZTtcblxuICBib3QuaGVscGVycy5lZGl0Um9sZSA9IGFzeW5jIGZ1bmN0aW9uIChcbiAgICBndWlsZElkLFxuICAgIGlkLFxuICAgIG9wdGlvbnMsXG4gICkge1xuICAgIGNvbnN0IGd1aWxkID0gYm90Lmd1aWxkcy5nZXQoZ3VpbGRJZCk7XG4gICAgaWYgKGd1aWxkKSB7XG4gICAgICBjb25zdCByb2xlID0gZ3VpbGQucm9sZXMuZ2V0KGlkKTtcbiAgICAgIGlmIChyb2xlKSB7XG4gICAgICAgIGNvbnN0IGJvdFJvbGUgPSBoaWdoZXN0Um9sZShib3QsIGd1aWxkLCBib3QuaWQpO1xuXG4gICAgICAgIGlmICghaGlnaGVyUm9sZVBvc2l0aW9uKGJvdCwgZ3VpbGQsIGJvdFJvbGUuaWQsIHJvbGUuaWQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBib3QgY2FuIG5vdCBhZGQgdGhpcyByb2xlIHRvIHRoZSBtZW1iZXIgYmVjYXVzZSBpdCBkb2VzIG5vdCBoYXZlIGEgcm9sZSBoaWdoZXIgdGhhbiB0aGUgcm9sZSBJRDogJHtyb2xlLmlkfS5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZCwgW1wiTUFOQUdFX1JPTEVTXCJdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgZWRpdFJvbGVPbGQoZ3VpbGRJZCwgaWQsIG9wdGlvbnMpO1xuICB9O1xufVxuIl19