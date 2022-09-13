// deno-lint-ignore-file no-explicit-any
import { bold, cyan, gray, italic, red, yellow } from "../../deps.ts";
export var LogLevels;
(function(LogLevels) {
    LogLevels[LogLevels["Debug"] = 0] = "Debug";
    LogLevels[LogLevels["Info"] = 1] = "Info";
    LogLevels[LogLevels["Warn"] = 2] = "Warn";
    LogLevels[LogLevels["Error"] = 3] = "Error";
    LogLevels[LogLevels["Fatal"] = 4] = "Fatal";
})(LogLevels || (LogLevels = {}));
const prefixes = new Map([
    [
        LogLevels.Debug,
        "DEBUG"
    ],
    [
        LogLevels.Info,
        "INFO"
    ],
    [
        LogLevels.Warn,
        "WARN"
    ],
    [
        LogLevels.Error,
        "ERROR"
    ],
    [
        LogLevels.Fatal,
        "FATAL"
    ], 
]);
const noColor = (msg)=>msg
;
const colorFunctions = new Map([
    [
        LogLevels.Debug,
        gray
    ],
    [
        LogLevels.Info,
        cyan
    ],
    [
        LogLevels.Warn,
        yellow
    ],
    [
        LogLevels.Error,
        (str)=>red(str)
    ],
    [
        LogLevels.Fatal,
        (str)=>red(bold(italic(str)))
    ], 
]);
export function logger({ logLevel =LogLevels.Info , name  } = {}) {
    function log1(level, ...args) {
        if (level < logLevel) return;
        let color = colorFunctions.get(level);
        if (!color) color = noColor;
        const date = new Date();
        const log2 = [
            `[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]`,
            color(prefixes.get(level) || "DEBUG"),
            name ? `${name} >` : ">",
            ...args, 
        ];
        switch(level){
            case LogLevels.Debug:
                return console.debug(...log2);
            case LogLevels.Info:
                return console.info(...log2);
            case LogLevels.Warn:
                return console.warn(...log2);
            case LogLevels.Error:
                return console.error(...log2);
            case LogLevels.Fatal:
                return console.error(...log2);
            default:
                return console.log(...log2);
        }
    }
    function setLevel(level) {
        logLevel = level;
    }
    function debug(...args) {
        log1(LogLevels.Debug, ...args);
    }
    function info(...args) {
        log1(LogLevels.Info, ...args);
    }
    function warn(...args) {
        log1(LogLevels.Warn, ...args);
    }
    function error(...args) {
        log1(LogLevels.Error, ...args);
    }
    function fatal(...args) {
        log1(LogLevels.Fatal, ...args);
    }
    return {
        log: log1,
        setLevel,
        debug,
        info,
        warn,
        error,
        fatal
    };
}
export const log = logger({
    name: "Main"
});
export default log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZW5vLWxpbnQtaWdub3JlLWZpbGUgbm8tZXhwbGljaXQtYW55XG5pbXBvcnQgeyBib2xkLCBjeWFuLCBncmF5LCBpdGFsaWMsIHJlZCwgeWVsbG93IH0gZnJvbSBcIi4uLy4uL2RlcHMudHNcIjtcblxuZXhwb3J0IGVudW0gTG9nTGV2ZWxzIHtcbiAgRGVidWcsXG4gIEluZm8sXG4gIFdhcm4sXG4gIEVycm9yLFxuICBGYXRhbCxcbn1cblxuY29uc3QgcHJlZml4ZXMgPSBuZXcgTWFwPExvZ0xldmVscywgc3RyaW5nPihbXG4gIFtMb2dMZXZlbHMuRGVidWcsIFwiREVCVUdcIl0sXG4gIFtMb2dMZXZlbHMuSW5mbywgXCJJTkZPXCJdLFxuICBbTG9nTGV2ZWxzLldhcm4sIFwiV0FSTlwiXSxcbiAgW0xvZ0xldmVscy5FcnJvciwgXCJFUlJPUlwiXSxcbiAgW0xvZ0xldmVscy5GYXRhbCwgXCJGQVRBTFwiXSxcbl0pO1xuXG5jb25zdCBub0NvbG9yOiAoc3RyOiBzdHJpbmcpID0+IHN0cmluZyA9IChtc2cpID0+IG1zZztcbmNvbnN0IGNvbG9yRnVuY3Rpb25zID0gbmV3IE1hcDxMb2dMZXZlbHMsIChzdHI6IHN0cmluZykgPT4gc3RyaW5nPihbXG4gIFtMb2dMZXZlbHMuRGVidWcsIGdyYXldLFxuICBbTG9nTGV2ZWxzLkluZm8sIGN5YW5dLFxuICBbTG9nTGV2ZWxzLldhcm4sIHllbGxvd10sXG4gIFtMb2dMZXZlbHMuRXJyb3IsIChzdHI6IHN0cmluZykgPT4gcmVkKHN0cildLFxuICBbTG9nTGV2ZWxzLkZhdGFsLCAoc3RyOiBzdHJpbmcpID0+IHJlZChib2xkKGl0YWxpYyhzdHIpKSldLFxuXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dnZXIoe1xuICBsb2dMZXZlbCA9IExvZ0xldmVscy5JbmZvLFxuICBuYW1lLFxufToge1xuICBsb2dMZXZlbD86IExvZ0xldmVscztcbiAgbmFtZT86IHN0cmluZztcbn0gPSB7fSkge1xuICBmdW5jdGlvbiBsb2cobGV2ZWw6IExvZ0xldmVscywgLi4uYXJnczogYW55W10pIHtcbiAgICBpZiAobGV2ZWwgPCBsb2dMZXZlbCkgcmV0dXJuO1xuXG4gICAgbGV0IGNvbG9yID0gY29sb3JGdW5jdGlvbnMuZ2V0KGxldmVsKTtcbiAgICBpZiAoIWNvbG9yKSBjb2xvciA9IG5vQ29sb3I7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBsb2cgPSBbXG4gICAgICBgWyR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX0gJHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfV1gLFxuICAgICAgY29sb3IocHJlZml4ZXMuZ2V0KGxldmVsKSB8fCBcIkRFQlVHXCIpLFxuICAgICAgbmFtZSA/IGAke25hbWV9ID5gIDogXCI+XCIsXG4gICAgICAuLi5hcmdzLFxuICAgIF07XG5cbiAgICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgICBjYXNlIExvZ0xldmVscy5EZWJ1ZzpcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZGVidWcoLi4ubG9nKTtcbiAgICAgIGNhc2UgTG9nTGV2ZWxzLkluZm86XG4gICAgICAgIHJldHVybiBjb25zb2xlLmluZm8oLi4ubG9nKTtcbiAgICAgIGNhc2UgTG9nTGV2ZWxzLldhcm46XG4gICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oLi4ubG9nKTtcbiAgICAgIGNhc2UgTG9nTGV2ZWxzLkVycm9yOlxuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvciguLi5sb2cpO1xuICAgICAgY2FzZSBMb2dMZXZlbHMuRmF0YWw6XG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKC4uLmxvZyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coLi4ubG9nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMZXZlbChsZXZlbDogTG9nTGV2ZWxzKSB7XG4gICAgbG9nTGV2ZWwgPSBsZXZlbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgbG9nKExvZ0xldmVscy5EZWJ1ZywgLi4uYXJncyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbmZvKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgbG9nKExvZ0xldmVscy5JbmZvLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdhcm4oLi4uYXJnczogYW55W10pIHtcbiAgICBsb2coTG9nTGV2ZWxzLldhcm4sIC4uLmFyZ3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXJyb3IoLi4uYXJnczogYW55W10pIHtcbiAgICBsb2coTG9nTGV2ZWxzLkVycm9yLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZhdGFsKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgbG9nKExvZ0xldmVscy5GYXRhbCwgLi4uYXJncyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvZyxcbiAgICBzZXRMZXZlbCxcbiAgICBkZWJ1ZyxcbiAgICBpbmZvLFxuICAgIHdhcm4sXG4gICAgZXJyb3IsXG4gICAgZmF0YWwsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBsb2cgPSBsb2dnZXIoeyBuYW1lOiBcIk1haW5cIiB9KTtcbmV4cG9ydCBkZWZhdWx0IGxvZztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid0NBQXdDO0FBQ3hDLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsZUFBZSxDQUFDO1dBRS9ELFNBTU47VUFOVyxTQUFTO0lBQVQsU0FBUyxDQUFULFNBQVMsQ0FDbkIsT0FBSyxJQUFMLENBQUssSUFBTCxPQUFLO0lBREssU0FBUyxDQUFULFNBQVMsQ0FFbkIsTUFBSSxJQUFKLENBQUksSUFBSixNQUFJO0lBRk0sU0FBUyxDQUFULFNBQVMsQ0FHbkIsTUFBSSxJQUFKLENBQUksSUFBSixNQUFJO0lBSE0sU0FBUyxDQUFULFNBQVMsQ0FJbkIsT0FBSyxJQUFMLENBQUss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