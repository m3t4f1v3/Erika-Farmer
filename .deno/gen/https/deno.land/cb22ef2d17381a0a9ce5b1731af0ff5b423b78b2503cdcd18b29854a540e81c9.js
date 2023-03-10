import { ToggleBitfield } from "./ToggleBitfield.ts";
export const EmojiToggle = {
    requireColons: 1 << 0,
    managed: 1 << 1,
    animated: 1 << 2,
    available: 1 << 3,
};
export class EmojiToggles extends ToggleBitfield {
    constructor(role) {
        super();
        if (role.require_colons)
            this.add(EmojiToggle.requireColons);
        if (role.managed)
            this.add(EmojiToggle.managed);
        if (role.animated)
            this.add(EmojiToggle.animated);
        if (role.available)
            this.add(EmojiToggle.available);
    }
    get requireColons() {
        return this.has("requireColons");
    }
    get managed() {
        return this.has("managed");
    }
    get animated() {
        return this.has("animated");
    }
    get available() {
        return this.has("available");
    }
    has(permissions) {
        if (!Array.isArray(permissions))
            return super.contains(EmojiToggle[permissions]);
        return super.contains(permissions.reduce((a, b) => (a |= EmojiToggle[b]), 0));
    }
    list() {
        const json = {};
        for (const [key, value] of Object.entries(EmojiToggle)) {
            json[key] = super.contains(value);
        }
        return json;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbW9qaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHO0lBRXpCLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztJQUVyQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFZixRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFaEIsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ2xCLENBQUM7QUFFRixNQUFNLE9BQU8sWUFBYSxTQUFRLGNBQWM7SUFDOUMsWUFBWSxJQUFrQjtRQUM1QixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksSUFBSSxDQUFDLGNBQWM7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUdELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFHRCxHQUFHLENBQUMsV0FBZ0Q7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWpGLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBR0QsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUE0QixFQUFFLENBQUM7UUFDekMsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLElBQXdDLENBQUM7SUFDbEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzY29yZEVtb2ppLCBEaXNjb3JkUm9sZSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBUb2dnbGVCaXRmaWVsZCB9IGZyb20gXCIuL1RvZ2dsZUJpdGZpZWxkLnRzXCI7XG5cbmV4cG9ydCBjb25zdCBFbW9qaVRvZ2dsZSA9IHtcbiAgLyoqIFdoZXRoZXIgdGhpcyBlbW9qaSBtdXN0IGJlIHdyYXBwZWQgaW4gY29sb25zICovXG4gIHJlcXVpcmVDb2xvbnM6IDEgPDwgMCxcbiAgLyoqIFdoZXRoZXIgdGhpcyBlbW9qaSBpcyBtYW5hZ2VkICovXG4gIG1hbmFnZWQ6IDEgPDwgMSxcbiAgLyoqIFdoZXRoZXIgdGhpcyBlbW9qaSBpcyBhbmltYXRlZCAqL1xuICBhbmltYXRlZDogMSA8PCAyLFxuICAvKiogV2hldGhlciB0aGlzIGVtb2ppIGNhbiBiZSB1c2VkLCBtYXkgYmUgZmFsc2UgZHVlIHRvIGxvc3Mgb2YgU2VydmVyIEJvb3N0cyAqL1xuICBhdmFpbGFibGU6IDEgPDwgMyxcbn07XG5cbmV4cG9ydCBjbGFzcyBFbW9qaVRvZ2dsZXMgZXh0ZW5kcyBUb2dnbGVCaXRmaWVsZCB7XG4gIGNvbnN0cnVjdG9yKHJvbGU6IERpc2NvcmRFbW9qaSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAocm9sZS5yZXF1aXJlX2NvbG9ucykgdGhpcy5hZGQoRW1vamlUb2dnbGUucmVxdWlyZUNvbG9ucyk7XG4gICAgaWYgKHJvbGUubWFuYWdlZCkgdGhpcy5hZGQoRW1vamlUb2dnbGUubWFuYWdlZCk7XG4gICAgaWYgKHJvbGUuYW5pbWF0ZWQpIHRoaXMuYWRkKEVtb2ppVG9nZ2xlLmFuaW1hdGVkKTtcbiAgICBpZiAocm9sZS5hdmFpbGFibGUpIHRoaXMuYWRkKEVtb2ppVG9nZ2xlLmF2YWlsYWJsZSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIGVtb2ppIG11c3QgYmUgd3JhcHBlZCBpbiBjb2xvbnMgKi9cbiAgZ2V0IHJlcXVpcmVDb2xvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwicmVxdWlyZUNvbG9uc1wiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgZW1vamkgaXMgbWFuYWdlZCAqL1xuICBnZXQgbWFuYWdlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJtYW5hZ2VkXCIpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBlbW9qaSBpcyBhbmltYXRlZCAqL1xuICBnZXQgYW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwiYW5pbWF0ZWRcIik7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIGVtb2ppIGNhbiBiZSB1c2VkLCBtYXkgYmUgZmFsc2UgZHVlIHRvIGxvc3Mgb2YgU2VydmVyIEJvb3N0cyAqL1xuICBnZXQgYXZhaWxhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcImF2YWlsYWJsZVwiKTtcbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhlIHBlcm1pc3Npb25zIGV4aXN0IGluIHRoaXMgKi9cbiAgaGFzKHBlcm1pc3Npb25zOiBFbW9qaVRvZ2dsZUtleXMgfCBFbW9qaVRvZ2dsZUtleXNbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwZXJtaXNzaW9ucykpIHJldHVybiBzdXBlci5jb250YWlucyhFbW9qaVRvZ2dsZVtwZXJtaXNzaW9uc10pO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNvbnRhaW5zKHBlcm1pc3Npb25zLnJlZHVjZSgoYSwgYikgPT4gKGEgfD0gRW1vamlUb2dnbGVbYl0pLCAwKSk7XG4gIH1cblxuICAvKiogTGlzdHMgYWxsIHRoZSB0b2dnbGVzIGZvciB0aGUgcm9sZSBhbmQgd2hldGhlciBvciBub3QgZWFjaCBpcyB0cnVlIG9yIGZhbHNlLiAqL1xuICBsaXN0KCkge1xuICAgIGNvbnN0IGpzb246IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoRW1vamlUb2dnbGUpKSB7XG4gICAgICBqc29uW2tleV0gPSBzdXBlci5jb250YWlucyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb24gYXMgUmVjb3JkPEVtb2ppVG9nZ2xlS2V5cywgYm9vbGVhbj47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRW1vamlUb2dnbGVLZXlzID0ga2V5b2YgdHlwZW9mIEVtb2ppVG9nZ2xlO1xuIl19