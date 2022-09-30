"use strict";
var common_vendor = require("../common/vendor.js");
let baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/";
const http = (options) => {
  common_vendor.index.showLoading({
    title: "\u6B63\u5728\u73A9\u547D\u52A0\u8F7D\u4E2D\u3002\u3002\u3002"
  });
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + options.url,
      method: options.method || "GET",
      data: options.data || {},
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  });
};
exports.http = http;
