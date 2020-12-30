const Discord = require('discord.js');
const db = require('wio.db')


module.exports = {
    name: "otorol-mesaj",
    aliases: ["oto-rol-mesaj","oto-rol-mesaj-ayarla"],
    description: "Otorol mesajını ayarlar",
    usage: "otorol-mesaj",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        if (db.has(`premium_${message.guild.id}`) == false) {
          message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
        } else {
        
        
        let mesaj = args.slice(0).join(' ');
        if(mesaj.length < 5) return message.channel.send('Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `-oto-rol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
        
       message.channel.send('Oto-Rol mesajını `'+mesaj+'` Olarak ayarladım.') 
       db.set(`otoRM_${message.guild.id}`, mesaj)  
          
        }
        
      

    }
}