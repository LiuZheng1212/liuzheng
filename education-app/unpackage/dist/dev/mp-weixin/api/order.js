"use strict";
var common_js_request = require("../common/js/request.js");
async function order() {
  const {
    data
  } = await common_js_request.instance.get("/pay/order/user/list");
  return data;
}
exports.order = order;
