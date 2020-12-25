const Discord = require('discord.js'); 


module.exports = {
    name: "tabletreyiz",
    aliases: ["tabletreyis","tabletreis","tabletreiz"],
    description: "Tablet Reis Gifi Atar",
    usage: "tabletreyiz",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        message.channel.send(`wasdbot | Tablet Reyiz`, new Discord.MessageAttachment("https://media1.tenor.com/images/c892c515cb488c9c14483b4deed6ca87/tenor.gif?itemid=14644456", "take-tabletreis.gif")) //DevTR | xFalcon
        
  
    }
}