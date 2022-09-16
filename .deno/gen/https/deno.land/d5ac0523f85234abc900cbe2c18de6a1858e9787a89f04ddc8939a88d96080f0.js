export function handleStageInstanceCreate(bot, data) {
    const payload = data.d;
    bot.events.stageInstanceCreate(bot, {
        id: bot.transformers.snowflake(payload.id),
        guildId: bot.transformers.snowflake(payload.guild_id),
        channelId: bot.transformers.snowflake(payload.channel_id),
        topic: payload.topic,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1RBR0VfSU5TVEFOQ0VfQ1JFQVRFLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU1RBR0VfSU5TVEFOQ0VfQ1JFQVRFLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxHQUFRLEVBQUUsSUFBMkI7SUFDN0UsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQXlCLENBQUM7SUFFL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7UUFDbEMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDMUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDckQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDekQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0tBQ3JCLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRHYXRld2F5UGF5bG9hZCwgRGlzY29yZFN0YWdlSW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3RhZ2VJbnN0YW5jZUNyZWF0ZShib3Q6IEJvdCwgZGF0YTogRGlzY29yZEdhdGV3YXlQYXlsb2FkKSB7XG4gIGNvbnN0IHBheWxvYWQgPSBkYXRhLmQgYXMgRGlzY29yZFN0YWdlSW5zdGFuY2U7XG5cbiAgYm90LmV2ZW50cy5zdGFnZUluc3RhbmNlQ3JlYXRlKGJvdCwge1xuICAgIGlkOiBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmlkKSxcbiAgICBndWlsZElkOiBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmd1aWxkX2lkKSxcbiAgICBjaGFubmVsSWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuY2hhbm5lbF9pZCksXG4gICAgdG9waWM6IHBheWxvYWQudG9waWMsXG4gIH0pO1xufVxuIl19