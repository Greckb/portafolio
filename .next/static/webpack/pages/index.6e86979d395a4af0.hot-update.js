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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"an enthusiastic Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 150); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(255, 83, 160)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        color: \"rgb(1, 255, 149)\",\n        fontSize: \"64px\",\n        fontStyle: \"italic\"\n    };\n    const roleStyle = {\n        color: \"rgb(255, 83, 160)\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        top: 150\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"2px solid rgb(1, 255, 149)\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\",\n        color: \"rgb(255, 83, 160\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                style: buttonStyle,\n                type: \"button\",\n                \"data-bs-toggle\": \"collapse\",\n                \"data-bs-target\": \"#navbarNav\",\n                \"aria-controls\": \"navbarNav\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: imageContainerStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                            ,\n                            alt: \"Mi foto\",\n                            width: 200,\n                            height: 200,\n                            className: \"image\",\n                            style: {\n                                opacity: imageLoaded ? 1 : 0,\n                                transition: \"opacity 3s\",\n                                ...circularImageStyle\n                            },\n                            onLoad: ()=>setImageLoaded(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: \"Hi I'm \"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 109,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: nameStyle,\n                                children: \"Ra\\xfal L\\xf3pez\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 110,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-instagram fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/tu_usuario_de_github\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-github fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-linkedin fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TypewriterEffect, \"Js+9dmZF9/DCtRRCqqM6vr0S5Lc=\");\n_c = TypewriterEffect;\n(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n    id: \"838642f3ae60481c\",\n    children: \".social-icon.jsx-838642f3ae60481c:hover{color:white}\"\n}, void 0, false, void 0, undefined);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VnpCLE9BQU9zQjs7a0RBRVAsOERBQUN5Qjt3Q0FBRXRCLFdBQVU7Ozs7OztvQ0FBeUI7Ozs7Ozs7MENBRXhDLDhEQUFDa0I7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pyQixXQUFVO2dDQUNWekIsT0FBT3NCOztrREFFUCw4REFBQ3lCO3dDQUFFdEIsV0FBVTs7Ozs7O29DQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBEO0dBbEpNckM7S0FBQUE7Ozs7O0FBeUpOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UeXBld3JpdGVyRWZmZWN0LmpzPzUwMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnOyAvLyBJbXBvcnRhIGxvcyBlc3RpbG9zIGRlIEZvbnQgQXdlc29tZVxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5cbmNvbnN0IFR5cGV3cml0ZXJFZmZlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHQgPSAnYW4gZW50aHVzaWFzdGljIEp1bmlvciBEZXZlbG9wZXInOyAvLyBFbCB0ZXh0byBjb24gZWZlY3RvXG4gIGNvbnN0IFtkaXNwbGF5VGV4dCwgc2V0RGlzcGxheVRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHNldERpc3BsYXlUZXh0KHRleHQuc2xpY2UoMCwgY3VycmVudEluZGV4KSk7XG4gICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSwgMTUwKTsgLy8gVmVsb2NpZGFkIGRlIGVzY3JpdHVyYSBlbiBtaWxpc2VndW5kb3NcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCAvLyBDYW1iaWFyIGxhIGRpcmVjY2nDs24gZGUgbGEgY29sdW1uYVxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsIC8vIENlbnRyYXIgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCAvLyBGb25kbyBlbiBjb2xvciBuZWdyb1xuICAgIGNvbG9yOiAncmdiKDI1NSwgODMsIDE2MCknLCAvLyBDb2xvciBkZSBsZXRyYSBwYXJhIGVsIHRleHRvXG4gICAgZm9udEZhbWlseTogJ1ZUMzIzLCBzYW5zLXNlcmlmJyxcbiAgfTtcblxuICBjb25zdCBuYW1lU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ0RhbmNpbmcgU2NyaXB0LCBjdXJzaXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLFxuICAgIGZvbnRTaXplOiAnNjRweCcsIC8vIENhbWJpYXIgZWwgdGFtYcOxbyBkZSBsYSBsZXRyYSBhIDY0cHhcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLCAvLyBBZ3JlZ2FyIGluY2xpbmFjacOzbiBhbCB0ZXh0b1xuICB9O1xuICBcblxuICBjb25zdCByb2xlU3R5bGUgPSB7XG4gICAgY29sb3I6ICdyZ2IoMjU1LCA4MywgMTYwKScsIC8vIENvbG9yIHJvc2FcbiAgfTtcblxuICBjb25zdCBpbWFnZUNvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JywgLy8gTW9zdHJhciBjb21vIGZsZXhib3hcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgLy8gQWxpbmVhciB2ZXJ0aWNhbG1lbnRlIGFsIGNlbnRyb1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCAvLyBQb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBzdXBlcnBvbmVybGFcbiAgICB0b3A6IDE1MCwgLy8gQWxpbmVhciBhIGxhIGl6cXVpZXJkYSBkZSBsYSBwYW50YWxsYVxuICAgIC8vIGhlaWdodDogJzEwMHZoJywgLy8gVGFtYcOxbyBjb21wbGV0byBkZSBsYSBwYW50YWxsYVxuICB9O1xuXG4gIGNvbnN0IGNpcmN1bGFySW1hZ2VTdHlsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLCAvLyBIYWNlciBxdWUgbGEgaW1hZ2VuIHNlYSBjaXJjdWxhclxuICAgIGJvcmRlcjogJzJweCBzb2xpZCByZ2IoMSwgMjU1LCAxNDkpJywgLy8gQm9yZGUgdmVyZGVcbiAgfTtcblxuXG4gIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzEwcHgnLCAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiB2ZXJ0aWNhbFxuICAgIHJpZ2h0OiAnMTBweCcsIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIGhvcml6b250YWxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIC8vIEZvbmRvIGJsYW5jb1xuICAgIGNvbG9yOiAnYmxhY2snLCAvLyBUZXh0byBuZWdyb1xuICB9O1xuXG4gIGNvbnN0IHNvY2lhbEljb25TdHlsZSA9IHtcbiAgICBtYXJnaW46ICcwIDEwcHgnLCAvLyBBw7FhZGlyIG1hcmdlbiBob3Jpem9udGFsIGVudHJlIGxvcyBpY29ub3NcbiAgICBjb2xvcjogJ3JnYigyNTUsIDgzLCAxNjAnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e2ltYWdlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIHsvKiBBZ3JlZ2FyIGxhIGltYWdlbiBjb24gdHJhbnNpY2nDs24gZGUgb3BhY2lkYWQgeSBlc3RpbG8gY2lyY3VsYXIgKi99XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIveW8ucG5nXCIgLy8gUnV0YSByZWxhdGl2YSBhIGxhIGltYWdlbiBlbiBsYSBjYXJwZXRhIFwicHVibGljXCJcbiAgICAgICAgICAgIGFsdD1cIk1pIGZvdG9cIlxuICAgICAgICAgICAgd2lkdGg9ezIwMH0gLy8gQW5jaG8gZGVzZWFkb1xuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9IC8vIEFsdHVyYSBkZXNlYWRhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBvcGFjaXR5OiBpbWFnZUxvYWRlZCA/IDEgOiAwLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAzcycsXG4gICAgICAgICAgICAgIC4uLmNpcmN1bGFySW1hZ2VTdHlsZSwgLy8gQXBsaWNhciBlc3RpbG8gY2lyY3VsYXIgeSBib3JkZSB2ZXJkZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0SW1hZ2VMb2FkZWQodHJ1ZSl9IC8vIENhbWJpYXIgZWwgZXN0YWRvIGN1YW5kbyBsYSBpbWFnZW4gc2UgY2FyZ2FcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5IaSBJJ20gPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17bmFtZVN0eWxlfT5SYcO6bCBMw7NwZXo8L3NwYW4+XG5cbiAgICAgICAgPC9oMT5cbiAgICAgIFxuICAgICAgICA8aDI+e2Rpc3BsYXlUZXh0fTwvaDI+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIHsvKiBBZ3JlZ2EgbG9zIGljb25vcyBkZSByZWRlcyBzb2NpYWxlcyBhcXXDrSAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHVfdXN1YXJpb19kZV9pbnN0YWdyYW0vXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXtzb2NpYWxJY29uU3R5bGV9IC8vIEFwbGljYXIgbWFyZ2VuIGEgbG9zIGljb25vc1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbSBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90dV91c3VhcmlvX2RlX2dpdGh1YlwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17c29jaWFsSWNvblN0eWxlfSAvLyBBcGxpY2FyIG1hcmdlbiBhIGxvcyBpY29ub3NcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWIgZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdHVfdXN1YXJpb19kZV9saW5rZWRpbi9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3NvY2lhbEljb25TdHlsZX0gLy8gQXBsaWNhciBtYXJnZW4gYSBsb3MgaWNvbm9zXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW4gZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICAgXG4gICk7XG4gIFxufTtcbjxzdHlsZSBqc3g+e2BcbiAgLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7IC8qIENhbWJpYSBlbCBjb2xvciBhIGJsYW5jbyBlbiBob3ZlciAqL1xuICB9XG5gfTwvc3R5bGU+XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGV3cml0ZXJFZmZlY3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiVHlwZXdyaXRlckVmZmVjdCIsInRleHQiLCJkaXNwbGF5VGV4dCIsInNldERpc3BsYXlUZXh0IiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsImN1cnJlbnRJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzbGljZSIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250RmFtaWx5IiwibmFtZVN0eWxlIiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJyb2xlU3R5bGUiLCJpbWFnZUNvbnRhaW5lclN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJjaXJjdWxhckltYWdlU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJidXR0b25TdHlsZSIsInJpZ2h0Iiwic29jaWFsSWNvblN0eWxlIiwibWFyZ2luIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJzcGFuIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsIm9uTG9hZCIsImgxIiwiaDIiLCJiciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});