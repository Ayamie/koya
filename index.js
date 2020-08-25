const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = "^^";
client.on("ready", message => {
    console.log('bot => ok');
    client.user.setActivity('developper mon bot',{type: 'PLAYING'});
})

    
    client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
        
    if(message.content === `^^help`){
        message.channel.send('salut je suis koya');
    }
})
client.login(process.env.TOKEN);
