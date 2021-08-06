/* # Exclusively from RAVANA
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved RAVANA Wa.me/+94714898434
# Credit : RAVANA
උස්සන එකාට හොදක් වෙන්න එපා
*/

const RAVANA  = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const HELP = "Bot help Center"

if (Config.LANGUAGE == 'si') { 

    RAVANA.addCommand({pattern: 'rhelp', fromMe: true, deleteCommand: true, desc: HELP,}, (async (message, match) => {

        await message.sendMessage("*🇱🇰HELLOW THIS IS RAVANA HELP CENTER🇱🇰* \n\n✨මොකක්ද ඔයාගෙ ප්‍රශ්නේ \n\n\n▶මොකක්ද මේ RAVANA BOT කියන්නේ(.1) \n\n▶සිංදු වීඩියෝ එන්නේ නෑ(.2)\n\n▶ලොගෝ වැඩ නෑ(.3)\n\n▶Alive එක වැඩ කරන්නේ නෑ(.4)\n\n▶Shutdown කරාම on කරන්නේ කොහොමද(.5) \n\n▶බොට් එක පාරම වැඩ නැතුව ගියොත් මොකද කරන්නේ(.6)\n\n▶කොහොමද බොට්ගේ කමාන්ඩ් ටික ගන්නේ(.7) \n\n▶බොට් ගේ කමාන්ඩ් අපිට වැඩ නැත්තේ ඇයි(.8) \n\n▶Update කරන්නද(.9)\n\n▶කොහොමද language වෙනස් කරන්නේ(.10)\n\n▶වෙනත්(.11) \n\n\n🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '1', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*RAVANA BOT කියන්නේ Whatsapp Bot ජාතියක්.\n\n*මෙකෙන් මොකක්ද කරන්න පුලුවන්?*\n⭕Whatsapp හරහා song,video ගත හැක.ඔබ බොට් කෙනෙක් නිසා ඔබ කරන්නේ එක වෙන කට්ටියට යවන එක හැබැයි ඔයාටත් ගත හැක.\n⭕100 logos මෙහි ලොගෝ පැක් දෙකක් තිබේ එකක් rpack(.rpack) අනෙක් එක rnpack(.rnpack)\n⭕sticker එකක් පොටෝ එකක් කිරීම ස්ටිකර් සෑදීම පොටෝ ස්ටිකර් කිරීම\n⭕තවත් බොහෝ දේ තිබේ ඒවා දැන ගැනීමට .ravana කියලා ගැහුවම එනවා(ඒක ඔයා ගැහුවොත් එන්නේ නෑ ඔයාගේ බොට් public නම් ඒක වෙන කෙනෙක්ට කියලා ගහගන්න)\n\n*මතක තබා ගන්න මෙය සදහා ඔබගේ ඩේටා කැපෙන්නේ නෑ කැපෙනවනම් ඒ ඔයා auto download on කරලා නිසා පමණි*\n\n\n🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '2', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*කරුණාකර ඔබගේ බොට්ව restart කරන්න.* \n\n .restart \n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*එය අපගේ ප්‍රශ්නයක් නොවේ එය ලොගෝ සයිට් එකේ ලිමිට් එක නිසා* \n\nදැන් එයට විසදුමක් ඇත .\n\n```ඔයාලට පුලුවන් ඒ ලොගෝ api වෙනස් කිරීමට ```\n\n.setvar XTEAM_API:ඔයාල ගත්ත api එක \n\n .setvar LOLUHUMAN_API:ඔයාල ගත්ත api එක \n\n\nඔය api ගන්න ක්‍රමේ මෙම වීඩියෝ එකේ ඇත.\n https://youtu.be/vGHpome5e3k\n\n\n 🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඔබේ alive එක වැඩ නොකර නේ ඔබ alive logo එක වෙනස් කර ඒ ලින්ක් එක වැරදි*\n\nහරියට ලින්ක් එක ගන්න\nසයිට් එක telegra.ph\n\n 🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '5', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඔබ බොට්ව shutdown කරවිට ඔබ heroku එකට ගොස් නැවතත් Resources key එක on කර යුතුයි.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '6', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඒකට කරන්න තියෙන්නේ ඔයා ආයේ heroku එකට ගිහින් more එක ඔබලා restart all dyno ඔබන්න.වෙනත් ප්‍රශ්නයක්නම් හෙරොකු එකේ log එකේ ss එකක් අපේ suppoted group එකට දාන්න.*\n\n🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '7', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*බොට් හට .ravana හෝ .help ගසන්න.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '8', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඔබගේ බොට් public නම් එය ඔබට වැඩ නෑ අනිත් අයට වැඩ* \n\nඑය private කිරීමටනම්\n.setvar WORK_TYPE:private\n\nනැවත public කිරීමට\n .setvar WORK_TYPE:public\n\n\n🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '9', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*Update කරන්න ද?*\n```ඔයාලට ලොකුම ප්‍රශ්නේ ඕකනේ අපේ suppoted group එකෙන් update කරන්න කිව්වම කරාට කමක් නෑ.ඒත් ඊට වඩා හොද ක්‍රමයක් තියනවා ඔයාලා රෑට නිදාගන්න කලින් update වෙන්න දාලා නිදාගන්න``` \n*ඇයි එහෙම කියන්නේ*\n★මොකෝ දවසට update එක දිගට එනවා ඔයාලට ඒම එක දිගට කරද්දි බොට්ව එපා වෙයි😒\n★තව වෙලාවකට error එන update එනවා ඒක නිසා හොදම විසදුම තමා නිදාගන්න කලින් update වෙන්න දාලා නිදාගන්න එක\n\n\n🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '10', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඔබ දැනටමත් බොට්ව හදලනම් Language වෙනස් කරන්නෙ කොහොමද?*\n.setvar LANGUAGE:en හරි si හරි.|||en කියන්නේ english / si කියන්නේ සිංහල\n\n\n🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි");
    
    }));
    RAVANA.addCommand({pattern: '11', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ප්‍රශ්නය අපගේ whatsapp suppoted group https://chat.whatsapp.com/BZxwFPt5pUe19Y4EW9DjDP එක තුලට හෝ මෙම නම්බර් එකට දාන්න wa.me/94756872976*\n\n🥰RAVANA HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));

    else if (Config.LANGUAGE == 'en') { 

        RAVANA.addCommand({pattern: 'rhelp', fromMe: true, deleteCommand: true, desc: HELP,}, (async (message, match) => {
    
            await message.sendMessage("*🇱🇰HELLOW THIS IS RAVANA HELP CENTER🇱🇰* \n\n✨What's Your Problem \n\n\n▶මොකක්ද මේ RAVANA BOT කියන්නේ(.1) \n\n▶Song videos are not coming(.2)\n\n▶Logo does not work(.3)\n\n▶Alive does not work(.4)\n\n▶How to turn on after shutdown(.5) \n\n▶What if the bot suddenly stops working?(.6)\n\n▶How to take bot commands(.7) \n\n▶Bot's command why we do not work(.8) \n\n▶Update To do(.9)\n\n▶How to change the language(.10)\n\n▶Other(.11) \n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '1', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("* RAVANA BOT is a Whatsapp Bot. \n\n * What can be done with this? * \ n⭕You can download songs and videos through WhatsApp. 100 logos There are two logo packs, one is rpack (.rpack) and the other is rnpack (.rnpack) \ nMake a sticker, make a sticker, make a photo sticker \ nThere are many more. If you hit it, it will not come. If your bot is public, call it someone else) \ n \ n * Remember, your data will not be cut for this, it is only because you auto downloaded on \n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰 ");
        
        }));
        RAVANA.addCommand({pattern: '2', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*Please restart your bot.* \n\n .restart \n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*It's not our problem because it's the limit of the logo site* \n\nNow there is a solution.\n\n```You can change that logo api```\n\n.setvar XTEAM_API:api key \n\n .setvar LOLUHUMAN_API:api key \n\n\nHow to get that api is in this video.\n https://youtu.be/vGHpome5e3k\n\n\n 🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*If your alive one is not working then you can change the alive logo and that link is incorrect*\n\net the link exactly\nsite is telegra.ph\n\n 🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '5', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*When you shut down the bot you must go to heroku and turn on the Resources key again.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '6', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*All you have to do is go back to heroku and press restart all dyno.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '7', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*put .ravana or .help on the bot.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '8', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*If your bot is public it will not work for you and work for others* \n\nHow to private it\n.setvar WORK_TYPE:private\n\nනැවත public කිරීමට\n .setvar WORK_TYPE:public\n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '9', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*Update now?*\n```The biggest problem for you is that Update now us to update from our supported group. But there is a better Update before you go to bed.``` \n*Way than that Says*\n★because meny update come on day and you will get bored of the bot as you continue to come😒\n★Another error will come update so the best solution is to update yourself before going to bed\n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '10', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*How do you change the language if you already have a bot?*\n.setvar LANGUAGE:en or si.|||en is english / si is sinhala\n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));
        RAVANA.addCommand({pattern: '11', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
            await message.sendMessage("*Your problem tell our  whatsapp suppoted group https://chat.whatsapp.com/BZxwFPt5pUe19Y4EW9DjDP or This number wa.me/94756872976*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
        
        }));

