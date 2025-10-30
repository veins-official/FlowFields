const simplex = new Simplex({ distrib: 2, scale: 0.1, octaves: 1, amplitude: 1 });
const canvas_size = new Vector2(1920, 1080);
const noise_size = new Vector2(32, 18);
const deflection_angle = Math.PI * 4;
const acceleration_rate = 0.5;
const particles_count = 2000;
const time_speed = 0.001;
const line_width = 1;


const canvas = document.createElement("canvas"); canvas.width = canvas_size.x; canvas.height = canvas_size.y; document.querySelector("body").appendChild(canvas);
const context = canvas.getContext("2d"); context.imageSmoothingEnabled = false; context.lineWidth = line_width;
let time = 0;
