import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [sleepData, setSleepData] = useState([
    { day: "Monday", hours: 6 },
    { day: "Tuesday", hours: 5 },
    { day: "Wednesday", hours: 7 },
    { day: "Thursday", hours: 4 },
    { day: "Friday", hours: 6 },
    { day: "Saturday", hours: 8 },
    { day: "Sunday", hours: 9 },
  ]);

  const [sleepInsight, setSleepInsight] = useState("");

  useEffect(() => {
    const avgSleep =
      sleepData.reduce((sum, day) => sum + day.hours, 0) / sleepData.length;
    if (avgSleep < 5) {
      setSleepInsight("⚠ Warning! Your sleep is critically low. Aim for at least 7 hours.");
    } else if (avgSleep >= 5 && avgSleep < 7) {
      setSleepInsight("😴 Your sleep is inconsistent. Try to sleep at the same time daily.");
    } else {
      setSleepInsight("✅ Excellent! Your sleep pattern is healthy and balanced.");
    }
  }, [sleepData]);

  const [socialMediaData] = useState([
    { platform: "Instagram", hours: 2 },
    { platform: "YouTube", hours: 3 },
    { platform: "Twitter", hours: 1.5 },
    { platform: "Reddit", hours: 1 },
    { platform: "TikTok", hours: 2.5 },
  ]);

  const totalUsage = socialMediaData.reduce((sum, app) => sum + app.hours, 0);

  const chartDataSleep = {
    labels: sleepData.map((day) => day.day),
    datasets: [
      {
        label: "Hours of Sleep",
        data: sleepData.map((day) => day.hours),
        backgroundColor: sleepData.map((day) =>
          day.hours < 5 ? "#FF4C4C" : day.hours < 7 ? "#FFC107" : "#4CAF50"
        ),
        borderRadius: 6,
      },
    ],
  };

  const chartDataSocial = {
    labels: socialMediaData.map((app) => app.platform),
    datasets: [
      {
        label: "Time Spent (Hours)",
        data: socialMediaData.map((app) => app.hours),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#66BB6A", "#8E44AD"],
      },
    ],
  };

  const styles = {
    dashboardContainer: {
      textAlign: "center",
      padding: "30px",
      background: "#E3F2FD",
      borderRadius: "12px",
      width: "80%",
      margin: "auto",
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      fontFamily: "'Poppins', sans-serif",
    },
    section: {
      background: "#ffffff",
      padding: "25px",
      borderRadius: "12px",
      margin: "25px 0",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    insightBox: {
      background: "#FFEB3B",
      padding: "15px",
      borderRadius: "10px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#333",
      margin: "25px 0",
      borderLeft: "6px solid #F57C00",
      display: "inline-block",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#0277BD",
    },
    subheading: {
      fontSize: "1.4rem",
      marginBottom: "20px",
      color: "#555",
    },
    totalUsage: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      margin: "15px 0",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "#B3E5FC",
      display: "inline-block",
      color: "#0277BD",
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.heading}>📊 Mindful Dashboard</h1>
      <p style={styles.subheading}>Track your Sleep & Social Media Usage</p>

      <div style={styles.section}>
        <h2>🛌 Sleep Pattern Analysis</h2>
        <p>Analyze your weekly sleep habits and get insights.</p>
        <Bar data={chartDataSleep} />
        <div style={styles.insightBox}>
          <h3>📊 Sleep Insight:</h3>
          <p>{sleepInsight}</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2>📱 Social Media Usage</h2>
        <p style={styles.totalUsage}>
          Your total screen time this week: <strong>{totalUsage} hours</strong>
        </p>
        <Doughnut data={chartDataSocial} />
      </div>
    </div>
  );
};

export default Dashboard;