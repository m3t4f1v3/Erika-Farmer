export async function handleGuildRoleDelete(bot, data) {
    const payload = data.d;
    bot.events.roleDelete(bot, {
        roleId: bot.transformers.snowflake(payload.role_id),
        guildId: bot.transformers.snowflake(payload.guild_id),
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1VJTERfUk9MRV9ERUxFVEUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHVUlMRF9ST0xFX0RFTEVURS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLENBQUMsS0FBSyxVQUFVLHFCQUFxQixDQUFDLEdBQVEsRUFBRSxJQUEyQjtJQUMvRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBMkIsQ0FBQztJQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbkQsT0FBTyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7S0FDdEQsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRHYXRld2F5UGF5bG9hZCwgRGlzY29yZEd1aWxkUm9sZURlbGV0ZSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVHdWlsZFJvbGVEZWxldGUoYm90OiBCb3QsIGRhdGE6IERpc2NvcmRHYXRld2F5UGF5bG9hZCkge1xuICBjb25zdCBwYXlsb2FkID0gZGF0YS5kIGFzIERpc2NvcmRHdWlsZFJvbGVEZWxldGU7XG4gIGJvdC5ldmVudHMucm9sZURlbGV0ZShib3QsIHtcbiAgICByb2xlSWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQucm9sZV9pZCksXG4gICAgZ3VpbGRJZDogYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZF9pZCksXG4gIH0pO1xufVxuIl19