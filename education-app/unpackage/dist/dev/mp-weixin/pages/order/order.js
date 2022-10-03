"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
var api_order = require("../../api/order.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      list: []
    });
    api_order.order().then((res) => {
      console.log(res.data);
      data.list = res.data;
    });
    return __spreadValues({}, common_vendor.toRefs(data));
  }
};
if (!Array) {
  const _easycom_couresView2 = common_vendor.resolveComponent("couresView");
  _easycom_couresView2();
}
const _easycom_couresView = () => "../../components/couresView/couresView.js";
if (!Math) {
  _easycom_couresView();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.$router.go(-1)),
    b: common_vendor.f(_ctx.list, (obj, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(obj.updateDate),
        b: common_vendor.t(obj.orderId),
        c: "f702177a-0-" + i0,
        d: obj.status == 1
      }, obj.status == 1 ? {} : {}, {
        e: obj.status == 2
      }, obj.status == 2 ? {} : {}, {
        f: obj.status == 3
      }, obj.status == 3 ? {} : {}, {
        g: index
      });
    }),
    c: common_vendor.p({
      couresList: _ctx.list[0].courseList
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
