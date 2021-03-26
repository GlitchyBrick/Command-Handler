const Discord = require('discord.js')
const TicTacToe = require('discord-tictactoe');

module.exports.run = async (bot, message, args) => {
    new TicTacToe({
        language: 'en',
        command: '-ttt'
    }, bot)
}
module.exports.help = {
  name: "ttt"
}
