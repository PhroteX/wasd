
module.exports = {
    name: "konsol",
    aliases: ["konsollog","console"],
    description: "Komut açıklaması",
    usage: "konsol",
    ownerOnly: true,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        let devtr = args[0]
    
console.log(`${devtr}`)

message.channel.send(`Konsola Başarıyla \`${devtr}\` Mesajını Gönderdim.`)
  }

  
    }
