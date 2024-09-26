"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    if (request.nextUrl.pathname.startsWith(\"/api\")) {\n        if (request.nextUrl.origin === \"http://localhost:3000\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(new URL(request.nextUrl.pathname.slice(5), \"http://127.0.0.1:5000\"));\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(new URL(request.nextUrl.pathname.slice(5), \"https://better-billboard.onrender.com\"));\n        }\n    }\n}\nconst config = {\n    matcher: \"/api/:path*\"\n} // // See \"Matching Paths\" below to learn more\n // export const config = {\n // }\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFFbkMsU0FBU0MsV0FBV0MsT0FBTztJQUNoQyxJQUFJQSxRQUFRQyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFNBQVM7UUFDL0MsSUFBSUgsUUFBUUMsT0FBTyxDQUFDRyxNQUFNLEtBQUsseUJBQXlCO1lBQ3RELE9BQU9OLHFEQUFZQSxDQUFDTyxPQUFPLENBQUMsSUFBSUMsSUFBSU4sUUFBUUMsT0FBTyxDQUFDQyxRQUFRLENBQUNLLEtBQUssQ0FBQyxJQUFJO1FBQ3pFLE9BQU87WUFDTCxPQUFPVCxxREFBWUEsQ0FBQ08sT0FBTyxDQUFDLElBQUlDLElBQUlOLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDSyxLQUFLLENBQUMsSUFBSTtRQUN6RTtJQUNGO0FBQ0Y7QUFFTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO0FBQ1gsRUFFQSw4Q0FBOEM7Q0FDOUMsMEJBQTBCO0NBQzFCLElBQUk7Q0FKSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcbiAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvYXBpJykpIHtcbiAgICBpZiAocmVxdWVzdC5uZXh0VXJsLm9yaWdpbiA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmV3cml0ZShuZXcgVVJMKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zbGljZSg1KSwgJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMCcpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUobmV3IFVSTChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc2xpY2UoNSksICdodHRwczovL2JldHRlci1iaWxsYm9hcmQub25yZW5kZXIuY29tJykpXG4gICAgfVxuICB9XG59XG4gXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiAnL2FwaS86cGF0aConLFxufVxuIFxuLy8gLy8gU2VlIFwiTWF0Y2hpbmcgUGF0aHNcIiBiZWxvdyB0byBsZWFybiBtb3JlXG4vLyBleHBvcnQgY29uc3QgY29uZmlnID0ge1xuLy8gfSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJvcmlnaW4iLCJyZXdyaXRlIiwiVVJMIiwic2xpY2UiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});