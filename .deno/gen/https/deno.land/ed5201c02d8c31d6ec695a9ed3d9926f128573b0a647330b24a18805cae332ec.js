import { ChannelTypes } from "../../deps.ts";
import { requireBotChannelPermissions } from "../permissions.ts";
export default function editChannel(bot) {
    const editChannelOld = bot.helpers.editChannel;
    bot.helpers.editChannel = async function(channelId, options, reason) {
        const channel = bot.channels.get(channelId);
        if (channel?.guildId) {
            const guild = bot.guilds.get(channel.guildId);
            if (options.rateLimitPerUser && options.rateLimitPerUser > 21600) {
                throw new Error("Amount of seconds a user has to wait before sending another message must be between 0-21600");
            }
            if (options.name) {
                if (!bot.utils.validateLength(options.name, {
                    min: 1,
                    max: 100
                })) {
                    throw new Error("The channel name must be between 1-100 characters.");
                }
            }
            const isThread = [
                ChannelTypes.GuildNewsThread,
                ChannelTypes.GuildPublicThread,
                ChannelTypes.GuildPrivateThread, 
            ].includes(channel.type);
            const requiredPerms = [];
            if (isThread) {
                if (options.invitable !== undefined && channel.type !== ChannelTypes.GuildPrivateThread) {
                    throw new Error("Invitable option is only allowed on private threads.");
                }
                // UNARCHIVING AN UNLOCKED CHANNEL SIMPLY REQUIRES SEND
                if (!channel.locked && options.archived === false) {
                    requiredPerms.push("SEND_MESSAGES");
                    // MORE THAN ARCHIVE WAS MODIFIED
                    if (Object.keys(options).length > 1) {
                        requiredPerms.push("MANAGE_THREADS");
                    }
                } else {
                    requiredPerms.push("MANAGE_THREADS");
                }
            } else {
                requiredPerms.push("MANAGE_CHANNELS");
                if (options.permissionOverwrites) {
                    requiredPerms.push("MANAGE_ROLES");
                }
                if (options.type) {
                    if ([
                        ChannelTypes.GuildNews,
                        ChannelTypes.GuildText
                    ].includes(options.type)) {
                        throw new Error("Only news and text types can be modified.");
                    }
                    if (guild && !guild.toggles.has("news")) {
                        throw new Error("The NEWS feature is missing in this guild to be able to modify the channel type.");
                    }
                }
                if (options.topic) {
                    if (!bot.utils.validateLength(options.topic, {
                        min: 1,
                        max: 1024
                    })) {
                        throw new Error("The topic must be a number between 1 and 1024");
                    }
                }
                if (options.userLimit && options.userLimit > 99) {
                    throw new Error("The user limit must be less than 99.");
                }
                if (options.parentId) {
                    const category = bot.channels.get(options.parentId);
                    if (category && category.type !== ChannelTypes.GuildCategory) {
                        throw new Error("The parent id must be for a category channel type.");
                    }
                }
            }
            requireBotChannelPermissions(bot, channel, requiredPerms);
        }
        return await editChannelOld(channelId, options, reason);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJtaXNzaW9uU3RyaW5ncyB9IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5pbXBvcnQgeyBCb3RXaXRoQ2FjaGUsIENoYW5uZWxUeXBlcywgR3VpbGRGZWF0dXJlcyB9IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5pbXBvcnQgeyByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zIH0gZnJvbSBcIi4uL3Blcm1pc3Npb25zLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRDaGFubmVsKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGNvbnN0IGVkaXRDaGFubmVsT2xkID0gYm90LmhlbHBlcnMuZWRpdENoYW5uZWw7XG5cbiAgYm90LmhlbHBlcnMuZWRpdENoYW5uZWwgPSBhc3luYyBmdW5jdGlvbiAoY2hhbm5lbElkLCBvcHRpb25zLCByZWFzb24pIHtcbiAgICBjb25zdCBjaGFubmVsID0gYm90LmNoYW5uZWxzLmdldChjaGFubmVsSWQpO1xuXG4gICAgaWYgKGNoYW5uZWw/Lmd1aWxkSWQpIHtcbiAgICAgIGNvbnN0IGd1aWxkID0gYm90Lmd1aWxkcy5nZXQoY2hhbm5lbC5ndWlsZElkKTtcblxuICAgICAgaWYgKG9wdGlvbnMucmF0ZUxpbWl0UGVyVXNlciAmJiBvcHRpb25zLnJhdGVMaW1pdFBlclVzZXIgPiAyMTYwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJBbW91bnQgb2Ygc2Vjb25kcyBhIHVzZXIgaGFzIHRvIHdhaXQgYmVmb3JlIHNlbmRpbmcgYW5vdGhlciBtZXNzYWdlIG11c3QgYmUgYmV0d2VlbiAwLTIxNjAwXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgaWYgKCFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgob3B0aW9ucy5uYW1lLCB7IG1pbjogMSwgbWF4OiAxMDAgfSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIlRoZSBjaGFubmVsIG5hbWUgbXVzdCBiZSBiZXR3ZWVuIDEtMTAwIGNoYXJhY3RlcnMuXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1RocmVhZCA9IFtcbiAgICAgICAgQ2hhbm5lbFR5cGVzLkd1aWxkTmV3c1RocmVhZCxcbiAgICAgICAgQ2hhbm5lbFR5cGVzLkd1aWxkUHVibGljVGhyZWFkLFxuICAgICAgICBDaGFubmVsVHlwZXMuR3VpbGRQcml2YXRlVGhyZWFkLFxuICAgICAgXS5pbmNsdWRlcyhjaGFubmVsLnR5cGUpO1xuXG4gICAgICBjb25zdCByZXF1aXJlZFBlcm1zOiBQZXJtaXNzaW9uU3RyaW5nc1tdID0gW107XG4gICAgICBpZiAoaXNUaHJlYWQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG9wdGlvbnMuaW52aXRhYmxlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBjaGFubmVsLnR5cGUgIT09IENoYW5uZWxUeXBlcy5HdWlsZFByaXZhdGVUaHJlYWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJJbnZpdGFibGUgb3B0aW9uIGlzIG9ubHkgYWxsb3dlZCBvbiBwcml2YXRlIHRocmVhZHMuXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVOQVJDSElWSU5HIEFOIFVOTE9DS0VEIENIQU5ORUwgU0lNUExZIFJFUVVJUkVTIFNFTkRcbiAgICAgICAgaWYgKCFjaGFubmVsLmxvY2tlZCAmJiBvcHRpb25zLmFyY2hpdmVkID09PSBmYWxzZSkge1xuICAgICAgICAgIHJlcXVpcmVkUGVybXMucHVzaChcIlNFTkRfTUVTU0FHRVNcIik7XG4gICAgICAgICAgLy8gTU9SRSBUSEFOIEFSQ0hJVkUgV0FTIE1PRElGSUVEXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJlcXVpcmVkUGVybXMucHVzaChcIk1BTkFHRV9USFJFQURTXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXF1aXJlZFBlcm1zLnB1c2goXCJNQU5BR0VfVEhSRUFEU1wiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWlyZWRQZXJtcy5wdXNoKFwiTUFOQUdFX0NIQU5ORUxTXCIpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBlcm1pc3Npb25PdmVyd3JpdGVzKSB7XG4gICAgICAgICAgcmVxdWlyZWRQZXJtcy5wdXNoKFwiTUFOQUdFX1JPTEVTXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudHlwZSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIFtDaGFubmVsVHlwZXMuR3VpbGROZXdzLCBDaGFubmVsVHlwZXMuR3VpbGRUZXh0XS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgb3B0aW9ucy50eXBlLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBuZXdzIGFuZCB0ZXh0IHR5cGVzIGNhbiBiZSBtb2RpZmllZC5cIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGd1aWxkICYmICFndWlsZC50b2dnbGVzLmhhcyhcIm5ld3NcIikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgXCJUaGUgTkVXUyBmZWF0dXJlIGlzIG1pc3NpbmcgaW4gdGhpcyBndWlsZCB0byBiZSBhYmxlIHRvIG1vZGlmeSB0aGUgY2hhbm5lbCB0eXBlLlwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy50b3BpYykge1xuICAgICAgICAgIGlmICghYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKG9wdGlvbnMudG9waWMsIHsgbWluOiAxLCBtYXg6IDEwMjQgfSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB0b3BpYyBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMSBhbmQgMTAyNFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy51c2VyTGltaXQgJiYgb3B0aW9ucy51c2VyTGltaXQgPiA5OSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB1c2VyIGxpbWl0IG11c3QgYmUgbGVzcyB0aGFuIDk5LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcmVudElkKSB7XG4gICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBib3QuY2hhbm5lbHMuZ2V0KG9wdGlvbnMucGFyZW50SWQpO1xuICAgICAgICAgIGlmIChjYXRlZ29yeSAmJiBjYXRlZ29yeS50eXBlICE9PSBDaGFubmVsVHlwZXMuR3VpbGRDYXRlZ29yeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlRoZSBwYXJlbnQgaWQgbXVzdCBiZSBmb3IgYSBjYXRlZ29yeSBjaGFubmVsIHR5cGUuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKFxuICAgICAgICBib3QsXG4gICAgICAgIGNoYW5uZWwsXG4gICAgICAgIHJlcXVpcmVkUGVybXMsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBlZGl0Q2hhbm5lbE9sZChjaGFubmVsSWQsIG9wdGlvbnMsIHJlYXNvbik7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBdUIsWUFBWSxRQUF1QixlQUFlLENBQUM7QUFDMUUsU0FBUyw0QkFBNEIsUUFB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