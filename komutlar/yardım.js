
module.exports = {
    name: "yardım",
    aliases: ["help","y"],
    description: "yardım menüsünü österir",
    usage: "yardım",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
message.channel.send("**wasdbot Yardım Menüsü** \n\n**Yetkili Komutları İçin** = w!yetkili \n**Kullanıcı Komutları İçin** = w!kullanıcı \n**Eğlence Komutları İçin** = w!eğlence \n**Destek Sistemi Komutları İçin** = w!destek \n**NSFW Komutları İçin** = w!nsfw")        


}

}