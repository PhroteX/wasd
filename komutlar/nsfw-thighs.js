const Discord = require('discord.js');
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const data = require('wio.db');



module.exports = {
    name: "thighs",
    aliases: ["thighs"],
    description: "Komut açıklaması",
    usage: "thighs",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
        
        if(message.author.id === "754927155493732352"){

            
        if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.thighs`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**10 saniyenin altında hızlı kullanamazsın!**`));
        DabiClient.nsfw.real.thighs().then(json => {
        message.channel.send(new Discord.MessageAttachment(json.url));
        data.set(`slm.${message.author.id}.${message.guild.id}.thighs`, 'rawibot');
        setTimeout(() => {
        data.delete(`slm.${message.author.id}.${message.guild.id}.thighs`)
        }, 10000);
        })
        }else{

            if(message.channel.nsfw == false) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setImage('https://cdn.discordapp.com/attachments/773087334140739597/773546087504019486/Adsz.png').setDescription(`${message.author} **Kanal __NSFW__ olarak aktif değil. Kontrol et!**`).setColor('#00001'))
            if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.thighs`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**10 saniyenin altında hızlı kullanamazsın!**`));
            DabiClient.nsfw.real.thighs().then(json => {
            message.channel.send(new Discord.MessageAttachment(json.url));
            data.set(`slm.${message.author.id}.${message.guild.id}.thighs`, 'rawibot');
            setTimeout(() => {
            data.delete(`slm.${message.author.id}.${message.guild.id}.thighs`)
            }, 10000);
            })
            }
            

        }
        

        }




    

  
    
