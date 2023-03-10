import { requireBotGuildPermissions } from "./permissions.ts";
export function createEmoji(bot) {
    const createEmojiOld = bot.helpers.createEmoji;
    bot.helpers.createEmoji = async function (guildId, id) {
        requireBotGuildPermissions(bot, guildId, ["MANAGE_EMOJIS"]);
        return await createEmojiOld(guildId, id);
    };
}
export function deleteEmoji(bot) {
    const deleteEmojiOld = bot.helpers.deleteEmoji;
    bot.helpers.deleteEmoji = async function (guildId, id) {
        requireBotGuildPermissions(bot, guildId, ["MANAGE_EMOJIS"]);
        return await deleteEmojiOld(guildId, id);
    };
}
export function editEmoji(bot) {
    const editEmojiOld = bot.helpers.editEmoji;
    bot.helpers.editEmoji = async function (guildId, id, options) {
        requireBotGuildPermissions(bot, guildId, ["MANAGE_EMOJIS"]);
        return await editEmojiOld(guildId, id, options);
    };
}
export default function setupEmojiPermChecks(bot) {
    createEmoji(bot);
    deleteEmoji(bot);
    editEmoji(bot);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW1vamlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBaUI7SUFDM0MsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFFL0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxXQUFXLE9BQU8sRUFBRSxFQUFFO1FBQ25ELDBCQUEwQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBRTVELE9BQU8sTUFBTSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEdBQWlCO0lBQzNDLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBRS9DLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssV0FBVyxPQUFPLEVBQUUsRUFBRTtRQUNuRCwwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUU1RCxPQUFPLE1BQU0sY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFpQjtJQUN6QyxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUUzQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLFdBQVcsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPO1FBQzFELDBCQUEwQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBRTVELE9BQU8sTUFBTSxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sVUFBVSxvQkFBb0IsQ0FBQyxHQUFpQjtJQUM1RCxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90V2l0aENhY2hlIH0gZnJvbSBcIi4uL2RlcHMudHNcIjtcbmltcG9ydCB7IHJlcXVpcmVCb3RHdWlsZFBlcm1pc3Npb25zIH0gZnJvbSBcIi4vcGVybWlzc2lvbnMudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtb2ppKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGNyZWF0ZUVtb2ppT2xkID0gYm90LmhlbHBlcnMuY3JlYXRlRW1vamk7XG5cbiAgYm90LmhlbHBlcnMuY3JlYXRlRW1vamkgPSBhc3luYyBmdW5jdGlvbiAoZ3VpbGRJZCwgaWQpIHtcbiAgICByZXF1aXJlQm90R3VpbGRQZXJtaXNzaW9ucyhib3QsIGd1aWxkSWQsIFtcIk1BTkFHRV9FTU9KSVNcIl0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IGNyZWF0ZUVtb2ppT2xkKGd1aWxkSWQsIGlkKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUVtb2ppKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGRlbGV0ZUVtb2ppT2xkID0gYm90LmhlbHBlcnMuZGVsZXRlRW1vamk7XG5cbiAgYm90LmhlbHBlcnMuZGVsZXRlRW1vamkgPSBhc3luYyBmdW5jdGlvbiAoZ3VpbGRJZCwgaWQpIHtcbiAgICByZXF1aXJlQm90R3VpbGRQZXJtaXNzaW9ucyhib3QsIGd1aWxkSWQsIFtcIk1BTkFHRV9FTU9KSVNcIl0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUVtb2ppT2xkKGd1aWxkSWQsIGlkKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRFbW9qaShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBlZGl0RW1vamlPbGQgPSBib3QuaGVscGVycy5lZGl0RW1vamk7XG5cbiAgYm90LmhlbHBlcnMuZWRpdEVtb2ppID0gYXN5bmMgZnVuY3Rpb24gKGd1aWxkSWQsIGlkLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZUJvdEd1aWxkUGVybWlzc2lvbnMoYm90LCBndWlsZElkLCBbXCJNQU5BR0VfRU1PSklTXCJdKTtcblxuICAgIHJldHVybiBhd2FpdCBlZGl0RW1vamlPbGQoZ3VpbGRJZCwgaWQsIG9wdGlvbnMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEVtb2ppUGVybUNoZWNrcyhib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjcmVhdGVFbW9qaShib3QpO1xuICBkZWxldGVFbW9qaShib3QpO1xuICBlZGl0RW1vamkoYm90KTtcbn1cbiJdfQ==