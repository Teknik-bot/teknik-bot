const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!"; 

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "830811138903638057").send(member.displayName + " nous a rejoint !\nNous sommes désormais **" + member.guild.memberCount + "** sur le serveur !");
    member.roles.add("830823291639693342");
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "830811138903638057").send(member.displayName + " just left us :sob:");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    //!ping
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }

    if(message.content == prefix + "stat"){
        message.channel.send("**" + message.author.username + "**qui a pour identifiant : _" + message.author.id + "_ a posté un message");
    }
});


Client.login("ODMwNzY4ODY1NDYyMDU5MDA4.YHLfzA.-a6-lpLdNtmqEOHlvppfa7R3B_U");