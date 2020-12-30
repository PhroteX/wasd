const Discord = require("discord.js"); 
const client = new Discord.Client();

const DBL = require("dblapi.js");
const emirhan = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4Nzk1NTc0MTI1NjQ1MDA1OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MzEyMzA0fQ.Q-tWcYOh0LqGU96oSbnqrTy3p1KmN8NQh6TBRqT1gcs', client);


module.exports = {
    name: "oyverdim",
    aliases: ["oyverdim","oyrol"],
    description: "Komut açıklaması",
    usage: "kullanımı",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   emirhan.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.channel.send( new Discord.MessageEmbed()
.setTitle("Hata")
.setColor("RED")
.setDescription("Sunucumuz da özel role sahip olabilmen için ilk öncelikle oy vermen gerekiyor!")
.addField("Oy Vermek için:", `[Buraya Tıkla!](https://top.gg/bot/${client.user.id}/vote)`)
.setFooter(client.user.username)
)

        } else {
  message.channel.send( new Discord.MessageEmbed()
.setTitle("Başarılı!")
.setDescription("Sunucumuz da başarılı bir şekilde rolünüz verildi!")
.setColor("GREEN")
)
            message.member.roles.add("793370805186723840")    //Vericek rol id.
        }
    })
}
  
    }
