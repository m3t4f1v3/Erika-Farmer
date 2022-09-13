import { MessageComponentTypes } from "../../types/shared.ts";
/** Edit the message. */ export async function editMessage(bot, channelId, messageId, content) {
    const result = await bot.rest.runMethod(bot.rest, "PATCH", bot.constants.routes.CHANNEL_MESSAGE(channelId, messageId), {
        content: content.content,
        embeds: content.embeds?.map((embed)=>bot.transformers.reverse.embed(bot, embed)
        ),
        allowed_mentions: {
            parse: content.allowedMentions?.parse,
            roles: content.allowedMentions?.roles?.map((id)=>id.toString()
            ),
            users: content.allowedMentions?.users?.map((id)=>id.toString()
            ),
            replied_user: content.allowedMentions?.repliedUser
        },
        attachments: content.attachments?.map((attachment)=>({
                id: attachment.id.toString(),
                filename: attachment.filename,
                content_type: attachment.contentType,
                size: attachment.size,
                url: attachment.url,
                proxy_url: attachment.proxyUrl,
                height: attachment.height,
                width: attachment.width
            })
        ),
        file: content.file,
        components: content.components?.map((component)=>({
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
        )
    });
    return bot.transformers.message(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtZXJzL2F0dGFjaG1lbnQudHNcIjtcbmltcG9ydCB7IEVtYmVkIH0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybWVycy9lbWJlZC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgQWxsb3dlZE1lbnRpb25zLCBGaWxlQ29udGVudCwgTWVzc2FnZUNvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZGVuby50c1wiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudFR5cGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3NoYXJlZC50c1wiO1xuXG4vKiogRWRpdCB0aGUgbWVzc2FnZS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlZGl0TWVzc2FnZShib3Q6IEJvdCwgY2hhbm5lbElkOiBiaWdpbnQsIG1lc3NhZ2VJZDogYmlnaW50LCBjb250ZW50OiBFZGl0TWVzc2FnZSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZE1lc3NhZ2U+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUEFUQ0hcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5DSEFOTkVMX01FU1NBR0UoY2hhbm5lbElkLCBtZXNzYWdlSWQpLFxuICAgIHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQuY29udGVudCxcbiAgICAgIGVtYmVkczogY29udGVudC5lbWJlZHM/Lm1hcCgoZW1iZWQpID0+IGJvdC50cmFuc2Zvcm1lcnMucmV2ZXJzZS5lbWJlZChib3QsIGVtYmVkKSksXG4gICAgICBhbGxvd2VkX21lbnRpb25zOiB7XG4gICAgICAgIHBhcnNlOiBjb250ZW50LmFsbG93ZWRNZW50aW9ucz8ucGFyc2UsXG4gICAgICAgIHJvbGVzOiBjb250ZW50LmFsbG93ZWRNZW50aW9ucz8ucm9sZXM/Lm1hcCgoaWQpID0+IGlkLnRvU3RyaW5nKCkpLFxuICAgICAgICB1c2VyczogY29udGVudC5hbGxvd2VkTWVudGlvbnM/LnVzZXJzPy5tYXAoKGlkKSA9PiBpZC50b1N0cmluZygpKSxcbiAgICAgICAgcmVwbGllZF91c2VyOiBjb250ZW50LmFsbG93ZWRNZW50aW9ucz8ucmVwbGllZFVzZXIsXG4gICAgICB9LFxuICAgICAgYXR0YWNobWVudHM6IGNvbnRlbnQuYXR0YWNobWVudHM/Lm1hcCgoYXR0YWNobWVudCkgPT4gKHtcbiAgICAgICAgaWQ6IGF0dGFjaG1lbnQuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgZmlsZW5hbWU6IGF0dGFjaG1lbnQuZmlsZW5hbWUsXG4gICAgICAgIGNvbnRlbnRfdHlwZTogYXR0YWNobWVudC5jb250ZW50VHlwZSxcbiAgICAgICAgc2l6ZTogYXR0YWNobWVudC5zaXplLFxuICAgICAgICB1cmw6IGF0dGFjaG1lbnQudXJsLFxuICAgICAgICBwcm94eV91cmw6IGF0dGFjaG1lbnQucHJveHlVcmwsXG4gICAgICAgIGhlaWdodDogYXR0YWNobWVudC5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBhdHRhY2htZW50LndpZHRoLFxuICAgICAgfSkpLFxuICAgICAgZmlsZTogY29udGVudC5maWxlLFxuICAgICAgY29tcG9uZW50czogY29udGVudC5jb21wb25lbnRzPy5tYXAoKGNvbXBvbmVudCkgPT4gKHtcbiAgICAgICAgdHlwZTogY29tcG9uZW50LnR5cGUsXG4gICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudC5jb21wb25lbnRzLm1hcCgoc3ViQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHN1YkNvbXBvbmVudC50eXBlID09PSBNZXNzYWdlQ29tcG9uZW50VHlwZXMuSW5wdXRUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHN1YkNvbXBvbmVudC5zdHlsZSxcbiAgICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICAgIGxhYmVsOiBzdWJDb21wb25lbnQubGFiZWwsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzdWJDb21wb25lbnQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIG1pbl9sZW5ndGg6IHN1YkNvbXBvbmVudC5taW5MZW5ndGggPz8gc3ViQ29tcG9uZW50LnJlcXVpcmVkID09PSBmYWxzZSA/IDAgOiBzdWJDb21wb25lbnQubWluTGVuZ3RoLFxuICAgICAgICAgICAgICBtYXhfbGVuZ3RoOiBzdWJDb21wb25lbnQubWF4TGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5TZWxlY3RNZW51KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzdWJDb21wb25lbnQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIG1pbl92YWx1ZXM6IHN1YkNvbXBvbmVudC5taW5WYWx1ZXMsXG4gICAgICAgICAgICAgIG1heF92YWx1ZXM6IHN1YkNvbXBvbmVudC5tYXhWYWx1ZXMsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHN1YkNvbXBvbmVudC5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24ubGFiZWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogb3B0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGVtb2ppOiBvcHRpb24uZW1vamlcbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBpZDogb3B0aW9uLmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IG9wdGlvbi5lbW9qaS5hbmltYXRlZCxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG9wdGlvbi5kZWZhdWx0LFxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBzdWJDb21wb25lbnQudHlwZSxcbiAgICAgICAgICAgIGN1c3RvbV9pZDogc3ViQ29tcG9uZW50LmN1c3RvbUlkLFxuICAgICAgICAgICAgbGFiZWw6IHN1YkNvbXBvbmVudC5sYWJlbCxcbiAgICAgICAgICAgIHN0eWxlOiBzdWJDb21wb25lbnQuc3R5bGUsXG4gICAgICAgICAgICBlbW9qaTogXCJlbW9qaVwiIGluIHN1YkNvbXBvbmVudCAmJiBzdWJDb21wb25lbnQuZW1vamlcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgaWQ6IHN1YkNvbXBvbmVudC5lbW9qaS5pZD8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBzdWJDb21wb25lbnQuZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogc3ViQ29tcG9uZW50LmVtb2ppLmFuaW1hdGVkLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXJsOiBcInVybFwiIGluIHN1YkNvbXBvbmVudCA/IHN1YkNvbXBvbmVudC51cmwgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiIGluIHN1YkNvbXBvbmVudCA/IHN1YkNvbXBvbmVudC5kaXNhYmxlZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgIH0pKSxcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiBib3QudHJhbnNmb3JtZXJzLm1lc3NhZ2UoYm90LCByZXN1bHQpO1xufVxuXG4vKiogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2NoYW5uZWwjZWRpdC1tZXNzYWdlLWpzb24tcGFyYW1zICovXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRNZXNzYWdlIHtcbiAgLyoqIFRoZSBuZXcgbWVzc2FnZSBjb250ZW50cyAodXAgdG8gMjAwMCBjaGFyYWN0ZXJzKSAqL1xuICBjb250ZW50Pzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIEVtYmVkZGVkIGByaWNoYCBjb250ZW50ICh1cCB0byA2MDAwIGNoYXJhY3RlcnMpICovXG4gIGVtYmVkcz86IEVtYmVkW10gfCBudWxsO1xuICAvKiogRWRpdCB0aGUgZmxhZ3Mgb2YgdGhlIG1lc3NhZ2UgKG9ubHkgYFNVUFBSRVNTX0VNQkVEU2AgY2FuIGN1cnJlbnRseSBiZSBzZXQvdW5zZXQpICovXG4gIGZsYWdzPzogNCB8IG51bGw7XG4gIC8qKiBUaGUgY29udGVudHMgb2YgdGhlIGZpbGUgYmVpbmcgc2VudC9lZGl0ZWQgKi9cbiAgZmlsZT86IEZpbGVDb250ZW50IHwgRmlsZUNvbnRlbnRbXSB8IG51bGw7XG4gIC8qKiBBbGxvd2VkIG1lbnRpb25zIGZvciB0aGUgbWVzc2FnZSAqL1xuICBhbGxvd2VkTWVudGlvbnM/OiBBbGxvd2VkTWVudGlvbnM7XG4gIC8qKiBXaGVuIHNwZWNpZmllZCAoYWRkaW5nIG5ldyBhdHRhY2htZW50cyksIGF0dGFjaG1lbnRzIHdoaWNoIGFyZSBub3QgcHJvdmlkZWQgaW4gdGhpcyBsaXN0IHdpbGwgYmUgcmVtb3ZlZC4gKi9cbiAgYXR0YWNobWVudHM/OiBBdHRhY2htZW50W107XG4gIC8qKiBUaGUgY29tcG9uZW50cyB5b3Ugd291bGQgbGlrZSB0byBoYXZlIHNlbnQgaW4gdGhpcyBtZXNzYWdlICovXG4gIGNvbXBvbmVudHM/OiBNZXNzYWdlQ29tcG9uZW50cztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxTQUFTLHFCQUFxQixRQUFRLHVCQUF1QixDQUFDO0FBRTlELHdCQUF3QixDQUN4QixPQUFPLGVBQWUsV0FBVyxDQUFDLEdBQVEsRUFBRSxTQUFpQixFQUFFLFNBQWlCLEVBQUUsT0FBb0IsRUFBRTtJQUN0RyxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLE9BQU8sRUFDUCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUMxRDtRQUNFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztRQUN4QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUssR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFBQSxDQUFDO1FBQ2xGLGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUs7WUFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQUEsQ0FBQztZQUNqRSxLQUFLLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFLLEVB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