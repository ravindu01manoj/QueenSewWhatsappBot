
QueenSew.newcmdaddtosew({ pattern: 'fullsew ?(.*)', desc: 'ai chat bot on off command' , fromMe: true, usage: '.fullsew on / off' }, (async (message, match) => {
    var eva_status = `${Config.FULLSEW}`
    if (match[1] == 'on') {
        if (eva_status == 'true') {
            return await message.client.sendMessage(message.jid, '*Already on 😒*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_SEW']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*Sew is now chat bot*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (eva_status !== 'true') {
            return await message.client.sendMessage(message.jid, '*chat bot already off*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_SEW']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*successful off ai chat bot*', MessageType.text)
        }
    }
}));

