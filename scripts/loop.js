const particles = []; const vectors = Array(noise_size.x * noise_size.y);


for (let i = 0; i < particles_count; i++) { particles.push(new Particle(random_int(1, canvas_size.x - 2), random_int(1, canvas_size.y - 2))); }


function loop() {
    context.fillStyle = `rgba(0, 0, 0, 0.1)`; context.fillRect(0, 0, 1920, 1080);
    // context.clearRect(0, 0, canvas_size.x, canvas_size.y);
    create_noise();
    particles.forEach(particle => { particle.update(); particle.follow(vectors); });
}


setInterval(loop, 16);
