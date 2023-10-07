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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"an enthusiastic Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Estados para cada ícono\n    const [isInstagramHovered, setIsInstagramHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGithubHovered, setIsGithubHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLinkedinHovered, setIsLinkedinHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isTalk, setIsTalk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 150); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(255, 83, 160)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        color: \"rgb(1, 255, 149)\",\n        fontSize: \"64px\",\n        fontStyle: \"italic\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        top: 100\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"2px solid rgb(1, 255, 149)\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\",\n        transition: \"color 1.2s\",\n        color: \"white\"\n    };\n    // Estilos individuales para los iconos cuando se pasa el ratón por encima\n    const socialIconHoverStyle = {\n        color: \"rgb(1, 255, 149)\",\n        transform: \"scale(1.2)\",\n        transition: \"color 1.2s, transform 1.2s\"\n    };\n    const buttonContainerStyle = {\n        marginTop: \"20px\"\n    };\n    const footerStyle = {\n        position: \"absolute\",\n        bottom: \"20px\",\n        left: \"50%\",\n        transform: \"translateX(-50%)\"\n    };\n    const greenButtonStyle = {\n        backgroundColor: \"transparent\",\n        color: \"rgb(1, 255, 149)\",\n        border: \"2px solid rgb(1, 255, 149)\",\n        borderRadius: \"20px\",\n        padding: \"10px 20px\",\n        margin: \"0 20px\",\n        cursor: \"pointer\",\n        transition: \"background-color 0.3s, color 0.3s\"\n    };\n    const greenButtonHoverStyle = {\n        color: \"white\"\n    };\n    const handleAboutMeClick = ()=>{\n    // Manejar clic en el botón \"About Me\"\n    // Puedes redirigir a la página \"About Me\" o realizar la acción deseada aquí\n    };\n    const handleLetsTalkClick = ()=>{\n    // Manejar clic en el botón \"Let's Talk\"\n    // Puedes redirigir a la página de contacto o abrir un formulario de contacto aquí\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: style,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: imageContainerStyle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                        ,\n                        alt: \"Mi foto\",\n                        width: 200,\n                        height: 200,\n                        className: \"image\",\n                        style: {\n                            opacity: imageLoaded ? 1 : 0,\n                            transition: \"opacity 3s\",\n                            ...circularImageStyle\n                        },\n                        onLoad: ()=>setImageLoaded(true)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Hi I'm \"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: nameStyle,\n                            children: \"Ra\\xfal L\\xf3pez\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 146,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: displayText\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"social-icon\",\n                            style: {\n                                ...socialIconStyle,\n                                ...isInstagramHovered ? socialIconHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsInstagramHovered(true),\n                            onMouseLeave: ()=>setIsInstagramHovered(false),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-instagram fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 153,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/tu_usuario_de_github\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"social-icon\",\n                            style: {\n                                ...socialIconStyle,\n                                ...isGithubHovered ? socialIconHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsGithubHovered(true),\n                            onMouseLeave: ()=>setIsGithubHovered(false),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-github fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                    lineNumber: 179,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 167,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"social-icon\",\n                            style: {\n                                ...socialIconStyle,\n                                ...isLinkedinHovered ? socialIconHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsLinkedinHovered(true),\n                            onMouseLeave: ()=>setIsLinkedinHovered(false),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-linkedin fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                    lineNumber: 193,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 181,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 152,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: footerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleAboutMeClick,\n                            style: {\n                                ...greenButtonStyle,\n                                ...isHovered ? greenButtonHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsHovered(true),\n                            onMouseLeave: ()=>setIsHovered(false),\n                            children: \"About Me\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 197,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLetsTalkClick,\n                            style: {\n                                ...greenButtonStyle,\n                                ...isTalk ? greenButtonHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsTalk(true),\n                            onMouseLeave: ()=>setIsTalk(false),\n                            children: \"Let's Talk\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 205,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 196,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TypewriterEffect, \"x//WRC4fwgbIBbaoS/AvqVx5N4Y=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BDLEtBQUk7NEJBQ0pWLFdBQVU7NEJBQ1YxQyxPQUFPO2dDQUNMLEdBQUdxQixlQUFlO2dDQUNsQixHQUFJakMsb0JBQW9Cb0MsdUJBQXVCLENBQUMsQ0FBQzs0QkFDbkQ7NEJBQ0E2QixjQUFjLElBQU1oRSxxQkFBcUIsSUFBSTs0QkFDN0NpRSxjQUFjLElBQU1qRSxxQkFBcUIsS0FBSzs7OENBRTlDLDhEQUFDa0U7b0NBQUViLFdBQVU7Ozs7OztnQ0FBMkI7Ozs7Ozs7Ozs7Ozs7OEJBRzVDLDhEQUFDSjtvQkFBSXRDLE9BQU80Qjs7c0NBQ1YsOERBQUM0Qjs0QkFDQ0MsU0FBU3RCOzRCQUNUbkMsT0FBTztnQ0FBRSxHQUFHK0IsZ0JBQWdCO2dDQUFFLEdBQUl6QyxZQUFZNEMsd0JBQXdCLENBQUMsQ0FBQzs0QkFBRTs0QkFDMUVtQixjQUFjLElBQU05RCxhQUFhLElBQUk7NEJBQ3JDK0QsY0FBYyxJQUFNL0QsYUFBYSxLQUFLO3NDQUN2Qzs7Ozs7O3NDQUdELDhEQUFDaUU7NEJBQ0NDLFNBQVNyQjs0QkFDVHBDLE9BQU87Z0NBQUUsR0FBRytCLGdCQUFnQjtnQ0FBRSxHQUFJdkMsU0FBUzBDLHdCQUF3QixDQUFDLENBQUM7NEJBQUU7NEJBQ3ZFbUIsY0FBYyxJQUFNNUQsVUFBVSxJQUFJOzRCQUNsQzZELGNBQWMsSUFBTTdELFVBQVUsS0FBSztzQ0FDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FwTk1mO0tBQUFBO0FBc05OLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UeXBld3JpdGVyRWZmZWN0LmpzPzUwMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnOyAvLyBJbXBvcnRhIGxvcyBlc3RpbG9zIGRlIEZvbnQgQXdlc29tZVxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBUeXBld3JpdGVyRWZmZWN0ID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gJ2FuIGVudGh1c2lhc3RpYyBKdW5pb3IgRGV2ZWxvcGVyJzsgLy8gRWwgdGV4dG8gY29uIGVmZWN0b1xuICBjb25zdCBbZGlzcGxheVRleHQsIHNldERpc3BsYXlUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ltYWdlTG9hZGVkLCBzZXRJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gRXN0YWRvcyBwYXJhIGNhZGEgw61jb25vXG4gIGNvbnN0IFtpc0luc3RhZ3JhbUhvdmVyZWQsIHNldElzSW5zdGFncmFtSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0dpdGh1YkhvdmVyZWQsIHNldElzR2l0aHViSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xpbmtlZGluSG92ZXJlZCwgc2V0SXNMaW5rZWRpbkhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNUYWxrLCBzZXRJc1RhbGtdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRJbmRleCA8PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBzZXREaXNwbGF5VGV4dCh0ZXh0LnNsaWNlKDAsIGN1cnJlbnRJbmRleCkpO1xuICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIDE1MCk7IC8vIFZlbG9jaWRhZCBkZSBlc2NyaXR1cmEgZW4gbWlsaXNlZ3VuZG9zXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgLy8gQ2FtYmlhciBsYSBkaXJlY2Npw7NuIGRlIGxhIGNvbHVtbmFcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLCAvLyBDZW50cmFyIGVsIHRleHRvIGhvcml6b250YWxtZW50ZVxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJywgLy8gRm9uZG8gZW4gY29sb3IgbmVncm9cbiAgICBjb2xvcjogJ3JnYigyNTUsIDgzLCAxNjApJywgLy8gQ29sb3IgZGUgbGV0cmEgcGFyYSBlbCB0ZXh0b1xuICAgIGZvbnRGYW1pbHk6ICdWVDMyMywgc2Fucy1zZXJpZicsXG4gIH07XG5cbiAgY29uc3QgbmFtZVN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCwgY3Vyc2l2ZScsXG4gICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgY29sb3I6ICdyZ2IoMSwgMjU1LCAxNDkpJyxcbiAgICBmb250U2l6ZTogJzY0cHgnLCAvLyBDYW1iaWFyIGVsIHRhbWHDsW8gZGUgbGEgbGV0cmEgYSA2NHB4XG4gICAgZm9udFN0eWxlOiAnaXRhbGljJywgLy8gQWdyZWdhciBpbmNsaW5hY2nDs24gYWwgdGV4dG9cbiAgfTtcblxuICBjb25zdCBpbWFnZUNvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JywgLy8gTW9zdHJhciBjb21vIGZsZXhib3hcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgLy8gQWxpbmVhciB2ZXJ0aWNhbG1lbnRlIGFsIGNlbnRyb1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCAvLyBQb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBzdXBlcnBvbmVybGFcbiAgICB0b3A6IDEwMCwgLy8gQWxpbmVhciBhIGxhIGl6cXVpZXJkYSBkZSBsYSBwYW50YWxsYVxuICB9O1xuXG4gIGNvbnN0IGNpcmN1bGFySW1hZ2VTdHlsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLCAvLyBIYWNlciBxdWUgbGEgaW1hZ2VuIHNlYSBjaXJjdWxhclxuICAgIGJvcmRlcjogJzJweCBzb2xpZCByZ2IoMSwgMjU1LCAxNDkpJywgLy8gQm9yZGUgdmVyZGVcbiAgfTtcblxuICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcxMHB4JywgLy8gQWp1c3RhciBsYSBwb3NpY2nDs24gdmVydGljYWxcbiAgICByaWdodDogJzEwcHgnLCAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiBob3Jpem9udGFsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCAvLyBGb25kbyBibGFuY29cbiAgICBjb2xvcjogJ2JsYWNrJywgLy8gVGV4dG8gbmVncm9cbiAgfTtcblxuICBjb25zdCBzb2NpYWxJY29uU3R5bGUgPSB7XG4gICAgbWFyZ2luOiAnMCAxMHB4JywgLy8gQcOxYWRpciBtYXJnZW4gaG9yaXpvbnRhbCBlbnRyZSBsb3MgaWNvbm9zXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDEuMnMnLCAvLyBUcmFuc2ljacOzbiBtw6FzIGxlbnRhICgwLjUgc2VndW5kb3MpIGFsIGNhbWJpYXIgZWwgY29sb3JcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgfTtcblxuICAvLyBFc3RpbG9zIGluZGl2aWR1YWxlcyBwYXJhIGxvcyBpY29ub3MgY3VhbmRvIHNlIHBhc2EgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgY29uc3Qgc29jaWFsSWNvbkhvdmVyU3R5bGUgPSB7XG4gICAgY29sb3I6ICdyZ2IoMSwgMjU1LCAxNDkpJywgLy8gQ2FtYmlhIGVsIGNvbG9yIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScsIC8vIEF1bWVudGEgZWwgdGFtYcOxbyBhbCBwYXNhciBlbCByYXTDs24gcG9yIGVuY2ltYSAocG9yIGVqZW1wbG8sIDEuMiB2ZWNlcyBtw6FzIGdyYW5kZSlcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMS4ycywgdHJhbnNmb3JtIDEuMnMnLCAvLyBBcGxpY2EgdW5hIHRyYW5zaWNpw7NuIHRhbnRvIGFsIGNvbG9yIGNvbW8gYWwgdGFtYcOxb1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lclN0eWxlID0ge1xuICAgIG1hcmdpblRvcDogJzIwcHgnLCAvLyBBZ3JlZ2EgbWFyZ2VuIHN1cGVyaW9yXG4gIH07XG5cbiAgY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAnMjBweCcsIC8vIEFqdXN0YSBsYSBkaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgaW5mZXJpb3JcbiAgICBsZWZ0OiAnNTAlJywgLy8gQ2VudHJhIGhvcml6b250YWxtZW50ZVxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLCAvLyBDZW50cmEgaG9yaXpvbnRhbG1lbnRlXG4gIH07XG5cbiAgY29uc3QgZ3JlZW5CdXR0b25TdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6ICdyZ2IoMSwgMjU1LCAxNDkpJyxcbiAgICBib3JkZXI6ICcycHggc29saWQgcmdiKDEsIDI1NSwgMTQ5KScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgbWFyZ2luOiAnMCAyMHB4JywgLy8gQWp1c3RhIGVsIG1hcmdlbiBob3Jpem9udGFsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcycsXG4gIH07XG5cbiAgY29uc3QgZ3JlZW5CdXR0b25Ib3ZlclN0eWxlID0ge1xuICAgIFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFib3V0TWVDbGljayA9ICgpID0+IHtcbiAgICAvLyBNYW5lamFyIGNsaWMgZW4gZWwgYm90w7NuIFwiQWJvdXQgTWVcIlxuICAgIC8vIFB1ZWRlcyByZWRpcmlnaXIgYSBsYSBww6FnaW5hIFwiQWJvdXQgTWVcIiBvIHJlYWxpemFyIGxhIGFjY2nDs24gZGVzZWFkYSBhcXXDrVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxldHNUYWxrQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gTWFuZWphciBjbGljIGVuIGVsIGJvdMOzbiBcIkxldCdzIFRhbGtcIlxuICAgIC8vIFB1ZWRlcyByZWRpcmlnaXIgYSBsYSBww6FnaW5hIGRlIGNvbnRhY3RvIG8gYWJyaXIgdW4gZm9ybXVsYXJpbyBkZSBjb250YWN0byBhcXXDrVxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e2ltYWdlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIHsvKiBBZ3JlZ2FyIGxhIGltYWdlbiBjb24gdHJhbnNpY2nDs24gZGUgb3BhY2lkYWQgeSBlc3RpbG8gY2lyY3VsYXIgKi99XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIveW8ucG5nXCIgLy8gUnV0YSByZWxhdGl2YSBhIGxhIGltYWdlbiBlbiBsYSBjYXJwZXRhIFwicHVibGljXCJcbiAgICAgICAgICAgIGFsdD1cIk1pIGZvdG9cIlxuICAgICAgICAgICAgd2lkdGg9ezIwMH0gLy8gQW5jaG8gZGVzZWFkb1xuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9IC8vIEFsdHVyYSBkZXNlYWRhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBvcGFjaXR5OiBpbWFnZUxvYWRlZCA/IDEgOiAwLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAzcycsXG4gICAgICAgICAgICAgIC4uLmNpcmN1bGFySW1hZ2VTdHlsZSwgLy8gQXBsaWNhciBlc3RpbG8gY2lyY3VsYXIgeSBib3JkZSB2ZXJkZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0SW1hZ2VMb2FkZWQodHJ1ZSl9IC8vIENhbWJpYXIgZWwgZXN0YWRvIGN1YW5kbyBsYSBpbWFnZW4gc2UgY2FyZ2FcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkhpIEknbSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e25hbWVTdHlsZX0+UmHDumwgTMOzcGV6PC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDI+e2Rpc3BsYXlUZXh0fTwvaDI+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIHsvKiBBZ3JlZ2EgbG9zIGljb25vcyBkZSByZWRlcyBzb2NpYWxlcyBhcXXDrSAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHVfdXN1YXJpb19kZV9pbnN0YWdyYW0vXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnNvY2lhbEljb25TdHlsZSwgLy8gRXN0aWxvIG5vcm1hbFxuICAgICAgICAgICAgICAuLi4oaXNJbnN0YWdyYW1Ib3ZlcmVkID8gc29jaWFsSWNvbkhvdmVyU3R5bGUgOiB7fSksIC8vIEVzdGlsbyBhbCBwYXNhciBlbCByYXTDs24gcG9yIGVuY2ltYVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNJbnN0YWdyYW1Ib3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0luc3RhZ3JhbUhvdmVyZWQoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbSBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90dV91c3VhcmlvX2RlX2dpdGh1YlwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zb2NpYWxJY29uU3R5bGUsIC8vIEVzdGlsbyBub3JtYWxcbiAgICAgICAgICAgICAgLi4uKGlzR2l0aHViSG92ZXJlZCA/IHNvY2lhbEljb25Ib3ZlclN0eWxlIDoge30pLCAvLyBFc3RpbG8gYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzR2l0aHViSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNHaXRodWJIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWIgZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdHVfdXN1YXJpb19kZV9saW5rZWRpbi9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc29jaWFsSWNvblN0eWxlLCAvLyBFc3RpbG8gbm9ybWFsXG4gICAgICAgICAgICAgIC4uLihpc0xpbmtlZGluSG92ZXJlZCA/IHNvY2lhbEljb25Ib3ZlclN0eWxlIDoge30pLCAvLyBFc3RpbG8gYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzTGlua2VkaW5Ib3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0xpbmtlZGluSG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW4gZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtmb290ZXJTdHlsZX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWJvdXRNZUNsaWNrfVxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uZ3JlZW5CdXR0b25TdHlsZSwgLi4uKGlzSG92ZXJlZCA/IGdyZWVuQnV0dG9uSG92ZXJTdHlsZSA6IHt9KSB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWJvdXQgTWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMZXRzVGFsa0NsaWNrfVxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uZ3JlZW5CdXR0b25TdHlsZSwgLi4uKGlzVGFsayA/IGdyZWVuQnV0dG9uSG92ZXJTdHlsZSA6IHt9KSB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc1RhbGsodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzVGFsayhmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGV0J3MgVGFsa1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZXdyaXRlckVmZmVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJUeXBld3JpdGVyRWZmZWN0IiwidGV4dCIsImRpc3BsYXlUZXh0Iiwic2V0RGlzcGxheVRleHQiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiaXNJbnN0YWdyYW1Ib3ZlcmVkIiwic2V0SXNJbnN0YWdyYW1Ib3ZlcmVkIiwiaXNHaXRodWJIb3ZlcmVkIiwic2V0SXNHaXRodWJIb3ZlcmVkIiwiaXNMaW5rZWRpbkhvdmVyZWQiLCJzZXRJc0xpbmtlZGluSG92ZXJlZCIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImlzVGFsayIsInNldElzVGFsayIsImN1cnJlbnRJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzbGljZSIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250RmFtaWx5IiwibmFtZVN0eWxlIiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJpbWFnZUNvbnRhaW5lclN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJjaXJjdWxhckltYWdlU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJidXR0b25TdHlsZSIsInJpZ2h0Iiwic29jaWFsSWNvblN0eWxlIiwibWFyZ2luIiwidHJhbnNpdGlvbiIsInNvY2lhbEljb25Ib3ZlclN0eWxlIiwidHJhbnNmb3JtIiwiYnV0dG9uQ29udGFpbmVyU3R5bGUiLCJtYXJnaW5Ub3AiLCJmb290ZXJTdHlsZSIsImJvdHRvbSIsImxlZnQiLCJncmVlbkJ1dHRvblN0eWxlIiwicGFkZGluZyIsImN1cnNvciIsImdyZWVuQnV0dG9uSG92ZXJTdHlsZSIsImhhbmRsZUFib3V0TWVDbGljayIsImhhbmRsZUxldHNUYWxrQ2xpY2siLCJoZWFkZXIiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImNsYXNzTmFtZSIsIm9wYWNpdHkiLCJvbkxvYWQiLCJoMSIsInNwYW4iLCJoMiIsImJyIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJpIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});