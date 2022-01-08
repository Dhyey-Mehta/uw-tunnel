<p align="center"><img src="./src/BigLogo.png" style=":50%; width:256px; height:150px" /></p>
<h3 align="center">❄️Warm Warriors</h3>

Warm Warriors is a web app developed to allow students to find their way around the various buildings on the uWaterloo campus using only the tunnels, bridges and connections that exist between buildings.

In other words, Warm Warriors allows a student to travel across campus without having to deal with harsh Canadian winters 🥶 .

### How does it work?

Floor plans from uWaterloo were surveyed to manually input the location of bridges and connections between buildings into the MongoDB database. The user inputs a starting building and a destination, from which the web app sends an GET request to the backend API. The API then performs BFS (Breadth First Search) and backtracks to find the shortest path between those buildings, and returns that data to the user. Common paths are cached by the database to save on computational time.

### Tech Stack

**Client:** React, Material UI

**Server:** Node.js, Express.js, MongoDB Atlas
