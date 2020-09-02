const Discord = require('discord.js');

const bot = new Discord.Client();


bot.on("ready", function (){
    console.log('task_bot is online!');
});


bot.login(process.env.token);