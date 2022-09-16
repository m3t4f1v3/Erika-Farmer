import { Collection } from "../../../util/collection.ts";
export async function getApplicationCommands(bot, guildId) {
    const result = await bot.rest.runMethod(bot.rest, "GET", guildId
        ? bot.constants.routes.COMMANDS_GUILD(bot.applicationId, guildId)
        : bot.constants.routes.COMMANDS(bot.applicationId));
    return new Collection(result.map((res) => {
        const command = bot.transformers.applicationCommand(bot, res);
        return [command.id, command];
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXBwbGljYXRpb25Db21tYW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldEFwcGxpY2F0aW9uQ29tbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBS3pELE1BQU0sQ0FBQyxLQUFLLFVBQVUsc0JBQXNCLENBQUMsR0FBUSxFQUFFLE9BQWdCO0lBQ3JFLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLE9BQU87UUFDTCxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUNyRCxDQUFDO0lBRUYsT0FBTyxJQUFJLFVBQVUsQ0FDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi91dGlsL2NvbGxlY3Rpb24udHNcIjtcbmltcG9ydCB0eXBlIHsgQm90IH0gZnJvbSBcIi4uLy4uLy4uL2JvdC50c1wiO1xuaW1wb3J0IHsgRGlzY29yZEFwcGxpY2F0aW9uQ29tbWFuZCB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbi8qKiBGZXRjaCBhbGwgdGhlIGNvbW1hbmRzIGZvciB5b3VyIGFwcGxpY2F0aW9uLiBJZiBhIGd1aWxkIGlkIGlzIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBmZXRjaCBnbG9iYWwgY29tbWFuZHMuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25Db21tYW5kcyhib3Q6IEJvdCwgZ3VpbGRJZD86IGJpZ2ludCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8RGlzY29yZEFwcGxpY2F0aW9uQ29tbWFuZFtdPihcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGd1aWxkSWRcbiAgICAgID8gYm90LmNvbnN0YW50cy5yb3V0ZXMuQ09NTUFORFNfR1VJTEQoYm90LmFwcGxpY2F0aW9uSWQsIGd1aWxkSWQpXG4gICAgICA6IGJvdC5jb25zdGFudHMucm91dGVzLkNPTU1BTkRTKGJvdC5hcHBsaWNhdGlvbklkKSxcbiAgKTtcblxuICByZXR1cm4gbmV3IENvbGxlY3Rpb24oXG4gICAgcmVzdWx0Lm1hcCgocmVzKSA9PiB7XG4gICAgICBjb25zdCBjb21tYW5kID0gYm90LnRyYW5zZm9ybWVycy5hcHBsaWNhdGlvbkNvbW1hbmQoYm90LCByZXMpO1xuICAgICAgcmV0dXJuIFtjb21tYW5kLmlkLCBjb21tYW5kXTtcbiAgICB9KSxcbiAgKTtcbn1cbiJdfQ==