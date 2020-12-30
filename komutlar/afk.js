const db = require("wio.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4Nzk1NTc0MTI1NjQ1MDA1OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MzEyMzA0fQ.Q-tWcYOh0LqGU96oSbnqrTy3p1KmN8NQh6TBRqT1gcs', client);


module.exports = {
    name: "afk",
    aliases: ["afkol","afk"],
    description: "afk olursunuz",
    usage: "afk",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
      
      dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {
//KOMUT

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



}})}
   
   
   
    }
