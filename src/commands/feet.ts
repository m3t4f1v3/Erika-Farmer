import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  baseEndpoints,
  iconBigintToHash,
  InteractionResponseTypes,
} from "../../deps.ts";

import { createCommand } from "./mod.ts";
import { feetImages } from "../../configs.ts";
import { choose } from "../utils/sharedFunctions.ts";

createCommand({
  name: "feet",
  description: "Erika will send an anime feet picture from a list curated by hand",
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
                "https://beato-has-your-ip.cbase.repl.co/",
              iconUrl:
                `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                  iconBigintToHash(interaction.user.avatar!)
                }${extension ?? ""}`,
            },
            description: "lick & sniff!",
            title: "I, Erika Furudo, know your kink!",
            image: {
              url: choose(feetImages),
            },
          }],
        },
      },
    );
  },
});