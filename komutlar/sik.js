const Discord = require('discord.js');

module.exports = {
    name: "sik",
    aliases: [],
    description: "Korona olursunuz.",
    usage: "sik",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        var embed = new Discord.MessageEmbed()
  
        .setColor("RANDOM")
        .setDescription("Sizi gizli sekmeye alalım :)")
        .setImage(`https://media1.tenor.com/images/4369e7a4c5213191139ad805b91ddb15/tenor.gif?itemid=11412632`)
        .setFooter("wasdbot")
        
        message.channel.send(embed)
        
      }
  
    }
