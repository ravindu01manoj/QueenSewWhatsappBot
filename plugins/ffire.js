/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command"

if (Config.WORKTYPE == 'private') {

    QueenSew.newcmdaddtosew({ pattern: 'freefire ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'hacker ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=b5a030355d005d02ed5c8a47&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'mail ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    QueenSew.newcmdaddtosew({ pattern: 'freefire ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'hacker ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=b5a030355d005d02ed5c8a47&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'mail ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    
}

