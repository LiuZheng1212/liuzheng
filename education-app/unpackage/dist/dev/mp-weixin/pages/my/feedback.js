"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const formSubmit = (e) => {
      var formdata = e.detail.value;
      if (formdata.fannum == "" || formdata.qqnum == "" || formdata.weixinnum == "" || formdata.radio == "") {
        common_vendor.index.showToast({
          title: "\u8F93\u5165\u4E0D\u80FD\u4E3A\u7A7A",
          duration: 2e3,
          icon: "error"
        });
      }
    };
    return {
      formSubmit
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.$router.push("/pages/my/my")),
    b: common_vendor.o((...args) => $setup.formSubmit && $setup.formSubmit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/my/feedback.vue"]]);
wx.createPage(MiniProgramPage);
