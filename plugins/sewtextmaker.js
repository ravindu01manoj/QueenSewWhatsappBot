/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
/*

This Is Unofficial Api From Ravindu Manoj 
Plugin thieves cannot use this api
*/
const QueenSew = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const ravindu = require('textsewmake'); 
const fs = require('fs');
const Raviya = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
let rs = Raviya.WORKTYPE == 'public' ? false : true
if (os.userInfo().homedir !== rgmsk.pay) return;
 if (Raviya.PSW !== 'kingraviya') {
QueenSew.newcmdaddtosew({pattern: 'horror ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/horror.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/horror.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'fiction ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/fiction.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/fiction.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'transformer ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-transformer-text-effect-online-1035.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/transformer.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/transformer.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'berry ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/berry.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/berry.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'thunder ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/thunder.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/thunder.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'magma ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/magma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/magma.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '4neon ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/4neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/4neon.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1glitch ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1glitch.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1glitch.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2glitch ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2glitch.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2glitch.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1harry ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-harry-potter-text-effect-online-1025.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1harry.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1harry.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'crack ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/crack.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/crack.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1glass ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/broken-glass-text-effect-free-online-1023.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1glass.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1glass.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'paper ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/paper.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/paper.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '13d ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/13d.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/13d.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '14d ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/14d.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/14d.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1beach ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1beach.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1beach.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'watertext ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/watertext.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/watertext.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2paper ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2paper.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2paper.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1foggy ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1foggy.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1foggy.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2underwater ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2underwater.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2underwater.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1graf ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1graf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1graf.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1xmas ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1xmas.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1xmas.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1snow ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1snow.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1snow.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1cloud ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1cloud.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1cloud.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1luxury ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1luxury.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1luxury.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3dtext ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/3d-gradient-text-effect-online-free-1002.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/3dtext.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/3dtext.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'bpink ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-blackpink-logo-style-online-1001.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/bpink.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/bpink.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2cloud ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2cloud.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2cloud.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3cloud ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/3cloud.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/3cloud.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1sand ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1sand.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1sand.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2sand ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/sand-writing-text-effect-online-990.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2sand.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2sand.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3sand ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/3sand.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/3sand.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '4sand ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/4sand.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/4sand.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1foil ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/foil-balloon-text-effect-for-birthday-987.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1foil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1foil.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'glue ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/glue.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/glue.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'metal ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/metal-dark-gold-text-effect-984.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/metal.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/metal.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2galaxy ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2galaxy.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2galaxy.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1917 ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/1917-style-text-effect-online-980.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1917.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1917.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'minion ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/minion-text-effect-3d-online-978.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/minion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/minion.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'boom ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/double-exposure-text-effect-black-white-976.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/boom.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/boom.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'holo ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/holographic-3d-text-effect-975.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/holo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/holo.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2metal ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/metal-purple-dual-effect-973.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2metal.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2metal.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'deluxe ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/deluxe-silver-text-effect-970.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/deluxe.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/deluxe.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2luxury ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/color-full-luxury-metal-text-effect-969.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2luxuru.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2luxury.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '3metal ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/glossy-blue-metal-text-effect-967.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/3metal.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/3metal.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2deluxe ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/deluxe-gold-text-effect-966.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2deluxe.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2deluxe.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1glossy ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/glossy-carbon-text-effect-965.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1glossy.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1glossy.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'fabric ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/fabric-text-effect-online-964.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/fabric.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/fabric.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '5neon ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/5neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/5neon.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'newyear ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/new-year-cards-3d-by-name-960.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/newyear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/newyear.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'avater ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/create-avatar-gold-online-956.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/avater.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/avater.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2xmas ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/xmas-cards-3d-online-942.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2xmas.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2xmas.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'halloween ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/halloween-fire-text-effect-940.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/halloween.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/halloween.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'darkgold ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/metal-dark-gold-text-effect-online-939.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/darkgold.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/darkgold.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'wicker ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/wicker-text-effect-online-932.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/wicker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/wicker.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'wicker ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/natural-leaves-text-effect-931.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/wicker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/wicker.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'firework ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/firework-sparkle-text-effect-930.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/firework.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/firework.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'skeleton ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/skeleton-text-effect-online-929.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/skeleton.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/skeleton.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


QueenSew.newcmdaddtosew({pattern: 'steel ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/steel-text-effect-online-921.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/steel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/steel.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'gloss ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/ultra-gloss-text-effect-online-920.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/gloss.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/gloss.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'denim ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/denim-text-effect-online-919.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/denim.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/denim.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1star ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/decorate-green-text-effect-918.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1star.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1star.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '1stone ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/peridot-stone-text-effect-916.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/1stone.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/1stone.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: '2star ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/decorate-purple-text-effect-917.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/2star.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/2star.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'rock ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/rock-text-effect-online-915.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/rock.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/rock.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

QueenSew.newcmdaddtosew({pattern: 'lava ?(.*)', fromMe: rs, dontAdCommandList: true}, (async (message, match) => {
    ravindu.rgmsa("https://textpro.me/lava-text-effect-online-914.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/QueenSewWhatsappBot/lava.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/QueenSewWhatsappBot/lava.jpg'), MessageType.image, { caption: Raviya.CPK })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
}