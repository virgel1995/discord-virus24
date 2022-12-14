const Canvas = require("canvas");
const {drawImageWithTint} = require("../../utils/functions");

module.exports = class FireSmokeCard {
constructor() {
this.avatar =  `${__dirname}/../../assets/default.png`;
  
}
  
setAvatar(value) {
    this.avatar = value;
    return this;
}
  async toAttachment() {
let packName = "This WelcomeCard Generated By discord-virus24 Package";


const avatar = await Canvas.loadImage(this.avatar);
const base = await Canvas.loadImage("https://media.discordapp.net/attachments/830729794844753930/1025876747134181519/fire-frame.png")
		const canvas = Canvas.createCanvas(1048, 1048);
let ctx = canvas.getContext("2d");
ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
    
	drawImageWithTint(ctx, avatar, '#fc671e', 0, 0,canvas.width, canvas.height);
ctx.drawImage(base, 0, 0, canvas.width, canvas.height);

    
//package geneated text
/*ctx.fillStyle ="#000";
ctx.font = applyText(canvas, packName, 32, 570, "Bold");
ctx.textAlign = "center";
ctx.fillText(packName, canvas.width / 2, 1025);*/
    return canvas;
}

};
