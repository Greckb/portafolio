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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"an enthusiastic Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Estados para cada ícono\n    const [isInstagramHovered, setIsInstagramHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGithubHovered, setIsGithubHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLinkedinHovered, setIsLinkedinHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 150); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(255, 83, 160)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        color: \"rgb(1, 255, 149)\",\n        fontSize: \"64px\",\n        fontStyle: \"italic\"\n    };\n    const roleStyle = {\n        color: \"rgb(255, 83, 160)\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        top: 150\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"2px solid rgb(1, 255, 149)\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\",\n        color: \"rgb(255, 83, 160)\",\n        transition: \"color 0.5s\"\n    };\n    // Agrega un estilo para los iconos cuando se pasa el ratón por encima\n    const socialIconHoverStyle = {\n        color: \"white\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                style: buttonStyle,\n                type: \"button\",\n                \"data-bs-toggle\": \"collapse\",\n                \"data-bs-target\": \"#navbarNav\",\n                \"aria-controls\": \"navbarNav\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: imageContainerStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                            ,\n                            alt: \"Mi foto\",\n                            width: 200,\n                            height: 200,\n                            className: \"image\",\n                            style: {\n                                opacity: imageLoaded ? 1 : 0,\n                                transition: \"opacity 3s\",\n                                ...circularImageStyle\n                            },\n                            onLoad: ()=>setImageLoaded(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: \"Hi I'm \"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: nameStyle,\n                                children: \"Ra\\xfal L\\xf3pez\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsHovered(true),\n                                onMouseLeave: ()=>setIsHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-instagram fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/tu_usuario_de_github\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsHovered(true),\n                                onMouseLeave: ()=>setIsHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-github fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 156,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 144,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsHovered(true),\n                                onMouseLeave: ()=>setIsHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-linkedin fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 170,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 158,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TypewriterEffect, \"wJ1wKtendLE4glXI+KP+m1mMchg=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnOyAvLyBJbXBvcnRhIGxvcyBlc3RpbG9zIGRlIEZvbnQgQXdlc29tZVxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5cbmNvbnN0IFR5cGV3cml0ZXJFZmZlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHQgPSAnYW4gZW50aHVzaWFzdGljIEp1bmlvciBEZXZlbG9wZXInOyAvLyBFbCB0ZXh0byBjb24gZWZlY3RvXG4gIGNvbnN0IFtkaXNwbGF5VGV4dCwgc2V0RGlzcGxheVRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIC8vIEVzdGFkb3MgcGFyYSBjYWRhIMOtY29ub1xuICAgY29uc3QgW2lzSW5zdGFncmFtSG92ZXJlZCwgc2V0SXNJbnN0YWdyYW1Ib3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtpc0dpdGh1YkhvdmVyZWQsIHNldElzR2l0aHViSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbaXNMaW5rZWRpbkhvdmVyZWQsIHNldElzTGlua2VkaW5Ib3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHNldERpc3BsYXlUZXh0KHRleHQuc2xpY2UoMCwgY3VycmVudEluZGV4KSk7XG4gICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSwgMTUwKTsgLy8gVmVsb2NpZGFkIGRlIGVzY3JpdHVyYSBlbiBtaWxpc2VndW5kb3NcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCAvLyBDYW1iaWFyIGxhIGRpcmVjY2nDs24gZGUgbGEgY29sdW1uYVxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsIC8vIENlbnRyYXIgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCAvLyBGb25kbyBlbiBjb2xvciBuZWdyb1xuICAgIGNvbG9yOiAncmdiKDI1NSwgODMsIDE2MCknLCAvLyBDb2xvciBkZSBsZXRyYSBwYXJhIGVsIHRleHRvXG4gICAgZm9udEZhbWlseTogJ1ZUMzIzLCBzYW5zLXNlcmlmJyxcbiAgfTtcblxuICBjb25zdCBuYW1lU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ0RhbmNpbmcgU2NyaXB0LCBjdXJzaXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLFxuICAgIGZvbnRTaXplOiAnNjRweCcsIC8vIENhbWJpYXIgZWwgdGFtYcOxbyBkZSBsYSBsZXRyYSBhIDY0cHhcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLCAvLyBBZ3JlZ2FyIGluY2xpbmFjacOzbiBhbCB0ZXh0b1xuICB9O1xuXG5cbiAgY29uc3Qgcm9sZVN0eWxlID0ge1xuICAgIGNvbG9yOiAncmdiKDI1NSwgODMsIDE2MCknLCAvLyBDb2xvciByb3NhXG4gIH07XG5cbiAgY29uc3QgaW1hZ2VDb250YWluZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsIC8vIE1vc3RyYXIgY29tbyBmbGV4Ym94XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsIC8vIEFsaW5lYXIgdmVydGljYWxtZW50ZSBhbCBjZW50cm9cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgLy8gUG9zaWNpw7NuIGFic29sdXRhIHBhcmEgc3VwZXJwb25lcmxhXG4gICAgdG9wOiAxNTAsIC8vIEFsaW5lYXIgYSBsYSBpenF1aWVyZGEgZGUgbGEgcGFudGFsbGFcbiAgICAvLyBoZWlnaHQ6ICcxMDB2aCcsIC8vIFRhbWHDsW8gY29tcGxldG8gZGUgbGEgcGFudGFsbGFcbiAgfTtcblxuICBjb25zdCBjaXJjdWxhckltYWdlU3R5bGUgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJywgLy8gSGFjZXIgcXVlIGxhIGltYWdlbiBzZWEgY2lyY3VsYXJcbiAgICBib3JkZXI6ICcycHggc29saWQgcmdiKDEsIDI1NSwgMTQ5KScsIC8vIEJvcmRlIHZlcmRlXG4gIH07XG5cblxuICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcxMHB4JywgLy8gQWp1c3RhciBsYSBwb3NpY2nDs24gdmVydGljYWxcbiAgICByaWdodDogJzEwcHgnLCAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiBob3Jpem9udGFsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCAvLyBGb25kbyBibGFuY29cbiAgICBjb2xvcjogJ2JsYWNrJywgLy8gVGV4dG8gbmVncm9cbiAgfTtcblxuICBjb25zdCBzb2NpYWxJY29uU3R5bGUgPSB7XG4gICAgbWFyZ2luOiAnMCAxMHB4JywgLy8gQcOxYWRpciBtYXJnZW4gaG9yaXpvbnRhbCBlbnRyZSBsb3MgaWNvbm9zXG4gICAgY29sb3I6ICdyZ2IoMjU1LCA4MywgMTYwKScsIC8vIERlYmUgdGVuZXIgZWwgcGFyw6ludGVzaXMgZGUgY2llcnJlICcpJyBhcXXDrVxuICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjVzJywgLy8gVHJhbnNpY2nDs24gbcOhcyBsZW50YSAoMC41IHNlZ3VuZG9zKSBhbCBjYW1iaWFyIGVsIGNvbG9yXG4gIH07XG5cblxuICAvLyBBZ3JlZ2EgdW4gZXN0aWxvIHBhcmEgbG9zIGljb25vcyBjdWFuZG8gc2UgcGFzYSBlbCByYXTDs24gcG9yIGVuY2ltYVxuICBjb25zdCBzb2NpYWxJY29uSG92ZXJTdHlsZSA9IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtpbWFnZUNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICB7LyogQWdyZWdhciBsYSBpbWFnZW4gY29uIHRyYW5zaWNpw7NuIGRlIG9wYWNpZGFkIHkgZXN0aWxvIGNpcmN1bGFyICovfVxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL3lvLnBuZ1wiIC8vIFJ1dGEgcmVsYXRpdmEgYSBsYSBpbWFnZW4gZW4gbGEgY2FycGV0YSBcInB1YmxpY1wiXG4gICAgICAgICAgICBhbHQ9XCJNaSBmb3RvXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9IC8vIEFuY2hvIGRlc2VhZG9cbiAgICAgICAgICAgIGhlaWdodD17MjAwfSAvLyBBbHR1cmEgZGVzZWFkYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogaW1hZ2VMb2FkZWQgPyAxIDogMCxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgM3MnLFxuICAgICAgICAgICAgICAuLi5jaXJjdWxhckltYWdlU3R5bGUsIC8vIEFwbGljYXIgZXN0aWxvIGNpcmN1bGFyIHkgYm9yZGUgdmVyZGVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkxvYWQ9eygpID0+IHNldEltYWdlTG9hZGVkKHRydWUpfSAvLyBDYW1iaWFyIGVsIGVzdGFkbyBjdWFuZG8gbGEgaW1hZ2VuIHNlIGNhcmdhXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5IaSBJJ20gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXtuYW1lU3R5bGV9PlJhw7psIEzDs3Blejwvc3Bhbj5cblxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxoMj57ZGlzcGxheVRleHR9PC9oMj5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgey8qIEFncmVnYSBsb3MgaWNvbm9zIGRlIHJlZGVzIHNvY2lhbGVzIGFxdcOtICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90dV91c3VhcmlvX2RlX2luc3RhZ3JhbS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc29jaWFsSWNvblN0eWxlLCAvLyBFc3RpbG8gbm9ybWFsXG4gICAgICAgICAgICAgIC4uLihpc0hvdmVyZWQgPyBzb2NpYWxJY29uSG92ZXJTdHlsZSA6IHt9KSwgLy8gRXN0aWxvIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtIGZhLTJ4XCI+PC9pPiB7LyogSWNvbm8gbcOhcyBncmFuZGUgKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R1X3VzdWFyaW9fZGVfZ2l0aHViXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnNvY2lhbEljb25TdHlsZSwgLy8gRXN0aWxvIG5vcm1hbFxuICAgICAgICAgICAgICAuLi4oaXNIb3ZlcmVkID8gc29jaWFsSWNvbkhvdmVyU3R5bGUgOiB7fSksIC8vIEVzdGlsbyBhbCBwYXNhciBlbCByYXTDs24gcG9yIGVuY2ltYVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YiBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90dV91c3VhcmlvX2RlX2xpbmtlZGluL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zb2NpYWxJY29uU3R5bGUsIC8vIEVzdGlsbyBub3JtYWxcbiAgICAgICAgICAgICAgLi4uKGlzSG92ZXJlZCA/IHNvY2lhbEljb25Ib3ZlclN0eWxlIDoge30pLCAvLyBFc3RpbG8gYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpbiBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cblxuICApO1xuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFR5cGV3cml0ZXJFZmZlY3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiVHlwZXdyaXRlckVmZmVjdCIsInRleHQiLCJkaXNwbGF5VGV4dCIsInNldERpc3BsYXlUZXh0IiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsImlzSW5zdGFncmFtSG92ZXJlZCIsInNldElzSW5zdGFncmFtSG92ZXJlZCIsImlzR2l0aHViSG92ZXJlZCIsInNldElzR2l0aHViSG92ZXJlZCIsImlzTGlua2VkaW5Ib3ZlcmVkIiwic2V0SXNMaW5rZWRpbkhvdmVyZWQiLCJjdXJyZW50SW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2xpY2UiLCJjbGVhckludGVydmFsIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udEZhbWlseSIsIm5hbWVTdHlsZSIsImZvbnRTaXplIiwiZm9udFN0eWxlIiwicm9sZVN0eWxlIiwiaW1hZ2VDb250YWluZXJTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwiY2lyY3VsYXJJbWFnZVN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYnV0dG9uU3R5bGUiLCJyaWdodCIsInNvY2lhbEljb25TdHlsZSIsIm1hcmdpbiIsInRyYW5zaXRpb24iLCJzb2NpYWxJY29uSG92ZXJTdHlsZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwic3BhbiIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwib3BhY2l0eSIsIm9uTG9hZCIsImgxIiwiaDIiLCJiciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaXNIb3ZlcmVkIiwib25Nb3VzZUVudGVyIiwic2V0SXNIb3ZlcmVkIiwib25Nb3VzZUxlYXZlIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});