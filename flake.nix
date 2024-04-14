{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      forAllSystems = nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed;
    in
    {
      packages = forAllSystems (system:
        let pkgs = nixpkgs.legacyPackages.${system}; in rec {
          default = catppuccin-discord;
          catppuccin-discord = pkgs.callPackage ./. { };
        });

      overlays = rec {
        default = catppuccin-discord;
        catppuccin-discord = final: _prev: {
          catppuccin-discord = final.callPackage ./. { };
        };
      };

      devShells = forAllSystems (system:
        let pkgs = nixpkgs.legacyPackages.${system}; in {
          default = import ./shell.nix { inherit pkgs; };
        });
    };
}
