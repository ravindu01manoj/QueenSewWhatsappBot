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
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {

    QueenSew.newcmdaddtosew({pattern: 'sewmedia', fromSew: true, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    
       await message.sendMessage('\n 💗MEDIA EDITING💗\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc: 🇱🇰 Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc: 🇱🇰 Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: 🇱🇰 Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc: 🇱🇰 Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: 🇱🇰 Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc: 🇱🇰 Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc: 🇱🇰 Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: 🇱🇰 Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: 🇱🇰 Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: 🇱🇰 Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc: 🇱🇰 Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc: 🇱🇰 Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: 🇱🇰 Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: 🇱🇰 Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: 🇱🇰 Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: 🇱🇰 Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc: 🇱🇰 Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: 🇱🇰 Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: 🇱🇰 Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: 🇱🇰 Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: 🇱🇰 Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: 🇱🇰 Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: 🇱🇰 Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: 🇱🇰 Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: 🇱🇰 Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3bass* \nℹ️Desc: 🇱🇰 Adds crystal bass without distorting the sound.\n\n💻Usage: *.mp3crusher*\nℹ️Desc: 🇱🇰 Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: 🇱🇰 Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: 🇱🇰 Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc: 🇱🇰 Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc: 🇱🇰 Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇱🇰 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇱🇰 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇱🇰 Applies a vinatge effect to photo.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇱🇰 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇱🇰 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇱🇰 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇱🇰 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇱🇰 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇱🇰 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇱🇰 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇱🇰 Applies a art effect to the photo.');

   }));

    QueenSew.newcmdaddtosew({pattern: 'x4mp4', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text)
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'x2mp4', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4image', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.image) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'spectrum', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'waves', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'frequency', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'avec', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'volumeaudio', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'cqtaudio', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3eq', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3crusher', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3reverse', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4vintage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4reverse', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4bw', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'bwimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'vintageimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4enhance', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'blurimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4blur', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3pitch', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4edge', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3low', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'x2mp3', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'edgeimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'enhanceimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3volume', fromSew: true, dontAdCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    })); 

    QueenSew.newcmdaddtosew({pattern: 'gif', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'agif', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: '*Coded By t.me/RavinduManoj*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'grenimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage('Need Photo!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'interp ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')
   
        var downloading = await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `*Coded By t.me/RavinduManoj*\n_Interpolated to ${match[1]} FPS_`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'rainbowimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4rainbow', fromSew: true, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'negativeimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4negative', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4art', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'artimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4stab', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4color', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'colorimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4slowmo', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, {caption: 'True Slow-Motion By t.me/RavinduManoj'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

    QueenSew.newcmdaddtosew({pattern: 'xmedia', fromSew: false, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    

       await message.sendMessage('\n 💗MEDIA EDITING💗\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc: 🇱🇰 Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc: 🇱🇰 Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: 🇱🇰 Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc: 🇱🇰 Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: 🇱🇰 Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc: 🇱🇰 Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc: 🇱🇰 Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: 🇱🇰 Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: 🇱🇰 Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: 🇱🇰 Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc: 🇱🇰 Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc: 🇱🇰 Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: 🇱🇰 Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: 🇱🇰 Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: 🇱🇰 Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: 🇱🇰 Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc: 🇱🇰 Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: 🇱🇰 Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: 🇱🇰 Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: 🇱🇰 Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: 🇱🇰 Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: 🇱🇰 Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: 🇱🇰 Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: 🇱🇰 Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: 🇱🇰 Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3bass* \nℹ️Desc: 🇱🇰 Adds crystal bass without distorting the sound.\n\n💻Usage: *.mp3crusher*\nℹ️Desc: 🇱🇰 Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: 🇱🇰 Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: 🇱🇰 Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc: 🇱🇰 Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc: 🇱🇰 Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇱🇰 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇱🇰 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇱🇰 Applies a vinatge effect to photo.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇱🇰 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇱🇰 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇱🇰 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇱🇰 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇱🇰 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇱🇰 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇱🇰 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇱🇰 Applies a art effect to the photo.');

   }));

    QueenSew.newcmdaddtosew({pattern: 'x4mp4', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'x2mp4', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4image', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'spectrum', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'waves', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'frequency', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'avec', fromSew: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'volumeaudio', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'cqtaudio', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3eq', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3crusher', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3reverse', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4vintage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4reverse', fromSew: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4bw', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'bwimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'vintageimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4enhance', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'blurimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4blur', fromSew: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3pitch', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4edge', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3low', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'x2mp3', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'edgeimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'enhanceimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3volume', fromSew: false, dontAdCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    })); 

    QueenSew.newcmdaddtosew({pattern: 'gif', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'agif', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: '*Coded By t.me/RavinduManoj*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'grenimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage('Need Photo!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'interp ?(.*)', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')
   
        var downloading = await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `*Coded By t.me/RavinduManoj*\n_Interpolated to ${match[1]} FPS_`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'rainbowimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4rainbow', fromSew: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'negativeimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4negative', fromSew: false, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4art', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'artimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4stab', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4color', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'colorimage', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4slowmo', fromSew: false, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message.video === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, {caption: 'True Slow-Motion By t.me/RavinduManoj'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));
    QueenSew.newcmdaddtosew({pattern: 'xmedia', fromSew: true, desc: Lang.XMEDİA_DESC, dontAdCommandList: true}, (async (message, match) => {    

          await message.sendMessage('\n 💗MEDIA EDITING💗\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc: 🇱🇰 Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc: 🇱🇰 Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: 🇱🇰 Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc: 🇱🇰 Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: 🇱🇰 Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc: 🇱🇰 Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc: 🇱🇰 Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: 🇱🇰 Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: 🇱🇰 Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: 🇱🇰 Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc: 🇱🇰 Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc: 🇱🇰 Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: 🇱🇰 Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: 🇱🇰 Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: 🇱🇰 Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: 🇱🇰 Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc: 🇱🇰 Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: 🇱🇰 Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: 🇱🇰 Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: 🇱🇰 Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: 🇱🇰 Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: 🇱🇰 Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: 🇱🇰 Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: 🇱🇰 Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: 🇱🇰 Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3bass* \nℹ️Desc: 🇱🇰 Adds crystal bass without distorting the sound.\n\n💻Usage: *.mp3crusher*\nℹ️Desc: 🇱🇰 Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: 🇱🇰 Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: 🇱🇰 Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc: 🇱🇰 Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc: 🇱🇰 Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇱🇰 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇱🇰 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇱🇰 Applies a vinatge effect to photo.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇱🇰 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇱🇰 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇱🇰 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇱🇰 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇱🇰 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇱🇰 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇱🇰 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇱🇰 Applies a art effect to the photo.');

   }));

    QueenSew.newcmdaddtosew({pattern: 'x4mp4', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'x2mp4', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4image', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.image) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'spectrum', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'waves', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'frequency', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'avec', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'volumeaudio', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'cqtaudio', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3eq', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3crusher', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3reverse', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4vintage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4reverse', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4bw', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'bwimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'vintageimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4enhance', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'blurimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4blur', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3pitch', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4edge', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3low', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'x2mp3', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'edgeimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'enhanceimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp3volume', fromSew: true, dontAdCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    })); 

    QueenSew.newcmdaddtosew({pattern: 'gif', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'agif', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: '*Coded By t.me/RavinduManoj*'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'grenimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage('Need Photo!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'interp ?(.*)', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')
   
        var downloading = await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `*Coded By t.me/RavinduManoj*\n_Interpolated to ${match[1]} FPS_`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'rainbowimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4rainbow', fromSew: true, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'negativeimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4negative', fromSew: true, dontAdCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4art', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'artimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4stab', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4color', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'colorimage', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded By t.me/RavinduManoj*'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));

    QueenSew.newcmdaddtosew({pattern: 'mp4slowmo', fromSew: true, dontAdCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, {caption: 'True Slow-Motion By t.me/RavinduManoj'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromSew: true})
    }));
}
