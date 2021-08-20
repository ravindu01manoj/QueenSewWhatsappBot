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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                const Raviya = require('../config');
const need = "*type some word after command"


var r_text = new Array ();

    r_text[0] = Raviya.SEWQ
    r_text[1] = Raviya.SEWA
    r_text[2] = Raviya.SEWB
    r_text[3] = Raviya.SEWC
    r_text[4] = Raviya.SEWD
    r_text[5] = Raviya.SEWE
    r_text[6] = Raviya.SEWF
    r_text[7] = Raviya.SEWG
    r_text[8] = Raviya.SEWH
    r_text[9] = Raviya.SEWI
    r_text[10] = Raviya.SEWJ
    r_text[11] = Raviya.SEWK
    r_text[12] = Raviya.SEWL
    r_text[13] = Raviya.SEWM
    r_text[14] = Raviya.SEWN
    r_text[15] = Raviya.SEWO
    r_text[16] = Raviya.SEWP
  

    var i = Math.floor(17*Math.random())

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (Raviya.WORKTYPE == 'private') {


/*
QueenSew.newcmdaddtosew({pattern: 'sandsum ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'cloudsky ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3dluxury ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1sandwriting ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'darkgold ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neongalaxy ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'minion3d ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'holo3d ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'purpul ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'esilver ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glossy ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1fabric ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'new1y ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neon1s ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'helloween ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'xmas3d ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'joker ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'wicker ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'skeleton ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'steel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glossy ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'denim ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1decora ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2decora ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3decora ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rock ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'lava ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glass ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'berry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2blood ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3blood ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1gem ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bagel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'captain ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3cake ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'fish ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rainbow ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'honny ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1candi ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bluemetal ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
   
    QueenSew.newcmdaddtosew({pattern: 'fruit ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2carbon ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2metal ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    

    QueenSew.newcmdaddtosew({pattern: '1jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '6jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '7jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '8jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'biscuit ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'grad ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1lol ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2lol ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'stars ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'fur ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'gerbang ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3lol ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'aov ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'dota2 ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'vtext ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ptext ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'colortext ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1917 ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));





}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        else if (Raviya.WORKTYPE == 'public') {

    QueenSew.newcmdaddtosew({pattern: 'sandsum ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'cloudsky ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3dluxury ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1sandwriting ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'darkgold ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neongalaxy ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'minion3d ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'holo3d ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'purpul ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'esilver ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glossy ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1fabric ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'new1y ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neon1s ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'helloween ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'xmas3d ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'joker ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'wicker ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'skeleton ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1foil ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2foil ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3foil ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4foil ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5foil ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6foil ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7foil ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'steel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glossy ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'denim ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1decora ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2decora ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3decora ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rock ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'lava ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glass ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'berry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2blood ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3blood ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1gem ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bagel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'captain ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3cake ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'fish ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rainbow ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'honny ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1candi ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bluemetal ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
   
    QueenSew.newcmdaddtosew({pattern: 'fruit ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2carbon ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2metal ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glitter ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glitter ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3glitter ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4glitter ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5glitter ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6glitter ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7glitter ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    

    QueenSew.newcmdaddtosew({pattern: '1jewelry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2jewelry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3jewelry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4jewelry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5jewelry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '6jewelry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '7jewelry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '8jewelry ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'biscuit ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1spark ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2spark ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3spark ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4spark ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5spark ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'grad ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1lol ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2lol ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'stars ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'fur ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'gerbang ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3lol ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'aov ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'dota2 ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'vtext ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ptext ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'colortext ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1917 ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));



    QueenSew.newcmdaddtosew({pattern: 'sandsum ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'cloudsky ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3dluxury ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1sandwriting ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'darkgold ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neongalaxy ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'minion3d ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'holo3d ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'purpul ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'esilver ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glossy ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1fabric ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'new1y ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neon1s ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'helloween ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'xmas3d ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'joker ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'wicker ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'skeleton ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7foil ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'steel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glossy ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'denim ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1decora ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2decora ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3decora ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rock ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'lava ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glass ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'berry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2blood ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3blood ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1gem ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bagel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'captain ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3cake ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'fish ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rainbow ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'honny ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1candi ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bluemetal ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
   
    QueenSew.newcmdaddtosew({pattern: 'fruit ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2carbon ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2metal ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7glitter ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    

    QueenSew.newcmdaddtosew({pattern: '1jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '6jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '7jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '8jewelry ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'biscuit ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5spark ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'grad ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    */
    
    QueenSew.newcmdaddtosew({pattern: 'owner', fromMe: true, desc: 'Details For Coder'}, (async (message, match) => {
    var r_text = new Array ();
    r_text[0] = "https://i.ibb.co/JkjKGTy/temp-user-profile1621662133773.jpg";
    r_text[1] = "https://i.ibb.co/JkjKGTy/temp-user-profile1621662133773.jpg";
    var i = Math.floor(2*Math.random())
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '     *CODED BY RAVINDU MANOJ*\n\n❀Contact me: t.me/RavinduManoj\n\n\nYoutube Channel link 👇\n\n*https://youtube.com/channel/UCMrIJUBgoGCnyO2jLyybIWg*\n\n\n👑My Github Hub Profile👑\n\n*https://github.com/Sew01RaviduManoj01KingAndQueen*\n\n\nMy Website\n\nhttps://ravimano381.wixsite.com/ravindumanoj\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'})
    }));
    QueenSew.newcmdaddtosew({pattern: 'owner', fromMe: false, desc: 'Details For Coder'}, (async (message, match) => {
    var r_text = new Array ();
    r_text[0] = "https://i.ibb.co/JkjKGTy/temp-user-profile1621662133773.jpg";
    r_text[1] = "https://i.ibb.co/JkjKGTy/temp-user-profile1621662133773.jpg";
    var i = Math.floor(2*Math.random())
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '     *CODED BY RAVINDU MANOJ*\n\n❀Contact me: t.me/RavinduManoj\n\n\nYoutube Channel link 👇\n\n*https://youtube.com/channel/UCMrIJUBgoGCnyO2jLyybIWg*\n\n\n👑My Github Hub Profile👑\n\n*https://github.com/Sew01RaviduManoj01KingAndQueen*\n\n\nMy Website\n\nhttps://ravimano381.wixsite.com/ravindumanoj\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'})
    }));
/*
    QueenSew.newcmdaddtosew({pattern: '1lol ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2lol ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'stars ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'fur ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'gerbang ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3lol ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'aov ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'dota2 ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'vtext ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ptext ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'colortext ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1917 ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    */
        QueenSew.newcmdaddtosew({pattern: 'sesuni', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/uniform?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sestent', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/tentacles?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sespussy', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/pussy?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sespanti', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/panties?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
 
    QueenSew.newcmdaddtosew({pattern: 'sesmstrb', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/mstrb?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesmanga', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/manga?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesglass', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/glasses?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sescuck', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/cuckold?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesero', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/ero?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesbdsm', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/bdsm?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesass', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/ass?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'sessf', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/sfwneko?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'iwallpaper', fromMe: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/wallpaper?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'imeme', fromMe: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/meme?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'iexo', fromMe: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/exo?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'iblackpink', fromMe: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/blackpink?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ibts', fromMe: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/bts?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
/*

    QueenSew.newcmdaddtosew({pattern: 'shine ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'chrome ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/crispchrome?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern:'kueu ?(.*)' , fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/kueultah?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType:  'arraybuffer'  })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  '*' + Raviya.CPK + '*' })

    }));
    QueenSew.newcmdaddtosew({pattern: '2rainbow ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowbg?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'metalic ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/metalicglow?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'melon ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/watermelon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'underweb ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: '2coffe ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/kopi2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'metalic ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/metalicglow?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: '2smoke ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/smoketypography?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'bevel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/bevel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'shine ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'chrome ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/crispchrome?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern:'kueu ?(.*)' , fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/kueultah?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType:  'arraybuffer'  })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  '*' + Raviya.CPK + '*' })

    }));
    QueenSew.newcmdaddtosew({pattern: '2rainbow ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowbg?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'metalic ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/metalicglow?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'melon ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/watermelon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'underweb ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: '2coffe ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/kopi2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'metalic ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/metalicglow?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: '2smoke ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/smoketypography?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'bevel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/bevel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

*/
}
