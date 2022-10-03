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
  setup() {
    const router = common_vendor.useRouter();
    const data = common_vendor.reactive({
      userList: [],
      token: ""
    });
    const toLogin = () => {
      if (!data.token) {
        common_vendor.index.navigateTo({
          url: "/pages/loginView/loginView"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/my/user"
        });
      }
    };
    const toOrder = () => {
      if (!data.token) {
        common_vendor.index.navigateTo({
          url: "/pages/loginView/loginView"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/order/order"
        });
      }
    };
    const toBalance = () => {
      if (!data.token) {
        common_vendor.index.navigateTo({
          url: "/pages/loginView/loginView"
        });
      } else {
        router.push("/pages/order/mybalance");
      }
    };
    const toStudy = () => {
      if (!data.token) {
        common_vendor.index.navigateTo({
          url: "/pages/loginView/loginView"
        });
      } else {
        router.push("/pages/my/study");
      }
    };
    const toSetting = () => {
      router.push("/pages/my/setting");
    };
    const toFeedback = () => {
      router.push("/pages/my/feedback");
    };
    const toAbout = () => {
      router.push("/pages/my/about");
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      toLogin,
      toOrder,
      toBalance,
      toStudy,
      toSetting,
      toFeedback,
      toAbout
    });
  },
  onShow() {
    this.userList = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")) : [];
    this.token = localStorage.getItem("mxgEducationToken") ? localStorage.getItem("mxgEducationToken") : "";
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !_ctx.token ? "http://m.mengxuegu.com/static/logo.png" : _ctx.userList.imageUrl,
    b: !_ctx.token
  }, !_ctx.token ? {} : {
    c: common_vendor.t(_ctx.userList.nickName),
    d: common_vendor.t(_ctx.userList.username)
  }, {
    e: common_vendor.o((...args) => $setup.toLogin && $setup.toLogin(...args)),
    f: common_vendor.o((...args) => $setup.toOrder && $setup.toOrder(...args)),
    g: common_vendor.o((...args) => $setup.toBalance && $setup.toBalance(...args)),
    h: common_vendor.o((...args) => $setup.toStudy && $setup.toStudy(...args)),
    i: common_vendor.o((...args) => $setup.toSetting && $setup.toSetting(...args)),
    j: common_vendor.o((...args) => $setup.toFeedback && $setup.toFeedback(...args)),
    k: common_vendor.o((...args) => $setup.toAbout && $setup.toAbout(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
