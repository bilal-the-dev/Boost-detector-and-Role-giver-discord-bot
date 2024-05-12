const {
	ApplicationCommandOptionType,
	PermissionFlagsBits,
} = require("discord.js");

const data = require("../../../config.json");
const { writeConfigFileAndReplyInt } = require("../../utils/misc");

module.exports = {
	name: "add_boost_role",
	description:
		"Set up role that will be given when someone boosts if they dont have the boost check role",
	options: [
		{
			name: "role",
			description: "Role to add.",
			required: true,
			type: ApplicationCommandOptionType.Role,
		},
	],
	permissionsRequired: [PermissionFlagsBits.Administrator],

	callback: async (_, interaction) => {
		const role = interaction.options.get("role").value;
		data.BOOST_ROLE_ID = role;

		await writeConfigFileAndReplyInt(interaction);
	},
};
