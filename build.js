import fs from "fs";
import path from "path";
import sass from "sass";

import { flavorEntries } from "@catppuccin/palette";

const DEFAULT_ACCENT = "blue";

fs.rmSync("dist/", { recursive: true, force: true });
fs.mkdirSync("dist/dist/", { recursive: true });

for (const [flavor, { colorEntries }] of flavorEntries) {
  const src = `src/catppuccin-${flavor}.theme.scss`;
  const contents = fs.readFileSync(src, "utf-8");

  for (const [accent, { hex }] of colorEntries.filter(
    ([_, { accent }]) => accent
  )) {
    const { css } = sass.compileString(`$brand: ${hex};\n` + contents, {
      style: "compressed",
      loadPaths: ["node_modules/", "src/"],
    });

    fs.writeFileSync(`dist/dist/catppuccin-${flavor}-${accent}.theme.css`, css);
    if (accent === DEFAULT_ACCENT) {
      fs.writeFileSync(`dist/dist/catppuccin-${flavor}.theme.css`, css);
    }
  }
}
