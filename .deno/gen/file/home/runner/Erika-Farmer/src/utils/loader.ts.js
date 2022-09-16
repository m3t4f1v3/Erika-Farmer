import log from "./logger.ts";
let uniqueFilePathCounter = 0;
let paths = [];
export async function importDirectory(path) {
    path = path.replaceAll("\\", "/");
    const files = Deno.readDirSync(Deno.realPathSync(path));
    const folder = path.substring(path.indexOf("/src/") + 5);
    if (!folder.includes("/"))
        log.info(`Loading ${folder}...`);
    for (const file of files) {
        if (!file.name)
            continue;
        const currentPath = `${path}/${file.name}`;
        if (file.isFile) {
            if (!currentPath.endsWith(".ts"))
                continue;
            paths.push(`import "${Deno.mainModule.substring(0, Deno.mainModule.lastIndexOf("/"))}/${currentPath.substring(currentPath.indexOf("src/"))}#${uniqueFilePathCounter}";`);
            continue;
        }
        await importDirectory(currentPath);
    }
    uniqueFilePathCounter++;
}
export async function fileLoader() {
    await Deno.writeTextFile("fileloader.ts", paths.join("\n").replaceAll("\\", "/"));
    await import(`${Deno.mainModule.substring(0, Deno.mainModule.lastIndexOf("/"))}/fileloader.ts#${uniqueFilePathCounter}`);
    paths = [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUc5QixJQUFJLHFCQUFxQixHQUFHLENBQUMsQ0FBQztBQUM5QixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7QUFHekIsTUFBTSxDQUFDLEtBQUssVUFBVSxlQUFlLENBQUMsSUFBWTtJQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXpELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBRTVELEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLFNBQVM7UUFFekIsTUFBTSxXQUFXLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFBRSxTQUFTO1lBQzNDLEtBQUssQ0FBQyxJQUFJLENBQ1IsV0FDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQy9ELElBQ0UsV0FBVyxDQUFDLFNBQVMsQ0FDbkIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FFL0IsSUFBSSxxQkFBcUIsSUFBSSxDQUM5QixDQUFDO1lBQ0YsU0FBUztTQUNWO1FBRUQsTUFBTSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDcEM7SUFFRCxxQkFBcUIsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFHRCxNQUFNLENBQUMsS0FBSyxVQUFVLFVBQVU7SUFDOUIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUN0QixlQUFlLEVBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUN2QyxDQUFDO0lBQ0YsTUFBTSxNQUFNLENBQ1YsR0FDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQy9ELGtCQUFrQixxQkFBcUIsRUFBRSxDQUMxQyxDQUFDO0lBQ0YsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nIGZyb20gXCIuL2xvZ2dlci50c1wiO1xuXG4vLyBWZXJ5IGltcG9ydGFudCB0byBtYWtlIHN1cmUgZmlsZXMgYXJlIHJlbG9hZGVkIHByb3Blcmx5XG5sZXQgdW5pcXVlRmlsZVBhdGhDb3VudGVyID0gMDtcbmxldCBwYXRoczogc3RyaW5nW10gPSBbXTtcblxuLyoqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHJlYWRpbmcgYWxsIGZpbGVzIGluIGEgZm9sZGVyLiBVc2VmdWwgZm9yIGxvYWRpbmcvcmVsb2FkaW5nIGNvbW1hbmRzLCBtb25pdG9ycyBldGMgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnREaXJlY3RvcnkocGF0aDogc3RyaW5nKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2VBbGwoXCJcXFxcXCIsIFwiL1wiKTtcbiAgY29uc3QgZmlsZXMgPSBEZW5vLnJlYWREaXJTeW5jKERlbm8ucmVhbFBhdGhTeW5jKHBhdGgpKTtcbiAgY29uc3QgZm9sZGVyID0gcGF0aC5zdWJzdHJpbmcocGF0aC5pbmRleE9mKFwiL3NyYy9cIikgKyA1KTtcblxuICBpZiAoIWZvbGRlci5pbmNsdWRlcyhcIi9cIikpIGxvZy5pbmZvKGBMb2FkaW5nICR7Zm9sZGVyfS4uLmApO1xuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGlmICghZmlsZS5uYW1lKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gYCR7cGF0aH0vJHtmaWxlLm5hbWV9YDtcbiAgICBpZiAoZmlsZS5pc0ZpbGUpIHtcbiAgICAgIGlmICghY3VycmVudFBhdGguZW5kc1dpdGgoXCIudHNcIikpIGNvbnRpbnVlO1xuICAgICAgcGF0aHMucHVzaChcbiAgICAgICAgYGltcG9ydCBcIiR7XG4gICAgICAgICAgRGVuby5tYWluTW9kdWxlLnN1YnN0cmluZygwLCBEZW5vLm1haW5Nb2R1bGUubGFzdEluZGV4T2YoXCIvXCIpKVxuICAgICAgICB9LyR7XG4gICAgICAgICAgY3VycmVudFBhdGguc3Vic3RyaW5nKFxuICAgICAgICAgICAgY3VycmVudFBhdGguaW5kZXhPZihcInNyYy9cIiksXG4gICAgICAgICAgKVxuICAgICAgICB9IyR7dW5pcXVlRmlsZVBhdGhDb3VudGVyfVwiO2AsXG4gICAgICApO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgYXdhaXQgaW1wb3J0RGlyZWN0b3J5KGN1cnJlbnRQYXRoKTtcbiAgfVxuXG4gIHVuaXF1ZUZpbGVQYXRoQ291bnRlcisrO1xufVxuXG4vKiogSW1wb3J0cyBhbGwgZXZlcnl0aGluZyBpbiBmaWxlbG9hZGVyLnRzICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsZUxvYWRlcigpIHtcbiAgYXdhaXQgRGVuby53cml0ZVRleHRGaWxlKFxuICAgIFwiZmlsZWxvYWRlci50c1wiLFxuICAgIHBhdGhzLmpvaW4oXCJcXG5cIikucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpLFxuICApO1xuICBhd2FpdCBpbXBvcnQoXG4gICAgYCR7XG4gICAgICBEZW5vLm1haW5Nb2R1bGUuc3Vic3RyaW5nKDAsIERlbm8ubWFpbk1vZHVsZS5sYXN0SW5kZXhPZihcIi9cIikpXG4gICAgfS9maWxlbG9hZGVyLnRzIyR7dW5pcXVlRmlsZVBhdGhDb3VudGVyfWBcbiAgKTtcbiAgcGF0aHMgPSBbXTtcbn1cbiJdfQ==