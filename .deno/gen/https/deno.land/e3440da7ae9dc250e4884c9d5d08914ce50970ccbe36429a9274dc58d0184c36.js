import { ToggleBitfield } from "./ToggleBitfield.ts";
export const RoleToggle = {
    hoist: 1 << 0,
    managed: 1 << 1,
    mentionable: 1 << 2,
    premiumSubscriber: 1 << 3,
};
export class RoleToggles extends ToggleBitfield {
    constructor(role) {
        super();
        if (role.hoist)
            this.add(RoleToggle.hoist);
        if (role.managed)
            this.add(RoleToggle.managed);
        if (role.mentionable)
            this.add(RoleToggle.mentionable);
        if (role.tags?.premium_subscriber === null)
            this.add(RoleToggle.premiumSubscriber);
    }
    get hoist() {
        return this.has("hoist");
    }
    get managed() {
        return this.has("managed");
    }
    get mentionable() {
        return this.has("mentionable");
    }
    get premiumSubscriber() {
        return this.has("premiumSubscriber");
    }
    has(permissions) {
        if (!Array.isArray(permissions))
            return super.contains(RoleToggle[permissions]);
        return super.contains(permissions.reduce((a, b) => (a |= RoleToggle[b]), 0));
    }
    list() {
        const json = {};
        for (const [key, value] of Object.entries(RoleToggle)) {
            json[key] = super.contains(value);
        }
        return json;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRztJQUV4QixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFYixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFZixXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFbkIsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDMUIsQ0FBQztBQUVGLE1BQU0sT0FBTyxXQUFZLFNBQVEsY0FBYztJQUM3QyxZQUFZLElBQWlCO1FBQzNCLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLGtCQUFrQixLQUFLLElBQUk7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFHRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUdELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBR0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR0QsR0FBRyxDQUFDLFdBQThDO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVoRixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUdELElBQUk7UUFDRixNQUFNLElBQUksR0FBNEIsRUFBRSxDQUFDO1FBQ3pDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUF1QyxDQUFDO0lBQ2pELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc2NvcmRSb2xlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Rpc2NvcmQudHNcIjtcbmltcG9ydCB7IFRvZ2dsZUJpdGZpZWxkIH0gZnJvbSBcIi4vVG9nZ2xlQml0ZmllbGQudHNcIjtcblxuZXhwb3J0IGNvbnN0IFJvbGVUb2dnbGUgPSB7XG4gIC8qKiBJZiB0aGlzIHJvbGUgaXMgc2hvd2VkIHNlcGFyYXRlbHkgaW4gdGhlIHVzZXIgbGlzdGluZyAqL1xuICBob2lzdDogMSA8PCAwLFxuICAvKiogV2hldGhlciB0aGlzIHJvbGUgaXMgbWFuYWdlZCBieSBhbiBpbnRlZ3JhdGlvbiAqL1xuICBtYW5hZ2VkOiAxIDw8IDEsXG4gIC8qKiBXaGV0aGVyIHRoaXMgcm9sZSBpcyBtZW50aW9uYWJsZSAqL1xuICBtZW50aW9uYWJsZTogMSA8PCAyLFxuICAvKiogV2hldGhlciB0aGlzIGlzIHRoZSBndWlsZHMgcHJlbWl1bSBzdWJzY3JpYmVyIHJvbGUgKi9cbiAgcHJlbWl1bVN1YnNjcmliZXI6IDEgPDwgMyxcbn07XG5cbmV4cG9ydCBjbGFzcyBSb2xlVG9nZ2xlcyBleHRlbmRzIFRvZ2dsZUJpdGZpZWxkIHtcbiAgY29uc3RydWN0b3Iocm9sZTogRGlzY29yZFJvbGUpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHJvbGUuaG9pc3QpIHRoaXMuYWRkKFJvbGVUb2dnbGUuaG9pc3QpO1xuICAgIGlmIChyb2xlLm1hbmFnZWQpIHRoaXMuYWRkKFJvbGVUb2dnbGUubWFuYWdlZCk7XG4gICAgaWYgKHJvbGUubWVudGlvbmFibGUpIHRoaXMuYWRkKFJvbGVUb2dnbGUubWVudGlvbmFibGUpO1xuICAgIGlmIChyb2xlLnRhZ3M/LnByZW1pdW1fc3Vic2NyaWJlciA9PT0gbnVsbCkgdGhpcy5hZGQoUm9sZVRvZ2dsZS5wcmVtaXVtU3Vic2NyaWJlcik7XG4gIH1cblxuICAvKiogSWYgdGhpcyByb2xlIGlzIHNob3dlZCBzZXBhcmF0ZWx5IGluIHRoZSB1c2VyIGxpc3RpbmcgKi9cbiAgZ2V0IGhvaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcImhvaXN0XCIpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyByb2xlIGlzIG1hbmFnZWQgYnkgYW4gaW50ZWdyYXRpb24gKi9cbiAgZ2V0IG1hbmFnZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwibWFuYWdlZFwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgcm9sZSBpcyBtZW50aW9uYWJsZSAqL1xuICBnZXQgbWVudGlvbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwibWVudGlvbmFibGVcIik7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIGlzIHRoZSBndWlsZHMgcHJlbWl1bSBzdWJzY3JpYmVyIHJvbGUgKi9cbiAgZ2V0IHByZW1pdW1TdWJzY3JpYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcInByZW1pdW1TdWJzY3JpYmVyXCIpO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGUgcGVybWlzc2lvbnMgZXhpc3QgaW4gdGhpcyAqL1xuICBoYXMocGVybWlzc2lvbnM6IFJvbGVUb2dnbGVLZXlzIHwgUm9sZVRvZ2dsZUtleXNbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwZXJtaXNzaW9ucykpIHJldHVybiBzdXBlci5jb250YWlucyhSb2xlVG9nZ2xlW3Blcm1pc3Npb25zXSk7XG5cbiAgICByZXR1cm4gc3VwZXIuY29udGFpbnMocGVybWlzc2lvbnMucmVkdWNlKChhLCBiKSA9PiAoYSB8PSBSb2xlVG9nZ2xlW2JdKSwgMCkpO1xuICB9XG5cbiAgLyoqIExpc3RzIGFsbCB0aGUgdG9nZ2xlcyBmb3IgdGhlIHJvbGUgYW5kIHdoZXRoZXIgb3Igbm90IGVhY2ggaXMgdHJ1ZSBvciBmYWxzZS4gKi9cbiAgbGlzdCgpIHtcbiAgICBjb25zdCBqc29uOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKFJvbGVUb2dnbGUpKSB7XG4gICAgICBqc29uW2tleV0gPSBzdXBlci5jb250YWlucyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb24gYXMgUmVjb3JkPFJvbGVUb2dnbGVLZXlzLCBib29sZWFuPjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBSb2xlVG9nZ2xlS2V5cyA9IGtleW9mIHR5cGVvZiBSb2xlVG9nZ2xlO1xuIl19