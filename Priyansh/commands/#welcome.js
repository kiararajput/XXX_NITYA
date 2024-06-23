const fs = require("fs");
module.exports.config = {
  name: "wlcm",
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
  if(react.includes("welcome") ||
     react.includes("Welcome") || react.includes("wlcm") || react.includes("Wlcm") ||
react.includes("swagat") ||
react.includes("Swagat")) {
    var msg = {
        body: `🥰𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐇𝐎😘 𝐆𝐀𝐘À À𝐏𝐊À  Ç𝐇𝐔𝐌𝐌𝐀💋 𝐌𝐀𝐀𝐑 𝐊𝐄 𝐁A𝐁𝐘💋🙃👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }