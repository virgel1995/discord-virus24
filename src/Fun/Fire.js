const Canvas = require("canvas");
const {drawImageWithTint, streamToArray} = require("../../utils/functions");
const GIFEncoder = require('gifencoder');
const frameCount = 30;
module.exports = class FireCard {
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

const canvas = Canvas.createCanvas(1048, 1048);
const ctx = canvas.getContext('2d');
    
const encoder = new GIFEncoder(canvas.width, canvas.height);
    
const stream = encoder.createReadStream();
encoder.start();
encoder.setRepeat(0);
encoder.setDelay(100);
encoder.setQuality(100);
for (let i = 0; i < frameCount; i += 2) {
  const frameID = `frame-${i.toString().padStart(2, '0')}`;
 const frame = await Canvas.loadImage(`${__dirname}/../../assets/fire/${frameID}.png`);
  const ratio = frame.width / frame.height;
  const height = Math.round(canvas.width / ratio);
  drawImageWithTint(ctx, avatar, '#fc671e', 0, 0, canvas.width, canvas.height);
  ctx.drawImage(frame, 0, canvas.height - height, canvas.width, height);
  encoder.addFrame(ctx);
}
encoder.finish();
const buffer = await streamToArray(stream);
Buffer.concat(buffer);

    
    
//package geneated text
/*ctx.fillStyle ="#000";
ctx.font = applyText(canvas, packName, 32, 570, "Bold");
ctx.textAlign = "center";
ctx.fillText(packName, canvas.width / 2, 1025);*/
    return Buffer.concat(buffer);
}

};
