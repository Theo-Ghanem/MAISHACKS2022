import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const get = async (path) => {
  const { data } = await axios.get(`${BASE_URL}${path}`, {
    headers: {},
  });
  return data;
};
const put = async (path, body) => {
  const { data } = await axios.put(`${BASE_URL}${path}`, body, {
    headers: {},
  });
  return data;
};
const post = async (path, body) => {
  console.log("posting", BASE_URL, body);
  const { data } = await axios.post(`${BASE_URL}${path}`, body, {
    headers: {},
  });
  console.log("posting dpome");
  return data;
};
const del = async (path) => {
  const { data } = await axios.delete(`${BASE_URL}${path}`, {
    headers: {},
  });
  return data;
};

export default { post, put, del, get };
