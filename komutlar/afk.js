const db = require("wio.db");
const Discord = require("discord.js");


module.exports = {
    name: "afk",
    aliases: ["afkol","afk"],
    description: "afk olursunuz",
    usage: "afk",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setImage("")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`**AFK Olmak İçin Bir Sebep Belirtin.**\n\n**AFK Örnek Kullanım :** \`w!afk <sebep>\``)
  if(!REASON) return message.channel.send(embed)
 //Create By TimsahTim
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setImage("")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`**AFK Moduna Başarıyla Girildi**\n\n**AFK Olma Sebebi :** \`${REASON}\``)
  message.channel.send(afk)
   
    }
}