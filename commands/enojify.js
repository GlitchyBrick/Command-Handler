const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const emoji = require('discord-emoji-convert');

module.exports.run = async (bot, message, args) => {
    var arg = message.content.split(" ").slice(1).join(" ")


        if(!arg) return message.channel.send('What do you want to emojify')
        if(arg.legth > 90) return message.channel.send('Please keep it under 90 characters')
        let emojis = emoji.convert(arg)
        message.channel.send(emojis).catch((_err) =>{
            message.channel.send(arg)
        })
}
module.exports.help = {
  name: "emojify"
}
