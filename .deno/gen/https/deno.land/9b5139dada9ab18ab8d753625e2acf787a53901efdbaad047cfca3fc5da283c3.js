/**
 * Move a member from a voice channel to another.
 */ export function moveMember(bot, guildId, memberId, channelId) {
    return bot.helpers.editMember(guildId, memberId, {
        channelId
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vZGVwcy50c1wiO1xuXG4vKipcbiAqIE1vdmUgYSBtZW1iZXIgZnJvbSBhIHZvaWNlIGNoYW5uZWwgdG8gYW5vdGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVNZW1iZXIoXG4gIGJvdDogQm90LFxuICBndWlsZElkOiBiaWdpbnQsXG4gIG1lbWJlcklkOiBiaWdpbnQsXG4gIGNoYW5uZWxJZDogYmlnaW50LFxuKSB7XG4gIHJldHVybiBib3QuaGVscGVycy5lZGl0TWVtYmVyKGd1aWxkSWQsIG1lbWJlcklkLCB7IGNoYW5uZWxJZCB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7R0FFRyxDQUNILE9BQU8sU0FBUyxVQUFVLENBQ3hCLEdBQVEsRUFDUixPQUFlLEVBQ2YsUUFBZ0IsRUFDaEIsU0FBaUIsRUFDakI7SUFDQSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7UUFBRSxTQUFTO0tBQUUsQ0FBQyxDQUFDO0NBQ2pFIn0=