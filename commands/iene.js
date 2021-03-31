const axios = require('axios')

exports.run = async (bot, msg, args) => {
    if (msg.author.bot) return

    axios.get('https://api.hgbrasil.com/finance?array_limit=1&fields=only_results,EUR&key=a0a8d4a3').then((data) => {
        const Buy = data.data.currencies.buy.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        const Sell = data.data.currencies.sell.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


        Embed = {
            color: 0xFCF3CF,
            author: {
                name: 'Iene',
                url: 'https://www.google.com/search?q=iene',
            },
            description: 'O iene é a moeda oficial do Japão. É a terceira moeda mais negociada no mercado de câmbio depois do dólar dos Estados Unidos e do euro.',
            thumbnail: {
                url: 'https://i.pinimg.com/736x/5c/a3/58/5ca358c6b5960cc35f864b680a79fc3f.jpg',
            },
            fields: [
                {
                    name: 'Valor Para Compra',
                    value: Buy,
                    inline: true,
                },
                {
                    name: 'Valor Para Venda',
                    value: Sell,
                    inline: true,
                },
                {
                    name: 'Simbolo',
                    value: '¥',
                    inline: true,
                },
            ],
            image: {
                url: 'https://thumbs.dreamstime.com/b/c%C3%A9dula-e-moedas-japonesas-dos-ienes-do-dinheiro-37071237.jpg',
            },
            timestamp: new Date(),
            footer: {
                text: 'Fonte: www.google.com',
            },
        };

        msg.channel.send({ embed: Embed });
    })
};