function videoPlayer(config) {
    this.media = config.el
}

videoPlayer.prototype.play = function () {
    this.media.play()
}

videoPlayer.prototype.pause = function () {
    this.media.pause()
}

videoPlayer.prototype.toogle = function () {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}

export default videoPlayer