"use strict";
var common_vendor = require("../vendor.js");
const instance = common_vendor.axios.create({
  baseURL: "http://m.mengxuegu.com/api/",
  timeout: 8e3
});
instance.interceptors.request.use((config) => {
  console.log("\u62E6\u622A\u6210\u529F");
  common_vendor.index.showLoading({
    title: "\u52A0\u8F7D\u4E2D"
  });
  return config;
}, (err) => {
  return Promise.reject(err);
});
instance.interceptors.response.use((res) => {
  common_vendor.index.hideLoading({});
  return res;
}, (err) => {
  return Promise.reject(err);
});
exports.instance = instance;
