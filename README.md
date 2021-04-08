# Basic WebGL Fluid Simulation
A basic WebGL fluid simulation based around particles physics and metaballs for rendering.
This project was mostly for me to learn how to write a shader and to learn the glsl language.
The actual physics are not accurate whatsoever.

### Demo
A demo of this repository is availible to be viewed in your [browser](https://bricksandpieces.github.io/WebGL-Fluid-Simulation/)

### Controls
- Left click to spawn a particle.
- Ctrl + Left Click to spawn 10 particles.

(A Max of 250 particles will be spawned)

### Why WebGL?
Doing any pixel operations at a reasonable speed is not easy without leveraging the power of the GPU. Metaballs is a technique of rendering nearby particles in clumps and relies heavily on pixel calculations. Therefore, WebGL is the solution.
