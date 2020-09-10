# Project 12-14: Around The U.S. Back End
## William Schutte
## September 2020
Practicum by Yandex
-----

### Overview
This project represents work from the 12th, 13th, and 14th projects for the web-dev course. These projects required setting
up a backend framework using Node.js and Express.js. The server has a custom API connecting the previous front-end React 
project to this back-end project.

    Project 13:
    Project 12: Initial setup of Express.js, file structure, and routing

### Techniques
This server uses Express.js for launching on Local Port 3000.
Internally, the site is designed under BEM methodology.

### Technologies
* Express.js
* Node.js
* Git/GitHub

## Running the Project
`npm run start` — to launch the server.
`npm run dev` — to launch the server with the hot reload feature.

## Revisions:

# Second Review: 9/10/20
* Fixed route files:
  * Removed extra null route handlers
  * Used fs promises for data reading
  * Added status 200 to all successful responses
  * Rewrote file paths using path.join correctly
  * Added error handling to promises that notifies users
  

# First Review: 9/9/20
* Added "Resource not found" message to app.js to catch all errant urls
* Instead of importing JSON data with require(), used Node's fs module and readFile() method
