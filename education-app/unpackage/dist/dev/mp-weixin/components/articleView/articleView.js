"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "articleView",
  props: ["articleList"],
  setup() {
    const toDetail = (id) => {
      console.log(id);
      common_vendor.index.navigateTo({
        url: `/pages/article/details?id=${id}`
      });
    };
    return {
      toDetail
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.articleList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.summary),
        c: common_vendor.t(item.nickName),
        d: common_vendor.t(item.updateDate),
        e: common_vendor.t(item.thumhup),
        f: item.imageUrl,
        g: item.id,
        h: common_vendor.o(($event) => $setup.toDetail(item.id), item.id)
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/components/articleView/articleView.vue"]]);
wx.createComponent(Component);
