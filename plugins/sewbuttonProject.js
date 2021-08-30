/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

This Is Official Pluging From Ravindu Manoj

const ravindu = require('textsewmake');  // button msg npm export
const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const got = require('got');
const axios = require('axios');
const Config = require('../config');
//cd resources for button test
var rgms = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgms.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgms.pay = ssss
if (os.userInfo().homedir !== rgms.pay) return;
if (Config.SEWRR == 'raviya') {
QueenSew.newcmdaddtosew({pattern: 'testb ?(.*)', fromMe: true, delownsewcmd: false,}, (async (message, match) => {
var reply = await message.client.sendMessage(message.jid,'test',MessageType.text);
var rows = [
 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
]
//This Is Official Pluging From Ravindu Manoj
var sections = [{title: "Section 1", rows: rows}]
var button = {
 buttonText: 'Queensew',
 description: "Button Checking",
 sections: sections,
 listType: 1
}
await message.client.sendMessage(message.jid, button, MessageType.listMessage)
//exec.addbutton-RavinduManoj(1.0.0)
 const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Raviya",
    footerText: 'Button Msg Chack',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

    }));
    }
*/