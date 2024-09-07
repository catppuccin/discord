import fs from "fs/promises";
import path from "path";
import sass from "sass";

import { flavorEntries } from "@catppuccin/palette";

const DEFAULT_ACCENT = "blue";

await fs.rm("dist/", { recursive: true, force: true });
await fs.mkdir("dist/");

for (const [flavor, { colorEntries }] of flavorEntries) {
  const src = `src/catppuccin-${flavor}.theme.scss`;
  const contents = await fs.readFile(src, "utf-8");

  for (const [accent, { hex }] of colorEntries.filter(
    ([_, { accent }]) => accent
  )) {
    const { css } = sass.compileString(`$brand: ${hex};\n` + contents, {
      style: "compressed",
      loadPaths: ["node_modules/", "src/"],
    });

    await fs.writeFile(`dist/catppuccin-${flavor}-${accent}.theme.scss`, css);
    if (accent === DEFAULT_ACCENT) {
      await fs.writeFile(`dist/catppuccin-${flavor}.theme.scss`, css);
    }
  }
}
