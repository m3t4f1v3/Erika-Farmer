export function handleInviteDelete(bot, data) {
    const payload = data.d;
    bot.events.inviteDelete(bot, {
        /** The channel of the invite */ channelId: bot.transformers.snowflake(payload.channel_id),
        /** The guild of the invite */ guildId: payload.guild_id ? bot.transformers.snowflake(payload.guild_id) : undefined,
        /** The unique invite code */ code: payload.code
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkR2F0ZXdheVBheWxvYWQsIERpc2NvcmRJbnZpdGVEZWxldGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSW52aXRlRGVsZXRlKGJvdDogQm90LCBkYXRhOiBEaXNjb3JkR2F0ZXdheVBheWxvYWQpIHtcbiAgY29uc3QgcGF5bG9hZCA9IGRhdGEuZCBhcyBEaXNjb3JkSW52aXRlRGVsZXRlO1xuXG4gIGJvdC5ldmVudHMuaW52aXRlRGVsZXRlKGJvdCwge1xuICAgIC8qKiBUaGUgY2hhbm5lbCBvZiB0aGUgaW52aXRlICovXG4gICAgY2hhbm5lbElkOiBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmNoYW5uZWxfaWQpLFxuICAgIC8qKiBUaGUgZ3VpbGQgb2YgdGhlIGludml0ZSAqL1xuICAgIGd1aWxkSWQ6IHBheWxvYWQuZ3VpbGRfaWQgPyBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShwYXlsb2FkLmd1aWxkX2lkKSA6IHVuZGVmaW5lZCxcbiAgICAvKiogVGhlIHVuaXF1ZSBpbnZpdGUgY29kZSAqL1xuICAgIGNvZGU6IHBheWxvYWQuY29kZSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxTQUFTLGtCQUFrQixDQUFDLEdBQVEsRUFBRSxJQUEyQixFQUFFO0lBQ3hFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLEFBQXVCLEFBQUM7SUFFOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO1FBQzNCLGdDQUFnQyxDQUNoQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUN6RCw4QkFBOEIsQ0FDOUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVM7UUFDcEYsNkJBQTZCLENBQzdCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtLQUNuQixDQUFDLENBQUM7Q0FDSiJ9