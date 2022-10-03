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
var api_question = require("../../api/question.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      answerList: [],
      page: 1,
      pageSize: 10,
      flag: false,
      name: "hot"
    });
    api_question.answer({
      page: data.page,
      pageSize: data.pageSize
    }).then((res) => {
      data.answerList = res.data.records;
    });
    const selectItem = (val) => {
      data.name = val;
      if (data.name == "hot") {
        api_question.answer({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = res.data.records;
        });
      } else if (data.name == "new") {
        api_question.challenge({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = res.data.records;
        });
      } else {
        api_question.answers({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = res.data.records;
        });
      }
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
      if (data.name == "hot") {
        api_question.answer({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = res.data.records;
        });
      } else if (data.name == "new") {
        api_question.challenge({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = res.data.records;
        });
      } else {
        api_question.answers({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = res.data.records;
        });
      }
      common_vendor.index.stopPullDownRefresh();
    });
    common_vendor.onReachBottom(() => {
      data.page++;
      if (data.name == "hot") {
        api_question.answer({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = [...data.answerList, ...res.data.records];
        });
      } else if (data.name == "new") {
        api_question.challenge({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = [...data.answerList, ...res.data.records];
        });
      } else {
        api_question.answers({
          page: data.page,
          pageSize: data.pageSize
        }).then((res) => {
          data.answerList = [...data.answerList, ...res.data.records];
        });
      }
    });
    const toDetails = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/question/details?id=${id}`
      });
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      scrolTop,
      selectItem,
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
    a: _ctx.name == "hot" ? 1 : "",
    b: common_vendor.o(($event) => $setup.selectItem("hot")),
    c: _ctx.name == "new" ? 1 : "",
    d: common_vendor.o(($event) => $setup.selectItem("new")),
    e: _ctx.name == "wait" ? 1 : "",
    f: common_vendor.o(($event) => $setup.selectItem("wait")),
    g: common_vendor.f(_ctx.answerList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.reply),
        c: common_vendor.t(item.viewCount),
        d: common_vendor.t(item.nickName),
        e: common_vendor.t(item.createDate),
        f: item.id,
        g: common_vendor.o(($event) => $setup.toDetails(item.id), item.id)
      };
    }),
    h: common_vendor.o((...args) => $setup.scrolTop && $setup.scrolTop(...args)),
    i: _ctx.flag
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/question/question.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
