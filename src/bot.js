
const Discord = require('discord.js');
const token = require('auth.json').token;

let bot = new Discord.Client()

bot.on('ready', () => {
  console.log("> connected ...");
});

bot.on('message', msg => {
  
  switch(msg.content) {

    case '!ping':
    msg.reply('pong');
    break;

    case '!hi':
    msg.reply(`hi ${msg.author.username} !`);
    break;

    case '!bye':
    msg.reply(`See you soon ${msg.author.username} !`);
    break;

  }

});

bot.login(token);