"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "askList",
  props: ["askList"],
  setup() {
    const toAskDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/question/details?id=${id}`
      });
    };
    return {
      toAskDetail
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.askList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.reply),
        c: common_vendor.t(item.viewCount),
        d: common_vendor.t(item.nickName),
        e: common_vendor.t(item.updateDate),
        f: item.id,
        g: common_vendor.o(($event) => $setup.toAskDetail(item.id), item.id)
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/components/askDataList/askDataList.vue"]]);
wx.createComponent(Component);
