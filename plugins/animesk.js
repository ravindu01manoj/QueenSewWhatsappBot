/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Raviya = require('../config');
const Pach = require('sewqueen-rs');
let wk = Raviya.WORKTYPE == 'public' ? false : true
var pic = ''
var giff = ''
var wr_usage = ''
if (Raviya.LANG == 'SI') pic = 'අහඹු ලෙස එනිම් ෆොටෝ සෙන්ඩ් කරයි.', wr_usage = ' ', giff = 'අහඹු ලෙස එනිම් වීඩියෝ සෙන්ඩ් කරයි'
if (Raviya.LANG == 'EN') pic = 'Sends random anime photo.', wr_usage = ' ', giff = 'Sends random anime video.'


QueenSew.newcmdaddtosew({pattern: 'anime ?(.*)', fromMe: wk, desc: pic, usage: '.anime pic / .anime gif'}, (async (message, match) => {
 if (match[1] == 'pic') {
    var image_link = await Pach.anime_wall('pic')
    var image_buffer = await axios.get(image_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer.data), MessageType.image, { caption: Raviya.CPK })
}else if (match[1] == 'gif') {
    var gif_link = await Pach.anime_gif('gif')
    var gif_buffer = await axios.get(gif_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(gif_buffer.data), MessageType.video, { caption: Raviya.CPK, mimetype: Mimetype.gif })
    }
}));

