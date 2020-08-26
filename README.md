# Care tracker

[Description](#description) | [Live Website](#live-website) | [Technologies Used](#technologies-used) | [Challenges and Goals](#challenges-and-goals) | [Getting Started](#getting-started) | [How to Run the App](#how-to-run-the-app) | [How to Run the tests](#how-to-run-the-tests) | [Continuous Integration and Delivery](#continuous-integration-and-delivery) | [Next Tasks](#next-tasks)

## Description

A care tracker that displays the percentage of care recipient's moods in a simple pie chart and also lists any events that are to be of concern.

### Justification

I decided that a family member of someone in a care home would most likely want to see:

1. A general overview of the moods of the care recipient
2. A list of any incidents that may be of concern
   I did not list any additional detail in the concern incidents apart from their severity. This was because the notes were not detailed enough or absent. Instead I included the name of the care giver incase the family member wants to contact them. (This care giver was given a random name)

## Live Website

![](./front-end/src/assets/images/webpage.png)

## Tests

I have demonstrated examples of api end point testing using supertest, UI testing with enzyme and snapshots and isolated unit testing with jest.

**_Unit Tests_**
I used Jest to unit test the back end services.

**_UI Tests_**
I used enzyme and jest snapshots to test ui components.

**_API Tests_**
Using supertest and jest I tested the endpoints. Normally I would use a testing database but considering I am only fetching data I used the database given.

## Technologies Used

## Challenges and Goals

For me this tech-test was also a learning exercise as I was previously unfamiliar with Typescript and MySQL.

- [x] Using the official documentation I have gained a firm understanding of how to use interfaces and types to satisfy static checks.
- [x] Using the WorkBench GUI I have improved my sql querying skills.

### Front end

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/introduction/getting-started)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [Styled components](https://www.styled-components.com/)

### Back end

- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

In terminal and desired file location:

```
git clone git@github.com:HarryMumford/mood-recorder-tech-test.git
cd care-tracker
npm i
cd front-end npm i
```

## How to Run the app

- To start dev mode `npm run dev`
- To build `npm run build`
- To start in prod `npm run start`

## How to Run the tests

- Watch all tests `npm run test`

## Continuous Integration and Delivery

## Next Tasks

---

# Challenge

## Context

At Birdie, our app allows care givers to record observations of older adults receiving care, we name them **care recipients**.

These could be anything from the recording of their mood (happy, sad, bored, confused) to what they drank today (1 pint of water).

Each of these observations are recorded as events in our database. Here's an example of a mood observation recorded
in this event format:

```json
{
   "id":"decaa026-2ce5-49cb-aff9-92326b85a98c",
   "event_type":"mood_observation",
   "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
   "timestamp":"2019-04-23T10:53:13+01:00",
   "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
   "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c",
   "mood":"okay",
},
```

Here's a quick explanation of the base properties:

- `id`: Uniquely identifies the observation.
- `event_type`: Title we use to categorise our events.
- `visit_id`: Observations are traditionally observed during a visit between the caregiver (carer) and care recipient. This ID identifies that visit.
- `caregiver_id`: Identifies who the caregiver (carer) was that made this observation.
- `care_recipient_id`: Identifies the care recipient this observation is for.

On top of that, there can be **additional properties** based on the `event_type`:

- `mood` describes the mood of the care recipient as reported by the caregiver

The database (we should have sent you credentials) contains some of these observation events, within the `events` table.

## Challenge

_Display the information to a family member_

#### Your challenge is to clone this repository and create a small web application to visualize these observations, so that looking at it is valuable to a family member of this care recipient.

This could mean presenting it in the following forms:

- A table
- A graph
- A timeline

Or any other way/combination of those. We are test driven here at Birdie so please make sure you write tests to validate your work.

## Deliverables

- Put your code on Github and send us the link to the repository
- Deploying the code to a platform like [Heroku](https://heroku.com) is a great plus.
- **If you are unable to deploy your code please send a recording of the application working**

## Set up

Here's the technical stack this boilerplate was made with:

### Front end

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/introduction/getting-started)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux sagas](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [Styled components](https://www.styled-components.com/)

### Back end

- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Usage

1. Start the API. (Run the following commands within the `backend` folder)

   a. Install the dependencies

   ```
   npm install
   ```

   b. Run the HTTP server (will start on port `8000`)

   ```
   npm run dev
   ```

2. Start the React app (Run the following commands within the `front-end` folder)

   a. Install the dependencies

   ```
   npm install
   ```

   b. Run the application (will start on port `3000`)

   ```
   npm start
   ```

---
