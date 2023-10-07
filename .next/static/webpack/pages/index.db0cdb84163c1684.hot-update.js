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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 200); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(255, 83, 160\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        color: \"rgb(1, 255, 149)\",\n        fontSize: \"64px\"\n    };\n    const roleStyle = {\n        color: \"rgb(255, 83, 160)\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        top: 100\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"2px solid rgb(1, 255, 149)\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                style: buttonStyle,\n                type: \"button\",\n                \"data-bs-toggle\": \"collapse\",\n                \"data-bs-target\": \"#navbarNav\",\n                \"aria-controls\": \"navbarNav\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: imageContainerStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                            ,\n                            alt: \"Mi foto\",\n                            width: 200,\n                            height: 200,\n                            className: \"image\",\n                            style: {\n                                opacity: imageLoaded ? 1 : 0,\n                                transition: \"opacity 3s\",\n                                ...circularImageStyle\n                            },\n                            onLoad: ()=>setImageLoaded(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: \"Hi I'm \"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 108,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: nameStyle,\n                                children: \"Ra\\xfal L\\xf3pez\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 109,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-instagram fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/tu_usuario_de_github\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-github fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 134,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-linkedin fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TypewriterEffect, \"Js+9dmZF9/DCtRRCqqM6vr0S5Lc=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7a0RBRVAsOERBQUN5Qjt3Q0FBRXRCLFdBQVU7Ozs7OztvQ0FBeUI7Ozs7Ozs7MENBRXhDLDhEQUFDa0I7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pyQixXQUFVO2dDQUNWeEIsT0FBT3FCOztrREFFUCw4REFBQ3lCO3dDQUFFdEIsV0FBVTs7Ozs7O29DQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBEO0dBL0lNcEM7S0FBQUE7QUFpSk4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1R5cGV3cml0ZXJFZmZlY3QuanM/NTAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7IC8vIEltcG9ydGEgbG9zIGVzdGlsb3MgZGUgRm9udCBBd2Vzb21lXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgVHlwZXdyaXRlckVmZmVjdCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dCA9ICdKdW5pb3IgRGV2ZWxvcGVyJzsgLy8gRWwgdGV4dG8gY29uIGVmZWN0b1xuICBjb25zdCBbZGlzcGxheVRleHQsIHNldERpc3BsYXlUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ltYWdlTG9hZGVkLCBzZXRJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRJbmRleCA8PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBzZXREaXNwbGF5VGV4dCh0ZXh0LnNsaWNlKDAsIGN1cnJlbnRJbmRleCkpO1xuICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIDIwMCk7IC8vIFZlbG9jaWRhZCBkZSBlc2NyaXR1cmEgZW4gbWlsaXNlZ3VuZG9zXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgLy8gQ2FtYmlhciBsYSBkaXJlY2Npw7NuIGRlIGxhIGNvbHVtbmFcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLCAvLyBDZW50cmFyIGVsIHRleHRvIGhvcml6b250YWxtZW50ZVxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJywgLy8gRm9uZG8gZW4gY29sb3IgbmVncm9cbiAgICBjb2xvcjogJ3JnYigyNTUsIDgzLCAxNjAnLCAvLyBDb2xvciBkZSBsZXRyYSBwYXJhIGVsIHRleHRvXG4gICAgZm9udEZhbWlseTogJ1ZUMzIzLCBzYW5zLXNlcmlmJyxcbiAgfTtcblxuICBjb25zdCBuYW1lU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ0RhbmNpbmcgU2NyaXB0LCBjdXJzaXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLFxuXG4gICAgZm9udFNpemU6ICc2NHB4JywgLy8gQ2FtYmlhciBlbCB0YW1hw7FvIGRlIGxhIGxldHJhIGEgMzZweFxuICB9O1xuICBcblxuICBjb25zdCByb2xlU3R5bGUgPSB7XG4gICAgY29sb3I6ICdyZ2IoMjU1LCA4MywgMTYwKScsIC8vIENvbG9yIHJvc2FcbiAgfTtcblxuICBjb25zdCBpbWFnZUNvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JywgLy8gTW9zdHJhciBjb21vIGZsZXhib3hcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgLy8gQWxpbmVhciB2ZXJ0aWNhbG1lbnRlIGFsIGNlbnRyb1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCAvLyBQb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBzdXBlcnBvbmVybGFcbiAgICB0b3A6IDEwMCwgLy8gQWxpbmVhciBhIGxhIGl6cXVpZXJkYSBkZSBsYSBwYW50YWxsYVxuICAgIC8vIGhlaWdodDogJzEwMHZoJywgLy8gVGFtYcOxbyBjb21wbGV0byBkZSBsYSBwYW50YWxsYVxuICB9O1xuXG4gIGNvbnN0IGNpcmN1bGFySW1hZ2VTdHlsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLCAvLyBIYWNlciBxdWUgbGEgaW1hZ2VuIHNlYSBjaXJjdWxhclxuICAgIGJvcmRlcjogJzJweCBzb2xpZCByZ2IoMSwgMjU1LCAxNDkpJywgLy8gQm9yZGUgdmVyZGVcbiAgfTtcblxuXG4gIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzEwcHgnLCAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiB2ZXJ0aWNhbFxuICAgIHJpZ2h0OiAnMTBweCcsIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIGhvcml6b250YWxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIC8vIEZvbmRvIGJsYW5jb1xuICAgIGNvbG9yOiAnYmxhY2snLCAvLyBUZXh0byBuZWdyb1xuICB9O1xuXG4gIGNvbnN0IHNvY2lhbEljb25TdHlsZSA9IHtcbiAgICBtYXJnaW46ICcwIDEwcHgnLCAvLyBBw7FhZGlyIG1hcmdlbiBob3Jpem9udGFsIGVudHJlIGxvcyBpY29ub3NcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtpbWFnZUNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICB7LyogQWdyZWdhciBsYSBpbWFnZW4gY29uIHRyYW5zaWNpw7NuIGRlIG9wYWNpZGFkIHkgZXN0aWxvIGNpcmN1bGFyICovfVxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL3lvLnBuZ1wiIC8vIFJ1dGEgcmVsYXRpdmEgYSBsYSBpbWFnZW4gZW4gbGEgY2FycGV0YSBcInB1YmxpY1wiXG4gICAgICAgICAgICBhbHQ9XCJNaSBmb3RvXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9IC8vIEFuY2hvIGRlc2VhZG9cbiAgICAgICAgICAgIGhlaWdodD17MjAwfSAvLyBBbHR1cmEgZGVzZWFkYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogaW1hZ2VMb2FkZWQgPyAxIDogMCxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgM3MnLFxuICAgICAgICAgICAgICAuLi5jaXJjdWxhckltYWdlU3R5bGUsIC8vIEFwbGljYXIgZXN0aWxvIGNpcmN1bGFyIHkgYm9yZGUgdmVyZGVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkxvYWQ9eygpID0+IHNldEltYWdlTG9hZGVkKHRydWUpfSAvLyBDYW1iaWFyIGVsIGVzdGFkbyBjdWFuZG8gbGEgaW1hZ2VuIHNlIGNhcmdhXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+SGkgSSdtIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e25hbWVTdHlsZX0+UmHDumwgTMOzcGV6PC9zcGFuPlxuXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDI+e2Rpc3BsYXlUZXh0fTwvaDI+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIHsvKiBBZ3JlZ2EgbG9zIGljb25vcyBkZSByZWRlcyBzb2NpYWxlcyBhcXXDrSAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHVfdXN1YXJpb19kZV9pbnN0YWdyYW0vXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXtzb2NpYWxJY29uU3R5bGV9IC8vIEFwbGljYXIgbWFyZ2VuIGEgbG9zIGljb25vc1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbSBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90dV91c3VhcmlvX2RlX2dpdGh1YlwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17c29jaWFsSWNvblN0eWxlfSAvLyBBcGxpY2FyIG1hcmdlbiBhIGxvcyBpY29ub3NcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWIgZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdHVfdXN1YXJpb19kZV9saW5rZWRpbi9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3NvY2lhbEljb25TdHlsZX0gLy8gQXBsaWNhciBtYXJnZW4gYSBsb3MgaWNvbm9zXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW4gZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlR5cGV3cml0ZXJFZmZlY3QiLCJ0ZXh0IiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJjdXJyZW50SW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2xpY2UiLCJjbGVhckludGVydmFsIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udEZhbWlseSIsIm5hbWVTdHlsZSIsImZvbnRTaXplIiwicm9sZVN0eWxlIiwiaW1hZ2VDb250YWluZXJTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwiY2lyY3VsYXJJbWFnZVN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYnV0dG9uU3R5bGUiLCJyaWdodCIsInNvY2lhbEljb25TdHlsZSIsIm1hcmdpbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwic3BhbiIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJvbkxvYWQiLCJoMSIsImJyIiwiaDIiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});