import {
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  baseEndpoints,
  iconBigintToHash,
  InteractionResponseTypes,
} from "../../../deps.ts";

import { parse } from "../../../deps.ts";

import { createCommand } from "../mod.ts";
import { choose } from "../../utils/sharedFunctions.ts";
import { logger } from "../../utils/logger.ts";

const log = logger({ name: "Wada" });
var wadaVideos: string[] = [];
var timeSinceLastWadaUpdate = Date.now();

async function updateWadaVideos() {
  let tempValues = new Set<string>();
  let youtubeXML = await fetch(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCKQgmJJfClf-_C3z_x4C-5A",
  );

  if (youtubeXML.status == 429) {
    log.error("Youtube API told us to stop, therefore using cached");
  } else {
    await Deno.writeTextFile(
      "videos.xml",
      await youtubeXML.text(),
    );
  }

  await parse(
    await Deno.readTextFile("videos.xml"),
    {
      reviver({ value, tag }) {
        //Apply special processing for tag, attributes and properties
        if (tag === "yt:videoId") {
          tempValues.add(value as string);
          wadaVideos = Array.from(tempValues);
        }
      },
    },
  );
  timeSinceLastWadaUpdate = Date.now();
}

await updateWadaVideos();

createCommand({
  name: "wada",
  description: "Erika will send a Wada Zecheru Video",
  type: ApplicationCommandTypes.ChatInput,
  execute: async (Bot, interaction) => {
    var extension;
    // first number is seconds, second is ms, third is minute
    if (Date.now() - timeSinceLastWadaUpdate >= 20 * 1000 * 60) {
      await updateWadaVideos();
    }

    if (iconBigintToHash(interaction.user.avatar!).startsWith("a_")) {
      extension = ".gif";
    }

    await Bot.helpers.sendInteractionResponse(
      interaction.id,
      interaction.token,
      {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          content:
            "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| https://www.youtube.com/watch?v=" +
            choose(wadaVideos),
        },
      },
    );
  },
});
