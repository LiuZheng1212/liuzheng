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
const _sfc_main = {
  setup(props, context) {
    const popup = common_vendor.ref(null);
    const router = common_vendor.useRouter();
    const data = common_vendor.reactive({});
    const openPop = () => {
      popup.value.open();
    };
    const closePop = () => {
      popup.value.close();
    };
    const switch1Change = (e) => {
      console.log("switch1 \u53D1\u751F change \u4E8B\u4EF6\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
    };
    const goreturn = () => {
      router.push("/pages/my/my");
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      goreturn,
      switch1Change,
      popup,
      openPop,
      closePop
    });
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.goreturn && $setup.goreturn(...args)),
    b: common_vendor.o((...args) => $setup.switch1Change && $setup.switch1Change(...args)),
    c: common_vendor.o((...args) => $setup.switch1Change && $setup.switch1Change(...args)),
    d: common_vendor.o((...args) => $setup.switch1Change && $setup.switch1Change(...args)),
    e: common_vendor.o((...args) => $setup.openPop && $setup.openPop(...args)),
    f: common_vendor.o((...args) => $setup.closePop && $setup.closePop(...args)),
    g: common_vendor.sr("popup", "15abfe67-0"),
    h: common_vendor.p({
      type: "center"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/my/setting.vue"]]);
wx.createPage(MiniProgramPage);
