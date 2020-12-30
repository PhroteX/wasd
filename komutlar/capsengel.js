const Discord = require('discord.js');
const db = require('wio.db')
const ayarlar = require('../ayarlar.json')


module.exports = {
    name: "capsengel",
    aliases: ["caps-engel","capslock-engel"],
    description: "Komut açıklaması",
    usage: "capsengel",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        let prefix = await require('wio.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:fire: Yeterli yetki, bulunmamakta!`)
        
        let capslock = await db.fetch(`capslock_${message.guild.id}`)
        if (capslock) {
          db.delete(`capslock_${message.guild.id}`)
          message.channel.send(`:fire: Capslock engelleme sistemi, kapatıldı!`)
        }
       
        if (!capslock) {
          db.set(`capslock_${message.guild.id}`, 'acik')
          message.channel.send(`:fire: Capslock engelleme sistemi, aktif!`)
        }
      },
      
  
    }
