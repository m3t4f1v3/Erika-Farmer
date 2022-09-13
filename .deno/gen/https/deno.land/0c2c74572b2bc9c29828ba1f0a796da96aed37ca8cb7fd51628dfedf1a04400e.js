import { Collection } from "../../util/collection.ts";
import { createShard } from "../shard/createShard.ts";
/** Create a new Shard manager.
 * This does not manage a specific range of Shard but the provided Shards on create or when an identify is requested.
 * The aim of this is to provide an easy to use manager which can be used by workers or any other kind of separate process.
 */ export function createShardManager(options) {
    return {
        // ----------
        // PROPERTIES
        // ----------
        /** Options which are used to create a new Shard. */ createShardOptions: {
            ...options.createShardOptions,
            events: {
                ...options.createShardOptions?.events,
                message: options.createShardOptions?.events?.message ?? options.handleMessage
            }
        },
        /** Gateway configuration which is used when creating a Shard. */ gatewayConfig: options.gatewayConfig,
        /** Managed Shards. */ shards: new Collection(options.shardIds.map((shardId)=>{
            const shard = createShard({
                ...options.createShardOptions,
                id: shardId,
                totalShards: options.totalShards,
                gatewayConfig: options.gatewayConfig,
                requestIdentify: async function() {
                    return await options.requestIdentify(shardId);
                }
            });
            return [
                shardId,
                shard
            ];
        })),
        /** Total amount of Shards used by the bot. */ totalShards: options.totalShards,
        // ----------
        // METHODS
        // ----------
        /** Tell the manager to identify a Shard.
     * If this Shard is not already managed this will also add the Shard to the manager.
     */ identify: async function(shardId) {
            let shard = this.shards.get(shardId);
            if (!shard) {
                shard = createShard({
                    ...this.createShardOptions,
                    id: shardId,
                    totalShards: this.totalShards,
                    gatewayConfig: this.gatewayConfig,
                    requestIdentify: async function() {
                        return await options.requestIdentify(shardId);
                    }
                });
                this.shards.set(shardId, shard);
            }
            return await shard.identify();
        },
        /** Kill a shard.
     * Close a shards connection to Discord's gateway (if any) and remove it from the manager.
     */ kill: async function(shardId) {
            const shard = this.shards.get(shardId);
            if (!shard) return;
            this.shards.delete(shardId);
            return await shard.shutdown();
        },
        /** This function communicates with the parent manager,
     * in order to know whether this manager is allowed to identify a new shard.
     */ requestIdentify: options.requestIdentify
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNjb3JkR2F0ZXdheVBheWxvYWQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgUGlja1BhcnRpYWwgfSBmcm9tIFwiLi4vLi4vdHlwZXMvc2hhcmVkLnRzXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWwvY29sbGVjdGlvbi50c1wiO1xuaW1wb3J0IHsgQ3JlYXRlU2hhcmQsIGNyZWF0ZVNoYXJkIH0gZnJvbSBcIi4uL3NoYXJkL2NyZWF0ZVNoYXJkLnRzXCI7XG5pbXBvcnQgeyBTaGFyZCwgU2hhcmRHYXRld2F5Q29uZmlnIH0gZnJvbSBcIi4uL3NoYXJkL3R5cGVzLnRzXCI7XG5cbi8vIFRPRE86IGRlYnVnXG5cbi8qKiBUaGlzIGlzIGEgU2hhcmQgbWFuYWdlci5cbiAqIFRoaXMgZG9lcyBub3QgbWFuYWdlIGEgc3BlY2lmaWMgcmFuZ2Ugb2YgU2hhcmQgYnV0IHRoZSBwcm92aWRlZCBTaGFyZHMgb24gY3JlYXRlIG9yIHdoZW4gYW4gaWRlbnRpZnkgaXMgcmVxdWVzdGVkLlxuICogVGhlIGFpbSBvZiB0aGlzIGlzIHRvIHByb3ZpZGUgYW4gZWFzeSB0byB1c2UgbWFuYWdlciB3aGljaCBjYW4gYmUgdXNlZCBieSB3b3JrZXJzIG9yIGFueSBvdGhlciBraW5kIG9mIHNlcGFyYXRlIHByb2Nlc3MuXG4gKi9cbmV4cG9ydCB0eXBlIFNoYXJkTWFuYWdlciA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVNoYXJkTWFuYWdlcj47XG5cbi8qKiBDcmVhdGUgYSBuZXcgU2hhcmQgbWFuYWdlci5cbiAqIFRoaXMgZG9lcyBub3QgbWFuYWdlIGEgc3BlY2lmaWMgcmFuZ2Ugb2YgU2hhcmQgYnV0IHRoZSBwcm92aWRlZCBTaGFyZHMgb24gY3JlYXRlIG9yIHdoZW4gYW4gaWRlbnRpZnkgaXMgcmVxdWVzdGVkLlxuICogVGhlIGFpbSBvZiB0aGlzIGlzIHRvIHByb3ZpZGUgYW4gZWFzeSB0byB1c2UgbWFuYWdlciB3aGljaCBjYW4gYmUgdXNlZCBieSB3b3JrZXJzIG9yIGFueSBvdGhlciBraW5kIG9mIHNlcGFyYXRlIHByb2Nlc3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFyZE1hbmFnZXIob3B0aW9uczogQ3JlYXRlU2hhcmRNYW5hZ2VyKSB7XG4gIHJldHVybiB7XG4gICAgLy8gLS0tLS0tLS0tLVxuICAgIC8vIFBST1BFUlRJRVNcbiAgICAvLyAtLS0tLS0tLS0tXG5cbiAgICAvKiogT3B0aW9ucyB3aGljaCBhcmUgdXNlZCB0byBjcmVhdGUgYSBuZXcgU2hhcmQuICovXG4gICAgY3JlYXRlU2hhcmRPcHRpb25zOiB7XG4gICAgICAuLi5vcHRpb25zLmNyZWF0ZVNoYXJkT3B0aW9ucyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICAuLi5vcHRpb25zLmNyZWF0ZVNoYXJkT3B0aW9ucz8uZXZlbnRzLFxuICAgICAgICBtZXNzYWdlOiBvcHRpb25zLmNyZWF0ZVNoYXJkT3B0aW9ucz8uZXZlbnRzPy5tZXNzYWdlID8/IG9wdGlvbnMuaGFuZGxlTWVzc2FnZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvKiogR2F0ZXdheSBjb25maWd1cmF0aW9uIHdoaWNoIGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIFNoYXJkLiAqL1xuICAgIGdhdGV3YXlDb25maWc6IG9wdGlvbnMuZ2F0ZXdheUNvbmZpZyxcbiAgICAvKiogTWFuYWdlZCBTaGFyZHMuICovXG4gICAgc2hhcmRzOiBuZXcgQ29sbGVjdGlvbihcbiAgICAgIG9wdGlvbnMuc2hhcmRJZHMubWFwKChzaGFyZElkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoYXJkID0gY3JlYXRlU2hhcmQoe1xuICAgICAgICAgIC4uLm9wdGlvbnMuY3JlYXRlU2hhcmRPcHRpb25zLFxuICAgICAgICAgIGlkOiBzaGFyZElkLFxuICAgICAgICAgIHRvdGFsU2hhcmRzOiBvcHRpb25zLnRvdGFsU2hhcmRzLFxuICAgICAgICAgIGdhdGV3YXlDb25maWc6IG9wdGlvbnMuZ2F0ZXdheUNvbmZpZyxcbiAgICAgICAgICByZXF1ZXN0SWRlbnRpZnk6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBvcHRpb25zLnJlcXVlc3RJZGVudGlmeShzaGFyZElkKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gW3NoYXJkSWQsIHNoYXJkXSBhcyBjb25zdDtcbiAgICAgIH0pLFxuICAgICksXG4gICAgLyoqIFRvdGFsIGFtb3VudCBvZiBTaGFyZHMgdXNlZCBieSB0aGUgYm90LiAqL1xuICAgIHRvdGFsU2hhcmRzOiBvcHRpb25zLnRvdGFsU2hhcmRzLFxuXG4gICAgLy8gLS0tLS0tLS0tLVxuICAgIC8vIE1FVEhPRFNcbiAgICAvLyAtLS0tLS0tLS0tXG5cbiAgICAvKiogVGVsbCB0aGUgbWFuYWdlciB0byBpZGVudGlmeSBhIFNoYXJkLlxuICAgICAqIElmIHRoaXMgU2hhcmQgaXMgbm90IGFscmVhZHkgbWFuYWdlZCB0aGlzIHdpbGwgYWxzbyBhZGQgdGhlIFNoYXJkIHRvIHRoZSBtYW5hZ2VyLlxuICAgICAqL1xuICAgIGlkZW50aWZ5OiBhc3luYyBmdW5jdGlvbiAoc2hhcmRJZDogbnVtYmVyKSB7XG4gICAgICBsZXQgc2hhcmQgPSB0aGlzLnNoYXJkcy5nZXQoc2hhcmRJZCk7XG4gICAgICBpZiAoIXNoYXJkKSB7XG4gICAgICAgIHNoYXJkID0gY3JlYXRlU2hhcmQoe1xuICAgICAgICAgIC4uLnRoaXMuY3JlYXRlU2hhcmRPcHRpb25zLFxuICAgICAgICAgIGlkOiBzaGFyZElkLFxuICAgICAgICAgIHRvdGFsU2hhcmRzOiB0aGlzLnRvdGFsU2hhcmRzLFxuICAgICAgICAgIGdhdGV3YXlDb25maWc6IHRoaXMuZ2F0ZXdheUNvbmZpZyxcbiAgICAgICAgICByZXF1ZXN0SWRlbnRpZnk6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBvcHRpb25zLnJlcXVlc3RJZGVudGlmeShzaGFyZElkKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNoYXJkcy5zZXQoc2hhcmRJZCwgc2hhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXdhaXQgc2hhcmQuaWRlbnRpZnkoKTtcbiAgICB9LFxuXG4gICAgLyoqIEtpbGwgYSBzaGFyZC5cbiAgICAgKiBDbG9zZSBhIHNoYXJkcyBjb25uZWN0aW9uIHRvIERpc2NvcmQncyBnYXRld2F5IChpZiBhbnkpIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgbWFuYWdlci5cbiAgICAgKi9cbiAgICBraWxsOiBhc3luYyBmdW5jdGlvbiAoc2hhcmRJZDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBzaGFyZCA9IHRoaXMuc2hhcmRzLmdldChzaGFyZElkKTtcbiAgICAgIGlmICghc2hhcmQpIHJldHVybjtcblxuICAgICAgdGhpcy5zaGFyZHMuZGVsZXRlKHNoYXJkSWQpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNoYXJkLnNodXRkb3duKCk7XG4gICAgfSxcblxuICAgIC8qKiBUaGlzIGZ1bmN0aW9uIGNvbW11bmljYXRlcyB3aXRoIHRoZSBwYXJlbnQgbWFuYWdlcixcbiAgICAgKiBpbiBvcmRlciB0byBrbm93IHdoZXRoZXIgdGhpcyBtYW5hZ2VyIGlzIGFsbG93ZWQgdG8gaWRlbnRpZnkgYSBuZXcgc2hhcmQuXG4gICAgICovXG4gICAgcmVxdWVzdElkZW50aWZ5OiBvcHRpb25zLnJlcXVlc3RJZGVudGlmeSxcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTaGFyZE1hbmFnZXIge1xuICAvLyAtLS0tLS0tLS0tXG4gIC8vIFBST1BFUlRJRVNcbiAgLy8gLS0tLS0tLS0tLVxuICAvKiogT3B0aW9ucyB3aGljaCBhcmUgdXNlZCB0byBjcmVhdGUgYSBuZXcgU2hhcmQuICovXG4gIGNyZWF0ZVNoYXJkT3B0aW9ucz86IE9taXQ8Q3JlYXRlU2hhcmQsIFwiaWRcIiB8IFwidG90YWxTaGFyZHNcIiB8IFwicmVxdWVzdElkZW50aWZ5XCIgfCBcImdhdGV3YXlDb25maWdcIj47XG4gIC8qKiBHYXRld2F5IGNvbmZpZ3VyYXRpb24gd2hpY2ggaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgU2hhcmQuICovXG4gIGdhdGV3YXlDb25maWc6IFBpY2tQYXJ0aWFsPFNoYXJkR2F0ZXdheUNvbmZpZywgXCJ0b2tlblwiPjtcbiAgLyoqIElkcyBvZiB0aGUgU2hhcmRzIHdoaWNoIHNob3VsZCBiZSBtYW5hZ2VkLiAqL1xuICBzaGFyZElkczogbnVtYmVyW107XG4gIC8qKiBUb3RhbCBhbW91bnQgb2YgU2hhcmQgdXNlZCBieSB0aGUgYm90LiAqL1xuICB0b3RhbFNoYXJkczogbnVtYmVyO1xuXG4gIC8vIC0tLS0tLS0tLS1cbiAgLy8gTUVUSE9EU1xuICAvLyAtLS0tLS0tLS0tXG5cbiAgLyoqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIGEgc2hhcmQgcmVjZWl2ZXMgYW55IG1lc3NhZ2UgZnJvbSBEaXNjb3JkLiAqL1xuICBoYW5kbGVNZXNzYWdlKHNoYXJkOiBTaGFyZCwgbWVzc2FnZTogRGlzY29yZEdhdGV3YXlQYXlsb2FkKTogdW5rbm93bjtcblxuICAvKiogVGhpcyBmdW5jdGlvbiBjb21tdW5pY2F0ZXMgd2l0aCB0aGUgcGFyZW50IG1hbmFnZXIsXG4gICAqIGluIG9yZGVyIHRvIGtub3cgd2hldGhlciB0aGlzIG1hbmFnZXIgaXMgYWxsb3dlZCB0byBpZGVudGlmeSBhIG5ldyBzaGFyZC4gI1xuICAgKi9cbiAgcmVxdWVzdElkZW50aWZ5KHNoYXJkSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD47XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyxVQUFVLFFBQVEsMEJBQTBCLENBQUM7QUFDdEQsU0FBc0IsV0FBVyxRQUFRLHlCQUF5QixDQUFDO0FBV25FOzs7R0FHRyxDQUNILE9BQU8sU0FBUyxrQkFBa0IsQ0FBQyxPQUEyQixFQUFFO0lBQzlELE9BQU87UUFDTCxhQUFhO1FBQ2IsYUFBYTtRQUNiLGFBQWE7UUFFYixvREFBb0QsQ0FDcEQsa0JBQWtCLEVBQUU7WUFDbEIsR0FBRyxPQUFPLENBQUMsa0JBQWtCO1lBQzdCLE1BQU0sRUFBRTtnQkFDTixHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO2dCQUNyQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWE7YUFDOUU7U0FDRjtRQUNELGlFQUFpRSxDQUNqRSxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWE7UUFDcEMsc0JBQXNCLENBQ3RCLE1BQU0sRUFBRSxJQUFJLFVBQVUsQ0FDcEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUs7WUFDaEMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUN4QixHQUFHLE9BQU8sQ0FBQyxrQkFBa0I7Z0JBQzdCLEVBQUUsRUFBRSxPQUFPO2dCQUNYLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztnQkFDaEMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhO2dCQUNwQyxlQUFlLEVBQUUsaUJBQWtCO29CQUNqQyxPQUFPLE1BQU0sT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0M7YUFDRixDQUFDLEFBQUM7WUFFSCxPQUFPO2dCQUFDLE9BQU87Z0JBQUUsS0FBSzthQUFDLENBQVU7U0FDbEMsQ0FBQyxDQUNIO1FBQ0QsOENBQThDLENBQzlDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztRQUVoQyxhQUFhO1FBQ2IsVUFBVTtRQUNWLGFBQWE7UUFFYjs7T0FFRyxDQUNILFFBQVEsRUFBRSxlQUFnQixPQUFlLEVBQUU7WUFDekMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEFBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixLQUFLLEdBQUcsV0FBVyxDQUFDO29CQUNsQixHQUFHLElBQUksQ0FBQyxrQkFBa0I7b0JBQzFCLEVBQUUsRUFBRSxPQUFPO29CQUNYLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDN0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO29CQUNqQyxlQUFlLEVBQUUsaUJBQWtCO3dCQUNqQyxPQUFPLE1BQU0sT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDL0M7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqQztZQUVELE9BQU8sTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDL0I7UUFFRDs7T0FFRyxDQUNILElBQUksRUFBRSxlQUFnQixPQUFlLEVBQUU7WUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEFBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPO1lBRW5CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLE9BQU8sTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDL0I7UUFFRDs7T0FFRyxDQUNILGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZTtLQUN6QyxDQUFDO0NBQ0gifQ==