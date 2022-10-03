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
var api_index = require("../../api/index.js");
var common_vendor = require("../../common/vendor.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    const router = common_vendor.useRouter();
    const data = common_vendor.reactive({
      listData: [],
      list: [],
      Idx: 0
    });
    api_index.list().then((res) => {
      data.listData = res.data;
      data.list = res.data[0].labelList;
    });
    const selectItem = (item, index) => {
      data.Idx = index;
      data.list = item.labelList;
    };
    const toContent = (name, id) => {
      router.push(`/pages/content/content?name=${name}&id=${id}`);
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      selectItem,
      toContent
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.listData, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: _ctx.Idx == index ? 1 : "",
        c: item.id,
        d: common_vendor.o(($event) => $setup.selectItem(item, index), item.id)
      };
    }),
    b: common_vendor.f(_ctx.list, (child, index, i0) => {
      return {
        a: common_vendor.t(child.name),
        b: index,
        c: common_vendor.o(($event) => $setup.toContent(child.name, child.id), index)
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
