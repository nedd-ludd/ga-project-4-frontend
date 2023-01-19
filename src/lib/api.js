import axios from "axios";
import { AUTH } from "./auth";

const ENDPOINTS = {
  allBeers: "/api/crafty-beers",
  singleBeer: (id) => `/api/crafty-beers/${id}`,
  allBreweries: "/api/breweries",
  createReview: (id) => `/api/crafty-beers/${id}/reviews`,
  singleReview: (beerId, reviewId) =>
    `/api/crafty-beers/${beerId}/reviews/${reviewId}`,
  login: "/api/login",
  register: "/api/register",
  cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
};

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${AUTH.getToken()}`,
  },
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint,  body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };