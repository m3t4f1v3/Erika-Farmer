import { API_VERSION, BASE_URL, baseEndpoints } from "../util/constants.ts";
export async function runMethod(rest, method, route, body, options) {
    rest.debug(`[REST - RequestCreate] Method: ${method} | URL: ${route} | Retry Count: ${options?.retryCount ?? 0} | Bucket ID: ${options?.bucketId} | Body: ${JSON.stringify(body)}`);
    const errorStack = new Error("Location:");
    Error.captureStackTrace(errorStack);
    if (!baseEndpoints.BASE_URL.startsWith(BASE_URL) && route[0] === "/") {
        const result = await fetch(`${baseEndpoints.BASE_URL}${route}`, {
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                Authorization: rest.secretKey,
                "Content-Type": "application/json",
            },
            method,
        }).catch((error) => {
            errorStack.message = error?.message;
            console.error(error);
            throw errorStack;
        });
        if (!result.ok) {
            errorStack.message = result.statusText;
            console.error(`Error: ${errorStack.message}`);
            throw errorStack;
        }
        return result.status !== 204 ? await result.json() : undefined;
    }
    return new Promise((resolve, reject) => {
        rest.processRequest(rest, {
            url: route[0] === "/" ? `${BASE_URL}/v${API_VERSION}${route}` : route,
            method,
            reject: (data) => {
                const restError = rest.convertRestError(errorStack, data);
                reject(restError);
            },
            respond: (data) => resolve(data.status !== 204 ? JSON.parse(data.body ?? "{}") : undefined),
        }, {
            bucketId: options?.bucketId,
            body: body,
            retryCount: options?.retryCount ?? 0,
            headers: options?.headers,
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuTWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicnVuTWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBa0IsTUFBTSxzQkFBc0IsQ0FBQztBQUc1RixNQUFNLENBQUMsS0FBSyxVQUFVLFNBQVMsQ0FDN0IsSUFBaUIsRUFDakIsTUFBbUQsRUFDbkQsS0FBYSxFQUNiLElBQWMsRUFDZCxPQUlDO0lBRUQsSUFBSSxDQUFDLEtBQUssQ0FDUixrQ0FBa0MsTUFBTSxXQUFXLEtBQUssbUJBQ3RELE9BQU8sRUFBRSxVQUFVLElBQUksQ0FDekIsaUJBQWlCLE9BQU8sRUFBRSxRQUFRLFlBQ2hDLElBQUksQ0FBQyxTQUFTLENBQ1osSUFBSSxDQUVSLEVBQUUsQ0FDSCxDQUFDO0lBRUYsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFMUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBR3BDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ3BFLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUM5RCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzdDLE9BQU8sRUFBRTtnQkFDUCxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQzdCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRCxNQUFNO1NBQ1AsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxPQUFPLEdBQUksS0FBZSxFQUFFLE9BQU8sQ0FBQztZQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sVUFBVSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDZCxVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUE4QixDQUFDO1lBQzNELE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM5QyxNQUFNLFVBQVUsQ0FBQztTQUNsQjtRQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7S0FDaEU7SUFHRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQ2pCLElBQUksRUFDSjtZQUNFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsS0FBSyxXQUFXLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDckUsTUFBTTtZQUNOLE1BQU0sRUFBRSxDQUFDLElBQTBCLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BCLENBQUM7WUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUF5QixFQUFFLEVBQUUsQ0FDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLFNBQTBCLENBQUM7U0FDN0YsRUFDRDtZQUNFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUTtZQUMzQixJQUFJLEVBQUUsSUFBMkM7WUFDakQsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLElBQUksQ0FBQztZQUNwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU87U0FDMUIsQ0FDRixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzdE1hbmFnZXIgfSBmcm9tIFwiLi4vYm90LnRzXCI7XG5pbXBvcnQgeyBBUElfVkVSU0lPTiwgQkFTRV9VUkwsIGJhc2VFbmRwb2ludHMsIElNQUdFX0JBU0VfVVJMIH0gZnJvbSBcIi4uL3V0aWwvY29uc3RhbnRzLnRzXCI7XG5pbXBvcnQgeyBSZXN0UmVxdWVzdFJlamVjdGlvbiwgUmVzdFJlcXVlc3RSZXNwb25zZSB9IGZyb20gXCIuL3Jlc3QudHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bk1ldGhvZDxUID0gYW55PihcbiAgcmVzdDogUmVzdE1hbmFnZXIsXG4gIG1ldGhvZDogXCJHRVRcIiB8IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiREVMRVRFXCIgfCBcIlBBVENIXCIsXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGJvZHk/OiB1bmtub3duLFxuICBvcHRpb25zPzoge1xuICAgIHJldHJ5Q291bnQ/OiBudW1iZXI7XG4gICAgYnVja2V0SWQ/OiBzdHJpbmc7XG4gICAgaGVhZGVycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIH0sXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmVzdC5kZWJ1ZyhcbiAgICBgW1JFU1QgLSBSZXF1ZXN0Q3JlYXRlXSBNZXRob2Q6ICR7bWV0aG9kfSB8IFVSTDogJHtyb3V0ZX0gfCBSZXRyeSBDb3VudDogJHtcbiAgICAgIG9wdGlvbnM/LnJldHJ5Q291bnQgPz8gMFxuICAgIH0gfCBCdWNrZXQgSUQ6ICR7b3B0aW9ucz8uYnVja2V0SWR9IHwgQm9keTogJHtcbiAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICBib2R5LFxuICAgICAgKVxuICAgIH1gLFxuICApO1xuXG4gIGNvbnN0IGVycm9yU3RhY2sgPSBuZXcgRXJyb3IoXCJMb2NhdGlvbjpcIik7XG4gIC8vIEB0cy1pZ25vcmUgQnJlYWtzIGRlbm8gZGVwbG95LiBMdWNhIHNhaWQgYWRkIHRzLWlnbm9yZSB1bnRpbCBpdCdzIGZpeGVkXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGVycm9yU3RhY2spO1xuXG4gIC8vIEZvciBwcm94aWVzIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55IG9mIHRoZSBsZWd3b3JrIHNvIHdlIGp1c3QgZm9yd2FyZCB0aGUgcmVxdWVzdFxuICBpZiAoIWJhc2VFbmRwb2ludHMuQkFTRV9VUkwuc3RhcnRzV2l0aChCQVNFX1VSTCkgJiYgcm91dGVbMF0gPT09IFwiL1wiKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZUVuZHBvaW50cy5CQVNFX1VSTH0ke3JvdXRlfWAsIHtcbiAgICAgIGJvZHk6IGJvZHkgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IHVuZGVmaW5lZCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogcmVzdC5zZWNyZXRLZXksXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZCxcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yU3RhY2subWVzc2FnZSA9IChlcnJvciBhcyBFcnJvcik/Lm1lc3NhZ2U7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yU3RhY2s7XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgZXJyb3JTdGFjay5tZXNzYWdlID0gcmVzdWx0LnN0YXR1c1RleHQgYXMgRXJyb3JbXCJtZXNzYWdlXCJdO1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6ICR7ZXJyb3JTdGFjay5tZXNzYWdlfWApO1xuICAgICAgdGhyb3cgZXJyb3JTdGFjaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gMjA0ID8gYXdhaXQgcmVzdWx0Lmpzb24oKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIE5vIHByb3h5IHNvIHdlIG5lZWQgdG8gaGFuZGxlIGFsbCByYXRlIGxpbWl0aW5nIGFuZCBzdWNoXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzdC5wcm9jZXNzUmVxdWVzdChcbiAgICAgIHJlc3QsXG4gICAgICB7XG4gICAgICAgIHVybDogcm91dGVbMF0gPT09IFwiL1wiID8gYCR7QkFTRV9VUkx9L3Yke0FQSV9WRVJTSU9OfSR7cm91dGV9YCA6IHJvdXRlLFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHJlamVjdDogKGRhdGE6IFJlc3RSZXF1ZXN0UmVqZWN0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzdEVycm9yID0gcmVzdC5jb252ZXJ0UmVzdEVycm9yKGVycm9yU3RhY2ssIGRhdGEpO1xuICAgICAgICAgIHJlamVjdChyZXN0RXJyb3IpO1xuICAgICAgICB9LFxuICAgICAgICByZXNwb25kOiAoZGF0YTogUmVzdFJlcXVlc3RSZXNwb25zZSkgPT5cbiAgICAgICAgICByZXNvbHZlKGRhdGEuc3RhdHVzICE9PSAyMDQgPyBKU09OLnBhcnNlKGRhdGEuYm9keSA/PyBcInt9XCIpIDogKHVuZGVmaW5lZCBhcyB1bmtub3duIGFzIFQpKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJ1Y2tldElkOiBvcHRpb25zPy5idWNrZXRJZCxcbiAgICAgICAgYm9keTogYm9keSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZCxcbiAgICAgICAgcmV0cnlDb3VudDogb3B0aW9ucz8ucmV0cnlDb3VudCA/PyAwLFxuICAgICAgICBoZWFkZXJzOiBvcHRpb25zPy5oZWFkZXJzLFxuICAgICAgfSxcbiAgICApO1xuICB9KTtcbn1cbiJdfQ==