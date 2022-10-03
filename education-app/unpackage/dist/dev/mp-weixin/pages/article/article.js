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
    const router = common_vendor.useRouter();
    const data = common_vendor.reactive({
      id: null,
      classifyList: [],
      list: [],
      Idx: null,
      page: 1,
      pageSize: 10,
      flag: false
    });
    api_article.classify().then((res) => {
      data.classifyList = res.data;
    });
    api_article.selectClassify({
      id: data.id,
      page: data.page,
      pageSize: data.pageSize
    }).then((res) => {
      data.list = res.data.records;
    });
    const selectClas = (id, index) => {
      if (data.Idx == index) {
        return;
      }
      data.Idx = index;
      data.id = id;
      api_article.selectClassify({
        id: data.id,
        page: data.page,
        pageSize: data.pageSize
      }).then((res) => {
        data.list = res.data.records;
      });
    };
    common_vendor.onPageScroll((e) => {
      data.scrollTop = e.scrollTop;
      if (e.scrollTop >= 400) {
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
      api_article.selectClassify({
        id: data.id,
        page: data.page,
        pageSize: data.pageSize
      }).then((res) => {
        data.list = res.data.records;
      });
      common_vendor.index.stopPullDownRefresh();
    });
    common_vendor.onReachBottom(() => {
      data.page++;
      api_article.selectClassify({
        id: data.id,
        page: data.page,
        pageSize: data.pageSize
      }).then((res) => {
        console.log(res);
        data.list = [...data.list, ...res.data.records];
      });
    });
    const toDetails = (id) => {
      router.push(`/pages/article/details?id=${id}`);
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      selectClas,
      scrolTop,
      toDetails
    });
  }
};
if (!Array) {
  const _easycom_searchCom2 = common_vendor.resolveComponent("searchCom");
  _easycom_searchCom2();
}
const _easycom_searchCom = () => "../../components/searchCom/searchCom.js";
if (!Math) {
  _easycom_searchCom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.Idx == null ? 1 : "",
    b: common_vendor.o(($event) => $setup.selectClas(null, null)),
    c: common_vendor.f(_ctx.classifyList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index == _ctx.Idx ? 1 : "",
        c: common_vendor.o(($event) => $setup.selectClas(item.id, index), item.id),
        d: item.id
      };
    }),
    d: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.summary),
        c: common_vendor.t(item.nickName),
        d: common_vendor.t(item.updateDate),
        e: common_vendor.t(item.thumhup),
        f: item.imageUrl
      }, item.imageUrl ? {
        g: item.imageUrl
      } : {}, {
        h: item.id,
        i: common_vendor.o(($event) => $setup.toDetails(item.id), item.id)
      });
    }),
    e: common_vendor.o((...args) => $setup.scrolTop && $setup.scrolTop(...args)),
    f: _ctx.flag
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/article/article.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
