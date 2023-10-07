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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 200); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(57, 192, 222)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        // color: 'rgb(1, 255, 149)', // Color verde\n        color: \"rgb(255, 83, 160)\",\n        fontWeight: 900\n    };\n    const roleStyle = {\n        color: \"rgb(255, 83, 160)\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        bottom: 0,\n        height: \"100vh\"\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"4px solid green\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                style: buttonStyle,\n                type: \"button\",\n                \"data-bs-toggle\": \"collapse\",\n                \"data-bs-target\": \"#navbarNav\",\n                \"aria-controls\": \"navbarNav\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: imageContainerStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                            ,\n                            alt: \"Mi foto\",\n                            width: 200,\n                            height: 200,\n                            className: \"image\",\n                            style: {\n                                opacity: imageLoaded ? 1 : 0,\n                                transition: \"opacity 3s\",\n                                ...circularImageStyle\n                            },\n                            onLoad: ()=>setImageLoaded(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: nameStyle,\n                            children: \"Hi I'm Ra\\xfal L\\xf3pez\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-instagram fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/tu_usuario_de_github\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-github fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-linkedin fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TypewriterEffect, \"Js+9dmZF9/DCtRRCqqM6vr0S5Lc=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQXlCOzs7Ozs7OzBDQUV4Qyw4REFBQ2tCO2dDQUNDQyxNQUFLO2dDQUNMQyxRQUFPO2dDQUNQQyxLQUFJO2dDQUNKckIsV0FBVTtnQ0FDVnpCLE9BQU9zQjs7a0RBRVAsOERBQUN5Qjt3Q0FBRXRCLFdBQVU7Ozs7OztvQ0FBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRDtHQTVJTXJDO0tBQUFBO0FBOElOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UeXBld3JpdGVyRWZmZWN0LmpzPzUwMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnOyAvLyBJbXBvcnRhIGxvcyBlc3RpbG9zIGRlIEZvbnQgQXdlc29tZVxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5cbmNvbnN0IFR5cGV3cml0ZXJFZmZlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRleHQgPSAnSnVuaW9yIERldmVsb3Blcic7IC8vIEVsIHRleHRvIGNvbiBlZmVjdG9cbiAgY29uc3QgW2Rpc3BsYXlUZXh0LCBzZXREaXNwbGF5VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPD0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgc2V0RGlzcGxheVRleHQodGV4dC5zbGljZSgwLCBjdXJyZW50SW5kZXgpKTtcbiAgICAgICAgY3VycmVudEluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCAyMDApOyAvLyBWZWxvY2lkYWQgZGUgZXNjcml0dXJhIGVuIG1pbGlzZWd1bmRvc1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIC8vIENhbWJpYXIgbGEgZGlyZWNjacOzbiBkZSBsYSBjb2x1bW5hXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJywgLy8gQ2VudHJhciBlbCB0ZXh0byBob3Jpem9udGFsbWVudGVcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsIC8vIEZvbmRvIGVuIGNvbG9yIG5lZ3JvXG4gICAgY29sb3I6ICdyZ2IoNTcsIDE5MiwgMjIyKScsIC8vIENvbG9yIGRlIGxldHJhIHBhcmEgZWwgdGV4dG9cbiAgICBmb250RmFtaWx5OiAnVlQzMjMsIHNhbnMtc2VyaWYnLFxuICB9O1xuXG4gIGNvbnN0IG5hbWVTdHlsZSA9IHtcbiAgICBmb250RmFtaWx5OiAnRGFuY2luZyBTY3JpcHQsIGN1cnNpdmUnLCAvLyBBcGxpY2FyIGxhIGZ1ZW50ZSBcIkRhbmNpbmcgU2NyaXB0XCIgc29sbyBhIFwiUmF1bCBMb3BlelwiXG4gICAgZGlzcGxheTogJ2lubGluZScsIC8vIE1vc3RyYXIgZW4gbMOtbmVhXG4gICAgLy8gY29sb3I6ICdyZ2IoMSwgMjU1LCAxNDkpJywgLy8gQ29sb3IgdmVyZGVcbiAgICBjb2xvcjogJ3JnYigyNTUsIDgzLCAxNjApJyxcbiAgICBmb250V2VpZ2h0OiA5MDAsIC8vIEhhY2VyIHF1ZSBlbCB0ZXh0byBzZWEgYm9sZCAobmVncml0YSlcbiAgfTtcblxuICBjb25zdCByb2xlU3R5bGUgPSB7XG4gICAgY29sb3I6ICdyZ2IoMjU1LCA4MywgMTYwKScsIC8vIENvbG9yIHJvc2FcbiAgfTtcblxuICBjb25zdCBpbWFnZUNvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JywgLy8gTW9zdHJhciBjb21vIGZsZXhib3hcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgLy8gQWxpbmVhciB2ZXJ0aWNhbG1lbnRlIGFsIGNlbnRyb1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCAvLyBQb3NpY2nDs24gYWJzb2x1dGEgcGFyYSBzdXBlcnBvbmVybGFcbiAgICBib3R0b206IDAsIC8vIEFsaW5lYXIgYSBsYSBpenF1aWVyZGEgZGUgbGEgcGFudGFsbGFcbiAgICBoZWlnaHQ6ICcxMDB2aCcsIC8vIFRhbWHDsW8gY29tcGxldG8gZGUgbGEgcGFudGFsbGFcbiAgfTtcblxuICBjb25zdCBjaXJjdWxhckltYWdlU3R5bGUgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJywgLy8gSGFjZXIgcXVlIGxhIGltYWdlbiBzZWEgY2lyY3VsYXJcbiAgICBib3JkZXI6ICc0cHggc29saWQgZ3JlZW4nLCAvLyBCb3JkZSB2ZXJkZVxuICB9O1xuXG5cbiAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMTBweCcsIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIHZlcnRpY2FsXG4gICAgcmlnaHQ6ICcxMHB4JywgLy8gQWp1c3RhciBsYSBwb3NpY2nDs24gaG9yaXpvbnRhbFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgLy8gRm9uZG8gYmxhbmNvXG4gICAgY29sb3I6ICdibGFjaycsIC8vIFRleHRvIG5lZ3JvXG4gIH07XG5cbiAgY29uc3Qgc29jaWFsSWNvblN0eWxlID0ge1xuICAgIG1hcmdpbjogJzAgMTBweCcsIC8vIEHDsWFkaXIgbWFyZ2VuIGhvcml6b250YWwgZW50cmUgbG9zIGljb25vc1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e2ltYWdlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIHsvKiBBZ3JlZ2FyIGxhIGltYWdlbiBjb24gdHJhbnNpY2nDs24gZGUgb3BhY2lkYWQgeSBlc3RpbG8gY2lyY3VsYXIgKi99XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIveW8ucG5nXCIgLy8gUnV0YSByZWxhdGl2YSBhIGxhIGltYWdlbiBlbiBsYSBjYXJwZXRhIFwicHVibGljXCJcbiAgICAgICAgICAgIGFsdD1cIk1pIGZvdG9cIlxuICAgICAgICAgICAgd2lkdGg9ezIwMH0gLy8gQW5jaG8gZGVzZWFkb1xuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9IC8vIEFsdHVyYSBkZXNlYWRhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBvcGFjaXR5OiBpbWFnZUxvYWRlZCA/IDEgOiAwLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAzcycsXG4gICAgICAgICAgICAgIC4uLmNpcmN1bGFySW1hZ2VTdHlsZSwgLy8gQXBsaWNhciBlc3RpbG8gY2lyY3VsYXIgeSBib3JkZSB2ZXJkZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0SW1hZ2VMb2FkZWQodHJ1ZSl9IC8vIENhbWJpYXIgZWwgZXN0YWRvIGN1YW5kbyBsYSBpbWFnZW4gc2UgY2FyZ2FcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXtuYW1lU3R5bGV9PkhpIEknbSBSYcO6bCBMw7NwZXo8L3NwYW4+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDI+e2Rpc3BsYXlUZXh0fTwvaDI+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIHsvKiBBZ3JlZ2EgbG9zIGljb25vcyBkZSByZWRlcyBzb2NpYWxlcyBhcXXDrSAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHVfdXN1YXJpb19kZV9pbnN0YWdyYW0vXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXtzb2NpYWxJY29uU3R5bGV9IC8vIEFwbGljYXIgbWFyZ2VuIGEgbG9zIGljb25vc1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbSBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90dV91c3VhcmlvX2RlX2dpdGh1YlwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17c29jaWFsSWNvblN0eWxlfSAvLyBBcGxpY2FyIG1hcmdlbiBhIGxvcyBpY29ub3NcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWIgZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdHVfdXN1YXJpb19kZV9saW5rZWRpbi9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3NvY2lhbEljb25TdHlsZX0gLy8gQXBsaWNhciBtYXJnZW4gYSBsb3MgaWNvbm9zXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW4gZmEtMnhcIj48L2k+IHsvKiBJY29ubyBtw6FzIGdyYW5kZSAqL31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlR5cGV3cml0ZXJFZmZlY3QiLCJ0ZXh0IiwiZGlzcGxheVRleHQiLCJzZXREaXNwbGF5VGV4dCIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJjdXJyZW50SW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic2xpY2UiLCJjbGVhckludGVydmFsIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udEZhbWlseSIsIm5hbWVTdHlsZSIsImZvbnRXZWlnaHQiLCJyb2xlU3R5bGUiLCJpbWFnZUNvbnRhaW5lclN0eWxlIiwicG9zaXRpb24iLCJib3R0b20iLCJjaXJjdWxhckltYWdlU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJidXR0b25TdHlsZSIsInRvcCIsInJpZ2h0Iiwic29jaWFsSWNvblN0eWxlIiwibWFyZ2luIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJzcGFuIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsIm9uTG9hZCIsImgxIiwiYnIiLCJoMiIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});