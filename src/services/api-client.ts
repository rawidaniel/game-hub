import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8438179eb5644f81a7e1af7763fdff58",
  },
});
