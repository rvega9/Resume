const cors = require('cors'); // Import the cors middleware
const express = require('express');
const app = express();
const port = 3000;

// Use CORS with default settings to allow cross-origin requests
app.use(cors());

const resumeData = {
  personalInfo: {
    firstName: "Rowena",
    lastName: "Vega",
    jobTitle: "Student",
    contactNo: "09231418471",
    website: "www.examplesite.com",
    location: "Cebu-PH",
    aboutMe: "I am a 2nd year student taking Bachelor of Science in Information Technology",
    age: "24",
    birthDate: "September 14, 1999",
    address: "#47 Cashra, Lahug, Cebu City, Cebu",
    email: "wingklevega16@gmail.com",
  },

  languages: [
    { language: "English" },
    { language: "Tagalog" },
    { language: "Bisaya" },
  ],
  
  skills: [
    { description: "Web Development", expertiseLevel: "Advanced" },
    { description: "Software Engineer", expertiseLevel: "Advanced" },
  ],
  workExperience: [
    { companyName: "Accenture",  details: "Developed web applications", year: "2016-2018" },
    { companyName: "Accenture",  details: "Developed computer games", year: "2018-2022" },
  ],
  education: [
    { school: "Danao City Central School", year: "2011-2012"},
    { school: "University of Southern Philippines Foundation", year: "2015-2016"},
    { school: "Silliman University", year: "2017-2018"},
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
