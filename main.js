const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='!';
//var events = "1st General Meeting";

client.once('ready',() => {
    console.log('task_bot is online!');
});

client.on('message',message =>{
if (!message.content.startsWith(prefix)  || message.author.bot ) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();


if (command == 'task'){
    message.channel.send('None tasks are set!');
}
else if(command == 'youtube')
{
    message.channel.send('Go and suscribe to: https://www.youtube.com/channel/UC1bYosSS-J8LNkQo2ozeQXw');
}
else if(command == 'events')
{
    if (events == ' ') 
    message.channel.send('No events for now💤');
    //else 
    //message.channel.send(events);
}

});


client.login(process.env.token);