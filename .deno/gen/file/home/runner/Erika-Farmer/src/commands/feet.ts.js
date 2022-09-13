import { ApplicationCommandTypes, baseEndpoints, iconBigintToHash, InteractionResponseTypes, } from "../../deps.ts";
import { createCommand } from "./mod.ts";
import { feetImages } from "../../configs.ts";
import { choose } from "../utils/sharedFunctions.ts";
createCommand({
    name: "feet",
    description: "Erika will send an anime feet picture from a list curated by hand",
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, interaction) => {
        var extension;
        if (iconBigintToHash(interaction.user.avatar).startsWith("a_")) {
            extension = ".gif";
        }
        await Bot.helpers.sendInteractionResponse(interaction.id, interaction.token, {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
                embeds: [{
                        author: {
                            name: interaction.user.username,
                            url: "https://beato-has-your-ip.cbase.repl.co/",
                            iconUrl: `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${iconBigintToHash(interaction.user.avatar)}${extension ?? ""}`,
                        },
                        title: "I, Erika Furudo, know your kink!",
                        description: "Feast with your eyes!",
                        image: {
                            url: choose(feetImages),
                        },
                    }],
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVldC50cyMwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVldC50cyMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsYUFBYSxFQUNiLGdCQUFnQixFQUNoQix3QkFBd0IsR0FDekIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJELGFBQWEsQ0FBQztJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osV0FBVyxFQUNULG1FQUFtRTtJQUNyRSxJQUFJLEVBQUUsdUJBQXVCLENBQUMsU0FBUztJQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUNsQyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0QsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQjtRQUNELE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDdkMsV0FBVyxDQUFDLEVBQUUsRUFDZCxXQUFXLENBQUMsS0FBSyxFQUNqQjtZQUNFLElBQUksRUFBRSx3QkFBd0IsQ0FBQyx3QkFBd0I7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxDQUFDO3dCQUNQLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixHQUFHLEVBQUUsMENBQTBDOzRCQUMvQyxPQUFPLEVBQ0wsR0FBRyxhQUFhLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUNyRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FDM0MsR0FBRyxTQUFTLElBQUksRUFBRSxFQUFFO3lCQUN2Qjt3QkFDRCxLQUFLLEVBQUUsa0NBQWtDO3dCQUN6QyxXQUFXLEVBQUUsdUJBQXVCO3dCQUNwQyxLQUFLLEVBQUU7NEJBQ0wsR0FBRyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUM7eUJBQ3hCO3FCQUNGLENBQUM7YUFDSDtTQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlcyxcbiAgQXBwbGljYXRpb25Db21tYW5kVHlwZXMsXG4gIGJhc2VFbmRwb2ludHMsXG4gIGljb25CaWdpbnRUb0hhc2gsXG4gIEludGVyYWN0aW9uUmVzcG9uc2VUeXBlcyxcbn0gZnJvbSBcIi4uLy4uL2RlcHMudHNcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ29tbWFuZCB9IGZyb20gXCIuL21vZC50c1wiO1xuaW1wb3J0IHsgZmVldEltYWdlcyB9IGZyb20gXCIuLi8uLi9jb25maWdzLnRzXCI7XG5pbXBvcnQgeyBjaG9vc2UgfSBmcm9tIFwiLi4vdXRpbHMvc2hhcmVkRnVuY3Rpb25zLnRzXCI7XG5cbmNyZWF0ZUNvbW1hbmQoe1xuICBuYW1lOiBcImZlZXRcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJFcmlrYSB3aWxsIHNlbmQgYW4gYW5pbWUgZmVldCBwaWN0dXJlIGZyb20gYSBsaXN0IGN1cmF0ZWQgYnkgaGFuZFwiLFxuICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRUeXBlcy5DaGF0SW5wdXQsXG4gIGV4ZWN1dGU6IGFzeW5jIChCb3QsIGludGVyYWN0aW9uKSA9PiB7XG4gICAgdmFyIGV4dGVuc2lvbjtcbiAgICBpZiAoaWNvbkJpZ2ludFRvSGFzaChpbnRlcmFjdGlvbi51c2VyLmF2YXRhciEpLnN0YXJ0c1dpdGgoXCJhX1wiKSkge1xuICAgICAgZXh0ZW5zaW9uID0gXCIuZ2lmXCI7XG4gICAgfVxuICAgIGF3YWl0IEJvdC5oZWxwZXJzLnNlbmRJbnRlcmFjdGlvblJlc3BvbnNlKFxuICAgICAgaW50ZXJhY3Rpb24uaWQsXG4gICAgICBpbnRlcmFjdGlvbi50b2tlbixcbiAgICAgIHtcbiAgICAgICAgdHlwZTogSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVzLkNoYW5uZWxNZXNzYWdlV2l0aFNvdXJjZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGVtYmVkczogW3tcbiAgICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgICBuYW1lOiBpbnRlcmFjdGlvbi51c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9iZWF0by1oYXMteW91ci1pcC5jYmFzZS5yZXBsLmNvL1wiLFxuICAgICAgICAgICAgICBpY29uVXJsOlxuICAgICAgICAgICAgICAgIGAke2Jhc2VFbmRwb2ludHMuQ0ROX1VSTH0vYXZhdGFycy8ke2ludGVyYWN0aW9uLnVzZXIuaWR9LyR7XG4gICAgICAgICAgICAgICAgICBpY29uQmlnaW50VG9IYXNoKGludGVyYWN0aW9uLnVzZXIuYXZhdGFyISlcbiAgICAgICAgICAgICAgICB9JHtleHRlbnNpb24gPz8gXCJcIn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkksIEVyaWthIEZ1cnVkbywga25vdyB5b3VyIGtpbmshXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGZWFzdCB3aXRoIHlvdXIgZXllcyFcIixcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgIHVybDogY2hvb3NlKGZlZXRJbWFnZXMpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfSxcbn0pO1xuIl19