"use strict";
var uilts_request = require("../uilts/request.js");
const getSwiperData = () => {
  return uilts_request.request("/home/swiperdata").then((res) => res, (err) => err);
};
const getNavData = () => {
  return uilts_request.request("/home/catitems").then((res) => res, (err) => err);
};
exports.getNavData = getNavData;
exports.getSwiperData = getSwiperData;
