const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = "^^";
client.on("ready", message => {
    console.log('bot => ok');
  client.user.setActivity('developper mon bot',{type: 'PLAYING'});
});
  
    client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
        
    if(message.content === `^^help`){
        message.channel.send('salut je suis ManagerInvite');
    }
        
 if(message.content === `^^botInfo`){
 let embed = new Discord.MessageEmbed()
 .setTitle('')
 .setDescription('')
 .addFields(
     { name: '💾Serveur', value: '`97serveur`', inline: true }, 
     { name: '📏mon prefix', value: '`?`', inline: true }, 
     { name: '💻hebergeur', value: '`HEROKU`', inline: true }, 
     { name: '🆔️', value: '`743237817941098549`', inline: true }, 
     { name: '📡ping', value: '`98`', inline: true }, 
 )
 .setThumbnail('https://cdn.discordapp.com/attachments/728139160648679519/747129992269266964/20200823_122132.jpg')
 .setImage('https://cdn.discordapp.com/attachments/728139160648679519/747129992269266964/20200823_122132.jpg')
 .setColor('RANDOM')
 .setFooter('by create jordan_offshl');
 
 message.channel.send(embed)
 message.delete();
 }       
       
 if(message.content === `^^help`){
let embed = new Discord.MessageEmbed()
.setTitle('help commands')
.setAuthor('inviteTutoriel', 'https://cdn.discordapp.com/attachments/728139160648679519/746871089946427542/20200822_191551.jpg')
.setDescription('')
.addFields(
    { name: '<:emoji_1:745475906503704618>^^pp', value: 'avatar', inline: true },
    { name: '<:emoji_1:745475906503704618>^^clear', value: 'supprimer des message', inline: true },
    { name: '<:emoji_1:745475906503704618>^^invite', value: 'cree des invite', inline: true },
 )
 .addFields(
     { name: '<:emoji_1:745475906503704618> hello', value: 'bonjour', inline: true },
  )
  .addFields(
      { name: '<:emoji_1:745475906503704618>^^config', value: 'configuration de langue de votre choix fr,en,etc', inline: true },    
 )
.setColor('RANDOM')
.setFooter('help commands', 'https://cdn.discordapp.com/attachments/728139160648679519/746871089946427542/20200822_191551.jpg');
 
message.channel.send(embed)
 
}        
        
if (message.content === `^^config`) {
let embed = new Discord.MessageEmbed()
.setTitle('hello-_-')
.setDescription('page1/1')
.addFields(
{name : '1. prefix ', value: 'change le prefix du bot', inline: true },
{name : '2. invite', value: 'cree une invitation du serveur ', inline: true },
{name : '3. status', value: 'change le status du bot', inline: true },
) 
.setColor('') 
.setFooter('config');

message.channel.send(embed).then(message.react('✅'));
}     
})
client.login(process.env.TOKEN);
