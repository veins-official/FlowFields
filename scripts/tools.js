class Vector2 { constructor(x, y) { this.x = x; this.y = y; } }


function random_int(min, max) { return Math.round(min + Math.random() * (max - min)); }


function create_noise() {
    for (let x = 0; x < noise_size.x; x++) {
        for (let y = 0; y < noise_size.y; y++) {
            const z = simplex.noise(x, y, time);

            vectors[x + y * noise_size.x] = new Vector2(acceleration_rate * Math.cos(deflection_angle * z), acceleration_rate * Math.sin(deflection_angle * z));

            // let color = z * 255; context.fillStyle = `rgb(${ color }, ${ color }, ${ color })`;
            // context.fillRect(x * (canvas_size.x / noise_size.x), y * (canvas_size.y / noise_size.y), (x + 1) * (canvas_size.x / noise_size.x), (y + 1) * (canvas_size.y / noise_size.y));

            // context.strokeStyle = "green"; context.beginPath();
            // context.moveTo((x + 0.5) * (canvas_size.x / noise_size.x) - (canvas_size.x / noise_size.x / 2) * Math.cos(Math.PI * 4 * z), (y + 0.5) * (canvas_size.y / noise_size.y) - (canvas_size.y / noise_size.y / 2) * Math.sin(Math.PI * 4 * z));
            // context.lineTo((x + 0.5) * (canvas_size.x / noise_size.x) + (canvas_size.x / noise_size.x / 2) * Math.cos(Math.PI * 4 * z), (y + 0.5) * (canvas_size.y / noise_size.y) + (canvas_size.y / noise_size.y / 2) * Math.sin(Math.PI * 4 * z));
            // context.closePath(); context.stroke();
        }
    }
    time += time_speed;
}
