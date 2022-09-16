export function transformAuditLogEntry(bot, payload) {
    const auditLogEntry = {
        id: bot.transformers.snowflake(payload.id),
        changes: payload.changes?.map((change) => {
            switch (change.key) {
                case "$add":
                case "$remove":
                    return {
                        key: change.key,
                        new: change.new_value?.map((val) => ({
                            id: val.id ? bot.transformers.snowflake(val.id) : undefined,
                            name: val.name,
                        })),
                        old: change.old_value?.map((val) => ({
                            id: val?.id ? bot.transformers.snowflake(val.id) : undefined,
                            name: val?.name,
                        })),
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
                        new: change.new_value ? bot.transformers.snowflake(change.new_value) : undefined,
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
                        new: change.new_value,
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
                        new: change.new_value ? Number(change.new_value) : undefined,
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
                        new: change.new_value ?? false,
                    };
                case "permission_overwrites":
                    return {
                        key: change.key,
                        old: change.old_value,
                        new: change.new_value,
                    };
                default:
                    return {
                        key: change.key,
                        old: change.old_value,
                        new: change.new_value,
                    };
            }
        }),
        userId: payload.user_id ? bot.transformers.snowflake(payload.user_id) : undefined,
        targetId: payload.target_id ? bot.transformers.snowflake(payload.target_id) : undefined,
        actionType: payload.action_type,
        options: payload.options
            ? {
                deleteMemberDays: payload.options.delete_member_days ? Number(payload.options.delete_member_days) : 0,
                membersRemoved: payload.options.members_removed ? Number(payload.options.members_removed) : 0,
                channelId: payload.options.channel_id ? bot.transformers.snowflake(payload.options.channel_id) : undefined,
                messageId: payload.options.message_id ? bot.transformers.snowflake(payload.options.message_id) : undefined,
                count: payload.options.count ? Number(payload.options.count) : 0,
                id: payload.options.id ? bot.transformers.snowflake(payload.options.id) : undefined,
                type: Number(payload.options.type),
                roleName: payload.options.role_name,
            }
            : undefined,
        reason: payload.reason,
    };
    return auditLogEntry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXRMb2dFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGl0TG9nRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxVQUFVLHNCQUFzQixDQUFDLEdBQVEsRUFBRSxPQUE2QjtJQUM1RSxNQUFNLGFBQWEsR0FBRztRQUNwQixFQUFFLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2QyxRQUFRLE1BQU0sQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xCLEtBQUssTUFBTSxDQUFDO2dCQUNaLEtBQUssU0FBUztvQkFDWixPQUFPO3dCQUNMLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRzt3QkFDZixHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ25DLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7NEJBQzNELElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTt5QkFDZixDQUFDLENBQUM7d0JBQ0gsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUNuQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzRCQUM1RCxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUk7eUJBQ2hCLENBQUMsQ0FBQztx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Ii4uL2JvdC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZEF1ZGl0TG9nRW50cnkgfSBmcm9tIFwiLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgT3B0aW9uYWxpemUgfSBmcm9tIFwiLi4vdHlwZXMvc2hhcmVkLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1BdWRpdExvZ0VudHJ5KGJvdDogQm90LCBwYXlsb2FkOiBEaXNjb3JkQXVkaXRMb2dFbnRyeSkge1xuICBjb25zdCBhdWRpdExvZ0VudHJ5ID0ge1xuICAgIGlkOiBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmlkKSxcbiAgICBjaGFuZ2VzOiBwYXlsb2FkLmNoYW5nZXM/Lm1hcCgoY2hhbmdlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGNoYW5nZS5rZXkpIHtcbiAgICAgICAgY2FzZSBcIiRhZGRcIjpcbiAgICAgICAgY2FzZSBcIiRyZW1vdmVcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBjaGFuZ2Uua2V5LFxuICAgICAgICAgICAgbmV3OiBjaGFuZ2UubmV3X3ZhbHVlPy5tYXAoKHZhbCkgPT4gKHtcbiAgICAgICAgICAgICAgaWQ6IHZhbC5pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHZhbC5pZCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIG5hbWU6IHZhbC5uYW1lLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgb2xkOiBjaGFuZ2Uub2xkX3ZhbHVlPy5tYXAoKHZhbCkgPT4gKHtcbiAgICAgICAgICAgICAgaWQ6IHZhbD8uaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZSh2YWwuaWQpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBuYW1lOiB2YWw/Lm5hbWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImRpc2NvdmVyeV9zcGxhc2hfaGFzaFwiOlxuICAgICAgICBjYXNlIFwiYmFubmVyX2hhc2hcIjpcbiAgICAgICAgY2FzZSBcInJ1bGVzX2NoYW5uZWxfaWRcIjpcbiAgICAgICAgY2FzZSBcInB1YmxpY191cGRhdGVzX2NoYW5uZWxfaWRcIjpcbiAgICAgICAgY2FzZSBcImljb25faGFzaFwiOlxuICAgICAgICBjYXNlIFwiaW1hZ2VfaGFzaFwiOlxuICAgICAgICBjYXNlIFwic3BsYXNoX2hhc2hcIjpcbiAgICAgICAgY2FzZSBcIm93bmVyX2lkXCI6XG4gICAgICAgIGNhc2UgXCJ3aWRnZXRfY2hhbm5lbF9pZFwiOlxuICAgICAgICBjYXNlIFwic3lzdGVtX2NoYW5uZWxfaWRcIjpcbiAgICAgICAgY2FzZSBcImFwcGxpY2F0aW9uX2lkXCI6XG4gICAgICAgIGNhc2UgXCJwZXJtaXNzaW9uc1wiOlxuICAgICAgICBjYXNlIFwiYWxsb3dcIjpcbiAgICAgICAgY2FzZSBcImRlbnlcIjpcbiAgICAgICAgY2FzZSBcImNoYW5uZWxfaWRcIjpcbiAgICAgICAgY2FzZSBcImludml0ZXJfaWRcIjpcbiAgICAgICAgY2FzZSBcImF2YXRhcl9oYXNoXCI6XG4gICAgICAgIGNhc2UgXCJpZFwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGNoYW5nZS5rZXksXG4gICAgICAgICAgICBvbGQ6IGNoYW5nZS5vbGRfdmFsdWUgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShjaGFuZ2Uub2xkX3ZhbHVlKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5ldzogY2hhbmdlLm5ld192YWx1ZSA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKGNoYW5nZS5uZXdfdmFsdWUpIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgIGNhc2UgXCJkZXNjcmlwdGlvblwiOlxuICAgICAgICBjYXNlIFwicHJlZmVycmVkX2xvY2FsZVwiOlxuICAgICAgICBjYXNlIFwicmVnaW9uXCI6XG4gICAgICAgIGNhc2UgXCJhZmtfY2hhbm5lbF9pZFwiOlxuICAgICAgICBjYXNlIFwidmFuaXR5X3VybF9jb2RlXCI6XG4gICAgICAgIGNhc2UgXCJ0b3BpY1wiOlxuICAgICAgICBjYXNlIFwiY29kZVwiOlxuICAgICAgICBjYXNlIFwibmlja1wiOlxuICAgICAgICBjYXNlIFwibG9jYXRpb25cIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBjaGFuZ2Uua2V5LFxuICAgICAgICAgICAgb2xkOiBjaGFuZ2Uub2xkX3ZhbHVlLFxuICAgICAgICAgICAgbmV3OiBjaGFuZ2UubmV3X3ZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJhZmtfdGltZW91dFwiOlxuICAgICAgICBjYXNlIFwibWZhX2xldmVsXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJpZmljYXRpb25fbGV2ZWxcIjpcbiAgICAgICAgY2FzZSBcImV4cGxpY2l0X2NvbnRlbnRfZmlsdGVyXCI6XG4gICAgICAgIGNhc2UgXCJkZWZhdWx0X21lc3NhZ2Vfbm90aWZpY2F0aW9uc1wiOlxuICAgICAgICBjYXNlIFwicHJ1bmVfZGVsZXRlX2RheXNcIjpcbiAgICAgICAgY2FzZSBcInBvc2l0aW9uXCI6XG4gICAgICAgIGNhc2UgXCJiaXRyYXRlXCI6XG4gICAgICAgIGNhc2UgXCJyYXRlX2xpbWl0X3Blcl91c2VyXCI6XG4gICAgICAgIGNhc2UgXCJjb2xvclwiOlxuICAgICAgICBjYXNlIFwibWF4X3VzZXNcIjpcbiAgICAgICAgY2FzZSBcInVzZXNcIjpcbiAgICAgICAgY2FzZSBcIm1heF9hZ2VcIjpcbiAgICAgICAgY2FzZSBcImV4cGlyZV9iZWhhdmlvclwiOlxuICAgICAgICBjYXNlIFwiZXhwaXJlX2dyYWNlX3BlcmlvZFwiOlxuICAgICAgICBjYXNlIFwidXNlcl9saW1pdFwiOlxuICAgICAgICBjYXNlIFwicHJpdmFjeV9sZXZlbFwiOlxuICAgICAgICBjYXNlIFwiZW50aXR5X3R5cGVcIjpcbiAgICAgICAgY2FzZSBcInN0YXR1c1wiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGNoYW5nZS5rZXksXG4gICAgICAgICAgICBvbGQ6IGNoYW5nZS5vbGRfdmFsdWUgPyBOdW1iZXIoY2hhbmdlLm9sZF92YWx1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBuZXc6IGNoYW5nZS5uZXdfdmFsdWUgPyBOdW1iZXIoY2hhbmdlLm5ld192YWx1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIndpZGdldF9lbmFibGVkXCI6XG4gICAgICAgIGNhc2UgXCJuc2Z3XCI6XG4gICAgICAgIGNhc2UgXCJob2lzdFwiOlxuICAgICAgICBjYXNlIFwibWVudGlvbmFibGVcIjpcbiAgICAgICAgY2FzZSBcInRlbXBvcmFyeVwiOlxuICAgICAgICBjYXNlIFwiZGVhZlwiOlxuICAgICAgICBjYXNlIFwibXV0ZVwiOlxuICAgICAgICBjYXNlIFwiZW5hYmxlX2Vtb3RpY29uc1wiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGNoYW5nZS5rZXksXG4gICAgICAgICAgICBvbGQ6IGNoYW5nZS5vbGRfdmFsdWUgPz8gZmFsc2UsXG4gICAgICAgICAgICBuZXc6IGNoYW5nZS5uZXdfdmFsdWUgPz8gZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcInBlcm1pc3Npb25fb3ZlcndyaXRlc1wiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGNoYW5nZS5rZXksXG4gICAgICAgICAgICBvbGQ6IGNoYW5nZS5vbGRfdmFsdWUsXG4gICAgICAgICAgICBuZXc6IGNoYW5nZS5uZXdfdmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBjaGFuZ2Uua2V5LFxuICAgICAgICAgICAgb2xkOiBjaGFuZ2Uub2xkX3ZhbHVlLFxuICAgICAgICAgICAgbmV3OiBjaGFuZ2UubmV3X3ZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICB9XG4gICAgfSksXG4gICAgdXNlcklkOiBwYXlsb2FkLnVzZXJfaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLnVzZXJfaWQpIDogdW5kZWZpbmVkLFxuICAgIHRhcmdldElkOiBwYXlsb2FkLnRhcmdldF9pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQudGFyZ2V0X2lkKSA6IHVuZGVmaW5lZCxcbiAgICBhY3Rpb25UeXBlOiBwYXlsb2FkLmFjdGlvbl90eXBlLFxuICAgIG9wdGlvbnM6IHBheWxvYWQub3B0aW9uc1xuICAgICAgPyB7XG4gICAgICAgIGRlbGV0ZU1lbWJlckRheXM6IHBheWxvYWQub3B0aW9ucy5kZWxldGVfbWVtYmVyX2RheXMgPyBOdW1iZXIocGF5bG9hZC5vcHRpb25zLmRlbGV0ZV9tZW1iZXJfZGF5cykgOiAwLFxuICAgICAgICBtZW1iZXJzUmVtb3ZlZDogcGF5bG9hZC5vcHRpb25zLm1lbWJlcnNfcmVtb3ZlZCA/IE51bWJlcihwYXlsb2FkLm9wdGlvbnMubWVtYmVyc19yZW1vdmVkKSA6IDAsXG4gICAgICAgIGNoYW5uZWxJZDogcGF5bG9hZC5vcHRpb25zLmNoYW5uZWxfaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLm9wdGlvbnMuY2hhbm5lbF9pZCkgOiB1bmRlZmluZWQsXG4gICAgICAgIG1lc3NhZ2VJZDogcGF5bG9hZC5vcHRpb25zLm1lc3NhZ2VfaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLm9wdGlvbnMubWVzc2FnZV9pZCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGNvdW50OiBwYXlsb2FkLm9wdGlvbnMuY291bnQgPyBOdW1iZXIocGF5bG9hZC5vcHRpb25zLmNvdW50KSA6IDAsXG4gICAgICAgIGlkOiBwYXlsb2FkLm9wdGlvbnMuaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLm9wdGlvbnMuaWQpIDogdW5kZWZpbmVkLFxuICAgICAgICB0eXBlOiBOdW1iZXIocGF5bG9hZC5vcHRpb25zLnR5cGUpLFxuICAgICAgICByb2xlTmFtZTogcGF5bG9hZC5vcHRpb25zLnJvbGVfbmFtZSxcbiAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHJlYXNvbjogcGF5bG9hZC5yZWFzb24sXG4gIH07XG5cbiAgcmV0dXJuIGF1ZGl0TG9nRW50cnkgYXMgT3B0aW9uYWxpemU8dHlwZW9mIGF1ZGl0TG9nRW50cnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1ZGl0TG9nRW50cnkgZXh0ZW5kcyBSZXR1cm5UeXBlPHR5cGVvZiB0cmFuc2Zvcm1BdWRpdExvZ0VudHJ5PiB7fVxuIl19