// PLAY MUSIC WHEN BUTTON GETS CLICKED
import { SingletonAudioModule } from "/app/kernel/modules/audio/AudioModule.js";
const soundBtn = document.getElementById("sound-icon-img");
soundBtn.addEventListener('click', () => {
    soundBtn.src = "/app/assets/icons/unmuted-icon.svg";


    SingletonAudioModule.playSource(2);
    console.log(SingletonAudioModule);
});