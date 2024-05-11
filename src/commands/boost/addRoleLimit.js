const {
	ApplicationCommandOptionType,
	PermissionFlagsBits,
} = require("discord.js");
const { writeConfigFileAndReplyInt } = require("../../utils/misc");
const config = require("./../../../config.json");
module.exports = {
	name: "add_limit",
	description: "Add a Limit to the roles being assigned to the Boosted Users!",

	options: [
		{
			name: "limit",
			description: "Amount of limit to add in numbers only",
			required: true,
			type: ApplicationCommandOptionType.Number,
		},
	],

	callback: async (_, interaction) => {
		const limit = interaction.options.get("limit").value;

		config.BOOST_LIMIT = limit;

		await writeConfigFileAndReplyInt(interaction);
	},
};
