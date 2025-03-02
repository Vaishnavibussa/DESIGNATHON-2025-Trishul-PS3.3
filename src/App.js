// import React, { useState } from "react";
// import SleepPattern from "./components/SleepPattern";
// import SentimentAnalysis from "./components/SentimentAnalysis";
// // import SentimentAnalysis from "./components/";
// /* CSS */
// import StreamlitEmbed from "./components/StreamlitEmbed";
// const styles = `
// body {
//   font-family: 'Arial', sans-serif;
//   margin: 0;
//   padding: 0;
//   background: #000;
//   color: #fff;
//   line-height: 1.6;
// }

// .header {
//   background: #fff;
//   color: #000;
//   padding: 2rem 1rem;
//   text-align: center;
// }

// .container {
//   padding: 2rem;
//   max-width: 800px;
//   margin: 0 auto;
// }

// .section {
//   margin-bottom: 2rem;
// }

// .card {
//   background: #222;
//   padding: 1.5rem;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
//   margin-bottom: 1rem;
// }

// .btn {
//   background: #fff;
//   color: black;
//   border: none;
//   padding: 0.75rem;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 1rem;
//   margin-right: 10px;
// }

// .btn:hover {
//   background: #bbb;
// }

// .footer {
//   text-align: center;
//   padding: 1rem;
//   background: #fff;
//   color: #000;
//   margin-top: 2rem;
// }
// `;

// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

// const App = () => {
//   const [showStreamlit, setShowStreamlit] = useState(false);
//   // const [showStreamlit, setShowStreamlit] = useState(false);
//     const [showSentiment, setShowSentiment] = useState(false);
//     const [ showPattern, setShowSleepPattern] = useState(false);
//     return (
//       <div>
//         <header className="header">
//           <h1>MindfulScroll</h1>
//           <p>Break the Doom Scrolling Cycle</p>
//         </header>
//         <div className="container">
//           <section className="section">
//             <div className="card">
//               <h2>About Doom Scrolling</h2>
//               <p>
//                 Doom scrolling is the habit of endlessly consuming negative news and distressing
//                 content on social media. This behavior can lead to increased stress, anxiety, and
//                 reduced productivity. Our mission is to help users regain control by promoting mindful
//                 content consumption and healthier digital habits.
//               </p>
//             </div>
//           </section>
//           <section className="section">
//             <div className="card">
//               <h2>How AI Helps</h2>
//               <p>
//                 Leveraging AI-based sentiment analysis and behavioral pattern recognition, our tool
//                 monitors your content consumption patterns. It detects when you’re exposed to
//                 excessive negative content and provides real-time alerts and personalized
//                 recommendations. This integration of AI not only enhances your digital well-being but
//                 also tailors interventions to your unique browsing behavior.
//               </p>
//             </div>
//           </section>
//            {/* Button to show Sentiment Analysis */}
//           <button className="btn" onClick={() => setShowSentiment(true)}>
//           Sentiment Analysis
//         </button> 
//         <button className="btn" onClick={() => window.location.href = "/index3.html"}>
//   Monitoring
// </button>
// <button className="btn" onClick={() => window.location.href = "/game.html"}>
//   Gamification
// </button>
//       <button className="btn" onClick={() => setShowStreamlit(true)}>
//         Alerts
//       </button>
//       <button className="btn" onClick={() => setShowSleepPattern(!showPattern)}>
//         Analysis
//       </button>
//       <button className="btn" >
//         Time Limit Alerting
//       </button>
//       {showPattern && <SleepPattern/>}
//       {/* <button
//   className="btn"
//   onClick={() => fetch("http://localhost:5000/run-applet")}
// >
//   Launch Applet
// </button> */}


//       {showStreamlit && (
//         <iframe
//           title="Streamlit App"
//           src="http://localhost:8501"
//           width="100%"
//           height="600px"
//           style={{ border: "none", marginTop: "20px" }}
//         />
//       )}
//       {/* {showStreamlit && (
//         <div style={{ width: "100%", height: "80vh", marginTop: "20px" }}>
//           <StreamlitEmbed />
//         </div>
//       )} */}
//       {/* {showStreamlit && <StreamlitEmbed />} */}

// {/* <button className="btn" onClick={() => window.location.href = "/game.html"}>
//   Alerts
// </button> */}

//          {/* <button className="btn" onClick={() => window.location.href = "index3.html"}>Monitoring</button> */}
//         </div>
//          {/* Conditionally render the SentimentAnalysis component */}
//       {showSentiment && <SentimentAnalysis />}
//         <footer className="footer">
//           <p>&copy; 2025 MindfulScroll. All rights reserved.</p>
//         </footer>
//       </div>
//     );
//   };
  
//   export default App;


import React, { useState } from "react";
import SleepPattern from "./components/SleepPattern";
import SentimentAnalysis from "./components/SentimentAnalysis";
import StreamlitEmbed from "./components/StreamlitEmbed";
// import logo from "./assets/logo.png"; // Add your logo here

const styles = `
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: #121212;
  color: #fff;
  line-height: 1.6;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgb(255, 255, 255);
  padding: 1.5rem;
  text-align: center;
}

// .logo {
//   width: 50px;
//   margin-right: 15px;
// }

.container {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
}

.section {
  background: #222;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
}

.btn {
  background: #6200ea;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  margin: 10px 0;
  display: block;
  text-align: center;
}

.btn:hover {
  background: #3700b3;
}

.footer {
  text-align: center;
  padding: 1rem;
  background: #1f1f1f;
  color: #aaa;
  margin-top: 2rem;
  font-size: 0.9rem;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const App = () => {
  const [showStreamlit, setShowStreamlit] = useState(false);
  const [showSentiment, setShowSentiment] = useState(false);
  const [showPattern, setShowSleepPattern] = useState(false);

  return (
    <div>
      <header className="header">
        {/* <img src={logo} alt="MindfulScroll Logo" className="logo" /> */}
        <h1>MindfulScroll</h1>
      </header>
      <div className="container">
        <section className="section">
          <h2>About Doom Scrolling</h2>
          <p>
            Doom scrolling is the habit of endlessly consuming negative news and distressing
            content on social media. Our mission is to help users regain control by promoting mindful
            content consumption and healthier digital habits.
          </p>
        </section>
        
        <section className="section">
          <h2>How AI Helps</h2>
          <p>
            AI-based sentiment analysis and behavioral tracking monitor your content consumption.
            Our tool detects when you’re exposed to excessive negativity and offers real-time alerts
            and personalized recommendations.
          </p>
        </section>

        <section className="section">
          <h2>Features</h2>
          <p>Analyze your social media content using sentiment analysis.</p>
          <button className="btn" onClick={() => setShowSentiment(true)}>Sentiment Analysis</button>
          {showSentiment && <SentimentAnalysis />}
        </section>

        <section className="section">
          <p>Monitor scrolling patterns and detect unhealthy consumption habits.</p>
          <button className="btn" onClick={() => window.location.href = "/index3.html"}>Monitoring</button>
        </section>

        <section className="section">
          <p>Encourage mindful browsing through interactive challenges.</p>
          <button className="btn" onClick={() => window.location.href = "/game.html"}>Gamification</button>
        </section>

        <section className="section">
          <p>Receive real-time AI alerts to minimize excessive doom scrolling.</p>
          <button className="btn" onClick={() => setShowStreamlit(true)}>Alerts</button>
          {showStreamlit && (
            <iframe title="Streamlit App" src="http://localhost:8501" width="100%" height="600px" style={{ border: "none", marginTop: "20px" }} />
          )}
        </section>

        <section className="section">
          <p>Track your sleep patterns and their correlation with digital habits.</p>
          <button className="btn" onClick={() => setShowSleepPattern(!showPattern)}>Sleep Pattern Analysis</button>
          {showPattern && <SleepPattern />}
        </section>

        <section className="section">
          <p>Set limits to prevent excessive screen time and ensure healthy browsing.</p>
          <button className="btn">Time Limit Alerting</button>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2025 MindfulScroll. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

  