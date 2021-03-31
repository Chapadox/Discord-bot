const axios = require('axios')

exports.run = async (bot, msg, args) => {
    if (msg.author.bot) return

    axios.get('https://api.hgbrasil.com/finance?array_limit=1&fields=only_results,bitcoin&key=a0a8d4a3').then((data) => {
        const Buy = data.data.bitcoin.mercadobitcoin.buy.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        const Sell = data.data.bitcoin.mercadobitcoin.sell.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


        Embed = {
            color: 0xFDD315,
            author: {
                name: 'Bitcoin',
                url: 'https://www.mercadobitcoin.com.br/',
            },
            description: 'Bitcoin é uma criptomoeda descentralizada, sendo um dinheiro eletrônico para transações ponto-a-ponto. por um programador ou grupo de programadores sob o pseudônimo Satoshi Nakamoto',
            thumbnail: {
                url: 'https://static-wp-eqi15-prd.euqueroinvestir.com/wp-content/uploads/2018/09/economia-bitcoins-20000101-002-1024x683.jpg',
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
                    value: 'BTC',
                    inline: true,
                },
            ],
            image: {
                url: 'https://veja.abril.com.br/wp-content/uploads/2017/10/economia-bitcoins-20000101-003.jpg',
            },
            timestamp: new Date(),
            footer: {
                text: 'Fonte: www.mercadobitcoin.com.br',
            },
        };

        msg.channel.send({ embed: Embed });
    })
};