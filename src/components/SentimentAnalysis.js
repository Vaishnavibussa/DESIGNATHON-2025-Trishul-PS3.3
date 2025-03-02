import React, { useState } from "react";


const SentimentAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  const analyzeSentiment = () => {
    let text = userInput.toLowerCase();
    let positiveWords = ["happy", "great", "good", "amazing", "love", "enjoy", "excited", "wonderful"];
    let negativeWords = ["sad", "bad", "hate", "angry", "depressed", "awful", "frustrated", "upset", "annoyed"];

    let positiveCount = 0, negativeCount = 0;

    positiveWords.forEach(word => { if (text.includes(word)) positiveCount++; });
    negativeWords.forEach(word => { if (text.includes(word)) negativeCount++; });

    if (positiveCount > negativeCount) {
      setResult("😊 Positive Sentiment! Keep up the good vibes!");
    } else if (negativeCount > positiveCount) {
      setResult("😟 Negative Sentiment Detected. Try to focus on positive content.");
    } else {
      setResult("😐 Neutral Sentiment. Your content seems balanced.");
    }
  };

  return (
    <div className="sentiment-container">
      <button className="open-modal" onClick={() => setShowModal(true)}>
        Open Sentiment Analysis
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>AI Sentiment Analysis</h2>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
            <button className="analyze-btn" onClick={analyzeSentiment}>
              Analyze Sentiment
            </button>
            <div className="result">{result}</div>
            <button className="close-modal" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;

/* CSS Styles */

const styles = `
.sentiment-container {
  text-align: center;
  padding: 20px;
}

.open-modal {
  padding: 10px 20px;
  font-size: 16px;
  background: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.open-modal:hover {
  background: #ddd;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #222;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #333;
  color: #fff;
  margin-bottom: 10px;
}

.analyze-btn, .close-modal {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  background: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.analyze-btn:hover, .close-modal:hover {
  background: #ddd;
}

.result {
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: bold;
}`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
