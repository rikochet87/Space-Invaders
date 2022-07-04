import { Player, c, canvas } from "./player";
import { Projectile } from "./projectile";

const player = new Player();
const projectiles = [];
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  projectiles.forEach((projectile, index) => {
    if (projectile.position.y + projectile.radius <= 0) {
      setTimeout(()=>{
        projectiles.splice(index, 1);
      }, 0)
      
    } else {
      projectile.update();
    }
  });

  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.x = -7;
    player.rotation = -0.15;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = 7;
    player.rotation = 0.15;
  } else {
    player.velocity.x = 0;
  }
}
animate();

(function () {
  addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "a":
        // console.log("left");
        keys.a.pressed = true;
        break;
      case "d":
        // console.log("right");
        keys.d.pressed = true;
        break;
      case " ":
        // console.log("space");
        projectiles.push(
          new Projectile({
            position: {
              x: player.position.x + player.width / 2,
              y: player.position.y,
            },
            velocity: {
              x: 0,
              y: -12,
            },
          })
        );
        // console.log(projectiles);
        break;
    }
  });
})();

(function () {
  addEventListener("keyup", ({ key }) => {
    switch (key) {
      case "a":
        // console.log("left");
        keys.a.pressed = false;
        break;
      case "d":
        // console.log("right");
        keys.d.pressed = false;
        break;
      case " ":
        // console.log("space");
        break;
    }
  });
})();

export { player };
