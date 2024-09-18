const { exec } = require("child_process");
const { glob } = require("glob");
const fs = require("fs");
const path = require("path");

// Minify all JS files in the src folder and its subdirectories
const run = async () => {
  const jsFiles = await glob("src/**/*.js", { ignore: "node_modules/**" });

  if (jsFiles.length === 0) {
    console.log("No JS files found.");
    return;
  }

  console.log("Files to be minified:", jsFiles);

  // Minify each file using terser
  jsFiles.forEach((file) => {
    const outputFileName = file
      .replace("src/", "dist/")
      .replace(".js", ".min.js");
    const outputDir = path.dirname(outputFileName);

    // Ensure the directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const command = `terser ${file} --compress --mangle --output ${outputFileName}`;

    console.log(`Minifying ${file}...`);

    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error minifying ${file}:`, err);
        return;
      }
      console.log(`${file} has been minified and saved as ${outputFileName}`);
    });
  });
};

run();
