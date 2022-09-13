import { Collection } from "../../util/collection.ts";
/** Gets the invites for this channel. Requires MANAGE_CHANNEL */ export async function getChannelInvites(bot, channelId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.CHANNEL_INVITES(channelId));
    return new Collection(result.map((invite)=>[
            invite.code,
            {
                uses: invite.uses,
                maxUses: invite.max_uses,
                maxAge: invite.max_age,
                temporary: invite.temporary,
                createdAt: Date.parse(invite.created_at)
            }, 
        ]
    ));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkSW52aXRlTWV0YWRhdGEgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG4vKiogR2V0cyB0aGUgaW52aXRlcyBmb3IgdGhpcyBjaGFubmVsLiBSZXF1aXJlcyBNQU5BR0VfQ0hBTk5FTCAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENoYW5uZWxJbnZpdGVzKGJvdDogQm90LCBjaGFubmVsSWQ6IGJpZ2ludCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZEludml0ZU1ldGFkYXRhW10+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiR0VUXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuQ0hBTk5FTF9JTlZJVEVTKGNoYW5uZWxJZCksXG4gICk7XG5cbiAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKFxuICAgIHJlc3VsdC5tYXAoKGludml0ZSkgPT4gW1xuICAgICAgaW52aXRlLmNvZGUsXG4gICAgICB7XG4gICAgICAgIHVzZXM6IGludml0ZS51c2VzLFxuICAgICAgICBtYXhVc2VzOiBpbnZpdGUubWF4X3VzZXMsXG4gICAgICAgIG1heEFnZTogaW52aXRlLm1heF9hZ2UsXG4gICAgICAgIHRlbXBvcmFyeTogaW52aXRlLnRlbXBvcmFyeSxcbiAgICAgICAgY3JlYXRlZEF0OiBEYXRlLnBhcnNlKGludml0ZS5jcmVhdGVkX2F0KSxcbiAgICAgIH0sXG4gICAgXSksXG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlNBQVMsVUFBVSxRQUFRLDBCQUEwQixDQUFDO0FBSXRELGlFQUFpRSxDQUNqRSxPQUFPLGVBQWUsaUJBQWlCLENBQUMsR0FBUSxFQUFFLFNBQWlCLEVBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxDQUFDLElBQUksRUFDUixLQUFLLEVBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUNoRCxBQUFDO0lBRUYsT0FBTyxJQUFJLFVBQVUsQ0FDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBSztZQUNyQixNQUFNLENBQUMsSUFBSTtZQUNYO2dCQUNFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRO2dCQUN4QixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU87Z0JBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztnQkFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUN6QztTQUNGO0lBQUEsQ0FBQyxDQUNILENBQUM7Q0FDSCJ9