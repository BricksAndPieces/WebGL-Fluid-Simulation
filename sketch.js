let particleManager;
let metaShader;

function preload() {
  metaShader = loadShader('shader/metaballs.vert', 'shader/metaballs.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  shader(metaShader);

  particleManager = new ParticleManager(5, 250);
}

function draw() {
  particleManager.update();

  metaShader.setUniform('resolution', [width, height]);
  metaShader.setUniform('particles', particleManager.toArray());

  // Something to draw to shader on
  rect(0, 0, 0, 0);
}

function mousePressed() {
  for(let i = 0; i < (keyIsDown(17) ? 10 : 1); i++) {
    particleManager.addNew(mouseX-width/2+random(-1, 1), mouseY-height/2+random(-1, 1));
  }
}

// Stop right click context menu
window.addEventListener("contextmenu", e => e.preventDefault());
