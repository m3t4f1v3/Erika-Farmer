export function transformEmbed(bot, payload) {
    const embed = {
        title: payload.title,
        type: payload.type,
        description: payload.description,
        url: payload.url,
        timestamp: payload.timestamp ? Date.parse(payload.timestamp) : undefined,
        color: payload.color,
        footer: payload.footer
            ? {
                text: payload.footer.text,
                iconUrl: payload.footer.icon_url,
                proxyIconUrl: payload.footer.proxy_icon_url,
            }
            : undefined,
        image: payload.image
            ? {
                url: payload.image.url,
                proxyUrl: payload.image.proxy_url,
                height: payload.image.height,
                width: payload.image.width,
            }
            : undefined,
        thumbnail: payload.thumbnail
            ? {
                url: payload.thumbnail.url,
                proxyUrl: payload.thumbnail.proxy_url,
                height: payload.thumbnail.height,
                width: payload.thumbnail.width,
            }
            : undefined,
        video: payload.video
            ? {
                url: payload.video.url,
                proxyUrl: payload.video.proxy_url,
                height: payload.video.height,
                width: payload.video.width,
            }
            : undefined,
        provider: payload.provider,
        author: payload.author
            ? {
                name: payload.author.name,
                url: payload.author.url,
                iconUrl: payload.author.icon_url,
                proxyIconUrl: payload.author.proxy_icon_url,
            }
            : undefined,
        fields: payload.fields,
    };
    return embed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbWJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLFVBQVUsY0FBYyxDQUFDLEdBQVEsRUFBRSxPQUFxQjtJQUM1RCxNQUFNLEtBQUssR0FBRztRQUNaLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1FBQ2hDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztRQUNoQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUNwQixDQUFDLENBQUM7Z0JBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDekIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDaEMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYzthQUM1QztZQUNELENBQUMsQ0FBQyxTQUFTO1FBQ2IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ2xCLENBQUMsQ0FBQztnQkFDQSxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUN0QixRQUFRLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUNqQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO2dCQUM1QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQzNCO1lBQ0QsQ0FBQyxDQUFDLFNBQVM7UUFDYixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDMUIsQ0FBQyxDQUFDO2dCQUNBLEdBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7Z0JBQzFCLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVM7Z0JBQ3JDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ2hDLEtBQUssRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7YUFDL0I7WUFDRCxDQUFDLENBQUMsU0FBUztRQUNiLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNsQixDQUFDLENBQUM7Z0JBQ0EsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRztnQkFDdEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDakMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTTtnQkFDNUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSzthQUMzQjtZQUNELENBQUMsQ0FBQyxTQUFTO1FBQ2IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUNwQixDQUFDLENBQUM7Z0JBQ0EsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDekIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRztnQkFDdkIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDaEMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYzthQUM1QztZQUNELENBQUMsQ0FBQyxTQUFTO1FBQ2IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO0tBQ3ZCLENBQUM7SUFFRixPQUFPLEtBQWtDLENBQUM7QUFDNUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdCB9IGZyb20gXCIuLi9ib3QudHNcIjtcbmltcG9ydCB7IERpc2NvcmRFbWJlZCB9IGZyb20gXCIuLi90eXBlcy9kaXNjb3JkLnRzXCI7XG5pbXBvcnQgeyBPcHRpb25hbGl6ZSB9IGZyb20gXCIuLi90eXBlcy9zaGFyZWQudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUVtYmVkKGJvdDogQm90LCBwYXlsb2FkOiBEaXNjb3JkRW1iZWQpIHtcbiAgY29uc3QgZW1iZWQgPSB7XG4gICAgdGl0bGU6IHBheWxvYWQudGl0bGUsXG4gICAgdHlwZTogcGF5bG9hZC50eXBlLFxuICAgIGRlc2NyaXB0aW9uOiBwYXlsb2FkLmRlc2NyaXB0aW9uLFxuICAgIHVybDogcGF5bG9hZC51cmwsXG4gICAgdGltZXN0YW1wOiBwYXlsb2FkLnRpbWVzdGFtcCA/IERhdGUucGFyc2UocGF5bG9hZC50aW1lc3RhbXApIDogdW5kZWZpbmVkLFxuICAgIGNvbG9yOiBwYXlsb2FkLmNvbG9yLFxuICAgIGZvb3RlcjogcGF5bG9hZC5mb290ZXJcbiAgICAgID8ge1xuICAgICAgICB0ZXh0OiBwYXlsb2FkLmZvb3Rlci50ZXh0LFxuICAgICAgICBpY29uVXJsOiBwYXlsb2FkLmZvb3Rlci5pY29uX3VybCxcbiAgICAgICAgcHJveHlJY29uVXJsOiBwYXlsb2FkLmZvb3Rlci5wcm94eV9pY29uX3VybCxcbiAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIGltYWdlOiBwYXlsb2FkLmltYWdlXG4gICAgICA/IHtcbiAgICAgICAgdXJsOiBwYXlsb2FkLmltYWdlLnVybCxcbiAgICAgICAgcHJveHlVcmw6IHBheWxvYWQuaW1hZ2UucHJveHlfdXJsLFxuICAgICAgICBoZWlnaHQ6IHBheWxvYWQuaW1hZ2UuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogcGF5bG9hZC5pbWFnZS53aWR0aCxcbiAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHRodW1ibmFpbDogcGF5bG9hZC50aHVtYm5haWxcbiAgICAgID8ge1xuICAgICAgICB1cmw6IHBheWxvYWQudGh1bWJuYWlsLnVybCxcbiAgICAgICAgcHJveHlVcmw6IHBheWxvYWQudGh1bWJuYWlsLnByb3h5X3VybCxcbiAgICAgICAgaGVpZ2h0OiBwYXlsb2FkLnRodW1ibmFpbC5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBwYXlsb2FkLnRodW1ibmFpbC53aWR0aCxcbiAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHZpZGVvOiBwYXlsb2FkLnZpZGVvXG4gICAgICA/IHtcbiAgICAgICAgdXJsOiBwYXlsb2FkLnZpZGVvLnVybCxcbiAgICAgICAgcHJveHlVcmw6IHBheWxvYWQudmlkZW8ucHJveHlfdXJsLFxuICAgICAgICBoZWlnaHQ6IHBheWxvYWQudmlkZW8uaGVpZ2h0LFxuICAgICAgICB3aWR0aDogcGF5bG9hZC52aWRlby53aWR0aCxcbiAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHByb3ZpZGVyOiBwYXlsb2FkLnByb3ZpZGVyLFxuICAgIGF1dGhvcjogcGF5bG9hZC5hdXRob3JcbiAgICAgID8ge1xuICAgICAgICBuYW1lOiBwYXlsb2FkLmF1dGhvci5uYW1lLFxuICAgICAgICB1cmw6IHBheWxvYWQuYXV0aG9yLnVybCxcbiAgICAgICAgaWNvblVybDogcGF5bG9hZC5hdXRob3IuaWNvbl91cmwsXG4gICAgICAgIHByb3h5SWNvblVybDogcGF5bG9hZC5hdXRob3IucHJveHlfaWNvbl91cmwsXG4gICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBmaWVsZHM6IHBheWxvYWQuZmllbGRzLFxuICB9O1xuXG4gIHJldHVybiBlbWJlZCBhcyBPcHRpb25hbGl6ZTx0eXBlb2YgZW1iZWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkIGV4dGVuZHMgUmV0dXJuVHlwZTx0eXBlb2YgdHJhbnNmb3JtRW1iZWQ+IHt9XG4iXX0=