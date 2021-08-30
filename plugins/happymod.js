/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

QueenSew.newcmdaddtosew({pattern: 'happymod ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAdCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=cjxJIn9eDletRHac3CG6CdvGxFH`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*✨ ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*💠 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*👑 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n\n *Coded By t.me/RavinduManoj*', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
