const Discord = require("discord.js");


module.exports = {
    name: "google",
    aliases: ["google-ara","ggl"],
    description: "googleda arama yapar.",
    usage: "google",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
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
  
}

  
    }
