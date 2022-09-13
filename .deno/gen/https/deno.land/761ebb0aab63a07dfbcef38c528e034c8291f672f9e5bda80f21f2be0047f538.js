import { Collection } from "../../util/collection.ts";
import { calculateTotalShards } from "./calculateTotalShards.ts";
import { calculateWorkerId } from "./calculateWorkerId.ts";
// import {
// markNewGuildShardId,
// resharder,
// resharderCloseOldShards,
// resharderIsPending,
// reshardingEditGuildShardIds,
// } from "./resharder.ts";
import { spawnShards } from "./spawnShards.ts";
import { prepareBuckets } from "./prepareBuckets.ts";
import { tellWorkerToIdentify } from "./tellWorkerToIdentify.ts";
import { createShardManager } from "./shardManager.ts";
import { stop } from "./stop.ts";
/** Create a new Gateway Manager.
 *
 * @param options: Customize every bit of the manager. If something is not
 * provided, it will fallback to a default which should be suitable for most
 * bots.
 */ export function createGatewayManager(options) {
    const prepareBucketsOverwritten = options.prepareBuckets ?? prepareBuckets;
    const spawnShardsOverwritten = options.spawnShards ?? spawnShards;
    const stopOverwritten = options.stop ?? stop;
    const tellWorkerToIdentifyOverwritten = options.tellWorkerToIdentify ?? tellWorkerToIdentify;
    const calculateTotalShardsOverwritten = options.calculateTotalShards ?? calculateTotalShards;
    const calculateWorkerIdOverwritten = options.calculateWorkerId ?? calculateWorkerId;
    const totalShards = (options.totalShards ?? options.gatewayBot.shards) ?? 1;
    const gatewayManager = {
        // ----------
        // PROPERTIES
        // ----------
        /** The max concurrency buckets.
     * Those will be created when the `spawnShards` (which calls `prepareBuckets` under the hood) function gets called.
     */ buckets: new Collection(),
        /** Id of the first Shard which should get controlled by this manager.
     *
     * NOTE: This is intended for testing purposes
     * if big bots want to test the gateway on smaller scale.
     * This is not recommended to be used in production.
     */ firstShardId: options.firstShardId ?? 0,
        /** Important data which is used by the manager to connect shards to the gateway. */ gatewayBot: options.gatewayBot,
        /** Id of the last Shard which should get controlled by this manager.
     *
     * NOTE: This is intended for testing purposes
     * if big bots want to test the gateway on smaller scale.
     * This is not recommended to be used in production.
     */ lastShardId: (options.lastShardId ?? totalShards - 1) ?? 1,
        /** This is where the Shards get stored.
     * This will not be used when having a custom workers solution.
     */ manager: {},
        /** Delay in milliseconds to wait before spawning next shard.
     * OPTIMAL IS ABOVE 5100. YOU DON'T WANT TO HIT THE RATE LIMIT!!!
     */ spawnShardDelay: options.spawnShardDelay ?? 5300,
        /** How many Shards should get assigned to a Worker.
     *
     * IMPORTANT: Discordeno will NOT spawn Workers for you.
     * Instead you have to overwrite the `tellWorkerToIdentify` function to make that for you.
     * Look at the [BigBot template gateway solution](https://github.com/discordeno/discordeno/tree/main/template/bigbot/src/gateway) for reference.
     *
     * NOTE: The last Worker will IGNORE this value,
     * which means that the last worker can get assigned an unlimited amount of shards.
     * This is not a bug but intended behavior and means you have to assign more workers to this manager.
     */ shardsPerWorker: options.shardsPerWorker ?? 25,
        /** The total amount of Workers which get controlled by this manager.
     *
     * IMPORTANT: Discordeno will NOT spawn Workers for you.
     * Instead you have to overwrite the `tellWorkerToIdentify` function to make that for you.
     * Look at the [BigBot template gateway solution](https://github.com/discordeno/discordeno/tree/main/template/bigbot/src/gateway) for reference.
     */ totalWorkers: options.totalWorkers ?? 4,
        // ----------
        // PROPERTIES
        // ----------
        /** Prepares the buckets for identifying.
     *
     * NOTE: Most of the time this function does not need to be called,
     * since it gets called by the `spawnShards` function indirectly.
     */ prepareBuckets: function() {
            return prepareBucketsOverwritten(this);
        },
        /** This function starts to spawn the Shards assigned to this manager.
     *
     * The managers `buckets` will be created and
     *
     * if `resharding.useOptimalLargeBotSharding` is set to true,
     * `totalShards` gets double checked and adjusted accordingly if wrong.
     */ spawnShards: function() {
            return spawnShardsOverwritten(this);
        },
        /** Stop the gateway. This closes all shards. */ stop: function(code, reason) {
            return stopOverwritten(this, code, reason);
        },
        /** Tell the Worker with this Id to identify this Shard.
     *
     * Useful if a custom Worker solution should be used.
     *
     * IMPORTANT: Discordeno will NOT spawn Workers for you.
     * Instead you have to overwrite the `tellWorkerToIdentify` function to make that for you.
     * Look at the [BigBot template gateway solution](https://github.com/discordeno/discordeno/tree/main/template/bigbot/src/gateway) for reference.
     */ tellWorkerToIdentify: function(workerId, shardId, bucketId) {
            return tellWorkerToIdentifyOverwritten(this, workerId, shardId, bucketId);
        },
        // TODO: fix debug
        /** Handle the different logs. Used for debugging. */ debug: options.debug || function() {},
        // /** The methods related to resharding. */
        // resharding: {
        //   /** Whether the resharder should automatically switch to LARGE BOT SHARDING when the bot is above 100K servers. */
        //   useOptimalLargeBotSharding: options.resharding?.useOptimalLargeBotSharding ?? true,
        //   /** Whether or not to automatically reshard.
        //    *
        //    * @default true
        //    */
        //   reshard: options.resharding?.reshard ?? true,
        //   /** The percentage at which resharding should occur.
        //    *
        //    * @default 80
        //    */
        //   reshardPercentage: options.resharding?.reshardPercentage ?? 80,
        //   /** Handles resharding the bot when necessary. */
        //   resharder: options.resharding?.resharder ?? resharder,
        //   /** Handles checking if all new shards are online in the new gateway. */
        //   isPending: options.resharding?.isPending ?? resharderIsPending,
        //   /** Handles closing all shards in the old gateway. */
        //   closeOldShards: options.resharding?.closeOldShards ?? resharderCloseOldShards,
        //   /** Handles checking if it is time to reshard and triggers the resharder. */
        //   check: options.resharding?.check ?? startReshardingChecks,
        //   /** Handler to mark a guild id with its new shard id in cache. */
        //   markNewGuildShardId: options.resharding?.markNewGuildShardId ?? markNewGuildShardId,
        //   /** Handler to update all guilds in cache with the new shard id. */
        //   editGuildShardIds: options.resharding?.editGuildShardIds ?? reshardingEditGuildShardIds,
        // },
        /** Calculate the amount of Shards which should be used based on the bot's max concurrency. */ calculateTotalShards: function() {
            return calculateTotalShardsOverwritten(this);
        },
        /** Calculate the Id of the Worker related to this Shard. */ calculateWorkerId: function(shardId) {
            return calculateWorkerIdOverwritten(this, shardId);
        }
    };
    gatewayManager.manager = createShardManager({
        createShardOptions: options.createShardOptions,
        gatewayConfig: options.gatewayConfig,
        shardIds: [],
        totalShards,
        handleMessage: function(shard, message) {
            return options.handleDiscordPayload(shard, message);
        },
        requestIdentify: async (shardId)=>{
            // TODO: improve
            await gatewayManager.buckets.get(shardId % gatewayManager.gatewayBot.sessionStartLimit.maxConcurrency).leak.acquire(1);
        }
    });
    return gatewayManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRHYXRld2F5Qm90IH0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybWVycy9nYXRld2F5Qm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkR2F0ZXdheVBheWxvYWQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgR2F0ZXdheUludGVudHMsIE1ha2VSZXF1aXJlZCwgT21pdEZpcnN0Rm5BcmcsIFBpY2tQYXJ0aWFsIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3NoYXJlZC50c1wiO1xuaW1wb3J0IHsgTGVha3lCdWNrZXQgfSBmcm9tIFwiLi4vLi4vdXRpbC9idWNrZXQudHNcIjtcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tIFwiLi4vLi4vdXRpbC9jb2xsZWN0aW9uLnRzXCI7XG5pbXBvcnQgeyBDcmVhdGVTaGFyZCwgY3JlYXRlU2hhcmQgfSBmcm9tIFwiLi4vc2hhcmQvY3JlYXRlU2hhcmQudHNcIjtcbmltcG9ydCB7IFNoYXJkLCBTaGFyZEdhdGV3YXlDb25maWcgfSBmcm9tIFwiLi4vc2hhcmQvdHlwZXMudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVRvdGFsU2hhcmRzIH0gZnJvbSBcIi4vY2FsY3VsYXRlVG90YWxTaGFyZHMudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVdvcmtlcklkIH0gZnJvbSBcIi4vY2FsY3VsYXRlV29ya2VySWQudHNcIjtcbi8vIGltcG9ydCB7XG4vLyBtYXJrTmV3R3VpbGRTaGFyZElkLFxuLy8gcmVzaGFyZGVyLFxuLy8gcmVzaGFyZGVyQ2xvc2VPbGRTaGFyZHMsXG4vLyByZXNoYXJkZXJJc1BlbmRpbmcsXG4vLyByZXNoYXJkaW5nRWRpdEd1aWxkU2hhcmRJZHMsXG4vLyB9IGZyb20gXCIuL3Jlc2hhcmRlci50c1wiO1xuaW1wb3J0IHsgc3Bhd25TaGFyZHMgfSBmcm9tIFwiLi9zcGF3blNoYXJkcy50c1wiO1xuaW1wb3J0IHsgcHJlcGFyZUJ1Y2tldHMgfSBmcm9tIFwiLi9wcmVwYXJlQnVja2V0cy50c1wiO1xuaW1wb3J0IHsgdGVsbFdvcmtlclRvSWRlbnRpZnkgfSBmcm9tIFwiLi90ZWxsV29ya2VyVG9JZGVudGlmeS50c1wiO1xuaW1wb3J0IHsgY3JlYXRlU2hhcmRNYW5hZ2VyLCBTaGFyZE1hbmFnZXIgfSBmcm9tIFwiLi9zaGFyZE1hbmFnZXIudHNcIjtcbmltcG9ydCB7IHN0b3AgfSBmcm9tIFwiLi9zdG9wLnRzXCI7XG5cbmV4cG9ydCB0eXBlIEdhdGV3YXlNYW5hZ2VyID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlR2F0ZXdheU1hbmFnZXI+O1xuXG4vKiogQ3JlYXRlIGEgbmV3IEdhdGV3YXkgTWFuYWdlci5cbiAqXG4gKiBAcGFyYW0gb3B0aW9uczogQ3VzdG9taXplIGV2ZXJ5IGJpdCBvZiB0aGUgbWFuYWdlci4gSWYgc29tZXRoaW5nIGlzIG5vdFxuICogcHJvdmlkZWQsIGl0IHdpbGwgZmFsbGJhY2sgdG8gYSBkZWZhdWx0IHdoaWNoIHNob3VsZCBiZSBzdWl0YWJsZSBmb3IgbW9zdFxuICogYm90cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhdGV3YXlNYW5hZ2VyKFxuICBvcHRpb25zOiBQaWNrUGFydGlhbDxDcmVhdGVHYXRld2F5TWFuYWdlciwgXCJoYW5kbGVEaXNjb3JkUGF5bG9hZFwiIHwgXCJnYXRld2F5Qm90XCIgfCBcImdhdGV3YXlDb25maWdcIj4sXG4pIHtcbiAgY29uc3QgcHJlcGFyZUJ1Y2tldHNPdmVyd3JpdHRlbiA9IG9wdGlvbnMucHJlcGFyZUJ1Y2tldHMgPz8gcHJlcGFyZUJ1Y2tldHM7XG4gIGNvbnN0IHNwYXduU2hhcmRzT3ZlcndyaXR0ZW4gPSBvcHRpb25zLnNwYXduU2hhcmRzID8/IHNwYXduU2hhcmRzO1xuICBjb25zdCBzdG9wT3ZlcndyaXR0ZW4gPSBvcHRpb25zLnN0b3AgPz8gc3RvcDtcbiAgY29uc3QgdGVsbFdvcmtlclRvSWRlbnRpZnlPdmVyd3JpdHRlbiA9IG9wdGlvbnMudGVsbFdvcmtlclRvSWRlbnRpZnkgPz8gdGVsbFdvcmtlclRvSWRlbnRpZnk7XG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsU2hhcmRzT3ZlcndyaXR0ZW4gPSBvcHRpb25zLmNhbGN1bGF0ZVRvdGFsU2hhcmRzID8/IGNhbGN1bGF0ZVRvdGFsU2hhcmRzO1xuICBjb25zdCBjYWxjdWxhdGVXb3JrZXJJZE92ZXJ3cml0dGVuID0gb3B0aW9ucy5jYWxjdWxhdGVXb3JrZXJJZCA/PyBjYWxjdWxhdGVXb3JrZXJJZDtcblxuICBjb25zdCB0b3RhbFNoYXJkcyA9IG9wdGlvbnMudG90YWxTaGFyZHMgPz8gb3B0aW9ucy5nYXRld2F5Qm90LnNoYXJkcyA/PyAxO1xuXG4gIGNvbnN0IGdhdGV3YXlNYW5hZ2VyID0ge1xuICAgIC8vIC0tLS0tLS0tLS1cbiAgICAvLyBQUk9QRVJUSUVTXG4gICAgLy8gLS0tLS0tLS0tLVxuXG4gICAgLyoqIFRoZSBtYXggY29uY3VycmVuY3kgYnVja2V0cy5cbiAgICAgKiBUaG9zZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgYHNwYXduU2hhcmRzYCAod2hpY2ggY2FsbHMgYHByZXBhcmVCdWNrZXRzYCB1bmRlciB0aGUgaG9vZCkgZnVuY3Rpb24gZ2V0cyBjYWxsZWQuXG4gICAgICovXG4gICAgYnVja2V0czogbmV3IENvbGxlY3Rpb248XG4gICAgICBudW1iZXIsXG4gICAgICB7XG4gICAgICAgIHdvcmtlcnM6IHsgaWQ6IG51bWJlcjsgcXVldWU6IG51bWJlcltdIH1bXTtcbiAgICAgICAgbGVhazogTGVha3lCdWNrZXQ7XG4gICAgICB9XG4gICAgPigpLFxuICAgIC8qKiBJZCBvZiB0aGUgZmlyc3QgU2hhcmQgd2hpY2ggc2hvdWxkIGdldCBjb250cm9sbGVkIGJ5IHRoaXMgbWFuYWdlci5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoaXMgaXMgaW50ZW5kZWQgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICAgKiBpZiBiaWcgYm90cyB3YW50IHRvIHRlc3QgdGhlIGdhdGV3YXkgb24gc21hbGxlciBzY2FsZS5cbiAgICAgKiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZCB0byBiZSB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICovXG4gICAgZmlyc3RTaGFyZElkOiBvcHRpb25zLmZpcnN0U2hhcmRJZCA/PyAwLFxuICAgIC8qKiBJbXBvcnRhbnQgZGF0YSB3aGljaCBpcyB1c2VkIGJ5IHRoZSBtYW5hZ2VyIHRvIGNvbm5lY3Qgc2hhcmRzIHRvIHRoZSBnYXRld2F5LiAqL1xuICAgIGdhdGV3YXlCb3Q6IG9wdGlvbnMuZ2F0ZXdheUJvdCxcbiAgICAvKiogSWQgb2YgdGhlIGxhc3QgU2hhcmQgd2hpY2ggc2hvdWxkIGdldCBjb250cm9sbGVkIGJ5IHRoaXMgbWFuYWdlci5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoaXMgaXMgaW50ZW5kZWQgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICAgKiBpZiBiaWcgYm90cyB3YW50IHRvIHRlc3QgdGhlIGdhdGV3YXkgb24gc21hbGxlciBzY2FsZS5cbiAgICAgKiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZCB0byBiZSB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICovXG4gICAgbGFzdFNoYXJkSWQ6IG9wdGlvbnMubGFzdFNoYXJkSWQgPz8gdG90YWxTaGFyZHMgLSAxID8/IDEsXG4gICAgLyoqIFRoaXMgaXMgd2hlcmUgdGhlIFNoYXJkcyBnZXQgc3RvcmVkLlxuICAgICAqIFRoaXMgd2lsbCBub3QgYmUgdXNlZCB3aGVuIGhhdmluZyBhIGN1c3RvbSB3b3JrZXJzIHNvbHV0aW9uLlxuICAgICAqL1xuICAgIG1hbmFnZXI6IHt9IGFzIFNoYXJkTWFuYWdlcixcbiAgICAvKiogRGVsYXkgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHNwYXduaW5nIG5leHQgc2hhcmQuXG4gICAgICogT1BUSU1BTCBJUyBBQk9WRSA1MTAwLiBZT1UgRE9OJ1QgV0FOVCBUTyBISVQgVEhFIFJBVEUgTElNSVQhISFcbiAgICAgKi9cbiAgICBzcGF3blNoYXJkRGVsYXk6IG9wdGlvbnMuc3Bhd25TaGFyZERlbGF5ID8/IDUzMDAsXG4gICAgLyoqIEhvdyBtYW55IFNoYXJkcyBzaG91bGQgZ2V0IGFzc2lnbmVkIHRvIGEgV29ya2VyLlxuICAgICAqXG4gICAgICogSU1QT1JUQU5UOiBEaXNjb3JkZW5vIHdpbGwgTk9UIHNwYXduIFdvcmtlcnMgZm9yIHlvdS5cbiAgICAgKiBJbnN0ZWFkIHlvdSBoYXZlIHRvIG92ZXJ3cml0ZSB0aGUgYHRlbGxXb3JrZXJUb0lkZW50aWZ5YCBmdW5jdGlvbiB0byBtYWtlIHRoYXQgZm9yIHlvdS5cbiAgICAgKiBMb29rIGF0IHRoZSBbQmlnQm90IHRlbXBsYXRlIGdhdGV3YXkgc29sdXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9kaXNjb3JkZW5vL2Rpc2NvcmRlbm8vdHJlZS9tYWluL3RlbXBsYXRlL2JpZ2JvdC9zcmMvZ2F0ZXdheSkgZm9yIHJlZmVyZW5jZS5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoZSBsYXN0IFdvcmtlciB3aWxsIElHTk9SRSB0aGlzIHZhbHVlLFxuICAgICAqIHdoaWNoIG1lYW5zIHRoYXQgdGhlIGxhc3Qgd29ya2VyIGNhbiBnZXQgYXNzaWduZWQgYW4gdW5saW1pdGVkIGFtb3VudCBvZiBzaGFyZHMuXG4gICAgICogVGhpcyBpcyBub3QgYSBidWcgYnV0IGludGVuZGVkIGJlaGF2aW9yIGFuZCBtZWFucyB5b3UgaGF2ZSB0byBhc3NpZ24gbW9yZSB3b3JrZXJzIHRvIHRoaXMgbWFuYWdlci5cbiAgICAgKi9cbiAgICBzaGFyZHNQZXJXb3JrZXI6IG9wdGlvbnMuc2hhcmRzUGVyV29ya2VyID8/IDI1LFxuICAgIC8qKiBUaGUgdG90YWwgYW1vdW50IG9mIFdvcmtlcnMgd2hpY2ggZ2V0IGNvbnRyb2xsZWQgYnkgdGhpcyBtYW5hZ2VyLlxuICAgICAqXG4gICAgICogSU1QT1JUQU5UOiBEaXNjb3JkZW5vIHdpbGwgTk9UIHNwYXduIFdvcmtlcnMgZm9yIHlvdS5cbiAgICAgKiBJbnN0ZWFkIHlvdSBoYXZlIHRvIG92ZXJ3cml0ZSB0aGUgYHRlbGxXb3JrZXJUb0lkZW50aWZ5YCBmdW5jdGlvbiB0byBtYWtlIHRoYXQgZm9yIHlvdS5cbiAgICAgKiBMb29rIGF0IHRoZSBbQmlnQm90IHRlbXBsYXRlIGdhdGV3YXkgc29sdXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9kaXNjb3JkZW5vL2Rpc2NvcmRlbm8vdHJlZS9tYWluL3RlbXBsYXRlL2JpZ2JvdC9zcmMvZ2F0ZXdheSkgZm9yIHJlZmVyZW5jZS5cbiAgICAgKi9cbiAgICB0b3RhbFdvcmtlcnM6IG9wdGlvbnMudG90YWxXb3JrZXJzID8/IDQsXG5cbiAgICAvLyAtLS0tLS0tLS0tXG4gICAgLy8gUFJPUEVSVElFU1xuICAgIC8vIC0tLS0tLS0tLS1cbiAgICAvKiogUHJlcGFyZXMgdGhlIGJ1Y2tldHMgZm9yIGlkZW50aWZ5aW5nLlxuICAgICAqXG4gICAgICogTk9URTogTW9zdCBvZiB0aGUgdGltZSB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90IG5lZWQgdG8gYmUgY2FsbGVkLFxuICAgICAqIHNpbmNlIGl0IGdldHMgY2FsbGVkIGJ5IHRoZSBgc3Bhd25TaGFyZHNgIGZ1bmN0aW9uIGluZGlyZWN0bHkuXG4gICAgICovXG4gICAgcHJlcGFyZUJ1Y2tldHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwcmVwYXJlQnVja2V0c092ZXJ3cml0dGVuKHRoaXMpO1xuICAgIH0sXG4gICAgLyoqIFRoaXMgZnVuY3Rpb24gc3RhcnRzIHRvIHNwYXduIHRoZSBTaGFyZHMgYXNzaWduZWQgdG8gdGhpcyBtYW5hZ2VyLlxuICAgICAqXG4gICAgICogVGhlIG1hbmFnZXJzIGBidWNrZXRzYCB3aWxsIGJlIGNyZWF0ZWQgYW5kXG4gICAgICpcbiAgICAgKiBpZiBgcmVzaGFyZGluZy51c2VPcHRpbWFsTGFyZ2VCb3RTaGFyZGluZ2AgaXMgc2V0IHRvIHRydWUsXG4gICAgICogYHRvdGFsU2hhcmRzYCBnZXRzIGRvdWJsZSBjaGVja2VkIGFuZCBhZGp1c3RlZCBhY2NvcmRpbmdseSBpZiB3cm9uZy5cbiAgICAgKi9cbiAgICBzcGF3blNoYXJkczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNwYXduU2hhcmRzT3ZlcndyaXR0ZW4odGhpcyk7XG4gICAgfSxcbiAgICAvKiogU3RvcCB0aGUgZ2F0ZXdheS4gVGhpcyBjbG9zZXMgYWxsIHNoYXJkcy4gKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoY29kZTogbnVtYmVyLCByZWFzb246IHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0b3BPdmVyd3JpdHRlbih0aGlzLCBjb2RlLCByZWFzb24pO1xuICAgIH0sXG4gICAgLyoqIFRlbGwgdGhlIFdvcmtlciB3aXRoIHRoaXMgSWQgdG8gaWRlbnRpZnkgdGhpcyBTaGFyZC5cbiAgICAgKlxuICAgICAqIFVzZWZ1bCBpZiBhIGN1c3RvbSBXb3JrZXIgc29sdXRpb24gc2hvdWxkIGJlIHVzZWQuXG4gICAgICpcbiAgICAgKiBJTVBPUlRBTlQ6IERpc2NvcmRlbm8gd2lsbCBOT1Qgc3Bhd24gV29ya2VycyBmb3IgeW91LlxuICAgICAqIEluc3RlYWQgeW91IGhhdmUgdG8gb3ZlcndyaXRlIHRoZSBgdGVsbFdvcmtlclRvSWRlbnRpZnlgIGZ1bmN0aW9uIHRvIG1ha2UgdGhhdCBmb3IgeW91LlxuICAgICAqIExvb2sgYXQgdGhlIFtCaWdCb3QgdGVtcGxhdGUgZ2F0ZXdheSBzb2x1dGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL2Rpc2NvcmRlbm8vZGlzY29yZGVuby90cmVlL21haW4vdGVtcGxhdGUvYmlnYm90L3NyYy9nYXRld2F5KSBmb3IgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHRlbGxXb3JrZXJUb0lkZW50aWZ5OiBmdW5jdGlvbiAod29ya2VySWQ6IG51bWJlciwgc2hhcmRJZDogbnVtYmVyLCBidWNrZXRJZDogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gdGVsbFdvcmtlclRvSWRlbnRpZnlPdmVyd3JpdHRlbih0aGlzLCB3b3JrZXJJZCwgc2hhcmRJZCwgYnVja2V0SWQpO1xuICAgIH0sXG4gICAgLy8gVE9ETzogZml4IGRlYnVnXG4gICAgLyoqIEhhbmRsZSB0aGUgZGlmZmVyZW50IGxvZ3MuIFVzZWQgZm9yIGRlYnVnZ2luZy4gKi9cbiAgICBkZWJ1Zzogb3B0aW9ucy5kZWJ1ZyB8fCBmdW5jdGlvbiAoKSB7fSxcblxuICAgIC8vIC8qKiBUaGUgbWV0aG9kcyByZWxhdGVkIHRvIHJlc2hhcmRpbmcuICovXG4gICAgLy8gcmVzaGFyZGluZzoge1xuICAgIC8vICAgLyoqIFdoZXRoZXIgdGhlIHJlc2hhcmRlciBzaG91bGQgYXV0b21hdGljYWxseSBzd2l0Y2ggdG8gTEFSR0UgQk9UIFNIQVJESU5HIHdoZW4gdGhlIGJvdCBpcyBhYm92ZSAxMDBLIHNlcnZlcnMuICovXG4gICAgLy8gICB1c2VPcHRpbWFsTGFyZ2VCb3RTaGFyZGluZzogb3B0aW9ucy5yZXNoYXJkaW5nPy51c2VPcHRpbWFsTGFyZ2VCb3RTaGFyZGluZyA/PyB0cnVlLFxuICAgIC8vICAgLyoqIFdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgcmVzaGFyZC5cbiAgICAvLyAgICAqXG4gICAgLy8gICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgLy8gICAgKi9cbiAgICAvLyAgIHJlc2hhcmQ6IG9wdGlvbnMucmVzaGFyZGluZz8ucmVzaGFyZCA/PyB0cnVlLFxuICAgIC8vICAgLyoqIFRoZSBwZXJjZW50YWdlIGF0IHdoaWNoIHJlc2hhcmRpbmcgc2hvdWxkIG9jY3VyLlxuICAgIC8vICAgICpcbiAgICAvLyAgICAqIEBkZWZhdWx0IDgwXG4gICAgLy8gICAgKi9cbiAgICAvLyAgIHJlc2hhcmRQZXJjZW50YWdlOiBvcHRpb25zLnJlc2hhcmRpbmc/LnJlc2hhcmRQZXJjZW50YWdlID8/IDgwLFxuICAgIC8vICAgLyoqIEhhbmRsZXMgcmVzaGFyZGluZyB0aGUgYm90IHdoZW4gbmVjZXNzYXJ5LiAqL1xuICAgIC8vICAgcmVzaGFyZGVyOiBvcHRpb25zLnJlc2hhcmRpbmc/LnJlc2hhcmRlciA/PyByZXNoYXJkZXIsXG4gICAgLy8gICAvKiogSGFuZGxlcyBjaGVja2luZyBpZiBhbGwgbmV3IHNoYXJkcyBhcmUgb25saW5lIGluIHRoZSBuZXcgZ2F0ZXdheS4gKi9cbiAgICAvLyAgIGlzUGVuZGluZzogb3B0aW9ucy5yZXNoYXJkaW5nPy5pc1BlbmRpbmcgPz8gcmVzaGFyZGVySXNQZW5kaW5nLFxuICAgIC8vICAgLyoqIEhhbmRsZXMgY2xvc2luZyBhbGwgc2hhcmRzIGluIHRoZSBvbGQgZ2F0ZXdheS4gKi9cbiAgICAvLyAgIGNsb3NlT2xkU2hhcmRzOiBvcHRpb25zLnJlc2hhcmRpbmc/LmNsb3NlT2xkU2hhcmRzID8/IHJlc2hhcmRlckNsb3NlT2xkU2hhcmRzLFxuICAgIC8vICAgLyoqIEhhbmRsZXMgY2hlY2tpbmcgaWYgaXQgaXMgdGltZSB0byByZXNoYXJkIGFuZCB0cmlnZ2VycyB0aGUgcmVzaGFyZGVyLiAqL1xuICAgIC8vICAgY2hlY2s6IG9wdGlvbnMucmVzaGFyZGluZz8uY2hlY2sgPz8gc3RhcnRSZXNoYXJkaW5nQ2hlY2tzLFxuICAgIC8vICAgLyoqIEhhbmRsZXIgdG8gbWFyayBhIGd1aWxkIGlkIHdpdGggaXRzIG5ldyBzaGFyZCBpZCBpbiBjYWNoZS4gKi9cbiAgICAvLyAgIG1hcmtOZXdHdWlsZFNoYXJkSWQ6IG9wdGlvbnMucmVzaGFyZGluZz8ubWFya05ld0d1aWxkU2hhcmRJZCA/PyBtYXJrTmV3R3VpbGRTaGFyZElkLFxuICAgIC8vICAgLyoqIEhhbmRsZXIgdG8gdXBkYXRlIGFsbCBndWlsZHMgaW4gY2FjaGUgd2l0aCB0aGUgbmV3IHNoYXJkIGlkLiAqL1xuICAgIC8vICAgZWRpdEd1aWxkU2hhcmRJZHM6IG9wdGlvbnMucmVzaGFyZGluZz8uZWRpdEd1aWxkU2hhcmRJZHMgPz8gcmVzaGFyZGluZ0VkaXRHdWlsZFNoYXJkSWRzLFxuICAgIC8vIH0sXG5cbiAgICAvKiogQ2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgU2hhcmRzIHdoaWNoIHNob3VsZCBiZSB1c2VkIGJhc2VkIG9uIHRoZSBib3QncyBtYXggY29uY3VycmVuY3kuICovXG4gICAgY2FsY3VsYXRlVG90YWxTaGFyZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVUb3RhbFNoYXJkc092ZXJ3cml0dGVuKHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKiogQ2FsY3VsYXRlIHRoZSBJZCBvZiB0aGUgV29ya2VyIHJlbGF0ZWQgdG8gdGhpcyBTaGFyZC4gKi9cbiAgICBjYWxjdWxhdGVXb3JrZXJJZDogZnVuY3Rpb24gKHNoYXJkSWQ6IG51bWJlcikge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVdvcmtlcklkT3ZlcndyaXR0ZW4odGhpcywgc2hhcmRJZCk7XG4gICAgfSxcbiAgfTtcblxuICBnYXRld2F5TWFuYWdlci5tYW5hZ2VyID0gY3JlYXRlU2hhcmRNYW5hZ2VyKHtcbiAgICBjcmVhdGVTaGFyZE9wdGlvbnM6IG9wdGlvbnMuY3JlYXRlU2hhcmRPcHRpb25zLFxuICAgIGdhdGV3YXlDb25maWc6IG9wdGlvbnMuZ2F0ZXdheUNvbmZpZyxcbiAgICBzaGFyZElkczogW10sXG4gICAgdG90YWxTaGFyZHMsXG5cbiAgICBoYW5kbGVNZXNzYWdlOiBmdW5jdGlvbiAoc2hhcmQsIG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmhhbmRsZURpc2NvcmRQYXlsb2FkKHNoYXJkLCBtZXNzYWdlKTtcbiAgICB9LFxuXG4gICAgcmVxdWVzdElkZW50aWZ5OiBhc3luYyAoc2hhcmRJZCkgPT4ge1xuICAgICAgLy8gVE9ETzogaW1wcm92ZVxuICAgICAgYXdhaXQgZ2F0ZXdheU1hbmFnZXIuYnVja2V0cy5nZXQoc2hhcmRJZCAlIGdhdGV3YXlNYW5hZ2VyLmdhdGV3YXlCb3Quc2Vzc2lvblN0YXJ0TGltaXQubWF4Q29uY3VycmVuY3kpIS5sZWFrXG4gICAgICAgIC5hY3F1aXJlKDEpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBnYXRld2F5TWFuYWdlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVHYXRld2F5TWFuYWdlciB7XG4gIC8qKiBEZWxheSBpbiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgc3Bhd25pbmcgbmV4dCBzaGFyZC4gT1BUSU1BTCBJUyBBQk9WRSA1MTAwLiBZT1UgRE9OJ1QgV0FOVCBUTyBISVQgVEhFIFJBVEUgTElNSVQhISEgKi9cbiAgc3Bhd25TaGFyZERlbGF5OiBudW1iZXI7XG4gIC8qKiBUb3RhbCBhbW91bnQgb2Ygc2hhcmRzIHlvdXIgYm90IHVzZXMuIFVzZWZ1bCBmb3IgemVyby1kb3dudGltZSB1cGRhdGVzIG9yIHJlc2hhcmRpbmcuICovXG4gIHRvdGFsU2hhcmRzOiBudW1iZXI7XG4gIC8qKiBUaGUgYW1vdW50IG9mIHNoYXJkcyB0byBsb2FkIHBlciB3b3JrZXIuICovXG4gIHNoYXJkc1BlcldvcmtlcjogbnVtYmVyO1xuICAvKiogVGhlIHRvdGFsIGFtb3VudCBvZiB3b3JrZXJzIHRvIHVzZSBmb3IgeW91ciBib3QuICovXG4gIHRvdGFsV29ya2VyczogbnVtYmVyO1xuICAvKiogSWQgb2YgdGhlIGZpcnN0IFNoYXJkIHdoaWNoIHNob3VsZCBnZXQgY29udHJvbGxlZCBieSB0aGlzIG1hbmFnZXIuXG4gICAqXG4gICAqIE5PVEU6IFRoaXMgaXMgaW50ZW5kZWQgZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICogaWYgYmlnIGJvdHMgd2FudCB0byB0ZXN0IHRoZSBnYXRld2F5IG9uIHNtYWxsZXIgc2NhbGUuXG4gICAqIFRoaXMgaXMgbm90IHJlY29tbWVuZGVkIHRvIGJlIHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICovXG4gIGZpcnN0U2hhcmRJZDogbnVtYmVyO1xuICAvKiogSWQgb2YgdGhlIGxhc3QgU2hhcmQgd2hpY2ggc2hvdWxkIGdldCBjb250cm9sbGVkIGJ5IHRoaXMgbWFuYWdlci5cbiAgICpcbiAgICogTk9URTogVGhpcyBpcyBpbnRlbmRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgKiBpZiBiaWcgYm90cyB3YW50IHRvIHRlc3QgdGhlIGdhdGV3YXkgb24gc21hbGxlciBzY2FsZS5cbiAgICogVGhpcyBpcyBub3QgcmVjb21tZW5kZWQgdG8gYmUgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgKi9cbiAgbGFzdFNoYXJkSWQ6IG51bWJlcjtcblxuICAvKiogSW1wb3J0YW50IGRhdGEgd2hpY2ggaXMgdXNlZCBieSB0aGUgbWFuYWdlciB0byBjb25uZWN0IHNoYXJkcyB0byB0aGUgZ2F0ZXdheS4gKi9cbiAgZ2F0ZXdheUJvdDogR2V0R2F0ZXdheUJvdDtcblxuICBnYXRld2F5Q29uZmlnOiBQaWNrUGFydGlhbDxTaGFyZEdhdGV3YXlDb25maWcsIFwidG9rZW5cIj47XG5cbiAgLyoqIE9wdGlvbnMgd2hpY2ggYXJlIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHNoYXJkLiAqL1xuICBjcmVhdGVTaGFyZE9wdGlvbnM/OiBPbWl0PENyZWF0ZVNoYXJkLCBcImlkXCIgfCBcInRvdGFsU2hhcmRzXCIgfCBcInJlcXVlc3RJZGVudGlmeVwiIHwgXCJnYXRld2F5Q29uZmlnXCI+O1xuXG4gIC8qKiBTdG9yZWQgYXMgYnVja2V0SWQ6IHsgd29ya2VyczogW3dvcmtlcklkLCBbU2hhcmRJZHNdXSwgY3JlYXRlTmV4dFNoYXJkOiBib29sZWFuIH0gKi9cbiAgYnVja2V0czogQ29sbGVjdGlvbjxcbiAgICBudW1iZXIsXG4gICAge1xuICAgICAgd29ya2VyczogeyBpZDogbnVtYmVyOyBxdWV1ZTogbnVtYmVyW10gfVtdO1xuICAgICAgbGVhazogTGVha3lCdWNrZXQ7XG4gICAgfVxuICA+O1xuICAvLyBNRVRIT0RTXG5cbiAgLyoqIFByZXBhcmVzIHRoZSBidWNrZXRzIGZvciBpZGVudGlmeWluZyAqL1xuICBwcmVwYXJlQnVja2V0czogdHlwZW9mIHByZXBhcmVCdWNrZXRzO1xuICAvKiogVGhlIGhhbmRsZXIgZm9yIHNwYXduaW5nIEFMTCB0aGUgc2hhcmRzLiAqL1xuICBzcGF3blNoYXJkczogdHlwZW9mIHNwYXduU2hhcmRzO1xuICAvKiogVGhlIGhhbmRsZXIgdG8gY2xvc2UgYWxsIHNoYXJkcy4gKi9cbiAgc3RvcDogdHlwZW9mIHN0b3A7XG4gIC8qKiBTZW5kcyB0aGUgZGlzY29yZCBwYXlsb2FkIHRvIGFub3RoZXIgc2VydmVyLiAqL1xuICBoYW5kbGVEaXNjb3JkUGF5bG9hZDogKHNoYXJkOiBTaGFyZCwgZGF0YTogRGlzY29yZEdhdGV3YXlQYXlsb2FkKSA9PiBhbnk7XG4gIC8qKiBUZWxsIHRoZSB3b3JrZXIgdG8gYmVnaW4gaWRlbnRpZnlpbmcgdGhpcyBzaGFyZCAgKi9cbiAgdGVsbFdvcmtlclRvSWRlbnRpZnk6IHR5cGVvZiB0ZWxsV29ya2VyVG9JZGVudGlmeTtcbiAgLyoqIEhhbmRsZSB0aGUgZGlmZmVyZW50IGxvZ3MuIFVzZWQgZm9yIGRlYnVnZ2luZy4gKi9cbiAgZGVidWc6ICh0ZXh0OiBHYXRld2F5RGVidWdFdmVudHMsIC4uLmFyZ3M6IGFueVtdKSA9PiB1bmtub3duO1xuICAvKiogVGhlIG1ldGhvZHMgcmVsYXRlZCB0byByZXNoYXJkaW5nLiAqL1xuICAvLyByZXNoYXJkaW5nOiB7XG4gIC8vICAgLyoqIFdoZXRoZXIgdGhlIHJlc2hhcmRlciBzaG91bGQgYXV0b21hdGljYWxseSBzd2l0Y2ggdG8gTEFSR0UgQk9UIFNIQVJESU5HIHdoZW4geW91IGFyZSBhYm92ZSAxMDBLIHNlcnZlcnMuICovXG4gIC8vICAgdXNlT3B0aW1hbExhcmdlQm90U2hhcmRpbmc6IGJvb2xlYW47XG4gIC8vICAgLyoqIFdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgcmVzaGFyZC4gKi9cbiAgLy8gICByZXNoYXJkOiBib29sZWFuO1xuICAvLyAgIC8qKiBUaGUgcGVyY2VudGFnZSBhdCB3aGljaCByZXNoYXJkaW5nIHNob3VsZCBvY2N1ci4gKi9cbiAgLy8gICByZXNoYXJkUGVyY2VudGFnZTogbnVtYmVyO1xuICAvLyAgIC8qKiBIYW5kbGVzIHJlc2hhcmRpbmcgdGhlIGJvdCB3aGVuIG5lY2Vzc2FyeS4gKi9cbiAgLy8gICByZXNoYXJkZXI6IHR5cGVvZiByZXNoYXJkZXI7XG4gIC8vICAgLyoqIEhhbmRsZXMgY2hlY2tpbmcgaWYgYWxsIG5ldyBzaGFyZHMgYXJlIG9ubGluZSBpbiB0aGUgbmV3IGdhdGV3YXkuICovXG4gIC8vICAgaXNQZW5kaW5nOiB0eXBlb2YgcmVzaGFyZGVySXNQZW5kaW5nO1xuICAvLyAgIC8qKiBIYW5kbGVzIGNsb3NpbmcgYWxsIHNoYXJkcyBpbiB0aGUgb2xkIGdhdGV3YXkuICovXG4gIC8vICAgY2xvc2VPbGRTaGFyZHM6IHR5cGVvZiByZXNoYXJkZXJDbG9zZU9sZFNoYXJkcztcbiAgLy8gICAvKiogSGFuZGxlciB0byBtYXJrIGEgZ3VpbGQgaWQgd2l0aCBpdHMgbmV3IHNoYXJkIGlkIGluIGNhY2hlLiAqL1xuICAvLyAgIG1hcmtOZXdHdWlsZFNoYXJkSWQ6IHR5cGVvZiBtYXJrTmV3R3VpbGRTaGFyZElkO1xuICAvLyAgIC8qKiBIYW5kbGVyIHRvIHVwZGF0ZSBhbGwgZ3VpbGRzIGluIGNhY2hlIHdpdGggdGhlIG5ldyBzaGFyZCBpZC4gKi9cbiAgLy8gICBlZGl0R3VpbGRTaGFyZElkczogdHlwZW9mIHJlc2hhcmRpbmdFZGl0R3VpbGRTaGFyZElkcztcbiAgLy8gfTtcbiAgLyoqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBzaGFyZHMgdG8gdXNlIGJhc2VkIG9uIHRoZSBtYXggY29uY3VycmVuY3kgKi9cbiAgY2FsY3VsYXRlVG90YWxTaGFyZHM6IHR5cGVvZiBjYWxjdWxhdGVUb3RhbFNoYXJkcztcblxuICAvKiogQ2FsY3VsYXRlIHRoZSBpZCBvZiB0aGUgd29ya2VyIHJlbGF0ZWQgb3QgdGhpcyBTaGFyZC4gKi9cbiAgY2FsY3VsYXRlV29ya2VySWQ6IHR5cGVvZiBjYWxjdWxhdGVXb3JrZXJJZDtcbn1cblxuZXhwb3J0IHR5cGUgR2F0ZXdheURlYnVnRXZlbnRzID1cbiAgfCBcIkdXIEVSUk9SXCJcbiAgfCBcIkdXIENMT1NFRFwiXG4gIHwgXCJHVyBDTE9TRURfUkVDT05ORUNUXCJcbiAgfCBcIkdXIFJBV1wiXG4gIHwgXCJHVyBSRUNPTk5FQ1RcIlxuICB8IFwiR1cgSU5WQUxJRF9TRVNTSU9OXCJcbiAgfCBcIkdXIFJFU1VNRURcIlxuICB8IFwiR1cgUkVTVU1JTkdcIlxuICB8IFwiR1cgSURFTlRJRllJTkdcIlxuICB8IFwiR1cgUkFXX1NFTkRcIlxuICB8IFwiR1cgTUFYIFJFUVVFU1RTXCJcbiAgfCBcIkdXIERFQlVHXCJcbiAgfCBcIkdXIEhFQVJUQkVBVElOR1wiXG4gIHwgXCJHVyBIRUFSVEJFQVRJTkdfU1RBUlRFRFwiXG4gIHwgXCJHVyBIRUFSVEJFQVRJTkdfREVUQUlMU1wiXG4gIHwgXCJHVyBIRUFSVEJFQVRJTkdfQ0xPU0VEXCI7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsU0FBUyxVQUFVLFFBQVEsMEJBQTBCLENBQUM7QUFHdEQsU0FBUyxvQkFBb0IsUUFBUSwyQkFBMkIsQ0FBQztBQUNqRSxTQUFTLGlCQUFpQixRQUFRLHdCQUF3QixDQUFDO0FBQzNELFdBQVc7QUFDWCx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiLDJCQUEyQjtBQUMzQixzQkFBc0I7QUFDdEIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQixTQUFTLFdBQVcsUUFBUSxrQkFBa0IsQ0FBQztBQUMvQyxTQUFTLGNBQWMsUUFBUSxxQkFBcUIsQ0FBQztBQUNyRCxTQUFTLG9CQUFvQixRQUFRLDJCQUEyQixDQUFDO0FBQ2pFLFNBQVMsa0JBQWtCLFFBQXNCLG1CQUFtQixDQUFDO0FBQ3JFLFNBQVMsSUFBSSxRQUFRLFdBQVcsQ0FBQztBQUlqQzs7Ozs7R0FLRyxDQUNILE9BQU8sU0FBUyxvQkFBb0IsQ0FDbEMsT0FBbUcsRUFDbkc7SUFDQSxNQUFNLHlCQUF5QixHQUFHLE9BQU8sQ0FBQyxjQUFjLElBQUksY0FBYyxBQUFDO0lBQzNFLE1BQU0sc0JBQXNCLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxXQUFXLEFB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