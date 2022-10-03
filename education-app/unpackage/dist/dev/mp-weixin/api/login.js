"use strict";
var common_js_request = require("../common/js/request.js");
async function getCode(mobile) {
  const { data } = await common_js_request.instance.post("/system/sms/code", {
    mobile,
    templateCode: "MSM_1999123123"
  });
  return data;
}
async function getUser(obj) {
  const { data } = await common_js_request.instance.post("/auth/login", {
    code: obj.code,
    mobile: obj.mobile
  });
  return data;
}
async function study() {
  const { data } = await common_js_request.instance.get("/course/course/study/list");
  return data;
}
exports.getCode = getCode;
exports.getUser = getUser;
exports.study = study;
