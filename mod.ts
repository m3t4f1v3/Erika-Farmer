import { startBot } from "./deps.ts";
import log from "./src/utils/logger.ts";
import { fileLoader, importDirectory } from "./src/utils/loader.ts";
import { updateApplicationCommands } from "./src/utils/updateCommands.ts";
// setup db
import { Bot } from "./bot.ts";

log.info("Starting bot...");

// Forces deno to read all the files which will fill the commands/inhibitors cache etc.
await Promise.all(
  [
    "./src/commands",
    "./src/events",
    // "./src/tasks",
  ].map((path) => importDirectory(Deno.realPathSync(path))),
);
await fileLoader();

// UPDATES YOUR COMMANDS TO LATEST COMMANDS
try {
  await updateApplicationCommands();
} catch (error) {
  if (
    // not fond of how this is formatted but best I can really do until the api updates
    error.message ==
      "[429] The request was rate limited and it maxed out the retries limit." 
  ) {
    //kill repl
    Deno.kill(1, "SIGINT");
  } else {
    console.error(error);
  }
}

// STARTS THE CONNECTION TO DISCORD
await startBot(Bot);
