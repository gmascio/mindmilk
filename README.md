# MindMilk


## Project Description

MindMilk is an Airtable and React built app that mimics a social media platform. Users are able to post mental health updates(inclusive of struggles, milestones, methods of mental health relief ,etc..) by clicking on the "Posts Form" in the navigation tab. The home page is poppulated with mental health posts made by users. A "Read More" button will redirect the user into a comments page where they can view comments and make additional comments. The user are able to return to the home page by simply clicking the title : "MindMilk". The users are also able to navigate to a page poppulated with mental health information, perhaps sourced from a mental health API.

## Wireframes

The wireframes below represent the overall structure of the home page containing the feed of mental health posts. A navigation bar will contain archives to posts and a page displaying pertinent mental health information. 

![imageAlt](https://i.ibb.co/1ZWM4sg/Screen-Shot-2021-01-20-at-12-26-34-PM.png)
![imageAlt](https://i.ibb.co/ZxH4SYW/Screen-Shot-2021-01-20-at-12-43-16-PM.png)
![imageAlt](https://i.ibb.co/s6J6sys/Screen-Shot-2021-01-20-at-12-52-17-PM.png)

## Component Heirarchy

![imageAlt](https://i.ibb.co/jypk7ZC/Screen-Shot-2021-01-20-at-12-23-58-PM.png)


## Airtable Data
https://airtable.com/appSKWNbZ0ZkxF5l7

Airtable is returning the data for this base as follows:

```
{
    
    "records": [
        {
            "id": "recvauS5STwMJzy0o",
            "fields": {
                "name": "Ghelila",
                "image": "Max.jpg (https://dl.airtable.com/JYC46O1wRONhtNR1xfhU_Max.jpg)",
                "posts": "Does anyone have recommendations for drinks that alleviate anxiety?"
            },
            "createdTime": "2015-09-25T23:27:41.000Z"
        },
        {
            "id": "recuxR4trLqSqXYc2",
            "fields": {},
            "createdTime": "2015-09-25T03:05:14.000Z"
        },
        {
            "id": "recFkzdkjXuhusX4e",
            "fields": {},
            "createdTime": "2015-09-25T03:05:14.000Z"
        }
    ],
    "offset": "recFkzdkjXuhusX4e"
}

```

### MVP/PostMVP

#### MVP

- Home page with clickable icons that route to each respective feed.
- Get and post mental health posts.
- Use an airtable to track posts and display them in archive page
- Style responsively

#### PostMVP

- Incorporate an API call to poppulate the MentalHealth Feed Page with mental health information.
- Incorporate comments to each post.
- Add an icon for each user.

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Jan 19   | Proposal Approval / Pitches Due            |          |
| Jan 19-21| Component Creation / Get, Set, Delete Data |          |
| Jan 21-22| Perfect Components                         |          |
| Jan 22-25| MVP completion/Post MVP start              |          |
| Jan 25   | Advanced CSS                               |          |
| Jan 27   | Presentatios                               |          |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2.5hrs      |          |        |
| Airtable setup            |    H     |     1hrs      |          |          |
| Clickable icons (Submit Button)          |    H     |      1hrs      |           |          |
| Data population pg 1  (Home)    |    H     |      5hrs      |          |         |
| Data population pg 2  (Archives)    |    H     |      5hrs      |          |         |
| Data population pg 3   (MentalHealth Feed - Post MVP)   |    H     |      3hrs      |           |         |
| Data creation/update pg 1 |    H     |      3hrs      |          |         |
| Data creation/update pg 2 |    H     |      3hrs      |          |          |
| Data creation/update pg 3 |    H     |      3hrs      |          |          |
| Component CSS pg 1        |    H     |      3hrs      |          |         |
| Component CSS pg 2        |    H     |      3hrs      |          |         |
| Component CSS pg 3        |    H     |      3hrs      |         |         |
| Total                     |    H     |    35.5hrs     |          |        |

## Action Priority Matrix

![imageAlt](https://i.ibb.co/W2JZXkr/Screen-Shot-2021-01-20-at-10-03-50-AM.png)


## SWOT Analysis

### Strengths:

I have a good image of what I want my app to look like but incorporating the right functionality might be difficult. Because I have a clear vision of my app, I think CSS styling will be straigh-forward and an exciting aspect of the project.I believe that I have a solid understanding of functional component, therfore, I dont plan on utilizing class components.

### Weaknesses:

CRUD is still a difficult topic for me to perfect. Maneuvering between different components might pose to be hard, but I plan to aim at focusing on a few components so I can drill down the concepts before incorporating additional components. Incorporating buttons and functions as well as actions for these buttons will pose to be quite difficult for me due to my shallow understanding of setting States for new values.

### Opportunities:

I hope that this project will allow me to solidify the knowledge I have accumulated these past two weeks of React. 

### Threats:

I often get distracted with perfecting CSS styling and responsiveness, and at times dedicate too many hours to the styling of my project opposed to functionality. I hope to leave CSS styling last so as to not go down this rabbit hole.