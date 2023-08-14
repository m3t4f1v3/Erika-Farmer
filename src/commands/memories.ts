import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  baseEndpoints,
  iconBigintToHash,
  InteractionResponseTypes,
  isURL,
} from "../../deps.ts";

import { BitwisePermissionFlags } from "../../deps.ts";
import { logger } from "../utils/logger.ts";
import { createCommand } from "./mod.ts";

const log = logger({ name: "Memories" });

const databaseChoices = [
  {
    name: "quotes",
    value: "rapistDB",
  },
  {
    name: "hugs",
    value: "hugImages",
  },
  {
    name: "feet",
    value: "feetImages",
  },
  {
    name: "horny images",
    value: "hornyImages",
  },
];

const urlCheckParams = {
  protocols: ["http", "https"],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_port: false,
  require_valid_protocol: true,
  allow_underscores: false,
  host_whitelist: false,
  host_blacklist: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  disallow_auth: false,
  validate_length: true,
};

import {
  addValue,
  choose,
  delValue,
  getValues,
} from "../utils/sharedFunctions.ts";

import { guilds } from "../database/mod.ts";

createCommand({
  name: "memories",
  description: "You shouldn't be able to read this",
  type: ApplicationCommandTypes.ChatInput,
  options: [{
    name: "intellectual",
    description: "Erika will learn a nice thing",
    type: ApplicationCommandOptionTypes.SubCommand,
    options: [{
      name: "quote_or_image",
      description: "A nice quote or image to teach Erika.",
      type: ApplicationCommandOptionTypes.String,
      required: true,
    }, {
      name: "database",
      description: "Which gray cells to teach.",
      type: ApplicationCommandOptionTypes.String,
      choices: databaseChoices.slice(1),
      required: false,
    }],
  }, {
    name: "rapist",
    description: "Erika will send a nice quote",
    type: ApplicationCommandOptionTypes.SubCommand,
    options: [{
      name: "show_all_database",
      description: 'which gray cells to "show", admin use only.',
      type: ApplicationCommandOptionTypes.String,
      choices: databaseChoices,
    }],
  }, {
    name: "bonk",
    description: '"unteach" Erika a not so nice quote.',
    type: ApplicationCommandOptionTypes.SubCommand,
    options: [{
      name: "quote",
      description: 'the quote to be "untaught"',
      type: ApplicationCommandOptionTypes.String,
      required: true,
    }, {
      name: "database",
      description: 'which gray cells to "unteach"',
      type: ApplicationCommandOptionTypes.String,
      choices: databaseChoices,
      required: true,
    }],
  }],
  execute: async (Bot, interaction) => {
    if (
      interaction.guildId &&
      (await guilds.get(interaction.guildId!.toString())) !== undefined
    ) {
      switch (interaction.data!.options![0].name) {
        case "intellectual": {
          // add to normal rapistDB
          if (interaction.data!.options![0]!.options![1] === undefined) {
            if (
              isURL(
                interaction.data!.options![0]!.options![0]!.value as string,
                urlCheckParams,
              )
            ) {
              await Bot.helpers.sendInteractionResponse(
                interaction.id,
                interaction.token,
                {
                  type: InteractionResponseTypes.ChannelMessageWithSource,
                  data: {
                    content:
                      "URLs are not allowed in the quote database, try changing the database option.",
                    flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                  },
                },
              );
            } else {
              await addValue(
                interaction.data!.options![0]!.options![0]!.value as string,
                interaction.guildId as bigint,
                interaction.user.id,
                "rapistDB",
              );
              await Bot.helpers.sendInteractionResponse(
                interaction.id,
                interaction.token,
                {
                  type: InteractionResponseTypes.ChannelMessageWithSource,
                  data: {
                    content: "Your confession has been duly noted.",
                    flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                  },
                },
              );
            }
          } else {
            if (
              isURL(
                interaction.data!.options![0]!.options![0]!.value as string,
                urlCheckParams,
              )
            ) {
              await addValue(
                interaction.data!.options![0]!.options![0]!.value as string,
                interaction.guildId as bigint,
                interaction.user.id,
                interaction.data!.options![0]!.options![1]!.value as string,
              );

              await Bot.helpers.sendInteractionResponse(
                interaction.id,
                interaction.token,
                {
                  type: InteractionResponseTypes.ChannelMessageWithSource,
                  data: {
                    content: "Your confession has been duly noted.",
                    flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
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
                    content: "Use a URL next time.",
                    flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                  },
                },
              );
            }
            break;
          }
        }
        case "rapist": {
          if (
            interaction.data!.options![0]!.options![0] ==
              null
          ) {
            const quotes = await getValues(
              interaction.guildId as bigint,
              "rapistDB",
            );
            if (
              quotes
            ) {
              await Bot.helpers.sendInteractionResponse(
                interaction.id,
                interaction.token,
                {
                  type: InteractionResponseTypes.ChannelMessageWithSource,
                  data: {
                    content: choose(
                      Object.keys(
                        quotes as string[],
                      ),
                    ),
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
                    content: "no thoughts\nhead empty",
                    flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                  },
                },
              );
            }
          } else {
            if (
              interaction.member!.permissions! &
              BigInt(BitwisePermissionFlags.MANAGE_MESSAGES)
            ) {
              const quotes = await getValues(
                interaction.guildId as bigint,
                interaction.data!.options![0]!.options![0]!.value as string,
              );
              if (
                quotes
              ) {
                log.info(
                  "all the entries: " +
                  Object.keys(
                    quotes as string[],
                  ).join("\n") as string,
                );
                await Bot.helpers.sendInteractionResponse(
                  interaction.id,
                  interaction.token,
                  {
                    type: InteractionResponseTypes.ChannelMessageWithSource,
                    data: {
                      content: "done",
                      flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                    },
                  },
                );
                //     await Bot.helpers.sendInteractionResponse(
                //       interaction.id,
                //       interaction.token,
                //       {
                //         type: InteractionResponseTypes.ChannelMessageWithSource,
                //         data: {
                //           content: Object.keys(
                //             quotes as string[],
                //           ).join("\n") as string,
                //         },
                //       },
                //     );
                //   } else {
                //     await Bot.helpers.sendInteractionResponse(
                //       interaction.id,
                //       interaction.token,
                //       {
                //         type: InteractionResponseTypes.ChannelMessageWithSource,
                //         data: {
                //           content: "no thoughts\nhead empty",
                //           flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                //         },
                //       },
                //     );
              }
            } else {
              await Bot.helpers.sendInteractionResponse(
                interaction.id,
                interaction.token,
                {
                  type: InteractionResponseTypes.ChannelMessageWithSource,
                  data: {
                    content: "admin only",
                    flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                  },
                },
              );
            }
          }
          break;
        }
        case "bonk": {
          if (
            await delValue(
              interaction.data!.options![0]!.options![0]!.value as string,
              interaction.guildId as bigint,
              interaction.user.id,
              interaction.member!.permissions!,
              interaction.data!.options![0]!.options![1]!.value as string,
            )
          ) {
            await Bot.helpers.sendInteractionResponse(
              interaction.id,
              interaction.token,
              {
                type: InteractionResponseTypes.ChannelMessageWithSource,
                data: {
                  content: "Ow.",
                  flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
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
                  content: "WHAT WAS THAT FOR!!!!!",
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
    } else {
      let extension;
      if (iconBigintToHash(interaction.user.avatar!).startsWith("a_")) {
        extension = ".gif";
      }

      await guilds.update(interaction.guildId!.toString(), {
        rapistDB: {},
        feetImages: {},
        hornyImages: {},
        hugImages: {},
      });

      if (interaction.data!.options![0].name == "intellectual") {
        // add to normal rapistDB
        if (interaction.data!.options![0]!.options![1] === undefined) {
          if (
            isURL(
              interaction.data!.options![0]!.options![0]!.value as string,
              urlCheckParams,
            )
          ) {
            await Bot.helpers.sendInteractionResponse(
              interaction.id,
              interaction.token,
              {
                type: InteractionResponseTypes.ChannelMessageWithSource,
                data: {
                  content:
                    "URLs are not allowed in the quote database, try changing the database option.",
                  flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                },
              },
            );
          } else {
            await addValue(
              interaction.data!.options![0]!.options![0]!.value as string,
              interaction.guildId as bigint,
              interaction.user.id,
              "rapistDB",
            );
            await Bot.helpers.sendInteractionResponse(
              interaction.id,
              interaction.token,
              {
                type: InteractionResponseTypes.ChannelMessageWithSource,
                data: {
                  content: "Your confession has been duly noted.",
                  flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                },
              },
            );
          }
        } else {
          if (
            isURL(
              interaction.data!.options![0]!.options![0]!.value as string,
              urlCheckParams,
            )
          ) {
            await addValue(
              interaction.data!.options![0]!.options![0]!.value as string,
              interaction.guildId as bigint,
              interaction.user.id,
              interaction.data!.options![0]!.options![1]!.value as string,
            );

            await Bot.helpers.sendInteractionResponse(
              interaction.id,
              interaction.token,
              {
                type: InteractionResponseTypes.ChannelMessageWithSource,
                data: {
                  content: "Your confession has been duly noted.",
                  flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
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
                  content: "Use a URL next time.",
                  flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                },
              },
            );
          }
        }
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
                url: "https://i.ytimg.com/vi/J_6yrg2v8ts/maxresdefault.jpg",
                iconUrl:
                  `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                    iconBigintToHash(interaction.user.avatar!)
                  }${extension ?? ""}`,
              },
              title: "There is no hope for this guild",
              description: "*tocatta and fugue in the background*",
              image: {
                url:
                  "https://64.media.tumblr.com/7147fe3c8d998cf38e38532586b3f3ec/tumblr_p89mgywuiG1tn7gkoo2_1280.png",
              },
            }],
            flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
          },
        },
      );
    }
  },
});
