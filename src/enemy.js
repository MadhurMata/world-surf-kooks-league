"use strict"


function Enemy(canvas, y, speedX, speedY) {
  this.size = 20;
  this.y = Math.round(Math.random() * (canvas.height-this.size));
  this.x = Math.round(Math.random() * (canvas.width-this.size));
  this.speedX = speedX;
  this.speedY = speedY;
  this.canvas = canvas;
  this.directionX = 1;
  this.directionY = 1;
  this.ctx = canvas.getContext('2d');
  this.img = new Image();
  this.img.src = "./images/shark.svg";
  this.sharkBite = new Audio("./music/shark.wav");

}

Enemy.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
};


Enemy.prototype.update = function () {
  this.x -= this.directionX * this.speedX;
  this.y += this.directionY * this.speedY;

  if ((this.y <= 0) || (this.y >= this.canvas.height - this.size)) {
    this.directionY *= -1;
    if (this.y <= 0) {
      this.y = 0;
    }
  }
  if ((this.x <= 0) || (this.x >= this.canvas.width - this.size)) {
    this.directionX *= -1;
    if (this.x <= 0) {
      this.x = 0;
    }
  }

};

Enemy.prototype.isInScreen = function () {
  return this.x + this.size >= 0;

};
