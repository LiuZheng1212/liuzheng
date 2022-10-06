"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-mask",
  emits: ["click"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: ""
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    zoom: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    maskClickAble: {
      type: Boolean,
      default: true
    },
    blur: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      zoomStyle: {
        transform: ""
      },
      scale: "scale(1.2, 1.2)"
    };
  },
  watch: {
    show(n) {
      if (n && this.zoom) {
        this.zoomStyle.transform = "scale(1, 1)";
      } else if (!n && this.zoom) {
        this.zoomStyle.transform = this.scale;
      }
    }
  },
  computed: {
    maskStyle() {
      let style = {};
      style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      if (this.show)
        style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.mask;
      else
        style.zIndex = -1;
      style.transition = `all ${this.duration / 1e3}s ease-in-out`;
      if (Object.keys(this.customStyle).length)
        style = __spreadValues(__spreadValues({}, style), this.customStyle);
      return style;
    },
    filterStyle() {
      let { blur } = this;
      let style = {};
      if (blur) {
        style.backdropFilter = `blur(${blur}rpx)`;
      }
      return style;
    }
  },
  methods: {
    click() {
      if (!this.maskClickAble)
        return;
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.maskStyle),
    b: common_vendor.s($data.zoomStyle),
    c: common_vendor.s($options.filterStyle),
    d: common_vendor.o((...args) => $options.click && $options.click(...args)),
    e: common_vendor.o(() => {
    }),
    f: $props.zoom ? 1 : "",
    g: $props.show ? 1 : ""
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6049abea"], ["__file", "C:/Users/65458/Desktop/liuzheng/BestBuy-mall/uni_modules/vk-uview-ui/components/u-mask/u-mask.vue"]]);
wx.createComponent(Component);
