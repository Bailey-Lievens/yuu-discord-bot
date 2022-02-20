require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const prefix = "Yuu";

const greetings = [
    "Hey there!",
    "Wazaaaaaaap",
    "Hi",
    "Hey there good looking :smirk:",
    "UwU :sparkles:",
    "UwU *WOMP*  **WOMP**",
];

client.on("ready", () => {
    console.log("Logged in as " + client.user.tag + "! Press ctrl+c to end the bot.");
});

client.on("messageCreate", (msg) => {

    //If message doesn't start with prefix return
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    //Remove prefix from message + 1 for the space
    let message = msg.content.slice(prefix.length + 1);

    if(message == "hi") {
        msg.channel.send(greetings[Math.floor(Math.random() * greetings.length)]);
        return;
    }

  });

client.login(process.env.DISCORD_BOT_TOKEN);