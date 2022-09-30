"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "homefloor",
  props: {
    data: Object
  },
  setup(__props) {
    const prop = __props;
    return (_ctx, _cache) => {
      return {
        a: prop.data.floor_title.image_src,
        b: common_vendor.f(prop.data.product_list, (item, index, i0) => {
          return {
            a: item.image_src,
            b: index
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/65458/Desktop/liuzheng/best-buy-bail/components/homefloor/homefloor.vue"]]);
wx.createComponent(Component);
