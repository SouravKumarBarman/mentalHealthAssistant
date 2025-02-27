// import { useState } from "react";
// import { Card, TextField, Button, Typography } from "@mui/material";
// import { FaRobot, FaUser, FaPaperPlane } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function AISupportChat() {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "AI" }
//   ]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = () => {
//     if (input.trim() === "") return;

//     setMessages([...messages, { text: input, sender: "User" }]);
//     setInput("");

//     // Simulate AI Response
//     setTimeout(() => {
//       setMessages((prev) => [...prev, { text: "I'm here to help. Can you tell me more?", sender: "AI" }]);
//     }, 1000);
//   };

//   return (
//     <Card className="w-full max-w-2xl mx-auto p-6 shadow-xl rounded-2xl bg-white">
//       <Typography variant="h5" className="text-gray-700 text-center mb-4 font-bold">
//         AI Mental Health Chat
//       </Typography>

//       {/* Chat Messages */}
//       <div className="h-80 overflow-y-auto border p-4 rounded-lg bg-gray-100 space-y-4">
//         {messages.map((msg, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`flex items-center ${msg.sender === "AI" ? "justify-start" : "justify-end"}`}
//           >
//             {msg.sender === "AI" && <FaRobot className="text-blue-500 text-xl mr-2" />}
//             <div className={`px-4 py-2 rounded-lg shadow ${msg.sender === "AI" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
//               {msg.text}
//             </div>
//             {msg.sender === "User" && <FaUser className="text-green-500 text-xl ml-2" />}
//           </motion.div>
//         ))}
//       </div>

//       {/* Chat Input */}
//       <div className="flex items-center gap-2 mt-4">
//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//         />
//         <Button variant="contained" color="primary" onClick={handleSendMessage} className="px-4 py-2">
//           <FaPaperPlane />
//         </Button>
//       </div>
//     </Card>
//   );
// }
import { useState } from "react";
import { Card, TextField, Button, Typography } from "@mui/material";
import { FaRobot, FaUser, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AISupportChatPage() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "AI" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "User" }]);
    setInput("");

    // Simulate AI Response
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I'm here to help. Can you tell me more?", sender: "AI" }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center">
      {/* Page Header */}
      <section className="text-center py-16 max-w-4xl">
        <motion.h1 className="text-4xl font-bold text-gray-800 mb-4" animate={{ opacity: 1 }}>
          AI Mental Health Chat
        </motion.h1>
        <Typography variant="body1" className="text-gray-600 text-lg mb-6">
          Talk to our AI for guidance, support, and a listening ear. You're not alone.
        </Typography>
      </section>

      {/* Chat Card */}
      <Card className="w-full max-w-2xl p-6 shadow-xl rounded-2xl bg-white">
        <Typography variant="h5" className="text-gray-700 text-center mb-4 font-bold">
          AI Support Chat
        </Typography>

        {/* Chat Messages */}
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

        {/* Chat Input */}
        <div className="flex items-center gap-2 mt-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button variant="contained" color="primary" onClick={handleSendMessage} className="px-4 py-2">
            <FaPaperPlane />
          </Button>
        </div>
      </Card>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 w-full mt-auto">
        <Typography variant="body2">© 2025 Mental Health Assistant. All rights reserved.</Typography>
        <Typography variant="caption" className="mt-2">Emergency Helplines | Privacy Policy | Contact Us</Typography>
      </footer>
    </div>
  );
}
