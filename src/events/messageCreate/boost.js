const { Client, Message } = require("discord.js");
const data = require("../../../config.json");
const boost = require("../../models/boost");
const { sendNoLimitEmbed, successEmbed } = require("../../utils/embed");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

module.exports = async (_, message) => {
	try {
		// const {
		// 	author: { id: userId },
		// 	guild,
		// 	member,
		// } = message;
		// const { BOOST_LIMIT, BOOST_CHECK_ROLE_ID, BOOST_ROLE_ID } = data;
		// const boostedAt = new Date();
		// // filling cache
		// await guild.members.fetch();
		// let doc = await boost.findOne({ userId });
		// const BOOST_ROLE = await guild.roles.fetch(BOOST_ROLE_ID);
		// const isLimitRemaining = BOOST_LIMIT > BOOST_ROLE.members.size;
		// const hasCheckRole = member.roles.cache.has(BOOST_CHECK_ROLE_ID);
		// const hasBoostRole = member.roles.cache.has(BOOST_ROLE_ID);
		// if (message.content === "!start") {
		// 	// check if document exists
		// 	if (!doc)
		// 		doc = new boost({
		// 			userId,
		// 			boostedAt,
		// 		});
		// 	if (doc) doc.boostedAt = boostedAt;
		// 	await doc.save();
		// 	console.log("start: doc save/updated");
		// 	if (!isLimitRemaining) return await sendNoLimitEmbed(member);
		// 	console.log("start: limit remains yes");
		// 	if (hasCheckRole) return;
		// 	console.log("start: dont have check role");
		// 	await member.roles.add(BOOST_ROLE_ID);
		// 	await doc.updateOne({ hasBoostRole: true });
		// 	await successEmbed(member);
		// }
		// if (message.content === "!end") {
		// 	// if (doc) await doc.deleteOne();
		// 	if (!hasBoostRole) return;
		// 	console.log("end: has role");
		// 	await member.roles.remove(BOOST_ROLE_ID);
		// 	if (!(BOOST_LIMIT > BOOST_ROLE.members.size)) return;
		// 	console.log("end: limit remains yes");
		// 	const docs = await boost
		// 		.find({ hasBoostRole: { $ne: true } })
		// 		.sort({ boostedAt: 1 });
		// 	console.log(docs);
		// 	for (const userDoc of docs) {
		// 		try {
		// 			const member = await guild.members.fetch(userDoc.userId);
		// 			const hasCheckRole = member.roles.cache.has(BOOST_CHECK_ROLE_ID);
		// 			const hasBoostRole = member.roles.cache.has(BOOST_ROLE_ID);
		// 			if (!member || hasCheckRole || hasBoostRole) continue;
		// 			await member.roles.add(BOOST_ROLE_ID);
		// 			await userDoc.updateOne({ hasBoostRole: true });
		// 			await successEmbed(member);
		// 			break;
		// 		} catch (error) {
		// 			console.log(error);
		// 		}
		// 	}
		// }
	} catch (error) {
		console.log(error);
	}
};
