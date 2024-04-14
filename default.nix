{ stdenv
, lib
, mkYarnModules
, runCommand
, nodejs
, yarn
  # Install all themes by default
  # Each theme is specified as "<variant>[-<accent>]"
, themesToInstall ? [ ]
}:

let
  inherit (builtins) length;
  inherit (lib) head concatStringsSep;

  matchTheme =
    if themesToInstall == [ ] then "*"
    else if length themesToInstall == 1 then head themesToInstall
    else "{${concatStringsSep "," themesToInstall}}";
in

stdenv.mkDerivation rec {
  pname = "catppuccin-discord";
  version = "unstable"; # Not versioned

  src = ./.;

  nodeModules = mkYarnModules {
    pname = "catppuccin-discord-node-modules";
    version = "unstable";

    packageJSON = src + "/package.json";
    yarnLock = src + "/yarn.lock";
  };

  nativeBuildInputs = [ nodejs yarn ];

  buildPhase = ''
    runHook preBuild

    export HOME=$(mktemp -d)
    ln -s "$nodeModules/node_modules" node_modules
    yarn --offline release

    runHook postBuild
  '';

  # Stop yarn from trying to build a binary in distPhase
  distPhase = "true";

  installPhase = ''
    runHook preInstall

    mkdir -p "$out/share/catppuccin-discord"
    cp dist/dist/catppuccin-${matchTheme}.theme.css $out/share/catppuccin-discord

    runHook postInstall
  '';

  meta = with lib; {
    description = "Soothing pastel theme for Discord";
    homepage = "https://github.com/catppuccin/discord";
    license = licenses.mit;
    maintainers = with maintainers; [ weathercold ];
    platforms = platforms.all;
    sourceProvenance = with sourceTypes; [ fromSource ];
  };
}
