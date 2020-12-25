
module.exports = {
    name: "nsfw",
    aliases: ["+18",],
    description: "Komut açıklaması",
    usage: "nsfw",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        message.channel.send("**NSFW Komutları** \nw!ass = Bot rastgele bir NSFW resmi gönderir. \nw!thighs = Bot rastgele bir NSFW resmi gönderir.")
  
    }
}