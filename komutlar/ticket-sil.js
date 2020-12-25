const Discord = require("discord.js");
const data = require("wio.db");


module.exports = {
    name: "ticket-sil",
    aliases: ["ticketsil","tsil"],
    description: "Komut açıklaması",
    usage: "ticket-sil",
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
              .setColor("RED")
              .setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`)
              .setFooter("wasdbot | Destek Sistemi")
          );
          setTimeout(async () => {
            message.channel.delete();
            data.delete(
              `asd.${message.guild.id}.${message.channel.id}.${message.author.id}`
            );
          }, 5000);
        } else {
          return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`);
        }
      },
  
    }

