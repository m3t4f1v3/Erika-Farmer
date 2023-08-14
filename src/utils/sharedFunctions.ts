// probably a race condition but who cares
//import { Bot } from "../../bot.ts";
<<<<<<< HEAD
import { baseEndpoints, iconBigintToHash, Interaction } from "../../deps.ts";

import { guilds } from "../database/mod.ts";
=======
>>>>>>> d209336fe9a17c9dcf5a6fa34d2a774e7b46cd8c
import { BitwisePermissionFlags } from "../../deps.ts";
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

const deleteLogs = await Deno.open("./deleteLogs.txt", {
  append: true,
  create: true,
});

const encoder = new TextEncoder();

export async function getValues(serverID: bigint, database: string) {
  // all useless but such is the curse of typescript

  let guildData = await guilds.get(serverID.toString()) as any;
  if (typeof guildData === "object") {
    return guildData![database];
  } else {
    return false;
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
  permissions: bigint,
  database: string,
) {
  let server = serverID.toString();
  let guildData = await guilds.get(server) as any;
  let table = guildData[database] as any;

  if (typeof guildData === "object") {
    if (typeof table === "object") {
      if (
        table[value] == userID.toString() ||
        (permissions &
            BigInt(BitwisePermissionFlags.MANAGE_MESSAGES) &&
          table[value] !== undefined)
      ) {
        delete table[value];
        await Deno.writeAll(
          deleteLogs,
          encoder.encode(`${value}:${userID.toString()}` + "\n"),
        );
        await guilds.update(server, guildData);
        return true;
      }
    }
  }
}

export function choose(choices: Array<any>) {
  return choices[Math.floor(choices.length * Math.random())];
}

export function getNovelName(user: User) {
  return user?.nick ??
        user?.globalName ??
        user?.user?.username ??
        user?.username
}

export function embedGenerator(
  interaction: Interaction,
  url?: string,
  title?: string,
  description?: string,
  image?: string,
) {
  let extension;
  if (iconBigintToHash(interaction.user.avatar!).startsWith("a_")) {
    extension = ".gif";
  }
  return {
    author: {
      name: getNovelName(interaction.member),
      url: url,
      iconUrl: `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
        iconBigintToHash(interaction.user.avatar!)
      }${extension ?? ""}`,
    },
    title: title ?? "",
    description: description ?? "",
    image: {
      url: image ?? "",
    },
  };
}
