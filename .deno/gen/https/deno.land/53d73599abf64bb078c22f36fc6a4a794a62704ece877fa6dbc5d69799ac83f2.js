/**
 * Credits: github.com/abalabahaha/eris lib/rest/RequestHandler.js#L397
 * Modified for our use-case
 */ /** Split a url to separate rate limit buckets based on major/minor parameters. */ export function simplifyUrl(url, method) {
    let route = url.replace(/\/([a-z-]+)\/(?:[0-9]{17,19})/g, function(match, p) {
        return [
            "channels",
            "guilds"
        ].includes(p) ? match : `/${p}/skillzPrefersID`;
    }).replace(/\/reactions\/[^/]+/g, "/reactions/skillzPrefersID");
    // GENERAL /reactions and /reactions/emoji/@me share the buckets
    if (route.includes("/reactions")) {
        route = route.substring(0, route.indexOf("/reactions") + "/reactions".length);
    }
    // Delete Message endpoint has its own rate limit
    if (method === "DELETE" && route.endsWith("/messages/skillzPrefersID")) {
        route = method + route;
    }
    return route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWRpdHM6IGdpdGh1Yi5jb20vYWJhbGFiYWhhaGEvZXJpcyBsaWIvcmVzdC9SZXF1ZXN0SGFuZGxlci5qcyNMMzk3XG4gKiBNb2RpZmllZCBmb3Igb3VyIHVzZS1jYXNlXG4gKi9cblxuLyoqIFNwbGl0IGEgdXJsIHRvIHNlcGFyYXRlIHJhdGUgbGltaXQgYnVja2V0cyBiYXNlZCBvbiBtYWpvci9taW5vciBwYXJhbWV0ZXJzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsaWZ5VXJsKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZykge1xuICBsZXQgcm91dGUgPSB1cmxcbiAgICAucmVwbGFjZSgvXFwvKFthLXotXSspXFwvKD86WzAtOV17MTcsMTl9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHApIHtcbiAgICAgIHJldHVybiBbXCJjaGFubmVsc1wiLCBcImd1aWxkc1wiXS5pbmNsdWRlcyhwKSA/IG1hdGNoIDogYC8ke3B9L3NraWxselByZWZlcnNJRGA7XG4gICAgfSlcbiAgICAucmVwbGFjZSgvXFwvcmVhY3Rpb25zXFwvW14vXSsvZywgXCIvcmVhY3Rpb25zL3NraWxselByZWZlcnNJRFwiKTtcblxuICAvLyBHRU5FUkFMIC9yZWFjdGlvbnMgYW5kIC9yZWFjdGlvbnMvZW1vamkvQG1lIHNoYXJlIHRoZSBidWNrZXRzXG4gIGlmIChyb3V0ZS5pbmNsdWRlcyhcIi9yZWFjdGlvbnNcIikpIHtcbiAgICByb3V0ZSA9IHJvdXRlLnN1YnN0cmluZygwLCByb3V0ZS5pbmRleE9mKFwiL3JlYWN0aW9uc1wiKSArIFwiL3JlYWN0aW9uc1wiLmxlbmd0aCk7XG4gIH1cblxuICAvLyBEZWxldGUgTWVzc2FnZSBlbmRwb2ludCBoYXMgaXRzIG93biByYXRlIGxpbWl0XG4gIGlmIChtZXRob2QgPT09IFwiREVMRVRFXCIgJiYgcm91dGUuZW5kc1dpdGgoXCIvbWVzc2FnZXMvc2tpbGx6UHJlZmVyc0lEXCIpKSB7XG4gICAgcm91dGUgPSBtZXRob2QgKyByb3V0ZTtcbiAgfVxuXG4gIHJldHVybiByb3V0ZTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7R0FHRyxDQUVILGtGQUFrRixDQUNsRixPQUFPLFNBQVMsV0FBVyxDQUFDLEdBQVcsRUFBRSxNQUFjLEVBQUU7SUFDdkQsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUNaLE9BQU8sbUNBQW1DLFNBQVUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM3RCxPQUFPO1lBQUMsVUFBVTtZQUFFLFFBQVE7U0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDN0UsQ0FBQyxDQUNELE9BQU8sd0JBQXdCLDRCQUE0QixDQUFDLEFBQUM7SUFFaEUsZ0VBQWdFO0lBQ2hFLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUNoQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0U7SUFFRCxpREFBaUQ7SUFDakQsSUFBSSxNQUFNLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsRUFBRTtRQUN0RSxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUN4QjtJQUVELE9BQU8sS0FBSyxDQUFDO0NBQ2QifQ==