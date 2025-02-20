# Express.js Route Error Handling
This example demonstrates a common error in Express.js route handlers: insufficient error handling and missing HTTP status codes.  The `users/:id` route attempts to retrieve a user based on ID.  However, it lacks checks for invalid IDs and doesn't return appropriate status codes for success or failure.

## Bug
The `bug.js` file showcases the faulty route handler.  It fails to handle cases where the `userId` is not a number or the user is not found, leading to unexpected behavior or crashes. The response for not finding a user is a simple message instead of an HTTP status code.

## Solution
The `bugSolution.js` file shows the corrected version.  It uses `isNaN` to check for invalid numeric IDs, and it sends appropriate HTTP status codes (400 for bad requests and 404 for not found).

## How to run
1.  Install Express.js: `npm install express`
2.  Run either `bug.js` or `bugSolution.js`.
3.  Test with valid and invalid user IDs using a tool such as curl or Postman.