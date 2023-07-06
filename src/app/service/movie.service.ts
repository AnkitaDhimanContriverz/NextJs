import axios from "axios";

const API_KEY = "5b25f6484cc9e97f55dde715f7bd58b1";
const API_BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await instance.get("/search/movie", {
      params: { query },
    });
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.log("An error has occured");
    }
  } catch (e) {
    console.log("An error has occured", e);
    return [];
  }
};
