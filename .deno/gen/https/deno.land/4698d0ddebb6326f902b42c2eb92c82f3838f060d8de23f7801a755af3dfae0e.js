export async function pinMessage(bot, channelId, messageId) {
    await bot.rest.runMethod(bot.rest, "PUT", bot.constants.routes.CHANNEL_PIN(channelId, messageId));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpbk1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxDQUFDLEtBQUssVUFBVSxVQUFVLENBQUMsR0FBUSxFQUFFLFNBQWlCLEVBQUUsU0FBaUI7SUFDN0UsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDL0csQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm90IH0gZnJvbSBcIi4uLy4uL2JvdC50c1wiO1xuXG4vKiogUGluIGEgbWVzc2FnZSBpbiBhIGNoYW5uZWwuIFJlcXVpcmVzIE1BTkFHRV9NRVNTQUdFUy4gTWF4IHBpbnMgYWxsb3dlZCBpbiBhIGNoYW5uZWwgPSA1MC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaW5NZXNzYWdlKGJvdDogQm90LCBjaGFubmVsSWQ6IGJpZ2ludCwgbWVzc2FnZUlkOiBiaWdpbnQpIHtcbiAgYXdhaXQgYm90LnJlc3QucnVuTWV0aG9kPHVuZGVmaW5lZD4oYm90LnJlc3QsIFwiUFVUXCIsIGJvdC5jb25zdGFudHMucm91dGVzLkNIQU5ORUxfUElOKGNoYW5uZWxJZCwgbWVzc2FnZUlkKSk7XG59XG4iXX0=