// probably a race function but who cares
//import { Bot } from "../../bot.ts";
import { guilds } from "../database/mod.ts";

//console.log(await guilds.getAll());

/*
export async function updateGuilds() {
  (await Bot.activeGuildIds).forEach((guildID) => {
    if (!servers[guildID.toString()]) {
      servers[guildID.toString()] = {
        "rapistDB": {},
      };
    }
  });
}
*/

//console.log(await typeof guilds.get("1001210643485036634"))
/*
guilds.update("1020419041741000705", {
  rapistDB: {
    "lol": 681096336392585255,
  },
});
*/

export async function getValues(serverID: bigint, database: string) {
  // all useless but such is the curse of typescript

  let guildData = await guilds.get(serverID.toString()) as any;
  if (typeof guildData === "object") {
    return guildData![database];
  }
}

export async function addValue(
  value: string,
  serverID: bigint,
  userID: bigint,
  database: string,
) {
  let server = serverID.toString();
  let guildData = await guilds.get(server) as any;
  let table = guildData[database] as any;

  if (typeof guildData === "object") {
    if (typeof table === "object") {
      table[value] = userID.toString();
    }

    // ideally this should be called once the bot shuts down
    await guilds.update(server, guildData);
  }
}

export async function delValue(
  value: string,
  serverID: bigint,
  userID: bigint,
  database: string,
) {
  let server = serverID.toString();
  let guildData = await guilds.get(server) as any;
  let rapistDB = guildData["rapistDB"] as any;

  if (typeof guildData === "object") {
    if (typeof rapistDB === "object") {
      // checks if it exists AND checks if can be deleted (I'll make it check if you're an admin later)
      if (rapistDB[value] == userID.toString()) {
        delete rapistDB[value];
        await guilds.update(server, guildData);
        return true;
      }
    }
  }
}

export function choose(choices: Array<string>) {
  return choices[Math.floor(choices.length * Math.random())];
}
