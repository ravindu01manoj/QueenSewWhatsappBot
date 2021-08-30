/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/

const QueenSew = require('../events');
const con = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');

// Descriptions
const ENLEZ = "Measures the percentage of lesbian you respond to."

// Need Reply
const ENREP = "```You Need To Reply Any Message!```"


// Plugin Start 

        QueenSew.newcmdaddtosew({pattern: 'lesbianmeter', fromMe: false, desc: ENLEZ}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

            await message.client.sendMessage(message.jid, '*Calculating* ' + '@' + message.reply_message.jid.split('@')[0] + '’s *Lesbian Meter.. 🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var r_text = new Array ();
            r_text[0] = "*%0*";
            r_text[1] = "*%1*";
            r_text[2] = "*%2*";
            r_text[3] = "*%3*";
            r_text[4] = "*%4*";
            r_text[5] = "*%5*";
            r_text[6] = "*%6*";
            r_text[7] = "*%7*";
            r_text[8] = "*%8*";
            r_text[9] = "*%9*";
            r_text[10] = "*%10*";
            r_text[11] = "*%11*";
            r_text[12] = "*%12*";
            r_text[13] = "*%13*";
            r_text[14] = "*%14*";
            r_text[15] = "*%15*";
            r_text[16] = "*%16*";
            r_text[17] = "*%17*";
            r_text[18] = "*%18*";
            r_text[19] = "*%19*";
            r_text[20] = "*%20*";
            r_text[21] = "*%21*";
            r_text[22] = "*%22*";
            r_text[23] = "*%23*";
            r_text[24] = "*%24*";
            r_text[25] = "*%25*";
            r_text[26] = "*%26*";
            r_text[27] = "*%27*";
            r_text[28] = "*%28*";
            r_text[29] = "*%29*";
            r_text[30] = "*%30*";
            r_text[31] = "*%31*";
            r_text[32] = "*%32*";
            r_text[33] = "*%33*";
            r_text[34] = "*%34*";
            r_text[35] = "*%35*";
            r_text[36] = "*%36*";
            r_text[37] = "*%37*";
            r_text[38] = "*%38*";
            r_text[39] = "*%39*";
            r_text[40] = "*%40*";
            r_text[41] = "*%41*";
            r_text[42] = "*%42*";
            r_text[43] = "*%43*";
            r_text[44] = "*%44*";
            r_text[45] = "*%45*";
            r_text[46] = "*%46*";
            r_text[47] = "*%47*";
            r_text[48] = "*%48*";
            r_text[49] = "*%49*";
            r_text[50] = "*%50*";
            r_text[51] = "*%51*";
            r_text[52] = "*%52*";
            r_text[53] = "*%53*";
            r_text[54] = "*%54*";
            r_text[55] = "*%55*";
            r_text[56] = "*%56*";
            r_text[57] = "*%57*";
            r_text[58] = "*%58*";
            r_text[59] = "*%59*";
            r_text[60] = "*%60*";
            r_text[61] = "*%61*";
            r_text[62] = "*%62*";
            r_text[63] = "*%63*";
            r_text[64] = "*%64*";
            r_text[65] = "*%65*";
            r_text[66] = "*%66*";
            r_text[67] = "*%67*";
            r_text[68] = "*%68*";
            r_text[69] = "*%69*";
            r_text[70] = "*%70*";
            r_text[71] = "*%71*";
            r_text[72] = "*%72*";
            r_text[73] = "*%73*";
            r_text[74] = "*%74*";
            r_text[75] = "*%75*";
            r_text[76] = "*%76*";
            r_text[77] = "*%77*";
            r_text[78] = "*%78*";
            r_text[79] = "*%79*";
            r_text[80] = "*%80*";
            r_text[81] = "*%81*";
            r_text[82] = "*%82*";
            r_text[83] = "*%83*";
            r_text[84] = "*%84*";
            r_text[85] = "*%85*";
            r_text[86] = "*%86*";
            r_text[87] = "*%87*";
            r_text[88] = "*%88*";
            r_text[89] = "*%89*";
            r_text[90] = "*%90*";
            r_text[91] = "*%91*";
            r_text[92] = "*%92*";
            r_text[93] = "*%93*";
            r_text[94] = "*%94*";
            r_text[95] = "*%95*";
            r_text[96] = "*%96*";
            r_text[97] = "*%97*";
            r_text[98] = "*%98*";
            r_text[99] = "*%99*";
            r_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("./media/gif/giphy_2.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Lesbian Meter Calculated!* 👩‍❤️‍💋‍👩\n*Result:* ${r_text[i]}` }
            )
        }));
// Plugin End