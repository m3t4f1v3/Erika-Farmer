export function editBotProfile(bot) {
    const editBotProfileOld = bot.helpers.editBotProfile;
    bot.helpers.editBotProfile = async function(options) {
        // Nothing was edited
        if (!options.username && options.botAvatarURL === undefined) {
            throw new Error("There was no change to the username or avatar found in the request.");
        }
        // Check username requirements if username was provided
        if (options.username) {
            if (options.username.length > 32) {
                throw new Error("A username for the bot must be less than 32 characters.");
            }
            if (options.username.length < 2) {
                throw new Error("A username for the bot can not be less than 2 characters.");
            }
            if ([
                "@",
                "#",
                ":",
                "```"
            ].some((char)=>options.username.includes(char)
            )) {
                throw new Error("A bot username can not include @ # : or ```");
            }
            if ([
                "discordtag",
                "everyone",
                "here"
            ].includes(options.username)) {
                throw new Error("A bot username can not be set to `discordtag` `everyone` and `here`");
            }
        }
        return await editBotProfileOld(options);
    };
}
export default function setupMiscPermChecks(bot) {
    editBotProfile(bot);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWRpdEJvdFByb2ZpbGUoYm90OiBCb3RXaXRoQ2FjaGUpIHtcbiAgY29uc3QgZWRpdEJvdFByb2ZpbGVPbGQgPSBib3QuaGVscGVycy5lZGl0Qm90UHJvZmlsZTtcblxuICBib3QuaGVscGVycy5lZGl0Qm90UHJvZmlsZSA9IGFzeW5jIGZ1bmN0aW9uIChcbiAgICBvcHRpb25zLFxuICApIHtcbiAgICAvLyBOb3RoaW5nIHdhcyBlZGl0ZWRcbiAgICBpZiAoIW9wdGlvbnMudXNlcm5hbWUgJiYgb3B0aW9ucy5ib3RBdmF0YXJVUkwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlRoZXJlIHdhcyBubyBjaGFuZ2UgdG8gdGhlIHVzZXJuYW1lIG9yIGF2YXRhciBmb3VuZCBpbiB0aGUgcmVxdWVzdC5cIixcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIENoZWNrIHVzZXJuYW1lIHJlcXVpcmVtZW50cyBpZiB1c2VybmFtZSB3YXMgcHJvdmlkZWRcbiAgICBpZiAob3B0aW9ucy51c2VybmFtZSkge1xuICAgICAgaWYgKG9wdGlvbnMudXNlcm5hbWUubGVuZ3RoID4gMzIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiQSB1c2VybmFtZSBmb3IgdGhlIGJvdCBtdXN0IGJlIGxlc3MgdGhhbiAzMiBjaGFyYWN0ZXJzLlwiLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMudXNlcm5hbWUubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJBIHVzZXJuYW1lIGZvciB0aGUgYm90IGNhbiBub3QgYmUgbGVzcyB0aGFuIDIgY2hhcmFjdGVycy5cIixcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgW1wiQFwiLCBcIiNcIiwgXCI6XCIsIFwiYGBgXCJdLnNvbWUoKGNoYXIpID0+IG9wdGlvbnMudXNlcm5hbWUhLmluY2x1ZGVzKGNoYXIpKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgYm90IHVzZXJuYW1lIGNhbiBub3QgaW5jbHVkZSBAICMgOiBvciBgYGBcIik7XG4gICAgICB9XG4gICAgICBpZiAoW1wiZGlzY29yZHRhZ1wiLCBcImV2ZXJ5b25lXCIsIFwiaGVyZVwiXS5pbmNsdWRlcyhvcHRpb25zLnVzZXJuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJBIGJvdCB1c2VybmFtZSBjYW4gbm90IGJlIHNldCB0byBgZGlzY29yZHRhZ2AgYGV2ZXJ5b25lYCBhbmQgYGhlcmVgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGVkaXRCb3RQcm9maWxlT2xkKG9wdGlvbnMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cE1pc2NQZXJtQ2hlY2tzKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIGVkaXRCb3RQcm9maWxlKGJvdCk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxTQUFTLGNBQWMsQ0FBQyxHQUFpQixFQUFFO0lBQ2hELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEFBQUM7SUFFckQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsZUFDM0IsT0FBTyxFQUNQO1FBQ0EscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzNELE1BQU0sSUFBSSxLQUFLLENBQ2IscUVBQXFFLENBQ3RFLENBQUM7U0FDSDtRQUNELHVEQUF1RDtRQUN2RCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQ2IseURBQXlELENBQzFELENBQUM7YUFDSDtZQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixNQUFNLElBQUksS0FBSyxDQUNiLDJEQUEyRCxDQUM1RCxDQUFDO2FBQ0g7WUFDRCxJQUNFO2dCQUFDLEdBQUc7Z0JBQUUsR0FBRztnQkFBRSxHQUFHO2dCQUFFLEtBQUs7YUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBSyxPQUFPLENBQUMsUUFBUSxDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFBQSxDQUFDLEVBQ3ZFO2dCQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQzthQUNoRTtZQUNELElBQUk7Z0JBQUMsWUFBWTtnQkFBRSxVQUFVO2dCQUFFLE1BQU07YUFBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2pFLE1BQU0sSUFBSSxLQUFLLENBQ2IscUVBQXFFLENBQ3RFLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pDLENBQUM7Q0FDSDtBQUVELGVBQWUsU0FBUyxtQkFBbUIsQ0FBQyxHQUFpQixFQUFFO0lBQzdELGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNyQixDQUFBIn0=