import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b4e25f51b705431aa6d619fea6d982f4",
  },
});
