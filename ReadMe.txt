
# Globetrotter

Globetrotter is an interactive web-based game where users can guess destinations based on given clues, challenge friends, and track their scores. The app is designed to be fun and educational, providing instant feedback and fun facts about each destination.

## Features

- Random Destinations:** Users are presented with a random destination along with 1-2 clues.
- Multiple Choice:** Users can select from multiple possible destinations.
- Immediate Feedback:** Fun animations and feedback (e.g., sad-face or correct response).
- Score Tracking:** Displays total user score based on correct and incorrect answers.
- Fun Facts:** Reveals a fun fact after each answer.
- Play Again / Next:** Options to play again or proceed to the next destination.
- Challenge a Friend:** Users can invite friends to play and compare scores via WhatsApp.

## Installation

To get a local copy up and running follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation Steps

1. Clone the repository

   ```sh
   git clone https://github.com/your_username/globetrotter.git
   cd globetrotter
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Set up MongoDB

   - Ensure MongoDB is installed and running.
   - Create a database named `globetrotter` with collections `users` and `challenges`.

4. Set up environment variables

   Create a `.env` file in the root directory and add your MongoDB connection string.

   ```env
   PORT=3001
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/globetrotter?retryWrites=true&w=majority
   ```

5. Start the server

   ```sh
   npm start
   ```

   Ensure your server is running on `http://localhost:3001`.

## Usage

1. Start the frontend

   Navigate to the root directory and start the React application.

   ```sh
   npm start
   ```

2. Play the Game

   Open your browser and navigate to `http://localhost:3000`. Register your username and start playing the game. 

3. Challenge Friends

   Click on the "Challenge a Friend" button to share the game link via WhatsApp and invite friends.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


 Contact

Rakesh K R - [rakeshkr4208@gmail.com](mailto:rakeshkr4208@gmail.com)

Project Link: [https://github.com/rakeshkr2002/globetrotter]
```
