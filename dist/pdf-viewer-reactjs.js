"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React);require("react-dom");var PropTypes=_interopDefault(require("prop-types"));require("jquery/dist/jquery.min.js"),require("bootstrap/dist/css/bootstrap.min.css"),require("bootstrap/dist/js/bootstrap.min.js"),require("material-design-icons/iconfont/material-icons.css");var pdfjs=_interopDefault(require("pdfjs-dist")),pdfjsWorker=_interopDefault(require("pdfjs-dist/build/pdf.worker.entry"));function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,o=!1,s=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw s}}return a}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}pdfjs.GlobalWorkerOptions.workerSrc=pdfjsWorker;var RenderPdf=function(){function a(e){var t;return _classCallCheck(this,a),(t=_possibleConstructorReturn(this,_getPrototypeOf(a).call(this,e))).canvasRef=React.createRef(null),t.pdf=null,t.state={src:e.src},t}return _inherits(a,React.Component),_createClass(a,[{key:"fetchPdf",value:function(){var t,a,n,o,s;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(pdfjs.getDocument(this.state.src).promise);case 2:return this.pdf=e.sent,this.props.pageCount(this.pdf.numPages),e.next=6,regeneratorRuntime.awrap(this.pdf.getPage(this.props.page));case 6:return t=e.sent,a=t.getViewport({scale:this.props.scale,rotation:this.props.rotation}),(n=this.canvasRef.current).height=a.height,n.width=a.width,o={canvasContext:n.getContext("2d"),viewport:a},s=t.render(o),e.next=15,regeneratorRuntime.awrap(s.promise);case 15:case"end":return e.stop()}},null,this)}},{key:"render",value:function(){return this.fetchPdf(),React__default.createElement("canvas",{ref:this.canvasRef,width:window.innerWidth,height:window.innerHeight})}}]),a}();RenderPdf.propTypes={src:PropTypes.string.isRequired,page:PropTypes.number,scale:PropTypes.number,rotation:PropTypes.number,pageCount:PropTypes.func},RenderPdf.defaultProps={page:1,scale:1,rotation:0,pageCount:function(){}};var NextPageButton=function(e){var t=e.css,a=e.page,n=e.pages,o=e.handleNextClick,s="".concat(t||"btn btn-sm btn-link text-white pl-2").concat(a===n?" disabled":""),r=_slicedToArray(React.useState(!1),2),i=r[0],l=r[1];return React__default.createElement("button",{className:s,onClick:function(){l(!0),o(),setTimeout(function(){l(!1)},500)},disabled:i},React__default.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))};NextPageButton.propTypes={css:PropTypes.string,page:PropTypes.number.isRequired,pages:PropTypes.number.isRequired,handleNextClick:PropTypes.func.isRequired};var PagesIndicator=function(e){var t=e.css,a=e.page,n=e.pages,o=t||"small pt-2";return React__default.createElement("div",{className:o},"Page ".concat(a," / ").concat(n))};PagesIndicator.propTypes={css:PropTypes.string,page:PropTypes.number.isRequired,pages:PropTypes.number.isRequired};var PreviousPageButton=function(e){var t=e.css,a=e.page,n=e.handlePrevClick,o="".concat(t||"btn btn-sm btn-link text-white pr-2").concat(1===a?" disabled":""),s=_slicedToArray(React.useState(!1),2),r=s[0],i=s[1];return React__default.createElement("button",{className:o,onClick:function(){i(!0),n(),setTimeout(function(){i(!1)},500)},disabled:r},React__default.createElement("i",{className:"material-icons"},"keyboard_arrow_left"))};PreviousPageButton.propTypes={css:PropTypes.string,page:PropTypes.number.isRequired,handlePrevClick:PropTypes.func.isRequired};var ZoomIn=function(e){var t=e.css,a=e.scale,n=e.maxScale,o=e.handleZoomIn,s="".concat(t||"btn btn-sm btn-link text-white pl-2").concat(a===n?" disabled":"");return React__default.createElement("button",{type:"button",className:s,onClick:o},React__default.createElement("i",{className:"material-icons"},"zoom_in"))};ZoomIn.propTypes={css:PropTypes.string,scale:PropTypes.number.isRequired,maxScale:PropTypes.number.isRequired,handleZoomIn:PropTypes.func.isRequired};var ZoomOut=function(e){var t=e.css,a=e.scale,n=e.minScale,o=e.handleZoomOut,s="".concat(t||"btn btn-sm btn-link text-white pr-2").concat(a===n?" disabled":"");return React__default.createElement("button",{type:"button",className:s,onClick:o},React__default.createElement("i",{className:"material-icons"},"zoom_out"))};ZoomOut.propTypes={css:PropTypes.string,scale:PropTypes.number.isRequired,minScale:PropTypes.number.isRequired,handleZoomOut:PropTypes.func.isRequired};var ResetZoom=function(e){var t=e.css,a=e.scale,n=e.defaultScale,o=e.handleResetZoom,s="".concat(t||"btn btn-sm btn-link text-white px-2","\n    ").concat(a===n?" disabled":"");return React__default.createElement("button",{type:"button",className:s,onClick:o},React__default.createElement("i",{className:"material-icons"},"refresh"))};ResetZoom.propTypes={css:PropTypes.string,scale:PropTypes.number.isRequired,defaultScale:PropTypes.number.isRequired,handleResetZoom:PropTypes.func.isRequired};var RotateLeft=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateLeft,o="\n    ".concat(t||"btn btn-sm btn-link text-white pr-2","\n    ").concat(-90===a?" disabled":"","\n  ");return React__default.createElement("button",{type:"button",className:o,onClick:n},React__default.createElement("i",{className:"material-icons"},"rotate_left"))};RotateLeft.propTypes={css:PropTypes.string,rotationAngle:PropTypes.number.isRequired,handleRotateLeft:PropTypes.func.isRequired};var ResetRotation=function(e){var t=e.css,a=e.rotationAngle,n=e.handleResetRotation,o="\n    ".concat(t||"btn btn-sm btn-link text-white px-2","\n    ").concat(0===a||360===a?" disabled":"","\n  ");return React__default.createElement("button",{type:"button",className:o,onClick:n},React__default.createElement("i",{className:"material-icons"},"refresh"))};ResetRotation.propTypes={css:PropTypes.string,rotationAngle:PropTypes.number.isRequired,handleResetRotation:PropTypes.func.isRequired};var RotateRight=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateRight,o="\n    ".concat(t||"btn btn-sm btn-link text-white pl-2","\n    ").concat(90===a?" disabled":"","\n  ");return React__default.createElement("button",{type:"button",className:o,onClick:n},React__default.createElement("i",{className:"material-icons"},"rotate_right"))};RotateRight.propTypes={css:PropTypes.string,rotationAngle:PropTypes.number.isRequired,handleRotateRight:PropTypes.func.isRequired};var Navigation=function(e){var t=e.page,a=e.pages,n=e.scale,o=e.defaultScale,s=e.maxScale,r=e.minScale,i=e.rotationAngle,l=e.hideZoom,p=e.hideRotation,c=e.css,u=e.handlePrevClick,d=e.handleNextClick,h=e.handleZoomIn,m=e.handleResetZoom,f=e.handleZoomOut,R=e.handleRotateLeft,y=e.handleResetRotation,g=e.handleRotateRight;return React__default.createElement("div",{className:c.navbarWrapper?c.navbarWrapper:"container rounded bg-dark text-white"},React__default.createElement("div",{className:"row"},React__default.createElement("div",{className:"col-sm-4"},l?void 0:React__default.createElement("div",{className:"btn-group",role:"group"},React__default.createElement(ZoomOut,{scale:n,minScale:r,css:c.zoomOutBtn,handleZoomOut:f}),React__default.createElement(ResetZoom,{scale:n,defaultScale:o,css:c.resetZoomBtn,handleResetZoom:m}),React__default.createElement(ZoomIn,{scale:n,maxScale:s,css:c.zoomInBtn,handleZoomIn:h}))),React__default.createElement("div",{className:"col-sm-4"},React__default.createElement("div",{className:"btn-group",role:"group"},React__default.createElement(PreviousPageButton,{css:c.previousPageBtn,page:t,pages:a,handlePrevClick:u}),React__default.createElement(PagesIndicator,{css:c.pageIndicator,page:t,pages:a}),React__default.createElement(NextPageButton,{css:c.nextPageBtn,page:t,pages:a,handleNextClick:d}))),React__default.createElement("div",{className:"col-sm-4"},p?void 0:React__default.createElement("div",{className:"btn-group",role:"group"},React__default.createElement(RotateLeft,{css:c.rotateLeftBtn,rotationAngle:i,handleRotateLeft:R}),React__default.createElement(ResetRotation,{css:c.resetRotationBtn,rotationAngle:i,handleResetRotation:y}),React__default.createElement(RotateRight,{css:c.rotateRightBtn,rotationAngle:i,handleRotateRight:g})))))};Navigation.propTypes={page:PropTypes.number.isRequired,pages:PropTypes.number.isRequired,scale:PropTypes.number,defaultScale:PropTypes.number,maxScale:PropTypes.number,minScale:PropTypes.number,rotationAngle:PropTypes.number,hideZoom:PropTypes.bool,hideRotation:PropTypes.bool,css:PropTypes.shape({navbarWrapper:PropTypes.string,pages:PropTypes.string,pageIndicator:PropTypes.string,previousPageBtn:PropTypes.string,nextPageBtn:PropTypes.string,zoomOutBtn:PropTypes.string,resetZoomBtn:PropTypes.string,zoomInBtn:PropTypes.string,rotateLeftBtn:PropTypes.string,resetRotationBtn:PropTypes.string,rotateRightBtn:PropTypes.string}),elements:PropTypes.shape({previousPageBtn:PropTypes.any,nextPageBtn:PropTypes.any,pages:PropTypes.any}),handlePrevClick:PropTypes.func.isRequired,handleNextClick:PropTypes.func.isRequired,handleZoomIn:PropTypes.func.isRequired,handleResetZoom:PropTypes.func.isRequired,handleZoomOut:PropTypes.func.isRequired,handleRotateLeft:PropTypes.func.isRequired,handleResetRotation:PropTypes.func.isRequired,handleRotateRight:PropTypes.func.isRequired},Navigation.defaultProps={css:{},elements:{}};var Styles={canvas:{height:"1000px",maxHeight:"1000px",maxWidth:"1000px",overflow:"auto"}},PDFViewer=function(){function a(e){var t;return _classCallCheck(this,a),(t=_possibleConstructorReturn(this,_getPrototypeOf(a).call(this,e))).state={page:t.props.page,pages:0,scale:t.props.scale,defaultScale:t.props.scale,rotationAngle:t.props.rotationAngle},t.getPageCount=t.getPageCount.bind(_assertThisInitialized(t)),t.handlePrevClick=t.handlePrevClick.bind(_assertThisInitialized(t)),t.handleNextClick=t.handleNextClick.bind(_assertThisInitialized(t)),t.handleZoomIn=t.handleZoomIn.bind(_assertThisInitialized(t)),t.handleResetZoom=t.handleResetZoom.bind(_assertThisInitialized(t)),t.handleZoomOut=t.handleZoomOut.bind(_assertThisInitialized(t)),t.handleRotateLeft=t.handleRotateLeft.bind(_assertThisInitialized(t)),t.handleResetRotation=t.handleResetRotation.bind(_assertThisInitialized(t)),t.handleRotateRight=t.handleRotateRight.bind(_assertThisInitialized(t)),t}return _inherits(a,React__default.Component),_createClass(a,[{key:"getPageCount",value:function(e){var t=this;this.state.pages!==e&&setTimeout(function(){t.setState({pages:e})},2e3)}},{key:"handlePrevClick",value:function(){1!==this.state.page&&(this.setState({page:this.state.page-1}),this.props.onPrevBtnClick&&this.props.onPrevBtnClick(this.state.page-1))}},{key:"handleNextClick",value:function(){this.state.page!==this.pages&&(this.setState({page:this.state.page+1}),this.props.onNextBtnClick&&this.props.onNextBtnClick(this.state.page+1))}},{key:"handleZoomIn",value:function(){this.state.scale<this.props.maxScale&&this.setState({scale:this.state.scale+this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale+this.props.scaleStep)}},{key:"handleResetZoom",value:function(){this.setState({scale:this.state.defaultScale}),this.props.onZoom&&this.props.onZoom(this.state.defaultScale)}},{key:"handleZoomOut",value:function(){this.state.scale>this.props.minScale&&this.setState({scale:this.state.scale-this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale-this.props.scaleStep)}},{key:"handleRotateLeft",value:function(){-90!==this.state.rotationAngle&&this.setState({rotationAngle:-90}),this.props.onRotation&&this.props.onRotation(-90)}},{key:"handleResetRotation",value:function(){0===this.state.rotationAngle&&360===this.state.rotationAngle||this.setState({rotationAngle:0}),this.props.onRotation&&this.props.onRotation(0)}},{key:"handleRotateRight",value:function(){90!==this.state.rotationAngle&&this.setState({rotationAngle:90}),this.props.onRotation&&this.props.onRotation(90)}},{key:"render",value:function(){var t=this,e=this.props.document,a=this.props,n=(a.loader,a.maxScale),o=a.minScale,s=a.hideNavbar,r=a.hideZoom,i=a.hideRotation,l=a.navbarOnTop,p=a.navigation,c=a.css,u=a.canvasCss,d=a.onDocumentClick,h=this.state,m=h.page,f=h.pages,R=h.scale,y=h.defaultScale,g=h.rotationAngle,P=p,_=React__default.createElement(RenderPdf,{src:e.url,page:m,scale:R,rotation:g,pageCount:function(e){return t.getPageCount(e)}}),b=null;return!s&&0<f&&(b=!p||p&&"object"===_typeof(p)?React__default.createElement(Navigation,{page:m,pages:f,scale:R,defaultScale:y,maxScale:n,minScale:o,rotationAngle:g,hideZoom:r,hideRotation:i,css:p?p.css:void 0,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight}):React__default.createElement(P,{page:m,pages:f,scale:R,defaultScale:y,maxScale:n,minScale:o,rotationAngle:g,hideZoom:r,hideRotation:i,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight})),React__default.createElement("div",{className:c||"container text-center"},l?React__default.createElement("div",null,React__default.createElement("div",null,b),React__default.createElement("div",{className:u||"",style:u?{}:Styles.canvas,onClick:d},_)):React__default.createElement("div",null,React__default.createElement("div",{className:u||"",style:u?{}:Styles.canvas,onClick:d},_),React__default.createElement("div",null,b)))}}]),a}();PDFViewer.propTypes={document:PropTypes.shape({file:PropTypes.any,url:PropTypes.string,connection:PropTypes.shape({url:PropTypes.string.isRequired}),base64:PropTypes.string,binary:PropTypes.shape({data:PropTypes.any})}).isRequired,loader:PropTypes.node,page:PropTypes.number,scale:PropTypes.number,scaleStep:PropTypes.number,maxScale:PropTypes.number,minScale:PropTypes.number,css:PropTypes.string,canvasCss:PropTypes.string,rotationAngle:PropTypes.number,onDocumentClick:PropTypes.func,onPrevBtnClick:PropTypes.func,onNextBtnClick:PropTypes.func,onZoom:PropTypes.func,onRotation:PropTypes.func,hideNavbar:PropTypes.bool,navbarOnTop:PropTypes.bool,hideZoom:PropTypes.bool,hideRotation:PropTypes.bool,navigation:PropTypes.oneOfType([PropTypes.shape({css:PropTypes.shape({navbarWrapper:PropTypes.string,zoomOutBtn:PropTypes.string,resetZoomBtn:PropTypes.string,zoomInBtn:PropTypes.string,previousPageBtn:PropTypes.string,pageIndicator:PropTypes.string,nextPageBtn:PropTypes.string,rotateLeftBtn:PropTypes.string,resetRotationBtn:PropTypes.string,rotateRightBtn:PropTypes.string})}),PropTypes.any])},PDFViewer.defaultProps={page:1,defaultScale:1,scale:1,scaleStep:1,maxScale:3,minScale:1,rotationAngle:0,hideNavbar:!1,hideZoom:!1,hideRotation:!1,navbarOnTop:!1},module.exports=PDFViewer;
