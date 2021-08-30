/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/
const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Raviya = require('../config');
const {spawnSync} = require('child_process');
const fs = require('fs');
     
const SEWARR = "Sew Queen session එක 👇"
const SEWBRR = Raviya.SESSION
const SEWAARR = "Heruku Api Key Eka👇"
const SEWABR = Raviya.API_KEY
const SEWYRR = "Qr එක ගැනීම සදහා යායුතු ලින්ක් එක 👇"
const SEWZRR = "https://replit.com/@RavinduManoj/Queen-Sew-QR-Code"
const SEWGRR = "Alive Msg eka"
const SEWHRR = Raviya.ALIVEMSG
const SEWIRR = "Xteam Api Key 1"
const SEWJRR = Raviya.SEWP
const SEWKRR = "Xteam Api Key 2"
const SEWLRR = Raviya.SEWO
const SEWMRR = "Xteam Api Key 3"
const SEWNRR = Raviya.SEWN
const SEWORR = "Xteam Api Key 4"
const SEWPRR = Raviya.SEWM
const SEWQRR = "වෙල්කම් මැසේජ් එකට අදාල ෆොටෝ එකෙහි ඩිරෙක්ට් ලින්ක් එක"
const SEWRRR = Raviya.WLP
const SEWSRR = "ගුඩ්බායි මැසේජ් එකට අදාල ෆොටෝ එකෙහි ඩිරෙක්ට් ලින්ක් එක"
const SEWTRR = Raviya.GDB
const SEWURR = "Base64 encoded 4to eka"
const SEWVRR = Raviya.THUM
const SEWERR = "System Image eka"
const SEWFRR = Raviya.ALIMG
const SEWWRR = "හදන විදිය තියෙන යූටියුබ් ලින්ක් එක"
const SEWXRR = "https://youtu.be/AKU7YVXxMbM"
const SEWCRR = "බොට් සෑදීම සදහා යා යුතු ලින්ක් එක"
const SEWDRR = "https://github.com/Sew01RaviduManoj01KingAndQueen/QueenSew.git"

QueenSew.newcmdaddtosew({pattern: 'configlist', fromMe: true, disc: 'බොට්ව සෑදීමේදී ඔබ විසින් දමා ඇති දත්ත ලබා ගත හැක . your config details.' }, (async (message, match) => {
      await message.client.sendMessage(message.jid,'hear is your all config 😉', MessageType.text);
      await message.client.sendMessage(message.jid,SEWARR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWBRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWCRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWDRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWERR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWFRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWGRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWHRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWIRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWJRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWKRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWLRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWMRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWNRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWORR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWPRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWQRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWRRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWSRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWTRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWURR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWVRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWWRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWXRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWYRR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWZRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
      await message.client.sendMessage(message.jid,SEWAARR, MessageType.text);
      await message.client.sendMessage(message.jid,SEWABRR, MessageType.text);
      await message.client.sendMessage(message.jid,'👆👆👆👆', MessageType.text);
   }));
