export const fetchYouTubeVideos = async (query) => {
  const API_KEY = 'AIzaSyAlBGr8_mM4uVw3rEuEwSt_HtmIs3JZqEA';  // Your YouTube API key
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`;

  const response = await fetch(URL);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch data from YouTube API');
  }

  return data.items;
};
