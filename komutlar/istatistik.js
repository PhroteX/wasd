const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    name: "istatistik",
    aliases: ["botbilgi","i"],
    description: "Komut açıklaması",
    usage: "botbilgi",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
    message.channel.send("**Şu anda** \n**" + client.users.cache.size + " Kullanıcıya** \n**" + client.guilds.cache.size + "** **Sunucuya \nHizmet Veriyorum.**")
  
    }
}