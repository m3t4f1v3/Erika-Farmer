import { Bot } from "../../bot.ts";
import { overlordTimes } from "../database/mod.ts";
import { logger } from "../utils/logger.ts";
import { BigString, Collection, Member } from "../../deps.ts";

const log = logger({ name: "Overlord" });

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
      1000 * 60 * 60 * 24 * 7
  ) {
    await Promise.all(overlords.map(removeRoleFromMember));
    log.info(
      now -
        (await overlordTimes.get("1001551902527459428") as any)["now"],
    );
    const potential_overlords = members.filter((member) =>
      member.roles.includes(1001563056180035684n) &&
      member.id != 371018392406327297n
    ) as Collection<bigint, Member>;
    const overlord = potential_overlords.random();
    log.info("new overlord chosen");
    log.info(overlord?.user?.username);
    //log.info(overlord);
    Bot.helpers.addRole(
      "1001551902527459428",
      overlord?.id as BigString,
      "1113487214282817627",
    );
    await overlordTimes.update("1001551902527459428", { now });
  }
}

await chooseOverlord();
setInterval(chooseOverlord, 1000 * 60 * 60);
