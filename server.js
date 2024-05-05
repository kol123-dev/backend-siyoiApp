const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Hello, World!"); // Send a response to the client
});






const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});

