const Discord = require('discord.js');
const Command = require('../../models/Command');
const data = {
    caller: "emit",
    cd: 10,
    enable: true,
    run: function (bot = new Bot({}),msg=new Discord.Message,params=[]){
        
    }
}
module.exports = new Command(data)
