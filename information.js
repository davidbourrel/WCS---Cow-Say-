var cowsay = require("cowsay");

const wild = {
  name: "David Bourrel",
  campus: "Toulouse"
}

const myInfos = () => {
  console.log(cowsay.say({
    text : `Hello I'm ${wild.name} from ${wild.campus} Campus!`,
    e : "oO",
    T : "U "
  }));;
};

module.exports = myInfos;
