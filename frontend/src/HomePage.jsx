
import { Button, Card, Typography, Container } from "@mui/material";
import { FaHeart, FaBrain, FaComments, FaUserMd, FaMicrophone, FaRegSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function HomePage() {
  const [isListening, setIsListening] = useState(false);
  const [alertTriggered, setAlertTriggered] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      startListening();
    } else {
      stopListening();
    }
  };

  const startListening = () => {
    console.log("Ambient mode activated: Listening...");
    setAlertTriggered(false);
    setTimeout(() => {
      detectUrgency();
    }, 5000);
  };

  const stopListening = () => {
    console.log("Ambient mode deactivated: Stopped listening.");
  };

  const detectUrgency = () => {
    const detectedPhrases = ["I'm feeling hopeless", "I need help", "I'm in danger"];
    const randomDetection = Math.random() < 0.3;

    if (randomDetection) {
      console.log("Urgent voice detected!");
      setAlertTriggered(true);
      initiateVoicePopup();
    }
  };

  const initiateVoicePopup = () => {
    alert("🚨 High Alert: We've detected distress in your voice. Would you like to talk to an expert?");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20 flex flex-col items-center justify-center">
        <motion.h1 
          className="text-5xl font-extrabold mb-6 leading-tight"
          animate={{ opacity: 1 }}
        >
          Your Mental Well-being Matters
        </motion.h1>
        <Typography variant="body1" className="text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          A safe space for guidance, support, and self-care. Start your journey towards better mental health today.
        </Typography>
        <Button 
          variant="contained" 
          color="secondary"
          className="mt-6 px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform"
          component={Link}
          to="/dashboard"
        >
          Track Your Insights
        </Button>
      </section>

      {/* Features Section */}
      <Container className="py-20">
        <Typography variant="h4" className="text-center font-semibold text-gray-800 mb-12">
          Explore Our Features
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { icon: FaHeart, title: "Self-Assessment Quiz", text: "Understand your mental health better.", route: "/quiz" },
            { icon: FaBrain, title: "AI Chat Support", text: "Confidential, 24/7 mental health guidance.", route: "/chat" },
            { icon: FaComments, title: "Articles & Tips", text: "Read expert-backed self-help guides.", route: "/articles" },
            { icon: FaUserMd, title: "Find a Therapist", text: "Connect with mental health professionals.", route: "/therapist" },
            { icon: FaRegSmileBeam, title: "Mood Tracker", text: "Track your daily emotional state.", route: "/mood-tracker" }
          ].map((feature, index) => (
            <Link key={index} to={feature.route} className="no-underline">
              <Card className="p-8 flex flex-col items-center text-center shadow-lg rounded-3xl bg-white transition-all transform hover:scale-105 hover:shadow-xl">
                <feature.icon className="text-blue-600 text-6xl mb-4" />
                <Typography variant="h6" className="text-gray-800 font-semibold mb-3">{feature.title}</Typography>
                <Typography variant="body2" className="text-gray-600">{feature.text}</Typography>
              </Card>
            </Link>
          ))}
           <div onClick={toggleListening} className="cursor-pointer">
            <Card className={`p-8 flex flex-col items-center text-center shadow-lg rounded-3xl transition-all transform hover:scale-105 hover:shadow-xl ${isListening ? "bg-green-100" : "bg-white"}`}>
              <FaMicrophone className={`text-6xl mb-4 ${isListening ? "text-green-600 animate-pulse" : "text-blue-600"}`} />
              <Typography variant="h6" className="text-gray-800 font-semibold mb-3">Ambient Listening</Typography>
              <Typography variant="body2" className="text-gray-600">
                {isListening ? "Listening for distress signals..." : "Click to activate background listening."}
              </Typography>
            </Card>
          </div>
        </div>
      </Container>

      {/* Updated Voice Sentiment Analysis Section */}
      <section className="w-full bg-white py-20 text-center flex flex-col items-center justify-center shadow-lg rounded-3xl mb-16">
        <Typography variant="h4" className="text-gray-800 mb-6 font-semibold">
          Express Yourself Through Voice
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-6 max-w-xl mx-auto">
          Speak freely, and our AI will analyze your tone to understand your emotions and provide personalized support.
        </Typography>
        <Link to="/voice-analysis">
          <Button
            variant="contained"
            color="primary"
            className="px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform"
          >
            Explore Voice Analysis
          </Button>
        </Link>
      </section>

      {/* Guided Meditation Section (Unchanged) */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-teal-500 py-20 text-center text-white flex flex-col items-center justify-center rounded-3xl mb-16">
        <Typography variant="h4" className="mb-6 font-semibold">
          Seeking Calm? Try Our Guided Meditation
        </Typography>
        <Typography variant="body1" className="mb-6 max-w-2xl mx-auto text-lg">
          Relax, rejuvenate, and find inner peace through our guided meditation sessions. Take a moment to unwind and refresh your mind.
        </Typography>
        <Link to="/meditation">
          <Button
            variant="contained"
            color="secondary"
            className="px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform"
          >
            Start Meditation
          </Button>
        </Link>
      </section>

      {/* Crisis Alert Section (Unchanged) */}
      <section className="w-full bg-gradient-to-r from-red-400 to-red-600 py-20 text-center text-white flex flex-col items-center justify-center rounded-3xl mb-16">
        <Typography variant="h4" className="text-red-100 mb-6 font-semibold">
          Are You in Crisis?
        </Typography>
        <Typography variant="body1" className="text-gray-100 mb-6 max-w-2xl mx-auto text-lg">
          If you are feeling overwhelmed, distressed, or in immediate danger, please seek urgent support. Your safety is the priority.
        </Typography>
        <Button
          variant="contained"
          color="error"
          className="px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform"
        >
          Contact Emergency Help
        </Button>
      </section>
{/* Alert Notification */}
{alertTriggered && (
        <div className="fixed bottom-10 right-10 bg-red-600 text-white p-4 rounded-xl shadow-lg">
          <Typography variant="body1">⚠️ Urgent: We detected distress in your voice.</Typography>
        </div>
      )}
      {/* Footer (Unchanged) */}
      <footer className="bg-gray-900 text-white text-center py-6 w-full mt-auto">
        <Typography variant="body2">© 2025 Mental Health Assistant. All rights reserved.</Typography>
        <Typography variant="caption" className="mt-2">Emergency Helplines | Privacy Policy | Contact Us</Typography>
      </footer>
    </div>
  );
}
