// import { useState } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CircularProgress,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper
// } from "@mui/material";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { FaHeartbeat, FaBrain, FaUserMd, FaExclamationTriangle } from "react-icons/fa";

// // Sample Mood Data
// const moodData = [
//   { date: "Feb 1", mood: 3 },
//   { date: "Feb 5", mood: 4 },
//   { date: "Feb 10", mood: 2 },
//   { date: "Feb 15", mood: 5 },
//   { date: "Feb 20", mood: 4 },
//   { date: "Feb 25", mood: 3 },
// ];

// export default function Dashboard() {
//   const [meditationProgress, setMeditationProgress] = useState(65);

//   return (
//     <Container sx={{ py: 5 }}>
//       {/* Header */}
//       <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", color: "gray.800", mb: 3 }}>
//         Mental Health Dashboard
//       </Typography>

//       {/* Grid Layout */}
//       <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        
//         {/* Mood Tracking Graph */}
//         <Card sx={{ p: 3, boxShadow: 3 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
//             Mood Tracker
//           </Typography>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={moodData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis domain={[1, 5]} label={{ value: "Mood (1-5)", angle: -90, position: "insideLeft" }} />
//               <Tooltip />
//               <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </Card>

//         {/* Guided Meditation Progress */}
//         <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
//             Meditation Progress
//           </Typography>
//           <CircularProgress variant="determinate" value={meditationProgress} size={100} color="secondary" />
//           <Typography variant="body1" sx={{ mt: 2, color: "gray.600" }}>
//             {meditationProgress}% Completed
//           </Typography>
//           <Button 
//             variant="contained" 
//             color="primary" 
//             sx={{ mt: 2 }} 
//             onClick={() => setMeditationProgress((prev) => Math.min(prev + 5, 100))}
//           >
//             Meditate More
//           </Button>
//         </Card>

//         {/* Voice Sentiment Analysis */}
//         <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
//             Voice Sentiment Analysis
//           </Typography>
//           <FaBrain style={{ fontSize: "4rem", color: "#3b82f6", marginBottom: "10px" }} />
//           <Typography variant="body1" sx={{ color: "gray.600" }}>
//             Detected Mood: <span style={{ fontWeight: "bold", color: "#4f46e5" }}>Calm</span>
//           </Typography>
//         </Card>

//         {/* Self-Assessment Quiz History */}
//         <Card sx={{ p: 3, boxShadow: 3 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
//             Self-Assessment History
//           </Typography>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
//                   <TableCell>Date</TableCell>
//                   <TableCell>Score</TableCell>
//                   <TableCell>Result</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {[{ date: "Feb 10", score: "7/10", result: "Good", color: "green" },
//                   { date: "Feb 15", score: "5/10", result: "Moderate", color: "goldenrod" },
//                   { date: "Feb 20", score: "3/10", result: "Needs Attention", color: "red" }].map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{row.date}</TableCell>
//                     <TableCell>{row.score}</TableCell>
//                     <TableCell sx={{ color: row.color, fontWeight: "bold" }}>{row.result}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Card>

//         {/* Therapist Appointments */}
//         <Card sx={{ p: 3, boxShadow: 3 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
//             Upcoming Appointments
//           </Typography>
//           <ul style={{ color: "gray.600", listStyle: "none", padding: 0 }}>
//             <li>🗓 Feb 28 - Dr. Smith (Online)</li>
//             <li>🗓 Mar 5 - Dr. Johnson (In-Person)</li>
//             <li>🗓 Mar 10 - Mental Wellness Workshop</li>
//           </ul>
//         </Card>

//         {/* Crisis Alert Section */}
//         <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#fee2e2", boxShadow: 3 }}>
//           <FaExclamationTriangle style={{ fontSize: "4rem", color: "#dc2626", marginBottom: "10px" }} />
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "#dc2626", mb: 2 }}>
//             Are You in Crisis?
//           </Typography>
//           <Button 
//             variant="contained" 
//             color="error" 
//             sx={{ fontSize: "1.2rem", padding: "10px 20px" }}
//           >
//             Contact Emergency Help
//           </Button>
//         </Card>

//       </div>
//     </Container>
//   );
// }
import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CircularProgress,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FaHeartbeat, FaBrain, FaUserMd, FaExclamationTriangle } from "react-icons/fa";

// Sample Mood Data
const moodData = [
  { date: "Feb 1", mood: 3 },
  { date: "Feb 5", mood: 4 },
  { date: "Feb 10", mood: 2 },
  { date: "Feb 15", mood: 5 },
  { date: "Feb 20", mood: 4 },
  { date: "Feb 25", mood: 3 },
];

export default function Dashboard() {
  const [meditationProgress, setMeditationProgress] = useState(65);

  return (
    <Container sx={{ py: 5 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", color: "gray.800", mb: 3 }}>
        Mental Health Dashboard
      </Typography>

      {/* Grid Layout */}
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        
        {/* Mood Tracking Graph */}
        <Card sx={{ p: 3, boxShadow: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
            Mood Tracker
          </Typography>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 5]} label={{ value: "Mood (1-5)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Guided Meditation Progress */}
        <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
            Meditation Progress
          </Typography>
          <CircularProgress variant="determinate" value={meditationProgress} size={100} color="secondary" />
          <Typography variant="body1" sx={{ mt: 2, color: "gray.600" }}>
            {meditationProgress}% Completed
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }} 
            onClick={() => setMeditationProgress((prev) => Math.min(prev + 5, 100))}
          >
            Meditate More
          </Button>
        </Card>

        {/* Voice Sentiment Analysis */}
        <Card sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
            Voice Sentiment Analysis
          </Typography>
          <FaBrain style={{ fontSize: "4rem", color: "#3b82f6", marginBottom: "10px" }} />
          <Typography variant="body1" sx={{ color: "gray.600" }}>
            Detected Mood: <span style={{ fontWeight: "bold", color: "#4f46e5" }}>Calm</span>
          </Typography>
        </Card>

        {/* Self-Assessment Quiz History */}
        <Card sx={{ p: 3, boxShadow: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
            Self-Assessment History
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
                  <TableCell>Date</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Result</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[{ date: "Feb 10", score: "7/10", result: "Good", color: "green" },
                  { date: "Feb 15", score: "5/10", result: "Moderate", color: "goldenrod" },
                  { date: "Feb 20", score: "3/10", result: "Needs Attention", color: "red" }].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.score}</TableCell>
                    <TableCell sx={{ color: row.color, fontWeight: "bold" }}>{row.result}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        {/* Therapist Appointments */}
        <Card sx={{ p: 3, boxShadow: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.800", mb: 2 }}>
            Upcoming Appointments
          </Typography>
          <ul style={{ color: "gray.600", listStyle: "none", padding: 0 }}>
            <li>🗓 Feb 28 - Dr. Smith (Online)</li>
            <li>🗓 Mar 5 - Dr. Johnson (In-Person)</li>
            <li>🗓 Mar 10 - Mental Wellness Workshop</li>
          </ul>
        </Card>

        {/* Crisis Alert Section */}
        <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#fee2e2", boxShadow: 3 }}>
          <FaExclamationTriangle style={{ fontSize: "4rem", color: "#dc2626", marginBottom: "10px" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#dc2626", mb: 2 }}>
            Are You in Crisis?
          </Typography>
          <Button 
            variant="contained" 
            color="error" 
            sx={{ fontSize: "1.2rem", padding: "10px 20px" }}
          >
            Contact Emergency Help
          </Button>
        </Card>

      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white text-center py-6 w-full mt-auto">
        <Typography variant="body2">© 2025 Mental Health Assistant. All rights reserved.</Typography>
        <Typography variant="caption" className="mt-2">Emergency Helplines | Privacy Policy | Contact Us</Typography>
      </footer>

    </Container>
  );
}
