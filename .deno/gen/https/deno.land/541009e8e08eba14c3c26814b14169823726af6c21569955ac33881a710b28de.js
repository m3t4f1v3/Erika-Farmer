/** Allows users to hook in and change to communicate to different workers across different servers or anything they like. For example using redis pubsub to talk to other servers. */ export async function tellWorkerToIdentify(gateway, _workerId, shardId, _bucketId) {
    return await gateway.manager.identify(shardId);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRld2F5SW50ZW50cyB9IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcbmltcG9ydCB7IGNyZWF0ZVNoYXJkIH0gZnJvbSBcIi4uL3NoYXJkL2NyZWF0ZVNoYXJkLnRzXCI7XG5pbXBvcnQgeyBHYXRld2F5TWFuYWdlciB9IGZyb20gXCIuL2dhdGV3YXlNYW5hZ2VyLnRzXCI7XG5cbi8qKiBBbGxvd3MgdXNlcnMgdG8gaG9vayBpbiBhbmQgY2hhbmdlIHRvIGNvbW11bmljYXRlIHRvIGRpZmZlcmVudCB3b3JrZXJzIGFjcm9zcyBkaWZmZXJlbnQgc2VydmVycyBvciBhbnl0aGluZyB0aGV5IGxpa2UuIEZvciBleGFtcGxlIHVzaW5nIHJlZGlzIHB1YnN1YiB0byB0YWxrIHRvIG90aGVyIHNlcnZlcnMuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGVsbFdvcmtlclRvSWRlbnRpZnkoXG4gIGdhdGV3YXk6IEdhdGV3YXlNYW5hZ2VyLFxuICBfd29ya2VySWQ6IG51bWJlcixcbiAgc2hhcmRJZDogbnVtYmVyLFxuICBfYnVja2V0SWQ6IG51bWJlcixcbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gYXdhaXQgZ2F0ZXdheS5tYW5hZ2VyLmlkZW50aWZ5KHNoYXJkSWQpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLHNMQUFzTCxDQUN0TCxPQUFPLGVBQWUsb0JBQW9CLENBQ3hDLE9BQXVCLEVBQ3ZCLFNBQWlCLEVBQ2pCLE9BQWUsRUFDZixTQUFpQixFQUNGO0lBQ2YsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ2hEIn0=