const Discord = require('discord.js');
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4Nzk1NTc0MTI1NjQ1MDA1OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MzEyMzA0fQ.Q-tWcYOh0LqGU96oSbnqrTy3p1KmN8NQh6TBRqT1gcs', client);

module.exports = {
    name: "sik",
    aliases: [],
    description: "Korona olursunuz.",
    usage: "sik",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {
//KOMUT

var embed = new Discord.MessageEmbed()
  
        .setColor("RANDOM")
        .setDescription("Sizi gizli sekmeye alalım :)")
        .setImage(`https://media1.tenor.com/images/4369e7a4c5213191139ad805b91ddb15/tenor.gif?itemid=11412632`)
        .setFooter("wasdbot")
        
        message.channel.send(embed)



}})}

      
      
      
        
        
      }
  
    
