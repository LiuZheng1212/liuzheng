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
var common_vendor = require("../../common/vendor.js");
var api_article = require("../../api/article.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    const route = common_vendor.useRoute();
    const router = common_vendor.useRouter();
    const data = common_vendor.reactive({
      detailsList: {},
      arrList: []
    });
    api_article.details(route.query.id).then((res) => {
      data.detailsList = res.data;
    });
    api_article.comment(route.query.id).then((res) => {
      data.arrList = res.data;
    });
    const back = () => {
      router.back();
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      back
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.back && $setup.back(...args)),
    b: common_vendor.t(_ctx.detailsList.title),
    c: common_vendor.f(_ctx.detailsList.labelList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id
      };
    }),
    d: common_vendor.t(_ctx.detailsList.title),
    e: _ctx.detailsList.userImage,
    f: common_vendor.t(_ctx.detailsList.nickName),
    g: common_vendor.t(_ctx.detailsList.updateDate),
    h: common_vendor.t(_ctx.detailsList.viewCount),
    i: _ctx.detailsList.htmlContent,
    j: common_vendor.f(_ctx.arrList, (item, k0, i0) => {
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
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/article/details.vue"]]);
wx.createPage(MiniProgramPage);
