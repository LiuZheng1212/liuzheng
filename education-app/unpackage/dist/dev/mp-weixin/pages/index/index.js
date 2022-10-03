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
var api_index = require("../../api/index.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    const router = common_vendor.useRouter();
    const data = common_vendor.reactive({
      Background: "#006C00",
      scrollTop: "",
      flag: false,
      navList: [],
      banners: [],
      hotList: [],
      latestList: [],
      chargeList: [],
      chargesList: [],
      pageSize: 10,
      page: 1
    });
    const swiperItem = (bgc) => {
      if (data.scrollTop >= 200) {
        data.Background = "#0072b7";
      } else {
        data.Background = bgc;
      }
    };
    api_index.getBanner().then((res) => {
      data.banners = res.data;
    });
    api_index.list().then((res) => {
      data.navList = res.data.splice(0, 7);
    });
    api_index.hot().then((res) => {
      data.hotList = res.data.records;
    });
    api_index.latest().then((res) => {
      data.latestList = res.data.records;
    });
    api_index.charge().then((res) => {
      data.chargeList = res.data.records;
    });
    api_index.charges().then((res) => {
      data.chargesList = res.data.records;
    });
    common_vendor.onPageScroll((e) => {
      data.scrollTop = e.scrollTop;
      swiperItem();
      if (e.scrollTop >= 1400) {
        data.flag = true;
      } else {
        data.flag = false;
      }
    });
    const scrolTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0
      });
    };
    common_vendor.onPullDownRefresh(() => {
      data.page = 1;
      api_index.charges(data.page, data.pageSize).then((res) => {
        data.chargesList = res.data.records;
      });
      common_vendor.index.stopPullDownRefresh();
    });
    common_vendor.onReachBottom(() => {
      data.page++;
      api_index.charges(data.page, data.pageSize).then((res) => {
        data.chargesList = [...res.data.records, ...data.chargesList];
      });
    });
    const toContent = (name, id) => {
      router.push(`/pages/content/content?name=${name}&id=${id}`);
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      swiperItem,
      scrolTop,
      toContent
    });
  }
};
if (!Array) {
  const _easycom_searchCom2 = common_vendor.resolveComponent("searchCom");
  const _easycom_banner2 = common_vendor.resolveComponent("banner");
  const _easycom_couresView2 = common_vendor.resolveComponent("couresView");
  const _easycom_newCourse2 = common_vendor.resolveComponent("newCourse");
  (_easycom_searchCom2 + _easycom_banner2 + _easycom_couresView2 + _easycom_newCourse2)();
}
const _easycom_searchCom = () => "../../components/searchCom/searchCom.js";
const _easycom_banner = () => "../../components/banner/banner.js";
const _easycom_couresView = () => "../../components/couresView/couresView.js";
const _easycom_newCourse = () => "../../components/newCourse/newCourse.js";
if (!Math) {
  (_easycom_searchCom + _easycom_banner + _easycom_couresView + _easycom_newCourse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s(`background-color: ${_ctx.Background};`),
    b: common_vendor.o($setup.swiperItem),
    c: common_vendor.p({
      banners: _ctx.banners
    }),
    d: common_vendor.f(_ctx.navList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id,
        c: common_vendor.o(($event) => $setup.toContent(item.name, item.id), item.id)
      };
    }),
    e: common_vendor.o(($event) => $setup.toContent("\u5168\u90E8\u5206\u7C7B", 9)),
    f: common_vendor.p({
      couresList: _ctx.hotList,
      titles: "\u70ED\u95E8\u63A8\u8350"
    }),
    g: common_vendor.p({
      latestList: _ctx.latestList
    }),
    h: common_vendor.p({
      couresList: _ctx.chargeList,
      titles: "\u514D\u8D39\u7CBE\u9009"
    }),
    i: common_vendor.p({
      couresList: _ctx.chargesList,
      titles: "\u4ED8\u8D39\u7CBE\u9009"
    }),
    j: common_vendor.o((...args) => $setup.scrolTop && $setup.scrolTop(...args)),
    k: _ctx.flag
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
