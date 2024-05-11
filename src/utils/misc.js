const fs = require("node:fs");
const path = require("node:path");

const data = require("./../../config.json");

const writeConfigFileAndReplyInt = async (interaction) => {
	const configFilePath = path.join(__dirname, "..", "..", "config.json");

	await interaction
		.reply({ content: "Changed the config!", ephemeral: true })
		.catch((err) => console.log(err));

	fs.writeFile(configFilePath, JSON.stringify(data), (err) => {
		if (err) console.log("Error writing file:", err);
	});
};

module.exports = { writeConfigFileAndReplyInt };
