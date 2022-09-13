import { requireBotGuildPermissions } from "./permissions.ts";
export function addDiscoverySubcategory(bot) {
    const addDiscoverySubcategoryOld = bot.helpers.addDiscoverySubcategory;
    bot.helpers.addDiscoverySubcategory = async function(guildId, categoryId) {
        requireBotGuildPermissions(bot, guildId, [
            "MANAGE_GUILD"
        ]);
        return await addDiscoverySubcategoryOld(guildId, categoryId);
    };
}
export function removeDiscoverySubcategory(bot) {
    const removeDiscoverySubcategoryOld = bot.helpers.removeDiscoverySubcategory;
    bot.helpers.removeDiscoverySubcategory = async function(guildId, categoryId) {
        requireBotGuildPermissions(bot, guildId, [
            "MANAGE_GUILD"
        ]);
        return await removeDiscoverySubcategoryOld(guildId, categoryId);
    };
}
export function getDiscovery(bot) {
    const getDiscoveryOld = bot.helpers.getDiscovery;
    bot.helpers.getDiscovery = async function(guildId) {
        requireBotGuildPermissions(bot, guildId, [
            "MANAGE_GUILD"
        ]);
        return await getDiscoveryOld(guildId);
    };
}
export function editDiscovery(bot) {
    const editDiscoveryOld = bot.helpers.editDiscovery;
    bot.helpers.editDiscovery = async function(guildId, data) {
        requireBotGuildPermissions(bot, guildId, [
            "MANAGE_GUILD"
        ]);
        return await editDiscoveryOld(guildId, data);
    };
}
export default function setupDiscoveryPermChecks(bot) {
    addDiscoverySubcategory(bot);
    editDiscovery(bot);
    getDiscovery(bot);
    removeDiscoverySubcategory(bot);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMgfSBmcm9tIFwiLi9wZXJtaXNzaW9ucy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGlzY292ZXJ5U3ViY2F0ZWdvcnkoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgY29uc3QgYWRkRGlzY292ZXJ5U3ViY2F0ZWdvcnlPbGQgPSBib3QuaGVscGVycy5hZGREaXNjb3ZlcnlTdWJjYXRlZ29yeTtcblxuICBib3QuaGVscGVycy5hZGREaXNjb3ZlcnlTdWJjYXRlZ29yeSA9IGFzeW5jIGZ1bmN0aW9uIChndWlsZElkLCBjYXRlZ29yeUlkKSB7XG4gICAgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZElkLCBbXCJNQU5BR0VfR1VJTERcIl0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IGFkZERpc2NvdmVyeVN1YmNhdGVnb3J5T2xkKGd1aWxkSWQsIGNhdGVnb3J5SWQpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGlzY292ZXJ5U3ViY2F0ZWdvcnkoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgY29uc3QgcmVtb3ZlRGlzY292ZXJ5U3ViY2F0ZWdvcnlPbGQgPSBib3QuaGVscGVycy5yZW1vdmVEaXNjb3ZlcnlTdWJjYXRlZ29yeTtcblxuICBib3QuaGVscGVycy5yZW1vdmVEaXNjb3ZlcnlTdWJjYXRlZ29yeSA9IGFzeW5jIGZ1bmN0aW9uIChndWlsZElkLCBjYXRlZ29yeUlkKSB7XG4gICAgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZElkLCBbXCJNQU5BR0VfR1VJTERcIl0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IHJlbW92ZURpc2NvdmVyeVN1YmNhdGVnb3J5T2xkKGd1aWxkSWQsIGNhdGVnb3J5SWQpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzY292ZXJ5KGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGdldERpc2NvdmVyeU9sZCA9IGJvdC5oZWxwZXJzLmdldERpc2NvdmVyeTtcblxuICBib3QuaGVscGVycy5nZXREaXNjb3ZlcnkgPSBhc3luYyBmdW5jdGlvbiAoZ3VpbGRJZCkge1xuICAgIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zKGJvdCwgZ3VpbGRJZCwgW1wiTUFOQUdFX0dVSUxEXCJdKTtcblxuICAgIHJldHVybiBhd2FpdCBnZXREaXNjb3ZlcnlPbGQoZ3VpbGRJZCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0RGlzY292ZXJ5KGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGVkaXREaXNjb3ZlcnlPbGQgPSBib3QuaGVscGVycy5lZGl0RGlzY292ZXJ5O1xuXG4gIGJvdC5oZWxwZXJzLmVkaXREaXNjb3ZlcnkgPSBhc3luYyBmdW5jdGlvbiAoZ3VpbGRJZCwgZGF0YSkge1xuICAgIHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zKGJvdCwgZ3VpbGRJZCwgW1wiTUFOQUdFX0dVSUxEXCJdKTtcblxuICAgIHJldHVybiBhd2FpdCBlZGl0RGlzY292ZXJ5T2xkKGd1aWxkSWQsIGRhdGEpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cERpc2NvdmVyeVBlcm1DaGVja3MoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgYWRkRGlzY292ZXJ5U3ViY2F0ZWdvcnkoYm90KTtcbiAgZWRpdERpc2NvdmVyeShib3QpO1xuICBnZXREaXNjb3ZlcnkoYm90KTtcbiAgcmVtb3ZlRGlzY292ZXJ5U3ViY2F0ZWdvcnkoYm90KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxTQUFTLDBCQUEwQixRQUFRLGtCQUFrQixDQUFDO0FBRTlELE9BQU8sU0FBUyx1QkFBdUIsQ0FBQyxHQUFpQixFQUFFO0lBQ3pELE1BQU0sMEJBQTBCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQUFBQztJQUV2RSxHQUFHLENBQUMsT0FBTyxDQUFDLHVCQUF1QixHQUFHLGVBQWdCLE9BQU8sRUFBRSxVQUFVLEVBQUU7UUFDekUsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUFDLGNBQWM7U0FBQyxDQUFDLENBQUM7UUFFM0QsT0FBTyxNQUFNLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztLQUM5RCxDQUFDO0NBQ0g7QUFFRCxPQUFPLFNBQVMsMEJBQTBCLENBQUMsR0FBaUIsRUFBRTtJQUM1RCxNQUFNLDZCQUE2QixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEFBQUM7SUFFN0UsR0FBRyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsR0FBRyxlQUFnQixPQUFPLEVBQUUsVUFBVSxFQUFFO1FBQzVFLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFBQyxjQUFjO1NBQUMsQ0FBQyxDQUFDO1FBRTNELE9BQU8sTUFBTSw2QkFBNkIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDakUsQ0FBQztDQUNIO0FBRUQsT0FBTyxTQUFTLFlBQVksQ0FBQyxHQUFpQixFQUFFO0lBQzlDLE1BQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxBQUFDO0lBRWpELEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLGVBQWdCLE9BQU8sRUFBRTtRQUNsRCwwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQUMsY0FBYztTQUFDLENBQUMsQ0FBQztRQUUzRCxPQUFPLE1BQU0sZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZDLENBQUM7Q0FDSDtBQUVELE9BQU8sU0FBUyxhQUFhLENBQUMsR0FBaUIsRUFBRTtJQUMvQyxNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxBQUFDO0lBRW5ELEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLGVBQWdCLE9BQU8sRUFBRSxJQUFJLEVBQUU7UUFDekQsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUFDLGNBQWM7U0FBQyxDQUFDLENBQUM7UUFFM0QsT0FBTyxNQUFNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QyxDQUFDO0NBQ0g7QUFFRCxlQUFlLFNBQVMsd0JBQXdCLENBQUMsR0FBaUIsRUFBRTtJQUNsRSx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2pDLENBQUEifQ==