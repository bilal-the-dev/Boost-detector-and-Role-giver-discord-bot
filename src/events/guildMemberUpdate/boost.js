const { Client, Message } = require("discord.js");
const data = require("../../../config.json");
const boost = require("../../models/boost");
const { sendNoLimitEmbed, successEmbed } = require("../../utils/embed");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

module.exports = async (_, oldMember, member) => {
	try {
		console.log(member.user.username);
		console.log("member update");
		const {
			user: { id: userId },
			guild,
			premiumSince,
		} = member;

		console.log(oldMember);
		const oldBoostStatus = oldMember.premiumSince;
		const hasSartedBoosting = !oldBoostStatus && premiumSince;
		const hasEndedBoosting = oldBoostStatus && !premiumSince;
		console.log({
			hasEndedBoosting,
			hasSartedBoosting,
			oldBoostStatus,
			premiumSince,
		});

		if (!hasSartedBoosting && !hasEndedBoosting) return;

		console.log("member update boost yes");
		const { BOOST_LIMIT, BOOST_CHECK_ROLE_ID, BOOST_ROLE_ID } = data;
		const boostedAt = new Date();

		// filling cache
		await guild.members.fetch();
		let doc = await boost.findOne({ userId });
		console.log(doc);
		const BOOST_ROLE = await guild.roles.fetch(BOOST_ROLE_ID);
		const isLimitRemaining = BOOST_LIMIT > BOOST_ROLE.members.size;

		const hasCheckRole = member.roles.cache.has(BOOST_CHECK_ROLE_ID);
		const hasBoostRole = member.roles.cache.has(BOOST_ROLE_ID);

		console.log({
			hasCheckRole,
			hasBoostRole,
			isLimitRemaining,
			size: BOOST_ROLE.members.size,
		});
		if (hasSartedBoosting) {
			console.log("started boosting");
			// check if document exists
			if (!doc)
				doc = new boost({
					userId,
					boostedAt,
				});

			if (doc) doc.boostedAt = boostedAt;

			await doc.save();

			console.log("start: doc save/updated");
			if (!isLimitRemaining) return await sendNoLimitEmbed(member);
			console.log("start: limit remains yes");
			if (hasCheckRole) return;
			console.log("start: dont have check role");

			await member.roles.add(BOOST_ROLE_ID);
			await doc.updateOne({ hasBoostRole: true });
			await successEmbed(member);
		}

		if (hasEndedBoosting) {
			console.log("removed boost");
			if (doc) await doc.deleteOne();

			if (!hasBoostRole) return;

			console.log("end: has role");

			await member.roles.remove(BOOST_ROLE_ID);

			if (!(BOOST_LIMIT > BOOST_ROLE.members.size)) return;
			console.log("end: limit remains yes");

			const docs = await boost
				.find({ hasBoostRole: { $ne: true } })
				.sort({ boostedAt: 1 });

			console.log(docs);

			for (const userDoc of docs) {
				try {
					const member = await guild.members.fetch(userDoc.userId);
					const hasCheckRole = member.roles.cache.has(BOOST_CHECK_ROLE_ID);
					const hasBoostRole = member.roles.cache.has(BOOST_ROLE_ID);

					cl(hasBoostRole);
					if (!member || hasCheckRole || hasBoostRole) continue;
					console.log("passed the end loop");
					await member.roles.add(BOOST_ROLE_ID);
					await userDoc.updateOne({ hasBoostRole: true });
					await successEmbed(member);
					break;
				} catch (error) {
					console.log(error);
				}
			}
		}
	} catch (error) {
		console.log(error);
	}
};
