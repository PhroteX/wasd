const Discord = require('discord.js');
const db = require('wio.db')


module.exports = {
    name: "otorol-ayarla",
    aliases: ["otorol","oto-rol-ayarla"],
    description: "Otorolü ayarlar",
    usage: "otorol-ayarla",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        let rol = message.mentions.roles.first()
        let kanal = message.mentions.channels.first()
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        
         if(!rol) return message.channel.send(`
        Ayarlamam İçin Bir Rol Etiketlemeilisin.
        Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
        Örnek Kullanım : !otorol @rol #kanal
        
         Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)
        `
        )
        
         if(!kanal) return message.channel.send(`
        Ayarlamam İçin Bir Kanal Etiketlemeilisin.
        
        `)
        
          message.channel.send(`╔▬▬▬▬▬▬▬▬Otorol▬▬▬▬▬▬▬▬▬
        ║►  Otorol Aktif Edildi.
        ║►  **${rol}** Olarak Güncelledim!
        ║►  Kayıt Kanalını **${kanal}** Olarak Güncelledim!
        ╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
        
        
          db.set(`otoRL_${message.guild.id}`, rol.id)
          db.set(`otoRK_${message.guild.id}`, kanal.id)
        

   
    }
}