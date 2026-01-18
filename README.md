# Discord Bot Website

This repository contains the source code for the official website and dashboard for SenBot, a versatile Discord bot. The front-end is built using React, Vite, TypeScript, and styled with Tailwind CSS. It features a public-facing landing page and a secure dashboard for managing the bot's settings and servers.

## Features

-   **Modern Tech Stack:** Built with React, Vite, and TypeScript for a fast and type-safe development experience.
-   **Responsive Design:** A fully responsive interface that works on desktop, tablet, and mobile devices, styled with Tailwind CSS.
-   **Light & Dark Modes:** A theme context allows users to switch between light and dark themes, with preferences saved to local storage.
-   **Client-Side Routing:** Utilizes `react-router-dom` for seamless navigation between the landing page and the dashboard.
-   **Component-Based Architecture:** A clean structure with reusable components, layouts, and pages.
-   **Animated UI:** Smooth page transitions and component animations using `framer-motion`.

### Landing Page

-   **Feature Showcase:** Highlights key features of the SenBot, such as server management, auto-moderation, and music.
-   **Commands Overview:** A preview of the available bot commands.
-   **Pricing Tiers:** A clear and simple pricing section.
-   **Direct Discord Integration:** "Add to Discord" buttons link directly to the bot's OAuth2 authorization URL.

### User Dashboard

-   **Secure Authentication:** A mock authentication system (`AuthContext`) that simulates logging in with Discord.
-   **Overview Page:** Displays key statistics like total servers, active users, command usage, and recent bot activity.
-   **Server Management:** A grid view of all servers the bot is a part of, with options to configure and manage each one.
-   **Command Configuration:** A detailed table of all bot commands, with functionality to search, filter by category, and manage custom commands.
-   **Global Settings:** A comprehensive settings page to configure notifications, moderation, command prefix, and dashboard appearance.

## Tech Stack

-   **Frontend:** React, TypeScript
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS, `clsx`, `class-variance-authority`
-   **Routing:** React Router
-   **Animations:** Framer Motion
-   **Icons:** Lucide React

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18 or later) and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/lawerth/discord-bot-website.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd discord-bot-website
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root of the project by copying the example file.
    ```sh
    cp .env.example .env
    ```
    *Note: The current implementation uses a mock authentication system, so the Supabase environment variables are placeholders for future backend integration.*

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the source code using ESLint.
-   `npm run preview`: Serves the production build locally to preview it.

## Project Structure

The project follows a standard React application structure:

```
/src
├── components/       # Reusable UI components (Buttons, Navigation, etc.)
├── contexts/         # React Contexts (Authentication, Theming)
├── layouts/          # Layout components (e.g., DashboardLayout)
├── pages/            # Top-level page components for each route
├── utils/            # Utility functions (e.g., cn for classnames)
├── App.tsx           # Main application component with routing
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind CSS directives
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
