import { AllowedMentionsTypes, ApplicationCommandOptionTypes, ApplicationCommandTypes, CONTEXT_MENU_COMMANDS_NAME_REGEX, SLASH_COMMANDS_NAME_REGEX, } from "../../deps.ts";
export function validateApplicationCommandOptions(bot, options) {
    const requiredOptions = [];
    const optionalOptions = [];
    for (const option of options) {
        option.name = option.name.toLowerCase();
        if (option.choices?.length) {
            if (option.choices.length > 25) {
                throw new Error("Too many application command options provided.");
            }
            if (option.type !== ApplicationCommandOptionTypes.String &&
                option.type !== ApplicationCommandOptionTypes.Integer) {
                throw new Error("Only string or integer options can have choices.");
            }
        }
        if (!bot.utils.validateLength(option.name, { min: 1, max: 32 })) {
            throw new Error("Invalid application command option name.");
        }
        if (!bot.utils.validateLength(option.description, { min: 1, max: 100 })) {
            throw new Error("Invalid application command description.");
        }
        option.choices?.every((choice) => {
            if (!bot.utils.validateLength(choice.name, { min: 1, max: 100 })) {
                throw new Error("Invalid application command option choice name. Must be between 1-100 characters long.");
            }
            if (option.type === ApplicationCommandOptionTypes.String &&
                (typeof choice.value !== "string" || choice.value.length < 1 ||
                    choice.value.length > 100)) {
                throw new Error("Invalid slash options choice value type.");
            }
            if (option.type === ApplicationCommandOptionTypes.Integer &&
                typeof choice.value !== "number") {
                throw new Error("A number must be set for Integer types.");
            }
        });
        if (option.required) {
            requiredOptions.push(option);
            continue;
        }
        optionalOptions.push(option);
    }
    return [...requiredOptions, ...optionalOptions];
}
export function createApplicationCommand(bot) {
    const createApplicationCommandOld = bot.helpers.createApplicationCommand;
    bot.helpers.createApplicationCommand = async function (options, guildId) {
        const isChatInput = !options.type ||
            options.type === ApplicationCommandTypes.ChatInput;
        if (!options.name) {
            throw new Error("A name is required to create a options.");
        }
        if (isChatInput) {
            if (!SLASH_COMMANDS_NAME_REGEX.test(options.name)) {
                throw new Error("The name of the slash command did not match the required regex.");
            }
            options.name = options.name.toLowerCase();
            if (!options.description) {
                throw new Error("Slash commands require some form of a description be provided.");
            }
            else if (!bot.utils.validateLength(options.description, { min: 1, max: 100 })) {
                throw new Error("Application command descriptions must be between 1 and 100 characters.");
            }
            if (options.options?.length) {
                if (options.options.length > 25) {
                    throw new Error("Only 25 options are allowed to be provided.");
                }
                options.options = validateApplicationCommandOptions(bot, options.options);
            }
        }
        else {
            if (!CONTEXT_MENU_COMMANDS_NAME_REGEX.test(options.name)) {
                throw new Error("The name of the context menu did not match the required regex.");
            }
        }
        return await createApplicationCommandOld(options, guildId);
    };
}
export function editInteractionResponse(bot) {
    const editInteractionResponseOld = bot.helpers.editInteractionResponse;
    bot.helpers.editInteractionResponse = async function (token, options) {
        if (options.content && options.content.length > 2000) {
            throw Error(bot.constants.Errors.MESSAGE_MAX_LENGTH);
        }
        if (options.embeds && options.embeds.length > 10) {
            options.embeds.splice(10);
        }
        if (options.allowedMentions) {
            if (options.allowedMentions.users?.length) {
                if (options.allowedMentions.parse?.includes(AllowedMentionsTypes.UserMentions)) {
                    options.allowedMentions.parse = options.allowedMentions.parse.filter((p) => p !== "users");
                }
                if (options.allowedMentions.users.length > 100) {
                    options.allowedMentions.users = options.allowedMentions.users.slice(0, 100);
                }
            }
            if (options.allowedMentions.roles?.length) {
                if (options.allowedMentions.parse?.includes(AllowedMentionsTypes.RoleMentions)) {
                    options.allowedMentions.parse = options.allowedMentions.parse.filter((p) => p !== "roles");
                }
                if (options.allowedMentions.roles.length > 100) {
                    options.allowedMentions.roles = options.allowedMentions.roles.slice(0, 100);
                }
            }
        }
        return await editInteractionResponseOld(token, options);
    };
}
export default function setupInteractionCommandPermChecks(bot) {
    createApplicationCommand(bot);
    editInteractionResponse(bot);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tYW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsb0JBQW9CLEVBRXBCLDZCQUE2QixFQUM3Qix1QkFBdUIsRUFFdkIsZ0NBQWdDLEVBQ2hDLHlCQUF5QixHQUMxQixNQUFNLGVBQWUsQ0FBQztBQUV2QixNQUFNLFVBQVUsaUNBQWlDLENBQy9DLEdBQWlCLEVBQ2pCLE9BQW1DO0lBRW5DLE1BQU0sZUFBZSxHQUErQixFQUFFLENBQUM7SUFDdkQsTUFBTSxlQUFlLEdBQStCLEVBQUUsQ0FBQztJQUV2RCxLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtRQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRTtZQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtnQkFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2FBQ25FO1lBRUQsSUFDRSxNQUFNLENBQUMsSUFBSSxLQUFLLDZCQUE2QixDQUFDLE1BQU07Z0JBQ3BELE1BQU0sQ0FBQyxJQUFJLEtBQUssNkJBQTZCLENBQUMsT0FBTyxFQUNyRDtnQkFDQSxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7YUFDckU7U0FDRjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMvRCxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxj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QWlCO0lBQ3pFLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbGxvd2VkTWVudGlvbnNUeXBlcyxcbiAgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uLFxuICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlcyxcbiAgQXBwbGljYXRpb25Db21tYW5kVHlwZXMsXG4gIEJvdFdpdGhDYWNoZSxcbiAgQ09OVEVYVF9NRU5VX0NPTU1BTkRTX05BTUVfUkVHRVgsXG4gIFNMQVNIX0NPTU1BTkRTX05BTUVfUkVHRVgsXG59IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvbnMoXG4gIGJvdDogQm90V2l0aENhY2hlLFxuICBvcHRpb25zOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25bXSxcbikge1xuICBjb25zdCByZXF1aXJlZE9wdGlvbnM6IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvbltdID0gW107XG4gIGNvbnN0IG9wdGlvbmFsT3B0aW9uczogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgb3B0aW9uLm5hbWUgPSBvcHRpb24ubmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKG9wdGlvbi5jaG9pY2VzPy5sZW5ndGgpIHtcbiAgICAgIGlmIChvcHRpb24uY2hvaWNlcy5sZW5ndGggPiAyNSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb28gbWFueSBhcHBsaWNhdGlvbiBjb21tYW5kIG9wdGlvbnMgcHJvdmlkZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG9wdGlvbi50eXBlICE9PSBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlcy5TdHJpbmcgJiZcbiAgICAgICAgb3B0aW9uLnR5cGUgIT09IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVzLkludGVnZXJcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHN0cmluZyBvciBpbnRlZ2VyIG9wdGlvbnMgY2FuIGhhdmUgY2hvaWNlcy5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgob3B0aW9uLm5hbWUsIHsgbWluOiAxLCBtYXg6IDMyIH0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFwcGxpY2F0aW9uIGNvbW1hbmQgb3B0aW9uIG5hbWUuXCIpO1xuICAgIH1cblxuICAgIGlmICghYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKG9wdGlvbi5kZXNjcmlwdGlvbiwgeyBtaW46IDEsIG1heDogMTAwIH0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFwcGxpY2F0aW9uIGNvbW1hbmQgZGVzY3JpcHRpb24uXCIpO1xuICAgIH1cblxuICAgIG9wdGlvbi5jaG9pY2VzPy5ldmVyeSgoY2hvaWNlKSA9PiB7XG4gICAgICBpZiAoIWJvdC51dGlscy52YWxpZGF0ZUxlbmd0aChjaG9pY2UubmFtZSwgeyBtaW46IDEsIG1heDogMTAwIH0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBcIkludmFsaWQgYXBwbGljYXRpb24gY29tbWFuZCBvcHRpb24gY2hvaWNlIG5hbWUuIE11c3QgYmUgYmV0d2VlbiAxLTEwMCBjaGFyYWN0ZXJzIGxvbmcuXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9uLnR5cGUgPT09IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVzLlN0cmluZyAmJlxuICAgICAgICAodHlwZW9mIGNob2ljZS52YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCBjaG9pY2UudmFsdWUubGVuZ3RoIDwgMSB8fFxuICAgICAgICAgIGNob2ljZS52YWx1ZS5sZW5ndGggPiAxMDApXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzbGFzaCBvcHRpb25zIGNob2ljZSB2YWx1ZSB0eXBlLlwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHRpb24udHlwZSA9PT0gQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZXMuSW50ZWdlciAmJlxuICAgICAgICB0eXBlb2YgY2hvaWNlLnZhbHVlICE9PSBcIm51bWJlclwiXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBudW1iZXIgbXVzdCBiZSBzZXQgZm9yIEludGVnZXIgdHlwZXMuXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG9wdGlvbi5yZXF1aXJlZCkge1xuICAgICAgcmVxdWlyZWRPcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIG9wdGlvbmFsT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gIH1cblxuICByZXR1cm4gWy4uLnJlcXVpcmVkT3B0aW9ucywgLi4ub3B0aW9uYWxPcHRpb25zXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwcGxpY2F0aW9uQ29tbWFuZChib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBjcmVhdGVBcHBsaWNhdGlvbkNvbW1hbmRPbGQgPSBib3QuaGVscGVycy5jcmVhdGVBcHBsaWNhdGlvbkNvbW1hbmQ7XG5cbiAgYm90LmhlbHBlcnMuY3JlYXRlQXBwbGljYXRpb25Db21tYW5kID0gYXN5bmMgZnVuY3Rpb24gKG9wdGlvbnMsIGd1aWxkSWQpIHtcbiAgICBjb25zdCBpc0NoYXRJbnB1dCA9ICFvcHRpb25zLnR5cGUgfHxcbiAgICAgIG9wdGlvbnMudHlwZSA9PT0gQXBwbGljYXRpb25Db21tYW5kVHlwZXMuQ2hhdElucHV0O1xuXG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgbmFtZSBpcyByZXF1aXJlZCB0byBjcmVhdGUgYSBvcHRpb25zLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoaXNDaGF0SW5wdXQpIHtcbiAgICAgIGlmICghU0xBU0hfQ09NTUFORFNfTkFNRV9SRUdFWC50ZXN0KG9wdGlvbnMubmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiVGhlIG5hbWUgb2YgdGhlIHNsYXNoIGNvbW1hbmQgZGlkIG5vdCBtYXRjaCB0aGUgcmVxdWlyZWQgcmVnZXguXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgc2xhc2ggbmVlZCB0byBiZSBsb3dlcmNhc2VcbiAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAvLyBTbGFzaCBjb21tYW5kcyByZXF1aXJlIGRlc2NyaXB0aW9uXG4gICAgICBpZiAoIW9wdGlvbnMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiU2xhc2ggY29tbWFuZHMgcmVxdWlyZSBzb21lIGZvcm0gb2YgYSBkZXNjcmlwdGlvbiBiZSBwcm92aWRlZC5cIixcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoIWJvdC51dGlscy52YWxpZGF0ZUxlbmd0aChvcHRpb25zLmRlc2NyaXB0aW9uLCB7IG1pbjogMSwgbWF4OiAxMDAgfSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiQXBwbGljYXRpb24gY29tbWFuZCBkZXNjcmlwdGlvbnMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDEwMCBjaGFyYWN0ZXJzLlwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5vcHRpb25zPy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMub3B0aW9ucy5sZW5ndGggPiAyNSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgMjUgb3B0aW9ucyBhcmUgYWxsb3dlZCB0byBiZSBwcm92aWRlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLm9wdGlvbnMgPSB2YWxpZGF0ZUFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvbnMoYm90LCBvcHRpb25zLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIUNPTlRFWFRfTUVOVV9DT01NQU5EU19OQU1FX1JFR0VYLnRlc3Qob3B0aW9ucy5uYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJUaGUgbmFtZSBvZiB0aGUgY29udGV4dCBtZW51IGRpZCBub3QgbWF0Y2ggdGhlIHJlcXVpcmVkIHJlZ2V4LlwiLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBjcmVhdGVBcHBsaWNhdGlvbkNvbW1hbmRPbGQob3B0aW9ucywgZ3VpbGRJZCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0SW50ZXJhY3Rpb25SZXNwb25zZShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBlZGl0SW50ZXJhY3Rpb25SZXNwb25zZU9sZCA9IGJvdC5oZWxwZXJzLmVkaXRJbnRlcmFjdGlvblJlc3BvbnNlO1xuXG4gIGJvdC5oZWxwZXJzLmVkaXRJbnRlcmFjdGlvblJlc3BvbnNlID0gYXN5bmMgZnVuY3Rpb24gKHRva2VuLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuY29udGVudCAmJiBvcHRpb25zLmNvbnRlbnQubGVuZ3RoID4gMjAwMCkge1xuICAgICAgdGhyb3cgRXJyb3IoYm90LmNvbnN0YW50cy5FcnJvcnMuTUVTU0FHRV9NQVhfTEVOR1RIKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5lbWJlZHMgJiYgb3B0aW9ucy5lbWJlZHMubGVuZ3RoID4gMTApIHtcbiAgICAgIG9wdGlvbnMuZW1iZWRzLnNwbGljZSgxMCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5hbGxvd2VkTWVudGlvbnMudXNlcnM/Lmxlbmd0aCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2U/LmluY2x1ZGVzKFxuICAgICAgICAgICAgQWxsb3dlZE1lbnRpb25zVHlwZXMuVXNlck1lbnRpb25zLFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2UgPSBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5wYXJzZS5maWx0ZXIoKFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICApID0+IHAgIT09IFwidXNlcnNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hbGxvd2VkTWVudGlvbnMudXNlcnMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMudXNlcnMgPSBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy51c2Vycy5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMDAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucm9sZXM/Lmxlbmd0aCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2U/LmluY2x1ZGVzKFxuICAgICAgICAgICAgQWxsb3dlZE1lbnRpb25zVHlwZXMuUm9sZU1lbnRpb25zLFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2UgPSBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5wYXJzZS5maWx0ZXIoKFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICApID0+IHAgIT09IFwicm9sZXNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucm9sZXMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucm9sZXMgPSBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5yb2xlcy5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMDAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBlZGl0SW50ZXJhY3Rpb25SZXNwb25zZU9sZCh0b2tlbiwgb3B0aW9ucyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwSW50ZXJhY3Rpb25Db21tYW5kUGVybUNoZWNrcyhib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjcmVhdGVBcHBsaWNhdGlvbkNvbW1hbmQoYm90KTtcbiAgZWRpdEludGVyYWN0aW9uUmVzcG9uc2UoYm90KTtcbn1cbiJdfQ==