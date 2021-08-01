/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');
const Sr = "Search on Google."

QueenSew.newcmdaddtosew({pattern: 'search ?(.*)', fromSew: false, desc: Sr}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'```type some text```', MessageType.text);
 
    Sea.google(`${match[1]}`).then(async(result) => {
        
        await message.client.sendMessage(message.jid,result[0], MessageType.text);
      });
}));
