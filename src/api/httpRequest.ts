import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://mockend.com/mockend/demo/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getHttpRequest = async (path: string, options: any = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export const postHttpRequest = async (path: string, options: any = {}) => {
  const response = await httpRequest.post(path, options);
  return response.data;
};

export const putHttpRequest = async (path: string, options: any = {}) => {
  const response = await httpRequest.put(path, options);
  return response.data;
};

export const deleteHttpRequest = async (path: string) => {
  const response = await httpRequest.delete(path);
  return response.data;
};

export default httpRequest;
