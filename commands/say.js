const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const sayargs = args.join(" ");
    message.channel.send(sayargs)
}
module.exports.help = {
  name: "say"
}
