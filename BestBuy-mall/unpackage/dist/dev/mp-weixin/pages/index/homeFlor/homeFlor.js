"use strict";
var common_vendor = require("../../../common/vendor.js");
var api_api = require("../../../api/api.js");
var api_define = require("../../../api/define.js");
require("../../../uilts/request.js");
if (!Array) {
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_col2 + _easycom_u_row2)();
}
const _easycom_u_grid_item = () => "../../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_col = () => "../../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_row = () => "../../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_u_grid_item + _easycom_u_grid + _easycom_u_col + _easycom_u_row)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "homeFlor",
  setup(__props) {
    const data = common_vendor.reactive({
      floorList: []
    });
    api_api.getFloor().then((res) => {
      if (res.meta.status == api_define.Code.SUCCESS) {
        data.floorList = res.message;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.floorList, (item, index, i0) => {
          return {
            a: item.floor_title.image_src,
            b: item.product_list[0].image_src,
            c: "69dc6113-3-" + i0 + "," + ("69dc6113-2-" + i0),
            d: "69dc6113-2-" + i0 + "," + ("69dc6113-1-" + i0),
            e: "69dc6113-1-" + i0 + "," + ("69dc6113-0-" + i0),
            f: common_vendor.f(item.product_list, (child, Idx, i1) => {
              return {
                a: child.image_src,
                b: Idx,
                c: Idx != 0,
                d: "69dc6113-6-" + i0 + "-" + i1 + "," + ("69dc6113-5-" + i0)
              };
            }),
            g: "69dc6113-5-" + i0 + "," + ("69dc6113-4-" + i0),
            h: "69dc6113-4-" + i0 + "," + ("69dc6113-0-" + i0),
            i: "69dc6113-0-" + i0,
            j: index
          };
        }),
        b: common_vendor.p({
          col: 1,
          border: false
        }),
        c: common_vendor.p({
          span: "4"
        }),
        d: common_vendor.p({
          col: 2,
          border: false
        }),
        e: common_vendor.p({
          span: "8"
        }),
        f: common_vendor.p({
          gutter: "16",
          justify: "center"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/65458/Desktop/liuzheng/BestBuy-mall/pages/index/homeFlor/homeFlor.vue"]]);
wx.createComponent(Component);
