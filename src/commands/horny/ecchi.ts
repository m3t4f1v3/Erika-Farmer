import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  baseEndpoints,
  iconBigintToHash,
  InteractionResponseTypes,
} from "../../../deps.ts";

import { createCommand } from "../mod.ts";
import { hornyImages } from "../../../configs.ts";
import { choose } from "../../utils/sharedFunctions.ts";

createCommand({
  name: "ecchi",
  description:
    "Erika will send an anime nsfw picture from a list curated by hand",
  type: ApplicationCommandTypes.ChatInput,
  execute: async (Bot, interaction) => {
    var extension;
    if (iconBigintToHash(interaction.user.avatar!).startsWith("a_")) {
      extension = ".gif";
    }
    await Bot.helpers.sendInteractionResponse(
      interaction.id,
      interaction.token,
      {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          embeds: [{
            author: {
              name: interaction.user.username,
              url:
                "https://cdn.discordapp.com/attachments/1002598216824537108/1019193892127641640/unknown.png",
              iconUrl:
                `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                  iconBigintToHash(interaction.user.avatar!)
                }${extension ?? ""}`,
            },
            title: "I, Erika Furudo, know you're aroused!",
            description: "lick & sniff!",
            image: {
              url: choose(hornyImages),
            },
          }],
        },
      },
    );
  },
});
