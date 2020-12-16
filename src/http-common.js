import axios from "axios";

export default axios.create({
  baseURL: "https://final-project-ewest17.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});