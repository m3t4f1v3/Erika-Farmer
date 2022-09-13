export function transformComponentToDiscordComponent(bot, payload) {
    return {
        type: payload.type,
        custom_id: payload.customId,
        disabled: payload.disabled,
        style: payload.style,
        label: payload.label,
        emoji: payload.emoji ? {
            id: payload.emoji.id?.toString(),
            name: payload.emoji.name,
            animated: payload.emoji.animated
        } : undefined,
        url: payload.url,
        options: payload.options?.map((option)=>({
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
        ),
        placeholder: payload.placeholder,
        min_values: payload.minValues,
        max_values: payload.maxValues,
        value: payload.value,
        components: payload.components?.map((component)=>bot.transformers.reverse.component(bot, component)
        )
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnQudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUNvbXBvbmVudFRvRGlzY29yZENvbXBvbmVudChib3Q6IEJvdCwgcGF5bG9hZDogQ29tcG9uZW50KTogRGlzY29yZENvbXBvbmVudCB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogcGF5bG9hZC50eXBlLFxuICAgIGN1c3RvbV9pZDogcGF5bG9hZC5jdXN0b21JZCxcbiAgICBkaXNhYmxlZDogcGF5bG9hZC5kaXNhYmxlZCxcbiAgICBzdHlsZTogcGF5bG9hZC5zdHlsZSxcbiAgICBsYWJlbDogcGF5bG9hZC5sYWJlbCxcbiAgICBlbW9qaTogcGF5bG9hZC5lbW9qaVxuICAgICAgPyB7XG4gICAgICAgIGlkOiBwYXlsb2FkLmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICBuYW1lOiBwYXlsb2FkLmVtb2ppLm5hbWUsXG4gICAgICAgIGFuaW1hdGVkOiBwYXlsb2FkLmVtb2ppLmFuaW1hdGVkLFxuICAgICAgfVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgdXJsOiBwYXlsb2FkLnVybCxcbiAgICBvcHRpb25zOiBwYXlsb2FkLm9wdGlvbnM/Lm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcbiAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgZW1vamk6IG9wdGlvbi5lbW9qaVxuICAgICAgICA/IHtcbiAgICAgICAgICBpZDogb3B0aW9uLmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgIG5hbWU6IG9wdGlvbi5lbW9qaS5uYW1lLFxuICAgICAgICAgIGFuaW1hdGVkOiBvcHRpb24uZW1vamkuYW5pbWF0ZWQsXG4gICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBkZWZhdWx0OiBvcHRpb24uZGVmYXVsdCxcbiAgICB9KSksXG4gICAgcGxhY2Vob2xkZXI6IHBheWxvYWQucGxhY2Vob2xkZXIsXG4gICAgbWluX3ZhbHVlczogcGF5bG9hZC5taW5WYWx1ZXMsXG4gICAgbWF4X3ZhbHVlczogcGF5bG9hZC5tYXhWYWx1ZXMsXG4gICAgdmFsdWU6IHBheWxvYWQudmFsdWUsXG4gICAgY29tcG9uZW50czogcGF5bG9hZC5jb21wb25lbnRzPy5tYXAoKGNvbXBvbmVudCkgPT4gYm90LnRyYW5zZm9ybWVycy5yZXZlcnNlLmNvbXBvbmVudChib3QsIGNvbXBvbmVudCkpLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sU0FBUyxvQ0FBb0MsQ0FBQyxHQUFRLEVBQUUsT0FBa0IsRUFBb0I7SUFDbkcsT0FBTztRQUNMLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixTQUFTLEVBQUUsT0FBTyxDQUFDLFFBQVE7UUFDM0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQzFCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQ2hCO1lBQ0EsRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRTtZQUNoQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3hCLFFBQVEsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDakMsR0FDQyxTQUFTO1FBQ2IsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1FBQ2hCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBSyxDQUFDO2dCQUN6QyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7Z0JBQ25CLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDbkIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO2dCQUMvQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FDZjtvQkFDQSxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFO29CQUMvQixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO29CQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO2lCQUNoQyxHQUNDLFNBQVM7Z0JBQ2IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3hCLENBQUM7UUFBQSxDQUFDO1FBQ0gsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1FBQ2hDLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FBUztRQUM3QixVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQVM7UUFDN0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztRQUFBLENBQUM7S0FDdkcsQ0FBQztDQUNIIn0=