export function transformActivity(bot, payload) {
    const activity = {
        name: payload.name,
        type: payload.type,
        url: payload.url ?? undefined,
        createdAt: payload.created_at,
        startedAt: payload.timestamps?.start,
        endedAt: payload.timestamps?.end,
        applicationId: payload.application_id ? bot.transformers.snowflake(payload.application_id) : undefined,
        details: payload.details ?? undefined,
        state: payload.state ?? undefined,
        emoji: payload.emoji
            ? {
                name: payload.emoji.name,
                animated: payload.emoji.animated,
                id: payload.emoji.id ? bot.transformers.snowflake(payload.emoji.id) : undefined,
            }
            : undefined,
        partyId: payload.party?.id,
        partyCurrentSize: payload.party?.size?.[0],
        partyMaxSize: payload.party?.size?.[1],
        largeImage: payload.assets?.large_image,
        largeText: payload.assets?.large_text,
        smallImage: payload.assets?.small_image,
        smallText: payload.assets?.small_text,
        join: payload.secrets?.join,
        spectate: payload.secrets?.spectate,
        match: payload.secrets?.match,
        instance: payload.instance,
        flags: payload.flags,
        buttons: payload.buttons,
    };
    return activity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsR0FBUSxFQUFFLE9BQXdCO0lBQ2xFLE1BQU0sUUFBUSxHQUFHO1FBQ2YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxTQUFTO1FBQzdCLFNBQVMsRUFBRSxPQUFPLENBQUMsVUFBVTtRQUM3QixTQUFTLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLO1FBQ3BDLE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUc7UUFDaEMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUN0RyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxTQUFTO1FBQ3JDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLFNBQVM7UUFDakMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ2xCLENBQUMsQ0FBQztnQkFDQSxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUN4QixRQUFRLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUNoQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7YUFDaEY7WUFDRCxDQUFDLENBQUMsU0FBUztRQUNiLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDMUIsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVc7UUFDdkMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVTtRQUNyQyxVQUFVLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXO1FBQ3ZDLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVU7UUFDckMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSTtRQUMzQixRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRO1FBQ25DLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDN0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQzFCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87S0FDekIsQ0FBQztJQUVGLE9BQU8sUUFBd0MsQ0FBQztBQUNsRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90IH0gZnJvbSBcIi4uL2JvdC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZEFjdGl2aXR5IH0gZnJvbSBcIi4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IE9wdGlvbmFsaXplIH0gZnJvbSBcIi4uL3R5cGVzL3NoYXJlZC50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQWN0aXZpdHkoYm90OiBCb3QsIHBheWxvYWQ6IERpc2NvcmRBY3Rpdml0eSkge1xuICBjb25zdCBhY3Rpdml0eSA9IHtcbiAgICBuYW1lOiBwYXlsb2FkLm5hbWUsXG4gICAgdHlwZTogcGF5bG9hZC50eXBlLFxuICAgIHVybDogcGF5bG9hZC51cmwgPz8gdW5kZWZpbmVkLFxuICAgIGNyZWF0ZWRBdDogcGF5bG9hZC5jcmVhdGVkX2F0LFxuICAgIHN0YXJ0ZWRBdDogcGF5bG9hZC50aW1lc3RhbXBzPy5zdGFydCxcbiAgICBlbmRlZEF0OiBwYXlsb2FkLnRpbWVzdGFtcHM/LmVuZCxcbiAgICBhcHBsaWNhdGlvbklkOiBwYXlsb2FkLmFwcGxpY2F0aW9uX2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5hcHBsaWNhdGlvbl9pZCkgOiB1bmRlZmluZWQsXG4gICAgZGV0YWlsczogcGF5bG9hZC5kZXRhaWxzID8/IHVuZGVmaW5lZCxcbiAgICBzdGF0ZTogcGF5bG9hZC5zdGF0ZSA/PyB1bmRlZmluZWQsXG4gICAgZW1vamk6IHBheWxvYWQuZW1vamlcbiAgICAgID8ge1xuICAgICAgICBuYW1lOiBwYXlsb2FkLmVtb2ppLm5hbWUsXG4gICAgICAgIGFuaW1hdGVkOiBwYXlsb2FkLmVtb2ppLmFuaW1hdGVkLFxuICAgICAgICBpZDogcGF5bG9hZC5lbW9qaS5pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZW1vamkuaWQpIDogdW5kZWZpbmVkLFxuICAgICAgfVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgcGFydHlJZDogcGF5bG9hZC5wYXJ0eT8uaWQsXG4gICAgcGFydHlDdXJyZW50U2l6ZTogcGF5bG9hZC5wYXJ0eT8uc2l6ZT8uWzBdLFxuICAgIHBhcnR5TWF4U2l6ZTogcGF5bG9hZC5wYXJ0eT8uc2l6ZT8uWzFdLFxuICAgIGxhcmdlSW1hZ2U6IHBheWxvYWQuYXNzZXRzPy5sYXJnZV9pbWFnZSxcbiAgICBsYXJnZVRleHQ6IHBheWxvYWQuYXNzZXRzPy5sYXJnZV90ZXh0LFxuICAgIHNtYWxsSW1hZ2U6IHBheWxvYWQuYXNzZXRzPy5zbWFsbF9pbWFnZSxcbiAgICBzbWFsbFRleHQ6IHBheWxvYWQuYXNzZXRzPy5zbWFsbF90ZXh0LFxuICAgIGpvaW46IHBheWxvYWQuc2VjcmV0cz8uam9pbixcbiAgICBzcGVjdGF0ZTogcGF5bG9hZC5zZWNyZXRzPy5zcGVjdGF0ZSxcbiAgICBtYXRjaDogcGF5bG9hZC5zZWNyZXRzPy5tYXRjaCxcbiAgICBpbnN0YW5jZTogcGF5bG9hZC5pbnN0YW5jZSxcbiAgICBmbGFnczogcGF5bG9hZC5mbGFncyxcbiAgICBidXR0b25zOiBwYXlsb2FkLmJ1dHRvbnMsXG4gIH07XG5cbiAgcmV0dXJuIGFjdGl2aXR5IGFzIE9wdGlvbmFsaXplPHR5cGVvZiBhY3Rpdml0eT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHkgZXh0ZW5kcyBSZXR1cm5UeXBlPHR5cGVvZiB0cmFuc2Zvcm1BY3Rpdml0eT4ge31cbiJdfQ==