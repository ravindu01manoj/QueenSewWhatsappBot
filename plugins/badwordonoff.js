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
    var BAD_on = ''
    var BAD_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'Kick the member who using bad words. -bot owner command'
        alr_on = 'Bad Word Ai is already open!'
        alr_off = 'Bad Word Ai is currently closed!'
        BAD_on = '*Bad Word Ai Turned on ❤*'
        BAD_off = '*Bad Word Ai Turned off 😵*'
    }
   
    if (config.LANG == 'SI') {
        l_dsc = 'අසභය වචන භාවිතා කරන අය ගෲප් එකෙන් කික් කල හැක'
        alr_on = 'ඔන් විය!'
        alr_off = 'ඕෆ් විය'
        BAD_on = 'ආරම්භ විය!'
        BAD_off = 'ක්‍රියා විරහිත විය'
    }
    
    if (config.PSW !== 'kingraviya') {
    QueenSew.newcmdaddtosew({pattern: 'bad ?(.*)', fromMe: true, desc: l_dsc, usage: '.bad off / on' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BAD_KICK']: 'false'
                    } 
                });
                await message.sendMessage(BAD_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['BAD_KICK']: 'true'
                    } 
                });
                await message.sendMessage(BAD_on)
        }
    }));
    }