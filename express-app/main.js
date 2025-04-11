const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

const user = [
    { id: 101, name: "IIT" },
    { id: 102, name: "NIT" }
];

app.get('/', (req, res) => {
    console.log( "data sent by user",req.query.name );
    res.send("welcome, " +req.query.name)
});

app.get('/submit', (req, res) => {
    const userName=req.query.name|| "Guest";
    res.send()
});


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "home.html")); 
// });
// app.get('/AboutUs', (req, res) => {
//     res.sendFile(path.join(__dirname, "AboutUs.html")); 
// });
// app.get('/contactUs', (req, res) => {
//     res.sendFile(path.join(__dirname, "contactUs.html")); 
// });

// app.get('/about', (req, res) => {
//     res.json({ message: "This is our about page", data: user });
// });



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
