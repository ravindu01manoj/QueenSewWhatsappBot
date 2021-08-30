/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');


const Language = require('../language');
const Lang = Language.getString('admincont');
 if (Config.PSW !== 'kingraviya') {
if (Config.WORKTYPE == 'private') {
    QueenSew.newcmdaddtosew({pattern: 'tagadmin', fromMe: true, desc: Lang.CONTADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '💠 @' + uye.id.split('@')[0] + '\n▫️👑 wa.me/' + uye.id.split('@')[0] +  ' 👑\n\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,'◻    🔱    *👑 Group Admins 👑*    🔱    ◻\n\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
else if (Config.WORKTYPE == 'public') {
    QueenSew.newcmdaddtosew({pattern: 'tagadmin', fromMe: false, desc: Lang.CONTADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '💠 @' + uye.id.split('@')[0] + '\n▫️👑 wa.me/' + uye.id.split('@')[0] +  ' 👑\n\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,'◻    🔱    *👑 Group Admins 👑*    🔱    ◻\n\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
    QueenSew.newcmdaddtosew({pattern: 'tagadmin', fromMe: true, desc: Lang.CONTADMİN, dontAdCommandList: true}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '💠 @' + uye.id.split('@')[0] + '\n▫️👑 wa.me/' + uye.id.split('@')[0] +  ' 👑\n\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,'◻    🔱    *👑 Group Admins 👑*    🔱    ◻\n\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
}