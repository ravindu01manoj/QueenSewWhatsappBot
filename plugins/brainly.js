const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

// CMD_HELP
const brainly = "Finds the answer."
const usage = ".brainly <Question>"

const butuh = "```Enter the Question!```"
 if (Config.PSW !== 'kingraviya') {
QueenSew.newcmdaddtosew({ pattern: 'brainly ?(.*)', fromMe: false, desc: brainly, usage: usage }, async (message, match) => {

        const Soal = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid, butuh, MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
          .then(async (response) => {
            const {
              soal,
              jawaban,
            } = response.data

            const msg = `*Soal:* ${soal}
*බොරුවක් කියන්නෙ 😂:* ${jawaban.replace(/1Question/g, '*(1) Question*').replace(/2Question/g, '*(2) Question*').replace(/3Question/g, '*(3) Question*').replace(/Answer/g, '*Answer*').replace(/Brainly Found/g, '')}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
}