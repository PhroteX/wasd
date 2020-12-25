let database = require("wio.db")
let ayarlar = require("../ayarlar.json")


module.exports = {
    name: "destekçiyetkili",
    aliases: ["dyetkili","destekçi-yetkili"],
    description: "Komut açıklaması",
    usage: "destekçiyetkili",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,client) => {
   
        if(message.guild.id !== "773922662257917992"){

message.channel.send("Bu komut şimdilik destek sunucumuza özeldir.")

        }else{

            if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
            let rol = message.mentions.roles.first()
            if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}destekçiyetkili @rol`)
            
            
            database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
            message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)
          }

        }
  
    }
