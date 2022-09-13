export function transformInvite(bot, invite) {
    const transformedInvite = {
        /** The channel the invite is for */ channelId: bot.transformers.snowflake(invite.channel_id),
        /** The unique invite code */ code: invite.code,
        /** The time at which the invite was created */ createdAt: Date.parse(invite.created_at),
        /** The guild of the invite */ guildId: invite.guild_id ? bot.transformers.snowflake(invite.guild_id) : undefined,
        /** The user that created the invite */ inviter: invite.inviter ? bot.transformers.user(bot, invite.inviter) : undefined,
        /** How long the invite is valid for (in seconds) */ maxAge: invite.max_age,
        /** The maximum number of times the invite can be used */ maxUses: invite.max_uses,
        /** The type of target for this voice channel invite */ targetType: invite.target_type,
        /** The target user for this invite */ targetUser: invite.target_user ? bot.transformers.user(bot, invite.target_user) : undefined,
        /** The embedded application to open for this voice channel embedded application invite */ targetApplication: invite.target_application ? bot.transformers.application(bot, invite.target_application) : undefined,
        /** Whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role) */ temporary: invite.temporary,
        /** How many times the invite has been used (always will be 0) */ uses: invite.uses
    };
    return transformedInvite;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkSW52aXRlQ3JlYXRlIH0gZnJvbSBcIi4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IE9wdGlvbmFsaXplIH0gZnJvbSBcIi4uL3R5cGVzL3NoYXJlZC50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSW52aXRlKGJvdDogQm90LCBpbnZpdGU6IERpc2NvcmRJbnZpdGVDcmVhdGUpIHtcbiAgY29uc3QgdHJhbnNmb3JtZWRJbnZpdGUgPSB7XG4gICAgLyoqIFRoZSBjaGFubmVsIHRoZSBpbnZpdGUgaXMgZm9yICovXG4gICAgY2hhbm5lbElkOiBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShpbnZpdGUuY2hhbm5lbF9pZCksXG4gICAgLyoqIFRoZSB1bmlxdWUgaW52aXRlIGNvZGUgKi9cbiAgICBjb2RlOiBpbnZpdGUuY29kZSxcbiAgICAvKiogVGhlIHRpbWUgYXQgd2hpY2ggdGhlIGludml0ZSB3YXMgY3JlYXRlZCAqL1xuICAgIGNyZWF0ZWRBdDogRGF0ZS5wYXJzZShpbnZpdGUuY3JlYXRlZF9hdCksXG4gICAgLyoqIFRoZSBndWlsZCBvZiB0aGUgaW52aXRlICovXG4gICAgZ3VpbGRJZDogaW52aXRlLmd1aWxkX2lkID8gYm90LnRyYW5zZm9ybWVycy5zbm93Zmxha2UoaW52aXRlLmd1aWxkX2lkKSA6IHVuZGVmaW5lZCxcbiAgICAvKiogVGhlIHVzZXIgdGhhdCBjcmVhdGVkIHRoZSBpbnZpdGUgKi9cbiAgICBpbnZpdGVyOiBpbnZpdGUuaW52aXRlciA/IGJvdC50cmFuc2Zvcm1lcnMudXNlcihib3QsIGludml0ZS5pbnZpdGVyKSA6IHVuZGVmaW5lZCxcbiAgICAvKiogSG93IGxvbmcgdGhlIGludml0ZSBpcyB2YWxpZCBmb3IgKGluIHNlY29uZHMpICovXG4gICAgbWF4QWdlOiBpbnZpdGUubWF4X2FnZSxcbiAgICAvKiogVGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIHRoZSBpbnZpdGUgY2FuIGJlIHVzZWQgKi9cbiAgICBtYXhVc2VzOiBpbnZpdGUubWF4X3VzZXMsXG4gICAgLyoqIFRoZSB0eXBlIG9mIHRhcmdldCBmb3IgdGhpcyB2b2ljZSBjaGFubmVsIGludml0ZSAqL1xuICAgIHRhcmdldFR5cGU6IGludml0ZS50YXJnZXRfdHlwZSxcbiAgICAvKiogVGhlIHRhcmdldCB1c2VyIGZvciB0aGlzIGludml0ZSAqL1xuICAgIHRhcmdldFVzZXI6IGludml0ZS50YXJnZXRfdXNlciA/IGJvdC50cmFuc2Zvcm1lcnMudXNlcihib3QsIGludml0ZS50YXJnZXRfdXNlcikgOiB1bmRlZmluZWQsXG4gICAgLyoqIFRoZSBlbWJlZGRlZCBhcHBsaWNhdGlvbiB0byBvcGVuIGZvciB0aGlzIHZvaWNlIGNoYW5uZWwgZW1iZWRkZWQgYXBwbGljYXRpb24gaW52aXRlICovXG4gICAgdGFyZ2V0QXBwbGljYXRpb246IGludml0ZS50YXJnZXRfYXBwbGljYXRpb25cbiAgICAgID8gLy8gQHRzLWlnbm9yZSBzaG91bGQgbm90IGJyZWFrIGFueXRoaW5nIGV2ZW4gdGhvdWdoIGl0cyBwYXJ0aWFsLiBpZiBpdCBkb2VzIGJsYW1lIHdvbGYgOilcbiAgICAgICAgYm90LnRyYW5zZm9ybWVycy5hcHBsaWNhdGlvbihib3QsIGludml0ZS50YXJnZXRfYXBwbGljYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICAvKiogV2hldGhlciBvciBub3QgdGhlIGludml0ZSBpcyB0ZW1wb3JhcnkgKGludml0ZWQgdXNlcnMgd2lsbCBiZSBraWNrZWQgb24gZGlzY29ubmVjdCB1bmxlc3MgdGhleSdyZSBhc3NpZ25lZCBhIHJvbGUpICovXG4gICAgdGVtcG9yYXJ5OiBpbnZpdGUudGVtcG9yYXJ5LFxuICAgIC8qKiBIb3cgbWFueSB0aW1lcyB0aGUgaW52aXRlIGhhcyBiZWVuIHVzZWQgKGFsd2F5cyB3aWxsIGJlIDApICovXG4gICAgdXNlczogaW52aXRlLnVzZXMsXG4gIH07XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkSW52aXRlIGFzIE9wdGlvbmFsaXplPHR5cGVvZiB0cmFuc2Zvcm1lZEludml0ZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW52aXRlIGV4dGVuZHMgUmV0dXJuVHlwZTx0eXBlb2YgdHJhbnNmb3JtSW52aXRlPiB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sU0FBUyxlQUFlLENBQUMsR0FBUSxFQUFFLE1BQTJCLEVBQUU7SUFDckUsTUFBTSxpQkFBaUIsR0FBRztRQUN4QixvQ0FBb0MsQ0FDcEMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDeEQsNkJBQTZCLENBQzdCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNqQiwrQ0FBK0MsQ0FDL0MsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN4Qyw4QkFBOEIsQ0FDOUIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVM7UUFDbEYsdUNBQXVDLENBQ3ZDLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUztRQUNoRixvREFBb0QsQ0FDcEQsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPO1FBQ3RCLHlEQUF5RCxDQUN6RCxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVE7UUFDeEIsdURBQXVELENBQ3ZELFVBQVUsRUFBRSxNQUFNLENBQUMsV0FBVztRQUM5QixzQ0FBc0MsQ0FDdEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTO1FBQzNGLDBGQUEwRixDQUMxRixpQkFBaUIsRUFBRSxNQUFNLENBQUMsa0JBQWtCLEdBRXhDLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FDNUQsU0FBUztRQUNiLHlIQUF5SCxDQUN6SCxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7UUFDM0IsaUVBQWlFLENBQ2pFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtLQUNsQixBQUFDO0lBRUYsT0FBTyxpQkFBaUIsQ0FBMEM7Q0FDbkUifQ==