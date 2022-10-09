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
        {
            name: "new_image",
            description: "New image",
            type: ApplicationCommandOptionTypes.String,
            required: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVnLnRzIzMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodWcudHMjMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLHdCQUF3QixHQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckQsYUFBYSxDQUFDO0lBQ1osSUFBSSxFQUFFLEtBQUs7SUFDWCxXQUFXLEVBQUUsVUFBVTtJQUN2QixJQUFJLEVBQUUsdUJBQXVCLENBQUMsU0FBUztJQUN2QyxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsSUFBSTtZQUN4QyxRQUFRLEVBQUUsSUFBSTtTQUNmO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixXQUFXLEVBQUUsV0FBVztZQUN4QixJQUFJLEVBQUUsNkJBQTZCLENBQUMsTUFBTTtZQUMxQyxRQUFRLEVBQUUsS0FBSztTQUNoQjtLQUNGO0lBQ0QsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxTQUFTLENBQUM7UUFDZCxJQUFJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9ELFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDcEI7UUFDRCxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQ3ZDLFdBQVcsQ0FBQyxFQUFFLEVBQ2QsV0FBVyxDQUFDLEtBQUssRUFDakI7WUFDRSxJQUFJLEVBQUUsd0JBQXdCLENBQUMsd0JBQXdCO1lBQ3ZELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsQ0FBQzt3QkFDUCxNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUTs0QkFDL0IsR0FBRyxFQUNELG9GQUFvRjs0QkFDdEYsT0FBTyxFQUNMLEdBQUcsYUFBYSxDQUFDLE9BQU8sWUFBWSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFDckQsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQzNDLEdBQUcsU0FBUyxJQUFJLEVBQUUsRUFBRTt5QkFDdkI7d0JBQ0QsS0FBSyxFQUFFLFlBQVk7d0JBQ25CLFdBQVcsRUFBRSxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUNuQyxXQUFXLENBQUMsSUFBSyxDQUFDLE9BQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUNoQyxHQUFHO3dCQUNILEtBQUssRUFBRTs0QkFDTCxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQzt5QkFDdkI7cUJBQ0YsQ0FBQzthQUNIO1NBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFwcGxpY2F0aW9uQ29tbWFuZE9wdGlvblR5cGVzLFxuICBBcHBsaWNhdGlvbkNvbW1hbmRUeXBlcyxcbiAgYmFzZUVuZHBvaW50cyxcbiAgaWNvbkJpZ2ludFRvSGFzaCxcbiAgSW50ZXJhY3Rpb25SZXNwb25zZVR5cGVzLFxufSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuXG5pbXBvcnQgeyBjcmVhdGVDb21tYW5kIH0gZnJvbSBcIi4vbW9kLnRzXCI7XG5pbXBvcnQgeyBodWdJbWFnZXMgfSBmcm9tIFwiLi4vLi4vY29uZmlncy50c1wiO1xuaW1wb3J0IHsgY2hvb3NlIH0gZnJvbSBcIi4uL3V0aWxzL3NoYXJlZEZ1bmN0aW9ucy50c1wiO1xuXG5jcmVhdGVDb21tYW5kKHtcbiAgbmFtZTogXCJodWdcIixcbiAgZGVzY3JpcHRpb246IFwiSHVncyB5b3VcIixcbiAgdHlwZTogQXBwbGljYXRpb25Db21tYW5kVHlwZXMuQ2hhdElucHV0LFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJodWdnZWVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldobyBkbyB5b3Ugd2FudCB0byBodWc/XCIsXG4gICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlcy5Vc2VyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm5ld19pbWFnZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiTmV3IGltYWdlXCIsXG4gICAgICB0eXBlOiBBcHBsaWNhdGlvbkNvbW1hbmRPcHRpb25UeXBlcy5TdHJpbmcsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgZXhlY3V0ZTogYXN5bmMgKEJvdCwgaW50ZXJhY3Rpb24pID0+IHtcbiAgICBsZXQgZXh0ZW5zaW9uO1xuICAgIGlmIChpY29uQmlnaW50VG9IYXNoKGludGVyYWN0aW9uLnVzZXIuYXZhdGFyISkuc3RhcnRzV2l0aChcImFfXCIpKSB7XG4gICAgICBleHRlbnNpb24gPSBcIi5naWZcIjtcbiAgICB9XG4gICAgYXdhaXQgQm90LmhlbHBlcnMuc2VuZEludGVyYWN0aW9uUmVzcG9uc2UoXG4gICAgICBpbnRlcmFjdGlvbi5pZCxcbiAgICAgIGludGVyYWN0aW9uLnRva2VuLFxuICAgICAge1xuICAgICAgICB0eXBlOiBJbnRlcmFjdGlvblJlc3BvbnNlVHlwZXMuQ2hhbm5lbE1lc3NhZ2VXaXRoU291cmNlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZW1iZWRzOiBbe1xuICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgIG5hbWU6IGludGVyYWN0aW9uLnVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vc2tldGNoZmFiLmNvbS9tb2RlbHMvODE3ODJlMGYzYjk0NDcyYWIyZTMzOWYyZTU3NzI0NmMvZW1iZWQ/Y2FtZXJhPTAmZG50PTFcIixcbiAgICAgICAgICAgICAgaWNvblVybDpcbiAgICAgICAgICAgICAgICBgJHtiYXNlRW5kcG9pbnRzLkNETl9VUkx9L2F2YXRhcnMvJHtpbnRlcmFjdGlvbi51c2VyLmlkfS8ke1xuICAgICAgICAgICAgICAgICAgaWNvbkJpZ2ludFRvSGFzaChpbnRlcmFjdGlvbi51c2VyLmF2YXRhciEpXG4gICAgICAgICAgICAgICAgfSR7ZXh0ZW5zaW9uID8/IFwiXCJ9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogXCJJIGxvdmUgeW91XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYDxAJHtpbnRlcmFjdGlvbi51c2VyLmlkfT4gaHVncyA8QCR7XG4gICAgICAgICAgICAgIGludGVyYWN0aW9uLmRhdGEhLm9wdGlvbnMhWzBdLnZhbHVlXG4gICAgICAgICAgICB9PmAsXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICB1cmw6IGNob29zZShodWdJbWFnZXMpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfSxcbn0pO1xuIl19