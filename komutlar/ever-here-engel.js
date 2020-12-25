const db = require('wio.db');
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix


module.exports = {
    name: "ever-here-engel",
    aliases: ["ehengel","everhereengel"],
    description: "Komut açıklaması",
    usage: "ever-here-engel",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        if (!args[0]) {
    
            const kinda = new Discord.MessageEmbed() 
            
            .setDescription('Lütfen **aç** Veya **kapat** Yazın. Örnek Kullanım : w!ever-here-engel aç/kapat**')
            .setColor("RED")
          
            return message.channel.send(kinda)
            }
            
            if (args[0] == 'aç') {
              
            db.set(`hereengel_${message.guild.id}`, 'acik')
              
            const kinda = new Discord.MessageEmbed() 
            
            .setDescription('Ever-Here Engel Başarılı Bir Şekilde Aktif Edildi!')
            .setColor("GREEN")
          
            return message.channel.send(kinda)
            }
            //lrowsxrd
            if (args[0] == 'kapat') {
              
            db.set(`hereengel_${message.guild.id}`, 'kapali')
              
            const kinda = new Discord.MessageEmbed() 
            
            .setDescription('Ever-Here Engel Başarılı Bir Şekilde Deaktif Edildi!')
            .setColor("GREEN")
          
            return message.channel.send(kinda)
            } 
            
            }
          
  
    }
