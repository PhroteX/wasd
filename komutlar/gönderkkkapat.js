const Discord = require('discord.js');
const db = require('wio.db')




module.exports = {
    name: "gonderaç",
    aliases: ["gonderiv","gaç"],
    description: "Gönder komudunu kullanıma kapatır.",
    usage: "gonderaç",
    ownerOnly: true,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   db.set("gonderkk_" + args, false)
   message.channel.send (args + " idli kullanıcın gönder komudunu kullanması açıldı.")
    }
}