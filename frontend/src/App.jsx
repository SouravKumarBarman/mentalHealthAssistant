
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";  // Import the home page component
import SelfAssessmentQuiz from "./SelfAssesmentQuiz";  // Import the quiz component
import AISupportChat from "./AiSupport";
import ArticlesAndTips from "./ArticlesandTips";
import FindTherapistPage from "./FindTherapist";
import MoodTrackerPage from "./MoodTracker";
import GuidedMeditation from "./GuidedMeditation";
import VoiceDetectionDemo from "./VoiceDetection";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Quiz Page Route */}
        <Route path="/quiz" element={<SelfAssessmentQuiz />} />
        <Route path="/chat" element={<AISupportChat />} />
        <Route path="/articles" element={<ArticlesAndTips />}/>
        <Route path="/articles/stress-relief" element={<ArticlesAndTips />}/>
        <Route path="/articles/mindfulness" element={<ArticlesAndTips />}/>
        <Route path="/articles/sleep-habits" element={<ArticlesAndTips />}/>
        <Route path="/therapist" element={<FindTherapistPage />}/>
        <Route path="/mood-tracker" element={<MoodTrackerPage />}/>
        <Route path="/meditation" element={<GuidedMeditation />}/>
        <Route path="/voice-detection" element={<VoiceDetectionDemo />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
