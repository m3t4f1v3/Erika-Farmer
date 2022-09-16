export function transformApplication(bot, payload) {
    const application = {
        name: payload.name,
        description: payload.description,
        rpcOrigins: payload.rpc_origins,
        botPublic: payload.bot_public,
        botRequireCodeGrant: payload.bot_require_code_grant,
        termsOfServiceUrl: payload.terms_of_service_url,
        privacyPolicyUrl: payload.privacy_policy_url,
        verifyKey: payload.verify_key,
        primarySkuId: payload.primary_sku_id,
        slug: payload.slug,
        coverImage: payload.cover_image ? bot.utils.iconHashToBigInt(payload.cover_image) : undefined,
        flags: payload.flags,
        id: bot.transformers.snowflake(payload.id),
        icon: payload.icon ? bot.utils.iconHashToBigInt(payload.icon) : undefined,
        owner: payload.owner ? bot.transformers.user(bot, payload.owner) : undefined,
        team: payload.team ? bot.transformers.team(bot, payload.team) : undefined,
        guildId: payload.guild_id ? bot.transformers.snowflake(payload.guild_id) : undefined,
    };
    return application;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsR0FBUSxFQUFFLE9BQTJCO0lBQ3hFLE1BQU0sV0FBVyxHQUFHO1FBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7UUFDaEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXO1FBQy9CLFNBQVMsRUFBRSxPQUFPLENBQUMsVUFBVTtRQUM3QixtQkFBbUIsRUFBRSxPQUFPLENBQUMsc0JBQXNCO1FBQ25ELGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxvQkFBb0I7UUFDL0MsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLGtCQUFrQjtRQUM1QyxTQUFTLEVBQUUsT0FBTyxDQUFDLFVBQVU7UUFDN0IsWUFBWSxFQUFFLE9BQU8sQ0FBQyxjQUFjO1FBQ3BDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixVQUFVLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDN0YsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBRXBCLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUV6RSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUM1RSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUN6RSxPQUFPLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ3JGLENBQUM7SUFFRixPQUFPLFdBQThDLENBQUM7QUFDeEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdCB9IGZyb20gXCIuLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRBcHBsaWNhdGlvbiB9IGZyb20gXCIuLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBPcHRpb25hbGl6ZSB9IGZyb20gXCIuLi90eXBlcy9zaGFyZWQudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUFwcGxpY2F0aW9uKGJvdDogQm90LCBwYXlsb2FkOiBEaXNjb3JkQXBwbGljYXRpb24pIHtcbiAgY29uc3QgYXBwbGljYXRpb24gPSB7XG4gICAgbmFtZTogcGF5bG9hZC5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBwYXlsb2FkLmRlc2NyaXB0aW9uLFxuICAgIHJwY09yaWdpbnM6IHBheWxvYWQucnBjX29yaWdpbnMsXG4gICAgYm90UHVibGljOiBwYXlsb2FkLmJvdF9wdWJsaWMsXG4gICAgYm90UmVxdWlyZUNvZGVHcmFudDogcGF5bG9hZC5ib3RfcmVxdWlyZV9jb2RlX2dyYW50LFxuICAgIHRlcm1zT2ZTZXJ2aWNlVXJsOiBwYXlsb2FkLnRlcm1zX29mX3NlcnZpY2VfdXJsLFxuICAgIHByaXZhY3lQb2xpY3lVcmw6IHBheWxvYWQucHJpdmFjeV9wb2xpY3lfdXJsLFxuICAgIHZlcmlmeUtleTogcGF5bG9hZC52ZXJpZnlfa2V5LFxuICAgIHByaW1hcnlTa3VJZDogcGF5bG9hZC5wcmltYXJ5X3NrdV9pZCxcbiAgICBzbHVnOiBwYXlsb2FkLnNsdWcsXG4gICAgY292ZXJJbWFnZTogcGF5bG9hZC5jb3Zlcl9pbWFnZSA/IGJvdC51dGlscy5pY29uSGFzaFRvQmlnSW50KHBheWxvYWQuY292ZXJfaW1hZ2UpIDogdW5kZWZpbmVkLFxuICAgIGZsYWdzOiBwYXlsb2FkLmZsYWdzLFxuXG4gICAgaWQ6IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuaWQpLFxuICAgIGljb246IHBheWxvYWQuaWNvbiA/IGJvdC51dGlscy5pY29uSGFzaFRvQmlnSW50KHBheWxvYWQuaWNvbikgOiB1bmRlZmluZWQsXG4gICAgLy8gQHRzLWlnbm9yZSB0aGUgcGFydGlhbCBoZXJlIHdvbnQgYnJlYWsgYW55dGhpbmdcbiAgICBvd25lcjogcGF5bG9hZC5vd25lciA/IGJvdC50cmFuc2Zvcm1lcnMudXNlcihib3QsIHBheWxvYWQub3duZXIpIDogdW5kZWZpbmVkLFxuICAgIHRlYW06IHBheWxvYWQudGVhbSA/IGJvdC50cmFuc2Zvcm1lcnMudGVhbShib3QsIHBheWxvYWQudGVhbSkgOiB1bmRlZmluZWQsXG4gICAgZ3VpbGRJZDogcGF5bG9hZC5ndWlsZF9pZCA/IGJvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKHBheWxvYWQuZ3VpbGRfaWQpIDogdW5kZWZpbmVkLFxuICB9O1xuXG4gIHJldHVybiBhcHBsaWNhdGlvbiBhcyBPcHRpb25hbGl6ZTx0eXBlb2YgYXBwbGljYXRpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uIGV4dGVuZHMgUmV0dXJuVHlwZTx0eXBlb2YgdHJhbnNmb3JtQXBwbGljYXRpb24+IHt9XG4iXX0=