export function transformComponent(bot, payload) {
    return {
        type: payload.type,
        customId: payload.custom_id,
        disabled: payload.disabled,
        style: payload.style,
        label: payload.label,
        emoji: payload.emoji ? {
            id: payload.emoji.id ? bot.transformers.snowflake(payload.emoji.id) : undefined,
            name: payload.emoji.name,
            animated: payload.emoji.animated
        } : undefined,
        url: payload.url,
        options: payload.options?.map((option)=>({
                label: option.label,
                value: option.value,
                description: option.description,
                emoji: option.emoji ? {
                    id: option.emoji.id ? bot.transformers.snowflake(option.emoji.id) : undefined,
                    name: option.emoji.name,
                    animated: option.emoji.animated
                } : undefined,
                default: option.default
            })
        ),
        placeholder: payload.placeholder,
        minValues: payload.min_values,
        maxValues: payload.max_values,
        value: payload.value,
        components: payload.components?.map((component)=>bot.transformers.component(bot, component)
        )
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBCdXR0b25TdHlsZXMsIE1lc3NhZ2VDb21wb25lbnRUeXBlcywgVGV4dFN0eWxlcyB9IGZyb20gXCIuLi9tb2QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRDb21wb25lbnQgfSBmcm9tIFwiLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQ29tcG9uZW50KGJvdDogQm90LCBwYXlsb2FkOiBEaXNjb3JkQ29tcG9uZW50KTogQ29tcG9uZW50IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBwYXlsb2FkLnR5cGUsXG4gICAgY3VzdG9tSWQ6IHBheWxvYWQuY3VzdG9tX2lkLFxuICAgIGRpc2FibGVkOiBwYXlsb2FkLmRpc2FibGVkLFxuICAgIHN0eWxlOiBwYXlsb2FkLnN0eWxlLFxuICAgIGxhYmVsOiBwYXlsb2FkLmxhYmVsLFxuICAgIGVtb2ppOiBwYXlsb2FkLmVtb2ppXG4gICAgICA/IHtcbiAgICAgICAgaWQ6IHBheWxvYWQuZW1vamkuaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmVtb2ppLmlkKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgbmFtZTogcGF5bG9hZC5lbW9qaS5uYW1lLFxuICAgICAgICBhbmltYXRlZDogcGF5bG9hZC5lbW9qaS5hbmltYXRlZCxcbiAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHVybDogcGF5bG9hZC51cmwsXG4gICAgb3B0aW9uczogcGF5bG9hZC5vcHRpb25zPy5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgIGxhYmVsOiBvcHRpb24ubGFiZWwsXG4gICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgIGVtb2ppOiBvcHRpb24uZW1vamlcbiAgICAgICAgPyB7XG4gICAgICAgICAgaWQ6IG9wdGlvbi5lbW9qaS5pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKG9wdGlvbi5lbW9qaS5pZCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgbmFtZTogb3B0aW9uLmVtb2ppLm5hbWUsXG4gICAgICAgICAgYW5pbWF0ZWQ6IG9wdGlvbi5lbW9qaS5hbmltYXRlZCxcbiAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGRlZmF1bHQ6IG9wdGlvbi5kZWZhdWx0LFxuICAgIH0pKSxcbiAgICBwbGFjZWhvbGRlcjogcGF5bG9hZC5wbGFjZWhvbGRlcixcbiAgICBtaW5WYWx1ZXM6IHBheWxvYWQubWluX3ZhbHVlcyxcbiAgICBtYXhWYWx1ZXM6IHBheWxvYWQubWF4X3ZhbHVlcyxcbiAgICB2YWx1ZTogcGF5bG9hZC52YWx1ZSxcbiAgICBjb21wb25lbnRzOiBwYXlsb2FkLmNvbXBvbmVudHM/Lm1hcCgoY29tcG9uZW50KSA9PiBib3QudHJhbnNmb3JtZXJzLmNvbXBvbmVudChib3QsIGNvbXBvbmVudCkpLFxuICB9O1xufVxuXG4vLyBUSElTIFRSQU5TRk9STUVSIEhBUyBBIENJUkNVTEFSIFJFRkVSRU5DRSBUTyBDQUxMIElUU0VMRiBGT1IgQ09NUE9ORU5UUyBTTyBBTiBBVVRPTUFURUQgVFlQRSBDQU4gTk9UIEJFIENSRUFURUQhXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50IHtcbiAgLyoqIGNvbXBvbmVudCB0eXBlICovXG4gIHR5cGU6IE1lc3NhZ2VDb21wb25lbnRUeXBlcztcbiAgLyoqIGEgZGV2ZWxvcGVyLWRlZmluZWQgaWRlbnRpZmllciBmb3IgdGhlIGNvbXBvbmVudCwgbWF4IDEwMCBjaGFyYWN0ZXJzICovXG4gIGN1c3RvbUlkPzogc3RyaW5nO1xuICAvKiogd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBkZWZhdWx0IGZhbHNlICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqIEZvciBkaWZmZXJlbnQgc3R5bGVzL2NvbG9ycyBvZiB0aGUgYnV0dG9ucyAqL1xuICBzdHlsZT86IEJ1dHRvblN0eWxlcyB8IFRleHRTdHlsZXM7XG4gIC8qKiB0ZXh0IHRoYXQgYXBwZWFycyBvbiB0aGUgYnV0dG9uIChtYXggODAgY2hhcmFjdGVycykgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG4gIC8qKiB0aGUgZGV2LWRlZmluZSB2YWx1ZSBvZiB0aGUgb3B0aW9uLCBtYXggMTAwIGNoYXJhY3RlcnMgZm9yIHNlbGVjdCBvciA0MDAwIGZvciBpbnB1dC4gKi9cbiAgdmFsdWU/OiBzdHJpbmc7XG4gIC8qKiBFbW9qaSBvYmplY3QgdGhhdCBpbmNsdWRlcyBmaWVsZHMgb2YgbmFtZSwgaWQsIGFuZCBhbmltYXRlZCBzdXBwb3J0aW5nIHVuaWNvZGUgYW5kIGN1c3RvbSBlbW9qaXMuICovXG4gIGVtb2ppPzoge1xuICAgIC8qKiBFbW9qaSBpZCAqL1xuICAgIGlkPzogYmlnaW50O1xuICAgIC8qKiBFbW9qaSBuYW1lICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKiogV2hldGhlciB0aGlzIGVtb2ppIGlzIGFuaW1hdGVkICovXG4gICAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICB9O1xuICAvKiogb3B0aW9uYWwgdXJsIGZvciBsaW5rLXN0eWxlIGJ1dHRvbnMgdGhhdCBjYW4gbmF2aWdhdGUgYSB1c2VyIHRvIHRoZSB3ZWIuIE9ubHkgdHlwZSA1IExpbmsgYnV0dG9ucyBjYW4gaGF2ZSBhIHVybCAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY2hvaWNlcyEgTWF4aW11bSBvZiAyNSBpdGVtcy4gKi9cbiAgb3B0aW9ucz86IFNlbGVjdE9wdGlvbltdO1xuICAvKiogQSBjdXN0b20gcGxhY2Vob2xkZXIgdGV4dCBpZiBub3RoaW5nIGlzIHNlbGVjdGVkLiBNYXhpbXVtIDE1MCBjaGFyYWN0ZXJzLiAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgLyoqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBpdGVtcyB0aGF0IG11c3QgYmUgc2VsZWN0ZWQuIERlZmF1bHQgMS4gQmV0d2VlbiAxLTI1LiAqL1xuICBtaW5WYWx1ZXM/OiBudW1iZXI7XG4gIC8qKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIERlZmF1bHQgMS4gQmV0d2VlbiAxLTI1LiAqL1xuICBtYXhWYWx1ZXM/OiBudW1iZXI7XG4gIC8qKiBhIGxpc3Qgb2YgY2hpbGQgY29tcG9uZW50cyAqL1xuICBjb21wb25lbnRzPzogQ29tcG9uZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0T3B0aW9uIHtcbiAgLyoqIFRoZSB1c2VyLWZhY2luZyBuYW1lIG9mIHRoZSBvcHRpb24uIE1heGltdW0gMjUgY2hhcmFjdGVycy4gKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqIFRoZSBkZXYtZGVmaW5lZCB2YWx1ZSBvZiB0aGUgb3B0aW9uLiBNYXhpbXVtIDEwMCBjaGFyYWN0ZXJzLiAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiogQW4gYWRkaXRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgb3B0aW9uLiBNYXhpbXVtIDUwIGNoYXJhY3RlcnMuICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKiogVGhlIGlkLCBuYW1lLCBhbmQgYW5pbWF0ZWQgcHJvcGVydGllcyBvZiBhbiBlbW9qaS4gKi9cbiAgZW1vamk/OiB7XG4gICAgLyoqIEVtb2ppIGlkICovXG4gICAgaWQ/OiBiaWdpbnQ7XG4gICAgLyoqIEVtb2ppIG5hbWUgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKiBXaGV0aGVyIHRoaXMgZW1vamkgaXMgYW5pbWF0ZWQgKi9cbiAgICBhbmltYXRlZD86IGJvb2xlYW47XG4gIH07XG4gIC8qKiBXaWxsIHJlbmRlciB0aGlzIG9wdGlvbiBhcyBhbHJlYWR5LXNlbGVjdGVkIGJ5IGRlZmF1bHQuICovXG4gIGRlZmF1bHQ/OiBib29sZWFuO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sU0FBUyxrQkFBa0IsQ0FBQyxHQUFRLEVBQUUsT0FBeUIsRUFBYTtJQUNqRixPQUFPO1FBQ0wsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUztRQUMzQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7UUFDMUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssR0FDaEI7WUFDQSxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTO1lBQy9FLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDeEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUTtTQUNqQyxHQUNDLFNBQVM7UUFDYixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7UUFDaEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFLLENBQUM7Z0JBQ3pDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDbkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2dCQUNuQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBQy9CLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxHQUNmO29CQUNBLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVM7b0JBQzdFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7aUJBQ2hDLEdBQ0MsU0FBUztnQkFDYixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87YUFDeEIsQ0FBQztRQUFBLENBQUM7UUFDSCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7UUFDaEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxVQUFVO1FBQzdCLFNBQVMsRUFBRSxPQUFPLENBQUMsVUFBVTtRQUM3QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7UUFBQSxDQUFDO0tBQy9GLENBQUM7Q0FDSCJ9