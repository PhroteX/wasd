
module.exports = {
    name: "tkm",
    aliases: ["taş-kagit-makas","taşkağıtmakas"],
    description: "TKM Oynarsınız",
    usage: "tkm",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    
    
    
    run: async (message,args,client) => {
   
        const
    rps = [
        'makas',
        'taş',
        'kağıt'
    ],
    rpsF = (userAns, botAns) => {
        let choice = userAns,
            botChoice = botAns;
        if (choice === 'taş') {
            if (botChoice === 'makas') {
                return 'won';
            } else if (botChoice === 'kağıt') {
                return 'Kaybetin';
            }

            return 'draw';
        } else if (choice === 'kağıt') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'makas') {
                return 'Kazandın';
            }

            return 'draw';
        } else if (choice === 'makas') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'kağıt') {
                return 'Kazandın';
            }

            return 'draw';
        }
    };

        if (!args[0]) {
            return message.channel.send('Lütfen seçimini yap taş, kağıt yada makas & tkm <taş,kağıt,makas>');
        }
        let choice = args[0].toLowerCase();
        choice = choice === 't' ? 'taş' : choice;
        choice = choice === 'k' ? 'kağıt' : choice;
        choice = choice === 'm' ? 'makas' : choice;
        if (!rps.includes(choice)) {
            return message.channel.send('Lütfen seçimini yap taş, kağıt yada makas & tkm <t,k,m>');
        }
        let rand = Math.floor(Math.random() * 3);
        let botChoice = rps[rand];
        let result = rpsF(choice, botChoice);
        let answer = '';
    
        if (result === 'won') {
            answer = ':trophy: Başarılı, sen **Kazandın** :trophy: \nSenin Seçtiği: `' + choice + '` | Bot\'un Seçtiği: `' + botChoice + '`';
        } else if (result === 'lost') {
            answer = ':x: Bidakine **Kaybetin Dostum** :x: \nSenin Seçtiğin: `' + choice + '` | Bot\'s Seçtiği: `' + botChoice + '`';
        } else if (result === 'draw') {
            answer = ':neutral_face: Sonuç **Berabere** :neutral_face:\nSenin Seçimin: `' + choice + '` | Bot\'un Seçimi: `' + botChoice + '`';
        }
    
        message.channel.send(answer);
    },
  
    }
