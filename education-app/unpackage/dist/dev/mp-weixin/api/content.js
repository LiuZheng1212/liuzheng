"use strict";
var common_js_request = require("../common/js/request.js");
async function getCateNav() {
  const {
    data
  } = await common_js_request.instance.get("article/api/category/label/list");
  return data;
}
async function getCourseList(id, current, size, sort, isFree, labelId) {
  const {
    data
  } = await common_js_request.instance.post("course/api/course/search", {
    categoryId: id,
    content: null,
    current,
    isFree,
    labelId,
    size,
    sort
  });
  return data;
}
async function getArticleData(id, current, size, sort, labelId) {
  const { data } = await common_js_request.instance.post("article/api/article/search", {
    categoryId: id,
    content: null,
    current,
    labelId,
    size,
    sort
  });
  return data;
}
async function getAskData(id, current, size, sort) {
  const { data } = await common_js_request.instance.post("question/api/question/search", {
    categoryId: id,
    content: null,
    current,
    labelId: null,
    size,
    sort
  });
  return data;
}
exports.getArticleData = getArticleData;
exports.getAskData = getAskData;
exports.getCateNav = getCateNav;
exports.getCourseList = getCourseList;
