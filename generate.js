const fs = require("fs");
const path = require("path");

// ===== CONFIG =====
const TOTAL_NFTS = 4200;

// Your Solana creator address
const CREATOR_ADDRESS = "7qeCuMQUVhxfncxddC3A1SYQ4JnDhxJBBcrxhKDzfbs";

// Folder to save output
const OUTPUT_DIR = path.join(__dirname, "output");

// Make sure output folder exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

console.log(`Generating ${TOTAL_NFTS} JSON files...`);

for (let i = 0; i < TOTAL_NFTS; i++) {
  const metadata = {
    name: `Gaia’s Spark #${i}`,
    symbol: "GAO",
    description:
      "In stillness, the Deiatic God stirred. Not to rule, but to begin. This is the first light — a single Spark that awakens Gaia. Only 4,200 souls shall bear this mark.",
    seller_fee_basis_points: 500,
    image: `${i}.jpg`,
    attributes: [
      { trait_type: "Custom Name Enabled", value: "No" },
      { trait_type: "Custom Name", value: "" }
    ],
    collection: {
      name: "Gaia Project",
      family: "Geneans"
    },
    properties: {
      files: [
        {
          uri: `${i}.jpg`,
          type: "image/jpg"
        }
      ],
      category: "image",
      creators: [
        {
          address: CREATOR_ADDRESS,
          share: 100
        }
      ]
    }
  };

  const filePath = path.join(OUTPUT_DIR, `${i}.json`);
  fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2));
}

console.log("✅ Finished! JSON files generated in /output");
