"use strict";
var uilts_request = require("../uilts/request.js");
const getSwiperData = () => {
  return uilts_request.request("/home/swiperdata").then((res) => res, (err) => err);
};
const getNavData = () => {
  return uilts_request.request("/home/catitems").then((res) => res, (err) => err);
};
const getFloor = () => {
  return uilts_request.request("/home/floordata").then((res) => res, (err) => err);
};
const getCate = () => {
  return uilts_request.request("/categories").then((res) => res, (err) => err);
};
const getSearch = (val) => {
  return uilts_request.request(`/goods/qsearch?query=${val}`).then((res) => res, (err) => err);
};
const getDetails = (id) => {
  return uilts_request.request(`/goods/detail?goods_id=${id}`).then((res) => res, (err) => err);
};
exports.getCate = getCate;
exports.getDetails = getDetails;
exports.getFloor = getFloor;
exports.getNavData = getNavData;
exports.getSearch = getSearch;
exports.getSwiperData = getSwiperData;
