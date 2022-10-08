import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  InteractionResponseTypes,
} from "../../deps.ts";

import { createCommand } from "./mod.ts";

import {
  addQuote,
  choose,
  delQuote,
  getQuotes,
  servers,
} from "../utils/sharedFunctions.ts";

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
    if (interaction.guildId && servers[interaction.guildId.toString()]) {
      switch (interaction.data!.options![0].name) {
        case "intellectual": {
          await addQuote(
            interaction.data!.options![0]!.options![0]!.value as string,
            interaction.guildId as bigint,
            interaction.user.id,
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
          break;
        }
        case "rapist": {
          if (getQuotes(interaction.guildId as bigint).length == 0) {
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
                  content: choose(getQuotes(interaction.guildId as bigint)),
                },
              },
            );
          }
          break;
        }
        case "bonk": {
          await delQuote(
            interaction.data!.options![0]!.options![0]!.value as string,
            interaction.guildId as bigint,
            interaction.user.id,
          );
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
