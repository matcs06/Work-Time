import axios from "axios";

const api = axios.create({
  baseURL: "http://worktimeapi.com/calendar"
});

export default api;
