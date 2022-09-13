import { MessageComponentTypes } from "../../../types/shared.ts";
/** To edit your response to a application command. If a messageId is not provided it will default to editing the original response. */ export async function editInteractionResponse(bot, token, options) {
    const result = await bot.rest.runMethod(bot.rest, "PATCH", options.messageId ? bot.constants.routes.WEBHOOK_MESSAGE(bot.applicationId, token, options.messageId) : bot.constants.routes.INTERACTION_ORIGINAL_ID_TOKEN(bot.applicationId, token), {
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
    // If the original message was edited, this will not return a message
    if (!options.messageId) return result;
    return bot.transformers.message(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcbmltcG9ydCB7IEVkaXRXZWJob29rTWVzc2FnZSB9IGZyb20gXCIuLi8uLi93ZWJob29rcy9lZGl0V2ViaG9va01lc3NhZ2UudHNcIjtcblxuLyoqIFRvIGVkaXQgeW91ciByZXNwb25zZSB0byBhIGFwcGxpY2F0aW9uIGNvbW1hbmQuIElmIGEgbWVzc2FnZUlkIGlzIG5vdCBwcm92aWRlZCBpdCB3aWxsIGRlZmF1bHQgdG8gZWRpdGluZyB0aGUgb3JpZ2luYWwgcmVzcG9uc2UuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdEludGVyYWN0aW9uUmVzcG9uc2UoXG4gIGJvdDogQm90LFxuICB0b2tlbjogc3RyaW5nLFxuICBvcHRpb25zOiBFZGl0V2ViaG9va01lc3NhZ2UgJiB7XG4gICAgLyoqIElkIG9mIHRoZSBtZXNzYWdlIHlvdSB3YW50IHRvIGVkaXQgaWYgdW5kZWZpbmVkIHRoZSBpbml0aWFsIHJlc3BvbnNlIG1lc3NhZ2Ugd2lsbCBiZSBlZGl0ZWQgKi9cbiAgICBtZXNzYWdlSWQ/OiBiaWdpbnQ7XG4gIH0sXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kKFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUEFUQ0hcIixcbiAgICBvcHRpb25zLm1lc3NhZ2VJZFxuICAgICAgPyBib3QuY29uc3RhbnRzLnJvdXRlcy5XRUJIT09LX01FU1NBR0UoYm90LmFwcGxpY2F0aW9uSWQsIHRva2VuLCBvcHRpb25zLm1lc3NhZ2VJZClcbiAgICAgIDogYm90LmNvbnN0YW50cy5yb3V0ZXMuSU5URVJBQ1RJT05fT1JJR0lOQUxfSURfVE9LRU4oYm90LmFwcGxpY2F0aW9uSWQsIHRva2VuKSxcbiAgICB7XG4gICAgICBjb250ZW50OiBvcHRpb25zLmNvbnRlbnQsXG4gICAgICBlbWJlZHM6IG9wdGlvbnMuZW1iZWRzPy5tYXAoKGVtYmVkKSA9PiBib3QudHJhbnNmb3JtZXJzLnJldmVyc2UuZW1iZWQoYm90LCBlbWJlZCkpLFxuICAgICAgZmlsZTogb3B0aW9ucy5maWxlLFxuICAgICAgYWxsb3dlZF9tZW50aW9uczogb3B0aW9ucy5hbGxvd2VkTWVudGlvbnNcbiAgICAgICAgPyB7XG4gICAgICAgICAgcGFyc2U6IG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zLnBhcnNlLFxuICAgICAgICAgIHJvbGVzOiBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5yb2xlcz8ubWFwKChpZCkgPT4gaWQudG9TdHJpbmcoKSksXG4gICAgICAgICAgdXNlcnM6IG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zLnVzZXJzPy5tYXAoKGlkKSA9PiBpZC50b1N0cmluZygpKSxcbiAgICAgICAgICByZXBsaWVkX3VzZXI6IG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zLnJlcGxpZWRVc2VyLFxuICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYXR0YWNobWVudHM6IG9wdGlvbnMuYXR0YWNobWVudHM/Lm1hcCgoYXR0YWNobWVudCkgPT4gKHtcbiAgICAgICAgaWQ6IGF0dGFjaG1lbnQuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgZmlsZW5hbWU6IGF0dGFjaG1lbnQuZmlsZW5hbWUsXG4gICAgICAgIGNvbnRlbnRfdHlwZTogYXR0YWNobWVudC5jb250ZW50VHlwZSxcbiAgICAgICAgc2l6ZTogYXR0YWNobWVudC5zaXplLFxuICAgICAgICB1cmw6IGF0dGFjaG1lbnQudXJsLFxuICAgICAgICBwcm94eV91cmw6IGF0dGFjaG1lbnQucHJveHlVcmwsXG4gICAgICAgIGhlaWdodDogYXR0YWNobWVudC5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBhdHRhY2htZW50LndpZHRoLFxuICAgICAgICBlcGhlbWVyYWw6IGF0dGFjaG1lbnQuZXBoZW1lcmFsLFxuICAgICAgfSkpLFxuICAgICAgY29tcG9uZW50czogb3B0aW9ucy5jb21wb25lbnRzPy5tYXAoKGNvbXBvbmVudCkgPT4gKHtcbiAgICAgICAgdHlwZTogY29tcG9uZW50LnR5cGUsXG4gICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudC5jb21wb25lbnRzLm1hcCgoc3ViQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHN1YkNvbXBvbmVudC50eXBlID09PSBNZXNzYWdlQ29tcG9uZW50VHlwZXMuSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHN1YkNvbXBvbmVudC5zdHlsZSxcbiAgICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICAgIGxhYmVsOiBzdWJDb21wb25lbnQubGFiZWwsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzdWJDb21wb25lbnQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIG1pbl9sZW5ndGg6IHN1YkNvbXBvbmVudC5taW5MZW5ndGggPz8gc3ViQ29tcG9uZW50LnJlcXVpcmVkID09PSBmYWxzZSA/IDAgOiBzdWJDb21wb25lbnQubWluTGVuZ3RoLFxuICAgICAgICAgICAgICBtYXhfbGVuZ3RoOiBzdWJDb21wb25lbnQubWF4TGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5TZWxlY3RNZW51KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzdWJDb21wb25lbnQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIG1pbl92YWx1ZXM6IHN1YkNvbXBvbmVudC5taW5WYWx1ZXMsXG4gICAgICAgICAgICAgIG1heF92YWx1ZXM6IHN1YkNvbXBvbmVudC5tYXhWYWx1ZXMsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHN1YkNvbXBvbmVudC5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24ubGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogb3B0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGVtb2ppOiBvcHRpb24uZW1vamlcbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBpZDogb3B0aW9uLmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IG9wdGlvbi5lbW9qaS5hbmltYXRlZCxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9wdGlvbi5kZWZhdWx0LFxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgIGN1c3RvbV9pZDogc3ViQ29tcG9uZW50LmN1c3RvbUlkLFxuICAgICAgICAgICAgbGFiZWw6IHN1YkNvbXBvbmVudC5sYWJlbCxcbiAgICAgICAgICAgIHN0eWxlOiBzdWJDb21wb25lbnQuc3R5bGUsXG4gICAgICAgICAgICBlbW9qaTogXCJlbW9qaVwiIGluIHN1YkNvbXBvbmVudCAmJiBzdWJDb21wb25lbnQuZW1vamlcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgaWQ6IHN1YkNvbXBvbmVudC5lbW9qaS5pZD8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBzdWJDb21wb25lbnQuZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogc3ViQ29tcG9uZW50LmVtb2ppLmFuaW1hdGVkLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXJsOiBcInVybFwiIGluIHN1YkNvbXBvbmVudCA/IHN1YkNvbXBvbmVudC51cmwgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiIGluIHN1YkNvbXBvbmVudCA/IHN1YkNvbXBvbmVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgIH0pKSxcbiAgICAgIG1lc3NhZ2VfaWQ6IG9wdGlvbnMubWVzc2FnZUlkPy50b1N0cmluZygpLFxuICAgIH0sXG4gICk7XG5cbiAgLy8gSWYgdGhlIG9yaWdpbmFsIG1lc3NhZ2Ugd2FzIGVkaXRlZCwgdGhpcyB3aWxsIG5vdCByZXR1cm4gYSBtZXNzYWdlXG4gIGlmICghb3B0aW9ucy5tZXNzYWdlSWQpIHJldHVybiByZXN1bHQgYXMgdW5kZWZpbmVkO1xuXG4gIHJldHVybiBib3QudHJhbnNmb3JtZXJzLm1lc3NhZ2UoYm90LCByZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMscUJBQXFCLFFBQVEsMEJBQTBCLENBQUM7QUFHakUsdUlBQXVJLENBQ3ZJLE9BQU8sZUFBZSx1QkFBdUIsQ0FDM0MsR0FBUSxFQUNSLEtBQWEsRUFDYixPQUdDLEVBQ0Q7SUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcs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