const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("wio.db")



module.exports = {
    name: "ban",
    aliases: ["yasakla","banla"],
    description: "Kişiyi banlar",
    usage: "ban",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Hey! Bunu Yapmaya Yetkin Yok")
let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if (!User) return message.channel.send("Bu Kullanıcıyı Bulamadım")
if (User.hasPermission("BAN_MEMBERS")) return message.reply("Yetkili Birini Banlayamazsın!")
let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "Belirtilmedi"
}

User.ban({reason: banReason})
      

}
}
