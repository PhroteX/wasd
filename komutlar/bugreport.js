const Discord = require("discord.js");

module.exports = {
    name: "bugreport",
    aliases: ["bug-report","reportbug"],
    description: "Komut açıklaması",
    usage: "bugreport",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,bot) => {
        let bug = args.join(" ").slice(0);
        let user = message.author.username;
        let guild = message.guild.name;
        let guildid = message.guild.id;
        let kanal = message.channel.name;
        let channel = bot.channels.cache.get("789063504635363348")//bug repot kanal id
        let embed = new Discord.MessageEmbed()
        .setTitle("Bug Report")
        .setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
        .addField("Bug", bug)
        .addField("Report Eden", user, true)
        .addField("Sunucu", guild, true)
        .addField("Sunucu ID", guildid, true)
        .addField("Kanal", kanal, true)
        .setColor("#f49542")
        
        message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi.**")
        channel.send(embed).then(i => i.react(":hourglass_flowing_sand:"))
        
          
        
        
        }
  
  
    }
