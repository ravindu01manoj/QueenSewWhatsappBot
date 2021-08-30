/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
/*

This Is Unofficial Api From Ravindu Manoj 
Plugin thieves cannot use this api
*/
const QueenSew = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const ravindu = require('textsewmake'); 
const fs = require('fs');
const Raviya = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
let rs = Raviya.WORKTYPE == 'public' ? false : true
if (os.userInfo().homedir !== rgmsk.pay) return;
const TEXTMAKE = require('../textsew');
const SLINK = TEXTMAKE.getrule('slink');
const FILE = TEXTMAKE.getrule('sfile');
const SDISC = TEXTMAKE.getrule('sewdisc');
 if (Raviya.PSW !== 'kingraviya') {
QueenSew.newcmdaddtosew({pattern: '5text', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'TEXT MAKER LIST 5\n**************\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW1FILE + '\n*❄විස්තර:* ' + SDISC.SEW1DISC + '\n*✨උදාහරණ:* .' + FILE.SEW1FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW2FILE + '\n*❄විස්තර:* ' + SDISC.SEW2DISC + '\n*✨උදාහරණ:* .' + FILE.SEW2FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW3FILE + '\n*❄විස්තර:* ' + SDISC.SEW3DISC + '\n*✨උදාහරණ:* .' + FILE.SEW3FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW4FILE + '\n*❄විස්තර:* ' + SDISC.SEW4DISC + '\n*✨උදාහරණ:* .' + FILE.SEW4FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW5FILE + '\n*❄විස්තර:* ' + SDISC.SEW5DISC + '\n*✨උදාහරණ:* .' + FILE.SEW5FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW6FILE + '\n*❄විස්තර:* ' + SDISC.SEW6DISC + '\n*✨උදාහරණ:* .' + FILE.SEW6FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW7FILE + '\n*❄විස්තර:* ' + SDISC.SEW7DISC + '\n*✨උදාහරණ:* .' + FILE.SEW7FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW8FILE + '\n*❄විස්තර:* ' + SDISC.SEW8DISC + '\n*✨උදාහරණ:* .' + FILE.SEW8FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW9FILE + '\n*❄විස්තර:* ' + SDISC.SEW9DISC + '\n*✨උදාහරණ:* .' + FILE.SEW9FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW10FILE + '\n*❄විස්තර:* ' + SDISC.SEW10DISC + '\n*✨උදාහරණ:* .' + FILE.SEW10FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW11FILE + '\n*❄විස්තර:* ' + SDISC.SEW11DISC + '\n*✨උදාහරණ:* .' + FILE.SEW11FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW12FILE + '\n*❄විස්තර:* ' + SDISC.SEW12DISC + '\n*✨උදාහරණ:* .' + FILE.SEW12FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW13FILE + '\n*❄විස්තර:* ' + SDISC.SEW13DISC + '\n*✨උදාහරණ:* .' + FILE.SEW13FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW14FILE + '\n*❄විස්තර:* ' + SDISC.SEW14DISC + '\n*✨උදාහරණ:* .' + FILE.SEW14FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW15FILE + '\n*❄විස්තර:* ' + SDISC.SEW15DISC + '\n*✨උදාහරණ:* .' + FILE.SEW15FILE + ' Ravindu\n\n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));
    
QueenSew.newcmdaddtosew({pattern: '3text', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'TEXT MAKER LIST 3\n**************\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW16FILE + '\n*❄විස්තර:* ' + SDISC.SEW16DISC + '\n*✨උදාහරණ:* .' + FILE.SEW16FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW17FILE + '\n*❄විස්තර:* ' + SDISC.SEW17DISC + '\n*✨උදාහරණ:* .' + FILE.SEW17FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW18FILE + '\n*❄විස්තර:* ' + SDISC.SEW18DISC + '\n*✨උදාහරණ:* .' + FILE.SEW18FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW19FILE + '\n*❄විස්තර:* ' + SDISC.SEW19DISC + '\n*✨උදාහරණ:* .' + FILE.SEW19FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW20FILE + '\n*❄විස්තර:* ' + SDISC.SEW20DISC + '\n*✨උදාහරණ:* .' + FILE.SEW20FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW21FILE + '\n*❄විස්තර:* ' + SDISC.SEW21DISC + '\n*✨උදාහරණ:* .' + FILE.SEW21FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW22FILE + '\n*❄විස්තර:* ' + SDISC.SEW22DISC + '\n*✨උදාහරණ:* .' + FILE.SEW22FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW23FILE + '\n*❄විස්තර:* ' + SDISC.SEW23DISC + '\n*✨උදාහරණ:* .' + FILE.SEW23FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW24FILE + '\n*❄විස්තර:* ' + SDISC.SEW24DISC + '\n*✨උදාහරණ:* .' + FILE.SEW24FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW25FILE + '\n*❄විස්තර:* ' + SDISC.SEW25DISC + '\n*✨උදාහරණ:* .' + FILE.SEW25FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW26FILE + '\n*❄විස්තර:* ' + SDISC.SEW26DISC + '\n*✨උදාහරණ:* .' + FILE.SEW26FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW27FILE + '\n*❄විස්තර:* ' + SDISC.SEW27DISC + '\n*✨උදාහරණ:* .' + FILE.SEW27FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW28FILE + '\n*❄විස්තර:* ' + SDISC.SEW28DISC + '\n*✨උදාහරණ:* .' + FILE.SEW28FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW29FILE + '\n*❄විස්තර:* ' + SDISC.SEW29DISC + '\n*✨උදාහරණ:* .' + FILE.SEW29FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW30FILE + '\n*❄විස්තර:* ' + SDISC.SEW30DISC + '\n*✨උදාහරණ:* .' + FILE.SEW30FILE + ' Ravindu\n\n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' })

    }));
    
QueenSew.newcmdaddtosew({pattern: '4text', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'TEXT MAKER LIST 4\n**************\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW31FILE + '\n*❄විස්තර:* ' + SDISC.SEW31DISC + '\n*✨උදාහරණ:* .' + FILE.SEW31FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW32FILE + '\n*❄විස්තර:* ' + SDISC.SEW32DISC + '\n*✨උදාහරණ:* .' + FILE.SEW32FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW33FILE + '\n*❄විස්තර:* ' + SDISC.SEW33DISC + '\n*✨උදාහරණ:* .' + FILE.SEW33FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW34FILE + '\n*❄විස්තර:* ' + SDISC.SEW34DISC + '\n*✨උදාහරණ:* .' + FILE.SEW34FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW35FILE + '\n*❄විස්තර:* ' + SDISC.SEW35DISC + '\n*✨උදාහරණ:* .' + FILE.SEW35FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW36FILE + '\n*❄විස්තර:* ' + SDISC.SEW36DISC + '\n*✨උදාහරණ:* .' + FILE.SEW36FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW37FILE + '\n*❄විස්තර:* ' + SDISC.SEW37DISC + '\n*✨උදාහරණ:* .' + FILE.SEW37FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW38FILE + '\n*❄විස්තර:* ' + SDISC.SEW38DISC + '\n*✨උදාහරණ:* .' + FILE.SEW38FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW39FILE + '\n*❄විස්තර:* ' + SDISC.SEW39DISC + '\n*✨උදාහරණ:* .' + FILE.SEW39FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW40FILE + '\n*❄විස්තර:* ' + SDISC.SEW40DISC + '\n*✨උදාහරණ:* .' + FILE.SEW40FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW41FILE + '\n*❄විස්තර:* ' + SDISC.SEW41DISC + '\n*✨උදාහරණ:* .' + FILE.SEW41FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW42FILE + '\n*❄විස්තර:* ' + SDISC.SEW42DISC + '\n*✨උදාහරණ:* .' + FILE.SEW42FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW43FILE + '\n*❄විස්තර:* ' + SDISC.SEW43DISC + '\n*✨උදාහරණ:* .' + FILE.SEW43FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW44FILE + '\n*❄විස්තර:* ' + SDISC.SEW44DISC + '\n*✨උදාහරණ:* .' + FILE.SEW44FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW45FILE + '\n*❄විස්තර:* ' + SDISC.SEW45DISC + '\n*✨උදාහරණ:* .' + FILE.SEW45FILE + ' Ravindu\n\n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));
    
QueenSew.newcmdaddtosew({pattern: '2text', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'TEXT MAKER LIST 2\n**************\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW46FILE + '\n*❄විස්තර:* ' + SDISC.SEW46DISC + '\n*✨උදාහරණ:* .' + FILE.SEW46FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW47FILE + '\n*❄විස්තර:* ' + SDISC.SEW47DISC + '\n*✨උදාහරණ:* .' + FILE.SEW47FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW48FILE + '\n*❄විස්තර:* ' + SDISC.SEW48DISC + '\n*✨උදාහරණ:* .' + FILE.SEW48FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW49FILE + '\n*❄විස්තර:* ' + SDISC.SEW49DISC + '\n*✨උදාහරණ:* .' + FILE.SEW49FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW50FILE + '\n*❄විස්තර:* ' + SDISC.SEW50DISC + '\n*✨උදාහරණ:* .' + FILE.SEW50FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW51FILE + '\n*❄විස්තර:* ' + SDISC.SEW51DISC + '\n*✨උදාහරණ:* .' + FILE.SEW51FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW52FILE + '\n*❄විස්තර:* ' + SDISC.SEW52DISC + '\n*✨උදාහරණ:* .' + FILE.SEW52FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW53FILE + '\n*❄විස්තර:* ' + SDISC.SEW53DISC + '\n*✨උදාහරණ:* .' + FILE.SEW53FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW54FILE + '\n*❄විස්තර:* ' + SDISC.SEW54DISC + '\n*✨උදාහරණ:* .' + FILE.SEW54FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW55FILE + '\n*❄විස්තර:* ' + SDISC.SEW55DISC + '\n*✨උදාහරණ:* .' + FILE.SEW55FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW56FILE + '\n*❄විස්තර:* ' + SDISC.SEW56DISC + '\n*✨උදාහරණ:* .' + FILE.SEW56FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW57FILE + '\n*❄විස්තර:* ' + SDISC.SEW57DISC + '\n*✨උදාහරණ:* .' + FILE.SEW57FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW58FILE + '\n*❄විස්තර:* ' + SDISC.SEW58DISC + '\n*✨උදාහරණ:* .' + FILE.SEW58FILE + ' Ravindu\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW59FILE + '\n*❄විස්තර:* ' + SDISC.SEW59DISC + '\n*✨උදාහරණ:* .' + FILE.SEW59FILE + ' Ravindu/Manoj\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW60FILE + '\n*❄විස්තර:* ' + SDISC.SEW60DISC + '\n*✨උදාහරණ:* .' + FILE.SEW60FILE + ' Ravindu/Manoj\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW61FILE + '\n*❄විස්තර:* ' + SDISC.SEW61DISC + '\n*✨උදාහරණ:* .' + FILE.SEW61FILE + ' Ravindu/Manoj\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW62FILE + '\n*❄විස්තර:* ' + SDISC.SEW62DISC + '\n*✨උදාහරණ:* .' + FILE.SEW62FILE + ' Ravindu/Manoj\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW63FILE + '\n*❄විස්තර:* ' + SDISC.SEW63DISC + '\n*✨උදාහරණ:* .' + FILE.SEW63FILE + ' Ravindu/Manoj\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW64FILE + '\n*❄විස්තර:* ' + SDISC.SEW64DISC + '\n*✨උදාහරණ:* .' + FILE.SEW64FILE + ' Ravindu/Manoj\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW65FILE + '\n*❄විස්තර:* ' + SDISC.SEW65DISC + '\n*✨උදාහරණ:* .' + FILE.SEW65FILE + ' Ravindu/Manoj\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW66FILE + '\n*❄විස්තර:* ' + SDISC.SEW66DISC + '\n*✨උදාහරණ:* .' + FILE.SEW66FILE + ' Ravindu/Manoj\n\n' + '*👑කමාන්ඩ්:* .' + FILE.SEW67FILE + '\n*❄විස්තර:* ' + SDISC.SEW67DISC + '\n*✨උදාහරණ:* .' + FILE.SEW67FILE + ' Ravindu\n\n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' })

    }));
    
    QueenSew.newcmdaddtosew({pattern: '6text', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'TEXT MAKER LIST 6\n**************\n\n*👑කමාන්ඩ්ස්:* .horror\n*❄විස්තර:*  Horror Text Effect\n*✨උදාහරණ:* .horror Ravindu\n\n*👑කමාන්ඩ්ස්:* .fiction\n*❄විස්තර:*  Fiction Text Effect\n*✨උදාහරණ:* .fiction Ravindu\n\n*👑කමාන්ඩ්ස්:* .transformer\n*❄විස්තර:*  Transformer Text Effect\n*✨උදාහරණ:* .transformer Ravindu\n\n*👑කමාන්ඩ්ස්:* .berry\n*❄විස්තර:*  Berry Text Effect\n*✨උදාහරණ:* .berry Ravindu\n\n*👑කමාන්ඩ්ස්:* .thunder\n*❄විස්තර:*  Text Effect\n*✨උදාහරණ:* .thunder Ravindu\n\n*👑කමාන්ඩ්ස්:* .magma\n*❄විස්තර:*  Magma Text Effect\n*✨උදාහරණ:* .magma Ravindu\n\n*👑කමාන්ඩ්ස්:* .3dstone\n*❄විස්තර:*  3d Stone Text Effect\n*✨උදාහරණ:* .3dstone Ravindu\n\n*👑කමාන්ඩ්ස්:* .4neon\n*❄විස්තර:*  Neon Text Effect\n*✨උදාහරණ:* .4neon Ravindu\n\n*👑කමාන්ඩ්ස්:* .1glitch\n*❄විස්තර:*  Glitch Text Effect\n*✨උදාහරණ:* .1glitch Ravindu\n\n*👑කමාන්ඩ්ස්:* .2glitch\n*❄විස්තර:*  Glitch Text Effect\n*✨උදාහරණ:* .2glitch Ravindu\n\n*👑කමාන්ඩ්ස්:* .1harry\n*❄විස්තර:*  Harry Text Effect\n*✨උදාහරණ:* .1harry Ravindu\n\n*👑කමාන්ඩ්ස්:* .crack\n*❄විස්තර:*  Crack Text Effect\n*✨උදාහරණ:* .crack Ravindu\n\n*👑කමාන්ඩ්ස්:* .paper\n*❄විස්තර:*  Paper Text Effect\n*✨උදාහරණ:* .paper Ravindu\n\n*👑කමාන්ඩ්ස්:* .13d\n*❄විස්තර:*  3D Text Effect\n*✨උදාහරණ:* .13d Ravindu\n\n*👑කමාන්ඩ්ස්:* .14d\n*❄විස්තර:*  3d Text Effect\n*✨උදාහරණ:* .14d Ravindu \n\n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));
    
    QueenSew.newcmdaddtosew({pattern: '7text', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'TEXT MAKER LIST 7\n**************\n\n*👑කමාන්ඩ්ස්:* .1beach\n*❄විස්තර:*  Beach Text Effect\n*✨උදාහරණ:* .1beach Ravindu\n\n*👑කමාන්ඩ්ස්:* .watertext\n*❄විස්තර:*  Water Text Text Effect\n*✨උදාහරණ:* .watertext Ravindu\n\n*👑කමාන්ඩ්ස්:* .2paper\n*❄විස්තර:*  Paper Text Effect\n*✨උදාහරණ:* .2paper Ravindu\n\n*👑කමාන්ඩ්ස්:* .1foggy\n*❄විස්තර:*  Foggy Drop Water Text Effect\n*✨උදාහරණ:* .1foggy Ravindu\n\n*👑කමාන්ඩ්ස්:* .2underwater\n*❄විස්තර:*  Under Water Text Effect\n*✨උදාහරණ:* .2underwater Ravindu\n\n*👑කමාන්ඩ්ස්:* .1graf\n*❄විස්තර:*  Graf Text Effect\n*✨උදාහරණ:* .1graf Ravindu\n\n*👑කමාන්ඩ්ස්:* .1xmas\n*❄විස්තර:*  X-mas Text Effect\n*✨උදාහරණ:* .1xmas Ravindu\n\n*👑කමාන්ඩ්ස්:* .1snow\n*❄විස්තර:*  Snow Text Effect\n*✨උදාහරණ:* .1snow Ravindu\n\n*👑කමාන්ඩ්ස්:* .1cloud\n*❄විස්තර:*  Cloud Text Effect\n*✨උදාහරණ:* .1cloud Ravindu\n\n*👑කමාන්ඩ්ස්:* .1luxury\n*❄විස්තර:*  Luxury Text Effect\n*✨උදාහරණ:* .1luxury Ravindu\n\n*👑කමාන්ඩ්ස්:* .3dtext\n*❄විස්තර:*  3dtext Text Effect\n*✨උදාහරණ:* .3dtext Ravindu\n\n*👑කමාන්ඩ්ස්:* .bpink\n*❄විස්තර:*  Blackpink Text Effect\n*✨උදාහරණ:* .bpink Ravindu\n\n*👑කමාන්ඩ්ස්:* .2cloud\n*❄විස්තර:*  Cloud Text Effect\n*✨උදාහරණ:* .2cloud Ravindu\n\n*👑කමාන්ඩ්ස්:* .3cloud\n*❄විස්තර:*  Cloud Text Effect\n*✨උදාහරණ:* .3cloud Ravindu\n\n*👑කමාන්ඩ්ස්:* .1sand\n*❄විස්තර:*  Sand Text Effect\n*✨උදාහරණ:* .1sand Ravindu\n\n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));
    
    QueenSew.newcmdaddtosew({pattern: '8text', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'TEXT MAKER LIST 8\n**************\n\n*👑කමාන්ඩ්ස්:* .2sand\n*❄විස්තර:*  Sand Text Effect\n*✨උදාහරණ:* .2sand Ravindu\n\n*👑කමාන්ඩ්ස්:* .3sand\n*❄විස්තර:*  Sand Text Effect\n*✨උදාහරණ:* .3sand Ravindu\n\n*👑කමාන්ඩ්ස්:* .4sand\n*❄විස්තර:*  Sand Text Effect\n*✨උදාහරණ:* .4sand Ravindu\n\n*👑කමාන්ඩ්ස්:* .1foil\n*❄විස්තර:*  Foil Text Effect\n*✨උදාහරණ:* .1foil Ravindu\n\n*👑කමාන්ඩ්ස්:* .glue\n*❄විස්තර:*  Glue Text Effect\n*✨උදාහරණ:* .glue Ravindu\n\n*👑කමාන්ඩ්ස්:* .metal\n*❄විස්තර:*  Metal Text Effect\n*✨උදාහරණ:* .metal Ravindu\n\n*👑කමාන්ඩ්ස්:* .2galaxy\n*❄විස්තර:*  Galaxy Text Effect\n*✨උදාහරණ:* .2galaxy Ravindu\n\n*👑කමාන්ඩ්ස්:* .1917\n*❄විස්තර:*  1917 Text Effect\n*✨උදාහරණ:* .1917 Ravindu\n\n*👑කමාන්ඩ්ස්:* .minion\n*❄විස්තර:*  Minion Cartoon Text Effect\n*✨උදාහරණ:* .minion Ravindu\n\n*👑කමාන්ඩ්ස්:* .boom\n*❄විස්තර:*  Boom Text Effect\n*✨උදාහරණ:* .boom Ravindu\n\n*👑කමාන්ඩ්ස්:* .holo\n*❄විස්තර:*  Holographic Text Effect\n*✨උදාහරණ:* .holo Ravindu\n\n*👑කමාන්ඩ්ස්:* .2metal\n*❄විස්තර:*  Metal Text Effect\n*✨උදාහරණ:* .2metal Ravindu\n\n*👑කමාන්ඩ්ස්:* .deluxe\n*❄විස්තර:*  Deluxe Text Effect\n*✨උදාහරණ:* .deluxe Ravindu\n\n*👑කමාන්ඩ්ස්:* .2luxury\n*❄විස්තර:*  Luxury Text Effect\n*✨උදාහරණ:* .2luxury Ravindu\n\n*👑කමාන්ඩ්ස්:* .3metal\n*❄විස්තර:*  Metal Text Effect\n*✨උදාහරණ:* .3metal Ravindu\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));
    
    QueenSew.newcmdaddtosew({pattern: '9text', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'TEXT MAKER LIST 9\n**************\n\n*👑කමාන්ඩ්ස්:* .2deluxe\n*❄විස්තර:*  Deluxe Text Effect\n*✨උදාහරණ:* .2deluxe Ravindu\n\n*👑කමාන්ඩ්ස්:* .1glossy\n*❄විස්තර:*  Glossy Text Effect\n*✨උදාහරණ:* .1glossy Ravindu\n\n*👑කමාන්ඩ්ස්:* .fabric\n*❄විස්තර:*  Fabric Text Effect\n*✨උදාහරණ:* .fabric Ravindu\n\n*👑කමාන්ඩ්ස්:* .5neon\n*❄විස්තර:*  NEON Text Effect\n*✨උදාහරණ:* .5neon Ravindu\n\n*👑කමාන්ඩ්ස්:* .newyear\n*❄විස්තර:*  New Year Text Effect\n*✨උදාහරණ:* .newyear Ravindu\n\n*👑කමාන්ඩ්ස්:* .avater\n*❄විස්තර:*  Avater Text Effect\n*✨උදාහරණ:* .avater Ravindu\n\n*👑කමාන්ඩ්ස්:* .2xmas\n*❄විස්තර:*  X-mas Text Effect\n*✨උදාහරණ:* .2xmas Ravindu\n\n*👑කමාන්ඩ්ස්:* .halloween\n*❄විස්තර:*  Helloween Text Effect\n*✨උදාහරණ:* .halloween Ravindu\n\n*👑කමාන්ඩ්ස්:* .darkgold\n*❄විස්තර:*  Dark Gold Text Effect\n*✨උදාහරණ:* .darkgold Ravindu\n\n*👑කමාන්ඩ්ස්:* .wicker\n*❄විස්තර:*  Wicker Text Effect\n*✨උදාහරණ:* .wicker Ravindu\n\n*👑කමාන්ඩ්ස්:* .leave\n*❄විස්තර:*  Leave Text Effect\n*✨උදාහරණ:* .leave Ravindu\n\n*👑කමාන්ඩ්ස්:* .firework\n*❄විස්තර:*  Fire Work Text Effect\n*✨උදාහරණ:* .firework Ravindu\n\n*👑කමාන්ඩ්ස්:* .skeleton\n*❄විස්තර:*  Skeleton Text Effect\n*✨උදාහරණ:* .skeleton Ravindu\n\n*👑කමාන්ඩ්ස්:* .gloss\n*❄විස්තර:*  Gloss Text Effect\n*✨උදාහරණ:* .gloss Ravindu\n\n*👑කමාන්ඩ්ස්:* .denim\n*❄විස්තර:*  Denim Text Effect\n*✨උදාහරණ:* .denim Ravindu\n\n*👑කමාන්ඩ්ස්:* .1star\n*❄විස්තර:*  Star Text Effect\n*✨උදාහරණ:* .1star Ravindu\n\n*👑කමාන්ඩ්ස්:* .2star\n*❄විස්තර:*  Star Text Effect\n*✨උදාහරණ:* .2star Ravindu\n\n*👑කමාන්ඩ්ස්:* .1stone\n*❄විස්තර:*  Stone Text Effect\n*✨උදාහරණ:* .1stone Ravindu\n\n*👑කමාන්ඩ්ස්:* .rock\n*❄විස්තර:*  Rock Text Effect\n*✨උදාහරණ:* .rock Ravindu\n\n*👑කමාන්ඩ්ස්:* .lava\n*❄විස්තර:*  Lava Text Effect\n*✨උදාහරණ:* .lava Ravindu\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));
    QueenSew.newcmdaddtosew({pattern: '1logo', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'LOGO MAKER LIST 1\n**************\n\n🇱🇰Usage: *.gamelogo*\n💗Desc: Converts the text into gamelogo logo.\n🌷 Example : *.gamelogo Ravindu*\n\n🇱🇰Usage: *.logov2*\n💗Desc: Converts the text into logov2 logo.\n🌷 Example : *.logov2 Ravindu*\n\n🇱🇰Usage: *.logogalaxy*\n💗Desc: Converts the text into logogalaxy logo.\n🌷 Example : *.logogalaxy Ravindu*\n\n🇱🇰Usage: *.mail*\n💗Desc: Converts the text into mail.\n🌷 Example : *.mail Ravindu/Manoj*\n\n🇱🇰Usage: *.brandlogo*\n💗Desc: Converts the text into brandlogo logo.\n🌷 Example : *.brandlogo Ravindu;1*\n🌷 Example : *.brandlogo Ravindu;2*\n🌷 Example : *.brandlogo Ravindu;3*\n🌷 Example : *.brandlogo Ravindu;4*\n🌷 Example : *.brandlogo Ravindu;5*\n🌷 Example : *.brandlogo Ravindu;6*\n🌷 Example : *.brandlogo Ravindu;7*\n🌷 Example : *.brandlogo Ravindu;8*\n🌷 Example : *.brandlogo Ravindu;9*\n🌷 Example : *.brandlogo Ravindu;10*\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));
    QueenSew.newcmdaddtosew({pattern: '2logo', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'LOGO MAKER LIST 2\n**************\n\n🇱🇰Usage: *.ninjalogo*\n💗Desc: Enters the text as the caption for a ninja themed logo.\n🌷 Example : *.ninjalogo Ravindu*\n\n🇱🇰Usage: *.sparkling*\n💗Desc: Converts the text into a sparkling themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🌷 Example : *.sparkling Ravindu;Manoj*\n\n🇱🇰Usage: *.shadow*\n💗Desc: Converts the text into shadow themed image.\n🌷 Example : *.Shadow Ravindu*\n\n🇱🇰Usage: *.phub*\n💗Desc: Converts the text into phub logo.\n🌷 Example : *.phub Ravindu/Manoj*\n\n🇱🇰Usage: *.lovemsg*\n💗Desc: It Sends love message style image of the text provided.\n🌷 Example : *.lovemsg Ravindu*\n\n🇱🇰Usage: *.grass*\n💗Desc: It Sends a grass image of the text provided.\n🌷 Example : *.grass Ravindu*\n\n🇱🇰Usage: *.blood*\n💗Desc: It Sends a blood image of the text provided.\n🌷 Example : *.blood Ravindu*\n\n🇱🇰Usage: *.romance*\n💗Desc: It Sends a green image with love shapes of the text provided.\n🌷 Example : *.romance Ravindu*\n\n🇱🇰Usage: *.candlemug*\n💗Desc: It Sends a mug image of the text provided.\n🌷 Example : *.candlemug Ravindu*\n\n🇱🇰Usage: *.snow*\n💗Desc: It Sends a snow image of the text provided.\n🌷 Example : *.snow Ravindu*\n\n🇱🇰Usage: *.cloud*\n💗Desc: It Sends a sky image of the text provided\n🌷 Example : *.cloud Ravindu*\n\n🇱🇰Usage: *.flower*\n💗Desc: It Sends a flower image of the text provided\n🌷 Example : *.flower Ravindu*\n\n🇱🇰Usage: *.burn*\n💗Desc: It Sends a half burned paper image of the text provided\n🌷 Example : *.burn Ravindu*\n\n🇱🇰Usage: *.candy*\n💗Desc: It Sends a candy image of the text provided\n🌷 Example : *.candy Ravindu*\n\n🇱🇰Usage: *.wood*\n💗Desc: It Sends a wood carved image of the text provided.\n🌷 Example : *.wood Ravindu*\n\n🇱🇰Usage: *.latte*\n💗Desc: It put the text as latte art within a coffee cup.\n🌷 Example : *.latte Ravindu*\n\n🇱🇰Usage: *.8bit*\n💗Desc: Converts the text into an 8bit style image.\nYou must enter the heading and subheading seperated by *;* in order!\n🌷 Example : *. Ravindu ; Manoj*\n\n🇱🇰Usage: *.glue*\n💗Desc: it makes 3D Glue text\n🌷 Example : *.glue Ravindu*\n\n🇱🇰Usage: *.harrypotter*\n💗Desc: Converts the text into a harrypotter themed image.\n🌷 Example : *.harrypotter Ravindu*\n\n🇱🇰Usage: *.watercolour*\n💗Desc: Converts the text into a watercolour themed image.\n🌷 Example : *.watercolor Ravindu*\n\n🇱🇰Usage: *.neonlight*\n💗Desc: Converts the text into a neonlight themed image.\n🌷 Example : *.neonlight Ravindu*\n\n🇱🇰Usage: *.3dtext*\n💗Desc: Converts the provided text into a 3D style image.\n🌷 Example : *.3dtext Ravindu*\n\n🇱🇰Usage: *.glitch*\n💗Desc: It Sends a glitch style image of the text provided\nYou must enter the heading and subheading seperated by *;* in order!.\n🌷 Example : *.glitch Ravindu;Manoj*\n\n🇱🇰Usage: *.galaxy*\n💗Desc: it makes metal galaxy text\n🌷 Example : *.galaxy Ravindu/Manoj*\n\n🇱🇰Usage: *.skull*\n💗Desc: it makes skull logo\n🌷 Example : *.skull Ravindu*\n\n🇱🇰Usage: *.robot*\n💗Desc: it makes Robot logo\n🌷 Example : *.robot Ravindu*\n\n🇱🇰Usage: *.toxic*\n💗Desc: it makes Toxic logo\n🌷 Example : *.toxic Ravindu*\n\n🇱🇰Usage: *orangeglass*\n💗Desc: it makes gradient text\n🌷 Example : *.orangeglass Ravindu*\n\n🇱🇰Usage: *.sandwriting*\n💗Desc: It Sends a sand image of the text provided.\n🌷 Example : *.sandwriting Ravindu*\n\n🇱🇰Usage: *.underwater*\n💗Desc: It Sends a ocean image of the text provided\n🌷 Example : *.underwater Ravindu*\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));
    QueenSew.newcmdaddtosew({pattern: '3logo', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
    r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'LOGO MAKER LIST 3\n**************\n\nUsage: *.freefire*\n✨Desc: Enters the text as the caption for a freefire themed logo.\n💍 Example : *.freefire Ravindu*\n\n❄️Usage: *.cslogo*\n✨Desc: Enters the text as the caption for a cs go themed logo.\n💍 Example : *.cslogo Ravindu*\n\n❄️Usage: *.crosslogo*\n✨Desc: Enters the text as the caption for a cross themed logo.\n💍 Example : *.crosslogo Ravindu*\n\n❄️Usage: *.bpink*\n✨Desc: Enters the text as the caption for a blackpink themed logo.\n💍 Example : *.bpink Ravindu*\n\n❄️Usage: *.ninjalogo*\n✨Desc: Enters the text as the caption for a ninja themed logo.\n💍 Example : *.ninjalogo Ravindu*\n\n❄️Usage: *.logopubg*\n✨Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.logopubg Ravindu;Manoj*\n\n❄️Usage: *.water2color*\n✨Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.water2color Ravindu;Manoj*\n\n❄️Usage: *.snowwrite*\n✨Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.snowwrite Ravindu;Manoj*\n\n❄️Usage: *.logowolf*\n✨Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.logowolf Ravindu;Manoj*\n\n❄️Usage: *.sparkling*\n✨Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.sparkling Ravindu;Manoj*\n\n❄️Usage: *.phub*\n✨Desc: Converts the text into phub logo.\n💍 Example : *.phub Ravindu/Manoj*\n\n❄️Usage: *.1neon*\n✨Desc: Converts the text into neon themed image.\n💍 Example : *.1neon Ravindu*\n\n❄️Usage: *.naruto*\n✨Desc: Converts the text into naruto themed image.\n💍 Example : *.naruto Ravindu*\n\n❄️Usage: *.blueneon*\n✨Desc: Converts the text into blueneon themed image.\n💍 Example : *.blueneon Ravindu*\n\n❄️Usage: *.2hacker*\n✨Desc: Converts the text into hacker themed image.\n💍 Example : *.2hacker Ravindu*\n\n❄️Usage: *.3hacker*\n✨Desc: Converts the text into hacker themed image.\n💍 Example : *.3hacker Ravindu*\n\n❄️Usage: *.breakwall*\n✨Desc: Converts the text into breakwall themed image.\n💍 Example : *.breakwall Ravindu*\n\n❄️Usage: *.dropwater*\n✨Desc: Converts the text into dropwater themed image.\n💍 Example : *.dropwater Ravindu*\n\n❄️Usage: *.flowertext*\n✨Desc: Converts the text into flowertext themed image.\n💍 Example : *.flowertext Ravindu*\n\n❄️Usage: *.sliktext*\n✨Desc: Converts the text into sliktext themed image.\n💍 Example : *.sliktext Ravindu*\n\n❄️Usage: *.flame*\n✨Desc: Converts the text into flame themed image.\n💍 Example : *.flame Ravindu*\n\n❄️Usage: *.1glow*\n✨Desc: Converts the text into 1glow themed image.\n💍 Example : *.1glow Ravindu*\n\n❄️Usage: *.skytext*\n✨Desc: Converts the text into skytext themed image.\n💍 Example : *.skytext Ravindu*\n\n❄️Usage: *.smoke*\n✨Desc: Converts the text into smoke themed image.\n💍 Example : *.smoke Ravindu*\n\n❄️Usage: *.lithgtext*\n✨Desc: Converts the text into lithgtext themed image.\n💍 Example : *.lithgtext Ravindu*\n\n❄️Usage: *.sfire*\n✨Desc: Converts the text into sfire themed image.\n💍 Example : *.sfire Ravindu*\n\n❄️Usage: *.sandw*\n✨Desc: Converts the text into sandw themed image.\n💍 Example : *.sandw Ravindu*\n\n❄️Usage: *.gplay*\n✨Desc: Converts the text into gplay themed image.\n💍 Example : *.gplay Ravindu*\n\n❄️Usage: *.splay*\n✨Desc: Converts the text into splay themed image.\n💍 Example : *.splay Ravindu*\n\n❄️Usage: *.3dbox*\n✨Desc: Converts the text into 3dbox themed image.\n💍 Example : *.3dbox Ravindu*\n\n❄️Usage: *.leave*\n✨Desc: Converts the text into leave themed image.\n💍 Example : *.leave Ravindu*\n\n❄️Usage: *.blood*\n✨Desc: It Sends a blood image of the text provided.\n💍 Example : *.blood Ravindu*\n\n❄️Usage: *.cloud*\n✨Desc: It Sends a sky image of the text provided\n💍 Example : *.cloud Ravindu*\n\n❄️Usage: *.glue*\n✨Desc: it makes 3D Glue text\n💍 Example : *.glue Ravindu*\n\n❄️Usage: *.watercolour*\n✨Desc: Converts the text into a watercolour themed image.\n💍 Example : *.watercolor Ravindu*\n\n❄️Usage: *.neonlight*\n✨Desc: Converts the text into a neonlight themed image.\n💍 Example : *.neonlight Ravindu*\n\n❄️Usage: *.3dtext*\n✨Desc: Converts the provided text into a 3D style image.\n💍 Example : *.3dtext Ravindu*\n\n❄️Usage: *.galaxy*\n✨Desc: it makes metal galaxy text\n💍 Example : *.galaxy Ravindu/Manoj*\n\n❄️Usage: *.skull*\n✨Desc: it makes skull logo\n💍 Example : *.skull Ravindu*\n\n❄️Usage: *.robot*\n✨Desc: it makes Robot logo\n💍 Example : *.robot Ravindu*\n❄️Usage: *.toxic*\n✨Desc: it makes Toxic logo\n💍 Example : *.toxic Ravindu*\n\n❄️Usage: *orangeglass*\n✨Desc: it makes gradient text\n💍 Example : *.orangeglass Ravindu*\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })

    }));

QueenSew.newcmdaddtosew({pattern: '1glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW1LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW1FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW1FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW2LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW2FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW2FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW3LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW3FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW3FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '4glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW4LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW4FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW4FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '5glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW5LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW5FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW5FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '6glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW6LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW6FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW6FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'captan ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW7LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW7FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW7FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1robot ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW8LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW8FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW8FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1rainbow ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW9LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW9FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW9FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'toxic ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW10LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW10FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW10FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '7glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW11LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW11FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW11FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '8glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW12LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW12FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW12FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'choc ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW13LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW13FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW13FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'strawberry ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW14LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW14FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW14FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'fish ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW15LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW15FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW15FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'bread ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW16LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW16FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW16FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2hacker ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW17LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW17FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW17FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2blood ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW18LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW18FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW18FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '6neon ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW19LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW19FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW19FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2thunder ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW20LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW20FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW20FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3dbox ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW21LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW21FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW21FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'road ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW22LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW22FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW22FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'bokeh ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW23LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW23FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW23FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '7neon ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW24LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW24FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW24FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'glowtext ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW25LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW25FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW25FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2foggy ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW26LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW26FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW26FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'wall ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW27LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW27FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW27FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3xmas ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW28LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW28FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW28FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'honny ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW29LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW29FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW29FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'drug ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW30LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW30FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW30FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3blood ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW31LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW31FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW31FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'slab ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW32LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW32FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW32FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2slab ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW33LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW33FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW33FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'ice ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW34LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW34FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW34FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'fruit ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW35LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW35FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW35FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'rusty ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW36LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW36FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW36FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1gold ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW37LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW37FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW37FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'biscuit ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW38LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW38FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW38FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'bagel ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW39LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW39FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW39FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1wood ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW40LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW40FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW40FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2robot ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW41LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW41FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW41FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2rainbow ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW42LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW42FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW42FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1gem ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW43LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW43FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW43FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'hotmetal ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW44LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW44FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW44FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1glitter ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW45LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW45FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW45FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2glitter ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW46LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW46FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW46FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3glitter ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW47LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW47FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW47FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '4glitter ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW48LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW48FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW48FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '5glitter ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW49LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW49FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW49FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '6glitter ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW50LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW50FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW50FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'erod ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW51LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW51FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW51FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1carbon ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW52LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW52FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW52FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1smetal ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW53LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW53FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW53FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2gem ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW54LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW54FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW54FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2smetal ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW55LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW55FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW55FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3smetal ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW56LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW56FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW56FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'chrome ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW57LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW57FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW57FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'logojocker ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa(SLINK.SEW58LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW58FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW58FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'steel ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindu.rgmsa(SLINK.SEW59LINK,
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW59FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW59FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'ninja2logo ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindu.rgmsa(SLINK.SEW60LINK,
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW60FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW60FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'wolf ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindu.rgmsa(SLINK.SEW61LINK,
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW61FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW61FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'lionlogo ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindu.rgmsa(SLINK.SEW62LINK,
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW62FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW62FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'phub ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindu.rgmsa(SLINK.SEW63LINK,
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW63FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW63FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'sstone ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindu.rgmsa(SLINK.SEW64LINK,
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW64FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW64FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'blub ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindu.rgmsa(SLINK.SEW65LINK,
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW65FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW65FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'vgame ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindu.rgmsa(SLINK.SEW66LINK,
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW66FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW66FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'arrow ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsc(SLINK.SEW67LINK,
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/${FILE.SEW67FILE}.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/${FILE.SEW67FILE}.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'penta ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsb("https://photooxy.com/other-design/glow-pentakill-cover-lol-136.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/pt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/pt.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
}
