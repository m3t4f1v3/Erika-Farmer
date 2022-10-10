import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  BitwisePermissionFlags,
  InteractionResponseTypes,
} from "../../deps.ts";

import { createCommand } from "./mod.ts";
import { Bot } from "../../bot.ts";

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
    description: "Erika will learn a nice quote",
    type: ApplicationCommandOptionTypes.SubCommand,
    options: [{
      name: "quote",
      description: "A nice quote to teach Erika.",
      type: ApplicationCommandOptionTypes.String,
      required: true,
    }],
  }, {
    name: "rapist",
    description: "Erika will send a nice quote",
    type: ApplicationCommandOptionTypes.SubCommand,
  }, {
    name: "bonk",
    description: '"unteach" Erika a not so nice quote.',
    type: ApplicationCommandOptionTypes.SubCommand,
    options: [{
      name: "quote",
      description: 'the quote to be "untaught"',
      type: ApplicationCommandOptionTypes.String,
      required: true,
    }],
  }],
  execute: async (Bot, interaction) => {
    if (interaction.guildId && guilds.get(interaction.guildId.toString())) {
      switch (interaction.data!.options![0].name) {
        case "intellectual": {
          try {
            new URL(
              interaction.data!.options![0]!.options![0]!.value as string,
            );

            await Bot.helpers.sendInteractionResponse(
              interaction.id,
              interaction.token,
              {
                type: InteractionResponseTypes.ChannelMessageWithSource,
                data: {
                  content: "No URLs are allowed.",
                  flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
                },
              },
            );
          } catch (err) {
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
          break;
        }
        case "rapist": {
          if (
            ((await getValues(
              interaction.guildId as bigint,
              "rapistDB",
            )) as any)!.length ==
              0
          ) {
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
          } else {
            await Bot.helpers.sendInteractionResponse(
              interaction.id,
              interaction.token,
              {
                type: InteractionResponseTypes.ChannelMessageWithSource,
                data: {
                  content: choose(
                    Object.keys(
                      await getValues(
                        interaction.guildId as bigint,
                        "rapistDB",
                      ) as string[],
                    ),
                  ),
                },
              },
            );
          }
          break;
        }
        case "bonk": {
          if (
            await delValue(
              interaction.data!.options![0]!.options![0]!.value as string,
              interaction.guildId as bigint,
              interaction.user.id,
              "rapistDB",
            ) ||
            interaction.member!.permissions! &
              BigInt(BitwisePermissionFlags.MANAGE_MESSAGES)
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
          console.error(interaction.data);
          break;
        }
      }
    } else {
      await Bot.helpers.sendInteractionResponse(
        interaction.id,
        interaction.token,
        {
          type: InteractionResponseTypes.ChannelMessageWithSource,
          data: {
            content: "There is no hope for this guild.",
            flags: 64, // 1 << 6 bitwise (https://discord.com/developers/docs/resources/channel#message-object-message-flags)
          },
        },
      );
    }
  },
});
