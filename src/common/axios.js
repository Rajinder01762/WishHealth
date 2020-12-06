/* eslint-disable no-unused-expressions */
import axois from "axios";
import { oldWebsiteUrl } from "../common/oldWebsiteUrl";
const backendUrl = `${oldWebsiteUrl}Common_API`;
export const apiCallPost = async (url, data) => {
  return await axois
    .post(`${backendUrl}/${url}`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res;
    });
};
export const apiCallGet = async (url) => {
  return await axois
    .get(`${backendUrl}/${url}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res;
    });
};
