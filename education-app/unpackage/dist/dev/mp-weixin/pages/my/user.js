"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const data = common_vendor.reactive({
      userList: [],
      token: ""
    });
    data.userList = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")) : [];
    data.token = localStorage.getItem("mxgEducationToken") ? localStorage.getItem("mxgEducationToken") : "";
    if (!data.token) {
      common_vendor.index.navigateTo({
        url: "/pages/loginView/loginView"
      });
    }
    const backLogin = () => {
      common_vendor.index.showModal({
        title: "\u786E\u5B9A\u9000\u51FA\u767B\u5F55\uFF1F",
        content: "\u9000\u51FA\u540E\u4E0D\u4F1A\u5220\u9664\u4EFB\u4F55\u5386\u53F2\u6570\u636E",
        success: function(res) {
          if (res.confirm) {
            localStorage.clear();
            common_vendor.index.navigateBack({});
            common_vendor.index.showToast({
              icon: "success",
              title: "\u9000\u51FA\u6210\u529F"
            });
          } else if (res.cancel)
            ;
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: data.token ? data.userList.imageUrl : "http://m.mengxuegu.com/static/logo.png",
        b: common_vendor.t(data.userList.username),
        c: common_vendor.t(data.userList.mobile),
        d: common_vendor.t(data.userList.nickName),
        e: common_vendor.t(data.userList.sex ? "\u5973" : "\u7537"),
        f: common_vendor.o(backLogin)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/65458/Desktop/liuzheng/education-app/pages/my/user.vue"]]);
wx.createPage(MiniProgramPage);
