import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  InteractionResponseTypes,
} from "../../deps.ts";

import { createCommand } from "./mod.ts";
import { choose, embedGenerator, getValues } from "../utils/sharedFunctions.ts";

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
    await Bot.helpers.sendInteractionResponse(
      interaction.id,
      interaction.token,
      {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          embeds: [
            embedGenerator(
              interaction,
              "https://sketchfab.com/models/81782e0f3b94472ab2e339f2e577246c/embed?camera=0&dnt=1",
              "I love you",
              `<@${interaction.user.id}> hugs <@${
                interaction.data!.options![0].value
              }>`,
              choose(
                Object.keys(
                  await getValues(
                    interaction.guildId as bigint,
                    "hugImages",
                  ) as string[],
                ),
              ),
            ),
          ],
        },
      },
    );
  },
});
