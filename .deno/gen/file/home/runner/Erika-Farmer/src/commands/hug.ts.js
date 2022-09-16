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
        let extension;
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
                        title: "I love you",
                        description: `<@${interaction.user.id}> hugs <@${interaction.data.options[0].value}>`,
                        image: {
                            url: choose(hugImages),
                        },
                    }],
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVnLnRzIzIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodWcudHMjMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLHdCQUF3QixHQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckQsYUFBYSxDQUFDO0lBQ1osSUFBSSxFQUFFLEtBQUs7SUFDWCxXQUFXLEVBQUUsVUFBVTtJQUN2QixJQUFJLEVBQUUsdUJBQXVCLENBQUMsU0FBUztJQUN2QyxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsSUFBSTtZQUN4QyxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUNsQyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0QsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQjtRQUNELE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDdkMsV0FBVyxDQUFDLEVBQUUsRUFDZCxXQUFXLENBQUMsS0FBSyxFQUNqQjtZQUNFLElBQUksRUFBRSx3QkFBd0IsQ0FBQyx3QkFBd0I7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxDQUFDO3dCQUNQLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixHQUFHLEVBQ0Qsb0ZBQW9GOzRCQUN0RixPQUFPLEVBQ0wsR0FBRyxhQUFhLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUNyRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FDM0MsR0FBRyxTQUFTLElBQUksRUFBRSxFQUFFO3lCQUN2Qjt3QkFDRCxLQUFLLEVBQUUsWUFBWTt3QkFDbkIsV0FBVyxFQUFFLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQ25DLFdBQVcsQ0FBQyxJQUFLLENBQUMsT0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQ2hDLEdBQUc7d0JBQ0gsS0FBSyxFQUFFOzRCQUNMLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO3lCQUN2QjtxQkFDRixDQUFDO2FBQ0g7U0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZXMsXG4gIEFwcGxpY2F0aW9uQ29tbWFuZFR5cGVzLFxuICBiYXNlRW5kcG9pbnRzLFxuICBpY29uQmlnaW50VG9IYXNoLFxuICBJbnRlcmFjdGlvblJlc3BvbnNlVHlwZXMsXG59IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNvbW1hbmQgfSBmcm9tIFwiLi9tb2QudHNcIjtcbmltcG9ydCB7IGh1Z0ltYWdlcyB9IGZyb20gXCIuLi8uLi9jb25maWdzLnRzXCI7XG5pbXBvcnQgeyBjaG9vc2UgfSBmcm9tIFwiLi4vdXRpbHMvc2hhcmVkRnVuY3Rpb25zLnRzXCI7XG5cbmNyZWF0ZUNvbW1hbmQoe1xuICBuYW1lOiBcImh1Z1wiLFxuICBkZXNjcmlwdGlvbjogXCJIdWdzIHlvdVwiLFxuICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRUeXBlcy5DaGF0SW5wdXQsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImh1Z2dlZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiV2hvIGRvIHlvdSB3YW50IHRvIGh1Zz9cIixcbiAgICAgIHR5cGU6IEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVzLlVzZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBleGVjdXRlOiBhc3luYyAoQm90LCBpbnRlcmFjdGlvbikgPT4ge1xuICAgIGxldCBleHRlbnNpb247XG4gICAgaWYgKGljb25CaWdpbnRUb0hhc2goaW50ZXJhY3Rpb24udXNlci5hdmF0YXIhKS5zdGFydHNXaXRoKFwiYV9cIikpIHtcbiAgICAgIGV4dGVuc2lvbiA9IFwiLmdpZlwiO1xuICAgIH1cbiAgICBhd2FpdCBCb3QuaGVscGVycy5zZW5kSW50ZXJhY3Rpb25SZXNwb25zZShcbiAgICAgIGludGVyYWN0aW9uLmlkLFxuICAgICAgaW50ZXJhY3Rpb24udG9rZW4sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IEludGVyYWN0aW9uUmVzcG9uc2VUeXBlcy5DaGFubmVsTWVzc2FnZVdpdGhTb3VyY2UsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbWJlZHM6IFt7XG4gICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgbmFtZTogaW50ZXJhY3Rpb24udXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9za2V0Y2hmYWIuY29tL21vZGVscy84MTc4MmUwZjNiOTQ0NzJhYjJlMzM5ZjJlNTc3MjQ2Yy9lbWJlZD9jYW1lcmE9MCZkbnQ9MVwiLFxuICAgICAgICAgICAgICBpY29uVXJsOlxuICAgICAgICAgICAgICAgIGAke2Jhc2VFbmRwb2ludHMuQ0ROX1VSTH0vYXZhdGFycy8ke2ludGVyYWN0aW9uLnVzZXIuaWR9LyR7XG4gICAgICAgICAgICAgICAgICBpY29uQmlnaW50VG9IYXNoKGludGVyYWN0aW9uLnVzZXIuYXZhdGFyISlcbiAgICAgICAgICAgICAgICB9JHtleHRlbnNpb24gPz8gXCJcIn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkkgbG92ZSB5b3VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgPEAke2ludGVyYWN0aW9uLnVzZXIuaWR9PiBodWdzIDxAJHtcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb24uZGF0YSEub3B0aW9ucyFbMF0udmFsdWVcbiAgICAgICAgICAgIH0+YCxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgIHVybDogY2hvb3NlKGh1Z0ltYWdlcyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICB9LFxufSk7XG4iXX0=