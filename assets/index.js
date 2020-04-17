import VideoPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const button = document.querySelector('button')

const mediaPlayer = new VideoPlayer({ el: video, plugins: [new AutoPlay()] })

button.onclick = () => {
    mediaPlayer.toogle()
}
