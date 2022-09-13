import { Collection } from "../../util/collection.ts";
/** Gets the webhooks for this channel. Requires MANAGE_WEBHOOKS */ export async function getChannelWebhooks(bot, channelId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.CHANNEL_WEBHOOKS(channelId));
    return new Collection(result.map((hook)=>{
        const webhook = bot.transformers.webhook(bot, hook);
        return [
            webhook.id,
            webhook
        ];
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkV2ViaG9vayB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbi8qKiBHZXRzIHRoZSB3ZWJob29rcyBmb3IgdGhpcyBjaGFubmVsLiBSZXF1aXJlcyBNQU5BR0VfV0VCSE9PS1MgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaGFubmVsV2ViaG9va3MoYm90OiBCb3QsIGNoYW5uZWxJZDogYmlnaW50KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkV2ViaG9va1tdPihcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkNIQU5ORUxfV0VCSE9PS1MoY2hhbm5lbElkKSxcbiAgKTtcblxuICByZXR1cm4gbmV3IENvbGxlY3Rpb24ocmVzdWx0Lm1hcCgoaG9vaykgPT4ge1xuICAgIGNvbnN0IHdlYmhvb2sgPSBib3QudHJhbnNmb3JtZXJzLndlYmhvb2soYm90LCBob29rKTtcbiAgICByZXR1cm4gW3dlYmhvb2suaWQsIHdlYmhvb2tdO1xuICB9KSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlNBQVMsVUFBVSxRQUFRLDBCQUEwQixDQUFDO0FBSXRELG1FQUFtRSxDQUNuRSxPQUFPLGVBQWUsa0JBQWtCLENBQUMsR0FBUSxFQUFFLFNBQWlCLEVBQUU7SUFDcEUsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxDQUFDLElBQUksRUFDUixLQUFLLEVBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQ2pELEFBQUM7SUFFRixPQUFPLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUs7UUFDekMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxBQUFDO1FBQ3BELE9BQU87WUFBQyxPQUFPLENBQUMsRUFBRTtZQUFFLE9BQU87U0FBQyxDQUFDO0tBQzlCLENBQUMsQ0FBQyxDQUFDO0NBQ0wifQ==