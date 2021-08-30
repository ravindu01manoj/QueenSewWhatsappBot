/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const Heroku = require('heroku-client');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const Db = require('./sql/plugin');

const Language = require('../language');
const Lang = Language.getString('_plugin');
const NLang = Language.getString('updater');

let msg = Config.LANG == 'SI' || Config.LANG == 'AZ' ? 'මෙම ප්ලගීනය ස්තාපිත කළ හැක ' : '*This Plugin is Officially Approved!* ✅'
let unmsg = Config.LANG == 'SI' || Config.LANG == 'AZ' ? 'මෙම ප්ලගීනය ස්තාපිත කල නොහැක ' : '*This Plugin isn\'t Officially Approved!* ❌'

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


QueenSew.newcmdaddtosew({pattern: 'install ?(.*)', fromMe: true,  delownsewcmd: false,  desc: Lang.INSTALL_DESC, dontAdCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.NEED_URL + '.install https://gist.github.com/phaticusthiccy/4232b1c8c4734e1f06c3d991149c6fbd')
    try {
        var url = new URL(match[1]);
    } catch {
        return await message.sendMessage(Lang.INVALID_URL);
    }
    
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }

    var response = await got(url);
    if (response.statusCode == 200) {
        // plugin install option
        var plugin_name = response.body.match(/applyCMD\({.*pattern: ["'](.*)["'].*}/);
        if (plugin_name.length >= 1) {
            plugin_name = "_____" + plugin_name[1];
        } else {
            plugin_name = "_____" + Math.random().toString(36).substring(8);
        }

        fs.writeFileSync('./plugins/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('./' + plugin_name);
            return await message.sendMessage(Lang.INVALID_PLUGIN + ' ```' + e + '```');
        }

        await Db.installPlugin(url, plugin_name);
        await message.client.sendMessage(message.jid, Lang.INSTALLED, MessageType.text);
    }
}));

QueenSew.newcmdaddtosew({pattern: 'plugin', fromMe: true,  delownsewcmd: false,  desc: Lang.PLUGIN_DESC, dontAdCommandList: true}, (async (message, match) => {
    var mesaj = Lang.INSTALLED_FROM_REMOTE;
    var plugins = await Db.PluginDB.findAll();
    if (plugins.length < 1) {
        return await message.sendMessage(Lang.NO_PLUGIN);
    } else {
        plugins.map(
            (plugin) => {
                mesaj += plugin.dataValues.name + ': ' + plugin.dataValues.url + '\n';
            }
        );
        return await message.client.sendMessage(message.jid, mesaj, MessageType.text);
    }
}));

QueenSew.newcmdaddtosew({pattern: 'remove(?: |$)(.*)', fromMe: true,  delownsewcmd: false,  desc: Lang.REMOVE_DESC, dontAdCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.NEED_PLUGIN);
    if (!match[1].startsWith('_____')) match[1] = '_____' + match[1];
    var plugin = await Db.PluginDB.findAll({ where: {name: match[1]} });
    if (plugin.length < 1) {
        return await message.sendMessage(message.jid, Lang.NOT_FOUND_PLUGIN, MessageType.text);
    } else {
        await plugin[0].destroy();
        delete require.cache[require.resolve('./' + match[1] + '.js')]
        fs.unlinkSync('./plugins/' + match[1] + '.js');
        await message.client.sendMessage(message.jid, Lang.DELETED, MessageType.text);
        
        await new Promise(r => setTimeout(r, 1000));
    
        await message.sendMessage(NLang.AFTER_UPDATE);

        console.log(baseURI);
        await heroku.delete(baseURI + '/dynos').catch(async (error) => {
            await message.sendMessage(error.message);

        });
    }

}));