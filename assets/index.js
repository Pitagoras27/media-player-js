import videoPlayer from './mediaPlayer.js';

const video = document.querySelector('video')
const button = document.querySelector('button')

const mediaPlayer = new videoPlayer({ el: video })

button.onclick = () => {
    mediaPlayer.toogle()
}
