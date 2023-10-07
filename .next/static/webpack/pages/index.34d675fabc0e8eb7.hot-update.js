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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"an enthusiastic Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Estados para cada ícono\n    const [isInstagramHovered, setIsInstagramHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGithubHovered, setIsGithubHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLinkedinHovered, setIsLinkedinHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isTalk, setIsTalk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 150); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(255, 83, 160)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        color: \"rgb(1, 255, 149)\",\n        fontSize: \"64px\",\n        fontStyle: \"italic\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        top: 100\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"2px solid rgb(1, 255, 149)\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\",\n        transition: \"color 1.2s\",\n        color: \"white\"\n    };\n    // Estilos individuales para los iconos cuando se pasa el ratón por encima\n    const socialIconHoverStyle = {\n        color: \"rgb(1, 255, 149)\",\n        transform: \"scale(1.2)\",\n        transition: \"color 1.2s, transform 1.2s\"\n    };\n    const buttonContainerStyle = {\n        marginTop: \"20px\"\n    };\n    const footerStyle = {\n        position: \"absolute\",\n        bottom: \"150px\",\n        left: \"50%\",\n        transform: \"translateX(-50%)\"\n    };\n    const greenButtonStyle = {\n        backgroundColor: \"transparent\",\n        color: \"rgb(1, 255, 149)\",\n        border: \"2px solid rgb(1, 255, 149)\",\n        borderRadius: \"20px\",\n        padding: \"10px 20px\",\n        margin: \"0 20px\",\n        cursor: \"pointer\",\n        transition: \"background-color 0.3s, color 0.3s\"\n    };\n    const greenButtonHoverStyle = {\n        border: \"2px solid white\",\n        color: \"white\"\n    };\n    const handleAboutMeClick = ()=>{\n    // Manejar clic en el botón \"About Me\"\n    // Puedes redirigir a la página \"About Me\" o realizar la acción deseada aquí\n    };\n    const handleLetsTalkClick = ()=>{\n    // Manejar clic en el botón \"Let's Talk\"\n    // Puedes redirigir a la página de contacto o abrir un formulario de contacto aquí\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: style,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: imageContainerStyle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                        ,\n                        alt: \"Mi foto\",\n                        width: 200,\n                        height: 200,\n                        className: \"image\",\n                        style: {\n                            opacity: imageLoaded ? 1 : 0,\n                            transition: \"opacity 3s\",\n                            ...circularImageStyle\n                        },\n                        onLoad: ()=>setImageLoaded(true)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                color: \"white\"\n                            },\n                            children: \"Hi I'm \"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: nameStyle,\n                            children: \"Ra\\xfal L\\xf3pez\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 146,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: displayText\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 149,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"social-icon\",\n                            style: {\n                                ...socialIconStyle,\n                                ...isInstagramHovered ? socialIconHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsInstagramHovered(true),\n                            onMouseLeave: ()=>setIsInstagramHovered(false),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-instagram fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 153,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/tu_usuario_de_github\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"social-icon\",\n                            style: {\n                                ...socialIconStyle,\n                                ...isGithubHovered ? socialIconHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsGithubHovered(true),\n                            onMouseLeave: ()=>setIsGithubHovered(false),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-github fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                    lineNumber: 179,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 167,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"social-icon\",\n                            style: {\n                                ...socialIconStyle,\n                                ...isLinkedinHovered ? socialIconHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsLinkedinHovered(true),\n                            onMouseLeave: ()=>setIsLinkedinHovered(false),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-linkedin fa-2x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                    lineNumber: 193,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 181,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 152,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: footerStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleAboutMeClick,\n                            style: {\n                                ...greenButtonStyle,\n                                ...isHovered ? greenButtonHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsHovered(true),\n                            onMouseLeave: ()=>setIsHovered(false),\n                            children: \"About Me\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 197,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLetsTalkClick,\n                            style: {\n                                ...greenButtonStyle,\n                                ...isTalk ? greenButtonHoverStyle : {}\n                            },\n                            onMouseEnter: ()=>setIsTalk(true),\n                            onMouseLeave: ()=>setIsTalk(false),\n                            children: \"Let's Talk\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 205,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: footerStyle,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"2023 - \",\n                                    new Date().getFullYear(),\n                                    \" All Rights Reserved.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 215,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 213,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 196,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TypewriterEffect, \"x//WRC4fwgbIBbaoS/AvqVx5N4Y=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TEMsUUFBTzs0QkFDUEMsS0FBSTs0QkFDSlYsV0FBVTs0QkFDVjFDLE9BQU87Z0NBQ0wsR0FBR3FCLGVBQWU7Z0NBQ2xCLEdBQUlqQyxvQkFBb0JvQyx1QkFBdUIsQ0FBQyxDQUFDOzRCQUNuRDs0QkFDQTZCLGNBQWMsSUFBTWhFLHFCQUFxQixJQUFJOzRCQUM3Q2lFLGNBQWMsSUFBTWpFLHFCQUFxQixLQUFLOzs4Q0FFOUMsOERBQUNrRTtvQ0FBRWIsV0FBVTs7Ozs7O2dDQUEyQjs7Ozs7Ozs7Ozs7Ozs4QkFHNUMsOERBQUNKO29CQUFJdEMsT0FBTzRCOztzQ0FDViw4REFBQzRCOzRCQUNDQyxTQUFTdEI7NEJBQ1RuQyxPQUFPO2dDQUFFLEdBQUcrQixnQkFBZ0I7Z0NBQUUsR0FBSXpDLFlBQVk0Qyx3QkFBd0IsQ0FBQyxDQUFDOzRCQUFFOzRCQUMxRW1CLGNBQWMsSUFBTTlELGFBQWEsSUFBSTs0QkFDckMrRCxjQUFjLElBQU0vRCxhQUFhLEtBQUs7c0NBQ3ZDOzs7Ozs7c0NBR0QsOERBQUNpRTs0QkFDQ0MsU0FBU3JCOzRCQUNUcEMsT0FBTztnQ0FBRSxHQUFHK0IsZ0JBQWdCO2dDQUFFLEdBQUl2QyxTQUFTMEMsd0JBQXdCLENBQUMsQ0FBQzs0QkFBRTs0QkFDdkVtQixjQUFjLElBQU01RCxVQUFVLElBQUk7NEJBQ2xDNkQsY0FBYyxJQUFNN0QsVUFBVSxLQUFLO3NDQUNwQzs7Ozs7O3NDQUdELDhEQUFDNkM7NEJBQUlJLFdBQVdkO3NDQUVkLDRFQUFDOEI7O29DQUFFO29DQUFRLElBQUlDLE9BQU9DLFdBQVc7b0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2hEO0dBN05NbEY7S0FBQUE7QUErTk4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1R5cGV3cml0ZXJFZmZlY3QuanM/NTAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7IC8vIEltcG9ydGEgbG9zIGVzdGlsb3MgZGUgRm9udCBBd2Vzb21lXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IFR5cGV3cml0ZXJFZmZlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHQgPSAnYW4gZW50aHVzaWFzdGljIEp1bmlvciBEZXZlbG9wZXInOyAvLyBFbCB0ZXh0byBjb24gZWZlY3RvXG4gIGNvbnN0IFtkaXNwbGF5VGV4dCwgc2V0RGlzcGxheVRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBFc3RhZG9zIHBhcmEgY2FkYSDDrWNvbm9cbiAgY29uc3QgW2lzSW5zdGFncmFtSG92ZXJlZCwgc2V0SXNJbnN0YWdyYW1Ib3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzR2l0aHViSG92ZXJlZCwgc2V0SXNHaXRodWJIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTGlua2VkaW5Ib3ZlcmVkLCBzZXRJc0xpbmtlZGluSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1RhbGssIHNldElzVGFsa10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHNldERpc3BsYXlUZXh0KHRleHQuc2xpY2UoMCwgY3VycmVudEluZGV4KSk7XG4gICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSwgMTUwKTsgLy8gVmVsb2NpZGFkIGRlIGVzY3JpdHVyYSBlbiBtaWxpc2VndW5kb3NcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCAvLyBDYW1iaWFyIGxhIGRpcmVjY2nDs24gZGUgbGEgY29sdW1uYVxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsIC8vIENlbnRyYXIgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCAvLyBGb25kbyBlbiBjb2xvciBuZWdyb1xuICAgIGNvbG9yOiAncmdiKDI1NSwgODMsIDE2MCknLCAvLyBDb2xvciBkZSBsZXRyYSBwYXJhIGVsIHRleHRvXG4gICAgZm9udEZhbWlseTogJ1ZUMzIzLCBzYW5zLXNlcmlmJyxcbiAgfTtcblxuICBjb25zdCBuYW1lU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ0RhbmNpbmcgU2NyaXB0LCBjdXJzaXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLFxuICAgIGZvbnRTaXplOiAnNjRweCcsIC8vIENhbWJpYXIgZWwgdGFtYcOxbyBkZSBsYSBsZXRyYSBhIDY0cHhcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLCAvLyBBZ3JlZ2FyIGluY2xpbmFjacOzbiBhbCB0ZXh0b1xuICB9O1xuXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLCAvLyBNb3N0cmFyIGNvbW8gZmxleGJveFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCAvLyBBbGluZWFyIHZlcnRpY2FsbWVudGUgYWwgY2VudHJvXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIC8vIFBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHN1cGVycG9uZXJsYVxuICAgIHRvcDogMTAwLCAvLyBBbGluZWFyIGEgbGEgaXpxdWllcmRhIGRlIGxhIHBhbnRhbGxhXG4gIH07XG5cbiAgY29uc3QgY2lyY3VsYXJJbWFnZVN0eWxlID0ge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsIC8vIEhhY2VyIHF1ZSBsYSBpbWFnZW4gc2VhIGNpcmN1bGFyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkIHJnYigxLCAyNTUsIDE0OSknLCAvLyBCb3JkZSB2ZXJkZVxuICB9O1xuXG4gIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzEwcHgnLCAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiB2ZXJ0aWNhbFxuICAgIHJpZ2h0OiAnMTBweCcsIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIGhvcml6b250YWxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIC8vIEZvbmRvIGJsYW5jb1xuICAgIGNvbG9yOiAnYmxhY2snLCAvLyBUZXh0byBuZWdyb1xuICB9O1xuXG4gIGNvbnN0IHNvY2lhbEljb25TdHlsZSA9IHtcbiAgICBtYXJnaW46ICcwIDEwcHgnLCAvLyBBw7FhZGlyIG1hcmdlbiBob3Jpem9udGFsIGVudHJlIGxvcyBpY29ub3NcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMS4ycycsIC8vIFRyYW5zaWNpw7NuIG3DoXMgbGVudGEgKDAuNSBzZWd1bmRvcykgYWwgY2FtYmlhciBlbCBjb2xvclxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICB9O1xuXG4gIC8vIEVzdGlsb3MgaW5kaXZpZHVhbGVzIHBhcmEgbG9zIGljb25vcyBjdWFuZG8gc2UgcGFzYSBlbCByYXTDs24gcG9yIGVuY2ltYVxuICBjb25zdCBzb2NpYWxJY29uSG92ZXJTdHlsZSA9IHtcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLCAvLyBDYW1iaWEgZWwgY29sb3IgYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJywgLy8gQXVtZW50YSBlbCB0YW1hw7FvIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hIChwb3IgZWplbXBsbywgMS4yIHZlY2VzIG3DoXMgZ3JhbmRlKVxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxLjJzLCB0cmFuc2Zvcm0gMS4ycycsIC8vIEFwbGljYSB1bmEgdHJhbnNpY2nDs24gdGFudG8gYWwgY29sb3IgY29tbyBhbCB0YW1hw7FvXG4gIH07XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgbWFyZ2luVG9wOiAnMjBweCcsIC8vIEFncmVnYSBtYXJnZW4gc3VwZXJpb3JcbiAgfTtcblxuICBjb25zdCBmb290ZXJTdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206ICcxNTBweCcsIC8vIEFqdXN0YSBsYSBkaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgaW5mZXJpb3JcbiAgICBsZWZ0OiAnNTAlJywgLy8gQ2VudHJhIGhvcml6b250YWxtZW50ZVxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLCAvLyBDZW50cmEgaG9yaXpvbnRhbG1lbnRlXG4gIH07XG5cbiAgY29uc3QgZ3JlZW5CdXR0b25TdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6ICdyZ2IoMSwgMjU1LCAxNDkpJyxcbiAgICBib3JkZXI6ICcycHggc29saWQgcmdiKDEsIDI1NSwgMTQ5KScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgbWFyZ2luOiAnMCAyMHB4JywgLy8gQWp1c3RhIGVsIG1hcmdlbiBob3Jpem9udGFsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcycsXG4gIH07XG5cbiAgY29uc3QgZ3JlZW5CdXR0b25Ib3ZlclN0eWxlID0ge1xuICAgIGJvcmRlcjogJzJweCBzb2xpZCB3aGl0ZScsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWJvdXRNZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vIE1hbmVqYXIgY2xpYyBlbiBlbCBib3TDs24gXCJBYm91dCBNZVwiXG4gICAgLy8gUHVlZGVzIHJlZGlyaWdpciBhIGxhIHDDoWdpbmEgXCJBYm91dCBNZVwiIG8gcmVhbGl6YXIgbGEgYWNjacOzbiBkZXNlYWRhIGFxdcOtXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTGV0c1RhbGtDbGljayA9ICgpID0+IHtcbiAgICAvLyBNYW5lamFyIGNsaWMgZW4gZWwgYm90w7NuIFwiTGV0J3MgVGFsa1wiXG4gICAgLy8gUHVlZGVzIHJlZGlyaWdpciBhIGxhIHDDoWdpbmEgZGUgY29udGFjdG8gbyBhYnJpciB1biBmb3JtdWxhcmlvIGRlIGNvbnRhY3RvIGFxdcOtXG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGRpdiBzdHlsZT17aW1hZ2VDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgey8qIEFncmVnYXIgbGEgaW1hZ2VuIGNvbiB0cmFuc2ljacOzbiBkZSBvcGFjaWRhZCB5IGVzdGlsbyBjaXJjdWxhciAqL31cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi95by5wbmdcIiAvLyBSdXRhIHJlbGF0aXZhIGEgbGEgaW1hZ2VuIGVuIGxhIGNhcnBldGEgXCJwdWJsaWNcIlxuICAgICAgICAgICAgYWx0PVwiTWkgZm90b1wiXG4gICAgICAgICAgICB3aWR0aD17MjAwfSAvLyBBbmNobyBkZXNlYWRvXG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH0gLy8gQWx0dXJhIGRlc2VhZGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IGltYWdlTG9hZGVkID8gMSA6IDAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDNzJyxcbiAgICAgICAgICAgICAgLi4uY2lyY3VsYXJJbWFnZVN0eWxlLCAvLyBBcGxpY2FyIGVzdGlsbyBjaXJjdWxhciB5IGJvcmRlIHZlcmRlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiBzZXRJbWFnZUxvYWRlZCh0cnVlKX0gLy8gQ2FtYmlhciBlbCBlc3RhZG8gY3VhbmRvIGxhIGltYWdlbiBzZSBjYXJnYVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+SGkgSSdtIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17bmFtZVN0eWxlfT5SYcO6bCBMw7NwZXo8L3NwYW4+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMj57ZGlzcGxheVRleHR9PC9oMj5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgey8qIEFncmVnYSBsb3MgaWNvbm9zIGRlIHJlZGVzIHNvY2lhbGVzIGFxdcOtICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90dV91c3VhcmlvX2RlX2luc3RhZ3JhbS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc29jaWFsSWNvblN0eWxlLCAvLyBFc3RpbG8gbm9ybWFsXG4gICAgICAgICAgICAgIC4uLihpc0luc3RhZ3JhbUhvdmVyZWQgPyBzb2NpYWxJY29uSG92ZXJTdHlsZSA6IHt9KSwgLy8gRXN0aWxvIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0luc3RhZ3JhbUhvdmVyZWQodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSW5zdGFncmFtSG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtIGZhLTJ4XCI+PC9pPiB7LyogSWNvbm8gbcOhcyBncmFuZGUgKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R1X3VzdWFyaW9fZGVfZ2l0aHViXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnNvY2lhbEljb25TdHlsZSwgLy8gRXN0aWxvIG5vcm1hbFxuICAgICAgICAgICAgICAuLi4oaXNHaXRodWJIb3ZlcmVkID8gc29jaWFsSWNvbkhvdmVyU3R5bGUgOiB7fSksIC8vIEVzdGlsbyBhbCBwYXNhciBlbCByYXTDs24gcG9yIGVuY2ltYVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNHaXRodWJIb3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0dpdGh1YkhvdmVyZWQoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YiBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90dV91c3VhcmlvX2RlX2xpbmtlZGluL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zb2NpYWxJY29uU3R5bGUsIC8vIEVzdGlsbyBub3JtYWxcbiAgICAgICAgICAgICAgLi4uKGlzTGlua2VkaW5Ib3ZlcmVkID8gc29jaWFsSWNvbkhvdmVyU3R5bGUgOiB7fSksIC8vIEVzdGlsbyBhbCBwYXNhciBlbCByYXTDs24gcG9yIGVuY2ltYVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNMaW5rZWRpbkhvdmVyZWQodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzTGlua2VkaW5Ib3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpbiBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBYm91dE1lQ2xpY2t9XG4gICAgICAgICAgICBzdHlsZT17eyAuLi5ncmVlbkJ1dHRvblN0eWxlLCAuLi4oaXNIb3ZlcmVkID8gZ3JlZW5CdXR0b25Ib3ZlclN0eWxlIDoge30pIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBYm91dCBNZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxldHNUYWxrQ2xpY2t9XG4gICAgICAgICAgICBzdHlsZT17eyAuLi5ncmVlbkJ1dHRvblN0eWxlLCAuLi4oaXNUYWxrID8gZ3JlZW5CdXR0b25Ib3ZlclN0eWxlIDoge30pIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzVGFsayh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNUYWxrKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMZXQncyBUYWxrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8cD4yMDIzIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XG4gICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlR5cGV3cml0ZXJFZmZlY3QiLCJ0ZXh0IiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJpc0luc3RhZ3JhbUhvdmVyZWQiLCJzZXRJc0luc3RhZ3JhbUhvdmVyZWQiLCJpc0dpdGh1YkhvdmVyZWQiLCJzZXRJc0dpdGh1YkhvdmVyZWQiLCJpc0xpbmtlZGluSG92ZXJlZCIsInNldElzTGlua2VkaW5Ib3ZlcmVkIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiaXNUYWxrIiwic2V0SXNUYWxrIiwiY3VycmVudEluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNsaWNlIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJuYW1lU3R5bGUiLCJmb250U2l6ZSIsImZvbnRTdHlsZSIsImltYWdlQ29udGFpbmVyU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImNpcmN1bGFySW1hZ2VTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJ1dHRvblN0eWxlIiwicmlnaHQiLCJzb2NpYWxJY29uU3R5bGUiLCJtYXJnaW4iLCJ0cmFuc2l0aW9uIiwic29jaWFsSWNvbkhvdmVyU3R5bGUiLCJ0cmFuc2Zvcm0iLCJidXR0b25Db250YWluZXJTdHlsZSIsIm1hcmdpblRvcCIsImZvb3RlclN0eWxlIiwiYm90dG9tIiwibGVmdCIsImdyZWVuQnV0dG9uU3R5bGUiLCJwYWRkaW5nIiwiY3Vyc29yIiwiZ3JlZW5CdXR0b25Ib3ZlclN0eWxlIiwiaGFuZGxlQWJvdXRNZUNsaWNrIiwiaGFuZGxlTGV0c1RhbGtDbGljayIsImhlYWRlciIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiY2xhc3NOYW1lIiwib3BhY2l0eSIsIm9uTG9hZCIsImgxIiwic3BhbiIsImgyIiwiYnIiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImkiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});