"use strict";
var common_vendor = require("../../common/vendor.js");
var api_define = require("../../api/define.js");
var api_api = require("../../api/api.js");
require("../../uilts/request.js");
if (!Array) {
  const _easycom_searchInput2 = common_vendor.resolveComponent("searchInput");
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_searchInput2 + _easycom_u_col2 + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_row2)();
}
const _easycom_searchInput = () => "../../components/searchInput/searchInput.js";
const _easycom_u_col = () => "../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_row = () => "../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_searchInput + _easycom_u_col + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_row)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cate",
  setup(__props) {
    const data = common_vendor.reactive({
      cateList: [],
      Index: 0,
      childList: []
    });
    api_api.getCate().then((res) => {
      if (res.meta.status == api_define.Code.SUCCESS) {
        data.cateList = res.message;
        data.childList = res.message[0].children;
      }
    });
    const selectName = (Idx, child) => {
      data.Index = Idx;
      data.childList = child;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.cateList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: data.Index == index ? 1 : "",
            c: item.cat_id,
            d: common_vendor.o(($event) => selectName(index, item.children), item.cat_id)
          };
        }),
        b: common_vendor.p({
          span: "3.5"
        }),
        c: common_vendor.f(data.childList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.f(item.children, (child, idx, i1) => {
              return {
                a: child.cat_icon,
                b: common_vendor.t(child.cat_name),
                c: idx,
                d: "235d63dd-5-" + i0 + "-" + i1 + "," + ("235d63dd-4-" + i0)
              };
            }),
            c: "235d63dd-4-" + i0 + ",235d63dd-3",
            d: index
          };
        }),
        d: common_vendor.p({
          col: 3,
          border: false
        }),
        e: common_vendor.p({
          span: "9"
        }),
        f: common_vendor.p({
          gutter: "16"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u5218\u6668\u594E/Desktop/uniApp/BestBuy-mall/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
