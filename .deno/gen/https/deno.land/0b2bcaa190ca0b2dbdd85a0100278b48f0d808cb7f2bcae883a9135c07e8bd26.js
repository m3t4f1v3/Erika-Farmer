export async function handleThreadUpdate(bot, data) {
    const payload = data.d;
    bot.events.threadUpdate(bot, bot.transformers.channel(bot, {
        channel: payload
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi4vLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBEaXNjb3JkQ2hhbm5lbCwgRGlzY29yZEdhdGV3YXlQYXlsb2FkIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVRocmVhZFVwZGF0ZShib3Q6IEJvdCwgZGF0YTogRGlzY29yZEdhdGV3YXlQYXlsb2FkKSB7XG4gIGNvbnN0IHBheWxvYWQgPSBkYXRhLmQgYXMgRGlzY29yZENoYW5uZWw7XG5cbiAgYm90LmV2ZW50cy50aHJlYWRVcGRhdGUoYm90LCBib3QudHJhbnNmb3JtZXJzLmNoYW5uZWwoYm90LCB7IGNoYW5uZWw6IHBheWxvYWQgfSkpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sZUFBZSxrQkFBa0IsQ0FBQyxHQUFRLEVBQUUsSUFBMkIsRUFBRTtJQUM5RSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxBQUFrQixBQUFDO0lBRXpDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7UUFBRSxPQUFPLEVBQUUsT0FBTztLQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ25GIn0=