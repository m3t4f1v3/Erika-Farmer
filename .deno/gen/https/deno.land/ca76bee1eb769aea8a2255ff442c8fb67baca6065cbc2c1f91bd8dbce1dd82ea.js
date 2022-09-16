import { MessageComponentTypes } from "../../../types/shared.ts";
export async function editFollowupMessage(bot, interactionToken, messageId, options) {
    const result = await bot.rest.runMethod(bot.rest, "PATCH", bot.constants.routes.WEBHOOK_MESSAGE(bot.applicationId, interactionToken, messageId), {
        content: options.content,
        embeds: options.embeds?.map((embed) => bot.transformers.reverse.embed(bot, embed)),
        file: options.file,
        allowed_mentions: options.allowedMentions
            ? {
                parse: options.allowedMentions.parse,
                roles: options.allowedMentions.roles?.map((id) => id.toString()),
                users: options.allowedMentions.users?.map((id) => id.toString()),
                replied_user: options.allowedMentions.repliedUser,
            }
            : undefined,
        attachments: options.attachments?.map((attachment) => ({
            id: attachment.id.toString(),
            filename: attachment.filename,
            content_type: attachment.contentType,
            size: attachment.size,
            url: attachment.url,
            proxy_url: attachment.proxyUrl,
            height: attachment.height,
            width: attachment.width,
            ephemeral: attachment.ephemeral,
        })),
        components: options.components?.map((component) => ({
            type: component.type,
            components: component.components.map((subComponent) => {
                if (subComponent.type === MessageComponentTypes.InputText) {
                    return {
                        type: subComponent.type,
                        style: subComponent.style,
                        custom_id: subComponent.customId,
                        label: subComponent.label,
                        placeholder: subComponent.placeholder,
                        min_length: subComponent.minLength ?? subComponent.required === false ? 0 : subComponent.minLength,
                        max_length: subComponent.maxLength,
                    };
                }
                if (subComponent.type === MessageComponentTypes.SelectMenu) {
                    return {
                        type: subComponent.type,
                        custom_id: subComponent.customId,
                        placeholder: subComponent.placeholder,
                        min_values: subComponent.minValues,
                        max_values: subComponent.maxValues,
                        options: subComponent.options.map((option) => ({
                            label: option.label,
                            value: option.value,
                            description: option.description,
                            emoji: option.emoji
                                ? {
                                    id: option.emoji.id?.toString(),
                                    name: option.emoji.name,
                                    animated: option.emoji.animated,
                                }
                                : undefined,
                            default: option.default,
                        })),
                    };
                }
                return {
                    type: subComponent.type,
                    custom_id: subComponent.customId,
                    label: subComponent.label,
                    style: subComponent.style,
                    emoji: subComponent.emoji
                        ? {
                            id: subComponent.emoji.id?.toString(),
                            name: subComponent.emoji.name,
                            animated: subComponent.emoji.animated,
                        }
                        : undefined,
                    url: subComponent.url,
                    disabled: subComponent.disabled,
                };
            }),
        })),
        message_id: messageId?.toString(),
    });
    return bot.transformers.message(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdEZvbGxvd3VwTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXRGb2xsb3d1cE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJakUsTUFBTSxDQUFDLEtBQUssVUFBVSxtQkFBbUIsQ0FDdkMsR0FBUSxFQUNSLGdCQUF3QixFQUN4QixTQUFpQixFQUNqQixPQUEyQjtJQUUzQixNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLE9BQU8sRUFDUCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsRUFDcEY7UUFDRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87UUFDeEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xGLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZUFBZTtZQUN2QyxDQUFDLENBQUM7Z0JBQ0EsS0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSztnQkFDcEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoRSxLQUFLLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFF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QUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3pCLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDekIsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO3dCQUN2QixDQUFDLENBQUM7NEJBQ0EsRUFBRSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRTs0QkFDckMsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSTs0QkFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUTt5QkFDdEM7d0JBQ0QsQ0FBQyxDQUFDLFNBQVM7b0JBQ2IsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHO29CQUNyQixRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7aUJBQ2hDLENBQUM7WUFDSixDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7UUFDSCxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRTtLQUNsQyxDQUNGLENBQUM7SUFFRixPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90IH0gZnJvbSBcIi4uLy4uLy4uL2JvdC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3NoYXJlZC50c1wiO1xuaW1wb3J0IHsgRWRpdFdlYmhvb2tNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3dlYmhvb2tzL2VkaXRXZWJob29rTWVzc2FnZS50c1wiO1xuXG4vKiogRWRpdHMgYSBmb2xsb3d1cCBtZXNzYWdlIGZvciBhbiBJbnRlcmFjdGlvbi4gRnVuY3Rpb25zIHRoZSBzYW1lIGFzIGVkaXQgd2ViaG9vayBtZXNzYWdlLCBob3dldmVyIHRoaXMgdXNlcyB5b3VyIGludGVyYWN0aW9uIHRva2VuIGluc3RlYWQgb2YgYm90IHRva2VuLiBEb2VzIG5vdCBzdXBwb3J0IGVwaGVtZXJhbCBmb2xsb3d1cHMuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdEZvbGxvd3VwTWVzc2FnZShcbiAgYm90OiBCb3QsXG4gIGludGVyYWN0aW9uVG9rZW46IHN0cmluZyxcbiAgbWVzc2FnZUlkOiBiaWdpbnQsXG4gIG9wdGlvbnM6IEVkaXRXZWJob29rTWVzc2FnZSxcbikge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZE1lc3NhZ2U+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUEFUQ0hcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5XRUJIT09LX01FU1NBR0UoYm90LmFwcGxpY2F0aW9uSWQsIGludGVyYWN0aW9uVG9rZW4sIG1lc3NhZ2VJZCksXG4gICAge1xuICAgICAgY29udGVudDogb3B0aW9ucy5jb250ZW50LFxuICAgICAgZW1iZWRzOiBvcHRpb25zLmVtYmVkcz8ubWFwKChlbWJlZCkgPT4gYm90LnRyYW5zZm9ybWVycy5yZXZlcnNlLmVtYmVkKGJvdCwgZW1iZWQpKSxcbiAgICAgIGZpbGU6IG9wdGlvbnMuZmlsZSxcbiAgICAgIGFsbG93ZWRfbWVudGlvbnM6IG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zXG4gICAgICAgID8ge1xuICAgICAgICAgIHBhcnNlOiBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5wYXJzZSxcbiAgICAgICAgICByb2xlczogb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucm9sZXM/Lm1hcCgoaWQpID0+IGlkLnRvU3RyaW5nKCkpLFxuICAgICAgICAgIHVzZXJzOiBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy51c2Vycz8ubWFwKChpZCkgPT4gaWQudG9TdHJpbmcoKSksXG4gICAgICAgICAgcmVwbGllZF91c2VyOiBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5yZXBsaWVkVXNlcixcbiAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGF0dGFjaG1lbnRzOiBvcHRpb25zLmF0dGFjaG1lbnRzPy5tYXAoKGF0dGFjaG1lbnQpID0+ICh7XG4gICAgICAgIGlkOiBhdHRhY2htZW50LmlkLnRvU3RyaW5nKCksXG4gICAgICAgIGZpbGVuYW1lOiBhdHRhY2htZW50LmZpbGVuYW1lLFxuICAgICAgICBjb250ZW50X3R5cGU6IGF0dGFjaG1lbnQuY29udGVudFR5cGUsXG4gICAgICAgIHNpemU6IGF0dGFjaG1lbnQuc2l6ZSxcbiAgICAgICAgdXJsOiBhdHRhY2htZW50LnVybCxcbiAgICAgICAgcHJveHlfdXJsOiBhdHRhY2htZW50LnByb3h5VXJsLFxuICAgICAgICBoZWlnaHQ6IGF0dGFjaG1lbnQuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogYXR0YWNobWVudC53aWR0aCxcbiAgICAgICAgZXBoZW1lcmFsOiBhdHRhY2htZW50LmVwaGVtZXJhbCxcbiAgICAgIH0pKSxcbiAgICAgIGNvbXBvbmVudHM6IG9wdGlvbnMuY29tcG9uZW50cz8ubWFwKChjb21wb25lbnQpID0+ICh7XG4gICAgICAgIHR5cGU6IGNvbXBvbmVudC50eXBlLFxuICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnQuY29tcG9uZW50cy5tYXAoKHN1YkNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgIGlmIChzdWJDb21wb25lbnQudHlwZSA9PT0gTWVzc2FnZUNvbXBvbmVudFR5cGVzLklucHV0VGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdHlwZTogc3ViQ29tcG9uZW50LnR5cGUsXG4gICAgICAgICAgICAgIHN0eWxlOiBzdWJDb21wb25lbnQuc3R5bGUsXG4gICAgICAgICAgICAgIGN1c3RvbV9pZDogc3ViQ29tcG9uZW50LmN1c3RvbUlkLFxuICAgICAgICAgICAgICBsYWJlbDogc3ViQ29tcG9uZW50LmxhYmVsLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogc3ViQ29tcG9uZW50LnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICBtaW5fbGVuZ3RoOiBzdWJDb21wb25lbnQubWluTGVuZ3RoID8/IHN1YkNvbXBvbmVudC5yZXF1aXJlZCA9PT0gZmFsc2UgPyAwIDogc3ViQ29tcG9uZW50Lm1pbkxlbmd0aCxcbiAgICAgICAgICAgICAgbWF4X2xlbmd0aDogc3ViQ29tcG9uZW50Lm1heExlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN1YkNvbXBvbmVudC50eXBlID09PSBNZXNzYWdlQ29tcG9uZW50VHlwZXMuU2VsZWN0TWVudSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdHlwZTogc3ViQ29tcG9uZW50LnR5cGUsXG4gICAgICAgICAgICAgIGN1c3RvbV9pZDogc3ViQ29tcG9uZW50LmN1c3RvbUlkLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogc3ViQ29tcG9uZW50LnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICBtaW5fdmFsdWVzOiBzdWJDb21wb25lbnQubWluVmFsdWVzLFxuICAgICAgICAgICAgICBtYXhfdmFsdWVzOiBzdWJDb21wb25lbnQubWF4VmFsdWVzLFxuICAgICAgICAgICAgICBvcHRpb25zOiBzdWJDb21wb25lbnQub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogb3B0aW9uLmxhYmVsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG9wdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBlbW9qaTogb3B0aW9uLmVtb2ppXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9wdGlvbi5lbW9qaS5pZD8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmVtb2ppLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBvcHRpb24uZW1vamkuYW5pbWF0ZWQsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBvcHRpb24uZGVmYXVsdCxcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogc3ViQ29tcG9uZW50LnR5cGUsXG4gICAgICAgICAgICBjdXN0b21faWQ6IHN1YkNvbXBvbmVudC5jdXN0b21JZCxcbiAgICAgICAgICAgIGxhYmVsOiBzdWJDb21wb25lbnQubGFiZWwsXG4gICAgICAgICAgICBzdHlsZTogc3ViQ29tcG9uZW50LnN0eWxlLFxuICAgICAgICAgICAgZW1vamk6IHN1YkNvbXBvbmVudC5lbW9qaVxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBpZDogc3ViQ29tcG9uZW50LmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIG5hbWU6IHN1YkNvbXBvbmVudC5lbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBzdWJDb21wb25lbnQuZW1vamkuYW5pbWF0ZWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB1cmw6IHN1YkNvbXBvbmVudC51cmwsXG4gICAgICAgICAgICBkaXNhYmxlZDogc3ViQ29tcG9uZW50LmRpc2FibGVkLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgfSkpLFxuICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkPy50b1N0cmluZygpLFxuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIGJvdC50cmFuc2Zvcm1lcnMubWVzc2FnZShib3QsIHJlc3VsdCk7XG59XG4iXX0=