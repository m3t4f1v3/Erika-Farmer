import { HTTPResponseCodes } from "../types/shared.ts";
export async function processGlobalQueue(rest) {
    if (!rest.globalQueue.length)
        return;
    if (rest.globalQueueProcessing)
        return;
    rest.globalQueueProcessing = true;
    while (rest.globalQueue.length) {
        if (rest.globallyRateLimited) {
            setTimeout(() => {
                rest.debug(`[REST - processGlobalQueue] Globally rate limited, running setTimeout.`);
                rest.processGlobalQueue(rest);
            }, 1000);
            break;
        }
        if (rest.invalidRequests === rest.maxInvalidRequests - rest.invalidRequestsSafetyAmount) {
            setTimeout(() => {
                const time = rest.invalidRequestsInterval - (Date.now() - rest.invalidRequestFrozenAt);
                rest.debug(`[REST - processGlobalQueue] Freeze global queue because of invalid requests. Time Remaining: ${time / 1000} seconds.`);
                rest.processGlobalQueue(rest);
            }, 1000);
            break;
        }
        const request = rest.globalQueue.shift();
        if (!request)
            continue;
        const urlResetIn = rest.checkRateLimits(rest, request.basicURL);
        const bucketResetIn = request.payload.bucketId ? rest.checkRateLimits(rest, request.payload.bucketId) : false;
        if (urlResetIn || bucketResetIn) {
            setTimeout(() => {
                rest.debug(`[REST - processGlobalQueue] rate limited, running setTimeout.`);
                rest.globalQueue.unshift(request);
                rest.processGlobalQueue(rest);
            }, urlResetIn || bucketResetIn);
            continue;
        }
        try {
            rest.debug(`[REST - fetching] URL: ${request.urlToUse} | ${JSON.stringify(request.payload)}`);
            const response = await fetch(request.urlToUse, rest.createRequestBody(rest, request));
            rest.debug(`[REST - fetched] URL: ${request.urlToUse} | ${JSON.stringify(request.payload)}`);
            const bucketIdFromHeaders = rest.processRequestHeaders(rest, request.basicURL, response.headers);
            if (bucketIdFromHeaders) {
                request.payload.bucketId = bucketIdFromHeaders;
            }
            if (response.status < 200 || response.status >= 400) {
                rest.debug(`[REST - httpError] Payload: ${JSON.stringify(request.payload)} | Response: ${JSON.stringify(response)}`);
                let error = "REQUEST_UNKNOWN_ERROR";
                switch (response.status) {
                    case HTTPResponseCodes.BadRequest:
                        error = "The request was improperly formatted, or the server couldn't understand it.";
                        break;
                    case HTTPResponseCodes.Unauthorized:
                        error = "The Authorization header was missing or invalid.";
                        break;
                    case HTTPResponseCodes.Forbidden:
                        error = "The Authorization token you passed did not have permission to the resource.";
                        break;
                    case HTTPResponseCodes.NotFound:
                        error = "The resource at the location specified doesn't exist.";
                        break;
                    case HTTPResponseCodes.MethodNotAllowed:
                        error = "The HTTP method used is not valid for the location specified.";
                        break;
                    case HTTPResponseCodes.GatewayUnavailable:
                        error = "There was not a gateway available to process your request. Wait a bit and retry.";
                        break;
                }
                if (rest.invalidRequestErrorStatuses.includes(response.status) &&
                    !(response.status === 429 && response.headers.get("X-RateLimit-Scope"))) {
                    ++rest.invalidRequests;
                    if (!rest.invalidRequestsTimeoutId) {
                        rest.invalidRequestsTimeoutId = setTimeout(() => {
                            rest.debug(`[REST - processGlobalQueue] Resetting invalid requests counter in setTimeout.`);
                            rest.invalidRequests = 0;
                            rest.invalidRequestsTimeoutId = 0;
                        }, rest.invalidRequestsInterval);
                    }
                }
                if (response.status !== 429) {
                    let json = undefined;
                    if (response.type) {
                        json = JSON.stringify(await response.json());
                    }
                    request.request.reject({
                        ok: false,
                        status: response.status,
                        error,
                        body: json,
                    });
                }
                else {
                    if (request.payload.retryCount++ >= rest.maxRetryCount) {
                        rest.debug(`[REST - RetriesMaxed] ${JSON.stringify(request.payload)}`);
                        request.request.reject({
                            ok: false,
                            status: response.status,
                            error: "The request was rate limited and it maxed out the retries limit.",
                        });
                        continue;
                    }
                    rest.globalQueue.push(request);
                }
                continue;
            }
            if (response.status === 204) {
                rest.debug(`[REST - FetchSuccess] URL: ${request.urlToUse} | ${JSON.stringify(request.payload)}`);
                request.request.respond({
                    ok: true,
                    status: 204,
                });
            }
            else {
                const json = JSON.stringify(await response.json());
                rest.debug(`[REST - fetchSuccess] ${JSON.stringify(request.payload)}`);
                request.request.respond({
                    ok: true,
                    status: 200,
                    body: json,
                });
            }
        }
        catch (error) {
            rest.debug(`[REST - fetchFailed] Payload: ${JSON.stringify(request.payload)} | Error: ${error}`);
            request.request.reject({
                ok: false,
                status: 599,
                error: "Internal Proxy Error",
            });
        }
    }
    rest.globalQueueProcessing = false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc0dsb2JhbFF1ZXVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvY2Vzc0dsb2JhbFF1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE1BQU0sQ0FBQyxLQUFLLFVBQVUsa0JBQWtCLENBQUMsSUFBaUI7SUFFeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUFFLE9BQU87SUFFckMsSUFBSSxJQUFJLENBQUMscUJBQXFCO1FBQUUsT0FBTztJQUd2QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBRWxDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7UUFFOUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFHVCxNQUFNO1NBQ1A7UUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUN2RixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLEtBQUssQ0FDUixnR0FDRSxJQUFJLEdBQUcsSUFDVCxXQUFXLENBQ1osQ0FBQztnQkFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxD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QUFFLENBQUMsQ0FBQztZQUNqRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDckIsRUFBRSxFQUFFLEtBQUs7Z0JBQ1QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLHNCQUFzQjthQUM5QixDQUFDLENBQUM7U0FDSjtLQUNGO0lBR0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztBQUNyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzdE1hbmFnZXIgfSBmcm9tIFwiLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBIVFRQUmVzcG9uc2VDb2RlcyB9IGZyb20gXCIuLi90eXBlcy9zaGFyZWQudHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NHbG9iYWxRdWV1ZShyZXN0OiBSZXN0TWFuYWdlcikge1xuICAvLyBJRiBRVUVVRSBJUyBFTVBUWSBFWElUXG4gIGlmICghcmVzdC5nbG9iYWxRdWV1ZS5sZW5ndGgpIHJldHVybjtcbiAgLy8gSUYgUVVFVUUgSVMgQUxSRUFEWSBSVU5OSU5HIEVYSVRcbiAgaWYgKHJlc3QuZ2xvYmFsUXVldWVQcm9jZXNzaW5nKSByZXR1cm47XG5cbiAgLy8gU0VUIEFTIFRSVUUgU08gT1RIRVIgUVVFVUVTIERPTidUIFNUQVJUXG4gIHJlc3QuZ2xvYmFsUXVldWVQcm9jZXNzaW5nID0gdHJ1ZTtcblxuICB3aGlsZSAocmVzdC5nbG9iYWxRdWV1ZS5sZW5ndGgpIHtcbiAgICAvLyBJRiBUSEUgQk9UIElTIEdMT0JBTExZIFJBVEUgTElNSVRFRCBUUlkgQUdBSU5cbiAgICBpZiAocmVzdC5nbG9iYWxseVJhdGVMaW1pdGVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzdC5kZWJ1ZyhgW1JFU1QgLSBwcm9jZXNzR2xvYmFsUXVldWVdIEdsb2JhbGx5IHJhdGUgbGltaXRlZCwgcnVubmluZyBzZXRUaW1lb3V0LmApO1xuICAgICAgICByZXN0LnByb2Nlc3NHbG9iYWxRdWV1ZShyZXN0KTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICAvLyBCUkVBSyBXSElMRSBMT09QXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocmVzdC5pbnZhbGlkUmVxdWVzdHMgPT09IHJlc3QubWF4SW52YWxpZFJlcXVlc3RzIC0gcmVzdC5pbnZhbGlkUmVxdWVzdHNTYWZldHlBbW91bnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lID0gcmVzdC5pbnZhbGlkUmVxdWVzdHNJbnRlcnZhbCAtIChEYXRlLm5vdygpIC0gcmVzdC5pbnZhbGlkUmVxdWVzdEZyb3plbkF0KTtcbiAgICAgICAgcmVzdC5kZWJ1ZyhcbiAgICAgICAgICBgW1JFU1QgLSBwcm9jZXNzR2xvYmFsUXVldWVdIEZyZWV6ZSBnbG9iYWwgcXVldWUgYmVjYXVzZSBvZiBpbnZhbGlkIHJlcXVlc3RzLiBUaW1lIFJlbWFpbmluZzogJHtcbiAgICAgICAgICAgIHRpbWUgLyAxMDAwXG4gICAgICAgICAgfSBzZWNvbmRzLmAsXG4gICAgICAgICk7XG4gICAgICAgIHJlc3QucHJvY2Vzc0dsb2JhbFF1ZXVlKHJlc3QpO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIC8vIEJSRUFLIFdISUxFIExPT1BcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3QgPSByZXN0Lmdsb2JhbFF1ZXVlLnNoaWZ0KCk7XG4gICAgLy8gUkVNT1ZFUyBBTlkgUE9URU5USUFMIElOVkFMSUQgQ09ORkxJQ1RTXG4gICAgaWYgKCFyZXF1ZXN0KSBjb250aW51ZTtcblxuICAgIC8vIENIRUNLIFJBVEUgTElNSVRTIEZPUiA0MjkgUkVQRUFUU1xuICAgIC8vIElGIFRISVMgVVJMIElTIFNUSUxMIFJBVEUgTElNSVRFRCwgVFJZIEFHQUlOXG4gICAgY29uc3QgdXJsUmVzZXRJbiA9IHJlc3QuY2hlY2tSYXRlTGltaXRzKHJlc3QsIHJlcXVlc3QuYmFzaWNVUkwpO1xuICAgIC8vIElGIEEgQlVDS0VUIEVYSVNUUywgQ0hFQ0sgVEhFIEJVQ0tFVCdTIFJBVEUgTElNSVRTXG4gICAgY29uc3QgYnVja2V0UmVzZXRJbiA9IHJlcXVlc3QucGF5bG9hZC5idWNrZXRJZCA/IHJlc3QuY2hlY2tSYXRlTGltaXRzKHJlc3QsIHJlcXVlc3QucGF5bG9hZC5idWNrZXRJZCkgOiBmYWxzZTtcblxuICAgIGlmICh1cmxSZXNldEluIHx8IGJ1Y2tldFJlc2V0SW4pIHtcbiAgICAgIC8vIE9OTFkgQUREIFRJTUVPVVQgSUYgQU5PVEhFUiBRVUVVRSBJUyBOT1QgUEVORElOR1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc3QuZGVidWcoYFtSRVNUIC0gcHJvY2Vzc0dsb2JhbFF1ZXVlXSByYXRlIGxpbWl0ZWQsIHJ1bm5pbmcgc2V0VGltZW91dC5gKTtcbiAgICAgICAgLy8gVEhJUyBSRVNUIElTIFJBVEUgTElNSVRFRCwgU08gUFVTSCBCQUNLIFRPIFNUQVJUXG4gICAgICAgIHJlc3QuZ2xvYmFsUXVldWUudW5zaGlmdChyZXF1ZXN0KTtcbiAgICAgICAgLy8gU1RBUlQgUVVFVUUgSUYgTk9UIFNUQVJURURcbiAgICAgICAgcmVzdC5wcm9jZXNzR2xvYmFsUXVldWUocmVzdCk7XG4gICAgICB9LCB1cmxSZXNldEluIHx8IChidWNrZXRSZXNldEluIGFzIG51bWJlcikpO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gQ1VTVE9NIEhBTkRMRVIgRk9SIFVTRVIgVE8gTE9HIE9SIFdIQVRFVkVSIFdIRU5FVkVSIEEgRkVUQ0ggSVMgTUFERVxuICAgICAgcmVzdC5kZWJ1ZyhgW1JFU1QgLSBmZXRjaGluZ10gVVJMOiAke3JlcXVlc3QudXJsVG9Vc2V9IHwgJHtKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnBheWxvYWQpfWApO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QudXJsVG9Vc2UsIHJlc3QuY3JlYXRlUmVxdWVzdEJvZHkocmVzdCwgcmVxdWVzdCkpO1xuICAgICAgcmVzdC5kZWJ1ZyhgW1JFU1QgLSBmZXRjaGVkXSBVUkw6ICR7cmVxdWVzdC51cmxUb1VzZX0gfCAke0pTT04uc3RyaW5naWZ5KHJlcXVlc3QucGF5bG9hZCl9YCk7XG5cbiAgICAgIGNvbnN0IGJ1Y2tldElkRnJvbUhlYWRlcnMgPSByZXN0LnByb2Nlc3NSZXF1ZXN0SGVhZGVycyhyZXN0LCByZXF1ZXN0LmJhc2ljVVJMLCByZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgIC8vIFNFVCBUSEUgQlVDS0VUIElkIElGIElUIFdBUyBQUkVTRU5UXG4gICAgICBpZiAoYnVja2V0SWRGcm9tSGVhZGVycykge1xuICAgICAgICByZXF1ZXN0LnBheWxvYWQuYnVja2V0SWQgPSBidWNrZXRJZEZyb21IZWFkZXJzO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgcmVzdC5kZWJ1ZyhcbiAgICAgICAgICBgW1JFU1QgLSBodHRwRXJyb3JdIFBheWxvYWQ6ICR7SlNPTi5zdHJpbmdpZnkocmVxdWVzdC5wYXlsb2FkKX0gfCBSZXNwb25zZTogJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZSl9YCxcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZXJyb3IgPSBcIlJFUVVFU1RfVU5LTk9XTl9FUlJPUlwiO1xuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgIGNhc2UgSFRUUFJlc3BvbnNlQ29kZXMuQmFkUmVxdWVzdDpcbiAgICAgICAgICAgIGVycm9yID0gXCJUaGUgcmVxdWVzdCB3YXMgaW1wcm9wZXJseSBmb3JtYXR0ZWQsIG9yIHRoZSBzZXJ2ZXIgY291bGRuJ3QgdW5kZXJzdGFuZCBpdC5cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgSFRUUFJlc3BvbnNlQ29kZXMuVW5hdXRob3JpemVkOlxuICAgICAgICAgICAgZXJyb3IgPSBcIlRoZSBBdXRob3JpemF0aW9uIGhlYWRlciB3YXMgbWlzc2luZyBvciBpbnZhbGlkLlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBIVFRQUmVzcG9uc2VDb2Rlcy5Gb3JiaWRkZW46XG4gICAgICAgICAgICBlcnJvciA9IFwiVGhlIEF1dGhvcml6YXRpb24gdG9rZW4geW91IHBhc3NlZCBkaWQgbm90IGhhdmUgcGVybWlzc2lvbiB0byB0aGUgcmVzb3VyY2UuXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEhUVFBSZXNwb25zZUNvZGVzLk5vdEZvdW5kOlxuICAgICAgICAgICAgZXJyb3IgPSBcIlRoZSByZXNvdXJjZSBhdCB0aGUgbG9jYXRpb24gc3BlY2lmaWVkIGRvZXNuJ3QgZXhpc3QuXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEhUVFBSZXNwb25zZUNvZGVzLk1ldGhvZE5vdEFsbG93ZWQ6XG4gICAgICAgICAgICBlcnJvciA9IFwiVGhlIEhUVFAgbWV0aG9kIHVzZWQgaXMgbm90IHZhbGlkIGZvciB0aGUgbG9jYXRpb24gc3BlY2lmaWVkLlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBIVFRQUmVzcG9uc2VDb2Rlcy5HYXRld2F5VW5hdmFpbGFibGU6XG4gICAgICAgICAgICBlcnJvciA9IFwiVGhlcmUgd2FzIG5vdCBhIGdhdGV3YXkgYXZhaWxhYmxlIHRvIHByb2Nlc3MgeW91ciByZXF1ZXN0LiBXYWl0IGEgYml0IGFuZCByZXRyeS5cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJlc3QuaW52YWxpZFJlcXVlc3RFcnJvclN0YXR1c2VzLmluY2x1ZGVzKHJlc3BvbnNlLnN0YXR1cykgJiZcbiAgICAgICAgICAhKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5ICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiWC1SYXRlTGltaXQtU2NvcGVcIikpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIElOQ1JFTUVOVCBDVVJSRU5UIElOVkFMSUQgUkVRVUVTVFNcbiAgICAgICAgICArK3Jlc3QuaW52YWxpZFJlcXVlc3RzO1xuXG4gICAgICAgICAgaWYgKCFyZXN0LmludmFsaWRSZXF1ZXN0c1RpbWVvdXRJZCkge1xuICAgICAgICAgICAgcmVzdC5pbnZhbGlkUmVxdWVzdHNUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgcmVzdC5kZWJ1ZyhgW1JFU1QgLSBwcm9jZXNzR2xvYmFsUXVldWVdIFJlc2V0dGluZyBpbnZhbGlkIHJlcXVlc3RzIGNvdW50ZXIgaW4gc2V0VGltZW91dC5gKTtcbiAgICAgICAgICAgICAgcmVzdC5pbnZhbGlkUmVxdWVzdHMgPSAwO1xuICAgICAgICAgICAgICByZXN0LmludmFsaWRSZXF1ZXN0c1RpbWVvdXRJZCA9IDA7XG4gICAgICAgICAgICB9LCByZXN0LmludmFsaWRSZXF1ZXN0c0ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBOT1QgcmF0ZSBsaW1pdGVkIHJlbW92ZSBmcm9tIHF1ZXVlXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDQyOSkge1xuICAgICAgICAgIGxldCBqc29uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlKSB7XG4gICAgICAgICAgICBqc29uID0gSlNPTi5zdHJpbmdpZnkoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVxdWVzdC5yZXF1ZXN0LnJlamVjdCh7XG4gICAgICAgICAgICBvazogZmFsc2UsXG4gICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgYm9keToganNvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocmVxdWVzdC5wYXlsb2FkLnJldHJ5Q291bnQrKyA+PSByZXN0Lm1heFJldHJ5Q291bnQpIHtcbiAgICAgICAgICAgIHJlc3QuZGVidWcoYFtSRVNUIC0gUmV0cmllc01heGVkXSAke0pTT04uc3RyaW5naWZ5KHJlcXVlc3QucGF5bG9hZCl9YCk7XG4gICAgICAgICAgICAvLyBSRU1PVkUgSVRFTSBGUk9NIFFVRVVFIFRPIFBSRVZFTlQgUkVUUllcbiAgICAgICAgICAgIHJlcXVlc3QucmVxdWVzdC5yZWplY3Qoe1xuICAgICAgICAgICAgICBvazogZmFsc2UsXG4gICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICBlcnJvcjogXCJUaGUgcmVxdWVzdCB3YXMgcmF0ZSBsaW1pdGVkIGFuZCBpdCBtYXhlZCBvdXQgdGhlIHJldHJpZXMgbGltaXQuXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdBUyBSQVRFIExJTUlURUQuIFBVU0ggVE8gRU5EIE9GIEdMT0JBTCBRVUVVRSwgU08gV0UgRE9OJ1QgQkxPQ0sgT1RIRVIgUkVRVUVTVFMuXG4gICAgICAgICAgcmVzdC5nbG9iYWxRdWV1ZS5wdXNoKHJlcXVlc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFNPTUVUSU1FUyBESVNDT1JEIFJFVFVSTlMgQU4gRU1QVFkgMjA0IFJFU1BPTlNFIFRIQVQgQ0FOJ1QgQkUgTUFERSBUTyBKU09OXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcbiAgICAgICAgcmVzdC5kZWJ1ZyhgW1JFU1QgLSBGZXRjaFN1Y2Nlc3NdIFVSTDogJHtyZXF1ZXN0LnVybFRvVXNlfSB8ICR7SlNPTi5zdHJpbmdpZnkocmVxdWVzdC5wYXlsb2FkKX1gKTtcbiAgICAgICAgcmVxdWVzdC5yZXF1ZXN0LnJlc3BvbmQoe1xuICAgICAgICAgIG9rOiB0cnVlLFxuICAgICAgICAgIHN0YXR1czogMjA0LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENPTlZFUlQgVEhFIFJFU1BPTlNFIFRPIEpTT05cbiAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgICAgcmVzdC5kZWJ1ZyhgW1JFU1QgLSBmZXRjaFN1Y2Nlc3NdICR7SlNPTi5zdHJpbmdpZnkocmVxdWVzdC5wYXlsb2FkKX1gKTtcbiAgICAgICAgcmVxdWVzdC5yZXF1ZXN0LnJlc3BvbmQoe1xuICAgICAgICAgIG9rOiB0cnVlLFxuICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgIGJvZHk6IGpzb24sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBTT01FVEhJTkcgV0VOVCBXUk9ORywgTE9HIEFORCBSRVNQT05EIFdJVEggRVJST1JcbiAgICAgIHJlc3QuZGVidWcoYFtSRVNUIC0gZmV0Y2hGYWlsZWRdIFBheWxvYWQ6ICR7SlNPTi5zdHJpbmdpZnkocmVxdWVzdC5wYXlsb2FkKX0gfCBFcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgIHJlcXVlc3QucmVxdWVzdC5yZWplY3Qoe1xuICAgICAgICBvazogZmFsc2UsXG4gICAgICAgIHN0YXR1czogNTk5LFxuICAgICAgICBlcnJvcjogXCJJbnRlcm5hbCBQcm94eSBFcnJvclwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQUxMT1cgT1RIRVIgUVVFVUVTIFRPIFNUQVJUIFdIRU4gTkVXIFJFUVVFU1QgSVMgTUFERVxuICByZXN0Lmdsb2JhbFF1ZXVlUHJvY2Vzc2luZyA9IGZhbHNlO1xufVxuIl19