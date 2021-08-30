/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('eddu');
 if (Config.PSW !== 'kingraviya') {
if (Config.WORKTYPE == 'private') {

    QueenSew.newcmdaddtosew({pattern: 'edu', fromMe: true, desc: Lang.ADU}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/N6XtRj0/depositphotos-75811621-stock-photo-students-outside-sitting-on-steps.jpg";
    r_text[1] = "https://i.ibb.co/z2bGpp3/college-life-group-students-walking-university-hall-chatting-138545920.jpg";
    r_text[2] = "https://i.ibb.co/PGgBJy0/images-1.jpg";
    r_text[3] = "https://i.ibb.co/DYFjXcJ/unnamed.jpg";
    r_text[4] = "https://i.ibb.co/vQLYfWq/edupaper590.jpg";
    r_text[5] = "https://i.ibb.co/KzCdHpf/q63YzR.jpg";
    r_text[6] = "https://i.ibb.co/6vcWvr4/education-wallpaper-1796152.jpg";
    r_text[7] = "https://i.ibb.co/qg31zV0/photo-1503676260728-1c00da094a0b.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '' + Config.BOTNAME + '\nඔබගේ අද්‍යාපන කටයුතු සාර්තක කරගැනීම සදහා...\n\nමෙය ඇතුලත් කරන ලදි\n\n       👇👇👇👇👇👇\nhttps://t.me/SL_EDU_A_L_BOT\n       ☝☝☝☝☝☝\n❤ඉහත ලින්ක් එක ටච් කිරීමෙන් ඔබට ටෙලිග්‍රෑම් හරහා අද්‍යාපනික බොට් කෙනෙකු වෙත සම්බන්ද විය හැක\n\n🌷එම බොට් මගින් ඔබට ලැබෙන ප්‍රතිලාභ....\n\n       🐲past paper\n       🐲උසස් පෙල විශයන් සදහා වීඩියෝ\n       🐲සියලුම Notes\n       🐲resources book\n       🐲පෙරහුරු විභාග ප්‍රශ්ණ පත්‍ර\n‍\nලබාගැනීමට හැකිය.... උසස්පෙල Bio/Maths සිසුන් සදහා විශාල ප්‍රතිලාභ ලබා ගත හැක\n\n\n*📚📌An Educational Group📌📚*\n\nhttps://chat.whatsapp.com/CJCHUpyFJOm3nmYbWeksQE\n\n*📚📌An Educational Group 02📌📚*\n\nhttps://chat.whatsapp.com/KDrvMTJGAQQC7KuBGUcGYJ\n\n*📚📌An Educational Group 03📌📚*\n\nhttps://chat.whatsapp.com/F4fPZbUCZ7P69s1FB4hI6F\n\n\n*ඔබට අවශ්‍ය papers, Short Notes, Free Zoom Class link සහ තවත් අධ්‍යාපනික උපකාර රාශියක් ඉහත ගෲප් 3න් ලබා ගත හැක...*'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    QueenSew.newcmdaddtosew({pattern: 'edu', fromMe: false, desc: Lang.ADU}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.ibb.co/N6XtRj0/depositphotos-75811621-stock-photo-students-outside-sitting-on-steps.jpg";
    r_text[1] = "https://i.ibb.co/z2bGpp3/college-life-group-students-walking-university-hall-chatting-138545920.jpg";
    r_text[2] = "https://i.ibb.co/PGgBJy0/images-1.jpg";
    r_text[3] = "https://i.ibb.co/DYFjXcJ/unnamed.jpg";
    r_text[4] = "https://i.ibb.co/vQLYfWq/edupaper590.jpg";
    r_text[5] = "https://i.ibb.co/KzCdHpf/q63YzR.jpg";
    r_text[6] = "https://i.ibb.co/6vcWvr4/education-wallpaper-1796152.jpg";
    r_text[7] = "https://i.ibb.co/qg31zV0/photo-1503676260728-1c00da094a0b.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '' + Config.BOTNAME + '\nඔබගේ අද්‍යාපන කටයුතු සාර්තක කරගැනීම සදහා...\n\nමෙය ඇතුලත් කරන ලදි\n\n       👇👇👇👇👇👇\nhttps://t.me/SL_EDU_A_L_BOT\n       ☝☝☝☝☝☝\n❤ඉහත ලින්ක් එක ටච් කිරීමෙන් ඔබට ටෙලිග්‍රෑම් හරහා අද්‍යාපනික බොට් කෙනෙකු වෙත සම්බන්ද විය හැක\n\n🌷එම බොට් මගින් ඔබට ලැබෙන ප්‍රතිලාභ....\n\n       🐲past paper\n       🐲උසස් පෙල විශයන් සදහා වීඩියෝ\n       🐲සියලුම Notes\n       🐲resources book\n       🐲පෙරහුරු විභාග ප්‍රශ්ණ පත්‍ර\n‍\nලබාගැනීමට හැකිය.... උසස්පෙල Bio/Maths සිසුන් සදහා විශාල ප්‍රතිලාභ ලබා ගත හැක\n\n\n*📚📌An Educational Group📌📚*\n\nhttps://chat.whatsapp.com/CJCHUpyFJOm3nmYbWeksQE\n\n*📚📌An Educational Group 02📌📚*\n\nhttps://chat.whatsapp.com/KDrvMTJGAQQC7KuBGUcGYJ\n\n*📚📌An Educational Group 03📌📚*\n\nhttps://chat.whatsapp.com/F4fPZbUCZ7P69s1FB4hI6F\n\n\n*ඔබට අවශ්‍ය papers, Short Notes, Free Zoom Class link සහ තවත් අධ්‍යාපනික උපකාර රාශියක් ඉහත ගෲප් 3න් ලබා ගත හැක...*'})

    }));
}
}