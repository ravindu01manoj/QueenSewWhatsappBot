/* Codded by @Ravindu Manoj
Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var STK_on = ''
    var STK_off = ''

        l_dsc = 'turn on and turn of autosticker. -bot owner command'
        alr_on = 'auto sticker is already open!'
        alr_off = 'auto sticker is currently closed!'
        STK_on = '*Auto Sticker turned on! 🤩*'
        STK_off = '*Auto Sticket option turned off 😵*'
    QueenSew.newcmdaddtosew({pattern: 'autostic ?(.*)', fromMe: true, desc: l_dsc, usage: '.autosticker on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_STICKER']: 'false'
                    } 
                });
                await message.sendMessage(STK_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_STICKER']: 'true'
                    } 
                });
                await message.sendMessage(STK_on)
        }
    }));
