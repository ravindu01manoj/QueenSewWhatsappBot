/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/

const fs = require('fs')
const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const jkd = Config.DISSTICKER != false ? Config.DISSTICKER.split(',') : [];
let rs = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('filters');
/*
var data = {
  action: true 
} */
 if (Config.PSW !== 'kingraviya') {
QueenSew.newcmdaddtosew({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

QueenSew.newcmdaddtosew({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));


QueenSew.newcmdaddtosew({on: 'text', fromMe: rs}, (async (message, match) => {
        if(Config.VOICEFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention) {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Bye','Hello','Helo','Hey','Hi','Hy','I love you','Marilada','bye','hello','hey','helo','hi','hy','i love you','marilada','sewmaker','bitch','sapak','Sapak','Bich','y ban','Y ban','Y bn','y bn','Why ban','why ban','uddika','Uddika','sindu','Sindu','Seen','seen','Raviya','raviya','notes','Pinnaya','Paraya','Pala','pinnaya','paraya','pala','natanna','Natanna','Natahan','natahan','Nah','nah','na na','Na na','mokek','Mokek','Mk','mk','Kohomd','kohomada','kohomd','Kohomd','hum','Hum','Hmm','hmm','Hako','hako','ha ha','Ha ha','Guti','guti','Gothaya','gothaya','Good night','good night','good morning','Good Morning','Gn','gn','Gm','gm','Gahano','gahano','Gahanawa','gahanawa','Fuck','fuck','Esawa','esawa','Ep wel','ep wel','epa wela','Epa wela','En nane','en nane','Bitch','bich','Bb ek','bb ek','balagena','Balagena','balaganin','Balaganin','baba eka','Baba eka','Adarey','adarey','Adarei','adarei','Akke','akke','Baduwa','baduwa','Balli','balli','Denawada','denawada','Hukanna','hukanna','Hukanni','hukanni','Huththa','huththa','Huththi','huththi','Kariya','kariya','Kellekda','kellekda','Love','love','Namaskaram','namaskaram','Namasthe','namasthe','Namgi','namgi','Pakaya','pakaya','Ponnaya','ponnaya','ponni','Ponni','U girl','u girl','Umma','umma','Ummah','ummah','Ummma','ummma','Vesawi','vesawi','Vesavi','vesavi','Wesi','wesi','You girl','you girl']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
  /*
if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.recording)
            }, 4000)
        }
        */
       await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
}
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

QueenSew.newcmdaddtosew({on: 'text', fromMe: rs}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jkd.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention) {
await message.client.sendMessage(message.jid, fs.readFileSync('./SewStickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['gm','love','adarey','morning','Gm','Love','Adarey','Morning','hi','Hi','hlo','Hlo','Hello','hello','ok','Ok','alive','sorry','Sorry']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./SewStickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}
}));
}
