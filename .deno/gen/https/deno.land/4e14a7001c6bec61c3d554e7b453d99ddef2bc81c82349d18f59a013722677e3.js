import { Collection } from "../../util/collection.ts";
/** Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events. */ export async function modifyRolePositions(bot, guildId, options) {
    const roles = await bot.rest.runMethod(bot.rest, "PATCH", bot.constants.routes.GUILD_ROLES(guildId), options);
    return new Collection(roles.map((role)=>{
        const result = bot.transformers.role(bot, {
            role,
            guildId
        });
        return [
            result.id,
            result
        ];
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkUm9sZSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuXG4vKiogTW9kaWZ5IHRoZSBwb3NpdGlvbnMgb2YgYSBzZXQgb2Ygcm9sZSBvYmplY3RzIGZvciB0aGUgZ3VpbGQuIFJlcXVpcmVzIHRoZSBNQU5BR0VfUk9MRVMgcGVybWlzc2lvbi4gUmV0dXJucyBhIGxpc3Qgb2YgYWxsIG9mIHRoZSBndWlsZCdzIHJvbGUgb2JqZWN0cyBvbiBzdWNjZXNzLiBGaXJlcyBtdWx0aXBsZSBHdWlsZCBSb2xlIFVwZGF0ZSBHYXRld2F5IGV2ZW50cy4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb2RpZnlSb2xlUG9zaXRpb25zKGJvdDogQm90LCBndWlsZElkOiBiaWdpbnQsIG9wdGlvbnM6IE1vZGlmeVJvbGVQb3NpdGlvbnNbXSkge1xuICBjb25zdCByb2xlcyA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkUm9sZVtdPihcbiAgICBib3QucmVzdCxcbiAgICBcIlBBVENIXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuR1VJTERfUk9MRVMoZ3VpbGRJZCksXG4gICAgb3B0aW9ucyxcbiAgKTtcblxuICByZXR1cm4gbmV3IENvbGxlY3Rpb24ocm9sZXMubWFwKChyb2xlKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYm90LnRyYW5zZm9ybWVycy5yb2xlKGJvdCwgeyByb2xlLCBndWlsZElkIH0pO1xuICAgIHJldHVybiBbcmVzdWx0LmlkLCByZXN1bHRdO1xuICB9KSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kaWZ5Um9sZVBvc2l0aW9ucyB7XG4gIC8qKiBUaGUgcm9sZSBpZCAqL1xuICBpZDogYmlnaW50O1xuICAvKiogVGhlIHNvcnRpbmcgcG9zaXRpb24gZm9yIHRoZSByb2xlLiAqL1xuICBwb3NpdGlvbj86IG51bWJlciB8IG51bGw7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyxVQUFVLFFBQVEsMEJBQTBCLENBQUM7QUFFdEQsd05BQXdOLENBQ3hOLE9BQU8sZUFBZSxtQkFBbUIsQ0FBQyxHQUFRLEVBQUUsT0FBZSxFQUFFLE9BQThCLEVBQUU7SUFDbkcsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDcEMsR0FBRyxDQUFDLElBQUksRUFDUixPQUFPLEVBQ1AsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUN6QyxPQUFPLENBQ1IsQUFBQztJQUVGLE9BQU8sSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBSztRQUN4QyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFBRSxJQUFJO1lBQUUsT0FBTztTQUFFLENBQUMsQUFBQztRQUM3RCxPQUFPO1lBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxNQUFNO1NBQUMsQ0FBQztLQUM1QixDQUFDLENBQUMsQ0FBQztDQUNMIn0=