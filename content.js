
const STORAGE_KEY = "ytSidebarBlockerEnabled";

let isEnabled = true;

const BLOCK_CLASS = "yt-sidebar-blocked";

function applyState() {

  if (!document.body) return;
  if (isEnabled) {
    document.body.classList.add(BLOCK_CLASS);
  } else {
    document.body.classList.remove(BLOCK_CLASS);
  }
}


chrome.storage.sync.get(STORAGE_KEY, (data) => {
  isEnabled = data[STORAGE_KEY] !== false; 
  applyState();
});


chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "SET_ENABLED") {
    isEnabled = message.enabled;
    applyState();
  }
});


let debounceTimer = null;
const observer = new MutationObserver(() => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(applyState, 50);
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: false, 
});
