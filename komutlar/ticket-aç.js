const Discord = require("discord.js");
const data = require("wio.db");

module.exports = {
    name: "ticket-aç",
    aliases: ["ticketaç","taç"],
    description: "Komut açıklaması",
    usage: "ticket-aç",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        
      const ad = await data.fetch(`numara.${message.channel.id}`);
      if (
        message.channel.name === `ticket-${ad}` ||
        message.channel.name === `closed-${ad}`
      ) {
        const ann = await data.fetch(
          `asd.${message.guild.id}.${message.channel.id}.${message.author.id}`
        );
        
    
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("#ffff00")
            .setDescription(`Ticket ${message.author} tarafından açıldı.`)
        );
        message.channel.setName(`ticket-${ad}`);
        //
      } else {
        return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`);
      }
    },
  
    }
