import { c } from "./player-invader";

class Projectile {
  constructor({ position, velocity }) {
    (this.position = position), (this.velocity = velocity), (this.radius = 4);
  }
  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = "red";
    c.fill();
    c.closePath;
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

class Particle {
  constructor({ position, velocity, radius, color, fades }) {
    (this.position = position),
      (this.velocity = velocity),
      (this.radius = radius),
      (this.color = color),
      (this.opacity = 1);
      (this.fades = fades);
  }
  draw() {
    c.save()
    c.globalAlpha = this.opacity;
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath;
    c.restore()
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if(this.fades){
    this.opacity -= 0.01
    }
  }
}

class InvaderProjectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.width = 4;
    this.height = 10;
  }
  draw() {
    c.fillStyle = "white";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

export { Projectile, Particle, InvaderProjectile };
