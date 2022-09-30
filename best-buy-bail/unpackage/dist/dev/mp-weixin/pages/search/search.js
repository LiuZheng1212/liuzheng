"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../api/http.js");
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_input2 + _easycom_u_button2)();
}
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  setup(__props) {
    const data = common_vendor.reactive({
      searchVal: "",
      searchList: []
    });
    const clear = () => {
      data.searchVal = "";
      data.searchList = [];
    };
    const godetail = (obj) => {
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?id=${obj.goods_id}`
      });
    };
    let t = null;
    const getSearch = () => {
      if (data.searchVal == "") {
        return false;
      }
      clearTimeout(t);
      t = setTimeout(() => {
        api_api.getSearchVal(data.searchVal).then((res) => {
          data.searchList = res.message;
        });
      }, 1e3);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getSearch),
        b: common_vendor.o(($event) => data.searchVal = $event),
        c: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u4F60\u60F3\u8981\u641C\u7D22\u7684\u5185\u5BB9",
          ["placeholder-style"]: "color:#aaa;",
          focus: true,
          border: true,
          modelValue: data.searchVal
        }),
        d: data.searchVal != 0,
        e: common_vendor.o(clear),
        f: common_vendor.f(data.searchList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.goods_name),
            b: item.cat_id,
            c: common_vendor.o(($event) => godetail(item), item.cat_id)
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4cedc0c6"], ["__file", "C:/Users/65458/Desktop/liuzheng/best-buy-bail/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
