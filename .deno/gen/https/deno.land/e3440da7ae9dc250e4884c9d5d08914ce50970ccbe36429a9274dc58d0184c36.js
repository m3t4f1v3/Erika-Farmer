import { ToggleBitfield } from "./ToggleBitfield.ts";
export const RoleToggle = {
    /** If this role is showed separately in the user listing */ hoist: 1 << 0,
    /** Whether this role is managed by an integration */ managed: 1 << 1,
    /** Whether this role is mentionable */ mentionable: 1 << 2,
    /** Whether this is the guilds premium subscriber role */ premiumSubscriber: 1 << 3
};
export class RoleToggles extends ToggleBitfield {
    constructor(role){
        super();
        if (role.hoist) this.add(RoleToggle.hoist);
        if (role.managed) this.add(RoleToggle.managed);
        if (role.mentionable) this.add(RoleToggle.mentionable);
        if (role.tags?.premium_subscriber === null) this.add(RoleToggle.premiumSubscriber);
    }
    /** If this role is showed separately in the user listing */ get hoist() {
        return this.has("hoist");
    }
    /** Whether this role is managed by an integration */ get managed() {
        return this.has("managed");
    }
    /** Whether this role is mentionable */ get mentionable() {
        return this.has("mentionable");
    }
    /** Whether this is the guilds premium subscriber role */ get premiumSubscriber() {
        return this.has("premiumSubscriber");
    }
    /** Checks whether or not the permissions exist in this */ has(permissions) {
        if (!Array.isArray(permissions)) return super.contains(RoleToggle[permissions]);
        return super.contains(permissions.reduce((a, b)=>a |= RoleToggle[b]
        , 0));
    }
    /** Lists all the toggles for the role and whether or not each is true or false. */ list() {
        const json = {};
        for (const [key, value] of Object.entries(RoleToggle)){
            json[key] = super.contains(value);
        }
        return json;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNjb3JkUm9sZSB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBUb2dnbGVCaXRmaWVsZCB9IGZyb20gXCIuL1RvZ2dsZUJpdGZpZWxkLnRzXCI7XG5cbmV4cG9ydCBjb25zdCBSb2xlVG9nZ2xlID0ge1xuICAvKiogSWYgdGhpcyByb2xlIGlzIHNob3dlZCBzZXBhcmF0ZWx5IGluIHRoZSB1c2VyIGxpc3RpbmcgKi9cbiAgaG9pc3Q6IDEgPDwgMCxcbiAgLyoqIFdoZXRoZXIgdGhpcyByb2xlIGlzIG1hbmFnZWQgYnkgYW4gaW50ZWdyYXRpb24gKi9cbiAgbWFuYWdlZDogMSA8PCAxLFxuICAvKiogV2hldGhlciB0aGlzIHJvbGUgaXMgbWVudGlvbmFibGUgKi9cbiAgbWVudGlvbmFibGU6IDEgPDwgMixcbiAgLyoqIFdoZXRoZXIgdGhpcyBpcyB0aGUgZ3VpbGRzIHByZW1pdW0gc3Vic2NyaWJlciByb2xlICovXG4gIHByZW1pdW1TdWJzY3JpYmVyOiAxIDw8IDMsXG59O1xuXG5leHBvcnQgY2xhc3MgUm9sZVRvZ2dsZXMgZXh0ZW5kcyBUb2dnbGVCaXRmaWVsZCB7XG4gIGNvbnN0cnVjdG9yKHJvbGU6IERpc2NvcmRSb2xlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChyb2xlLmhvaXN0KSB0aGlzLmFkZChSb2xlVG9nZ2xlLmhvaXN0KTtcbiAgICBpZiAocm9sZS5tYW5hZ2VkKSB0aGlzLmFkZChSb2xlVG9nZ2xlLm1hbmFnZWQpO1xuICAgIGlmIChyb2xlLm1lbnRpb25hYmxlKSB0aGlzLmFkZChSb2xlVG9nZ2xlLm1lbnRpb25hYmxlKTtcbiAgICBpZiAocm9sZS50YWdzPy5wcmVtaXVtX3N1YnNjcmliZXIgPT09IG51bGwpIHRoaXMuYWRkKFJvbGVUb2dnbGUucHJlbWl1bVN1YnNjcmliZXIpO1xuICB9XG5cbiAgLyoqIElmIHRoaXMgcm9sZSBpcyBzaG93ZWQgc2VwYXJhdGVseSBpbiB0aGUgdXNlciBsaXN0aW5nICovXG4gIGdldCBob2lzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJob2lzdFwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgcm9sZSBpcyBtYW5hZ2VkIGJ5IGFuIGludGVncmF0aW9uICovXG4gIGdldCBtYW5hZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcIm1hbmFnZWRcIik7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIHJvbGUgaXMgbWVudGlvbmFibGUgKi9cbiAgZ2V0IG1lbnRpb25hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcIm1lbnRpb25hYmxlXCIpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBpcyB0aGUgZ3VpbGRzIHByZW1pdW0gc3Vic2NyaWJlciByb2xlICovXG4gIGdldCBwcmVtaXVtU3Vic2NyaWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJwcmVtaXVtU3Vic2NyaWJlclwiKTtcbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhlIHBlcm1pc3Npb25zIGV4aXN0IGluIHRoaXMgKi9cbiAgaGFzKHBlcm1pc3Npb25zOiBSb2xlVG9nZ2xlS2V5cyB8IFJvbGVUb2dnbGVLZXlzW10pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGVybWlzc2lvbnMpKSByZXR1cm4gc3VwZXIuY29udGFpbnMoUm9sZVRvZ2dsZVtwZXJtaXNzaW9uc10pO1xuXG4gICAgcmV0dXJuIHN1cGVyLmNvbnRhaW5zKHBlcm1pc3Npb25zLnJlZHVjZSgoYSwgYikgPT4gKGEgfD0gUm9sZVRvZ2dsZVtiXSksIDApKTtcbiAgfVxuXG4gIC8qKiBMaXN0cyBhbGwgdGhlIHRvZ2dsZXMgZm9yIHRoZSByb2xlIGFuZCB3aGV0aGVyIG9yIG5vdCBlYWNoIGlzIHRydWUgb3IgZmFsc2UuICovXG4gIGxpc3QoKSB7XG4gICAgY29uc3QganNvbjogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhSb2xlVG9nZ2xlKSkge1xuICAgICAganNvbltrZXldID0gc3VwZXIuY29udGFpbnModmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBqc29uIGFzIFJlY29yZDxSb2xlVG9nZ2xlS2V5cywgYm9vbGVhbj47XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUm9sZVRvZ2dsZUtleXMgPSBrZXlvZiB0eXBlb2YgUm9sZVRvZ2dsZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxTQUFTLGNBQWMsUUFBUSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLE1BQU0sVUFBVSxHQUFHO0lBQ3hCLDREQUE0RCxDQUM1RCxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDYixxREFBcUQsQ0FDckQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2YsdUNBQXVDLENBQ3ZDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNuQix5REFBeUQsQ0FDekQsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDMUIsQ0FBQztBQUVGLE9BQU8sTUFBTSxXQUFXLFNBQVMsY0FBYztJQUM3QyxZQUFZLElBQWlCLENBQUU7UUFDN0IsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEtBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDcEY7SUFFRCw0REFBNEQsQ0FDNUQsSUFBSSxLQUFLLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7SUFFRCxxREFBcUQsQ0FDckQsSUFBSSxPQUFPLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDNUI7SUFFRCx1Q0FBdUMsQ0FDdkMsSUFBSSxXQUFXLEdBQUc7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ2hDO0lBRUQseURBQXlELENBQ3pELElBQUksaUJBQWlCLEdBQUc7UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDdEM7SUFFRCwwREFBMEQsQ0FDMUQsR0FBRyxDQUFDLFdBQThDLEVBQUU7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWhGLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBTSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztRQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5RTtJQUVELG1GQUFtRixDQUNuRixJQUFJLEdBQUc7UUFDTCxNQUFNLElBQUksR0FBNEIsRUFBRSxBQUFDO1FBQ3pDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFFO1lBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQW9DO0tBQ2hEO0NBQ0YifQ==