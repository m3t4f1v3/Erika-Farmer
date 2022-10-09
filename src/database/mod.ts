import { decode, encode, Kwik, KwikTable } from "../../deps.ts";
import { logger } from "../utils/logger.ts";

const log = logger({ name: "DB Manager" });

const kwik = new Kwik();
export const guilds = new KwikTable(kwik, "guilds");

// Add BigInt Support
kwik.msgpackExtensionCodec.register({
  type: 0,
  encode: (object: unknown): Uint8Array | null => {
    if (typeof object === "bigint") {
      if (
        object <= Number.MAX_SAFE_INTEGER && object >= Number.MIN_SAFE_INTEGER
      ) {
        return encode(parseInt(object.toString(), 10), {});
      } else {
        return encode(object.toString(), {});
      }
    } else {
      return null;
    }
  },
  decode: (data: Uint8Array) => {
    return BigInt(decode(data, {}) as string);
  },
});

// Initialize the Database
export async function initialize() {
  await kwik.init();
  log.info("Database Initialized!");
}
