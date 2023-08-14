{ pkgs }: {
    deps = [
        pkgs.unzip
        pkgs.unixtools.xxd
        pkgs.fish
        pkgs.nodejs
        pkgs.htop
        pkgs.wget
        pkgs.nano
    ];
}