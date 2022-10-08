// probably a race function but who cares
import {
  Bot
} from "../../bot.ts";

import { Client } from "../../deps.ts";

const ReplDBClient = new Client();

export let servers = await ReplDBClient.get("servers");

export async function updateGuilds() {
  (await Bot.activeGuildIds).forEach((guildID) => {
    if (!servers[guildID.toString()]) {
      servers[guildID.toString()] = {
        "rapistDB": {}
      }
    }
  })
}
// back alley shit until i realize how to list guilds
/*
servers = {
  "1020419041741000705": {
        "rapistDB": {
          "bjeh": "681096336392585255",
        },
      },
  "1001210643485036634": {
        "rapistDB": {
          "p": "681096336392585255",
        },
      },
}
*/
export function getQuotes(serverID: bigint) {
  return Object.keys(servers[serverID.toString()]["rapistDB"]);
}

export async function addQuote(quote: string, serverID: bigint, userID: bigint) {
  servers[serverID.toString()]["rapistDB"][quote] = userID.toString();

  // ideally this should be called once the bot shuts down or at the very least when its updating an existing quote but its not my pc so idc
  await ReplDBClient.set("servers", servers);
}

export async function delQuote(quote: string, serverID: bigint, userID: bigint) {
  // checks if it exists AND checks if can be deleted (I'll make it check if you're an admin later)
  if (servers[serverID.toString()]["rapistDB"][quote] == userID.toString()) {
    delete servers[serverID.toString()]["rapistDB"][quote]
  }
  await ReplDBClient.set("servers", servers);
}

export function choose(choices: Array < string > ) {
  let index = Math.floor(choices.length * Math.random());
  return choices[index];
}