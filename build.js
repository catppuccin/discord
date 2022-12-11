const fs = require("fs").promises;
const path = require("path");

const sourceFiles = [
  "src/catppuccin-frappe.theme.scss",
  "src/catppuccin-latte.theme.scss",
  "src/catppuccin-macchiato.theme.scss",
  "src/catppuccin-mocha.theme.scss",
];

const accents = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender",
];

(async () => {
  await Promise.all(sourceFiles.map(generateAccents));
  console.log("Generated all accents for all flavours");
})();

// read sourceFile and generate all accents for it
async function generateAccents(sourceFilePath) {
  const _sourceFilePath = path.join(__dirname, sourceFilePath);
  const sourceFileData = await fs.readFile(_sourceFilePath, {
    encoding: "utf8",
  });
  return Promise.all(
    accents.map((accent) =>
      generateAccent(sourceFileData, sourceFilePath, accent)
    )
  );
}

// replace brand and write to separate file
async function generateAccent(sourceFileData, sourceFilePath, accent) {
  const modifiedFileContent = sourceFileData.replace(
    /\$brand: .*;/gm,
    `$brand: \$${accent};`
  );
  const outputFileName = sourceFilePath
    .split(".")
    .map((s, i) => (i === 0 ? s.concat(`-${accent}`) : s))
    .join(".");
  const outputFilePath = path.join(__dirname, outputFileName);
  await fs.writeFile(outputFilePath, modifiedFileContent);
  console.log(`Generated: ${outputFileName}`);
}
