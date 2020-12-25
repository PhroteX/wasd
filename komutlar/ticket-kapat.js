const Discord = require("discord.js");
const data = require("wio.db");


module.exports = {
    name: "ticket-kapat",
    aliases: ["ticketkapat","tkapat"],
    description: "Komut açıklaması",
    usage: "ticket-kapat",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        const ad = await data.fetch(`numara.${message.channel.id}`);
        if (!ad) {
          ad = "0";
        }
      
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
              .setDescription(`Bilet ${message.author} tarafından kapatıldı.`)
          );
          message.channel.setName(`closed-${ad}`);
          message.channel
            .send(
              new Discord.MessageEmbed().setColor("RED")
                .setDescription(`:unlock:: Ticketi tekrar açar.
      
      :no_entry:: Ticketi siler.`)
            )
            .then(m => {
              m.react("🔓");
              m.react("⛔");
              let sil = (reaction, user) =>
                reaction.emoji.name === "⛔" &&
                user.id !== client.user.id &&
                user.id == message.author.id;
              let sill = m.createReactionCollector(sil, { time: 0 });
              let geri = (reaction, user) =>
                reaction.emoji.name === "🔓" &&
                user.id !== client.user.id &&
                user.id == message.author.id;
              let geriaç = m.createReactionCollector(geri, { time: 0 });
      
              geriaç.on("collect", async reaction => {
                const author = reaction.users.last();
                m.delete("500");
                reaction.remove(author.id);
                message.channel.send(
                  new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(
                      `Bilet ${message.author} tarafından tekrar açıldı.`
                    )
                );
                message.channel.setName(`ticket-${ad}`);
              });
      
              sill.on("collect", async reaction => {
                const author = reaction.users.last();
                reaction.remove(author.id);
                message.channel.send(
                  new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`)
                );
                setTimeout(async () => {
                  message.channel.delete();
                  data.delete(`asd.${message.guild.id}.${message.channel.id}`);
                }, 5000);
              });
            });
        } else {
          return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`);
        }
      },
  
    }
