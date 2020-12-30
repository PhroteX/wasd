const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4Nzk1NTc0MTI1NjQ1MDA1OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MzEyMzA0fQ.Q-tWcYOh0LqGU96oSbnqrTy3p1KmN8NQh6TBRqT1gcs', client);

module.exports = {
    name: "korona",
    aliases: ["koronaol","korona-ol"],
    description: "Korona olursunuz.",
    usage: "korona",
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
        .setDescription("Artık sende korona oldun")
        .setImage(`https://cdn.discordapp.com/attachments/677985078202073109/689935110551765023/a.gif`)
        .setFooter("Korona var burda!!!!")
        
        message.channel.send(embed)



}})}
   
        
        
      }
  
    
