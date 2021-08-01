/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

 SEW WUEEN - Ravindu Manoj
*/

const Queensew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const sql = require('./sql/crash');

SSSEW = "☣😈☣ ❆ᴰᵃʳᵏ qᵘᵉᵉⁿ❆ ☣😈☣\n═══════════════════"

Queensew.newcmdaddtosew({pattern: 'darkqueen$', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
    var hg = await sql.sewMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid, SSSEW ,MessageType.text);
    } else {
        await message.client.sendMessage(message.jid, SSSEW ,MessageType.text);
    }
}));

Queensew.newcmdaddtosew({pattern: 'darkqueen (.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid, SSSEW );
    } else {
        if (match[1] === 'del') { await message.client.sendMessage(message.jid, SSSEW ,MessageType.text); return await sql.deleteCrashMessage(message.jid, 'addingcrash'); }
        await sql.setCrashMessage(message.jid, 'addingcrash', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid, SSSEW ,MessageType.text)
    }
}));

Queensew.newcmdaddtosew({pattern: 'Darkquee$', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
    var hg = await sql.sewMessage(message.jid, 'leftcrash');
    if (hg === false) {
        await message.client.sendMessage(message.jid, SSSEW ,MessageType.text)
    } else {
        await message.client.sendMessage(message.jid, SSSEW ,MessageType.text);
    }
}));

Queensew.newcmdaddtosew({pattern: 'Darkqueen (.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {
    if (match[1] === '') {
        return await message.client.sendMessage(message.jid, SSSEW ,MessageType.text);
    } else {
        if (match[1] === 'del') { await message.client.sendMessage(message.jid, SSSEW ,MessageType.text); return await sql.deleteCrashMessage(message.jid, 'leftcrash'); }
        await sql.setCrashMessage(message.jid, 'leftcrash', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid, SSSEW ,MessageType.text)
    }
}));
