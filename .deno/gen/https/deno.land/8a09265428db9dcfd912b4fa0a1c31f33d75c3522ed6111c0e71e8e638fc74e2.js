import { AllowedMentionsTypes } from "../../deps.ts";
import { validateComponents } from "../components.ts";
export function editWebhookMessage(bot) {
    const editWebhookMessageOld = bot.helpers.editWebhookMessage;
    bot.helpers.editWebhookMessage = async function (webhookId, webhookToken, options) {
        if (options.content &&
            !bot.utils.validateLength(options.content, { max: 2000 })) {
            throw Error("The content can not exceed 2000 characters.");
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
        if (options.components)
            validateComponents(bot, options.components);
        return await editWebhookMessageOld(webhookId, webhookToken, options);
    };
}
export default function setupMessageWebhookPermChecks(bot) {
    editWebhookMessage(bot);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsR0FBaUI7SUFDbEQsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBRTdELEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxXQUNwQyxTQUFTLEVBQ1QsWUFBWSxFQUNaLE9BQU87UUFFUCxJQUNFLE9BQU8sQ0FBQyxPQUFPO1lBQ2YsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ3pEO1lBQ0EsTUFBTSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDM0IsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7Z0JBQ3pDLElBQ0UsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUNyQyxvQkFBb0IsQ0FBQyxZQUFZLENBQ2xDLEVBQ0Q7b0JBQ0EsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQ25FLENBQUMsRUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDO2lCQUNyQjtnQkFFRCxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7b0JBQzlDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDakUsQ0FBQyxFQUNELEdBQUcsQ0FDSixDQUFDO2lCQUNIO2FBQ0Y7WUFFRCxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDekMsSUFDRSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQ3JDLG9CQUFvQixDQUFDLFlBQVksQ0FDbEMsRUFDRDtvQkFDQSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDbkUsQ0FBQyxFQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUM7aUJBQ3JCO2dCQUVELElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDOUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNqRSxDQUFDLEVBQ0QsR0FBRyxDQUNKLENBQUM7aUJBQ0g7YUFDRjtTQUNGO1FBRUQsSUFBSSxPQUFPLENBQUMsVUFBVTtZQUFFLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEUsT0FBTyxNQUFNLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxPQUFPLFVBQVUsNkJBQTZCLENBQUMsR0FBaUI7SUFDckUsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsbG93ZWRNZW50aW9uc1R5cGVzLCBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVDb21wb25lbnRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRXZWJob29rTWVzc2FnZShib3Q6IEJvdFdpdGhDYWNoZSkge1xuICBjb25zdCBlZGl0V2ViaG9va01lc3NhZ2VPbGQgPSBib3QuaGVscGVycy5lZGl0V2ViaG9va01lc3NhZ2U7XG5cbiAgYm90LmhlbHBlcnMuZWRpdFdlYmhvb2tNZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKFxuICAgIHdlYmhvb2tJZCxcbiAgICB3ZWJob29rVG9rZW4sXG4gICAgb3B0aW9ucyxcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5jb250ZW50ICYmXG4gICAgICAhYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKG9wdGlvbnMuY29udGVudCwgeyBtYXg6IDIwMDAgfSlcbiAgICApIHtcbiAgICAgIHRocm93IEVycm9yKFwiVGhlIGNvbnRlbnQgY2FuIG5vdCBleGNlZWQgMjAwMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5lbWJlZHMgJiYgb3B0aW9ucy5lbWJlZHMubGVuZ3RoID4gMTApIHtcbiAgICAgIG9wdGlvbnMuZW1iZWRzLnNwbGljZSgxMCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5hbGxvd2VkTWVudGlvbnMudXNlcnM/Lmxlbmd0aCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2U/LmluY2x1ZGVzKFxuICAgICAgICAgICAgQWxsb3dlZE1lbnRpb25zVHlwZXMuVXNlck1lbnRpb25zLFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2UgPSBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5wYXJzZS5maWx0ZXIoKFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICApID0+IHAgIT09IFwidXNlcnNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hbGxvd2VkTWVudGlvbnMudXNlcnMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMudXNlcnMgPSBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy51c2Vycy5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMDAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucm9sZXM/Lmxlbmd0aCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2U/LmluY2x1ZGVzKFxuICAgICAgICAgICAgQWxsb3dlZE1lbnRpb25zVHlwZXMuUm9sZU1lbnRpb25zLFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2UgPSBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5wYXJzZS5maWx0ZXIoKFxuICAgICAgICAgICAgcCxcbiAgICAgICAgICApID0+IHAgIT09IFwicm9sZXNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucm9sZXMubGVuZ3RoID4gMTAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucm9sZXMgPSBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5yb2xlcy5zbGljZShcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxMDAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHZhbGlkYXRlQ29tcG9uZW50cyhib3QsIG9wdGlvbnMuY29tcG9uZW50cyk7XG5cbiAgICByZXR1cm4gYXdhaXQgZWRpdFdlYmhvb2tNZXNzYWdlT2xkKHdlYmhvb2tJZCwgd2ViaG9va1Rva2VuLCBvcHRpb25zKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBNZXNzYWdlV2ViaG9va1Blcm1DaGVja3MoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgZWRpdFdlYmhvb2tNZXNzYWdlKGJvdCk7XG59XG4iXX0=