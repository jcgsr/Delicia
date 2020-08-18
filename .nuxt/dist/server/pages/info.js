exports.ids = [6];
exports.modules = {

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7f4eb4f0", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".info-enter-active,.info-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:1s}.info-enter,.info-leave-to{opacity:0}.dicas{display:flex}.dica p{max-width:40%;margin:0 auto}.info{background-color:#f0f8ff;color:#000;opacity:.8;padding:1rem;text-align:center}@media only screen and (max-width:458px){.dicas{display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/info.vue?vue&type=template&id=fec88de6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"info"},[_vm._ssrNode("<h2 class=\"display-2\">SE NÃO FOR INDIVIDUAL, NÃO VALE!</h2> <h3 class=\"display-6 mt-4\">\n    Olá, visitante! Pra encurtar, eu sou Delícia (LGTBQ+) e sou um\n    <strong>Personal Trainer</strong> (PT) formado em Educação Física em 2009? na UFS com especialização no exterior (Ryachuelo-SE) e Pós-Graduação na Bahia. Também sou professor de Ed. Física, de Sociologia, de Sociedade e Cultura, de Artes e Coach. Dê uma olhada no meu portfólio.\n  </h3> "),_vm._ssrNode("<div class=\"dicas mt-8\">","</div>",[_vm._ssrNode("<div class=\"dica\">","</div>",[_c('v-icon',{staticClass:"display-4"},[_vm._v("mdi-food")]),_vm._ssrNode(" <h3 class=\"pink--text\">COMA MELHOR</h3> <p>Tome muito leite de Jumentum. Lorem ipsum dolor sit amet.</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"dica\">","</div>",[_c('v-icon',{staticClass:"display-4"},[_vm._v("mdi-sleep")]),_vm._ssrNode(" <h3 class=\"pink--text\">Durma Bem</h3> <p>Durma como um ursum hiebernandum. Lorem ipsum dolor sit amet.</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"dica\">","</div>",[_c('v-icon',{staticClass:"display-4"},[_vm._v("mdi-run-fast")]),_vm._ssrNode(" <h3 class=\"pink--text\">EXERCITE-SE</h3> <p>Corra como Bolsonarum de perguntas e debates. Lorem ipsum dolor sit amet.</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"dica\">","</div>",[_c('v-icon',{staticClass:"display-4"},[_vm._v("mdi-scale-bathroom")]),_vm._ssrNode(" <h3 class=\"pink--text\">PERCA PESO</h3> <p>Técnicas fantásticas de bulimiam. Lorem ipsum dolor sit amet.</p>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/info.vue?vue&type=template&id=fec88de6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/info.vue?vue&type=script&lang=js&
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
/* harmony default export */ var infovue_type_script_lang_js_ = ({
  transition: "info"
});
// CONCATENATED MODULE: ./pages/info.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_infovue_type_script_lang_js_ = (infovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(38);

// CONCATENATED MODULE: ./pages/info.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_infovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4bc01a88"
  
)

/* harmony default export */ var info = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=info.js.map