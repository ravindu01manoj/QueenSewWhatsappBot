/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/


const SewQueen = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

 
SewQueen.newcmdaddtosew({pattern: 'horo ?(.*)', fromMe: false, desc: 'Get the days horosope for your sunsign(ජෝතිශ්‍ය විස්තර ලබා දේ)'}, async (message, match) => {
	if (match[1] === '') return await message.reply('Invalid Request,Provide your sunsign(වැරදි වේලාවක්,හිරු බැස ගිය වේලාව ඇතුලත් කරන්න!)');
	const url = `https://horoscope-api.herokuapp.com/horoscope/today/${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*☸️ ' + '*Sun sing*' +':* ```' + match[1] + '```\n\n' +
		'*🔮 ' + '*HOROSCOPE:*' +':* ```' + json.horoscope + '```\n' , MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
});
