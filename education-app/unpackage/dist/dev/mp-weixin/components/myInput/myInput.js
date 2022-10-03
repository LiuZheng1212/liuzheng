"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "myInput",
  props: ["modelValue"],
  setup(props, ctx) {
    const router = common_vendor.useRouter();
    common_vendor.useRoute();
    const back = () => {
      router.push("/pages/index/index");
    };
    const searchOk = (e) => {
      ctx.emit("searchOk", e.detail.value);
    };
    return {
      back,
      searchOk
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.back && $setup.back(...args)),
    b: common_vendor.o((...args) => $setup.searchOk && $setup.searchOk(...args)),
    c: $props.modelValue,
    d: common_vendor.o(($event) => $props.modelValue = $event.detail.value),
    e: common_vendor.o((...args) => $setup.back && $setup.back(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/components/myInput/myInput.vue"]]);
wx.createComponent(Component);
