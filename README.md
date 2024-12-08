# Disaster Management App

This application is designed to facilitate coordination between rescue agencies during natural or man-made calamities. It provides real-time location tracking of registered agencies and includes a single-click alert system to quickly notify the five nearest relief agencies for rapid response.

## Key Features

- **Rescue Agency Registration**: All rescue agencies can register and be visible on the system.
  
- **Real-Time Location Display**: The app shows the locations of other rescue relief agencies, helping in coordinating rescue efforts during emergencies.
  
- **Single-Click Alert System**: Instantly shares the user’s location with the five nearest rescue agencies, enabling swift and efficient action.
 
- **Supply Request Management**: Relief centers can request supplies such as rice, bandages, etc., which can be fulfilled by collection centers.

- **Robust Dependencies**: Uses external APIs and services for real-time data updates, ensuring resilience with a robust network infrastructure.

## Project Structure

- **Client**: Handles the frontend of the application, including the user interface and communication with the backend.
  
- **Server**: Manages the backend, including API calls and database interactions.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
  
- npm
  
- Any code editor (e.g., VS Code)

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/disaster-management-app.git
   cd disaster-management-app
   ```

2. **Client Setup:**

   ```bash
   cd client
   npm install
   npm start
   ```

3. **Server Setup:**

   ```bash
   cd ../server
   npm install
   npm start
   ```

## Usage

1. **Access the Application:** Open the application in your browser.
2. **Register or Log In:**
   - **Relief Center Registration:**
     - Go to the "Register" tab and select "Relief Center."
     - Enter the required details and the there is code column so {code is phone no -1) } and click the "Submit" button. Once registered, you can log in as a relief center.
     - After logging in, you will see a "Supply Request" option. Enter the required items (e.g., rice, bandages) and click "Send."
     - The status of the request will initially show as "Pending."
   - **Collection Center Registration:**
     - Go to the "Register" tab and select "Collection Center."
     - Enter your phone number and other required details and click the "Submit" button. Once registered, you can log in as a collection center.
     - After logging in, you will see a list of supply requests made by relief centers. If you have the requested items, click "Accept" to approve the request.
     - Once the items are dispatched, click "Dispatch." The status of the request on the relief center side will update to "Delivered."
3. **Map Interface:** View other nearby agencies in real time.
4. **Emergency Notifications:** Use the one-click alert system (SOS button) to notify the five nearest agencies with your location for rapid response.

## Dependencies

### Client:

- **React** (Frontend Framework)
- **Axios** (For making API requests)

### Server:

- **Node.js with Express** (For backend server)
- **MongoDB** (For storing registered agency data)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for review.

## License

This project is licensed under the MIT License.

