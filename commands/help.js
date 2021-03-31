exports.run = async (bot, msg, args) => {
    Embed = {
        color: 0xFCF3CF,
        author: {
            name: 'Comandos',
            url: 'https://www.google.com/search?q=iene',
        },
        description: 'Comandos Do Bot',
        image: {
            url: 'https://uploaddeimagens.com.br/images/003/175/869/full/carbon_%281%29.png?1617159738',
        },
        timestamp: new Date(),
        footer: {
            text: 'Fonte: ᵛᵃᵖᵒBot',
        },
    };
    msg.channel.send({ embed: Embed });
}