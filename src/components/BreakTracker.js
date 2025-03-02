import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BreakTracker() {
  const [timeSpent, setTimeSpent] = useState(0);
  const [breaksTaken, setBreaksTaken] = useState(0);
  const [streak, setStreak] = useState(0);
  const [xp, setXP] = useState(0);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 60000); // Increment every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeSpent > 0 && timeSpent % 20 === 0) {
      toast.info("⏳ Time for a break! Step away for 5 minutes!");
    }
  }, [timeSpent]);

  const takeBreak = () => {
    setBreaksTaken(breaksTaken + 1);
    setXP(xp + 10);
    setStreak(streak + 1);

    if (streak % 3 === 0) {
      setBadges((prev) => [...prev, "Break Master 🏆"]);
    }

    toast.success("✅ Break taken! You earned 10 XP!");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        textAlign: "center",
        background: "#f8f8f8",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "24px", color: "#333" }}>🎮 Gamified Break System</h2>
      <p style={{ fontSize: "18px", color: "#555", margin: "10px 0" }}>🕒 Time Spent: {timeSpent} min</p>
      <p style={{ fontSize: "18px", color: "#555", margin: "10px 0" }}>🔥 Streak: {streak} days</p>
      <p style={{ fontSize: "18px", color: "#555", margin: "10px 0" }}>💎 XP: {xp}</p>
      <p style={{ fontSize: "18px", color: "#555", margin: "10px 0" }}>
        🏅 Badges: {badges.join(", ") || "None yet"}
      </p>

      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
        onClick={takeBreak}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Take a Break 🚀
      </button>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
