class AutoPos {
    constructor() {
        this.thresholds = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }

    run(player) {
        this.player = player

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.thresholds
        })

        observer.observe(this.player.media)
    }

    handleIntersection(entries) {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.thresholds
        isVisible ? this.player.play() : this.player.pause()
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible'
        isVisible ? this.player.play() : this.player.pause()
    }
}

export default AutoPos