/** The full URL of the splash from Discords CDN. Undefined if no splash is set. */ export function guildSplashURL(bot, id, splash, options) {
    return splash ? bot.utils.formatImageURL(bot.constants.routes.GUILD_SPLASH(id, typeof splash === "string" ? splash : bot.utils.iconBigintToHash(splash)), options?.size || 128, options?.format) : undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IEltYWdlRm9ybWF0LCBJbWFnZVNpemUgfSBmcm9tIFwiLi4vbWVtYmVycy9hdmF0YXJVcmwudHNcIjtcblxuLyoqIFRoZSBmdWxsIFVSTCBvZiB0aGUgc3BsYXNoIGZyb20gRGlzY29yZHMgQ0ROLiBVbmRlZmluZWQgaWYgbm8gc3BsYXNoIGlzIHNldC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBndWlsZFNwbGFzaFVSTChcbiAgYm90OiBCb3QsXG4gIGlkOiBiaWdpbnQsXG4gIHNwbGFzaDogYmlnaW50IHwgdW5kZWZpbmVkLFxuICBvcHRpb25zPzoge1xuICAgIHNpemU/OiBJbWFnZVNpemU7XG4gICAgZm9ybWF0PzogSW1hZ2VGb3JtYXQ7XG4gIH0sXG4pIHtcbiAgcmV0dXJuIHNwbGFzaFxuICAgID8gYm90LnV0aWxzLmZvcm1hdEltYWdlVVJMKFxuICAgICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuR1VJTERfU1BMQVNIKFxuICAgICAgICBpZCxcbiAgICAgICAgdHlwZW9mIHNwbGFzaCA9PT0gXCJzdHJpbmdcIiA/IHNwbGFzaCA6IGJvdC51dGlscy5pY29uQmlnaW50VG9IYXNoKHNwbGFzaCksXG4gICAgICApLFxuICAgICAgb3B0aW9ucz8uc2l6ZSB8fCAxMjgsXG4gICAgICBvcHRpb25zPy5mb3JtYXQsXG4gICAgKVxuICAgIDogdW5kZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLG1GQUFtRixDQUNuRixPQUFPLFNBQVMsY0FBYyxDQUM1QixHQUFRLEVBQ1IsRUFBVSxFQUNWLE1BQTBCLEVBQzFCLE9BR0MsRUFDRDtJQUNBLE9BQU8sTUFBTSxHQUNULEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUN4QixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQy9CLEVBQUUsRUFDRixPQUFPLE1BQU0sS0FBSyxRQUFRLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQ3pFLEVBQ0QsT0FBTyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQ3BCLE9BQU8sRUFBRSxNQUFNLENBQ2hCLEdBQ0MsU0FBUyxDQUFDO0NBQ2YifQ==