/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, {
  "default": function() { return components; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Buttons/JdRoundButton.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var JdRoundButtonvue_type_script_setup_true_lang_js = ({
  __name: 'JdRoundButton',
  props: {
    className: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("button", {
        type: "button",
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["rounded", props.className])
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default")], 2);
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Buttons/JdRoundButton.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./src/components/Buttons/JdRoundButton.vue



const __exports__ = JdRoundButtonvue_type_script_setup_true_lang_js;

/* harmony default export */ var JdRoundButton = (__exports__);
;// CONCATENATED MODULE: ./src/components/index.js

/* harmony default export */ var components = ({
  JdRoundButton: JdRoundButton
});
;// CONCATENATED MODULE: ./src/index.js

const componentsList = components_namespaceObject?.default;
const AllComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      Vue.component(name, componentsList[name]);
    });
  }
};
/* harmony default export */ var src_0 = (AllComponents);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=jd-components.common.js.map