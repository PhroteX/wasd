const Discord = require('discord.js');
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4Nzk1NTc0MTI1NjQ1MDA1OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MzEyMzA0fQ.Q-tWcYOh0LqGU96oSbnqrTy3p1KmN8NQh6TBRqT1gcs', client);

module.exports = {
    name: "avatar",
    aliases: ["profil","pp"],
    description: "Kullanıcının avatarını görürsünüz.",
    usage: "avatar",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
       dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {
//KOMUT

const TimsahTim = message.mentions.users.first()
        let TimsahTim_K;
        if (message.mentions.users.first())  {TimsahTim_K = message.mentions.users.first();}
        else {TimsahTim_K = message.author;}
        return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`**${TimsahTim_K.tag}** Avatar;`)
        .setImage(TimsahTim_K.avatarURL()))




}})}
      
        

        
    


}