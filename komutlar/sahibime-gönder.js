const Discord = require('discord.js') //DevTR | xFalcon
const ayarlar = require('../ayarlar.json'); //
const db = require('wio.db')

module.exports = {
    name: "sahibime-gönder",
    aliases: ["sahibime-gönder","gönder"],
    description: "Sahibime mesaj atarsınız.",
    usage: "sahibime-gönder",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        if (db.has(`gonderkk_${message.author.id}`) == true) {
            message.channel.send(`<@${message.author.id}> Gönder Komutunu Kötü Amaçla Kullandığınız İçin Bu Komutu kullanmanız yasaklandı.`)
          } else {

        let darkmo = ayarlar.sahip  //DevTR | xFalcon
        //DevTR | xFalcon
       let devtr = args.slice(0).join(' '); //DevTR | xFalcon
        //DevTR | xFalcon
       if(!devtr) return message.channel.send('❌ | Mesajını Sahibime Gönderebilmem İçin Bir Yazı Yazmalısın.') //DevTR | xFalcon
       var musab = client.users.cache.get(darkmo)
       if(!musab) return message.channel.send(`Sahibimi aradım ve bulamadım.`)
        //DevTR | xFalcon
       message.channel.send('✅| Mesajını Sahibime Gönderdim') //DevTR | xFalcon
        //DevTR | xFalcon
       const xfalcon = new Discord.MessageEmbed() //DevTR | xFalcon
        //DevTR | xFalcon
       .setColor("RANDOM") //DevTR | xFalcon
       .setDescription(`**Bir Mesajın Var!** \n Mesajı Gönderen Kişi: <@${message.author.id}>\nMesajı: ${devtr}`)    //DevTR | xFalcon
       client.users.cache.get(darkmo).send(xfalcon) //DevTR | xFalcon
        //DevTR | xFalcon
       };
  
    }

}