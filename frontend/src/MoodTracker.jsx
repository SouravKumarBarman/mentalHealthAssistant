import { useState } from "react";
import { Card, Button, Typography } from "@mui/material";
import { FaSmile, FaMeh, FaFrown, FaSadCry, FaLaugh } from "react-icons/fa";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const moodOptions = [
  { mood: "Happy", icon: <FaLaugh className="text-yellow-500 text-4xl" />, value: 5 },
  { mood: "Neutral", icon: <FaMeh className="text-gray-500 text-4xl" />, value: 3 },
  { mood: "Sad", icon: <FaFrown className="text-blue-500 text-4xl" />, value: 2 },
  { mood: "Very Sad", icon: <FaSadCry className="text-red-500 text-4xl" />, value: 1 }
];

const motivationalQuotes = {
  Happy: "Keep spreading positivity! 😊",
  Neutral: "Stay balanced, you're doing great! 🌿",
  Sad: "It's okay to feel down sometimes. Take care. 💙",
  "Very Sad": "You're not alone. Reach out to someone. ❤️"
};

export default function MoodTrackerPage() {
  const [moodHistory, setMoodHistory] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelection = (mood) => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood: mood.mood,
      value: mood.value
    };
    setMoodHistory([...moodHistory, newEntry]);
    setSelectedMood(mood.mood);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center">
      {/* Page Header */}
      <section className="text-center py-16 max-w-4xl">
        <motion.h1 className="text-4xl font-bold text-gray-800 mb-4" animate={{ opacity: 1 }}>
          Mood Tracker
        </motion.h1>
        <Typography variant="body1" className="text-gray-600 text-lg mb-6">
          Track your daily emotions and understand your mental well-being over time.
        </Typography>
      </section>

      {/* Mood Selection */}
      <section className="flex flex-wrap gap-4 justify-center w-full max-w-3xl p-6 bg-white shadow-md rounded-2xl">
        {moodOptions.map((mood, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer flex flex-col items-center"
            onClick={() => handleMoodSelection(mood)}
          >
            {mood.icon}
            <Typography variant="body2" className="text-gray-700 mt-2">
              {mood.mood}
            </Typography>
          </motion.div>
        ))}
      </section>

      {/* Motivational Quote */}
      {selectedMood && (
        <Card className="p-6 mt-6 shadow-md rounded-2xl bg-white max-w-md text-center">
          <Typography variant="h6" className="text-gray-700">
            {motivationalQuotes[selectedMood]}
          </Typography>
        </Card>
      )}

      {/* Mood Trends Chart */}
      {moodHistory.length > 0 && (
        <section className="w-full max-w-3xl p-6 mt-6 bg-white shadow-md rounded-2xl">
          <Typography variant="h6" className="text-gray-700 text-center mb-4">
            Your Mood Trends
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 w-full mt-auto">
        <Typography variant="body2">© 2025 Mental Health Assistant. All rights reserved.</Typography>
        <Typography variant="caption" className="mt-2">Emergency Helplines | Privacy Policy | Contact Us</Typography>
      </footer>
    </div>
  );
}
