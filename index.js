const cors = require('cors'); // Import the cors middleware
const express = require('express');
const app = express();
const port = 3000;

// Use CORS with default settings to allow cross-origin requests
app.use(cors());

const resumeData = {
  personalInfo: {
    name: "Rowena L. Vega",
    age: "24",
    birthDate: "September 14, 1999",
    contactNo: "09231418471",
    address: "#47 Cashra, Lahug, Cebu City, Cebu",
    email: "wingklevega16@gmail.com",
  },
  skills: [
    { description: "Web Development", expertiseLevel: "Advanced" },
    { description: "Software Engineer", expertiseLevel: "Advanced" },
  ],
  workExperience: [
    { companyName: "Accenture",  details: "Developed web applications", year: "2018-2020" },
  ],
  education: [
    { school: "University of Southern Philippines Foundation ", year: "Present", address: "Lahug Cebu City" },
    { school: "Immaculata High School", year: "2015", address: "Baclayon Bohol" },
    { school: "Baclayon Central Elementary School", year: "2010-2011", address: "Baclayon Bohol" },
  ],
  personalReferences: [
    { name: "Jane", relationship: "Colleague", contactNumber: "0999999999" },
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
