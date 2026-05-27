// ==UserScript==
// @name         YouTube 5 Row
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Forces 5 videos per row on YouTube. Optimized for performance by relying strictly on CSS.
// @author       Dean (Modified)
// @match        *://*.youtube.com/*
// @exclude      *://*.youtube.com/tv*
// @exclude      *://*.youtube.com/embed/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const css = `
    /* Force 5 items per row using YouTube's native variable */
    ytd-rich-grid-renderer {
        --ytd-rich-grid-items-per-row: 5 !important;
    }

    /* Bypass default row containers to allow natural wrapping */
    ytd-rich-grid-row, 
    #contents.ytd-rich-grid-row {
        display: contents !important;
    }

    /* Adjust margins so 5 items fit neatly within the container */
    ytd-rich-item-renderer {
        margin-right: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
        margin-left: calc(var(--ytd-rich-grid-item-margin) / 2) !important;
    }

    /* Scale down font sizes to accommodate smaller thumbnail widths */
    #video-title.ytd-rich-grid-media,
    #video-title.ytd-rich-grid-slim-media {
        font-size: 1.4rem !important;
        line-height: 2rem !important;
    }

    #metadata-line.ytd-video-meta-block {
        font-size: 1.2rem !important;
        line-height: 1.8rem !important;
    }
    `;

    // Inject CSS once. The browser's native styling engine will handle dynamic elements automatically.
    const injectCSS = () => {
        if (typeof GM_addStyle !== 'undefined') {
            GM_addStyle(css);
        } else {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.textContent = css;
            // Ensure head exists, otherwise wait for it
            if (document.head) {
                document.head.appendChild(style);
            } else {
                document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
            }
        }
    };

    injectCSS();
})();
