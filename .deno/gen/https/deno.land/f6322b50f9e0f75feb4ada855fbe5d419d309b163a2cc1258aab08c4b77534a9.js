import { fromFileUrl, msgpack } from "./deps.ts";
import { uuid4 } from "./utils.ts";
export class Kwik {
    directoryPath = `${fromFileUrl(Deno.mainModule.substring(0, Deno.mainModule.lastIndexOf("/")))}/db/`;
    tables = new Map();
    msgpackExtensionCodec = new msgpack.ExtensionCodec();
    async init() {
        await Deno.mkdir(this.directoryPath).catch(() => undefined);
        for (const table of this.tables) {
            await Deno.mkdir(`${this.directoryPath}/${table[0]}`).catch(() => undefined);
        }
    }
    async error(...data) {
        console.error(...data);
    }
    uuid4() {
        return uuid4();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3dpay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImt3aWsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVuQyxNQUFNLE9BQU8sSUFBSTtJQUNSLGFBQWEsR0FBRyxHQUNyQixXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQzVFLE1BQU0sQ0FBQztJQUNBLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBOEIsQ0FBQztJQUMvQyxxQkFBcUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUc1RCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMvQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUMvRCxTQUFTLENBQ1YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUdELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBR0QsS0FBSztRQUNILE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS3dpa1RhYmxlIH0gZnJvbSBcIi4vdGFibGUudHNcIjtcbmltcG9ydCB7IGZyb21GaWxlVXJsLCBtc2dwYWNrIH0gZnJvbSBcIi4vZGVwcy50c1wiO1xuaW1wb3J0IHsgdXVpZDQgfSBmcm9tIFwiLi91dGlscy50c1wiO1xuXG5leHBvcnQgY2xhc3MgS3dpayB7XG4gIHB1YmxpYyBkaXJlY3RvcnlQYXRoID0gYCR7XG4gICAgZnJvbUZpbGVVcmwoRGVuby5tYWluTW9kdWxlLnN1YnN0cmluZygwLCBEZW5vLm1haW5Nb2R1bGUubGFzdEluZGV4T2YoXCIvXCIpKSlcbiAgfS9kYi9gO1xuICBwdWJsaWMgdGFibGVzID0gbmV3IE1hcDxzdHJpbmcsIEt3aWtUYWJsZTx1bmtub3duPj4oKTtcbiAgcHVibGljIG1zZ3BhY2tFeHRlbnNpb25Db2RlYyA9IG5ldyBtc2dwYWNrLkV4dGVuc2lvbkNvZGVjKCk7XG5cbiAgLyoqIEluaXRpYWxpemVzIGFsbCB0aGUgdGFibGVzICoqL1xuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IERlbm8ubWtkaXIodGhpcy5kaXJlY3RvcnlQYXRoKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuXG4gICAgZm9yIChjb25zdCB0YWJsZSBvZiB0aGlzLnRhYmxlcykge1xuICAgICAgYXdhaXQgRGVuby5ta2RpcihgJHt0aGlzLmRpcmVjdG9yeVBhdGh9LyR7dGFibGVbMF19YCkuY2F0Y2goKCkgPT5cbiAgICAgICAgdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlbm8tbGludC1pZ25vcmUgbm8tZXhwbGljaXQtYW55IHJlcXVpcmUtYXdhaXRcbiAgYXN5bmMgZXJyb3IoLi4uZGF0YTogYW55W10pIHtcbiAgICBjb25zb2xlLmVycm9yKC4uLmRhdGEpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYSBVVUlEIFY0IHN0cmluZyAqKi9cbiAgdXVpZDQoKSB7XG4gICAgcmV0dXJuIHV1aWQ0KCk7XG4gIH1cbn1cbiJdfQ==