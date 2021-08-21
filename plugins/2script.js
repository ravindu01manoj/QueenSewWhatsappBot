/* Codded by @Queen Sew Manoj

Telegram: t.me/Queen SewManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Queen Sew Manoj
*/

const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const {spawnSync} = require('child_process');
const fs = require('fs');

const NNVL = "text to image all manu.. වචන රූප බවට පත් කිරීමට යොදාගත හැක"

if (Config.WORKTYPE == 'private') {
     
        QueenSew.newcmdaddtosew({pattern: 'sewmaker', fromMe: true, disc: NNVL}, (async (message, match) => {
      await message.sendMessage('👑 *' + Config.BOTNAME + ' TEXT MAKER* 👑\n  \n_වචන පින්තූර බවට පත් කිරීමෙ මෙනු ලබා ගැනීමට පහත කමාන්ඩ් භාවිතාකරන්න_\n\n\n\n💠 .1text\n\n💠 .2text\n\n💠 .3text\n\n💠 .4text\n\n💠 .5text\n\n💠 .6text\n\n💠 .7text\n\n💠 .8text\n\n💠 .9text\n\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By t.me/RavinduManoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   QueenSew.newcmdaddtosew({pattern: 'sew2maker', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('👑 *' + Config.BOTNAME + ' LOGO MAKER* 👑\n  \n_වචන පින්තූර බවට පත් කිරීමෙ මෙනු ලබා ගැනීමට පහත කමාන්ඩ් භාවිතාකරන්න_\n\n\n\n💠 .1logo\n\n💠 .2logo\n\n💠 .3logo\n\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By t.me/RavinduManoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
}

else if (Config.WORKTYPE == 'public') {

     QueenSew.newcmdaddtosew({pattern: 'sewmaker', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('👑 *' + Config.BOTNAME + ' TEXT MAKER* 👑\n  \n_වචන පින්තූර බවට පත් කිරීමෙ මෙනු ලබා ගැනීමට පහත කමාන්ඩ් භාවිතාකරන්න_\n\n\n\n💠 .1text\n\n💠 .2text\n\n💠 .3text\n\n💠 .4text\n\n💠 .5text\n\n💠 .6text\n\n💠 .7text\n\n💠 .8text\n\n💠 .9text\n\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By t.me/RavinduManoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   QueenSew.newcmdaddtosew({pattern: 'sew2maker', fromMe: false, disc: NNVL}, (async (message, match) => {
      await message.sendMessage('👑 *' + Config.BOTNAME + ' LOGO MAKER* 👑\n  \n_වචන පින්තූර බවට පත් කිරීමෙ මෙනු ලබා ගැනීමට පහත කමාන්ඩ් භාවිතාකරන්න_\n\n\n\n💠 .1logo\n\n💠 .2logo\n\n💠 .3logo\n\n\n\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*Coded By t.me/RavinduManoj*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n')
   }));
   QueenSew.newcmdaddtosew({pattern: '18plus', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('   18+ list\n\n💠 .sespussy\n💠 .sesuni\n💠 .sestent\n💠 .sespanti\n💠 .sesmstrb\n💠 .sesmanga\n💠 .sesglass\n💠 .sescuck\n💠 .sesero\n💠 .sesbdsm\n💠 .sesass\n💠 .sessf')
   }));
   
   QueenSew.newcmdaddtosew({pattern: '18plus', fromMe: false}, (async (message, match) => {
      await message.sendMessage('එය භාවිත කල හැක්කෙ බොට්ගේ අයිතිකරුට පමණි')
   }));

}