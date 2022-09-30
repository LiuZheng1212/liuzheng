"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../api/http.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_parse2 = common_vendor.resolveComponent("u-parse");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_swiper2 + _easycom_u_icon2 + _easycom_u_parse2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_parse = () => "../../uni_modules/vk-uview-ui/components/u-parse/u-parse.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_icon + _easycom_u_parse + _easycom_u_grid_item + _easycom_u_grid)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail",
  setup(__props) {
    const data = common_vendor.reactive({
      goodsItem: {}
    });
    common_vendor.onLoad((opt) => {
      api_api.getGoodsDetail(opt.id).then((res) => {
        console.log(res);
        data.goodsItem = res.message;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: data.goodsItem.pics,
          height: "680",
          name: "pics_mid_url"
        }),
        b: common_vendor.t(data.goodsItem.goods_price),
        c: common_vendor.t(data.goodsItem.goods_name),
        d: common_vendor.p({
          name: "star"
        }),
        e: common_vendor.p({
          html: data.goodsItem.goods_introduce
        }),
        f: common_vendor.p({
          name: "photo",
          size: 46
        }),
        g: common_vendor.p({
          name: "lock",
          size: 46
        }),
        h: common_vendor.p({
          name: "hourglass",
          size: 46
        }),
        i: common_vendor.p({
          name: "hourglass",
          size: 46
        }),
        j: common_vendor.p({
          name: "hourglass",
          size: 46
        }),
        k: common_vendor.p({
          col: 5
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3e159eb4"], ["__file", "C:/Users/65458/Desktop/liuzheng/best-buy-bail/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
