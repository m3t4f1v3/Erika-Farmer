import { AllowedMentionsTypes, ChannelTypes } from "../../deps.ts";
import { validateComponents } from "../components.ts";
import { requireBotChannelPermissions } from "../permissions.ts";
export function sendMessage(bot) {
    const sendMessageOld = bot.helpers.sendMessage;
    bot.helpers.sendMessage = async function(channelId, content) {
        if (typeof content === "string") {
            throw new Error("TODO");
        }
        const channel = bot.channels.get(channelId);
        if (channel && [
            ChannelTypes.GuildCategory,
            ChannelTypes.GuildStageVoice,
            ChannelTypes.GuildForum, 
        ].includes(channel.type)) {
            throw new Error(`Can not send message to a channel of this type. Channel ID: ${channelId}`);
        }
        if (content.content && !bot.utils.validateLength(content.content, {
            max: 2000
        })) {
            throw new Error("The content should not exceed 2000 characters.");
        }
        if (content.allowedMentions) {
            if (content.allowedMentions.users?.length) {
                if (content.allowedMentions.parse?.includes(AllowedMentionsTypes.UserMentions)) {
                    content.allowedMentions.parse = content.allowedMentions.parse.filter((p)=>p !== "users"
                    );
                }
                if (content.allowedMentions.users.length > 100) {
                    content.allowedMentions.users = content.allowedMentions.users.slice(0, 100);
                }
            }
            if (content.allowedMentions.roles?.length) {
                if (content.allowedMentions.parse?.includes(AllowedMentionsTypes.RoleMentions)) {
                    content.allowedMentions.parse = content.allowedMentions.parse.filter((p)=>p !== "roles"
                    );
                }
                if (content.allowedMentions.roles.length > 100) {
                    content.allowedMentions.roles = content.allowedMentions.roles.slice(0, 100);
                }
            }
        }
        if (content.components) {
            validateComponents(bot, content.components);
        }
        if (channel) {
            const requiredPerms = [];
            if (channel.guildId) {
                requiredPerms.push("SEND_MESSAGES");
            }
            if (content.tts) requiredPerms.push("SEND_TTS_MESSAGES");
            if (content.messageReference) requiredPerms.push("READ_MESSAGE_HISTORY");
            if (requiredPerms.length) {
                requireBotChannelPermissions(bot, channel, requiredPerms);
            }
        }
        return await sendMessageOld(channelId, content);
    };
}
export function editMessage(bot) {
    const editMessageOld = bot.helpers.editMessage;
    bot.helpers.editMessage = function(channelId, messageId, content) {
        if (typeof content === "string") {
            throw new Error("TODO");
        }
        const message = bot.messages.get(messageId);
        if (message) {
            if (message.authorId !== bot.id) {
                content = {
                    flags: content.flags
                };
                requireBotChannelPermissions(bot, channelId, [
                    "MANAGE_MESSAGES"
                ]);
            }
        }
        if (content.allowedMentions) {
            if (content.allowedMentions.users?.length) {
                if (content.allowedMentions.parse?.includes(AllowedMentionsTypes.UserMentions)) {
                    content.allowedMentions.parse = content.allowedMentions.parse.filter((p)=>p !== "users"
                    );
                }
                if (content.allowedMentions.users.length > 100) {
                    content.allowedMentions.users = content.allowedMentions.users.slice(0, 100);
                }
            }
            if (content.allowedMentions.roles?.length) {
                if (content.allowedMentions.parse?.includes(AllowedMentionsTypes.RoleMentions)) {
                    content.allowedMentions.parse = content.allowedMentions.parse.filter((p)=>p !== "roles"
                    );
                }
                if (content.allowedMentions.roles.length > 100) {
                    content.allowedMentions.roles = content.allowedMentions.roles.slice(0, 100);
                }
            }
        }
        content.embeds?.splice(10);
        if (content.content && !bot.utils.validateLength(content.content, {
            max: 2000
        })) {
            throw new Error("A message content can not contain more than 2000 characters.");
        }
        return editMessageOld(channelId, messageId, content);
    };
}
export function publishMessage(bot) {
    const publishMessageOld = bot.helpers.publishMessage;
    bot.helpers.publishMessage = function(channelId, messageId) {
        const message = bot.messages.get(messageId);
        requireBotChannelPermissions(bot, channelId, message?.authorId === bot.id ? [
            "SEND_MESSAGES"
        ] : [
            "MANAGE_MESSAGES"
        ]);
        return publishMessageOld(channelId, messageId);
    };
}
export default function setupCreateMessagePermChecks(bot) {
    sendMessage(bot);
    editMessage(bot);
    publishMessage(bot);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGxvd2VkTWVudGlvbnNUeXBlcywgQm90V2l0aENhY2hlLCBDaGFubmVsVHlwZXMsIFBlcm1pc3Npb25TdHJpbmdzIH0gZnJvbSBcIi4uLy4uL2RlcHMudHNcIjtcbmltcG9ydCB7IHZhbGlkYXRlQ29tcG9uZW50cyB9IGZyb20gXCIuLi9jb21wb25lbnRzLnRzXCI7XG5pbXBvcnQgeyByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zIH0gZnJvbSBcIi4uL3Blcm1pc3Npb25zLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBzZW5kTWVzc2FnZU9sZCA9IGJvdC5oZWxwZXJzLnNlbmRNZXNzYWdlO1xuXG4gIGJvdC5oZWxwZXJzLnNlbmRNZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKFxuICAgIGNoYW5uZWxJZCxcbiAgICBjb250ZW50LFxuICApIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRPRE9cIik7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbm5lbCA9IGJvdC5jaGFubmVscy5nZXQoY2hhbm5lbElkKTtcbiAgICBpZiAoXG4gICAgICBjaGFubmVsICYmXG4gICAgICBbXG4gICAgICAgIENoYW5uZWxUeXBlcy5HdWlsZENhdGVnb3J5LFxuICAgICAgICBDaGFubmVsVHlwZXMuR3VpbGRTdGFnZVZvaWNlLFxuICAgICAgICBDaGFubmVsVHlwZXMuR3VpbGRGb3J1bSxcbiAgICAgIF0uaW5jbHVkZXMoY2hhbm5lbC50eXBlKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ2FuIG5vdCBzZW5kIG1lc3NhZ2UgdG8gYSBjaGFubmVsIG9mIHRoaXMgdHlwZS4gQ2hhbm5lbCBJRDogJHtjaGFubmVsSWR9YCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY29udGVudC5jb250ZW50ICYmXG4gICAgICAhYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKGNvbnRlbnQuY29udGVudCwgeyBtYXg6IDIwMDAgfSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjb250ZW50IHNob3VsZCBub3QgZXhjZWVkIDIwMDAgY2hhcmFjdGVycy5cIik7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQuYWxsb3dlZE1lbnRpb25zKSB7XG4gICAgICBpZiAoY29udGVudC5hbGxvd2VkTWVudGlvbnMudXNlcnM/Lmxlbmd0aCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29udGVudC5hbGxvd2VkTWVudGlvbnMucGFyc2U/LmluY2x1ZGVzKFxuICAgICAgICAgICAgQWxsb3dlZE1lbnRpb25zVHlwZXMuVXNlck1lbnRpb25zLFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGVudC5hbGxvd2VkTWVudGlvbnMucGFyc2UgPSBjb250ZW50LmFsbG93ZWRNZW50aW9ucy5wYXJzZS5maWx0ZXIoKFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICApID0+IHAgIT09IFwidXNlcnNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGVudC5hbGxvd2VkTWVudGlvbnMudXNlcnMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgY29udGVudC5hbGxvd2VkTWVudGlvbnMudXNlcnMgPSBjb250ZW50LmFsbG93ZWRNZW50aW9ucy51c2Vycy5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMDAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udGVudC5hbGxvd2VkTWVudGlvbnMucm9sZXM/Lmxlbmd0aCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29udGVudC5hbGxvd2VkTWVudGlvbnMucGFyc2U/LmluY2x1ZGVzKFxuICAgICAgICAgICAgQWxsb3dlZE1lbnRpb25zVHlwZXMuUm9sZU1lbnRpb25zLFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGVudC5hbGxvd2VkTWVudGlvbnMucGFyc2UgPSBjb250ZW50LmFsbG93ZWRNZW50aW9ucy5wYXJzZS5maWx0ZXIoKFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICApID0+IHAgIT09IFwicm9sZXNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGVudC5hbGxvd2VkTWVudGlvbnMucm9sZXMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgY29udGVudC5hbGxvd2VkTWVudGlvbnMucm9sZXMgPSBjb250ZW50LmFsbG93ZWRNZW50aW9ucy5yb2xlcy5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMDAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250ZW50LmNvbXBvbmVudHMpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50cyhib3QsIGNvbnRlbnQuY29tcG9uZW50cyk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkUGVybXM6IFBlcm1pc3Npb25TdHJpbmdzW10gPSBbXTtcbiAgICAgIGlmIChjaGFubmVsLmd1aWxkSWQpIHtcbiAgICAgICAgcmVxdWlyZWRQZXJtcy5wdXNoKFwiU0VORF9NRVNTQUdFU1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb250ZW50LnR0cykgcmVxdWlyZWRQZXJtcy5wdXNoKFwiU0VORF9UVFNfTUVTU0FHRVNcIik7XG4gICAgICBpZiAoY29udGVudC5tZXNzYWdlUmVmZXJlbmNlKSByZXF1aXJlZFBlcm1zLnB1c2goXCJSRUFEX01FU1NBR0VfSElTVE9SWVwiKTtcbiAgICAgIGlmIChyZXF1aXJlZFBlcm1zLmxlbmd0aCkge1xuICAgICAgICByZXF1aXJlQm90Q2hhbm5lbFBlcm1pc3Npb25zKGJvdCwgY2hhbm5lbCwgcmVxdWlyZWRQZXJtcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHNlbmRNZXNzYWdlT2xkKGNoYW5uZWxJZCwgY29udGVudCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0TWVzc2FnZShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBlZGl0TWVzc2FnZU9sZCA9IGJvdC5oZWxwZXJzLmVkaXRNZXNzYWdlO1xuXG4gIGJvdC5oZWxwZXJzLmVkaXRNZXNzYWdlID0gZnVuY3Rpb24gKFxuICAgIGNoYW5uZWxJZCxcbiAgICBtZXNzYWdlSWQsXG4gICAgY29udGVudCxcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUT0RPXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBib3QubWVzc2FnZXMuZ2V0KG1lc3NhZ2VJZCk7XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIGlmIChtZXNzYWdlLmF1dGhvcklkICE9PSBib3QuaWQpIHtcbiAgICAgICAgY29udGVudCA9IHsgZmxhZ3M6IGNvbnRlbnQuZmxhZ3MgfTtcbiAgICAgICAgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyhib3QsIGNoYW5uZWxJZCwgW1wiTUFOQUdFX01FU1NBR0VTXCJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGVudC5hbGxvd2VkTWVudGlvbnMpIHtcbiAgICAgIGlmIChjb250ZW50LmFsbG93ZWRNZW50aW9ucy51c2Vycz8ubGVuZ3RoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb250ZW50LmFsbG93ZWRNZW50aW9ucy5wYXJzZT8uaW5jbHVkZXMoXG4gICAgICAgICAgICBBbGxvd2VkTWVudGlvbnNUeXBlcy5Vc2VyTWVudGlvbnMsXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250ZW50LmFsbG93ZWRNZW50aW9ucy5wYXJzZSA9IGNvbnRlbnQuYWxsb3dlZE1lbnRpb25zLnBhcnNlLmZpbHRlcigoXG4gICAgICAgICAgICBwLFxuICAgICAgICAgICkgPT4gcCAhPT0gXCJ1c2Vyc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZW50LmFsbG93ZWRNZW50aW9ucy51c2Vycy5sZW5ndGggPiAxMDApIHtcbiAgICAgICAgICBjb250ZW50LmFsbG93ZWRNZW50aW9ucy51c2VycyA9IGNvbnRlbnQuYWxsb3dlZE1lbnRpb25zLnVzZXJzLnNsaWNlKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZW50LmFsbG93ZWRNZW50aW9ucy5yb2xlcz8ubGVuZ3RoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb250ZW50LmFsbG93ZWRNZW50aW9ucy5wYXJzZT8uaW5jbHVkZXMoXG4gICAgICAgICAgICBBbGxvd2VkTWVudGlvbnNUeXBlcy5Sb2xlTWVudGlvbnMsXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250ZW50LmFsbG93ZWRNZW50aW9ucy5wYXJzZSA9IGNvbnRlbnQuYWxsb3dlZE1lbnRpb25zLnBhcnNlLmZpbHRlcigoXG4gICAgICAgICAgICBwLFxuICAgICAgICAgICkgPT4gcCAhPT0gXCJyb2xlc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZW50LmFsbG93ZWRNZW50aW9ucy5yb2xlcy5sZW5ndGggPiAxMDApIHtcbiAgICAgICAgICBjb250ZW50LmFsbG93ZWRNZW50aW9ucy5yb2xlcyA9IGNvbnRlbnQuYWxsb3dlZE1lbnRpb25zLnJvbGVzLnNsaWNlKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudC5lbWJlZHM/LnNwbGljZSgxMCk7XG5cbiAgICBpZiAoXG4gICAgICBjb250ZW50LmNvbnRlbnQgJiZcbiAgICAgICFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgoY29udGVudC5jb250ZW50LCB7IG1heDogMjAwMCB9KVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkEgbWVzc2FnZSBjb250ZW50IGNhbiBub3QgY29udGFpbiBtb3JlIHRoYW4gMjAwMCBjaGFyYWN0ZXJzLlwiLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWRpdE1lc3NhZ2VPbGQoY2hhbm5lbElkLCBtZXNzYWdlSWQsIGNvbnRlbnQpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVibGlzaE1lc3NhZ2UoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VPbGQgPSBib3QuaGVscGVycy5wdWJsaXNoTWVzc2FnZTtcblxuICBib3QuaGVscGVycy5wdWJsaXNoTWVzc2FnZSA9IGZ1bmN0aW9uIChcbiAgICBjaGFubmVsSWQsXG4gICAgbWVzc2FnZUlkLFxuICApIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYm90Lm1lc3NhZ2VzLmdldChtZXNzYWdlSWQpO1xuXG4gICAgcmVxdWlyZUJvdENoYW5uZWxQZXJtaXNzaW9ucyhcbiAgICAgIGJvdCxcbiAgICAgIGNoYW5uZWxJZCxcbiAgICAgIG1lc3NhZ2U/LmF1dGhvcklkID09PSBib3QuaWQgPyBbXCJTRU5EX01FU1NBR0VTXCJdIDogW1wiTUFOQUdFX01FU1NBR0VTXCJdLFxuICAgICk7XG5cbiAgICByZXR1cm4gcHVibGlzaE1lc3NhZ2VPbGQoY2hhbm5lbElkLCBtZXNzYWdlSWQpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cENyZWF0ZU1lc3NhZ2VQZXJtQ2hlY2tzKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIHNlbmRNZXNzYWdlKGJvdCk7XG4gIGVkaXRNZXNzYWdlKGJvdCk7XG4gIHB1Ymxpc2hNZXNzYWdlKGJvdCk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlNBQVMsb0JBQW9CLEVBQWdCLFlBQVksUUFBMkIsZUFBZSxDQUFDO0FBQ3BHLFNBQVMsa0JBQWtCLFFBQVEsa0JBQWtCLENBQUM7QUFDdEQsU0FBUyw0QkFBNEIsUUFBUSxtQkFBbUIsQ0FBQztBQUVqRSxPQUFPLFNBQVMsV0FBVyxDQUFDLEdBQWlCLEVBQUU7SUFDN0MsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEFBQUM7SUFFL0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZUFDeEIsU0FBUyxFQUNULE9BQU8sRUFDUDtRQUNBLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFFRCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQUFBQztRQUM1QyxJQUNFLE9BQU8sSUFDUDtZQUNFLFlBQVksQ0FBQyxhQUFhO1lBQzFCLFlBQVksQ0FBQyxlQUFlO1lBQzVCLFlBQVksQ0FBQyxVQUFVO1NBQ3hCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDeEI7WUFDQSxNQUFNLElBQUksS0FBSyxDQUNiLENBQUMsNERBQTRELEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FDM0UsQ0FBQztTQUNIO1FBRUQsSUFDRSxPQUFPLENBQUMsT0FBTyxJQUNmLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUFFLEdBQUcsRUFBRSxJQUFJO1NBQUUsQ0FBQyxFQUN6RDtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRTtZQUMzQixJQUFJLE9BQU8s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