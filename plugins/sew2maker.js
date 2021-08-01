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

   QueenSew.newcmdaddtosew({pattern: 'text8', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

    await message.sendMessage('```❤❤❤❤❤❤❤❤❤❤❤\n\n\n\n👑SEW TEXT MAKER👑```\n_~*coded By t.me/RavinduManoj*~_\n\n\n\n❤❤❤❤❤❤❤❤❤❤\n\n\n\nClick..👉👉👉 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n❤\n❄️Usage: *.freefire*\n✨Desc: Enters the text as the caption for a freefire themed logo.\n💍 Example : *.freefire Ravindu*\n\n❄️Usage: *.cslogo*\n✨Desc: Enters the text as the caption for a cs go themed logo.\n💍 Example : *.cslogo Ravindu*\n\n❄️Usage: *.crosslogo*\n✨Desc: Enters the text as the caption for a cross themed logo.\n💍 Example : *.crosslogo Ravindu*\n\n❄️Usage: *.bpink*\n✨Desc: Enters the text as the caption for a blackpink themed logo.\n💍 Example : *.bpink Ravindu*\n\n❄️Usage: *.ninjalogo*\n✨Desc: Enters the text as the caption for a ninja themed logo.\n💍 Example : *.ninjalogo Ravindu*\n\n❄️Usage: *.logopubg*\n✨Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.logopubg Ravindu;Manoj*\n\n❄️Usage: *.water2color*\n✨Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.water2color Ravindu;Manoj*\n\n❄️Usage: *.snowwrite*\n✨Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.snowwrite Ravindu;Manoj*\n\n❄️Usage: *.logowolf*\n✨Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.logowolf Ravindu;Manoj*\n\n❄️Usage: *.sparkling*\n✨Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.sparkling Ravindu;Manoj*\n\n❄️Usage: *.phub*\n✨Desc: Converts the text into phub logo.\n💍 Example : *.phub Ravindu/Manoj*\n\n❄️Usage: *.1neon*\n✨Desc: Converts the text into neon themed image.\n💍 Example : *.1neon Ravindu*\n\n❄️Usage: *.naruto*\n✨Desc: Converts the text into naruto themed image.\n💍 Example : *.naruto Ravindu*\n\n❄️Usage: *.blueneon*\n✨Desc: Converts the text into blueneon themed image.\n💍 Example : *.blueneon Ravindu*\n\n❄️Usage: *.2hacker*\n✨Desc: Converts the text into hacker themed image.\n💍 Example : *.2hacker Ravindu*\n\n❄️Usage: *.3hacker*\n✨Desc: Converts the text into hacker themed image.\n💍 Example : *.3hacker Ravindu*\n\n❄️Usage: *.breakwall*\n✨Desc: Converts the text into breakwall themed image.\n💍 Example : *.breakwall Ravindu*\n\n❄️Usage: *.dropwater*\n✨Desc: Converts the text into dropwater themed image.\n💍 Example : *.dropwater Ravindu*\n\n❄️Usage: *.flowertext*\n✨Desc: Converts the text into flowertext themed image.\n💍 Example : *.flowertext Ravindu*\n\n❄️Usage: *.sliktext*\n✨Desc: Converts the text into sliktext themed image.\n💍 Example : *.sliktext Ravindu*\n\n❄️Usage: *.flame*\n✨Desc: Converts the text into flame themed image.\n💍 Example : *.flame Ravindu*\n\n❄️Usage: *.1glow*\n✨Desc: Converts the text into 1glow themed image.\n💍 Example : *.1glow Ravindu*\n\n❄️Usage: *.skytext*\n✨Desc: Converts the text into skytext themed image.\n💍 Example : *.skytext Ravindu*\n\n❄️Usage: *.smoke*\n✨Desc: Converts the text into smoke themed image.\n💍 Example : *.smoke Ravindu*\n\n❄️Usage: *.lithgtext*\n✨Desc: Converts the text into lithgtext themed image.\n💍 Example : *.lithgtext Ravindu*\n\n❄️Usage: *.sfire*\n✨Desc: Converts the text into sfire themed image.\n💍 Example : *.sfire Ravindu*\n\n❄️Usage: *.sandw*\n✨Desc: Converts the text into sandw themed image.\n💍 Example : *.sandw Ravindu*\n\n❄️Usage: *.gplay*\n✨Desc: Converts the text into gplay themed image.\n💍 Example : *.gplay Ravindu*\n\n❄️Usage: *.splay*\n✨Desc: Converts the text into splay themed image.\n💍 Example : *.splay Ravindu*\n\n❄️Usage: *.3dbox*\n✨Desc: Converts the text into 3dbox themed image.\n💍 Example : *.3dbox Ravindu*\n\n❄️Usage: *.leave*\n✨Desc: Converts the text into leave themed image.\n💍 Example : *.leave Ravindu*\n\n❄️Usage: *.blood*\n✨Desc: It Sends a blood image of the text provided.\n💍 Example : *.blood Ravindu*\n\n❄️Usage: *.cloud*\n✨Desc: It Sends a sky image of the text provided\n💍 Example : *.cloud Ravindu*\n\n❄️Usage: *.glue*\n✨Desc: it makes 3D Glue text\n💍 Example : *.glue Ravindu*\n\n❄️Usage: *.watercolour*\n✨Desc: Converts the text into a watercolour themed image.\n💍 Example : *.watercolor Ravindu*\n\n❄️Usage: *.neonlight*\n✨Desc: Converts the text into a neonlight themed image.\n💍 Example : *.neonlight Ravindu*\n\n❄️Usage: *.3dtext*\n✨Desc: Converts the provided text into a 3D style image.\n💍 Example : *.3dtext Ravindu*\n\n❄️Usage: *.galaxy*\n✨Desc: it makes metal galaxy text\n💍 Example : *.galaxy Ravindu/Manoj*\n\n❄️Usage: *.skull*\n✨Desc: it makes skull logo\n💍 Example : *.skull Ravindu*\n\n❄️Usage: *.robot*\n✨Desc: it makes Robot logo\n💍 Example : *.robot Ravindu*\n❄️Usage: *.toxic*\n✨Desc: it makes Toxic logo\n💍 Example : *.toxic Ravindu*\n\n❄️Usage: *orangeglass*\n✨Desc: it makes gradient text\n💍 Example : *.orangeglass Ravindu*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By t.me/RavinduManoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷···\n');

    }));
    QueenSew.newcmdaddtosew({ pattern: '1neon ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'naruto ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'blueneon ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: '2hacker ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'breakwall ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: '3hacker ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'dropwater ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'flowertext ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'crosslogo ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'sliktext ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'flame ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: '1glow ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'somke ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'skytext ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'cslogo ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'lithgtext ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'xmas ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'sfire ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'sandw ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'gplay ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'splay ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: '3dbox ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'bpink ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'leave ?(.*)', fromSew: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({pattern: 'logowolf ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
    QueenSew.newcmdaddtosew({pattern: 'logopubg ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
    QueenSew.newcmdaddtosew({pattern: 'snowwrite ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
   QueenSew.newcmdaddtosew({pattern: 'water2color ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
    
}

else if (Config.WORKTYPE == 'public') {

    QueenSew.newcmdaddtosew({pattern: 'text8', fromSew: false,}, (async (message, match) => {    

    await message.sendMessage('```👑SEW TEXT MAKER👑```\n_~*coded By t.me/RavinduManoj*~_\n\n❄️Usage: *.freefire*\n✨Desc: Enters the text as the caption for a freefire themed logo.\n💍 Example : *.freefire Ravindu*\n\n❄️Usage: *.cslogo*\n✨Desc: Enters the text as the caption for a cs go themed logo.\n💍 Example : *.cslogo Ravindu*\n\n❄️Usage: *.crosslogo*\n✨Desc: Enters the text as the caption for a cross themed logo.\n💍 Example : *.crosslogo Ravindu*\n\n❄️Usage: *.bpink*\n✨Desc: Enters the text as the caption for a blackpink themed logo.\n💍 Example : *.bpink Ravindu*\n\n❄️Usage: *.ninjalogo*\n✨Desc: Enters the text as the caption for a ninja themed logo.\n💍 Example : *.ninjalogo Ravindu*\n\n❄️Usage: *.logopubg*\n✨Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.logopubg Ravindu;Manoj*\n\n❄️Usage: *.water2color*\n✨Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.water2color Ravindu;Manoj*\n\n❄️Usage: *.snowwrite*\n✨Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.snowwrite Ravindu;Manoj*\n\n❄️Usage: *.logowolf*\n✨Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.logowolf Ravindu;Manoj*\n\n❄️Usage: *.sparkling*\n✨Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n💍 Example : *.sparkling Ravindu;Manoj*\n\n❄️Usage: *.phub*\n✨Desc: Converts the text into phub logo.\n💍 Example : *.phub Ravindu/Manoj*\n\n❄️Usage: *.1neon*\n✨Desc: Converts the text into neon themed image.\n💍 Example : *.1neon Ravindu*\n\n❄️Usage: *.naruto*\n✨Desc: Converts the text into naruto themed image.\n💍 Example : *.naruto Ravindu*\n\n❄️Usage: *.blueneon*\n✨Desc: Converts the text into blueneon themed image.\n💍 Example : *.blueneon Ravindu*\n\n❄️Usage: *.2hacker*\n✨Desc: Converts the text into hacker themed image.\n💍 Example : *.2hacker Ravindu*\n\n❄️Usage: *.3hacker*\n✨Desc: Converts the text into hacker themed image.\n💍 Example : *.3hacker Ravindu*\n\n❄️Usage: *.breakwall*\n✨Desc: Converts the text into breakwall themed image.\n💍 Example : *.breakwall Ravindu*\n\n❄️Usage: *.dropwater*\n✨Desc: Converts the text into dropwater themed image.\n💍 Example : *.dropwater Ravindu*\n\n❄️Usage: *.flowertext*\n✨Desc: Converts the text into flowertext themed image.\n💍 Example : *.flowertext Ravindu*\n\n❄️Usage: *.sliktext*\n✨Desc: Converts the text into sliktext themed image.\n💍 Example : *.sliktext Ravindu*\n\n❄️Usage: *.flame*\n✨Desc: Converts the text into flame themed image.\n💍 Example : *.flame Ravindu*\n\n❄️Usage: *.1glow*\n✨Desc: Converts the text into 1glow themed image.\n💍 Example : *.1glow Ravindu*\n\n❄️Usage: *.skytext*\n✨Desc: Converts the text into skytext themed image.\n💍 Example : *.skytext Ravindu*\n\n❄️Usage: *.smoke*\n✨Desc: Converts the text into smoke themed image.\n💍 Example : *.smoke Ravindu*\n\n❄️Usage: *.lithgtext*\n✨Desc: Converts the text into lithgtext themed image.\n💍 Example : *.lithgtext Ravindu*\n\n❄️Usage: *.sfire*\n✨Desc: Converts the text into sfire themed image.\n💍 Example : *.sfire Ravindu*\n\n❄️Usage: *.sandw*\n✨Desc: Converts the text into sandw themed image.\n💍 Example : *.sandw Ravindu*\n\n❄️Usage: *.gplay*\n✨Desc: Converts the text into gplay themed image.\n💍 Example : *.gplay Ravindu*\n\n❄️Usage: *.splay*\n✨Desc: Converts the text into splay themed image.\n💍 Example : *.splay Ravindu*\n\n❄️Usage: *.3dbox*\n✨Desc: Converts the text into 3dbox themed image.\n💍 Example : *.3dbox Ravindu*\n\n❄️Usage: *.leave*\n✨Desc: Converts the text into leave themed image.\n💍 Example : *.leave Ravindu*\n\n❄️Usage: *.blood*\n✨Desc: It Sends a blood image of the text provided.\n💍 Example : *.blood Ravindu*\n\n❄️Usage: *.cloud*\n✨Desc: It Sends a sky image of the text provided\n💍 Example : *.cloud Ravindu*\n\n❄️Usage: *.glue*\n✨Desc: it makes 3D Glue text\n💍 Example : *.glue Ravindu*\n\n❄️Usage: *.watercolour*\n✨Desc: Converts the text into a watercolour themed image.\n💍 Example : *.watercolor Ravindu*\n\n❄️Usage: *.neonlight*\n✨Desc: Converts the text into a neonlight themed image.\n💍 Example : *.neonlight Ravindu*\n\n❄️Usage: *.3dtext*\n✨Desc: Converts the provided text into a 3D style image.\n💍 Example : *.3dtext Ravindu*\n\n❄️Usage: *.galaxy*\n✨Desc: it makes metal galaxy text\n💍 Example : *.galaxy Ravindu/Manoj*\n\n❄️Usage: *.skull*\n✨Desc: it makes skull logo\n💍 Example : *.skull Ravindu*\n\n❄️Usage: *.robot*\n✨Desc: it makes Robot logo\n💍 Example : *.robot Ravindu*\n❄️Usage: *.toxic*\n✨Desc: it makes Toxic logo\n💍 Example : *.toxic Ravindu*\n\n❄️Usage: *orangeglass*\n✨Desc: it makes gradient text\n💍 Example : *.orangeglass Ravindu*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By t.me/RavinduManoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n');

    }));

    QueenSew.newcmdaddtosew({ pattern: '1neon ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'naruto ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'blueneon ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: '2hacker ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'breakwall ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: '3hacker ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'dropwater ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'flowertext ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'crosslogo ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'sliktext ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'flame ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: '1glow ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'somke ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'skytext ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'cslogo ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'lithgtext ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'xmas ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'sfire ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'sandw ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'gplay ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'splay ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: '3dbox ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'bpink ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'leave ?(.*)', fromSew: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

    }));
    QueenSew.newcmdaddtosew({pattern: 'logowolf ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
    QueenSew.newcmdaddtosew({pattern: 'logopubg ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
    QueenSew.newcmdaddtosew({pattern: 'snowwrite ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
   QueenSew.newcmdaddtosew({pattern: 'water2color ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=X47ORif98M7NhMQAezQDKMiRiZT&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*' })

}));
    
    
}
