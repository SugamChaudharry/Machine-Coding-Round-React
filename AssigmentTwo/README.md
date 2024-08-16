# Assignment Details

## Instructions

In this assignment, you will be implementing three tasks based on provided Figma designs. Your goal is to develop the components using React and perform API Integration with [FreeAPI.app](https://freeapi.app/) while ensuring your code aligns precisely with the designs. The tasks are as follows:

1. **Random User Profile**

2. **Random Jokes Tweet**

3. **Cats Listing**

[Link to Figma](https://www.figma.com/design/lZnq8DrxXMN6hdRIUHjKdc/MasterJi-Assignment-2-(React.js)?t=IKE7hy076rBLWyFD-0)

## Evaluation Parameters

The following set of states for the given tasks are to be achieved in order to consider a valid submission:

### Random User Profile:

- **Component Styling:** Match the component styling as per Figma.
- **Refresh Button:** Implement a refresh button to fetch the next set of random data.
- **Loading State:** Implement a loading state for the card (based on your creativity).
- **API Mapping:** Map API response fields as per the Figma design.
- **Hyperlink Actions:** Hyperlinks for location & call should open the actions in a new tab.
- **API to Use:** [https://api.freeapi.app/api/v1/public/randomusers/user/random](https://api.freeapi.app/api/v1/public/randomusers/user/random)

### Random Jokes Tweet:

- **Static Author:** Keep the tweet author details static (e.g., Elon Musk as per example).
- **Random Analytics:** Randomly generate the timestamp, views, date & other analytics of the tweet.
- **Loading State:** Implement a loading state for the card (based on your creativity).
- **Page Reload:** On page reload, replace the tweet card content with new joke data.
- **API to Use:** [https://api.freeapi.app/api/v1/public/randomjokes/joke/random](https://api.freeapi.app/api/v1/public/randomjokes/joke/random)

### Cats Listing:

- **Paginated Horizontal Cards:** Implement a paginated list of horizontal scrolling cards that display cats' information.
- **Loading State:** Implement a loading state for the cards (based on your creativity).
- **API to Use:** [https://api.freeapi.app/api/v1/public/cats?page=1&limit=4](https://api.freeapi.app/api/v1/public/cats?page=1&limit=4)
- **Pagination & Limit:** Decide the pagination and limit to ensure that all cats from the first to the last records in the database are listed.

## Additional Requirements:

All three assignments must be completed inside a single React project under different URL routes for the three tasks respectively:

- `/random-user`
- `/random-jokes`
- `/cats-listing`

The base URL (`/`) must redirect to the first task route of `/random-user`.

Ensure that the branding logo is positioned in the bottom right corner for all tasks. Clicking the logo should open the "chaicode.com" website.

Your React code must precisely match the provided Figma designs.

## Submission Details

On completion of the assignment, you are expected to submit a public GitHub repository, which includes:

- A `README.md` file
- Screenshots
- A basic description
- A link to the hosted website

### Important Note:

- The assignment submission will close on **16 August Friday at 8:30 PM IST**.
- The evaluation window for peer review will be open until **18 August Sunday 11:30 PM IST**.
- Perform code review and submit scores by the deadline.


## Installation
```bash
npm install
npm run dev
```
