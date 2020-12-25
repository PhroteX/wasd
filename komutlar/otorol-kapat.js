const Discord = require('discord.js');
const db = require('wio.db')


module.exports = {
    name: "otorol-kapat",
    aliases: ["otorol-kaldır","oto-rol-kaldır"],
    description: "Otorolü kaldırır",
    usage: "otorol-kapat",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        const rol = db.fetch(`otoRL_${message.guild.id}`)
        if(!rol) return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
       
       
         message.reply(`Bu özellik **başarıyla kapatıldı.**`)
       
       
         db.delete(`otoRL_${message.guild.id}`)
         db.delete(`otoRK_${message.guild.id}`)
         db.delete(`otoRM_${message.guild.id}`)





    }
}