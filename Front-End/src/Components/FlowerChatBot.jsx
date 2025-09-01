import React, { useState, useEffect } from "react";

export default function FlowerChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "🌸 Hi! I'm your AI Florist. Ask me about bouquets or flowers!" }
  ]);

  // Auto suggestion when chat opens
  useEffect(() => {
    if (isOpen) {
      const autoMessages = [
        "Did you know we have special spring bouquets? 🌷",
        "Try our premium roses bouquet for anniversaries 🌹",
        "Check out seasonal flowers for your home decoration 🌼"
      ];

      autoMessages.forEach((msg, i) => {
        setTimeout(() => {
          setMessages(prev => [...prev, { sender: "bot", text: msg }]);
        }, 2000 * (i + 1)); // delay 2s between messages
      });
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/bouquet-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages([...newMessages, { sender: "bot", text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { sender: "bot", text: "❌ Something went wrong." }]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-pink-600 text-white p-3 flex justify-between items-center">
            <h2 className="font-bold">Bloom & Beyond AI</h2>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-pink-100 self-end ml-auto"
                    : "bg-pink-50 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-lg px-2 py-1"
              placeholder="Ask about bouquets..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-pink-600 text-white px-3 py-1 rounded-lg hover:bg-pink-700"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
