const fs = require("fs");
const path = require("path");

const TOTAL_NFTS = 4200; // change if needed
const BASE_IMAGE = path.join(__dirname, "base.png");
const OUTPUT_DIR = path.join(__dirname, "output");

// Create output folder if missing
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

console.log("📁 Generating image copies...");

for (let i = 0; i < TOTAL_NFTS; i++) {
  const targetPath = path.join(OUTPUT_DIR, `${i}.png`);
  fs.copyFileSync(BASE_IMAGE, targetPath);
}

console.log("✅ Done! Images created in /output folder.");
