/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
 if (Config.PSW !== 'kingraviya') {
function editDistance(comm, wr) {
  comm = comm.toLowerCase();
  wr = wr.toLowerCase();
  var costs = new Array();
  for (var i = 0; i <= comm.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= wr.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (comm.charAt(i - 1) != wr.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[wr.length] = lastValue;
  }
  return costs[wr.length];
}
function gametimerai(comm, wr) {
  var longer = comm;
  var shorter = wr;
  if (comm.length < wr.length) {
    longer = wr;
    shorter = comm;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
var OYUN = {
    inGame: false,
    actionTimer: false,
    reamingTime: 0,
    identify: '',
    description:  'එය ආරම්භ වූ විට, එය අහඹු ලෙස වචන තෝරා ගන්නා අතර ක්‍රීඩකයින්ට අනුමාන කිරීමට අසනු ඇත. කාලය අවිනිශ්චිතය!',
    caution: 'This plugin maded by t.me/RavinduManoj',
    words: {
        forbiddenuser: '*ඔබට වචනය අදුනාගැනීමට නොහැකිවිය!* \n\n*Game Over ❌*',
        alreadyinGame: '*ගේම් එක ආරම්බ වී ඇත!*\n*නැවත ආරම්බ කිරීම සදහා අවසන් වන තුරු රැදී සිටින්න!*',
        successguess: '*Congratulations! ඔබ වචනය හදුනාගත්තා.... You Won! 🎉*',
        unsuccessguess:  '*Game Over! No One Guess The Word!*',
        starting: '*ගේම් එක තත්පර අටකින් ආරම්භ වේ. වචනය owner ගෙ ඉන්බොක්හි ඇත. මෙහි සිටින අයට වචනය ගෙස් කිරීමේ හැකියාව ඇත!*',
        timeinfo: '*අමතක කරන්න එපා! ඔබේ කාලය ඕනෑම වේලාවක අවසන් විය හැකිය. තහනම් වචන වලින් පරිස්සම් වන්න. වේගයෙන් ක්‍රියා කරන්න!',
        word: '=== *වචනය* ===\n>>> ',
        word_forbiddens: '\n\n=== *තහනම් වචන* ===\n',
        began: '*Game has Started!*',
        instantOver: '*ක්‍රීඩාව ආරම්භ කළ තැනැත්තා වරදක් කළේය. The Game is Over!*',
        msg: 'base64',
        forbiddens: {
            msg1: '',
            msg2: '',
            msg3: '',
            w1: '_Water - Reptile - Carnivorous_',
            w2: '_Magic - İxir - Chemistry_',
            w3: '_Mountain - Lava - Explosion_',
            w4: '_Bomb - Explosion - Army_',
            w5: '_Wood - Tree - Minecraft_',
            w6: '_Gasoline - Car - Rocket_',
            w7: '_Air - Car - Mix_',
            w8: '_Art - Physic - Logo_',
            w9: '_Space - Ozon - World_',
            w10: '_Cut - Paper - Pointed_',
            w11: '_Minecraft - Clothes - Bride_',
            w12: '_Council - Parliament - Politics_',
            w13: '_Run - Effort - Power_',
            w14: '_Virtual - Headband - Glasses_',
            w15: '_Work - Action - Agility_',
            w16: '_Finger - Wedding - Married_',
            w17: '_Minecraft - Lava - Black_',
            w18: '_Wood - Smooth - Brown_',
            w19: '_Door - Car - Key_',
            w20: '_Smell - Gas - Tighten_',
            w21: '_Propeller - Air - Wind_',
            w22: '_Gas - Balloon - Volatile_',
            w23: '_Home - Living - Hall_',
            w24: '_Feeling - Serenity - Darling_',
            w25: '_Rich - Serenity - Buy_',
            w26: '_Arrow - Pointed - Minecraft_'
        }
    }
}

QueenSew.newcmdaddtosew({pattern: 'wordgame$', fromMe: false, desc: OYUN.description, warn: OYUN.caution}, (async (message, match) => {
    const id = message.jid
    const txt = MessageType.text
    if (OYUN.inGame) return await message.client.sendMessage(id,OYUN.words.alreadyinGame,txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,OYUN.words.starting,txt)
    await new Promise(r => setTimeout(r, 170))
    var word = new Array ();
    word[0] = 'Alligator'
    word[1] = 'Alchemy'
    word[2] = 'Volcano'
    word[3] = 'Mine'
    word[4] = 'Oak'
    word[5] = 'Fuel'
    word[6] = 'Gas'
    word[7] = 'Vector'
    word[8] = 'Atmosphere'
    word[9] = 'Scissors'
    word[10] = 'Chest'
    word[11] =  'Deputy'
    word[12] = 'Energy'
    word[13] = 'VR'
    word[14] = 'Mobility'
    word[15] = 'Ring'
    word[16] = 'Obsidian'
    word[17] = 'Emery'
    word[18] = 'Lock'
    word[19] = 'Perfume'
    word[20] = 'Fan'
    word[21] = 'Helium'
    word[22] = 'Corridor'
    word[23] = 'Love'
    word[24] = 'Money'
    word[25] = 'Bow'
    
    var i = Math.floor(25*Math.random())
    if (word[i] == 'Alligator') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w1
        await message.client.sendMessage(message.client.user.jid,nmsg,txt)
        OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w1.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
        OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w1.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
        OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w1.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Bow' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w26
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w26.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w26.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w26.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Money' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w25
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w25.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w25.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w25.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Love' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w24
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w24.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w24.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w24.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Corridor' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w23
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w23.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w23.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w23.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Helium' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w22
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w22.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w22.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w22.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Fan' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w21
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w21.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w21.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w21.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Perfume' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w20
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w20.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w20.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w20.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Lock' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w19
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w19.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w19.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w19.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Emery' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w18
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w18.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w18.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w18.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Obsidian' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w17
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w17.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w17.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w17.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Ring' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w16
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w16.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w16.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w16.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Mobility' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w15
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w15.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w15.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w15.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'VR') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w14
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w14.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w14.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w14.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Energy' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w13
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w13.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w13.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w13.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Deputy' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w12
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w12.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w12.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w12.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Chest' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w11
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w11.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w11.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w11.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Scissors' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w10
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w10.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w10.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w10.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Vector' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w8
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w8.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w8.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w8.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Atmosphere' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w9
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w9.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w9.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w9.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Gas' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w7
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w7.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w7.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w7.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Fuel' ) {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w6
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w6.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w6.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w6.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Simya') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w2  
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w2.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w2.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w2.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
    }
    else if (word[i] == 'Yanardağ') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w3
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w3.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w3.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w3.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
        
    }
    else if (word[i] == 'Mine') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w4
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w4.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w4.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w4.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
    }
    else if (word[i] == 'Meşe') {
        var nmsg = OYUN.words.word + word[i] + OYUN.words.word_forbiddens + OYUN.words.forbiddens.w5
            OYUN.words.forbiddens.msg1 = OYUN.words.forbiddens.w5.replace(/_/g, '').replace(/-/g, '').split(' ')[0]
            OYUN.words.forbiddens.msg2 = OYUN.words.forbiddens.w5.replace(/_/g, '').replace(/-/g, '').split(' ')[2]
            OYUN.words.forbiddens.msg3 = OYUN.words.forbiddens.w5.replace(/_/g, '').replace(/-/g, '').split(' ')[4]
            await message.client.sendMessage(message.client.user.jid,nmsg,txt)
    }
    await new Promise(r => setTimeout(r, 2000))
    await message.client.sendMessage(id,OYUN.words.timeinfo,txt)
    await new Promise(r => setTimeout(r, 2000))
    await message.client.sendMessage(id,'*5*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,'*4*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,'*3*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,'*2*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,'*1*',txt)
    await new Promise(r => setTimeout(r, 1000))
    await message.client.sendMessage(id,OYUN.words.began,txt)
    OYUN.inGame = true
    OYUN.actionTimer = true
    OYUN.identify = id
    OYUN.words.msg = word[i]
    var max = 90000;
    var min = 19000;
    var time = Math.floor(Math.random() * (+max - +min) + +min); 
    OYUN.reamingTime = time
    await new Promise(r => setTimeout(r, OYUN.reamingTime))
    if (OYUN.actionTimer) {
        OYUN.inGame = false
        OYUN.actionTimer = false
        OYUN.identify = ''
        OYUN.words.msg = 'base64'
        return await message.client.sendMessage(id,OYUN.words.unsuccessguess,txt)
    } else { return }
}));
QueenSew.newcmdaddtosew({on: 'text', fromMe: false, dontAdCommandList: true, delownsewcmd: false}, (async (message, match) => {
    const gid = OYUN.identify
    const counter = OYUN.reamingTime
    var guessing = await gametimerai(OYUN.words.msg, message.message)
    if (message.jid == gid && OYUN.inGame && guessing > 0.8) {
        OYUN.inGame = false
        OYUN.actionTimer = false
        OYUN.identify = ''
        OYUN.words.msg = 'base64'
        return await message.client.sendMessage(message.jid,OYUN.words.successguess, MessageType.text, { quoted: message.data })
    }
}));
QueenSew.newcmdaddtosew({on: 'text', fromMe: true, dontAdCommandList: true, delownsewcmd: false}, (async (message, match) => {
    const gid = OYUN.identify
    const counter = OYUN.reamingTime
    if (message.jid == gid && OYUN.inGame) {
        var mssage1 = await gametimerai(OYUN.words.forbiddens.msg1, message.message)
        var mssage2 = await gametimerai(OYUN.words.forbiddens.msg2, message.message)
        var mssage3 = await gametimerai(OYUN.words.forbiddens.msg3, message.message)
        var mssage4 = await gametimerai(OYUN.words.msg, message.message)
        if (mssage1 > 0.7 || mssage2 > 0.7 || mssage3 > 0.7 || mssage4 > 0.7) {
            OYUN.inGame = false
            OYUN.actionTimer = false
            OYUN.identify = ''
            OYUN.words.msg = 'base64'
            return await message.client.sendMessage(message.jid,OYUN.words.forbiddenuser, MessageType.text, { quoted: message.data })
        }
    }
}));
 }
/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/