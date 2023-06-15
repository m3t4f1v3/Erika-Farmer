{ pkgs }: {
    deps = [
        pkgs.unixtools.xxd
        pkgs.fish
        pkgs.nodejs
        pkgs.htop
        pkgs.wget
        pkgs.nano
        pkgs.deno
    ];
}