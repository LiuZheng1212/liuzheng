"use strict";
var common_js_request = require("../common/js/request.js");
async function classify() {
  const { data } = await common_js_request.instance.get("/article/api/category/label/list");
  return data;
}
async function selectClassify(obj) {
  const { data } = await common_js_request.instance.post("/article/api/article/search", {
    categoryId: obj.id,
    current: obj.page,
    size: obj.pageSize
  });
  return data;
}
async function details(id) {
  const { data } = await common_js_request.instance.get(`/article/api/article/${id}`);
  return data;
}
async function comment(id) {
  const { data } = await common_js_request.instance.get(`/article/api/comment/list/${id}`);
  return data;
}
exports.classify = classify;
exports.comment = comment;
exports.details = details;
exports.selectClassify = selectClassify;
