"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../uilts/request.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  _easycom_u_swiper2();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  _easycom_u_swiper();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      banner: [],
      navList: []
    });
    api_api.getSwiperData().then((res) => {
      data.banner = res.message;
    });
    api_api.getNavData().then((res) => {
      console.log(res);
      data.navList = res.message;
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
            b: item.id
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u5218\u6668\u594E/Desktop/uniApp/BestBuy-mall/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
