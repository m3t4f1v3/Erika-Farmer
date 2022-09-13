import { Collection } from "../../util/collection.ts";
/** Returns a list of role objects for the guild.
 *
 * ⚠️ **If you need this, you are probably doing something wrong. This is not intended for use. Your roles will be cached in your guild.**
 */ export async function getRoles(bot, guildId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.GUILD_ROLES(guildId));
    const roleStructures = result.map((role)=>bot.transformers.role(bot, {
            role,
            guildId
        })
    );
    return new Collection(roleStructures.map((role)=>[
            role.id,
            role
        ]
    ));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdXRpbC9jb2xsZWN0aW9uLnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkUm9sZSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbi8qKiBSZXR1cm5zIGEgbGlzdCBvZiByb2xlIG9iamVjdHMgZm9yIHRoZSBndWlsZC5cbiAqXG4gKiDimqDvuI8gKipJZiB5b3UgbmVlZCB0aGlzLCB5b3UgYXJlIHByb2JhYmx5IGRvaW5nIHNvbWV0aGluZyB3cm9uZy4gVGhpcyBpcyBub3QgaW50ZW5kZWQgZm9yIHVzZS4gWW91ciByb2xlcyB3aWxsIGJlIGNhY2hlZCBpbiB5b3VyIGd1aWxkLioqXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSb2xlcyhib3Q6IEJvdCwgZ3VpbGRJZDogYmlnaW50KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkUm9sZVtdPihib3QucmVzdCwgXCJHRVRcIiwgYm90LmNvbnN0YW50cy5yb3V0ZXMuR1VJTERfUk9MRVMoZ3VpbGRJZCkpO1xuXG4gIGNvbnN0IHJvbGVTdHJ1Y3R1cmVzID0gcmVzdWx0Lm1hcCgocm9sZSkgPT4gYm90LnRyYW5zZm9ybWVycy5yb2xlKGJvdCwgeyByb2xlLCBndWlsZElkIH0pKTtcblxuICByZXR1cm4gbmV3IENvbGxlY3Rpb24ocm9sZVN0cnVjdHVyZXMubWFwKChyb2xlKSA9PiBbcm9sZS5pZCwgcm9sZV0pKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxTQUFTLFVBQVUsUUFBUSwwQkFBMEIsQ0FBQztBQUd0RDs7O0dBR0csQ0FDSCxPQUFPLGVBQWUsUUFBUSxDQUFDLEdBQVEsRUFBRSxPQUFlLEVBQUU7SUFDeEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEFBQUM7SUFFbkgsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFBRSxJQUFJO1lBQUUsT0FBTztTQUFFLENBQUM7SUFBQSxDQUFDLEFBQUM7SUFFM0YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFLO1lBQUMsSUFBSSxDQUFDLEVBQUU7WUFBRSxJQUFJO1NBQUM7SUFBQSxDQUFDLENBQUMsQ0FBQztDQUN0RSJ9