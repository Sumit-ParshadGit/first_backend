require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000
const my_data  = {
  "login": "Sumit-Parshad",
  "id": 205409131,
  "node_id": "U_kgDODD5Law",
  "avatar_url": "https://avatars.githubusercontent.com/u/205409131?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sumit-Parshad",
  "html_url": "https://github.com/Sumit-Parshad",
  "followers_url": "https://api.github.com/users/Sumit-Parshad/followers",
  "following_url": "https://api.github.com/users/Sumit-Parshad/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sumit-Parshad/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sumit-Parshad/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sumit-Parshad/subscriptions",
  "organizations_url": "https://api.github.com/users/Sumit-Parshad/orgs",
  "repos_url": "https://api.github.com/users/Sumit-Parshad/repos",
  "events_url": "https://api.github.com/users/Sumit-Parshad/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sumit-Parshad/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-03-29T08:26:02Z",
  "updated_at": "2025-03-29T08:28:20Z"
}
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
