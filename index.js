const cors = require('cors'); // Import the cors middleware
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Use CORS with default settings to allow cross-origin requests
app.use(cors());

// Serve static files including CSS with the correct MIME type
app.use(express.static(path.join(__dirname, 'public'), { 
  // Set the content type explicitly for CSS files
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

const resumeData = {
  personalInfo: {
    firstName: "Rowena",
    lastName: "Vega",
    jobTitle: "Student",
    contactNo: "09231418471",
    website: "www.rvegasite.com",
    location: "Cebu-PH",
    aboutMe: "I am a 3rd year student taking Bachelor of Science in Infromation Technology, here in University of Southern Philippines (Lahug Campus) but at the same time, a working student as a Web Developer in Cebu-PH. I love to be around with people who have the same humor as me. I am a competent person and knows how to manage my time properly.",
  },

  leftInfo: {
    age: "24",
    birthDate: "September 14, 1999",
    address: "#47 Cashra, Lahug, Cebu City, Cebu",
    email: "wingklevega16@gmail.com",
    status: "Single",
    religion: "RC"

  },

  languages: [
    { language: "English" },
    { language: "Cebuano" },
    { language: "Tagalog" },
    { language: "Spanish" },
  ],
  
  skills: [
    { description: "Typing speed of 70 WPM", expertiseLevel: "Advanced" },
    { description: "Microsoft Excel", expertiseLevel: "Advanced" },
  ],
  workExperience: [
    { companyName: "PSITE Central Visayas ICT",  details: "Student Congress", year: "2023" },
    { companyName: "PSITE Central Visayas ICT",  details: "Student Conggress", year: "2024" },
    { companyName: "Seminars within School",  details: "Any Seminars", year: "2022-2024" },
  ],
  education: [
    { school: "Cubacub Elementary School", year: "Kindergarten, 2004-2005"},
    { school: "Danao City Central School", year: "Elementary, 2011-2012"},
    { school: "University of Southern Philippines Foundation", year: "Junior High School, 2015-2016"},
    { school: "Silliman University", year: "Senior High School, 2017-2018"},
    { school: "University of Southern Philippines Foundation", year: "Present"},

  ],

};

// Endpoint for personal information
app.get('/resumeData', (req, res) => {
  res.json(resumeData);
});

// Redirect root URL to /resumeData
app.get('/', (req, res) => {
  res.redirect('/resumeData');
});

app.listen(port, () => {
  console.log(`Web service listening at http://localhost:${port}`);
});
