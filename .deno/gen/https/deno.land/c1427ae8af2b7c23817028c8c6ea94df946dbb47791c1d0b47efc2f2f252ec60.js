const processing = new Set();
export async function dispatchRequirements(bot, data) {
    // DELETE MEANS WE DONT NEED TO FETCH. CREATE SHOULD HAVE DATA TO CACHE
    if (data.t && [
        "GUILD_CREATE",
        "GUILD_DELETE"
    ].includes(data.t)) return;
    const id = bot.utils.snowflakeToBigint((data.t && [
        "GUILD_UPDATE"
    ].includes(data.t) ? data.d?.id : data.d?.guild_id) ?? "");
    if (!id || bot.activeGuildIds.has(id)) return;
    // If this guild is in cache, it has not been swept and we can cancel
    if (bot.guilds.has(id)) {
        bot.activeGuildIds.add(id);
        return;
    }
    if (processing.has(id)) {
        bot.events.debug(`[DISPATCH] New Guild ID already being processed: ${id} in ${data.t} event`);
        let runs = 0;
        do {
            await bot.utils.delay(500);
            runs++;
        }while (processing.has(id) && runs < 40)
        if (!processing.has(id)) return;
        return bot.events.debug(`[DISPATCH] Already processed guild was not successfully fetched:  ${id} in ${data.t} event`);
    }
    processing.add(id);
    // New guild id has appeared, fetch all relevant data
    bot.events.debug(`[DISPATCH] New Guild ID has appeared: ${id} in ${data.t} event`);
    const guild = await bot.helpers.getGuild(id, {
        counts: true
    }).catch(console.log);
    if (!guild) {
        processing.delete(id);
        return bot.events.debug(`[DISPATCH] Guild ID ${id} failed to fetch.`);
    }
    bot.events.debug(`[DISPATCH] Guild ID ${id} has been found. ${guild.name}`);
    const [channels, botMember] = await Promise.all([
        bot.helpers.getChannels(id),
        bot.helpers.getMember(id, bot.id), 
    ]).catch((error)=>{
        bot.events.debug(error);
        return [];
    });
    if (!botMember || !channels) {
        processing.delete(id);
        return bot.events.debug(`[DISPATCH] Guild ID ${id} Name: ${guild.name} failed. Unable to get botMember or channels`);
    }
    // Add to cache
    bot.guilds.set(id, guild);
    bot.dispatchedGuildIds.delete(id);
    channels.forEach((channel)=>{
        bot.dispatchedChannelIds.delete(channel.id);
        bot.channels.set(channel.id, channel);
    });
    bot.members.set(bot.transformers.snowflake(`${botMember.id}${guild.id}`), botMember);
    processing.delete(id);
    bot.events.debug(`[DISPATCH] Guild ID ${id} Name: ${guild.name} completely loaded.`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEd1aWxkIH0gZnJvbSBcIi4uL2RlcHMudHNcIjtcbmltcG9ydCB7IEJvdCwgRGlzY29yZEdhdGV3YXlQYXlsb2FkIH0gZnJvbSBcIi4uL2RlcHMudHNcIjtcbmltcG9ydCB7IEJvdFdpdGhDYWNoZSB9IGZyb20gXCIuL2FkZENhY2hlQ29sbGVjdGlvbnMudHNcIjtcblxuY29uc3QgcHJvY2Vzc2luZyA9IG5ldyBTZXQ8YmlnaW50PigpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGlzcGF0Y2hSZXF1aXJlbWVudHM8QiBleHRlbmRzIEJvdD4oXG4gIGJvdDogQm90V2l0aENhY2hlPEI+LFxuICBkYXRhOiBEaXNjb3JkR2F0ZXdheVBheWxvYWQsXG4pIHtcbiAgLy8gREVMRVRFIE1FQU5TIFdFIERPTlQgTkVFRCBUTyBGRVRDSC4gQ1JFQVRFIFNIT1VMRCBIQVZFIERBVEEgVE8gQ0FDSEVcbiAgaWYgKGRhdGEudCAmJiBbXCJHVUlMRF9DUkVBVEVcIiwgXCJHVUlMRF9ERUxFVEVcIl0uaW5jbHVkZXMoZGF0YS50KSkgcmV0dXJuO1xuXG4gIGNvbnN0IGlkID0gYm90LnV0aWxzLnNub3dmbGFrZVRvQmlnaW50KFxuICAgIChkYXRhLnQgJiYgW1wiR1VJTERfVVBEQVRFXCJdLmluY2x1ZGVzKGRhdGEudClcbiAgICAgID8gLy8gZGVuby1saW50LWlnbm9yZSBuby1leHBsaWNpdC1hbnlcbiAgICAgICAgKGRhdGEuZCBhcyBhbnkpPy5pZFxuICAgICAgOiAvLyBkZW5vLWxpbnQtaWdub3JlIG5vLWV4cGxpY2l0LWFueVxuICAgICAgICAoZGF0YS5kIGFzIGFueSk/Lmd1aWxkX2lkKSA/PyBcIlwiLFxuICApO1xuXG4gIGlmICghaWQgfHwgYm90LmFjdGl2ZUd1aWxkSWRzLmhhcyhpZCkpIHJldHVybjtcblxuICAvLyBJZiB0aGlzIGd1aWxkIGlzIGluIGNhY2hlLCBpdCBoYXMgbm90IGJlZW4gc3dlcHQgYW5kIHdlIGNhbiBjYW5jZWxcbiAgaWYgKGJvdC5ndWlsZHMuaGFzKGlkKSkge1xuICAgIGJvdC5hY3RpdmVHdWlsZElkcy5hZGQoaWQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwcm9jZXNzaW5nLmhhcyhpZCkpIHtcbiAgICBib3QuZXZlbnRzLmRlYnVnKFxuICAgICAgYFtESVNQQVRDSF0gTmV3IEd1aWxkIElEIGFscmVhZHkgYmVpbmcgcHJvY2Vzc2VkOiAke2lkfSBpbiAke2RhdGEudH0gZXZlbnRgLFxuICAgICk7XG5cbiAgICBsZXQgcnVucyA9IDA7XG4gICAgZG8ge1xuICAgICAgYXdhaXQgYm90LnV0aWxzLmRlbGF5KDUwMCk7XG4gICAgICBydW5zKys7XG4gICAgfSB3aGlsZSAocHJvY2Vzc2luZy5oYXMoaWQpICYmIHJ1bnMgPCA0MCk7XG5cbiAgICBpZiAoIXByb2Nlc3NpbmcuaGFzKGlkKSkgcmV0dXJuO1xuXG4gICAgcmV0dXJuIGJvdC5ldmVudHMuZGVidWcoXG4gICAgICBgW0RJU1BBVENIXSBBbHJlYWR5IHByb2Nlc3NlZCBndWlsZCB3YXMgbm90IHN1Y2Nlc3NmdWxseSBmZXRjaGVkOiAgJHtpZH0gaW4gJHtkYXRhLnR9IGV2ZW50YCxcbiAgICApO1xuICB9XG5cbiAgcHJvY2Vzc2luZy5hZGQoaWQpO1xuXG4gIC8vIE5ldyBndWlsZCBpZCBoYXMgYXBwZWFyZWQsIGZldGNoIGFsbCByZWxldmFudCBkYXRhXG4gIGJvdC5ldmVudHMuZGVidWcoXG4gICAgYFtESVNQQVRDSF0gTmV3IEd1aWxkIElEIGhhcyBhcHBlYXJlZDogJHtpZH0gaW4gJHtkYXRhLnR9IGV2ZW50YCxcbiAgKTtcblxuICBjb25zdCBndWlsZCA9IChhd2FpdCBib3QuaGVscGVyc1xuICAgIC5nZXRHdWlsZChpZCwge1xuICAgICAgY291bnRzOiB0cnVlLFxuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUubG9nKSkgYXMgR3VpbGQ7XG5cbiAgaWYgKCFndWlsZCkge1xuICAgIHByb2Nlc3NpbmcuZGVsZXRlKGlkKTtcbiAgICByZXR1cm4gYm90LmV2ZW50cy5kZWJ1ZyhgW0RJU1BBVENIXSBHdWlsZCBJRCAke2lkfSBmYWlsZWQgdG8gZmV0Y2guYCk7XG4gIH1cblxuICBib3QuZXZlbnRzLmRlYnVnKGBbRElTUEFUQ0hdIEd1aWxkIElEICR7aWR9IGhhcyBiZWVuIGZvdW5kLiAke2d1aWxkLm5hbWV9YCk7XG5cbiAgY29uc3QgW2NoYW5uZWxzLCBib3RNZW1iZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGJvdC5oZWxwZXJzLmdldENoYW5uZWxzKGlkKSxcbiAgICBib3QuaGVscGVycy5nZXRNZW1iZXIoaWQsIGJvdC5pZCksXG4gIF0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGJvdC5ldmVudHMuZGVidWcoZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfSk7XG5cbiAgaWYgKCFib3RNZW1iZXIgfHwgIWNoYW5uZWxzKSB7XG4gICAgcHJvY2Vzc2luZy5kZWxldGUoaWQpO1xuICAgIHJldHVybiBib3QuZXZlbnRzLmRlYnVnKFxuICAgICAgYFtESVNQQVRDSF0gR3VpbGQgSUQgJHtpZH0gTmFtZTogJHtndWlsZC5uYW1lfSBmYWlsZWQuIFVuYWJsZSB0byBnZXQgYm90TWVtYmVyIG9yIGNoYW5uZWxzYCxcbiAgICApO1xuICB9XG5cbiAgLy8gQWRkIHRvIGNhY2hlXG4gIGJvdC5ndWlsZHMuc2V0KGlkLCBndWlsZCk7XG4gIGJvdC5kaXNwYXRjaGVkR3VpbGRJZHMuZGVsZXRlKGlkKTtcbiAgY2hhbm5lbHMuZm9yRWFjaCgoY2hhbm5lbCkgPT4ge1xuICAgIGJvdC5kaXNwYXRjaGVkQ2hhbm5lbElkcy5kZWxldGUoY2hhbm5lbC5pZCk7XG4gICAgYm90LmNoYW5uZWxzLnNldChjaGFubmVsLmlkLCBjaGFubmVsKTtcbiAgfSk7XG4gIGJvdC5tZW1iZXJzLnNldChcbiAgICBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShgJHtib3RNZW1iZXIuaWR9JHtndWlsZC5pZH1gKSxcbiAgICBib3RNZW1iZXIsXG4gICk7XG5cbiAgcHJvY2Vzc2luZy5kZWxldGUoaWQpO1xuXG4gIGJvdC5ldmVudHMuZGVidWcoXG4gICAgYFtESVNQQVRDSF0gR3VpbGQgSUQgJHtpZH0gTmFtZTogJHtndWlsZC5uYW1lfSBjb21wbGV0ZWx5IGxvYWRlZC5gLFxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUFVLEFBQUM7QUFFckMsT0FBTyxlQUFlLG9CQUFvQixDQUN4QyxHQUFvQixFQUNwQixJQUEyQixFQUMzQjtJQUNBLHVFQUF1RTtJQUN2RSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUk7UUFBQyxjQUFjO1FBQUUsY0FBYztLQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPO0lBRXhFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQ3BDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTtRQUFDLGNBQWM7S0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBRXZDLElBQUksQ0FBQyxDQUFDLEVBQVUsRUFBRSxHQUVsQixJQUFJLENBQUMsQ0FBQyxFQUFVLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FDckMsQUFBQztJQUVGLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTztJQUU5QyxxRUFBcUU7SUFDckUsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN0QixHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixPQUFPO0tBQ1I7SUFFRCxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ2Qs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