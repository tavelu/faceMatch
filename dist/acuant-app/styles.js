(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n@-webkit-keyframes search {\n  0% {\n    top: 40px;\n    left: 60px; }\n  25% {\n    top: 40px;\n    left: calc(100% - 120px); }\n  50% {\n    top: calc(100% - 100px);\n    left: calc(100% - 120px); }\n  75% {\n    top: calc(100% - 100px);\n    left: 60px; }\n  100% {\n    top: 40px;\n    left: 60px; } }\n@keyframes search {\n  0% {\n    top: 40px;\n    left: 60px; }\n  25% {\n    top: 40px;\n    left: calc(100% - 120px); }\n  50% {\n    top: calc(100% - 100px);\n    left: calc(100% - 120px); }\n  75% {\n    top: calc(100% - 100px);\n    left: 60px; }\n  100% {\n    top: 40px;\n    left: 60px; } }\n@media screen {\n  .hidden {\n    display: none; } }\n@media screen {\n  html,\n  body,\n  #root {\n    min-height: 100vh;\n    max-width: 100vw;\n    overflow-x: hidden; } }\n@media screen {\n  body,\n  body > * {\n    font-family: \"Raleway\", sans-serif; } }\n@media screen and (min-width: 80em) {\n  body {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; } }\n@media screen and (min-width: 80em) {\n  body #root {\n    width: 420px;\n    height: 100vh;\n    margin: 0 auto; } }\n@media screen and (min-width: 80em) {\n  body #root .desktop_error {\n    padding-top: 40px; } }\n@media screen and (min-width: 80em) {\n  body #root .desktop_error .description {\n    font-size: 18px;\n    line-height: 24px;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-top: 20px;\n    width: 100%; } }\n@media screen and (min-width: 80em) {\n  body.mobile-only {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; } }\n@media screen and (min-width: 80em) {\n  body.mobile-only #root {\n    width: 320px;\n    height: 480px;\n    flex-grow: 0;\n    flex-shrink: 0;\n    min-height: 0;\n    border: solid 1px #eeeeee; } }\n@media screen and (min-width: 80em) {\n  body.mobile-only #root .wrapper {\n    width: 100%;\n    max-width: none;\n    box-sizing: border-box; } }\n@media screen {\n  .wrapper {\n    padding: 0 20px;\n    max-width: calc(100vw - ( 2 * 20px )); } }\n@media screen {\n  .row {\n    display: flex;\n    flex-direction: row; } }\n@media screen {\n  .column {\n    display: flex;\n    flex-direction: column; } }\n@media screen {\n  .btn {\n    color: #ffffff;\n    background-color: #4696F2;\n    font-size: 16px;\n    line-height: 48px;\n    font-weight: 700;\n    text-align: center;\n    margin: 0 0 20px 0;\n    display: block; } }\n@media screen {\n  .btn.outline {\n    color: #4696F2;\n    background-color: #ffffff;\n    -ms-box-shadow: inset 0px 0px 0px 2px #4696F2;\n    box-shadow: inset 0px 0px 0px 2px #4696F2; } }\n@media screen {\n  header {\n    padding: 20px 0; } }\n@media screen {\n  .logo {\n    margin: 0 0 0 auto;\n    width: 100px;\n    height: 48px;\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-position: center center;\n    background-size: contain; } }\n@media screen {\n  .description_container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 100%;\n    margin: 0 0 20px 0; } }\n@media screen {\n  .description_container .description {\n    font-family: \"Raleway\", sans-serif;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 1.5;\n    display: block; } }\n@media screen {\n  .instructions ul {\n    padding: 0 0 0 20px;\n    margin: 0 0 20px; } }\n@media screen {\n  .instructions ul li {\n    margin: 0 0 10px 0;\n    padding: 0 0 10px 0;\n    border-bottom: solid 1px #eeeeee;\n    list-style: square;\n    font-size: 16px;\n    line-height: 24px; } }\n@media screen {\n  .instructions ul li:last-child {\n    margin: 0;\n    border-bottom: none; } }\n@media screen and (orientation: landscape) and (max-width: 48em) {\n  .example_list {\n    display: flex;\n    flex-direction: row; } }\n@media screen {\n  .example_list .example {\n    display: flex;\n    flex-direction: row;\n    margin: 0 0 20px 0; } }\n@media screen and (orientation: landscape) and (max-width: 48em) {\n  .example_list .example {\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0; } }\n@media screen {\n  .example_list .example .example_text {\n    padding: 0 0 0 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; } }\n@media screen {\n  .icon {\n    flex: none;\n    width: 32px;\n    height: 32px;\n    margin: 0 20px 0 0; } }\n@media screen and (orientation: landscape) and (max-width: 48em) {\n  .capture_photo .capture_group {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; } }\n@media screen and (orientation: landscape) and (max-width: 48em) {\n  .capture_photo .capture_group .capture_container {\n    width: 60%;\n    box-sizing: border-box; } }\n@media screen {\n  .capture_photo .capture_group .capture_container .capture {\n    display: block;\n    width: 100%;\n    height: 100%;\n    margin: 0 0 20px 0; } }\n@media screen and (orientation: landscape) and (max-width: 48em) {\n  .capture_photo .capture_group .capture_container .capture {\n    margin: 0; } }\n@media screen and (orientation: landscape) and (max-width: 48em) {\n  .capture_photo .capture_group .capture_controls {\n    width: 40%;\n    box-sizing: border-box;\n    justify-content: center; } }\n@media screen and (orientation: landscape) and (max-width: 48em) {\n  .analyzing .analyzing_group .analyzing_container {\n    width: 60%;\n    box-sizing: border-box; } }\n@media screen {\n  .analyzing .analyzing_group .analyzing_container .analyzing_animation_zone {\n    position: relative; } }\n@media screen {\n  .analyzing .analyzing_group .analyzing_container .analyzing_animation_zone .id_background {\n    display: block;\n    width: 100%;\n    height: auto; } }\n@media screen {\n  .analyzing .analyzing_group .analyzing_container .analyzing_animation_zone::before {\n    content: '';\n    display: block;\n    width: 64px;\n    height: 64px;\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-position: center center;\n    background-size: contain;\n    position: absolute;\n    -webkit-animation: search 4s ease-in-out infinite forwards 0s;\n    animation: search 4s ease-in-out infinite forwards 0s; } }\n@media screen {\n  .results .results_id_sig {\n    justify-content: space-between;\n    margin: 0 0 20px 0; } }\n@media screen {\n  .results .results_id_sig .results_id {\n    flex: none;\n    width: calc(30% - 10px);\n    height: 128px;\n    padding: 0 10px 0 0; } }\n@media screen {\n  .results .results_id_sig .results_id img {\n    display: block;\n    height: 100%;\n    width: auto;\n    margin: 0; } }\n@media screen {\n  .results .results_id_sig .results_sig {\n    flex: none;\n    width: calc(70% - 10px);\n    max-width: 240px;\n    padding: 0 0 0 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; } }\n@media screen {\n  .results .results_id_sig .results_sig img {\n    display: block;\n    width: 100%;\n    height: auto; } }\n@media screen {\n  .results .results_id_sig .results_medcard {\n    width: calc(50% - 10px);\n    height: auto; } }\n@media screen {\n  .results .results_id_sig .results_medcard img {\n    display: block;\n    width: 100%;\n    height: auto; } }\n@media screen {\n  .results .results_data {\n    margin: 0 0 20px 0; } }\n@media screen {\n  .results .results_data .row {\n    padding: 0 0 10px 0;\n    margin: 0 0 10px 0;\n    border-bottom: solid 1px #eeeeee; } }\n@media screen {\n  .results .results_data .row:last-of-type {\n    border-bottom: none;\n    margin: 0; } }\n@media screen {\n  .results .results_data .row .type,\n  .results .results_data .row .data {\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0; } }\n@media screen {\n  .results .results_data .row .type {\n    font-size: 14px;\n    line-height: 24px;\n    font-weight: 700; } }\n@media screen {\n  .results .results_data .row .data {\n    font-size: 14px;\n    line-height: 24px; } }\n.hide {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcYWN1YW50LXNka1xcYW5ndWxhci1hY3VhbnQtYXBwL3NyY1xcc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztFQWFFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7QUFFMUIsZ0RBQUE7QUFDQTs7RUFFRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFjLEVBQUE7QUFFaEI7RUFDRSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLFlBQVksRUFBQTtBQUVkOztFQUVFLFdBQVc7RUFDWCxhQUFhLEVBQUE7QUFFZjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtBQUVuQjtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVUsRUFBQTtFQUNaO0lBQ0UsU0FBUztJQUNULHdCQUF3QixFQUFBO0VBQzFCO0lBQ0UsdUJBQXVCO0lBQ3ZCLHdCQUF3QixFQUFBO0VBQzFCO0lBQ0UsdUJBQXVCO0lBQ3ZCLFVBQVUsRUFBQTtFQUNaO0lBQ0UsU0FBUztJQUNULFVBQVUsRUFBQSxFQUFBO0FBb0NkO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBQ1o7SUFDRSxTQUFTO0lBQ1Qsd0JBQXdCLEVBQUE7RUFDMUI7SUFDRSx1QkFBdUI7SUFDdkIsd0JBQXdCLEVBQUE7RUFDMUI7SUFDRSx1QkFBdUI7SUFDdkIsVUFBVSxFQUFBO0VBQ1o7SUFDRSxTQUFTO0lBQ1QsVUFBVSxFQUFBLEVBQUE7QUFFZDtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQUc7QUFFcEI7RUFDRTs7O0lBR0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQSxFQUFHO0FBRXpCO0VBQ0U7O0lBRUUsa0NBQWtDLEVBQUEsRUFBRztBQUV6QztFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUEs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O0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXHJcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcclxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxyXG5cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyB9XHJcblxyXG5ib2R5IHtcclxuICBsaW5lLWhlaWdodDogMTsgfVxyXG5cclxub2wsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lOyB9XHJcblxyXG5ibG9ja3F1b3RlLCBxIHtcclxuICBxdW90ZXM6IG5vbmU7IH1cclxuXHJcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSwgcTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgY29udGVudDogbm9uZTsgfVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzZWFyY2gge1xyXG4gIDAlIHtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDYwcHg7IH1cclxuICAyNSUge1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTIwcHgpOyB9XHJcbiAgNTAlIHtcclxuICAgIHRvcDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTIwcHgpOyB9XHJcbiAgNzUlIHtcclxuICAgIHRvcDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgbGVmdDogNjBweDsgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogNjBweDsgfSB9XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2VhcmNoIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiA2MHB4OyB9XHJcbiAgMjUlIHtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDEyMHB4KTsgfVxyXG4gIDUwJSB7XHJcbiAgICB0b3A6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDEyMHB4KTsgfVxyXG4gIDc1JSB7XHJcbiAgICB0b3A6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIGxlZnQ6IDYwcHg7IH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDYwcHg7IH0gfVxyXG5cclxuQC1vLWtleWZyYW1lcyBzZWFyY2gge1xyXG4gIDAlIHtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDYwcHg7IH1cclxuICAyNSUge1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTIwcHgpOyB9XHJcbiAgNTAlIHtcclxuICAgIHRvcDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTIwcHgpOyB9XHJcbiAgNzUlIHtcclxuICAgIHRvcDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgbGVmdDogNjBweDsgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogNjBweDsgfSB9XHJcblxyXG5Aa2V5ZnJhbWVzIHNlYXJjaCB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogNjBweDsgfVxyXG4gIDI1JSB7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxMjBweCk7IH1cclxuICA1MCUge1xyXG4gICAgdG9wOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxMjBweCk7IH1cclxuICA3NSUge1xyXG4gICAgdG9wOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICBsZWZ0OiA2MHB4OyB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiA2MHB4OyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICBodG1sLFxyXG4gIGJvZHksXHJcbiAgI3Jvb3Qge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIGJvZHksXHJcbiAgYm9keSA+ICoge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwZW0pIHtcclxuICBib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwZW0pIHtcclxuICBib2R5ICNyb290IHtcclxuICAgIHdpZHRoOiA0MjBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MGVtKSB7XHJcbiAgYm9keSAjcm9vdCAuZGVza3RvcF9lcnJvciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MGVtKSB7XHJcbiAgYm9keSAjcm9vdCAuZGVza3RvcF9lcnJvciAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MGVtKSB7XHJcbiAgYm9keS5tb2JpbGUtb25seSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwZW0pIHtcclxuICBib2R5Lm1vYmlsZS1vbmx5ICNyb290IHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWVlZWVlOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwZW0pIHtcclxuICBib2R5Lm1vYmlsZS1vbmx5ICNyb290IC53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAoIDIgKiAyMHB4ICkpOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICAuYnRuIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2OTZGMjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5idG4ub3V0bGluZSB7XHJcbiAgICBjb2xvcjogIzQ2OTZGMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDJweCAjNDY5NkYyO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggIzQ2OTZGMjtcclxuICAgIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggIzQ2OTZGMjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDJweCAjNDY5NkYyOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmxvZ28ge1xyXG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9hY3VhbnQtbG9nb0AyeEAzeC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5kZXNjcmlwdGlvbl9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmRlc2NyaXB0aW9uX2NvbnRhaW5lciAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICAuaW5zdHJ1Y3Rpb25zIHVsIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4OyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5pbnN0cnVjdGlvbnMgdWwgbGkge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWVlZWVlO1xyXG4gICAgbGlzdC1zdHlsZTogc3F1YXJlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmluc3RydWN0aW9ucyB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XHJcbiAgLmV4YW1wbGVfbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICAuZXhhbXBsZV9saXN0IC5leGFtcGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xyXG4gIC5leGFtcGxlX2xpc3QgLmV4YW1wbGUge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5leGFtcGxlX2xpc3QgLmV4YW1wbGUgLmV4YW1wbGVfdGV4dCB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICAuaWNvbiB7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XHJcbiAgLmNhcHR1cmVfcGhvdG8gLmNhcHR1cmVfZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XHJcbiAgLmNhcHR1cmVfcGhvdG8gLmNhcHR1cmVfZ3JvdXAgLmNhcHR1cmVfY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5jYXB0dXJlX3Bob3RvIC5jYXB0dXJlX2dyb3VwIC5jYXB0dXJlX2NvbnRhaW5lciAuY2FwdHVyZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xyXG4gIC5jYXB0dXJlX3Bob3RvIC5jYXB0dXJlX2dyb3VwIC5jYXB0dXJlX2NvbnRhaW5lciAuY2FwdHVyZSB7XHJcbiAgICBtYXJnaW46IDA7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XHJcbiAgLmNhcHR1cmVfcGhvdG8gLmNhcHR1cmVfZ3JvdXAgLmNhcHR1cmVfY29udHJvbHMge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtcclxuICAuYW5hbHl6aW5nIC5hbmFseXppbmdfZ3JvdXAgLmFuYWx5emluZ19jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmFuYWx5emluZyAuYW5hbHl6aW5nX2dyb3VwIC5hbmFseXppbmdfY29udGFpbmVyIC5hbmFseXppbmdfYW5pbWF0aW9uX3pvbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5hbmFseXppbmcgLmFuYWx5emluZ19ncm91cCAuYW5hbHl6aW5nX2NvbnRhaW5lciAuYW5hbHl6aW5nX2FuaW1hdGlvbl96b25lIC5pZF9iYWNrZ3JvdW5kIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLmFuYWx5emluZyAuYW5hbHl6aW5nX2dyb3VwIC5hbmFseXppbmdfY29udGFpbmVyIC5hbmFseXppbmdfYW5pbWF0aW9uX3pvbmU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2ZpbmRlckAyeC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNlYXJjaCA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBmb3J3YXJkcyAwcztcclxuICAgIC1tb3otYW5pbWF0aW9uOiBzZWFyY2ggNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZm9yd2FyZHMgMHM7XHJcbiAgICAtby1hbmltYXRpb246IHNlYXJjaCA0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBmb3J3YXJkcyAwcztcclxuICAgIGFuaW1hdGlvbjogc2VhcmNoIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGZvcndhcmRzIDBzOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yZXN1bHRzIC5yZXN1bHRzX2lkX3NpZyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLnJlc3VsdHMgLnJlc3VsdHNfaWRfc2lnIC5yZXN1bHRzX2lkIHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICB3aWR0aDogY2FsYygzMCUgLSAxMHB4KTtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yZXN1bHRzIC5yZXN1bHRzX2lkX3NpZyAucmVzdWx0c19pZCBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMDsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICAucmVzdWx0cyAucmVzdWx0c19pZF9zaWcgLnJlc3VsdHNfc2lnIHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICB3aWR0aDogY2FsYyg3MCUgLSAxMHB4KTtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICAucmVzdWx0cyAucmVzdWx0c19pZF9zaWcgLnJlc3VsdHNfc2lnIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yZXN1bHRzIC5yZXN1bHRzX2lkX3NpZyAucmVzdWx0c19tZWRjYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yZXN1bHRzIC5yZXN1bHRzX2lkX3NpZyAucmVzdWx0c19tZWRjYXJkIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yZXN1bHRzIC5yZXN1bHRzX2RhdGEge1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yZXN1bHRzIC5yZXN1bHRzX2RhdGEgLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZWVlZWU7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLnJlc3VsdHMgLnJlc3VsdHNfZGF0YSAucm93Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgbWFyZ2luOiAwOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yZXN1bHRzIC5yZXN1bHRzX2RhdGEgLnJvdyAudHlwZSxcclxuICAucmVzdWx0cyAucmVzdWx0c19kYXRhIC5yb3cgLmRhdGEge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwOyB9IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5yZXN1bHRzIC5yZXN1bHRzX2RhdGEgLnJvdyAudHlwZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH0gfVxyXG5cclxuQG1lZGlhIHNjcmVlbiB7XHJcbiAgLnJlc3VsdHMgLnJlc3VsdHNfZGF0YSAucm93IC5kYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4OyB9IH1cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\acuant-sdk\angular-acuant-app\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map