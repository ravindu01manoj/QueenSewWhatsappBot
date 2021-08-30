const QueenSew = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');

 if (Config.PSW !== 'kingraviya') {
if (Config.WORKTYPE == 'private') {

   QueenSew.newcmdaddtosew({pattern: 'apkmod', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ 🇱🇰 Nova Launcher:\n     *.nova*\n\n┠⊷️ 🇱🇰 CM Launcher:\n     *.cml*\n\n┠⊷️ 🇱🇰 Apex Launcher:\n     *.apex*\n\n\n┠⊷️ 🇱🇰 Kinemaster:\n     *.kinemaster*\n\n┠⊷️ 🇱🇰 PicsArt Gold:\n     *.picsart*\n\n┠⊷️ 🇱🇰 Canva Pro:\n     *.canva*\n\n┠⊷️ 🇱🇰 Ligthrom:\n     *.lightroom*\n\n┠⊷️ 🇱🇰 Photoshop Express:\n     *.pshop*\n\n┠⊷️ 🇱🇰 Snapseed:\n     *.snaps*\n\n┠⊷️ 🇱🇰 Retouch:\n     *.retouch*\n\n\n┠⊷️ 🇱🇰 Vanced Manager:\n     *.vanced*\n\n┠⊷️ 🇱🇰 Crunchyroll:\n     *.crunchy*\n\n┠⊷️ 🇱🇰 Freezer Mod:\n     *.freez*\n\n┠⊷️ 🇱🇰 Deezer Premium:\n     *.deezer*\n\n┠⊷️ 🇱🇰 RadioBox:\n     *.rbox*\n\n┠⊷️ 🇱🇰 Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ 🇱🇰 Power AMP:\n     *.amp*\n\n┠⊷️ 🇱🇰 JetAudio:\n     *.jetau*\n\n\n┠⊷️ 🇱🇰 ExpressVpn:\n     *.xpress*\n\n┠⊷️ 🇱🇰 Hospot Shield:\n     *.hshield*\n\n┠⊷️ 🇱🇰 TurboVpn:\n     *.Turbo*\n\n┠⊷️ 🇱🇰 File Manager:\n     *.flmanager*\n\n┠⊷️ 🇱🇰 CallRecorder:\n     *.callr*\n\n┠⊷️ 🇱🇰 FingScanner:\n     *.fing*\n\n┠⊷️ 🇱🇰 Shazam Encore:\n     *.shazam*\n\n┠⊷️ 🇱🇰 QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ 🇱🇰 Screen Recorder:\n     *.srecorder*\n\n┠⊷️ 🇱🇰 TikTok Mod:\n     *.tiktk*\n\n┠⊷️ 🇱🇰 Photomath:\n     *.pmath*\n\n┠⊷️ 🇱🇰 WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));


   QueenSew.newcmdaddtosew({pattern: 'nova', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *NOVA LAUNCHER* 💗\npremium unlocked .\n📌 bit.ly/drknova');
   }));

   QueenSew.newcmdaddtosew({pattern: 'cml', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *CM LAUNCHER* 💗\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   QueenSew.newcmdaddtosew({pattern: 'apex', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *APEX LAUNCHER* 💗\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   QueenSew.newcmdaddtosew({pattern: 'kinemaster', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *KINEMASTER MOD* 💗\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456');
   }));

   QueenSew.newcmdaddtosew({pattern: 'inshot', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *INSHOT MOD* 💗\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

   QueenSew.newcmdaddtosew({pattern: 'alight', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *ALIGHT MOTION MOD* 💗\npremium unlocked.\n👉https://bit.ly/3cHUBdg');
   }));

   QueenSew.newcmdaddtosew({pattern: 'capcut', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *CAP CUT MOD* 💗\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   QueenSew.newcmdaddtosew({pattern: 'picsart', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *PICSART GOLD* 💗\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   QueenSew.newcmdaddtosew({pattern: 'canva', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *CANVA PRO* 💗\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   QueenSew.newcmdaddtosew({pattern: 'lightr', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *LIGTHROM* 💗\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   QueenSew.newcmdaddtosew({pattern: 'pshop', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *PHOTOSHOP EXPRESS* 💗\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   QueenSew.newcmdaddtosew({pattern: 'snaps', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *SNAPSEED* 💗\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   QueenSew.newcmdaddtosew({pattern: 'retouch', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *RETOUCH* 💗\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   QueenSew.newcmdaddtosew({pattern: 'vanced', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *VANCED MANAGER* 💗\nyoutube vanced.\n📌 bit.ly/drkytubev');
   }));

   QueenSew.newcmdaddtosew({pattern: 'freez', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *FREEZER MOD* 💗\nPremium Unlocked.\n📌 bit.ly/drkfreezer');
   }));

   QueenSew.newcmdaddtosew({pattern: 'deezer', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *DEEZER MOD* 💗\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   QueenSew.newcmdaddtosew({pattern: 'rbox', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *RADIO BOX* 💗\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   QueenSew.newcmdaddtosew({pattern: 'mxpro', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *MX PLAYER PRO* 💗\npremium unlocked.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   QueenSew.newcmdaddtosew({pattern: 'amp', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *POWERAMP* 💗\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   QueenSew.newcmdaddtosew({pattern: 'jetau', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *JetAudio* 💗\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   QueenSew.newcmdaddtosew({pattern: 'xpress', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *EXPRESS VPN* 💗\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   QueenSew.newcmdaddtosew({pattern: 'hshield', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *HOSPOT SHIELD VPN* 💗\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   QueenSew.newcmdaddtosew({pattern: 'avguard', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *TURBO VPN* 💗\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   QueenSew.newcmdaddtosew({pattern: 'flmanager', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *FILE MANAGER* 💗\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   QueenSew.newcmdaddtosew({pattern: 'callr', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *CALL RECORDER* 💗\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   QueenSew.newcmdaddtosew({pattern: 'fing', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *FING SCANNER* 💗\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   QueenSew.newcmdaddtosew({pattern: 'shazam', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *SHAZAM ENCORE* 💗\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   QueenSew.newcmdaddtosew({pattern: 'qrcode', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *QR CODE SCANER* 💗\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   QueenSew.newcmdaddtosew({pattern: 'srecorder', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *SCREEN RECORDER* 💗\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   QueenSew.newcmdaddtosew({pattern: 'tiktk', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *TIKTOK MOD* 💗\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   QueenSew.newcmdaddtosew({pattern: 'pmath', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *PHOTOMATH* 💗\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   QueenSew.newcmdaddtosew({pattern: 'waplus', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *WHATSAPP PLUS* 💗\nwhattsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
   QueenSew.newcmdaddtosew({pattern: 'jajajajaj', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('❤Sew 💘 Bot 💘 (සූටික්කි)❤\nඔබගේ අද්‍යාපන කටයුතු සාර්තක කරගැනීම සදහා...\n\nමෙය ඇතුලත් කරන ලදි\n\n       👇👇👇👇👇👇\nhttps://t.me/SL_EDU_A_L_BOT\n       ☝☝☝☝☝☝\n❤ඉහත ලින්ක් එක ටච් කිරීමෙන් ඔබට ටෙලිග්‍රෑම් හරහා අද්‍යාපනික බොට් කෙනෙකු වෙත සම්බන්ද විය හැක\n\n🌷එම බොට් මගින් ඔබට ලැබෙන ප්‍රතිලාභ....\n\n       🐲past paper\n       🐲උසස් පෙල විශයන් සදහා වීඩියෝ\n       🐲සියලුම Notes\n       🐲resources book\n       🐲පෙරහුරු විභාග ප්‍රශ්ණ පත්‍ර\n‍\nලබාගැනීමට හැකිය.... උසස්පෙල Bio/Maths සිසුන් සදහා විශාල ප්‍රතිලාභ ලබා ගත හැක');
   }));
   QueenSew.newcmdaddtosew({pattern: 'novelsaththay1', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('*සත්තයි හරි ආදරෙයි මන්🤍*\n\n\n💞කොටස් කිහිපයක කතාවකි..💞\n\n1 කොටස🌺\n\n\nඅඩෝ අර බලපන්\n\nමන් මගේ යාලුවට වැලමිටෙන් ඇනලා පෙන්නුවේ අපි හිටගෙන හිටපු තැනින් ටිකක් පස්සට වෙන්න තියෙන සීට් එකක ඉන්න කපල් එකක්... \n\nඋබට ලැජ්ජ නැද්ද යකෝ ඔහොම බලන්න\n\nයකෝ උන්ට කරන්න හොදයි නම් අපි බැලුවහම මොකද\nතව බස් හෝල්ට් දෙකකින් මන් බහිනවා... උඩරැක් එකේ දාලා තිබුනු මගේ බෑග් එකත් අතට අරගෙන බැලුවේ වතුර බෝතලේ දිහා.. සිකේ කාන්තාරෙට අහුවෙලා වගේ එක වතුර පොදක් නෑ..\n\nතව ටිකකින් තෝ බහිනවානේ.. ගෙදර ගිහින් වතුර බීපන් මල වදේ\n\nමන් එහෙම කියලා මගේ බෑග් එකත් එල්ලගෙන ටික ටික පස්සට ආවේ කවී මාව මරන් කන්න වගේ බලන් ඉද්දි..\n\nමූඩිය ඇරලා වතුර බොන්න වගේ ඉදලා බහින තැන ලන් උනාම පස්සටම ගියා වතුර බෝතලෙත් කටේ ගහගෙනම..\n\nපාර දිගේ ගෙ ලගට ආවාම දැක්කේ එහා ගෙදරට බඩු අදිනවා.. අලුතින් ඇවිල්ලද කොහෙද කට්ටියක්🤔\n\nඑක බලාගෙනම අපේ ගෙදරට ඇතුලු උනේ අම්මටත් ආවා කියලා කෑ ගහගෙනමයි..\n\nඑහෙම්ම කාමරේට ඇවිත් සෙරෙප්පු දෙකත් ගලෝලා විසි කරලා බෑග් එකත් මේසේ උඩින් තියලා අත් දෙකත් දෙපැත්තට විහිදෝලා කකුල් දෙක පහලට එන්න දගෙන ඇදෙන් හාන්සි උනා😴\n\nමන් සිතුකි ආදිත්‍යා... මේ අවුරුද්දේ එලෙවල් කරන්න ඉන්නේ.. තව මාස තුනයි එක්සෑම් එකට🥵🥵.. දැන් ඉතින් වැඩිය ස්කෝලේ යැවෙන්නෑ රිවිෂන් ක්ලාස් කියයි පේපර් ක්ලාස් කියයි.. එපා වෙනවා අප්පා.. දැනුත් මේ ක්ලාස් ගිහින් ආවේ..\n\nතව මට ඉන්නවා මෝඩ සහෝදරයෝ දෙන්නෙක්.. ලොකූයි පොඩීයී..\n\n\nලොකූ නම් කැම්පස් ගිහින් ඉවර වෙලා දැන් කම්පැනි එකක ජොබ් එකක් කරනවා.. පොර ලගදිම තොන්ඩුව දාගන්න ඉන්නේ.. වෙන කවුරුත් නෙවේ මගෙ අතිජාත මිතුරිය කවීගේ අක්කා එක්ක තමා මේ මනුස්සයා යාලුවෙලා තියෙන්නේ.. ගෙවල් දෙකෙනුත් අවුලක් නැති නිසා ලගදිම වෙඩින් එක ගනී.. නැත්තම් ලොකූට වෙන්නෙ ගෙදරටම නාකි වෙන්න තමා..😂 දැනටම විසි හතක් නේ ලොකූ අයියට...\n\nමාත් එක්ක කොහෙ හරි යනකොට ඕකා කියන්නෙම මන් නිසා ඕකා දිහා කෙල්ලෙක්වත් බලන්නෑලූ.. හිතන් ඉන්නේ ෂාරුක් ඛාන් වගේ කියලා.. ෂාරුක් ඛාන් ඕක දැනගත්තොත් ලංකාව පැත්ත බලලා බත් කන්නෙත් නෑ😂\n\nටිකක් වෙලා ඉදලා මහන්සි ඇරලා වොෂ් එකක් දාගෙන පහලට ගියේ බඩගිනි නිසා..\nපොඩී නම් ගෙදර නෑ කොහෙ හරි රස්තියාදුවක ගිහින් ඇති.. නැත්තම් අනිවා කෙල්ලෙක් ලයින් කරන්න යන්නැති.. මන් දන්නැද්ද මගේ අයියා ගැන.. \nලොකූ ගෙට ගොඩ උනා විතරයි ඔන්න පටන් ගත්තා.. මෙයාලගෙ කටේ තියෙන්නෙම පාඩම් කරන්නැද්ද කියන එක.. මට දැන් ගෙදර ඉන්නත් එපා වෙලා තියෙන්නේ මේ ඒලේවල් නිසා😒\n\nහරි අනේ.. දවසම පොත අතේ තියන් ඉන්න බෑනේ\n\nපලයන් පලයන් තව මාස තුනයි තියෙන්නේ.. ඊට පස්සෙ ෆ්‍රී එකේ හිටියෑකී\n\nඒ පාරක් පොඩී ත් පටන් ගත්තා..\n\nඅනේ මේ ඔය දෙන්නා මේ කාලෙදී පාඩම් කරපු හැටි මන් දන්නවනේ\n\nකොහොම හරි ඉතින් කැම්පස් ගියානේ නංගි අපි..නැද්ද ලොකූ\n\nපොඩී කොලර් එකත් උස්සලා හෙන ආඩම්බරෙන් කියන්නේ..\n\nඅපෝ හරි ලොකු වැඩක් කරලා මේ දෙන්නා\n\nමේ තොපි දෙන්නා මරාගනිල්ලා.. මන් යනවා මට මහන්සි\nලොකු එහෙම කියලා මන් අතට පොඩි උරේකුත් දීලා පාඩම් කරනකොට කන්න කියලා එයාගේ කාමරේට ගියා.. \n\nඅපෝ.. අවුරුදු විසි තුනක කොල්ලෙක් කියන කතාවක්ද මේ කිව්වේ මේකා.. මේකට මට මොනාවත් ගෙනත් දෙන්න බෑ.. හැමදාම මේකට හොට දාන්න නම් එනවා.. පෙරේතයා\n\nමේ මේ මේක මටයි ලොකූ ගෙනත් දුන්නේ... තමුසෙට ඕනේ නම් ගිහින් අරගෙන කන එකයි ඇත්තේ...\n\nමන් එහෙම කියලා දුවගෙන කාමරේට ආවා.. කෝකටත් හොදයිනේ ඉතින්.. අරකා උදුරගෙන කෑවොත් එහෙම.. සේෆ්ටි ෆ්‍රස්ට්😁😏\n\nකාමරේට ඇවිත් ටිකක් වෙලා නෝට් එකක් බල බල ඉද්දි සාලෙට ආවේ අම්මා රෑට කන්න කතා කරපු නිසා...\n\n********************************************\n\nඋදේ පාන්දර අම්මා ඇවිත් දහ පාරක් විතර කතා කරලා ගියාමයි මන් ඇහැරුනේ.. ඔය එලාර්ම් තිබ්බට මට නම් කවදාවත් ඇහැරෙන්නැ.. අම්මා ඇවිත් ඇහැරෙව්වෙ නැත්තම් මන් සතියක් උනත් නිද ගනී😐😂\n\nඋදේ පාන්දර ඉක්මනට ලෑස්ති වෙලා පහලට ආවේ ක්ලාස් යන්න.. ලොකූ ඔෆිස් යන්න කලින් ගානක් අහගන්නත් ඕනේ.. ලොකූත් මන් වගේම කොමස් කරපු නිසා හොදයි ඉතින්.. ඕන එකක් අහගන්න පුලුවන්.. පොඩී නම් බයෝ.. \n\nමන් කටත් ඇද කරගෙන කිව්වෙ කොච්චර කරත් මට මේක සමානවෙන්නෑනේ.. ලොකූට නම් ඉතින් මේවා සිම්පල්.. එයාට බැලන්ස් වෙන්නැති සමාගම් ගනන් නැති තරම්😐\nකොහොම හරි මට බැන බැනම ගානත් කියලා දුන්නා.. ඒ විනාඩි ටිකට ලොකූගෙන් ටොකු පහකට වඩා කන්නැති.. ඔලුවත් රිදෙනවා😒\n\nඅම්මටයි අප්පච්චිටයිත් වැදලා ලොකූ එක්කම ආවේ එයාට කියලා ක්ලාස් එක ගාවින්ම දාගත්තෑකීනේ.. උදේ පාන්දර බස් වල තෙරපෙන්න ඕන්නෑ.. ඒක නම් ලොකුදෙයක්.. නැත්තම් ක්ලාස් එකට යන්න වෙන්නේ උදේ පාන්දර දාඩිය පෙරාගෙන.. ඒ ගිහිල්ලාත් ඉතින් මහලොකුවට හුලං වදින ෆෑන් එකක් වත් නෑ.. ඒ ෆැන් එක කැරකෙන වේගෙට පෙති ගනන් කරන්න පුලුවන්😒\n\nක්ලාස් එක ගාවට ආවාම අයියගෙන් රුපියල් තුන්සියකුත් කඩාගෙනම කාර් එකෙන් බැහැලා ක්ලාස් ඇතුලට ආවේ..\n\nමන් ඇතුලට යනකොට යාලුවෝ සෙට් එක අන්තිම පේලියේ ඉදගෙන ඉන්නවා.. මුන් මේ කලින් එන්නෙ වෙන මොකටවත් නෙවේ අන්තිම ඩෙස් එක අල්ලගන්න😂\nමාත් ගිහින් එතනින්ම වාඩි උනා..\n********************************************');
   }));
   QueenSew.newcmdaddtosew({pattern: 'link', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage(' ```｡❤❤☆✼★꒱࿐♡ Your Lovely  ' + Config.BOTNAME + '⋆｡˚ ⁀➷★✼☆｡\n\n\n*❄💓' + Config.GRPNAMEA + '💓❄*\n\n```' + Config.GRPLINKA + '```\n\n*❄💓' + Config.GRPNAMEB + '💓❄*\n\n```' + Config.GRPLINKB + '```\n\n*❄💓' + Config.GRPNAMEC + '💓❄*\n\n```' + Config.GRPLINKC + '```\n\n●▬▬▬ *❄' + Config.BOTNAME + '⚡* ▬▬▬●\n\n❄ බොට් කෙනෙක් මඟින් සිදු කරන මෙම ගෲපය තුළින් ඔබට සින්දු සහ වීඩියෝස් බා ගැනීමට ද,\n\n❄ ඕනෑ ම photo හෝ 6s අඩු video එකක් ස්ටිකර් එකක් විදිහට සාදා ගැනීමට ද,\n\n❄ සින්දුවල lyrics  ගැනීමට ද, Language translate  කර ගැනීමට ද,\nතව ප්‍රයෝජනවත් බොහෝ දෑ කරගැනීමටත් පුලුවන්.\n\n*❄️💓බොට් stutes ලබා ගැනීමට...💓❄️*\n\n👇👇 👇 use\n*.alive*     👈👈\n\n\n\n*❄️💓සියලු විස්තර ලබා ගැනීම සදහා👇👇👇⋆｡˚⁀➷★✼☆｡...💓❄️*\n\n👇👇👇 use\n*.cmd*     👈👈\n\n\n\n*ඔබගේ අධ්‍යාපන කටයුතු සාර්ථක කරගැනීම සදහා...💓❄️*\n\n👇👇👇 use\n*.edu*     👈👈\n\n\n\n*┈┈╭━╱▔▔▔▔╲━╮┈┈┈ ꜱ*\n*┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ ᴇ*\n*╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ ᴡ*\n*┈┈┈╲┈╰━━╯┈╱┈┈╳┈ ǫ*\n*┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ ᴜ*\n*┈╭━╮▔▏┊┊▕▔╭━╮┈╳ ᴇ*\n*┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ ᴇ*\n*┈╰━━━━╲╱━━━━╯┈╳ ɴ*\n*ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ*\n\n\n*ගෲප් එකේ නීති👇👇👇*\n\n⚡කිසිම කෙන්ක්ගේ ඉන්බොක්ස් යෑම. (විශේෂයෙන් ම ගැහැනු ළමුන්ගේ හා බොට්ගේ)\n\n⚡ගෲපය තුළට අසභ්‍ය දෑ  දැමීම.\n\n⚡ස්පෑම් , ලින්ක් වැනි දෑ දැමීම.\n\n⚡අසභ්‍ය වචන හෝ අසභ්‍ය ලෙස හැසිරීම , නිකරුනේ චැට් කිරීම.\n\n*දැනුම් දීමකින් තොර ව ගෲපයෙන් නෙරපා දැමීමට හේතු වේ...*');
   }));
}

else if (Config.WORKTYPE == 'public') {

   QueenSew.newcmdaddtosew({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMANDOS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ 🇱🇰 Nova Launcher:\n     *.nova*\n\n┠⊷️ 🇱🇰 CM Launcher:\n     *.cml*\n\n┠⊷️ 🇱🇰 Apex Launcher:\n     *.apex*\n\n\n┠⊷️ 🇱🇰 Kinemaster:\n     *.kinemaster*\n\n┠⊷️ 🇱🇰 PicsArt Gold:\n     *.picsart*\n\n┠⊷️ 🇱🇰 Canva Pro:\n     *.canva*\n\n┠⊷️ 🇱🇰 Ligthrom:\n     *.lightroom*\n\n┠⊷️ 🇱🇰 Photoshop Express:\n     *.pshop*\n\n┠⊷️ 🇱🇰 Snapseed:\n     *.snaps*\n\n┠⊷️ 🇱🇰 Retouch:\n     *.retouch*\n\n\n┠⊷️ 🇱🇰 Vanced Manager:\n     *.vanced*\n\n┠⊷️ 🇱🇰 Crunchyroll:\n     *.crunchy*\n\n┠⊷️ 🇱🇰 Freezer Mod:\n     *.freez*\n\n┠⊷️ 🇱🇰 Deezer Premium:\n     *.deezer*\n\n┠⊷️ 🇱🇰 RadioBox:\n     *.rbox*\n\n┠⊷️ 🇱🇰 Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ 🇱🇰 Power AMP:\n     *.amp*\n\n┠⊷️ 🇱🇰 JetAudio:\n     *.jetau*\n\n\n┠⊷️ 🇱🇰 ExpressVpn:\n     *.xpress*\n\n┠⊷️ 🇱🇰 Hospot Shield:\n     *.hshield*\n\n┠⊷️ 🇱🇰 TurboVpn:\n     *.Turbo*\n\n┠⊷️ 🇱🇰 File Manager:\n     *.flmanager*\n\n┠⊷️ 🇱🇰 CallRecorder:\n     *.callr*\n\n┠⊷️ 🇱🇰 FingScanner:\n     *.fing*\n\n┠⊷️ 🇱🇰 Shazam Encore:\n     *.shazam*\n\n┠⊷️ 🇱🇰 QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ 🇱🇰 Screen Recorder:\n     *.srecorder*\n\n┠⊷️ 🇱🇰 TikTok Mod:\n     *.tiktk*\n\n┠⊷️ 🇱🇰 Photomath:\n     *.pmath*\n\n┠⊷️ 🇱🇰 WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));
    

   QueenSew.newcmdaddtosew({pattern: 'nova', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *NOVA LAUNCHER* 💗\npremium unlocked.\n📌 bit.ly/drknova');
   }));

   QueenSew.newcmdaddtosew({pattern: 'cml', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *CM LAUNCHER* 💗\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   QueenSew.newcmdaddtosew({pattern: 'apex', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *APEX LAUNCHER* 💗\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   QueenSew.newcmdaddtosew({pattern: 'kinemaster', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *KINEMASTER MOD* 💗\npremium unlocked.\n👉https://bit.ly/2RSyFVr.');
   }));

QueenSew.newcmdaddtosew({pattern: 'inshot', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *INSHOT MOD* 💗\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

QueenSew.newcmdaddtosew({pattern: 'alight', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *ALIGHT MOTION MOD* 💗\npremium unlocked.\n👉https://bit.ly/3cHUBdg');
   }));

QueenSew.newcmdaddtosew({pattern: 'capcut', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *CAP CUT MOD* 💗\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   QueenSew.newcmdaddtosew({pattern: 'picsart', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *PICSART GOLD* 💗\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   QueenSew.newcmdaddtosew({pattern: 'canva', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *CANVA PRO* 💗\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   QueenSew.newcmdaddtosew({pattern: 'lightr', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *LIGTHROM* 💗\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   QueenSew.newcmdaddtosew({pattern: 'pshop', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *PHOTOSHOP EXPRESS* 💗\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   QueenSew.newcmdaddtosew({pattern: 'snaps', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *SNAPSEED* 💗\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   QueenSew.newcmdaddtosew({pattern: 'retouch', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *RETOUCH* 💗\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   QueenSew.newcmdaddtosew({pattern: 'vanced', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *VANCED MANAGER* 💗\nYouTube Premium  YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   QueenSew.newcmdaddtosew({pattern: 'crunchy', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* USA 🇺🇸');
   }));

   QueenSew.newcmdaddtosew({pattern: 'freez', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *FREEZER MOD* 💗\npremium unlocked - spotify\n📌 bit.ly/drkfreezer');
   }));

   QueenSew.newcmdaddtosew({pattern: 'deezer', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *DEEZER MOD* 💗\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   QueenSew.newcmdaddtosew({pattern: 'rbox', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *RADIO BOX* 💗\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   QueenSew.newcmdaddtosew({pattern: 'mxpro', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *MX PLAYER PRO* 💗\npremium unlocked.\n📌 bit.ly/drkmxplayer');
   }));

   QueenSew.newcmdaddtosew({pattern: 'amp', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *POWERAMP* 💗\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   QueenSew.newcmdaddtosew({pattern: 'jetau', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💗 *JetAudio* 💗\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   QueenSew.newcmdaddtosew({pattern: 'xpress', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *EXPRESS VPN* 💗\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   QueenSew.newcmdaddtosew({pattern: 'hshield', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *HOSPOT SHIELD VPN* 💗\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   QueenSew.newcmdaddtosew({pattern: 'avguard', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *TURBO VPN* 💗\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   QueenSew.newcmdaddtosew({pattern: 'flmanager', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *FILE MANAGER* 💗\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   QueenSew.newcmdaddtosew({pattern: 'callr', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *CALL RECORDER* 💗\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   QueenSew.newcmdaddtosew({pattern: 'fing', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *FING SCANNER* 💗\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   QueenSew.newcmdaddtosew({pattern: 'shazam', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *SHAZAM ENCORE* 💗\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   QueenSew.newcmdaddtosew({pattern: 'qrcode', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *QR CODE SCANER* 💗\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   QueenSew.newcmdaddtosew({pattern: 'screen recorder', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *SCREEN RECORDER* 💗\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   QueenSew.newcmdaddtosew({pattern: 'tiktk', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *TIKTOK MOD* 💗\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   QueenSew.newcmdaddtosew({pattern: 'pmath', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *PHOTOMATH* 💗\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   QueenSew.newcmdaddtosew({pattern: 'waplus', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('💗 *WHATSAPP PLUS* 💗\nmhatsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
   QueenSew.newcmdaddtosew({pattern: 'jajajaja', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('❤Sew 💘 Bot 💘 (සූටික්කි)❤\nඔබගේ අද්‍යාපන කටයුතු සාර්තක කරගැනීම සදහා...\n\nමෙය ඇතුලත් කරන ලදි\n\n       👇👇👇👇👇👇\nhttps://t.me/SL_EDU_A_L_BOT\n       ☝☝☝☝☝☝\n❤ඉහත ලින්ක් එක ටච් කිරීමෙන් ඔබට ටෙලිග්‍රෑම් හරහා අද්‍යාපනික බොට් කෙනෙකු වෙත සම්බන්ද විය හැක\n\n🌷එම බොට් මගින් ඔබට ලැබෙන ප්‍රතිලාභ....\n\n       🐲past paper\n       🐲උසස් පෙල විශයන් සදහා වීඩියෝ\n       🐲සියලුම Notes\n       🐲resources book\n       🐲පෙරහුරු විභාග ප්‍රශ්ණ පත්‍ර\n‍\nලබාගැනීමට හැකිය.... උසස්පෙල Bio/Maths සිසුන් සදහා විශාල ප්‍රතිලාභ ලබා ගත හැක');
   }));
   QueenSew.newcmdaddtosew({pattern: 'novelsaththay1', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage('*සත්තයි හරි ආදරෙයි මන්🤍*\n\n\n💞කොටස් කිහිපයක කතාවකි..💞\n\n1 කොටස🌺\n\n\nඅඩෝ අර බලපන්\n\nමන් මගේ යාලුවට වැලමිටෙන් ඇනලා පෙන්නුවේ අපි හිටගෙන හිටපු තැනින් ටිකක් පස්සට වෙන්න තියෙන සීට් එකක ඉන්න කපල් එකක්... \n\nඋබට ලැජ්ජ නැද්ද යකෝ ඔහොම බලන්න\n\nයකෝ උන්ට කරන්න හොදයි නම් අපි බැලුවහම මොකද\nතව බස් හෝල්ට් දෙකකින් මන් බහිනවා... උඩරැක් එකේ දාලා තිබුනු මගේ බෑග් එකත් අතට අරගෙන බැලුවේ වතුර බෝතලේ දිහා.. සිකේ කාන්තාරෙට අහුවෙලා වගේ එක වතුර පොදක් නෑ..\n\nතව ටිකකින් තෝ බහිනවානේ.. ගෙදර ගිහින් වතුර බීපන් මල වදේ\n\nමන් එහෙම කියලා මගේ බෑග් එකත් එල්ලගෙන ටික ටික පස්සට ආවේ කවී මාව මරන් කන්න වගේ බලන් ඉද්දි..\n\nමූඩිය ඇරලා වතුර බොන්න වගේ ඉදලා බහින තැන ලන් උනාම පස්සටම ගියා වතුර බෝතලෙත් කටේ ගහගෙනම..\n\nපාර දිගේ ගෙ ලගට ආවාම දැක්කේ එහා ගෙදරට බඩු අදිනවා.. අලුතින් ඇවිල්ලද කොහෙද කට්ටියක්🤔\n\nඑක බලාගෙනම අපේ ගෙදරට ඇතුලු උනේ අම්මටත් ආවා කියලා කෑ ගහගෙනමයි..\n\nඑහෙම්ම කාමරේට ඇවිත් සෙරෙප්පු දෙකත් ගලෝලා විසි කරලා බෑග් එකත් මේසේ උඩින් තියලා අත් දෙකත් දෙපැත්තට විහිදෝලා කකුල් දෙක පහලට එන්න දගෙන ඇදෙන් හාන්සි උනා😴\n\nමන් සිතුකි ආදිත්‍යා... මේ අවුරුද්දේ එලෙවල් කරන්න ඉන්නේ.. තව මාස තුනයි එක්සෑම් එකට🥵🥵.. දැන් ඉතින් වැඩිය ස්කෝලේ යැවෙන්නෑ රිවිෂන් ක්ලාස් කියයි පේපර් ක්ලාස් කියයි.. එපා වෙනවා අප්පා.. දැනුත් මේ ක්ලාස් ගිහින් ආවේ..\n\nතව මට ඉන්නවා මෝඩ සහෝදරයෝ දෙන්නෙක්.. ලොකූයි පොඩීයී..\n\n\nලොකූ නම් කැම්පස් ගිහින් ඉවර වෙලා දැන් කම්පැනි එකක ජොබ් එකක් කරනවා.. පොර ලගදිම තොන්ඩුව දාගන්න ඉන්නේ.. වෙන කවුරුත් නෙවේ මගෙ අතිජාත මිතුරිය කවීගේ අක්කා එක්ක තමා මේ මනුස්සයා යාලුවෙලා තියෙන්නේ.. ගෙවල් දෙකෙනුත් අවුලක් නැති නිසා ලගදිම වෙඩින් එක ගනී.. නැත්තම් ලොකූට වෙන්නෙ ගෙදරටම නාකි වෙන්න තමා..😂 දැනටම විසි හතක් නේ ලොකූ අයියට...\n\nමාත් එක්ක කොහෙ හරි යනකොට ඕකා කියන්නෙම මන් නිසා ඕකා දිහා කෙල්ලෙක්වත් බලන්නෑලූ.. හිතන් ඉන්නේ ෂාරුක් ඛාන් වගේ කියලා.. ෂාරුක් ඛාන් ඕක දැනගත්තොත් ලංකාව පැත්ත බලලා බත් කන්නෙත් නෑ😂\n\nටිකක් වෙලා ඉදලා මහන්සි ඇරලා වොෂ් එකක් දාගෙන පහලට ගියේ බඩගිනි නිසා..\nපොඩී නම් ගෙදර නෑ කොහෙ හරි රස්තියාදුවක ගිහින් ඇති.. නැත්තම් අනිවා කෙල්ලෙක් ලයින් කරන්න යන්නැති.. මන් දන්නැද්ද මගේ අයියා ගැන.. \nලොකූ ගෙට ගොඩ උනා විතරයි ඔන්න පටන් ගත්තා.. මෙයාලගෙ කටේ තියෙන්නෙම පාඩම් කරන්නැද්ද කියන එක.. මට දැන් ගෙදර ඉන්නත් එපා වෙලා තියෙන්නේ මේ ඒලේවල් නිසා😒\n\nහරි අනේ.. දවසම පොත අතේ තියන් ඉන්න බෑනේ\n\nපලයන් පලයන් තව මාස තුනයි තියෙන්නේ.. ඊට පස්සෙ ෆ්‍රී එකේ හිටියෑකී\n\nඒ පාරක් පොඩී ත් පටන් ගත්තා..\n\nඅනේ මේ ඔය දෙන්නා මේ කාලෙදී පාඩම් කරපු හැටි මන් දන්නවනේ\n\nකොහොම හරි ඉතින් කැම්පස් ගියානේ නංගි අපි..නැද්ද ලොකූ\n\nපොඩී කොලර් එකත් උස්සලා හෙන ආඩම්බරෙන් කියන්නේ..\n\nඅපෝ හරි ලොකු වැඩක් කරලා මේ දෙන්නා\n\nමේ තොපි දෙන්නා මරාගනිල්ලා.. මන් යනවා මට මහන්සි\nලොකු එහෙම කියලා මන් අතට පොඩි උරේකුත් දීලා පාඩම් කරනකොට කන්න කියලා එයාගේ කාමරේට ගියා.. \n\nඅපෝ.. අවුරුදු විසි තුනක කොල්ලෙක් කියන කතාවක්ද මේ කිව්වේ මේකා.. මේකට මට මොනාවත් ගෙනත් දෙන්න බෑ.. හැමදාම මේකට හොට දාන්න නම් එනවා.. පෙරේතයා\n\nමේ මේ මේක මටයි ලොකූ ගෙනත් දුන්නේ... තමුසෙට ඕනේ නම් ගිහින් අරගෙන කන එකයි ඇත්තේ...\n\nමන් එහෙම කියලා දුවගෙන කාමරේට ආවා.. කෝකටත් හොදයිනේ ඉතින්.. අරකා උදුරගෙන කෑවොත් එහෙම.. සේෆ්ටි ෆ්‍රස්ට්😁😏\n\nකාමරේට ඇවිත් ටිකක් වෙලා නෝට් එකක් බල බල ඉද්දි සාලෙට ආවේ අම්මා රෑට කන්න කතා කරපු නිසා...\n\n********************************************\n\nඋදේ පාන්දර අම්මා ඇවිත් දහ පාරක් විතර කතා කරලා ගියාමයි මන් ඇහැරුනේ.. ඔය එලාර්ම් තිබ්බට මට නම් කවදාවත් ඇහැරෙන්නැ.. අම්මා ඇවිත් ඇහැරෙව්වෙ නැත්තම් මන් සතියක් උනත් නිද ගනී😐😂\n\nඋදේ පාන්දර ඉක්මනට ලෑස්ති වෙලා පහලට ආවේ ක්ලාස් යන්න.. ලොකූ ඔෆිස් යන්න කලින් ගානක් අහගන්නත් ඕනේ.. ලොකූත් මන් වගේම කොමස් කරපු නිසා හොදයි ඉතින්.. ඕන එකක් අහගන්න පුලුවන්.. පොඩී නම් බයෝ.. \n\nමන් කටත් ඇද කරගෙන කිව්වෙ කොච්චර කරත් මට මේක සමානවෙන්නෑනේ.. ලොකූට නම් ඉතින් මේවා සිම්පල්.. එයාට බැලන්ස් වෙන්නැති සමාගම් ගනන් නැති තරම්😐\nකොහොම හරි මට බැන බැනම ගානත් කියලා දුන්නා.. ඒ විනාඩි ටිකට ලොකූගෙන් ටොකු පහකට වඩා කන්නැති.. ඔලුවත් රිදෙනවා😒\n\nඅම්මටයි අප්පච්චිටයිත් වැදලා ලොකූ එක්කම ආවේ එයාට කියලා ක්ලාස් එක ගාවින්ම දාගත්තෑකීනේ.. උදේ පාන්දර බස් වල තෙරපෙන්න ඕන්නෑ.. ඒක නම් ලොකුදෙයක්.. නැත්තම් ක්ලාස් එකට යන්න වෙන්නේ උදේ පාන්දර දාඩිය පෙරාගෙන.. ඒ ගිහිල්ලාත් ඉතින් මහලොකුවට හුලං වදින ෆෑන් එකක් වත් නෑ.. ඒ ෆැන් එක කැරකෙන වේගෙට පෙති ගනන් කරන්න පුලුවන්😒\n\nක්ලාස් එක ගාවට ආවාම අයියගෙන් රුපියල් තුන්සියකුත් කඩාගෙනම කාර් එකෙන් බැහැලා ක්ලාස් ඇතුලට ආවේ..\n\nමන් ඇතුලට යනකොට යාලුවෝ සෙට් එක අන්තිම පේලියේ ඉදගෙන ඉන්නවා.. මුන් මේ කලින් එන්නෙ වෙන මොකටවත් නෙවේ අන්තිම ඩෙස් එක අල්ලගන්න😂\nමාත් ගිහින් එතනින්ම වාඩි උනා..\n********************************************');
   }));
   QueenSew.newcmdaddtosew({pattern: 'link', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      await message.sendMessage(' ```｡❤❤☆✼★꒱࿐♡ Your Lovely  ' + Config.BOTNAME + '⋆｡˚ ⁀➷★✼☆｡\n\n\n*❄💓' + Config.GRPNAMEA + '💓❄*\n\n```' + Config.GRPLINKA + '```\n\n*❄💓' + Config.GRPNAMEB + '💓❄*\n\n```' + Config.GRPLINKB + '```\n\n*❄💓' + Config.GRPNAMEC + '💓❄*\n\n```' + Config.GRPLINKC + '```\n\n●▬▬▬ *❄' + Config.BOTNAME + '⚡* ▬▬▬●\n\n❄ බොට් කෙනෙක් මඟින් සිදු කරන මෙම ගෲපය තුළින් ඔබට සින්දු සහ වීඩියෝස් බා ගැනීමට ද,\n\n❄ ඕනෑ ම photo හෝ 6s අඩු video එකක් ස්ටිකර් එකක් විදිහට සාදා ගැනීමට ද,\n\n❄ සින්දුවල lyrics  ගැනීමට ද, Language translate  කර ගැනීමට ද,\nතව ප්‍රයෝජනවත් බොහෝ දෑ කරගැනීමටත් පුලුවන්.\n\n*❄️💓බොට් stutes ලබා ගැනීමට...💓❄️*\n\n👇👇 👇 use\n*.alive*     👈👈\n\n\n\n*❄️💓සියලු විස්තර ලබා ගැනීම සදහා👇👇👇⋆｡˚⁀➷★✼☆｡...💓❄️*\n\n👇👇👇 use\n*.cmd*     👈👈\n\n\n\n*ඔබගේ අධ්‍යාපන කටයුතු සාර්ථක කරගැනීම සදහා...💓❄️*\n\n👇👇👇 use\n*.edu*     👈👈\n\n\n\n*┈┈╭━╱▔▔▔▔╲━╮┈┈┈ ꜱ*\n*┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ ᴇ*\n*╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ ᴡ*\n*┈┈┈╲┈╰━━╯┈╱┈┈╳┈ ǫ*\n*┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ ᴜ*\n*┈╭━╮▔▏┊┊▕▔╭━╮┈╳ ᴇ*\n*┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ ᴇ*\n*┈╰━━━━╲╱━━━━╯┈╳ ɴ*\n*ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ*\n\n\n*ගෲප් එකේ නීති👇👇👇*\n\n⚡කිසිම කෙන්ක්ගේ ඉන්බොක්ස් යෑම. (විශේෂයෙන් ම ගැහැනු ළමුන්ගේ හා බොට්ගේ)\n\n⚡ගෲපය තුළට අසභ්‍ය දෑ  දැමීම.\n\n⚡ස්පෑම් , ලින්ක් වැනි දෑ දැමීම.\n\n⚡අසභ්‍ය වචන හෝ අසභ්‍ය ලෙස හැසිරීම , නිකරුනේ චැට් කිරීම.\n\n*දැනුම් දීමකින් තොර ව ගෲපයෙන් නෙරපා දැමීමට හේතු වේ...*');
   }));
}
}