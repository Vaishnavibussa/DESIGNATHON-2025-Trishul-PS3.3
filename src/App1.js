/* global chrome */
import React, { useState, useEffect } from "react";

const App = () => {
    const [timeData, setTimeData] = useState({});

    useEffect(() => {
        if (chrome.runtime) {
            // Listen for messages from background script
            chrome.runtime.onMessage.addListener((message) => {
                if (message.action === "updateTime") {
                    console.log("Received Time Data:", message.data);
                    setTimeData(message.data);
                }
            });

            // Fetch stored time when React app loads
            chrome.storage.local.get("timeSpent", (data) => {
                setTimeData(data.timeSpent || {});
            });
        }
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Social Media Time Tracker</h1>
            <h2>Time Spent on Social Media</h2>
            <ul>
                {Object.entries(timeData).map(([site, time]) => (
                    <li key={site}>
                        {site}: {Math.round(time / 60)} minutes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
