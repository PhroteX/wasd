const Discord = require('discord.js');

module.exports = {
    name: "duyuru",
    aliases: ["duyur","alternatif2"],
    description: "Komut açıklaması",
    usage: "duyuru",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,bot,tools) => {
   
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerek .");

        let split = '|';
    
        if(!args[0]) {
            return message.channel.send("**Duyuru Yapabilmen İçin Bir Mesaj Belirtmen Gerek.** `w!duyuru <mesajınız>`");
        }
    
        args = args.join(' ').split(split);
    
        for (var i = 0; i < args.length; i++) args[i] = args[0].trim();
    
        if(args[2]) args[2] = parseInt(`0x${args[2]}`);
    
        let option = {
            title: args[0] || 'Duyuru Sistemi',
            embedColor: args[2] || 0xffffff,
            icon: `https://cdn.discordapp.com/attachments/545569894268272650/651423230753636372/medalbot-notify.png`
        }
    
        const embed = new Discord.MessageEmbed()
            .setColor(option.embedColor)
            .setTitle(option.title)
    
        if(option.message) embed.setDescription(option.message);
    
        message.delete();
    
        let announceEmbed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setTitle(option.title)
    
        message.channel.send(announceEmbed);
    
    }
  
    }
