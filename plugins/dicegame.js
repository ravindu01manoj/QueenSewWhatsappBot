/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');

// Descriptions
const SEWA = "Roll dice randomly.\nකැටය අහඹු ලෙස වැටේ"

// Sentences
const SEWB = "❄ ```Rolling Dice!``` 🎲"

// Results
const SEWC = "```Dice Rolled:``` "
 if (con.PSW !== 'kingraviya') {

    if (con.WORKTYPE === 'private') {

        QueenSew.newcmdaddtosew({pattern: 'roll', fromMe: true, desc: SEWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEWB, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, SEWC + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        QueenSew.newcmdaddtosew({pattern: 'roll', fromMe: false, desc: SEWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEWB, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, SEWC + `${r_text[i]}`, MessageType.text);

        }));
    }
    }