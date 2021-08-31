/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/


const QueenSew = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Raviya = require('../config')
const axios = require('axios')
const request = require('request');
const Pach = require('sewqueen-rs');
const os = require('os');
let sk = Raviya.WORKTYPE == 'public' ? false : true
 if (Raviya.PSW !== 'kingraviya') {
QueenSew.newcmdaddtosew({pattern: '1best$', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var t10 = ''
    var t58 = ''
    var t59 = ''
    var t60 = ''
    var t61 = ''
    var t62 = ''
    var t63 = ''
    var t64 = ''
    var t65 = ''
    var t66 = ''
    var t67 = ''
    var t68 = ''
    var t69 = ''
    var t70 = ''
    var t71 = ''
    var t72 = ''
    var t73 = ''
    var t74 = ''
    var t75 = ''
    var t76 = ''
    var t77 = ''
    var t78 = ''
    var t79 = ''
    var t80 = ''
        
        t10 = 'Create anonymous hacker avatars cyan neon'
        t58 = 'Makes a Second Black and Pink Themed Logo.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'Makes PUBG Themed Video Logo.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Makes Road Themed Logo.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Makes a Sad Themed Logo.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Makes Animated Bear Logo.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Makes Animated Puppy Logo.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = 'Makes Second PUBG Themed Video Logo.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = 'Makes Third PUBG Themed Logo.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html
        t66 = 'Makes Heart Animated Logo.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = 'Makes Fourth Graffiti Themed Logo.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = 'Makes a Second Space Themed Logo.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Makes Angel Themed Logo.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Makes Leaf Themed Logo.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Makes Gold Themed Logo.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = 'Makes a Third Space Themed Logo.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = 'Makes Third Flame Themed Logo.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html 
        t74 = 'Makes Fifth Graffiti Themed Logo.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Makes Snow Themed Logo.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = 'Makes a Second Color Gradient Themed Logo.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = 'Makes a Sixth Neon Themed Logo.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Makes a Hot Air Balloon Themed Logo.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = 'Makes a Second Gold Themed Logo.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Makes Matrix Themed Logos.' // https://en.ephoto360.com/matrix-text-effect-154.html
    
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Raviya.LANG == 'SI') {
        usage_cmd = '✨ *උදාහරණ:* _'
        command_cmd = '⛄ *කමාන්ඩ්:* '
        desc_cmd = '❄ *ඩිස්ක්‍රිප්ශන්:* _'
    } else { 
        usage_cmd = '*✨ Example:* _'
        command_cmd = '⛄ *Command:* '
        desc_cmd = '❄ *Description:* _'
    }
    const msg =command_cmd + '```.sl6neon``` \n' + desc_cmd + t77 + '_\n' + usage_cmd + '.sl6neon Sew\n\n' +
        command_cmd + '```.sl4graf``` \n' + desc_cmd + t67 + '_\n' + usage_cmd + '.sl4graf Sew\n\n' +
        command_cmd + '```.sl5graf``` \n' + desc_cmd + t74 + '_\n' + usage_cmd + '.sl5graf Sew\n\n' +
        command_cmd + '```.sl2space``` \n' + desc_cmd + t68 + '_\n' + usage_cmd + '.sl2space Sew\n\n' +
        command_cmd + '```.sl3space``` \n' + desc_cmd + t72 + '_\n' + usage_cmd + '.sl3space Sew\n\n' +
        command_cmd + '```.sl2gradient``` \n' + desc_cmd + t76 + '_\n' + usage_cmd + '.sl2gradient Sew\n\n' +
        command_cmd + '```.sl2pink``` \n' + desc_cmd + t58 + '_\n' + usage_cmd + '.sl2pink Sew\n\n' +
        command_cmd + '```.slpubg``` \n' + desc_cmd + t59 + '_\n' + usage_cmd + '.slpubg Sew\n\n' +
        command_cmd + '```.slroad``` \n' + desc_cmd + t60 + '_\n' + usage_cmd + '.slroad Sew\n\n' +
        command_cmd + '```.slsad``` \n' + desc_cmd + t61 + '_\n' + usage_cmd + '.slsad Sew\n\n' +
        command_cmd + '```.slabear``` \n' + desc_cmd + t62 + '_\n' + usage_cmd + '.slabear Sew\n\n' +
        command_cmd + '```.slpuppy``` \n' + desc_cmd + t63 + '_\n' + usage_cmd + '.slpuppy Sew\n\n' +
        command_cmd + '```.sl2pubg``` \n' + desc_cmd + t64 + '_\n' + usage_cmd + '.sl2pubg Sew\n\n' +
        command_cmd + '```.sl3pubg``` \n' + desc_cmd + t65 + '_\n' + usage_cmd + '.sl3pubg Sew\n\n' +
        command_cmd + '```.slheart``` \n' + desc_cmd + t66 + '_\n' + usage_cmd + '.slheart Sew\n\n' +
        command_cmd + '```.slangel``` \n' + desc_cmd + t69 + '_\n' + usage_cmd + '.slangel Sew\n\n' +
        command_cmd + '```.slleaf``` \n' + desc_cmd + t70 + '_\n' + usage_cmd + '.slleaf Sew\n\n' +
        command_cmd + '```.slgold``` \n' + desc_cmd + t71 + '_\n' + usage_cmd + '.slgold Sew\n\n' +
        command_cmd + '```.sl2gold``` \n' + desc_cmd + t79 + '_\n' + usage_cmd + '.sl2gold Sew\n\n' +
        command_cmd + '```.slsnow``` \n' + desc_cmd + t75 + '_\n' + usage_cmd + '.slsnow Sew\n\n' +
        command_cmd + '```.slballoon``` \n' + desc_cmd + t78 + '_\n' + usage_cmd + '.slballoon Sew\n\n' +
        command_cmd + '```.slmatrix``` \n' + desc_cmd + t80 + '_\n' + usage_cmd + '.textmatrix Sew\n\n'
        
        var respoimage = await axios.get(`https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg + ' ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })
        }));

QueenSew.newcmdaddtosew({pattern: 'slleaf ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/dark-green-typography-online-359.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slmatrix ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/matrix-text-effect-154.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl2gradient ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slballoon ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slsnow ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/snow-on-text-online-107.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl2gold ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/gold-text-effect-pro-271.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl5graf ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
  var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl3fire ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/dragon-fire-text-effect-111.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl2space ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK})
}));
QueenSew.newcmdaddtosew({pattern: 'sl3space ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slgold ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/modern-gold-3-212.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl3space ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slangel ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/wings-galaxy-206.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl2pink ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slabear ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.gif })
}));
QueenSew.newcmdaddtosew({pattern: 'sl6neon ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
QueenSew.newcmdaddtosew({pattern: 'slheart ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.gif })
}));
QueenSew.newcmdaddtosew({pattern: 'sl4graf ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/text-graffiti-3d-208.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slpuppy ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-puppy-cute-animated-online-478.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.gif })
}));
QueenSew.newcmdaddtosew({pattern: 'slroad ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slsad ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl3pubg ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'slpubg ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var vid = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.mp4 })
}));
QueenSew.newcmdaddtosew({pattern: 'sl2pubg ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var vid = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.mp4 })
}));

QueenSew.newcmdaddtosew({pattern: 'slhacker ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));


QueenSew.newcmdaddtosew({pattern: 'sl1test ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
QueenSew.newcmdaddtosew({pattern: 'sl2test ?(.*)', fromMe: sk, dontAdCommandList: true}, (async (message, match) => {
    var img = await Pach.rgmsd(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: Raviya.CPK })
}));
}
