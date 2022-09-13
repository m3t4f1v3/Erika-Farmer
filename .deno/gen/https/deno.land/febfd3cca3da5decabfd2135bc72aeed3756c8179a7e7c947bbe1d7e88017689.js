/** Returns the widget image URL for the guild. */ export async function getWidgetImageURL(bot, guildId, options) {
    return bot.constants.routes.GUILD_WIDGET_IMAGE(guildId, options?.style);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcblxuLyoqIFJldHVybnMgdGhlIHdpZGdldCBpbWFnZSBVUkwgZm9yIHRoZSBndWlsZC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXaWRnZXRJbWFnZVVSTChib3Q6IEJvdCwgZ3VpbGRJZDogYmlnaW50LCBvcHRpb25zPzogR2V0R3VpbGRXaWRnZXRJbWFnZVF1ZXJ5KSB7XG4gIHJldHVybiBib3QuY29uc3RhbnRzLnJvdXRlcy5HVUlMRF9XSURHRVRfSU1BR0UoZ3VpbGRJZCwgb3B0aW9ucz8uc3R5bGUpO1xufVxuXG4vKiogaHR0cHM6Ly9kaXNjb3JkLmNvbS9kZXZlbG9wZXJzL2RvY3MvcmVzb3VyY2VzL2d1aWxkI2dldC1ndWlsZC13aWRnZXQtaW1hZ2UtcXVlcnktc3RyaW5nLXBhcmFtcyAqL1xuZXhwb3J0IGludGVyZmFjZSBHZXRHdWlsZFdpZGdldEltYWdlUXVlcnkge1xuICAvKipcbiAgICogU3R5bGUgb2YgdGhlIHdpZGdldCByZXR1cm5lZCwgZGVmYXVsdDogc2hpZWxkXG4gICAqXG4gICAqIFNoaWVsZDogV2lkZ2V0IHdpdGggRGlzY29yZCBpY29uIGFuZCBndWlsZCBtZW1iZXJzIG9ubGluZSBjb3VudC5cbiAgICogQmFubmVyMTogTGFyZ2UgaW1hZ2Ugd2l0aCBndWlsZCBpY29uLCBuYW1lIGFuZCBvbmxpbmUgY291bnQuIFwiUE9XRVJFRCBCWSBESVNDT1JEXCIgYXMgdGhlIGZvb3RlciBvZiB0aGUgd2lkZ2V0XG4gICAqIEJhbm5lcjI6IFNtYWxsZXIgd2lkZ2V0IHN0eWxlIHdpdGggZ3VpbGQgaWNvbiwgbmFtZSBhbmQgb25saW5lIGNvdW50LiBTcGxpdCBvbiB0aGUgcmlnaHQgd2l0aCBEaXNjb3JkIGxvZ29cbiAgICogQmFubmVyMzogTGFyZ2UgaW1hZ2Ugd2l0aCBndWlsZCBpY29uLCBuYW1lIGFuZCBvbmxpbmUgY291bnQuIEluIHRoZSBmb290ZXIsIERpc2NvcmQgbG9nbyBvbiB0aGUgbGVmdCBhbmQgXCJDaGF0IE5vd1wiIG9uIHRoZSByaWdodFxuICAgKiBCYW5uZXI0OiBMYXJnZSBEaXNjb3JkIGxvZ28gYXQgdGhlIHRvcCBvZiB0aGUgd2lkZ2V0LiBHdWlsZCBpY29uLCBuYW1lIGFuZCBvbmxpbmUgY291bnQgaW4gdGhlIG1pZGRsZSBwb3J0aW9uIG9mIHRoZSB3aWRnZXQgYW5kIGEgXCJKT0lOIE1ZIFNFUlZFUlwiIGJ1dHRvbiBhdCB0aGUgYm90dG9tXG4gICAqL1xuICBzdHlsZT86XG4gICAgfCBcInNoaWVsZFwiXG4gICAgfCBcImJhbm5lcjFcIlxuICAgIHwgXCJiYW5uZXIyXCJcbiAgICB8IFwiYmFubmVyM1wiXG4gICAgfCBcImJhbm5lcjRcIjtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxrREFBa0QsQ0FDbEQsT0FBTyxlQUFlLGlCQUFpQixDQUFDLEdBQVEsRUFBRSxPQUFlLEVBQUUsT0FBa0MsRUFBRTtJQUNyRyxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDekUifQ==