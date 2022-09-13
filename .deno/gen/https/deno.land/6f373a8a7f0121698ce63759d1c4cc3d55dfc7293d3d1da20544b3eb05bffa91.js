import { Collection } from "../../util/collection.ts";
/**
 * Returns a list of emojis for the given guild.
 */ export async function getEmojis(bot, guildId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.GUILD_EMOJIS(guildId));
    return new Collection(result.map((e)=>[
            bot.transformers.snowflake(e.id),
            bot.transformers.emoji(bot, e)
        ]
    ));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRFbW9qaSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuXG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIGVtb2ppcyBmb3IgdGhlIGdpdmVuIGd1aWxkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlzKGJvdDogQm90LCBndWlsZElkOiBiaWdpbnQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPERpc2NvcmRFbW9qaVtdPihcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkdVSUxEX0VNT0pJUyhndWlsZElkKSxcbiAgKTtcblxuICByZXR1cm4gbmV3IENvbGxlY3Rpb24ocmVzdWx0Lm1hcCgoZSkgPT4gW2JvdC50cmFuc2Zvcm1lcnMuc25vd2ZsYWtlKGUuaWQhKSwgYm90LnRyYW5zZm9ybWVycy5lbW9qaShib3QsIGUpXSkpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLFNBQVMsVUFBVSxRQUFRLDBCQUEwQixDQUFDO0FBRXREOztHQUVHLENBQ0gsT0FBTyxlQUFlLFNBQVMsQ0FBQyxHQUFRLEVBQUUsT0FBZSxFQUFFO0lBQ3pELE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDM0MsQUFBQztJQUVGLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBSztZQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUU7WUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQUM7SUFBQSxDQUFDLENBQUMsQ0FBQztDQUMvRyJ9