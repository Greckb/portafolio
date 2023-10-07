"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TypewriterEffect.js":
/*!****************************************!*\
  !*** ./components/TypewriterEffect.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 200); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(57, 192, 222)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        // color: 'rgb(1, 255, 149)', // Color verde\n        color: \"rgb(255, 83, 160)\",\n        fontWeight: 900\n    };\n    const roleStyle = {\n        color: \"rgb(255, 83, 160)\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        // left: 0, // Alinear a la izquierda de la pantalla\n        height: \"100vh\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                style: buttonStyle,\n                type: \"button\",\n                \"data-bs-toggle\": \"collapse\",\n                \"data-bs-target\": \"#navbarNav\",\n                \"aria-controls\": \"navbarNav\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 72,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: imageContainerStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                            ,\n                            alt: \"Mi foto\",\n                            width: 200,\n                            height: 200,\n                            className: \"image\",\n                            style: {\n                                opacity: imageLoaded ? 0.5 : 0,\n                                transition: \"opacity 3s\"\n                            },\n                            onLoad: ()=>setImageLoaded(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 84,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: nameStyle,\n                            children: \"Hi I'm Ra\\xfal L\\xf3pez\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 96,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 99,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 101,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-instagram fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/tu_usuario_de_github\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-github fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-linkedin fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 104,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 83,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TypewriterEffect, \"Js+9dmZF9/DCtRRCqqM6vr0S5Lc=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0pyQixXQUFVO2dDQUNWckIsT0FBT2tCOztrREFFUCw4REFBQ3lCO3dDQUFFdEIsV0FBVTs7Ozs7O29DQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBEO0dBbElNakM7S0FBQUE7QUFvSU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1R5cGV3cml0ZXJFZmZlY3QuanM/NTAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7IC8vIEltcG9ydGEgbG9zIGVzdGlsb3MgZGUgRm9udCBBd2Vzb21lXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgVHlwZXdyaXRlckVmZmVjdCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dCA9ICdKdW5pb3IgRGV2ZWxvcGVyJzsgLy8gRWwgdGV4dG8gY29uIGVmZWN0b1xuICBjb25zdCBbZGlzcGxheVRleHQsIHNldERpc3BsYXlUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ltYWdlTG9hZGVkLCBzZXRJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRJbmRleCA8PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBzZXREaXNwbGF5VGV4dCh0ZXh0LnNsaWNlKDAsIGN1cnJlbnRJbmRleCkpO1xuICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIDIwMCk7IC8vIFZlbG9jaWRhZCBkZSBlc2NyaXR1cmEgZW4gbWlsaXNlZ3VuZG9zXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgLy8gQ2FtYmlhciBsYSBkaXJlY2Npw7NuIGRlIGxhIGNvbHVtbmFcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLCAvLyBDZW50cmFyIGVsIHRleHRvIGhvcml6b250YWxtZW50ZVxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJywgLy8gRm9uZG8gZW4gY29sb3IgbmVncm9cbiAgICBjb2xvcjogJ3JnYig1NywgMTkyLCAyMjIpJywgLy8gQ29sb3IgZGUgbGV0cmEgcGFyYSBlbCB0ZXh0b1xuICAgIGZvbnRGYW1pbHk6ICdWVDMyMywgc2Fucy1zZXJpZicsXG4gIH07XG5cbiAgY29uc3QgbmFtZVN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCwgY3Vyc2l2ZScsIC8vIEFwbGljYXIgbGEgZnVlbnRlIFwiRGFuY2luZyBTY3JpcHRcIiBzb2xvIGEgXCJSYXVsIExvcGV6XCJcbiAgICBkaXNwbGF5OiAnaW5saW5lJywgLy8gTW9zdHJhciBlbiBsw61uZWFcbiAgICAvLyBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLCAvLyBDb2xvciB2ZXJkZVxuICAgIGNvbG9yOiAncmdiKDI1NSwgODMsIDE2MCknLFxuICAgIGZvbnRXZWlnaHQ6IDkwMCwgLy8gSGFjZXIgcXVlIGVsIHRleHRvIHNlYSBib2xkIChuZWdyaXRhKVxuICB9O1xuXG4gIGNvbnN0IHJvbGVTdHlsZSA9IHtcbiAgICBjb2xvcjogJ3JnYigyNTUsIDgzLCAxNjApJywgLy8gQ29sb3Igcm9zYVxuICB9O1xuXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLCAvLyBNb3N0cmFyIGNvbW8gZmxleGJveFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCAvLyBBbGluZWFyIHZlcnRpY2FsbWVudGUgYWwgY2VudHJvXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIC8vIFBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHN1cGVycG9uZXJsYVxuICAgIC8vIGxlZnQ6IDAsIC8vIEFsaW5lYXIgYSBsYSBpenF1aWVyZGEgZGUgbGEgcGFudGFsbGFcbiAgICBoZWlnaHQ6ICcxMDB2aCcsIC8vIFRhbWHDsW8gY29tcGxldG8gZGUgbGEgcGFudGFsbGFcbiAgfTtcblxuICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcxMHB4JywgLy8gQWp1c3RhciBsYSBwb3NpY2nDs24gdmVydGljYWxcbiAgICByaWdodDogJzEwcHgnLCAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiBob3Jpem9udGFsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCAvLyBGb25kbyBibGFuY29cbiAgICBjb2xvcjogJ2JsYWNrJywgLy8gVGV4dG8gbmVncm9cbiAgfTtcblxuICBjb25zdCBzb2NpYWxJY29uU3R5bGUgPSB7XG4gICAgbWFyZ2luOiAnMCAxMHB4JywgLy8gQcOxYWRpciBtYXJnZW4gaG9yaXpvbnRhbCBlbnRyZSBsb3MgaWNvbm9zXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXG4gICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICA8ZGl2IHN0eWxlPXtpbWFnZUNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICB7LyogQWdyZWdhciBsYSBpbWFnZW4gY29uIHRyYW5zaWNpw7NuIGRlIG9wYWNpZGFkICovfVxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL3lvLnBuZ1wiIC8vIFJ1dGEgcmVsYXRpdmEgYSBsYSBpbWFnZW4gZW4gbGEgY2FycGV0YSBcInB1YmxpY1wiXG4gICAgICAgICAgICBhbHQ9XCJNaSBmb3RvXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9IC8vIEFuY2hvIGRlc2VhZG9cbiAgICAgICAgICAgIGhlaWdodD17MjAwfSAvLyBBbHR1cmEgZGVzZWFkYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogaW1hZ2VMb2FkZWQgPyAwLjUgOiAwLCB0cmFuc2l0aW9uOiAnb3BhY2l0eSAzcycgfX0gLy8gQXBsaWNhciBsYSB0cmFuc2ljacOzbiBkZSBvcGFjaWRhZFxuICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiBzZXRJbWFnZUxvYWRlZCh0cnVlKX0gLy8gQ2FtYmlhciBlbCBlc3RhZG8gY3VhbmRvIGxhIGltYWdlbiBzZSBjYXJnYVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGgxPlxuICAgICAgICA8c3BhbiBzdHlsZT17bmFtZVN0eWxlfT5IaSBJJ20gUmHDumwgTMOzcGV6PC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgyPntkaXNwbGF5VGV4dH08L2gyPlxuICAgICAgPGJyPjwvYnI+XG5cbiAgICAgIHsvKiBBZ3JlZ2EgbG9zIGljb25vcyBkZSByZWRlcyBzb2NpYWxlcyBhcXXDrSAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3R1X3VzdWFyaW9fZGVfaW5zdGFncmFtL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17c29jaWFsSWNvblN0eWxlfSAvLyBBcGxpY2FyIG1hcmdlbiBhIGxvcyBpY29ub3NcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW0gZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdHVfdXN1YXJpb19kZV9naXRodWJcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3NvY2lhbEljb25TdHlsZX0gLy8gQXBsaWNhciBtYXJnZW4gYSBsb3MgaWNvbm9zXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2l0aHViIGZhLTJ4XCI+PC9pPiB7LyogSWNvbm8gbcOhcyBncmFuZGUgKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3R1X3VzdWFyaW9fZGVfbGlua2VkaW4vXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXtzb2NpYWxJY29uU3R5bGV9IC8vIEFwbGljYXIgbWFyZ2VuIGEgbG9zIGljb25vc1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluIGZhLTJ4XCI+PC9pPiB7LyogSWNvbm8gbcOhcyBncmFuZGUgKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlR5cGV3cml0ZXJFZmZlY3QiLCJ0ZXh0IiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJjdXJyZW50SW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2xpY2UiLCJjbGVhckludGVydmFsIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udEZhbWlseSIsIm5hbWVTdHlsZSIsImZvbnRXZWlnaHQiLCJyb2xlU3R5bGUiLCJpbWFnZUNvbnRhaW5lclN0eWxlIiwicG9zaXRpb24iLCJidXR0b25TdHlsZSIsInRvcCIsInJpZ2h0Iiwic29jaWFsSWNvblN0eWxlIiwibWFyZ2luIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJzcGFuIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsIm9uTG9hZCIsImgxIiwiYnIiLCJoMiIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});