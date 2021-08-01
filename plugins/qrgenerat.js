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

QueenSew.newcmdaddtosew({pattern: 'sandsum ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'cloudsky ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3dluxury ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1sandwriting ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'darkgold ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neongalaxy ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'minion3d ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'holo3d ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'purpul ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'esilver ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glossy ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1fabric ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'new1y ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neon1s ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'helloween ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'xmas3d ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'joker ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'wicker ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'skeleton ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'steel ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glossy ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'denim ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1decora ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2decora ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3decora ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rock ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'lava ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glass ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'berry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2blood ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3blood ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1gem ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bagel ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'captain ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3cake ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'fish ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rainbow ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'honny ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1candi ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bluemetal ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
   
    QueenSew.newcmdaddtosew({pattern: 'fruit ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2carbon ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2metal ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    

    QueenSew.newcmdaddtosew({pattern: '1jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '6jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '7jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '8jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'biscuit ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'grad ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1lol ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2lol ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'stars ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'fur ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'gerbang ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3lol ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'aov ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'dota2 ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'vtext ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ptext ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'colortext ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1917 ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));





}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        else if (Raviya.WORKTYPE == 'public') {

    QueenSew.newcmdaddtosew({pattern: 'sandsum ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'cloudsky ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3dluxury ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1sandwriting ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'darkgold ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neongalaxy ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'minion3d ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'holo3d ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'purpul ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'esilver ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glossy ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1fabric ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'new1y ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neon1s ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'helloween ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'xmas3d ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'joker ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'wicker ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'skeleton ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1foil ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2foil ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3foil ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4foil ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5foil ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6foil ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7foil ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'steel ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glossy ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'denim ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1decora ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2decora ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3decora ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rock ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'lava ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glass ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'berry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2blood ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3blood ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1gem ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bagel ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'captain ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3cake ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'fish ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rainbow ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'honny ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1candi ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bluemetal ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
   
    QueenSew.newcmdaddtosew({pattern: 'fruit ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2carbon ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2metal ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glitter ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glitter ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3glitter ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4glitter ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5glitter ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6glitter ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7glitter ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    

    QueenSew.newcmdaddtosew({pattern: '1jewelry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2jewelry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3jewelry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4jewelry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5jewelry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '6jewelry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '7jewelry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '8jewelry ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'biscuit ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1spark ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2spark ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3spark ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4spark ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5spark ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'grad ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1lol ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2lol ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'stars ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'fur ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'gerbang ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3lol ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'aov ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'dota2 ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'vtext ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ptext ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'colortext ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1917 ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));



    QueenSew.newcmdaddtosew({pattern: 'sandsum ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'cloudsky ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3dluxury ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1sandwriting ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'darkgold ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neongalaxy ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'minion3d ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'holo3d ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'purpul ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'esilver ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glossy ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1fabric ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'new1y ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'neon1s ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'helloween ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'xmas3d ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'joker ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'wicker ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'skeleton ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7foil ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'steel ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glossy ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'denim ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1decora ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2decora ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3decora ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rock ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'lava ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glass ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'berry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2blood ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3blood ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1gem ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bagel ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'captain ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3cake ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'fish ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'rainbow ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'honny ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1candi ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'bluemetal ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
   
    QueenSew.newcmdaddtosew({pattern: 'fruit ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2carbon ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2metal ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '2glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '3glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '4glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '5glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7glitter ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    

    QueenSew.newcmdaddtosew({pattern: '1jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '6jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '7jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '8jewelry ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'biscuit ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '4spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '5spark ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'grad ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1lol ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '2lol ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'stars ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'fur ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'gerbang ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '3lol ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'aov ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'dota2 ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'vtext ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ptext ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'colortext ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: '1917 ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
        QueenSew.newcmdaddtosew({pattern: 'sesuni', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/uniform?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sestent', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/tentacles?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sespussy', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/pussy?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sespanti', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/panties?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
 
    QueenSew.newcmdaddtosew({pattern: 'sesmstrb', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/mstrb?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesmanga', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/manga?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesglass', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/glasses?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sescuck', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/cuckold?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesero', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/ero?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesbdsm', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/bdsm?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesass', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/ass?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'sessf', fromSew: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/sfwneko?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'iwallpaper', fromSew: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/wallpaper?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'imeme', fromSew: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/meme?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'iexo', fromSew: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/exo?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'iblackpink', fromSew: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/blackpink?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ibts', fromSew: false, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/bts?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*😈Coded😈By😈Raviya😈*'})

    }));


    QueenSew.newcmdaddtosew({pattern: 'shine ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'chrome ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/crispchrome?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern:'kueu ?(.*)' , fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/kueultah?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType:  'arraybuffer'  })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({pattern: '2rainbow ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowbg?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'metalic ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/metalicglow?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'melon ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/watermelon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'underweb ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: '2coffe ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/kopi2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'metalic ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/metalicglow?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: '2smoke ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/smoketypography?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'bevel ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/bevel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'shine ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'chrome ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/crispchrome?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern:'kueu ?(.*)' , fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/kueultah?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType:  'arraybuffer'  })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({pattern: '2rainbow ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowbg?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'metalic ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/metalicglow?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'melon ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/watermelon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'underweb ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: '2coffe ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/kopi2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'metalic ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/metalicglow?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: '2smoke ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/smoketypography?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));
    QueenSew.newcmdaddtosew({pattern: 'bevel ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/bevel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'})

    }));


}
