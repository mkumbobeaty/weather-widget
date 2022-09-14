import Axios from "axios";

const GEO_API_URL = process.env.REACT_APP_GEODB_API_URL || "https://wft-geo-db.p.rapidapi.com";
const GEO_KEY = process.env.REACT_APP_GEODB_KEY || "VogUBSNiWjmshfr8T3IRyUA7JjWkp1x1dy4jsnvOOl2jJiDxEk"

Axios.defaults.baseURL = `${GEO_API_URL}/v1/geo`;

/**
 * Axios public instance
 */
export const axios = Axios.create({
    headers: {
        'X-RapidAPI-Key': GEO_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
});

export const getCities = (inputValue: string) => {
  return axios.get(`/cities`, { params: {
      limit: 10,
      namePrefix: inputValue
  } }).then((response) => response.data).catch(error => error);
}
  