/* Codded by @Ravindu Manoj


Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const ravindumanoj = require('textsewmake'); // Import NPM Package

const QueenSew = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var desc_msg = ''
if (Config.LANG == 'SI') desc_msg = 'ටෙක්ස්ට් මේකර් ටූල්ස්.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'

let wk = Config.WORKTYPE == 'public' ? false : true
if (Config.PSW !== 'kingraviya') {
QueenSew.newcmdaddtosew({pattern: '1text$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'SI') {
        usage_cmd = '🌷 *උදාහරණ:* _'
        command_cmd = '❄ *විදාන:* '
        desc_cmd = '🇱🇰*විස්තර:* _'
    } else { 
        usage_cmd = '🌷 Example : '
        command_cmd = '❄ Command : '
        desc_cmd = '🇱🇰 Description : '
    }
    const msg = command_cmd + '```.sewdevil``` \n' + t1 + '_\n' + usage_cmd + '*.sewdevil Ravindu*\n\n' +
        command_cmd + '```.sewbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.sewbear Ravindu*\n\n' +
        command_cmd + '```.sewwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '*.sewwolf Ravindu;Manoj*\n\n' +
        command_cmd + '```.sewneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.sewneon Ravindu*\n\n' +
        command_cmd + '```.sew2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.sew2neon Ravindu*\n\n' +
        command_cmd + '```.sew3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '*.sew3neon Ravindu*\n\n' +
        command_cmd + '```.sew4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '*.sew4neon Ravindu*\n\n' +
        command_cmd + '```.sewlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.sewlight Ravindu*\n\n' +
        command_cmd + '```.sewjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.sewjoker Ravindu*\n\n' +
        command_cmd + '```.sewninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.sewninja Ravindu;Manoj*\n\n' +
        command_cmd + '```.sewglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.sewglitter Ravindu*\n\n' +
        command_cmd + '```.sewbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '*.sewbokeh Ravindu*\n\n' +
        command_cmd + '```.sewmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '*.sewmarvel Ravindu;Manoj*\n\n' +
        command_cmd + '```.sew2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '*.sew2marvel Ravindu;Manoj*\n\n' +
        command_cmd + '```.sewavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '*.sewavengers Ravindu;Manoj*\n\n' +
        command_cmd + '```.sewgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '*.sewgraf Manoj;Ravindu*\n\n' +
        command_cmd + '```.sew2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '*.sew2graf Manoj;Ravindu*\n\n' +       
        command_cmd + '```.sewlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '*.sewlion Manoj;Ravindu*\n\n' +
        command_cmd + '```.sewice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '*.sewice Ravindu*\n\n' +
        command_cmd + '```.sewspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '*.sewspace Ravindu;Manoj*\n\n' +
        command_cmd + '```.sewsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '*.sewsmoke Ravindu*\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.sewglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '*.sewglow Ravindu*\n\n' +
        command_cmd + '```.sewfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '*.sewfire Ravindu*\n\n' +
        command_cmd + '```.sewharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '*.sewharry Ravindu*\n\n' +
        command_cmd + '```.sewcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '*.sewcup Ravindu*\n\n' +
        command_cmd + '```.sewcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '*.sewcemetery Ravindu*\n\n' +
        command_cmd + '```.sewglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '*.sewglitch Ravindu;Manoj*\n\n'
    var r_text = new Array ();
        r_text[0] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
        r_text[1] = "https://i.ibb.co/VHzbfYY/IMG-20210820-213542.jpg" ;
        var i = Math.floor(2*Math.random())
        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg + ' ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'  })
        }));
QueenSew.newcmdaddtosew({pattern: 'sewhorror ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/horror.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/horror.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewgart ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.ephoto("https://ephoto360.com/tao-hieu-ung-mui-ten-dinh-kem-chu-ky-nhieu-mau-846.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/gart.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/gart.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewdevil ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/devil.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewbear ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/bear.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewwolf ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/wolf.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewwice ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-layered-text-effects-online-free-1032.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/wolf.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewneon ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/neon.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sew2neon ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/neon2.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewlight ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/li.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewjoker ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/joker.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewninja ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/ninja.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewglitter ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/tt.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewbokeh ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/bkh.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewmarvel ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/marvel.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sew2marvel ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/mar2.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewavengers ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/aven.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewglitch ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/tt2.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewgraf ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/ttgra.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sew2graf ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/t2gra.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewlion ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/lion.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sew3neon ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/neon3.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewice ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsa("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/ice.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'space ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    ravindumanoj.rgmsa("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/space.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewsmoke ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsb("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/smoke.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewglow ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/QueenSewWhatsappBot/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/glowttp.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
    })
}));
QueenSew.newcmdaddtosew({pattern: 'sewfire ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsb("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/tfire.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewharry ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsb("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/hp.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sew4neon ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsb("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/t4n.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewcemetery ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsb("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/cmth.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
QueenSew.newcmdaddtosew({pattern: 'sewcup ?(.*)', fromMe: wk, dontAdCommandList: true}, (async (message, match) => {
    ravindumanoj.rgmsb("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/QueenSewWhatsappBot/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/cup.jpg'), MessageType.image, { caption: '*' + Config.CPK + '*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
}
