# JS Portfolio Assignment

---

This assignment combines the interpersonal and technical lecture modules. This portfolio page will contain their biographies, stories (Maybe in a blog format), resumes, descriptions of the assignments and assessments they completed, any previous projects they built, and professional images of themselves. The students should develop their own user stories and design the portfolio site themselves. Each student will present their portfolio pages along with their stories and experiences through FastTrack'D to the class.

## Goal

---

Students will create their own portfolio page/site and prepare a presentation in which they will cover their experiences at FastTrack'D, their story which they have developed throughout the course, and their technical abilities by using their portfolio sites to effectively guide and support their presentation. This will serve as a great resource for representing each student individually and their experience throughout the lecture modules of FastTrack'D.

## Required Content

---
- [ ] Resume present and available for download
- [ ] Routing either between pages || single scrolling page (using anchors or a some type of navigation)
- [ ] Working links to Github projects or deployed projects
- [ ] About section. (Summary can be taken from your story mining).
- [ ] At least (1) animation existing anywhere on the site (e.g.- sliders, button effects, loading spinner, etc...)
- [ ] Github API specific data - Object structure below
- [ ] ----------------------------
- [ ] Profile picture present, pulled from Github via Github's API
- [ ] Bio underneath profile picture, pulled from Github via Github's API
- [ ] Hire-able status displayed, pulled from Github via Github's API


## The example object will be returned from Github's API
###  https://api.github.com/users/chris-purnell 
---

```json
{
   "login":"chris-purnell",
   "id":74918205,
   "node_id":"MDQ6VXNlcjc0OTE4MjA1",
   "avatar_url":"https://avatars.githubusercontent.com/u/74918205?v=4",
   "gravatar_id":"",
   "url":"https://api.github.com/users/chris-purnell",
   "html_url":"https://github.com/chris-purnell",
   "followers_url":"https://api.github.com/users/chris-purnell/followers",
   "following_url":"https://api.github.com/users/chris-purnell/following{/other_user}",
   "gists_url":"https://api.github.com/users/chris-purnell/gists{/gist_id}",
   "starred_url":"https://api.github.com/users/chris-purnell/starred{/owner}{/repo}",
   "subscriptions_url":"https://api.github.com/users/chris-purnell/subscriptions",
   "organizations_url":"https://api.github.com/users/chris-purnell/orgs",
   "repos_url":"https://api.github.com/users/chris-purnell/repos",
   "events_url":"https://api.github.com/users/chris-purnell/events{/privacy}",
   "received_events_url":"https://api.github.com/users/chris-purnell/received_events",
   "type":"User",
   "site_admin":false,
   "name":"Christopher Purnell",
   "company":null,
   "blog":"",
   "location":"Memphis, TN",
   "email":null,
   "hireable":null,
   "bio":"A wizard coder who casts powerful spells... but also wrong spells.",
   "twitter_username":null,
   "public_repos":7,
   "public_gists":2,
   "followers":0,
   "following":1,
   "created_at":"2020-11-23T14:49:26Z",
   "updated_at":"2021-11-10T21:38:56Z",
   "private_gists":1,
   "total_private_repos":7,
   "owned_private_repos":7,
   "disk_usage":18632,
   "collaborators":0,
   "two_factor_authentication":false,
   "plan":{
      "name":"free",
      "space":976562499,
      "collaborators":0,
      "private_repos":10000
   }
}
```

### The current values are to be pulled from the above response and injected into your portfolio.

```json
{
    "avatar_url": "https://avatars.githubusercontent.com/u/74918205?v=4",
    "is_hireable": null,
    "bio": "A wizard coder who casts powerful spells... but also wrong spells.",
}
```
*iF **is_hireable** is null like the example above, conditionally check this and add your own value such as "Hireable".*

