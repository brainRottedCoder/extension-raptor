let tabSwitchCount = 0;

// Load saved count on startup
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(["switchCount"], (result) => {
    tabSwitchCount = result.switchCount || 0;
  });
});

// On tab switch
chrome.tabs.onActivated.addListener(() => {
  tabSwitchCount++;
  console.log("Tab switched. Total:", tabSwitchCount);

  // Save to local storage
  chrome.storage.local.set({ switchCount: tabSwitchCount });
});
