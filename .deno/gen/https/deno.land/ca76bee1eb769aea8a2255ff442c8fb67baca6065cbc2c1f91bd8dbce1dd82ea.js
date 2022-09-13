import { MessageComponentTypes } from "../../../types/shared.ts";
/** Edits a followup message for an Interaction. Functions the same as edit webhook message, however this uses your interaction token instead of bot token. Does not support ephemeral followups. */ export async function editFollowupMessage(bot, interactionToken, messageId, options) {
    const result = await bot.rest.runMethod(bot.rest, "PATCH", bot.constants.routes.WEBHOOK_MESSAGE(bot.applicationId, interactionToken, messageId), {
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
                        emoji: subComponent.emoji ? {
                            id: subComponent.emoji.id?.toString(),
                            name: subComponent.emoji.name,
                            animated: subComponent.emoji.animated
                        } : undefined,
                        url: subComponent.url,
                        disabled: subComponent.disabled
                    };
                })
            })
        ),
        message_id: messageId?.toString()
    });
    return bot.transformers.message(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkTWVzc2FnZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50VHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvc2hhcmVkLnRzXCI7XG5pbXBvcnQgeyBFZGl0V2ViaG9va01lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vd2ViaG9va3MvZWRpdFdlYmhvb2tNZXNzYWdlLnRzXCI7XG5cbi8qKiBFZGl0cyBhIGZvbGxvd3VwIG1lc3NhZ2UgZm9yIGFuIEludGVyYWN0aW9uLiBGdW5jdGlvbnMgdGhlIHNhbWUgYXMgZWRpdCB3ZWJob29rIG1lc3NhZ2UsIGhvd2V2ZXIgdGhpcyB1c2VzIHlvdXIgaW50ZXJhY3Rpb24gdG9rZW4gaW5zdGVhZCBvZiBib3QgdG9rZW4uIERvZXMgbm90IHN1cHBvcnQgZXBoZW1lcmFsIGZvbGxvd3Vwcy4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlZGl0Rm9sbG93dXBNZXNzYWdlKFxuICBib3Q6IEJvdCxcbiAgaW50ZXJhY3Rpb25Ub2tlbjogc3RyaW5nLFxuICBtZXNzYWdlSWQ6IGJpZ2ludCxcbiAgb3B0aW9uczogRWRpdFdlYmhvb2tNZXNzYWdlLFxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkTWVzc2FnZT4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJQQVRDSFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLldFQkhPT0tfTUVTU0FHRShib3QuYXBwbGljYXRpb25JZCwgaW50ZXJhY3Rpb25Ub2tlbiwgbWVzc2FnZUlkKSxcbiAgICB7XG4gICAgICBjb250ZW50OiBvcHRpb25zLmNvbnRlbnQsXG4gICAgICBlbWJlZHM6IG9wdGlvbnMuZW1iZWRzPy5tYXAoKGVtYmVkKSA9PiBib3QudHJhbnNmb3JtZXJzLnJldmVyc2UuZW1iZWQoYm90LCBlbWJlZCkpLFxuICAgICAgZmlsZTogb3B0aW9ucy5maWxlLFxuICAgICAgYWxsb3dlZF9tZW50aW9uczogb3B0aW9ucy5hbGxvd2VkTWVudGlvbnNcbiAgICAgICAgPyB7XG4gICAgICAgICAgcGFyc2U6IG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zLnBhcnNlLFxuICAgICAgICAgIHJvbGVzOiBvcHRpb25zLmFsbG93ZWRNZW50aW9ucy5yb2xlcz8ubWFwKChpZCkgPT4gaWQudG9TdHJpbmcoKSksXG4gICAgICAgICAgdXNlcnM6IG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zLnVzZXJzPy5tYXAoKGlkKSA9PiBpZC50b1N0cmluZygpKSxcbiAgICAgICAgICByZXBsaWVkX3VzZXI6IG9wdGlvbnMuYWxsb3dlZE1lbnRpb25zLnJlcGxpZWRVc2VyLFxuICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYXR0YWNobWVudHM6IG9wdGlvbnMuYXR0YWNobWVudHM/Lm1hcCgoYXR0YWNobWVudCkgPT4gKHtcbiAgICAgICAgaWQ6IGF0dGFjaG1lbnQuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgZmlsZW5hbWU6IGF0dGFjaG1lbnQuZmlsZW5hbWUsXG4gICAgICAgIGNvbnRlbnRfdHlwZTogYXR0YWNobWVudC5jb250ZW50VHlwZSxcbiAgICAgICAgc2l6ZTogYXR0YWNobWVudC5zaXplLFxuICAgICAgICB1cmw6IGF0dGFjaG1lbnQudXJsLFxuICAgICAgICBwcm94eV91cmw6IGF0dGFjaG1lbnQucHJveHlVcmwsXG4gICAgICAgIGhlaWdodDogYXR0YWNobWVudC5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBhdHRhY2htZW50LndpZHRoLFxuICAgICAgICBlcGhlbWVyYWw6IGF0dGFjaG1lbnQuZXBoZW1lcmFsLFxuICAgICAgfSkpLFxuICAgICAgY29tcG9uZW50czogb3B0aW9ucy5jb21wb25lbnRzPy5tYXAoKGNvbXBvbmVudCkgPT4gKHtcbiAgICAgICAgdHlwZTogY29tcG9uZW50LnR5cGUsXG4gICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudC5jb21wb25lbnRzLm1hcCgoc3ViQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHN1YkNvbXBvbmVudC50eXBlID09PSBNZXNzYWdlQ29tcG9uZW50VHlwZXMuSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHN1YkNvbXBvbmVudC5zdHlsZSxcbiAgICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICAgIGxhYmVsOiBzdWJDb21wb25lbnQubGFiZWwsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzdWJDb21wb25lbnQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIG1pbl9sZW5ndGg6IHN1YkNvbXBvbmVudC5taW5MZW5ndGggPz8gc3ViQ29tcG9uZW50LnJlcXVpcmVkID09PSBmYWxzZSA/IDAgOiBzdWJDb21wb25lbnQubWluTGVuZ3RoLFxuICAgICAgICAgICAgICBtYXhfbGVuZ3RoOiBzdWJDb21wb25lbnQubWF4TGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5TZWxlY3RNZW51KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzdWJDb21wb25lbnQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIG1pbl92YWx1ZXM6IHN1YkNvbXBvbmVudC5taW5WYWx1ZXMsXG4gICAgICAgICAgICAgIG1heF92YWx1ZXM6IHN1YkNvbXBvbmVudC5tYXhWYWx1ZXMsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHN1YkNvbXBvbmVudC5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24ubGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogb3B0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGVtb2ppOiBvcHRpb24uZW1vamlcbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBpZDogb3B0aW9uLmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IG9wdGlvbi5lbW9qaS5hbmltYXRlZCxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9wdGlvbi5kZWZhdWx0LFxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgIGN1c3RvbV9pZDogc3ViQ29tcG9uZW50LmN1c3RvbUlkLFxuICAgICAgICAgICAgbGFiZWw6IHN1YkNvbXBvbmVudC5sYWJlbCxcbiAgICAgICAgICAgIHN0eWxlOiBzdWJDb21wb25lbnQuc3R5bGUsXG4gICAgICAgICAgICBlbW9qaTogc3ViQ29tcG9uZW50LmVtb2ppXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGlkOiBzdWJDb21wb25lbnQuZW1vamkuaWQ/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgbmFtZTogc3ViQ29tcG9uZW50LmVtb2ppLm5hbWUsXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHN1YkNvbXBvbmVudC5lbW9qaS5hbmltYXRlZCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVybDogc3ViQ29tcG9uZW50LnVybCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBzdWJDb21wb25lbnQuZGlzYWJsZWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICB9KSksXG4gICAgICBtZXNzYWdlX2lkOiBtZXNzYWdlSWQ/LnRvU3RyaW5nKCksXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy5tZXNzYWdlKGJvdCwgcmVzdWx0KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxTQUFTLHFCQUFxQixRQUFRLDBCQUEwQixDQUFDO0FBR2pFLG9NQUFvTSxDQUNwTSxPQUFPLGVBQWUsbUJBQW1CLENBQ3ZDLEdBQVEsRUFDUixnQkFBd0IsRUFDeEIsU0FBaUIsRUFDakIsT0FBMkIsRUFDM0I7SUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLE9BQU8sRUFDUCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsRUFDcEY7UUFDRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87UUFDeEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1FBQUEsQ0FBQztRQUNsRixJQUFJ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