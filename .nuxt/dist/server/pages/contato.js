exports.ids = [2];
exports.modules = {

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6486231a", content, true, context)
};

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contato_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contato_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contato_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contato_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contato_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contato_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contato-enter-active,.contato-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:1s}.contato-enter,.contato-leave-to{opacity:0}.contato{background-color:#f0f8ff;opacity:.8;color:#000;text-align:center}.contatos{background-color:#000;opacity:.9;padding:1rem}.contatos v-icon{margin-left:1rem}.contato h2{text-align:center;padding:1rem}.rede-social{margin:0 auto}.rede-social .iconS{font-size:3rem;margin:2rem auto}.rede-social a:link{text-decoration:none}@media only screen and (max-width:458px){.contato,.contato iframe{width:100%}.contatos{display:flex;flex-direction:column}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contato.vue?vue&type=template&id=50d377a5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contato"},[_vm._ssrNode("<h2 class=\"display-2\">Contatos</h2> <p class=\"black--text\">Se tiver qualquer dúvida, só entrar em contato</p> <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3732.48367765139!2d-37.08204357822539!3d-10.928425212737636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1597782225593!5m2!1spt-BR!2sbr\" width=\"600\" height=\"450\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" aria-hidden=\"false\" tabindex=\"0\" style=\"border:0;\"></iframe> "),_vm._ssrNode("<div class=\"contatos\">","</div>",[_c('v-icon',[_vm._v("mdi-cellphone-iphone")]),_vm._ssrNode(" <span class=\"white--text\">98801-2418</span> "),_c('v-icon',{staticClass:"ml-4"},[_vm._v("mdi-email")]),_vm._ssrNode(" <span class=\"white--text\">rodrigoluispersonal@yahoo.com.br</span> "),_c('v-icon',{staticClass:"ml-4"},[_vm._v("mdi-google-maps")]),_vm._ssrNode(" <span class=\"white--text\">Ruas das Delícias, 2424 B. Jabotiana</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"rede-social\">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.zap))+" target=\"new\" title=\"Whatsapp de Delícia\">","</a>",[_c('v-icon',{staticClass:"iconS black--text ml-16"},[_vm._v("mdi-whatsapp")])],1),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.insta))+" target=\"new\" title=\"Whatsapp de Delícia\">","</a>",[_c('v-icon',{staticClass:"iconS black--text ml-16"},[_vm._v("mdi-instagram")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contato.vue?vue&type=template&id=50d377a5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contato.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contatovue_type_script_lang_js_ = ({
  transition: "contato",

  data() {
    return {
      insta: 'https://www.instagram.com/rodrigoluispersonaltrainer/?hl=pt-br',
      zap: 'https://api.whatsapp.com/send?phone=5579988012418&text=Entrar em contato'
    };
  }

});
// CONCATENATED MODULE: ./pages/contato.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contatovue_type_script_lang_js_ = (contatovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(38);

// CONCATENATED MODULE: ./pages/contato.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contatovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "62632b80"
  
)

/* harmony default export */ var contato = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=contato.js.map