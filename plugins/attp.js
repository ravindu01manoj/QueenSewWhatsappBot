/* Coded By t.me/RavinduManoj.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const SewQueen = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'private') {
    SewQueen.newcmdaddtosew({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })
    }));
    SewQueen.newcmdaddtosew({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
    SewQueen.newcmdaddtosew({ pattern: '2attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var lasiyasimg = await axios.get(`https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
}
else if (Config.WORKTYPE == 'public') {
    SewQueen.newcmdaddtosew({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })
    }));
    SewQueen.newcmdaddtosew({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
    SewQueen.newcmdaddtosew({ pattern: '2attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var lasiyasimg = await axios.get(`https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })
    }));
    SewQueen.newcmdaddtosew({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
    SewQueen.newcmdaddtosew({ pattern: '2attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var lasiyasimg = await axios.get(`https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
}
