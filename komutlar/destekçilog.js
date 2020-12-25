let database = require("wio.db")
let ayarlar = require("../ayarlar.json")


module.exports = {
    name: "destekçilog",
    aliases: ["dlog","destekcilog"],
    description: "Komut açıklaması",
    usage: "destekçilog",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,client) => {
   
        if(message.guild.id !== "773922662257917992"){
        
messsage.channel.send("Bu komut şimdilik destek sunucumuza özeldir!")
        
        } else {

            if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
            let log = message.mentions.channels.first()
            if(!log) return message.channel.send(`Bir kanal etiketlemen gerekmekte örnek: ${ayarlar.prefix}destekçilog #kanal`)
            
            
            database.set(`abonelog.${message.guild.id}`, log.id)
            message.channel.send(`Abone kanalı başarıyla ${log} olarak ayarlandı.`)
          }

        }

  
    }
