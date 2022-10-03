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
var api_question = require("../../api/question.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    const route = common_vendor.useRoute();
    console.log(route.query.id);
    const data = common_vendor.reactive({
      list: [],
      arr: {},
      arrList: []
    });
    api_question.ask(route.query.id).then((res) => {
      console.log(res);
      data.arr = res.data;
      data.list = res.data.labelList;
    });
    api_question.askcomment(route.query.id).then((res) => {
      console.log(res);
      data.arrList = res.data;
    });
    return __spreadValues({}, common_vendor.toRefs(data));
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.$router.go(-1)),
    b: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id
      };
    }),
    c: _ctx.arr.userImage,
    d: common_vendor.t(_ctx.arr.nickName),
    e: common_vendor.t(_ctx.arr.updateDate),
    f: common_vendor.t(_ctx.arr.viewCount),
    g: _ctx.arr.htmlContent,
    h: common_vendor.f(_ctx.arrList, (item, k0, i0) => {
      return {
        a: item.userImage,
        b: common_vendor.t(item.nickName),
        c: common_vendor.t(item.createDate),
        d: common_vendor.t(item.content),
        e: item.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/question/details.vue"]]);
wx.createPage(MiniProgramPage);
