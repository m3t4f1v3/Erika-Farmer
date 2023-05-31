import { startBot } from "./deps.ts";
// back alley move
import { Bot as BotType } from "./deps.ts";
import log from "./src/utils/logger.ts";
import { fileLoader, importDirectory } from "./src/utils/loader.ts";
import { updateApplicationCommands } from "./src/utils/updateCommands.ts";
// setup db
import { Bot } from "./bot.ts";
import { initialize } from "./src/database/mod.ts";
//import {updateGuilds} from "./src/utils/sharedFunctions.ts"

log.info("Starting bot...");

// Forces deno to read all the files which will fill the commands/inhibitors cache etc.
await Promise.all(
  [
    "./src/commands",
    "./src/events",
    "./src/database",
    // "./src/tasks",
  ].map((path) => importDirectory(Deno.realPathSync(path))),
);
await fileLoader();
await initialize();
// UPDATES YOUR COMMANDS TO LATEST COMMANDS

try {
  await updateApplicationCommands();
} catch (error) {
  if (
    // not fond of how this is formatted but best I can really do until the library updates
    error.message ==
      `[599] Internal Proxy Error
SyntaxError: Unexpected token < in JSON at position 0
undefined`
  ) {
    // kill repl
    Deno.kill(1, "SIGINT");
  } else {
    log.error("Updating failed:");
    log.error(error.message);
    log.error("Stack:");
    log.error(error.stack);
  }
}

// should be fixed now
//await updateApplicationCommands();
// STARTS THE CONNECTION TO DISCORD 🤓

await startBot(Bot /*back alley*/ as BotType);
//log.info(Object.getOwnPropertyNames(Bot.cache));

// wooooo i love always on

const server = Deno.listen({ port: 8080 });

async function handleHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // Try opening the file
    await requestEvent.respondWith(
      new Response("", { status: 200 }),
    );
    return;
  }
}

for await (const conn of server) {
  handleHttp(conn).catch(log.error);
}
