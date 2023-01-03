import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  baseEndpoints,
  getChannel,
  iconBigintToHash,
  InteractionResponseTypes,
} from "../../deps.ts";


import type { BigString } from "../../deps.ts";

import { createCommand } from "./mod.ts";

import { choose, getValues } from "../utils/sharedFunctions.ts";
import { logger } from "../utils/logger.ts";

const log = logger({ name: "Anime" });

createCommand({
  name: "anime",
  description: "You shouldn't be able to read this",
  type: ApplicationCommandTypes.ChatInput,
  options: [{
    name: "ecchi",
    description:
      "Erika will send an anime nsfw picture from a list curated by hand",
    type: ApplicationCommandOptionTypes.SubCommand,
  }, {
    name: "feet",
    description:
      "Erika will send an anime feet picture from a list curated by hand",
    type: ApplicationCommandOptionTypes.SubCommand,
  }, {
    name: "waifu",
    description: "Erika will send you a picture of a Waifu",
    type: ApplicationCommandOptionTypes.SubCommand,
    options: [{
      name: "is_nsfw",
      description: "Choose if the image is soft nsfw or not",
      type: ApplicationCommandOptionTypes.Boolean,
      required: false,
    }, {
      name: "gif",
      description: "Choose if the image is a gif or not",
      type: ApplicationCommandOptionTypes.Boolean,
      required: false,
    }, {
      name: "orientation",
      description: "Choose which way the image is oriented",
      type: ApplicationCommandOptionTypes.String,
      choices: [{
        name: "Landscape",
        value: "LANDSCAPE",
      }, {
        name: "Portrait",
        value: "PORTRAIT",
      }],
      required: false,
    }, {
      name: "included_tags",
      description: "Choose which tags must be present, comma separated",
      type: ApplicationCommandOptionTypes.String,
      required: false,
    }, {
      name: "excluded_tags",
      description: "Choose which tags must not be present, comma separated",
      type: ApplicationCommandOptionTypes.String,
      required: false,
    }, {
      name: "excluded_files",
      description: "Choose which files must not be sent, comma separated",
      type: ApplicationCommandOptionTypes.String,
      required: false,
    }],
  }],
  execute: async (Bot, interaction) => {
    var extension;
    if (iconBigintToHash(interaction.user.avatar!).startsWith("a_")) {
      extension = ".gif";
    }

    switch (interaction.data!.options![0].name) {
      case "ecchi": {
        if (
          (await getChannel(
            Bot,
            interaction!.channelId!.toString() as BigString,
          ))!.nsfw
        ) {
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
                    url: choose(
                      Object.keys(
                        await getValues(
                          interaction.guildId as bigint,
                          "hornyImages",
                        ) as string[],
                      ),
                    ),
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
                content: "Maybe try doing this in an nsfw channel.",
                flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
              },
            },
          );
        }
        break;
      }

      case "feet": {
        if (
          (await getChannel(
            Bot,
            interaction!.channelId!.toString() as BigString,
          ))!.nsfw
        ) {
          await Bot.helpers.sendInteractionResponse(
            interaction.id,
            interaction.token,
            {
              type: InteractionResponseTypes.ChannelMessageWithSource,
              data: {
                embeds: [{
                  author: {
                    name: interaction.user.username,
                    url: "https://beato-has-your-ip.cbase.repl.co/",
                    iconUrl:
                      `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                        iconBigintToHash(interaction.user.avatar!)
                      }${extension ?? ""}`,
                  },
                  title: "I, Erika Furudo, know your kink!",
                  description: "Feast with your eyes!",
                  image: {
                    url: choose(
                      Object.keys(
                        await getValues(
                          interaction.guildId as bigint,
                          "feetImages",
                        ) as string[],
                      ),
                    ),
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
                content: "Maybe try doing this in an nsfw channel.",
                flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
              },
            },
          );
        }
        break;
      }
      case "waifu": {
        var waifuArguments = new URLSearchParams();
        var nsfw = false;
        if (interaction.data!.options![0]!.options !== undefined) {
          interaction.data!.options![0]!.options!.forEach(function (option) {
            if (
              option["name"] == "included_tags" ||
              option["name"] == "excluded_tags" ||
              option["name"] == "excluded_files"
            ) {
              (option.value! as string).split(", ").forEach(
                function (tag: string) {
                  waifuArguments.append(option["name"], tag as string);
                },
              );
            } else {
              if (option["name"] == "is_nsfw" && option["value"] == true) {
                nsfw = true;
              }
              waifuArguments.append(option["name"], option.value as string);
            }
          });
        }
        if (
          (await getChannel(
            Bot,
            interaction!.channelId!.toString() as BigString,
          ))!.nsfw || !nsfw
        ) {
          let waifu = await (await fetch(
            "https://api.waifu.im/search/?" + waifuArguments,
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
                    title: "I, Erika Furudo, know you're happy!",
                    description: "Enjoy!",
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
            break;
          }
        } else {
          await Bot.helpers.sendInteractionResponse(
            interaction.id,
            interaction.token,
            {
              type: InteractionResponseTypes.ChannelMessageWithSource,
              data: {
                content: "Maybe try doing this in an nsfw channel.",
                flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
              },
            },
          );
        }
        break;
      }
      default: {
        log.warn("Unhandled subcommand: " + interaction.data);
        break;
      }
    }
  },
});
