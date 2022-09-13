export function iconHashToBigInt(hash) {
    // The icon is animated so it needs special handling
    if (hash.startsWith("a_")) {
        // Change the `a_` to just be `a`
        hash = `a${hash.substring(2)}`;
    } else {
        // The icon is not animated but it could be that it starts with a 0 so we just put a `b` in front so nothing breaks
        hash = `b${hash}`;
    }
    return BigInt(`0x${hash}`);
}
export function iconBigintToHash(icon) {
    // Convert the bigint back to a hash
    const hash = icon.toString(16);
    // Hashes starting with a are animated and with b are not so need to handle that
    return hash.startsWith("a") ? `a_${hash.substring(1)}` : hash.substring(1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaWNvbkhhc2hUb0JpZ0ludChoYXNoOiBzdHJpbmcpIHtcbiAgLy8gVGhlIGljb24gaXMgYW5pbWF0ZWQgc28gaXQgbmVlZHMgc3BlY2lhbCBoYW5kbGluZ1xuICBpZiAoaGFzaC5zdGFydHNXaXRoKFwiYV9cIikpIHtcbiAgICAvLyBDaGFuZ2UgdGhlIGBhX2AgdG8ganVzdCBiZSBgYWBcbiAgICBoYXNoID0gYGEke2hhc2guc3Vic3RyaW5nKDIpfWA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGljb24gaXMgbm90IGFuaW1hdGVkIGJ1dCBpdCBjb3VsZCBiZSB0aGF0IGl0IHN0YXJ0cyB3aXRoIGEgMCBzbyB3ZSBqdXN0IHB1dCBhIGBiYCBpbiBmcm9udCBzbyBub3RoaW5nIGJyZWFrc1xuICAgIGhhc2ggPSBgYiR7aGFzaH1gO1xuICB9XG5cbiAgcmV0dXJuIEJpZ0ludChgMHgke2hhc2h9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpY29uQmlnaW50VG9IYXNoKGljb246IGJpZ2ludCkge1xuICAvLyBDb252ZXJ0IHRoZSBiaWdpbnQgYmFjayB0byBhIGhhc2hcbiAgY29uc3QgaGFzaCA9IGljb24udG9TdHJpbmcoMTYpO1xuICAvLyBIYXNoZXMgc3RhcnRpbmcgd2l0aCBhIGFyZSBhbmltYXRlZCBhbmQgd2l0aCBiIGFyZSBub3Qgc28gbmVlZCB0byBoYW5kbGUgdGhhdFxuICByZXR1cm4gaGFzaC5zdGFydHNXaXRoKFwiYVwiKSA/IGBhXyR7aGFzaC5zdWJzdHJpbmcoMSl9YCA6IGhhc2guc3Vic3RyaW5nKDEpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLFNBQVMsZ0JBQWdCLENBQUMsSUFBWSxFQUFFO0lBQzdDLG9EQUFvRDtJQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDekIsaUNBQWlDO1FBQ2pDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQyxNQUFNO1FBQ0wsbUhBQW1IO1FBQ25ILElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ25CO0lBRUQsT0FBTyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVCO0FBRUQsT0FBTyxTQUFTLGdCQUFnQixDQUFDLElBQVksRUFBRTtJQUM3QyxvQ0FBb0M7SUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQUFBQztJQUMvQixnRkFBZ0Y7SUFDaEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUUifQ==