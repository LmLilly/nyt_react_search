import axios from "axios";

const API = {
    // Retrieves all quotes from the db
  search: function() {
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
    const apiKey ="b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
    const searchTerm = "google"
    const startYear = "20170909";
    const endYear = "20170909";
    return axios.get(`${url}${apiKey}&q=${searchTerm}&begin_date=${startYear}&end_date=${endYear}`);
  },
  // Retrieves all quotes from the db
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  // Saves a new quote to the db
  saveQuote: function(text) {
    return axios.post("/api/quotes", { text });
  },
  // Deletes a quote from the db
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // Toggles a quote's favorite property in the db
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  }
};

export default API;

