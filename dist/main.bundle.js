"use strict";
(self["webpackChunkkanban_board"] = self["webpackChunkkanban_board"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/chef.png */ "./src/images/chef.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-size: 20px;\r\n  font-family: 'El Messiri', sans-serif;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-style: normal;\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  padding-top: 15px;\r\n  margin-bottom: 72px;\r\n}\r\n\r\n.flexRow {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-around;\r\n}\r\n\r\n.image {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  height: 80px;\r\n  width: 80px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.navLinks {\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.navLinks a {\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n  font-size: 17px;\r\n  line-height: 20px;\r\n  color: #344563;\r\n  cursor: pointer;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.navLinks a:nth-child(1) {\r\n  margin-right: 10px;\r\n}\r\n\r\n.display {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  margin-bottom: 56px;\r\n}\r\n\r\n.card .img {\r\n  width: 60%;\r\n}\r\n\r\n.card img {\r\n  width: 100%;\r\n}\r\n\r\n.name {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.add-like {\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 8px;\r\n  background: none;\r\n  font-size: 18px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton.comment-btn {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nfooter {\r\n  padding: 15px;\r\n  margin-top: 50px;\r\n  border-top: 2px solid gray;\r\n}\r\n\r\n#comment-detail {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.comment-content {\r\n  color: black;\r\n  text-align: justify;\r\n  width: 90%;\r\n  border: 2px solid #000;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n\r\n  /* Stay in place */\r\n  z-index: 1;\r\n\r\n  /* Sit on top */\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 2px solid;\r\n  top: 50%;\r\n  width: 100%;\r\n\r\n  /* Full width */\r\n  height: 100%;\r\n\r\n  /* Full height */\r\n  overflow: auto;\r\n\r\n  /* Enable scroll if needed */\r\n  background-color: #fff;\r\n}\r\n\r\n.close-btn {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: none;\r\n  float: right;\r\n  position: absolute;\r\n  margin-top: 3%;\r\n  font-weight: 900;\r\n  color: #000;\r\n  left: 90%;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-top {\r\n  display: flex;\r\n  width: 90%;\r\n  border: none;\r\n  max-width: 100%;\r\n}\r\n\r\n.img-meal-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-self: center;\r\n  width: 90%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.img-meal-container img {\r\n  height: 100vh;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.detail {\r\n  display: contents;\r\n  font-weight: 500;\r\n}\r\n\r\n.popup-description {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\narticle {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 11%;\r\n  width: 80%;\r\n  max-width: 100%;\r\n  text-align: justify;\r\n  padding: 4px;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.desc-title {\r\n  margin-bottom: 0.6rem;\r\n}\r\n\r\n#spanh {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.comment-date {\r\n  display: flex;\r\n  margin-left: 11%;\r\n}\r\n\r\n.popup_form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.detail-4 {\r\n  text-align: center;\r\n  padding-bottom: 2rem;\r\n  padding-top: 2rem;\r\n}\r\n\r\n#username,\r\n#insight,\r\n.start-date,\r\n.end-date {\r\n  display: block;\r\n  padding: 1rem;\r\n  border: 4px solid black;\r\n  width: 50%;\r\n}\r\n\r\n#insight {\r\n  width: 50%;\r\n  height: 35vh;\r\n}\r\n\r\n#comment {\r\n  height: 13vh;\r\n  box-shadow: 10px 16px;\r\n  width: 50%;\r\n  border: 3px solid #000;\r\n  margin-bottom: 20rem;\r\n}\r\n\r\n.comment-btn,\r\n.reservation-btn {\r\n  box-shadow: 10px 8px;\r\n  border: 3px solid #000;\r\n}\r\n\r\n.reserve-date {\r\n  margin-left: 11%;\r\n  display: flex;\r\n}\r\n\r\n#reserve-detail {\r\n  padding-left: 1rem;\r\n}\r\n\r\n#reserve {\r\n  box-shadow: 10px 8px;\r\n  margin-bottom: 6rem;\r\n  width: 50%;\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-size: 20px;\r\n  font-family: 'El Messiri', sans-serif;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-style: normal;\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  padding-top: 15px;\r\n  margin-bottom: 72px;\r\n}\r\n\r\n.flexRow {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-around;\r\n}\r\n\r\n.image {\r\n  background-image: url(\"./images/chef.png\");\r\n  height: 80px;\r\n  width: 80px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.navLinks {\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.navLinks a {\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n  font-size: 17px;\r\n  line-height: 20px;\r\n  color: #344563;\r\n  cursor: pointer;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.navLinks a:nth-child(1) {\r\n  margin-right: 10px;\r\n}\r\n\r\n.display {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  margin-bottom: 56px;\r\n}\r\n\r\n.card .img {\r\n  width: 60%;\r\n}\r\n\r\n.card img {\r\n  width: 100%;\r\n}\r\n\r\n.name {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.add-like {\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 8px;\r\n  background: none;\r\n  font-size: 18px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton.comment-btn {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nfooter {\r\n  padding: 15px;\r\n  margin-top: 50px;\r\n  border-top: 2px solid gray;\r\n}\r\n\r\n#comment-detail {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.comment-content {\r\n  color: black;\r\n  text-align: justify;\r\n  width: 90%;\r\n  border: 2px solid #000;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n\r\n  /* Stay in place */\r\n  z-index: 1;\r\n\r\n  /* Sit on top */\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 2px solid;\r\n  top: 50%;\r\n  width: 100%;\r\n\r\n  /* Full width */\r\n  height: 100%;\r\n\r\n  /* Full height */\r\n  overflow: auto;\r\n\r\n  /* Enable scroll if needed */\r\n  background-color: #fff;\r\n}\r\n\r\n.close-btn {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: none;\r\n  float: right;\r\n  position: absolute;\r\n  margin-top: 3%;\r\n  font-weight: 900;\r\n  color: #000;\r\n  left: 90%;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-top {\r\n  display: flex;\r\n  width: 90%;\r\n  border: none;\r\n  max-width: 100%;\r\n}\r\n\r\n.img-meal-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-self: center;\r\n  width: 90%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.img-meal-container img {\r\n  height: 100vh;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.detail {\r\n  display: contents;\r\n  font-weight: 500;\r\n}\r\n\r\n.popup-description {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\narticle {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 11%;\r\n  width: 80%;\r\n  max-width: 100%;\r\n  text-align: justify;\r\n  padding: 4px;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.desc-title {\r\n  margin-bottom: 0.6rem;\r\n}\r\n\r\n#spanh {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.comment-date {\r\n  display: flex;\r\n  margin-left: 11%;\r\n}\r\n\r\n.popup_form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.detail-4 {\r\n  text-align: center;\r\n  padding-bottom: 2rem;\r\n  padding-top: 2rem;\r\n}\r\n\r\n#username,\r\n#insight,\r\n.start-date,\r\n.end-date {\r\n  display: block;\r\n  padding: 1rem;\r\n  border: 4px solid black;\r\n  width: 50%;\r\n}\r\n\r\n#insight {\r\n  width: 50%;\r\n  height: 35vh;\r\n}\r\n\r\n#comment {\r\n  height: 13vh;\r\n  box-shadow: 10px 16px;\r\n  width: 50%;\r\n  border: 3px solid #000;\r\n  margin-bottom: 20rem;\r\n}\r\n\r\n.comment-btn,\r\n.reservation-btn {\r\n  box-shadow: 10px 8px;\r\n  border: 3px solid #000;\r\n}\r\n\r\n.reserve-date {\r\n  margin-left: 11%;\r\n  display: flex;\r\n}\r\n\r\n#reserve-detail {\r\n  padding-left: 1rem;\r\n}\r\n\r\n#reserve {\r\n  box-shadow: 10px 8px;\r\n  margin-bottom: 6rem;\r\n  width: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_displaylist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displaylist.js */ "./src/modules/displaylist.js");
/* harmony import */ var _modules_addLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addLike.js */ "./src/modules/addLike.js");
/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemCounter.js */ "./src/modules/itemCounter.js");
/* harmony import */ var _modules_displayCommentPopup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/displayCommentPopup.js */ "./src/modules/displayCommentPopup.js");
/* harmony import */ var _modules_displayReservePopup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/displayReservePopup.js */ "./src/modules/displayReservePopup.js");
 // eslint-disable-line







const cardsContainer = document.querySelector('.display');
const commURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pwxi6JBpjAwLosQxiICj/comments';
const resURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pwxi6JBpjAwLosQxiICj/reservations';

document.addEventListener('DOMContentLoaded', async () => {
  await (0,_modules_displaylist_js__WEBPACK_IMPORTED_MODULE_1__.displayMeals)(cardsContainer);

  const allMeals = document.querySelectorAll('.card');
  const itemCounter = document.querySelector('.counter');
  itemCounter.textContent = (0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])([...allMeals]);

  const likes = document.querySelectorAll('.likes-info');
  [...likes].forEach(async (like) => {
    await (0,_modules_addLike_js__WEBPACK_IMPORTED_MODULE_2__.displayLike)(like);
  });
});

window.addEventListener('click', async (event) => {
  const btnLike = event.target;
  if (btnLike.classList.contains('add-like')) {
    const Id = btnLike.getAttribute('data-id');
    await (0,_modules_addLike_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(Id);
    const like = btnLike.nextElementSibling;
    await (0,_modules_addLike_js__WEBPACK_IMPORTED_MODULE_2__.displayLike)(like);
  }
});

//
const commentClick = async (meals) => {
  const [id, image, name, category, origin] = meals;
  await (0,_modules_displayCommentPopup_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id, image, name, category, origin, commURL);
  const modalpopup = document.querySelector('.popup');
  modalpopup.classList.add('hidden');
  document.body.classList.add('vertical-scroll');
};

//
const reserveClick = async (meals) => {
  const [id, image, name, category, origin] = meals;
  await (0,_modules_displayReservePopup_js__WEBPACK_IMPORTED_MODULE_5__["default"])(id, image, name, category, origin, resURL);
  const modalpopup = document.querySelector('.popup');
  modalpopup.classList.add('hidden');
  document.body.classList.add('vertical-scroll');
};
window.commentClick = commentClick;
window.reserveClick = reserveClick;

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "displayLike": () => (/* binding */ displayLike)
/* harmony export */ });
const urlLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pwxi6JBpjAwLosQxiICj/likes';

const getLikes = async () => {
  const res = await fetch(urlLink);
  const data = await res.json();
  return data;
};

const addLike = async (id) => {
  await fetch(urlLink, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

const displayLike = async (liketxt) => {
  const Id = liketxt.getAttribute('data-id');
  const listLikes = await getLikes();
  const numOfLikes = listLikes.filter((likeObj) => likeObj.item_id === Id);
  if (numOfLikes.length > 0) {
    liketxt.textContent = `${numOfLikes[0].likes} Likes`;
  }
};



/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const comments = (comment, data) => {
  comment.innerHTML = '';
  if (data.error) {
    data = [];
  }
  data.map((dataId) => {
    const commentDate = document.createElement('div');
    commentDate.setAttribute('class', 'comment-date');
    const strong = document.createElement('strong');
    strong.setAttribute('class', 'comment-detail');
    strong.innerText = `${dataId.creation_date}`;
    const commentDetail = document.createElement('p');
    commentDetail.setAttribute('class', 'comment-detail');
    commentDetail.setAttribute('id', 'comment-detail');
    commentDetail.innerText = `${dataId.username}: ${dataId.comment}`;
    commentDate.appendChild(strong);
    commentDate.appendChild(commentDetail);
    comment.appendChild(commentDate);

    return null;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const count = (com, cout) => {
  const sp = cout.length ? cout.length : 0;
  const span1 = document.createElement('span');
  span1.setAttribute('id', 'spanh');
  span1.innerText = `Comments (${sp})`;
  com.appendChild(span1);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (count);


/***/ }),

/***/ "./src/modules/displayCommentPopup.js":
/*!********************************************!*\
  !*** ./src/modules/displayCommentPopup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displaylist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaylist.js */ "./src/modules/displaylist.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ "./src/modules/comment.js");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");




const commentContent = document.querySelector('.comment-content');

const getInfo = async (id) => {
  const res = await (0,_displaylist_js__WEBPACK_IMPORTED_MODULE_0__.getMealData)();
  const info = res.splice(0);
  const filtered = info.filter((int) => parseInt(int.id, 10) === id);
  return filtered[0].cookingInstruction;
};

const fetchData = async (id) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pwxi6JBpjAwLosQxiICj/comments?item_id=${id}`);
  const data2 = res.json();
  return data2.then((data) => data);
};

const displayComment = async (id, image, name, category, origin, data) => {
  const elp = await fetchData(id);

  const info2 = await getInfo(id);
  const popup = document.createElement('div');
  popup.setAttribute('class', 'popup');

  const popupTop = document.createElement('div');
  popupTop.setAttribute('class', 'popup-top');

  const popupItemImage = document.createElement('div');
  popupItemImage.setAttribute('class', 'img-meal-container');

  const imageMeal = document.createElement('img');
  imageMeal.setAttribute('src', `${image}`);
  imageMeal.setAttribute('class', 'img-meal');
  imageMeal.setAttribute('alt', 'image');

  popupItemImage.appendChild(imageMeal);

  const closebtn = document.createElement('button');
  closebtn.setAttribute('class', 'close-btn');

  const closeI = document.createElement('i');
  closeI.setAttribute('class', 'fa-solid fa-xmark');

  closebtn.appendChild(closeI);

  popupTop.appendChild(popupItemImage);
  popupTop.appendChild(closebtn);

  const popupDescriptionContainer = document.createElement('div');
  popupDescriptionContainer.setAttribute('class', 'popup-description-container');

  const popupDescription = document.createElement('div');
  popupDescription.setAttribute('class', 'popup-description');

  const nameTitle = document.createElement('h3');
  nameTitle.setAttribute('class', 'desc-title');
  nameTitle.innerText = 'Name: ';

  const nameDetail = document.createElement('p');
  nameDetail.setAttribute('class', 'detail');
  nameDetail.innerText = `${name}`;
  nameTitle.appendChild(nameDetail);

  const categoryTitle = document.createElement('h3');
  categoryTitle.setAttribute('class', 'desc-title');
  categoryTitle.innerText = 'Category: ';

  const categoryDetail = document.createElement('p');
  categoryDetail.setAttribute('class', 'detail');
  categoryDetail.innerText = `${category}`;
  categoryTitle.appendChild(categoryDetail);

  const originTitle = document.createElement('h3');
  originTitle.setAttribute('class', 'desc-title');
  originTitle.innerText = 'Origin: ';

  const originDetail = document.createElement('p');
  originDetail.setAttribute('class', 'detail');
  originDetail.innerText = `${origin}`;
  originTitle.appendChild(originDetail);

  popupDescription.appendChild(nameTitle);
  popupDescription.appendChild(categoryTitle);
  popupDescription.appendChild(originTitle);

  const instructionContainer = document.createElement('article');
  const instructionTitle = document.createElement('h3');
  instructionTitle.setAttribute('class', 'desc-title');
  instructionTitle.innerText = 'Instruction';

  const instructionDetail = document.createElement('p');
  instructionDetail.setAttribute('class', 'detail');
  instructionDetail.innerText = `${info2}`;

  instructionContainer.appendChild(instructionTitle);
  instructionContainer.appendChild(instructionDetail);
  popupDescriptionContainer.appendChild(popupDescription);
  popupDescriptionContainer.appendChild(instructionContainer);

  const popupComment = document.createElement('div');
  const commentTitle = document.createElement('h3');
  commentTitle.setAttribute('class', 'desc-title detail-3');
  commentTitle.innerText = '';
  (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(commentTitle, elp);
  popupComment.appendChild(commentTitle);

  const commentHolder = document.createElement('div');
  commentHolder.setAttribute('class', 'comment_holder');
  popupComment.appendChild(commentHolder);
  (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentHolder, elp);

  const popupForm = document.createElement('form');
  popupForm.setAttribute('class', 'popup_form');
  popupForm.setAttribute('id', 'form');
  const formHeading = document.createElement('h3');
  formHeading.setAttribute('class', 'desc-detail detail-4');
  formHeading.innerText = 'Add a Comment';
  const username = document.createElement('input');
  username.setAttribute('name', 'username');
  username.setAttribute('class', 'detail');
  username.setAttribute('id', 'username');
  username.setAttribute('minlength', '1');
  username.setAttribute('placeholder', 'Your name');
  username.setAttribute('required', true);
  username.setAttribute('type', 'text');
  const insight = document.createElement('input');
  insight.setAttribute('name', 'insight');
  insight.setAttribute('class', 'detail');
  // insight.setAttribute('value', ' ');
  insight.setAttribute('id', 'insight');
  insight.setAttribute('minlength', '1');
  insight.setAttribute('placeholder', 'Your Insight');
  insight.setAttribute('required', true);
  insight.setAttribute('type', 'text');
  const formbutton = document.createElement('button');
  formbutton.setAttribute('type', 'submit');
  formbutton.setAttribute('class', 'button1');
  formbutton.setAttribute('id', 'comment');
  formbutton.innerText = 'Comment';

  popupForm.appendChild(formHeading);
  popupForm.appendChild(username);
  popupForm.appendChild(insight);
  popupForm.appendChild(formbutton);

  popup.appendChild(popupTop);
  popup.appendChild(popupDescriptionContainer);
  popup.appendChild(popupComment);
  popup.appendChild(popupForm);

  commentContent.appendChild(popup);

  closebtn.addEventListener('click', (e) => {
    e.preventDefault();
    const modalpopup = document.querySelector('.popup');
    modalpopup.classList.remove('hidden');
    commentContent.innerHTML = '';
    document.body.classList.remove('vertical-scroll');
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const thefetch = await fetch(data, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: id,
        username: form.username.value,
        comment: form.insight.value,
      }),
    });
    const { status } = thefetch;
    if (status === 201) {
      commentHolder.innerHTML = '';
      commentTitle.innerHTML = '';
      form.reset();
      const p = await fetchData(id);
      (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentHolder, p);
      (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(commentTitle, p);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComment);


/***/ }),

/***/ "./src/modules/displayReservePopup.js":
/*!********************************************!*\
  !*** ./src/modules/displayReservePopup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displaylist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaylist.js */ "./src/modules/displaylist.js");
/* harmony import */ var _reserve_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reserve.js */ "./src/modules/reserve.js");
/* harmony import */ var _reserveCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reserveCounter.js */ "./src/modules/reserveCounter.js");




const reserveContent = document.querySelector('.reserve-content');

const getInfo = async (id) => {
  const res = await (0,_displaylist_js__WEBPACK_IMPORTED_MODULE_0__.getMealData)();
  const info = res.splice(0);
  const filtered = info.filter((int) => parseInt(int.id, 10) === id);
  return filtered[0].cookingInstruction;
};

const fetchData = async (id) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pwxi6JBpjAwLosQxiICj/reservations?item_id=${id}`);
  const data2 = res.json();
  return data2.then((data) => data);
};

const displayReservation = async (id, image, name, category, origin, data) => {
  const elp = await fetchData(id);

  const info2 = await getInfo(id);
  const popup = document.createElement('div');
  popup.setAttribute('class', 'popup');

  const popupTop = document.createElement('div');
  popupTop.setAttribute('class', 'popup-top');

  const popupItemImage = document.createElement('div');
  popupItemImage.setAttribute('class', 'img-meal-container');

  const imageMeal = document.createElement('img');
  imageMeal.setAttribute('src', `${image}`);
  imageMeal.setAttribute('class', 'img-meal');
  imageMeal.setAttribute('alt', 'image');

  popupItemImage.appendChild(imageMeal);

  const closebtn = document.createElement('button');
  closebtn.setAttribute('class', 'close-btn');

  const closeI = document.createElement('i');
  closeI.setAttribute('class', 'fa-solid fa-xmark');

  closebtn.appendChild(closeI);

  popupTop.appendChild(popupItemImage);
  popupTop.appendChild(closebtn);

  const popupDescriptionContainer = document.createElement('div');
  popupDescriptionContainer.setAttribute('class', 'popup-description-container');

  const popupDescription = document.createElement('div');
  popupDescription.setAttribute('class', 'popup-description');

  const nameTitle = document.createElement('h3');
  nameTitle.setAttribute('class', 'desc-title');
  nameTitle.innerText = 'Name: ';

  const nameDetail = document.createElement('p');
  nameDetail.setAttribute('class', 'detail');
  nameDetail.innerText = `${name}`;
  nameTitle.appendChild(nameDetail);

  const categoryTitle = document.createElement('h3');
  categoryTitle.setAttribute('class', 'desc-title');
  categoryTitle.innerText = 'Category: ';

  const categoryDetail = document.createElement('p');
  categoryDetail.setAttribute('class', 'detail');
  categoryDetail.innerText = `${category}`;
  categoryTitle.appendChild(categoryDetail);

  const originTitle = document.createElement('h3');
  originTitle.setAttribute('class', 'desc-title');
  originTitle.innerText = 'Origin: ';

  const originDetail = document.createElement('p');
  originDetail.setAttribute('class', 'detail');
  originDetail.innerText = `${origin}`;
  originTitle.appendChild(originDetail);

  popupDescription.appendChild(nameTitle);
  popupDescription.appendChild(categoryTitle);
  popupDescription.appendChild(originTitle);

  const instructionContainer = document.createElement('article');
  const instructionTitle = document.createElement('h3');
  instructionTitle.setAttribute('class', 'desc-title');
  instructionTitle.innerText = 'Instruction';

  const instructionDetail = document.createElement('p');
  instructionDetail.setAttribute('class', 'detail');
  instructionDetail.innerText = `${info2}`;

  instructionContainer.appendChild(instructionTitle);
  instructionContainer.appendChild(instructionDetail);
  popupDescriptionContainer.appendChild(popupDescription);
  popupDescriptionContainer.appendChild(instructionContainer);

  const popupComment = document.createElement('div');
  const commentTitle = document.createElement('h3');
  commentTitle.setAttribute('class', 'desc-title detail-3');
  commentTitle.innerText = '';
  (0,_reserveCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(commentTitle, elp);
  popupComment.appendChild(commentTitle);

  const commentHolder = document.createElement('div');
  commentHolder.setAttribute('class', 'comment_holder');
  popupComment.appendChild(commentHolder);
  (0,_reserve_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentHolder, elp);

  const popupForm = document.createElement('form');
  popupForm.setAttribute('class', 'popup_form');
  popupForm.setAttribute('id', 'form');
  const formHeading = document.createElement('h3');
  formHeading.setAttribute('class', 'desc-detail detail-4');
  formHeading.innerText = 'Add a reservation';
  const username = document.createElement('input');
  username.setAttribute('name', 'username');
  username.setAttribute('class', 'detail');
  username.setAttribute('id', 'username');
  username.setAttribute('minlength', '1');
  username.setAttribute('placeholder', 'Your name');
  username.setAttribute('required', true);
  username.setAttribute('type', 'text');
  const startDate = document.createElement('input');
  startDate.setAttribute('name', 'start_date');
  startDate.setAttribute('class', 'start-date');
  startDate.setAttribute('value', 'yyyy-MM-dd');
  startDate.setAttribute('required', true);
  startDate.setAttribute('type', 'date');
  const endDate = document.createElement('input');
  endDate.setAttribute('name', 'end_date');
  endDate.setAttribute('class', 'end-date');
  endDate.setAttribute('value', 'yyyy-MM-dd');
  endDate.setAttribute('required', true);
  endDate.setAttribute('type', 'date');
  const formbutton = document.createElement('button');
  formbutton.setAttribute('type', 'submit');
  formbutton.setAttribute('class', 'button1');
  formbutton.setAttribute('id', 'reserve');
  formbutton.innerText = 'Reservation';

  popupForm.appendChild(formHeading);
  popupForm.appendChild(username);
  popupForm.appendChild(startDate);
  popupForm.appendChild(endDate);
  popupForm.appendChild(formbutton);

  popup.appendChild(popupTop);
  popup.appendChild(popupDescriptionContainer);
  popup.appendChild(popupComment);
  popup.appendChild(popupForm);

  reserveContent.appendChild(popup);

  closebtn.addEventListener('click', (e) => {
    e.preventDefault();
    const modalpopup = document.querySelector('.popup');
    modalpopup.classList.remove('hidden');
    reserveContent.innerHTML = '';
    document.body.classList.remove('vertical-scroll');
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const thefetch = await fetch(data, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: id,
        username: username.value,
        date_start: startDate.value,
        date_end: endDate.value,
      }),
    });
    const { status } = thefetch;
    if (status === 201) {
      commentHolder.innerHTML = '';
      commentTitle.innerHTML = '';
      form.reset();
      const p = await fetchData(id);
      (0,_reserve_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentHolder, p);
      (0,_reserveCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(commentTitle, p);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayReservation);

/***/ }),

/***/ "./src/modules/displaylist.js":
/*!************************************!*\
  !*** ./src/modules/displaylist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMeals": () => (/* binding */ displayMeals),
/* harmony export */   "getMealData": () => (/* binding */ getMealData)
/* harmony export */ });
const getMealList = async (API_URL) => {
  const res = await fetch(API_URL);
  const data = await res.json();
  const listMeal = data.meals.slice(0, 25);
  return listMeal;
};

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

const getMealData = async () => {
  const arr = [];
  const mealList = await getMealList(`${API_URL}`);
  mealList.forEach((item) => {
    const newObjArr = {
      id: item.idMeal,
      image: item.strMealThumb,
      name: item.strMeal,
      category: item.strCategory,
      origin: item.strArea,
      cookingInstruction: item.strInstructions,
    };
    arr.push(newObjArr);
  });
  return arr;
};

const displayMeals = async (container) => {
  const meals = await getMealData();
  meals.forEach((meal) => {
    const mealCard = `
    <div class="card">
    <div class="img">
 <img src="${meal.image}" alt="${meal.image}">
    </div>
            <div class="content">
                <div class="name">
                    <h3>${meal.name}</h3>
                    <div class="likes" id="${meal.id}">
                        <i class="fa-solid fa-heart add-like" data-id="${meal.id}"></i>
                        <p class="likes-info" data-id="${meal.id}">0 Likes</p>
                    </div>
                </div>
              <button class="comment-btn" data-id="${meal.id}" onClick="commentClick([${meal.id}, '${meal.image}', '${meal.name}', '${meal.category}', '${meal.origin}'])">Comments</button>
          <button class="reservation-btn" data-id="${meal.id}" onClick="reserveClick([${meal.id}, '${meal.image}', '${meal.name}', '${meal.category}', '${meal.origin}'])">Reservations</button>
            </div>
            </div>`;
    container.innerHTML += mealCard;
  });
};



/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mealCounter = (meal) => {
  const count = meal.length;
  return count;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCounter);

/***/ }),

/***/ "./src/modules/reserve.js":
/*!********************************!*\
  !*** ./src/modules/reserve.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reserves = (reserve, data) => {
  reserve.innerHTML = '';
  if (data.error) {
    data = [];
  }
  data.map((dataId) => {
    const reserveDate = document.createElement('div');
    reserveDate.setAttribute('class', 'reserve-date');
    const bold = document.createElement('b');
    bold.setAttribute('class', 'reserve-detail');
    bold.innerText = `${dataId.date_start} - ${dataId.date_end}`;
    const reserveDetail = document.createElement('p');
    reserveDetail.setAttribute('class', 'reserve-detail');
    reserveDetail.setAttribute('id', 'reserve-detail');
    reserveDetail.innerText = `${dataId.username}`;
    reserveDate.appendChild(bold);
    reserveDate.appendChild(reserveDetail);
    reserve.appendChild(reserveDate);

    return null;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reserves);

/***/ }),

/***/ "./src/modules/reserveCounter.js":
/*!***************************************!*\
  !*** ./src/modules/reserveCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reserveCount = (res, count) => {
  const sp = count.length ? count.length : 0;
  const span1 = document.createElement('span');
  span1.setAttribute('id', 'spanh');
  span1.innerText = `Reservations (${sp})`;
  res.appendChild(span1);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reserveCount);

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db7687032aadf3a94d02.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFB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QUFDQTtBQUNBLHFDQUFxQyxHQUFHO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvYWRkTGlrZS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50UG9wdXAuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWJvYXJkLy4vc3JjL21vZHVsZXMvZGlzcGxheVJlc2VydmVQb3B1cC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9kaXNwbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tYm9hcmQvLi9zcmMvbW9kdWxlcy9yZXNlcnZlLmpzIiwid2VicGFjazovL2thbmJhbi1ib2FyZC8uL3NyYy9tb2R1bGVzL3Jlc2VydmVDb3VudGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jaGVmLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXhSb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmtzIHtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rcyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGNvbG9yOiAjMzQ0NTYzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGlua3MgYTpudGgtY2hpbGQoMSkge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmltZyB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbGlrZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmNvbW1lbnQtYnRuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1kZXRhaWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250ZW50IHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHJcXG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAvKiBTaXQgb24gdG9wICovXFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG5cXHJcXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMyU7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBsZWZ0OiA5MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC10b3Age1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbWctbWVhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1tZWFsLWNvbnRhaW5lciBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwge1xcclxcbiAgZGlzcGxheTogY29udGVudHM7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDExJTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc3Bhbmgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDExJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX2Zvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC00IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiN1c2VybmFtZSxcXHJcXG4jaW5zaWdodCxcXHJcXG4uc3RhcnQtZGF0ZSxcXHJcXG4uZW5kLWRhdGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5zaWdodCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAzNXZoO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB7XFxyXFxuICBoZWlnaHQ6IDEzdmg7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDE2cHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4sXFxyXFxuLnJlc2VydmF0aW9uLWJ0biB7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDhweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlLWRhdGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDExJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiNyZXNlcnZlLWRldGFpbCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNyZXNlcnZlIHtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5REFBMEM7RUFDMUMsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlOztFQUVmLGtCQUFrQjtFQUNsQixVQUFVOztFQUVWLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsV0FBVzs7RUFFWCxlQUFlO0VBQ2YsWUFBWTs7RUFFWixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXhSb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2NoZWYucG5nXFxcIik7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGlua3Mge1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmtzIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgY29sb3I6ICMzNDQ1NjM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rcyBhOm50aC1jaGlsZCgxKSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuaW1nIHtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1saWtlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uY29tbWVudC1idG4ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWRldGFpbCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRlbnQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcblxcclxcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gIC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcblxcclxcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXJnaW4tdG9wOiAzJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGxlZnQ6IDkwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXRvcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLW1lYWwtY29udGFpbmVyIGltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBjb250ZW50cztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tbGVmdDogMTElO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYy10aXRsZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbiNzcGFuaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1kYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTElO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLTQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3VzZXJuYW1lLFxcclxcbiNpbnNpZ2h0LFxcclxcbi5zdGFydC1kYXRlLFxcclxcbi5lbmQtZGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNpbnNpZ2h0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDM1dmg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50IHtcXHJcXG4gIGhlaWdodDogMTN2aDtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTZweDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bixcXHJcXG4ucmVzZXJ2YXRpb24tYnRuIHtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggOHB4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmUtZGF0ZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTElO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmUtZGV0YWlsIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmUge1xcclxcbiAgYm94LXNoYWRvdzogMTBweCA4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5TWVhbHMgfSBmcm9tICcuL21vZHVsZXMvZGlzcGxheWxpc3QuanMnO1xyXG5pbXBvcnQgeyBhZGRMaWtlLCBkaXNwbGF5TGlrZSB9IGZyb20gJy4vbW9kdWxlcy9hZGRMaWtlLmpzJztcclxuaW1wb3J0IG1lYWxDb3VudGVyIGZyb20gJy4vbW9kdWxlcy9pdGVtQ291bnRlci5qcyc7XHJcbmltcG9ydCBkaXNwbGF5Q29tbWVudCBmcm9tICcuL21vZHVsZXMvZGlzcGxheUNvbW1lbnRQb3B1cC5qcyc7XHJcbmltcG9ydCBkaXNwbGF5UmVzZXJ2YXRpb24gZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlSZXNlcnZlUG9wdXAuanMnO1xyXG5cclxuY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xyXG5jb25zdCBjb21tVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3B3eGk2SkJwakF3TG9zUXhpSUNqL2NvbW1lbnRzJztcclxuY29uc3QgcmVzVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3B3eGk2SkJwakF3TG9zUXhpSUNqL3Jlc2VydmF0aW9ucyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGRpc3BsYXlNZWFscyhjYXJkc0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGFsbE1lYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxuICBjb25zdCBpdGVtQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyJyk7XHJcbiAgaXRlbUNvdW50ZXIudGV4dENvbnRlbnQgPSBtZWFsQ291bnRlcihbLi4uYWxsTWVhbHNdKTtcclxuXHJcbiAgY29uc3QgbGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtaW5mbycpO1xyXG4gIFsuLi5saWtlc10uZm9yRWFjaChhc3luYyAobGlrZSkgPT4ge1xyXG4gICAgYXdhaXQgZGlzcGxheUxpa2UobGlrZSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgYnRuTGlrZSA9IGV2ZW50LnRhcmdldDtcclxuICBpZiAoYnRuTGlrZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1saWtlJykpIHtcclxuICAgIGNvbnN0IElkID0gYnRuTGlrZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGF3YWl0IGFkZExpa2UoSWQpO1xyXG4gICAgY29uc3QgbGlrZSA9IGJ0bkxpa2UubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgYXdhaXQgZGlzcGxheUxpa2UobGlrZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vXHJcbmNvbnN0IGNvbW1lbnRDbGljayA9IGFzeW5jIChtZWFscykgPT4ge1xyXG4gIGNvbnN0IFtpZCwgaW1hZ2UsIG5hbWUsIGNhdGVnb3J5LCBvcmlnaW5dID0gbWVhbHM7XHJcbiAgYXdhaXQgZGlzcGxheUNvbW1lbnQoaWQsIGltYWdlLCBuYW1lLCBjYXRlZ29yeSwgb3JpZ2luLCBjb21tVVJMKTtcclxuICBjb25zdCBtb2RhbHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XHJcbiAgbW9kYWxwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsLXNjcm9sbCcpO1xyXG59O1xyXG5cclxuLy9cclxuY29uc3QgcmVzZXJ2ZUNsaWNrID0gYXN5bmMgKG1lYWxzKSA9PiB7XHJcbiAgY29uc3QgW2lkLCBpbWFnZSwgbmFtZSwgY2F0ZWdvcnksIG9yaWdpbl0gPSBtZWFscztcclxuICBhd2FpdCBkaXNwbGF5UmVzZXJ2YXRpb24oaWQsIGltYWdlLCBuYW1lLCBjYXRlZ29yeSwgb3JpZ2luLCByZXNVUkwpO1xyXG4gIGNvbnN0IG1vZGFscG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuICBtb2RhbHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndmVydGljYWwtc2Nyb2xsJyk7XHJcbn07XHJcbndpbmRvdy5jb21tZW50Q2xpY2sgPSBjb21tZW50Q2xpY2s7XHJcbndpbmRvdy5yZXNlcnZlQ2xpY2sgPSByZXNlcnZlQ2xpY2s7IiwiY29uc3QgdXJsTGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9wd3hpNkpCcGpBd0xvc1F4aUlDai9saWtlcyc7XHJcblxyXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmxMaW5rKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGFkZExpa2UgPSBhc3luYyAoaWQpID0+IHtcclxuICBhd2FpdCBmZXRjaCh1cmxMaW5rLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5TGlrZSA9IGFzeW5jIChsaWtldHh0KSA9PiB7XHJcbiAgY29uc3QgSWQgPSBsaWtldHh0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gIGNvbnN0IGxpc3RMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XHJcbiAgY29uc3QgbnVtT2ZMaWtlcyA9IGxpc3RMaWtlcy5maWx0ZXIoKGxpa2VPYmopID0+IGxpa2VPYmouaXRlbV9pZCA9PT0gSWQpO1xyXG4gIGlmIChudW1PZkxpa2VzLmxlbmd0aCA+IDApIHtcclxuICAgIGxpa2V0eHQudGV4dENvbnRlbnQgPSBgJHtudW1PZkxpa2VzWzBdLmxpa2VzfSBMaWtlc2A7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgYWRkTGlrZSwgZGlzcGxheUxpa2UgfTsiLCJjb25zdCBjb21tZW50cyA9IChjb21tZW50LCBkYXRhKSA9PiB7XHJcbiAgY29tbWVudC5pbm5lckhUTUwgPSAnJztcclxuICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgZGF0YSA9IFtdO1xyXG4gIH1cclxuICBkYXRhLm1hcCgoZGF0YUlkKSA9PiB7XHJcbiAgICBjb25zdCBjb21tZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tbWVudERhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21tZW50LWRhdGUnKTtcclxuICAgIGNvbnN0IHN0cm9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgc3Ryb25nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tbWVudC1kZXRhaWwnKTtcclxuICAgIHN0cm9uZy5pbm5lclRleHQgPSBgJHtkYXRhSWQuY3JlYXRpb25fZGF0ZX1gO1xyXG4gICAgY29uc3QgY29tbWVudERldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbW1lbnREZXRhaWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21tZW50LWRldGFpbCcpO1xyXG4gICAgY29tbWVudERldGFpbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1lbnQtZGV0YWlsJyk7XHJcbiAgICBjb21tZW50RGV0YWlsLmlubmVyVGV4dCA9IGAke2RhdGFJZC51c2VybmFtZX06ICR7ZGF0YUlkLmNvbW1lbnR9YDtcclxuICAgIGNvbW1lbnREYXRlLmFwcGVuZENoaWxkKHN0cm9uZyk7XHJcbiAgICBjb21tZW50RGF0ZS5hcHBlbmRDaGlsZChjb21tZW50RGV0YWlsKTtcclxuICAgIGNvbW1lbnQuYXBwZW5kQ2hpbGQoY29tbWVudERhdGUpO1xyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHM7XHJcbiIsImNvbnN0IGNvdW50ID0gKGNvbSwgY291dCkgPT4ge1xyXG4gIGNvbnN0IHNwID0gY291dC5sZW5ndGggPyBjb3V0Lmxlbmd0aCA6IDA7XHJcbiAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3BhbjEuc2V0QXR0cmlidXRlKCdpZCcsICdzcGFuaCcpO1xyXG4gIHNwYW4xLmlubmVyVGV4dCA9IGBDb21tZW50cyAoJHtzcH0pYDtcclxuICBjb20uYXBwZW5kQ2hpbGQoc3BhbjEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY291bnQ7XHJcbiIsImltcG9ydCB7IGdldE1lYWxEYXRhIH0gZnJvbSAnLi9kaXNwbGF5bGlzdC5qcyc7XHJcbmltcG9ydCBjb21tZW50cyBmcm9tICcuL2NvbW1lbnQuanMnO1xyXG5pbXBvcnQgY291bnQgZnJvbSAnLi9jb21tZW50Q291bnRlci5qcyc7XHJcblxyXG5jb25zdCBjb21tZW50Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvbnRlbnQnKTtcclxuXHJcbmNvbnN0IGdldEluZm8gPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBnZXRNZWFsRGF0YSgpO1xyXG4gIGNvbnN0IGluZm8gPSByZXMuc3BsaWNlKDApO1xyXG4gIGNvbnN0IGZpbHRlcmVkID0gaW5mby5maWx0ZXIoKGludCkgPT4gcGFyc2VJbnQoaW50LmlkLCAxMCkgPT09IGlkKTtcclxuICByZXR1cm4gZmlsdGVyZWRbMF0uY29va2luZ0luc3RydWN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3B3eGk2SkJwakF3TG9zUXhpSUNqL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcclxuICBjb25zdCBkYXRhMiA9IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGEyLnRoZW4oKGRhdGEpID0+IGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheUNvbW1lbnQgPSBhc3luYyAoaWQsIGltYWdlLCBuYW1lLCBjYXRlZ29yeSwgb3JpZ2luLCBkYXRhKSA9PiB7XHJcbiAgY29uc3QgZWxwID0gYXdhaXQgZmV0Y2hEYXRhKGlkKTtcclxuXHJcbiAgY29uc3QgaW5mbzIgPSBhd2FpdCBnZXRJbmZvKGlkKTtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXAnKTtcclxuXHJcbiAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3B1cFRvcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BvcHVwLXRvcCcpO1xyXG5cclxuICBjb25zdCBwb3B1cEl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcHVwSXRlbUltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1nLW1lYWwtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGltYWdlTWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltYWdlTWVhbC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2ltYWdlfWApO1xyXG4gIGltYWdlTWVhbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ltZy1tZWFsJyk7XHJcbiAgaW1hZ2VNZWFsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ltYWdlJyk7XHJcblxyXG4gIHBvcHVwSXRlbUltYWdlLmFwcGVuZENoaWxkKGltYWdlTWVhbCk7XHJcblxyXG4gIGNvbnN0IGNsb3NlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2xvc2VidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9zZS1idG4nKTtcclxuXHJcbiAgY29uc3QgY2xvc2VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGNsb3NlSS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXhtYXJrJyk7XHJcblxyXG4gIGNsb3NlYnRuLmFwcGVuZENoaWxkKGNsb3NlSSk7XHJcblxyXG4gIHBvcHVwVG9wLmFwcGVuZENoaWxkKHBvcHVwSXRlbUltYWdlKTtcclxuICBwb3B1cFRvcC5hcHBlbmRDaGlsZChjbG9zZWJ0bik7XHJcblxyXG4gIGNvbnN0IHBvcHVwRGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3B1cERlc2NyaXB0aW9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXAtZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXAtZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgY29uc3QgbmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBuYW1lVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjLXRpdGxlJyk7XHJcbiAgbmFtZVRpdGxlLmlubmVyVGV4dCA9ICdOYW1lOiAnO1xyXG5cclxuICBjb25zdCBuYW1lRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG5hbWVEZXRhaWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcclxuICBuYW1lRGV0YWlsLmlubmVyVGV4dCA9IGAke25hbWV9YDtcclxuICBuYW1lVGl0bGUuYXBwZW5kQ2hpbGQobmFtZURldGFpbCk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNhdGVnb3J5VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjLXRpdGxlJyk7XHJcbiAgY2F0ZWdvcnlUaXRsZS5pbm5lclRleHQgPSAnQ2F0ZWdvcnk6ICc7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5RGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNhdGVnb3J5RGV0YWlsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsJyk7XHJcbiAgY2F0ZWdvcnlEZXRhaWwuaW5uZXJUZXh0ID0gYCR7Y2F0ZWdvcnl9YDtcclxuICBjYXRlZ29yeVRpdGxlLmFwcGVuZENoaWxkKGNhdGVnb3J5RGV0YWlsKTtcclxuXHJcbiAgY29uc3Qgb3JpZ2luVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIG9yaWdpblRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzYy10aXRsZScpO1xyXG4gIG9yaWdpblRpdGxlLmlubmVyVGV4dCA9ICdPcmlnaW46ICc7XHJcblxyXG4gIGNvbnN0IG9yaWdpbkRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBvcmlnaW5EZXRhaWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcclxuICBvcmlnaW5EZXRhaWwuaW5uZXJUZXh0ID0gYCR7b3JpZ2lufWA7XHJcbiAgb3JpZ2luVGl0bGUuYXBwZW5kQ2hpbGQob3JpZ2luRGV0YWlsKTtcclxuXHJcbiAgcG9wdXBEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChuYW1lVGl0bGUpO1xyXG4gIHBvcHVwRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZSk7XHJcbiAgcG9wdXBEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChvcmlnaW5UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGluc3RydWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gIGNvbnN0IGluc3RydWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGluc3RydWN0aW9uVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjLXRpdGxlJyk7XHJcbiAgaW5zdHJ1Y3Rpb25UaXRsZS5pbm5lclRleHQgPSAnSW5zdHJ1Y3Rpb24nO1xyXG5cclxuICBjb25zdCBpbnN0cnVjdGlvbkRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBpbnN0cnVjdGlvbkRldGFpbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xyXG4gIGluc3RydWN0aW9uRGV0YWlsLmlubmVyVGV4dCA9IGAke2luZm8yfWA7XHJcblxyXG4gIGluc3RydWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0aW9uVGl0bGUpO1xyXG4gIGluc3RydWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0aW9uRGV0YWlsKTtcclxuICBwb3B1cERlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwRGVzY3JpcHRpb24pO1xyXG4gIHBvcHVwRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBwb3B1cENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbW1lbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2MtdGl0bGUgZGV0YWlsLTMnKTtcclxuICBjb21tZW50VGl0bGUuaW5uZXJUZXh0ID0gJyc7XHJcbiAgY291bnQoY29tbWVudFRpdGxlLCBlbHApO1xyXG4gIHBvcHVwQ29tbWVudC5hcHBlbmRDaGlsZChjb21tZW50VGl0bGUpO1xyXG5cclxuICBjb25zdCBjb21tZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29tbWVudEhvbGRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbW1lbnRfaG9sZGVyJyk7XHJcbiAgcG9wdXBDb21tZW50LmFwcGVuZENoaWxkKGNvbW1lbnRIb2xkZXIpO1xyXG4gIGNvbW1lbnRzKGNvbW1lbnRIb2xkZXIsIGVscCk7XHJcblxyXG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBwb3B1cEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb3B1cF9mb3JtJyk7XHJcbiAgcG9wdXBGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xyXG4gIGNvbnN0IGZvcm1IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBmb3JtSGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2MtZGV0YWlsIGRldGFpbC00Jyk7XHJcbiAgZm9ybUhlYWRpbmcuaW5uZXJUZXh0ID0gJ0FkZCBhIENvbW1lbnQnO1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndXNlcm5hbWUnKTtcclxuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xyXG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlcm5hbWUnKTtcclxuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XHJcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIG5hbWUnKTtcclxuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBjb25zdCBpbnNpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpbnNpZ2h0Jyk7XHJcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xyXG4gIC8vIGluc2lnaHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcgJyk7XHJcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luc2lnaHQnKTtcclxuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcclxuICBpbnNpZ2h0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBJbnNpZ2h0Jyk7XHJcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgaW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGNvbnN0IGZvcm1idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBmb3JtYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICBmb3JtYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uMScpO1xyXG4gIGZvcm1idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjb21tZW50Jyk7XHJcbiAgZm9ybWJ1dHRvbi5pbm5lclRleHQgPSAnQ29tbWVudCc7XHJcblxyXG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGluZyk7XHJcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcclxuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoaW5zaWdodCk7XHJcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGZvcm1idXR0b24pO1xyXG5cclxuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRvcCk7XHJcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBEZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50KTtcclxuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEZvcm0pO1xyXG5cclxuICBjb21tZW50Q29udGVudC5hcHBlbmRDaGlsZChwb3B1cCk7XHJcblxyXG4gIGNsb3NlYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG1vZGFscG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuICAgIG1vZGFscG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBjb21tZW50Q29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwtc2Nyb2xsJyk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdGhlZmV0Y2ggPSBhd2FpdCBmZXRjaChkYXRhLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgICAgIHVzZXJuYW1lOiBmb3JtLnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgIGNvbW1lbnQ6IGZvcm0uaW5zaWdodC52YWx1ZSxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGVmZXRjaDtcclxuICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb21tZW50SG9sZGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBjb21tZW50VGl0bGUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgY29uc3QgcCA9IGF3YWl0IGZldGNoRGF0YShpZCk7XHJcbiAgICAgIGNvbW1lbnRzKGNvbW1lbnRIb2xkZXIsIHApO1xyXG4gICAgICBjb3VudChjb21tZW50VGl0bGUsIHApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbW1lbnQ7XHJcbiIsImltcG9ydCB7IGdldE1lYWxEYXRhIH0gZnJvbSAnLi9kaXNwbGF5bGlzdC5qcyc7XHJcbmltcG9ydCByZXNlcnZlcyBmcm9tICcuL3Jlc2VydmUuanMnO1xyXG5pbXBvcnQgcmVzZXJ2ZUNvdW50IGZyb20gJy4vcmVzZXJ2ZUNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgcmVzZXJ2ZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2ZS1jb250ZW50Jyk7XHJcblxyXG5jb25zdCBnZXRJbmZvID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0TWVhbERhdGEoKTtcclxuICBjb25zdCBpbmZvID0gcmVzLnNwbGljZSgwKTtcclxuICBjb25zdCBmaWx0ZXJlZCA9IGluZm8uZmlsdGVyKChpbnQpID0+IHBhcnNlSW50KGludC5pZCwgMTApID09PSBpZCk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkWzBdLmNvb2tpbmdJbnN0cnVjdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9wd3hpNkpCcGpBd0xvc1F4aUlDai9yZXNlcnZhdGlvbnM/aXRlbV9pZD0ke2lkfWApO1xyXG4gIGNvbnN0IGRhdGEyID0gcmVzLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTIudGhlbigoZGF0YSkgPT4gZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5UmVzZXJ2YXRpb24gPSBhc3luYyAoaWQsIGltYWdlLCBuYW1lLCBjYXRlZ29yeSwgb3JpZ2luLCBkYXRhKSA9PiB7XHJcbiAgY29uc3QgZWxwID0gYXdhaXQgZmV0Y2hEYXRhKGlkKTtcclxuXHJcbiAgY29uc3QgaW5mbzIgPSBhd2FpdCBnZXRJbmZvKGlkKTtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXAnKTtcclxuXHJcbiAgY29uc3QgcG9wdXBUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3B1cFRvcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BvcHVwLXRvcCcpO1xyXG5cclxuICBjb25zdCBwb3B1cEl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcHVwSXRlbUltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1nLW1lYWwtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGltYWdlTWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltYWdlTWVhbC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2ltYWdlfWApO1xyXG4gIGltYWdlTWVhbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ltZy1tZWFsJyk7XHJcbiAgaW1hZ2VNZWFsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ltYWdlJyk7XHJcblxyXG4gIHBvcHVwSXRlbUltYWdlLmFwcGVuZENoaWxkKGltYWdlTWVhbCk7XHJcblxyXG4gIGNvbnN0IGNsb3NlYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2xvc2VidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9zZS1idG4nKTtcclxuXHJcbiAgY29uc3QgY2xvc2VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGNsb3NlSS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXhtYXJrJyk7XHJcblxyXG4gIGNsb3NlYnRuLmFwcGVuZENoaWxkKGNsb3NlSSk7XHJcblxyXG4gIHBvcHVwVG9wLmFwcGVuZENoaWxkKHBvcHVwSXRlbUltYWdlKTtcclxuICBwb3B1cFRvcC5hcHBlbmRDaGlsZChjbG9zZWJ0bik7XHJcblxyXG4gIGNvbnN0IHBvcHVwRGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3B1cERlc2NyaXB0aW9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXAtZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXAtZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgY29uc3QgbmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBuYW1lVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjLXRpdGxlJyk7XHJcbiAgbmFtZVRpdGxlLmlubmVyVGV4dCA9ICdOYW1lOiAnO1xyXG5cclxuICBjb25zdCBuYW1lRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG5hbWVEZXRhaWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcclxuICBuYW1lRGV0YWlsLmlubmVyVGV4dCA9IGAke25hbWV9YDtcclxuICBuYW1lVGl0bGUuYXBwZW5kQ2hpbGQobmFtZURldGFpbCk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNhdGVnb3J5VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjLXRpdGxlJyk7XHJcbiAgY2F0ZWdvcnlUaXRsZS5pbm5lclRleHQgPSAnQ2F0ZWdvcnk6ICc7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5RGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNhdGVnb3J5RGV0YWlsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsJyk7XHJcbiAgY2F0ZWdvcnlEZXRhaWwuaW5uZXJUZXh0ID0gYCR7Y2F0ZWdvcnl9YDtcclxuICBjYXRlZ29yeVRpdGxlLmFwcGVuZENoaWxkKGNhdGVnb3J5RGV0YWlsKTtcclxuXHJcbiAgY29uc3Qgb3JpZ2luVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIG9yaWdpblRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzYy10aXRsZScpO1xyXG4gIG9yaWdpblRpdGxlLmlubmVyVGV4dCA9ICdPcmlnaW46ICc7XHJcblxyXG4gIGNvbnN0IG9yaWdpbkRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBvcmlnaW5EZXRhaWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWwnKTtcclxuICBvcmlnaW5EZXRhaWwuaW5uZXJUZXh0ID0gYCR7b3JpZ2lufWA7XHJcbiAgb3JpZ2luVGl0bGUuYXBwZW5kQ2hpbGQob3JpZ2luRGV0YWlsKTtcclxuXHJcbiAgcG9wdXBEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChuYW1lVGl0bGUpO1xyXG4gIHBvcHVwRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZSk7XHJcbiAgcG9wdXBEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChvcmlnaW5UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGluc3RydWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gIGNvbnN0IGluc3RydWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGluc3RydWN0aW9uVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjLXRpdGxlJyk7XHJcbiAgaW5zdHJ1Y3Rpb25UaXRsZS5pbm5lclRleHQgPSAnSW5zdHJ1Y3Rpb24nO1xyXG5cclxuICBjb25zdCBpbnN0cnVjdGlvbkRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBpbnN0cnVjdGlvbkRldGFpbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbCcpO1xyXG4gIGluc3RydWN0aW9uRGV0YWlsLmlubmVyVGV4dCA9IGAke2luZm8yfWA7XHJcblxyXG4gIGluc3RydWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0aW9uVGl0bGUpO1xyXG4gIGluc3RydWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0aW9uRGV0YWlsKTtcclxuICBwb3B1cERlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwRGVzY3JpcHRpb24pO1xyXG4gIHBvcHVwRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBwb3B1cENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbW1lbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2MtdGl0bGUgZGV0YWlsLTMnKTtcclxuICBjb21tZW50VGl0bGUuaW5uZXJUZXh0ID0gJyc7XHJcbiAgcmVzZXJ2ZUNvdW50KGNvbW1lbnRUaXRsZSwgZWxwKTtcclxuICBwb3B1cENvbW1lbnQuYXBwZW5kQ2hpbGQoY29tbWVudFRpdGxlKTtcclxuXHJcbiAgY29uc3QgY29tbWVudEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbW1lbnRIb2xkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21tZW50X2hvbGRlcicpO1xyXG4gIHBvcHVwQ29tbWVudC5hcHBlbmRDaGlsZChjb21tZW50SG9sZGVyKTtcclxuICByZXNlcnZlcyhjb21tZW50SG9sZGVyLCBlbHApO1xyXG5cclxuICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgcG9wdXBGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9wdXBfZm9ybScpO1xyXG4gIHBvcHVwRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0nKTtcclxuICBjb25zdCBmb3JtSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgZm9ybUhlYWRpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjLWRldGFpbCBkZXRhaWwtNCcpO1xyXG4gIGZvcm1IZWFkaW5nLmlubmVyVGV4dCA9ICdBZGQgYSByZXNlcnZhdGlvbic7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICd1c2VybmFtZScpO1xyXG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlsJyk7XHJcbiAgdXNlcm5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VybmFtZScpO1xyXG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcclxuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xyXG4gIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgc3RhcnREYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdGFydF9kYXRlJyk7XHJcbiAgc3RhcnREYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RhcnQtZGF0ZScpO1xyXG4gIHN0YXJ0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3l5eXktTU0tZGQnKTtcclxuICBzdGFydERhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xyXG4gIHN0YXJ0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gIGNvbnN0IGVuZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGVuZERhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VuZF9kYXRlJyk7XHJcbiAgZW5kRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VuZC1kYXRlJyk7XHJcbiAgZW5kRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3l5eXktTU0tZGQnKTtcclxuICBlbmREYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuICBlbmREYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgY29uc3QgZm9ybWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGZvcm1idXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIGZvcm1idXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b24xJyk7XHJcbiAgZm9ybWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc2VydmUnKTtcclxuICBmb3JtYnV0dG9uLmlubmVyVGV4dCA9ICdSZXNlcnZhdGlvbic7XHJcblxyXG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGluZyk7XHJcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcclxuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoc3RhcnREYXRlKTtcclxuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoZW5kRGF0ZSk7XHJcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGZvcm1idXR0b24pO1xyXG5cclxuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cFRvcCk7XHJcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBEZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50KTtcclxuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEZvcm0pO1xyXG5cclxuICByZXNlcnZlQ29udGVudC5hcHBlbmRDaGlsZChwb3B1cCk7XHJcblxyXG4gIGNsb3NlYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG1vZGFscG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuICAgIG1vZGFscG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICByZXNlcnZlQ29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwtc2Nyb2xsJyk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdGhlZmV0Y2ggPSBhd2FpdCBmZXRjaChkYXRhLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcclxuICAgICAgICBkYXRlX3N0YXJ0OiBzdGFydERhdGUudmFsdWUsXHJcbiAgICAgICAgZGF0ZV9lbmQ6IGVuZERhdGUudmFsdWUsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhlZmV0Y2g7XHJcbiAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29tbWVudEhvbGRlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgY29tbWVudFRpdGxlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIGNvbnN0IHAgPSBhd2FpdCBmZXRjaERhdGEoaWQpO1xyXG4gICAgICByZXNlcnZlcyhjb21tZW50SG9sZGVyLCBwKTtcclxuICAgICAgcmVzZXJ2ZUNvdW50KGNvbW1lbnRUaXRsZSwgcCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UmVzZXJ2YXRpb247IiwiY29uc3QgZ2V0TWVhbExpc3QgPSBhc3luYyAoQVBJX1VSTCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnN0IGxpc3RNZWFsID0gZGF0YS5tZWFscy5zbGljZSgwLCAyNSk7XHJcbiAgcmV0dXJuIGxpc3RNZWFsO1xyXG59O1xyXG5cclxuY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9zJztcclxuXHJcbmNvbnN0IGdldE1lYWxEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFyciA9IFtdO1xyXG4gIGNvbnN0IG1lYWxMaXN0ID0gYXdhaXQgZ2V0TWVhbExpc3QoYCR7QVBJX1VSTH1gKTtcclxuICBtZWFsTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBuZXdPYmpBcnIgPSB7XHJcbiAgICAgIGlkOiBpdGVtLmlkTWVhbCxcclxuICAgICAgaW1hZ2U6IGl0ZW0uc3RyTWVhbFRodW1iLFxyXG4gICAgICBuYW1lOiBpdGVtLnN0ck1lYWwsXHJcbiAgICAgIGNhdGVnb3J5OiBpdGVtLnN0ckNhdGVnb3J5LFxyXG4gICAgICBvcmlnaW46IGl0ZW0uc3RyQXJlYSxcclxuICAgICAgY29va2luZ0luc3RydWN0aW9uOiBpdGVtLnN0ckluc3RydWN0aW9ucyxcclxuICAgIH07XHJcbiAgICBhcnIucHVzaChuZXdPYmpBcnIpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhcnI7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5TWVhbHMgPSBhc3luYyAoY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgbWVhbHMgPSBhd2FpdCBnZXRNZWFsRGF0YSgpO1xyXG4gIG1lYWxzLmZvckVhY2goKG1lYWwpID0+IHtcclxuICAgIGNvbnN0IG1lYWxDYXJkID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWdcIj5cclxuIDxpbWcgc3JjPVwiJHttZWFsLmltYWdlfVwiIGFsdD1cIiR7bWVhbC5pbWFnZX1cIj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+JHttZWFsLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXNcIiBpZD1cIiR7bWVhbC5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1oZWFydCBhZGQtbGlrZVwiIGRhdGEtaWQ9XCIke21lYWwuaWR9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpa2VzLWluZm9cIiBkYXRhLWlkPVwiJHttZWFsLmlkfVwiPjAgTGlrZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIiBkYXRhLWlkPVwiJHttZWFsLmlkfVwiIG9uQ2xpY2s9XCJjb21tZW50Q2xpY2soWyR7bWVhbC5pZH0sICcke21lYWwuaW1hZ2V9JywgJyR7bWVhbC5uYW1lfScsICcke21lYWwuY2F0ZWdvcnl9JywgJyR7bWVhbC5vcmlnaW59J10pXCI+Q29tbWVudHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNlcnZhdGlvbi1idG5cIiBkYXRhLWlkPVwiJHttZWFsLmlkfVwiIG9uQ2xpY2s9XCJyZXNlcnZlQ2xpY2soWyR7bWVhbC5pZH0sICcke21lYWwuaW1hZ2V9JywgJyR7bWVhbC5uYW1lfScsICcke21lYWwuY2F0ZWdvcnl9JywgJyR7bWVhbC5vcmlnaW59J10pXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBtZWFsQ2FyZDtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldE1lYWxEYXRhLCBkaXNwbGF5TWVhbHMgfTsiLCJjb25zdCBtZWFsQ291bnRlciA9IChtZWFsKSA9PiB7XHJcbiAgY29uc3QgY291bnQgPSBtZWFsLmxlbmd0aDtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZWFsQ291bnRlcjsiLCJjb25zdCByZXNlcnZlcyA9IChyZXNlcnZlLCBkYXRhKSA9PiB7XHJcbiAgcmVzZXJ2ZS5pbm5lckhUTUwgPSAnJztcclxuICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgZGF0YSA9IFtdO1xyXG4gIH1cclxuICBkYXRhLm1hcCgoZGF0YUlkKSA9PiB7XHJcbiAgICBjb25zdCByZXNlcnZlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVzZXJ2ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXNlcnZlLWRhdGUnKTtcclxuICAgIGNvbnN0IGJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XHJcbiAgICBib2xkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzZXJ2ZS1kZXRhaWwnKTtcclxuICAgIGJvbGQuaW5uZXJUZXh0ID0gYCR7ZGF0YUlkLmRhdGVfc3RhcnR9IC0gJHtkYXRhSWQuZGF0ZV9lbmR9YDtcclxuICAgIGNvbnN0IHJlc2VydmVEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByZXNlcnZlRGV0YWlsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzZXJ2ZS1kZXRhaWwnKTtcclxuICAgIHJlc2VydmVEZXRhaWwuc2V0QXR0cmlidXRlKCdpZCcsICdyZXNlcnZlLWRldGFpbCcpO1xyXG4gICAgcmVzZXJ2ZURldGFpbC5pbm5lclRleHQgPSBgJHtkYXRhSWQudXNlcm5hbWV9YDtcclxuICAgIHJlc2VydmVEYXRlLmFwcGVuZENoaWxkKGJvbGQpO1xyXG4gICAgcmVzZXJ2ZURhdGUuYXBwZW5kQ2hpbGQocmVzZXJ2ZURldGFpbCk7XHJcbiAgICByZXNlcnZlLmFwcGVuZENoaWxkKHJlc2VydmVEYXRlKTtcclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2VydmVzOyIsImNvbnN0IHJlc2VydmVDb3VudCA9IChyZXMsIGNvdW50KSA9PiB7XHJcbiAgY29uc3Qgc3AgPSBjb3VudC5sZW5ndGggPyBjb3VudC5sZW5ndGggOiAwO1xyXG4gIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4xLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3BhbmgnKTtcclxuICBzcGFuMS5pbm5lclRleHQgPSBgUmVzZXJ2YXRpb25zICgke3NwfSlgO1xyXG4gIHJlcy5hcHBlbmRDaGlsZChzcGFuMSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNlcnZlQ291bnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9