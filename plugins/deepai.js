/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support

const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey('09010100-625c-46c4-b226-8f9a5e6e548f'); // Quickstart API Key
      
const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support

if (Config.WORKTYPE == 'private') {

    QueenSew.newcmdaddtosew({pattern: 'deepai', fromMe: true, delownsewcmd: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {


        await message.sendMessage('😈 Usage: *.moodai <text>*\n💗 Desc: 🇹🇷 Yazdığınız yazıdan ruh halinizi bulur.\n🇱🇰 It finds your mood from the article you wrote.\n\n😈 Usage: *.colorai*\n💗 Desc: 🇹🇷 Siyah beyaz fotoğrafları renklendirir.\n🇱🇰 It colorize bw photos.\n\n😈 Usage: *.faceai*\n💗 Desc: 🇹🇷 Yapay zeka ile daha önce hiç var olmamış insan yüzleri üretir.\n🇱🇰 Generates human faces with artificial intelligence, that never existed before.\n\n😈 Usage: *.animai*\n💗 Desc: Yapay zeka ile daha önce hiç var olmayan anime yüzleri üretir.\n🇱🇰 Generates anime faces with artificial intelligence, that never existed before.\n\n😈 Usage: *.superai*\n💗 Desc: 🇹🇷 Fotoğrafın kalitesini yapay zeka ile arttırır.\n🇱🇰 Improves the quality of photos with Neural AI.\n\n😈 Usage: *.waifuai*\n💗 Desc: 🇹🇷 Fotoğrafların renk paletlerini yapay zeka ile birleştirir.\n🇱🇰 Combines the color palettes of photos with artificial intelligence.\n\n😈 Usage: *.dreamai*\n💗 Desc: 🇹🇷 Fotoğrafa deepdream efekti uygular.\n🇱🇰 Applies deepdream effect to the photo.\n\n😈 Usage: *.neuraltalkai*\n💗 Desc: 🇹🇷 Fotoğrafki olan şeyi yapay zeka ile açıklar.\n🇱🇰 Explain the phenomenon in the photo with artificial intelligence.\n\n😈 Usage: *.ttiai <text>*\n💗 Desc: 🇹🇷 Yazıyı resme dönüştürür.\n🇱🇰 Converts text to a picture. (Text-to-Image)\n\n😈 Usage: *.toonai*\n💗 Desc: 🇹🇷 Fotoğraftaki yüzü çizgi film karakterine çevirir.\n🇱🇰 Turns the face in the photo into a cartoon character.\n\n😈 Usage: *.textai <text>*\n💗 Desc: 🇹🇷 Yazdığınız cümleden size yapay bir hikaye yaratır.\n🇱🇰 It creates an artificial story for you from your sentence.\n\n😈 Usage: *.nudityai*\n💗 Desc: 🇹🇷 Fotoğraftaki NSFW değerini 1 ve 0 arasında gösterir. \n🇱🇰 It shows the NSFW value between 1 and 0 in the photo.\n\n😈 Usage: *.ganstyle*\n💗 Desc: 🇹🇷 Yanıtladığınız fotoğrafı seçili olan resim ile birleştirir.\n🇱🇰 Combines the photo you answered with the selected picture.\n\n⚠️ 🇹🇷 *Bütün bu yapay zeka araçlarını derin öğrenme ile çalışır. Ne kadar fazla kullanırsanız o kadar fazla bilgiyi depolar.* ```Sadece ingilizce karakter kullanın!```\n\n⚠️ 🇱🇰 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');

    }));
    QueenSew.newcmdaddtosew({pattern: 'faceai', fromMe: true, delownsewcmd: false, dontAdCommandList: true }, (async (message, match) => {

        var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'animai', fromMe: true, delownsewcmd: false, dontAdCommandList: true }, (async (message, match) => {

        var min = 10000; 
        var max = 50000;  

        var asenasrandomgen = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + asenasrandomgen + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'}
        )

    }));
    QueenSew.newcmdaddtosew({pattern: 'colorai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'waifuai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'superai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'moodai ?(.*)', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,

        });

        await message.reply(`*Mood:* ${resp.output}`);

    }));

    QueenSew.newcmdaddtosew({pattern: 'dreamai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'neuraltalkai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${resp.output}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ttiai ?(.*)', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,

        });

        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'toonai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'nudityai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${resp.output.nsfw_score}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'textai ?(.*)', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,

        });

        await message.reply(`*Article:*\n ${resp.output}`);

    }));

    QueenSew.newcmdaddtosew({pattern: 'ganstyle', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("CNNMRF", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
}
else if (Config.WORKTYPE == 'public') {

    QueenSew.newcmdaddtosew({pattern: 'deepai', fromMe: false, delownsewcmd: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {

        await message.sendMessage('😈 Usage: *.moodai <text>*\n💗 Desc: 🇹🇷 Yazdığınız yazıdan ruh halinizi bulur.\n🇱🇰 It finds your mood from the article you wrote.\n\n😈 Usage: *.colorai*\n💗 Desc: 🇹🇷 Siyah beyaz fotoğrafları renklendirir.\n🇱🇰 It colorize bw photos.\n\n😈 Usage: *.faceai*\n💗 Desc: 🇹🇷 Yapay zeka ile daha önce hiç var olmamış insan yüzleri üretir.\n🇱🇰 Generates human faces with artificial intelligence, that never existed before.\n\n😈 Usage: *.animai*\n💗 Desc: Yapay zeka ile daha önce hiç var olmayan anime yüzleri üretir.\n🇱🇰 Generates anime faces with artificial intelligence, that never existed before.\n\n😈 Usage: *.superai*\n💗 Desc: 🇹🇷 Fotoğrafın kalitesini yapay zeka ile arttırır.\n🇱🇰 Improves the quality of photos with Neural AI.\n\n😈 Usage: *.waifuai*\n💗 Desc: 🇹🇷 Fotoğrafların renk paletlerini yapay zeka ile birleştirir.\n🇱🇰 Combines the color palettes of photos with artificial intelligence.\n\n😈 Usage: *.dreamai*\n💗 Desc: 🇹🇷 Fotoğrafa deepdream efekti uygular.\n🇱🇰 Applies deepdream effect to the photo.\n\n😈 Usage: *.neuraltalkai*\n💗 Desc: 🇹🇷 Fotoğrafki olan şeyi yapay zeka ile açıklar.\n🇱🇰 Explain the phenomenon in the photo with artificial intelligence.\n\n😈 Usage: *.ttiai <text>*\n💗 Desc: 🇹🇷 Yazıyı resme dönüştürür.\n🇱🇰 Converts text to a picture. (Text-to-Image)\n\n😈 Usage: *.toonai*\n💗 Desc: 🇹🇷 Fotoğraftaki yüzü çizgi film karakterine çevirir.\n🇱🇰 Turns the face in the photo into a cartoon character.\n\n😈 Usage: *.textai <text>*\n💗 Desc: 🇹🇷 Yazdığınız cümleden size yapay bir hikaye yaratır.\n🇱🇰 It creates an artificial story for you from your sentence.\n\n😈 Usage: *.nudityai*\n💗 Desc: 🇹🇷 Fotoğraftaki NSFW değerini 1 ve 0 arasında gösterir. \n🇱🇰 It shows the NSFW value between 1 and 0 in the photo.\n\n😈 Usage: *.ganstyle*\n💗 Desc: 🇹🇷 Yanıtladığınız fotoğrafı seçili olan resim ile birleştirir.\n🇱🇰 Combines the photo you answered with the selected picture.\n\n⚠️ 🇹🇷 *Bütün bu yapay zeka araçlarını derin öğrenme ile çalışır. Ne kadar fazla kullanırsanız o kadar fazla bilgiyi depolar.* ```Sadece ingilizce karakter kullanın!```\n\n⚠️ 🇱🇰 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');

    }));

    QueenSew.newcmdaddtosew({pattern: 'faceai', fromMe: false, delownsewcmd: false, dontAdCommandList: true }, (async (message, match) => {

        var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'animai', fromMe: false, delownsewcmd: false, dontAdCommandList: true }, (async (message, match) => {

        var min = 10000; 
        var max = 50000;  

        var asenasrandomgen = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + asenasrandomgen + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'}
        )

    }));
    QueenSew.newcmdaddtosew({pattern: 'faceai', fromMe: true, delownsewcmd: false, dontAdCommandList: true }, (async (message, match) => {

        var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'animai', fromMe: true, delownsewcmd: false, dontAdCommandList: true }, (async (message, match) => {

        var min = 10000; 
        var max = 50000;  

        var asenasrandomgen = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + asenasrandomgen + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'}
        )

    }));
    QueenSew.newcmdaddtosew({pattern: 'colorai', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'waifuai', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'superai', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'moodai ?(.*)', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,

        });

        await message.reply(`*Mood:* ${resp.output}`);

    }));

    QueenSew.newcmdaddtosew({pattern: 'dreamai', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'neuraltalkai', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${resp.output}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ttiai ?(.*)', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,

        });

        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'toonai', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'nudityai', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${resp.output.nsfw_score}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'textai ?(.*)', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,

        });

        await message.reply(`*Article:*\n ${resp.output}`);

    }));

    QueenSew.newcmdaddtosew({pattern: 'ganstyle', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("CNNMRF", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
    QueenSew.newcmdaddtosew({pattern: 'deepai', fromMe: true, delownsewcmd: false, desc: Lang.DEEPAI_DESC, dontAdCommandList: true}, (async (message, match) => {


        await message.sendMessage('😈 Usage: *.moodai <text>*\n💗 Desc: 🇹🇷 Yazdığınız yazıdan ruh halinizi bulur.\n🇱🇰 It finds your mood from the article you wrote.\n\n😈 Usage: *.colorai*\n💗 Desc: 🇹🇷 Siyah beyaz fotoğrafları renklendirir.\n🇱🇰 It colorize bw photos.\n\n😈 Usage: *.faceai*\n💗 Desc: 🇹🇷 Yapay zeka ile daha önce hiç var olmamış insan yüzleri üretir.\n🇱🇰 Generates human faces with artificial intelligence, that never existed before.\n\n😈 Usage: *.animai*\n💗 Desc: Yapay zeka ile daha önce hiç var olmayan anime yüzleri üretir.\n🇱🇰 Generates anime faces with artificial intelligence, that never existed before.\n\n😈 Usage: *.superai*\n💗 Desc: 🇹🇷 Fotoğrafın kalitesini yapay zeka ile arttırır.\n🇱🇰 Improves the quality of photos with Neural AI.\n\n😈 Usage: *.waifuai*\n💗 Desc: 🇹🇷 Fotoğrafların renk paletlerini yapay zeka ile birleştirir.\n🇱🇰 Combines the color palettes of photos with artificial intelligence.\n\n😈 Usage: *.dreamai*\n💗 Desc: 🇹🇷 Fotoğrafa deepdream efekti uygular.\n🇱🇰 Applies deepdream effect to the photo.\n\n😈 Usage: *.neuraltalkai*\n💗 Desc: 🇹🇷 Fotoğrafki olan şeyi yapay zeka ile açıklar.\n🇱🇰 Explain the phenomenon in the photo with artificial intelligence.\n\n😈 Usage: *.ttiai <text>*\n💗 Desc: 🇹🇷 Yazıyı resme dönüştürür.\n🇱🇰 Converts text to a picture. (Text-to-Image)\n\n😈 Usage: *.toonai*\n💗 Desc: 🇹🇷 Fotoğraftaki yüzü çizgi film karakterine çevirir.\n🇱🇰 Turns the face in the photo into a cartoon character.\n\n😈 Usage: *.textai <text>*\n💗 Desc: 🇹🇷 Yazdığınız cümleden size yapay bir hikaye yaratır.\n🇱🇰 It creates an artificial story for you from your sentence.\n\n😈 Usage: *.nudityai*\n💗 Desc: 🇹🇷 Fotoğraftaki NSFW değerini 1 ve 0 arasında gösterir. \n🇱🇰 It shows the NSFW value between 1 and 0 in the photo.\n\n😈 Usage: *.ganstyle*\n💗 Desc: 🇹🇷 Yanıtladığınız fotoğrafı seçili olan resim ile birleştirir.\n🇱🇰 Combines the photo you answered with the selected picture.\n\n⚠️ 🇹🇷 *Bütün bu yapay zeka araçlarını derin öğrenme ile çalışır. Ne kadar fazla kullanırsanız o kadar fazla bilgiyi depolar.* ```Sadece ingilizce karakter kullanın!```\n\n⚠️ 🇱🇰 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');

    }));

    QueenSew.newcmdaddtosew({pattern: 'colorai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'waifuai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'superai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'moodai ?(.*)', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,

        });

        await message.reply(`*Mood:* ${resp.output}`);

    }));

    QueenSew.newcmdaddtosew({pattern: 'dreamai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'neuraltalkai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${resp.output}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'ttiai ?(.*)', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,

        });

        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'toonai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'nudityai', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),

                });

                await message.reply(`*Output:* ${resp.output.nsfw_score}`);

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));

    QueenSew.newcmdaddtosew({pattern: 'textai ?(.*)', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.TEXT);

        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,

        });

        await message.reply(`*Article:*\n ${resp.output}`);

    }));

    QueenSew.newcmdaddtosew({pattern: 'ganstyle', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("CNNMRF", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By t.me/RavinduManoj'})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
}
