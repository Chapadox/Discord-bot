const axios = require('axios')

exports.run = async (bot, msg, args) => {
    if (msg.author.bot) return

    axios.get('https://api.hgbrasil.com/finance?array_limit=1&fields=only_results,USD&key=a0a8d4a3').then((data) => {
        const Buy = data.data.currencies.buy.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        const Sell = data.data.currencies.sell.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


        Embed = {
            color: 0x39B535,
            author: {
                name: 'Dolar',
                url: 'https://www.google.com/search?q=dolar',
            },
            description: 'O dólar dos Estados Unidos, também conhecido como dólar estadunidense ou dólar americano é a moeda oficial dos Estados Unidos e utilizada no mundo inteiro.',
            thumbnail: {
                url: 'https://veja.abril.com.br/wp-content/uploads/2019/01/economia-dolar-20170910-003.jpg',
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
                    value: '$',
                    inline: true,
                },
            ],
            image: {
                url: 'https://comoinvestir.thecap.com.br/wp-content/uploads/2020/05/como-investir-em-dolar-e-fazer-bom-negocio.jpg',
            },
            timestamp: new Date(),
            footer: {
                text: 'Fonte: www.google.com',
            },
        };

        msg.channel.send({ embed: Embed });
    })
};