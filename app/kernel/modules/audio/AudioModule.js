export class AudioModule {

    audioContext;
    sourceList;

    constructor() {
        this.audioContext = new AudioContext();
    }

    // PLAYS THE REQUESTED AUDIO IN THE ASSETS ARRAY
    playSource(index) {
        this.sourceList[index].connect(this.audioContext.destination);
        this.sourceList[index].start();
    } 

    // RETURNS THE AUDIO SOURCE
    loadFileSource(buffer) {
        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        return source;
    }

    // RETURNS AN ARRAY OF AUDIO SOURCES
    loadFileSources(bufferList) {
        let sourceList = [];
        bufferList.forEach((buffer) => {
            sourceList.push(this.loadFileSource(buffer));
        });
        this.sourceList = sourceList;
        return this.sourceList;
    }

    // RETURNS THE AUDIO FILE BUFFER
    async loadFileBuffer(url) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return await this.audioContext.decodeAudioData(arrayBuffer);
    }

    // RETURN AN ARRAY OF AUDIO FILE BUFFERS
    async loadFileBuffers(urlList) {
        let bufferList = [];
        for(let url of urlList) {
            bufferList.push(await this.loadFileBuffer(url));
        }
        return bufferList;
    }
}

export const SingletonAudioModule = new AudioModule(); 