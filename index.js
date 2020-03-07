const Discord = require('discord.js')
const bot = new Discord.Client();

const token ='Njg1NzYwMTYwMTE1MDY0OTIy.XmNWAw.hSBuz04uBowdXMWl-toFve-exSc';

const prefix = '?';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(prefix.length).split(" ")

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'youtube':
            message.channel.send('https://www.youtube.com/channel/UCy3_nwmDwR8wE70ushMszFQ')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version 1.0.8 maintained by nukiz#8892');
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
            message.channel.send('Yeah, you found out. Nukiz is a lazy bitch.')
            break;
        case 'github':
            message.channel.send('Follow GamerifyBots GitHub for updates on the bot, and if you want to help you can!')
            break;  
        case 'lol':
            message.channel.send('Imagine using the "lol" command.')
            break;       
    }


        
    }

,bot.login(token));