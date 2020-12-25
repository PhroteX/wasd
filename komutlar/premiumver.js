const Discord = require('discord.js');
const db = require('wio.db')




module.exports = {
    name: "premiumver",
    aliases: ["pver","prever"],
    description: "Sunucuya premium verir.",
    usage: "premiumver",
    ownerOnly: true,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   db.set("premium_" + message.guild.id, true)
   message.channel.send (message.guild.name + " isimli sunucuya başarıyla premium verildi.")
    }
}