const Discord = require("discord.js");
const client = new Discord.Client();
const proton = require("proton-io")
const db = require("wio.db");
const unlock = require("./komutlar/unlock");
const fs = require('fs');

let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiricler = ["480380268256034837","754927155493732352","789396013231636521"]
let owner = true;
let defaultCommands = true; 

const komutYukle = new proton(client,komutDosya,event,gelistiricler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;



  client.on("guildMemberAdd", async member => {
    let kanal = await db.fetch(`otoRK_${member.guild.id}`);
    let rol = await db.fetch(`otoRL_${member.guild.id}`);
    let mesaj = db.fetch(`otoRM_${member.guild.id}`);
    if (!rol) return;
  
    if (!mesaj) {
      client.channels.cache.get(kanal).send(":loudspeaker: :inbox_tray: Otomatik Rol Verildi Seninle Beraber `" + member.guild.memberCount + "` Kişiyiz! Hoşgeldin! `" + member.user.username + "`");
      return member.roles.add(rol);
    }
  
    if (mesaj) {
      var mesajs = mesaj.replace("-uye-", `${member.user}`).replace("-uyetag-", `${member.user.tag}`).replace("-rol-", `${member.guild.roles.cache.get(rol).name}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.cache.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.size}`);
      member.roles.add(rol);
      return client.channels.cache.get(kanal).send(mesajs);
       }
  });

//AFK

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setImage("")
      .setDescription(
        `・ **AFK Modundan Tekrar Aktif Olduğunuz İçin Çıkıldı**`
      );

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("BLUE") //Create By TimsahTim
      .setImage("")
      .setDescription(
        `**wasdbot | AFK Sistemi**\n\n ->\`${USER.tag}\` **Adlı Kullanıcı,\n\n\`${REASON}\` Sebebinden Dolayı AFK**\n\n**AFK Süresi :**\n\n\`${timeObj.hours} Saat\` \`${timeObj.minutes} Dakika\` \`${timeObj.seconds} Saniye\``
      );

    message.channel.send(afk);
  }
});





//AFK

//FAKE KATIL AYRIL
client.on('message', async message => {
  if (message.content === 'w!fakekatıl') { // . yerine prefixi yaz
    client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
      }
  });

  client.on('message', async message => {
    if (message.content === 'w!fakeayrıl') { // . yerine prefixi yaz
      client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
        }
    });




//FAKE KATIL AYRIL





//Caps engel

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
    if(msg.author.bot) return;  
      if (msg.content.length > 4) {
       if (db.fetch(`capslock_${msg.guild.id}`)) {
         let caps = msg.content.toUpperCase()
         if (msg.content == caps) {
           if (!msg.member.hasPermission("ADMINISTRATOR")) {
             if (!msg.mentions.users.first()) {
               msg.delete()
               return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))
   }
     }
   }
 }
}
});

//Caps engel

//Açılış mesaj

let kanal = '791050598421102592'  //Log kanalının ID'sini buraya girin.
client.on('ready', () => {  
  const xfalcon = client.channels.cache.get(kanal);
  if (!xfalcon) return console.error(`Aktif olduğumda mesaj atacağım kanal girilmemiş.`);
 const devtr = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTitle(`Bot Aktif Oldu!`)
  .setDescription(`Başarıyla aktif oldum, anlık olarak **${client.guilds.cache.size}** adet sunucuya, **${client.channels.cache.size}** adet kanala, **${client.users.cache.size}** adet kullanıcıya hizmet veriyorum.*`)
  .setThumbnail(client.user.avatarURL)
 client.channels.cache.get(kanal).send(devtr)
});

//Açılış mesaj


//Küfür engel

client.on("message", async msg => {
  
  
  const i = await db.fetch(`${msg.guild.id}.kufur`)
     if (i) {
         const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
         if (kufur.some(word => msg.content.includes(word))) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                           
                       return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
             }              
           } catch(err) {
             console.log(err);
           }
         }
     }
     if (!i) return;
 });
 

   
   
 

//Küfür engel


//Ever-here-engel

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var e = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(e);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

//Ever-here-engel

//Reklam-engel

client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`reklamengel_${message.guild.id}`);
  let kullanici = message.member;
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az",
      ".hub"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")//lrowsxrd
            .setTitle("wasdbot Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yapmayı Kes! Bu İlk Uyarın! (1/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("wasdbot Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yapmayı Kes! Bu İkinci Uyarın! (2/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Reklam-Engel Sistemi!`
          });
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("wasdbot Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yaptığı İçin Sunucudan Atıldı! (3/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.ban({
            reason: `wasdbot Reklam-Engel Sistemi!`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.MessageEmbed()//lrowsxrd
            .setColor("BLACK")
            .setTitle("wasdbot Reklam Kick Sistemi")
            .setDescription(
              `<@${message.author.id}> Atıldıktan Sonra Tekrar Reklam Yaptığı İçin Sunucudan Yasaklandı!`
            )
            .setFooter(client.user.username, client.user.avatarURL)
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});

//Reklam-engel

client.on('message', async(msg) => {

    if(!await db.has("prefix_" + msg.guild.id)) {
       var prefix = "w!"
    } else {
       var prefix = await db.fetch("prefix_" + msg.guild.id)
    }

    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})
})



client.login("Nzg3OTU1NzQxMjU2NDUwMDU5.X9ce-A.UFnxE-Hpcexo6jBPuXcksk8YFWQ")