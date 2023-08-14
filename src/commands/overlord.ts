import { Bot } from "../../bot.ts";
import {
  ApplicationCommandTypes,
  baseEndpoints,
  BigString,
  Collection,
  iconBigintToHash,
  InteractionResponseTypes,
  Member
} from "../../deps.ts";
import { overlordTimes } from "../database/mod.ts";
import { logger } from "../utils/logger.ts";
import { createCommand } from "./mod.ts";

const log = logger({ name: "Overlord" });

//const now = new Date().getTime();
//var currentOverlord = "130166909864902656" as BigString;

var currentOverlord = (await overlordTimes.get("1001551902527459428") as any)[
  "currentOverlord"
] as BigString;

//reset with this
/*
const now = 0;
overlordTimes.update("1001551902527459428", { now, currentOverlord });
*/
if (
  typeof await overlordTimes.get("1001551902527459428") as any ==
    "undefined"
) {
  const now = new Date().getTime();
  overlordTimes.update("1001551902527459428", { now });
}

async function removeRoleFromMember(
  overlord: Member,
) {
  try {
    const { id } = overlord;
    log.info(id);

    await Bot.helpers.removeRole(
      "1001551902527459428",
      id,
      "1113487214282817627",
    );
  } catch (error) {
    log.error("something went wrong");
  }
}

async function chooseOverlord() {
  const now = new Date().getTime();
  const members = (await Bot.helpers.getMembers("1001551902527459428", {
    limit: 1000,
  }));
  const overlords = members.filter((member) =>
    member.roles.includes(1113487214282817627n) &&
    member.id != 371018392406327297n
  ) as Collection<bigint, Member>;

  if (
    now -
        (await overlordTimes.get("1001551902527459428") as any)["now"] >=
      1000 * 60 * 60 * 24 * 4
  ) {
    await Promise.all(overlords.map(removeRoleFromMember));
    const potential_overlords = members.filter((member) =>
      member.roles.includes(1001563056180035684n) &&
      member.id != 371018392406327297n
    ) as Collection<bigint, Member>;
    const overlord = potential_overlords.random();
    log.info("new overlord chosen");
    log.info(overlord?.user?.username);
    //log.info(overlord);
    currentOverlord = overlord?.id as BigString;
    Bot.helpers.addRole(
      "1001551902527459428",
      currentOverlord,
      "1113487214282817627",
    );
    await overlordTimes.update("1001551902527459428", { now, currentOverlord });
  }
}

createCommand({
  name: "overlord",
  description: "Erika will send the name of the overlord",
  type: ApplicationCommandTypes.ChatInput,
  execute: async (Bot, interaction) => {
    let extension;
    if (iconBigintToHash(interaction.user.avatar!).startsWith("a_")) {
      extension = ".gif";
    }
    log.info();
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
                "https://static.wikia.nocookie.net/umineko/images/6/66/Oko_defa1.png/revision/latest?cb=20190501173002",
              iconUrl:
                `${baseEndpoints.CDN_URL}/avatars/${interaction.user.id}/${
                  iconBigintToHash(interaction.user.avatar!)
                }${extension ?? ""}`,
            },
            title: `The current overlord is ${
              (await Bot.helpers.getMember(
                "1001551902527459428",
                currentOverlord,
              )).nick
            }`,
            description: `Descension at: <t:${
              Math.floor(
                parseInt(
                  (await overlordTimes.get("1001551902527459428") as any)[
                    "now"
                  ],
                ) / 1000,
              ) + 60 * 60 * 24 * 4
            }>`,
          }],
        },
      },
    );
  },
});

await chooseOverlord();
setInterval(chooseOverlord, 1000 * 60 * 5);
