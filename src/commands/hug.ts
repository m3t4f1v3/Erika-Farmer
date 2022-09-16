import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  baseEndpoints,
  iconBigintToHash,
  InteractionResponseTypes,
} from "../../deps.ts";

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
                "https://sketchfab.com/models/81782e0f3b94472ab2e339f2e577246c/embed?camera=0&dnt=1",
              iconUrl:
                `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                  iconBigintToHash(interaction.user.avatar!)
                }${extension ?? ""}`,
            },
            title: "I love you",
            description: `<@${interaction.user.id}> hugs <@${
              interaction.data!.options![0].value
            }>`,
            image: {
              url: choose(hugImages),
            },
          }],
        },
      },
    );
  },
});
