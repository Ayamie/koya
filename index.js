const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = "^^";
client.on("ready", message => {
    console.log('bot => ok')
    
    
    })
    
    client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
    
    client.login(process.env.TOKEN)
