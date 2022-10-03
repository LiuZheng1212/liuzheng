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
var api_login = require("../../api/login.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    const router = common_vendor.useRouter();
    const data = common_vendor.reactive({
      mobile: "",
      code: "",
      times: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
      flag: false
    });
    const codeItem = () => {
      if (data.mobile == "") {
        return common_vendor.index.showToast({
          icon: "none",
          title: "\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"
        });
      }
      if (!data.flag) {
        data.flag = true;
        data.times = 60;
        api_login.getCode(data.mobile).then((res) => {
        });
        let a = setInterval(() => {
          data.times--;
          if (data.times == 0) {
            clearInterval(a);
            data.times = "\u83B7\u53D6\u9A8C\u8BC1\u7801";
            data.flag = false;
          }
        }, 1e3);
      }
    };
    const loginOk = () => {
      if (data.mobile == "" || data.code != "123456") {
        common_vendor.index.showToast({
          icon: "none",
          title: "\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"
        });
      } else {
        api_login.getUser({
          mobile: data.mobile,
          code: data.code
        }).then((res) => {
          console.log(res);
          localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo));
          localStorage.setItem("mxgEducationToken", res.data.refresh_token);
          router.push("/pages/my/my");
          common_vendor.index.showToast({
            icon: "success",
            title: "\u767B\u5F55\u6210\u529F"
          });
        });
      }
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      loginOk,
      codeItem
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.$router.go(-1)),
    b: _ctx.mobile,
    c: common_vendor.o(($event) => _ctx.mobile = $event.detail.value),
    d: _ctx.code,
    e: common_vendor.o(($event) => _ctx.code = $event.detail.value),
    f: common_vendor.t(_ctx.times != "\u83B7\u53D6\u9A8C\u8BC1\u7801" ? _ctx.times + "s" : _ctx.times),
    g: common_vendor.o((...args) => $setup.codeItem && $setup.codeItem(...args)),
    h: common_vendor.o((...args) => $setup.loginOk && $setup.loginOk(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/loginView/loginView.vue"]]);
wx.createPage(MiniProgramPage);
