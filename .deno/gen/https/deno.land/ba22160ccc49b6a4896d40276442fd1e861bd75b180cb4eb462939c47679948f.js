import { Collection } from "../util/collection.ts";
import { GuildToggles } from "./toggles/guild.ts";
export function transformGuild(bot, payload) {
    const guildId = bot.transformers.snowflake(payload.guild.id);
    const guild = {
        afkTimeout: payload.guild.afk_timeout,
        approximateMemberCount: payload.guild.approximate_member_count,
        approximatePresenceCount: payload.guild.approximate_presence_count,
        defaultMessageNotifications: payload.guild.default_message_notifications,
        description: payload.guild.description,
        explicitContentFilter: payload.guild.explicit_content_filter,
        toggles: new GuildToggles(payload.guild),
        maxMembers: payload.guild.max_members,
        maxPresences: payload.guild.max_presences ?? undefined,
        maxVideoChannelUsers: payload.guild.max_video_channel_users,
        mfaLevel: payload.guild.mfa_level,
        name: payload.guild.name,
        nsfwLevel: payload.guild.nsfw_level,
        preferredLocale: payload.guild.preferred_locale,
        premiumSubscriptionCount: payload.guild.premium_subscription_count,
        premiumTier: payload.guild.premium_tier,
        stageInstances: payload.guild.stage_instances?.map((si)=>({
                /** The id of this Stage instance */ id: bot.transformers.snowflake(si.id),
                /** The guild id of the associated Stage channel */ guildId,
                /** The id of the associated Stage channel */ channelId: bot.transformers.snowflake(si.channel_id),
                /** The topic of the Stage instance (1-120 characters) */ topic: si.topic
            })
        ),
        systemChannelFlags: payload.guild.system_channel_flags,
        vanityUrlCode: payload.guild.vanity_url_code,
        verificationLevel: payload.guild.verification_level,
        welcomeScreen: payload.guild.welcome_screen ? {
            description: payload.guild.welcome_screen.description ?? undefined,
            welcomeChannels: payload.guild.welcome_screen.welcome_channels.map((wc)=>({
                    channelId: bot.transformers.snowflake(wc.channel_id),
                    description: wc.description,
                    emojiId: wc.emoji_id ? bot.transformers.snowflake(wc.emoji_id) : undefined,
                    emojiName: wc.emoji_name ?? undefined
                })
            )
        } : undefined,
        discoverySplash: payload.guild.discovery_splash ? bot.utils.iconHashToBigInt(payload.guild.discovery_splash) : undefined,
        joinedAt: payload.guild.joined_at ? Date.parse(payload.guild.joined_at) : undefined,
        memberCount: payload.guild.member_count ?? 0,
        shardId: payload.shardId,
        icon: payload.guild.icon ? bot.utils.iconHashToBigInt(payload.guild.icon) : undefined,
        banner: payload.guild.banner ? bot.utils.iconHashToBigInt(payload.guild.banner) : undefined,
        splash: payload.guild.splash ? bot.utils.iconHashToBigInt(payload.guild.splash) : undefined,
        channels: new Collection(payload.guild.channels?.map((channel)=>{
            const result = bot.transformers.channel(bot, {
                channel,
                guildId
            });
            return [
                result.id,
                result
            ];
        })),
        roles: new Collection(payload.guild.roles?.map((role)=>{
            const result = bot.transformers.role(bot, {
                role,
                guildId
            });
            return [
                result.id,
                result
            ];
        })),
        emojis: new Collection((payload.guild.emojis || []).map((emoji)=>{
            const em = bot.transformers.emoji(bot, emoji);
            return [
                em.id,
                em
            ];
        })),
        voiceStates: new Collection((payload.guild.voice_states || []).map((vs)=>bot.transformers.voiceState(bot, {
                voiceState: vs,
                guildId
            })
        ).map((vs)=>[
                vs.userId,
                vs
            ]
        )),
        id: guildId,
        // WEIRD EDGE CASE WITH BOT CREATED SERVERS
        ownerId: payload.guild.owner_id ? bot.transformers.snowflake(payload.guild.owner_id) : 0n,
        permissions: payload.guild.permissions ? bot.transformers.snowflake(payload.guild.permissions) : 0n,
        afkChannelId: payload.guild.afk_channel_id ? bot.transformers.snowflake(payload.guild.afk_channel_id) : undefined,
        widgetChannelId: payload.guild.widget_channel_id ? bot.transformers.snowflake(payload.guild.widget_channel_id) : undefined,
        applicationId: payload.guild.application_id ? bot.transformers.snowflake(payload.guild.application_id) : undefined,
        systemChannelId: payload.guild.system_channel_id ? bot.transformers.snowflake(payload.guild.system_channel_id) : undefined,
        rulesChannelId: payload.guild.rules_channel_id ? bot.transformers.snowflake(payload.guild.rules_channel_id) : undefined,
        publicUpdatesChannelId: payload.guild.public_updates_channel_id ? bot.transformers.snowflake(payload.guild.public_updates_channel_id) : undefined,
        premiumProgressBarEnabled: payload.guild.premium_progress_bar_enabled
    };
    return guild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEVtb2ppIH0gZnJvbSBcIi4uL3RyYW5zZm9ybWVycy9lbW9qaS50c1wiO1xuaW1wb3J0IHsgQm90IH0gZnJvbSBcIi4uL2JvdC50c1wiO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gXCIuLi91dGlsL2NvbGxlY3Rpb24udHNcIjtcbmltcG9ydCB7IERpc2NvcmRHdWlsZCB9IGZyb20gXCIuLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBPcHRpb25hbGl6ZSB9IGZyb20gXCIuLi90eXBlcy9zaGFyZWQudHNcIjtcbmltcG9ydCB7IEd1aWxkVG9nZ2xlcyB9IGZyb20gXCIuL3RvZ2dsZXMvZ3VpbGQudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUd1aWxkKGJvdDogQm90LCBwYXlsb2FkOiB7IGd1aWxkOiBEaXNjb3JkR3VpbGQgfSAmIHsgc2hhcmRJZDogbnVtYmVyIH0pIHtcbiAgY29uc3QgZ3VpbGRJZCA9IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZ3VpbGQuaWQpO1xuXG4gIGNvbnN0IGd1aWxkID0ge1xuICAgIGFma1RpbWVvdXQ6IHBheWxvYWQuZ3VpbGQuYWZrX3RpbWVvdXQsXG4gICAgYXBwcm94aW1hdGVNZW1iZXJDb3VudDogcGF5bG9hZC5ndWlsZC5hcHByb3hpbWF0ZV9tZW1iZXJfY291bnQsXG4gICAgYXBwcm94aW1hdGVQcmVzZW5jZUNvdW50OiBwYXlsb2FkLmd1aWxkLmFwcHJveGltYXRlX3ByZXNlbmNlX2NvdW50LFxuICAgIGRlZmF1bHRNZXNzYWdlTm90aWZpY2F0aW9uczogcGF5bG9hZC5ndWlsZC5kZWZhdWx0X21lc3NhZ2Vfbm90aWZpY2F0aW9ucyxcbiAgICBkZXNjcmlwdGlvbjogcGF5bG9hZC5ndWlsZC5kZXNjcmlwdGlvbixcbiAgICBleHBsaWNpdENvbnRlbnRGaWx0ZXI6IHBheWxvYWQuZ3VpbGQuZXhwbGljaXRfY29udGVudF9maWx0ZXIsXG4gICAgdG9nZ2xlczogbmV3IEd1aWxkVG9nZ2xlcyhwYXlsb2FkLmd1aWxkKSxcbiAgICBtYXhNZW1iZXJzOiBwYXlsb2FkLmd1aWxkLm1heF9tZW1iZXJzLFxuICAgIG1heFByZXNlbmNlczogcGF5bG9hZC5ndWlsZC5tYXhfcHJlc2VuY2VzID8/IHVuZGVmaW5lZCxcbiAgICBtYXhWaWRlb0NoYW5uZWxVc2VyczogcGF5bG9hZC5ndWlsZC5tYXhfdmlkZW9fY2hhbm5lbF91c2VycyxcbiAgICBtZmFMZXZlbDogcGF5bG9hZC5ndWlsZC5tZmFfbGV2ZWwsXG4gICAgbmFtZTogcGF5bG9hZC5ndWlsZC5uYW1lLFxuICAgIG5zZndMZXZlbDogcGF5bG9hZC5ndWlsZC5uc2Z3X2xldmVsLFxuICAgIHByZWZlcnJlZExvY2FsZTogcGF5bG9hZC5ndWlsZC5wcmVmZXJyZWRfbG9jYWxlLFxuICAgIHByZW1pdW1TdWJzY3JpcHRpb25Db3VudDogcGF5bG9hZC5ndWlsZC5wcmVtaXVtX3N1YnNjcmlwdGlvbl9jb3VudCxcbiAgICBwcmVtaXVtVGllcjogcGF5bG9hZC5ndWlsZC5wcmVtaXVtX3RpZXIsXG4gICAgc3RhZ2VJbnN0YW5jZXM6IHBheWxvYWQuZ3VpbGQuc3RhZ2VfaW5zdGFuY2VzPy5tYXAoKHNpKSA9PiAoe1xuICAgICAgLyoqIFRoZSBpZCBvZiB0aGlzIFN0YWdlIGluc3RhbmNlICovXG4gICAgICBpZDogYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2Uoc2kuaWQpLFxuICAgICAgLyoqIFRoZSBndWlsZCBpZCBvZiB0aGUgYXNzb2NpYXRlZCBTdGFnZSBjaGFubmVsICovXG4gICAgICBndWlsZElkLFxuICAgICAgLyoqIFRoZSBpZCBvZiB0aGUgYXNzb2NpYXRlZCBTdGFnZSBjaGFubmVsICovXG4gICAgICBjaGFubmVsSWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHNpLmNoYW5uZWxfaWQpLFxuICAgICAgLyoqIFRoZSB0b3BpYyBvZiB0aGUgU3RhZ2UgaW5zdGFuY2UgKDEtMTIwIGNoYXJhY3RlcnMpICovXG4gICAgICB0b3BpYzogc2kudG9waWMsXG4gICAgfSkpLFxuICAgIHN5c3RlbUNoYW5uZWxGbGFnczogcGF5bG9hZC5ndWlsZC5zeXN0ZW1fY2hhbm5lbF9mbGFncyxcbiAgICB2YW5pdHlVcmxDb2RlOiBwYXlsb2FkLmd1aWxkLnZhbml0eV91cmxfY29kZSxcbiAgICB2ZXJpZmljYXRpb25MZXZlbDogcGF5bG9hZC5ndWlsZC52ZXJpZmljYXRpb25fbGV2ZWwsXG4gICAgd2VsY29tZVNjcmVlbjogcGF5bG9hZC5ndWlsZC53ZWxjb21lX3NjcmVlblxuICAgICAgPyB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBwYXlsb2FkLmd1aWxkLndlbGNvbWVfc2NyZWVuLmRlc2NyaXB0aW9uID8/IHVuZGVmaW5lZCxcbiAgICAgICAgd2VsY29tZUNoYW5uZWxzOiBwYXlsb2FkLmd1aWxkLndlbGNvbWVfc2NyZWVuLndlbGNvbWVfY2hhbm5lbHMubWFwKCh3YykgPT4gKHtcbiAgICAgICAgICBjaGFubmVsSWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHdjLmNoYW5uZWxfaWQpLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB3Yy5kZXNjcmlwdGlvbixcbiAgICAgICAgICBlbW9qaUlkOiB3Yy5lbW9qaV9pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHdjLmVtb2ppX2lkKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBlbW9qaU5hbWU6IHdjLmVtb2ppX25hbWUgPz8gdW5kZWZpbmVkLFxuICAgICAgICB9KSksXG4gICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBkaXNjb3ZlcnlTcGxhc2g6IHBheWxvYWQuZ3VpbGQuZGlzY292ZXJ5X3NwbGFzaFxuICAgICAgPyBib3QudXRpbHMuaWNvbkhhc2hUb0JpZ0ludChwYXlsb2FkLmd1aWxkLmRpc2NvdmVyeV9zcGxhc2gpXG4gICAgICA6IHVuZGVmaW5lZCxcblxuICAgIGpvaW5lZEF0OiBwYXlsb2FkLmd1aWxkLmpvaW5lZF9hdCA/IERhdGUucGFyc2UocGF5bG9hZC5ndWlsZC5qb2luZWRfYXQpIDogdW5kZWZpbmVkLFxuICAgIG1lbWJlckNvdW50OiBwYXlsb2FkLmd1aWxkLm1lbWJlcl9jb3VudCA/PyAwLFxuICAgIHNoYXJkSWQ6IHBheWxvYWQuc2hhcmRJZCxcbiAgICBpY29uOiBwYXlsb2FkLmd1aWxkLmljb24gPyBib3QudXRpbHMuaWNvbkhhc2hUb0JpZ0ludChwYXlsb2FkLmd1aWxkLmljb24pIDogdW5kZWZpbmVkLFxuICAgIGJhbm5lcjogcGF5bG9hZC5ndWlsZC5iYW5uZXIgPyBib3QudXRpbHMuaWNvbkhhc2hUb0JpZ0ludChwYXlsb2FkLmd1aWxkLmJhbm5lcikgOiB1bmRlZmluZWQsXG4gICAgc3BsYXNoOiBwYXlsb2FkLmd1aWxkLnNwbGFzaCA/IGJvdC51dGlscy5pY29uSGFzaFRvQmlnSW50KHBheWxvYWQuZ3VpbGQuc3BsYXNoKSA6IHVuZGVmaW5lZCxcbiAgICBjaGFubmVsczogbmV3IENvbGxlY3Rpb24oXG4gICAgICBwYXlsb2FkLmd1aWxkLmNoYW5uZWxzPy5tYXAoKGNoYW5uZWwpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYm90LnRyYW5zZm9ybWVycy5jaGFubmVsKGJvdCwgeyBjaGFubmVsLCBndWlsZElkIH0pO1xuICAgICAgICByZXR1cm4gW3Jlc3VsdC5pZCwgcmVzdWx0XTtcbiAgICAgIH0pLFxuICAgICksXG4gICAgcm9sZXM6IG5ldyBDb2xsZWN0aW9uKFxuICAgICAgcGF5bG9hZC5ndWlsZC5yb2xlcz8ubWFwKChyb2xlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGJvdC50cmFuc2Zvcm1lcnMucm9sZShib3QsIHsgcm9sZSwgZ3VpbGRJZCB9KTtcbiAgICAgICAgcmV0dXJuIFtyZXN1bHQuaWQsIHJlc3VsdF07XG4gICAgICB9KSxcbiAgICApLFxuICAgIGVtb2ppczogbmV3IENvbGxlY3Rpb24oXG4gICAgICAocGF5bG9hZC5ndWlsZC5lbW9qaXMgfHwgW10pLm1hcCgoZW1vamkpID0+IHtcbiAgICAgICAgY29uc3QgZW06IEVtb2ppID0gYm90LnRyYW5zZm9ybWVycy5lbW9qaShib3QsIGVtb2ppKTtcbiAgICAgICAgcmV0dXJuIFtlbS5pZCEsIGVtXTtcbiAgICAgIH0pLFxuICAgICksXG4gICAgdm9pY2VTdGF0ZXM6IG5ldyBDb2xsZWN0aW9uKFxuICAgICAgKHBheWxvYWQuZ3VpbGQudm9pY2Vfc3RhdGVzIHx8IFtdKVxuICAgICAgICAubWFwKCh2cykgPT4gYm90LnRyYW5zZm9ybWVycy52b2ljZVN0YXRlKGJvdCwgeyB2b2ljZVN0YXRlOiB2cywgZ3VpbGRJZCB9KSlcbiAgICAgICAgLm1hcCgodnMpID0+IFt2cy51c2VySWQsIHZzXSksXG4gICAgKSxcblxuICAgIGlkOiBndWlsZElkLFxuICAgIC8vIFdFSVJEIEVER0UgQ0FTRSBXSVRIIEJPVCBDUkVBVEVEIFNFUlZFUlNcbiAgICBvd25lcklkOiBwYXlsb2FkLmd1aWxkLm93bmVyX2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZC5vd25lcl9pZCkgOiAwbixcbiAgICBwZXJtaXNzaW9uczogcGF5bG9hZC5ndWlsZC5wZXJtaXNzaW9ucyA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZ3VpbGQucGVybWlzc2lvbnMpIDogMG4sXG4gICAgYWZrQ2hhbm5lbElkOiBwYXlsb2FkLmd1aWxkLmFma19jaGFubmVsX2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZC5hZmtfY2hhbm5lbF9pZCkgOiB1bmRlZmluZWQsXG4gICAgd2lkZ2V0Q2hhbm5lbElkOiBwYXlsb2FkLmd1aWxkLndpZGdldF9jaGFubmVsX2lkXG4gICAgICA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZ3VpbGQud2lkZ2V0X2NoYW5uZWxfaWQpXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBhcHBsaWNhdGlvbklkOiBwYXlsb2FkLmd1aWxkLmFwcGxpY2F0aW9uX2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UocGF5bG9hZC5ndWlsZC5hcHBsaWNhdGlvbl9pZCkgOiB1bmRlZmluZWQsXG4gICAgc3lzdGVtQ2hhbm5lbElkOiBwYXlsb2FkLmd1aWxkLnN5c3RlbV9jaGFubmVsX2lkXG4gICAgICA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZ3VpbGQuc3lzdGVtX2NoYW5uZWxfaWQpXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBydWxlc0NoYW5uZWxJZDogcGF5bG9hZC5ndWlsZC5ydWxlc19jaGFubmVsX2lkXG4gICAgICA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZ3VpbGQucnVsZXNfY2hhbm5lbF9pZClcbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHB1YmxpY1VwZGF0ZXNDaGFubmVsSWQ6IHBheWxvYWQuZ3VpbGQucHVibGljX3VwZGF0ZXNfY2hhbm5lbF9pZFxuICAgICAgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmd1aWxkLnB1YmxpY191cGRhdGVzX2NoYW5uZWxfaWQpXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBwcmVtaXVtUHJvZ3Jlc3NCYXJFbmFibGVkOiBwYXlsb2FkLmd1aWxkLnByZW1pdW1fcHJvZ3Jlc3NfYmFyX2VuYWJsZWQsXG4gIH07XG5cbiAgcmV0dXJuIGd1aWxkIGFzIE9wdGlvbmFsaXplPHR5cGVvZiBndWlsZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpbGQgZXh0ZW5kcyBSZXR1cm5UeXBlPHR5cGVvZiB0cmFuc2Zvcm1HdWlsZD4ge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxTQUFTLFVBQVUsUUFBUSx1QkFBdUIsQ0FBQztBQUduRCxTQUFTLFlBQVksUUFBUSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLFNBQVMsY0FBYyxDQUFDLEdBQVEs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