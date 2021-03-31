exports.run = async (bot, msg, arg) => {
    Embed = {
        color: 0x7629C3,
        author: {
            name: 'ᵛᵃᵖᵒBot',
            url: 'https://metagalaxia.com.br/wp-content/uploads/2017/10/youkoso-jitsuryoku-classroom-of-the-elite-anime-ayanakoji.png',
        },
        description: 'Bot Feito apenas para estudo e pratica em Node JS.',
        thumbnail: {
            url: 'https://metagalaxia.com.br/wp-content/uploads/2017/10/youkoso-jitsuryoku-classroom-of-the-elite-anime-ayanakoji.png',
        },
        fields: [
            {
                name: 'Feito Por:',
                value: '⁰¹¹ChapadoNoHype#930',
                inline: true,
            },
        ],
        image: {
            url: 'https://metagalaxia.com.br/wp-content/uploads/2017/10/youkoso-jitsuryoku-classroom-of-the-elite-anime-ayanakoji.png',
        },
        timestamp: new Date(),
        footer: {
            text: 'Informações',
        },
    };

    msg.channel.send({ embed: Embed });
}