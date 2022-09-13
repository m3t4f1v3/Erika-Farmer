import { ToggleBitfield } from "./ToggleBitfield.ts";
export const EmojiToggle = {
    /** Whether this emoji must be wrapped in colons */ requireColons: 1 << 0,
    /** Whether this emoji is managed */ managed: 1 << 1,
    /** Whether this emoji is animated */ animated: 1 << 2,
    /** Whether this emoji can be used, may be false due to loss of Server Boosts */ available: 1 << 3
};
export class EmojiToggles extends ToggleBitfield {
    constructor(role){
        super();
        if (role.require_colons) this.add(EmojiToggle.requireColons);
        if (role.managed) this.add(EmojiToggle.managed);
        if (role.animated) this.add(EmojiToggle.animated);
        if (role.available) this.add(EmojiToggle.available);
    }
    /** Whether this emoji must be wrapped in colons */ get requireColons() {
        return this.has("requireColons");
    }
    /** Whether this emoji is managed */ get managed() {
        return this.has("managed");
    }
    /** Whether this emoji is animated */ get animated() {
        return this.has("animated");
    }
    /** Whether this emoji can be used, may be false due to loss of Server Boosts */ get available() {
        return this.has("available");
    }
    /** Checks whether or not the permissions exist in this */ has(permissions) {
        if (!Array.isArray(permissions)) return super.contains(EmojiToggle[permissions]);
        return super.contains(permissions.reduce((a, b)=>a |= EmojiToggle[b]
        , 0));
    }
    /** Lists all the toggles for the role and whether or not each is true or false. */ list() {
        const json = {};
        for (const [key, value] of Object.entries(EmojiToggle)){
            json[key] = super.contains(value);
        }
        return json;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNjb3JkRW1vamksIERpc2NvcmRSb2xlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IFRvZ2dsZUJpdGZpZWxkIH0gZnJvbSBcIi4vVG9nZ2xlQml0ZmllbGQudHNcIjtcblxuZXhwb3J0IGNvbnN0IEVtb2ppVG9nZ2xlID0ge1xuICAvKiogV2hldGhlciB0aGlzIGVtb2ppIG11c3QgYmUgd3JhcHBlZCBpbiBjb2xvbnMgKi9cbiAgcmVxdWlyZUNvbG9uczogMSA8PCAwLFxuICAvKiogV2hldGhlciB0aGlzIGVtb2ppIGlzIG1hbmFnZWQgKi9cbiAgbWFuYWdlZDogMSA8PCAxLFxuICAvKiogV2hldGhlciB0aGlzIGVtb2ppIGlzIGFuaW1hdGVkICovXG4gIGFuaW1hdGVkOiAxIDw8IDIsXG4gIC8qKiBXaGV0aGVyIHRoaXMgZW1vamkgY2FuIGJlIHVzZWQsIG1heSBiZSBmYWxzZSBkdWUgdG8gbG9zcyBvZiBTZXJ2ZXIgQm9vc3RzICovXG4gIGF2YWlsYWJsZTogMSA8PCAzLFxufTtcblxuZXhwb3J0IGNsYXNzIEVtb2ppVG9nZ2xlcyBleHRlbmRzIFRvZ2dsZUJpdGZpZWxkIHtcbiAgY29uc3RydWN0b3Iocm9sZTogRGlzY29yZEVtb2ppKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChyb2xlLnJlcXVpcmVfY29sb25zKSB0aGlzLmFkZChFbW9qaVRvZ2dsZS5yZXF1aXJlQ29sb25zKTtcbiAgICBpZiAocm9sZS5tYW5hZ2VkKSB0aGlzLmFkZChFbW9qaVRvZ2dsZS5tYW5hZ2VkKTtcbiAgICBpZiAocm9sZS5hbmltYXRlZCkgdGhpcy5hZGQoRW1vamlUb2dnbGUuYW5pbWF0ZWQpO1xuICAgIGlmIChyb2xlLmF2YWlsYWJsZSkgdGhpcy5hZGQoRW1vamlUb2dnbGUuYXZhaWxhYmxlKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgZW1vamkgbXVzdCBiZSB3cmFwcGVkIGluIGNvbG9ucyAqL1xuICBnZXQgcmVxdWlyZUNvbG9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJyZXF1aXJlQ29sb25zXCIpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBlbW9qaSBpcyBtYW5hZ2VkICovXG4gIGdldCBtYW5hZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcIm1hbmFnZWRcIik7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIGVtb2ppIGlzIGFuaW1hdGVkICovXG4gIGdldCBhbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJhbmltYXRlZFwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgZW1vamkgY2FuIGJlIHVzZWQsIG1heSBiZSBmYWxzZSBkdWUgdG8gbG9zcyBvZiBTZXJ2ZXIgQm9vc3RzICovXG4gIGdldCBhdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwiYXZhaWxhYmxlXCIpO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGUgcGVybWlzc2lvbnMgZXhpc3QgaW4gdGhpcyAqL1xuICBoYXMocGVybWlzc2lvbnM6IEVtb2ppVG9nZ2xlS2V5cyB8IEVtb2ppVG9nZ2xlS2V5c1tdKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBlcm1pc3Npb25zKSkgcmV0dXJuIHN1cGVyLmNvbnRhaW5zKEVtb2ppVG9nZ2xlW3Blcm1pc3Npb25zXSk7XG5cbiAgICByZXR1cm4gc3VwZXIuY29udGFpbnMocGVybWlzc2lvbnMucmVkdWNlKChhLCBiKSA9PiAoYSB8PSBFbW9qaVRvZ2dsZVtiXSksIDApKTtcbiAgfVxuXG4gIC8qKiBMaXN0cyBhbGwgdGhlIHRvZ2dsZXMgZm9yIHRoZSByb2xlIGFuZCB3aGV0aGVyIG9yIG5vdCBlYWNoIGlzIHRydWUgb3IgZmFsc2UuICovXG4gIGxpc3QoKSB7XG4gICAgY29uc3QganNvbjogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhFbW9qaVRvZ2dsZSkpIHtcbiAgICAgIGpzb25ba2V5XSA9IHN1cGVyLmNvbnRhaW5zKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganNvbiBhcyBSZWNvcmQ8RW1vamlUb2dnbGVLZXlzLCBib29sZWFuPjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFbW9qaVRvZ2dsZUtleXMgPSBrZXlvZiB0eXBlb2YgRW1vamlUb2dnbGU7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBUyxjQUFjLFFBQVEscUJBQXFCLENBQUM7QUFFckQsT0FBTyxNQUFNLFdBQVcsR0FBRztJQUN6QixtREFBbUQsQ0FDbkQsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ3JCLG9DQUFvQyxDQUNwQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDZixxQ0FBcUMsQ0FDckMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2hCLGdGQUFnRixDQUNoRixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDbEIsQ0FBQztBQUVGLE9BQU8sTUFBTSxZQUFZLFNBQVMsY0FBYztJQUM5QyxZQUFZLElBQWtCLENBQUU7UUFDOUIsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDckQ7SUFFRCxtREFBbUQsQ0FDbkQsSUFBSSxhQUFhLEdBQUc7UUFDbEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsb0NBQW9DLENBQ3BDLElBQUksT0FBTyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQscUNBQXFDLENBQ3JDLElBQUksUUFBUSxHQUFHO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzdCO0lBRUQsZ0ZBQWdGLENBQ2hGLElBQUksU0FBUyxHQUFHO1FBQ2QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzlCO0lBRUQsMERBQTBELENBQzFELEdBQUcsQ0FBQyxXQUFnRCxFQUFFO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVqRixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0U7SUFFRCxtRkFBbUYsQ0FDbkYsSUFBSSxHQUFHO1FBQ0wsTUFBTSxJQUFJLEdBQTRCLEVBQUUsQUFBQztRQUN6QyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBRTtZQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sSUFBSSxDQUFxQztLQUNqRDtDQUNGIn0=