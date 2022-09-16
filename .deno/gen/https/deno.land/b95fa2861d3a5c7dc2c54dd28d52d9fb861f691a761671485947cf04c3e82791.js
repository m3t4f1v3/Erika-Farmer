export function transformComponentToDiscordComponent(bot, payload) {
    return {
        type: payload.type,
        custom_id: payload.customId,
        disabled: payload.disabled,
        style: payload.style,
        label: payload.label,
        emoji: payload.emoji
            ? {
                id: payload.emoji.id?.toString(),
                name: payload.emoji.name,
                animated: payload.emoji.animated,
            }
            : undefined,
        url: payload.url,
        options: payload.options?.map((option) => ({
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
        placeholder: payload.placeholder,
        min_values: payload.minValues,
        max_values: payload.maxValues,
        value: payload.value,
        components: payload.components?.map((component) => bot.transformers.reverse.component(bot, component)),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sVUFBVSxvQ0FBb0MsQ0FBQyxHQUFRLEVBQUUsT0FBa0I7SUFDL0UsT0FBTztRQUNMLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixTQUFTLEVBQUUsT0FBTyxDQUFDLFFBQVE7UUFDM0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQzFCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ2xCLENBQUMsQ0FBQztnQkFDQSxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFO2dCQUNoQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUN4QixRQUFRLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQ2pDO1lBQ0QsQ0FBQyxDQUFDLFNBQVM7UUFDYixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7UUFDaEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQy9CLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDakIsQ0FBQyxDQUFDO29CQUNBLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUU7b0JBQy9CLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7aUJBQ2hDO2dCQUNELENBQUMsQ0FBQyxTQUFTO1lBQ2IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQztRQUNILFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztRQUNoQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQVM7UUFDN0IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTO1FBQzdCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDdkcsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnQudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUNvbXBvbmVudFRvRGlzY29yZENvbXBvbmVudChib3Q6IEJvdCwgcGF5bG9hZDogQ29tcG9uZW50KTogRGlzY29yZENvbXBvbmVudCB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogcGF5bG9hZC50eXBlLFxuICAgIGN1c3RvbV9pZDogcGF5bG9hZC5jdXN0b21JZCxcbiAgICBkaXNhYmxlZDogcGF5bG9hZC5kaXNhYmxlZCxcbiAgICBzdHlsZTogcGF5bG9hZC5zdHlsZSxcbiAgICBsYWJlbDogcGF5bG9hZC5sYWJlbCxcbiAgICBlbW9qaTogcGF5bG9hZC5lbW9qaVxuICAgICAgPyB7XG4gICAgICAgIGlkOiBwYXlsb2FkLmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICBuYW1lOiBwYXlsb2FkLmVtb2ppLm5hbWUsXG4gICAgICAgIGFuaW1hdGVkOiBwYXlsb2FkLmVtb2ppLmFuaW1hdGVkLFxuICAgICAgfVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgdXJsOiBwYXlsb2FkLnVybCxcbiAgICBvcHRpb25zOiBwYXlsb2FkLm9wdGlvbnM/Lm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcbiAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgZW1vamk6IG9wdGlvbi5lbW9qaVxuICAgICAgICA/IHtcbiAgICAgICAgICBpZDogb3B0aW9uLmVtb2ppLmlkPy50b1N0cmluZygpLFxuICAgICAgICAgIG5hbWU6IG9wdGlvbi5lbW9qaS5uYW1lLFxuICAgICAgICAgIGFuaW1hdGVkOiBvcHRpb24uZW1vamkuYW5pbWF0ZWQsXG4gICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBkZWZhdWx0OiBvcHRpb24uZGVmYXVsdCxcbiAgICB9KSksXG4gICAgcGxhY2Vob2xkZXI6IHBheWxvYWQucGxhY2Vob2xkZXIsXG4gICAgbWluX3ZhbHVlczogcGF5bG9hZC5taW5WYWx1ZXMsXG4gICAgbWF4X3ZhbHVlczogcGF5bG9hZC5tYXhWYWx1ZXMsXG4gICAgdmFsdWU6IHBheWxvYWQudmFsdWUsXG4gICAgY29tcG9uZW50czogcGF5bG9hZC5jb21wb25lbnRzPy5tYXAoKGNvbXBvbmVudCkgPT4gYm90LnRyYW5zZm9ybWVycy5yZXZlcnNlLmNvbXBvbmVudChib3QsIGNvbXBvbmVudCkpLFxuICB9O1xufVxuIl19