const fs = require("fs");
module.exports.config = {
  name: "smile",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "NITYA RAJPUT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("🤭") ||
     react.includes("☺️") || react.includes("wlcm") || react.includes("😊") ||
react.includes("🙂") ||
react.includes("😌")) {
    var msg = {
        body: `💐𝐔𝐅𝐅 𝐘𝐄𝐇 SS𝐌𝐈𝐋𝐄 𝐒𝐀𝐃𝐊𝐄 𝐉𝐀𝐖𝐀 𝐌💐`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }