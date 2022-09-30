"use strict";
var api_http = require("./http.js");
const getBanner = () => {
  return api_http.http({
    url: "home/swiperdata"
  });
};
const getHomeCate = () => {
  return api_http.http({
    url: "home/catitems"
  });
};
const getFloorData = () => {
  return api_http.http({
    url: "home/floordata"
  });
};
const getCategories = () => {
  return api_http.http({
    url: "categories"
  });
};
const getSearchVal = (msg) => {
  return api_http.http({
    url: `goods/qsearch?query=${msg}`
  });
};
const getGoodsDetail = (msg) => {
  return api_http.http({
    url: `goods/detail?goods_id=${msg}`
  });
};
exports.getBanner = getBanner;
exports.getCategories = getCategories;
exports.getFloorData = getFloorData;
exports.getGoodsDetail = getGoodsDetail;
exports.getHomeCate = getHomeCate;
exports.getSearchVal = getSearchVal;
