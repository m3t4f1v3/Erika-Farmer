import { choose } from "../utils/sharedFunctions.ts";
import { Bot } from "../../bot.ts";

const members = await Bot.helpers.getMembers("1001551902527459428", {
  limit: 1000,
});
const roleId = BigInt("1001563056180035684");

async function chooseOverlord() {
  console.log("new overlord chosen");
  console.log(
    (await members).filter((member) => member.roles.includes(roleId)),
  );
}

await chooseOverlord();
setInterval(chooseOverlord, 1000 * 60 * 60 * 24);
