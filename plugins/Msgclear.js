/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const QueenSew = require('../events');
const SEW = "Its Clear Your Chat History"



 QueenSew.newcmdaddtosew({pattern: 'clear', fromMe: true, desc: SEW}, (async (message, match) => {

    await message.sendMessage('```Deleting all Msg...☯```');
            await message.client.modifyChat (message.jid, ChatModification.delete);
                     await message.sendMessage('```Successful Deleted! 🗑🗑;```');
}));
