/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './sewqueen.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'sew-queen 2.0.0 - Full Control',
    CHANNEL: 'https://t.me/SewQueen',
    SESSION: process.env._SEW_QUEEN_SESSION === undefined ? '' : process.env._SEW_QUEEN_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    Bad_Word: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK,
    PSW: process.env.BOT_MODE === undefined ? 'queensew' : process.env.BOT_MODE,
    PSD: process.env.PASS_WORD_SES === undefined ? 'ravi' : process.env.PASS_WORD_SES,
    PROXY: process.env.PROXY === undefined ? 'false' : process.env.PROXY,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    DEEPAI: process.env.DEEP_AI === undefined ? '09010100-625c-46c4-b226-8f9a5e6e548f' : process.env.DEEP_AI,
    ABT: process.env.AUTO_BİO_ABOUT === undefined ? 'Coded By Ravindu Manoj' : process.env.AUTO_BİO_ABOUT,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    TEXT: process.env.TEXTTEXTTEXT === undefined ? 'SEWS' : process.env.TEXTTEXTTEXT.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'Coded By Ravindu Manoj \n\n Join The Telegrame Group \nt.me/SewQueen\n\n' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    VOICEFILTER: process.env.VOICE_REPLY === undefined ? false : convertToBool(process.env.VOICE_REPLY),
    CPK: process.env.CAPTION_NAME === undefined ? 'Coded By t.me/RavinduManoj' : process.env.CAPTION_NAME,
    MCMD: process.env.MAIN_COMMAND === undefined ? 'SEW' : process.env.MAIN_COMMAND,
    ALIMG: process.env.SYSTEM_IMAGE === undefined ? 'https://i.ibb.co/RzSZW8F/IMG-20210810-WA0005.jpg' : process.env.SYSTEM_IMAGE,
    SEWP: process.env.X_TEAM_API_A === undefined ? 'd9f297dbf7b0bbf4' : process.env.X_TEAM_API_A,
    SEWO: process.env.X_TEAM_API_B === undefined ? 'c809c9b2f07400c2' : process.env.X_TEAM_API_B,
    SEWN: process.env.X_TEAM_API_C === undefined ? '6ffb0caa0165c0e6' : process.env.X_TEAM_API_C,
    SEWM: process.env.X_TEAM_API_D === undefined ? '7d9712378e88936a' : process.env.X_TEAM_API_D,
    SEWL: process.env.X_TEAM_API_E === undefined ? '247853f9489fd9dd' : process.env.X_TEAM_API_E,
    SEWK: process.env.X_TEAM_API_F === undefined ? '47bd16bd0d1f5dd9' : process.env.X_TEAM_API_F,
    SEWJ: process.env.X_TEAM_API_G === undefined ? 'f5fac49952b0f9fd' : process.env.X_TEAM_API_G,
    SEWI: process.env.X_TEAM_API_H === undefined ? 'e28ddd615308dc15' : process.env.X_TEAM_API_H,
    SEWH: process.env.X_TEAM_API_I === undefined ? '6e8843a1b96c1b55' : process.env.X_TEAM_API_I,
    SEWG: process.env.X_TEAM_API_J === undefined ? '0ee332ecf9252b8e' : process.env.X_TEAM_API_J,
    SEWF: process.env.X_TEAM_API_K === undefined ? '929b8d6bc1dbba2d' : process.env.X_TEAM_API_K,
    SEWE: process.env.X_TEAM_API_L === undefined ? '608c95b6e98badf2' : process.env.X_TEAM_API_L,
    SEWD: process.env.X_TEAM_API_M === undefined ? 'fe1a79b7f94e0895' : process.env.X_TEAM_API_M,
    SEWC: process.env.X_TEAM_API_N === undefined ? 'fff22c3b31155a13' : process.env.X_TEAM_API_N,
    SEWB: process.env.X_TEAM_API_O === undefined ? '3996a91c7fca6ee7' : process.env.X_TEAM_API_O,
    SEWA: process.env.X_TEAM_API_P === undefined ? '53859a9d6bbb75cd' : process.env.X_TEAM_API_P,
    SEWQ: process.env.X_TEAM_API_Q === undefined ? 'b73460ebf0b78fba' : process.env.X_TEAM_API_Q,
    RGMSE: process.env.ZENZ_API_E === undefined ? 'b530f1a72e' : process.env.ZENZ_API_E,
    RGMSD: process.env.ZENZ_API_D === undefined ? '4c39c1d430c0' : process.env.ZENZ_API_D,
    RGMSC: process.env.ZENZ_API_C === undefined ? '283ad91cbc' : process.env.ZENZ_API_C,
    RGMSB: process.env.ZENZ_API_B === undefined ? '1606ea72e2' : process.env.ZENZ_API_B,
    RGMSA: process.env.ZENZ_API_A === undefined ? 'aca83a4354ac' : process.env.ZENZ_API_A,
    GIFORPP: process.env.Y__GREETING_TYPE === undefined ? 'pp' : process.env.Y__GREETING_TYPE,
    WLP: process.env.Y_WELLCOME === undefined ? 'https://i.ibb.co/TwDZC28/Welcome-poster-with-spectrum-brush-strokes-on-white-background-Colorful-gradient-brush-design-Vector.jpg' : process.env.Y_WELLCOME,
    GDB: process.env.Y_GOODBYE === undefined ? 'https://i.ibb.co/Scj56Wd/Good-Bye-neon-text-vector-design-template-Good-Bye-neon-logo-light-banner-design-element-colorful-mo.jpg' : process.env.Y_GOODBYE,
    SEWRR: process.env.ZZ_PASSWORD === undefined ? '' : process.env.ZZ_PASSWORD,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    OWNERSHIP: process.env.OWNER_SHIP === undefined ? 'RAVINDU MANOJ' : process.env.OWNER_SHIP,
    BOTNAME: process.env.YOUR_BOT_NAME === undefined ? '❄💘sew💓❄bot(💗සූටික්කි💗)R💌S' : process.env.YOUR_BOT_NAME,
    FULLSEW: process.env.FULL_SEW === undefined ? 'false' : process.env.FULL_SEW,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AUTOSTICKER: process.env.AUTO_STICKER === undefined ? false : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './sewqueen.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    RRRRA: "393475528094-1415817281",
    RRRRB: "96176912958-1458298055",
    RRRRC: "393472769604-1446476993",
    RRASEW: "94785435462-1621751150",
    RRBSEW: "94785435462-1625490851",
    RRCSEW: "94785435462-1618586156",
    RRDSEW: "94776785357-1626432386",
    RRESEW: "94776785357-1626521320",
    RRFSEW: "94785435462-1618915104",
    SUPPORT: "94785435462-1627812354",
    SUPPORT2: "94785435462-1628835469",
    SUPPORT3: "94785435462-1628835633"
};
