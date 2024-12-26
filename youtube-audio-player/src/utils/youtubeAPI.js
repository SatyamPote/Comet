import axios from 'axios';

const API_KEY = 'AIzaSyAlBGr8_mM4uVw3rEuEwSt_HtmIs3JZqEA';  // Your API Key here
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchYouTubeVideos = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        type: 'video',
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
};
