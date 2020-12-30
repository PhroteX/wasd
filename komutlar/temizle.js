const Discord = require('discord.js')



module.exports = {
    name: "temizle",
    aliases: ["sil"],
    description: "Mesajları siler.",
    usage: "temizle",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın!`);
        if (!args[0] || isNaN(args[0])) {
          
        const temizle = new Discord.MessageEmbed()  
        //  Create By TimsahTim
        .setDescription(`Temizlenecek Mesaj Miktarını Belirtmelisin!\n\n Örnek Kullanım : **w!temizle 10**`)
        .setColor("RED")
        
        return message.channel.send(temizle)
        }
        
        message.delete();
        
        let sayi = Number(args[0]);
        let silinen = 0;
        
        for (var i = 0; i < (Math.floor(sayi/100)); i++) {
          
        message.channel.bulkDelete(100).then(r => silinen+=r.size);
          
        sayi = sayi-100; 
        };
        
        if (sayi > 0)  message.channel.bulkDelete(sayi).then(r => silinen+=r.size);
        
        const sil = new Discord.MessageEmbed()  
        
        .setDescription(`**\`\`${args[0]}\`\` Adet Mesaj Silindi.**`)
        .setColor("GREEN")
        //  Create By TimsahTim
        return message.channel.send(sil)
        }



    }
