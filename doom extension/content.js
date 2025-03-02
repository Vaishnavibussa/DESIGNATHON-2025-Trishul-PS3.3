setInterval(() => {
    chrome.storage.local.get(["timeSpent"], (data) => {
        chrome.runtime.sendMessage({ action: "updateTime", data: data.timeSpent });
    });
}, 5000);
