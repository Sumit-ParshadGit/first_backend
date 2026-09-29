require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res)=>{
    res.send('link: https://youtu.be/pOV4EjUtl70')
})

// app.get('/user',(req,res)=>{
//     res.json(my_data)
// })
app.get('/user/:username', async (req, res) => {
    const username = req.params.username;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
