const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Raviya = require('../config');
var r_text = new Array ();
r_text[1] = Raviya.RGMSA
r_text[2] = Raviya.RGMSB
r_text[3] = Raviya.RGMSC
r_text[4] = Raviya.RGMSD
r_text[5] = Raviya.RGMSE

var i = Math.floor(5*Math.random())

if (Raviya.PSW !== 'kingraviya') {
        
QueenSew.newcmdaddtosew({ pattern: 'tiktok ?(.*)', fromMe: true, disc: 'tiktok video download without watermark'}, async (message, match) => {
        const sewtik = match[1]
        if (!sewtik) return await message.client.sendMessage(message.jid,'need tiktok link',MessageType.text);
         await message.client.sendMessage(message.jid,'downloading your video',MessageType.text)
        await axios
          .get(`https://zenzapi.xyz/api/downloader/tiktok?url=${sewtik}&apikey=${r_text[i]}`)
          .then(async (response) => {
            const {
              nowatermark,
            } = response.data.result
    
            const videoBuffer = await axios.get(nowatermark, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,'uploading your video',MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
        )});

QueenSew.newcmdaddtosew({ pattern: 'tiktok ?(.*)', fromMe: false, disc: 'tiktok video download without watermark'}, async (message, match) => {
        const sewtik = match[1]
        if (!sewtik) return await message.client.sendMessage(message.jid,'need tiktok video link',MessageType.text);
         await message.client.sendMessage(message.jid,'downloading your video',MessageType.text)
        await axios
          .get(`https://zenzapi.xyz/api/downloader/tiktok?url=${sewtik}&apikey=${r_text[i]}`)
          .then(async (response) => {
            const {
              nowatermark,
            } = response.data.result
    
            const videoBuffer = await axios.get(nowatermark, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,'uploading your video',MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
        )});
}
