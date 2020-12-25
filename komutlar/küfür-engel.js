const Discord = require('discord.js')
const db = require('wio.db')


module.exports = {
    name: "küfür-engel",
    aliases: ["küfürengel","kufur-engel"],
    description: "Küfür etmeyenize izin vermez",
    usage: "küfür-engel",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu sadece yetkililer kullanabilir kardeşim. (Yetkin yok aptal)`);

        if(args[0] === 'aç') {
            db.set(`${message.guild.id}.kufur`, true)
            message.channel.send('Başarılı Şekilde `Aktif` Edildi.')
          return
        }
        if (args[0] === 'kapat') {
          db.delete(`${message.guild.id}.kufur`)
        message.channel.send('Başarılı Şekilde `Deaktif` Edildi')
        return
        }
          message.channel.send('Lüten `Aç` yada `Kapat` Yazın!')
        },
  
    }
