const Discord = require("discord.js");
const ms = require("ms");
const db = require("wio.db");

module.exports = {
    name: "sunucu-tanıt",
    aliases: ["sunucutanıt"],
    description: "Komut açıklaması",
    usage: "sunucu-tanıt",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        let cooldown = 8.64e7, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;
    
      let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
      if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
        const pinkcode = new Discord.MessageEmbed()
          .setDescription(
            "Bu Komutu Sadece `24 Saatte` Bir Kullanabilirsin:Dogrula:"
          )
          .setColor(0x00ffff);
       return message.channel.send({ pinkcode });
      } else {
        const pinkcode = new Discord.MessageEmbed()
          .setTitle("Başarılı")
          .setDescription(
            "**Sunucunuz Başarıyla** [Sunucumda](https://discord.gg/NJUhVkwEd6) **Tanıtıldı.**\n**24 Saat Sonra Tekrar Sunucunuzu Tanıtabilirsiniz**"
          )
          .setColor("GREEN");
        message.channel.send(pinkcode);
        message.channel.createInvite({ maxAge: 0 }).then(invite => {
          const pinkcode = new Discord.MessageEmbed()
            .addField(`Tanıtılan Sunucunun Sahibi`, message.author.tag, true)
            .addField(`Tanıtılan Sunucun İsmi`, message.guild.name, true)
            .addField(
`Tanıtılan Sunucudaki Üye Sayısı`,
              message.guild.members.size,
 true
            )
            .addField(`Tanıtılan Sunucu Davet Linki`, invite.url, true)
            .setColor("RANDOM")
            .setThumbnail(message.guild.iconURL);
          client.channels.cache.get("790274591331319839").send(pinkcode);
          db.set(`gunluk_${message.guild.id}`, Date.now());
        });
      }
    },
  
    }
