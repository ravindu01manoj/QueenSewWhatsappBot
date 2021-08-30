/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/

const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Raviya = require('../config');

const Language = require('../language');
const Lang = Language.getString('sewmaker');

let rs = Raviya.WORKTYPE == 'public' ? false : true

QueenSew.newcmdaddtosew({pattern: 'neonglow ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));


QueenSew.newcmdaddtosew({pattern: 'latte ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));


QueenSew.newcmdaddtosew({pattern: 'wood ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/woodblock/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));

QueenSew.newcmdaddtosew({pattern: '8bit ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));

QueenSew.newcmdaddtosew({pattern: 'shadow ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));

QueenSew.newcmdaddtosew({pattern: 'harrypotter ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));

QueenSew.newcmdaddtosew({pattern: 'sparkling ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));

QueenSew.newcmdaddtosew({pattern: 'watercolor ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));

QueenSew.newcmdaddtosew({pattern: 'ninjalogo ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));

QueenSew.newcmdaddtosew({pattern: 'neonlight ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));

QueenSew.newcmdaddtosew({pattern: '3dtext ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.SEWNEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*' })

}));


QueenSew.newcmdaddtosew({pattern: 'underwater ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/underwater/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

 QueenSew.newcmdaddtosew({pattern: 'flower ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

QueenSew.newcmdaddtosew({pattern: 'burn ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

 QueenSew.newcmdaddtosew({pattern: 'candy ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

QueenSew.newcmdaddtosew({pattern: 'sandwriting ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandwriting?text=${match[1]}&APIKEY=e248b81cffae4586`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

 QueenSew.newcmdaddtosew({pattern: 'cloud ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=e248b81cffae4586`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));


    QueenSew.newcmdaddtosew({pattern: 'phub ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=e248b81cffae4586`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '*' + Raviya.CPK + '*'})

    }));

QueenSew.newcmdaddtosew({pattern: 'snow ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=e248b81cffae4586`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*  '})

    }));

  QueenSew.newcmdaddtosew({pattern: 'blood ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=e248b81cffae4586`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

  QueenSew.newcmdaddtosew({pattern: 'grass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

 QueenSew.newcmdaddtosew({pattern: 'candlemug ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

   QueenSew.newcmdaddtosew({pattern: 'romance ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

   QueenSew.newcmdaddtosew({pattern: 'lovemsg ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));




QueenSew.newcmdaddtosew({pattern: 'luxury ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=ba69027eb3dc7987`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'gradient ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dgradient?text=${match[1]}&APIKEY=ba69027eb3dc7987`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'vintagi ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/realisticvintage?text=${match[1]}&APIKEY=00e0e1bf4c7dde0d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'summery ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=8a8ebc8d8b932805`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
   
    QueenSew.newcmdaddtosew({pattern: 'darkgold ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=98b033c6ef54b61a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: '1917 ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=41fc0f9ac344b623`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'holo ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=79cf7ab4e6598752`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'silver ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=981a4ef70f9f08c4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'blue ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/glossybluemetal?text=${match[1]}&APIKEY=2376fa7786a47519`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'fabric ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=18f7678ff93ea7fa`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'avengers ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3davengers?text=${topText}&text2=${bottomText}&APIKEY=2d7fce02fc14400a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'logomarvel ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/marvel?text=${topText}&text2=${bottomText}&APIKEY=d16462973349b432`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'silvermetal ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dmetalsilver?text=${topText}&text2=${bottomText}&APIKEY=3ff38cc68ed02c5a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'glue ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dglue?text=${match[1]}&APIKEY=3ff38cc68ed02c5a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'balloon ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/balloontext?text=${match[1]}&APIKEY=663f7f93a2011210`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'rosegold ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3drosegold?text=${topText}&text2=${bottomText}&APIKEY=663f7f93a2011210`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'metalgold ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dmetalgold?text=${topText}&text2=${bottomText}&APIKEY=bdf8f97d9f8b2ac8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'lion ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/lionlogomascot?text=${topText}&text2=${bottomText}&APIKEY=bdf8f97d9f8b2ac8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'galaxy ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dmetalgalaxy?text=${topText}&text2=${bottomText}&APIKEY=3daa10a39fb19f5d`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'logojoker ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=d2e4915e38d85d4b`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'leaves ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/naturalleaves?text=${match[1]}&APIKEY=d2e4915e38d85d4b`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'skull ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=917058a2392ad776`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'robot ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/robotr2d2?text=${match[1]}&APIKEY=e142177d8e1b26e6`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'toxic ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/toxic?text=${match[1]}&APIKEY=e142177d8e1b26e6`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'bow ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=e142177d8e1b26e6`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'orangeglass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/orangeglass?text=${match[1]}&APIKEY=60419a92fc8b3994`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'marvel ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWNEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/marvelstudios?text=${topText}&text2=${bottomText}&APIKEY=af92600dea99ccee`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*' + Raviya.CPK + '*'})

    }));
  
