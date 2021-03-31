const axios = require('axios')

exports.run = async (bot, msg, args) => {
    if (msg.author.bot) return

    axios.get('https://api.hgbrasil.com/finance?array_limit=1&fields=only_results,EUR&key=a0a8d4a3').then((data) => {
        const Buy = data.data.currencies.buy.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        const Sell = data.data.currencies.sell.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


        Embed = {
            color: 0x7629C3,
            author: {
                name: 'Euro',
                url: 'https://www.google.com/search?q=euro',
            },
            description: 'Euro é a moeda oficial da zona Euro, a qual é constituída por 19 dos 27 estados-membro da União Europeia',
            thumbnail: {
                url: 'https://vagaspelomundo.com.br/wp-content/uploads/2020/12/abertura-de-conta-em-euros-no-Brasil.jpg',
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
                    value: '€',
                    inline: true,
                },
            ],
            image: {
                url: 'https://jeonline.com.br/site/uploads/posts/confira-a-cotacao-do-euro-hoje-em-sao-paulo-1541419423-295be0319f3606a.jpg',
            },
            timestamp: new Date(),
            footer: {
                text: 'Fonte: www.google.com',
            },
        };

        msg.channel.send({ embed: Embed });
    })
};