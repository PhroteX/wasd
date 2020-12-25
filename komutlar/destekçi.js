let Discord = require("discord.js")
let database = require("wio.db")
let ayarlar = require("../ayarlar.json")



module.exports = {
    name: "destekçi",
    aliases: ["destekçirol","d"],
    description: "Komut açıklaması",
    usage: "destekçi",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        if(message.guild.id !== "773922662257917992"){

message.channel.send("Bu komut şimdilik destek sunucumuza özeldir")


        } else {

            let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
            let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
            let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
              let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!abonerol) return message.channel.send(`Destekçi rolü ayarlanmamış!`)
              if(!abonelog) return message.channel.send(`Destekçi log kanalı ayarlanmamış!`)
              if(!aboneyetkilisi) return message.channel.send(`Destekçi yetkili rolü ayarlanmamış!`)
              let user = message.mentions.users.first()
              if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
              
              if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
              
              await(abonekisi.roles.add(abonerol))
              message.author.send(`Kullanıcıya destekçi rolünü başarıyla verdin.`)
              const embed = new Discord.MessageEmbed()
              .setTitle(`Destekçi Rolü Verildi!`)
              .addField(`Destekçi Rolünü Veren Kişi:`, `Adı:${message.author.tag} ID:${message.author.id}`, true)
              .addField(`Destekçi Rolü Verilen Kişi`, `${user}`, true)
              .addField(`Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
              .setColor(`BLUE`)
              .setFooter(`${client.user.username} Destekçi Sistemi`)
              message.guild.channels.cache.get(abonelog).send(embed)

        }

        
        }
  
    }
