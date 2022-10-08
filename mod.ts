import { startBot } from "./deps.ts";
// back alley move
import { Bot as BotType } from "./deps.ts";
import log from "./src/utils/logger.ts";
import { fileLoader, importDirectory } from "./src/utils/loader.ts";
import { updateApplicationCommands } from "./src/utils/updateCommands.ts";
// setup db
import { Bot } from "./bot.ts";
import {updateGuilds} from "./src/utils/sharedFunctions.ts"

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
    // not fond of how this is formatted but best I can really do until the library updates
    error.message ==
      `[599] Internal Proxy Error
SyntaxError: Unexpected token < in JSON at position 0
undefined`
  ) {
    // kill repl
    Deno.kill(1, "SIGINT");
  } else {
    console.error("Updating failed:")
    console.error(error.message);
    console.error("Stack:")
    console.error(error.stack);
  }
}

// should be fixed now
//await updateApplicationCommands();
// STARTS THE CONNECTION TO DISCORD

await startBot(Bot /*back alley*/ as BotType);

// wooooo i love always on
const server = Deno.listen({ port: 8080 });

for await (const conn of server) {
  handleHttp(conn).catch(console.error);
}

async function handleHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // Try opening the file
    let file;
    try {
      file = await Deno.open("erika.gif", { read: true });
    } catch {
      // If the file cannot be opened, return a "404 Not Found" response
      const notFoundResponse = new Response("404 Not Found", { status: 404 });
      await requestEvent.respondWith(notFoundResponse);
      return;
    }

    // Build a readable stream so the file doesn't have to be fully loaded into
    // memory while we send it
    const readableStream = file.readable;

    // Build and send the response
    const response = new Response(readableStream);
    await requestEvent.respondWith(response);
  }
}