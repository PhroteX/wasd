const Discord = require("discord.js");
const data = require("wio.db");
const ayarlar = require('../ayarlar.json')

module.exports = {
    name: "ticket-kanal",
    aliases: ["ticketkanal","tkanal"],
    description: "Komut açıklaması",
    usage: "ticket-kanal",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        const prefix =
        (await data.fetch(`prefix.${message.guild.id}`)) || ayarlar.prefix;
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
    
      if (args[0] === "ayarla") {
        const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
        if (kanalbelirle)
          return message.channel.send(
            `Mesajı göndereceğim kanal zaten ayarlı: ${prefix}ticket-kanal sıfırla`
          );
        let kanal = message.mentions.channels.first();
        if (!args[1]) return message.channel.send(`Bir kanalı etiketlemelisin.`);
        if (!kanal)
          return message.channel.send(`Etiketlediğin kanalı bulamıyorum.`);
        data.set(`kanal.${message.guild.id}`, kanal.id);
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(
              `Mesajın kanalı başarıyla ayarlandı: ${prefix}ticket gönder`
            )
        );
      }
    
      if (args[0] === "sıfırla") {
        const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
        if (!kanalbelirle)
          return message.channel.send(
            `Mesajı göndereceğim kanal zaten ayarlı değil: ${prefix}ticket-kanal sıfırla`
          );
    
        data.delete(`kanal.${message.guild.id}`);
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(
              `Mesajın kanalı başarıyla sıfırlandı: ${prefix}ticket-kanal ayarla #channel`
            )
        );
      }
    },
  
    }
