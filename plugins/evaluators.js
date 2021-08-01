/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");

const Language = require('../language');
const Lang = Language.getString('evaluators');

QueenSew.newcmdaddtosew({pattern: 'term ?(.*)', fromSew: true, desc: Lang.TERM_DESC}, (async (message, match) => {    
    var user = os.userInfo().username;
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.GIVE_ME_CODE,MessageType.text);

    exec(match[1], async (err, stdout, stderr) => {
        if (err) {
            return await message.client.sendMessage(message.jid,'```' + user + ':~# ' + match[1] + '\n' + err + '```',MessageType.text);
        }
        
        return await message.client.sendMessage(message.jid,'```' + user + ':~# ' + match[1] + '\n' + stdout + '```',MessageType.text);
      });
}));
