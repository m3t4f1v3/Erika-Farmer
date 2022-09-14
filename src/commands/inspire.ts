import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  baseEndpoints,
  iconBigintToHash,
  InteractionResponseTypes,
} from "../../deps.ts";

import { createCommand } from "./mod.ts";

createCommand({
  name: "inspire",
  description: "Erika will send an inspirational quote",
  type: ApplicationCommandTypes.ChatInput,
  execute: async (Bot, interaction) => {
    var extension;
    if (iconBigintToHash(interaction.user.avatar!).startsWith("a_")) {
      extension = ".gif";
    }
    const json = await (await fetch("https://zenquotes.io/api/random")).json();

    await Bot.helpers.sendInteractionResponse(
      interaction.id,
      interaction.token,
      {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          embeds: [{
            author: {
              name: interaction.user.username,
              url: "https://pbs.twimg.com/media/E7JrbbPXEAIfBm0.jpg",
              iconUrl:
                `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                  iconBigintToHash(interaction.user.avatar!)
                }${extension ?? ""}`,
            },
            title: json[0]["q"],
            description: json[0]["a"],
          }],
        },
      },
    );
  },
});
