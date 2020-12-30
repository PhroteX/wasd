// -Bot giriş kısmı- 
module.exports = (client) => {

    var oynuyorkısımları = [
    "Prefix: w!",
    'w!oy | Oy Verebilirsiniz!',
    "w!yardım | Yardım alabilirsiniz.",
    "PhroteX Tarafından <3 İle Hazırlanıyor.",
    "Ticket Sistemi Eklendi! Detaylı Bilgi İçin : w!yardım",
    "Bugları ve Hataları Bildirmek İçin : w!bugreport"
    ]
    
    
    setInterval(function() {
    
            var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
           client.user.setActivity(oynuyorkısımları[random], { type: 'LISTENING' });
            }, 2 * 3000);
    
        console.log("Bot başarı ile giriş yaptı.")
    }
    