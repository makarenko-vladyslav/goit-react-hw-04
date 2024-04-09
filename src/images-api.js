import axios from "axios";

const KEY = "I8M3Tskhexos2hlxxS2fNs3Zp93TK6TN6fzmKp6vzbE";

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImages = async (topic, page) => {
  const response = await axios.get(
    `search/photos?query=${topic}&client_id=${KEY}&per_page=15&page=${page}`
  );
  return response.data.results;
};
