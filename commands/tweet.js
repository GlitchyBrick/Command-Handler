const Discord = require('discord.js')
const fetch = require('node-fetch');
const { RichEmbed, MessageEmbed } = require('discord.js')
let fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let text = args.slice(0).join(" ");

  if(!text) return message.channel.send("You Didnt say What you want to tweet")

  fetch(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`)
  .then((res) => res.json())
  .then((body) => {
      let embed = new Discord.RichEmbed()
      .setTitle("Trump tweeted!")
      .setImage(body.message)
      .setColor(`BLUE`)
      message.channel.send(embed)
  })
}
module.exports.help = {
  name: "tweet"
}
