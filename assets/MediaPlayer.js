function videoPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this._initPlugins()
}

videoPlayer.prototype._initPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        },
    };

    this.plugins.forEach(plugin => {
        plugin.run(player)
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

videoPlayer.prototype.toogleMuted = function () {
    if (this.media.muted) {
        this.unmute()
    } else {
        this.mute()
    }
}

export default videoPlayer