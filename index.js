const Discord = require('discord.js')
const bot = new Discord.Client();

const token ='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; //add your own token

const prefix = '?';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('your server!', { type: 'WATCHING'}).catch(console.error); //change how you please
})

bot.on('message', message=>{
    
    let args = message.content.substring(prefix.length).split(" ")

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
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
            if(!args[1]) return message.reply('Error! Please tell me how many messages to delete!')
            message.channel.bulkDelete(args[1]);
            break;
        case 'nothing':
            message.reply('Why would you ever use this command? Its literally nothing.')
            break;
        case 'server':
            message.channel.send('play.hyperlandsmc.net;19132') // change to whatever server you want, this is for mcpe
            break;
        case 'secret':
            message.channel.send('Yeah, you found out. Nukiz is a lazy b.')
            break;
        case 'github':
            message.channel.send('https://github.com/nukiz/GamerifyBot/') // please don't change github, if you do, credit me for this code in a separate command or something
            break;  
        case 'lol':
            message.channel.send('Imagine using the "lol" command.')
            break;
        case 'nuke':
            message.channel.bulkDelete(100000000) //doesnt work for ultra-big servers
            message.channel.send('Succesfully nuked channel!')
            break;
    });
        
bot.login(token);
