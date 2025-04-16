class SoundEffects {
    constructor () {
        this.shootSounds = [
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            new Audio("src/assets/audios/shoot.mp3"),
            
        ]

        this.hitSounds = [
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            new Audio("src/assets/audios/hit.mp3"),
            
        ]

        this.explosionSound =  new Audio("src/assets/audios/explosion.mp3")
        this.nextLevelSound =  new Audio("src/assets/audios/next_level.mp3")

        this.currentShotSound = 0
        this.currentHitSound = 0

        this.adjustVolumes()
    }

    playShootSound() {
        this.shootSounds[this.currentShotSound].currentTime = 0
        this.shootSounds[this.currentShotSound].play()
        this.currentShotSound = (this.currentShotSound + 1) % this.shootSounds.length
    }

    playHitSound() {
        this.hitSounds[this.currentHitSound].currentTime = 0
        this.hitSounds[this.currentHitSound].play()
        this.currentHitSound = (this.currentHitSound +1 ) % this.hitSounds.length
    }

    playyExplosionSound() {
        this.explosionSound.play()

    }

    playyNextLevelSound() {
        this.nextLevelSound.play()
        
    }

    adjustVolumes() {
        this.hitSounds.forEach(sound => sound.volume = 0.2)
        this.shootSounds.forEach(sound => sound.volume = 0.5)
        this.explosionSound.volume = 0.2
        this.nextLevelSound.volume = 0.4
    }
}

export default SoundEffects