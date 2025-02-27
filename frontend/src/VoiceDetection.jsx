import { useState, useEffect } from "react";
import { Button, Typography, Card } from "@mui/material";
import { FaMicrophone, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

export default function VoiceDetectionDemo() {
  const [isListening, setIsListening] = useState(false);
  const [alertTriggered, setAlertTriggered] = useState(false);
  const [aiMessage, setAiMessage] = useState("");

  useEffect(() => {
    if (isListening) {
      // Simulated voice detection logic
      setTimeout(() => {
        setAlertTriggered(true);
        setAiMessage("Hey there! I noticed some distress. Are you okay? Let's talk.");
      }, 5000);
    }
  }, [isListening]);

  const handleToggleListening = () => {
    setIsListening(!isListening);
    setAlertTriggered(false);
    setAiMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 p-6">
      <Typography variant="h4" className="text-gray-800 font-bold mb-6 text-center">
        AI Voice Detection & Engagement Demo
      </Typography>
      <Card className="p-6 shadow-lg rounded-2xl bg-white text-center max-w-lg">
        <Typography variant="body1" className="text-gray-600 mb-4">
          Our AI listens to background sounds and detects distress. If needed, it will pop up and start a conversation.
        </Typography>
        <Button
          variant="contained"
          color={isListening ? "error" : "primary"}
          onClick={handleToggleListening}
          className="flex items-center justify-center px-6 py-3 rounded-lg shadow-lg"
        >
          <FaMicrophone className="mr-2" /> {isListening ? "Stop Listening" : "Start Listening"}
        </Button>
      </Card>

      {alertTriggered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-10 right-10 bg-white p-4 shadow-xl rounded-2xl flex items-center gap-3 border border-gray-300"
        >
          <FaRobot className="text-blue-500 text-2xl" />
          <Typography variant="body1" className="text-gray-700">{aiMessage}</Typography>
        </motion.div>
      )}
    </div>
  );
}
