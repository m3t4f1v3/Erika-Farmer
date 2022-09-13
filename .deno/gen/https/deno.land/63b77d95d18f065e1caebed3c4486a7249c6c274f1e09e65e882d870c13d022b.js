import { ToggleBitfield } from "./ToggleBitfield.ts";
export const VoiceStateToggle = {
    /** Whether this user is deafened by the server */ deaf: 1 << 0,
    /** Whether this user is muted by the server */ mute: 1 << 1,
    /** Whether this user is locally deafened */ selfDeaf: 1 << 2,
    /** Whether this user is locally muted */ selfMute: 1 << 3,
    /** Whether this user is streaming using "Go Live" */ selfStream: 1 << 4,
    /** Whether this user's camera is enabled */ selfVideo: 1 << 5,
    /** Whether this user is muted by the current user */ suppress: 1 << 6
};
export class VoiceStateToggles extends ToggleBitfield {
    constructor(voice){
        super();
        if (voice.deaf) this.add(VoiceStateToggle.deaf);
        if (voice.mute) this.add(VoiceStateToggle.mute);
        if (voice.self_deaf) this.add(VoiceStateToggle.selfDeaf);
        if (voice.self_mute) this.add(VoiceStateToggle.selfMute);
        if (voice.self_stream) this.add(VoiceStateToggle.selfStream);
        if (voice.self_video) this.add(VoiceStateToggle.selfVideo);
        if (voice.suppress) this.add(VoiceStateToggle.suppress);
    }
    /** Whether this user is deafened by the server */ get deaf() {
        return this.has("deaf");
    }
    /** Whether this user is muted by the server */ get mute() {
        return this.has("mute");
    }
    /** Whether this user is locally deafened */ get selfDeaf() {
        return this.has("selfDeaf");
    }
    /** Whether this user is locally muted */ get selfMute() {
        return this.has("selfMute");
    }
    /** Whether this user is streaming using "Go Live" */ get selfStream() {
        return this.has("selfStream");
    }
    /** Whether this user's camera is enabled */ get selfVideo() {
        return this.has("selfVideo");
    }
    /** Whether this user is muted by the current user */ get suppress() {
        return this.has("suppress");
    }
    /** Checks whether or not the permissions exist in this */ has(permissions) {
        if (!Array.isArray(permissions)) return super.contains(VoiceStateToggle[permissions]);
        return super.contains(permissions.reduce((a, b)=>a |= VoiceStateToggle[b]
        , 0));
    }
    /** Lists all the toggles for the role and whether or not each is true or false. */ list() {
        const json = {};
        for (const [key, value] of Object.entries(VoiceStateToggle)){
            json[key] = super.contains(value);
        }
        return json;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNjb3JkVXNlciwgRGlzY29yZFZvaWNlU3RhdGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZGlzY29yZC50c1wiO1xuaW1wb3J0IHsgVG9nZ2xlQml0ZmllbGQgfSBmcm9tIFwiLi9Ub2dnbGVCaXRmaWVsZC50c1wiO1xuXG5leHBvcnQgY29uc3QgVm9pY2VTdGF0ZVRvZ2dsZSA9IHtcbiAgLyoqIFdoZXRoZXIgdGhpcyB1c2VyIGlzIGRlYWZlbmVkIGJ5IHRoZSBzZXJ2ZXIgKi9cbiAgZGVhZjogMSA8PCAwLFxuICAvKiogV2hldGhlciB0aGlzIHVzZXIgaXMgbXV0ZWQgYnkgdGhlIHNlcnZlciAqL1xuICBtdXRlOiAxIDw8IDEsXG4gIC8qKiBXaGV0aGVyIHRoaXMgdXNlciBpcyBsb2NhbGx5IGRlYWZlbmVkICovXG4gIHNlbGZEZWFmOiAxIDw8IDIsXG4gIC8qKiBXaGV0aGVyIHRoaXMgdXNlciBpcyBsb2NhbGx5IG11dGVkICovXG4gIHNlbGZNdXRlOiAxIDw8IDMsXG4gIC8qKiBXaGV0aGVyIHRoaXMgdXNlciBpcyBzdHJlYW1pbmcgdXNpbmcgXCJHbyBMaXZlXCIgKi9cbiAgc2VsZlN0cmVhbTogMSA8PCA0LFxuICAvKiogV2hldGhlciB0aGlzIHVzZXIncyBjYW1lcmEgaXMgZW5hYmxlZCAqL1xuICBzZWxmVmlkZW86IDEgPDwgNSxcbiAgLyoqIFdoZXRoZXIgdGhpcyB1c2VyIGlzIG11dGVkIGJ5IHRoZSBjdXJyZW50IHVzZXIgKi9cbiAgc3VwcHJlc3M6IDEgPDwgNixcbn07XG5cbmV4cG9ydCBjbGFzcyBWb2ljZVN0YXRlVG9nZ2xlcyBleHRlbmRzIFRvZ2dsZUJpdGZpZWxkIHtcbiAgY29uc3RydWN0b3Iodm9pY2U6IERpc2NvcmRWb2ljZVN0YXRlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICh2b2ljZS5kZWFmKSB0aGlzLmFkZChWb2ljZVN0YXRlVG9nZ2xlLmRlYWYpO1xuICAgIGlmICh2b2ljZS5tdXRlKSB0aGlzLmFkZChWb2ljZVN0YXRlVG9nZ2xlLm11dGUpO1xuICAgIGlmICh2b2ljZS5zZWxmX2RlYWYpIHRoaXMuYWRkKFZvaWNlU3RhdGVUb2dnbGUuc2VsZkRlYWYpO1xuICAgIGlmICh2b2ljZS5zZWxmX211dGUpIHRoaXMuYWRkKFZvaWNlU3RhdGVUb2dnbGUuc2VsZk11dGUpO1xuICAgIGlmICh2b2ljZS5zZWxmX3N0cmVhbSkgdGhpcy5hZGQoVm9pY2VTdGF0ZVRvZ2dsZS5zZWxmU3RyZWFtKTtcbiAgICBpZiAodm9pY2Uuc2VsZl92aWRlbykgdGhpcy5hZGQoVm9pY2VTdGF0ZVRvZ2dsZS5zZWxmVmlkZW8pO1xuICAgIGlmICh2b2ljZS5zdXBwcmVzcykgdGhpcy5hZGQoVm9pY2VTdGF0ZVRvZ2dsZS5zdXBwcmVzcyk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIHVzZXIgaXMgZGVhZmVuZWQgYnkgdGhlIHNlcnZlciAqL1xuICBnZXQgZGVhZigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJkZWFmXCIpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyB1c2VyIGlzIG11dGVkIGJ5IHRoZSBzZXJ2ZXIgKi9cbiAgZ2V0IG11dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwibXV0ZVwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgdXNlciBpcyBsb2NhbGx5IGRlYWZlbmVkICovXG4gIGdldCBzZWxmRGVhZigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJzZWxmRGVhZlwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgdXNlciBpcyBsb2NhbGx5IG11dGVkICovXG4gIGdldCBzZWxmTXV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXMoXCJzZWxmTXV0ZVwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgdXNlciBpcyBzdHJlYW1pbmcgdXNpbmcgXCJHbyBMaXZlXCIgKi9cbiAgZ2V0IHNlbGZTdHJlYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwic2VsZlN0cmVhbVwiKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgdXNlcidzIGNhbWVyYSBpcyBlbmFibGVkICovXG4gIGdldCBzZWxmVmlkZW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKFwic2VsZlZpZGVvXCIpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyB1c2VyIGlzIG11dGVkIGJ5IHRoZSBjdXJyZW50IHVzZXIgKi9cbiAgZ2V0IHN1cHByZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmhhcyhcInN1cHByZXNzXCIpO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGUgcGVybWlzc2lvbnMgZXhpc3QgaW4gdGhpcyAqL1xuICBoYXMocGVybWlzc2lvbnM6IFZvaWNlU3RhdGVUb2dnbGVLZXlzIHwgVm9pY2VTdGF0ZVRvZ2dsZUtleXNbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwZXJtaXNzaW9ucykpIHJldHVybiBzdXBlci5jb250YWlucyhWb2ljZVN0YXRlVG9nZ2xlW3Blcm1pc3Npb25zXSk7XG5cbiAgICByZXR1cm4gc3VwZXIuY29udGFpbnMocGVybWlzc2lvbnMucmVkdWNlKChhLCBiKSA9PiAoYSB8PSBWb2ljZVN0YXRlVG9nZ2xlW2JdKSwgMCkpO1xuICB9XG5cbiAgLyoqIExpc3RzIGFsbCB0aGUgdG9nZ2xlcyBmb3IgdGhlIHJvbGUgYW5kIHdoZXRoZXIgb3Igbm90IGVhY2ggaXMgdHJ1ZSBvciBmYWxzZS4gKi9cbiAgbGlzdCgpIHtcbiAgICBjb25zdCBqc29uOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKFZvaWNlU3RhdGVUb2dnbGUpKSB7XG4gICAgICBqc29uW2tleV0gPSBzdXBlci5jb250YWlucyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb24gYXMgUmVjb3JkPFZvaWNlU3RhdGVUb2dnbGVLZXlzLCBib29sZWFuPjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBWb2ljZVN0YXRlVG9nZ2xlS2V5cyA9IGtleW9mIHR5cGVvZiBWb2ljZVN0YXRlVG9nZ2xlO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMsY0FBYyxRQUFRLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixrREFBa0QsQ0FDbEQsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ1osK0NBQStDLENBQy9DLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztJQUNaLDRDQUE0QyxDQUM1QyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDaEIseUNBQXlDLENBQ3pDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNoQixxREFBcUQsQ0FDckQsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2xCLDRDQUE0QyxDQUM1QyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDakIscURBQXFELENBQ3JELFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztDQUNqQixDQUFDO0FBRUYsT0FBTyxNQUFNLGlCQUFpQixTQUFTLGNBQWM7SUFDbkQsWUFBWSxLQUF3QixDQUFFO1FBQ3BDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0QsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDekQ7SUFFRCxrREFBa0QsQ0FDbEQsSUFBSSxJQUFJLEdBQUc7UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7SUFFRCwrQ0FBK0MsQ0FDL0MsSUFBSSxJQUFJLEdBQUc7UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7SUFFRCw0Q0FBNEMsQ0FDNUMsSUFBSSxRQUFRLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0I7SUFFRCx5Q0FBeUMsQ0FDekMsSUFBSSxRQUFRLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0I7SUFFRCxxREFBcUQsQ0FDckQsSUFBSSxVQUFVLEdBQUc7UUFDZixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDL0I7SUFFRCw0Q0FBNEMsQ0FDNUMsSUFBSSxTQUFTLEdBQUc7UUFDZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDOUI7SUFFRCxxREFBcUQsQ0FDckQsSUFBSSxRQUFRLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0I7SUFFRCwwREFBMEQsQ0FDMUQsR0FBRyxDQUFDLFdBQTBELEVBQUU7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFdEYsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFNLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEY7SUFFRCxtRkFBbUYsQ0FDbkYsSUFBSSxHQUFHO1FBQ0wsTUFBTSxJQUFJLEdBQTRCLEVBQUUsQUFBQztRQUN6QyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFFO1lBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQTBDO0tBQ3REO0NBQ0YifQ==