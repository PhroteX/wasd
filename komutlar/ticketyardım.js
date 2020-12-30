
module.exports = {
    name: "destek",
    aliases: ["destek-yardım"],
    description: "Komut açıklaması",
    usage: "destek",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        message.channel.send("**Ticket (Destek) Sistemi Komutları** \nw!ticket-kanal ayarla #kanal = Ticket mesajının gönderileceği kanalı ayarlarsınız. \nw!ticket-kanal sıfırla = Ticket kanalını sıfırlarsınız. \nw!ticket gönder = Ticket Mesajını Gönderirsiniz. \nw!ticket-aç = Kapatılmış bir ticket'ı açarsınız. \nw!ticket-kapat = Açık bir ticket'ı kapatırsınız. \nw!ticket-ekle = Ticket'a bir kullaıcı/rol eklersiniz. \nw!ticket-kaldır = Ticket'dan birini kaldırırsınız. \nw!ticket-sil = Bir ticket'ı silersiniz.")
  
    }
}