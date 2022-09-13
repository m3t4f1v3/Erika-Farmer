import { ScheduledEventEntityType, ScheduledEventPrivacyLevel } from "../../../types/shared.ts";
/** Create a guild scheduled event in the guild. A guild can have a maximum of 100 events with `SCHEDULED` or `ACTIVE` status at any time. */ export async function createScheduledEvent(bot, guildId, options) {
    if (!bot.utils.validateLength(options.name, {
        min: 1,
        max: 100
    })) {
        throw new Error("Name must be between 1-100 characters.");
    }
    if (options.description && !bot.utils.validateLength(options.description, {
        max: 1000
    })) {
        throw new Error("Description must be below 1000 characters.");
    }
    if (options.location) {
        if (!bot.utils.validateLength(options.location, {
            max: 100
        })) {
            throw new Error("Location must be below 100 characters.");
        }
        if (options.entityType === ScheduledEventEntityType.Voice) {
            throw new Error("Location can not be provided for a Voice event.");
        }
    }
    if (options.entityType === ScheduledEventEntityType.External) {
        if (!options.scheduledEndTime) throw new Error("A scheduled end time is required when making an External event.");
        if (!options.location) throw new Error("A location is required when making an External event.");
    }
    if (options.scheduledStartTime && options.scheduledEndTime && options.scheduledStartTime > options.scheduledEndTime) {
        throw new Error("Cannot schedule event to end before starting.");
    }
    const event = await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.GUILD_SCHEDULED_EVENTS(guildId), {
        channel_id: options.channelId?.toString(),
        entity_metadata: options.location ? {
            location: options.location
        } : undefined,
        name: options.name,
        description: options.description,
        scheduled_start_time: new Date(options.scheduledStartTime).toISOString(),
        scheduled_end_time: options.scheduledEndTime ? new Date(options.scheduledEndTime).toISOString() : undefined,
        privacy_level: options.privacyLevel || ScheduledEventPrivacyLevel.GuildOnly,
        entity_type: options.entityType,
        reason: options.reason
    });
    return bot.transformers.scheduledEvent(bot, event);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkU2NoZWR1bGVkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgU2NoZWR1bGVkRXZlbnRFbnRpdHlUeXBlLCBTY2hlZHVsZWRFdmVudFByaXZhY3lMZXZlbCB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcblxuLyoqIENyZWF0ZSBhIGd1aWxkIHNjaGVkdWxlZCBldmVudCBpbiB0aGUgZ3VpbGQuIEEgZ3VpbGQgY2FuIGhhdmUgYSBtYXhpbXVtIG9mIDEwMCBldmVudHMgd2l0aCBgU0NIRURVTEVEYCBvciBgQUNUSVZFYCBzdGF0dXMgYXQgYW55IHRpbWUuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGVkRXZlbnQoYm90OiBCb3QsIGd1aWxkSWQ6IGJpZ2ludCwgb3B0aW9uczogQ3JlYXRlU2NoZWR1bGVkRXZlbnQpIHtcbiAgaWYgKCFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgob3B0aW9ucy5uYW1lLCB7IG1pbjogMSwgbWF4OiAxMDAgfSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOYW1lIG11c3QgYmUgYmV0d2VlbiAxLTEwMCBjaGFyYWN0ZXJzLlwiKTtcbiAgfVxuICBpZiAob3B0aW9ucy5kZXNjcmlwdGlvbiAmJiAhYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKG9wdGlvbnMuZGVzY3JpcHRpb24sIHsgbWF4OiAxMDAwIH0pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRGVzY3JpcHRpb24gbXVzdCBiZSBiZWxvdyAxMDAwIGNoYXJhY3RlcnMuXCIpO1xuICB9XG4gIGlmIChvcHRpb25zLmxvY2F0aW9uKSB7XG4gICAgaWYgKCFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgob3B0aW9ucy5sb2NhdGlvbiwgeyBtYXg6IDEwMCB9KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9jYXRpb24gbXVzdCBiZSBiZWxvdyAxMDAgY2hhcmFjdGVycy5cIik7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVudGl0eVR5cGUgPT09IFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZS5Wb2ljZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9jYXRpb24gY2FuIG5vdCBiZSBwcm92aWRlZCBmb3IgYSBWb2ljZSBldmVudC5cIik7XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLmVudGl0eVR5cGUgPT09IFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZS5FeHRlcm5hbCkge1xuICAgIGlmICghb3B0aW9ucy5zY2hlZHVsZWRFbmRUaW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJBIHNjaGVkdWxlZCBlbmQgdGltZSBpcyByZXF1aXJlZCB3aGVuIG1ha2luZyBhbiBFeHRlcm5hbCBldmVudC5cIik7XG4gICAgaWYgKCFvcHRpb25zLmxvY2F0aW9uKSB0aHJvdyBuZXcgRXJyb3IoXCJBIGxvY2F0aW9uIGlzIHJlcXVpcmVkIHdoZW4gbWFraW5nIGFuIEV4dGVybmFsIGV2ZW50LlwiKTtcbiAgfVxuICBpZiAob3B0aW9ucy5zY2hlZHVsZWRTdGFydFRpbWUgJiYgb3B0aW9ucy5zY2hlZHVsZWRFbmRUaW1lICYmIG9wdGlvbnMuc2NoZWR1bGVkU3RhcnRUaW1lID4gb3B0aW9ucy5zY2hlZHVsZWRFbmRUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNjaGVkdWxlIGV2ZW50IHRvIGVuZCBiZWZvcmUgc3RhcnRpbmcuXCIpO1xuICB9XG5cbiAgY29uc3QgZXZlbnQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZFNjaGVkdWxlZEV2ZW50PihcbiAgICBib3QucmVzdCxcbiAgICBcIlBPU1RcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5HVUlMRF9TQ0hFRFVMRURfRVZFTlRTKGd1aWxkSWQpLFxuICAgIHtcbiAgICAgIGNoYW5uZWxfaWQ6IG9wdGlvbnMuY2hhbm5lbElkPy50b1N0cmluZygpLFxuICAgICAgZW50aXR5X21ldGFkYXRhOiBvcHRpb25zLmxvY2F0aW9uID8geyBsb2NhdGlvbjogb3B0aW9ucy5sb2NhdGlvbiB9IDogdW5kZWZpbmVkLFxuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBzY2hlZHVsZWRfc3RhcnRfdGltZTogbmV3IERhdGUob3B0aW9ucy5zY2hlZHVsZWRTdGFydFRpbWUpLnRvSVNPU3RyaW5nKCksXG4gICAgICBzY2hlZHVsZWRfZW5kX3RpbWU6IG9wdGlvbnMuc2NoZWR1bGVkRW5kVGltZSA/IG5ldyBEYXRlKG9wdGlvbnMuc2NoZWR1bGVkRW5kVGltZSkudG9JU09TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHByaXZhY3lfbGV2ZWw6IG9wdGlvbnMucHJpdmFjeUxldmVsIHx8IFNjaGVkdWxlZEV2ZW50UHJpdmFjeUxldmVsLkd1aWxkT25seSxcbiAgICAgIGVudGl0eV90eXBlOiBvcHRpb25zLmVudGl0eVR5cGUsXG4gICAgICByZWFzb246IG9wdGlvbnMucmVhc29uLFxuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIGJvdC50cmFuc2Zvcm1lcnMuc2NoZWR1bGVkRXZlbnQoYm90LCBldmVudCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlU2NoZWR1bGVkRXZlbnQge1xuICAvKiogdGhlIGNoYW5uZWwgaWQgb2YgdGhlIHNjaGVkdWxlZCBldmVudC4gKi9cbiAgY2hhbm5lbElkPzogYmlnaW50O1xuICAvKiogbG9jYXRpb24gb2YgdGhlIGV2ZW50LiBSZXF1aXJlZCBmb3IgZXZlbnRzIHdpdGggYGVudGl0eVR5cGU6IFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZS5FeHRlcm5hbGAgKi9cbiAgbG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKiB0aGUgbmFtZSBvZiB0aGUgc2NoZWR1bGVkIGV2ZW50ICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgc2NoZWR1bGVkIGV2ZW50ICovXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8qKiB0aGUgdGltZSB0aGUgc2NoZWR1bGVkIGV2ZW50IHdpbGwgc3RhcnQgKi9cbiAgc2NoZWR1bGVkU3RhcnRUaW1lOiBudW1iZXI7XG4gIC8qKiB0aGUgdGltZSB0aGUgc2NoZWR1bGVkIGV2ZW50IHdpbGwgZW5kIGlmIGl0IGRvZXMgZW5kLiBSZXF1aXJlZCBmb3IgZXZlbnRzIHdpdGggYGVudGl0eVR5cGU6IFNjaGVkdWxlZEV2ZW50RW50aXR5VHlwZS5FeHRlcm5hbGAgKi9cbiAgc2NoZWR1bGVkRW5kVGltZT86IG51bWJlcjtcbiAgLyoqIHRoZSBwcml2YWN5IGxldmVsIG9mIHRoZSBzY2hlZHVsZWQgZXZlbnQgKi9cbiAgcHJpdmFjeUxldmVsPzogU2NoZWR1bGVkRXZlbnRQcml2YWN5TGV2ZWw7XG4gIC8qKiB0aGUgdHlwZSBvZiBob3N0aW5nIGVudGl0eSBhc3NvY2lhdGVkIHdpdGggYSBzY2hlZHVsZWQgZXZlbnQgKi9cbiAgZW50aXR5VHlwZTogU2NoZWR1bGVkRXZlbnRFbnRpdHlUeXBlO1xuICByZWFzb24/OiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyx3QkFBd0IsRUFBRSwwQkFBMEIsUUFBUSwwQkFBMEIsQ0FBQztBQUVoRyw2SUFBNkksQ0FDN0ksT0FBTyxlQUFlLG9CQUFvQixDQUFDLEdBQVEsRUFBRSxPQUFlLEVBQUUsT0FBNkIsRUFBRTtJQUNuRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLEdBQUc7S0FBRSxDQUFDLEVBQUU7UUFDakUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxD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