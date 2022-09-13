import { separateOverwrites } from "../deps.ts";
/** Create a copy of a channel */ export async function cloneChannel(bot, channel, reason) {
    if (!channel.guildId) {
        throw new Error(`Cannot clone a channel outside a guild`);
    }
    const createChannelOptions = {
        type: channel.type,
        bitrate: channel.bitrate,
        userLimit: channel.userLimit,
        rateLimitPerUser: channel.rateLimitPerUser,
        position: channel.position,
        parentId: channel.parentId,
        nsfw: channel.nsfw,
        name: channel.name,
        topic: channel.topic || undefined,
        permissionOverwrites: channel.permissionOverwrites.map((overwrite)=>{
            const [type, id, allow, deny] = separateOverwrites(overwrite);
            return {
                id,
                type,
                allow: bot.utils.calculatePermissions(BigInt(allow)),
                deny: bot.utils.calculatePermissions(BigInt(deny))
            };
        })
    };
    //Create the channel (also handles permissions)
    return await bot.helpers.createChannel(channel.guildId, createChannelOptions, reason);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QsIENoYW5uZWwsIENyZWF0ZUd1aWxkQ2hhbm5lbCwgc2VwYXJhdGVPdmVyd3JpdGVzIH0gZnJvbSBcIi4uL2RlcHMudHNcIjtcblxuLyoqIENyZWF0ZSBhIGNvcHkgb2YgYSBjaGFubmVsICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvbmVDaGFubmVsKFxuICBib3Q6IEJvdCxcbiAgY2hhbm5lbDogQ2hhbm5lbCxcbiAgcmVhc29uPzogc3RyaW5nLFxuKSB7XG4gIGlmICghY2hhbm5lbC5ndWlsZElkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY2xvbmUgYSBjaGFubmVsIG91dHNpZGUgYSBndWlsZGApO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlQ2hhbm5lbE9wdGlvbnM6IENyZWF0ZUd1aWxkQ2hhbm5lbCA9IHtcbiAgICB0eXBlOiBjaGFubmVsLnR5cGUsXG4gICAgYml0cmF0ZTogY2hhbm5lbC5iaXRyYXRlLFxuICAgIHVzZXJMaW1pdDogY2hhbm5lbC51c2VyTGltaXQsXG4gICAgcmF0ZUxpbWl0UGVyVXNlcjogY2hhbm5lbC5yYXRlTGltaXRQZXJVc2VyLFxuICAgIHBvc2l0aW9uOiBjaGFubmVsLnBvc2l0aW9uLFxuICAgIHBhcmVudElkOiBjaGFubmVsLnBhcmVudElkLFxuICAgIG5zZnc6IGNoYW5uZWwubnNmdyxcbiAgICBuYW1lOiBjaGFubmVsLm5hbWUhLFxuICAgIHRvcGljOiBjaGFubmVsLnRvcGljIHx8IHVuZGVmaW5lZCxcbiAgICBwZXJtaXNzaW9uT3ZlcndyaXRlczogY2hhbm5lbC5wZXJtaXNzaW9uT3ZlcndyaXRlcy5tYXAoKG92ZXJ3cml0ZSkgPT4ge1xuICAgICAgY29uc3QgW3R5cGUsIGlkLCBhbGxvdywgZGVueV0gPSBzZXBhcmF0ZU92ZXJ3cml0ZXMob3ZlcndyaXRlKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGFsbG93OiBib3QudXRpbHMuY2FsY3VsYXRlUGVybWlzc2lvbnMoQmlnSW50KGFsbG93KSksXG4gICAgICAgIGRlbnk6IGJvdC51dGlscy5jYWxjdWxhdGVQZXJtaXNzaW9ucyhCaWdJbnQoZGVueSkpLFxuICAgICAgfTtcbiAgICB9KSxcbiAgfTtcblxuICAvL0NyZWF0ZSB0aGUgY2hhbm5lbCAoYWxzbyBoYW5kbGVzIHBlcm1pc3Npb25zKVxuICByZXR1cm4gYXdhaXQgYm90LmhlbHBlcnMuY3JlYXRlQ2hhbm5lbChcbiAgICBjaGFubmVsLmd1aWxkSWQhLFxuICAgIGNyZWF0ZUNoYW5uZWxPcHRpb25zLFxuICAgIHJlYXNvbixcbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiU0FBMkMsa0JBQWtCLFFBQVEsWUFBWSxDQUFDO0FBRWxGLGlDQUFpQyxDQUNqQyxPQUFPLGVBQWUsWUFBWSxDQUNoQyxHQUFRLEVBQ1IsT0FBZ0IsRUFDaEIsTUFBZSxFQUNmO0lBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztLQUMzRDtJQUVELE1BQU0sb0JBQW9CLEdBQXVCO1FBQy9DLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87UUFDeEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1FBQzVCLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0I7UUFDMUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQzFCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtRQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLFNBQVM7UUFDakMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBSztZQUNwRSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEFBQUM7WUFFOUQsT0FBTztnQkFDTCxFQUFFO2dCQUNGLElBQUk7Z0JBQ0osS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkQsQ0FBQztTQUNILENBQUM7S0FDSCxBQUFDO0lBRUYsK0NBQStDO0lBQy9DLE9BQU8sTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDcEMsT0FBTyxDQUFDLE9BQU8sRUFDZixvQkFBb0IsRUFDcEIsTUFBTSxDQUNQLENBQUM7Q0FDSCJ9