# Tocca coding challenge

### Explanation
The rest API to fetch user_profiles is `/users/getUserProfiles?pageNumber=1`. The GET Request
takes in the parameter `pageNumber= type Number` starting from index 1. The reason I added this parameter was to let 
the client download all documents since the query is limited to 50 at a time. For 
example, this request will return first 50 documents for index 1, then 51 to 100 documents for index 2 and so on.

### Technologies used for this challenge
Express JS, Node JS, Google Firestone DB

### Steps to run the project

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Download a serviceAccountKey.json from your firebase account and place it in the 
root folder of the project.
4. To run the server, run `npm start`.
5. You can either create mock data or use the route `users/createUserProfile/` to test the `getUserProfiles` API.

