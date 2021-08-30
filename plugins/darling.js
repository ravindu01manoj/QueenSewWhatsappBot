/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const QueenSew = require('../events');
const SEW = "*ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ*\n ඔබේ පෙම්වතිය හෝ පෙම්වතා වෙත සොදුරු ඇමතුමක්.\n💻Usage: *.msglv*"
const fs = require('fs')
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const Config = require('../config')
 if (Config.PSW !== 'kingraviya') {
QueenSew.newcmdaddtosew({pattern: 'msglv', fromMe: false, desc: SEW }, (async (message, match) => {
var sewrm = new Array ();
sewrm [0] = zzaaa
sewrm [1] = zzaab
sewrm [2] = zzaac
sewrm [3] = zzaad
sewrm [4] = zzaae
sewrm [5] = zzaaf
sewrm [6] = zzaag
sewrm [7] = zzaah
sewrm [8] = zzaai
sewrm [9] = zzaaj
sewrm [10] = zzaak
sewrm [11] = zzaal
sewrm [12] = zzaam
var s = Math.floor(13*Math.random())
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/' + sewrm[s] + '.mp3'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}));
}