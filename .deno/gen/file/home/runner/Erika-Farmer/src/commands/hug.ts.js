import { ApplicationCommandOptionTypes, ApplicationCommandTypes, baseEndpoints, iconBigintToHash, InteractionResponseTypes, } from "../../deps.ts";
import { createCommand } from "./mod.ts";
import { choose, getValues } from "../utils/sharedFunctions.ts";
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
                            url: choose(Object.keys(await getValues(interaction.guildId, "hugImages"))),
                        },
                    }],
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVnLnRzIzMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodWcudHMjMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLHdCQUF3QixHQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFaEUsYUFBYSxDQUFDO0lBQ1osSUFBSSxFQUFFLEtBQUs7SUFDWCxXQUFXLEVBQUUsVUFBVTtJQUN2QixJQUFJLEVBQUUsdUJBQXVCLENBQUMsU0FBUztJQUN2QyxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsSUFBSTtZQUN4QyxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUNsQyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0QsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQjtRQUVELE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDdkMsV0FBVyxDQUFDLEVBQUUsRUFDZCxXQUFXLENBQUMsS0FBSyxFQUNqQjtZQUNFLElBQUksRUFBRSx3QkFBd0IsQ0FBQyx3QkFBd0I7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxDQUFDO3dCQUNQLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixHQUFHLEVBQ0Qsb0ZBQW9GOzRCQUN0RixPQUFPLEVBQ0wsR0FBRyxhQUFhLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUNyRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FDM0MsR0FBRyxTQUFTLElBQUksRUFBRSxFQUFFO3lCQUN2Qjt3QkFDRCxLQUFLLEVBQUUsWUFBWTt3QkFDbkIsV0FBVyxFQUFFLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQ25DLFdBQVcsQ0FBQyxJQUFLLENBQUMsT0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQ2hDLEdBQUc7d0JBQ0gsS0FBSyxFQUFFOzRCQUNMLEdBQUcsRUFBRSxNQUFNLENBQ1QsTUFBTSxDQUFDLElBQUksQ0FDVCxNQUFNLFNBQVMsQ0FDYixXQUFXLENBQUMsT0FBaUIsRUFDN0IsV0FBVyxDQUNBLENBQ2QsQ0FDRjt5QkFDRjtxQkFDRixDQUFDO2FBQ0g7U0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZXMsXG4gIEFwcGxpY2F0aW9uQ29tbWFuZFR5cGVzLFxuICBiYXNlRW5kcG9pbnRzLFxuICBpY29uQmlnaW50VG9IYXNoLFxuICBJbnRlcmFjdGlvblJlc3BvbnNlVHlwZXMsXG59IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNvbW1hbmQgfSBmcm9tIFwiLi9tb2QudHNcIjtcbmltcG9ydCB7IGNob29zZSwgZ2V0VmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxzL3NoYXJlZEZ1bmN0aW9ucy50c1wiO1xuXG5jcmVhdGVDb21tYW5kKHtcbiAgbmFtZTogXCJodWdcIixcbiAgZGVzY3JpcHRpb246IFwiSHVncyB5b3VcIixcbiAgdHlwZTogQXBwbGljYXRpb25Db21tYW5kVHlwZXMuQ2hhdElucHV0LFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJodWdnZWVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldobyBkbyB5b3Ugd2FudCB0byBodWc/XCIsXG4gICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlcy5Vc2VyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgZXhlY3V0ZTogYXN5bmMgKEJvdCwgaW50ZXJhY3Rpb24pID0+IHtcbiAgICBsZXQgZXh0ZW5zaW9uO1xuICAgIGlmIChpY29uQmlnaW50VG9IYXNoKGludGVyYWN0aW9uLnVzZXIuYXZhdGFyISkuc3RhcnRzV2l0aChcImFfXCIpKSB7XG4gICAgICBleHRlbnNpb24gPSBcIi5naWZcIjtcbiAgICB9XG5cbiAgICBhd2FpdCBCb3QuaGVscGVycy5zZW5kSW50ZXJhY3Rpb25SZXNwb25zZShcbiAgICAgIGludGVyYWN0aW9uLmlkLFxuICAgICAgaW50ZXJhY3Rpb24udG9rZW4sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IEludGVyYWN0aW9uUmVzcG9uc2VUeXBlcy5DaGFubmVsTWVzc2FnZVdpdGhTb3VyY2UsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbWJlZHM6IFt7XG4gICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgbmFtZTogaW50ZXJhY3Rpb24udXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9za2V0Y2hmYWIuY29tL21vZGVscy84MTc4MmUwZjNiOTQ0NzJhYjJlMzM5ZjJlNTc3MjQ2Yy9lbWJlZD9jYW1lcmE9MCZkbnQ9MVwiLFxuICAgICAgICAgICAgICBpY29uVXJsOlxuICAgICAgICAgICAgICAgIGAke2Jhc2VFbmRwb2ludHMuQ0ROX1VSTH0vYXZhdGFycy8ke2ludGVyYWN0aW9uLnVzZXIuaWR9LyR7XG4gICAgICAgICAgICAgICAgICBpY29uQmlnaW50VG9IYXNoKGludGVyYWN0aW9uLnVzZXIuYXZhdGFyISlcbiAgICAgICAgICAgICAgICB9JHtleHRlbnNpb24gPz8gXCJcIn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkkgbG92ZSB5b3VcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgPEAke2ludGVyYWN0aW9uLnVzZXIuaWR9PiBodWdzIDxAJHtcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb24uZGF0YSEub3B0aW9ucyFbMF0udmFsdWVcbiAgICAgICAgICAgIH0+YCxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgIHVybDogY2hvb3NlKFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgICAgICAgYXdhaXQgZ2V0VmFsdWVzKFxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbi5ndWlsZElkIGFzIGJpZ2ludCxcbiAgICAgICAgICAgICAgICAgICAgXCJodWdJbWFnZXNcIixcbiAgICAgICAgICAgICAgICAgICkgYXMgc3RyaW5nW10sXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfV0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICk7XG4gIH0sXG59KTtcbiJdfQ==