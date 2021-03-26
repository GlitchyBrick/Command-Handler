const Discord = require('discord.js')
const { RichEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send('You Cant Achieve Nothing')

    if(args[1]) return message.channel.send('No Spaces Please')
    
    /*var arg = message.content.split(" ").slice(1).join(" ")

    if(!arg) return message.channel.send('You Cant Achieve Nothing')
    */

    const embed = new Discord.RichEmbed();
    embed.setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=1&h=Achievement+get%21&t=${args[0]}`)
    embed.setColor('GREEN')
    message.channel.send(embed)
  
}
module.exports.help = {
  name: "achievement"
}
