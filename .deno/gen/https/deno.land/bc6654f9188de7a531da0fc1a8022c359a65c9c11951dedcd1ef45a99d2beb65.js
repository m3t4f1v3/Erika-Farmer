export function processRateLimitedPaths(rest) {
    const now = Date.now();
    for (const [key, value] of rest.rateLimitedPaths.entries()) {
        rest.debug(`[REST - processRateLimitedPaths] Running for of loop. ${value.resetTimestamp - now}`);
        if (value.resetTimestamp > now)
            continue;
        rest.rateLimitedPaths.delete(key);
        if (key === "global")
            rest.globallyRateLimited = false;
    }
    if (!rest.rateLimitedPaths.size) {
        rest.processingRateLimitedPaths = false;
    }
    else {
        rest.processingRateLimitedPaths = true;
        setTimeout(() => {
            rest.debug(`[REST - processRateLimitedPaths] Running setTimeout.`);
            rest.processRateLimitedPaths(rest);
        }, 1000);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc1JhdGVMaW1pdGVkUGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9jZXNzUmF0ZUxpbWl0ZWRQYXRocy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLFVBQVUsdUJBQXVCLENBQUMsSUFBaUI7SUFDdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRXZCLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyx5REFBeUQsS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRWxHLElBQUksS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHO1lBQUUsU0FBUztRQUd6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksR0FBRyxLQUFLLFFBQVE7WUFBRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0tBQ3hEO0lBR0QsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7UUFDL0IsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztLQUN6QztTQUFNO1FBQ0wsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQztRQUV2QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDVjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXN0TWFuYWdlciB9IGZyb20gXCIuLi9ib3QudHNcIjtcblxuLyoqIFRoaXMgd2lsbCBjcmVhdGUgYSBpbmZpbml0ZSBsb29wIHJ1bm5pbmcgaW4gMSBzZWNvbmRzIHVzaW5nIHRhaWwgcmVjdXJzaW9uIHRvIGtlZXAgcmF0ZSBsaW1pdHMgY2xlYW4uIFdoZW4gYSByYXRlIGxpbWl0IHJlc2V0cywgdGhpcyB3aWxsIHJlbW92ZSBpdCBzbyB0aGUgcXVldWUgY2FuIHByb2NlZWQuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1JhdGVMaW1pdGVkUGF0aHMocmVzdDogUmVzdE1hbmFnZXIpIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiByZXN0LnJhdGVMaW1pdGVkUGF0aHMuZW50cmllcygpKSB7XG4gICAgcmVzdC5kZWJ1ZyhgW1JFU1QgLSBwcm9jZXNzUmF0ZUxpbWl0ZWRQYXRoc10gUnVubmluZyBmb3Igb2YgbG9vcC4gJHt2YWx1ZS5yZXNldFRpbWVzdGFtcCAtIG5vd31gKTtcbiAgICAvLyBJRiBUSEUgVElNRSBIQVMgTk9UIFJFQUNIRUQgQ0FOQ0VMXG4gICAgaWYgKHZhbHVlLnJlc2V0VGltZXN0YW1wID4gbm93KSBjb250aW51ZTtcblxuICAgIC8vIFJBVEUgTElNSVQgSVMgT1ZFUiwgREVMRVRFIFRIRSBSQVRFIExJTUlURVJcbiAgICByZXN0LnJhdGVMaW1pdGVkUGF0aHMuZGVsZXRlKGtleSk7XG4gICAgLy8gSUYgSVQgV0FTIEdMT0JBTCBBTFNPIE1BUksgVEhFIEdMT0JBTCBWQUxVRSBBUyBGQUxTRVxuICAgIGlmIChrZXkgPT09IFwiZ2xvYmFsXCIpIHJlc3QuZ2xvYmFsbHlSYXRlTGltaXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQUxMIFBBVEhTIEFSRSBDTEVBUkVEIENBTiBDQU5DRUwgT1VUIVxuICBpZiAoIXJlc3QucmF0ZUxpbWl0ZWRQYXRocy5zaXplKSB7XG4gICAgcmVzdC5wcm9jZXNzaW5nUmF0ZUxpbWl0ZWRQYXRocyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJlc3QucHJvY2Vzc2luZ1JhdGVMaW1pdGVkUGF0aHMgPSB0cnVlO1xuICAgIC8vIFJFQ0hFQ0sgSU4gMSBTRUNPTkRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc3QuZGVidWcoYFtSRVNUIC0gcHJvY2Vzc1JhdGVMaW1pdGVkUGF0aHNdIFJ1bm5pbmcgc2V0VGltZW91dC5gKTtcbiAgICAgIHJlc3QucHJvY2Vzc1JhdGVMaW1pdGVkUGF0aHMocmVzdCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbiJdfQ==