#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec3 particles[250];

void main() {

  float x = gl_FragCoord.xy[0];
	float y = resolution.xy[1] - gl_FragCoord.xy[1];

	float v = 0.0;

	for (int i = 0; i < 250; i++) {
		vec3 ball = particles[i];
		float dx = ball.x - x;
		float dy = ball.y - y;
		float r = ball.z;

    if(r == -1.0) {
      break;
    }

		v += r * r / (dx * dx + dy * dy);
	}

  if(v > 1.0) {
    v = 1.0;
  }

  gl_FragColor = vec4(0.0, v, 0.0, 1.0);
}
