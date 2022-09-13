import { Collection } from "../../util/collection.ts";
/** Returns an array of voice regions that can be used when creating servers. */ export async function getAvailableVoiceRegions(bot) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.VOICE_REGIONS());
    return new Collection(result.map((region)=>{
        const voiceRegion = bot.transformers.voiceRegion(bot, region);
        return [
            voiceRegion.id,
            voiceRegion
        ];
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRWb2ljZVJlZ2lvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuXG4vKiogUmV0dXJucyBhbiBhcnJheSBvZiB2b2ljZSByZWdpb25zIHRoYXQgY2FuIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBzZXJ2ZXJzLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZVZvaWNlUmVnaW9ucyhib3Q6IEJvdCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZFZvaWNlUmVnaW9uW10+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiR0VUXCIsXG4gICAgYm90LmNvbnN0YW50cy5yb3V0ZXMuVk9JQ0VfUkVHSU9OUygpLFxuICApO1xuXG4gIHJldHVybiBuZXcgQ29sbGVjdGlvbihcbiAgICByZXN1bHQubWFwKChyZWdpb24pID0+IHtcbiAgICAgIGNvbnN0IHZvaWNlUmVnaW9uID0gYm90LnRyYW5zZm9ybWVycy52b2ljZVJlZ2lvbihib3QsIHJlZ2lvbik7XG4gICAgICByZXR1cm4gW3ZvaWNlUmVnaW9uLmlkLCB2b2ljZVJlZ2lvbl07XG4gICAgfSksXG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyxVQUFVLFFBQVEsMEJBQTBCLENBQUM7QUFFdEQsZ0ZBQWdGLENBQ2hGLE9BQU8sZUFBZSx3QkFBd0IsQ0FBQyxHQUFRLEVBQUU7SUFDdkQsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDckMsR0FBRyxDQUFDLElBQUksRUFDUixLQUFLLEVBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQ3JDLEFBQUM7SUFFRixPQUFPLElBQUksVUFBVSxDQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFLO1FBQ3JCLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQUFBQztRQUM5RCxPQUFPO1lBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxXQUFXO1NBQUMsQ0FBQztLQUN0QyxDQUFDLENBQ0gsQ0FBQztDQUNIIn0=