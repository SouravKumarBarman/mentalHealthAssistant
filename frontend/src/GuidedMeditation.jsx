import { useState } from "react";
import { Card, Button, Typography } from "@mui/material";
import { FaPlay, FaStop, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GuidedMeditation() {
  const [isMeditating, setIsMeditating] = useState(false);
  const [feedback, setFeedback] = useState("Follow the video and relax.");

  const handleMeditationStart = () => {
    setIsMeditating(true);
    setFeedback("Analyzing your posture...");
    
    setTimeout(() => {
      setFeedback("Great posture! Keep breathing deeply.");
    }, 3000);
  };

  const handleMeditationStop = () => {
    setIsMeditating(false);
    setFeedback("Session ended. Reflect on how you feel.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-green-50 to-blue-50 p-10">
      <Typography variant="h4" className="mb-4 font-bold text-gray-800 text-center">
        Guided Meditation with AI Assistant
      </Typography>
      
      <Card className="p-6 shadow-xl rounded-2xl bg-white max-w-3xl w-full text-center">
        <div className="relative w-full h-64 bg-black rounded-lg overflow-hidden mb-4">
          {isMeditating ? (
            <video autoPlay loop className="w-full h-full">
              <source src="/meditation-video.mp4" type="video/mp4" />
            </video>
          ) : (
            <Typography className="text-white text-lg absolute inset-0 flex items-center justify-center">
              Click Play to Start Meditation
            </Typography>
          )}
        </div>
        
        <div className="flex justify-center gap-4 mb-4">
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaPlay />}
            onClick={handleMeditationStart}
          >
            Start Meditation
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<FaStop />}
            onClick={handleMeditationStop}
          >
            Stop Session
          </Button>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <Typography variant="h6" className="text-gray-700">
            AI Feedback:
          </Typography>
          <Typography variant="body1" className="text-blue-600">
            {feedback}
          </Typography>
        </div>
      </Card>
    </div>
  );
}
