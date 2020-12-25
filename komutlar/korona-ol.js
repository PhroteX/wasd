const Discord = require('discord.js');

module.exports = {
    name: "korona",
    aliases: ["koronaol","korona-ol"],
    description: "Korona olursunuz.",
    usage: "korona",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        var embed = new Discord.MessageEmbed()
  
        .setColor("RANDOM")
        .setDescription("Artık sende korona oldun")
        .setImage(`https://cdn.discordapp.com/attachments/677985078202073109/689935110551765023/a.gif`)
        .setFooter("Korona var burda!!!!")
        
        message.channel.send(embed)
        
      }
  
    }
