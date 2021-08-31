
/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

c2hhZG93
*/

const QueenSew = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const phub = require('ravindu-manoj-ph');
const Raviya = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Raviya.HEROKU.API_KEY
});
const bugt = Buffer.from(`aHR0cHM6Ly9iaXQubHkvM0RxenFZTw==`, 'base64');  
const ASS = bugt.toString('utf-8'); 
var r_text = new Array ();
r_text[1] = Raviya.RGMSA
r_text[2] = Raviya.RGMSB
r_text[3] = Raviya.RGMSC
r_text[4] = Raviya.RGMSD
r_text[5] = Raviya.RGMSE

var i = Math.floor(5*Math.random())
if (os.userInfo().homedir !== rgmsk.pay) return;
let rs = Raviya.WORKTYPE == 'public' ? false : true
let baseURI = '/apps/' + Raviya.HEROKU.APP_NAME;
const RRRS = "qU3wDcfY7S8Ylxava0rOeH8ZfO2xHvVepSIcWY1zOHLRZiub09UhnWgia0rt6Cwd"
   var Mod = ''
   var Sod = ''
    var Norm = ''
    var Seszz = ''
    
    if (Raviya.LANG == 'EN') {
        Mod = 'You Can Change The Bot Sew Queen to King Raviya (18+)'
        Sod = 'You Can Change The Bot  King Raviya (18+) to Sew Queen'
        Norm = 'Now You Are On *Sew Queen Whatsapp Bot*! \n\n For All Command to Use .help / .menu / .list \n\n To Go King Raviya 18+ Bot ▶ use .kingraviya Or .var BOT_MODE:kingraviya'
        Seszz = 'Now You Are On *King Raviya 18+ Whatsapp Bot* \n\n For all Command to Use .18plus\n\nBack to Sew Queen Whatsapp Bot ▶ Use .queensew Or .var BOT_MODE:queensew'
    }
    if (Raviya.LANG == 'SI') {
        Mod = 'ඔබට සෙව් Queen බොට් ගේ සිට King රවියා වැඩිහිටියන්ට වඩාත් සුදුසු බොට් වෙත මාරු විය හැක.'
        Sod = 'ඔබට සෙව් Queen බොට් වෙත King රවියා වැඩිහිටියන්ට වඩාත් සුදුසු බොට් ගේ සිට මාරු විය හැක.'
        Norm = 'ඔබ දැං සෙව් Queen වට්සැප් බොට් වෙත සාර්තකව මාරු වී ඇත..\n\nසියලු කමාන්ඩ් ලබා ගැනීමට .menu \n\n King රවියා 18+ Bot වෙත මාරු වීම සදහා .kingraviya හෝ .var BOT_MODE:kingraviya භාවිතා කරන්න'
        Seszz = 'ඔබ දැං King රවියා 18+ වට්සැප් බොට් වෙත සාර්තකව මාරු වී ඇත\n\nසියලු කමාන්ඩ් ලබා ගැනීමට .18plus \n\n සෙව් Queen වට්සැප් බොට් වෙත මාරු වීම සදහා .queensew හෝ .var BOT_MODE:queensew භාවිතා කරන්න'
    }
const need = "*type some word after command"
var r_text = new Array ();
    r_text[0] = Raviya.SEWQ
    r_text[1] = Raviya.SEWA
    r_text[2] = Raviya.SEWB
    r_text[3] = Raviya.SEWC
    r_text[4] = Raviya.SEWD
    r_text[5] = Raviya.SEWE
    r_text[6] = Raviya.SEWF
    r_text[7] = Raviya.SEWG
    r_text[8] = Raviya.SEWH
    r_text[9] = Raviya.SEWI
    r_text[10] = Raviya.SEWJ
    r_text[11] = Raviya.SEWK
    r_text[12] = Raviya.SEWL
    r_text[13] = Raviya.SEWM
    r_text[14] = Raviya.SEWN
    r_text[15] = Raviya.SEWO
    r_text[16] = Raviya.SEWP
    var i = Math.floor(17*Math.random())
    
    QueenSew.newcmdaddtosew({pattern: 'kingraviya ?(.*)', fromMe: true, dontAdCommandList: true, desc: Mod }, (async (message, match) => {
     
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BOT_MODE']: 'kingraviya'
                    } 
                });
                await message.sendMessage(Seszz)
    }));
 
   QueenSew.newcmdaddtosew({pattern: '18plus', fromMe: true, dontAdCommandList: true }, (async (message, match) => {
      await message.sendMessage('සෙව් Queen වට්සැප් බොට් මගින් මෙම සේවාව ලබා ගත නොහැකි අතර මෙම සේවාව ලබා ගැනීමට King Raviya 18+ වට්සැප්.බොට් වෙත මාරු විය යුතුය... එම බොට් වෙතමාරු වීම සදහා\n\n .kingraviya කමාන්ඩ් එක හෝ \n .var BOT_MODE:kingraviya කමාන්ඩ් එක භාවිත කරන්න\n\n\n අවවාදයයි: King Raviya +18 බොට් තුල Sew Queen වට්සැප් බොට් තුල ඇති කිසිදු සේවාවක් ලබාගත නොහැකි අතර King Raviya යනු හුදෙක් විනෝදාස්වාදය සදහා නිපදවන ලද 18+ බොට් කෙනෙකි..')
   }));
if (Raviya.PSD !== ASS) {
if (Raviya.PSW == 'kingraviya') {
QueenSew.newcmdaddtosew({pattern: '18plus', fromMe: true, dontAdCommandList: true }, (async (message, match) => {
      await message.sendMessage('Password Protected✧✧✧✧✧\n\n ඔබ පාස්වර්ඩ් එකක් ඇතුලත් කර නොමැත.. මෙම කමාන්ඩ්ස් ලබා ගැනීමට ඔබට පාස්වර්ඩ් එකක් අවශ්‍ය වේ.. එය ඔබගේ වයස තහවුරු කර ලබා ගත හැක... එය තහවුරු කිරීම සදහා ස්වයංක්‍රීය පද්දතියක් ඉදිරියේදී ඇතුලත් වල අතර.. දැනට අපගේ ගෲප් එකකට ඔබගේ වයස තහවුරු කර ලබා ගත හැකිය')
   }));
}
}
if (Raviya.PSD == ASS) {
  if (Raviya.PSW == 'kingraviya') {
      QueenSew.newcmdaddtosew({pattern: 'queensew ?(.*)', fromMe: true, dontAdCommandList: true, desc: Sod }, (async (message, match) => {

                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BOT_MODE']: 'queensew'
                    } 
                });
                await message.sendMessage(Norm)
        
    }));
  
  
  QueenSew.newcmdaddtosew({pattern: '18plus', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('   18+ list\n\n18+ වීඩියෝ බා ගැනීම සදහා භාවිත කල හැක\n\n❄.xnxx\n ඔබ ලබා දෙන xnxx ලින්ක් මගින් වීඩියෝ ඩවුන්ලෝඩ් කරයි \n\n❄.pornhub \nඔබ යොදන වචනය pronhub තුල search වී ලින්ක් ලබා දෙයි\n\n❄.xxx \nඉහත pornhub කමාන්ඩ් එක මගින් ලබා දෙන වීඩියෝ බාගැනීමට භාවිත කල හැක\n\n\nඅන්ලිමිටට් එනිමි 18+ ෆොටෝ හා අන්ලිමිටඩ් එනිමි 18+ ගිෆ් ලබා ගත හැක\n\n✨.pic waifu\n✨.pic neko\n✨.pic trap\n✨.gif trap\n✨.gif blow\n\n\n💠 .sespussy\n💠 .sesuni\n💠 .sestent\n💠 .sespanti\n💠 .sesmstrb\n💠 .sesmanga\n💠 .sesglass\n💠 .sescuck\n💠 .sesero\n💠 .sesbdsm\n💠 .sesass\n💠 .sessf')
   }));
   
  
  
  
QueenSew.newcmdaddtosew({pattern: 'pornhub ?(.*)', fromMe: true, desc: 'for pornhub search මෙයින් ලබා ගන්න ලින්ක් .xxx <link> මගින් බා ගන්න'}, (async (message, match) => { 
        if (match[1] === '') return await message.client.sendMessage(message.jid,'need word',MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,'searching...',MessageType.text);
        try {
           var xvid = await phub.search(match[1],["title","link","premium","hd"]);
        } catch {
            return await message.client.sendMessage(message.jid,'not found',MessageType.text);
        }
        var mesaj = '';
        xvid.all.map((video) => {
            mesaj += '*💠' + video.title + '* \n😈 ' + video.link + '\n\n'
        });
        await message.client.sendMessage(message.jid,'   _*👑ᴘᴏᴡᴇʀᴅ ʙʏ ᴋɪɴɢ ʀᴀᴠɪʏᴀ👑*_\n\n' + mesaj,MessageType.text);
        await reply.delete();
    }));
  
  QueenSew.newcmdaddtosew({pattern: 'xxx ?(.*)', fromMe: true, dontAdCommandList: true, desc: '.pornhub list download'}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage('need link');
        await message.client.sendMessage(message.jid,'*Downloading your 18 + video 😈😈😈😈*',MessageType.text)
        var phub = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,'*Uploading your 18+ video 😈😈😈😈*',MessageType.text);
        await message.sendMessage(Buffer.from(phub.data), MessageType.video, {mimetype: Mimetype.mp4})
    }));
  
  
/*

QueenSew.newcmdaddtosew({ pattern: 'xxx ?(.*)', fromMe: true, dontAdCommandList: true, disc: 'Download Video From PornHub\nThis Is Un official Unlimited Plugin From Raviya\n\n මෙය වැඩිහිටියන්ට වඩාත් සුදුසු බැවින්.. ඔබගේ වයස තහවුරු කර පාස්වර්ඩ් එක ලබා ගන්න\n\n example: .xxxhttps://www.pornhub.com/view_video.php?viewkey=ph5e84be813b8fa'}, async (message, match) => {

   const url = match[1]
        
        if (!url) return await message.client.sendMessage(message.jid,'need Need video link',MessageType.text);
        
            await message.client.sendMessage(message.jid,'*Downloading your 18 + video 😈😈😈😈*',MessageType.text)
            
   const video = await pach.page(url, ['title','pornstars','download_urls']);
   
            await axios.get(video).then(async (response) => {
            
   const SRAVI = response.data.download_urls
   
   const phub = await axios.get(SRAVI, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,'*Uploading your 18+ video 😈😈😈😈*',MessageType.text);
            
            await message.client.sendMessage(message.jid,Buffer.from(phub.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false})
        })
        
        .catch(
        
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
          
        )});
  
  
  */
  
  
  QueenSew.newcmdaddtosew({pattern: 'pic ?(.*)', fromMe: true, dontAdCommandList: true }, (async (message, match) => {
 if (match[1] == 'waifu') {
    var image_link = await Pach.anime_wall('waifu')
    var image_buffer = await axios.get(image_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer.data), MessageType.image, { caption: '*Coded by Shadow Hacker*' })
    }
   else if (match[1] == 'neko') {
    var image_link = await Pach.anime_wall('neko')
    var image_buffer = await axios.get(image_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer.data), MessageType.image, { caption: '*Coded by Shadow Hacker*' })
    }
   else if (match[1] == 'trap') {
    var image_link = await Pach.anime_wall('trap')
    var image_buffer = await axios.get(image_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer.data), MessageType.image, { caption: '*Coded by Shadow Hacker*' })
    }
}));
QueenSew.newcmdaddtosew({pattern: 'gif ?(.*)', fromMe: true, dontAdCommandList: true }, (async (message, match) => {
 if (match[1] == 'trap') {
    var gif_link = await Pach.anime_gif('trap')
    var gif_buffer = await axios.get(gif_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(gif_buffer.data), MessageType.video, { caption: '*Coded by Shadow Hacker*', mimetype: Mimetype.gif })
    }
    else if (match[1] == 'blow') {
    var gif_link = await Pach.anime_gif('blow')
    var gif_buffer = await axios.get(gif_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(gif_buffer.data), MessageType.video, { caption: '*Coded by Shadow Hacker*', mimetype: Mimetype.gif })
    }
}));
  QueenSew.newcmdaddtosew({ pattern: 'xnxx ?(.*)', fromMe: true, dontAdCommandList: true}, async (message, match) => {
        const linkxnxx = match[1]
        if (!linkxnxx) return await message.client.sendMessage(message.jid,'need xnxx video link',MessageType.text);
        var xnxx_link = await Pach.xnxxxx('linkxnxx')
         await message.client.sendMessage(message.jid,'*✨Downloading✨*',MessageType.text)
        await axios.get(`${xnxx_link}`).then(async (response) => {
         const { url } = response.data.result
            const vid = await axios.get(url, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,'*✨Uploading✨*',MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(vid.data), MessageType.video, {mimetype: Mimetype.mp4})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
        )});
        
  
    QueenSew.newcmdaddtosew({pattern: 'sesuni', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/uniform?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sestent', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/tentacles?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sespussy', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/pussy?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sespanti', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/panties?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
 
    QueenSew.newcmdaddtosew({pattern: 'sesmstrb', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/mstrb?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesmanga', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/manga?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesglass', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/glasses?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sescuck', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/cuckold?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesero', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/ero?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesbdsm', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/bdsm?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'sesass', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/ass?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));

    QueenSew.newcmdaddtosew({pattern: 'sessf', fromMe: true, dontAdCommandList: true}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/sfwneko?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Coded by Shadow Hacker*'})

    }));
    }
}
    const buff = Buffer.from(`aHR0cHM6Ly96ZW56YXBpLnh5ei9hcGkv`, 'base64');  
    const kkk = buff.toString('utf-8'); 
    QueenSew.newcmdaddtosew({pattern: 'iwallpaper', fromMe: rs}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/wallpaper?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Raviya.CPK})

    }));
    const buft = Buffer.from(`aHR0cHM6Ly9iaXQubHkvM0RxenFZTw==`, 'base64');  
    const ggg = buft.toString('utf-8'); 
    QueenSew.newcmdaddtosew({pattern: 'imeme', fromMe: rs}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/meme?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Raviya.CPK})

    }));
    QueenSew.newcmdaddtosew({ pattern: 'spotify ?(.*)', fromMe: rs, disc: 'spotify download'}, async (message, match) => {
        const sewtik = match[1]
        if (!sewtik) return await message.client.sendMessage(message.jid,'need spotify link',MessageType.text);
         await message.client.sendMessage(message.jid,'downloading your song',MessageType.text)
        await axios.get(`${kkk}spotify?url=${sewtik}&apikey=${r_text[i]}`).then(async (response) => {
            const {
              preview_url,
            } = response.data.data
            const apkravi = await axios.get(preview_url, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,'uploading your song',MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(apkravi.data), MessageType.document, {mimetype: 'audio/mpeg', ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
        )});
        
        QueenSew.newcmdaddtosew({ pattern: 'mapk ?(.*)', fromMe: rs, disc: 'Download Mediafire Apk\nplease use only app link'}, async (message, match) => {
        const sewtik = match[1]
        if (!sewtik) return await message.client.sendMessage(message.jid,'need mediafire link',MessageType.text);
         await message.client.sendMessage(message.jid,'downloading your apk',MessageType.text)
        await axios.get(`${kkk}downloader/mediafire?url=${sewtik}&apikey=${r_text[i]}`).then(async (response) => {
          const {
              result,
            } = response.data
            const apkravi = await axios.get(result, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,'uploading your apk',MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(apkravi.data), MessageType.document, {mimetype: Mimetype.apk, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
        )});
      QueenSew.newcmdaddtosew({ pattern: 'mzip ?(.*)', fromMe: rs, disc: 'Download Mediafire Zip File\nplease use only zip file link'}, async (message, match) => {
        const sewtik = match[1]
        if (!sewtik) return await message.client.sendMessage(message.jid,'need mediafire link',MessageType.text);
         await message.client.sendMessage(message.jid,'downloading your zip file',MessageType.text)
        await axios.get(`${kkk}downloader/mediafire?url=${sewtik}&apikey=${r_text[i]}`).then(async (response) => {
          const {
              result,
            } = response.data
            const apkravi = await axios.get(result, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,'uploading your zip file',MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(apkravi.data), MessageType.document, {mimetype: Mimetype.zip, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
        )});
    QueenSew.newcmdaddtosew({pattern: 'iexo', fromMe: rs}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/exo?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Raviya.CPK})

    }));
    
    QueenSew.newcmdaddtosew({pattern: 'iblackpink', fromMe: rs}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/blackpink?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Raviya.CPK})

    }));
    QueenSew.newcmdaddtosew({ pattern: 'sitepdf ?(.*)', fromMe: rs, desc: 'web site to pdf'}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var sewpdf = await axios.get(`${ggg}${match[1]}&apiKey=${RRRS}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(sewpdf.data), MessageType.document, {filename: 'SewQueen.pdf', mimetype: Mimetype.pdf});

  }));

    QueenSew.newcmdaddtosew({pattern: 'ibts', fromMe: rs}, (async (message) => {

    var sewimage = await axios.get(`https://api.xteam.xyz/randomimage/bts?APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Raviya.CPK})

    }));
    


