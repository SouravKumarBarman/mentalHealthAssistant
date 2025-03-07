import { useState } from "react";
import { Card, TextField, Button, Typography } from "@mui/material";
import { FaRobot, FaUser, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AISupportChatPage() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "AI" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "User" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response, sender: "AI" }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [...prev, { text: "Sorry, something went wrong.", sender: "AI" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center">
      <section className="text-center py-16 max-w-4xl">
        <motion.h1 className="text-4xl font-bold text-gray-800 mb-4" animate={{ opacity: 1 }}>
          AI Mental Health Chat
        </motion.h1>
        <Typography variant="body1" className="text-gray-600 text-lg mb-6">
          Talk to our AI for guidance, support, and a listening ear. You're not alone.
        </Typography>
      </section>

      <Card className="w-full max-w-2xl p-6 shadow-xl rounded-2xl bg-white">
        <Typography variant="h5" className="text-gray-700 text-center mb-4 font-bold">
          AI Support Chat
        </Typography>

        <div className="h-96 overflow-y-auto border p-4 rounded-lg bg-gray-100 space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center ${msg.sender === "AI" ? "justify-start" : "justify-end"}`}
            >
              {msg.sender === "AI" && <FaRobot className="text-blue-500 text-xl mr-2" />}
              <div className={`px-4 py-2 rounded-lg shadow ${msg.sender === "AI" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                {msg.text}
              </div>
              {msg.sender === "User" && <FaUser className="text-green-500 text-xl ml-2" />}
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={loading}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            className="px-4 py-2"
            disabled={loading}
          >
            {loading ? "..." : <FaPaperPlane />}
          </Button>
        </div>
      </Card>

      <footer className="bg-gray-800 text-white text-center py-6 w-full mt-auto">
        <Typography variant="body2">© 2025 Mental Health Assistant. All rights reserved.</Typography>
        <Typography variant="caption" className="mt-2">Emergency Helplines | Privacy Policy | Contact Us</Typography>
      </footer>
    </div>
  );
}