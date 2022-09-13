import { Collection } from "../../util/collection.ts";
/**
 * Query string to match username(s) and nickname(s) against
 */ export async function searchMembers(bot, guildId, query, options) {
    if (options?.limit) {
        if (options.limit < 1) throw new Error(bot.constants.Errors.MEMBER_SEARCH_LIMIT_TOO_LOW);
        if (options.limit > 1000) {
            throw new Error(bot.constants.Errors.MEMBER_SEARCH_LIMIT_TOO_HIGH);
        }
    }
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.GUILD_MEMBERS_SEARCH(guildId, query, options));
    return new Collection(result.map((member)=>{
        const m = bot.transformers.member(bot, member, guildId, bot.transformers.snowflake(member.user.id));
        return [
            m.id,
            m
        ];
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNlYXJjaE1lbWJlcnMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZGVuby50c1wiO1xuaW1wb3J0IHR5cGUgeyBEaXNjb3JkTWVtYmVyV2l0aFVzZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuaW1wb3J0IHsgQm90IH0gZnJvbSBcIi4uLy4uL2JvdC50c1wiO1xuXG4vKipcbiAqIFF1ZXJ5IHN0cmluZyB0byBtYXRjaCB1c2VybmFtZShzKSBhbmQgbmlja25hbWUocykgYWdhaW5zdFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoTWVtYmVycyhcbiAgYm90OiBCb3QsXG4gIGd1aWxkSWQ6IGJpZ2ludCxcbiAgcXVlcnk6IHN0cmluZyxcbiAgb3B0aW9ucz86IE9taXQ8U2VhcmNoTWVtYmVycywgXCJxdWVyeVwiPixcbikge1xuICBpZiAob3B0aW9ucz8ubGltaXQpIHtcbiAgICBpZiAob3B0aW9ucy5saW1pdCA8IDEpIHRocm93IG5ldyBFcnJvcihib3QuY29uc3RhbnRzLkVycm9ycy5NRU1CRVJfU0VBUkNIX0xJTUlUX1RPT19MT1cpO1xuICAgIGlmIChvcHRpb25zLmxpbWl0ID4gMTAwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGJvdC5jb25zdGFudHMuRXJyb3JzLk1FTUJFUl9TRUFSQ0hfTElNSVRfVE9PX0hJR0gpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkTWVtYmVyV2l0aFVzZXJbXT4oXG4gICAgYm90LnJlc3QsXG4gICAgXCJHRVRcIixcbiAgICBib3QuY29uc3RhbnRzLnJvdXRlcy5HVUlMRF9NRU1CRVJTX1NFQVJDSChndWlsZElkLCBxdWVyeSwgb3B0aW9ucyksXG4gICk7XG5cbiAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKFxuICAgIHJlc3VsdC5tYXAoKG1lbWJlcikgPT4ge1xuICAgICAgY29uc3QgbSA9IGJvdC50cmFuc2Zvcm1lcnMubWVtYmVyKGJvdCwgbWVtYmVyLCBndWlsZElkLCBib3QudHJhbnNmb3JtZXJzLnNub3dmbGFrZShtZW1iZXIudXNlci5pZCkpO1xuICAgICAgcmV0dXJuIFttLmlkLCBtXTtcbiAgICB9KSxcbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxTQUFTLFVBQVUsUUFBUSwwQkFBMEIsQ0FBQztBQUd0RDs7R0FFRyxDQUNILE9BQU8sZUFBZSxhQUFhLENBQ2pDLEdBQVEsRUFDUixPQUFlLEVBQ2YsS0FBYSxFQUNiLE9BQXNDLEVBQ3RDO0lBQ0EsSUFBSSxPQUFPLEVBQUUsS0FBSyxFQUFFO1FBQ2xCLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pGLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3BFO0tBQ0Y7SUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxHQUFHLENBQUMsSUFBSSxFQUNSLEtBQUssRUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUNuRSxBQUFDO0lBRUYsT0FBTyxJQUFJLFVBQVUsQ0FDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBSztRQUNyQixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEFBQUM7UUFDcEcsT0FBTztZQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQztTQUFDLENBQUM7S0FDbEIsQ0FBQyxDQUNILENBQUM7Q0FDSCJ9