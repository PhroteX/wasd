
module.exports = {
    name: "kullanıcı",
    aliases: ["kullanici"],
    description: "Komut açıklaması",
    usage: "kullanıcı",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        message.channel.send("**Kullanıcı Komutları**\nw!afk = Belirttiğiniz nedenden afk olursunuz. \nw!avatar = Belirttiğiniz kişinin avatarını görürsünüz.\nw!site = Botun websitesini öğrenirsiniz. \nw!gönder = Sahibime mesaj gönderirsiniz. (Lütfen Kötü Amaçla Kullanmayınız.) \nw!saat = Saatin kaç olduğunu söyler. \nw!yetkilerim/yetki = Kendinizin/Bir başkasının Yetkilerini Öğrenirsiniz. \nw!banlist = Sunucuda banlanan kişilerin listesini verir. \nw!sunucu-tanıt = Sunucunuzu Destek Sunucumda Tanıtır. \nw!bugreport = Bulduğunuz bugları bize iletmenizi sağlar \nw!botbilgi = Botun Kullanıcı Ve Sunucu Bilgilerini Almanızı Sağlar.")
  
    }
}