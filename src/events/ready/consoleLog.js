module.exports = async (client) => {
	console.log(`${client.user.tag} is online.`);
	const guild = client.guilds.cache.get(process.env.GUILD_ID);
	await guild.members.fetch();
};
