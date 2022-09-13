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
                        description: "lick & sniff!",
                        title: "I, Erika Furudo, know your kink!",
                        image: {
                            url: choose(feetImages),
                        },
                    }],
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVldC50cyMwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVldC50cyMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsYUFBYSxFQUNiLGdCQUFnQixFQUNoQix3QkFBd0IsR0FDekIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJELGFBQWEsQ0FBQztJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osV0FBVyxFQUFFLG1FQUFtRTtJQUNoRixJQUFJLEVBQUUsdUJBQXVCLENBQUMsU0FBUztJQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUNsQyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0QsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQjtRQUNELE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FDdkMsV0FBVyxDQUFDLEVBQUUsRUFDZCxXQUFXLENBQUMsS0FBSyxFQUNqQjtZQUNFLElBQUksRUFBRSx3QkFBd0IsQ0FBQyx3QkFBd0I7WUFDdkQsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxDQUFDO3dCQUNQLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixHQUFHLEVBQ0QsMENBQTBDOzRCQUM1QyxPQUFPLEVBQ0wsR0FBRyxhQUFhLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUNyRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FDM0MsR0FBRyxTQUFTLElBQUksRUFBRSxFQUFFO3lCQUN2Qjt3QkFDRCxXQUFXLEVBQUUsZUFBZTt3QkFDNUIsS0FBSyxFQUFFLGtDQUFrQzt3QkFDekMsS0FBSyxFQUFFOzRCQUNMLEdBQUcsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO3lCQUN4QjtxQkFDRixDQUFDO2FBQ0g7U0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwbGljYXRpb25Db21tYW5kT3B0aW9uVHlwZXMsXG4gIEFwcGxpY2F0aW9uQ29tbWFuZFR5cGVzLFxuICBiYXNlRW5kcG9pbnRzLFxuICBpY29uQmlnaW50VG9IYXNoLFxuICBJbnRlcmFjdGlvblJlc3BvbnNlVHlwZXMsXG59IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNvbW1hbmQgfSBmcm9tIFwiLi9tb2QudHNcIjtcbmltcG9ydCB7IGZlZXRJbWFnZXMgfSBmcm9tIFwiLi4vLi4vY29uZmlncy50c1wiO1xuaW1wb3J0IHsgY2hvb3NlIH0gZnJvbSBcIi4uL3V0aWxzL3NoYXJlZEZ1bmN0aW9ucy50c1wiO1xuXG5jcmVhdGVDb21tYW5kKHtcbiAgbmFtZTogXCJmZWV0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkVyaWthIHdpbGwgc2VuZCBhbiBhbmltZSBmZWV0IHBpY3R1cmUgZnJvbSBhIGxpc3QgY3VyYXRlZCBieSBoYW5kXCIsXG4gIHR5cGU6IEFwcGxpY2F0aW9uQ29tbWFuZFR5cGVzLkNoYXRJbnB1dCxcbiAgZXhlY3V0ZTogYXN5bmMgKEJvdCwgaW50ZXJhY3Rpb24pID0+IHtcbiAgICB2YXIgZXh0ZW5zaW9uO1xuICAgIGlmIChpY29uQmlnaW50VG9IYXNoKGludGVyYWN0aW9uLnVzZXIuYXZhdGFyISkuc3RhcnRzV2l0aChcImFfXCIpKSB7XG4gICAgICBleHRlbnNpb24gPSBcIi5naWZcIjtcbiAgICB9XG4gICAgYXdhaXQgQm90LmhlbHBlcnMuc2VuZEludGVyYWN0aW9uUmVzcG9uc2UoXG4gICAgICBpbnRlcmFjdGlvbi5pZCxcbiAgICAgIGludGVyYWN0aW9uLnRva2VuLFxuICAgICAge1xuICAgICAgICB0eXBlOiBJbnRlcmFjdGlvblJlc3BvbnNlVHlwZXMuQ2hhbm5lbE1lc3NhZ2VXaXRoU291cmNlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZW1iZWRzOiBbe1xuICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgIG5hbWU6IGludGVyYWN0aW9uLnVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vYmVhdG8taGFzLXlvdXItaXAuY2Jhc2UucmVwbC5jby9cIixcbiAgICAgICAgICAgICAgaWNvblVybDpcbiAgICAgICAgICAgICAgICBgJHtiYXNlRW5kcG9pbnRzLkNETl9VUkx9L2F2YXRhcnMvJHtpbnRlcmFjdGlvbi51c2VyLmlkfS8ke1xuICAgICAgICAgICAgICAgICAgaWNvbkJpZ2ludFRvSGFzaChpbnRlcmFjdGlvbi51c2VyLmF2YXRhciEpXG4gICAgICAgICAgICAgICAgfSR7ZXh0ZW5zaW9uID8/IFwiXCJ9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJsaWNrICYgc25pZmYhXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJJLCBFcmlrYSBGdXJ1ZG8sIGtub3cgeW91ciBraW5rIVwiLFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgdXJsOiBjaG9vc2UoZmVldEltYWdlcyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICApO1xuICB9LFxufSk7XG4iXX0=