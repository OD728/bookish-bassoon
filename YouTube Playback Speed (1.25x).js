// ==UserScript==
// @name         YouTube Auto Playback Speed (1.25x)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically sets YouTube video playback to 1.25x speed.
// @author       Dean
// @match        *://*.youtube.com/*
// @exclude      *://*.youtube.com/tv*
// @exclude      *://*.youtube.com/embed/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const TARGET_SPEED = 1.25;

    const setPlaybackSpeed = () => {
        const video = document.querySelector('video');
        if (video && video.playbackRate !== TARGET_SPEED) {
            video.playbackRate = TARGET_SPEED;
        }
    };

    // Trigger 1: Listen for YouTube's custom page navigation event (handles clicking new videos)
    window.addEventListener('yt-navigate-finish', () => {
        // A slight delay ensures the video element has loaded its new source
        setTimeout(setPlaybackSpeed, 500);
    });

    // Trigger 2: Catch the video whenever it actively starts playing
    // (This catches the initial page load and ensures it overrides YouTube's default reset)
    document.addEventListener('play', (event) => {
        if (event.target && event.target.tagName === 'VIDEO') {
            setPlaybackSpeed();
        }
    }, true);

})();