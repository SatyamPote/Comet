# Comet Music App

This is a simple retro terminal-themed music player that uses the YouTube API to search for and play songs.

## Features

-   Search for songs on YouTube using the API.
-   Play, pause, and navigate through search results.
-   Create a playlist of favorite songs.
-   Retro terminal-style UI (black and green color scheme).
-   Responsive design that works on desktop and mobile.

## Prerequisites

-   Node.js and npm installed on your system.
-   A YouTube Data API v3 key.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd comet-music-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your YouTube API key:

    ```
    REACT_APP_YOUTUBE_API_KEY=your_api_key_here
    ```
    In `src/utils/youtubeAPI.js` replace `YOUR_YOUTUBE_API_KEY` with  `process.env.REACT_APP_YOUTUBE_API_KEY`

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

-   Open your web browser and go to `http://localhost:3000`.
-   Login or register to access the app.
-   Use the search bar to find songs.
-   Click on a song to play it.
-   Add songs to your playlist.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)