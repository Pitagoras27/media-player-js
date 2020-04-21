import VideoPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
import AutoPos from './plugins/AutoPos.js'

const video = document.querySelector('video')
const button = document.querySelector('button')
const muted = document.querySelector('.muted')

const mediaPlayer = new VideoPlayer(
    {
        el: video,
        plugins: [
            new AutoPlay(), new AutoPos(video)
        ]
    }
)

button.onclick = () => {
    mediaPlayer.toogle()
}

muted.onclick = () => {
    mediaPlayer.toogleMuted()
}