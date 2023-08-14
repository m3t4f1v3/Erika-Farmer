import {
  ApplicationCommandTypes,
  InteractionResponseTypes,
  iconBigintToHash,
  InteractionResponseTypes
>>>>>>> d209336fe9a17c9dcf5a6fa34d2a774e7b46cd8c
} from "../../../deps.ts";

import { createCommand } from "../mod.ts";
import { embedGenerator } from "../../utils/sharedFunctions.ts";

const apiKey = Deno.env.get("cat_token");

createCommand({
  name: "kot",
  description:
    "Erika will send you a picture of an irl neko (cat), thinking of her master Bernkastel",
  type: ApplicationCommandTypes.ChatInput,
  execute: async (Bot, interaction) => {
    const json = await (await fetch(
      `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`,
    )).json();

    await Bot.helpers.sendInteractionResponse(
      interaction.id,
      interaction.token,
      {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          embeds: [
            embedGenerator(
              interaction,
              "https://static.wikia.nocookie.net/topstrongest/images/7/77/Bern_Cat.png/revision/latest/scale-to-width-down/350?cb=20200820165917",
              "I, Erika Furudo, know you're uu-uuing!",
              "Meow at your screen!",
              json[0]["url"],
            ),
          ],
        },
      },
    );
  },
});
