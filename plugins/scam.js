/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/

const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const Pach = require('sewqueen-rs');
const Language = require('../language');
const Lang = Language.getString('scam');
var data = {
  action: true
}
QueenSew.newcmdaddtosew({pattern: 'scam ?(.*)', fromMe: true, desc: Lang.SCAM_DESC}, (async (message, match) => {
    if (match[1] === '') {
        return await message.sendMessage(Lang.SCAM_NOTFOUND);
    } else if (match[1] === 'typing') {
        if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.composing)
            }, 10000)
        }
    } else if (match[1] === 'online') {
        if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.available)
            }, 10000)
        }
    } else if (match[1] === 'recording') {
        if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.recording)
            }, 10000)
        }
    } else if (match[1] === 'stop') {
        data.action = false
        await message.client.updatePresence(message.jid,Presence.paused)
        await new Promise(r => setTimeout(r, 500));
        data.action = true
    } else {
        await message.client.sendMessage(message.jid, Lang.SCAM_NULL, MessageType.text);
    }
}));
