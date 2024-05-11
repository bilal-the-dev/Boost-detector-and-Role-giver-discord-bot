const { EmbedBuilder } = require("discord.js");
const { SUCCESS_BOOST_ROLE_GIVEN_MESSAGE, LIMIT_FINISHED_MESSAGE } =
	process.env;

const generateEmbed = (title, description, thumbnail) =>
	new EmbedBuilder()
		.setColor(0x0099ff)
		.setTitle(title)
		.setDescription(description)
		.setThumbnail(thumbnail);

const sendNoLimitEmbed = async (member) => {
	const embed = generateEmbed(
		"Sad Boi 😿",
		LIMIT_FINISHED_MESSAGE,
		member.displayAvatarURL()
	);
	await member.send({ embeds: [embed] });
};
const successEmbed = async (member) => {
	const embed = generateEmbed(
		"Hurray 🥣",
		SUCCESS_BOOST_ROLE_GIVEN_MESSAGE,
		member.displayAvatarURL()
	);
	await member.send({ embeds: [embed] });
};

module.exports = { sendNoLimitEmbed, successEmbed };
