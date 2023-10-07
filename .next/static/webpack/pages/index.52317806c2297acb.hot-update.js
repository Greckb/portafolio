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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"an enthusiastic Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Estados para cada ícono\n    const [isInstagramHovered, setIsInstagramHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGithubHovered, setIsGithubHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLinkedinHovered, setIsLinkedinHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 150); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(255, 83, 160)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        color: \"rgb(1, 255, 149)\",\n        fontSize: \"64px\",\n        fontStyle: \"italic\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        top: 150\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"2px solid rgb(1, 255, 149)\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\",\n        transition: \"color 1.2s\",\n        color: \"white\"\n    };\n    // Estilos individuales para los iconos cuando se pasa el ratón por encima\n    const socialIconHoverStyle = {\n        color: \"rgb(1, 255, 149)\",\n        transform: \"scale(1.2)\",\n        transition: \"color 1.5s, transform 0.5s\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                style: buttonStyle,\n                type: \"button\",\n                \"data-bs-toggle\": \"collapse\",\n                \"data-bs-target\": \"#navbarNav\",\n                \"aria-controls\": \"navbarNav\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: imageContainerStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                            ,\n                            alt: \"Mi foto\",\n                            width: 200,\n                            height: 200,\n                            className: \"image\",\n                            style: {\n                                opacity: imageLoaded ? 1 : 0,\n                                transition: \"opacity 3s\",\n                                ...circularImageStyle\n                            },\n                            onLoad: ()=>setImageLoaded(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: \"Hi I'm \"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: nameStyle,\n                                children: \"Ra\\xfal L\\xf3pez\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isInstagramHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsInstagramHovered(true),\n                                onMouseLeave: ()=>setIsInstagramHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-instagram fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/tu_usuario_de_github\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isGithubHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsGithubHovered(true),\n                                onMouseLeave: ()=>setIsGithubHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-github fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 149,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isLinkedinHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsLinkedinHovered(true),\n                                onMouseLeave: ()=>setIsLinkedinHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-linkedin fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 163,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 151,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TypewriterEffect, \"wJ1wKtendLE4glXI+KP+m1mMchg=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXRlckVmZmVjdC5qcz81MDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJzsgLy8gSW1wb3J0YSBsb3MgZXN0aWxvcyBkZSBGb250IEF3ZXNvbWVcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgVHlwZXdyaXRlckVmZmVjdCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dCA9ICdhbiBlbnRodXNpYXN0aWMgSnVuaW9yIERldmVsb3Blcic7IC8vIEVsIHRleHRvIGNvbiBlZmVjdG9cbiAgY29uc3QgW2Rpc3BsYXlUZXh0LCBzZXREaXNwbGF5VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEVzdGFkb3MgcGFyYSBjYWRhIMOtY29ub1xuICBjb25zdCBbaXNJbnN0YWdyYW1Ib3ZlcmVkLCBzZXRJc0luc3RhZ3JhbUhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNHaXRodWJIb3ZlcmVkLCBzZXRJc0dpdGh1YkhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMaW5rZWRpbkhvdmVyZWQsIHNldElzTGlua2VkaW5Ib3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHNldERpc3BsYXlUZXh0KHRleHQuc2xpY2UoMCwgY3VycmVudEluZGV4KSk7XG4gICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSwgMTUwKTsgLy8gVmVsb2NpZGFkIGRlIGVzY3JpdHVyYSBlbiBtaWxpc2VndW5kb3NcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCAvLyBDYW1iaWFyIGxhIGRpcmVjY2nDs24gZGUgbGEgY29sdW1uYVxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsIC8vIENlbnRyYXIgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCAvLyBGb25kbyBlbiBjb2xvciBuZWdyb1xuICAgIGNvbG9yOiAncmdiKDI1NSwgODMsIDE2MCknLCAvLyBDb2xvciBkZSBsZXRyYSBwYXJhIGVsIHRleHRvXG4gICAgZm9udEZhbWlseTogJ1ZUMzIzLCBzYW5zLXNlcmlmJyxcbiAgfTtcblxuICBjb25zdCBuYW1lU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ0RhbmNpbmcgU2NyaXB0LCBjdXJzaXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLFxuICAgIGZvbnRTaXplOiAnNjRweCcsIC8vIENhbWJpYXIgZWwgdGFtYcOxbyBkZSBsYSBsZXRyYSBhIDY0cHhcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLCAvLyBBZ3JlZ2FyIGluY2xpbmFjacOzbiBhbCB0ZXh0b1xuICB9O1xuXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLCAvLyBNb3N0cmFyIGNvbW8gZmxleGJveFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCAvLyBBbGluZWFyIHZlcnRpY2FsbWVudGUgYWwgY2VudHJvXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIC8vIFBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHN1cGVycG9uZXJsYVxuICAgIHRvcDogMTUwLCAvLyBBbGluZWFyIGEgbGEgaXpxdWllcmRhIGRlIGxhIHBhbnRhbGxhXG4gIH07XG5cbiAgY29uc3QgY2lyY3VsYXJJbWFnZVN0eWxlID0ge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsIC8vIEhhY2VyIHF1ZSBsYSBpbWFnZW4gc2VhIGNpcmN1bGFyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkIHJnYigxLCAyNTUsIDE0OSknLCAvLyBCb3JkZSB2ZXJkZVxuICB9O1xuXG4gIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzEwcHgnLCAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiB2ZXJ0aWNhbFxuICAgIHJpZ2h0OiAnMTBweCcsIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIGhvcml6b250YWxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIC8vIEZvbmRvIGJsYW5jb1xuICAgIGNvbG9yOiAnYmxhY2snLCAvLyBUZXh0byBuZWdyb1xuICB9O1xuXG4gIGNvbnN0IHNvY2lhbEljb25TdHlsZSA9IHtcbiAgICBtYXJnaW46ICcwIDEwcHgnLCAvLyBBw7FhZGlyIG1hcmdlbiBob3Jpem9udGFsIGVudHJlIGxvcyBpY29ub3NcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMS4ycycsIC8vIFRyYW5zaWNpw7NuIG3DoXMgbGVudGEgKDAuNSBzZWd1bmRvcykgYWwgY2FtYmlhciBlbCBjb2xvclxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICB9O1xuXG4gIC8vIEVzdGlsb3MgaW5kaXZpZHVhbGVzIHBhcmEgbG9zIGljb25vcyBjdWFuZG8gc2UgcGFzYSBlbCByYXTDs24gcG9yIGVuY2ltYVxuICBjb25zdCBzb2NpYWxJY29uSG92ZXJTdHlsZSA9IHtcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLCAvLyBDYW1iaWEgZWwgY29sb3IgYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJywgLy8gQXVtZW50YSBlbCB0YW1hw7FvIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hIChwb3IgZWplbXBsbywgMS4yIHZlY2VzIG3DoXMgZ3JhbmRlKVxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxLjVzLCB0cmFuc2Zvcm0gMC41cycsIC8vIEFwbGljYSB1bmEgdHJhbnNpY2nDs24gdGFudG8gYWwgY29sb3IgY29tbyBhbCB0YW1hw7FvXG4gIH07XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e2ltYWdlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIHsvKiBBZ3JlZ2FyIGxhIGltYWdlbiBjb24gdHJhbnNpY2nDs24gZGUgb3BhY2lkYWQgeSBlc3RpbG8gY2lyY3VsYXIgKi99XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIveW8ucG5nXCIgLy8gUnV0YSByZWxhdGl2YSBhIGxhIGltYWdlbiBlbiBsYSBjYXJwZXRhIFwicHVibGljXCJcbiAgICAgICAgICAgIGFsdD1cIk1pIGZvdG9cIlxuICAgICAgICAgICAgd2lkdGg9ezIwMH0gLy8gQW5jaG8gZGVzZWFkb1xuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9IC8vIEFsdHVyYSBkZXNlYWRhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBvcGFjaXR5OiBpbWFnZUxvYWRlZCA/IDEgOiAwLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAzcycsXG4gICAgICAgICAgICAgIC4uLmNpcmN1bGFySW1hZ2VTdHlsZSwgLy8gQXBsaWNhciBlc3RpbG8gY2lyY3VsYXIgeSBib3JkZSB2ZXJkZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0SW1hZ2VMb2FkZWQodHJ1ZSl9IC8vIENhbWJpYXIgZWwgZXN0YWRvIGN1YW5kbyBsYSBpbWFnZW4gc2UgY2FyZ2FcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkhpIEknbSA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e25hbWVTdHlsZX0+UmHDumwgTMOzcGV6PC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDI+e2Rpc3BsYXlUZXh0fTwvaDI+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIHsvKiBBZ3JlZ2EgbG9zIGljb25vcyBkZSByZWRlcyBzb2NpYWxlcyBhcXXDrSAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHVfdXN1YXJpb19kZV9pbnN0YWdyYW0vXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnNvY2lhbEljb25TdHlsZSwgLy8gRXN0aWxvIG5vcm1hbFxuICAgICAgICAgICAgICAuLi4oaXNJbnN0YWdyYW1Ib3ZlcmVkID8gc29jaWFsSWNvbkhvdmVyU3R5bGUgOiB7fSksIC8vIEVzdGlsbyBhbCBwYXNhciBlbCByYXTDs24gcG9yIGVuY2ltYVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNJbnN0YWdyYW1Ib3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0luc3RhZ3JhbUhvdmVyZWQoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbSBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90dV91c3VhcmlvX2RlX2dpdGh1YlwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zb2NpYWxJY29uU3R5bGUsIC8vIEVzdGlsbyBub3JtYWxcbiAgICAgICAgICAgICAgLi4uKGlzR2l0aHViSG92ZXJlZCA/IHNvY2lhbEljb25Ib3ZlclN0eWxlIDoge30pLCAvLyBFc3RpbG8gYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzR2l0aHViSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNHaXRodWJIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWIgZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdHVfdXN1YXJpb19kZV9saW5rZWRpbi9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc29jaWFsSWNvblN0eWxlLCAvLyBFc3RpbG8gbm9ybWFsXG4gICAgICAgICAgICAgIC4uLihpc0xpbmtlZGluSG92ZXJlZCA/IHNvY2lhbEljb25Ib3ZlclN0eWxlIDoge30pLCAvLyBFc3RpbG8gYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzTGlua2VkaW5Ib3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0xpbmtlZGluSG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW4gZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlR5cGV3cml0ZXJFZmZlY3QiLCJ0ZXh0IiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJpc0luc3RhZ3JhbUhvdmVyZWQiLCJzZXRJc0luc3RhZ3JhbUhvdmVyZWQiLCJpc0dpdGh1YkhvdmVyZWQiLCJzZXRJc0dpdGh1YkhvdmVyZWQiLCJpc0xpbmtlZGluSG92ZXJlZCIsInNldElzTGlua2VkaW5Ib3ZlcmVkIiwiY3VycmVudEluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNsaWNlIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJuYW1lU3R5bGUiLCJmb250U2l6ZSIsImZvbnRTdHlsZSIsImltYWdlQ29udGFpbmVyU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImNpcmN1bGFySW1hZ2VTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJ1dHRvblN0eWxlIiwicmlnaHQiLCJzb2NpYWxJY29uU3R5bGUiLCJtYXJnaW4iLCJ0cmFuc2l0aW9uIiwic29jaWFsSWNvbkhvdmVyU3R5bGUiLCJ0cmFuc2Zvcm0iLCJidXR0b24iLCJjbGFzc05hbWUiLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsIm9wYWNpdHkiLCJvbkxvYWQiLCJoMSIsImgyIiwiYnIiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});