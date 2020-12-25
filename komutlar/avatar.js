const Discord = require('discord.js')


module.exports = {
    name: "avatar",
    aliases: ["profil","pp"],
    description: "Kullanıcının avatarını görürsünüz.",
    usage: "avatar",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        const TimsahTim = message.mentions.users.first()
        let TimsahTim_K;
        if (message.mentions.users.first())  {TimsahTim_K = message.mentions.users.first();}
        else {TimsahTim_K = message.author;}
        return message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`**${TimsahTim_K.tag}** Avatar;`)
        .setImage(TimsahTim_K.avatarURL()))


        },
    }


