import { ApplicationCommandOptionTypes, ApplicationCommandTypes, baseEndpoints, iconBigintToHash, InteractionResponseTypes, } from "../../deps.ts";
import { createCommand } from "./mod.ts";
import { hugImages } from "../../configs.ts";
import { choose } from "../utils/sharedFunctions.ts";
createCommand({
    name: "hug",
    description: "Hugs you",
    type: ApplicationCommandTypes.ChatInput,
    options: [
        {
            name: "huggee",
            description: "Who do you want to hug?",
            type: ApplicationCommandOptionTypes.User,
            required: true,
        },
    ],
    execute: async (Bot, interaction) => {
        var extension;
        var personToHug;
        if (iconBigintToHash(interaction.user.avatar).startsWith("a_")) {
            extension = ".gif";
        }
        await Bot.helpers.sendInteractionResponse(interaction.id, interaction.token, {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
                embeds: [{
                        author: {
                            name: interaction.user.username,
                            url: "https://sketchfab.com/models/81782e0f3b94472ab2e339f2e577246c/embed?camera=0&dnt=1",
                            iconUrl: `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${iconBigintToHash(interaction.user.avatar)}${extension ?? ""}`,
                        },
                        description: `<@${interaction.user.id}> hugs <@${interaction.data.options[0].value}>`,
                        title: "I love you",
                        image: {
                            url: choose(hugImages),
                        },
                    }],
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVnLnRzIzAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodWcudHMjMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLHdCQUF3QixHQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckQsYUFBYSxDQUFDO0lBQ1osSUFBSSxFQUFFLEtBQUs7SUFDWCxXQUFXLEVBQUUsVUFBVTtJQUN2QixJQUFJLEVBQUUsdUJBQXVCLENBQUMsU0FBUztJQUN2QyxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsSUFBSTtZQUN4QyxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUNsQyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksV0FBVyxDQUFDO1FBQ2hCLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0QsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQjtRQUNELE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDdkMsV0FBVyxDQUFDLEVBQUUsRUFDZCxXQUFXLENBQUMsS0FBSyxFQUNqQjtZQUNFLElBQUksRUFBRSx3QkFBd0IsQ0FBQyx3QkFBd0I7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxDQUFDO3dCQUNQLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixHQUFHLEVBQ0Qsb0ZBQW9GOzRCQUN0RixPQUFPLEVBQ0wsR0FBRyxhQUFhLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUNyRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FDM0MsR0FBRyxTQUFTLElBQUksRUFBRSxFQUFFO3lCQUN2Qjt3QkFDRCxXQUFXLEVBQUUsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxXQUFXLENBQUMsSUFBSyxDQUFDLE9BQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7d0JBQ3ZGLEtBQUssRUFBRSxZQUFZO3dCQUNuQixLQUFLLEVBQUU7NEJBQ0wsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUM7eUJBQ3ZCO3FCQUNGLENBQUM7YUFDSDtTQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlcyxcbiAgQXBwbGljYXRpb25Db21tYW5kVHlwZXMsXG4gIGJhc2VFbmRwb2ludHMsXG4gIGljb25CaWdpbnRUb0hhc2gsXG4gIEludGVyYWN0aW9uUmVzcG9uc2VUeXBlcyxcbn0gZnJvbSBcIi4uLy4uL2RlcHMudHNcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ29tbWFuZCB9IGZyb20gXCIuL21vZC50c1wiO1xuaW1wb3J0IHsgaHVnSW1hZ2VzIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MudHNcIjtcbmltcG9ydCB7IGNob29zZSB9IGZyb20gXCIuLi91dGlscy9zaGFyZWRGdW5jdGlvbnMudHNcIjtcblxuY3JlYXRlQ29tbWFuZCh7XG4gIG5hbWU6IFwiaHVnXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkh1Z3MgeW91XCIsXG4gIHR5cGU6IEFwcGxpY2F0aW9uQ29tbWFuZFR5cGVzLkNoYXRJbnB1dCxcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiaHVnZ2VlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJXaG8gZG8geW91IHdhbnQgdG8gaHVnP1wiLFxuICAgICAgdHlwZTogQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZXMuVXNlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGV4ZWN1dGU6IGFzeW5jIChCb3QsIGludGVyYWN0aW9uKSA9PiB7XG4gICAgdmFyIGV4dGVuc2lvbjtcbiAgICB2YXIgcGVyc29uVG9IdWc7XG4gICAgaWYgKGljb25CaWdpbnRUb0hhc2goaW50ZXJhY3Rpb24udXNlci5hdmF0YXIhKS5zdGFydHNXaXRoKFwiYV9cIikpIHtcbiAgICAgIGV4dGVuc2lvbiA9IFwiLmdpZlwiO1xuICAgIH1cbiAgICBhd2FpdCBCb3QuaGVscGVycy5zZW5kSW50ZXJhY3Rpb25SZXNwb25zZShcbiAgICAgIGludGVyYWN0aW9uLmlkLFxuICAgICAgaW50ZXJhY3Rpb24udG9rZW4sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IEludGVyYWN0aW9uUmVzcG9uc2VUeXBlcy5DaGFubmVsTWVzc2FnZVdpdGhTb3VyY2UsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbWJlZHM6IFt7XG4gICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgbmFtZTogaW50ZXJhY3Rpb24udXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9za2V0Y2hmYWIuY29tL21vZGVscy84MTc4MmUwZjNiOTQ0NzJhYjJlMzM5ZjJlNTc3MjQ2Yy9lbWJlZD9jYW1lcmE9MCZkbnQ9MVwiLFxuICAgICAgICAgICAgICBpY29uVXJsOlxuICAgICAgICAgICAgICAgIGAke2Jhc2VFbmRwb2ludHMuQ0ROX1VSTH0vYXZhdGFycy8ke2ludGVyYWN0aW9uLnVzZXIuaWR9LyR7XG4gICAgICAgICAgICAgICAgICBpY29uQmlnaW50VG9IYXNoKGludGVyYWN0aW9uLnVzZXIuYXZhdGFyISlcbiAgICAgICAgICAgICAgICB9JHtleHRlbnNpb24gPz8gXCJcIn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgPEAke2ludGVyYWN0aW9uLnVzZXIuaWR9PiBodWdzIDxAJHtpbnRlcmFjdGlvbi5kYXRhIS5vcHRpb25zIVswXS52YWx1ZX0+YCxcbiAgICAgICAgICAgIHRpdGxlOiBcIkkgbG92ZSB5b3VcIixcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgIHVybDogY2hvb3NlKGh1Z0ltYWdlcyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICB9LFxufSk7XG4iXX0=