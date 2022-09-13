/** Check how many members would be removed from the server in a prune operation. Requires the KICK_MEMBERS permission */ export async function getPruneCount(bot, guildId, options) {
    if (options?.days && options.days < 1) throw new Error(bot.constants.Errors.PRUNE_MIN_DAYS);
    if (options?.days && options.days > 30) throw new Error(bot.constants.Errors.PRUNE_MAX_DAYS);
    const result = await bot.rest.runMethod(bot.rest, "GET", bot.constants.routes.GUILD_PRUNE(guildId));
    return result.pruned;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIENoZWNrIGhvdyBtYW55IG1lbWJlcnMgd291bGQgYmUgcmVtb3ZlZCBmcm9tIHRoZSBzZXJ2ZXIgaW4gYSBwcnVuZSBvcGVyYXRpb24uIFJlcXVpcmVzIHRoZSBLSUNLX01FTUJFUlMgcGVybWlzc2lvbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBydW5lQ291bnQoYm90OiBCb3QsIGd1aWxkSWQ6IGJpZ2ludCwgb3B0aW9ucz86IEdldEd1aWxkUHJ1bmVDb3VudFF1ZXJ5KSB7XG4gIGlmIChvcHRpb25zPy5kYXlzICYmIG9wdGlvbnMuZGF5cyA8IDEpIHRocm93IG5ldyBFcnJvcihib3QuY29uc3RhbnRzLkVycm9ycy5QUlVORV9NSU5fREFZUyk7XG4gIGlmIChvcHRpb25zPy5kYXlzICYmIG9wdGlvbnMuZGF5cyA+IDMwKSB0aHJvdyBuZXcgRXJyb3IoYm90LmNvbnN0YW50cy5FcnJvcnMuUFJVTkVfTUFYX0RBWVMpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJvdC5yZXN0LnJ1bk1ldGhvZChcbiAgICBib3QucmVzdCxcbiAgICBcIkdFVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkdVSUxEX1BSVU5FKGd1aWxkSWQpLFxuICApO1xuXG4gIHJldHVybiByZXN1bHQucHJ1bmVkIGFzIG51bWJlcjtcbn1cblxuLyoqIGh0dHBzOi8vZGlzY29yZC5jb20vZGV2ZWxvcGVycy9kb2NzL3Jlc291cmNlcy9ndWlsZCNnZXQtZ3VpbGQtcHJ1bmUtY291bnQgKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0R3VpbGRQcnVuZUNvdW50UXVlcnkge1xuICAvKiogTnVtYmVyIG9mIGRheXMgdG8gY291bnQgcHJ1bmUgZm9yICgxIG9yIG1vcmUpLCBkZWZhdWx0OiA3ICovXG4gIGRheXM/OiBudW1iZXI7XG4gIC8qKiBSb2xlKHMpIHRvIGluY2x1ZGUsIGRlZmF1bHQ6IG5vbmUgKi9cbiAgaW5jbHVkZVJvbGVzPzogc3RyaW5nIHwgc3RyaW5nW107XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEseUhBQXlILENBQ3pILE9BQU8sZUFBZSxhQUFhLENBQUMsR0FBUSxFQUFFLE9BQWUsRUFBRSxPQUFpQyxFQUFFO0lBQ2hHLElBQUksT0FBTyxFQUFFLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVGLElBQUksT0FBTyxFQUFFLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTdGLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsS0FBSyxFQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FDMUMsQUFBQztJQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBVztDQUNoQyJ9