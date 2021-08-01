/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const fs = require('fs')
const QueenSew = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const jkd = Config.DISSTICKER != false ? Config.DISSTICKER.split(',') : [];

const Language = require('../language');
const Lang = Language.getString('filters');

QueenSew.newcmdaddtosew({pattern: 'filter ?(.*)', fromSew: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
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

QueenSew.newcmdaddtosew({pattern: 'stop ?(.*)', fromSew: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
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


QueenSew.newcmdaddtosew({on: 'text', fromSew: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919895828468@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Adarey','Bye','Hello','Helo','Hey','Hi','Hy','I love you','Marilada','adarey','bye','hello','hey','helo','hi','hy','i love you','marilada','sewmaker','bitch','sapak','Sapak','Bich','y ban','Y ban','Y bn','y bn','Why ban','why ban','uddika','Uddika','sindu','Sindu','Seen','seen','Raviya','raviya','78 545 7519','notes','Ponnaya','Pinnaya','Paraya','Pala','ponnaya','pinnaya','paraya','pala','natanna','Natanna','Natahan','natahan','Nah','nah','na na','Na na','mokek','Mokek','Mk','mk','Kohomd','kohomada','kohomd','kohomada','hum','Hum','Hmm','hmm','Hako','hako','ha ha','Ha ha','Guti','guti','Gothaya','gothaya','Good night','good night','good morning','Good Morning','Gn','gn','Gm','gm','Gahano','gahano','Gahanawa','gahanawa','Fuck','fuck','Esawa','esawa','Ep wel','ep wel','epa wela','Epa wela','En nane','en nane','Bitch','bich','Bb ek','bb ek','balagena','Balagena','balaganin','Balaganin','baba eka','Baba eka']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
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

QueenSew.newcmdaddtosew({on: 'text', fromSew: false}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jkd.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
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
