const spring = 0.05;
const gravity = 0.03;
const friction = -0.75;

class ParticleManager {
  constructor(r, n) {
    this.r = r;
    this.n = n;
    this.particles = [];
  }

  update() {
    this.particles.forEach(p => p.collide());
    this.particles.forEach(p => p.move());
  }

  addNew(x, y) {
    if(this.particles.length < this.n) {
      this.particles.push(new Particle(
        x, y, this.r + random(0, 5), this.particles.length, this.particles
      ));
    }
  }

  toArray() {
    let a = []
    for(let i = 0; i < this.n; i++) {
      if(this.particles.length <= i) {
        a.push(0.0, 0.0, -1.0);
      }else {
        let p = this.particles[i];
        a.push(p.x+width/2, p.y+height/2, p.r);
      }
    }

    return a;
  }
}

class Particle {
  constructor(x, y, r, id, others) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.vx = 0;
    this.vy = 0;

    this.id = id;
    this.others = others;
  }

  collide() {
    for (let i = this.id + 1; i < this.others.length; i++) {
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].r + this.r;

      if (distance < minDist) {
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;

        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;

        this.vx -= ax;
        this.vy -= ay;

        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.y += this.vy;
    this.x += this.vx;

    if (this.x + this.r > width/2) {
      this.x = width/2 - this.r;
      this.vx *= friction;
    } else if (this.x - this.r < -width/2) {
      this.x = this.r - width/2;
      this.vx *= friction;
    }

    if (this.y + this.r > height/2) {
      this.y = height/2 - this.r;
      this.vy *= friction;
    } else if (this.y - this.r < -height/2) {
      this.y = this.r - height/2;
      this.vy *= friction;
    }
  }
}
