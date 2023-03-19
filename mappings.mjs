import { readdir, readFile, writeFile } from "node:fs/promises";
import pLimit from "p-limit";

/**
 * winston
 * @param {string} url
 */
const fetchThatCrashes = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching ${url}: ${res.status} ${res.statusText}`);
  }

  return res.text();
};

const html = await fetchThatCrashes("https://discord.com/app");
const originalCSSURL = new URL(
  html.match(/<link rel="stylesheet" href="([/a-zA-Z0-9\.]+)"/)[1],
  "https://discord.com/"
).toString();
const originalCSS = await fetchThatCrashes(originalCSSURL);

const classNameRegex =
  /\.([a-zA-Z0-9\-]+)\-[a-zA-Z0-9\_\-]{6}(?=(\.|,|\{|\[| |:|\)))/g;
const classNameMap = new Map();

[...originalCSS.matchAll(classNameRegex)].forEach((v) => {
  const mappedClass = v[0].substring(1, v[0].length - 1);

  if (!classNameMap.has(v[1])) classNameMap.set(v[1], new Set([mappedClass]));
  else classNameMap.get(v[1]).add(mappedClass);
});

console.log(`${classNameMap.size} class names found`);

const lim = pLimit(10);

await Promise.all(
  (
    await readdir("dist/dist/")
  ).map((file) => {
    lim(async () => {
      const themeCSS = await readFile(`dist/dist/${file}`, {
        encoding: "utf-8",
      });

      let newThemeCSS = themeCSS;

      for (const key of classNameMap.keys()) {
        const hashedClasses = classNameMap.get(key);

        newThemeCSS = newThemeCSS.replaceAll(
          new RegExp(`\\.mapped\\-${key}(?=(\\.|,|\\{|\\[| |:|\\)))`, "g"),
          hashedClasses.size > 5
            ? `[class*=${key}-]`
            : [...hashedClasses].map((k) => `.${k}`).join(", ")
        );
      }

      const remainingMatches = [
        ...newThemeCSS.matchAll(/\.mapped\-([a-zA-Z]+)/g),
      ];

      if (remainingMatches.length > 0) {
        console.warn(
          "Unresolved class names found!",
          remainingMatches.map((k) => k[1])
        );
      }

      await writeFile(`dist/dist/${file}`, newThemeCSS);
      console.log(`Processed ${file}`);
    });
  })
);
