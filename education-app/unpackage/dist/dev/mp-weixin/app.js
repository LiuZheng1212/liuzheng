"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/category/category.js";
  "./pages/article/article.js";
  "./pages/question/question.js";
  "./pages/my/my.js";
  "./pages/my/study.js";
  "./pages/my/setting.js";
  "./pages/my/user.js";
  "./pages/my/about.js";
  "./pages/my/feedback.js";
  "./pages/searchView/searchView.js";
  "./pages/loginView/loginView.js";
  "./pages/detailView/detailView.js";
  "./pages/article/details.js";
  "./pages/question/details.js";
  "./pages/order/order.js";
  "./pages/content/content.js";
  "./pages/order/confirm.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/65458/Desktop/liuzheng/education-app/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
