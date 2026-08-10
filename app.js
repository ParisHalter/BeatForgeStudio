"use strict";

/* =========================================================
   AUDIO ENGINE
========================================================= */

const AudioContextClass =
  window.AudioContext ||
  window.webkitAudioContext;

let audioContext = null;
let masterGain = null;
