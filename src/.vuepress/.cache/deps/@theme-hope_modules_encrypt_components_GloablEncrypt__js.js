import {
  PasswordModal_default,
  useGlobalEcrypt
} from "./chunk-SYHVBTTP.js";
import "./chunk-4ZT4TUVR.js";
import "./chunk-VHCPYUCC.js";
import "./chunk-VHNLTIDY.js";
import "./chunk-FECFGNAG.js";
import "./chunk-U27KJSRC.js";
import "./chunk-YACYAO4R.js";
import "./chunk-YUNCEBFY.js";
import {
  defineComponent,
  h
} from "./chunk-4YVVQK3V.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-BGOVVDTY.js";
import "./chunk-5E3NKPRU.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/GloablEncrypt.js
var GloablEncrypt_default = defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
    return () => {
      var _a;
      return isGlobalEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateGlobalToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_GloablEncrypt__js
var theme_hope_modules_encrypt_components_GloablEncrypt_js_default = GloablEncrypt_default;
export {
  theme_hope_modules_encrypt_components_GloablEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_GloablEncrypt__js.js.map
