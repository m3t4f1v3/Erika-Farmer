/// Get the .env file that the user should have created, and get the token
const token = Deno.env.get("token") || "";

export interface Config {
  token: string;
  botId: bigint;
}

export const configs = {
  /** Get token from ENV variable */
  token,
  /** Get the BotId from the token */
  botId: BigInt(atob(token.split(".")[0])),
  /** The server id where you develop your bot and want dev commands created. */
  devGuildId: BigInt(Deno.env.get("dev_guild_id")!),
};
