const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4Nzk1NTc0MTI1NjQ1MDA1OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MzEyMzA0fQ.Q-tWcYOh0LqGU96oSbnqrTy3p1KmN8NQh6TBRqT1gcs', client);


module.exports = {
    name: "google",
    aliases: ["google-ara","ggl"],
    description: "googleda arama yapar.",
    usage: "google",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
      
       dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {
//KOMUT

        let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!google)return message.reply(`Googleda Aratmak İstediğini Yazarmısın`)
        if(!link)return message.reply("Error Hata 404")
        var embed = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setTimestamp()
    .addField('Aranıyor:', `${args.slice(0).join(' ')}`)
    .addField("Yazı:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter("Google", message.author.avatarURL);
          
    message.channel.send(embed);
    message.author.send(`Bulunan ${link} | ${ message.guild.name}`);
  



}})}
   

}

  
    
