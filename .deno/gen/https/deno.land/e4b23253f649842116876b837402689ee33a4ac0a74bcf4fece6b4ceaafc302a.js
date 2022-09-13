import { MessageComponentTypes } from "../../types/shared.ts";
/**
 * Send a response to a users application command. The command data will have the id and token necessary to respond.
 * Interaction `tokens` are valid for **15 minutes** and can be used to send followup messages.
 *
 * NOTE: By default we will suppress mentions. To enable mentions, just pass any mentions object.
 */ export async function sendInteractionResponse(bot, id1, token, options) {
    // If no mentions are provided, force disable mentions
    if (!options.data?.allowedMentions) {
        options.data = {
            ...options.data,
            allowedMentions: {
                parse: []
            }
        };
    }
    // DRY code a little bit
    const data = {
        content: options.data.content,
        tts: options.data.tts,
        embeds: options.data.embeds?.map((embed)=>bot.transformers.reverse.embed(bot, embed)
        ),
        allowed_mentions: {
            parse: options.data.allowedMentions.parse,
            replied_user: options.data.allowedMentions.repliedUser,
            users: options.data.allowedMentions.users?.map((id)=>id.toString()
            ),
            roles: options.data.allowedMentions.roles?.map((id)=>id.toString()
            )
        },
        custom_id: options.data.customId,
        title: options.data.title,
        components: options.data.components?.map((component)=>({
                type: component.type,
                components: component.components.map((subComponent)=>{
                    if (subComponent.type === MessageComponentTypes.InputText) {
                        return {
                            type: subComponent.type,
                            style: subComponent.style,
                            custom_id: subComponent.customId,
                            label: subComponent.label,
                            placeholder: subComponent.placeholder,
                            value: subComponent.value,
                            min_length: subComponent.minLength,
                            max_length: subComponent.maxLength,
                            required: subComponent.required
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
        flags: options.data.flags,
        choices: options.data.choices
    };
    // A reply has never been send
    if (bot.cache.unrepliedInteractions.delete(id1)) {
        return await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.INTERACTION_ID_TOKEN(id1, token), {
            type: options.type,
            data,
            file: options.data.file
        });
    }
    // If its already been executed, we need to send a followup response
    const result = await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.WEBHOOK(bot.applicationId, token), {
        ...data,
        file: options.data.file
    });
    return bot.transformers.message(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IEVtYmVkIH0gZnJvbSBcIi4uLy4uL21vZC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgQWxsb3dlZE1lbnRpb25zLCBGaWxlQ29udGVudCwgTWVzc2FnZUNvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZGVuby50c1wiO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVzLCBNZXNzYWdlQ29tcG9uZW50VHlwZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc2hhcmVkLnRzXCI7XG5cbi8qKlxuICogU2VuZCBhIHJlc3BvbnNlIHRvIGEgdXNlcnMgYXBwbGljYXRpb24gY29tbWFuZC4gVGhlIGNvbW1hbmQgZGF0YSB3aWxsIGhhdmUgdGhlIGlkIGFuZCB0b2tlbiBuZWNlc3NhcnkgdG8gcmVzcG9uZC5cbiAqIEludGVyYWN0aW9uIGB0b2tlbnNgIGFyZSB2YWxpZCBmb3IgKioxNSBtaW51dGVzKiogYW5kIGNhbiBiZSB1c2VkIHRvIHNlbmQgZm9sbG93dXAgbWVzc2FnZXMuXG4gKlxuICogTk9URTogQnkgZGVmYXVsdCB3ZSB3aWxsIHN1cHByZXNzIG1lbnRpb25zLiBUbyBlbmFibGUgbWVudGlvbnMsIGp1c3QgcGFzcyBhbnkgbWVudGlvbnMgb2JqZWN0LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZEludGVyYWN0aW9uUmVzcG9uc2UoXG4gIGJvdDogQm90LFxuICBpZDogYmlnaW50LFxuICB0b2tlbjogc3RyaW5nLFxuICBvcHRpb25zOiBJbnRlcmFjdGlvblJlc3BvbnNlLFxuKSB7XG4gIC8vIElmIG5vIG1lbnRpb25zIGFyZSBwcm92aWRlZCwgZm9yY2UgZGlzYWJsZSBtZW50aW9uc1xuICBpZiAoIW9wdGlvbnMuZGF0YT8uYWxsb3dlZE1lbnRpb25zKSB7XG4gICAgb3B0aW9ucy5kYXRhID0geyAuLi5vcHRpb25zLmRhdGEsIGFsbG93ZWRNZW50aW9uczogeyBwYXJzZTogW10gfSB9O1xuICB9XG5cbiAgLy8gRFJZIGNvZGUgYSBsaXR0bGUgYml0XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgY29udGVudDogb3B0aW9ucy5kYXRhLmNvbnRlbnQsXG4gICAgdHRzOiBvcHRpb25zLmRhdGEudHRzLFxuICAgIGVtYmVkczogb3B0aW9ucy5kYXRhLmVtYmVkcz8ubWFwKChlbWJlZCkgPT4gYm90LnRyYW5zZm9ybWVycy5yZXZlcnNlLmVtYmVkKGJvdCwgZW1iZWQpKSxcbiAgICBhbGxvd2VkX21lbnRpb25zOiB7XG4gICAgICBwYXJzZTogb3B0aW9ucy5kYXRhLmFsbG93ZWRNZW50aW9ucyEucGFyc2UsXG4gICAgICByZXBsaWVkX3VzZXI6IG9wdGlvbnMuZGF0YS5hbGxvd2VkTWVudGlvbnMhLnJlcGxpZWRVc2VyLFxuICAgICAgdXNlcnM6IG9wdGlvbnMuZGF0YS5hbGxvd2VkTWVudGlvbnMhLnVzZXJzPy5tYXAoKGlkKSA9PiBpZC50b1N0cmluZygpKSxcbiAgICAgIHJvbGVzOiBvcHRpb25zLmRhdGEuYWxsb3dlZE1lbnRpb25zIS5yb2xlcz8ubWFwKChpZCkgPT4gaWQudG9TdHJpbmcoKSksXG4gICAgfSxcbiAgICBjdXN0b21faWQ6IG9wdGlvbnMuZGF0YS5jdXN0b21JZCxcbiAgICB0aXRsZTogb3B0aW9ucy5kYXRhLnRpdGxlLFxuICAgIGNvbXBvbmVudHM6IG9wdGlvbnMuZGF0YS5jb21wb25lbnRzPy5tYXAoKGNvbXBvbmVudCkgPT4gKHtcbiAgICAgIHR5cGU6IGNvbXBvbmVudC50eXBlLFxuICAgICAgY29tcG9uZW50czogY29tcG9uZW50LmNvbXBvbmVudHMubWFwKChzdWJDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKHN1YkNvbXBvbmVudC50eXBlID09PSBNZXNzYWdlQ29tcG9uZW50VHlwZXMuSW5wdXRUZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgICAgc3R5bGU6IHN1YkNvbXBvbmVudC5zdHlsZSxcbiAgICAgICAgICAgIGN1c3RvbV9pZDogc3ViQ29tcG9uZW50LmN1c3RvbUlkLFxuICAgICAgICAgICAgbGFiZWw6IHN1YkNvbXBvbmVudC5sYWJlbCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBzdWJDb21wb25lbnQucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICB2YWx1ZTogc3ViQ29tcG9uZW50LnZhbHVlLFxuICAgICAgICAgICAgbWluX2xlbmd0aDogc3ViQ29tcG9uZW50Lm1pbkxlbmd0aCxcbiAgICAgICAgICAgIG1heF9sZW5ndGg6IHN1YkNvbXBvbmVudC5tYXhMZW5ndGgsXG4gICAgICAgICAgICByZXF1aXJlZDogc3ViQ29tcG9uZW50LnJlcXVpcmVkLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5TZWxlY3RNZW51KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogc3ViQ29tcG9uZW50LnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgbWluX3ZhbHVlczogc3ViQ29tcG9uZW50Lm1pblZhbHVlcyxcbiAgICAgICAgICAgIG1heF92YWx1ZXM6IHN1YkNvbXBvbmVudC5tYXhWYWx1ZXMsXG4gICAgICAgICAgICBvcHRpb25zOiBzdWJDb21wb25lbnQub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcbiAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG9wdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgZW1vamk6IG9wdGlvbi5lbW9qaVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgaWQ6IG9wdGlvbi5lbW9qaS5pZD8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5lbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IG9wdGlvbi5lbW9qaS5hbmltYXRlZCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IG9wdGlvbi5kZWZhdWx0LFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgIGN1c3RvbV9pZDogc3ViQ29tcG9uZW50LmN1c3RvbUlkLFxuICAgICAgICAgIGxhYmVsOiBzdWJDb21wb25lbnQubGFiZWwsXG4gICAgICAgICAgc3R5bGU6IHN1YkNvbXBvbmVudC5zdHlsZSxcbiAgICAgICAgICBlbW9qaTogXCJlbW9qaVwiIGluIHN1YkNvbXBvbmVudCAmJiBzdWJDb21wb25lbnQuZW1vamlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBpZDogc3ViQ29tcG9uZW50LmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgICBuYW1lOiBzdWJDb21wb25lbnQuZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHN1YkNvbXBvbmVudC5lbW9qaS5hbmltYXRlZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHVybDogXCJ1cmxcIiBpbiBzdWJDb21wb25lbnQgPyBzdWJDb21wb25lbnQudXJsIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIgaW4gc3ViQ29tcG9uZW50ID8gc3ViQ29tcG9uZW50LmRpc2FibGVkIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgfSkpLFxuICAgIGZsYWdzOiBvcHRpb25zLmRhdGEuZmxhZ3MsXG4gICAgY2hvaWNlczogb3B0aW9ucy5kYXRhLmNob2ljZXMsXG4gIH07XG5cbiAgLy8gQSByZXBseSBoYXMgbmV2ZXIgYmVlbiBzZW5kXG4gIGlmIChib3QuY2FjaGUudW5yZXBsaWVkSW50ZXJhY3Rpb25zLmRlbGV0ZShpZCkpIHtcbiAgICByZXR1cm4gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPHVuZGVmaW5lZD4oXG4gICAgICBib3QucmVzdCxcbiAgICAgIFwiUE9TVFwiLFxuICAgICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuSU5URVJBQ1RJT05fSURfVE9LRU4oaWQsIHRva2VuKSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogb3B0aW9ucy50eXBlLFxuICAgICAgICBkYXRhLFxuICAgICAgICBmaWxlOiBvcHRpb25zLmRhdGEuZmlsZSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIC8vIElmIGl0cyBhbHJlYWR5IGJlZW4gZXhlY3V0ZWQsIHdlIG5lZWQgdG8gc2VuZCBhIGZvbGxvd3VwIHJlc3BvbnNlXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkTWVzc2FnZT4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJQT1NUXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuV0VCSE9PSyhib3QuYXBwbGljYXRpb25JZCwgdG9rZW4pLFxuICAgIHsgLi4uZGF0YSwgZmlsZTogb3B0aW9ucy5kYXRhLmZpbGUgfSxcbiAgKTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy5tZXNzYWdlKGJvdCwgcmVzdWx0KTtcbn1cblxuLyoqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL2ludGVyYWN0aW9ucy9zbGFzaC1jb21tYW5kcyNpbnRlcmFjdGlvbi1yZXNwb25zZSAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvblJlc3BvbnNlIHtcbiAgLyoqIFRoZSB0eXBlIG9mIHJlc3BvbnNlICovXG4gIHR5cGU6IEludGVyYWN0aW9uUmVzcG9uc2VUeXBlcztcbiAgLyoqIEFuIG9wdGlvbmFsIHJlc3BvbnNlIG1lc3NhZ2UgKi9cbiAgZGF0YT86IEludGVyYWN0aW9uQXBwbGljYXRpb25Db21tYW5kQ2FsbGJhY2tEYXRhO1xufVxuXG4vKiogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvaW50ZXJhY3Rpb25zL3NsYXNoLWNvbW1hbmRzI2ludGVyYWN0aW9uLXJlc3BvbnNlLWludGVyYWN0aW9uYXBwbGljYXRpb25jb21tYW5kY2FsbGJhY2tkYXRhICovXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uQXBwbGljYXRpb25Db21tYW5kQ2FsbGJhY2tEYXRhIHtcbiAgLyoqIFRoZSBtZXNzYWdlIGNvbnRlbnRzICh1cCB0byAyMDAwIGNoYXJhY3RlcnMpICovXG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIC8qKiBUcnVlIGlmIHRoaXMgaXMgYSBUVFMgbWVzc2FnZSAqL1xuICB0dHM/OiBib29sZWFuO1xuICAvKiogRW1iZWRkZWQgYHJpY2hgIGNvbnRlbnQgKHVwIHRvIDYwMDAgY2hhcmFjdGVycykgKi9cbiAgZW1iZWRzPzogRW1iZWRbXTtcbiAgLyoqIEFsbG93ZWQgbWVudGlvbnMgZm9yIHRoZSBtZXNzYWdlICovXG4gIGFsbG93ZWRNZW50aW9ucz86IEFsbG93ZWRNZW50aW9ucztcbiAgLyoqIFRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBiZWluZyBzZW50ICovXG4gIGZpbGU/OiBGaWxlQ29udGVudCB8IEZpbGVDb250ZW50W107XG4gIC8qKiBUaGUgY3VzdG9tSWQgeW91IHdhbnQgdG8gdXNlIGZvciB0aGlzIG1vZGFsIHJlc3BvbnNlLiAqL1xuICBjdXN0b21JZD86IHN0cmluZztcbiAgLyoqIFRoZSB0aXRsZSB5b3Ugd2FudCB0byB1c2UgZm9yIHRoaXMgbW9kYWwgcmVzcG9uc2UuICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbXBvbmVudHMgeW91IHdvdWxkIGxpa2UgdG8gaGF2ZSBzZW50IGluIHRoaXMgbWVzc2FnZSAqL1xuICBjb21wb25lbnRzPzogTWVzc2FnZUNvbXBvbmVudHM7XG4gIC8qKiBNZXNzYWdlIGZsYWdzIGNvbWJpbmVkIGFzIGEgYml0IGZpZWxkIChvbmx5IFNVUFBSRVNTX0VNQkVEUyBhbmQgRVBIRU1FUkFMIGNhbiBiZSBzZXQpICovXG4gIGZsYWdzPzogbnVtYmVyO1xuICAvKiogQXV0b2NvbXBsZXRlIGNob2ljZXMgKG1heCBvZiAyNSBjaG9pY2VzKSAqL1xuICBjaG9pY2VzPzogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uQ2hvaWNlW107XG59XG5cbi8qKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9pbnRlcmFjdGlvbnMvc2xhc2gtY29tbWFuZHMjYXBwbGljYXRpb25jb21tYW5kb3B0aW9uY2hvaWNlICovXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvbkNob2ljZSB7XG4gIC8qKiAxLTEwMCBjaGFyYWN0ZXIgY2hvaWNlIG5hbWUgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKiogVmFsdWUgb2YgdGhlIGNob2ljZSwgdXAgdG8gMTAwIGNoYXJhY3RlcnMgaWYgc3RyaW5nICovXG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsU0FBbUMscUJBQXFCLFFBQVEsdUJBQXVCLENBQUM7QUFFeEY7Ozs7O0dBS0csQ0FDSCxPQUFPLGVBQWUsdUJBQXVCLENBQzNDLEdBQVEsRUFDUixHQUFVLEVBQ1Ys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