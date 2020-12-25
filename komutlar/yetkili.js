
module.exports = {
    name: "yetkili",
    aliases: ["moderasyon","yönetici"],
    description: "Komut açıklaması",
    usage: "yetkili",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        message.channel.send("**Yetkili Komutları** \nw!ban = Belirttiğiniz Kişiyi Banlar. \nw!forceban = Sunucudan Çıkan Birini Banlamanızı Sağlar. \nw!unban = Belirttiiğiniz kişinin banını açar. \nw!kick = Belirttiğiniz Kişiyi Sunucudan Atar. \nw!lock = Komutu Yazdığınınız Odayı Yazmaya Kapatır. \nw!unlock = Komutu Yazdığnız Odayı Yazmaya Açar. \nw!otorol-ayarla = Otorolu ayarlarsınız. \nw!otorol-mesaj = Otorol Mesajını Ayarlarsınız(Premium'a özeldir) \nw!otorol-kapat = Otorolü kapatırsınız. \nw!sil = Belirttiğiniz Sayıda Mesajı Silersiniz. \nw!çek = Belirttiğiniz kişiyi yanınıza çekersiniz. \nw!capsengel = Sunucuda Capslock Kullanımı Açar/Kapatır.   \nw!prefix = Prefixinizi değiştirirsiniz. \nw!küfür-engel = Küfür engellemeyi açarsınız. \nw!reklam-engel = Reklam engellemeyi açarsınız. \nw!ever-here-engel aç/kapat = Everyone-Here Engelini Açar/Kapatırsınız. (Yönetici Yetkisi Olanlar Atabilir.) \nw!duyuru = Duyuru yapmanızı sağlar.")
  
    }
}