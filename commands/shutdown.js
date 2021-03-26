const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if (message.author.id === '792168239375187989') {
        await message.channel.send("Bot is shutting down");
            process.exit();
    }else message.reply('The Shutdown Command Can only be used by an owner')
}
module.exports.help = {
  name: "shutdown"
}
