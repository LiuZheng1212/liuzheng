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
var api_content = require("../../api/content.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      cateName: "\u5168\u90E8\u5206\u7C7B",
      cateNav: [
        {
          name: "\u8BFE\u7A0B",
          id: 1
        },
        {
          name: "\u6587\u7AE0",
          id: 2
        },
        {
          name: "\u95EE\u7B54",
          id: 3
        }
      ],
      currentIndex: 0,
      categoryId: 0,
      courseList: [],
      articleData: [],
      askData: [],
      current: 1,
      size: 10,
      flag: false,
      scroll: 0,
      popFlag: false,
      popFlag2: false,
      popFlag3: false,
      popCate: [
        {
          name: "\u7EFC\u5408\u6392\u5E8F",
          id: 1
        },
        {
          name: "\u5168\u90E8\u8BFE\u7A0B",
          id: 2
        },
        {
          name: "\u5168\u90E8\u5206\u7C7B",
          id: 3
        }
      ],
      sortId: 1,
      firSort: [
        {
          name: "\u7EFC\u5408\u6392\u5E8F",
          sort: "null"
        },
        {
          name: "\u6700\u65B0\u6392\u5E8F",
          sort: "new"
        },
        {
          name: "\u70ED\u95E8\u6392\u5E8F",
          sort: "hot"
        }
      ],
      sortCourse: null,
      courseSort: [
        {
          name: "\u5168\u90E8\u8BFE\u7A0B",
          isFree: null
        },
        {
          name: "\u4ED8\u8D39\u8BFE\u7A0B",
          isFree: 0
        },
        {
          name: "\u514D\u8D39\u8BFE\u7A0B",
          isFree: 1
        }
      ],
      courseIsFree: null,
      popName: "\u7EFC\u5408\u6392\u5E8F",
      courseName: "\u5168\u90E8\u8BFE\u7A0B",
      labelId: null,
      searchVal: ""
    });
    const popup = common_vendor.ref(null);
    const getCourse = () => {
      api_content.getCourseList(data.labelId, data.current, data.size, data.sortCourse).then((res) => {
        if (data.current == 1) {
          data.courseList = res.data.records;
        } else {
          data.courseList = [...data.courseList, ...res.data.records];
        }
      });
    };
    getCourse();
    const getArticle = () => {
      api_content.getArticleData(data.labelId, data.current, data.size).then((res) => {
        if (data.current == 1) {
          data.articleData = res.data.records;
        } else {
          data.articleData = [...data.articleData, ...res.data.records];
        }
      });
    };
    getArticle();
    const getAsk = () => {
      api_content.getAskData().then((res) => {
        if (data.current == 1) {
          data.askData = res.data.records;
        } else {
          data.askData = [...data.askData, ...res.data.records];
        }
      });
    };
    getAsk();
    const changeCate = (index) => {
      data.currentIndex = index;
    };
    const closePop = () => {
      popup.value.close();
    };
    const openPop = (id) => {
      if (id == 2 || id == 3 && data.popFlag) {
        popup.value.close();
        data.popFlag2 = false;
        data.popFlag3 = false;
        return;
      }
      if (id == 1 || id == 3 && data.popFlag2) {
        popup.value.close();
        data.popFlag1 = false;
        data.popFlag3 = false;
        return;
      }
      if (id == 1 || id == 2 && data.popFlag3) {
        popup.value.close();
        data.popFlag = false;
        data.popFlag2 = false;
        return;
      }
      if (id == 1) {
        data.popFlag = !data.popFlag;
      } else if (id == 2) {
        data.popFlag2 = !data.popFlag2;
      } else {
        data.popFlag3 = !data.popFlag3;
      }
      data.sortId = id;
      if (data.popFlag || data.popFlag2 || data.popFlag3) {
        popup.value.open();
      } else {
        data.popFlag = false;
        data.popFlag2 = false;
        data.popFlag3 = false;
        popup.value.close();
      }
    };
    const changeId = () => {
      popup.value.close();
    };
    const changeAll = (val, name) => {
      data.popFlag = false;
      data.sortCourse = val;
      data.popName = name;
      console.log(data.sortCourse);
      if (data.currentIndex == 0) {
        getCourse();
      }
      if (data.currentIndex == 1) {
        getArticle();
      }
      if (data.currentIndex == 2) {
        getAsk();
      }
      popup.value.close();
    };
    const changeCourse = (isFree, name) => {
      data.popFlag2 = false;
      data.courseIsFree = isFree;
      data.courseName = name;
      getCourse();
      popup.value.close();
    };
    common_vendor.onReachBottom(() => {
      data.current++;
      if (data.currentIndex == 0) {
        getCourse();
      } else if (data.currentIndex == 1) {
        getArticle();
      } else {
        getAsk();
      }
    });
    common_vendor.onPageScroll((e) => {
      data.scroll = e.scrollTop;
      if (e.scrollTop >= 1200) {
        data.flag = true;
      } else {
        data.flag = false;
      }
    });
    const touchTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0
      });
    };
    const cateDetail = (obj) => {
      data.popFlag3 = false;
      if (data.currentIndex == 0) {
        getCourse();
      } else if (data.currentIndex == 1) {
        getArticle();
      } else {
        getAsk();
      }
      data.labelId = obj.id;
      data.cateName = obj.name;
      popup.value.close();
    };
    const searchOk = (e) => {
      getCourse();
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      changeCate,
      touchTop,
      popup,
      closePop,
      openPop,
      changeId,
      changeAll,
      changeCourse,
      cateDetail,
      searchOk
    });
  }
};
if (!Array) {
  const _easycom_catePop2 = common_vendor.resolveComponent("catePop");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_myInput2 = common_vendor.resolveComponent("myInput");
  const _easycom_courseView2 = common_vendor.resolveComponent("courseView");
  const _easycom_articleView2 = common_vendor.resolveComponent("articleView");
  const _easycom_askDataList2 = common_vendor.resolveComponent("askDataList");
  (_easycom_catePop2 + _easycom_uni_popup2 + _easycom_myInput2 + _easycom_courseView2 + _easycom_articleView2 + _easycom_askDataList2)();
}
const _easycom_catePop = () => "../../components/catePop/catePop.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_myInput = () => "../../components/myInput/myInput.js";
const _easycom_courseView = () => "../../components/courseView/courseView.js";
const _easycom_articleView = () => "../../components/articleView/articleView.js";
const _easycom_askDataList = () => "../../components/askDataList/askDataList.js";
if (!Math) {
  (_easycom_catePop + _easycom_uni_popup + _easycom_myInput + _easycom_courseView + _easycom_articleView + _easycom_askDataList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.sortId == 1
  }, _ctx.sortId == 1 ? {
    b: common_vendor.f(_ctx.firSort, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: _ctx.popName == item.name ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $setup.changeAll(item.sort, item.name), index)
      };
    })
  } : {}, {
    c: _ctx.sortId == 2
  }, _ctx.sortId == 2 ? {
    d: common_vendor.f(_ctx.courseSort, (item, i, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: _ctx.courseName == item.name ? 1 : "",
        c: i,
        d: common_vendor.o(($event) => $setup.changeCourse(item.isFree, item.name), i)
      };
    })
  } : {}, {
    e: _ctx.sortId == 3
  }, _ctx.sortId == 3 ? {
    f: common_vendor.o($setup.cateDetail)
  } : {}, {
    g: common_vendor.sr("popup", "1cbb15d9-0"),
    h: common_vendor.o($setup.closePop),
    i: common_vendor.p({
      type: "top"
    }),
    j: _ctx.flag,
    k: common_vendor.o((...args) => $setup.touchTop && $setup.touchTop(...args)),
    l: common_vendor.o($setup.searchOk),
    m: common_vendor.o(($event) => _ctx.searchVal = $event),
    n: common_vendor.p({
      modelValue: _ctx.searchVal
    }),
    o: common_vendor.f(_ctx.cateNav, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: _ctx.currentIndex == index ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $setup.changeCate(index), index)
      };
    }),
    p: common_vendor.t(_ctx.popName),
    q: _ctx.popFlag
  }, _ctx.popFlag ? {} : {}, {
    r: common_vendor.o(($event) => $setup.openPop(1)),
    s: _ctx.popName != "\u7EFC\u5408\u6392\u5E8F" ? 1 : "",
    t: common_vendor.t(_ctx.courseName),
    v: _ctx.popFlag2
  }, _ctx.popFlag2 ? {} : {}, {
    w: common_vendor.o(($event) => $setup.openPop(2)),
    x: _ctx.courseName != "\u5168\u90E8\u8BFE\u7A0B" ? 1 : "",
    y: _ctx.currentIndex == 0,
    z: common_vendor.t(_ctx.cateName),
    A: _ctx.popFlag3
  }, _ctx.popFlag3 ? {} : {}, {
    B: common_vendor.o(($event) => $setup.openPop(3)),
    C: _ctx.cateName != "\u5168\u90E8\u5206\u7C7B" ? 1 : "",
    D: common_vendor.p({
      hotList: _ctx.courseList
    }),
    E: _ctx.currentIndex == 0,
    F: common_vendor.p({
      articleList: _ctx.articleData
    }),
    G: _ctx.currentIndex == 1,
    H: common_vendor.p({
      askList: _ctx.askData
    }),
    I: _ctx.currentIndex == 2
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/content/content.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
