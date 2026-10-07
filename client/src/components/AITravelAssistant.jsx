import { useState } from "react";
import "./AITravelAssistant.css";

function AITravelAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

  const askAssistant = async (question) => {
    if (!question.trim() || loading) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: question },
    ]);

    setLoading(true);

    try {
      const response = await fetch(
  "https://explorepk-travels-backend.vercel.app/api/ai",
  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Assistant unavailable");
      }

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Travel Assistant Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Sorry! I'm having trouble connecting to the travel assistant. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickQuestion = (question) => {
    askAssistant(question);
  };

  const handleSend = () => {
    if (!message.trim() || loading) return;

    const currentMessage = message;
    setMessage("");

    askAssistant(currentMessage);
  };

  return (
    <>
      <button
        className="ai-assistant-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Travel Assistant"
      >
           <span className="ai-icon">🤖</span>
        <span className="ai-button-text">AI Travel Assistant</span>
      </button>

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

            {loading && (
              <div className="ai-message ai-bot-message">
                Thinking... ✨
              </div>
            )}

            <div className="ai-quick-questions">
              <p>Try asking:</p>

              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  disabled={loading}
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
              disabled={loading}
            />

            <button onClick={handleSend} disabled={loading}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AITravelAssistant;