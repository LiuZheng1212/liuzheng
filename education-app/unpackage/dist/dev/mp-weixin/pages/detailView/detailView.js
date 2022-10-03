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
var api_detail = require("../../api/detail.js");
require("../../common/js/request.js");
const _sfc_main = {
  setup() {
    common_vendor.useRoute();
    const router = common_vendor.useRouter();
    common_vendor.index.pageScrollTo({
      scrollTop: 0
    });
    const back = () => {
      common_vendor.index.navigateBack({});
    };
    const data = common_vendor.reactive({
      detailList: {},
      tabList: [{
        title: "\u8BE6\u60C5",
        id: 0
      }, {
        title: "\u7AE0\u8282",
        id: 1
      }, {
        title: "\u8BC4\u8BBA",
        id: 2
      }, {
        title: "\u5957\u9910",
        id: 3
      }],
      currentId: 0,
      flag: false,
      sectionList: [],
      videoItem: "",
      commentList: [],
      setmealList: []
    });
    const changeTab = (id) => {
      data.currentId = id;
    };
    const popupCoupon = common_vendor.ref(null);
    api_detail.detail().then((res) => {
      data.detailList = res.data;
    });
    api_detail.sections().then((res) => {
      data.sectionList = res.data;
    });
    api_detail.comment().then((res) => {
      data.commentList = res.data;
    });
    api_detail.setmeal().then((res) => {
      data.setmealList = res.data;
    });
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop >= 200) {
        data.flag = true;
      } else {
        data.flag = false;
      }
    });
    const openVideo = (child) => {
      if (child.isFree) {
        popupCoupon.value.open();
        data.videoItem = child.videoUrl;
      } else {
        common_vendor.index.showToast({
          title: "\u8BF7\u5148\u8D2D\u4E70",
          icon: "none"
        });
      }
    };
    const closePopup = () => {
      popupCoupon.value.close();
    };
    const toConfirm = (item) => {
      router.push(`/pages/order/confirm?list=${JSON.stringify(item)}`);
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      changeTab,
      back,
      openVideo,
      popupCoupon,
      closePopup,
      toConfirm
    });
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_couresView2 = common_vendor.resolveComponent("couresView");
  (_easycom_uni_popup2 + _easycom_couresView2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_couresView = () => "../../components/couresView/couresView.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_couresView)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $setup.back && $setup.back(...args)),
    b: _ctx.detailList.mainImage,
    c: _ctx.flag
  }, _ctx.flag ? {
    d: common_vendor.o((...args) => $setup.back && $setup.back(...args)),
    e: common_vendor.t(_ctx.detailList.title)
  } : {}, {
    f: common_vendor.t(_ctx.detailList.priceDiscount),
    g: common_vendor.t(_ctx.detailList.priceOriginal),
    h: common_vendor.t(_ctx.detailList.title),
    i: common_vendor.t(_ctx.detailList.goodRate),
    j: common_vendor.t(_ctx.detailList.studyTotal),
    k: common_vendor.f(_ctx.tabList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: _ctx.currentId == item.id ? 1 : "",
        c: item.id,
        d: common_vendor.o(($event) => $setup.changeTab(item.id), item.id)
      };
    }),
    l: _ctx.detailList.detailUrls,
    m: _ctx.currentId == 0,
    n: common_vendor.f(_ctx.sectionList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.f(item.sectionList, (child, i, i1) => {
          return common_vendor.e({
            a: common_vendor.t(i + 1),
            b: common_vendor.t(child.name),
            c: child.isFree
          }, child.isFree ? {} : {}, {
            d: child.id,
            e: common_vendor.o(($event) => $setup.openVideo(child), child.id)
          });
        }),
        c: common_vendor.t(index + 1),
        d: item.id
      };
    }),
    o: common_vendor.o((...args) => $setup.closePopup && $setup.closePopup(...args)),
    p: _ctx.videoItem,
    q: common_vendor.sr("popupCoupon", "66dccc25-0"),
    r: common_vendor.p({
      type: "center"
    }),
    s: _ctx.currentId == 1,
    t: common_vendor.f(_ctx.commentList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.userImage,
        b: common_vendor.t(item.nickName),
        c: common_vendor.t(item.createDate),
        d: !item.isGood
      }, !item.isGood ? {} : {}, {
        e: common_vendor.t(item.content),
        f: item.children != null
      }, item.children != null ? {
        g: common_vendor.t(item.children.content)
      } : {}, {
        h: item.id
      });
    }),
    v: _ctx.currentId == 2,
    w: common_vendor.f(_ctx.setmealList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: "66dccc25-1-" + i0,
        c: common_vendor.p({
          couresList: item.list
        }),
        d: common_vendor.t(item.groupPrice),
        e: common_vendor.t(item.totalPrice),
        f: common_vendor.o(($event) => $setup.toConfirm(item)),
        g: item.id
      };
    }),
    x: _ctx.currentId == 3
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/detailView/detailView.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
