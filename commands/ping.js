exports.run = async (bot, msg, arg) => {
    const ping = await msg.channel.send('Pera...')
    const clientm = ping.createdTimestamp - msg.createdTimestamp
    ping.edit('📌 Sua Mãe pinga em mim todo dia, ⌛️ Seu ping e: ' + clientm + ' ⌛️')
}