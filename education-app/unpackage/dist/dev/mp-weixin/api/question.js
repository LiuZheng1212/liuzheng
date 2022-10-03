"use strict";
var common_js_request = require("../common/js/request.js");
async function answer(obj) {
  const {
    data
  } = await common_js_request.instance.post("/question/api/question/hot", {
    current: obj.page,
    size: obj.pageSize
  });
  return data;
}
async function challenge(obj) {
  const {
    data
  } = await common_js_request.instance.post("/question/api/question/new", {
    current: obj.page,
    size: obj.pageSize
  });
  return data;
}
async function answers(obj) {
  const {
    data
  } = await common_js_request.instance.post("/question/api/question/wait", {
    current: obj.page,
    size: obj.pageSize
  });
  return data;
}
async function ask(a, current, size) {
  const {
    data
  } = await common_js_request.instance.get(`question/api/question/${a}`);
  return data;
}
async function askcomment(id) {
  const {
    data
  } = await common_js_request.instance.get(`article/api/comment/list/${id}`);
  return data;
}
exports.answer = answer;
exports.answers = answers;
exports.ask = ask;
exports.askcomment = askcomment;
exports.challenge = challenge;
