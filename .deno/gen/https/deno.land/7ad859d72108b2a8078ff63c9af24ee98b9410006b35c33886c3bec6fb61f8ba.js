import { ToggleBitfield } from "./ToggleBitfield.ts";
export const UserToggle = {
    /** Whether the user belongs to an OAuth2 application */ bot: 1 << 0,
    /** Whether the user is an Official Discord System user (part of the urgent message system) */ system: 1 << 1,
    /** Whether the user has two factor enabled on their account */ mfaEnabled: 1 << 2,
    /** Whether the email on this account has been verified */ verified: 1 << 3
};
export class UserToggles extends ToggleBitfield {
    constructor(user){
        super();
        if (user.bot) this.add(UserToggle.bot);
        if (user.system) this.add(UserToggle.system);
        if (user.mfa_enabled) this.add(UserToggle.mfaEnabled);
        if (user.verified) this.add(UserToggle.verified);
    }
    /** Whether the user belongs to an OAuth2 application */ get bot() {
        return this.has("bot");
    }
    /** Whether the user is an Official Discord System user (part of the urgent message system) */ get system() {
        return this.has("system");
    }
    /** Whether the user has two factor enabled on their account */ get mfaEnabled() {
        return this.has("mfaEnabled");
    }
    /** Whether the email on this account has been verified */ get verified() {
        return this.has("verified");
    }
    /** Checks whether or not the permissions exist in this */ has(permissions) {
        if (!Array.isArray(permissions)) return super.contains(UserToggle[permissions]);
        return super.contains(permissions.reduce((a, b)=>a |= UserToggle[b]
        , 0));
    }
    /** Lists all the toggles for the role and whether or not each is true or false. */ list() {
        const json = {};
        for (const [key, value] of Object.entries(UserToggle)){
            json[key] = super.contains(value);
        }
        return json;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNjb3JkVXNlciB9IGZyb20gXCIuLi8uLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBUb2dnbGVCaXRmaWVsZCB9IGZyb20gXCIuL1RvZ2dsZUJpdGZpZWxkLnRzXCI7XG5cbmV4cG9ydCBjb25zdCBVc2VyVG9nZ2xlID0ge1xuICAvKiogV2hldGhlciB0aGUgdXNlciBiZWxvbmdzIHRvIGFuIE9BdXRoMiBhcHBsaWNhdGlvbiAqL1xuICBib3Q6IDEgPDwgMCxcbiAgLyoqIFdoZXRoZXIgdGhlIHVzZXIgaXMgYW4gT2ZmaWNpYWwgRGlzY29yZCBTeXN0ZW0gdXNlciAocGFydCBvZiB0aGUgdXJnZW50IG1lc3NhZ2Ugc3lzdGVtKSAqL1xuICBzeXN0ZW06IDEgPDwgMSxcbiAgLyoqIFdoZXRoZXIgdGhlIHVzZXIgaGFzIHR3byBmYWN0b3IgZW5hYmxlZCBvbiB0aGVpciBhY2NvdW50ICovXG4gIG1mYUVuYWJsZWQ6IDEgPDwgMixcbiAgLyoqIFdoZXRoZXIgdGhlIGVtYWlsIG9uIHRoaXMgYWNjb3VudCBoYXMgYmVlbiB2ZXJpZmllZCAqL1xuICB2ZXJpZmllZDogMSA8PCAzLFxufTtcblxuZXhwb3J0IGNsYXNzIFVzZXJUb2dnbGVzIGV4dGVuZHMgVG9nZ2xlQml0ZmllbGQge1xuICBjb25zdHJ1Y3Rvcih1c2VyOiBEaXNjb3JkVXNlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAodXNlci5ib3QpIHRoaXMuYWRkKFVzZXJUb2dnbGUuYm90KTtcbiAgICBpZiAodXNlci5zeXN0ZW0pIHRoaXMuYWRkKFVzZXJUb2dnbGUuc3lzdGVtKTtcbiAgICBpZiAodXNlci5tZmFfZW5hYmxlZCkgdGhpcy5hZGQoVXNlclRvZ2dsZS5tZmFFbmFibGVkKTtcbiAgICBpZiAodXNlci52ZXJpZmllZCkgdGhpcy5hZGQoVXNlclRvZ2dsZS52ZXJpZmllZCk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgdXNlciBiZWxvbmdzIHRvIGFuIE9BdXRoMiBhcHBsaWNhdGlvbiAqL1xuICBnZXQgYm90KCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcImJvdFwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSB1c2VyIGlzIGFuIE9mZmljaWFsIERpc2NvcmQgU3lzdGVtIHVzZXIgKHBhcnQgb2YgdGhlIHVyZ2VudCBtZXNzYWdlIHN5c3RlbSkgKi9cbiAgZ2V0IHN5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJzeXN0ZW1cIik7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgdXNlciBoYXMgdHdvIGZhY3RvciBlbmFibGVkIG9uIHRoZWlyIGFjY291bnQgKi9cbiAgZ2V0IG1mYUVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwibWZhRW5hYmxlZFwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBlbWFpbCBvbiB0aGlzIGFjY291bnQgaGFzIGJlZW4gdmVyaWZpZWQgKi9cbiAgZ2V0IHZlcmlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcInZlcmlmaWVkXCIpO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGUgcGVybWlzc2lvbnMgZXhpc3QgaW4gdGhpcyAqL1xuICBoYXMocGVybWlzc2lvbnM6IFVzZXJUb2dnbGVLZXlzIHwgVXNlclRvZ2dsZUtleXNbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwZXJtaXNzaW9ucykpIHJldHVybiBzdXBlci5jb250YWlucyhVc2VyVG9nZ2xlW3Blcm1pc3Npb25zXSk7XG5cbiAgICByZXR1cm4gc3VwZXIuY29udGFpbnMocGVybWlzc2lvbnMucmVkdWNlKChhLCBiKSA9PiAoYSB8PSBVc2VyVG9nZ2xlW2JdKSwgMCkpO1xuICB9XG5cbiAgLyoqIExpc3RzIGFsbCB0aGUgdG9nZ2xlcyBmb3IgdGhlIHJvbGUgYW5kIHdoZXRoZXIgb3Igbm90IGVhY2ggaXMgdHJ1ZSBvciBmYWxzZS4gKi9cbiAgbGlzdCgpIHtcbiAgICBjb25zdCBqc29uOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKFVzZXJUb2dnbGUpKSB7XG4gICAgICBqc29uW2tleV0gPSBzdXBlci5jb250YWlucyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb24gYXMgUmVjb3JkPFVzZXJUb2dnbGVLZXlzLCBib29sZWFuPjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBVc2VyVG9nZ2xlS2V5cyA9IGtleW9mIHR5cGVvZiBVc2VyVG9nZ2xlO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMsY0FBYyxRQUFRLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sTUFBTSxVQUFVLEdBQUc7SUFDeEIsd0RBQXdELENBQ3hELEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNYLDhGQUE4RixDQUM5RixNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDZCwrREFBK0QsQ0FDL0QsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2xCLDBEQUEwRCxDQUMxRCxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDakIsQ0FBQztBQUVGLE9BQU8sTUFBTSxXQUFXLFNBQVMsY0FBYztJQUM3QyxZQUFZLElBQWlCLENBQUU7UUFDN0IsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbEQ7SUFFRCx3REFBd0QsQ0FDeEQsSUFBSSxHQUFHLEdBQUc7UUFDUixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7SUFFRCw4RkFBOEYsQ0FDOUYsSUFBSSxNQUFNLEdBQUc7UUFDWCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDM0I7SUFFRCwrREFBK0QsQ0FDL0QsSUFBSSxVQUFVLEdBQUc7UUFDZixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDL0I7SUFFRCwwREFBMEQsQ0FDMUQsSUFBSSxRQUFRLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0I7SUFFRCwwREFBMEQsQ0FDMUQsR0FBRyxDQUFDLFdBQThDLEVBQUU7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWhGLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBTSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztRQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5RTtJQUVELG1GQUFtRixDQUNuRixJQUFJLEdBQUc7UUFDTCxNQUFNLElBQUksR0FBNEIsRUFBRSxBQUFDO1FBQ3pDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFFO1lBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQW9DO0tBQ2hEO0NBQ0YifQ==