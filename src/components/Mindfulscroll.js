import React, { useRef, useState, useEffect } from "react";



const MindfulScroll = () => {
  const [dailyLimit, setDailyLimit] = useState(
    localStorage.getItem("dailyLimit") || ""
  );
  const [screenTime, setScreenTime] = useState("");
  const [negativeContent, setNegativeContent] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("usageHistory")) || []
  );

  useEffect(() => {
    updateDashboard();
  }, []);

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("dailyLimit", dailyLimit);
    alert(`Your daily screen time goal of ${dailyLimit} minutes has been saved!`);
  };

  const handleScreenTimeSubmit = (e) => {
    e.preventDefault();
    let message = "";
    let points = 0;
    
    if (screenTime > 60 || negativeContent > 5) {
      message = "Alert: You've been scrolling too long. Please take a break!";
    } else {
      message = "Good job! You're within healthy limits.";
      points = 10;
    }

    if (dailyLimit && screenTime > dailyLimit) {
      message += ` Also, you have exceeded your daily limit of ${dailyLimit} minutes.`;
    }

    setAlertMessage(message);

    const newEntry = {
      screenTime,
      negativeContent,
      points,
      timestamp: new Date().toLocaleString(),
    };

    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);
    localStorage.setItem("usageHistory", JSON.stringify(updatedHistory));
    updateDashboard();
  };

  const updateDashboard = () => {
    const storedHistory = JSON.parse(localStorage.getItem("usageHistory")) || [];
    setHistory(storedHistory);
  };

  return (
    <div className="mindful-scroll">
      <header className="header">
        <h1>MindfulScroll</h1>
        <p>Break the Doom Scrolling Cycle</p>
      </header>
      <div className="container">
        <section className="card">
          <h2>Set Your Digital Goals</h2>
          <form onSubmit={handleGoalSubmit}>
            <label>Daily Screen Time Limit (minutes):</label>
            <input
              type="number"
              value={dailyLimit}
              onChange={(e) => setDailyLimit(e.target.value)}
              required
            />
            <button type="submit">Save Goal</button>
          </form>
        </section>

        <section className="card">
          <h2>Monitor Your Digital Habits</h2>
          <form onSubmit={handleScreenTimeSubmit}>
            <label>Screen Time (in minutes):</label>
            <input
              type="number"
              value={screenTime}
              onChange={(e) => setScreenTime(e.target.value)}
              required
            />
            <label>Negative Content Count:</label>
            <input
              type="number"
              value={negativeContent}
              onChange={(e) => setNegativeContent(e.target.value)}
              required
            />
            <button type="submit">Submit Data</button>
          </form>
          <div className="alert-message">{alertMessage}</div>
        </section>

        <section className="card">
          <h2>Your Digital Wellness Dashboard</h2>
          <div className="dashboard">
            {history.length === 0 ? (
              <p>No data yet. Submit your digital habits to see your progress.</p>
            ) : (
              <ul>
                {history.map((entry, index) => (
                  <li key={index}>
                    [{entry.timestamp}] Screen Time: {entry.screenTime} mins, Negative Count: {entry.negativeContent}, Points: {entry.points}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>&copy; 2024 MindfulScroll. All rights reserved.</p>
      </footer>
      
      <style>
        {`
          .mindful-scroll {
            font-family: Arial, sans-serif;
            background: #000;
            color: #fff;
            line-height: 1.6;
            text-align: center;
          }
          .header {
            background: #fff;
            color: #000;
            padding: 2rem;
          }
          .container {
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
          }
          .card {
            background: #222;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
            margin-bottom: 1rem;
          }
          .alert-message {
            margin-top: 1rem;
            font-size: 1.2rem;
            color: #ff5555;
          }
          .dashboard {
            background: #333;
            padding: 1rem;
            border-radius: 8px;
          }
          .footer {
            background: #fff;
            color: #000;
            padding: 1rem;
            margin-top: 2rem;
          }
          input, button {
            padding: 0.5rem;
            margin-top: 0.5rem;
            border-radius: 4px;
          }
          button {
            background: #fff;
            color: #000;
            cursor: pointer;
            border: none;
          }
          button:hover {
            background: #bbb;
          }
        `}
      </style>
    </div>
  );
};

export default MindfulScroll;
