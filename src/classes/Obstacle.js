class Obstacle {
    constructor(position, width, height, color) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(
            this.position.x, 
            this.position.y,
            this.width,
            this.height,
        );
    }

    hit(Projectile) {
        const projectilePositionY = 
            Projectile.velocity < 0
                ? Projectile.position.y
                : Projectile.position.y + Projectile.height
        return (
            Projectile.position.x >= this.position.x &&
            Projectile.position.x <= this.position.x + this.width &&
            projectilePositionY >= this.position.y &&
            projectilePositionY <= this.position.y + this.height 
        );
    } 

}

export default Obstacle