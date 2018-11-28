const Discord = require('discord.js')
const ms = require("ms");
const music = require('discord.js-music-v11');
const opusscript = require('opusscript')
const bot = new Discord.Client()
const prefix = "f!"

bot.on('ready', function () {
  bot.user.setActivity("f!help", { type: "STREAMING", url: "https://www.twitch.tv/d3llertucheatl" })
    console.log("Je suis connecté !")
})

bot.login('NTE3MDMyNDcxNDY5MDk2OTgx.Dt8UFA.S7lIfAhtNKVGo0PY6ly_mgng_R0')

bot.on('message', message => {
  if (message.content === 'f!ping') {
    message.reply('pong !')

  
  }
})




bot.on('message', message => {

  if (message.content === 'f!avatar') {

    message.reply(message.author.avatarURL);
  }
});



bot.on('message', message => {

  if (!message.guild) return;


  if (message.content.startsWith('f!kick')) {
    
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
        
        member.kick('Tu est Maintenant Kick du serveur').then(() => {
          
          message.reply(`Vous avez bien kick ${user.tag}`);
        }).catch(err => {
          
          
          
          message.reply('Je suis incapable de kick ce membre');
          
          console.error(err);
        });
      } else {
        
        message.reply('Ce mec ne se trouve dans le serveur !');
      }
    
    } else {
      message.reply('Vous avez oublié de mentionné la personne à kick !');
    }
  }
});

bot.on('message', message => {
  
  
  if (!message.guild) return;

  
  if (message.content.startsWith('f!ban')) {
    
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) { 
         
        member.ban({
          reason: 'Tu est mauvais x) !',
        }).then(() => {
          
          message.reply(`Vous avez bien Banni ${user.tag}`);
        }).catch(err => {
          
          
          
          message.reply('Je ne peut pas Bannir ce membre !');
         
          console.error(err);
        });
      } else {
        
        message.reply('Je ne trouve pas cet utilisateur 🔎 !');
      }
    } else {
    
      message.reply('Vous avez oublié de mentionné la personne à bannir !');
    }
  }

});

bot.on("message", msg => {
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
      async function clear() {
          msg.delete();
          const fetched = await msg.channel.fetchMessages({limit: 99});
          msg.channel.bulkDelete(fetched);
      }
      clear();
  }
});

bot.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':wave: **' + member.user.username + '** vient de rejoindre ' + member.guild.name)
        .setFooter('Nous sommes maintenant ' + member.guild.memberCount)
        .setColor('#2EFE2E')
    member.guild.channels.get('517027685025710109').send(embed)
    member.addRole('516179814772637696')

 });

 bot.on('guildMemberRemove', member =>{
  let embed = new Discord.RichEmbed()
      .setDescription(':x: **' + member.user.username + '** vient de partir de ' + member.guild.name)
      .setFooter('Nous sommes maintenant ' + member.guild.memberCount)
      .setColor('#db0909')
  member.guild.channels.get('517027685025710109').send(embed)
  member.addRole('516179814772637696')
 });

 bot.on('message', message => {
  if (message.content === 'f!help') {
    var help_embed = new Discord.RichEmbed()
    .setColor("#02d9ff")
    .setTitle("French Info :fr: ")
    .addField("**Les Infos**" , "`f!help`,`f!help`,")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/225px-Flag_of_France.svg.png")
  message.channel.sendEmbed(help_embed)
  }
})

bot.on(`message`, async message => {
  if(message.content === prefix + "reload") { 
if (message.author.id === "329883267945988097") {
  message.channel.send(":gear: Reload en Cours")
  
  bot.destroy()
  bot.login('NTE3MDMyNDcxNDY5MDk2OTgx.Dt8UFA.S7lIfAhtNKVGo0PY6ly_mgng_R0')
message.channel.send(":gear: Reload est fini !")
} else {
	
message.channel.send("**Seul le créateur D3ller peut le faire **!")
  
  }
  }
});

music(bot, {
	prefix: 'f!',        // Prefix of '-'.
	global: false,      // Server-specific queues.
	maxQueueSize: 10,   // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: 'music'    // Name of voice channel to join. If omitted, will instead join user's voice channel.
});



















 
















