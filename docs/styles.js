(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".no-scroll-y {\r\n\toverflow-y: hidden;\r\n}\r\n\r\n.progress {\r\n\tbackground-color: #d6d6d6;\r\n}\r\n\r\n.main-container {\r\n  margin-top: 40px;\r\n}\r\n\r\n.table { \r\n\tmargin-top: 30px;\r\n}\r\n\r\n.text-green { \r\n\tcolor: #008000;\r\n}\r\n\r\n.bg-green {\r\n\tbackground-color: #008000;\r\n}\r\n\r\n.table thead th {\r\n\tvertical-align: middle;\r\n}\r\n\r\n.btn:focus {\r\n\tbox-shadow: 0 0 0;\r\n}\r\n\r\n.shadow-xl {\r\n\tbox-shadow: 0 20px 25px -5px rgba(0,0,0,0.3),\r\n\t\t\t\t\t\t\t0 10px 10px -5px rgba(0,0,0,0.1) !important;\r\n}\r\n\r\n.ctn-icons {\r\n  color: rgba(255, 255, 255, 0.9);\r\n  display: flex;\r\n\tjustify-content: space-between;\r\n\tleft: 0;\r\n  padding: 15px;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n.ctn-icons i {\r\n\tbackground-color: rgba(0, 0, 0, 0.6);\r\n\tborder-radius: 50%;\r\n\tbox-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\r\n\tcursor: pointer;\r\n\tpadding: 10px;\r\n}\r\n\r\n.ctn-icons .icon-remove:before,\r\n.ctn-icons .icon-view:before {\r\n\tdisplay: block;\r\n\ttransition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.ctn-icons .icon-remove,\r\n.ctn-icons .icon-view {\r\n\ttransition: background-color 0.3s ease-in-out,\r\n\t\t\t\t\t\t\tbox-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.ctn-icons .icon-remove:hover:before,\r\n.ctn-icons .icon-remove:focus:before,\r\n.ctn-icons .icon-remove:active:before,\r\n.ctn-icons .icon-view:hover:before,\r\n.ctn-icons .icon-view:focus:before,\r\n.ctn-icons .icon-view:active:before {\r\n\ttransform: rotateY(360deg);\r\n}\r\n\r\n.ctn-icons .icon-remove:hover,\r\n.ctn-icons .icon-remove:focus,\r\n.ctn-icons .icon-remove:active,\r\n.ctn-icons .icon-view:hover,\r\n.ctn-icons .icon-view:focus,\r\n.ctn-icons .icon-view:active {\t\r\n\tbox-shadow: 0 0 5px rgba(0, 0, 0, 0.3),\r\n\t\t\t\t\t\t\t0 0 0 1px #ffffff inset;\r\n}\r\n\r\n.ctn-icons .icon-remove:hover,\r\n.ctn-icons .icon-remove:focus,\r\n.ctn-icons .icon-remove:active {\r\n\tbackground-color: rgba(255, 46, 46, 0.6);\r\n}\r\n\r\n.ctn-icons .icon-view:hover,\r\n.ctn-icons .icon-view:focus,\r\n.ctn-icons .icon-view:active {\r\n\tbackground-color: rgba(46, 103, 175, 0.6);\r\n}\r\n\r\n.img-card {\r\n\theight: 275px; \r\n\t-o-object-fit: cover; \r\n\t   object-fit: cover;\r\n\twidth: 100%;\r\n}\r\n\r\n.label {\r\n  border: 3px dashed #999999;\r\n\tborder-radius: 5px;\r\n  cursor: pointer;\r\n  padding: 1rem 1.5rem;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n  transition: border-color 0.3s ease-in;\r\n\twidth: 100%;\r\n}\r\n\r\n.label:hover,\r\n.file-over { \r\n\tborder-color: #555555;\r\n}\r\n\r\n.label .title {\r\n\tcolor: #999999;\r\n\tfont-size: 1.25rem;\r\n\ttransition: color 0.3s ease-in;\r\n}\r\n\r\n.label img {\r\n\tmargin: auto;\r\n\topacity: 0.5;\r\n\ttransition: opacity 0.3s ease-in,\r\n\t\t\t\t\t\t\t-webkit-filter 0.3s ease-in;\r\n\ttransition: filter 0.3s ease-in,\r\n\t\t\t\t\t\t\topacity 0.3s ease-in;\r\n\ttransition: filter 0.3s ease-in,\r\n\t\t\t\t\t\t\topacity 0.3s ease-in,\r\n\t\t\t\t\t\t\t-webkit-filter 0.3s ease-in;\r\n}\r\n\r\n.label:hover .title,\r\n.label.file-over .title {\r\n  color: #555555;\r\n}\r\n\r\n.label:hover img,\r\n.label.file-over img {\r\n\t-webkit-filter: drop-shadow(0 0 5px #707070);\r\n\t        filter: drop-shadow(0 0 5px #707070);\r\n\topacity: 1;\r\n}\r\n\r\ninput[type=file] {\r\n\tcursor: pointer;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n\twidth: 100%;\r\n}\r\n\r\n.modal-lightbox {\r\n\tbackground-color: rgba(0, 0, 0, 0.7);\r\n\theight: 100%;\r\n\tleft: 0;\r\n\topacity: 0;\r\n\toverflow: auto;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\ttransform: translate3d(0, 100vh, 0);\r\n\ttransition-duration: 1s, 1s;\r\n\ttransition-property: opacity, transform;\r\n\ttransition-timing-function: ease-out, ease-out;\r\n\twidth: 100%;\t\r\n}\r\n\r\n.show-modal-lightbox {\r\n\topacity: 1;\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n.ctn-modal-lightbox {\r\n\tbackground-color: #ffffff;\r\n\tmargin: 2.5rem auto;\r\n\tmax-width: 750px;\r\n\tposition: relative;\r\n\tpadding: 0.25rem;\r\n\twidth: 90%;\r\n}\r\n\r\n.close-modal-lightbox {\r\n\tbackground-color: #ffffff;\r\n\tcolor: #000000;\r\n\tcursor: pointer;\r\n\tborder-radius: 50%;\r\n\tfont-size: 1rem;\r\n\theight: 1.5rem;\r\n\tleft: calc(100% - 1.25rem / 2);\r\n\tline-height: 1.5rem;\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\ttop: calc(0% - 1.5rem / 2);\r\n\twidth: 1.5rem;\r\n}\r\n\r\n.modal-lightbox-body {\r\n\talign-items: center;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tpadding: 0.25em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0M7a0RBQ2lEO0FBQ2xEOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7Q0FDZCw4QkFBOEI7Q0FDOUIsT0FBTztFQUNOLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxrQkFBa0I7Q0FDbEIsc0NBQXNDO0NBQ3RDLGVBQWU7Q0FDZixhQUFhO0FBQ2Q7O0FBRUE7O0NBRUMsY0FBYztDQUNkLHNDQUFzQztBQUN2Qzs7QUFFQTs7Q0FFQztrQ0FDaUM7QUFDbEM7O0FBRUE7Ozs7OztDQU1DLDBCQUEwQjtBQUMzQjs7QUFFQTs7Ozs7O0NBTUM7OEJBQzZCO0FBQzlCOztBQUVBOzs7Q0FHQyx3Q0FBd0M7QUFDekM7O0FBRUE7OztDQUdDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixvQkFBaUI7SUFBakIsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtDQUMzQixrQkFBa0I7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtDQUNyQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0VBQ2pCLHFDQUFxQztDQUN0QyxXQUFXO0FBQ1o7O0FBRUE7O0NBRUMscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaO2tDQUMwQjtDQUQxQjsyQkFDMEI7Q0FEMUI7O2tDQUMwQjtBQUMzQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOztDQUVDLDRDQUFvQztTQUFwQyxvQ0FBb0M7Q0FDcEMsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixPQUFPO0NBQ1AsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04seUJBQWlCO0lBQWpCLHNCQUFpQjtLQUFqQixxQkFBaUI7U0FBakIsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osT0FBTztDQUNQLFVBQVU7Q0FDVixjQUFjO0NBQ2QsZUFBZTtDQUNmLE1BQU07Q0FDTixtQ0FBbUM7Q0FDbkMsMkJBQTJCO0NBQzNCLHVDQUF1QztDQUN2Qyw4Q0FBOEM7Q0FDOUMsV0FBVztBQUNaOztBQUVBO0NBQ0MsVUFBVTtDQUNWLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixjQUFjO0NBQ2QsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLDBCQUEwQjtDQUMxQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXNjcm9sbC15IHtcclxuXHRvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4udGFibGUgeyBcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGV4dC1ncmVlbiB7IFxyXG5cdGNvbG9yOiAjMDA4MDAwO1xyXG59XHJcblxyXG4uYmctZ3JlZW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmJ0bjpmb2N1cyB7XHJcblx0Ym94LXNoYWRvdzogMCAwIDA7XHJcbn1cclxuXHJcbi5zaGFkb3cteGwge1xyXG5cdGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiYSgwLDAsMCwwLjMpLFxyXG5cdFx0XHRcdFx0XHRcdDAgMTBweCAxMHB4IC01cHggcmdiYSgwLDAsMCwwLjEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdG4taWNvbnMge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0bGVmdDogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdG4taWNvbnMgaSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmN0bi1pY29ucyAuaWNvbi1yZW1vdmU6YmVmb3JlLFxyXG4uY3RuLWljb25zIC5pY29uLXZpZXc6YmVmb3JlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmN0bi1pY29ucyAuaWNvbi1yZW1vdmUsXHJcbi5jdG4taWNvbnMgLmljb24tdmlldyB7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LFxyXG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmN0bi1pY29ucyAuaWNvbi1yZW1vdmU6aG92ZXI6YmVmb3JlLFxyXG4uY3RuLWljb25zIC5pY29uLXJlbW92ZTpmb2N1czpiZWZvcmUsXHJcbi5jdG4taWNvbnMgLmljb24tcmVtb3ZlOmFjdGl2ZTpiZWZvcmUsXHJcbi5jdG4taWNvbnMgLmljb24tdmlldzpob3ZlcjpiZWZvcmUsXHJcbi5jdG4taWNvbnMgLmljb24tdmlldzpmb2N1czpiZWZvcmUsXHJcbi5jdG4taWNvbnMgLmljb24tdmlldzphY3RpdmU6YmVmb3JlIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxufVxyXG5cclxuLmN0bi1pY29ucyAuaWNvbi1yZW1vdmU6aG92ZXIsXHJcbi5jdG4taWNvbnMgLmljb24tcmVtb3ZlOmZvY3VzLFxyXG4uY3RuLWljb25zIC5pY29uLXJlbW92ZTphY3RpdmUsXHJcbi5jdG4taWNvbnMgLmljb24tdmlldzpob3ZlcixcclxuLmN0bi1pY29ucyAuaWNvbi12aWV3OmZvY3VzLFxyXG4uY3RuLWljb25zIC5pY29uLXZpZXc6YWN0aXZlIHtcdFxyXG5cdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxyXG5cdFx0XHRcdFx0XHRcdDAgMCAwIDFweCAjZmZmZmZmIGluc2V0O1xyXG59XHJcblxyXG4uY3RuLWljb25zIC5pY29uLXJlbW92ZTpob3ZlcixcclxuLmN0bi1pY29ucyAuaWNvbi1yZW1vdmU6Zm9jdXMsXHJcbi5jdG4taWNvbnMgLmljb24tcmVtb3ZlOmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDQ2LCA0NiwgMC42KTtcclxufVxyXG5cclxuLmN0bi1pY29ucyAuaWNvbi12aWV3OmhvdmVyLFxyXG4uY3RuLWljb25zIC5pY29uLXZpZXc6Zm9jdXMsXHJcbi5jdG4taWNvbnMgLmljb24tdmlldzphY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDEwMywgMTc1LCAwLjYpO1xyXG59XHJcblxyXG4uaW1nLWNhcmQge1xyXG5cdGhlaWdodDogMjc1cHg7IFxyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjOTk5OTk5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGFiZWw6aG92ZXIsXHJcbi5maWxlLW92ZXIgeyBcclxuXHRib3JkZXItY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbi5sYWJlbCAudGl0bGUge1xyXG5cdGNvbG9yOiAjOTk5OTk5O1xyXG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5sYWJlbCBpbWcge1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRvcGFjaXR5OiAwLjU7XHJcblx0dHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZS1pbixcclxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5IDAuM3MgZWFzZS1pbjtcclxufVxyXG5cclxuLmxhYmVsOmhvdmVyIC50aXRsZSxcclxuLmxhYmVsLmZpbGUtb3ZlciAudGl0bGUge1xyXG4gIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4ubGFiZWw6aG92ZXIgaW1nLFxyXG4ubGFiZWwuZmlsZS1vdmVyIGltZyB7XHJcblx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4ICM3MDcwNzApO1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV0ge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bGVmdDogMDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbC1saWdodGJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRsZWZ0OiAwO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMHZoLCAwKTtcclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcywgMXM7XHJcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgdHJhbnNmb3JtO1xyXG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dCwgZWFzZS1vdXQ7XHJcblx0d2lkdGg6IDEwMCU7XHRcclxufVxyXG5cclxuLnNob3ctbW9kYWwtbGlnaHRib3gge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG5cclxuLmN0bi1tb2RhbC1saWdodGJveCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRtYXJnaW46IDIuNXJlbSBhdXRvO1xyXG5cdG1heC13aWR0aDogNzUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHBhZGRpbmc6IDAuMjVyZW07XHJcblx0d2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsLWxpZ2h0Ym94IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGNvbG9yOiAjMDAwMDAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG5cdGxlZnQ6IGNhbGMoMTAwJSAtIDEuMjVyZW0gLyAyKTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dG9wOiBjYWxjKDAlIC0gMS41cmVtIC8gMik7XHJcblx0d2lkdGg6IDEuNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWxpZ2h0Ym94LWJvZHkge1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwLjI1ZW07XHJcbn0iXX0= */", '', '']]

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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

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
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\crian\Downloads\to-check\angular-14-fotos-firebase\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map