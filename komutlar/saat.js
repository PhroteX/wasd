const Discord = require('discord.js')

module.exports = {
    name: "saat",
    aliases: ["saatkaç","saat-kaç"],
    description: "Saati söylerç",
    usage: "saat",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        const embed = new Discord.MessageEmbed()
        .setTitle(':flag_tr: Türkiyemizin Saati Aşağida Yazmaktadir')
        .setTimestamp()
        .setFooter('Türkiyemizin Saati ->')
        .setColor(0xff7f00)
        
        message.channel.send(embed)
        }
  
    }
