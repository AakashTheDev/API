const express = require('express');
const app = express();
const port = 3000;

// Define a route to send details in JSON format
app.get('/Admin', (req, res) => {
    const userDetails = {
        name: "Aakash R",
        age: 22,
        location: "Karaikal, Pondicherry",
        email: "aakashr2308@gmail.com",
        profession: "Junior Developer",
        website: "https://thenoobdev.com",
    };
    res.json(userDetails);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
