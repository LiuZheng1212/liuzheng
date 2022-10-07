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
    const data = common_vendor.reactive({
      goods: [],
      ind: 0
    });
    const Address = common_vendor.ref({});
    const flag = common_vendor.ref(false);
    const show = common_vendor.ref(false);
    const addRess = common_vendor.ref(true);
    const valChange = (index) => {
      data.goods[index].number + 1;
      set();
    };
    const yes = () => {
      data.goods.splice(data.ind, 1);
      show.value = false;
      common_vendor.index.showToast({
        title: "\u5220\u9664\u6210\u529F"
      });
      set();
    };
    const no = () => {
      data.goods[data.ind].number = 1;
      set();
      show.value = false;
      get();
    };
    const get = () => {
      common_vendor.index.getStorage({
        key: "goods",
        success: (res) => {
          data.goods = JSON.parse(res.data);
        }
      });
    };
    const set = () => {
      common_vendor.index.setStorage({
        key: "goods",
        data: JSON.stringify(data.goods)
      });
    };
    const val = (index) => {
      data.ind = index;
      data.goods[index].number - 1;
      if (data.goods[index].number == 0) {
        show.value = true;
      }
      set();
    };
    const change = () => {
      flag.value = !flag.value;
      console.log(flag.value);
      data.goods.forEach((item) => item.status = flag.value);
    };
    const checkChange = (index) => {
      data.goods[index].status = !data.goods[index].status;
      flag.value = data.goods.every((item) => item.status);
    };
    const selectPrice = common_vendor.computed$1(() => {
      let num = 0;
      let price = 0;
      data.goods.forEach((item) => {
        if (item.status) {
          price += item.number * item.price;
          num += item.number;
        }
      });
      return { a: price, b: num };
    });
    const getAdd = () => {
      common_vendor.index.chooseAddress({
        success: (res) => {
          Address.value = res;
          console.log(Address.value);
          addRess.value = false;
        }
      });
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      valChange,
      show,
      yes,
      no,
      get,
      set,
      val,
      flag,
      change,
      checkChange,
      selectPrice,
      getAdd,
      addRess,
      Address
    });
  },
  onShow() {
    this.get();
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  (_easycom_u_button2 + _easycom_u_popup2 + _easycom_u_checkbox2 + _easycom_u_number_box2)();
}
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_popup = () => "../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js";
const _easycom_u_checkbox = () => "../../uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  (_easycom_u_button + _easycom_u_popup + _easycom_u_checkbox + _easycom_u_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($setup.yes),
    b: common_vendor.p({
      type: "primary",
      size: "mini"
    }),
    c: common_vendor.o($setup.no),
    d: common_vendor.p({
      size: "mini"
    }),
    e: common_vendor.o(($event) => $setup.show = $event),
    f: common_vendor.p({
      mode: "center",
      modelValue: $setup.show
    }),
    g: $setup.addRess
  }, $setup.addRess ? {
    h: common_vendor.o((...args) => $setup.getAdd && $setup.getAdd(...args))
  } : {
    i: common_vendor.t($setup.Address.userName),
    j: common_vendor.t(`${$setup.Address.provinceName}${$setup.Address.cityName}${$setup.Address.countyName}${$setup.Address.detailInfo}`),
    k: common_vendor.t($setup.Address.telNumber)
  }, {
    l: common_vendor.f(_ctx.goods, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $setup.checkChange(index)),
        b: "5712e07a-3-" + i0,
        c: common_vendor.o(($event) => item.status = $event),
        d: common_vendor.p({
          modelValue: item.status
        }),
        e: item.url,
        f: common_vendor.t(item.name),
        g: common_vendor.t(item.price),
        h: common_vendor.o(($event) => $setup.valChange(index)),
        i: common_vendor.o(($event) => $setup.val(index)),
        j: "5712e07a-4-" + i0,
        k: common_vendor.o(($event) => item.number = $event),
        l: common_vendor.p({
          modelValue: item.number
        }),
        m: index
      };
    }),
    m: common_vendor.o($setup.change),
    n: common_vendor.o(($event) => $setup.flag = $event),
    o: common_vendor.p({
      modelValue: $setup.flag
    }),
    p: common_vendor.t($setup.selectPrice.a),
    q: common_vendor.t($setup.selectPrice.b),
    r: common_vendor.p({
      type: "error"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/BestBuy-mall/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
