import fs from "fs/promises";
import path from "path";
import sass from "sass";

import { flavorEntries } from "@catppuccin/palette";

const DEFAULT_ACCENT = "blue";

await fs.rm("dist/", { recursive: true, force: true });
await fs.mkdir("dist/dist/", { recursive: true });
await Promise.all(
  flavorEntries.map(async ([flavor, { colorEntries }]) => {
    const src = `src/catppuccin-${flavor}.theme.scss`;
    const contents = await fs.readFile(src, "utf-8");

    await Promise.all(
      colorEntries.map(async ([accent, { hex, accent: isAccent }]) => {
        if (isAccent) {
          return;
        }
        const { css } = sass.compileString(`$brand: ${hex};\n` + contents, {
          style: "compressed",
          loadPaths: ["node_modules/", "src/"],
        });

        await fs.writeFile(
          `dist/dist/catppuccin-${flavor}-${accent}.theme.css`,
          css
        );
        if (accent === DEFAULT_ACCENT) {
          await fs.writeFile(`dist/dist/catppuccin-${flavor}.theme.css`, css);
        }
      })
    );
  })
);
