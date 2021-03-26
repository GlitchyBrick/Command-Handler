const Discord = require('discord.js')
const { RichEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    var seconds = parseInt((this.client.uptime / 1000) % 60),
    minutes = parseInt((this.client.uptime / (1000 * 60)) % 60),
    hours = parseInt((this.client.uptime / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? ('0' + hours) : hours;

  minutes = (minutes < 10) ? ('0' + minutes) : minutes;

  seconds = (seconds < 10) ? ('0' + seconds) : seconds;

  /*return message.say(
    `:chart_with_upwards_trend: I've been running for **${hours}** hours, **${minutes}** minutes and **${seconds}** seconds!`
  );
  */

    const embed = new Discord.RichEmbed()
    .setDescription(`**${hours}** hours **${minutes}** minutes **${seconds}** seconds`)

    message.channel.send(embed)
}
module.exports.help = {
  name: "uptime"
}
