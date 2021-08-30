/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/


const QueenSew = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const { errorMessage, infoMessage } = require('../helpers');
const Lang = Language.getString('instagram') ;

 if (Config.PSW !== 'kingraviya') {

if (Config.WORKTYPE == 'private') {

QueenSew.newcmdaddtosew({ pattern: 'profinsta ?(.*)', fromMe: true, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

    await message.sendMessage(infoMessage(Lang.LOADING))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igstalk?username=${userName}`)
      .then(async (response) => {
        const {
          pic,
          username,
          bio,
          follower,
          following,
        } = response.data

        const profileBuffer = await axios.get(pic, {responseType: 'arraybuffer'})

        const msg = `
        *${Lang.USERNAME}*: ${username}    
        *${Lang.BIO}*: ${bio}
        *${Lang.FOLLOWERS}*: ${follower}
        *${Lang.FOLLOWS}*: ${following}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
      )
  },

 )
}
else if (Config.WORKTYPE == 'public') {

QueenSew.newcmdaddtosew({ pattern: 'profinsta ?(.*)', fromMe: false, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

    await message.sendMessage(infoMessage(Lang.LOADING))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igstalk?username=${userName}`)
      .then(async (response) => {
        const {
          pic,
          username,
          bio,
          follower,
          following,
        } = response.data

        const profileBuffer = await axios.get(pic, {responseType: 'arraybuffer'})

        const msg = `
        *${Lang.USERNAME}*: ${username}    
        *${Lang.BIO}*: ${bio}
        *${Lang.FOLLOWERS}*: ${follower}
        *${Lang.FOLLOWS}*: ${following}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
      )
  },

 )
}
}
