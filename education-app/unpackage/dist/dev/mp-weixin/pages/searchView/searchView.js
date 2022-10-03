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
      list: [
        {
          name: "java",
          id: 1
        },
        {
          name: "python",
          id: 2
        },
        {
          name: "Vue.js",
          id: 3
        },
        {
          name: "React",
          id: 4
        },
        {
          name: "SpringBoot",
          id: 5
        },
        {
          name: "SpringCloud",
          id: 6
        }
      ],
      searchVal: ""
    });
    const toContent = (name, id) => {
      router.push(`/pages/content/content?name=${name}&id=${id}`);
    };
    const searchOk = () => {
      data.searchVal = "";
      router.push(`/pages/content/content`);
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      toContent,
      searchOk
    });
  }
};
if (!Array) {
  const _easycom_myInput2 = common_vendor.resolveComponent("myInput");
  _easycom_myInput2();
}
const _easycom_myInput = () => "../../components/myInput/myInput.js";
if (!Math) {
  _easycom_myInput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.searchOk),
    b: common_vendor.o(($event) => _ctx.searchVal = $event),
    c: common_vendor.p({
      modelValue: _ctx.searchVal
    }),
    d: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id,
        c: common_vendor.o(($event) => $setup.toContent(item.name, item.id), item.id)
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/searchView/searchView.vue"]]);
wx.createPage(MiniProgramPage);
