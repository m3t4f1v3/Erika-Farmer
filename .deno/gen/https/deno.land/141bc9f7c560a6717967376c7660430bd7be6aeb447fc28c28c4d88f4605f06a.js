import { MessageComponentTypes } from "../../types/shared.ts";
export async function editWebhookMessage(bot, webhookId, webhookToken, options) {
    const result = await bot.rest.runMethod(bot.rest, "PATCH", options.messageId ? bot.constants.routes.WEBHOOK_MESSAGE(webhookId, webhookToken, options.messageId, options) : bot.constants.routes.WEBHOOK_MESSAGE_ORIGINAL(webhookId, webhookToken, options), {
        content: options.content,
        embeds: options.embeds?.map((embed)=>bot.transformers.reverse.embed(bot, embed)
        ),
        file: options.file,
        allowed_mentions: options.allowedMentions ? {
            parse: options.allowedMentions.parse,
            roles: options.allowedMentions.roles?.map((id)=>id.toString()
            ),
            users: options.allowedMentions.users?.map((id)=>id.toString()
            ),
            replied_user: options.allowedMentions.repliedUser
        } : undefined,
        attachments: options.attachments?.map((attachment)=>({
                id: attachment.id.toString(),
                filename: attachment.filename,
                content_type: attachment.contentType,
                size: attachment.size,
                url: attachment.url,
                proxy_url: attachment.proxyUrl,
                height: attachment.height,
                width: attachment.width,
                ephemeral: attachment.ephemeral
            })
        ),
        components: options.components?.map((component)=>({
                type: component.type,
                components: component.components.map((subComponent)=>{
                    if (subComponent.type === MessageComponentTypes.InputText) {
                        return {
                            type: subComponent.type,
                            style: subComponent.style,
                            custom_id: subComponent.customId,
                            label: subComponent.label,
                            placeholder: subComponent.placeholder,
                            min_length: subComponent.minLength ?? subComponent.required === false ? 0 : subComponent.minLength,
                            max_length: subComponent.maxLength
                        };
                    }
                    if (subComponent.type === MessageComponentTypes.SelectMenu) {
                        return {
                            type: subComponent.type,
                            custom_id: subComponent.customId,
                            placeholder: subComponent.placeholder,
                            min_values: subComponent.minValues,
                            max_values: subComponent.maxValues,
                            options: subComponent.options.map((option)=>({
                                    label: option.label,
                                    value: option.value,
                                    description: option.description,
                                    emoji: option.emoji ? {
                                        id: option.emoji.id?.toString(),
                                        name: option.emoji.name,
                                        animated: option.emoji.animated
                                    } : undefined,
                                    default: option.default
                                })
                            )
                        };
                    }
                    return {
                        type: subComponent.type,
                        custom_id: subComponent.customId,
                        label: subComponent.label,
                        style: subComponent.style,
                        emoji: "emoji" in subComponent && subComponent.emoji ? {
                            id: subComponent.emoji.id?.toString(),
                            name: subComponent.emoji.name,
                            animated: subComponent.emoji.animated
                        } : undefined,
                        url: "url" in subComponent ? subComponent.url : undefined,
                        disabled: "disabled" in subComponent ? subComponent.disabled : undefined
                    };
                })
            })
        ),
        message_id: options.messageId?.toString()
    });
    return bot.transformers.message(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IEFsbG93ZWRNZW50aW9ucywgRmlsZUNvbnRlbnQsIE1lc3NhZ2VDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmRlbm8udHNcIjtcbmltcG9ydCB7IERpc2NvcmRNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnRUeXBlcyB9IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtZXJzL2F0dGFjaG1lbnQudHNcIjtcbmltcG9ydCB7IEVtYmVkIH0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybWVycy9lbWJlZC50c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdFdlYmhvb2tNZXNzYWdlKFxuICBib3Q6IEJvdCxcbiAgd2ViaG9va0lkOiBiaWdpbnQsXG4gIHdlYmhvb2tUb2tlbjogc3RyaW5nLFxuICBvcHRpb25zOiBFZGl0V2ViaG9va01lc3NhZ2UgJiB7IG1lc3NhZ2VJZD86IGJpZ2ludDsgdGhyZWFkSWQ/OiBiaWdpbnQgfSxcbikge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZE1lc3NhZ2U+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUEFUQ0hcIixcbiAgICBvcHRpb25zLm1lc3NhZ2VJZFxuICAgICAgPyBib3QuY29uc3RhbnRzLnJvdXRlcy5XRUJIT09LX01FU1NBR0Uod2ViaG9va0lkLCB3ZWJob29rVG9rZW4sIG9wdGlvbnMubWVzc2FnZUlkLCBvcHRpb25zKVxuICAgICAgOiBib3QuY29uc3RhbnRzLnJvdXRlcy5XRUJIT09LX01FU1NBR0VfT1JJR0lOQUwod2ViaG9va0lkLCB3ZWJob29rVG9rZW4sIG9wdGlvbnMpLFxuICAgIHtcbiAgICAgIGNvbnRlbnQ6IG9wdGlvbnMuY29udGVudCxcbiAgICAgIGVtYmVkczogb3B0aW9ucy5lbWJlZHM/Lm1hcCgoZW1iZWQpID0+IGJvdC50cmFuc2Zvcm1lcnMucmV2ZXJzZS5lbWJlZChib3QsIGVtYmVkKSksXG4gICAgICBmaWxlOiBvcHRpb25zLmZpbGUsXG4gICAgICBhbGxvd2VkX21lbnRpb25zOiBvcHRpb25zLmFsbG93ZWRNZW50aW9uc1xuICAgICAgICA/IHtcbiAgICAgICAgICBwYXJzZTogb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucGFyc2UsXG4gICAgICAgICAgcm9sZXM6IG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zLnJvbGVzPy5tYXAoKGlkKSA9PiBpZC50b1N0cmluZygpKSxcbiAgICAgICAgICB1c2Vyczogb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMudXNlcnM/Lm1hcCgoaWQpID0+IGlkLnRvU3RyaW5nKCkpLFxuICAgICAgICAgIHJlcGxpZWRfdXNlcjogb3B0aW9ucy5hbGxvd2VkTWVudGlvbnMucmVwbGllZFVzZXIsXG4gICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBhdHRhY2htZW50czogb3B0aW9ucy5hdHRhY2htZW50cz8ubWFwKChhdHRhY2htZW50KSA9PiAoe1xuICAgICAgICBpZDogYXR0YWNobWVudC5pZC50b1N0cmluZygpLFxuICAgICAgICBmaWxlbmFtZTogYXR0YWNobWVudC5maWxlbmFtZSxcbiAgICAgICAgY29udGVudF90eXBlOiBhdHRhY2htZW50LmNvbnRlbnRUeXBlLFxuICAgICAgICBzaXplOiBhdHRhY2htZW50LnNpemUsXG4gICAgICAgIHVybDogYXR0YWNobWVudC51cmwsXG4gICAgICAgIHByb3h5X3VybDogYXR0YWNobWVudC5wcm94eVVybCxcbiAgICAgICAgaGVpZ2h0OiBhdHRhY2htZW50LmhlaWdodCxcbiAgICAgICAgd2lkdGg6IGF0dGFjaG1lbnQud2lkdGgsXG4gICAgICAgIGVwaGVtZXJhbDogYXR0YWNobWVudC5lcGhlbWVyYWwsXG4gICAgICB9KSksXG4gICAgICBjb21wb25lbnRzOiBvcHRpb25zLmNvbXBvbmVudHM/Lm1hcCgoY29tcG9uZW50KSA9PiAoe1xuICAgICAgICB0eXBlOiBjb21wb25lbnQudHlwZSxcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50LmNvbXBvbmVudHMubWFwKChzdWJDb21wb25lbnQpID0+IHtcbiAgICAgICAgICBpZiAoc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5JbnB1dFRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgICAgICBzdHlsZTogc3ViQ29tcG9uZW50LnN0eWxlLFxuICAgICAgICAgICAgICBjdXN0b21faWQ6IHN1YkNvbXBvbmVudC5jdXN0b21JZCxcbiAgICAgICAgICAgICAgbGFiZWw6IHN1YkNvbXBvbmVudC5sYWJlbCxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHN1YkNvbXBvbmVudC5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgbWluX2xlbmd0aDogc3ViQ29tcG9uZW50Lm1pbkxlbmd0aCA/PyBzdWJDb21wb25lbnQucmVxdWlyZWQgPT09IGZhbHNlID8gMCA6IHN1YkNvbXBvbmVudC5taW5MZW5ndGgsXG4gICAgICAgICAgICAgIG1heF9sZW5ndGg6IHN1YkNvbXBvbmVudC5tYXhMZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdWJDb21wb25lbnQudHlwZSA9PT0gTWVzc2FnZUNvbXBvbmVudFR5cGVzLlNlbGVjdE1lbnUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgICAgICBjdXN0b21faWQ6IHN1YkNvbXBvbmVudC5jdXN0b21JZCxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHN1YkNvbXBvbmVudC5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgbWluX3ZhbHVlczogc3ViQ29tcG9uZW50Lm1pblZhbHVlcyxcbiAgICAgICAgICAgICAgbWF4X3ZhbHVlczogc3ViQ29tcG9uZW50Lm1heFZhbHVlcyxcbiAgICAgICAgICAgICAgb3B0aW9uczogc3ViQ29tcG9uZW50Lm9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb24uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZW1vamk6IG9wdGlvbi5lbW9qaVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBvcHRpb24uZW1vamkuaWQ/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5lbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogb3B0aW9uLmVtb2ppLmFuaW1hdGVkLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogb3B0aW9uLmRlZmF1bHQsXG4gICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICBsYWJlbDogc3ViQ29tcG9uZW50LmxhYmVsLFxuICAgICAgICAgICAgc3R5bGU6IHN1YkNvbXBvbmVudC5zdHlsZSxcbiAgICAgICAgICAgIGVtb2ppOiBcImVtb2ppXCIgaW4gc3ViQ29tcG9uZW50ICYmIHN1YkNvbXBvbmVudC5lbW9qaVxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBpZDogc3ViQ29tcG9uZW50LmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIG5hbWU6IHN1YkNvbXBvbmVudC5lbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBzdWJDb21wb25lbnQuZW1vamkuYW5pbWF0ZWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB1cmw6IFwidXJsXCIgaW4gc3ViQ29tcG9uZW50ID8gc3ViQ29tcG9uZW50LnVybCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIgaW4gc3ViQ29tcG9uZW50ID8gc3ViQ29tcG9uZW50LmRpc2FibGVkIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgfSkpLFxuICAgICAgbWVzc2FnZV9pZDogb3B0aW9ucy5tZXNzYWdlSWQ/LnRvU3RyaW5nKCksXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy5tZXNzYWdlKGJvdCwgcmVzdWx0KTtcbn1cblxuLyoqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy93ZWJob29rI2VkaXQtd2ViaG9vay1tZXNzYWdlLWpzb25mb3JtLXBhcmFtcyAqL1xuZXhwb3J0IGludGVyZmFjZSBFZGl0V2ViaG9va01lc3NhZ2Uge1xuICAvKiogVGhlIG1lc3NhZ2UgY29udGVudHMgKHVwIHRvIDIwMDAgY2hhcmFjdGVycykgKi9cbiAgY29udGVudD86IHN0cmluZztcbiAgLyoqIEVtYmVkZGVkIGByaWNoYCBjb250ZW50ICovXG4gIGVtYmVkcz86IEVtYmVkW107XG4gIC8qKiBUaGUgY29udGVudHMgb2YgdGhlIGZpbGUgYmVpbmcgc2VudC9lZGl0ZWQgKi9cbiAgZmlsZT86IEZpbGVDb250ZW50IHwgRmlsZUNvbnRlbnRbXTtcbiAgLyoqIEFsbG93ZWQgbWVudGlvbnMgZm9yIHRoZSBtZXNzYWdlICovXG4gIGFsbG93ZWRNZW50aW9ucz86IEFsbG93ZWRNZW50aW9ucztcbiAgLyoqIEF0dGFjaGVkIGZpbGVzIHRvIGtlZXAgKi9cbiAgYXR0YWNobWVudHM/OiBBdHRhY2htZW50W107XG4gIC8qKiBUaGUgY29tcG9uZW50cyB5b3Ugd291bGQgbGlrZSB0byBoYXZlIHNlbnQgaW4gdGhpcyBtZXNzYWdlICovXG4gIGNvbXBvbmVudHM/OiBNZXNzYWdlQ29tcG9uZW50cztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxTQUFTLHFCQUFxQixRQUFRLHVCQUF1QixDQUFDO0FBSTlELE9BQU8sZUFBZSxrQkFBa0IsQ0FDdEMsR0FBUSxFQUNSLFNBQWlCLEVBQ2pCLFlBQW9CLEVBQ3BCLE9BQXVFLEVBQ3ZFO0lBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxDQUFDLElBQUksRUFDUixPQUFPLEVBQ1AsT0FBTyxDQUFDLFNBQVMsR0FDYixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUN6RixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUNuRjtRQUNFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztRQUN4QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENB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