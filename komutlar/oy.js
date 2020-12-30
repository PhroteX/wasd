const Discord = require("discord.js");

module.exports = {
    name: "oy",
    aliases: ["oyver","vote"],
    description: "Web sitesine gider",
    usage: "oy",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   const devtr = new Discord.MessageEmbed()
  .setTitle("Oy Sitesine Gitmek İçin Tıkla") //istediğiniz yazı
  .setColor("RANDOM") //renk kodu örn: #2F3136
  .setURL('https://top.gg/bot/787955741256450059/vote') //site url örn: http://devtr.org
  message.channel.send(devtr);   //DevTR
},


    }
