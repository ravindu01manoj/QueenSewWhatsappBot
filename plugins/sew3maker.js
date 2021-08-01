/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const SewQueen = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command"

if (Config.WORKTYPE == 'private') {

   SewQueen.newcmdaddtosew({pattern: 'brandlogo ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${topText}&type=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
     SewQueen.newcmdaddtosew({ pattern: 'wetglass ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'color3d ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/multicolor3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'gold3d ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/luxurygold?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2galaxy ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '3galaxy ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxybat?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2flower ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/beautifulflower?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'puppy ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'royal ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/royaltext?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '4galaxy ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxybat?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'writegalacy ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/writegalacy?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'textby ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '3dwood ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/wooden3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'stars ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/starsnight?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '1cake ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/textcake?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'glitter ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/glittergold?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'noel ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/noeltext?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'logometal ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'greenbush ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/greenbush?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'glossy ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/glossychrome?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2green ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '1holo ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'heart ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/heartshaped?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '5galaxy ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2cake ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/birthdaycake?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    
}

else if (Config.WORKTYPE == 'public') {

    SewQueen.newcmdaddtosew({pattern: 'brandlogo ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${topText}&type=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
     SewQueen.newcmdaddtosew({ pattern: 'wetglass ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'color3d ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/multicolor3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'gold3d ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/luxurygold?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2galaxy ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '3galaxy ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxybat?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2flower ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/beautifulflower?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'puppy ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'royal ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/royaltext?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '4galaxy ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxybat?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'writegalacy ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/writegalacy?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'textby ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '3dwood ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/wooden3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'stars ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/starsnight?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '1cake ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/textcake?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'glitter ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/glittergold?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'noel ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/noeltext?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'logometal ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'greenbush ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/greenbush?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'glossy ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/glossychrome?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2green ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '1holo ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'heart ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/heartshaped?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '5galaxy ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2cake ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/birthdaycake?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    
    
}
