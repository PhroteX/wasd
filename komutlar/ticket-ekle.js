const Discord = require('discord.js');
const data = require('wio.db')


module.exports = {
    name: "ticket-ekle",
    aliases: ["ticketekle","tekle"],
    description: "Komut açıklaması",
    usage: "ticket-ekle",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        if(!args[0]) {
            message.delete()
            return message.channel.send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``).then(c => c.delete(10000)) }
              
            if(args[0]) {
            
            if(!args[1]) {
            const ad = await data.fetch(`numara.${message.channel.id}`)
            if(!message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
            const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
        
            return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`).then(c => c.delete(5000)) } }
              
            let mt = message.mentions.roles.first() || message.mentions.users.first()
            if(!mt) {
            message.delete()
            return message.channel.send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``)  }
            let mention = message.guild.roles.cache.get(mt.id) || message.guild.members.cache.get(mt.id)
            if(!mention) {
            message.delete()
            return message.channel.send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``)  }  
              
            if(args[1]) {  
              
            if(message.mentions.channels.first()) {
              
            let ch = message.mentions.channels.first()
            const ad = await data.fetch(`numara.${message.channel.id}`)
            if(!ch.name === `ticket-${ad}` || ch.name === `closed-${ad}`) {
            message.delete()
            return message.channel.send(`Bir bilet kanalı değil.`).then(c => c.delete(5000)) }  
            const ann = await data.fetch(`asd.${message.guild.id}.${ch.id}.${message.author.id}`)
            ch.createOverwrite(mt, { 'SEND_MESSAGES': true, 'READ_MESSAGES': true })
            message.delete()
            const emb = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`${mt}: ${ch} kanalına eklendi.`)
            return message.channel.send(emb) } }
              
            message.channel.createOverwrite(mt, { 'SEND_MESSAGES': true, 'READ_MESSAGES': true })
            message.delete()
            const emb = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`${mt}: ${message.channel} kanalına eklendi.`)
            return message.channel.send(emb)
            
            }
            
            },
  
    }
