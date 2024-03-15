# Getting Started with Your Project
Welcome to your new project! Follow these instructions to get your development environment set up and running.

## Prerequisites
Before you begin, ensure you have Node.js installed on your system. This project was built using Node.js version 18.x or later.

## Installation
Install Dependencies:

Open a terminal in your project's root directory and run the following command to install the project's dependencies:

´´´
npm install
Environment Variables:
´´´
For the project to function correctly, it needs access to environment-specific variables. Create a file named .env.local in the root of your project and add the following line:

plaintext
Copy code
NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=A9S2F1Q6NZTTVXWD
Replace A9S2F1Q6NZTTVXWD with your actual Alpha Vantage API key. If you don't have one, you can obtain it by signing up at Alpha Vantage's website.

Running the Development Server
Start the Development Server:

Once the installation is complete and your .env.local file is configured, start the development server by running:

bash
Copy code
npm run dev
Viewing the Application:

Open your web browser and navigate to http://localhost:3000 to view the application. You should see the project running and be able to interact with it.

Next Steps
From here, you can start exploring the project's codebase and making changes. The development server will automatically reload if you make edits to the code, so you can see your changes in real-time.
# Triple_Down
