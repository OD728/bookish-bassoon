# YouTube Quality-of-Life Userscripts

A collection of lightweight, high-performance Tampermonkey scripts to optimize your YouTube browsing and viewing experience.

---

## Included Scripts

### 1. YouTube 5 Videos Per Row
Forces the homepage and subscription grids to display exactly **5 videos per row**.
* **Zero Lag:** Built using native CSS injection instead of heavy JavaScript loops, preventing page stuttering.
* **Clean UI:** Downscales video title and metadata font sizes so the text fits beautifully inside the smaller thumbnails.

### 2. YouTube Auto Playback Speed (1.25x)
Automatically forces all YouTube videos to play at **1.25x speed** by default.
* **Smart Adjustments:** Only triggers on new video loads. If you manually change the speed mid-video, it won't fight you.
* **Dynamic Loading:** Works seamlessly with YouTube's single-page app architecture when clicking between videos.

---

## Installation

1. Install a userscript manager extension for your browser:
   * [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
   * [Violentmonkey](https://violentmonkey.github.io/)
2. Click on the `.user.js` file you want to install from this repository.
3. Click the **Raw** button in GitHub—your userscript manager should automatically open and prompt you to install it.
4. Refresh YouTube and enjoy!

## License
MIT
