const Discord = require('discord.js')
const bot = new Discord.Client();

const token ='Njg1NzYwMTYwMTE1MDY0OTIy.XmS6qQ.Bu4AUB_vMJij1cY-mVig63JFgNc';

const prefix = '?';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('over nukiz cave!', { type: 'WATCHING'}).catch(console.error);
})

bot.on('message', message=>{
    
    let args = message.content.substring(prefix.length).split(" ")

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'youtube':
            message.channel.send('https://www.youtube.com/channel/UCy3_nwmDwR8wE70ushMszFQ < i was made by this guy!')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version 1.1.0 maintained by nukiz#8892');
            }else{
                message.channel.send('GamerifyBot by nukiz#8892')
            }
            break;
        case 'gamer':
            message.reply('You are a gamer, as you are here!')
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error! Please tell me how many messages to delete!')
            message.channel.bulkDelete(args[1]);
            break;
        case 'nothing':
            message.reply('Why would you ever use this command? Its literally nothing.')
            break;
        case 'server':
            message.channel.send('play.hyperlandsmc.net;19132')
            break;
        case 'secret':
            message.channel.send('Yeah, you found out. Nukiz is a lazy b.')
            break;
        case 'github':
            message.channel.send('GitHub Closed for now, atleast.')
            break;  
        case 'lol':
            message.channel.send('Imagine using the "lol" command.')
            break;       
   
    });
        
bot.login(token);