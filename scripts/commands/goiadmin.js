module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61553312939129") {
    var aid = ["61553312939129"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _সিয়াম বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- ⸙//__আরে বলদা সিয়াম বস এখন অনেক বিজি💗🤦🌻", "⸙//__সিয়াম বস কোই তুমি তোমাকে এক আবাল খুজে😑🥴🐸","মেনশন না দিয়ে গফ দে আবাল🥴😑"," ⸙//সিয়াম বস নাই যা বলার আমাকে বল __🤝🌻😑"," সিয়াম বস এখন ঘুমায় 🍷🥱","⸙//__বেশি নাটক করবি না সোজা ইনবক্সে যা সিয়াম বসের 🙄😒","এতো মিনশন নাহ দিয়া সিংগেল সিয়াম বস রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে🐷👀😚","Mantion_দিস না বাঁলপাঁক্না সিয়াম প্রচুর বিজি 🥵🥀🤐","বসের সাথে কথা বলতে চাইলে সোজা ইনবক্স কর মেয়ে মানুষ আবার রিপলেই পাবি না 🌝🥴🤝"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}