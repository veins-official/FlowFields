class Particle {
    constructor(x, y) { this.position = new Vector2(x, y); this.velocity = new Vector2(0, 0); this.acceleration = new Vector2(0, 0); this.maxSpeed = 4; }

    update() {
        context.strokeStyle = `rgba(${ 255 * (this.position.x / canvas_size.x) }, 255, 255, 1)`;
        
        context.beginPath(); context.moveTo(Math.round(this.position.x), Math.round(this.position.y));
        this.velocity.x += this.acceleration.x; this.velocity.y += this.acceleration.y; this.limit();
        this.position.x += this.velocity.x; this.position.y += this.velocity.y;
        context.lineTo(Math.round(this.position.x), Math.round(this.position.y)); context.closePath(); context.stroke();
        this.acceleration = new Vector2(0, 0);

        if (this.position.x >= canvas_size.x) this.position.x -= canvas_size.x;
        if (this.position.y >= canvas_size.y) this.position.y -= canvas_size.y;
        if (this.position.x <= 0) this.position.x += canvas_size.x;
        if (this.position.y <= 0) this.position.y += canvas_size.y;
    }

    apply_force(force) { this.acceleration.x += force.x; this.acceleration.y += force.y; }

    follow(vectors) {
        let x = Math.floor(this.position.x / (canvas_size.x / noise_size.x));
        let y = Math.floor(this.position.y / (canvas_size.y / noise_size.y));

        let index = x + y * noise_size.x;
        this.apply_force(vectors[index]);
    }

    limit() {
        let length = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
        if (length > this.maxSpeed) {
            this.velocity.x /= length; this.velocity.y /= length;
            this.velocity.x *= this.maxSpeed; this.velocity.y *= this.maxSpeed;
        }
    }
}
