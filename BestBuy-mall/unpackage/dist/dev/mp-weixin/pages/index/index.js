"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
var api_define = require("../../api/define.js");
require("../../uilts/request.js");
if (!Array) {
  const _easycom_searchInput2 = common_vendor.resolveComponent("searchInput");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_searchInput2 + _easycom_u_swiper2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_searchInput = () => "../../components/searchInput/searchInput.js";
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_searchInput + _easycom_u_swiper + _easycom_u_grid_item + _easycom_u_grid + homeFlor)();
}
const homeFlor = () => "./homeFlor/homeFlor.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      banner: [],
      navList: []
    });
    api_api.getSwiperData().then((res) => {
      if (res.meta.status == api_define.Code.SUCCESS) {
        data.banner = res.message;
      }
    });
    api_api.getNavData().then((res) => {
      if (res.meta.status == api_define.Code.SUCCESS) {
        data.navList = res.message;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: data.banner,
          name: "image_src",
          height: "300"
        }),
        b: common_vendor.f(data.navList, (item, k0, i0) => {
          return {
            a: item.image_src,
            b: item.id,
            c: "c237baba-3-" + i0 + ",c237baba-2"
          };
        }),
        c: common_vendor.p({
          col: 4,
          border: false
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u5218\u6668\u594E/Desktop/uniApp/BestBuy-mall/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
