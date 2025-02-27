
// import { Card, Typography, Button } from "@mui/material";
// import { motion } from "framer-motion";

// const articles = [
//   {
//     title: "5 Ways to Reduce Stress and Anxiety",
//     description: "Discover simple yet effective techniques to manage daily stress and improve mental well-being.",
//     image: "https://source.unsplash.com/400x250/?meditation,relaxation",
//     link: "/articles/stress-relief",
//   },
//   {
//     title: "The Power of Mindfulness Meditation",
//     description: "Learn how mindfulness meditation can help you stay present and achieve emotional balance.",
//     image: "https://source.unsplash.com/400x250/?mindfulness,calm",
//     link: "/articles/mindfulness",
//   },
//   {
//     title: "Building Healthy Sleep Habits",
//     description: "Struggling with sleep? Here’s how to improve your sleeping patterns for better mental health.",
//     image: "https://source.unsplash.com/400x250/?sleep,rest",
//     link: "/articles/sleep-habits",
//   },
//   {
//     title: "How to Manage Negative Thoughts",
//     description: "Practical strategies to shift negative thinking and build a positive mindset.",
//     image: "https://source.unsplash.com/400x250/?positivity,thoughts",
//     link: "/articles/negative-thoughts",
//   },
//   {
//     title: "Nutrition & Mental Health",
//     description: "Understand how diet plays a crucial role in emotional well-being and cognitive function.",
//     image: "https://source.unsplash.com/400x250/?healthy-food,brain",
//     link: "/articles/nutrition",
//   },
// ];

// export default function ArticlesAndTips() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center">
//       {/* Section Header */}
//       <section className="text-center py-20 max-w-4xl">
//         <motion.h1 className="text-4xl font-bold text-gray-800 mb-4" animate={{ opacity: 1 }}>
//           Expert Articles & Self-Care Tips
//         </motion.h1>
//         <Typography variant="body1" className="text-gray-600 text-lg mb-6">
//           Explore expert-backed self-help guides to enhance your emotional well-being.
//         </Typography>
//       </section>

//       {/* Articles Grid */}
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pb-20">
//         {articles.map((article, index) => (
//           <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Card className="p-6 flex flex-col items-center text-center shadow-md rounded-2xl bg-white">
//               <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-lg mb-4" />
//               <Typography variant="h6" className="text-gray-700 mb-2">{article.title}</Typography>
//               <Typography variant="body2" className="text-gray-600 mb-3">{article.description}</Typography>
//               <Button variant="contained" color="primary" href={article.link}>
//                 Read More
//               </Button>
//             </Card>
//           </motion.div>
//         ))}
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center py-6 w-full mt-auto">
//         <Typography variant="body2">© 2025 Mental Health Assistant. All rights reserved.</Typography>
//         <Typography variant="caption" className="mt-2">Emergency Helplines | Privacy Policy | Contact Us</Typography>
//       </footer>
//     </div>
//   );
// }
import { Card, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const articles = [
  {
    title: "5 Ways to Reduce Stress and Anxiety",
    description: "Discover simple yet effective techniques to manage daily stress and improve mental well-being.",
    link: "/articles/stress-relief",
  },
  {
    title: "The Power of Mindfulness Meditation",
    description: "Learn how mindfulness meditation can help you stay present and achieve emotional balance.",
    link: "/articles/mindfulness",
  },
  {
    title: "Building Healthy Sleep Habits",
    description: "Struggling with sleep? Here’s how to improve your sleeping patterns for better mental health.",
    link: "/articles/sleep-habits",
  },
  {
    title: "How to Manage Negative Thoughts",
    description: "Practical strategies to shift negative thinking and build a positive mindset.",
    link: "/articles/negative-thoughts",
  },
  {
    title: "Nutrition & Mental Health",
    description: "Understand how diet plays a crucial role in emotional well-being and cognitive function.",
    link: "/articles/nutrition",
  },
];

export default function ArticlesAndTips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center">
      {/* Section Header */}
      <section className="text-center py-20 max-w-4xl">
        <motion.h1 className="text-4xl font-bold text-gray-800 mb-4" animate={{ opacity: 1 }}>
          Expert Articles & Self-Care Tips
        </motion.h1>
        <Typography variant="body1" className="text-gray-600 text-lg mb-6">
          Explore expert-backed self-help guides to enhance your emotional well-being.
        </Typography>
      </section>

      {/* Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pb-20">
        {articles.map((article, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Card 
              className="p-8 flex flex-col items-center text-center shadow-xl rounded-xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl"
              style={{ maxWidth: "380px" }}
            >
              <Typography variant="h6" className="text-gray-800 mb-4 font-semibold">{article.title}</Typography>
              <Typography variant="body2" className="text-gray-600 mb-4">{article.description}</Typography>
              <Button 
                variant="contained" 
                color="primary" 
                href={article.link} 
                className="px-8 py-3 text-lg rounded-full transition-transform transform hover:scale-105"
              >
                Read More
              </Button>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 w-full mt-auto">
        <Typography variant="body2">© 2025 Mental Health Assistant. All rights reserved.</Typography>
        <Typography variant="caption" className="mt-2">Emergency Helplines | Privacy Policy | Contact Us</Typography>
      </footer>
    </div>
  );
}
