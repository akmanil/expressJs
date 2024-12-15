var express = require("express");
var app = express();
var port = 3000;

app.get('/' , (req ,res) =>{
    res.send("Hello World!");
});
// app.sendFile()
app.get('/about' ,(req ,res) =>{
    res.send('About');
})

app.listen(port ,() =>{
    console.log(`App listening at http://localhost:${port}`)
})