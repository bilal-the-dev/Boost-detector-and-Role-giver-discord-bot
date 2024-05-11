const {
	ApplicationCommandOptionType,
	PermissionFlagsBits,
} = require("discord.js");

const data = require("../../../config.json");
const { writeConfigFileAndReplyInt } = require("../../utils/misc");

module.exports = {
	name: "add_boost_check_role",
	description:
		"will be checked when someone boost, if they dont have this role, will give the TB role",
	options: [
		{
			name: "role",
			description: "Role to add.",
			required: true,
			type: ApplicationCommandOptionType.Role,
		},
	],

	callback: async (_, interaction) => {
		const role = interaction.options.get("role").value;

		data.BOOST_CHECK_ROLE_ID = role;

		await writeConfigFileAndReplyInt(interaction);
	},
};
