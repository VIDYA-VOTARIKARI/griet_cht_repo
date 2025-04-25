import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input"
import { Button } from "./ui/button";

// Gemini API setup
const API_KEY = import.meta.env.AIzaSyDTziOnlIL24McMhOvtbQW23QqktVgOP2Q;

const GRIET_RULES = [
  "You are a helpful assistant for GRIET College.",
  "Only answer questions related to GRIET.",
  "If asked anything not related to GRIET, politely decline.",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickReplies = [
  "What are the admission requirements?",
  "Tell me about placements",
  "What courses are offered?",
  "How to contact the college?",
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your GRIET Assistant. Ask me anything about our college!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userInput = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userInput }]);
    setIsLoading(true);

    try {
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=" + "AIzaSyDTziOnlIL24McMhOvtbQW23QqktVgOP2Q", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${GRIET_RULES.join(" ")} ${userInput}` }],
            },
          ],
        }),
      });

      const data = await res.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            botReply ??
            "⚠️ Oops! I couldn't generate a response. Please try again or ask something else about GRIET.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ There was an error reaching the server. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (text: string) => setInput(text);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-96 h-[500px] bg-white dark:bg-gray-900 shadow-xl rounded-xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-violet-700 text-white p-4 flex justify-between items-center rounded-t-xl">
              <span className="font-semibold text-lg">GRIET Chatbot</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Chat */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 text-sm rounded-xl ${
                      msg.role === "user"
                        ? "bg-violet-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
                    }`}
                  >
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <Loader2 className="w-5 h-5 animate-spin text-violet-700" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies & Input */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((text) => (
                  <button
                    key={text}
                    className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={() => handleQuickReply(text)}
                  >
                    {text}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 dark:bg-gray-800 dark:text-white"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-violet-600 hover:bg-violet-700 text-white"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-4 bg-violet-700 hover:bg-violet-800 text-white rounded-full shadow-lg"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
