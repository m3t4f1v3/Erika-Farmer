export function transformAuditLogEntry(bot, payload) {
    const auditLogEntry = {
        id: bot.transformers.snowflake(payload.id),
        changes: payload.changes?.map((change)=>{
            switch(change.key){
                case "$add":
                case "$remove":
                    return {
                        key: change.key,
                        new: change.new_value?.map((val)=>({
                                id: val.id ? bot.transformers.snowflake(val.id) : undefined,
                                name: val.name
                            })
                        ),
                        old: change.old_value?.map((val)=>({
                                id: val?.id ? bot.transformers.snowflake(val.id) : undefined,
                                name: val?.name
                            })
                        )
                    };
                case "discovery_splash_hash":
                case "banner_hash":
                case "rules_channel_id":
                case "public_updates_channel_id":
                case "icon_hash":
                case "image_hash":
                case "splash_hash":
                case "owner_id":
                case "widget_channel_id":
                case "system_channel_id":
                case "application_id":
                case "permissions":
                case "allow":
                case "deny":
                case "channel_id":
                case "inviter_id":
                case "avatar_hash":
                case "id":
                    return {
                        key: change.key,
                        old: change.old_value ? bot.transformers.snowflake(change.old_value) : undefined,
                        new: change.new_value ? bot.transformers.snowflake(change.new_value) : undefined
                    };
                case "name":
                case "description":
                case "preferred_locale":
                case "region":
                case "afk_channel_id":
                case "vanity_url_code":
                case "topic":
                case "code":
                case "nick":
                case "location":
                    return {
                        key: change.key,
                        old: change.old_value,
                        new: change.new_value
                    };
                case "afk_timeout":
                case "mfa_level":
                case "verification_level":
                case "explicit_content_filter":
                case "default_message_notifications":
                case "prune_delete_days":
                case "position":
                case "bitrate":
                case "rate_limit_per_user":
                case "color":
                case "max_uses":
                case "uses":
                case "max_age":
                case "expire_behavior":
                case "expire_grace_period":
                case "user_limit":
                case "privacy_level":
                case "entity_type":
                case "status":
                    return {
                        key: change.key,
                        old: change.old_value ? Number(change.old_value) : undefined,
                        new: change.new_value ? Number(change.new_value) : undefined
                    };
                case "widget_enabled":
                case "nsfw":
                case "hoist":
                case "mentionable":
                case "temporary":
                case "deaf":
                case "mute":
                case "enable_emoticons":
                    return {
                        key: change.key,
                        old: change.old_value ?? false,
                        new: change.new_value ?? false
                    };
                case "permission_overwrites":
                    return {
                        key: change.key,
                        old: change.old_value,
                        new: change.new_value
                    };
                default:
                    return {
                        key: change.key,
                        old: change.old_value,
                        new: change.new_value
                    };
            }
        }),
        userId: payload.user_id ? bot.transformers.snowflake(payload.user_id) : undefined,
        targetId: payload.target_id ? bot.transformers.snowflake(payload.target_id) : undefined,
        actionType: payload.action_type,
        options: payload.options ? {
            deleteMemberDays: payload.options.delete_member_days ? Number(payload.options.delete_member_days) : 0,
            membersRemoved: payload.options.members_removed ? Number(payload.options.members_removed) : 0,
            channelId: payload.options.channel_id ? bot.transformers.snowflake(payload.options.channel_id) : undefined,
            messageId: payload.options.message_id ? bot.transformers.snowflake(payload.options.message_id) : undefined,
            count: payload.options.count ? Number(payload.options.count) : 0,
            id: payload.options.id ? bot.transformers.snowflake(payload.options.id) : undefined,
            type: Number(payload.options.type),
            roleName: payload.options.role_name
        } : undefined,
        reason: payload.reason
    };
    return auditLogEntry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkQXVkaXRMb2dFbnRyeSB9IGZyb20gXCIuLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBPcHRpb25hbGl6ZSB9IGZyb20gXCIuLi90eXBlcy9zaGFyZWQudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUF1ZGl0TG9nRW50cnkoYm90OiBCb3QsIHBheWxvYWQ6IERpc2NvcmRBdWRpdExvZ0VudHJ5KSB7XG4gIGNvbnN0IGF1ZGl0TG9nRW50cnkgPSB7XG4gICAgaWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuaWQpLFxuICAgIGNoYW5nZXM6IHBheWxvYWQuY2hhbmdlcz8ubWFwKChjaGFuZ2UpID0+IHtcbiAgICAgIHN3aXRjaCAoY2hhbmdlLmtleSkge1xuICAgICAgICBjYXNlIFwiJGFkZFwiOlxuICAgICAgICBjYXNlIFwiJHJlbW92ZVwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGNoYW5nZS5rZXksXG4gICAgICAgICAgICBuZXc6IGNoYW5nZS5uZXdfdmFsdWU/Lm1hcCgodmFsKSA9PiAoe1xuICAgICAgICAgICAgICBpZDogdmFsLmlkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UodmFsLmlkKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgbmFtZTogdmFsLm5hbWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBvbGQ6IGNoYW5nZS5vbGRfdmFsdWU/Lm1hcCgodmFsKSA9PiAoe1xuICAgICAgICAgICAgICBpZDogdmFsPy5pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHZhbC5pZCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIG5hbWU6IHZhbD8ubmFtZSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiZGlzY292ZXJ5X3NwbGFzaF9oYXNoXCI6XG4gICAgICAgIGNhc2UgXCJiYW5uZXJfaGFzaFwiOlxuICAgICAgICBjYXNlIFwicnVsZXNfY2hhbm5lbF9pZFwiOlxuICAgICAgICBjYXNlIFwicHVibGljX3VwZGF0ZXNfY2hhbm5lbF9pZFwiOlxuICAgICAgICBjYXNlIFwiaWNvbl9oYXNoXCI6XG4gICAgICAgIGNhc2UgXCJpbWFnZV9oYXNoXCI6XG4gICAgICAgIGNhc2UgXCJzcGxhc2hfaGFzaFwiOlxuICAgICAgICBjYXNlIFwib3duZXJfaWRcIjpcbiAgICAgICAgY2FzZSBcIndpZGdldF9jaGFubmVsX2lkXCI6XG4gICAgICAgIGNhc2UgXCJzeXN0ZW1fY2hhbm5lbF9pZFwiOlxuICAgICAgICBjYXNlIFwiYXBwbGljYXRpb25faWRcIjpcbiAgICAgICAgY2FzZSBcInBlcm1pc3Npb25zXCI6XG4gICAgICAgIGNhc2UgXCJhbGxvd1wiOlxuICAgICAgICBjYXNlIFwiZGVueVwiOlxuICAgICAgICBjYXNlIFwiY2hhbm5lbF9pZFwiOlxuICAgICAgICBjYXNlIFwiaW52aXRlcl9pZFwiOlxuICAgICAgICBjYXNlIFwiYXZhdGFyX2hhc2hcIjpcbiAgICAgICAgY2FzZSBcImlkXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogY2hhbmdlLmtleSxcbiAgICAgICAgICAgIG9sZDogY2hhbmdlLm9sZF92YWx1ZSA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKGNoYW5nZS5vbGRfdmFsdWUpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbmV3OiBjaGFuZ2UubmV3X3ZhbHVlID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UoY2hhbmdlLm5ld192YWx1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XG4gICAgICAgIGNhc2UgXCJwcmVmZXJyZWRfbG9jYWxlXCI6XG4gICAgICAgIGNhc2UgXCJyZWdpb25cIjpcbiAgICAgICAgY2FzZSBcImFma19jaGFubmVsX2lkXCI6XG4gICAgICAgIGNhc2UgXCJ2YW5pdHlfdXJsX2NvZGVcIjpcbiAgICAgICAgY2FzZSBcInRvcGljXCI6XG4gICAgICAgIGNhc2UgXCJjb2RlXCI6XG4gICAgICAgIGNhc2UgXCJuaWNrXCI6XG4gICAgICAgIGNhc2UgXCJsb2NhdGlvblwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGNoYW5nZS5rZXksXG4gICAgICAgICAgICBvbGQ6IGNoYW5nZS5vbGRfdmFsdWUsXG4gICAgICAgICAgICBuZXc6IGNoYW5nZS5uZXdfdmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImFma190aW1lb3V0XCI6XG4gICAgICAgIGNhc2UgXCJtZmFfbGV2ZWxcIjpcbiAgICAgICAgY2FzZSBcInZlcmlmaWNhdGlvbl9sZXZlbFwiOlxuICAgICAgICBjYXNlIFwiZXhwbGljaXRfY29udGVudF9maWx0ZXJcIjpcbiAgICAgICAgY2FzZSBcImRlZmF1bHRfbWVzc2FnZV9ub3RpZmljYXRpb25zXCI6XG4gICAgICAgIGNhc2UgXCJwcnVuZV9kZWxldGVfZGF5c1wiOlxuICAgICAgICBjYXNlIFwicG9zaXRpb25cIjpcbiAgICAgICAgY2FzZSBcImJpdHJhdGVcIjpcbiAgICAgICAgY2FzZSBcInJhdGVfbGltaXRfcGVyX3VzZXJcIjpcbiAgICAgICAgY2FzZSBcImNvbG9yXCI6XG4gICAgICAgIGNhc2UgXCJtYXhfdXNlc1wiOlxuICAgICAgICBjYXNlIFwidXNlc1wiOlxuICAgICAgICBjYXNlIFwibWF4X2FnZVwiOlxuICAgICAgICBjYXNlIFwiZXhwaXJlX2JlaGF2aW9yXCI6XG4gICAgICAgIGNhc2UgXCJleHBpcmVfZ3JhY2VfcGVyaW9kXCI6XG4gICAgICAgIGNhc2UgXCJ1c2VyX2xpbWl0XCI6XG4gICAgICAgIGNhc2UgXCJwcml2YWN5X2xldmVsXCI6XG4gICAgICAgIGNhc2UgXCJlbnRpdHlfdHlwZVwiOlxuICAgICAgICBjYXNlIFwic3RhdHVzXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogY2hhbmdlLmtleSxcbiAgICAgICAgICAgIG9sZDogY2hhbmdlLm9sZF92YWx1ZSA/IE51bWJlcihjaGFuZ2Uub2xkX3ZhbHVlKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5ldzogY2hhbmdlLm5ld192YWx1ZSA/IE51bWJlcihjaGFuZ2UubmV3X3ZhbHVlKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwid2lkZ2V0X2VuYWJsZWRcIjpcbiAgICAgICAgY2FzZSBcIm5zZndcIjpcbiAgICAgICAgY2FzZSBcImhvaXN0XCI6XG4gICAgICAgIGNhc2UgXCJtZW50aW9uYWJsZVwiOlxuICAgICAgICBjYXNlIFwidGVtcG9yYXJ5XCI6XG4gICAgICAgIGNhc2UgXCJkZWFmXCI6XG4gICAgICAgIGNhc2UgXCJtdXRlXCI6XG4gICAgICAgIGNhc2UgXCJlbmFibGVfZW1vdGljb25zXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogY2hhbmdlLmtleSxcbiAgICAgICAgICAgIG9sZDogY2hhbmdlLm9sZF92YWx1ZSA/PyBmYWxzZSxcbiAgICAgICAgICAgIG5ldzogY2hhbmdlLm5ld192YWx1ZSA/PyBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwicGVybWlzc2lvbl9vdmVyd3JpdGVzXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogY2hhbmdlLmtleSxcbiAgICAgICAgICAgIG9sZDogY2hhbmdlLm9sZF92YWx1ZSxcbiAgICAgICAgICAgIG5ldzogY2hhbmdlLm5ld192YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGNoYW5nZS5rZXksXG4gICAgICAgICAgICBvbGQ6IGNoYW5nZS5vbGRfdmFsdWUsXG4gICAgICAgICAgICBuZXc6IGNoYW5nZS5uZXdfdmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICB1c2VySWQ6IHBheWxvYWQudXNlcl9pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQudXNlcl9pZCkgOiB1bmRlZmluZWQsXG4gICAgdGFyZ2V0SWQ6IHBheWxvYWQudGFyZ2V0X2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC50YXJnZXRfaWQpIDogdW5kZWZpbmVkLFxuICAgIGFjdGlvblR5cGU6IHBheWxvYWQuYWN0aW9uX3R5cGUsXG4gICAgb3B0aW9uczogcGF5bG9hZC5vcHRpb25zXG4gICAgICA/IHtcbiAgICAgICAgZGVsZXRlTWVtYmVyRGF5czogcGF5bG9hZC5vcHRpb25zLmRlbGV0ZV9tZW1iZXJfZGF5cyA/IE51bWJlcihwYXlsb2FkLm9wdGlvbnMuZGVsZXRlX21lbWJlcl9kYXlzKSA6IDAsXG4gICAgICAgIG1lbWJlcnNSZW1vdmVkOiBwYXlsb2FkLm9wdGlvbnMubWVtYmVyc19yZW1vdmVkID8gTnVtYmVyKHBheWxvYWQub3B0aW9ucy5tZW1iZXJzX3JlbW92ZWQpIDogMCxcbiAgICAgICAgY2hhbm5lbElkOiBwYXlsb2FkLm9wdGlvbnMuY2hhbm5lbF9pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQub3B0aW9ucy5jaGFubmVsX2lkKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgbWVzc2FnZUlkOiBwYXlsb2FkLm9wdGlvbnMubWVzc2FnZV9pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQub3B0aW9ucy5tZXNzYWdlX2lkKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgY291bnQ6IHBheWxvYWQub3B0aW9ucy5jb3VudCA/IE51bWJlcihwYXlsb2FkLm9wdGlvbnMuY291bnQpIDogMCxcbiAgICAgICAgaWQ6IHBheWxvYWQub3B0aW9ucy5pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQub3B0aW9ucy5pZCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHR5cGU6IE51bWJlcihwYXlsb2FkLm9wdGlvbnMudHlwZSksXG4gICAgICAgIHJvbGVOYW1lOiBwYXlsb2FkLm9wdGlvbnMucm9sZV9uYW1lLFxuICAgICAgfVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgcmVhc29uOiBwYXlsb2FkLnJlYXNvbixcbiAgfTtcblxuICByZXR1cm4gYXVkaXRMb2dFbnRyeSBhcyBPcHRpb25hbGl6ZTx0eXBlb2YgYXVkaXRMb2dFbnRyeT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVkaXRMb2dFbnRyeSBleHRlbmRzIFJldHVyblR5cGU8dHlwZW9mIHRyYW5zZm9ybUF1ZGl0TG9nRW50cnk+IHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxTQUFTLHNCQUFzQixDQUFDLEdBQVEsRUFBRSxPQUE2QixFQUFFO0lBQzlFLE1BQU0sYUFBYSxHQUFHO1FBQ3BCLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBSztZQUN4QyxPQUFRLE1BQU0sQ0FBQyxHQUFHO2dCQUNoQixLQUFLLE1BQU0sQ0FBQztnQkFDWixLQUFLLFNBQVM7b0JBQ1osT0FBTzt3QkFDTCxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7d0JBQ2YsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFLLENBQUM7Z0NBQ25DLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFT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