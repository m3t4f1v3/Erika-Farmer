import { Bot } from "../../bot.ts";
import {
  ApplicationCommandTypes,
  BigString,
  Collection,
  InteractionResponseTypes,
  Member
} from "../../deps.ts";
import { overlordTimes } from "../database/mod.ts";
import { logger } from "../utils/logger.ts";
import { createCommand } from "./mod.ts";
import { embedGenerator, getNovelName } from "../utils/sharedFunctions.ts";

const log = logger({ name: "Overlord" });

// const now = new Date().getTime();
// var currentOverlord = "600651814131597343" as BigString;

var currentOverlord = (await overlordTimes.get("1001551902527459428") as any)[
  "currentOverlord"
] as BigString;

//reset with this

// const now = 0;
// overlordTimes.update("1001551902527459428", { now, currentOverlord });

const bannedOverlords=[681096336392585255n, 371018392406327297n]
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
    member.roles.includes(1113487214282817627n)
  ) as Collection<bigint, Member>;

  if (
    now -
        (await overlordTimes.get("1001551902527459428") as any)["now"] >=
      1000 * 60 * 60 * 24 * 4
  ) {
    await Promise.all(overlords.map(removeRoleFromMember));
    const potentialOverlords = members.filter((member) =>
      member.roles.includes(1001563056180035684n) &&
      member.id != currentOverlord as bigint &&
      !bannedOverlords.includes(member.id)
    ) as Collection<bigint, Member>;
    const overlord = potentialOverlords.random();
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
    // log.info();
    await Bot.helpers.sendInteractionResponse(
      interaction.id,
      interaction.token,
      {
        type: InteractionResponseTypes.ChannelMessageWithSource,
        data: {
          embeds: [
            embedGenerator(
              interaction,
              "https://static.wikia.nocookie.net/umineko/images/6/66/Oko_defa1.png/revision/latest?cb=20190501173002",
              `The current overlord is ${
                getNovelName((await Bot.helpers.getMember(
                  "1001551902527459428",
                  currentOverlord,
                )))
              }`,
              `Descension at: <t:${
                Math.floor(
                  parseInt(
                    (await overlordTimes.get("1001551902527459428") as any)[
                      "now"
                    ],
                  ) / 1000,
                ) + 60 * 60 * 24 * 4
              }>`,
            ),
          ],
        },
      },
    );
  },
});

await chooseOverlord();
setInterval(chooseOverlord, 1000 * 60 * 5);
