"use strict";
var common_js_request = require("../common/js/request.js");
async function detail() {
  const { data } = await common_js_request.instance.get("/course/api/course/null");
  return data;
}
async function sections() {
  const { data } = await common_js_request.instance.get("/course/api/chapter/section/list/null");
  return data;
}
async function comment() {
  const { data } = await common_js_request.instance.get("/course/api/comment/list/null");
  return data;
}
async function setmeal() {
  const { data } = await common_js_request.instance.get("/course/api/group/list/null");
  return data;
}
exports.comment = comment;
exports.detail = detail;
exports.sections = sections;
exports.setmeal = setmeal;
