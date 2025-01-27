# Comet: Retro-Themed Music & Video Search Platform

Welcome to **Comet**, a music and video search platform inspired by retro aesthetics. Comet allows you to search, view, and play videos directly from YouTube with a sleek, nostalgic green terminal-style interface. It’s built using React and integrates seamlessly with the YouTube Data API for fetching videos. Whether you're into classic vibes or modern tunes, Comet bridges them in a retro-inspired way!

---

## 🎨 Features

### User Interface  
- **Retro Terminal Theme:** Aesthetic green-on-black terminal interface with pixel-perfect typography.  
- **Responsive Design:** Fully responsive, works across devices and screen sizes.  

### Core Functionality  
- **Search Videos and Music:** Quickly search for music or videos using keywords via the YouTube Data API.  
- **Dynamic Results:** Displays a list of search results with thumbnails and titles.  
- **Video Playback:** Plays YouTube videos seamlessly in an embedded player.  
- **Auto-Select First Result:** The first video is automatically selected for playback after a search.  

---

## 🚀 Getting Started

Follow these steps to get the project up and running locally.

### Prerequisites
1. **Node.js**: Ensure you have Node.js installed on your machine.  
2. **YouTube API Key**: Create a project in Google Cloud Console to generate a YouTube API key.  

### Installation

#### Clone the Repository  
Clone the project repository to your local machine:
```bash
git clone https://github.com/SatyamPote/comet.git
cd comet
```

#### Install Dependencies
Install the required Node.js dependencies:
```bash
npm install
```

#### Set Up Environment Variables
Create a `.env` file in the root directory of your project and add your YouTube API key:
```
REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY_HERE
```

#### Start the Development Server
Run the following command to start the app locally:
```bash
npm start
```

#### Access the App
Open your browser and visit:
```
http://localhost:3000
```

---

## ✨ How It Works

### Search for Videos
1. Enter a search query in the search bar (e.g., "lofi beats," "classical music").
2. Press the **Search** button.
3. A list of videos will appear, showing their thumbnails and titles.

### Play Videos
1. Click on any video thumbnail to select it for playback.
2. The selected video will start playing in an embedded YouTube player.

### Dynamic Features
- The first video in the search results is auto-selected and played when the results are fetched.
- Clicking another video will replace the current playback with the newly selected video.

---

## 🎥 Screenshots

### Landing Page
The minimal yet aesthetically pleasing landing page with a retro-terminal theme:

### Search Results
Dynamic video results are displayed after performing a search:

---

## 🌐 API Integration

This project uses the YouTube Data API v3 to search and retrieve video information.

### Example API Request
When you perform a search, the app sends a GET request to the YouTube API like this:
```
GET https://www.googleapis.com/youtube/v3/search
```

### Parameters Used
- **q**: The search query entered by the user.
- **part**: Specifies the video information to retrieve (e.g., snippet).
- **maxResults**: Number of results to return (default: 10).

---

## ⚙️ Development Scripts

### Start the development server
Run the app in development mode:
```bash
npm start
```
This will start the app at [http://localhost:3000](http://localhost:3000).

### Build the production app
Creates a production build optimized for deployment:
```bash
npm run build
```

---

## ⚠️ Known Issues

### Autoplay Restrictions
Some browsers might block autoplay functionality due to user interaction requirements.

### API Rate Limiting
The app depends on the YouTube Data API, which enforces request quotas. Heavy usage might exceed the quota.

---

## 🛠️ Future Enhancements

### Planned Improvements
1. **Add Playlists**: Allow users to save and organize favorite videos in custom playlists.
2. **User Authentication**: Use OAuth to personalize user experiences with accounts.
3. **Video Recommendations**: Dynamically recommend videos based on search history.

---

## 👏 Credits

- **Google YouTube Data API**: For providing seamless video search and playback capabilities.
- **React Framework**: For powering the dynamic UI of the project.
- **Retro Theme Design**: Custom styling inspired by classic terminal aesthetics.

---

## 📜 License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as long as proper credit is given.

---

## 💬 Feedback & Contributions

If you have any ideas, suggestions, or issues, feel free to open an issue or create a pull request on the [GitHub Repository](https://github.com/yourusername/comet).
