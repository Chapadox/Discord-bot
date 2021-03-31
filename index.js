// requires
const discord = require('discord.js');
const config = require('./config.json');
const Enmap = require('enmap');
const fs = require('fs');


const bot = new discord.Client();
bot.config = config;


fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventname = file.split('.')[0];
    bot.on(eventname, event.bind(null, bot));
  });
});

bot.commands = new Enmap()

fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split('.')[0];
    console.log(`carregando ${commandName}`);
    bot.commands.set(commandName, props);
  });
});

bot.login(config.BOT_TOKEN)