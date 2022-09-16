import { requireBotGuildPermissions } from "./permissions.ts";
export function deleteIntegration(bot) {
    const deleteIntegrationOld = bot.helpers.deleteIntegration;
    bot.helpers.deleteIntegration = async function (guildId, id) {
        requireBotGuildPermissions(bot, guildId, ["MANAGE_GUILD"]);
        return await deleteIntegrationOld(guildId, id);
    };
}
export function getIntegrations(bot) {
    const getIntegrationsOld = bot.helpers.getIntegrations;
    bot.helpers.getIntegrations = async function (guildId) {
        requireBotGuildPermissions(bot, guildId, ["MANAGE_GUILD"]);
        return await getIntegrationsOld(guildId);
    };
}
export default function setupIntegrationPermChecks(bot) {
    deleteIntegration(bot);
    getIntegrations(bot);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWdyYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxHQUFpQjtJQUNqRCxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFFM0QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLFdBQVcsT0FBTyxFQUFFLEVBQUU7UUFDekQsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFM0QsT0FBTyxNQUFNLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFpQjtJQUMvQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO0lBRXZELEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEtBQUssV0FBVyxPQUFPO1FBQ25ELDBCQUEwQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRTNELE9BQU8sTUFBTSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sVUFBVSwwQkFBMEIsQ0FBQyxHQUFpQjtJQUNsRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdFdpdGhDYWNoZSB9IGZyb20gXCIuLi9kZXBzLnRzXCI7XG5pbXBvcnQgeyByZXF1aXJlQm90R3VpbGRQZXJtaXNzaW9ucyB9IGZyb20gXCIuL3Blcm1pc3Npb25zLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJbnRlZ3JhdGlvbihib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBkZWxldGVJbnRlZ3JhdGlvbk9sZCA9IGJvdC5oZWxwZXJzLmRlbGV0ZUludGVncmF0aW9uO1xuXG4gIGJvdC5oZWxwZXJzLmRlbGV0ZUludGVncmF0aW9uID0gYXN5bmMgZnVuY3Rpb24gKGd1aWxkSWQsIGlkKSB7XG4gICAgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZElkLCBbXCJNQU5BR0VfR1VJTERcIl0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUludGVncmF0aW9uT2xkKGd1aWxkSWQsIGlkKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEludGVncmF0aW9ucyhib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBnZXRJbnRlZ3JhdGlvbnNPbGQgPSBib3QuaGVscGVycy5nZXRJbnRlZ3JhdGlvbnM7XG5cbiAgYm90LmhlbHBlcnMuZ2V0SW50ZWdyYXRpb25zID0gYXN5bmMgZnVuY3Rpb24gKGd1aWxkSWQpIHtcbiAgICByZXF1aXJlQm90R3VpbGRQZXJtaXNzaW9ucyhib3QsIGd1aWxkSWQsIFtcIk1BTkFHRV9HVUlMRFwiXSk7XG5cbiAgICByZXR1cm4gYXdhaXQgZ2V0SW50ZWdyYXRpb25zT2xkKGd1aWxkSWQpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEludGVncmF0aW9uUGVybUNoZWNrcyhib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBkZWxldGVJbnRlZ3JhdGlvbihib3QpO1xuICBnZXRJbnRlZ3JhdGlvbnMoYm90KTtcbn1cbiJdfQ==