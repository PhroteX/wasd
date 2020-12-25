const Discord = require("discord.js");

module.exports = {
    name: "site",
    aliases: ["website","websitesi"],
    description: "Web sitesine gider",
    usage: "site",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   const devtr = new Discord.MessageEmbed()
  .setTitle("Siteye Gitmek İçin Tıkla") //istediğiniz yazı
  .setColor("RANDOM") //renk kodu örn: #2F3136
  .setURL('https://wasd.phrotex.cf') //site url örn: http://devtr.org
  message.channel.send(devtr);   //DevTR
},


    }
