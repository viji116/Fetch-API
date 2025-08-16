# Fetch-API
This repository contains a beginner-friendly project that demonstrates how to fetch data from a REST API and display it dynamically in a webpage using HTML, CSS, and JavaScript.

The project uses JSONPlaceholder, a free fake API for testing and prototyping, to retrieve user details such as name, email, address, phone, and website. It is designed as a practice project for learning how to work with APIs, JSON, and DOM manipulation.
# Features

1. Fetches user details from a public API (JSONPlaceholder).

2. Displays each user’s:

      1. Full Name

      2. Email

      3. Address (Street & City)

      4. Phone

      5. Website (clickable link)

3. Includes a Reload button to fetch data again without refreshing the entire page.

4. Handles loading states and error messages.

5. Styled using CSS to display user details as cards.
   
# How It Works

1. When the page loads, script.js makes a request to the API:

        https://jsonplaceholder.typicode.com/users


2. The API returns JSON data containing 10 fake users.

3. The data is parsed and displayed in user cards on the webpage.

4. The Reload button allows the user to refetch data without refreshing the whole page.

5. If the API call fails, an error message is shown.

# License

1. This project is created for educational purposes.

2. All API data comes from JSONPlaceholder and is fake training data.
