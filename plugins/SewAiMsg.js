/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/


const QueenSew = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const Raviya = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

QueenSew.newcmdaddtosew({on: 'text', fromMe: false, dontAdCommandList: true, delownsewcmd: false}, (async (message, match) => {
    if (message.message.startsWith('Sew') && Raviya.FULLSEW !== 'true') {        
        var unique_ident = message.client.user.jid.split('@')[0]      
        var sewm = message.message.replace('Sew', '').replace(' ', '')   
        var ldet = lngDetector.detect(sewm)
        var sewmsg = sewm

        var sewkk = encodeURI(sewmsg)
        await axios.get('http://api.brainshop.ai/get?bid=158771&key=lde7pf4X5TyRxddQ&uid=' + unique_ident + '&msg=' + sewkk).then(async (response) => {
            var sewns = ''                           
            if (Raviya.LANG !== 'EN') {
                ceviri = await translatte(response.data.cnt, {from: 'auto', to: Raviya.LANG});
                if ('text' in ceviri) {
                    sewns = ceviri.text
                }
            } else { sewns = response.data.cnt }
            await message.client.sendMessage(message.jid,sewns, MessageType.text, { quoted: message.data})
        })
    }
}));


QueenSew.newcmdaddtosew({ pattern: 'sewai ?(.*)', desc: 'ai chat bot on off command' , fromMe: true, usage: '.fullsew on / off' }, (async (message, match) => {
    var eva_status = `${Config.FULLSEW}`
    if (match[1] == 'on') {
        if (eva_status == 'true') {
            return await message.client.sendMessage(message.jid, '*Already on 😒*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_SEW']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*Sew is now chat bot*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (eva_status !== 'true') {
            return await message.client.sendMessage(message.jid, '*chat bot already off*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_SEW']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*successful off ai chat bot*', MessageType.text)
        }
    }
}));

