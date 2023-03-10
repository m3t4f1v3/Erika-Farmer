import { guilds } from "../database/mod.ts";
import { BitwisePermissionFlags } from "../../deps.ts";
const deleteLogs = await Deno.open("./deleteLogs.txt", {
    append: true,
    create: true,
});
const encoder = new TextEncoder();
export async function getValues(serverID, database) {
    let guildData = await guilds.get(serverID.toString());
    if (typeof guildData === "object") {
        return guildData[database];
    }
    else {
        return false;
    }
}
export async function addValue(value, serverID, userID, database) {
    let server = serverID.toString();
    let guildData = await guilds.get(server);
    let table = guildData[database];
    if (typeof guildData === "object") {
        if (typeof table === "object") {
            table[value] = userID.toString();
        }
        await guilds.update(server, guildData);
    }
}
export async function delValue(value, serverID, userID, permissions, database) {
    let server = serverID.toString();
    let guildData = await guilds.get(server);
    let table = guildData[database];
    if (typeof guildData === "object") {
        if (typeof table === "object") {
            if (table[value] == userID.toString() ||
                (permissions &
                    BigInt(BitwisePermissionFlags.MANAGE_MESSAGES) &&
                    table[value] !== undefined)) {
                delete table[value];
                await Deno.writeAll(deleteLogs, encoder.encode(`${value}:${userID.toString()}` + "\n"));
                await guilds.update(server, guildData);
                return true;
            }
        }
    }
}
export function choose(choices) {
    return choices[Math.floor(choices.length * Math.random())];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkRnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hhcmVkRnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQnZELE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtJQUNyRCxNQUFNLEVBQUUsSUFBSTtJQUNaLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUVsQyxNQUFNLENBQUMsS0FBSyxVQUFVLFNBQVMsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO0lBR2hFLElBQUksU0FBUyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQVEsQ0FBQztJQUM3RCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUNqQyxPQUFPLFNBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3QjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7QUFFRCxNQUFNLENBQUMsS0FBSyxVQUFVLFFBQVEsQ0FDNUIsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLE1BQWMsRUFDZCxRQUFnQjtJQUVoQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsSUFBSSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ2hELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQVEsQ0FBQztJQUV2QyxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUNqQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO1FBR0QsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUM7QUFFRCxNQUFNLENBQUMsS0FBSyxVQUFVLFFBQVEsQ0FDNUIsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLE1BQWMsRUFDZCxXQUFtQixFQUNuQixRQUFnQjtJQUVoQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsSUFBSSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ2hELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQVEsQ0FBQztJQUV2QyxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUNqQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUNFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUNqQyxDQUFDLFdBQVc7b0JBQ1IsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQztvQkFDaEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsQ0FBQyxFQUM3QjtnQkFDQSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUNqQixVQUFVLEVBQ1YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FDdkQsQ0FBQztnQkFDRixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLE9BQXNCO0lBQzNDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwcm9iYWJseSBhIHJhY2UgY29uZGl0aW9uIGJ1dCB3aG8gY2FyZXNcbi8vaW1wb3J0IHsgQm90IH0gZnJvbSBcIi4uLy4uL2JvdC50c1wiO1xuaW1wb3J0IHsgZ3VpbGRzIH0gZnJvbSBcIi4uL2RhdGFiYXNlL21vZC50c1wiO1xuaW1wb3J0IHsgQml0d2lzZVBlcm1pc3Npb25GbGFncyB9IGZyb20gXCIuLi8uLi9kZXBzLnRzXCI7XG4vL2NvbnNvbGUubG9nKGF3YWl0IGd1aWxkcy5nZXRBbGwoKSk7XG5cbi8qXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR3VpbGRzKCkge1xuICAoYXdhaXQgQm90LmFjdGl2ZUd1aWxkSWRzKS5mb3JFYWNoKChndWlsZElEKSA9PiB7XG4gICAgaWYgKCFzZXJ2ZXJzW2d1aWxkSUQudG9TdHJpbmcoKV0pIHtcbiAgICAgIHNlcnZlcnNbZ3VpbGRJRC50b1N0cmluZygpXSA9IHtcbiAgICAgICAgXCJyYXBpc3REQlwiOiB7fSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cbiovXG5cbi8vY29uc29sZS5sb2coYXdhaXQgdHlwZW9mIGd1aWxkcy5nZXQoXCIxMDAxMjEwNjQzNDg1MDM2NjM0XCIpKVxuXG5jb25zdCBkZWxldGVMb2dzID0gYXdhaXQgRGVuby5vcGVuKFwiLi9kZWxldGVMb2dzLnR4dFwiLCB7XG4gIGFwcGVuZDogdHJ1ZSxcbiAgY3JlYXRlOiB0cnVlLFxufSk7XG5cbmNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZhbHVlcyhzZXJ2ZXJJRDogYmlnaW50LCBkYXRhYmFzZTogc3RyaW5nKSB7XG4gIC8vIGFsbCB1c2VsZXNzIGJ1dCBzdWNoIGlzIHRoZSBjdXJzZSBvZiB0eXBlc2NyaXB0XG5cbiAgbGV0IGd1aWxkRGF0YSA9IGF3YWl0IGd1aWxkcy5nZXQoc2VydmVySUQudG9TdHJpbmcoKSkgYXMgYW55O1xuICBpZiAodHlwZW9mIGd1aWxkRGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBndWlsZERhdGEhW2RhdGFiYXNlXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFZhbHVlKFxuICB2YWx1ZTogc3RyaW5nLFxuICBzZXJ2ZXJJRDogYmlnaW50LFxuICB1c2VySUQ6IGJpZ2ludCxcbiAgZGF0YWJhc2U6IHN0cmluZyxcbikge1xuICBsZXQgc2VydmVyID0gc2VydmVySUQudG9TdHJpbmcoKTtcbiAgbGV0IGd1aWxkRGF0YSA9IGF3YWl0IGd1aWxkcy5nZXQoc2VydmVyKSBhcyBhbnk7XG4gIGxldCB0YWJsZSA9IGd1aWxkRGF0YVtkYXRhYmFzZV0gYXMgYW55O1xuXG4gIGlmICh0eXBlb2YgZ3VpbGREYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgaWYgKHR5cGVvZiB0YWJsZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdGFibGVbdmFsdWVdID0gdXNlcklELnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLy8gaWRlYWxseSB0aGlzIHNob3VsZCBiZSBjYWxsZWQgb25jZSB0aGUgYm90IHNodXRzIGRvd25cbiAgICBhd2FpdCBndWlsZHMudXBkYXRlKHNlcnZlciwgZ3VpbGREYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsVmFsdWUoXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHNlcnZlcklEOiBiaWdpbnQsXG4gIHVzZXJJRDogYmlnaW50LFxuICBwZXJtaXNzaW9uczogYmlnaW50LFxuICBkYXRhYmFzZTogc3RyaW5nLFxuKSB7XG4gIGxldCBzZXJ2ZXIgPSBzZXJ2ZXJJRC50b1N0cmluZygpO1xuICBsZXQgZ3VpbGREYXRhID0gYXdhaXQgZ3VpbGRzLmdldChzZXJ2ZXIpIGFzIGFueTtcbiAgbGV0IHRhYmxlID0gZ3VpbGREYXRhW2RhdGFiYXNlXSBhcyBhbnk7XG5cbiAgaWYgKHR5cGVvZiBndWlsZERhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICBpZiAodHlwZW9mIHRhYmxlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRhYmxlW3ZhbHVlXSA9PSB1c2VySUQudG9TdHJpbmcoKSB8fFxuICAgICAgICAocGVybWlzc2lvbnMgJlxuICAgICAgICAgICAgQmlnSW50KEJpdHdpc2VQZXJtaXNzaW9uRmxhZ3MuTUFOQUdFX01FU1NBR0VTKSAmJlxuICAgICAgICAgIHRhYmxlW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgKSB7XG4gICAgICAgIGRlbGV0ZSB0YWJsZVt2YWx1ZV07XG4gICAgICAgIGF3YWl0IERlbm8ud3JpdGVBbGwoXG4gICAgICAgICAgZGVsZXRlTG9ncyxcbiAgICAgICAgICBlbmNvZGVyLmVuY29kZShgJHt2YWx1ZX06JHt1c2VySUQudG9TdHJpbmcoKX1gICsgXCJcXG5cIiksXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGd1aWxkcy51cGRhdGUoc2VydmVyLCBndWlsZERhdGEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShjaG9pY2VzOiBBcnJheTxzdHJpbmc+KSB7XG4gIHJldHVybiBjaG9pY2VzW01hdGguZmxvb3IoY2hvaWNlcy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG59XG4iXX0=