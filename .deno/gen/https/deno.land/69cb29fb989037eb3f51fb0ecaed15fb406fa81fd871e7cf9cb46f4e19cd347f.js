export async function handlePresenceUpdate(bot, data) {
    bot.events.presenceUpdate(bot, bot.transformers.presence(bot, data.d));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUFJFU0VOQ0VfVVBEQVRFLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUFJFU0VOQ0VfVVBEQVRFLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxLQUFLLFVBQVUsb0JBQW9CLENBQUMsR0FBUSxFQUFFLElBQTJCO0lBQzlFLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQTBCLENBQUMsQ0FBQyxDQUFDO0FBQ2xHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkR2F0ZXdheVBheWxvYWQsIERpc2NvcmRQcmVzZW5jZVVwZGF0ZSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVQcmVzZW5jZVVwZGF0ZShib3Q6IEJvdCwgZGF0YTogRGlzY29yZEdhdGV3YXlQYXlsb2FkKSB7XG4gIGJvdC5ldmVudHMucHJlc2VuY2VVcGRhdGUoYm90LCBib3QudHJhbnNmb3JtZXJzLnByZXNlbmNlKGJvdCwgZGF0YS5kIGFzIERpc2NvcmRQcmVzZW5jZVVwZGF0ZSkpO1xufVxuIl19