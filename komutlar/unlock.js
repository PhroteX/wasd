module.exports = {
    name: "unlock",
    aliases: ["kilit-kaldır"],
    description: "Odanın kildini açar.",
    usage: "unlock",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {

        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

        let channel = message.mentions.channels.first() || message.channel;
        message.channel.send(`${channel} isimli odanın kilidi açıldı.`);
        
        let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
        channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Unlocked by '+message.author.tag);
        channel.send(new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(channel.name+' has been unlocked.')
        .setDescription(`Mods had to unlock this channel.`));



    }
}