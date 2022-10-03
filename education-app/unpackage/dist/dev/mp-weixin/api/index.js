"use strict";
var common_js_request = require("../common/js/request.js");
async function getBanner() {
  const {
    data
  } = await common_js_request.instance.get("article/api/advert/show/1");
  return data;
}
async function list() {
  const {
    data
  } = await common_js_request.instance.get("article/api/category/label/list");
  return data;
}
async function hot() {
  const {
    data
  } = await common_js_request.instance.post("course/api/course/search", {
    content: null,
    sort: "hot",
    isFree: null,
    labelId: null,
    categoryId: null,
    current: 1,
    size: 10
  });
  return data;
}
async function latest() {
  const {
    data
  } = await common_js_request.instance.post("/course/api/course/search ", {
    content: null,
    sort: "new",
    isFree: null,
    labelId: null,
    categoryId: null,
    current: 1,
    size: 10
  });
  return data;
}
async function charge() {
  const {
    data
  } = await common_js_request.instance.post("/course/api/course/search ", {
    content: null,
    sort: null,
    isFree: 1,
    labelId: null,
    categoryId: null,
    current: 1,
    size: 10
  });
  return data;
}
async function charges(page, pageSize) {
  const {
    data
  } = await common_js_request.instance.post("/course/api/course/search ", {
    content: null,
    sort: null,
    isFree: 0,
    labelId: null,
    categoryId: null,
    current: page,
    size: pageSize
  });
  return data;
}
exports.charge = charge;
exports.charges = charges;
exports.getBanner = getBanner;
exports.hot = hot;
exports.latest = latest;
exports.list = list;
