const STORAGE_KEY = "ytSidebarBlockerEnabled";
const toggle = document.getElementById("toggle");
const statusLabel = document.getElementById("status-label");


chrome.storage.sync.get(STORAGE_KEY, (data) => {
  const enabled = data[STORAGE_KEY] !== false; 
  toggle.checked = enabled;
  updateLabel(enabled);
});


toggle.addEventListener("change", () => {
  const enabled = toggle.checked;
  updateLabel(enabled);

  
  chrome.storage.sync.set({ [STORAGE_KEY]: enabled });

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "SET_ENABLED",
        enabled: enabled,
      });
    }
  });
});

function updateLabel(enabled) {
  statusLabel.textContent = enabled ? "Enabled" : "Disabled";
  statusLabel.style.color = enabled ? "#ff4444" : "#888888";
}
