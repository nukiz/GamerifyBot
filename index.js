const Discord = require('discord.js')
const bot = new Discord.Client();
const prefix = 'n!';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('${guild.name}', { type: 'WATCHING'}).catch(console.error); //change how you please
})

bot.on('message', message=>{
    
    let args = message.content.substring(prefix.length).split(" ")

    switch(args[0]){
        case 'help':
            message.channel.send('GamerifyRewrite :-: ')
            message.channel.send('Commands Available: 10')
            message.channel.send('Prefix: n!')
            message.channel.send('Server: ${guild.name}')
            message.channel.send('Latency: ${Date.now() - message.createdTimestamp}ms.')
            message.channel.send('API Latency: ${Math.round(client.ws.ping)}ms')
            break;
        case 'youtube':
            message.channel.send('XXXXXXXXXXXXXXXXXXX') //place own yt channel in here
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version 1.1.0 maintained by community, mainly by nukiz#0001'); //don't change this, please
            }else{
                message.channel.send('GamerifyBot by nukiz#0001') //dont change this, please
            }
            break;
        case 'gamer':
            message.reply('You are a gamer, as you are here!')
            break;
        case 'clear':
            if(!args[1]) return message.reply('Idiot. Tell me the messages to delete.')
            message.channel.bulkDelete(args[1]);
            break;
        case 'nothing':
            message.reply('Why would you ever use this command? Its literally nothing.')
            break;
        case 'secret':
            message.channel.send('Yeah, you found out. Nukiz is a lazy b.')
            break;
        case 'sourcecode':
            message.channel.send('**GamerifyRewrite made by yours truly**')
            message.channel.send('https://github.com/nukiz/GamerifyBot/')
            break;  
        case 'imagine':
            message.channel.send('LOL IMAGINE BEING SO DUMB YOU ACTUALLY DO THAT LMFAO')
            break;
        case 'nuke':
            if (!message.member.hasPermission('ADMINISTRATOR')) { // rewrite :)
            message.channel.send('Dumb retard. You dont have perms.')
            } else {
             message.channel.clone().then(msg => msg.send('Channel destroyed succesfully. No damage caused.'))
             message.channel.delete()   
            }
            break;
    });
        
bot.login(token);
