function AutoPos(media) {
    this.threshold = 0.25
    this.player = media
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)

}

AutoPos.prototype.run = function (player) {
    this.player = player

    const observer = new IntersectionObserver(this.handleIntersection, {
        threshold: 0.25
    })

    observer.observe(this.player.media)
    console.log("asdasdasdasd")
    // document.addEventListener('visibilitychange', () => this.handleVisibilityChange)
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === 'visible') {
            console.log("visible", player)
        } else {
            console.log("hidden")
        }
    });
}

AutoPos.prototype.handleIntersection = function (entries) {
    const entry = entries[0]

    const isVisible = entry.intersectionRatio >= this.threshold
    isVisible ? this.player.play() : this.player.pause();
}

AutoPos.prototype.handleVisibilityChange = function () {
    const isVisible = document.visibilityState === 'visible'
    console.log(document.visibilityState)
    isVisible ? 'this.player.play()' : 'this.player.pause()'
}
export default AutoPos