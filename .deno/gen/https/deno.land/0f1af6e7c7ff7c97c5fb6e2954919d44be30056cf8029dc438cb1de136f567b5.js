import { isGetMessagesAfter, isGetMessagesAround, isGetMessagesBefore, isGetMessagesLimit } from "../helpers/messages/getMessages.ts";
/** https://discord.com/developers/docs/reference#api-reference-base-url */ export const BASE_URL = "https://discord.com/api";
/** https://discord.com/developers/docs/reference#api-versioning-api-versions */ export const API_VERSION = 10;
/** https://discord.com/developers/docs/topics/gateway#gateways-gateway-versions */ export const GATEWAY_VERSION = 10;
// TODO: update this version
/** https://github.com/discordeno/discordeno/releases */ export const DISCORDENO_VERSION = "13.0.0-rc45";
/** https://discord.com/developers/docs/reference#user-agent */ export const USER_AGENT = `DiscordBot (https://github.com/discordeno/discordeno, v${DISCORDENO_VERSION})`;
/** https://discord.com/developers/docs/reference#image-formatting-image-base-url */ export const IMAGE_BASE_URL = "https://cdn.discordapp.com";
// This can be modified by big brain bots and use a proxy
export const baseEndpoints = {
    BASE_URL: `${BASE_URL}/v${API_VERSION}`,
    CDN_URL: IMAGE_BASE_URL
};
export const routes = {
    GATEWAY_BOT: ()=>{
        return `/gateway/bot`;
    },
    // Channel Endpoints
    CHANNEL: (channelId)=>{
        return `/channels/${channelId}`;
    },
    CHANNEL_MESSAGE: (channelId, messageId)=>{
        return `/channels/${channelId}/messages/${messageId}`;
    },
    CHANNEL_MESSAGES: (channelId, options)=>{
        let url = `/channels/${channelId}/messages?`;
        if (options) {
            if (isGetMessagesAfter(options) && options.after) url += `after=${options.after}`;
            if (isGetMessagesBefore(options) && options.before) url += `&before=${options.before}`;
            if (isGetMessagesAround(options) && options.around) url += `&around=${options.around}`;
            if (isGetMessagesLimit(options) && options.limit) url += `&limit=${options.limit}`;
        }
        return url;
    },
    CHANNEL_PIN: (channelId, messageId)=>{
        return `/channels/${channelId}/pins/${messageId}`;
    },
    CHANNEL_PINS: (channelId)=>{
        return `/channels/${channelId}/pins`;
    },
    CHANNEL_BULK_DELETE: (channelId)=>{
        return `/channels/${channelId}/messages/bulk-delete`;
    },
    CHANNEL_INVITES: (channelId)=>{
        return `/channels/${channelId}/invites`;
    },
    CHANNEL_WEBHOOKS: (channelId)=>{
        return `/channels/${channelId}/webhooks`;
    },
    CHANNEL_MESSAGE_REACTION_ME: (channelId, messageId, emoji)=>{
        return `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/@me`;
    },
    CHANNEL_MESSAGE_REACTION_USER: (channelId, messageId, emoji, userId)=>{
        return `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}/${userId}`;
    },
    CHANNEL_MESSAGE_REACTIONS: (channelId, messageId)=>{
        return `/channels/${channelId}/messages/${messageId}/reactions`;
    },
    CHANNEL_MESSAGE_REACTION: (channelId, messageId, emoji, options)=>{
        let url = `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}?`;
        if (options) {
            if (options.after) url += `after=${options.after}`;
            if (options.limit) url += `&limit=${options.limit}`;
        }
        return url;
    },
    CHANNEL_FOLLOW: (channelId)=>{
        return `/channels/${channelId}/followers`;
    },
    CHANNEL_MESSAGE_CROSSPOST: (channelId, messageId)=>{
        return `/channels/${channelId}/messages/${messageId}/crosspost`;
    },
    CHANNEL_OVERWRITE: (channelId, overwriteId)=>{
        return `/channels/${channelId}/permissions/${overwriteId}`;
    },
    // Bots SHALL NOT use this endpoint but they can
    CHANNEL_TYPING: (channelId)=>{
        return `/channels/${channelId}/typing`;
    },
    // Thread Endpoints
    THREAD_START_PUBLIC: (channelId, messageId)=>{
        return `/channels/${channelId}/messages/${messageId}/threads`;
    },
    THREAD_START_PRIVATE: (channelId)=>{
        return `/channels/${channelId}/threads`;
    },
    THREAD_ACTIVE: (guildId)=>{
        return `/guilds/${guildId}/threads/active`;
    },
    THREAD_MEMBERS: (channelId)=>{
        return `/channels/${channelId}/thread-members`;
    },
    THREAD_ME: (channelId)=>{
        return `/channels/${channelId}/thread-members/@me`;
    },
    THREAD_USER: (channelId, userId)=>{
        return `/channels/${channelId}/thread-members/${userId}`;
    },
    THREAD_ARCHIVED: (channelId)=>{
        return `/channels/${channelId}/threads/archived`;
    },
    THREAD_ARCHIVED_PUBLIC: (channelId, options)=>{
        let url = `/channels/${channelId}/threads/archived/public?`;
        if (options) {
            if (options.before) url += `before=${new Date(options.before).toISOString()}`;
            if (options.limit) url += `&limit=${options.limit}`;
        }
        return url;
    },
    THREAD_ARCHIVED_PRIVATE: (channelId, options)=>{
        let url = `/channels/${channelId}/threads/archived/private?`;
        if (options) {
            if (options.before) url += `before=${new Date(options.before).toISOString()}`;
            if (options.limit) url += `&limit=${options.limit}`;
        }
        return url;
    },
    THREAD_ARCHIVED_PRIVATE_JOINED: (channelId, options)=>{
        let url = `/channels/${channelId}/users/@me/threads/archived/private?`;
        if (options) {
            if (options.before) url += `before=${new Date(options.before).toISOString()}`;
            if (options.limit) url += `&limit=${options.limit}`;
        }
        return url;
    },
    // Thread -> Forum Endpoints
    FORUM_START: (channelId)=>{
        return `/channels/${channelId}/threads?has_message=true`;
    },
    // Guild Endpoints
    GUILD: (guildId, withCounts)=>{
        let url = `/guilds/${guildId}?`;
        if (withCounts !== undefined) {
            url += `with_counts=${withCounts}`;
        }
        return url;
    },
    GUILDS: ()=>{
        return `/guilds`;
    },
    GUILD_AUDIT_LOGS: (guildId, options)=>{
        let url = `/guilds/${guildId}/audit-logs?`;
        if (options) {
            if (options.actionType) url += `action_type=${options.actionType}`;
            if (options.before) url += `&before=${options.before}`;
            if (options.limit) url += `&limit=${options.limit}`;
            if (options.userId) url += `&user_id=${options.userId}`;
        }
        return url;
    },
    GUILD_BAN: (guildId, userId)=>{
        return `/guilds/${guildId}/bans/${userId}`;
    },
    GUILD_BANS: (guildId, options)=>{
        let url = `/guilds/${guildId}/bans?`;
        if (options) {
            if (options.limit) url += `limit=${options.limit}`;
            if (options.after) url += `&after=${options.after}`;
            if (options.before) url += `&before=${options.before}`;
        }
        return url;
    },
    // TODO: move this away
    GUILD_BANNER: (guildId, icon)=>{
        return `${baseEndpoints.CDN_URL}/banners/${guildId}/${icon}`;
    },
    GUILD_CHANNELS: (guildId)=>{
        return `/guilds/${guildId}/channels`;
    },
    GUILD_WIDGET: (guildId)=>{
        return `/guilds/${guildId}/widget`;
    },
    GUILD_WIDGET_JSON: (guildId)=>{
        return `/guilds/${guildId}/widget.json`;
    },
    GUILD_WIDGET_IMAGE: (guildId, style)=>{
        let url = `/guilds/${guildId}/widget.png?`;
        if (style) {
            url += `style=${style}`;
        }
        return url;
    },
    GUILD_EMOJI: (guildId, emojiId)=>{
        return `/guilds/${guildId}/emojis/${emojiId}`;
    },
    GUILD_EMOJIS: (guildId)=>{
        return `/guilds/${guildId}/emojis`;
    },
    // TODO: move this away
    GUILD_ICON: (guildId, icon)=>{
        return `${baseEndpoints.CDN_URL}/icons/${guildId}/${icon}`;
    },
    GUILD_INTEGRATION: (guildId, integrationId)=>{
        return `/guilds/${guildId}/integrations/${integrationId}`;
    },
    GUILD_INTEGRATION_SYNC: (guildId, integrationId)=>{
        return `/guilds/${guildId}/integrations/${integrationId}/sync`;
    },
    GUILD_INTEGRATIONS: (guildId)=>{
        return `/guilds/${guildId}/integrations?include_applications=true`;
    },
    GUILD_INVITES: (guildId)=>{
        return `/guilds/${guildId}/invites`;
    },
    GUILD_LEAVE: (guildId)=>{
        return `/users/@me/guilds/${guildId}`;
    },
    GUILD_MEMBER: (guildId, userId)=>{
        return `/guilds/${guildId}/members/${userId}`;
    },
    GUILD_MEMBERS: (guildId, options)=>{
        let url = `/guilds/${guildId}/members?`;
        if (options !== undefined) {
            if (options.limit) url += `limit=${options.limit}`;
            if (options.after) url += `&after=${options.after}`;
        }
        return url;
    },
    GUILD_MEMBER_ROLE: (guildId, memberId, roleId)=>{
        return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
    },
    GUILD_MEMBERS_SEARCH: (guildId, query, options)=>{
        let url = `/guilds/${guildId}/members/search?query=${encodeURIComponent(query)}`;
        if (options) {
            if (options.limit !== undefined) url += `&limit=${options.limit}`;
        }
        return url;
    },
    GUILD_PRUNE: (guildId, options)=>{
        let url = `/guilds/${guildId}/prune?`;
        if (options) {
            if (options.days) url += `days=${options.days}`;
            if (options.includeRoles) url += `&include_roles=${options.includeRoles}`;
        }
        return url;
    },
    GUILD_REGIONS: (guildId)=>{
        return `/guilds/${guildId}/regions`;
    },
    GUILD_ROLE: (guildId, roleId)=>{
        return `/guilds/${guildId}/roles/${roleId}`;
    },
    GUILD_ROLES: (guildId)=>{
        return `/guilds/${guildId}/roles`;
    },
    // TODO: move this away
    GUILD_SPLASH: (guildId, icon)=>{
        return `${baseEndpoints.CDN_URL}/splashes/${guildId}/${icon}`;
    },
    GUILD_VANITY_URL: (guildId)=>{
        return `/guilds/${guildId}/vanity-url`;
    },
    GUILD_WEBHOOKS: (guildId)=>{
        return `/guilds/${guildId}/webhooks`;
    },
    TEMPLATE: (code)=>{
        return `/guilds/templates/${code}`;
    },
    GUILD_TEMPLATE: (guildId, code)=>{
        return `/guilds/${guildId}/templates/${code}`;
    },
    GUILD_TEMPLATES: (guildId)=>{
        return `/guilds/${guildId}/templates`;
    },
    GUILD_PREVIEW: (guildId)=>{
        return `/guilds/${guildId}/preview`;
    },
    UPDATE_VOICE_STATE: (guildId, userId)=>{
        return `/guilds/${guildId}/voice-states/${userId ?? "@me"}`;
    },
    GUILD_WELCOME_SCREEN: (guildId)=>{
        return `/guilds/${guildId}/welcome-screen`;
    },
    GUILD_SCHEDULED_EVENTS: (guildId, withUserCount)=>{
        let url = `/guilds/${guildId}/scheduled-events?`;
        if (withUserCount !== undefined) {
            url += `with_user_count=${withUserCount}`;
        }
        return url;
    },
    GUILD_SCHEDULED_EVENT: (guildId, eventId, withUserCount)=>{
        let url = `/guilds/${guildId}/scheduled-events/${eventId}`;
        if (withUserCount !== undefined) {
            url += `with_user_count=${withUserCount}`;
        }
        return url;
    },
    GUILD_SCHEDULED_EVENT_USERS: (guildId, eventId, options)=>{
        let url = `/guilds/${guildId}/scheduled-events/${eventId}/users?`;
        if (options) {
            if (options.limit) url += `limit=${options.limit}`;
            if (options.withMember) url += `&with_member=${options.withMember}`;
            if (options.after) url += `&after=${options.after}`;
            if (options.before) url += `&before=${options.before}`;
        }
        return url;
    },
    // Voice
    VOICE_REGIONS: ()=>{
        return `/voice/regions`;
    },
    INVITE: (inviteCode, options)=>{
        let url = `/invites/${inviteCode}?`;
        if (options) {
            if (options.withCounts) url += `with_counts=${options.withCounts}`;
            if (options.withExpiration) url += `&with_expiration=${options.withExpiration}`;
            if (options.scheduledEventId) url += `&guild_scheduled_event_id=${options.scheduledEventId}`;
        }
        return url;
    },
    WEBHOOK: (webhookId, token, options)=>{
        let url = `/webhooks/${webhookId}/${token}?`;
        if (options) {
            if (options?.wait !== undefined) url += `wait=${options.wait}`;
            if (options.threadId) url += `threadId=${options.threadId}`;
        }
        return url;
    },
    WEBHOOK_ID: (webhookId)=>{
        return `/webhooks/${webhookId}`;
    },
    WEBHOOK_MESSAGE: (webhookId, token, messageId, options)=>{
        let url = `/webhooks/${webhookId}/${token}/messages/${messageId}?`;
        if (options) {
            if (options.threadId) url += `threadId=${options.threadId}`;
        }
        return url;
    },
    WEBHOOK_MESSAGE_ORIGINAL: (webhookId, token, options)=>{
        let url = `/webhooks/${webhookId}/${token}/messages/@original?`;
        if (options) {
            if (options.threadId) url += `threadId=${options.threadId}`;
        }
        return url;
    },
    WEBHOOK_SLACK: (webhookId, token)=>{
        return `/webhooks/${webhookId}/${token}/slack`;
    },
    WEBHOOK_GITHUB: (webhookId, token)=>{
        return `/webhooks/${webhookId}/${token}/github`;
    },
    // Application Endpoints
    COMMANDS: (applicationId)=>{
        return `/applications/${applicationId}/commands`;
    },
    COMMANDS_GUILD: (applicationId, guildId)=>{
        return `/applications/${applicationId}/guilds/${guildId}/commands`;
    },
    COMMANDS_PERMISSIONS: (applicationId, guildId)=>{
        return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
    },
    COMMANDS_PERMISSION: (applicationId, guildId, commandId)=>{
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
    },
    COMMANDS_ID: (applicationId, commandId, withLocalizations)=>{
        let url = `/applications/${applicationId}/commands/${commandId}?`;
        if (withLocalizations !== undefined) {
            url += `withLocalizations=${withLocalizations}`;
        }
        return url;
    },
    COMMANDS_GUILD_ID: (applicationId, guildId, commandId, withLocalizations)=>{
        let url = `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}?`;
        if (withLocalizations !== undefined) {
            url += `with_localizations=${withLocalizations}`;
        }
        return url;
    },
    // Interaction Endpoints
    INTERACTION_ID_TOKEN: (interactionId, token)=>{
        return `/interactions/${interactionId}/${token}/callback`;
    },
    INTERACTION_ORIGINAL_ID_TOKEN: (interactionId, token)=>{
        return `/webhooks/${interactionId}/${token}/messages/@original`;
    },
    INTERACTION_ID_TOKEN_MESSAGE_ID: (applicationId, token, messageId)=>{
        return `/webhooks/${applicationId}/${token}/messages/${messageId}`;
    },
    // User endpoints
    USER: (userId)=>{
        return `/users/${userId}`;
    },
    USER_BOT: ()=>{
        return `/users/@me`;
    },
    USER_GUILDS: ()=>{
        return `/@me/guilds`;
    },
    // TODO: move this away
    USER_AVATAR: (userId, icon)=>{
        return `${baseEndpoints.CDN_URL}/avatars/${userId}/${icon}`;
    },
    // TODO: move this away
    USER_DEFAULT_AVATAR: (icon)=>{
        return `${baseEndpoints.CDN_URL}/embed/avatars/${icon}.png`;
    },
    USER_DM: ()=>{
        return `/users/@me/channels`;
    },
    USER_CONNECTIONS: ()=>{
        return `/users/@me/connections`;
    },
    USER_NICK: (guildId)=>{
        return `/guilds/${guildId}/members/@me`;
    },
    // Discovery Endpoints
    DISCOVERY_CATEGORIES: ()=>{
        return `/discovery/categories`;
    },
    DISCOVERY_VALID_TERM: (term)=>{
        return `/discovery/valid-term?term=${term}`;
    },
    DISCOVERY_METADATA: (guildId)=>{
        return `/guilds/${guildId}/discovery-metadata`;
    },
    DISCOVERY_SUBCATEGORY: (guildId, categoryId)=>{
        return `/guilds/${guildId}/discovery-categories/${categoryId}`;
    },
    // OAuth2
    OAUTH2_APPLICATION: ()=>{
        return `/oauth2/applications/@me`;
    },
    // Stage instances
    STAGE_INSTANCES: ()=>{
        return `/stage-instances`;
    },
    STAGE_INSTANCE: (channelId)=>{
        return `/stage-instances/${channelId}`;
    },
    // Misc Endpoints
    NITRO_STICKER_PACKS: ()=>{
        return `/sticker-packs`;
    }
};
export const SLASH_COMMANDS_NAME_REGEX = /^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$/u;
export const CONTEXT_MENU_COMMANDS_NAME_REGEX = /^[\w-\s]{1,32}$/;
export const CHANNEL_MENTION_REGEX = /<#[0-9]+>/g;
export const DISCORD_SNOWFLAKE_REGEX = /^(?<id>\d{17,19})$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0QXJjaGl2ZWRUaHJlYWRzIH0gZnJvbSBcIi4uL2hlbHBlcnMvY2hhbm5lbHMvdGhyZWFkcy9nZXRBcmNoaXZlZFRocmVhZHMudHNcIjtcbmltcG9ydCB7IEdldEd1aWxkQXVkaXRMb2cgfSBmcm9tIFwiLi4vaGVscGVycy9ndWlsZHMvZ2V0QXVkaXRMb2dzLnRzXCI7XG5pbXBvcnQgeyBHZXRCYW5zIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ3VpbGRzL2dldEJhbnMudHNcIjtcbmltcG9ydCB7IEdldEd1aWxkUHJ1bmVDb3VudFF1ZXJ5IH0gZnJvbSBcIi4uL2hlbHBlcnMvZ3VpbGRzL2dldFBydW5lQ291bnQudHNcIjtcbmltcG9ydCB7IEdldFNjaGVkdWxlZEV2ZW50VXNlcnMgfSBmcm9tIFwiLi4vaGVscGVycy9ndWlsZHMvc2NoZWR1bGVkRXZlbnRzL2dldFNjaGVkdWxlZEV2ZW50VXNlcnMudHNcIjtcbmltcG9ydCB7IEdldEludml0ZSB9IGZyb20gXCIuLi9oZWxwZXJzL2ludml0ZXMvZ2V0SW52aXRlLnRzXCI7XG5pbXBvcnQgeyBMaXN0R3VpbGRNZW1iZXJzIH0gZnJvbSBcIi4uL2hlbHBlcnMvbWVtYmVycy9nZXRNZW1iZXJzLnRzXCI7XG5pbXBvcnQge1xuICBHZXRNZXNzYWdlc09wdGlvbnMsXG4gIGlzR2V0TWVzc2FnZXNBZnRlcixcbiAgaXNHZXRNZXNzYWdlc0Fyb3VuZCxcbiAgaXNHZXRNZXNzYWdlc0JlZm9yZSxcbiAgaXNHZXRNZXNzYWdlc0xpbWl0LFxufSBmcm9tIFwiLi4vaGVscGVycy9tZXNzYWdlcy9nZXRNZXNzYWdlcy50c1wiO1xuaW1wb3J0IHsgR2V0UmVhY3Rpb25zIH0gZnJvbSBcIi4uL2hlbHBlcnMvbWVzc2FnZXMvZ2V0UmVhY3Rpb25zLnRzXCI7XG5cbi8qKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy9yZWZlcmVuY2UjYXBpLXJlZmVyZW5jZS1iYXNlLXVybCAqL1xuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2Rpc2NvcmQuY29tL2FwaVwiO1xuXG4vKiogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVmZXJlbmNlI2FwaS12ZXJzaW9uaW5nLWFwaS12ZXJzaW9ucyAqL1xuZXhwb3J0IGNvbnN0IEFQSV9WRVJTSU9OID0gMTA7XG5cbi8qKiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3MvZ2F0ZXdheSNnYXRld2F5cy1nYXRld2F5LXZlcnNpb25zICovXG5leHBvcnQgY29uc3QgR0FURVdBWV9WRVJTSU9OID0gMTA7XG5cbi8vIFRPRE86IHVwZGF0ZSB0aGlzIHZlcnNpb25cbi8qKiBodHRwczovL2dpdGh1Yi5jb20vZGlzY29yZGVuby9kaXNjb3JkZW5vL3JlbGVhc2VzICovXG5leHBvcnQgY29uc3QgRElTQ09SREVOT19WRVJTSU9OID0gXCIxMy4wLjAtcmM0NVwiO1xuXG4vKiogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVmZXJlbmNlI3VzZXItYWdlbnQgKi9cbmV4cG9ydCBjb25zdCBVU0VSX0FHRU5UID0gYERpc2NvcmRCb3QgKGh0dHBzOi8vZ2l0aHViLmNvbS9kaXNjb3JkZW5vL2Rpc2NvcmRlbm8sIHYke0RJU0NPUkRFTk9fVkVSU0lPTn0pYDtcblxuLyoqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3JlZmVyZW5jZSNpbWFnZS1mb3JtYXR0aW5nLWltYWdlLWJhc2UtdXJsICovXG5leHBvcnQgY29uc3QgSU1BR0VfQkFTRV9VUkwgPSBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tXCI7XG5cbi8vIFRoaXMgY2FuIGJlIG1vZGlmaWVkIGJ5IGJpZyBicmFpbiBib3RzIGFuZCB1c2UgYSBwcm94eVxuZXhwb3J0IGNvbnN0IGJhc2VFbmRwb2ludHMgPSB7XG4gIEJBU0VfVVJMOiBgJHtCQVNFX1VSTH0vdiR7QVBJX1ZFUlNJT059YCxcbiAgQ0ROX1VSTDogSU1BR0VfQkFTRV9VUkwsXG59O1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBHQVRFV0FZX0JPVDogKCkgPT4ge1xuICAgIHJldHVybiBgL2dhdGV3YXkvYm90YDtcbiAgfSxcblxuICAvLyBDaGFubmVsIEVuZHBvaW50c1xuICBDSEFOTkVMOiAoY2hhbm5lbElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH1gO1xuICB9LFxuICBDSEFOTkVMX01FU1NBR0U6IChjaGFubmVsSWQ6IGJpZ2ludCwgbWVzc2FnZUlkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vbWVzc2FnZXMvJHttZXNzYWdlSWR9YDtcbiAgfSxcbiAgQ0hBTk5FTF9NRVNTQUdFUzogKGNoYW5uZWxJZDogYmlnaW50LCBvcHRpb25zPzogR2V0TWVzc2FnZXNPcHRpb25zKSA9PiB7XG4gICAgbGV0IHVybCA9IGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzP2A7XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKGlzR2V0TWVzc2FnZXNBZnRlcihvcHRpb25zKSAmJiBvcHRpb25zLmFmdGVyKSB1cmwgKz0gYGFmdGVyPSR7b3B0aW9ucy5hZnRlcn1gO1xuICAgICAgaWYgKGlzR2V0TWVzc2FnZXNCZWZvcmUob3B0aW9ucykgJiYgb3B0aW9ucy5iZWZvcmUpIHVybCArPSBgJmJlZm9yZT0ke29wdGlvbnMuYmVmb3JlfWA7XG4gICAgICBpZiAoaXNHZXRNZXNzYWdlc0Fyb3VuZChvcHRpb25zKSAmJiBvcHRpb25zLmFyb3VuZCkgdXJsICs9IGAmYXJvdW5kPSR7b3B0aW9ucy5hcm91bmR9YDtcbiAgICAgIGlmIChpc0dldE1lc3NhZ2VzTGltaXQob3B0aW9ucykgJiYgb3B0aW9ucy5saW1pdCkgdXJsICs9IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfSxcbiAgQ0hBTk5FTF9QSU46IChjaGFubmVsSWQ6IGJpZ2ludCwgbWVzc2FnZUlkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vcGlucy8ke21lc3NhZ2VJZH1gO1xuICB9LFxuICBDSEFOTkVMX1BJTlM6IChjaGFubmVsSWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9waW5zYDtcbiAgfSxcbiAgQ0hBTk5FTF9CVUxLX0RFTEVURTogKGNoYW5uZWxJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzL2J1bGstZGVsZXRlYDtcbiAgfSxcbiAgQ0hBTk5FTF9JTlZJVEVTOiAoY2hhbm5lbElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vaW52aXRlc2A7XG4gIH0sXG4gIENIQU5ORUxfV0VCSE9PS1M6IChjaGFubmVsSWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS93ZWJob29rc2A7XG4gIH0sXG4gIENIQU5ORUxfTUVTU0FHRV9SRUFDVElPTl9NRTogKGNoYW5uZWxJZDogYmlnaW50LCBtZXNzYWdlSWQ6IGJpZ2ludCwgZW1vamk6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9tZXNzYWdlcy8ke21lc3NhZ2VJZH0vcmVhY3Rpb25zLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGVtb2ppKX0vQG1lYDtcbiAgfSxcbiAgQ0hBTk5FTF9NRVNTQUdFX1JFQUNUSU9OX1VTRVI6IChjaGFubmVsSWQ6IGJpZ2ludCwgbWVzc2FnZUlkOiBiaWdpbnQsIGVtb2ppOiBzdHJpbmcsIHVzZXJJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzLyR7bWVzc2FnZUlkfS9yZWFjdGlvbnMvJHtlbmNvZGVVUklDb21wb25lbnQoZW1vamkpfS8ke3VzZXJJZH1gO1xuICB9LFxuICBDSEFOTkVMX01FU1NBR0VfUkVBQ1RJT05TOiAoY2hhbm5lbElkOiBiaWdpbnQsIG1lc3NhZ2VJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzLyR7bWVzc2FnZUlkfS9yZWFjdGlvbnNgO1xuICB9LFxuICBDSEFOTkVMX01FU1NBR0VfUkVBQ1RJT046IChjaGFubmVsSWQ6IGJpZ2ludCwgbWVzc2FnZUlkOiBiaWdpbnQsIGVtb2ppOiBzdHJpbmcsIG9wdGlvbnM/OiBHZXRSZWFjdGlvbnMpID0+IHtcbiAgICBsZXQgdXJsID0gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vbWVzc2FnZXMvJHttZXNzYWdlSWR9L3JlYWN0aW9ucy8ke2VuY29kZVVSSUNvbXBvbmVudChlbW9qaSl9P2A7XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuYWZ0ZXIpIHVybCArPSBgYWZ0ZXI9JHtvcHRpb25zLmFmdGVyfWA7XG4gICAgICBpZiAob3B0aW9ucy5saW1pdCkgdXJsICs9IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfSxcbiAgQ0hBTk5FTF9GT0xMT1c6IChjaGFubmVsSWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9mb2xsb3dlcnNgO1xuICB9LFxuICBDSEFOTkVMX01FU1NBR0VfQ1JPU1NQT1NUOiAoY2hhbm5lbElkOiBiaWdpbnQsIG1lc3NhZ2VJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L21lc3NhZ2VzLyR7bWVzc2FnZUlkfS9jcm9zc3Bvc3RgO1xuICB9LFxuICBDSEFOTkVMX09WRVJXUklURTogKGNoYW5uZWxJZDogYmlnaW50LCBvdmVyd3JpdGVJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L3Blcm1pc3Npb25zLyR7b3ZlcndyaXRlSWR9YDtcbiAgfSxcbiAgLy8gQm90cyBTSEFMTCBOT1QgdXNlIHRoaXMgZW5kcG9pbnQgYnV0IHRoZXkgY2FuXG4gIENIQU5ORUxfVFlQSU5HOiAoY2hhbm5lbElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vdHlwaW5nYDtcbiAgfSxcblxuICAvLyBUaHJlYWQgRW5kcG9pbnRzXG4gIFRIUkVBRF9TVEFSVF9QVUJMSUM6IChjaGFubmVsSWQ6IGJpZ2ludCwgbWVzc2FnZUlkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vbWVzc2FnZXMvJHttZXNzYWdlSWR9L3RocmVhZHNgO1xuICB9LFxuICBUSFJFQURfU1RBUlRfUFJJVkFURTogKGNoYW5uZWxJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L3RocmVhZHNgO1xuICB9LFxuICBUSFJFQURfQUNUSVZFOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vdGhyZWFkcy9hY3RpdmVgO1xuICB9LFxuICBUSFJFQURfTUVNQkVSUzogKGNoYW5uZWxJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L3RocmVhZC1tZW1iZXJzYDtcbiAgfSxcbiAgVEhSRUFEX01FOiAoY2hhbm5lbElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vdGhyZWFkLW1lbWJlcnMvQG1lYDtcbiAgfSxcbiAgVEhSRUFEX1VTRVI6IChjaGFubmVsSWQ6IGJpZ2ludCwgdXNlcklkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vdGhyZWFkLW1lbWJlcnMvJHt1c2VySWR9YDtcbiAgfSxcbiAgVEhSRUFEX0FSQ0hJVkVEOiAoY2hhbm5lbElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vdGhyZWFkcy9hcmNoaXZlZGA7XG4gIH0sXG4gIFRIUkVBRF9BUkNISVZFRF9QVUJMSUM6IChjaGFubmVsSWQ6IGJpZ2ludCwgb3B0aW9ucz86IExpc3RBcmNoaXZlZFRocmVhZHMpID0+IHtcbiAgICBsZXQgdXJsID0gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vdGhyZWFkcy9hcmNoaXZlZC9wdWJsaWM/YDtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5iZWZvcmUpIHVybCArPSBgYmVmb3JlPSR7bmV3IERhdGUob3B0aW9ucy5iZWZvcmUpLnRvSVNPU3RyaW5nKCl9YDtcbiAgICAgIGlmIChvcHRpb25zLmxpbWl0KSB1cmwgKz0gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9LFxuICBUSFJFQURfQVJDSElWRURfUFJJVkFURTogKGNoYW5uZWxJZDogYmlnaW50LCBvcHRpb25zPzogTGlzdEFyY2hpdmVkVGhyZWFkcykgPT4ge1xuICAgIGxldCB1cmwgPSBgL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS90aHJlYWRzL2FyY2hpdmVkL3ByaXZhdGU/YDtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5iZWZvcmUpIHVybCArPSBgYmVmb3JlPSR7bmV3IERhdGUob3B0aW9ucy5iZWZvcmUpLnRvSVNPU3RyaW5nKCl9YDtcbiAgICAgIGlmIChvcHRpb25zLmxpbWl0KSB1cmwgKz0gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9LFxuICBUSFJFQURfQVJDSElWRURfUFJJVkFURV9KT0lORUQ6IChjaGFubmVsSWQ6IGJpZ2ludCwgb3B0aW9ucz86IExpc3RBcmNoaXZlZFRocmVhZHMpID0+IHtcbiAgICBsZXQgdXJsID0gYC9jaGFubmVscy8ke2NoYW5uZWxJZH0vdXNlcnMvQG1lL3RocmVhZHMvYXJjaGl2ZWQvcHJpdmF0ZT9gO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmJlZm9yZSkgdXJsICs9IGBiZWZvcmU9JHtuZXcgRGF0ZShvcHRpb25zLmJlZm9yZSkudG9JU09TdHJpbmcoKX1gO1xuICAgICAgaWYgKG9wdGlvbnMubGltaXQpIHVybCArPSBgJmxpbWl0PSR7b3B0aW9ucy5saW1pdH1gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH0sXG5cbiAgLy8gVGhyZWFkIC0+IEZvcnVtIEVuZHBvaW50c1xuICBGT1JVTV9TVEFSVDogKGNoYW5uZWxJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvY2hhbm5lbHMvJHtjaGFubmVsSWR9L3RocmVhZHM/aGFzX21lc3NhZ2U9dHJ1ZWA7XG4gIH0sXG5cbiAgLy8gR3VpbGQgRW5kcG9pbnRzXG4gIEdVSUxEOiAoZ3VpbGRJZDogYmlnaW50LCB3aXRoQ291bnRzPzogYm9vbGVhbikgPT4ge1xuICAgIGxldCB1cmwgPSBgL2d1aWxkcy8ke2d1aWxkSWR9P2A7XG5cbiAgICBpZiAod2l0aENvdW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB1cmwgKz0gYHdpdGhfY291bnRzPSR7d2l0aENvdW50c31gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH0sXG4gIEdVSUxEUzogKCkgPT4ge1xuICAgIHJldHVybiBgL2d1aWxkc2A7XG4gIH0sXG4gIEdVSUxEX0FVRElUX0xPR1M6IChndWlsZElkOiBiaWdpbnQsIG9wdGlvbnM/OiBHZXRHdWlsZEF1ZGl0TG9nKSA9PiB7XG4gICAgbGV0IHVybCA9IGAvZ3VpbGRzLyR7Z3VpbGRJZH0vYXVkaXQtbG9ncz9gO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmFjdGlvblR5cGUpIHVybCArPSBgYWN0aW9uX3R5cGU9JHtvcHRpb25zLmFjdGlvblR5cGV9YDtcbiAgICAgIGlmIChvcHRpb25zLmJlZm9yZSkgdXJsICs9IGAmYmVmb3JlPSR7b3B0aW9ucy5iZWZvcmV9YDtcbiAgICAgIGlmIChvcHRpb25zLmxpbWl0KSB1cmwgKz0gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YDtcbiAgICAgIGlmIChvcHRpb25zLnVzZXJJZCkgdXJsICs9IGAmdXNlcl9pZD0ke29wdGlvbnMudXNlcklkfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfSxcbiAgR1VJTERfQkFOOiAoZ3VpbGRJZDogYmlnaW50LCB1c2VySWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L2JhbnMvJHt1c2VySWR9YDtcbiAgfSxcbiAgR1VJTERfQkFOUzogKGd1aWxkSWQ6IGJpZ2ludCwgb3B0aW9ucz86IEdldEJhbnMpID0+IHtcbiAgICBsZXQgdXJsID0gYC9ndWlsZHMvJHtndWlsZElkfS9iYW5zP2A7XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMubGltaXQpIHVybCArPSBgbGltaXQ9JHtvcHRpb25zLmxpbWl0fWA7XG4gICAgICBpZiAob3B0aW9ucy5hZnRlcikgdXJsICs9IGAmYWZ0ZXI9JHtvcHRpb25zLmFmdGVyfWA7XG4gICAgICBpZiAob3B0aW9ucy5iZWZvcmUpIHVybCArPSBgJmJlZm9yZT0ke29wdGlvbnMuYmVmb3JlfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfSxcbiAgLy8gVE9ETzogbW92ZSB0aGlzIGF3YXlcbiAgR1VJTERfQkFOTkVSOiAoZ3VpbGRJZDogYmlnaW50LCBpY29uOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7YmFzZUVuZHBvaW50cy5DRE5fVVJMfS9iYW5uZXJzLyR7Z3VpbGRJZH0vJHtpY29ufWA7XG4gIH0sXG4gIEdVSUxEX0NIQU5ORUxTOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vY2hhbm5lbHNgO1xuICB9LFxuICBHVUlMRF9XSURHRVQ6IChndWlsZElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS93aWRnZXRgO1xuICB9LFxuICBHVUlMRF9XSURHRVRfSlNPTjogKGd1aWxkSWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3dpZGdldC5qc29uYDtcbiAgfSxcbiAgR1VJTERfV0lER0VUX0lNQUdFOiAoXG4gICAgZ3VpbGRJZDogYmlnaW50LFxuICAgIHN0eWxlPzpcbiAgICAgIHwgXCJzaGllbGRcIlxuICAgICAgfCBcImJhbm5lcjFcIlxuICAgICAgfCBcImJhbm5lcjJcIlxuICAgICAgfCBcImJhbm5lcjNcIlxuICAgICAgfCBcImJhbm5lcjRcIixcbiAgKSA9PiB7XG4gICAgbGV0IHVybCA9IGAvZ3VpbGRzLyR7Z3VpbGRJZH0vd2lkZ2V0LnBuZz9gO1xuXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICB1cmwgKz0gYHN0eWxlPSR7c3R5bGV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9LFxuICBHVUlMRF9FTU9KSTogKGd1aWxkSWQ6IGJpZ2ludCwgZW1vamlJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vZW1vamlzLyR7ZW1vamlJZH1gO1xuICB9LFxuICBHVUlMRF9FTU9KSVM6IChndWlsZElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9lbW9qaXNgO1xuICB9LFxuICAvLyBUT0RPOiBtb3ZlIHRoaXMgYXdheVxuICBHVUlMRF9JQ09OOiAoZ3VpbGRJZDogYmlnaW50LCBpY29uOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7YmFzZUVuZHBvaW50cy5DRE5fVVJMfS9pY29ucy8ke2d1aWxkSWR9LyR7aWNvbn1gO1xuICB9LFxuICBHVUlMRF9JTlRFR1JBVElPTjogKGd1aWxkSWQ6IGJpZ2ludCwgaW50ZWdyYXRpb25JZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vaW50ZWdyYXRpb25zLyR7aW50ZWdyYXRpb25JZH1gO1xuICB9LFxuICBHVUlMRF9JTlRFR1JBVElPTl9TWU5DOiAoZ3VpbGRJZDogYmlnaW50LCBpbnRlZ3JhdGlvbklkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9pbnRlZ3JhdGlvbnMvJHtpbnRlZ3JhdGlvbklkfS9zeW5jYDtcbiAgfSxcbiAgR1VJTERfSU5URUdSQVRJT05TOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vaW50ZWdyYXRpb25zP2luY2x1ZGVfYXBwbGljYXRpb25zPXRydWVgO1xuICB9LFxuICBHVUlMRF9JTlZJVEVTOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vaW52aXRlc2A7XG4gIH0sXG4gIEdVSUxEX0xFQVZFOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvdXNlcnMvQG1lL2d1aWxkcy8ke2d1aWxkSWR9YDtcbiAgfSxcbiAgR1VJTERfTUVNQkVSOiAoZ3VpbGRJZDogYmlnaW50LCB1c2VySWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L21lbWJlcnMvJHt1c2VySWR9YDtcbiAgfSxcbiAgR1VJTERfTUVNQkVSUzogKGd1aWxkSWQ6IGJpZ2ludCwgb3B0aW9ucz86IExpc3RHdWlsZE1lbWJlcnMpID0+IHtcbiAgICBsZXQgdXJsID0gYC9ndWlsZHMvJHtndWlsZElkfS9tZW1iZXJzP2A7XG5cbiAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAob3B0aW9ucy5saW1pdCkgdXJsICs9IGBsaW1pdD0ke29wdGlvbnMubGltaXR9YDtcbiAgICAgIGlmIChvcHRpb25zLmFmdGVyKSB1cmwgKz0gYCZhZnRlcj0ke29wdGlvbnMuYWZ0ZXJ9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9LFxuICBHVUlMRF9NRU1CRVJfUk9MRTogKGd1aWxkSWQ6IGJpZ2ludCwgbWVtYmVySWQ6IGJpZ2ludCwgcm9sZUlkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9tZW1iZXJzLyR7bWVtYmVySWR9L3JvbGVzLyR7cm9sZUlkfWA7XG4gIH0sXG4gIEdVSUxEX01FTUJFUlNfU0VBUkNIOiAoZ3VpbGRJZDogYmlnaW50LCBxdWVyeTogc3RyaW5nLCBvcHRpb25zPzogeyBsaW1pdD86IG51bWJlciB9KSA9PiB7XG4gICAgbGV0IHVybCA9IGAvZ3VpbGRzLyR7Z3VpbGRJZH0vbWVtYmVycy9zZWFyY2g/cXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfWA7XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMubGltaXQgIT09IHVuZGVmaW5lZCkgdXJsICs9IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfSxcbiAgR1VJTERfUFJVTkU6IChndWlsZElkOiBiaWdpbnQsIG9wdGlvbnM/OiBHZXRHdWlsZFBydW5lQ291bnRRdWVyeSkgPT4ge1xuICAgIGxldCB1cmwgPSBgL2d1aWxkcy8ke2d1aWxkSWR9L3BydW5lP2A7XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuZGF5cykgdXJsICs9IGBkYXlzPSR7b3B0aW9ucy5kYXlzfWA7XG4gICAgICBpZiAob3B0aW9ucy5pbmNsdWRlUm9sZXMpIHVybCArPSBgJmluY2x1ZGVfcm9sZXM9JHtvcHRpb25zLmluY2x1ZGVSb2xlc31gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH0sXG4gIEdVSUxEX1JFR0lPTlM6IChndWlsZElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9yZWdpb25zYDtcbiAgfSxcbiAgR1VJTERfUk9MRTogKGd1aWxkSWQ6IGJpZ2ludCwgcm9sZUlkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9yb2xlcy8ke3JvbGVJZH1gO1xuICB9LFxuICBHVUlMRF9ST0xFUzogKGd1aWxkSWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3JvbGVzYDtcbiAgfSxcbiAgLy8gVE9ETzogbW92ZSB0aGlzIGF3YXlcbiAgR1VJTERfU1BMQVNIOiAoZ3VpbGRJZDogYmlnaW50LCBpY29uOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7YmFzZUVuZHBvaW50cy5DRE5fVVJMfS9zcGxhc2hlcy8ke2d1aWxkSWR9LyR7aWNvbn1gO1xuICB9LFxuICBHVUlMRF9WQU5JVFlfVVJMOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vdmFuaXR5LXVybGA7XG4gIH0sXG4gIEdVSUxEX1dFQkhPT0tTOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vd2ViaG9va3NgO1xuICB9LFxuICBURU1QTEFURTogKGNvZGU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgL2d1aWxkcy90ZW1wbGF0ZXMvJHtjb2RlfWA7XG4gIH0sXG4gIEdVSUxEX1RFTVBMQVRFOiAoZ3VpbGRJZDogYmlnaW50LCBjb2RlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS90ZW1wbGF0ZXMvJHtjb2RlfWA7XG4gIH0sXG4gIEdVSUxEX1RFTVBMQVRFUzogKGd1aWxkSWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3RlbXBsYXRlc2A7XG4gIH0sXG4gIEdVSUxEX1BSRVZJRVc6IChndWlsZElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9wcmV2aWV3YDtcbiAgfSxcbiAgVVBEQVRFX1ZPSUNFX1NUQVRFOiAoZ3VpbGRJZDogYmlnaW50LCB1c2VySWQ/OiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS92b2ljZS1zdGF0ZXMvJHt1c2VySWQgPz8gXCJAbWVcIn1gO1xuICB9LFxuICBHVUlMRF9XRUxDT01FX1NDUkVFTjogKGd1aWxkSWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL2d1aWxkcy8ke2d1aWxkSWR9L3dlbGNvbWUtc2NyZWVuYDtcbiAgfSxcbiAgR1VJTERfU0NIRURVTEVEX0VWRU5UUzogKGd1aWxkSWQ6IGJpZ2ludCwgd2l0aFVzZXJDb3VudD86IGJvb2xlYW4pID0+IHtcbiAgICBsZXQgdXJsID0gYC9ndWlsZHMvJHtndWlsZElkfS9zY2hlZHVsZWQtZXZlbnRzP2A7XG5cbiAgICBpZiAod2l0aFVzZXJDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB1cmwgKz0gYHdpdGhfdXNlcl9jb3VudD0ke3dpdGhVc2VyQ291bnR9YDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfSxcbiAgR1VJTERfU0NIRURVTEVEX0VWRU5UOiAoZ3VpbGRJZDogYmlnaW50LCBldmVudElkOiBiaWdpbnQsIHdpdGhVc2VyQ291bnQ/OiBib29sZWFuKSA9PiB7XG4gICAgbGV0IHVybCA9IGAvZ3VpbGRzLyR7Z3VpbGRJZH0vc2NoZWR1bGVkLWV2ZW50cy8ke2V2ZW50SWR9YDtcblxuICAgIGlmICh3aXRoVXNlckNvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHVybCArPSBgd2l0aF91c2VyX2NvdW50PSR7d2l0aFVzZXJDb3VudH1gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH0sXG4gIEdVSUxEX1NDSEVEVUxFRF9FVkVOVF9VU0VSUzogKGd1aWxkSWQ6IGJpZ2ludCwgZXZlbnRJZDogYmlnaW50LCBvcHRpb25zPzogR2V0U2NoZWR1bGVkRXZlbnRVc2VycykgPT4ge1xuICAgIGxldCB1cmwgPSBgL2d1aWxkcy8ke2d1aWxkSWR9L3NjaGVkdWxlZC1ldmVudHMvJHtldmVudElkfS91c2Vycz9gO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmxpbWl0KSB1cmwgKz0gYGxpbWl0PSR7b3B0aW9ucy5saW1pdH1gO1xuICAgICAgaWYgKG9wdGlvbnMud2l0aE1lbWJlcikgdXJsICs9IGAmd2l0aF9tZW1iZXI9JHtvcHRpb25zLndpdGhNZW1iZXJ9YDtcbiAgICAgIGlmIChvcHRpb25zLmFmdGVyKSB1cmwgKz0gYCZhZnRlcj0ke29wdGlvbnMuYWZ0ZXJ9YDtcbiAgICAgIGlmIChvcHRpb25zLmJlZm9yZSkgdXJsICs9IGAmYmVmb3JlPSR7b3B0aW9ucy5iZWZvcmV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9LFxuICAvLyBWb2ljZVxuICBWT0lDRV9SRUdJT05TOiAoKSA9PiB7XG4gICAgcmV0dXJuIGAvdm9pY2UvcmVnaW9uc2A7XG4gIH0sXG5cbiAgSU5WSVRFOiAoaW52aXRlQ29kZTogc3RyaW5nLCBvcHRpb25zPzogR2V0SW52aXRlKSA9PiB7XG4gICAgbGV0IHVybCA9IGAvaW52aXRlcy8ke2ludml0ZUNvZGV9P2A7XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMud2l0aENvdW50cykgdXJsICs9IGB3aXRoX2NvdW50cz0ke29wdGlvbnMud2l0aENvdW50c31gO1xuICAgICAgaWYgKG9wdGlvbnMud2l0aEV4cGlyYXRpb24pIHVybCArPSBgJndpdGhfZXhwaXJhdGlvbj0ke29wdGlvbnMud2l0aEV4cGlyYXRpb259YDtcbiAgICAgIGlmIChvcHRpb25zLnNjaGVkdWxlZEV2ZW50SWQpIHVybCArPSBgJmd1aWxkX3NjaGVkdWxlZF9ldmVudF9pZD0ke29wdGlvbnMuc2NoZWR1bGVkRXZlbnRJZH1gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH0sXG5cbiAgV0VCSE9PSzogKHdlYmhvb2tJZDogYmlnaW50LCB0b2tlbjogc3RyaW5nLCBvcHRpb25zPzogeyB3YWl0PzogYm9vbGVhbjsgdGhyZWFkSWQ/OiBiaWdpbnQgfSkgPT4ge1xuICAgIGxldCB1cmwgPSBgL3dlYmhvb2tzLyR7d2ViaG9va0lkfS8ke3Rva2VufT9gO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zPy53YWl0ICE9PSB1bmRlZmluZWQpIHVybCArPSBgd2FpdD0ke29wdGlvbnMud2FpdH1gO1xuICAgICAgaWYgKG9wdGlvbnMudGhyZWFkSWQpIHVybCArPSBgdGhyZWFkSWQ9JHtvcHRpb25zLnRocmVhZElkfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfSxcbiAgV0VCSE9PS19JRDogKHdlYmhvb2tJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvd2ViaG9va3MvJHt3ZWJob29rSWR9YDtcbiAgfSxcbiAgV0VCSE9PS19NRVNTQUdFOiAod2ViaG9va0lkOiBiaWdpbnQsIHRva2VuOiBzdHJpbmcsIG1lc3NhZ2VJZDogYmlnaW50LCBvcHRpb25zPzogeyB0aHJlYWRJZD86IGJpZ2ludCB9KSA9PiB7XG4gICAgbGV0IHVybCA9IGAvd2ViaG9va3MvJHt3ZWJob29rSWR9LyR7dG9rZW59L21lc3NhZ2VzLyR7bWVzc2FnZUlkfT9gO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnRocmVhZElkKSB1cmwgKz0gYHRocmVhZElkPSR7b3B0aW9ucy50aHJlYWRJZH1gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH0sXG4gIFdFQkhPT0tfTUVTU0FHRV9PUklHSU5BTDogKHdlYmhvb2tJZDogYmlnaW50LCB0b2tlbjogc3RyaW5nLCBvcHRpb25zPzogeyB0aHJlYWRJZD86IGJpZ2ludCB9KSA9PiB7XG4gICAgbGV0IHVybCA9IGAvd2ViaG9va3MvJHt3ZWJob29rSWR9LyR7dG9rZW59L21lc3NhZ2VzL0BvcmlnaW5hbD9gO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnRocmVhZElkKSB1cmwgKz0gYHRocmVhZElkPSR7b3B0aW9ucy50aHJlYWRJZH1gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH0sXG4gIFdFQkhPT0tfU0xBQ0s6ICh3ZWJob29rSWQ6IGJpZ2ludCwgdG9rZW46IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgL3dlYmhvb2tzLyR7d2ViaG9va0lkfS8ke3Rva2VufS9zbGFja2A7XG4gIH0sXG4gIFdFQkhPT0tfR0lUSFVCOiAod2ViaG9va0lkOiBiaWdpbnQsIHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYC93ZWJob29rcy8ke3dlYmhvb2tJZH0vJHt0b2tlbn0vZ2l0aHViYDtcbiAgfSxcblxuICAvLyBBcHBsaWNhdGlvbiBFbmRwb2ludHNcbiAgQ09NTUFORFM6IChhcHBsaWNhdGlvbklkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9hcHBsaWNhdGlvbnMvJHthcHBsaWNhdGlvbklkfS9jb21tYW5kc2A7XG4gIH0sXG4gIENPTU1BTkRTX0dVSUxEOiAoYXBwbGljYXRpb25JZDogYmlnaW50LCBndWlsZElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9hcHBsaWNhdGlvbnMvJHthcHBsaWNhdGlvbklkfS9ndWlsZHMvJHtndWlsZElkfS9jb21tYW5kc2A7XG4gIH0sXG4gIENPTU1BTkRTX1BFUk1JU1NJT05TOiAoYXBwbGljYXRpb25JZDogYmlnaW50LCBndWlsZElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9hcHBsaWNhdGlvbnMvJHthcHBsaWNhdGlvbklkfS9ndWlsZHMvJHtndWlsZElkfS9jb21tYW5kcy9wZXJtaXNzaW9uc2A7XG4gIH0sXG4gIENPTU1BTkRTX1BFUk1JU1NJT046IChhcHBsaWNhdGlvbklkOiBiaWdpbnQsIGd1aWxkSWQ6IGJpZ2ludCwgY29tbWFuZElkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC9hcHBsaWNhdGlvbnMvJHthcHBsaWNhdGlvbklkfS9ndWlsZHMvJHtndWlsZElkfS9jb21tYW5kcy8ke2NvbW1hbmRJZH0vcGVybWlzc2lvbnNgO1xuICB9LFxuICBDT01NQU5EU19JRDogKGFwcGxpY2F0aW9uSWQ6IGJpZ2ludCwgY29tbWFuZElkOiBiaWdpbnQsIHdpdGhMb2NhbGl6YXRpb25zPzogYm9vbGVhbikgPT4ge1xuICAgIGxldCB1cmwgPSBgL2FwcGxpY2F0aW9ucy8ke2FwcGxpY2F0aW9uSWR9L2NvbW1hbmRzLyR7Y29tbWFuZElkfT9gO1xuXG4gICAgaWYgKHdpdGhMb2NhbGl6YXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHVybCArPSBgd2l0aExvY2FsaXphdGlvbnM9JHt3aXRoTG9jYWxpemF0aW9uc31gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH0sXG4gIENPTU1BTkRTX0dVSUxEX0lEOiAoYXBwbGljYXRpb25JZDogYmlnaW50LCBndWlsZElkOiBiaWdpbnQsIGNvbW1hbmRJZDogYmlnaW50LCB3aXRoTG9jYWxpemF0aW9ucz86IGJvb2xlYW4pID0+IHtcbiAgICBsZXQgdXJsID0gYC9hcHBsaWNhdGlvbnMvJHthcHBsaWNhdGlvbklkfS9ndWlsZHMvJHtndWlsZElkfS9jb21tYW5kcy8ke2NvbW1hbmRJZH0/YDtcblxuICAgIGlmICh3aXRoTG9jYWxpemF0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB1cmwgKz0gYHdpdGhfbG9jYWxpemF0aW9ucz0ke3dpdGhMb2NhbGl6YXRpb25zfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfSxcblxuICAvLyBJbnRlcmFjdGlvbiBFbmRwb2ludHNcbiAgSU5URVJBQ1RJT05fSURfVE9LRU46IChpbnRlcmFjdGlvbklkOiBiaWdpbnQsIHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYC9pbnRlcmFjdGlvbnMvJHtpbnRlcmFjdGlvbklkfS8ke3Rva2VufS9jYWxsYmFja2A7XG4gIH0sXG4gIElOVEVSQUNUSU9OX09SSUdJTkFMX0lEX1RPS0VOOiAoaW50ZXJhY3Rpb25JZDogYmlnaW50LCB0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAvd2ViaG9va3MvJHtpbnRlcmFjdGlvbklkfS8ke3Rva2VufS9tZXNzYWdlcy9Ab3JpZ2luYWxgO1xuICB9LFxuICBJTlRFUkFDVElPTl9JRF9UT0tFTl9NRVNTQUdFX0lEOiAoYXBwbGljYXRpb25JZDogYmlnaW50LCB0b2tlbjogc3RyaW5nLCBtZXNzYWdlSWQ6IGJpZ2ludCkgPT4ge1xuICAgIHJldHVybiBgL3dlYmhvb2tzLyR7YXBwbGljYXRpb25JZH0vJHt0b2tlbn0vbWVzc2FnZXMvJHttZXNzYWdlSWR9YDtcbiAgfSxcblxuICAvLyBVc2VyIGVuZHBvaW50c1xuICBVU0VSOiAodXNlcklkOiBiaWdpbnQpID0+IHtcbiAgICByZXR1cm4gYC91c2Vycy8ke3VzZXJJZH1gO1xuICB9LFxuICBVU0VSX0JPVDogKCkgPT4ge1xuICAgIHJldHVybiBgL3VzZXJzL0BtZWA7XG4gIH0sXG4gIFVTRVJfR1VJTERTOiAoKSA9PiB7XG4gICAgcmV0dXJuIGAvQG1lL2d1aWxkc2A7XG4gIH0sXG4gIC8vIFRPRE86IG1vdmUgdGhpcyBhd2F5XG4gIFVTRVJfQVZBVEFSOiAodXNlcklkOiBiaWdpbnQsIGljb246IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtiYXNlRW5kcG9pbnRzLkNETl9VUkx9L2F2YXRhcnMvJHt1c2VySWR9LyR7aWNvbn1gO1xuICB9LFxuICAvLyBUT0RPOiBtb3ZlIHRoaXMgYXdheVxuICBVU0VSX0RFRkFVTFRfQVZBVEFSOiAoaWNvbjogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIGAke2Jhc2VFbmRwb2ludHMuQ0ROX1VSTH0vZW1iZWQvYXZhdGFycy8ke2ljb259LnBuZ2A7XG4gIH0sXG4gIFVTRVJfRE06ICgpID0+IHtcbiAgICByZXR1cm4gYC91c2Vycy9AbWUvY2hhbm5lbHNgO1xuICB9LFxuICBVU0VSX0NPTk5FQ1RJT05TOiAoKSA9PiB7XG4gICAgcmV0dXJuIGAvdXNlcnMvQG1lL2Nvbm5lY3Rpb25zYDtcbiAgfSxcbiAgVVNFUl9OSUNLOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vbWVtYmVycy9AbWVgO1xuICB9LFxuXG4gIC8vIERpc2NvdmVyeSBFbmRwb2ludHNcbiAgRElTQ09WRVJZX0NBVEVHT1JJRVM6ICgpID0+IHtcbiAgICByZXR1cm4gYC9kaXNjb3ZlcnkvY2F0ZWdvcmllc2A7XG4gIH0sXG4gIERJU0NPVkVSWV9WQUxJRF9URVJNOiAodGVybTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAvZGlzY292ZXJ5L3ZhbGlkLXRlcm0/dGVybT0ke3Rlcm19YDtcbiAgfSxcbiAgRElTQ09WRVJZX01FVEFEQVRBOiAoZ3VpbGRJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvZ3VpbGRzLyR7Z3VpbGRJZH0vZGlzY292ZXJ5LW1ldGFkYXRhYDtcbiAgfSxcbiAgRElTQ09WRVJZX1NVQkNBVEVHT1JZOiAoZ3VpbGRJZDogYmlnaW50LCBjYXRlZ29yeUlkOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYC9ndWlsZHMvJHtndWlsZElkfS9kaXNjb3ZlcnktY2F0ZWdvcmllcy8ke2NhdGVnb3J5SWR9YDtcbiAgfSxcblxuICAvLyBPQXV0aDJcbiAgT0FVVEgyX0FQUExJQ0FUSU9OOiAoKSA9PiB7XG4gICAgcmV0dXJuIGAvb2F1dGgyL2FwcGxpY2F0aW9ucy9AbWVgO1xuICB9LFxuXG4gIC8vIFN0YWdlIGluc3RhbmNlc1xuICBTVEFHRV9JTlNUQU5DRVM6ICgpID0+IHtcbiAgICByZXR1cm4gYC9zdGFnZS1pbnN0YW5jZXNgO1xuICB9LFxuICBTVEFHRV9JTlNUQU5DRTogKGNoYW5uZWxJZDogYmlnaW50KSA9PiB7XG4gICAgcmV0dXJuIGAvc3RhZ2UtaW5zdGFuY2VzLyR7Y2hhbm5lbElkfWA7XG4gIH0sXG5cbiAgLy8gTWlzYyBFbmRwb2ludHNcbiAgTklUUk9fU1RJQ0tFUl9QQUNLUzogKCkgPT4ge1xuICAgIHJldHVybiBgL3N0aWNrZXItcGFja3NgO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFNMQVNIX0NPTU1BTkRTX05BTUVfUkVHRVggPSAvXlstX1xccHtMfVxccHtOfVxccHtzYz1EZXZhfVxccHtzYz1UaGFpfV17MSwzMn0kL3U7XG5leHBvcnQgY29uc3QgQ09OVEVYVF9NRU5VX0NPTU1BTkRTX05BTUVfUkVHRVggPSAvXltcXHctXFxzXXsxLDMyfSQvO1xuZXhwb3J0IGNvbnN0IENIQU5ORUxfTUVOVElPTl9SRUdFWCA9IC88I1swLTldKz4vZztcbmV4cG9ydCBjb25zdCBESVNDT1JEX1NOT1dGTEFLRV9SRUdFWCA9IC9eKD88aWQ+XFxkezE3LDE5fSkkLztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxTQUVFLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGtCQUFrQixRQUNiLG9DQUFvQyxDQUFDO0FBRzVDLDJFQUEyRSxDQUMzRSxPQUFPLE1BQU0sUUFBUSxHQUFHLHlCQUF5QixDQUFDO0FBRWxELGdGQUFnRixDQUNoRixPQUFPLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUU5QixtRkFBbUYsQ0FDbkYsT0FBTyxNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFFbEMsNEJBQTRCO0FBQzVCLHdEQUF3RCxDQUN4RCxPQUFPLE1BQU0sa0JBQWtCLEdBQUcsYUFBYSxDQUFDO0FBRWhELCtEQUErRCxDQUMvRCxPQUFPLE1BQU0sVUFBVSxHQUFHLENBQUMsdURBQXVELEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFMUcsb0ZBQW9GLENBQ3BGLE9BQU8sTUFBTSxjQUFjLEdBQUcsNEJBQTRCLENBQUM7QUFFM0QseURBQXlEO0FBQ3pELE9BQU8sTUFBTSxhQUFhLEdBQUc7SUFDM0IsUUFB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