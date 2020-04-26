import axios from "axios";
const KEY = "AIzaSyBOxtVp_Q9hRdHYDGjXcpzOgrzJ5hy3qyQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
