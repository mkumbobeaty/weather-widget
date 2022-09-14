import { axios } from "./config";

export const getCities = (inputValue: string) => {
    return axios.get(`/cities`, { params: {
        limit: 10,
        namePrefix: inputValue
    } }).then((response) => response.data);
}
