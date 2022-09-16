export function transformInvite(bot, invite) {
    const transformedInvite = {
        channelId: bot.transformers.snowflake(invite.channel_id),
        code: invite.code,
        createdAt: Date.parse(invite.created_at),
        guildId: invite.guild_id ? bot.transformers.snowflake(invite.guild_id) : undefined,
        inviter: invite.inviter ? bot.transformers.user(bot, invite.inviter) : undefined,
        maxAge: invite.max_age,
        maxUses: invite.max_uses,
        targetType: invite.target_type,
        targetUser: invite.target_user ? bot.transformers.user(bot, invite.target_user) : undefined,
        targetApplication: invite.target_application
            ?
                bot.transformers.application(bot, invite.target_application)
            : undefined,
        temporary: invite.temporary,
        uses: invite.uses,
    };
    return transformedInvite;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW52aXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sVUFBVSxlQUFlLENBQUMsR0FBUSxFQUFFLE1BQTJCO0lBQ25FLE1BQU0saUJBQWlCLEdBQUc7UUFFeEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFeEQsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBRWpCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFeEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUVsRixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUVoRixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU87UUFFdEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRO1FBRXhCLFVBQVUsRUFBRSxNQUFNLENBQUMsV0FBVztRQUU5QixVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUUzRixpQkFBaUIsRUFBRSxNQUFNLENBQUMsa0JBQWtCO1lBQzFDLENBQUM7Z0JBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztZQUM5RCxDQUFDLENBQUMsU0FBUztRQUViLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztRQUUzQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7S0FDbEIsQ0FBQztJQUVGLE9BQU8saUJBQTBELENBQUM7QUFDcEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdCB9IGZyb20gXCIuLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRJbnZpdGVDcmVhdGUgfSBmcm9tIFwiLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgT3B0aW9uYWxpemUgfSBmcm9tIFwiLi4vdHlwZXMvc2hhcmVkLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1JbnZpdGUoYm90OiBCb3QsIGludml0ZTogRGlzY29yZEludml0ZUNyZWF0ZSkge1xuICBjb25zdCB0cmFuc2Zvcm1lZEludml0ZSA9IHtcbiAgICAvKiogVGhlIGNoYW5uZWwgdGhlIGludml0ZSBpcyBmb3IgKi9cbiAgICBjaGFubmVsSWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKGludml0ZS5jaGFubmVsX2lkKSxcbiAgICAvKiogVGhlIHVuaXF1ZSBpbnZpdGUgY29kZSAqL1xuICAgIGNvZGU6IGludml0ZS5jb2RlLFxuICAgIC8qKiBUaGUgdGltZSBhdCB3aGljaCB0aGUgaW52aXRlIHdhcyBjcmVhdGVkICovXG4gICAgY3JlYXRlZEF0OiBEYXRlLnBhcnNlKGludml0ZS5jcmVhdGVkX2F0KSxcbiAgICAvKiogVGhlIGd1aWxkIG9mIHRoZSBpbnZpdGUgKi9cbiAgICBndWlsZElkOiBpbnZpdGUuZ3VpbGRfaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShpbnZpdGUuZ3VpbGRfaWQpIDogdW5kZWZpbmVkLFxuICAgIC8qKiBUaGUgdXNlciB0aGF0IGNyZWF0ZWQgdGhlIGludml0ZSAqL1xuICAgIGludml0ZXI6IGludml0ZS5pbnZpdGVyID8gYm90LnRyYW5zZm9ybWVycy51c2VyKGJvdCwgaW52aXRlLmludml0ZXIpIDogdW5kZWZpbmVkLFxuICAgIC8qKiBIb3cgbG9uZyB0aGUgaW52aXRlIGlzIHZhbGlkIGZvciAoaW4gc2Vjb25kcykgKi9cbiAgICBtYXhBZ2U6IGludml0ZS5tYXhfYWdlLFxuICAgIC8qKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGltZXMgdGhlIGludml0ZSBjYW4gYmUgdXNlZCAqL1xuICAgIG1heFVzZXM6IGludml0ZS5tYXhfdXNlcyxcbiAgICAvKiogVGhlIHR5cGUgb2YgdGFyZ2V0IGZvciB0aGlzIHZvaWNlIGNoYW5uZWwgaW52aXRlICovXG4gICAgdGFyZ2V0VHlwZTogaW52aXRlLnRhcmdldF90eXBlLFxuICAgIC8qKiBUaGUgdGFyZ2V0IHVzZXIgZm9yIHRoaXMgaW52aXRlICovXG4gICAgdGFyZ2V0VXNlcjogaW52aXRlLnRhcmdldF91c2VyID8gYm90LnRyYW5zZm9ybWVycy51c2VyKGJvdCwgaW52aXRlLnRhcmdldF91c2VyKSA6IHVuZGVmaW5lZCxcbiAgICAvKiogVGhlIGVtYmVkZGVkIGFwcGxpY2F0aW9uIHRvIG9wZW4gZm9yIHRoaXMgdm9pY2UgY2hhbm5lbCBlbWJlZGRlZCBhcHBsaWNhdGlvbiBpbnZpdGUgKi9cbiAgICB0YXJnZXRBcHBsaWNhdGlvbjogaW52aXRlLnRhcmdldF9hcHBsaWNhdGlvblxuICAgICAgPyAvLyBAdHMtaWdub3JlIHNob3VsZCBub3QgYnJlYWsgYW55dGhpbmcgZXZlbiB0aG91Z2ggaXRzIHBhcnRpYWwuIGlmIGl0IGRvZXMgYmxhbWUgd29sZiA6KVxuICAgICAgICBib3QudHJhbnNmb3JtZXJzLmFwcGxpY2F0aW9uKGJvdCwgaW52aXRlLnRhcmdldF9hcHBsaWNhdGlvbilcbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgaW52aXRlIGlzIHRlbXBvcmFyeSAoaW52aXRlZCB1c2VycyB3aWxsIGJlIGtpY2tlZCBvbiBkaXNjb25uZWN0IHVubGVzcyB0aGV5J3JlIGFzc2lnbmVkIGEgcm9sZSkgKi9cbiAgICB0ZW1wb3Jhcnk6IGludml0ZS50ZW1wb3JhcnksXG4gICAgLyoqIEhvdyBtYW55IHRpbWVzIHRoZSBpbnZpdGUgaGFzIGJlZW4gdXNlZCAoYWx3YXlzIHdpbGwgYmUgMCkgKi9cbiAgICB1c2VzOiBpbnZpdGUudXNlcyxcbiAgfTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRJbnZpdGUgYXMgT3B0aW9uYWxpemU8dHlwZW9mIHRyYW5zZm9ybWVkSW52aXRlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnZpdGUgZXh0ZW5kcyBSZXR1cm5UeXBlPHR5cGVvZiB0cmFuc2Zvcm1JbnZpdGU+IHt9XG4iXX0=