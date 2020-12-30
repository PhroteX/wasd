const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4Nzk1NTc0MTI1NjQ1MDA1OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5MzEyMzA0fQ.Q-tWcYOh0LqGU96oSbnqrTy3p1KmN8NQh6TBRqT1gcs', client);

module.exports = {
    name: "küfür",
    aliases: ["küfür-et","söv"],
    description: "birine söversiniz",
    usage: "küfür",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
      dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {
//KOMUT

if (!message.channel.nsfw) return message.channel.send("Bu komut çok ağır küfürler içermektedir. Bu yüzden kanalı 'NSFW' Yapıp tekrar dene.");


        let kufur=[  
            "büyücüler gelse de benim ömrümden alıp ananın ömrüne versinki daha çok sikeyim",
            "Zamanın makinesi icat edilsinde geçmişini de sikeyim",
            "ananın mına bacagımı sokup yarım vole attıgımının evladi",
            "amına kodumun jedayı seni",
            "babanın annesinin amına koyayım orul orul orospu evladı",
            "ebenin amı gibi kaşları da kara",
            "seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
            "senin ananın amına mancınıkla patates atayım",
            "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
            "ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
            "senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
            "ananın amını keserim cebime koyarım sıkıldıkça sikerim",
            "ananın amına sınav yapar 2 milyon kişiyi sokarım",
            "amına barut döker sürtünmeyle yakarım orospu evladı",
            "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
            "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
            "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
            "küfür ederdim ama anan çok yordu",
        "öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
            "senin ananı boğaz köprüsünün ortasında amına yoğurt doldurup yayık ayran olana kadar sikerim, hem asya seyreder hem avrupa",
            "ulan anasının amındayken, yarrağımın alnına periyodik aralıklarla dokunduğu orospu çocuğu",
            "anan aids şüphesiyle doktora gitmiş türkiyedeki erkek nüfusu tedirgin",
          "senin ananın amıyla babanın götünü birleştirip komba yapıp amına reçete sokup son kullanma tarihi geçene kadar siker geçtiğinde tekrar dölle tazeleştirerek siker saksoya yatırıp anadan sana 9 kardeş  yaparım tüm kardeğilerinle birlikte salıncakta sallandırarak sikim orrrospu evladı karının amına zence yarra sokumsenin ananın amıyla babanın götünü birleştirip komba yapıp amına reçete sokup son kullanma tarihi geçene kadar siker geçtiğinde tekrar dölle tazeleştirerek siker saksoya yatırıp anadan sana 9 kardeş  yaparım tüm kardeğilerinle birlikte salıncakta sallandırarak sikim orrrospu evladı karının amına zence yarra sokumsenin ananın amıyla babanın götünü birleştirip komba yapıp amına reçete sokup son kullanma tarihi geçene kadar siker geçtiğinde tekrar dölle tazeleştirerek siker saksoya yatırıp anadan sana 9 kardeş  yaparım tüm kardeğilerinle birlikte salıncakta sallandırarak sikim orrrospu evladı karının amına zence yarra sokumsenin ananın amıyla babanın götünü birleştirip komba yapıp amına reçete sokup son kullanma tarihi geçene kadar siker geçtiğinde tekrar dölle tazeleştirerek siker saksoya yatırıp anadan sana 9 kardeş  yaparım tüm kardeğilerinle birlikte salıncakta sallandırarak sikim orrrospu evladı karının amına zence yarra sokum",
"senin ananın amıyla babanın götünü birleştirip komba yapıp amına reçete sokup son kullanma tarihi geçene kadar siker geçtiğinde tekrar dölle tazeleştirerek siker saksoya yatırıp anadan sana 9 kardeş  yaparım tüm kardeğilerinle birlikte salıncakta sallandırarak sikim orrrospu evladı karının amına zence yarra sokum",
"anana yarrak spamı atar ananın amına telfondan sokarım",

          ]
             let member = message.mentions.members.first()
           if(!member)return message.channel.send({embed: {  
         color: Math.floor(Math.random() * (0xFFFFFF + 1)),
         description: ('Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
        }});
        
        if(member.bot == true)return message.channel.send({embed: {
         color: Math.floor(Math.random() * (0xFFFFFF + 1)),
         description: ('Yapay zekaya sövsem kaç yazar amk :D?')
        }})
        
          if(member.id === ayarlar.sahip)return message.channel.send({embed: {
         color: Math.floor(Math.random() * (0xFFFFFF + 1)),
         description: ('BİR DE SAHİBİME SÖVECEK AL O KÜFÜRÜ DÜR BÜK ANANIN AMINA SOK')
        }})
          if(member.id === message.guild.owner.id) return message.channel.send({embed: {
         color: Math.floor(Math.random() * (0xFFFFFF + 1)),
         description: (`Ona söversem cibiliyetimi siker!`)
        }})
          if(member.id === client.user.id){
            message.channel.send({embed: {
         color: Math.floor(Math.random() * (0xFFFFFF + 1)),
         description: (` Siktir duygusuz pezeveng bide bana sövecek!!`)
        }})
          }
          else{
          message.channel.send({embed: {
         color: Math.floor(Math.random() * (0xFFFFFF + 1)),
         description: (`${member} ${kufur[Math.floor(Math.random() * 22)]}.`)
          }})
          }



}})}
      
   
        
          
        }
  
  
