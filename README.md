# Comet: Retro-Themed Music & Video Search Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/SatyamPote/Comet/pulls)

Comet is a retro-inspired music and video search web app that lets you search, view, and play YouTube videos with a green terminal-style interface. Built with React, JavaScript, CSS, HTML, and the YouTube Data API, it delivers a nostalgic yet modern experience for music and video enthusiasts.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack & Tools](#tech-stack--tools)
- [APIs Used](#apis-used)
- [Screenshots & Demo](#screenshots--demo)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Usage Guide](#usage-guide)
- [Development Scripts](#development-scripts)
- [Known Issues](#known-issues)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Feedback & Support](#feedback--support)
- [Credits](#credits)

---

## ✨ Features

- **Retro Terminal Theme:** Green-on-black terminal UI with pixel-perfect typography and smooth animations.
- **Responsive Design:** Works flawlessly across desktops, tablets, and smartphones.
- **YouTube Video & Music Search:** Search for any video or song using YouTube Data API v3.
- **Dynamic Search Results:** Displays thumbnails, titles, and meta info for each result.
- **Embedded Playback:** Play videos directly within the app using an embedded player.
- **Auto-Select & Play:** Automatically plays the first result on any search.
- **Playlist Support:** (Planned) Save and organize your favorite videos.
- **User Authentication:** (Planned) Sign in for personalized experience.
- **History-Based Recommendations:** (Planned) Get recommendations based on your searches.
- **Accessibility:** Keyboard navigation and screen-reader friendly labels.

---

## 🛠 Tech Stack & Tools

### Languages

- **JavaScript** (50%)
- **CSS** (47.7%)
- **HTML** (2.3%)

### Frameworks & Libraries

- **React** (UI & Component Management)
- **Node.js** (Development Environment)
- **npm** (Dependency Management)
- **dotenv** (Environment Variable Management)
- **Axios** or **fetch** (API Requests)

### Development Tools

- **VSCode** (Recommended Editor)
- **ESLint** (Linting)
- **Prettier** (Code Formatting)
- **Git & GitHub** (Version Control & Collaboration)
- **Google Cloud Console** (API key management for YouTube Data API)
- **[Optional] React Router** (For routing, if multi-page)

---

## 🌐 APIs Used

### YouTube Data API v3

Comet integrates with YouTube Data API v3 to fetch and play video/music content.

- **API Endpoint for Search:**  
  `https://www.googleapis.com/youtube/v3/search`

- **Parameters Used:**
  - `q`: User search query (e.g., “lofi beats”)
  - `part`: Information to retrieve (`snippet`)
  - `maxResults`: Number of results (default: 10)
  - `key`: Your API key

- **API Key:** You need to acquire your own API key from Google Cloud Console.
- **Quota:** Each API key has daily quotas. Heavy use may hit limits.

🔗 [YouTube Data API Docs](https://developers.google.com/youtube/v3)

---

## 🎥 Screenshots & Demo

### Landing Page  
![Landing Page](screenshots/landing.png)

### Search Results  
![Search Results](screenshots/search-results.png)

> **Live Demo:** [Add your deployed app link here!]

---

## 🚀 Installation & Setup

### Prerequisites

- [Node.js (v16+ recommended)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- A valid **YouTube Data API v3 key** ([Get from Google Cloud Console](https://console.developers.google.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/SatyamPote/Comet.git
cd Comet
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY_HERE
```

### 4. Start the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

| Variable                   | Required | Description                            |
|---------------------------|----------|----------------------------------------|
| REACT_APP_YOUTUBE_API_KEY | Yes      | YouTube Data API v3 key from Google    |

---

## 🏁 Usage Guide

### Searching for Videos/Music

- Enter a search query (e.g., “lofi beats”, “80s synthwave”) in the search bar.
- Click the Search button or press Enter.
- Browse through the displayed video results.
- Click a video thumbnail to play it in the embedded player.
- The first result is auto-selected and played after every new search.

### Playlist and Account Features (Planned)

- Save favorite videos to custom playlists.
- Sign in via OAuth for personalized experience.
- Get search-based recommendations.

---

## ⚙️ Development Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

---

## ⚠️ Known Issues

- **Autoplay Restrictions:** Some browsers block autoplay of media until user interaction.
- **API Rate Limiting:** If you exceed your YouTube API quota, search will stop working until quota resets.
- **Ad-blockers:** May interfere with embedded YouTube player.

---

## 🚧 Future Enhancements

- Playlist Support: Save and manage favorite videos.
- User Authentication: Login/Signup with OAuth.
- Personalized Recommendations: Based on search and play history.
- Dark/Light Mode Toggle
- Localization: Multi-language support.
- Progressive Web App (PWA)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository  
2. Create a new branch for your feature or bugfix  
3. Commit your changes  
4. Open a pull request  

Before major changes, open an issue to discuss your proposal.  
See `CONTRIBUTING.md` for more info.

---

## 📜 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

## 💬 Feedback & Support

- **Issues:** Open an issue on GitHub  
- **PRs:** Submit a pull request  
- **Contact:** [satyampote9999@gmail.com] or [https://satyampote.tech/]

---

## 👏 Credits

- Google YouTube Data API – For media search and playback  
- React – For UI and frontend logic  
- Node.js – For local development  
- Retro Theme Design – Custom CSS inspired by classic terminal UIs  
- Made with 💚 by **SatyamPote** and contributors
