// import { Button, Card, Typography, Container, CircularProgress } from "@mui/material";
// import { FaMicrophone, FaSmile, FaMeh, FaFrown } from "react-icons/fa";
// import { useState } from "react";

// export default function VoiceAnalysisPage() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [sentiment, setSentiment] = useState(null); // Stores detected sentiment

//   const handleVoiceRecord = async () => {
//     if (!isRecording) {
//       setIsRecording(true);
//       setSentiment(null);
//     } else {
//       setIsRecording(false);
//       setIsProcessing(true);

//       // Simulate AI processing delay
//       setTimeout(() => {
//         analyzeSentiment(); // Function to generate random sentiment
//       }, 2000);
//     }
//   };

//   const analyzeSentiment = () => {
//     const moods = ["happy", "neutral", "sad"];
//     const detectedMood = moods[Math.floor(Math.random() * moods.length)];
//     setSentiment(detectedMood);
//     setIsProcessing(false);
//   };

//   const getSentimentIcon = () => {
//     if (sentiment === "happy") return <FaSmile className="text-green-500 text-6xl" />;
//     if (sentiment === "neutral") return <FaMeh className="text-yellow-500 text-6xl" />;
//     if (sentiment === "sad") return <FaFrown className="text-red-500 text-6xl" />;
//     return null;
//   };

//   const getRecommendation = () => {
//     if (sentiment === "happy") {
//       return "You're feeling great! Keep up your positive mindset and try spreading the joy to others.";
//     }
//     if (sentiment === "neutral") {
//       return "You're in a balanced state. Consider taking a short walk or listening to relaxing music.";
//     }
//     if (sentiment === "sad") {
//       return "It seems like you're feeling down. Try deep breathing, meditation, or talking to a trusted friend.";
//     }
//     return "";
//   };

//   return (
//     <Container className="min-h-screen flex flex-col items-center justify-center">
      
//       {/* Title */}
//       <Typography variant="h3" className="text-gray-800 font-bold mb-6">
//         Voice Sentiment Analysis
//       </Typography>

//       {/* Description */}
//       <Typography variant="body1" className="text-gray-600 text-center max-w-2xl mb-6">
//         Speak freely, and our AI will analyze your voice tone to detect emotions and provide personalized recommendations.
//       </Typography>

//       {/* Voice Recording Section */}
//       <Card className="p-10 shadow-lg rounded-3xl bg-white flex flex-col items-center text-center max-w-lg">
//         <FaMicrophone 
//           className={`text-7xl mb-6 transition-all duration-300 ${isRecording ? "text-red-600 animate-pulse" : "text-blue-600"}`} 
//         />

//         <Typography variant="h5" className="text-gray-800 mb-4">
//           {isRecording ? "Recording in Progress..." : "Press the button to start recording"}
//         </Typography>

//         <Button
//           variant="contained"
//           color={isRecording ? "error" : "primary"}
//           onClick={handleVoiceRecord}
//           className="px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform"
//         >
//           {isRecording ? "Stop Recording" : "Start Recording"}
//         </Button>
//       </Card>

//       {/* Processing Indicator */}
//       {isProcessing && (
//         <div className="mt-6 flex flex-col items-center">
//           <CircularProgress color="primary" />
//           <Typography variant="body2" className="text-gray-600 mt-2">Analyzing your voice...</Typography>
//         </div>
//       )}

//       {/* Sentiment Result & Recommendation */}
//       {sentiment && (
//         <Card className="p-8 mt-8 shadow-lg rounded-3xl bg-white flex flex-col items-center text-center max-w-lg">
//           {getSentimentIcon()}
//           <Typography variant="h5" className="text-gray-800 mt-4 capitalize">
//             Detected Mood: {sentiment}
//           </Typography>
//           <Typography variant="body1" className="text-gray-600 mt-4">
//             {getRecommendation()}
//           </Typography>
//         </Card>
//       )}

//       {/* Footer Disclaimer */}
//       <Typography variant="body2" className="text-gray-500 mt-6">
//         Your voice data is processed securely and never stored.
//       </Typography>
//     </Container>
//   );
// }
import { Button, Card, Typography, Container, CircularProgress, TextField } from "@mui/material";
import { FaMicrophone, FaSmile, FaMeh, FaFrown, FaRobot } from "react-icons/fa";
import { useState } from "react";

export default function VoiceAnalysisPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sentiment, setSentiment] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleVoiceRecord = async () => {
    if (!isRecording) {
      setIsRecording(true);
      setSentiment(null);
      setConversation([]);
    } else {
      setIsRecording(false);
      setIsProcessing(true);

      setTimeout(() => {
        analyzeSentiment();
      }, 2000);
    }
  };

  const analyzeSentiment = () => {
    const moods = ["happy", "neutral", "sad"];
    const detectedMood = moods[Math.floor(Math.random() * moods.length)];
    setSentiment(detectedMood);
    setIsProcessing(false);
    addToConversation("AI", getRecommendation(detectedMood));
  };

  const getSentimentIcon = () => {
    if (sentiment === "happy") return <FaSmile className="text-green-500 text-6xl" />;
    if (sentiment === "neutral") return <FaMeh className="text-yellow-500 text-6xl" />;
    if (sentiment === "sad") return <FaFrown className="text-red-500 text-6xl" />;
    return null;
  };

  const getRecommendation = (mood) => {
    if (mood === "happy") {
      return "You're feeling great! Keep up your positive mindset and try spreading joy to others.";
    }
    if (mood === "neutral") {
      return "You're in a balanced state. Consider taking a short walk or listening to relaxing music.";
    }
    if (mood === "sad") {
      return "It seems like you're feeling down. Try deep breathing, meditation, or talking to a trusted friend.";
    }
    return "";
  };

  const addToConversation = (sender, message) => {
    setConversation((prev) => [...prev, { sender, message }]);
  };

  const handleUserInput = () => {
    if (userInput.trim() !== "") {
      addToConversation("You", userInput);
      setTimeout(() => {
        addToConversation("AI", `I hear you! ${userInput}`);
      }, 1500);
      setUserInput("");
    }
  };

  return (
    <Container className="min-h-screen flex flex-col items-center justify-center">
      <Typography variant="h3" className="text-gray-800 font-bold mb-6">
        Voice Sentiment & AI Chat
      </Typography>

      <Typography variant="body1" className="text-gray-600 text-center max-w-2xl mb-6">
        Speak freely, and our AI will analyze your tone and provide personalized support. You can also chat with the AI.
      </Typography>

      <Card className="p-10 shadow-lg rounded-3xl bg-white flex flex-col items-center text-center max-w-lg">
        <FaMicrophone className={`text-7xl mb-6 transition-all duration-300 ${isRecording ? "text-red-600 animate-pulse" : "text-blue-600"}`} />
        <Typography variant="h5" className="text-gray-800 mb-4">
          {isRecording ? "Recording in Progress..." : "Press the button to start recording"}
        </Typography>
        <Button variant="contained" color={isRecording ? "error" : "primary"} onClick={handleVoiceRecord} className="px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform">
          {isRecording ? "Stop Recording" : "Start Recording"}
        </Button>
      </Card>

      {isProcessing && (
        <div className="mt-6 flex flex-col items-center">
          <CircularProgress color="primary" />
          <Typography variant="body2" className="text-gray-600 mt-2">Analyzing your voice...</Typography>
        </div>
      )}

      {sentiment && (
        <Card className="p-8 mt-8 shadow-lg rounded-3xl bg-white flex flex-col items-center text-center max-w-lg">
          {getSentimentIcon()}
          <Typography variant="h5" className="text-gray-800 mt-4 capitalize">
            Detected Mood: {sentiment}
          </Typography>
        </Card>
      )}

      {conversation.length > 0 && (
        <Card className="p-6 mt-8 shadow-lg rounded-3xl bg-white flex flex-col text-center max-w-lg w-full">
          <Typography variant="h6" className="text-gray-800 mb-4">AI Chat</Typography>
          <div className="overflow-y-auto max-h-60 w-full px-4">
            {conversation.map((msg, index) => (
              <div key={index} className={`p-2 rounded-md my-1 ${msg.sender === "AI" ? "bg-blue-100 text-left" : "bg-gray-200 text-right"}`}>
                <strong>{msg.sender}:</strong> {msg.message}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center">
            <TextField fullWidth variant="outlined" size="small" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type a message..." />
            <Button variant="contained" color="primary" className="ml-2" onClick={handleUserInput}>
              Send
            </Button>
          </div>
        </Card>
      )}

      <Typography variant="body2" className="text-gray-500 mt-6">
        Your voice data is processed securely and never stored.
      </Typography>
    </Container>
  );
}
