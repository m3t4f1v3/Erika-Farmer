import { Collection } from "../util/collection.ts";
export function transformInteraction(bot, payload) {
    const guildId = payload.guild_id ? bot.transformers.snowflake(payload.guild_id) : undefined;
    const user = bot.transformers.user(bot, payload.member?.user || payload.user);
    const interaction = {
        // UNTRANSFORMED STUFF HERE
        type: payload.type,
        token: payload.token,
        version: payload.version,
        locale: payload.locale,
        guildLocale: payload.guild_locale,
        // TRANSFORMED STUFF BELOW
        guildId,
        user,
        id: bot.transformers.snowflake(payload.id),
        applicationId: bot.transformers.snowflake(payload.application_id),
        message: payload.message ? bot.transformers.message(bot, payload.message) : undefined,
        channelId: payload.channel_id ? bot.transformers.snowflake(payload.channel_id) : undefined,
        member: payload.member && guildId ? bot.transformers.member(bot, payload.member, guildId, user.id) : undefined,
        data: payload.data ? {
            componentType: payload.data.component_type,
            customId: payload.data.custom_id,
            components: payload.data.components?.map((component)=>bot.transformers.component(bot, component)
            ),
            values: payload.data.values,
            id: payload.data.id ? bot.transformers.snowflake(payload.data.id) : undefined,
            name: payload.data.name,
            resolved: payload.data.resolved ? transformInteractionDataResolved(bot, payload.data.resolved, guildId) : undefined,
            options: payload.data.options?.map((opt)=>bot.transformers.interactionDataOptions(bot, opt)
            ),
            targetId: payload.data.target_id ? bot.transformers.snowflake(payload.data.target_id) : undefined,
            guildId: payload.data.guild_id ? bot.transformers.snowflake(payload.data.guild_id) : undefined
        } : undefined
    };
    return interaction;
}
export function transformInteractionDataOption(bot, option) {
    const opt = {
        name: option.name,
        type: option.type,
        value: option.value,
        options: option.options,
        focused: option.focused
    };
    return opt;
}
export function transformInteractionDataResolved(bot, resolved, guildId) {
    const transformed = {};
    if (resolved.messages) {
        transformed.messages = new Collection(Object.entries(resolved.messages).map(([id, value])=>{
            const message = bot.transformers.message(bot, value);
            return [
                message.id,
                message
            ];
        }));
    }
    if (resolved.users) {
        transformed.users = new Collection(Object.entries(resolved.users).map(([id, value])=>{
            const user = bot.transformers.user(bot, value);
            return [
                user.id,
                user
            ];
        }));
    }
    if (guildId && resolved.members) {
        transformed.members = new Collection(Object.entries(resolved.members).map(([id, value])=>{
            const member = bot.transformers.member(bot, value, guildId, bot.transformers.snowflake(id));
            return [
                member.id,
                member
            ];
        }));
    }
    if (guildId && resolved.roles) {
        transformed.roles = new Collection(Object.entries(resolved.roles).map(([id, value])=>{
            const role = bot.transformers.role(bot, {
                role: value,
                guildId
            });
            return [
                role.id,
                role
            ];
        }));
    }
    if (resolved.channels) {
        transformed.channels = new Collection(Object.entries(resolved.channels).map(([key, value])=>{
            const id = bot.transformers.snowflake(key);
            const channel = value;
            return [
                id,
                {
                    id,
                    name: channel.name,
                    type: channel.type,
                    permissions: bot.transformers.snowflake(channel.permissions)
                }, 
            ];
        }));
    }
    if (resolved.attachments) {
        transformed.attachments = new Collection(Object.entries(resolved.attachments).map(([key, value])=>{
            const id = bot.transformers.snowflake(key);
            return [
                id,
                bot.transformers.attachment(bot, value)
            ];
        }));
    }
    return transformed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vYm90LnRzXCI7XG5pbXBvcnQge1xuICBEaXNjb3JkQXR0YWNobWVudCxcbiAgRGlzY29yZEludGVyYWN0aW9uLFxuICBEaXNjb3JkSW50ZXJhY3Rpb25EYXRhT3B0aW9uLFxuICBEaXNjb3JkSW50ZXJhY3Rpb25EYXRhUmVzb2x2ZWQsXG59IGZyb20gXCIuLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBDaGFubmVsVHlwZXMgfSBmcm9tIFwiLi4vdHlwZXMvc2hhcmVkLnRzXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuaW1wb3J0IHsgQXR0YWNobWVudCB9IGZyb20gXCIuL2F0dGFjaG1lbnQudHNcIjtcbmltcG9ydCB7IE1lbWJlciwgVXNlciB9IGZyb20gXCIuL21lbWJlci50c1wiO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2UudHNcIjtcbmltcG9ydCB7IFJvbGUgfSBmcm9tIFwiLi9yb2xlLnRzXCI7XG5pbXBvcnQgeyBPcHRpb25hbGl6ZSB9IGZyb20gXCIuLi90eXBlcy9zaGFyZWQudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUludGVyYWN0aW9uKGJvdDogQm90LCBwYXlsb2FkOiBEaXNjb3JkSW50ZXJhY3Rpb24pIHtcbiAgY29uc3QgZ3VpbGRJZCA9IHBheWxvYWQuZ3VpbGRfaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmd1aWxkX2lkKSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgdXNlciA9IGJvdC50cmFuc2Zvcm1lcnMudXNlcihib3QsIHBheWxvYWQubWVtYmVyPy51c2VyIHx8IHBheWxvYWQudXNlciEpO1xuXG4gIGNvbnN0IGludGVyYWN0aW9uID0ge1xuICAgIC8vIFVOVFJBTlNGT1JNRUQgU1RVRkYgSEVSRVxuICAgIHR5cGU6IHBheWxvYWQudHlwZSxcbiAgICB0b2tlbjogcGF5bG9hZC50b2tlbixcbiAgICB2ZXJzaW9uOiBwYXlsb2FkLnZlcnNpb24sXG4gICAgbG9jYWxlOiBwYXlsb2FkLmxvY2FsZSxcbiAgICBndWlsZExvY2FsZTogcGF5bG9hZC5ndWlsZF9sb2NhbGUsXG5cbiAgICAvLyBUUkFOU0ZPUk1FRCBTVFVGRiBCRUxPV1xuICAgIGd1aWxkSWQsXG4gICAgdXNlcixcbiAgICBpZDogYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5pZCksXG4gICAgYXBwbGljYXRpb25JZDogYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5hcHBsaWNhdGlvbl9pZCksXG4gICAgbWVzc2FnZTogcGF5bG9hZC5tZXNzYWdlID8gYm90LnRyYW5zZm9ybWVycy5tZXNzYWdlKGJvdCwgcGF5bG9hZC5tZXNzYWdlKSA6IHVuZGVmaW5lZCxcbiAgICBjaGFubmVsSWQ6IHBheWxvYWQuY2hhbm5lbF9pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuY2hhbm5lbF9pZCkgOiB1bmRlZmluZWQsXG4gICAgbWVtYmVyOiBwYXlsb2FkLm1lbWJlciAmJiBndWlsZElkID8gYm90LnRyYW5zZm9ybWVycy5tZW1iZXIoYm90LCBwYXlsb2FkLm1lbWJlciwgZ3VpbGRJZCwgdXNlci5pZCkgOiB1bmRlZmluZWQsXG5cbiAgICBkYXRhOiBwYXlsb2FkLmRhdGFcbiAgICAgID8ge1xuICAgICAgICBjb21wb25lbnRUeXBlOiBwYXlsb2FkLmRhdGEuY29tcG9uZW50X3R5cGUsXG4gICAgICAgIGN1c3RvbUlkOiBwYXlsb2FkLmRhdGEuY3VzdG9tX2lkLFxuICAgICAgICBjb21wb25lbnRzOiBwYXlsb2FkLmRhdGEuY29tcG9uZW50cz8ubWFwKChjb21wb25lbnQpID0+IGJvdC50cmFuc2Zvcm1lcnMuY29tcG9uZW50KGJvdCwgY29tcG9uZW50KSksXG4gICAgICAgIHZhbHVlczogcGF5bG9hZC5kYXRhLnZhbHVlcyxcbiAgICAgICAgaWQ6IHBheWxvYWQuZGF0YS5pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZGF0YS5pZCkgOiB1bmRlZmluZWQsXG4gICAgICAgIG5hbWU6IHBheWxvYWQuZGF0YS5uYW1lLFxuICAgICAgICByZXNvbHZlZDogcGF5bG9hZC5kYXRhLnJlc29sdmVkXG4gICAgICAgICAgPyB0cmFuc2Zvcm1JbnRlcmFjdGlvbkRhdGFSZXNvbHZlZChib3QsIHBheWxvYWQuZGF0YS5yZXNvbHZlZCwgZ3VpbGRJZClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgb3B0aW9uczogcGF5bG9hZC5kYXRhLm9wdGlvbnM/Lm1hcCgob3B0KSA9PiBib3QudHJhbnNmb3JtZXJzLmludGVyYWN0aW9uRGF0YU9wdGlvbnMoYm90LCBvcHQpKSxcbiAgICAgICAgdGFyZ2V0SWQ6IHBheWxvYWQuZGF0YS50YXJnZXRfaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmRhdGEudGFyZ2V0X2lkKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VpbGRJZDogcGF5bG9hZC5kYXRhLmd1aWxkX2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5kYXRhLmd1aWxkX2lkKSA6IHVuZGVmaW5lZCxcbiAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICB9O1xuXG4gIHJldHVybiBpbnRlcmFjdGlvbiBhcyBPcHRpb25hbGl6ZTx0eXBlb2YgaW50ZXJhY3Rpb24+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSW50ZXJhY3Rpb25EYXRhT3B0aW9uKGJvdDogQm90LCBvcHRpb246IERpc2NvcmRJbnRlcmFjdGlvbkRhdGFPcHRpb24pIHtcbiAgY29uc3Qgb3B0ID0ge1xuICAgIG5hbWU6IG9wdGlvbi5uYW1lLFxuICAgIHR5cGU6IG9wdGlvbi50eXBlLFxuICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgb3B0aW9uczogb3B0aW9uLm9wdGlvbnMsXG4gICAgZm9jdXNlZDogb3B0aW9uLmZvY3VzZWQsXG4gIH07XG5cbiAgcmV0dXJuIG9wdCBhcyBPcHRpb25hbGl6ZTx0eXBlb2Ygb3B0Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUludGVyYWN0aW9uRGF0YVJlc29sdmVkKGJvdDogQm90LCByZXNvbHZlZDogRGlzY29yZEludGVyYWN0aW9uRGF0YVJlc29sdmVkLCBndWlsZElkPzogYmlnaW50KSB7XG4gIGNvbnN0IHRyYW5zZm9ybWVkOiB7XG4gICAgbWVzc2FnZXM/OiBDb2xsZWN0aW9uPGJpZ2ludCwgTWVzc2FnZT47XG4gICAgdXNlcnM/OiBDb2xsZWN0aW9uPGJpZ2ludCwgVXNlcj47XG4gICAgbWVtYmVycz86IENvbGxlY3Rpb248YmlnaW50LCBNZW1iZXI+O1xuICAgIHJvbGVzPzogQ29sbGVjdGlvbjxiaWdpbnQsIFJvbGU+O1xuICAgIGNoYW5uZWxzPzogQ29sbGVjdGlvbjxiaWdpbnQsIHsgaWQ6IGJpZ2ludDsgbmFtZTogc3RyaW5nOyB0eXBlOiBDaGFubmVsVHlwZXM7IHBlcm1pc3Npb25zOiBiaWdpbnQgfT47XG4gICAgYXR0YWNobWVudHM/OiBDb2xsZWN0aW9uPGJpZ2ludCwgQXR0YWNobWVudD47XG4gIH0gPSB7fTtcblxuICBpZiAocmVzb2x2ZWQubWVzc2FnZXMpIHtcbiAgICB0cmFuc2Zvcm1lZC5tZXNzYWdlcyA9IG5ldyBDb2xsZWN0aW9uKFxuICAgICAgT2JqZWN0LmVudHJpZXMocmVzb2x2ZWQubWVzc2FnZXMpLm1hcCgoW2lkLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IGJvdC50cmFuc2Zvcm1lcnMubWVzc2FnZShib3QsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIFttZXNzYWdlLmlkLCBtZXNzYWdlXTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBpZiAocmVzb2x2ZWQudXNlcnMpIHtcbiAgICB0cmFuc2Zvcm1lZC51c2VycyA9IG5ldyBDb2xsZWN0aW9uKFxuICAgICAgT2JqZWN0LmVudHJpZXMocmVzb2x2ZWQudXNlcnMpLm1hcCgoW2lkLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGJvdC50cmFuc2Zvcm1lcnMudXNlcihib3QsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIFt1c2VyLmlkLCB1c2VyXTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBpZiAoZ3VpbGRJZCAmJiByZXNvbHZlZC5tZW1iZXJzKSB7XG4gICAgdHJhbnNmb3JtZWQubWVtYmVycyA9IG5ldyBDb2xsZWN0aW9uKFxuICAgICAgT2JqZWN0LmVudHJpZXMocmVzb2x2ZWQubWVtYmVycykubWFwKChbaWQsIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBtZW1iZXI6IE1lbWJlciA9IGJvdC50cmFuc2Zvcm1lcnMubWVtYmVyKGJvdCwgdmFsdWUsIGd1aWxkSWQsIGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKGlkKSk7XG4gICAgICAgIHJldHVybiBbbWVtYmVyLmlkLCBtZW1iZXJdO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGlmIChndWlsZElkICYmIHJlc29sdmVkLnJvbGVzKSB7XG4gICAgdHJhbnNmb3JtZWQucm9sZXMgPSBuZXcgQ29sbGVjdGlvbihcbiAgICAgIE9iamVjdC5lbnRyaWVzKHJlc29sdmVkLnJvbGVzKS5tYXAoKFtpZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBib3QudHJhbnNmb3JtZXJzLnJvbGUoYm90LCB7IHJvbGU6IHZhbHVlLCBndWlsZElkIH0pO1xuICAgICAgICByZXR1cm4gW3JvbGUuaWQsIHJvbGVdO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGlmIChyZXNvbHZlZC5jaGFubmVscykge1xuICAgIHRyYW5zZm9ybWVkLmNoYW5uZWxzID0gbmV3IENvbGxlY3Rpb24oXG4gICAgICBPYmplY3QuZW50cmllcyhyZXNvbHZlZC5jaGFubmVscykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShrZXkpO1xuICAgICAgICBjb25zdCBjaGFubmVsID0gdmFsdWUgYXMgeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IHR5cGU6IENoYW5uZWxUeXBlczsgcGVybWlzc2lvbnM6IHN0cmluZyB9O1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZTogY2hhbm5lbC5uYW1lLFxuICAgICAgICAgICAgdHlwZTogY2hhbm5lbC50eXBlLFxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKGNoYW5uZWwucGVybWlzc2lvbnMpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgaWYgKHJlc29sdmVkLmF0dGFjaG1lbnRzKSB7XG4gICAgdHJhbnNmb3JtZWQuYXR0YWNobWVudHMgPSBuZXcgQ29sbGVjdGlvbihcbiAgICAgIE9iamVjdC5lbnRyaWVzKHJlc29sdmVkLmF0dGFjaG1lbnRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKGtleSk7XG4gICAgICAgIHJldHVybiBbaWQsIGJvdC50cmFuc2Zvcm1lcnMuYXR0YWNobWVudChib3QsIHZhbHVlIGFzIERpc2NvcmRBdHRhY2htZW50KV07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkIGFzIE9wdGlvbmFsaXplPHR5cGVvZiB0cmFuc2Zvcm1lZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb24gZXh0ZW5kcyBSZXR1cm5UeXBlPHR5cGVvZiB0cmFuc2Zvcm1JbnRlcmFjdGlvbj4ge31cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25EYXRhUmVzb2x2ZWQgZXh0ZW5kcyBSZXR1cm5UeXBlPHR5cGVvZiB0cmFuc2Zvcm1JbnRlcmFjdGlvbkRhdGFSZXNvbHZlZD4ge31cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25EYXRhT3B0aW9uIGV4dGVuZHMgUmV0dXJuVHlwZTx0eXBlb2YgdHJhbnNmb3JtSW50ZXJhY3Rpb25EYXRhT3B0aW9uPiB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLFNBQVMsVUFBVSxRQUFRLHVCQUF1QixDQUFDO0FBT25ELE9BQU8sU0FBUyxvQkFBb0IsQ0FBQyxHQUFRLEVBQUUsT0FBMkIsRUFBRTtJQUMxRSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLEFBQUM7SUFDNUYsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEFBQUMsQ0FBQyxBQUFDO0lBRS9FLE1BQU0sV0FBVyxHQUFHO1FBQ2xCLDJCQUEyQjtRQUMzQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztRQUN4QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07UUFDdEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxZQUFZO1FBRWpDLDBCQUEwQjtRQUMxQixPQUFPO1FBQ1AsSUFBSTtRQUNKLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzFDLGFBQWEsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2pF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