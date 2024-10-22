Disaster Management App
This application is designed to facilitate coordination between rescue agencies during natural or man-made calamities. It provides real-time location tracking of registered agencies and includes a single-click alert system to quickly notify the five nearest relief agencies for rapid response.

Key Features
Rescue Agency Registration: All rescue agencies can register and be visible on the system.
Real-Time Location Display: The app shows the locations of other rescue relief agencies, helping in coordinating rescue efforts during emergencies.
Single-Click Alert System: Instantly shares the user’s location with the five nearest rescue agencies, enabling swift and efficient action.
Robust Dependencies: Uses external APIs and services for real-time data updates, ensuring resilience with a robust network infrastructure.
Project Structure
Client: Handles the frontend of the application, including the user interface and communication with the backend.
Server: Manages the backend, including API calls and database interactions.
Prerequisites
Before you begin, ensure you have the following installed on your machine:

-Node.js
-npm
-Any code editor (e.g., VS Code)


**Installation and Setup**
Clone the repository
--**git clone https://github.com/your-username/disaster-management-app.git**


--**cd disaster-management-app**


Client Setup
Navigate to the client directory:



--**cd client**


Install the required dependencies:


--**npm install**


Start the client:

--**npm start**


Server Setup
Navigate to the server directory:

--**cd ../server**
Install the required dependencies:


--**npm install**


Start the server:


--**npm start**

Usage:
Open the application in your browser.
Register a rescue agency or log in.
Use the map interface to view other nearby agencies in real time.
In case of emergency, use the one-click alert system to notify the five nearest agencies with your location for rapid response.
Dependencies
Client:
React (Frontend Framework)
Axios (For making API requests)
Server:
Node.js with Express (For backend server)
MongoDB (For storing registered agency data)
Contributing
Contributions are welcome! Please fork the repository and create a pull request for review.

License:

This project is licensed under the MIT License.
