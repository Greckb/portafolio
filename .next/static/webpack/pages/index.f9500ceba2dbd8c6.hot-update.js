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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\n/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n // Importa los estilos de Font Awesome\n\nconst TypewriterEffect = ()=>{\n    _s();\n    const text = \"an enthusiastic Junior Developer\"; // El texto con efecto\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex <= text.length) {\n                setDisplayText(text.slice(0, currentIndex));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, 200); // Velocidad de escritura en milisegundos\n        return ()=>clearInterval(interval);\n    }, []);\n    const style = {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        flexDirection: \"column\",\n        textAlign: \"center\",\n        backgroundColor: \"black\",\n        color: \"rgb(255, 83, 160)\",\n        fontFamily: \"VT323, sans-serif\"\n    };\n    const nameStyle = {\n        fontFamily: \"Dancing Script, cursive\",\n        display: \"inline\",\n        color: \"rgb(1, 255, 149)\",\n        fontSize: \"64px\",\n        fontStyle: \"italic\"\n    };\n    const roleStyle = {\n        color: \"rgb(255, 83, 160)\"\n    };\n    const imageContainerStyle = {\n        display: \"flex\",\n        alignItems: \"center\",\n        position: \"absolute\",\n        top: 150\n    };\n    const circularImageStyle = {\n        borderRadius: \"50%\",\n        border: \"2px solid rgb(1, 255, 149)\"\n    };\n    const buttonStyle = {\n        position: \"absolute\",\n        top: \"10px\",\n        right: \"10px\",\n        backgroundColor: \"white\",\n        color: \"black\"\n    };\n    const socialIconStyle = {\n        margin: \"0 10px\",\n        color: \"rgb(255, 83, 160\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                style: buttonStyle,\n                type: \"button\",\n                \"data-bs-toggle\": \"collapse\",\n                \"data-bs-target\": \"#navbarNav\",\n                \"aria-controls\": \"navbarNav\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: imageContainerStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/yo.png\" // Ruta relativa a la imagen en la carpeta \"public\"\n                            ,\n                            alt: \"Mi foto\",\n                            width: 200,\n                            height: 200,\n                            className: \"image\",\n                            style: {\n                                opacity: imageLoaded ? 1 : 0,\n                                transition: \"opacity 3s\",\n                                ...circularImageStyle\n                            },\n                            onLoad: ()=>setImageLoaded(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: \"Hi I'm \"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 109,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: nameStyle,\n                                children: \"Ra\\xfal L\\xf3pez\"\n                            }, void 0, false, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 110,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: displayText\n                    }, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.instagram.com/tu_usuario_de_instagram/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-instagram fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/tu_usuario_de_github\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-github fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/tu_usuario_de_linkedin/\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"social-icon\",\n                                style: socialIconStyle,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-linkedin fa-2x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raul/Desktop/portafolio/components/TypewriterEffect.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TypewriterEffect, \"Js+9dmZF9/DCtRRCqqM6vr0S5Lc=\");\n_c = TypewriterEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypewriterEffect);\nvar _c;\n$RefreshReg$(_c, \"TypewriterEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9zQjs7a0RBRVAsOERBQUN5Qjt3Q0FBRXRCLFdBQVU7Ozs7OztvQ0FBeUI7Ozs7Ozs7MENBRXhDLDhEQUFDa0I7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pyQixXQUFVO2dDQUNWekIsT0FBT3NCOztrREFFUCw4REFBQ3lCO3dDQUFFdEIsV0FBVTs7Ozs7O29DQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBEO0dBaEpNckM7S0FBQUE7QUFrSk4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1R5cGV3cml0ZXJFZmZlY3QuanM/NTAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7IC8vIEltcG9ydGEgbG9zIGVzdGlsb3MgZGUgRm9udCBBd2Vzb21lXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgVHlwZXdyaXRlckVmZmVjdCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dCA9ICdhbiBlbnRodXNpYXN0aWMgSnVuaW9yIERldmVsb3Blcic7IC8vIEVsIHRleHRvIGNvbiBlZmVjdG9cbiAgY29uc3QgW2Rpc3BsYXlUZXh0LCBzZXREaXNwbGF5VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPD0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgc2V0RGlzcGxheVRleHQodGV4dC5zbGljZSgwLCBjdXJyZW50SW5kZXgpKTtcbiAgICAgICAgY3VycmVudEluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCAyMDApOyAvLyBWZWxvY2lkYWQgZGUgZXNjcml0dXJhIGVuIG1pbGlzZWd1bmRvc1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIC8vIENhbWJpYXIgbGEgZGlyZWNjacOzbiBkZSBsYSBjb2x1bW5hXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJywgLy8gQ2VudHJhciBlbCB0ZXh0byBob3Jpem9udGFsbWVudGVcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsIC8vIEZvbmRvIGVuIGNvbG9yIG5lZ3JvXG4gICAgY29sb3I6ICdyZ2IoMjU1LCA4MywgMTYwKScsIC8vIENvbG9yIGRlIGxldHJhIHBhcmEgZWwgdGV4dG9cbiAgICBmb250RmFtaWx5OiAnVlQzMjMsIHNhbnMtc2VyaWYnLFxuICB9O1xuXG4gIGNvbnN0IG5hbWVTdHlsZSA9IHtcbiAgICBmb250RmFtaWx5OiAnRGFuY2luZyBTY3JpcHQsIGN1cnNpdmUnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgIGNvbG9yOiAncmdiKDEsIDI1NSwgMTQ5KScsXG4gICAgZm9udFNpemU6ICc2NHB4JywgLy8gQ2FtYmlhciBlbCB0YW1hw7FvIGRlIGxhIGxldHJhIGEgNjRweFxuICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsIC8vIEFncmVnYXIgaW5jbGluYWNpw7NuIGFsIHRleHRvXG4gIH07XG4gIFxuXG4gIGNvbnN0IHJvbGVTdHlsZSA9IHtcbiAgICBjb2xvcjogJ3JnYigyNTUsIDgzLCAxNjApJywgLy8gQ29sb3Igcm9zYVxuICB9O1xuXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLCAvLyBNb3N0cmFyIGNvbW8gZmxleGJveFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCAvLyBBbGluZWFyIHZlcnRpY2FsbWVudGUgYWwgY2VudHJvXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIC8vIFBvc2ljacOzbiBhYnNvbHV0YSBwYXJhIHN1cGVycG9uZXJsYVxuICAgIHRvcDogMTUwLCAvLyBBbGluZWFyIGEgbGEgaXpxdWllcmRhIGRlIGxhIHBhbnRhbGxhXG4gICAgLy8gaGVpZ2h0OiAnMTAwdmgnLCAvLyBUYW1hw7FvIGNvbXBsZXRvIGRlIGxhIHBhbnRhbGxhXG4gIH07XG5cbiAgY29uc3QgY2lyY3VsYXJJbWFnZVN0eWxlID0ge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsIC8vIEhhY2VyIHF1ZSBsYSBpbWFnZW4gc2VhIGNpcmN1bGFyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkIHJnYigxLCAyNTUsIDE0OSknLCAvLyBCb3JkZSB2ZXJkZVxuICB9O1xuXG5cbiAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMTBweCcsIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIHZlcnRpY2FsXG4gICAgcmlnaHQ6ICcxMHB4JywgLy8gQWp1c3RhciBsYSBwb3NpY2nDs24gaG9yaXpvbnRhbFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgLy8gRm9uZG8gYmxhbmNvXG4gICAgY29sb3I6ICdibGFjaycsIC8vIFRleHRvIG5lZ3JvXG4gIH07XG5cbiAgY29uc3Qgc29jaWFsSWNvblN0eWxlID0ge1xuICAgIG1hcmdpbjogJzAgMTBweCcsIC8vIEHDsWFkaXIgbWFyZ2VuIGhvcml6b250YWwgZW50cmUgbG9zIGljb25vc1xuICAgIGNvbG9yOiAncmdiKDI1NSwgODMsIDE2MCcsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGRpdiBzdHlsZT17aW1hZ2VDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgey8qIEFncmVnYXIgbGEgaW1hZ2VuIGNvbiB0cmFuc2ljacOzbiBkZSBvcGFjaWRhZCB5IGVzdGlsbyBjaXJjdWxhciAqL31cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi95by5wbmdcIiAvLyBSdXRhIHJlbGF0aXZhIGEgbGEgaW1hZ2VuIGVuIGxhIGNhcnBldGEgXCJwdWJsaWNcIlxuICAgICAgICAgICAgYWx0PVwiTWkgZm90b1wiXG4gICAgICAgICAgICB3aWR0aD17MjAwfSAvLyBBbmNobyBkZXNlYWRvXG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH0gLy8gQWx0dXJhIGRlc2VhZGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IGltYWdlTG9hZGVkID8gMSA6IDAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDNzJyxcbiAgICAgICAgICAgICAgLi4uY2lyY3VsYXJJbWFnZVN0eWxlLCAvLyBBcGxpY2FyIGVzdGlsbyBjaXJjdWxhciB5IGJvcmRlIHZlcmRlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiBzZXRJbWFnZUxvYWRlZCh0cnVlKX0gLy8gQ2FtYmlhciBlbCBlc3RhZG8gY3VhbmRvIGxhIGltYWdlbiBzZSBjYXJnYVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkhpIEknbSA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPXtuYW1lU3R5bGV9PlJhw7psIEzDs3Blejwvc3Bhbj5cblxuICAgICAgICA8L2gxPlxuICAgICAgXG4gICAgICAgIDxoMj57ZGlzcGxheVRleHR9PC9oMj5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgey8qIEFncmVnYSBsb3MgaWNvbm9zIGRlIHJlZGVzIHNvY2lhbGVzIGFxdcOtICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90dV91c3VhcmlvX2RlX2luc3RhZ3JhbS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgc3R5bGU9e3NvY2lhbEljb25TdHlsZX0gLy8gQXBsaWNhciBtYXJnZW4gYSBsb3MgaWNvbm9zXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtIGZhLTJ4XCI+PC9pPiB7LyogSWNvbm8gbcOhcyBncmFuZGUgKi99XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3R1X3VzdWFyaW9fZGVfZ2l0aHViXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uXCJcbiAgICAgICAgICAgIHN0eWxlPXtzb2NpYWxJY29uU3R5bGV9IC8vIEFwbGljYXIgbWFyZ2VuIGEgbG9zIGljb25vc1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YiBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90dV91c3VhcmlvX2RlX2xpbmtlZGluL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiXG4gICAgICAgICAgICBzdHlsZT17c29jaWFsSWNvblN0eWxlfSAvLyBBcGxpY2FyIG1hcmdlbiBhIGxvcyBpY29ub3NcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpbiBmYS0yeFwiPjwvaT4gey8qIEljb25vIG3DoXMgZ3JhbmRlICovfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGV3cml0ZXJFZmZlY3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiVHlwZXdyaXRlckVmZmVjdCIsInRleHQiLCJkaXNwbGF5VGV4dCIsInNldERpc3BsYXlUZXh0IiwiaW1hZ2VMb2FkZWQiLCJzZXRJbWFnZUxvYWRlZCIsImN1cnJlbnRJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzbGljZSIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250RmFtaWx5IiwibmFtZVN0eWxlIiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJyb2xlU3R5bGUiLCJpbWFnZUNvbnRhaW5lclN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJjaXJjdWxhckltYWdlU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJidXR0b25TdHlsZSIsInJpZ2h0Iiwic29jaWFsSWNvblN0eWxlIiwibWFyZ2luIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJzcGFuIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsIm9uTG9hZCIsImgxIiwiaDIiLCJiciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TypewriterEffect.js\n"));

/***/ })

});