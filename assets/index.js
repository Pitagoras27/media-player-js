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
            new AutoPlay(), new AutoPos()
        ]
    }
)

button.onclick = () => {
    mediaPlayer.toogle()
}

muted.onclick = () => {
    mediaPlayer.toogleMuted()
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}