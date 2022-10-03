"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "courseView",
  props: ["hotList"],
  setup() {
    common_vendor.useRouter();
    const toDetail = (id) => {
      console.log(id);
      common_vendor.index.navigateTo({
        url: `/pages/detailView/detailView?id=${id}`
      });
    };
    return {
      toDetail
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.hotList, (item, k0, i0) => {
      return {
        a: item.mainImage,
        b: common_vendor.t(item.totalTime),
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.nickName),
        e: common_vendor.t(item.isFree == 1 ? "\u514D\u8D39" : item.priceOriginal),
        f: common_vendor.t(item.studyTotal),
        g: item.id,
        h: common_vendor.o(($event) => $setup.toDetail(item.id), item.id)
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/components/courseView/courseView.vue"]]);
wx.createComponent(Component);
