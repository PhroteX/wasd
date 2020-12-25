const Discord = require('discord.js');
const db = require('wio.db')




module.exports = {
    name: "gonderkk",
    aliases: ["gonderkapat","gkapat"],
    description: "Gönder komudunu kullanıma kapatır.",
    usage: "gonderkk",
    ownerOnly: true,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   db.set("gonderkk_" + args, true)
   message.channel.send (args + " idli kullanıcın gönder komudunu kullanması kapatıldı.")
    }
}