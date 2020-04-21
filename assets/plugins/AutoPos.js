function AutoPos(media) {
    this.threshold = 0.25
    this.player = media
    this.handleIntersection = this.handleIntersection.bind(this)
}

AutoPos.prototype.run = function (player) {
    this.player = player

    const observer = new IntersectionObserver(this.handleIntersection, {
        threshold: 0.25
    })

    observer.observe(this.player.media)
}

AutoPos.prototype.handleIntersection = function (entries) {
    const entry = entries[0]

    const isVisible = entry.intersectionRatio >= this.threshold
    isVisible ? this.player.play() : this.player.pause();
}

export default AutoPos