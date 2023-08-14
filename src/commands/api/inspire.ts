import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  InteractionResponseTypes,
} from "../../../deps.ts";

import { createCommand } from "../mod.ts";
import { embedGenerator } from "../../utils/sharedFunctions.ts";

createCommand({
  name: "inspire",
  description: "Erika will send an inspirational quote",
  type: ApplicationCommandTypes.ChatInput,
  execute: async (Bot, interaction) => {
    const json = await (await fetch("https://zenquotes.io/api/random")).json();

    await Bot.helpers.sendInteractionResponse(
      interaction.id,
      interaction.token,
      {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          embeds: [
            embedGenerator(
              interaction,
              "https://pbs.twimg.com/media/E7JrbbPXEAIfBm0.jpg",
              json[0]["q"],
              json[0]["a"],
            ),
          ],
        },
      },
    );
  },
});
