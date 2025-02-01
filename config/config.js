const fs = require("fs");
const path = require("path");

const configPath = path.join(__dirname, "./config.json");

let config = {};

try {
    const rawData = fs.readFileSync(configPath, "utf8");
    config = JSON.parse(rawData);
} catch (error) {
    console.error("Failed to load config.json:", error);
}

module.exports = config;
