export async function createGuildTemplate(bot, guildId, data) {
    if (data.name.length < 1 || data.name.length > 100) {
        throw new Error("The name can only be in between 1-100 characters.");
    }
    if (data.description?.length && data.description.length > 120) {
        throw new Error("The description can only be in between 0-120 characters.");
    }
    return await bot.rest.runMethod(bot.rest, "POST", bot.constants.routes.GUILD_TEMPLATES(guildId), data);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlR3VpbGRUZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZUd1aWxkVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxHQUFRLEVBQUUsT0FBZSxFQUFFLElBQW9CO0lBQ3ZGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNsRCxNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7S0FDdEU7SUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM3RCxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7S0FDN0U7SUFFRCxPQUFPLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQzdCLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsTUFBTSxFQUNOLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFDN0MsSUFBSSxDQUNMLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkVGVtcGxhdGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuXG4vKiogQ3JlYXRlcyBhIHRlbXBsYXRlIGZvciB0aGUgZ3VpbGQuIFJlcXVpcmVzIHRoZSBgTUFOQUdFX0dVSUxEYCBwZXJtaXNzaW9uLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUd1aWxkVGVtcGxhdGUoYm90OiBCb3QsIGd1aWxkSWQ6IGJpZ2ludCwgZGF0YTogQ3JlYXRlVGVtcGxhdGUpIHtcbiAgaWYgKGRhdGEubmFtZS5sZW5ndGggPCAxIHx8IGRhdGEubmFtZS5sZW5ndGggPiAxMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbmFtZSBjYW4gb25seSBiZSBpbiBiZXR3ZWVuIDEtMTAwIGNoYXJhY3RlcnMuXCIpO1xuICB9XG5cbiAgaWYgKGRhdGEuZGVzY3JpcHRpb24/Lmxlbmd0aCAmJiBkYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDEyMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBkZXNjcmlwdGlvbiBjYW4gb25seSBiZSBpbiBiZXR3ZWVuIDAtMTIwIGNoYXJhY3RlcnMuXCIpO1xuICB9XG5cbiAgcmV0dXJuIGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZDxEaXNjb3JkVGVtcGxhdGU+KFxuICAgIGJvdC5yZXN0LFxuICAgIFwiUE9TVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkdVSUxEX1RFTVBMQVRFUyhndWlsZElkKSxcbiAgICBkYXRhLFxuICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVRlbXBsYXRlIHtcbiAgLyoqIE5hbWUgd2hpY2ggdGhlIHRlbXBsYXRlIHNob3VsZCBoYXZlICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIERlc2NyaXB0aW9uIG9mIHRoZSB0ZW1wbGF0ZSAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cbiJdfQ==