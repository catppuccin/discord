import { readdir, readFile, writeFile } from "node:fs/promises";
import pLimit from "p-limit";

const html = await fetch("https://discord.com/app").then((res) => res.text());
const originalCSSURL = new URL(
  html.match(/<link rel="stylesheet" href="([/a-zA-Z0-9\.]+)"/)[1],
  "https://discord.com/"
).toString();
const originalCSS = await fetch(originalCSSURL).then((res) => res.text());

const classNameRegex = /\.([a-zA-Z-]+)\-[a-zA-Z0-9\_\-]{6}(?=(\.|,|\{|\[))/g;
const classNameMap = new Map();

[...originalCSS.matchAll(classNameRegex)].forEach((v) => {
  classNameMap.set(v[1], v[0].substring(1, v[0].length - 1));
});

console.log(`${classNameMap.size} class names found`);

const lim = pLimit(10);

await Promise.all(
  (
    await readdir("dist/dist/")
  ).map((file, idx) => {
    lim(async () => {
      const themeCSS = await readFile(`dist/dist/${file}`, {
        encoding: "utf-8",
      });

      let newThemeCSS = themeCSS;

      for (const key of classNameMap.keys()) {
        newThemeCSS = newThemeCSS.replaceAll(
          `.mapped-${key}`,
          `.${classNameMap.get(key)}`
        );
      }

      const remainingMatches = [
        ...newThemeCSS.matchAll(/\.mapped\-([a-zA-Z]+)/g),
      ];

      if (remainingMatches.length > 0) {
        console.warn(
          "Unresolved class named found!",
          remainingMatches.map((k) => k[1])
        );
      }

      await writeFile(`dist/dist/${file}`, newThemeCSS);
      console.log(`Processed ${file}`);
    });
  })
);
