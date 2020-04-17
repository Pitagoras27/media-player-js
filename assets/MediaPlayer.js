function videoPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}

videoPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

videoPlayer.prototype.play = function () {
    this.media.play()
}

videoPlayer.prototype.pause = function () {
    this.media.pause()
}

videoPlayer.prototype.mute = function () {
    this.media.muted = true
}

videoPlayer.prototype.unmute = function () {
    this.media.muted = false
}

videoPlayer.prototype.toogle = function () {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}

export default videoPlayer