// iMpOrTaNt to make sure files can be reloaded properly!
export let uniqueFilePathCounter = 0;
export let paths = [];
/** Recursively generates an array of unique paths to import using `fileLoader()`
 * (**Is** windows compatible)
 */ export async function importDirectory(path) {
    path = path.replaceAll("\\", "/");
    const files = Deno.readDirSync(Deno.realPathSync(path));
    for (const file of files){
        if (!file.name) continue;
        const currentPath = `${path}/${file.name}`;
        if (file.isFile) {
            if (!currentPath.endsWith(".ts")) continue;
            paths.push(`import "${Deno.mainModule.substring(0, Deno.mainModule.lastIndexOf("/"))}/${currentPath.substring(currentPath.indexOf("src/"))}#${uniqueFilePathCounter}";`);
            continue;
        }
        // Recursive function!
        await importDirectory(currentPath);
    }
    uniqueFilePathCounter++;
}
/** Writes, then imports all everything in fileloader.ts */ export async function fileLoader() {
    await Deno.writeTextFile("fileloader.ts", paths.join("\n").replaceAll("\\", "/"));
    await import(`${Deno.mainModule.substring(0, Deno.mainModule.lastIndexOf("/"))}/fileloader.ts#${uniqueFilePathCounter}`);
    paths = [];
}
/** This function will import the specified directories */ export async function fastFileLoader(/** An array of directories to import recursively. */ paths1, /** A function that will run before recursively setting a part of `paths`.
   * `path` contains the path that will be imported, useful for logging
   */ between, /** A function that runs before **actually** importing all the files. */ before) {
    await Promise.all([
        ...paths1
    ].map((path)=>{
        if (between) between(path, uniqueFilePathCounter, paths1);
        importDirectory(path);
    }));
    if (before) before(uniqueFilePathCounter, paths1);
    await fileLoader();
}
/** Pass in a (compatible) bot instance, and get sweet file loader goodness.
 * Remember to capture the output of this function!
 */ export function enableFileLoaderPlugin(rawBot) {
    const bot = rawBot;
    bot.importDirectory = importDirectory;
    bot.fileLoader = fileLoader;
    bot.fastFileLoader = fastFileLoader;
    return bot;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QgfSBmcm9tIFwiLi9kZXBzLnRzXCI7XG5cbi8vIGlNcE9yVGFOdCB0byBtYWtlIHN1cmUgZmlsZXMgY2FuIGJlIHJlbG9hZGVkIHByb3Blcmx5IVxuZXhwb3J0IGxldCB1bmlxdWVGaWxlUGF0aENvdW50ZXIgPSAwO1xuZXhwb3J0IGxldCBwYXRoczogc3RyaW5nW10gPSBbXTtcblxuLyoqIFJlY3Vyc2l2ZWx5IGdlbmVyYXRlcyBhbiBhcnJheSBvZiB1bmlxdWUgcGF0aHMgdG8gaW1wb3J0IHVzaW5nIGBmaWxlTG9hZGVyKClgXG4gKiAoKipJcyoqIHdpbmRvd3MgY29tcGF0aWJsZSlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltcG9ydERpcmVjdG9yeShwYXRoOiBzdHJpbmcpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZUFsbChcIlxcXFxcIiwgXCIvXCIpO1xuICBjb25zdCBmaWxlcyA9IERlbm8ucmVhZERpclN5bmMoRGVuby5yZWFsUGF0aFN5bmMocGF0aCkpO1xuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGlmICghZmlsZS5uYW1lKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gYCR7cGF0aH0vJHtmaWxlLm5hbWV9YDtcbiAgICBpZiAoZmlsZS5pc0ZpbGUpIHtcbiAgICAgIGlmICghY3VycmVudFBhdGguZW5kc1dpdGgoXCIudHNcIikpIGNvbnRpbnVlO1xuICAgICAgcGF0aHMucHVzaChcbiAgICAgICAgYGltcG9ydCBcIiR7RGVuby5tYWluTW9kdWxlLnN1YnN0cmluZygwLCBEZW5vLm1haW5Nb2R1bGUubGFzdEluZGV4T2YoXCIvXCIpKX0vJHtcbiAgICAgICAgICBjdXJyZW50UGF0aC5zdWJzdHJpbmcoXG4gICAgICAgICAgICBjdXJyZW50UGF0aC5pbmRleE9mKFwic3JjL1wiKSxcbiAgICAgICAgICApXG4gICAgICAgIH0jJHt1bmlxdWVGaWxlUGF0aENvdW50ZXJ9XCI7YCxcbiAgICAgICk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmUgZnVuY3Rpb24hXG4gICAgYXdhaXQgaW1wb3J0RGlyZWN0b3J5KGN1cnJlbnRQYXRoKTtcbiAgfVxuXG4gIHVuaXF1ZUZpbGVQYXRoQ291bnRlcisrO1xufVxuXG4vKiogV3JpdGVzLCB0aGVuIGltcG9ydHMgYWxsIGV2ZXJ5dGhpbmcgaW4gZmlsZWxvYWRlci50cyAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGVMb2FkZXIoKSB7XG4gIGF3YWl0IERlbm8ud3JpdGVUZXh0RmlsZShcImZpbGVsb2FkZXIudHNcIiwgcGF0aHMuam9pbihcIlxcblwiKS5yZXBsYWNlQWxsKFwiXFxcXFwiLCBcIi9cIikpO1xuICBhd2FpdCBpbXBvcnQoXG4gICAgYCR7RGVuby5tYWluTW9kdWxlLnN1YnN0cmluZygwLCBEZW5vLm1haW5Nb2R1bGUubGFzdEluZGV4T2YoXCIvXCIpKX0vZmlsZWxvYWRlci50cyMke3VuaXF1ZUZpbGVQYXRoQ291bnRlcn1gXG4gICk7XG4gIHBhdGhzID0gW107XG59XG5cbi8qKiBUaGlzIGZ1bmN0aW9uIHdpbGwgaW1wb3J0IHRoZSBzcGVjaWZpZWQgZGlyZWN0b3JpZXMgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmYXN0RmlsZUxvYWRlcihcbiAgLyoqIEFuIGFycmF5IG9mIGRpcmVjdG9yaWVzIHRvIGltcG9ydCByZWN1cnNpdmVseS4gKi9cbiAgcGF0aHM6IHN0cmluZ1tdLFxuICAvKiogQSBmdW5jdGlvbiB0aGF0IHdpbGwgcnVuIGJlZm9yZSByZWN1cnNpdmVseSBzZXR0aW5nIGEgcGFydCBvZiBgcGF0aHNgLlxuICAgKiBgcGF0aGAgY29udGFpbnMgdGhlIHBhdGggdGhhdCB3aWxsIGJlIGltcG9ydGVkLCB1c2VmdWwgZm9yIGxvZ2dpbmdcbiAgICovXG4gIGJldHdlZW4/OiAocGF0aDogc3RyaW5nLCB1bmlxdWVGaWxlUGF0aENvdW50ZXI6IG51bWJlciwgcGF0aHM6IHN0cmluZ1tdKSA9PiB2b2lkLFxuICAvKiogQSBmdW5jdGlvbiB0aGF0IHJ1bnMgYmVmb3JlICoqYWN0dWFsbHkqKiBpbXBvcnRpbmcgYWxsIHRoZSBmaWxlcy4gKi9cbiAgYmVmb3JlPzogKHVuaXF1ZUZpbGVQYXRoQ291bnRlcjogbnVtYmVyLCBwYXRoczogc3RyaW5nW10pID0+IHZvaWQsXG4pIHtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgWy4uLnBhdGhzXS5tYXAoKHBhdGgpID0+IHtcbiAgICAgIGlmIChiZXR3ZWVuKSBiZXR3ZWVuKHBhdGgsIHVuaXF1ZUZpbGVQYXRoQ291bnRlciwgcGF0aHMpO1xuICAgICAgaW1wb3J0RGlyZWN0b3J5KHBhdGgpO1xuICAgIH0pLFxuICApO1xuXG4gIGlmIChiZWZvcmUpIGJlZm9yZSh1bmlxdWVGaWxlUGF0aENvdW50ZXIsIHBhdGhzKTtcblxuICBhd2FpdCBmaWxlTG9hZGVyKCk7XG59XG5cbi8qKiBFeHRlbmQgdGhlIEJvdCB3aXRoIHRoZSBQbHVnaW4ncyBhZGRlZCBmdW5jdGlvbnMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQm90V2l0aEZpbGVMb2FkZXIgZXh0ZW5kcyBCb3Qge1xuICAvKiogUmVjdXJzaXZlbHkgZ2VuZXJhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSBwYXRocyB0byBpbXBvcnQgdXNpbmcgYGZpbGVMb2FkZXIoKWBcbiAgICogKCoqSXMqKiB3aW5kb3dzIGNvbXBhdGlibGUpXG4gICAqL1xuICBpbXBvcnREaXJlY3Rvcnk6IChwYXRoOiBzdHJpbmcpID0+IHZvaWQ7XG4gIC8qKiBXcml0ZXMsIHRoZW4gaW1wb3J0cyBhbGwgZXZlcnl0aGluZyBpbiBmaWxlbG9hZGVyLnRzICovXG4gIGZpbGVMb2FkZXI6ICgpID0+IHZvaWQ7XG4gIC8qKiBUaGlzIGZ1bmN0aW9uIHdpbGwgaW1wb3J0IHRoZSBzcGVjaWZpZWQgZGlyZWN0b3JpZXMgKi9cbiAgZmFzdEZpbGVMb2FkZXI6IChcbiAgICAvKiogQW4gYXJyYXkgb2YgZGlyZWN0b3JpZXMgdG8gaW1wb3J0IHJlY3Vyc2l2ZWx5LiAqL1xuICAgIHBhdGhzOiBzdHJpbmdbXSxcbiAgICAvKiogQSBmdW5jdGlvbiB0aGF0IHdpbGwgcnVuIGJlZm9yZSByZWN1cnNpdmVseSBzZXR0aW5nIGEgcGFydCBvZiBgcGF0aHNgLlxuICAgICAqIGBwYXRoYCBjb250YWlucyB0aGUgcGF0aCB0aGF0IHdpbGwgYmUgaW1wb3J0ZWQsIHVzZWZ1bCBmb3IgbG9nZ2luZ1xuICAgICAqL1xuICAgIGJldHdlZW4/OiAocGF0aDogc3RyaW5nLCB1bmlxdWVGaWxlUGF0aENvdW50ZXI6IG51bWJlciwgcGF0aHM6IHN0cmluZ1tdKSA9PiB2b2lkLFxuICAgIC8qKiBBIGZ1bmN0aW9uIHRoYXQgcnVucyBiZWZvcmUgKiphY3R1YWxseSoqIGltcG9ydGluZyBhbGwgdGhlIGZpbGVzLiAqL1xuICAgIGJlZm9yZT86ICh1bmlxdWVGaWxlUGF0aENvdW50ZXI6IG51bWJlciwgcGF0aHM6IHN0cmluZ1tdKSA9PiB2b2lkLFxuICApID0+IHZvaWQ7XG59XG5cbi8qKiBQYXNzIGluIGEgKGNvbXBhdGlibGUpIGJvdCBpbnN0YW5jZSwgYW5kIGdldCBzd2VldCBmaWxlIGxvYWRlciBnb29kbmVzcy5cbiAqIFJlbWVtYmVyIHRvIGNhcHR1cmUgdGhlIG91dHB1dCBvZiB0aGlzIGZ1bmN0aW9uIVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlRmlsZUxvYWRlclBsdWdpbihyYXdCb3Q6IEJvdCk6IEJvdFdpdGhGaWxlTG9hZGVyIHtcbiAgY29uc3QgYm90ID0gcmF3Qm90IGFzIEJvdFdpdGhGaWxlTG9hZGVyO1xuXG4gIGJvdC5pbXBvcnREaXJlY3RvcnkgPSBpbXBvcnREaXJlY3Rvcnk7XG4gIGJvdC5maWxlTG9hZGVyID0gZmlsZUxvYWRlcjtcbiAgYm90LmZhc3RGaWxlTG9hZGVyID0gZmFzdEZpbGVMb2FkZXI7XG5cbiAgcmV0dXJuIGJvdDtcbn1cbiJdLCJuYW1lcyI6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