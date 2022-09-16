import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  baseEndpoints,
  iconBigintToHash,
  InteractionResponseTypes,
} from "../../deps.ts";

import { createCommand } from "./mod.ts";

createCommand({
  name: "kot",
  description:
    "Erika will send you a picture of an irl neko (cat), thinking of her master Bernkastel",
  type: ApplicationCommandTypes.ChatInput,
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
                "https://static.wikia.nocookie.net/topstrongest/images/7/77/Bern_Cat.png/revision/latest/scale-to-width-down/350?cb=20200820165917",
              iconUrl:
                `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                  iconBigintToHash(interaction.user.avatar!)
                }${extension ?? ""}`,
            },
            title: "I, Erika Furudo, know you're uu-uuing!",
            description: "Meow at your screen!",
            image: {
              url: `https://cataas.com/cat?${Date.now()}`,
            },
          }],
        },
      },
    );
  },
});
