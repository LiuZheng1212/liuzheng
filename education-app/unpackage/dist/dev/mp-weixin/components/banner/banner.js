"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "banner",
  props: ["banners"],
  setup(props, ctx) {
    const swiperItem = (e) => {
      ctx.emit("swiperItem", props.banners[e.detail.current].background);
    };
    return {
      swiperItem
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.banners, (item, index, i0) => {
      return {
        a: "../.." + item.imageUrl,
        b: index,
        c: common_vendor.s(`background-image: linear-gradient(${item.background}, #fff);`)
      };
    }),
    b: common_vendor.o((...args) => $setup.swiperItem && $setup.swiperItem(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/components/banner/banner.vue"]]);
wx.createComponent(Component);
