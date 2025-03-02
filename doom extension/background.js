let timeSpent = {};
let activeTab = null;
let lastUpdateTime = Date.now();

const trackedSites = ["youtube.com", "instagram.com", "twitter.com", "tiktok.com", "facebook.com"];

function updateTime() {
    console.log("Running updateTime function..."); // Debugging

    let currentTime = Date.now();
    let timeDelta = Math.floor((currentTime - lastUpdateTime) / 1000); 

    if (activeTab && trackedSites.some(site => activeTab.includes(site))) {
        timeSpent[activeTab] = (timeSpent[activeTab] || 0) + timeDelta;
        chrome.storage.local.set({ timeSpent });

        console.log(`Updated time for ${activeTab}: ${timeSpent[activeTab]} seconds`);
    } else {
        console.log("No active social media tab detected.");
    }

    lastUpdateTime = currentTime;
    
    // Send updated time data
    chrome.runtime.sendMessage({ action: "updateTime", data: timeSpent });
}


// Detect tab switches
chrome.tabs.onActivated.addListener(activeInfo => {
    updateTime();
    chrome.tabs.get(activeInfo.tabId, tab => {
        if (tab.url) {
            activeTab = new URL(tab.url).hostname;
            console.log(`Switched to tab: ${activeTab}`);
        }
    });
    lastUpdateTime = Date.now();
});

// Detect URL changes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        updateTime();
        activeTab = new URL(changeInfo.url).hostname;
        lastUpdateTime = Date.now();
        console.log(`Updated tab URL: ${activeTab}`);
    }
});

// Run update function every 5 seconds
setInterval(updateTime, 5000);
