import { useState } from "react";
import { Card, TextField, Button, Typography, Select, MenuItem } from "@mui/material";
import { FaUserMd, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const therapists = [
  { name: "Dr. Sarah Johnson", specialty: "Anxiety & Depression", location: "New York, NY" },
  { name: "Dr. Mark Lee", specialty: "Couples Therapy", location: "San Francisco, CA" },
  { name: "Dr. Emily Davis", specialty: "Stress Management", location: "Chicago, IL" },
  { name: "Dr. James Smith", specialty: "Trauma & PTSD", location: "Los Angeles, CA" }
];

export default function FindTherapistPage() {
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [filteredTherapists, setFilteredTherapists] = useState(therapists);

  const handleSearch = () => {
    let filtered = therapists;
    if (location) {
      filtered = filtered.filter((therapist) => therapist.location.includes(location));
    }
    if (specialty) {
      filtered = filtered.filter((therapist) => therapist.specialty.includes(specialty));
    }
    setFilteredTherapists(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center">
      {/* Page Header */}
      <section className="text-center py-16 max-w-4xl">
        <motion.h1 className="text-4xl font-bold text-gray-800 mb-4" animate={{ opacity: 1 }}>
          Find a Therapist
        </motion.h1>
        <Typography variant="body1" className="text-gray-600 text-lg mb-6">
          Connect with a certified mental health professional and start your journey toward well-being.
        </Typography>
      </section>

      {/* Search Filters */}
      <div className="flex flex-wrap gap-4 justify-center w-full max-w-3xl p-6 bg-white shadow-md rounded-2xl">
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          InputProps={{ startAdornment: <FaMapMarkerAlt className="text-gray-500 mr-2" /> }}
        />
        <Select
          displayEmpty
          fullWidth
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          variant="outlined"
        >
          <MenuItem value="">All Specialties</MenuItem>
          <MenuItem value="Anxiety & Depression">Anxiety & Depression</MenuItem>
          <MenuItem value="Couples Therapy">Couples Therapy</MenuItem>
          <MenuItem value="Stress Management">Stress Management</MenuItem>
          <MenuItem value="Trauma & PTSD">Trauma & PTSD</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={handleSearch} className="px-6 py-3">
          <FaSearch className="mr-2" /> Search
        </Button>
      </div>

      {/* Therapist List */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
        {filteredTherapists.map((therapist, index) => (
          <Card key={index} className="p-6 flex flex-col items-center text-center shadow-md rounded-2xl bg-white">
            <FaUserMd className="text-blue-500 text-4xl mb-3" />
            <Typography variant="h6" className="text-gray-700 mb-1">{therapist.name}</Typography>
            <Typography variant="body2" className="text-gray-500">{therapist.specialty}</Typography>
            <Typography variant="body2" className="text-gray-500 mb-4">{therapist.location}</Typography>
            <Button variant="contained" color="secondary">Book Appointment</Button>
          </Card>
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
