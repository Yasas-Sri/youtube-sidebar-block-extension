# YouTube Sidebar Blocker

A lightweight Chrome extension that hides the recommended videos sidebar on YouTube watch pages, so you can focus on the video you actually chose to watch — without the algorithm pulling you away.

---


## File Structure

```
youtube-sidebar-blocker/
├── manifest.json       # Extension manifest (Manifest V3)
├── content.css         # CSS rules scoped under body class to hide the sidebar
├── content.js          # Content script — applies/removes block class, handles SPA nav
├── popup.html          # Extension popup UI
├── popup.css           # Popup styles (dark YouTube-themed)
├── popup.js            # Popup logic — toggle state and sync with content script
├── icon16.jpeg         # Extension icon (16×16)
├── icon32.jpeg         # Extension icon (32×32)
├── icon48.jpeg         # Extension icon (48×48)
└── icon128.jpeg        # Extension icon (128×128)
```



## Installation (Chrome)

1. Download or clone this repository to a folder on your machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click **Load unpacked**.
5. Select the extension folder.
6. The extension icon will appear in your toolbar.



## Usage

1. Open any YouTube video (e.g. `https://www.youtube.com/watch?v=...`).
2. The recommended sidebar is hidden automatically.
3. Click the extension icon in the toolbar to open the popup.
4. Use the **toggle switch** to enable or disable the sidebar blocking at any time.
   -  Toggle **ON** → sidebar is hidden
   -  Toggle **OFF** → sidebar is restored to normal

Your preference is saved and will persist across browser restarts.



