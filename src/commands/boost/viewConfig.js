const { PermissionFlagsBits } = require("discord.js");
const data = require("./../../../config.json");
module.exports = {
	name: "view_config",
	description: "view the configuration",

	callback: async (_, interaction) => {
		const { BOOST_LIMIT, BOOST_CHECK_ROLE_ID, BOOST_ROLE_ID } = data;
		console.log(data);
		await interaction
			.reply({
				content: `**Configuration**:\n**Limit**: ${BOOST_LIMIT}\n**Boost Role**: <@&${BOOST_ROLE_ID}>\n**Boost Check Role**: <@&${BOOST_CHECK_ROLE_ID}>`,
				ephemeral: true,
			})
			.catch(() => null);
	},
};
