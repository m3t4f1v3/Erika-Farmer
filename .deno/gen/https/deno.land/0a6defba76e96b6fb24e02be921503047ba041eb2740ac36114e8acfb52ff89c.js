import { MessageComponentTypes } from "../../types/shared.ts";
/** Send a message to the channel. Requires SEND_MESSAGES permission. */ export async function sendMessage(bot, channelId, content) {
    const result = await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.CHANNEL_MESSAGES(channelId), {
        content: content.content,
        tts: content.tts,
        embeds: content.embeds?.map((embed)=>bot.transformers.reverse.embed(bot, embed)
        ),
        allowed_mentions: content.allowedMentions ? {
            parse: content.allowedMentions?.parse,
            roles: content.allowedMentions?.roles?.map((id)=>id.toString()
            ),
            users: content.allowedMentions?.users?.map((id)=>id.toString()
            ),
            replied_user: content.allowedMentions?.repliedUser
        } : undefined,
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
        ),
        ...content.messageReference?.messageId ? {
            message_reference: {
                message_id: content.messageReference.messageId.toString(),
                channel_id: content.messageReference.channelId?.toString(),
                guild_id: content.messageReference.guildId?.toString(),
                fail_if_not_exists: content.messageReference.failIfNotExists === true
            }
        } : {}
    });
    return bot.transformers.message(bot, result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IEFsbG93ZWRNZW50aW9ucywgRmlsZUNvbnRlbnQsIE1lc3NhZ2VDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL21vZC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudFR5cGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3NoYXJlZC50c1wiO1xuaW1wb3J0IHsgRW1iZWQgfSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtZXJzL2VtYmVkLnRzXCI7XG5cbi8qKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgY2hhbm5lbC4gUmVxdWlyZXMgU0VORF9NRVNTQUdFUyBwZXJtaXNzaW9uLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGJvdDogQm90LCBjaGFubmVsSWQ6IGJpZ2ludCwgY29udGVudDogQ3JlYXRlTWVzc2FnZSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZE1lc3NhZ2U+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUE9TVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkNIQU5ORUxfTUVTU0FHRVMoY2hhbm5lbElkKSxcbiAgICB7XG4gICAgICBjb250ZW50OiBjb250ZW50LmNvbnRlbnQsXG4gICAgICB0dHM6IGNvbnRlbnQudHRzLFxuICAgICAgZW1iZWRzOiBjb250ZW50LmVtYmVkcz8ubWFwKChlbWJlZCkgPT4gYm90LnRyYW5zZm9ybWVycy5yZXZlcnNlLmVtYmVkKGJvdCwgZW1iZWQpKSxcbiAgICAgIGFsbG93ZWRfbWVudGlvbnM6IGNvbnRlbnQuYWxsb3dlZE1lbnRpb25zXG4gICAgICAgID8ge1xuICAgICAgICAgIHBhcnNlOiBjb250ZW50LmFsbG93ZWRNZW50aW9ucz8ucGFyc2UsXG4gICAgICAgICAgcm9sZXM6IGNvbnRlbnQuYWxsb3dlZE1lbnRpb25zPy5yb2xlcz8ubWFwKChpZCkgPT4gaWQudG9TdHJpbmcoKSksXG4gICAgICAgICAgdXNlcnM6IGNvbnRlbnQuYWxsb3dlZE1lbnRpb25zPy51c2Vycz8ubWFwKChpZCkgPT4gaWQudG9TdHJpbmcoKSksXG4gICAgICAgICAgcmVwbGllZF91c2VyOiBjb250ZW50LmFsbG93ZWRNZW50aW9ucz8ucmVwbGllZFVzZXIsXG4gICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBmaWxlOiBjb250ZW50LmZpbGUsXG4gICAgICBjb21wb25lbnRzOiBjb250ZW50LmNvbXBvbmVudHM/Lm1hcCgoY29tcG9uZW50KSA9PiAoe1xuICAgICAgICB0eXBlOiBjb21wb25lbnQudHlwZSxcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50LmNvbXBvbmVudHMubWFwKChzdWJDb21wb25lbnQpID0+IHtcbiAgICAgICAgICBpZiAoc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5JbnB1dFRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgICAgICBzdHlsZTogc3ViQ29tcG9uZW50LnN0eWxlLFxuICAgICAgICAgICAgICBjdXN0b21faWQ6IHN1YkNvbXBvbmVudC5jdXN0b21JZCxcbiAgICAgICAgICAgICAgbGFiZWw6IHN1YkNvbXBvbmVudC5sYWJlbCxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHN1YkNvbXBvbmVudC5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgbWluX2xlbmd0aDogc3ViQ29tcG9uZW50Lm1pbkxlbmd0aCA/PyBzdWJDb21wb25lbnQucmVxdWlyZWQgPT09IGZhbHNlID8gMCA6IHN1YkNvbXBvbmVudC5taW5MZW5ndGgsXG4gICAgICAgICAgICAgIG1heF9sZW5ndGg6IHN1YkNvbXBvbmVudC5tYXhMZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdWJDb21wb25lbnQudHlwZSA9PT0gTWVzc2FnZUNvbXBvbmVudFR5cGVzLlNlbGVjdE1lbnUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgICAgICBjdXN0b21faWQ6IHN1YkNvbXBvbmVudC5jdXN0b21JZCxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHN1YkNvbXBvbmVudC5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgbWluX3ZhbHVlczogc3ViQ29tcG9uZW50Lm1pblZhbHVlcyxcbiAgICAgICAgICAgICAgbWF4X3ZhbHVlczogc3ViQ29tcG9uZW50Lm1heFZhbHVlcyxcbiAgICAgICAgICAgICAgb3B0aW9uczogc3ViQ29tcG9uZW50Lm9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb24uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZW1vamk6IG9wdGlvbi5lbW9qaVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBvcHRpb24uZW1vamkuaWQ/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5lbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogb3B0aW9uLmVtb2ppLmFuaW1hdGVkLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogb3B0aW9uLmRlZmF1bHQsXG4gICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IHN1YkNvbXBvbmVudC50eXBlLFxuICAgICAgICAgICAgY3VzdG9tX2lkOiBzdWJDb21wb25lbnQuY3VzdG9tSWQsXG4gICAgICAgICAgICBsYWJlbDogc3ViQ29tcG9uZW50LmxhYmVsLFxuICAgICAgICAgICAgc3R5bGU6IHN1YkNvbXBvbmVudC5zdHlsZSxcbiAgICAgICAgICAgIGVtb2ppOiBcImVtb2ppXCIgaW4gc3ViQ29tcG9uZW50ICYmIHN1YkNvbXBvbmVudC5lbW9qaVxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBpZDogc3ViQ29tcG9uZW50LmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIG5hbWU6IHN1YkNvbXBvbmVudC5lbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBzdWJDb21wb25lbnQuZW1vamkuYW5pbWF0ZWQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB1cmw6IFwidXJsXCIgaW4gc3ViQ29tcG9uZW50ID8gc3ViQ29tcG9uZW50LnVybCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIgaW4gc3ViQ29tcG9uZW50ID8gc3ViQ29tcG9uZW50LmRpc2FibGVkIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgfSkpLFxuICAgICAgLi4uKGNvbnRlbnQubWVzc2FnZVJlZmVyZW5jZT8ubWVzc2FnZUlkXG4gICAgICAgID8ge1xuICAgICAgICAgIG1lc3NhZ2VfcmVmZXJlbmNlOiB7XG4gICAgICAgICAgICBtZXNzYWdlX2lkOiBjb250ZW50Lm1lc3NhZ2VSZWZlcmVuY2UubWVzc2FnZUlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjaGFubmVsX2lkOiBjb250ZW50Lm1lc3NhZ2VSZWZlcmVuY2UuY2hhbm5lbElkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgZ3VpbGRfaWQ6IGNvbnRlbnQubWVzc2FnZVJlZmVyZW5jZS5ndWlsZElkPy50b1N0cmluZygpLFxuICAgICAgICAgICAgZmFpbF9pZl9ub3RfZXhpc3RzOiBjb250ZW50Lm1lc3NhZ2VSZWZlcmVuY2UuZmFpbElmTm90RXhpc3RzID09PSB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSksXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gYm90LnRyYW5zZm9ybWVycy5tZXNzYWdlKGJvdCwgcmVzdWx0KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVNZXNzYWdlIHtcbiAgLyoqIFRoZSBtZXNzYWdlIGNvbnRlbnRzICh1cCB0byAyMDAwIGNoYXJhY3RlcnMpICovXG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIC8qKiB0cnVlIGlmIHRoaXMgaXMgYSBUVFMgbWVzc2FnZSAqL1xuICB0dHM/OiBib29sZWFuO1xuICAvKiogRW1iZWRkZWQgYHJpY2hgIGNvbnRlbnQgKHVwIHRvIDYwMDAgY2hhcmFjdGVycykgKi9cbiAgZW1iZWRzPzogRW1iZWRbXTtcbiAgLyoqIEFsbG93ZWQgbWVudGlvbnMgZm9yIHRoZSBtZXNzYWdlICovXG4gIGFsbG93ZWRNZW50aW9ucz86IEFsbG93ZWRNZW50aW9ucztcbiAgLyoqIEluY2x1ZGUgdG8gbWFrZSB5b3VyIG1lc3NhZ2UgYSByZXBseSAqL1xuICBtZXNzYWdlUmVmZXJlbmNlPzoge1xuICAgIC8qKiBpZCBvZiB0aGUgb3JpZ2luYXRpbmcgbWVzc2FnZSAqL1xuICAgIG1lc3NhZ2VJZD86IGJpZ2ludDtcbiAgICAvKipcbiAgICAgKiBpZCBvZiB0aGUgb3JpZ2luYXRpbmcgbWVzc2FnZSdzIGNoYW5uZWxcbiAgICAgKiBOb3RlOiBgY2hhbm5lbF9pZGAgaXMgb3B0aW9uYWwgd2hlbiBjcmVhdGluZyBhIHJlcGx5LCBidXQgd2lsbCBhbHdheXMgYmUgcHJlc2VudCB3aGVuIHJlY2VpdmluZyBhbiBldmVudC9yZXNwb25zZSB0aGF0IGluY2x1ZGVzIHRoaXMgZGF0YSBtb2RlbC5cbiAgICAgKi9cbiAgICBjaGFubmVsSWQ/OiBiaWdpbnQ7XG4gICAgLyoqIGlkIG9mIHRoZSBvcmlnaW5hdGluZyBtZXNzYWdlJ3MgZ3VpbGQgKi9cbiAgICBndWlsZElkPzogYmlnaW50O1xuICAgIC8qKiBXaGVuIHNlbmRpbmcsIHdoZXRoZXIgdG8gZXJyb3IgaWYgdGhlIHJlZmVyZW5jZWQgbWVzc2FnZSBkb2Vzbid0IGV4aXN0IGluc3RlYWQgb2Ygc2VuZGluZyBhcyBhIG5vcm1hbCAobm9uLXJlcGx5KSBtZXNzYWdlLCBkZWZhdWx0IHRydWUgKi9cbiAgICBmYWlsSWZOb3RFeGlzdHM6IGJvb2xlYW47XG4gIH07XG4gIC8qKiBUaGUgY29udGVudHMgb2YgdGhlIGZpbGUgYmVpbmcgc2VudCAqL1xuICBmaWxlPzogRmlsZUNvbnRlbnQgfCBGaWxlQ29udGVudFtdO1xuICAvKiogVGhlIGNvbXBvbmVudHMgeW91IHdvdWxkIGxpa2UgdG8gaGF2ZSBzZW50IGluIHRoaXMgbWVzc2FnZSAqL1xuICBjb21wb25lbnRzPzogTWVzc2FnZUNvbXBvbmVudHM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsU0FBUyxxQkFBcUIsUUFBUSx1QkFBdUIsQ0FBQztBQUc5RCx3RUFBd0UsQ0FDeEUsT0FBTyxlQUFlLFdBQVcsQ0FBQyxHQUFRLEVBQUUsU0FBaUIsRUFBRSxPQUFzQixFQUFFO0lBQ3JGLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsTUFBTSxFQUNOLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUNo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