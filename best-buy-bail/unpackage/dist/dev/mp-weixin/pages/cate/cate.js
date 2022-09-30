"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../api/http.js");
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_button2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_u_button + _easycom_u_grid_item + _easycom_u_grid)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cate",
  setup(__props) {
    const data = common_vendor.reactive({
      cataList: [],
      activeIndex: 1,
      activeList: []
    });
    const changeIndex = (obj) => {
      data.activeIndex = obj.cat_id;
      data.activeList = obj.children;
    };
    const gosearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    api_api.getCategories().then((res) => {
      data.cataList = res.message;
      data.activeList = res.message.find((item) => {
        return item.cat_id == 1;
      }).children;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(gosearch),
        b: common_vendor.f(data.cataList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.n(data.activeIndex == item.cat_id ? "left-item active" : "left-item"),
            c: item.cat_id,
            d: common_vendor.o(($event) => changeIndex(item), item.cat_id)
          };
        }),
        c: common_vendor.f(data.activeList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.f(item.children, (obj, k1, i1) => {
              return {
                a: obj.cat_icon,
                b: common_vendor.t(obj.cat_name),
                c: "1c0f474a-2-" + i0 + "-" + i1 + "," + ("1c0f474a-1-" + i0)
              };
            }),
            c: item.cat_id,
            d: "1c0f474a-1-" + i0,
            e: item.cat_id
          };
        }),
        d: common_vendor.p({
          col: 3,
          border: false
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/65458/Desktop/liuzheng/best-buy-bail/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
