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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"an enthusiastic Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Estados para cada ícono\n    const [isInstagramHovered, setIsInstagramHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGithubHovered, setIsGithubHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLinkedinHovered, setIsLinkedinHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 150); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(255, 83, 160)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        color: \"rgb(1, 255, 149)\",\n        fontSize: \"64px\",\n        fontStyle: \"italic\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        top: 100\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"2px solid rgb(1, 255, 149)\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\",\n        transition: \"color 1.2s\",\n        color: \"white\"\n    };\n    // Estilos individuales para los iconos cuando se pasa el ratón por encima\n    const socialIconHoverStyle = {\n        color: \"rgb(1, 255, 149)\",\n        transform: \"scale(1.2)\",\n        transition: \"color 1.2s, transform 1.2s\"\n    };\n    const buttonContainerStyle = {\n        marginTop: \"20px\"\n    };\n    const greenButtonStyle = {\n        backgroundColor: \"transparent\",\n        color: \"rgb(1, 255, 149)\",\n        border: \"2px solid rgb(1, 255, 149)\",\n        borderRadius: \"20px\",\n        padding: \"10px 20px\",\n        margin: \"40px 20px\",\n        cursor: \"pointer\",\n        transition: \"background-color 0.3s, color 0.3s\"\n    };\n    const handleAboutMeClick = ()=>{\n    // Manejar clic en el botón \"About Me\"\n    // Puedes redirigir a la página \"About Me\" o realizar la acción deseada aquí\n    };\n    const handleLetsTalkClick = ()=>{\n    // Manejar clic en el botón \"Let's Talk\"\n    // Puedes redirigir a la página de contacto o abrir un formulario de contacto aquí\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                style: buttonStyle,\n                type: \"button\",\n                \"data-bs-toggle\": \"collapse\",\n                \"data-bs-target\": \"#navbarNav\",\n                \"aria-controls\": \"navbarNav\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: imageContainerStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                            ,\n                            alt: \"Mi foto\",\n                            width: 200,\n                            height: 200,\n                            className: \"image\",\n                            style: {\n                                opacity: imageLoaded ? 1 : 0,\n                                transition: \"opacity 3s\",\n                                ...circularImageStyle\n                            },\n                            onLoad: ()=>setImageLoaded(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: \"Hi I'm \"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 140,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: nameStyle,\n                                children: \"Ra\\xfal L\\xf3pez\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isInstagramHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsInstagramHovered(true),\n                                onMouseLeave: ()=>setIsInstagramHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-instagram fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 160,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/tu_usuario_de_github\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isGithubHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsGithubHovered(true),\n                                onMouseLeave: ()=>setIsGithubHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-github fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 174,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 162,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: {\n                                    ...socialIconStyle,\n                                    ...isLinkedinHovered ? socialIconHoverStyle : {}\n                                },\n                                onMouseEnter: ()=>setIsLinkedinHovered(true),\n                                onMouseLeave: ()=>setIsLinkedinHovered(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-linkedin fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 188,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 176,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: buttonContainerStyle,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleAboutMeClick,\n                                style: greenButtonStyle,\n                                children: \"About Me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 192,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLetsTalkClick,\n                                style: greenButtonStyle,\n                                children: \"Let's Talk\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 198,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 191,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TypewriterEffect, \"wJ1wKtendLE4glXI+KP+m1mMchg=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEIsR0FBSTdCLG9CQUFvQmdDLHVCQUF1QixDQUFDLENBQUM7Z0NBQ25EO2dDQUNBK0IsY0FBYyxJQUFNOUQscUJBQXFCLElBQUk7Z0NBQzdDK0QsY0FBYyxJQUFNL0QscUJBQXFCLEtBQUs7O2tEQUU5Qyw4REFBQ2dFO3dDQUFFdkIsV0FBVTs7Ozs7O29DQUEyQjs7Ozs7Ozs7Ozs7OztrQ0FHNUMsOERBQUNRO3dCQUFJMUMsT0FBTzBCOzswQ0FDWiw4REFBQ087Z0NBQ0N5QixTQUFTM0I7Z0NBQ1QvQixPQUFPNEI7MENBQ1I7Ozs7OzswQ0FHRCw4REFBQ0s7Z0NBQ0N5QixTQUFTMUI7Z0NBQ1RoQyxPQUFPNEI7MENBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1Q7R0EzTU05QztLQUFBQTtBQTZNTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHlwZXdyaXRlckVmZmVjdC5qcz81MDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJzsgLy8gSW1wb3J0YSBsb3MgZXN0aWxvcyBkZSBGb250IEF3ZXNvbWVcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgVHlwZXdyaXRlckVmZmVjdCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dCA9ICdhbiBlbnRodXNpYXN0aWMgSnVuaW9yIERldmVsb3Blcic7IC8vIEVsIHRleHRvIGNvbiBlZmVjdG9cbiAgY29uc3QgW2Rpc3BsYXlUZXh0LCBzZXREaXNwbGF5VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEVzdGFkb3MgcGFyYSBjYWRhIMOtY29ub1xuICBjb25zdCBbaXNJbnN0YWdyYW1Ib3ZlcmVkLCBzZXRJc0luc3RhZ3JhbUhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNHaXRodWJIb3ZlcmVkLCBzZXRJc0dpdGh1YkhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMaW5rZWRpbkhvdmVyZWQsIHNldElzTGlua2VkaW5Ib3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHNldERpc3BsYXlUZXh0KHRleHQuc2xpY2UoMCwgY3VycmVudEluZGV4KSk7XG4gICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSwgMTUwKTsgLy8gVmVsb2NpZGFkIGRlIGVzY3JpdHVyYSBlbiBtaWxpc2VndW5kb3NcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCAvLyBDYW1iaWFyIGxhIGRpcmVjY2nDs24gZGUgbGEgY29sdW1uYVxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsIC8vIENlbnRyYXIgZWwgdGV4dG8gaG9yaXpvbnRhbG1lbnRlXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCAvLyBGb25kbyBlbiBjb2xvciBuZWdyb1xuICAgIGNvbG9yOiAncmdiKDI1NSwgODMsIDE2MCknLCAvLyBDb2xvciBkZSBsZXRyYSBwYXJhIGVsIHRleHRvXG4gICAgZm9udEZhbWlseTogJ1ZUMzIzLCBzYW5zLXNlcmlmJyxcbiAgfTtcblxuICBjb25zdCBuYW1lU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ0RhbmNpbmcgU2NyaXB0LCBjdXJzaXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLFxuICAgIGZvbnRTaXplOiAnNjRweCcsIC8vIENhbWJpYXIgZWwgdGFtYcOxbyBkZSBsYSBsZXRyYSBhIDY0cHhcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLCAvLyBBZ3JlZ2FyIGluY2xpbmFjacOzbiBhbCB0ZXh0b1xuICB9O1xuXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLCAvLyBNb3N0cmFyIGNvbW8gZmxleGJveFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCAvLyBBbGluZWFyIHZlcnRpY2FsbWVudGUgYWwgY2VudHJvXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIC8vIFBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHN1cGVycG9uZXJsYVxuICAgIHRvcDogMTAwLCAvLyBBbGluZWFyIGEgbGEgaXpxdWllcmRhIGRlIGxhIHBhbnRhbGxhXG4gIH07XG5cbiAgY29uc3QgY2lyY3VsYXJJbWFnZVN0eWxlID0ge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsIC8vIEhhY2VyIHF1ZSBsYSBpbWFnZW4gc2VhIGNpcmN1bGFyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkIHJnYigxLCAyNTUsIDE0OSknLCAvLyBCb3JkZSB2ZXJkZVxuICB9O1xuXG4gIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzEwcHgnLCAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiB2ZXJ0aWNhbFxuICAgIHJpZ2h0OiAnMTBweCcsIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIGhvcml6b250YWxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIC8vIEZvbmRvIGJsYW5jb1xuICAgIGNvbG9yOiAnYmxhY2snLCAvLyBUZXh0byBuZWdyb1xuICB9O1xuXG4gIGNvbnN0IHNvY2lhbEljb25TdHlsZSA9IHtcbiAgICBtYXJnaW46ICcwIDEwcHgnLCAvLyBBw7FhZGlyIG1hcmdlbiBob3Jpem9udGFsIGVudHJlIGxvcyBpY29ub3NcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMS4ycycsIC8vIFRyYW5zaWNpw7NuIG3DoXMgbGVudGEgKDAuNSBzZWd1bmRvcykgYWwgY2FtYmlhciBlbCBjb2xvclxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICB9O1xuXG4gIC8vIEVzdGlsb3MgaW5kaXZpZHVhbGVzIHBhcmEgbG9zIGljb25vcyBjdWFuZG8gc2UgcGFzYSBlbCByYXTDs24gcG9yIGVuY2ltYVxuICBjb25zdCBzb2NpYWxJY29uSG92ZXJTdHlsZSA9IHtcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLCAvLyBDYW1iaWEgZWwgY29sb3IgYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJywgLy8gQXVtZW50YSBlbCB0YW1hw7FvIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hIChwb3IgZWplbXBsbywgMS4yIHZlY2VzIG3DoXMgZ3JhbmRlKVxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxLjJzLCB0cmFuc2Zvcm0gMS4ycycsIC8vIEFwbGljYSB1bmEgdHJhbnNpY2nDs24gdGFudG8gYWwgY29sb3IgY29tbyBhbCB0YW1hw7FvXG4gIH07XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgbWFyZ2luVG9wOiAnMjBweCcsIC8vIEFncmVnYSBtYXJnZW4gc3VwZXJpb3JcbiAgfTtcblxuICBjb25zdCBncmVlbkJ1dHRvblN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogJ3JnYigxLCAyNTUsIDE0OSknLFxuICAgIGJvcmRlcjogJzJweCBzb2xpZCByZ2IoMSwgMjU1LCAxNDkpJyxcbiAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcbiAgICBtYXJnaW46ICc0MHB4IDIwcHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3MnLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFib3V0TWVDbGljayA9ICgpID0+IHtcbiAgICAvLyBNYW5lamFyIGNsaWMgZW4gZWwgYm90w7NuIFwiQWJvdXQgTWVcIlxuICAgIC8vIFB1ZWRlcyByZWRpcmlnaXIgYSBsYSBww6FnaW5hIFwiQWJvdXQgTWVcIiBvIHJlYWxpemFyIGxhIGFjY2nDs24gZGVzZWFkYSBhcXXDrVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxldHNUYWxrQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gTWFuZWphciBjbGljIGVuIGVsIGJvdMOzbiBcIkxldCdzIFRhbGtcIlxuICAgIC8vIFB1ZWRlcyByZWRpcmlnaXIgYSBsYSBww6FnaW5hIGRlIGNvbnRhY3RvIG8gYWJyaXIgdW4gZm9ybXVsYXJpbyBkZSBjb250YWN0byBhcXXDrVxuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtpbWFnZUNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgICB7LyogQWdyZWdhciBsYSBpbWFnZW4gY29uIHRyYW5zaWNpw7NuIGRlIG9wYWNpZGFkIHkgZXN0aWxvIGNpcmN1bGFyICovfVxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL3lvLnBuZ1wiIC8vIFJ1dGEgcmVsYXRpdmEgYSBsYSBpbWFnZW4gZW4gbGEgY2FycGV0YSBcInB1YmxpY1wiXG4gICAgICAgICAgICBhbHQ9XCJNaSBmb3RvXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9IC8vIEFuY2hvIGRlc2VhZG9cbiAgICAgICAgICAgIGhlaWdodD17MjAwfSAvLyBBbHR1cmEgZGVzZWFkYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogaW1hZ2VMb2FkZWQgPyAxIDogMCxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgM3MnLFxuICAgICAgICAgICAgICAuLi5jaXJjdWxhckltYWdlU3R5bGUsIC8vIEFwbGljYXIgZXN0aWxvIGNpcmN1bGFyIHkgYm9yZGUgdmVyZGVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkxvYWQ9eygpID0+IHNldEltYWdlTG9hZGVkKHRydWUpfSAvLyBDYW1iaWFyIGVsIGVzdGFkbyBjdWFuZG8gbGEgaW1hZ2VuIHNlIGNhcmdhXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5IaSBJJ20gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXtuYW1lU3R5bGV9PlJhw7psIEzDs3Blejwvc3Bhbj5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgyPntkaXNwbGF5VGV4dH08L2gyPlxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICB7LyogQWdyZWdhIGxvcyBpY29ub3MgZGUgcmVkZXMgc29jaWFsZXMgYXF1w60gKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3R1X3VzdWFyaW9fZGVfaW5zdGFncmFtL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zb2NpYWxJY29uU3R5bGUsIC8vIEVzdGlsbyBub3JtYWxcbiAgICAgICAgICAgICAgLi4uKGlzSW5zdGFncmFtSG92ZXJlZCA/IHNvY2lhbEljb25Ib3ZlclN0eWxlIDoge30pLCAvLyBFc3RpbG8gYWwgcGFzYXIgZWwgcmF0w7NuIHBvciBlbmNpbWFcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSW5zdGFncmFtSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNJbnN0YWdyYW1Ib3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW0gZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdHVfdXN1YXJpb19kZV9naXRodWJcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc29jaWFsSWNvblN0eWxlLCAvLyBFc3RpbG8gbm9ybWFsXG4gICAgICAgICAgICAgIC4uLihpc0dpdGh1YkhvdmVyZWQgPyBzb2NpYWxJY29uSG92ZXJTdHlsZSA6IHt9KSwgLy8gRXN0aWxvIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0dpdGh1YkhvdmVyZWQodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzR2l0aHViSG92ZXJlZChmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2l0aHViIGZhLTJ4XCI+PC9pPiB7LyogSWNvbm8gbcOhcyBncmFuZGUgKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3R1X3VzdWFyaW9fZGVfbGlua2VkaW4vXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnNvY2lhbEljb25TdHlsZSwgLy8gRXN0aWxvIG5vcm1hbFxuICAgICAgICAgICAgICAuLi4oaXNMaW5rZWRpbkhvdmVyZWQgPyBzb2NpYWxJY29uSG92ZXJTdHlsZSA6IHt9KSwgLy8gRXN0aWxvIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0xpbmtlZGluSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNMaW5rZWRpbkhvdmVyZWQoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluIGZhLTJ4XCI+PC9pPiB7LyogSWNvbm8gbcOhcyBncmFuZGUgKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17YnV0dG9uQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWJvdXRNZUNsaWNrfVxuICAgICAgICAgIHN0eWxlPXtncmVlbkJ1dHRvblN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgQWJvdXQgTWVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMZXRzVGFsa0NsaWNrfVxuICAgICAgICAgIHN0eWxlPXtncmVlbkJ1dHRvblN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgTGV0J3MgVGFsa1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlR5cGV3cml0ZXJFZmZlY3QiLCJ0ZXh0IiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJpc0luc3RhZ3JhbUhvdmVyZWQiLCJzZXRJc0luc3RhZ3JhbUhvdmVyZWQiLCJpc0dpdGh1YkhvdmVyZWQiLCJzZXRJc0dpdGh1YkhvdmVyZWQiLCJpc0xpbmtlZGluSG92ZXJlZCIsInNldElzTGlua2VkaW5Ib3ZlcmVkIiwiY3VycmVudEluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsInNsaWNlIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJuYW1lU3R5bGUiLCJmb250U2l6ZSIsImZvbnRTdHlsZSIsImltYWdlQ29udGFpbmVyU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImNpcmN1bGFySW1hZ2VTdHlsZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJ1dHRvblN0eWxlIiwicmlnaHQiLCJzb2NpYWxJY29uU3R5bGUiLCJtYXJnaW4iLCJ0cmFuc2l0aW9uIiwic29jaWFsSWNvbkhvdmVyU3R5bGUiLCJ0cmFuc2Zvcm0iLCJidXR0b25Db250YWluZXJTdHlsZSIsIm1hcmdpblRvcCIsImdyZWVuQnV0dG9uU3R5bGUiLCJwYWRkaW5nIiwiY3Vyc29yIiwiaGFuZGxlQWJvdXRNZUNsaWNrIiwiaGFuZGxlTGV0c1RhbGtDbGljayIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwic3BhbiIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwib3BhY2l0eSIsIm9uTG9hZCIsImgxIiwiaDIiLCJiciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});