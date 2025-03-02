document.addEventListener("DOMContentLoaded", function () {
    const alertBtn = document.getElementById("alertBtn");

    alertBtn.addEventListener("click", () => {
        chrome.storage.local.get("timeSpent", (data) => {
            let timeData = data.timeSpent || {};
            let message = "Time Spent on Social Media:\n";

            for (const [site, seconds] of Object.entries(timeData)) {
                message += `${site}: ${Math.round(seconds / 60)} minutes\n`;
            }

            alert(message);
        });
    });
});
