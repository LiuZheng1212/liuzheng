"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var api_content = require("../../api/content.js");
var common_vendor = require("../../common/vendor.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup(props, ctx) {
    const data = common_vendor.reactive({
      cateNav: [],
      currentId: 9,
      cateRight: []
    });
    api_content.getCateNav().then((res) => {
      console.log(res);
      if (res.code == 2e4) {
        data.cateNav = res.data;
        data.cateRight = res.data[data.currentId - 1].labelList;
      }
    });
    const changeId = (item, id) => {
      data.cateRight = item.labelList;
      data.currentId = id;
      ctx.emit("changeId");
      console.log(id);
    };
    const cateDetail = (id, name) => {
      ctx.emit("cateDetail", {
        id,
        name
      });
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      changeId,
      cateDetail
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.currentId == 9 ? 1 : "",
    b: common_vendor.o(($event) => $setup.changeId("\u5168\u90E8\u5206\u7C7B", 9)),
    c: common_vendor.f(_ctx.cateNav, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: _ctx.currentId == item.id ? 1 : "",
        c: item.id,
        d: common_vendor.o(($event) => $setup.changeId(item, item.id), item.id)
      };
    }),
    d: common_vendor.f(_ctx.cateRight, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id,
        c: common_vendor.o(($event) => $setup.cateDetail(item.id, item.name), item.id)
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/components/catePop/catePop.vue"]]);
wx.createComponent(Component);
