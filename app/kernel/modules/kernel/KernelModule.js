import { musicList } from "/app/assets/AssetsModule.js";
import { SingletonAudioModule } from "/app/kernel/modules/audio/AudioModule.js";

export default class KernelModule {

    musicList;

    constructor() {
        // LOAD MUSIC LIST
        this.musicList = musicList;
    }

    async bootstrap() {
        // LOAD AUDIO BUFFERS
        const buffersList = await SingletonAudioModule.loadFileBuffers(this.musicList);
        SingletonAudioModule.loadFileSources(buffersList);
    }

}