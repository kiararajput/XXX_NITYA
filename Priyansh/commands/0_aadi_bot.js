const fs = require("fs");
module.exports.config = {
  name: "aadi",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("ayaan") ||
     react.includes("Ayaan") || react.includes("Ayan") || react.includes("ayan") ||
react.includes("Ayaan khan") ||
react.includes("ayaan")) {
    var msg = {
        body: `𝐀𝐘À𝐀𝐍 𝐏𝐈𝐘𝐀𝐀 𝐊 𝐒𝐀𝐓𝐇 𝐈𝐁 𝐌 𝐁𝐔𝐒𝐘 𝐇 𝐃𝐎𝐍𝐎 𝐊𝐎 𝐃𝐈𝐒𝐓𝐑𝐔𝐁 𝐍𝐀 𝐊ÀRo🙃👈😆`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }