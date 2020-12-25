let database = require("wio.db")
let ayarlar = require("../ayarlar.json")


module.exports = {
    name: "destekçirol",
    aliases: ["destekçi-rol","drol"],
    description: "Komut açıklaması",
    usage: "kullanımı",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,client) => {
   
        if(message.guild.id !== "773922662257917992"){
        
        message.channel.send("Bu komut şimdilik destek sunucumuza özeldir.")
        
        } else {

            if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
            let rol = message.mentions.roles.first()
            if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}destekçirol @rol`)
            
            
            database.set(`abonerol.${message.guild.id}`, rol.id)
            message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
          }


        }
  
    }
