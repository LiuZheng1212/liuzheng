"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "searchCom",
  setup() {
    const router = common_vendor.useRouter();
    const toSearch = () => {
      router.push("/pages/searchView/searchView");
    };
    return {
      toSearch
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.toSearch && $setup.toSearch(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/components/searchCom/searchCom.vue"]]);
wx.createComponent(Component);
