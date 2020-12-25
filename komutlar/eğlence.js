
module.exports = {
    name: "eğlence",
    aliases: ["eglence","fun"],
    description: "Komut açıklaması",
    usage: "eğlence",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
  message.channel.send("**Eğlence Komutları** \nw!espri = Espri yapar. \nw!tkm = Botla taş-kağt-makas oynarsınız. \nw!google = Googleda birşeyler arasınız. \nw!yumruk = Birine yumruk atarsınız. \nw!küfür = Birine çok ağır bir şekilde sövebilirsiniz.(NSFW Zorunlu) \nw!wwe = Bir WWE Gifi Alırsınız. \nw!korona = Korona olursunuz. \nw!tabletreyiz = TabletReyiz Gifi Alırsınız.(7-8 Saniye Gecikmeli Sonraki Versyonda Çözülür.) \nw!kaç-cm = Malafatınız Acaba Kaç CM?")
  
    }
}