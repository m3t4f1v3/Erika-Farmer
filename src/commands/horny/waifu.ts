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
  name: "waifu",
  description: "Erika will send you a picture of a Waifu",
  type: ApplicationCommandTypes.ChatInput,
  options: [
    {
      name: "is_nsfw",
      description: "Choose if the image is nsfw or not",
      type: ApplicationCommandOptionTypes.Boolean,
      required: false,
    },
    {
      name: "gif",
      description: "Choose if the image is a gif or not",
      type: ApplicationCommandOptionTypes.Boolean,
      required: false,
    },
    {
      name: "orientation",
      description: "Choose which way the image is oriented",
      type: ApplicationCommandOptionTypes.String,
      choices: [{ name: "Landscape", value: "LANDSCAPE" }, {
        name: "Portrait",
        value: "PORTRAIT",
      }],
      required: false,
    },
    {
      name: "selected_tags",
      description: "Choose which tags must be present, comma separated",
      type: ApplicationCommandOptionTypes.String,
      required: false,
    },
    {
      name: "excluded_tags",
      description: "Choose which tags must not be present, comma separated",
      type: ApplicationCommandOptionTypes.String,
      required: false,
    },
    {
      name: "excluded_files",
      description: "Choose which files must not be sent, comma separated",
      type: ApplicationCommandOptionTypes.String,
      required: false,
    },
  ],
  execute: async (Bot, interaction) => {
    var waifuArguments = new URLSearchParams();
    var extension;
    if (iconBigintToHash(interaction.user.avatar!).startsWith("a_")) {
      extension = ".gif";
    }
    if (interaction.data!.options !== undefined) {
      interaction.data!.options!.forEach(function (option) {
        if (
          option["name"] == "selected_tags" ||
          option["name"] == "excluded_tags" ||
          option["name"] == "excluded_files"
        ) {
          (option.value! as string).split(", ").forEach(function (tag: string) {
            waifuArguments.append(option["name"], tag as string);
          });
        } else {
          waifuArguments.append(option["name"], option.value as string);
        }
      });
    }
    let waifu = await (await fetch(
      "https://api.waifu.im/random/?" + waifuArguments,
    )).json();

    if (waifu["images"] !== undefined) {
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
                  "https://ih1.redbubble.net/image.3287472777.9570/pp,504x498-pad,600x600,f8f8f8.jpg",
                iconUrl:
                  `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                    iconBigintToHash(interaction.user.avatar!)
                  }${extension ?? ""}`,
              },
              title: "I, Erika Furudo, know you're foaming!",
              description: "Lick your screen!",
              image: {
                url: waifu["images"][0]["url"],
              },
            }],
          },
        },
      );
    } else {
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
                  "https://ih1.redbubble.net/image.3287472777.9570/pp,504x498-pad,600x600,f8f8f8.jpg",
                iconUrl:
                  `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                    iconBigintToHash(interaction.user.avatar!)
                  }${extension ?? ""}`,
              },
              title: "I, Erika Furudo, have detected a logic error",
              description:
                "Lambdadelta has confirmed that you have selected unavailable tags",
              image: {
                url:
                  "https://static.wikia.nocookie.net/umineko/images/4/4c/Eri_a15_akuwarai6.png/revision/latest?cb=20140723062924",
              },
            }],
            flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
          },
        },
      );
    }
  },
});
