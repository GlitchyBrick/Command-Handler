const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  await message.delete()
  return message.reply("test").then(m => m.delete(10000))
}
module.exports.help = {
  name: "test"
}
