"use strict";

import KernelModule from "/app/kernel/modules/kernel/KernelModule.js";

// THIS SCRIPT IS RESPONSIBLE FOR LOADING THE NECESSARY RESOURCES FOR THE APPLICATION'S START UP
const kernel = new KernelModule();

document.getElementById("global-loading-page").style.display = "flex";
await kernel.bootstrap();
console.log("Buffers loaded!");
setTimeout(() => {
    document.getElementById("global-loading-page").style.display = "none";
}, 3000);