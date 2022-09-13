/** Removes the Bot before the token. */ export function removeTokenPrefix(token, type = "REST") {
    // If no token is provided, throw an error
    if (!token) throw new Error(`The ${type} was not given a token. Please provide a token and try again.`);
    // If the token does not have a prefix just return token
    if (!token.startsWith("Bot ")) return token;
    // Remove the prefix and return only the token.
    return token.substring(token.indexOf(" ") + 1);
}
/** Get the bot id from the bot token. WARNING: Discord staff has mentioned this may not be stable forever. Use at your own risk. However, note for over 5 years this has never broken. */ export function getBotIdFromToken(token) {
    return BigInt(atob(token.split(".")[0]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogUmVtb3ZlcyB0aGUgQm90IGJlZm9yZSB0aGUgdG9rZW4uICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW5QcmVmaXgodG9rZW4/OiBzdHJpbmcsIHR5cGU6IFwiR0FURVdBWVwiIHwgXCJSRVNUXCIgPSBcIlJFU1RcIik6IHN0cmluZyB7XG4gIC8vIElmIG5vIHRva2VuIGlzIHByb3ZpZGVkLCB0aHJvdyBhbiBlcnJvclxuICBpZiAoIXRva2VuKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSAke3R5cGV9IHdhcyBub3QgZ2l2ZW4gYSB0b2tlbi4gUGxlYXNlIHByb3ZpZGUgYSB0b2tlbiBhbmQgdHJ5IGFnYWluLmApO1xuICAvLyBJZiB0aGUgdG9rZW4gZG9lcyBub3QgaGF2ZSBhIHByZWZpeCBqdXN0IHJldHVybiB0b2tlblxuICBpZiAoIXRva2VuLnN0YXJ0c1dpdGgoXCJCb3QgXCIpKSByZXR1cm4gdG9rZW47XG4gIC8vIFJlbW92ZSB0aGUgcHJlZml4IGFuZCByZXR1cm4gb25seSB0aGUgdG9rZW4uXG4gIHJldHVybiB0b2tlbi5zdWJzdHJpbmcodG9rZW4uaW5kZXhPZihcIiBcIikgKyAxKTtcbn1cblxuLyoqIEdldCB0aGUgYm90IGlkIGZyb20gdGhlIGJvdCB0b2tlbi4gV0FSTklORzogRGlzY29yZCBzdGFmZiBoYXMgbWVudGlvbmVkIHRoaXMgbWF5IG5vdCBiZSBzdGFibGUgZm9yZXZlci4gVXNlIGF0IHlvdXIgb3duIHJpc2suIEhvd2V2ZXIsIG5vdGUgZm9yIG92ZXIgNSB5ZWFycyB0aGlzIGhhcyBuZXZlciBicm9rZW4uICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm90SWRGcm9tVG9rZW4odG9rZW46IHN0cmluZykge1xuICByZXR1cm4gQmlnSW50KGF0b2IodG9rZW4uc3BsaXQoXCIuXCIpWzBdKSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndDQUF3QyxDQUN4QyxPQUFPLFNBQVMsaUJBQWlCLENBQUMsS0FBYyxFQUFFLElBQXdCLEdBQUcsTUFBTSxFQUFVO0lBQzNGLDBDQUEwQztJQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQztJQUN4Ryx3REFBd0Q7SUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDNUMsK0NBQStDO0lBQy9DLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ2hEO0FBRUQsMExBQTBMLENBQzFMLE9BQU8sU0FBUyxpQkFBaUIsQ0FBQyxLQUFhLEVBQUU7SUFDL0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzFDIn0=