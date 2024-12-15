const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//using middleware

app.use(express.static(path.join(__dirname ,"public")));

app.get('/' , (req ,res) =>{
    // res.send("Hello World!");
    res.sendFile(path.join(__dirname ,"index.html"))
});

app.get('/about' ,(req ,res) =>{
    res.send('About');
})

app.listen(port ,() =>{
    console.log(`App listening at http://localhost:${port}`)
})