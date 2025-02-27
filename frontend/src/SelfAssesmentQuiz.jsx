import { Button, Card, Typography, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function SelfAssessmentQuiz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center">
      {/* Hero Section */}
      <section className="text-center py-20 max-w-4xl">
        <motion.h1 className="text-4xl font-bold text-gray-800 mb-4" animate={{ opacity: 1 }}>
          Mental Health Self-Assessment Quiz
        </motion.h1>
        <Typography variant="body1" className="text-gray-600 text-lg mb-6">
          This short quiz will help you better understand your mental well-being. Answer each question honestly to get helpful insights.
        </Typography>
      </section>

      {/* Quiz Section */}
      <section className="px-10 pb-20 w-full max-w-4xl">
        <form className="space-y-8">
          {/* Question 1 */}
          <Card className="p-6 space-y-4 shadow-md rounded-2xl bg-white">
            <Typography variant="h6" className="text-gray-700">
              How often do you feel overwhelmed by stress?
            </Typography>
            <FormControl component="fieldset" className="w-full">
              <RadioGroup aria-label="stress-level" name="stress-level">
                <FormControlLabel value="never" control={<Radio />} label="Never" />
                <FormControlLabel value="sometimes" control={<Radio />} label="Sometimes" />
                <FormControlLabel value="often" control={<Radio />} label="Often" />
                <FormControlLabel value="always" control={<Radio />} label="Always" />
              </RadioGroup>
            </FormControl>
          </Card>

          {/* Question 2 */}
          <Card className="p-6 space-y-4 shadow-md rounded-2xl bg-white">
            <Typography variant="h6" className="text-gray-700">
              How do you usually handle feelings of anxiety?
            </Typography>
            <FormControl component="fieldset" className="w-full">
              <RadioGroup aria-label="anxiety-level" name="anxiety-level">
                <FormControlLabel value="avoid" control={<Radio />} label="I avoid thinking about it" />
                <FormControlLabel value="talk" control={<Radio />} label="I talk to someone about it" />
                <FormControlLabel value="exercise" control={<Radio />} label="I exercise to release tension" />
                <FormControlLabel value="breathe" control={<Radio />} label="I practice deep breathing or meditation" />
              </RadioGroup>
            </FormControl>
          </Card>

          {/* Question 3 */}
          <Card className="p-6 space-y-4 shadow-md rounded-2xl bg-white">
            <Typography variant="h6" className="text-gray-700">
              How often do you experience feelings of sadness or depression?
            </Typography>
            <FormControl component="fieldset" className="w-full">
              <RadioGroup aria-label="sadness-level" name="sadness-level">
                <FormControlLabel value="rarely" control={<Radio />} label="Rarely" />
                <FormControlLabel value="sometimes" control={<Radio />} label="Sometimes" />
                <FormControlLabel value="frequently" control={<Radio />} label="Frequently" />
                <FormControlLabel value="always" control={<Radio />} label="Always" />
              </RadioGroup>
            </FormControl>
          </Card>

          {/* Question 4 */}
          <Card className="p-6 space-y-4 shadow-md rounded-2xl bg-white">
            <Typography variant="h6" className="text-gray-700">
              How well do you feel you manage daily stress and challenges?
            </Typography>
            <FormControl component="fieldset" className="w-full">
              <RadioGroup aria-label="stress-management" name="stress-management">
                <FormControlLabel value="very-well" control={<Radio />} label="Very well" />
                <FormControlLabel value="somewhat-well" control={<Radio />} label="Somewhat well" />
                <FormControlLabel value="not-well" control={<Radio />} label="Not very well" />
                <FormControlLabel value="not-at-all" control={<Radio />} label="Not at all" />
              </RadioGroup>
            </FormControl>
          </Card>

          {/* Submit Button */}
          <Box className="text-center">
            <Button variant="contained" color="primary" className="px-6 py-3 rounded-lg shadow-lg mt-6">
              Submit Your Answers
            </Button>
          </Box>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 w-full mt-auto">
        <Typography variant="body2">© 2025 Mental Health Assistant. All rights reserved.</Typography>
        <Typography variant="caption" className="mt-2">Emergency Helplines | Privacy Policy | Contact Us</Typography>
      </footer>
    </div>
  );
}
