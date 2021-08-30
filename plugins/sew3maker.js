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
 if (Config.PSW !== 'kingraviya') {
if (Config.WORKTYPE == 'private') {

   SewQueen.newcmdaddtosew({pattern: 'brandlogo ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${topText}&type=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

}));
     SewQueen.newcmdaddtosew({ pattern: 'wetglass ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'color3d ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/multicolor3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'gold3d ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/luxurygold?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2galaxy ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '3galaxy ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxybat?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2flower ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/beautifulflower?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'puppy ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'royal ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/royaltext?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '4galaxy ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxybat?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'writegalacy ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/writegalacy?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'textby ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '3dwood ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/wooden3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'stars ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/starsnight?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '1cake ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/textcake?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'glitter ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/glittergold?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'noel ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/noeltext?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'logometal ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'greenbush ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/greenbush?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'glossy ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/glossychrome?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2green ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '1holo ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'heart ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/heartshaped?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '5galaxy ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2cake ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/birthdaycake?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    
}

else if (Config.WORKTYPE == 'public') {

    SewQueen.newcmdaddtosew({pattern: 'brandlogo ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${topText}&type=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

}));
     SewQueen.newcmdaddtosew({ pattern: 'wetglass ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'color3d ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/multicolor3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'gold3d ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/luxurygold?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2galaxy ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '3galaxy ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxybat?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2flower ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/beautifulflower?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'puppy ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'royal ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/royaltext?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '4galaxy ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxybat?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'writegalacy ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/writegalacy?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'textby ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '3dwood ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/wooden3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'stars ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/starsnight?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '1cake ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/textcake?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'glitter ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/glittergold?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'noel ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/noeltext?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'logometal ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'greenbush ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/greenbush?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'glossy ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/glossychrome?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2green ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '1holo ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: 'heart ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/heartshaped?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '5galaxy ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    SewQueen.newcmdaddtosew({ pattern: '2cake ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/birthdaycake?apikey=eafcf901640d1c599ae71519&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*' + Config.CPK + '*' })

    }));
    
    
}
}