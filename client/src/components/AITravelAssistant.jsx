import { useState } from "react";
import "./AITravelAssistant.css";

function AITravelAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Assalam-o-Alaikum! 👋 I'm your ExplorePK Travel Assistant. I can help you choose destinations, packages, and plan your Pakistan trip.",
    },
  ]);

  const quickQuestions = [
    "Best places in Pakistan?",
    "Suggest a honeymoon trip",
    "Best family package?",
  ];

  const handleQuickQuestion = (question) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: question },
      {
        type: "ai",
        text: "Great choice! Our smart travel assistant will soon provide personalized recommendations based on your destination, budget, travel dates, and trip type. ✨",
      },
    ]);
  };

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: message },
      {
        type: "ai",
        text: "Thanks for your question! 🤍 AI-powered personalized travel recommendations will be connected here.",
      },
    ]);

    setMessage("");
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        className="ai-assistant-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Travel Assistant"
      >
        <span className="ai-icon">✦</span>
        <span className="ai-button-text">AI Travel Assistant</span>
      </button>

      {/* AI Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div>
              <h3>✦ ExplorePK AI</h3>
              <span>Smart Travel Assistant</span>
            </div>

            <button
              className="ai-close-button"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="ai-chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`ai-message ${
                  msg.type === "user"
                    ? "ai-user-message"
                    : "ai-bot-message"
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div className="ai-quick-questions">
              <p>Try asking:</p>

              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="ai-chat-input">
            <input
              type="text"
              placeholder="Ask about your trip..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}

export default AITravelAssistant;