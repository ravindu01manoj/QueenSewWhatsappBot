/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/

const SewQueen = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('sewshow');
const { errorMessage, infoMessage } = require('../helpers');


SewQueen.newcmdaddtosew({ pattern: 'joox ?(.*)', fromMe: false, dontAdCommandList: true}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage('need user name'))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://gratisancok.herokuapp.com/api/joox/?kata=${userName}&apikey=ZailaniGans`)
      .then(async (response) => {
        const {
          mp3_url,
          judul,
	artist,
	album,	
        } = response.data.result.result

        const profileBuffer = await axios.get(mp3_url, {responseType: 'arraybuffer'})

        const msg = `${"Title"}*: ${judul}\n${"Artist"}*: ${artist}\n${"Album"}*: ${album}\n${mp3_url}`

	 await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.document)
	    await message.sendMessage(message.jid,msg, MessageType.document,)
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.Please check the song name.")),
      )
  },
)








 SewQueen.newcmdaddtosew({ pattern: 'rest ?(.*)', fromMe: true,  dontAdCommandList: true, desc: 'downoad video from instargrame link' }, (async (message, match) => {
        if (match[0].includes('install')) return;
        if (match[1] === '') return await message.client.sendMessage(message.jid, 'need insta link', MessageType.text, { quoted: message.data });
        if (!match[1].includes('www.instagram.com')) return await message.client.sendMessage(message.jid, 'need insta link', MessageType.text, { quoted: message.data });
	
        let urls = `https://api.xteam.xyz/dl/ig?url=${match[1]}&APIKEY=ab9942f95c09ca89`
        let response
        try { response = await got(urls) } catch { return await message.client.sendMessage(message.jid, 'FİX', MessageType.text, { quoted: message.data });
        }
        const json = JSON.parse(response.body);

        if (json.status === false) return await message.client.sendMessage(message.jid, 'NOT FOUND', MessageType.text, { quoted: message.data });
        if (json.code === 403) return await message.client.sendMessage(message.jid, '```API Error!```', MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, 'Not Found', MessageType.text, { quoted: message.data });

        let url = json.result.data[0].data;
        let name = json.result.data[0].type;
        await axios({ method: "get", url, headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, responseType: 'arraybuffer'}).then(async (res) => {
            if (name === 'video') { return await message.sendMessage(Buffer(res.data), MessageType.video, { caption: '*' + 'USERNAME:' + '* ' + json.result.username + '\n*' + 'LİNK:' + '* ' + 'http://instagram.com/' + json.result.username + '\n*' + 'CAPTİON:' + '* ' + json.result.caption }) } else { return await message.sendMessage(Buffer(res.data), MessageType.image, { caption: '*' + 'USERNAME:' + '* ' + json.result.username + '\n*' + 'LİNK' + '* ' + 'http://instagram.com/' + json.result.username + '\n*' + 'CAPTİON:' + '* ' + json.result.caption });
            }
        });

    }));



SewQueen.newcmdaddtosew({ pattern: 'twt ?(.*)', fromMe: false,  dontAdCommandList: true, desc: "download from twitter links" }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Give proper link!"))

    await message.sendMessage(infoMessage('Loding...'))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${userName}`)
      .then(async (response) => {
        const {
          format,
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${format}`


      if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}

      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error" )),
      )
  },
)






SewQueen.newcmdaddtosew({ pattern: 'show ?(.*)', fromMe: false , desc: "Get info related to tv series and shows"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("give me the show name"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          name,
          type,	
          language,
           status,
	  officialSite,
	  summary,
        } = response.data[0].show

   
        const msg = `*${"Name"}*: ${name}\n*${"Type"}*: ${type}\n*${"Type"}*: ${status}\n*${"Summary"}*: ${summary}\n*${"Official Site"}*: ${officialSite}`
       
       await message.client.sendMessage(message.jid, msg , MessageType.text);
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Not Found" )),
      )
  },
)

SewQueen.newcmdaddtosew({ pattern: 'show ?(.*)', fromMe: false , dontAdCommandList: true}, async (message, match) => {

 const userName = match[1]
    
  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          original,
        } = response.data[0].show.image

        const profileBuffer = await axios.get(original, {responseType: 'arraybuffer'})
     
        const msg = ``
       
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(""),
      )
  },
)
