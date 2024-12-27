import axios from "axios";

// TEMPORARY: Hardcode API key here for testing
const API_KEY = "AIzaSyDitWumcDBEDSv0tdASUvh1OJSclf0vBtg"; // Your provided API key

export const fetchYouTubeVideos = async (query) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          videoCategoryId: "10", // Music category
          maxResults: 20,
          key: API_KEY,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching videos from YouTube API:", error);
    return [];
  }
};
