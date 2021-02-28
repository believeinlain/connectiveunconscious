/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babylonjs-gui/babylon.gui.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/babylonjs-gui/babylon.gui.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(t,e){ true?module.exports=e(__webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js")):undefined}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(t){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(e,i){e.exports=t},function(t,e,i){"use strict";i.r(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};function n(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}function o(t,e,i,r){var n,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var h=t.length-1;h>=0;h--)(n=t[h])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}var s,h=i(0),a=function(){function t(e,i,r){void 0===i&&(i=t.UNITMODE_PIXEL),void 0===r&&(r=!0),this.unit=i,this.negativeValueAllowed=r,this._value=1,this.ignoreAdaptiveScaling=!1,this._value=e,this._originalUnit=i}return Object.defineProperty(t.prototype,"isPercentage",{get:function(){return this.unit===t.UNITMODE_PERCENTAGE},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPixel",{get:function(){return this.unit===t.UNITMODE_PIXEL},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"internalValue",{get:function(){return this._value},enumerable:!0,configurable:!0}),t.prototype.getValueInPixel=function(t,e){return this.isPixel?this.getValue(t):this.getValue(t)*e},t.prototype.updateInPlace=function(e,i){return void 0===i&&(i=t.UNITMODE_PIXEL),this._value=e,this.unit=i,this},t.prototype.getValue=function(e){if(e&&!this.ignoreAdaptiveScaling&&this.unit!==t.UNITMODE_PERCENTAGE){var i=0,r=0;if(e.idealWidth&&(i=this._value*e.getSize().width/e.idealWidth),e.idealHeight&&(r=this._value*e.getSize().height/e.idealHeight),e.useSmallestIdeal&&e.idealWidth&&e.idealHeight)return window.innerWidth<window.innerHeight?i:r;if(e.idealWidth)return i;if(e.idealHeight)return r}return this._value},t.prototype.toString=function(e,i){switch(this.unit){case t.UNITMODE_PERCENTAGE:var r=100*this.getValue(e);return(i?r.toFixed(i):r)+"%";case t.UNITMODE_PIXEL:var n=this.getValue(e);return(i?n.toFixed(i):n)+"px"}return this.unit.toString()},t.prototype.fromString=function(e){var i=t._Regex.exec(e.toString());if(!i||0===i.length)return!1;var r=parseFloat(i[1]),n=this._originalUnit;if(this.negativeValueAllowed||r<0&&(r=0),4===i.length)switch(i[3]){case"px":n=t.UNITMODE_PIXEL;break;case"%":n=t.UNITMODE_PERCENTAGE,r/=100}return(r!==this._value||n!==this.unit)&&(this._value=r,this.unit=n,!0)},Object.defineProperty(t,"UNITMODE_PERCENTAGE",{get:function(){return t._UNITMODE_PERCENTAGE},enumerable:!0,configurable:!0}),Object.defineProperty(t,"UNITMODE_PIXEL",{get:function(){return t._UNITMODE_PIXEL},enumerable:!0,configurable:!0}),t._Regex=/(^-?\d*(\.\d+)?)(%|px)?/,t._UNITMODE_PERCENTAGE=0,t._UNITMODE_PIXEL=1,t}(),l=function(){function t(t,e,i,r){this.left=t,this.top=e,this.width=i,this.height=r}return t.prototype.copyFrom=function(t){this.left=t.left,this.top=t.top,this.width=t.width,this.height=t.height},t.prototype.copyFromFloats=function(t,e,i,r){this.left=t,this.top=e,this.width=i,this.height=r},t.CombineToRef=function(t,e,i){var r=Math.min(t.left,e.left),n=Math.min(t.top,e.top),o=Math.max(t.left+t.width,e.left+e.width),s=Math.max(t.top+t.height,e.top+e.height);i.left=r,i.top=n,i.width=o-r,i.height=s-n},t.prototype.transformToRef=function(t,e){for(var i=h.Polygon.Rectangle(this.left,this.top,this.left+this.width,this.top+this.height),r=new h.Vector2(Number.MAX_VALUE,Number.MAX_VALUE),n=new h.Vector2(0,0),o=0;o<4;o++)t.transformCoordinates(i[o].x,i[o].y,i[o]),r.x=Math.floor(Math.min(r.x,i[o].x)),r.y=Math.floor(Math.min(r.y,i[o].y)),n.x=Math.ceil(Math.max(n.x,i[o].x)),n.y=Math.ceil(Math.max(n.y,i[o].y));e.left=r.x,e.top=r.y,e.width=n.x-r.x,e.height=n.y-r.y},t.prototype.isEqualsTo=function(t){return this.left===t.left&&(this.top===t.top&&(this.width===t.width&&this.height===t.height))},t.Empty=function(){return new t(0,0,0,0)},t}(),u=function(t){function e(e,i){void 0===i&&(i=0);var r=t.call(this,e.x,e.y)||this;return r.buttonIndex=i,r}return n(e,t),e}(h.Vector2),c=function(){function t(t,e,i,r,n,o){this.m=new Float32Array(6),this.fromValues(t,e,i,r,n,o)}return t.prototype.fromValues=function(t,e,i,r,n,o){return this.m[0]=t,this.m[1]=e,this.m[2]=i,this.m[3]=r,this.m[4]=n,this.m[5]=o,this},t.prototype.determinant=function(){return this.m[0]*this.m[3]-this.m[1]*this.m[2]},t.prototype.invertToRef=function(t){var e=this.m[0],i=this.m[1],r=this.m[2],n=this.m[3],o=this.m[4],s=this.m[5],a=this.determinant();if(a<h.Epsilon*h.Epsilon)return t.m[0]=0,t.m[1]=0,t.m[2]=0,t.m[3]=0,t.m[4]=0,t.m[5]=0,this;var l=1/a,u=r*s-n*o,c=i*o-e*s;return t.m[0]=n*l,t.m[1]=-i*l,t.m[2]=-r*l,t.m[3]=e*l,t.m[4]=u*l,t.m[5]=c*l,this},t.prototype.multiplyToRef=function(t,e){var i=this.m[0],r=this.m[1],n=this.m[2],o=this.m[3],s=this.m[4],h=this.m[5],a=t.m[0],l=t.m[1],u=t.m[2],c=t.m[3],_=t.m[4],d=t.m[5];return e.m[0]=i*a+r*u,e.m[1]=i*l+r*c,e.m[2]=n*a+o*u,e.m[3]=n*l+o*c,e.m[4]=s*a+h*u+_,e.m[5]=s*l+h*c+d,this},t.prototype.transformCoordinates=function(t,e,i){return i.x=t*this.m[0]+e*this.m[2]+this.m[4],i.y=t*this.m[1]+e*this.m[3]+this.m[5],this},t.Identity=function(){return new t(1,0,0,1,0,0)},t.TranslationToRef=function(t,e,i){i.fromValues(1,0,0,1,t,e)},t.ScalingToRef=function(t,e,i){i.fromValues(t,0,0,e,0,0)},t.RotationToRef=function(t,e){var i=Math.sin(t),r=Math.cos(t);e.fromValues(r,i,-i,r,0,0)},t.ComposeToRef=function(e,i,r,n,o,s,h){t.TranslationToRef(e,i,t._TempPreTranslationMatrix),t.ScalingToRef(n,o,t._TempScalingMatrix),t.RotationToRef(r,t._TempRotationMatrix),t.TranslationToRef(-e,-i,t._TempPostTranslationMatrix),t._TempPreTranslationMatrix.multiplyToRef(t._TempScalingMatrix,t._TempCompose0),t._TempCompose0.multiplyToRef(t._TempRotationMatrix,t._TempCompose1),s?(t._TempCompose1.multiplyToRef(t._TempPostTranslationMatrix,t._TempCompose2),t._TempCompose2.multiplyToRef(s,h)):t._TempCompose1.multiplyToRef(t._TempPostTranslationMatrix,h)},t._TempPreTranslationMatrix=t.Identity(),t._TempPostTranslationMatrix=t.Identity(),t._TempRotationMatrix=t.Identity(),t._TempScalingMatrix=t.Identity(),t._TempCompose0=t.Identity(),t._TempCompose1=t.Identity(),t._TempCompose2=t.Identity(),t}(),_=function(){function t(e){this.name=e,this._alpha=1,this._alphaSet=!1,this._zIndex=0,this._currentMeasure=l.Empty(),this._fontFamily="Arial",this._fontStyle="",this._fontWeight="",this._fontSize=new a(18,a.UNITMODE_PIXEL,!1),this._width=new a(1,a.UNITMODE_PERCENTAGE,!1),this._height=new a(1,a.UNITMODE_PERCENTAGE,!1),this._color="",this._style=null,this._horizontalAlignment=t.HORIZONTAL_ALIGNMENT_CENTER,this._verticalAlignment=t.VERTICAL_ALIGNMENT_CENTER,this._isDirty=!0,this._wasDirty=!1,this._tempParentMeasure=l.Empty(),this._prevCurrentMeasureTransformedIntoGlobalSpace=l.Empty(),this._cachedParentMeasure=l.Empty(),this._paddingLeft=new a(0),this._paddingRight=new a(0),this._paddingTop=new a(0),this._paddingBottom=new a(0),this._left=new a(0),this._top=new a(0),this._scaleX=1,this._scaleY=1,this._rotation=0,this._transformCenterX=.5,this._transformCenterY=.5,this._transformMatrix=c.Identity(),this._invertTransformMatrix=c.Identity(),this._transformedPosition=h.Vector2.Zero(),this._isMatrixDirty=!0,this._isVisible=!0,this._isHighlighted=!1,this._fontSet=!1,this._dummyVector2=h.Vector2.Zero(),this._downCount=0,this._enterCount=-1,this._doNotRender=!1,this._downPointerIds={},this._isEnabled=!0,this._disabledColor="#9a9a9a",this._rebuildLayout=!1,this._isClipped=!1,this.metadata=null,this.isHitTestVisible=!0,this.isPointerBlocker=!1,this.isFocusInvisible=!1,this.clipChildren=!0,this.clipContent=!0,this.useBitmapCache=!1,this._shadowOffsetX=0,this._shadowOffsetY=0,this._shadowBlur=0,this._shadowColor="black",this.hoverCursor="",this._linkOffsetX=new a(0),this._linkOffsetY=new a(0),this.onPointerMoveObservable=new h.Observable,this.onPointerOutObservable=new h.Observable,this.onPointerDownObservable=new h.Observable,this.onPointerUpObservable=new h.Observable,this.onPointerClickObservable=new h.Observable,this.onPointerEnterObservable=new h.Observable,this.onDirtyObservable=new h.Observable,this.onBeforeDrawObservable=new h.Observable,this.onAfterDrawObservable=new h.Observable,this._tmpMeasureA=new l(0,0,0,0)}return Object.defineProperty(t.prototype,"shadowOffsetX",{get:function(){return this._shadowOffsetX},set:function(t){this._shadowOffsetX!==t&&(this._shadowOffsetX=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowOffsetY",{get:function(){return this._shadowOffsetY},set:function(t){this._shadowOffsetY!==t&&(this._shadowOffsetY=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowBlur",{get:function(){return this._shadowBlur},set:function(t){this._shadowBlur!==t&&(this._shadowBlur=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shadowColor",{get:function(){return this._shadowColor},set:function(t){this._shadowColor!==t&&(this._shadowColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"typeName",{get:function(){return this._getTypeName()},enumerable:!0,configurable:!0}),t.prototype.getClassName=function(){return this._getTypeName()},Object.defineProperty(t.prototype,"host",{get:function(){return this._host},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontOffset",{get:function(){return this._fontOffset},set:function(t){this._fontOffset=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this._alpha!==t&&(this._alphaSet=!0,this._alpha=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isHighlighted",{get:function(){return this._isHighlighted},set:function(t){this._isHighlighted!==t&&(this._isHighlighted=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleX",{get:function(){return this._scaleX},set:function(t){this._scaleX!==t&&(this._scaleX=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaleY",{get:function(){return this._scaleY},set:function(t){this._scaleY!==t&&(this._scaleY=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this._rotation},set:function(t){this._rotation!==t&&(this._rotation=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transformCenterY",{get:function(){return this._transformCenterY},set:function(t){this._transformCenterY!==t&&(this._transformCenterY=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transformCenterX",{get:function(){return this._transformCenterX},set:function(t){this._transformCenterX!==t&&(this._transformCenterX=t,this._markAsDirty(),this._markMatrixAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"horizontalAlignment",{get:function(){return this._horizontalAlignment},set:function(t){this._horizontalAlignment!==t&&(this._horizontalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"verticalAlignment",{get:function(){return this._verticalAlignment},set:function(t){this._verticalAlignment!==t&&(this._verticalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._width.toString(this._host)!==t&&this._width.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"widthInPixels",{get:function(){return this._width.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.width=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height.toString(this._host)},set:function(t){this._height.toString(this._host)!==t&&this._height.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"heightInPixels",{get:function(){return this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.height=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontSet?this._fontFamily:""},set:function(t){this._fontFamily!==t&&(this._fontFamily=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return this._style},set:function(t){var e=this;this._style&&(this._style.onChangedObservable.remove(this._styleObserver),this._styleObserver=null),this._style=t,this._style&&(this._styleObserver=this._style.onChangedObservable.add(function(){e._markAsDirty(),e._resetFontCache()})),this._markAsDirty(),this._resetFontCache()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_isFontSizeInPercentage",{get:function(){return this._fontSize.isPercentage},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSizeInPixels",{get:function(){var t=this._style?this._style._fontSize:this._fontSize;return t.isPixel?t.getValue(this._host):t.getValueInPixel(this._host,this._tempParentMeasure.height||this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.fontSize=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize.toString(this._host)},set:function(t){this._fontSize.toString(this._host)!==t&&this._fontSize.fromString(t)&&(this._markAsDirty(),this._resetFontCache())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return this._color},set:function(t){this._color!==t&&(this._color=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this.zIndex!==t&&(this._zIndex=t,this.parent&&this.parent._reOrderControl(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"notRenderable",{get:function(){return this._doNotRender},set:function(t){this._doNotRender!==t&&(this._doNotRender=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){this._isVisible!==t&&(this._isVisible=t,this._markAsDirty(!0))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDirty",{get:function(){return this._isDirty},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkedMesh",{get:function(){return this._linkedMesh},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingLeft",{get:function(){return this._paddingLeft.toString(this._host)},set:function(t){this._paddingLeft.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingLeftInPixels",{get:function(){return this._paddingLeft.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.paddingLeft=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingRight",{get:function(){return this._paddingRight.toString(this._host)},set:function(t){this._paddingRight.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingRightInPixels",{get:function(){return this._paddingRight.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.paddingRight=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingTop",{get:function(){return this._paddingTop.toString(this._host)},set:function(t){this._paddingTop.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingTopInPixels",{get:function(){return this._paddingTop.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.paddingTop=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingBottom",{get:function(){return this._paddingBottom.toString(this._host)},set:function(t){this._paddingBottom.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paddingBottomInPixels",{get:function(){return this._paddingBottom.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.paddingBottom=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"left",{get:function(){return this._left.toString(this._host)},set:function(t){this._left.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"leftInPixels",{get:function(){return this._left.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.left=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"top",{get:function(){return this._top.toString(this._host)},set:function(t){this._top.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"topInPixels",{get:function(){return this._top.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.top=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetX",{get:function(){return this._linkOffsetX.toString(this._host)},set:function(t){this._linkOffsetX.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetXInPixels",{get:function(){return this._linkOffsetX.getValueInPixel(this._host,this._cachedParentMeasure.width)},set:function(t){isNaN(t)||(this.linkOffsetX=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetY",{get:function(){return this._linkOffsetY.toString(this._host)},set:function(t){this._linkOffsetY.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linkOffsetYInPixels",{get:function(){return this._linkOffsetY.getValueInPixel(this._host,this._cachedParentMeasure.height)},set:function(t){isNaN(t)||(this.linkOffsetY=t+"px")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"centerX",{get:function(){return this._currentMeasure.left+this._currentMeasure.width/2},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"centerY",{get:function(){return this._currentMeasure.top+this._currentMeasure.height/2},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isEnabled",{get:function(){return this._isEnabled},set:function(t){this._isEnabled!==t&&(this._isEnabled=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabledColor",{get:function(){return this._disabledColor},set:function(t){this._disabledColor!==t&&(this._disabledColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),t.prototype._getTypeName=function(){return"Control"},t.prototype.getAscendantOfClass=function(t){return this.parent?this.parent.getClassName()===t?this.parent:this.parent.getAscendantOfClass(t):null},t.prototype._resetFontCache=function(){this._fontSet=!0,this._markAsDirty()},t.prototype.isAscendant=function(t){return!!this.parent&&(this.parent===t||this.parent.isAscendant(t))},t.prototype.getLocalCoordinates=function(t){var e=h.Vector2.Zero();return this.getLocalCoordinatesToRef(t,e),e},t.prototype.getLocalCoordinatesToRef=function(t,e){return e.x=t.x-this._currentMeasure.left,e.y=t.y-this._currentMeasure.top,this},t.prototype.getParentLocalCoordinates=function(t){var e=h.Vector2.Zero();return e.x=t.x-this._cachedParentMeasure.left,e.y=t.y-this._cachedParentMeasure.top,e},t.prototype.moveToVector3=function(e,i){if(this._host&&this.parent===this._host._rootContainer){this.horizontalAlignment=t.HORIZONTAL_ALIGNMENT_LEFT,this.verticalAlignment=t.VERTICAL_ALIGNMENT_TOP;var r=this._host._getGlobalViewport(i),n=h.Vector3.Project(e,h.Matrix.Identity(),i.getTransformMatrix(),r);this._moveToProjectedPosition(n),n.z<0||n.z>1?this.notRenderable=!0:this.notRenderable=!1}else h.Tools.Error("Cannot move a control to a vector3 if the control is not at root level")},t.prototype._getDescendants=function(t,e,i){void 0===e&&(e=!1)},t.prototype.getDescendants=function(t,e){var i=new Array;return this._getDescendants(i,t,e),i},t.prototype.linkWithMesh=function(e){if(!this._host||this.parent&&this.parent!==this._host._rootContainer)e&&h.Tools.Error("Cannot link a control to a mesh if the control is not at root level");else{var i=this._host._linkedControls.indexOf(this);if(-1!==i)return this._linkedMesh=e,void(e||this._host._linkedControls.splice(i,1));e&&(this.horizontalAlignment=t.HORIZONTAL_ALIGNMENT_LEFT,this.verticalAlignment=t.VERTICAL_ALIGNMENT_TOP,this._linkedMesh=e,this._host._linkedControls.push(this))}},t.prototype._moveToProjectedPosition=function(t){var e=this._left.getValue(this._host),i=this._top.getValue(this._host),r=t.x+this._linkOffsetX.getValue(this._host)-this._currentMeasure.width/2,n=t.y+this._linkOffsetY.getValue(this._host)-this._currentMeasure.height/2;this._left.ignoreAdaptiveScaling&&this._top.ignoreAdaptiveScaling&&(Math.abs(r-e)<.5&&(r=e),Math.abs(n-i)<.5&&(n=i)),this.left=r+"px",this.top=n+"px",this._left.ignoreAdaptiveScaling=!0,this._top.ignoreAdaptiveScaling=!0,this._markAsDirty()},t.prototype._offsetLeft=function(t){this._isDirty=!0,this._currentMeasure.left+=t},t.prototype._offsetTop=function(t){this._isDirty=!0,this._currentMeasure.top+=t},t.prototype._markMatrixAsDirty=function(){this._isMatrixDirty=!0,this._flagDescendantsAsMatrixDirty()},t.prototype._flagDescendantsAsMatrixDirty=function(){},t.prototype._intersectsRect=function(t){return this._currentMeasure.transformToRef(this._transformMatrix,this._tmpMeasureA),!(this._tmpMeasureA.left>=t.left+t.width)&&(!(this._tmpMeasureA.top>=t.top+t.height)&&(!(this._tmpMeasureA.left+this._tmpMeasureA.width<=t.left)&&!(this._tmpMeasureA.top+this._tmpMeasureA.height<=t.top)))},t.prototype.invalidateRect=function(){if(this._transform(),this.host&&this.host.useInvalidateRectOptimization)if(this._currentMeasure.transformToRef(this._transformMatrix,this._tmpMeasureA),l.CombineToRef(this._tmpMeasureA,this._prevCurrentMeasureTransformedIntoGlobalSpace,this._tmpMeasureA),this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY){var t=this.shadowOffsetX,e=this.shadowOffsetY,i=this.shadowBlur,r=Math.min(Math.min(t,0)-2*i,0),n=Math.max(Math.max(t,0)+2*i,0),o=Math.min(Math.min(e,0)-2*i,0),s=Math.max(Math.max(e,0)+2*i,0);this.host.invalidateRect(Math.floor(this._tmpMeasureA.left+r),Math.floor(this._tmpMeasureA.top+o),Math.ceil(this._tmpMeasureA.left+this._tmpMeasureA.width+n),Math.ceil(this._tmpMeasureA.top+this._tmpMeasureA.height+s))}else this.host.invalidateRect(Math.floor(this._tmpMeasureA.left),Math.floor(this._tmpMeasureA.top),Math.ceil(this._tmpMeasureA.left+this._tmpMeasureA.width),Math.ceil(this._tmpMeasureA.top+this._tmpMeasureA.height))},t.prototype._markAsDirty=function(t){void 0===t&&(t=!1),(this._isVisible||t)&&(this._isDirty=!0,this._host&&this._host.markAsDirty())},t.prototype._markAllAsDirty=function(){this._markAsDirty(),this._font&&this._prepareFont()},t.prototype._link=function(t){this._host=t,this._host&&(this.uniqueId=this._host.getScene().getUniqueId())},t.prototype._transform=function(t){if(this._isMatrixDirty||1!==this._scaleX||1!==this._scaleY||0!==this._rotation){var e=this._currentMeasure.width*this._transformCenterX+this._currentMeasure.left,i=this._currentMeasure.height*this._transformCenterY+this._currentMeasure.top;t&&(t.translate(e,i),t.rotate(this._rotation),t.scale(this._scaleX,this._scaleY),t.translate(-e,-i)),(this._isMatrixDirty||this._cachedOffsetX!==e||this._cachedOffsetY!==i)&&(this._cachedOffsetX=e,this._cachedOffsetY=i,this._isMatrixDirty=!1,this._flagDescendantsAsMatrixDirty(),c.ComposeToRef(-e,-i,this._rotation,this._scaleX,this._scaleY,this.parent?this.parent._transformMatrix:null,this._transformMatrix),this._transformMatrix.invertToRef(this._invertTransformMatrix))}},t.prototype._renderHighlight=function(t){this.isHighlighted&&(t.save(),t.strokeStyle="#4affff",t.lineWidth=2,this._renderHighlightSpecific(t),t.restore())},t.prototype._renderHighlightSpecific=function(t){t.strokeRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)},t.prototype._applyStates=function(e){this._isFontSizeInPercentage&&(this._fontSet=!0),this._fontSet&&(this._prepareFont(),this._fontSet=!1),this._font&&(e.font=this._font),this._color&&(e.fillStyle=this._color),t.AllowAlphaInheritance?e.globalAlpha*=this._alpha:this._alphaSet&&(e.globalAlpha=this.parent?this.parent.alpha*this._alpha:this._alpha)},t.prototype._layout=function(t,e){if(!this.isDirty&&(!this.isVisible||this.notRenderable))return!1;if(this._isDirty||!this._cachedParentMeasure.isEqualsTo(t)){this._currentMeasure.transformToRef(this._transformMatrix,this._prevCurrentMeasureTransformedIntoGlobalSpace),e.save(),this._applyStates(e);var i=0;do{this._rebuildLayout=!1,this._processMeasures(t,e),i++}while(this._rebuildLayout&&i<3);i>=3&&h.Logger.Error("Layout cycle detected in GUI (Control name="+this.name+", uniqueId="+this.uniqueId+")"),e.restore(),this.invalidateRect(),this._evaluateClippingState(t)}return this._wasDirty=this._isDirty,this._isDirty=!1,!0},t.prototype._processMeasures=function(t,e){this._currentMeasure.copyFrom(t),this._preMeasure(t,e),this._measure(),this._computeAlignment(t,e),this._currentMeasure.left=0|this._currentMeasure.left,this._currentMeasure.top=0|this._currentMeasure.top,this._currentMeasure.width=0|this._currentMeasure.width,this._currentMeasure.height=0|this._currentMeasure.height,this._additionalProcessing(t,e),this._cachedParentMeasure.copyFrom(t),this.onDirtyObservable.hasObservers()&&this.onDirtyObservable.notifyObservers(this)},t.prototype._evaluateClippingState=function(t){if(this.parent&&this.parent.clipChildren){if(this._currentMeasure.left>t.left+t.width)return void(this._isClipped=!0);if(this._currentMeasure.left+this._currentMeasure.width<t.left)return void(this._isClipped=!0);if(this._currentMeasure.top>t.top+t.height)return void(this._isClipped=!0);if(this._currentMeasure.top+this._currentMeasure.height<t.top)return void(this._isClipped=!0)}this._isClipped=!1},t.prototype._measure=function(){this._width.isPixel?this._currentMeasure.width=this._width.getValue(this._host):this._currentMeasure.width*=this._width.getValue(this._host),this._height.isPixel?this._currentMeasure.height=this._height.getValue(this._host):this._currentMeasure.height*=this._height.getValue(this._host)},t.prototype._computeAlignment=function(e,i){var r=this._currentMeasure.width,n=this._currentMeasure.height,o=e.width,s=e.height,h=0,a=0;switch(this.horizontalAlignment){case t.HORIZONTAL_ALIGNMENT_LEFT:h=0;break;case t.HORIZONTAL_ALIGNMENT_RIGHT:h=o-r;break;case t.HORIZONTAL_ALIGNMENT_CENTER:h=(o-r)/2}switch(this.verticalAlignment){case t.VERTICAL_ALIGNMENT_TOP:a=0;break;case t.VERTICAL_ALIGNMENT_BOTTOM:a=s-n;break;case t.VERTICAL_ALIGNMENT_CENTER:a=(s-n)/2}this._paddingLeft.isPixel?(this._currentMeasure.left+=this._paddingLeft.getValue(this._host),this._currentMeasure.width-=this._paddingLeft.getValue(this._host)):(this._currentMeasure.left+=o*this._paddingLeft.getValue(this._host),this._currentMeasure.width-=o*this._paddingLeft.getValue(this._host)),this._paddingRight.isPixel?this._currentMeasure.width-=this._paddingRight.getValue(this._host):this._currentMeasure.width-=o*this._paddingRight.getValue(this._host),this._paddingTop.isPixel?(this._currentMeasure.top+=this._paddingTop.getValue(this._host),this._currentMeasure.height-=this._paddingTop.getValue(this._host)):(this._currentMeasure.top+=s*this._paddingTop.getValue(this._host),this._currentMeasure.height-=s*this._paddingTop.getValue(this._host)),this._paddingBottom.isPixel?this._currentMeasure.height-=this._paddingBottom.getValue(this._host):this._currentMeasure.height-=s*this._paddingBottom.getValue(this._host),this._left.isPixel?this._currentMeasure.left+=this._left.getValue(this._host):this._currentMeasure.left+=o*this._left.getValue(this._host),this._top.isPixel?this._currentMeasure.top+=this._top.getValue(this._host):this._currentMeasure.top+=s*this._top.getValue(this._host),this._currentMeasure.left+=h,this._currentMeasure.top+=a},t.prototype._preMeasure=function(t,e){},t.prototype._additionalProcessing=function(t,e){},t.prototype._clipForChildren=function(t){},t.prototype._clip=function(e,i){if(e.beginPath(),t._ClipMeasure.copyFrom(this._currentMeasure),i){i.transformToRef(this._invertTransformMatrix,this._tmpMeasureA);var r=new l(0,0,0,0);r.left=Math.max(this._tmpMeasureA.left,this._currentMeasure.left),r.top=Math.max(this._tmpMeasureA.top,this._currentMeasure.top),r.width=Math.min(this._tmpMeasureA.left+this._tmpMeasureA.width,this._currentMeasure.left+this._currentMeasure.width)-r.left,r.height=Math.min(this._tmpMeasureA.top+this._tmpMeasureA.height,this._currentMeasure.top+this._currentMeasure.height)-r.top,t._ClipMeasure.copyFrom(r)}if(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY){var n=this.shadowOffsetX,o=this.shadowOffsetY,s=this.shadowBlur,h=Math.min(Math.min(n,0)-2*s,0),a=Math.max(Math.max(n,0)+2*s,0),u=Math.min(Math.min(o,0)-2*s,0),c=Math.max(Math.max(o,0)+2*s,0);e.rect(t._ClipMeasure.left+h,t._ClipMeasure.top+u,t._ClipMeasure.width+a-h,t._ClipMeasure.height+c-u)}else e.rect(t._ClipMeasure.left,t._ClipMeasure.top,t._ClipMeasure.width,t._ClipMeasure.height);e.clip()},t.prototype._render=function(t,e){return!this.isVisible||this.notRenderable||this._isClipped?(this._isDirty=!1,!1):(t.save(),this._applyStates(t),this._transform(t),this.clipContent&&this._clip(t,e),this.onBeforeDrawObservable.hasObservers()&&this.onBeforeDrawObservable.notifyObservers(this),this.useBitmapCache&&!this._wasDirty&&this._cacheData?t.putImageData(this._cacheData,this._currentMeasure.left,this._currentMeasure.top):this._draw(t,e),this.useBitmapCache&&this._wasDirty&&(this._cacheData=t.getImageData(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),this._renderHighlight(t),this.onAfterDrawObservable.hasObservers()&&this.onAfterDrawObservable.notifyObservers(this),t.restore(),!0)},t.prototype._draw=function(t,e){},t.prototype.contains=function(t,e){return this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y,!(t<this._currentMeasure.left)&&(!(t>this._currentMeasure.left+this._currentMeasure.width)&&(!(e<this._currentMeasure.top)&&(!(e>this._currentMeasure.top+this._currentMeasure.height)&&(this.isPointerBlocker&&(this._host._shouldBlockPointer=!0),!0))))},t.prototype._processPicking=function(t,e,i,r,n){return!!this._isEnabled&&(!(!this.isHitTestVisible||!this.isVisible||this._doNotRender)&&(!!this.contains(t,e)&&(this._processObservables(i,t,e,r,n),!0)))},t.prototype._onPointerMove=function(t,e,i){this.onPointerMoveObservable.notifyObservers(e,-1,t,this)&&null!=this.parent&&this.parent._onPointerMove(t,e,i)},t.prototype._onPointerEnter=function(t){return!!this._isEnabled&&(!(this._enterCount>0)&&(-1===this._enterCount&&(this._enterCount=0),this._enterCount++,this.onPointerEnterObservable.notifyObservers(this,-1,t,this)&&null!=this.parent&&this.parent._onPointerEnter(t),!0))},t.prototype._onPointerOut=function(t,e){if(void 0===e&&(e=!1),e||this._isEnabled&&t!==this){this._enterCount=0;var i=!0;t.isAscendant(this)||(i=this.onPointerOutObservable.notifyObservers(this,-1,t,this)),i&&null!=this.parent&&this.parent._onPointerOut(t,e)}},t.prototype._onPointerDown=function(t,e,i,r){return this._onPointerEnter(this),0===this._downCount&&(this._downCount++,this._downPointerIds[i]=!0,this.onPointerDownObservable.notifyObservers(new u(e,r),-1,t,this)&&null!=this.parent&&this.parent._onPointerDown(t,e,i,r),!0)},t.prototype._onPointerUp=function(t,e,i,r,n){if(this._isEnabled){this._downCount=0,delete this._downPointerIds[i];var o=n;n&&(this._enterCount>0||-1===this._enterCount)&&(o=this.onPointerClickObservable.notifyObservers(new u(e,r),-1,t,this)),this.onPointerUpObservable.notifyObservers(new u(e,r),-1,t,this)&&null!=this.parent&&this.parent._onPointerUp(t,e,i,r,o)}},t.prototype._forcePointerUp=function(t){if(void 0===t&&(t=null),null!==t)this._onPointerUp(this,h.Vector2.Zero(),t,0,!0);else for(var e in this._downPointerIds)this._onPointerUp(this,h.Vector2.Zero(),+e,0,!0)},t.prototype._processObservables=function(t,e,i,r,n){if(!this._isEnabled)return!1;if(this._dummyVector2.copyFromFloats(e,i),t===h.PointerEventTypes.POINTERMOVE){this._onPointerMove(this,this._dummyVector2,r);var o=this._host._lastControlOver[r];return o&&o!==this&&o._onPointerOut(this),o!==this&&this._onPointerEnter(this),this._host._lastControlOver[r]=this,!0}return t===h.PointerEventTypes.POINTERDOWN?(this._onPointerDown(this,this._dummyVector2,r,n),this._host._registerLastControlDown(this,r),this._host._lastPickedControl=this,!0):t===h.PointerEventTypes.POINTERUP&&(this._host._lastControlDown[r]&&this._host._lastControlDown[r]._onPointerUp(this,this._dummyVector2,r,n,!0),delete this._host._lastControlDown[r],!0)},t.prototype._prepareFont=function(){(this._font||this._fontSet)&&(this._style?this._font=this._style.fontStyle+" "+this._style.fontWeight+" "+this.fontSizeInPixels+"px "+this._style.fontFamily:this._font=this._fontStyle+" "+this._fontWeight+" "+this.fontSizeInPixels+"px "+this._fontFamily,this._fontOffset=t._GetFontOffset(this._font))},t.prototype.dispose=function(){(this.onDirtyObservable.clear(),this.onBeforeDrawObservable.clear(),this.onAfterDrawObservable.clear(),this.onPointerDownObservable.clear(),this.onPointerEnterObservable.clear(),this.onPointerMoveObservable.clear(),this.onPointerOutObservable.clear(),this.onPointerUpObservable.clear(),this.onPointerClickObservable.clear(),this._styleObserver&&this._style&&(this._style.onChangedObservable.remove(this._styleObserver),this._styleObserver=null),this.parent&&(this.parent.removeControl(this),this.parent=null),this._host)&&(this._host._linkedControls.indexOf(this)>-1&&this.linkWithMesh(null))},Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_LEFT",{get:function(){return t._HORIZONTAL_ALIGNMENT_LEFT},enumerable:!0,configurable:!0}),Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_RIGHT",{get:function(){return t._HORIZONTAL_ALIGNMENT_RIGHT},enumerable:!0,configurable:!0}),Object.defineProperty(t,"HORIZONTAL_ALIGNMENT_CENTER",{get:function(){return t._HORIZONTAL_ALIGNMENT_CENTER},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_TOP",{get:function(){return t._VERTICAL_ALIGNMENT_TOP},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_BOTTOM",{get:function(){return t._VERTICAL_ALIGNMENT_BOTTOM},enumerable:!0,configurable:!0}),Object.defineProperty(t,"VERTICAL_ALIGNMENT_CENTER",{get:function(){return t._VERTICAL_ALIGNMENT_CENTER},enumerable:!0,configurable:!0}),t._GetFontOffset=function(e){if(t._FontHeightSizes[e])return t._FontHeightSizes[e];var i=document.createElement("span");i.innerHTML="Hg",i.style.font=e;var r=document.createElement("div");r.style.display="inline-block",r.style.width="1px",r.style.height="0px",r.style.verticalAlign="bottom";var n=document.createElement("div");n.appendChild(i),n.appendChild(r),document.body.appendChild(n);var o=0,s=0;try{s=r.getBoundingClientRect().top-i.getBoundingClientRect().top,r.style.verticalAlign="baseline",o=r.getBoundingClientRect().top-i.getBoundingClientRect().top}finally{document.body.removeChild(n)}var h={ascent:o,height:s,descent:s-o};return t._FontHeightSizes[e]=h,h},t.drawEllipse=function(t,e,i,r,n){n.translate(t,e),n.scale(i,r),n.beginPath(),n.arc(0,0,1,0,2*Math.PI),n.closePath(),n.scale(1/i,1/r),n.translate(-t,-e)},t.AllowAlphaInheritance=!1,t._ClipMeasure=new l(0,0,0,0),t._HORIZONTAL_ALIGNMENT_LEFT=0,t._HORIZONTAL_ALIGNMENT_RIGHT=1,t._HORIZONTAL_ALIGNMENT_CENTER=2,t._VERTICAL_ALIGNMENT_TOP=0,t._VERTICAL_ALIGNMENT_BOTTOM=1,t._VERTICAL_ALIGNMENT_CENTER=2,t._FontHeightSizes={},t.AddHeader=function(){},t}(),d=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._children=new Array,i._measureForChildren=l.Empty(),i._background="",i._adaptWidthToChildren=!1,i._adaptHeightToChildren=!1,i}return n(e,t),Object.defineProperty(e.prototype,"adaptHeightToChildren",{get:function(){return this._adaptHeightToChildren},set:function(t){this._adaptHeightToChildren!==t&&(this._adaptHeightToChildren=t,t&&(this.height="100%"),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"adaptWidthToChildren",{get:function(){return this._adaptWidthToChildren},set:function(t){this._adaptWidthToChildren!==t&&(this._adaptWidthToChildren=t,t&&(this.width="100%"),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Container"},e.prototype._flagDescendantsAsMatrixDirty=function(){for(var t=0,e=this.children;t<e.length;t++){e[t]._markMatrixAsDirty()}},e.prototype.getChildByName=function(t){for(var e=0,i=this.children;e<i.length;e++){var r=i[e];if(r.name===t)return r}return null},e.prototype.getChildByType=function(t,e){for(var i=0,r=this.children;i<r.length;i++){var n=r[i];if(n.typeName===e)return n}return null},e.prototype.containsControl=function(t){return-1!==this.children.indexOf(t)},e.prototype.addControl=function(t){return t?-1!==this._children.indexOf(t)?this:(t._link(this._host),t._markAllAsDirty(),this._reOrderControl(t),this._markAsDirty(),this):this},e.prototype.clearControls=function(){for(var t=0,e=this.children.slice();t<e.length;t++){var i=e[t];this.removeControl(i)}return this},e.prototype.removeControl=function(t){var e=this._children.indexOf(t);return-1!==e&&(this._children.splice(e,1),t.parent=null),t.linkWithMesh(null),this._host&&this._host._cleanControlAfterRemoval(t),this._markAsDirty(),this},e.prototype._reOrderControl=function(t){this.removeControl(t);for(var e=!1,i=0;i<this._children.length;i++)if(this._children[i].zIndex>t.zIndex){this._children.splice(i,0,t),e=!0;break}e||this._children.push(t),t.parent=this,this._markAsDirty()},e.prototype._offsetLeft=function(e){t.prototype._offsetLeft.call(this,e);for(var i=0,r=this._children;i<r.length;i++){r[i]._offsetLeft(e)}},e.prototype._offsetTop=function(e){t.prototype._offsetTop.call(this,e);for(var i=0,r=this._children;i<r.length;i++){r[i]._offsetTop(e)}},e.prototype._markAllAsDirty=function(){t.prototype._markAllAsDirty.call(this);for(var e=0;e<this._children.length;e++)this._children[e]._markAllAsDirty()},e.prototype._localDraw=function(t){this._background&&(t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),t.fillStyle=this._background,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height),t.restore())},e.prototype._link=function(e){t.prototype._link.call(this,e);for(var i=0,r=this._children;i<r.length;i++){r[i]._link(e)}},e.prototype._beforeLayout=function(){},e.prototype._processMeasures=function(e,i){!this._isDirty&&this._cachedParentMeasure.isEqualsTo(e)||(t.prototype._processMeasures.call(this,e,i),this._evaluateClippingState(e))},e.prototype._layout=function(t,e){if(!this.isDirty&&(!this.isVisible||this.notRenderable))return!1;this._isDirty&&this._currentMeasure.transformToRef(this._transformMatrix,this._prevCurrentMeasureTransformedIntoGlobalSpace);var i=0;e.save(),this._applyStates(e),this._beforeLayout();do{var r=-1,n=-1;if(this._rebuildLayout=!1,this._processMeasures(t,e),!this._isClipped){for(var o=0,s=this._children;o<s.length;o++){var a=s[o];a._tempParentMeasure.copyFrom(this._measureForChildren),a._layout(this._measureForChildren,e)&&(this.adaptWidthToChildren&&a._width.isPixel&&(r=Math.max(r,a._currentMeasure.width)),this.adaptHeightToChildren&&a._height.isPixel&&(n=Math.max(n,a._currentMeasure.height)))}this.adaptWidthToChildren&&r>=0&&this.width!==r+"px"&&(this.width=r+"px",this._rebuildLayout=!0),this.adaptHeightToChildren&&n>=0&&this.height!==n+"px"&&(this.height=n+"px",this._rebuildLayout=!0),this._postMeasure()}i++}while(this._rebuildLayout&&i<3);return i>=3&&h.Logger.Error("Layout cycle detected in GUI (Container name="+this.name+", uniqueId="+this.uniqueId+")"),e.restore(),this._isDirty&&(this.invalidateRect(),this._isDirty=!1),!0},e.prototype._postMeasure=function(){},e.prototype._draw=function(t,e){this._localDraw(t),this.clipChildren&&this._clipForChildren(t);for(var i=0,r=this._children;i<r.length;i++){var n=r[i];e&&!n._intersectsRect(e)||n._render(t,e)}},e.prototype._getDescendants=function(t,e,i){if(void 0===e&&(e=!1),this.children)for(var r=0;r<this.children.length;r++){var n=this.children[r];i&&!i(n)||t.push(n),e||n._getDescendants(t,!1,i)}},e.prototype._processPicking=function(e,i,r,n,o){if(!this._isEnabled||!this.isVisible||this.notRenderable)return!1;if(!t.prototype.contains.call(this,e,i))return!1;for(var s=this._children.length-1;s>=0;s--){var h=this._children[s];if(h._processPicking(e,i,r,n,o))return h.hoverCursor&&this._host._changeCursor(h.hoverCursor),!0}return!!this.isHitTestVisible&&this._processObservables(r,e,i,n,o)},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.copyFrom(this._currentMeasure)},e.prototype.dispose=function(){t.prototype.dispose.call(this);for(var e=this.children.length-1;e>=0;e--)this.children[e].dispose()},e}(_),f=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thickness=1,i._cornerRadius=0,i}return n(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cornerRadius",{get:function(){return this._cornerRadius},set:function(t){t<0&&(t=0),this._cornerRadius!==t&&(this._cornerRadius=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Rectangle"},e.prototype._localDraw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._background&&(t.fillStyle=this._background,this._cornerRadius?(this._drawRoundedRect(t,this._thickness/2),t.fill()):t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),this._thickness&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,this._cornerRadius?(this._drawRoundedRect(t,this._thickness/2),t.stroke()):t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness)),t.restore()},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.width-=2*this._thickness,this._measureForChildren.height-=2*this._thickness,this._measureForChildren.left+=this._thickness,this._measureForChildren.top+=this._thickness},e.prototype._drawRoundedRect=function(t,e){void 0===e&&(e=0);var i=this._currentMeasure.left+e,r=this._currentMeasure.top+e,n=this._currentMeasure.width-2*e,o=this._currentMeasure.height-2*e,s=Math.min(o/2-2,Math.min(n/2-2,this._cornerRadius));t.beginPath(),t.moveTo(i+s,r),t.lineTo(i+n-s,r),t.quadraticCurveTo(i+n,r,i+n,r+s),t.lineTo(i+n,r+o-s),t.quadraticCurveTo(i+n,r+o,i+n-s,r+o),t.lineTo(i+s,r+o),t.quadraticCurveTo(i,r+o,i,r+o-s),t.lineTo(i,r+s),t.quadraticCurveTo(i,r,i+s,r),t.closePath()},e.prototype._clipForChildren=function(t){this._cornerRadius&&(this._drawRoundedRect(t,this._thickness),t.clip())},e}(d);!function(t){t[t.Clip=0]="Clip",t[t.WordWrap=1]="WordWrap",t[t.Ellipsis=2]="Ellipsis"}(s||(s={}));var p=function(t){function e(e,i){void 0===i&&(i="");var r=t.call(this,e)||this;return r.name=e,r._text="",r._textWrapping=s.Clip,r._textHorizontalAlignment=_.HORIZONTAL_ALIGNMENT_CENTER,r._textVerticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,r._resizeToFit=!1,r._lineSpacing=new a(0),r._outlineWidth=0,r._outlineColor="white",r.onTextChangedObservable=new h.Observable,r.onLinesReadyObservable=new h.Observable,r.text=i,r}return n(e,t),Object.defineProperty(e.prototype,"lines",{get:function(){return this._lines},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resizeToFit",{get:function(){return this._resizeToFit},set:function(t){this._resizeToFit!==t&&(this._resizeToFit=t,this._resizeToFit&&(this._width.ignoreAdaptiveScaling=!0,this._height.ignoreAdaptiveScaling=!0),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textWrapping",{get:function(){return this._textWrapping},set:function(t){this._textWrapping!==t&&(this._textWrapping=+t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text!==t&&(this._text=t,this._markAsDirty(),this.onTextChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textHorizontalAlignment",{get:function(){return this._textHorizontalAlignment},set:function(t){this._textHorizontalAlignment!==t&&(this._textHorizontalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textVerticalAlignment",{get:function(){return this._textVerticalAlignment},set:function(t){this._textVerticalAlignment!==t&&(this._textVerticalAlignment=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lineSpacing",{get:function(){return this._lineSpacing.toString(this._host)},set:function(t){this._lineSpacing.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outlineWidth",{get:function(){return this._outlineWidth},set:function(t){this._outlineWidth!==t&&(this._outlineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"outlineColor",{get:function(){return this._outlineColor},set:function(t){this._outlineColor!==t&&(this._outlineColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"TextBlock"},e.prototype._processMeasures=function(e,i){this._fontOffset||(this._fontOffset=_._GetFontOffset(i.font)),t.prototype._processMeasures.call(this,e,i),this._lines=this._breakLines(this._currentMeasure.width,i),this.onLinesReadyObservable.notifyObservers(this);for(var r=0,n=0;n<this._lines.length;n++){var o=this._lines[n];o.width>r&&(r=o.width)}if(this._resizeToFit){if(this._textWrapping===s.Clip){var h=this.paddingLeftInPixels+this.paddingRightInPixels+r;h!==this._width.internalValue&&(this._width.updateInPlace(h,a.UNITMODE_PIXEL),this._rebuildLayout=!0)}var l=this.paddingTopInPixels+this.paddingBottomInPixels+this._fontOffset.height*this._lines.length;l!==this._height.internalValue&&(this._height.updateInPlace(l,a.UNITMODE_PIXEL),this._rebuildLayout=!0)}},e.prototype._drawText=function(t,e,i,r){var n=this._currentMeasure.width,o=0;switch(this._textHorizontalAlignment){case _.HORIZONTAL_ALIGNMENT_LEFT:o=0;break;case _.HORIZONTAL_ALIGNMENT_RIGHT:o=n-e;break;case _.HORIZONTAL_ALIGNMENT_CENTER:o=(n-e)/2}(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(r.shadowColor=this.shadowColor,r.shadowBlur=this.shadowBlur,r.shadowOffsetX=this.shadowOffsetX,r.shadowOffsetY=this.shadowOffsetY),this.outlineWidth&&r.strokeText(t,this._currentMeasure.left+o,i),r.fillText(t,this._currentMeasure.left+o,i)},e.prototype._draw=function(t){t.save(),this._applyStates(t),this._renderLines(t),t.restore()},e.prototype._applyStates=function(e){t.prototype._applyStates.call(this,e),this.outlineWidth&&(e.lineWidth=this.outlineWidth,e.strokeStyle=this.outlineColor)},e.prototype._breakLines=function(t,e){var i=[],r=this.text.split("\n");if(this._textWrapping===s.Ellipsis)for(var n=0,o=r;n<o.length;n++){var h=o[n];i.push(this._parseLineEllipsis(h,t,e))}else if(this._textWrapping===s.WordWrap)for(var a=0,l=r;a<l.length;a++){h=l[a];i.push.apply(i,this._parseLineWordWrap(h,t,e))}else for(var u=0,c=r;u<c.length;u++){h=c[u];i.push(this._parseLine(h,e))}return i},e.prototype._parseLine=function(t,e){return void 0===t&&(t=""),{text:t,width:e.measureText(t).width}},e.prototype._parseLineEllipsis=function(t,e,i){void 0===t&&(t="");var r=i.measureText(t).width;for(r>e&&(t+="…");t.length>2&&r>e;)t=t.slice(0,-2)+"…",r=i.measureText(t).width;return{text:t,width:r}},e.prototype._parseLineWordWrap=function(t,e,i){void 0===t&&(t="");for(var r=[],n=t.split(" "),o=0,s=0;s<n.length;s++){var h=s>0?t+" "+n[s]:n[0],a=i.measureText(h).width;a>e&&s>0?(r.push({text:t,width:o}),t=n[s],o=i.measureText(t).width):(o=a,t=h)}return r.push({text:t,width:o}),r},e.prototype._renderLines=function(t){var e=this._currentMeasure.height,i=0;switch(this._textVerticalAlignment){case _.VERTICAL_ALIGNMENT_TOP:i=this._fontOffset.ascent;break;case _.VERTICAL_ALIGNMENT_BOTTOM:i=e-this._fontOffset.height*(this._lines.length-1)-this._fontOffset.descent;break;case _.VERTICAL_ALIGNMENT_CENTER:i=this._fontOffset.ascent+(e-this._fontOffset.height*this._lines.length)/2}i+=this._currentMeasure.top;for(var r=0;r<this._lines.length;r++){var n=this._lines[r];0!==r&&0!==this._lineSpacing.internalValue&&(this._lineSpacing.isPixel?i+=this._lineSpacing.getValue(this._host):i+=this._lineSpacing.getValue(this._host)*this._height.getValueInPixel(this._host,this._cachedParentMeasure.height)),this._drawText(n.text,n.width,i,t),i+=this._fontOffset.height}},e.prototype.computeExpectedHeight=function(){if(this.text&&this.widthInPixels){var t=document.createElement("canvas").getContext("2d");if(t){this._applyStates(t),this._fontOffset||(this._fontOffset=_._GetFontOffset(t.font));var e=this._lines?this._lines:this._breakLines(this.widthInPixels-this.paddingLeftInPixels-this.paddingRightInPixels,t);return this.paddingTopInPixels+this.paddingBottomInPixels+this._fontOffset.height*e.length}}return 0},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onTextChangedObservable.clear()},e}(_),g=function(t){function e(i,r){void 0===r&&(r=null);var n=t.call(this,i)||this;return n.name=i,n._loaded=!1,n._stretch=e.STRETCH_FILL,n._autoScale=!1,n._sourceLeft=0,n._sourceTop=0,n._sourceWidth=0,n._sourceHeight=0,n._cellWidth=0,n._cellHeight=0,n._cellId=-1,n._populateNinePatchSlicesFromImage=!1,n.onImageLoadedObservable=new h.Observable,n.source=r,n}return n(e,t),Object.defineProperty(e.prototype,"isLoaded",{get:function(){return this._loaded},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"populateNinePatchSlicesFromImage",{get:function(){return this._populateNinePatchSlicesFromImage},set:function(t){this._populateNinePatchSlicesFromImage!==t&&(this._populateNinePatchSlicesFromImage=t,this._populateNinePatchSlicesFromImage&&this._loaded&&this._extractNinePatchSliceDataFromImage())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"detectPointerOnOpaqueOnly",{get:function(){return this._detectPointerOnOpaqueOnly},set:function(t){this._detectPointerOnOpaqueOnly!==t&&(this._detectPointerOnOpaqueOnly=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sliceLeft",{get:function(){return this._sliceLeft},set:function(t){this._sliceLeft!==t&&(this._sliceLeft=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sliceRight",{get:function(){return this._sliceRight},set:function(t){this._sliceRight!==t&&(this._sliceRight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sliceTop",{get:function(){return this._sliceTop},set:function(t){this._sliceTop!==t&&(this._sliceTop=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sliceBottom",{get:function(){return this._sliceBottom},set:function(t){this._sliceBottom!==t&&(this._sliceBottom=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceLeft",{get:function(){return this._sourceLeft},set:function(t){this._sourceLeft!==t&&(this._sourceLeft=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceTop",{get:function(){return this._sourceTop},set:function(t){this._sourceTop!==t&&(this._sourceTop=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceWidth",{get:function(){return this._sourceWidth},set:function(t){this._sourceWidth!==t&&(this._sourceWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceHeight",{get:function(){return this._sourceHeight},set:function(t){this._sourceHeight!==t&&(this._sourceHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoScale",{get:function(){return this._autoScale},set:function(t){this._autoScale!==t&&(this._autoScale=t,t&&this._loaded&&this.synchronizeSizeWithContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stretch",{get:function(){return this._stretch},set:function(t){this._stretch!==t&&(this._stretch=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"domImage",{get:function(){return this._domImage},set:function(t){var e=this;this._domImage=t,this._loaded=!1,this._domImage.width?this._onImageLoaded():this._domImage.onload=function(){e._onImageLoaded()}},enumerable:!0,configurable:!0}),e.prototype._onImageLoaded=function(){this._imageWidth=this._domImage.width,this._imageHeight=this._domImage.height,this._loaded=!0,this._populateNinePatchSlicesFromImage&&this._extractNinePatchSliceDataFromImage(),this._autoScale&&this.synchronizeSizeWithContent(),this.onImageLoadedObservable.notifyObservers(this),this._markAsDirty()},e.prototype._extractNinePatchSliceDataFromImage=function(){e._WorkingCanvas||(e._WorkingCanvas=document.createElement("canvas"));var t=e._WorkingCanvas,i=t.getContext("2d"),r=this._domImage.width,n=this._domImage.height;t.width=r,t.height=n,i.drawImage(this._domImage,0,0,r,n);var o=i.getImageData(0,0,r,n);this._sliceLeft=-1,this._sliceRight=-1;for(var s=0;s<r;s++){if((a=o.data[4*s+3])>127&&-1===this._sliceLeft)this._sliceLeft=s;else if(a<127&&this._sliceLeft>-1){this._sliceRight=s;break}}this._sliceTop=-1,this._sliceBottom=-1;for(var h=0;h<n;h++){var a;if((a=o.data[h*r*4+3])>127&&-1===this._sliceTop)this._sliceTop=h;else if(a<127&&this._sliceTop>-1){this._sliceBottom=h;break}}},Object.defineProperty(e.prototype,"source",{set:function(t){var e=this;this._source!==t&&(this._loaded=!1,this._source=t,this._domImage=document.createElement("img"),this._domImage.onload=function(){e._onImageLoaded()},t&&(h.Tools.SetCorsBehavior(t,this._domImage),this._domImage.src=t))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellWidth",{get:function(){return this._cellWidth},set:function(t){this._cellWidth!==t&&(this._cellWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellHeight",{get:function(){return this._cellHeight},set:function(t){this._cellHeight!==t&&(this._cellHeight=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellId",{get:function(){return this._cellId},set:function(t){this._cellId!==t&&(this._cellId=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype.contains=function(i,r){if(!t.prototype.contains.call(this,i,r))return!1;if(!this._detectPointerOnOpaqueOnly||!e._WorkingCanvas)return!0;var n=e._WorkingCanvas.getContext("2d"),o=0|this._currentMeasure.width,s=0|this._currentMeasure.height;return n.getImageData(0,0,o,s).data[4*((i=i-this._currentMeasure.left|0)+(r=r-this._currentMeasure.top|0)*this._currentMeasure.width)+3]>0},e.prototype._getTypeName=function(){return"Image"},e.prototype.synchronizeSizeWithContent=function(){this._loaded&&(this.width=this._domImage.width+"px",this.height=this._domImage.height+"px")},e.prototype._processMeasures=function(i,r){if(this._loaded)switch(this._stretch){case e.STRETCH_NONE:case e.STRETCH_FILL:case e.STRETCH_UNIFORM:case e.STRETCH_NINE_PATCH:break;case e.STRETCH_EXTEND:this._autoScale&&this.synchronizeSizeWithContent(),this.parent&&this.parent.parent&&(this.parent.adaptWidthToChildren=!0,this.parent.adaptHeightToChildren=!0)}t.prototype._processMeasures.call(this,i,r)},e.prototype._prepareWorkingCanvasForOpaqueDetection=function(){if(this._detectPointerOnOpaqueOnly){e._WorkingCanvas||(e._WorkingCanvas=document.createElement("canvas"));var t=e._WorkingCanvas,i=this._currentMeasure.width,r=this._currentMeasure.height,n=t.getContext("2d");t.width=i,t.height=r,n.clearRect(0,0,i,r)}},e.prototype._drawImage=function(t,i,r,n,o,s,h,a,l){(t.drawImage(this._domImage,i,r,n,o,s,h,a,l),this._detectPointerOnOpaqueOnly)&&(t=e._WorkingCanvas.getContext("2d")).drawImage(this._domImage,i,r,n,o,s-this._currentMeasure.left,h-this._currentMeasure.top,a,l)},e.prototype._draw=function(t){var i,r,n,o;if(t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),-1==this.cellId)i=this._sourceLeft,r=this._sourceTop,n=this._sourceWidth?this._sourceWidth:this._imageWidth,o=this._sourceHeight?this._sourceHeight:this._imageHeight;else{var s=this._domImage.naturalWidth/this.cellWidth,h=this.cellId/s>>0,a=this.cellId%s;i=this.cellWidth*a,r=this.cellHeight*h,n=this.cellWidth,o=this.cellHeight}if(this._prepareWorkingCanvasForOpaqueDetection(),this._applyStates(t),this._loaded)switch(this._stretch){case e.STRETCH_NONE:case e.STRETCH_FILL:this._drawImage(t,i,r,n,o,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height);break;case e.STRETCH_UNIFORM:var l=this._currentMeasure.width/n,u=this._currentMeasure.height/o,c=Math.min(l,u),_=(this._currentMeasure.width-n*c)/2,d=(this._currentMeasure.height-o*c)/2;this._drawImage(t,i,r,n,o,this._currentMeasure.left+_,this._currentMeasure.top+d,n*c,o*c);break;case e.STRETCH_EXTEND:this._drawImage(t,i,r,n,o,this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height);break;case e.STRETCH_NINE_PATCH:this._renderNinePatch(t)}t.restore()},e.prototype._renderCornerPatch=function(t,e,i,r,n,o,s){this._drawImage(t,e,i,r,n,this._currentMeasure.left+o,this._currentMeasure.top+s,r,n)},e.prototype._renderNinePatch=function(t){var e=this._imageHeight,i=this._sliceLeft,r=this._sliceTop,n=this._imageHeight-this._sliceBottom,o=this._imageWidth-this._sliceRight,s=0,h=0;this._populateNinePatchSlicesFromImage&&(s=1,h=1,e-=2,i-=1,r-=1,n-=1,o-=1);var a=this._sliceRight-this._sliceLeft+1,l=this._currentMeasure.width-o-this.sliceLeft+1,u=this._currentMeasure.height-e+this._sliceBottom;this._renderCornerPatch(t,s,h,i,r,0,0),this._renderCornerPatch(t,s,this._sliceBottom,i,e-this._sliceBottom,0,u),this._renderCornerPatch(t,this._sliceRight,h,o,r,this._currentMeasure.width-o,0),this._renderCornerPatch(t,this._sliceRight,this._sliceBottom,o,e-this._sliceBottom,this._currentMeasure.width-o,u),this._drawImage(t,this._sliceLeft,this._sliceTop,a,this._sliceBottom-this._sliceTop+1,this._currentMeasure.left+i,this._currentMeasure.top+r,l,u-r+1),this._drawImage(t,s,this._sliceTop,i,this._sliceBottom-this._sliceTop,this._currentMeasure.left,this._currentMeasure.top+r,i,u-r),this._drawImage(t,this._sliceRight,this._sliceTop,i,this._sliceBottom-this._sliceTop,this._currentMeasure.left+this._currentMeasure.width-o,this._currentMeasure.top+r,i,u-r),this._drawImage(t,this._sliceLeft,h,a,r,this._currentMeasure.left+i,this._currentMeasure.top,l,r),this._drawImage(t,this._sliceLeft,this._sliceBottom,a,n,this._currentMeasure.left+i,this._currentMeasure.top+u,l,n)},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onImageLoadedObservable.clear()},e._WorkingCanvas=null,e.STRETCH_NONE=0,e.STRETCH_FILL=1,e.STRETCH_UNIFORM=2,e.STRETCH_EXTEND=3,e.STRETCH_NINE_PATCH=4,e}(_),b=function(t){function e(e){var i=t.call(this,e)||this;i.name=e,i.thickness=1,i.isPointerBlocker=!0;var r=null;return i.pointerEnterAnimation=function(){r=i.alpha,i.alpha-=.1},i.pointerOutAnimation=function(){null!==r&&(i.alpha=r)},i.pointerDownAnimation=function(){i.scaleX-=.05,i.scaleY-=.05},i.pointerUpAnimation=function(){i.scaleX+=.05,i.scaleY+=.05},i}return n(e,t),Object.defineProperty(e.prototype,"image",{get:function(){return this._image},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textBlock",{get:function(){return this._textBlock},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Button"},e.prototype._processPicking=function(e,i,r,n,o){return!(!(this._isEnabled&&this.isHitTestVisible&&this.isVisible)||this.notRenderable)&&(!!t.prototype.contains.call(this,e,i)&&(this._processObservables(r,e,i,n,o),!0))},e.prototype._onPointerEnter=function(e){return!!t.prototype._onPointerEnter.call(this,e)&&(this.pointerEnterAnimation&&this.pointerEnterAnimation(),!0)},e.prototype._onPointerOut=function(e,i){void 0===i&&(i=!1),this.pointerOutAnimation&&this.pointerOutAnimation(),t.prototype._onPointerOut.call(this,e,i)},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this.pointerDownAnimation&&this.pointerDownAnimation(),!0)},e.prototype._onPointerUp=function(e,i,r,n,o){this.pointerUpAnimation&&this.pointerUpAnimation(),t.prototype._onPointerUp.call(this,e,i,r,n,o)},e.CreateImageButton=function(t,i,r){var n=new e(t),o=new p(t+"_button",i);o.textWrapping=!0,o.textHorizontalAlignment=_.HORIZONTAL_ALIGNMENT_CENTER,o.paddingLeft="20%",n.addControl(o);var s=new g(t+"_icon",r);return s.width="20%",s.stretch=g.STRETCH_UNIFORM,s.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,n.addControl(s),n._image=s,n._textBlock=o,n},e.CreateImageOnlyButton=function(t,i){var r=new e(t),n=new g(t+"_icon",i);return n.stretch=g.STRETCH_FILL,n.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,r.addControl(n),r._image=n,r},e.CreateSimpleButton=function(t,i){var r=new e(t),n=new p(t+"_button",i);return n.textWrapping=!0,n.textHorizontalAlignment=_.HORIZONTAL_ALIGNMENT_CENTER,r.addControl(n),r._textBlock=n,r},e.CreateImageWithCenterTextButton=function(t,i,r){var n=new e(t),o=new g(t+"_icon",r);o.stretch=g.STRETCH_FILL,n.addControl(o);var s=new p(t+"_button",i);return s.textWrapping=!0,s.textHorizontalAlignment=_.HORIZONTAL_ALIGNMENT_CENTER,n.addControl(s),n._image=o,n._textBlock=s,n},e}(f),m=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isVertical=!0,i._manualWidth=!1,i._manualHeight=!1,i._doNotTrackManualChanges=!1,i}return n(e,t),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){this._isVertical!==t&&(this._isVertical=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._doNotTrackManualChanges||(this._manualWidth=!0),this._width.toString(this._host)!==t&&this._width.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height.toString(this._host)},set:function(t){this._doNotTrackManualChanges||(this._manualHeight=!0),this._height.toString(this._host)!==t&&this._height.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"StackPanel"},e.prototype._preMeasure=function(e,i){for(var r=0,n=this._children;r<n.length;r++){var o=n[r];this._isVertical?o.verticalAlignment=_.VERTICAL_ALIGNMENT_TOP:o.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT}t.prototype._preMeasure.call(this,e,i)},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.copyFrom(e),this._measureForChildren.left=this._currentMeasure.left,this._measureForChildren.top=this._currentMeasure.top,this.isVertical&&!this._manualWidth||(this._measureForChildren.width=this._currentMeasure.width),(this.isVertical||this._manualHeight)&&(this._measureForChildren.height=this._currentMeasure.height)},e.prototype._postMeasure=function(){for(var e=0,i=0,r=0,n=this._children;r<n.length;r++){var o=n[r];o.isVisible&&!o.notRenderable&&(this._isVertical?(o.top!==i+"px"&&(o.top=i+"px",this._rebuildLayout=!0,o._top.ignoreAdaptiveScaling=!0),o._height.isPercentage?h.Tools.Warn("Control (Name:"+o.name+", UniqueId:"+o.uniqueId+") is using height in percentage mode inside a vertical StackPanel"):i+=o._currentMeasure.height+o.paddingTopInPixels+o.paddingBottomInPixels):(o.left!==e+"px"&&(o.left=e+"px",this._rebuildLayout=!0,o._left.ignoreAdaptiveScaling=!0),o._width.isPercentage?h.Tools.Warn("Control (Name:"+o.name+", UniqueId:"+o.uniqueId+") is using width in percentage mode inside a horizontal StackPanel"):e+=o._currentMeasure.width+o.paddingLeftInPixels+o.paddingRightInPixels))}this._doNotTrackManualChanges=!0;var s=!1,a=!1;if(!this._manualHeight&&this._isVertical){var l=this.height;this.height=i+"px",a=l!==this.height||!this._height.ignoreAdaptiveScaling}if(!this._manualWidth&&!this._isVertical){var u=this.width;this.width=e+"px",s=u!==this.width||!this._width.ignoreAdaptiveScaling}a&&(this._height.ignoreAdaptiveScaling=!0),s&&(this._width.ignoreAdaptiveScaling=!0),this._doNotTrackManualChanges=!1,(s||a)&&(this._rebuildLayout=!0),t.prototype._postMeasure.call(this)},e}(d),y=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isChecked=!1,i._background="black",i._checkSizeRatio=.8,i._thickness=1,i.onIsCheckedChangedObservable=new h.Observable,i.isPointerBlocker=!0,i}return n(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checkSizeRatio",{get:function(){return this._checkSizeRatio},set:function(t){t=Math.max(Math.min(1,t),0),this._checkSizeRatio!==t&&(this._checkSizeRatio=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isChecked",{get:function(){return this._isChecked},set:function(t){this._isChecked!==t&&(this._isChecked=t,this._markAsDirty(),this.onIsCheckedChangedObservable.notifyObservers(t))},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Checkbox"},e.prototype._draw=function(t){t.save(),this._applyStates(t);var e=this._currentMeasure.width-this._thickness,i=this._currentMeasure.height-this._thickness;if((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fillRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,e,i),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._isChecked){t.fillStyle=this._isEnabled?this.color:this._disabledColor;var r=e*this._checkSizeRatio,n=i*this._checkSizeRatio;t.fillRect(this._currentMeasure.left+this._thickness/2+(e-r)/2,this._currentMeasure.top+this._thickness/2+(i-n)/2,r,n)}t.strokeStyle=this.color,t.lineWidth=this._thickness,t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,e,i),t.restore()},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this.isChecked=!this.isChecked,!0)},e.AddCheckBoxWithHeader=function(t,i){var r=new m;r.isVertical=!1,r.height="30px";var n=new e;n.width="20px",n.height="20px",n.isChecked=!0,n.color="green",n.onIsCheckedChangedObservable.add(i),r.addControl(n);var o=new p;return o.text=t,o.width="180px",o.paddingLeft="5px",o.textHorizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,o.color="white",r.addControl(o),r},e}(_),v=function(t){function e(e,i){void 0===i&&(i="");var r=t.call(this,e)||this;return r.name=e,r._text="",r._placeholderText="",r._background="#222222",r._focusedBackground="#000000",r._focusedColor="white",r._placeholderColor="gray",r._thickness=1,r._margin=new a(10,a.UNITMODE_PIXEL),r._autoStretchWidth=!0,r._maxWidth=new a(1,a.UNITMODE_PERCENTAGE,!1),r._isFocused=!1,r._blinkIsEven=!1,r._cursorOffset=0,r._deadKey=!1,r._addKey=!0,r._currentKey="",r._isTextHighlightOn=!1,r._textHighlightColor="#d5e0ff",r._highligherOpacity=.4,r._highlightedText="",r._startHighlightIndex=0,r._endHighlightIndex=0,r._cursorIndex=-1,r._onFocusSelectAll=!1,r._isPointerDown=!1,r.promptMessage="Please enter text:",r.onTextChangedObservable=new h.Observable,r.onBeforeKeyAddObservable=new h.Observable,r.onFocusObservable=new h.Observable,r.onBlurObservable=new h.Observable,r.onTextHighlightObservable=new h.Observable,r.onTextCopyObservable=new h.Observable,r.onTextCutObservable=new h.Observable,r.onTextPasteObservable=new h.Observable,r.onKeyboardEventProcessedObservable=new h.Observable,r.text=i,r.isPointerBlocker=!0,r}return n(e,t),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth.toString(this._host)},set:function(t){this._maxWidth.toString(this._host)!==t&&this._maxWidth.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxWidthInPixels",{get:function(){return this._maxWidth.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highligherOpacity",{get:function(){return this._highligherOpacity},set:function(t){this._highligherOpacity!==t&&(this._highligherOpacity=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onFocusSelectAll",{get:function(){return this._onFocusSelectAll},set:function(t){this._onFocusSelectAll!==t&&(this._onFocusSelectAll=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textHighlightColor",{get:function(){return this._textHighlightColor},set:function(t){this._textHighlightColor!==t&&(this._textHighlightColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"margin",{get:function(){return this._margin.toString(this._host)},set:function(t){this._margin.toString(this._host)!==t&&this._margin.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"marginInPixels",{get:function(){return this._margin.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoStretchWidth",{get:function(){return this._autoStretchWidth},set:function(t){this._autoStretchWidth!==t&&(this._autoStretchWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusedBackground",{get:function(){return this._focusedBackground},set:function(t){this._focusedBackground!==t&&(this._focusedBackground=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusedColor",{get:function(){return this._focusedColor},set:function(t){this._focusedColor!==t&&(this._focusedColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderColor",{get:function(){return this._placeholderColor},set:function(t){this._placeholderColor!==t&&(this._placeholderColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderText",{get:function(){return this._placeholderText},set:function(t){this._placeholderText!==t&&(this._placeholderText=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"deadKey",{get:function(){return this._deadKey},set:function(t){this._deadKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightedText",{get:function(){return this._highlightedText},set:function(t){this._highlightedText!==t&&(this._highlightedText=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"addKey",{get:function(){return this._addKey},set:function(t){this._addKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentKey",{get:function(){return this._currentKey},set:function(t){this._currentKey=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){var e=t.toString();this._text!==e&&(this._text=e,this._markAsDirty(),this.onTextChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._width.toString(this._host)!==t&&(this._width.fromString(t)&&this._markAsDirty(),this.autoStretchWidth=!1)},enumerable:!0,configurable:!0}),e.prototype.onBlur=function(){this._isFocused=!1,this._scrollLeft=null,this._cursorOffset=0,clearTimeout(this._blinkTimeout),this._markAsDirty(),this.onBlurObservable.notifyObservers(this),this._host.unRegisterClipboardEvents(),this._onClipboardObserver&&this._host.onClipboardObservable.remove(this._onClipboardObserver);var t=this._host.getScene();this._onPointerDblTapObserver&&t&&t.onPointerObservable.remove(this._onPointerDblTapObserver)},e.prototype.onFocus=function(){var t=this;if(this._isEnabled){if(this._scrollLeft=null,this._isFocused=!0,this._blinkIsEven=!1,this._cursorOffset=0,this._markAsDirty(),this.onFocusObservable.notifyObservers(this),-1!==navigator.userAgent.indexOf("Mobile")){var e=prompt(this.promptMessage);return null!==e&&(this.text=e),void(this._host.focusedControl=null)}this._host.registerClipboardEvents(),this._onClipboardObserver=this._host.onClipboardObservable.add(function(e){switch(e.type){case h.ClipboardEventTypes.COPY:t._onCopyText(e.event),t.onTextCopyObservable.notifyObservers(t);break;case h.ClipboardEventTypes.CUT:t._onCutText(e.event),t.onTextCutObservable.notifyObservers(t);break;case h.ClipboardEventTypes.PASTE:t._onPasteText(e.event),t.onTextPasteObservable.notifyObservers(t);break;default:return}});var i=this._host.getScene();i&&(this._onPointerDblTapObserver=i.onPointerObservable.add(function(e){t._isFocused&&e.type===h.PointerEventTypes.POINTERDOUBLETAP&&t._processDblClick(e)})),this._onFocusSelectAll&&this._selectAllText()}},e.prototype._getTypeName=function(){return"InputText"},e.prototype.keepsFocusWith=function(){return this._connectedVirtualKeyboard?[this._connectedVirtualKeyboard]:null},e.prototype.processKey=function(t,e,i){if(!i||!i.ctrlKey&&!i.metaKey||67!==t&&86!==t&&88!==t){if(i&&(i.ctrlKey||i.metaKey)&&65===t)return this._selectAllText(),void i.preventDefault();switch(t){case 32:e=" ";break;case 191:i&&i.preventDefault();break;case 8:if(this._text&&this._text.length>0){if(this._isTextHighlightOn)return this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex),this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex,this._blinkIsEven=!1,void(i&&i.preventDefault());if(0===this._cursorOffset)this.text=this._text.substr(0,this._text.length-1);else(n=this._text.length-this._cursorOffset)>0&&(this.text=this._text.slice(0,n-1)+this._text.slice(n))}return void(i&&i.preventDefault());case 46:if(this._isTextHighlightOn){this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex);for(var r=this._endHighlightIndex-this._startHighlightIndex;r>0&&this._cursorOffset>0;)this._cursorOffset--;return this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex,void(i&&i.preventDefault())}if(this._text&&this._text.length>0&&this._cursorOffset>0){var n=this._text.length-this._cursorOffset;this.text=this._text.slice(0,n)+this._text.slice(n+1),this._cursorOffset--}return void(i&&i.preventDefault());case 13:return this._host.focusedControl=null,void(this._isTextHighlightOn=!1);case 35:return this._cursorOffset=0,this._blinkIsEven=!1,this._isTextHighlightOn=!1,void this._markAsDirty();case 36:return this._cursorOffset=this._text.length,this._blinkIsEven=!1,this._isTextHighlightOn=!1,void this._markAsDirty();case 37:if(this._cursorOffset++,this._cursorOffset>this._text.length&&(this._cursorOffset=this._text.length),i&&i.shiftKey){if(this._blinkIsEven=!1,i.ctrlKey||i.metaKey){if(!this._isTextHighlightOn){if(this._text.length===this._cursorOffset)return;this._endHighlightIndex=this._text.length-this._cursorOffset+1}return this._startHighlightIndex=0,this._cursorIndex=this._text.length-this._endHighlightIndex,this._cursorOffset=this._text.length,this._isTextHighlightOn=!0,void this._markAsDirty()}return this._isTextHighlightOn?-1===this._cursorIndex&&(this._cursorIndex=this._text.length-this._endHighlightIndex,this._cursorOffset=0===this._startHighlightIndex?this._text.length:this._text.length-this._startHighlightIndex+1):(this._isTextHighlightOn=!0,this._cursorIndex=this._cursorOffset>=this._text.length?this._text.length:this._cursorOffset-1),this._cursorIndex<this._cursorOffset?(this._endHighlightIndex=this._text.length-this._cursorIndex,this._startHighlightIndex=this._text.length-this._cursorOffset):this._cursorIndex>this._cursorOffset?(this._endHighlightIndex=this._text.length-this._cursorOffset,this._startHighlightIndex=this._text.length-this._cursorIndex):this._isTextHighlightOn=!1,void this._markAsDirty()}return this._isTextHighlightOn&&(this._cursorOffset=this._text.length-this._startHighlightIndex,this._isTextHighlightOn=!1),i&&(i.ctrlKey||i.metaKey)&&(this._cursorOffset=this.text.length,i.preventDefault()),this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._cursorIndex=-1,void this._markAsDirty();case 39:if(this._cursorOffset--,this._cursorOffset<0&&(this._cursorOffset=0),i&&i.shiftKey){if(this._blinkIsEven=!1,i.ctrlKey||i.metaKey){if(!this._isTextHighlightOn){if(0===this._cursorOffset)return;this._startHighlightIndex=this._text.length-this._cursorOffset-1}return this._endHighlightIndex=this._text.length,this._isTextHighlightOn=!0,this._cursorIndex=this._text.length-this._startHighlightIndex,this._cursorOffset=0,void this._markAsDirty()}return this._isTextHighlightOn?-1===this._cursorIndex&&(this._cursorIndex=this._text.length-this._startHighlightIndex,this._cursorOffset=this._text.length===this._endHighlightIndex?0:this._text.length-this._endHighlightIndex-1):(this._isTextHighlightOn=!0,this._cursorIndex=this._cursorOffset<=0?0:this._cursorOffset+1),this._cursorIndex<this._cursorOffset?(this._endHighlightIndex=this._text.length-this._cursorIndex,this._startHighlightIndex=this._text.length-this._cursorOffset):this._cursorIndex>this._cursorOffset?(this._endHighlightIndex=this._text.length-this._cursorOffset,this._startHighlightIndex=this._text.length-this._cursorIndex):this._isTextHighlightOn=!1,void this._markAsDirty()}return this._isTextHighlightOn&&(this._cursorOffset=this._text.length-this._endHighlightIndex,this._isTextHighlightOn=!1),i&&(i.ctrlKey||i.metaKey)&&(this._cursorOffset=0,i.preventDefault()),this._blinkIsEven=!1,this._isTextHighlightOn=!1,this._cursorIndex=-1,void this._markAsDirty();case 222:i&&i.preventDefault(),this._cursorIndex=-1,this.deadKey=!0}if(e&&(-1===t||32===t||t>47&&t<64||t>64&&t<91||t>159&&t<193||t>218&&t<223||t>95&&t<112)&&(this._currentKey=e,this.onBeforeKeyAddObservable.notifyObservers(this),e=this._currentKey,this._addKey))if(this._isTextHighlightOn)this.text=this._text.slice(0,this._startHighlightIndex)+e+this._text.slice(this._endHighlightIndex),this._cursorOffset=this.text.length-(this._startHighlightIndex+1),this._isTextHighlightOn=!1,this._blinkIsEven=!1,this._markAsDirty();else if(0===this._cursorOffset)this.text+=e;else{var o=this._text.length-this._cursorOffset;this.text=this._text.slice(0,o)+e+this._text.slice(o)}}},e.prototype._updateValueFromCursorIndex=function(t){if(this._blinkIsEven=!1,-1===this._cursorIndex)this._cursorIndex=t;else if(this._cursorIndex<this._cursorOffset)this._endHighlightIndex=this._text.length-this._cursorIndex,this._startHighlightIndex=this._text.length-this._cursorOffset;else{if(!(this._cursorIndex>this._cursorOffset))return this._isTextHighlightOn=!1,void this._markAsDirty();this._endHighlightIndex=this._text.length-this._cursorOffset,this._startHighlightIndex=this._text.length-this._cursorIndex}this._isTextHighlightOn=!0,this._markAsDirty()},e.prototype._processDblClick=function(t){this._startHighlightIndex=this._text.length-this._cursorOffset,this._endHighlightIndex=this._startHighlightIndex;var e,i,r=/\w+/g;do{i=this._endHighlightIndex<this._text.length&&-1!==this._text[this._endHighlightIndex].search(r)?++this._endHighlightIndex:0,e=this._startHighlightIndex>0&&-1!==this._text[this._startHighlightIndex-1].search(r)?--this._startHighlightIndex:0}while(e||i);this._cursorOffset=this.text.length-this._startHighlightIndex,this.onTextHighlightObservable.notifyObservers(this),this._isTextHighlightOn=!0,this._clickedCoordinate=null,this._blinkIsEven=!0,this._cursorIndex=-1,this._markAsDirty()},e.prototype._selectAllText=function(){this._blinkIsEven=!0,this._isTextHighlightOn=!0,this._startHighlightIndex=0,this._endHighlightIndex=this._text.length,this._cursorOffset=this._text.length,this._cursorIndex=-1,this._markAsDirty()},e.prototype.processKeyboard=function(t){this.processKey(t.keyCode,t.key,t),this.onKeyboardEventProcessedObservable.notifyObservers(t)},e.prototype._onCopyText=function(t){this._isTextHighlightOn=!1;try{t.clipboardData&&t.clipboardData.setData("text/plain",this._highlightedText)}catch(t){}this._host.clipboardData=this._highlightedText},e.prototype._onCutText=function(t){if(this._highlightedText){this.text=this._text.slice(0,this._startHighlightIndex)+this._text.slice(this._endHighlightIndex),this._isTextHighlightOn=!1,this._cursorOffset=this.text.length-this._startHighlightIndex;try{t.clipboardData&&t.clipboardData.setData("text/plain",this._highlightedText)}catch(t){}this._host.clipboardData=this._highlightedText,this._highlightedText=""}},e.prototype._onPasteText=function(t){var e="";e=t.clipboardData&&-1!==t.clipboardData.types.indexOf("text/plain")?t.clipboardData.getData("text/plain"):this._host.clipboardData;var i=this._text.length-this._cursorOffset;this.text=this._text.slice(0,i)+e+this._text.slice(i)},e.prototype._draw=function(t){var e=this;t.save(),this._applyStates(t),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._isFocused?this._focusedBackground&&(t.fillStyle=this._isEnabled?this._focusedBackground:this._disabledColor,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)):this._background&&(t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height)),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._fontOffset||(this._fontOffset=_._GetFontOffset(t.font));var i=this._currentMeasure.left+this._margin.getValueInPixel(this._host,this._tempParentMeasure.width);this.color&&(t.fillStyle=this.color);var r=this._beforeRenderText(this._text);this._isFocused||this._text||!this._placeholderText||(r=this._placeholderText,this._placeholderColor&&(t.fillStyle=this._placeholderColor)),this._textWidth=t.measureText(r).width;var n=2*this._margin.getValueInPixel(this._host,this._tempParentMeasure.width);this._autoStretchWidth&&(this.width=Math.min(this._maxWidth.getValueInPixel(this._host,this._tempParentMeasure.width),this._textWidth+n)+"px");var o=this._fontOffset.ascent+(this._currentMeasure.height-this._fontOffset.height)/2,s=this._width.getValueInPixel(this._host,this._tempParentMeasure.width)-n;if(t.save(),t.beginPath(),t.rect(i,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,s+2,this._currentMeasure.height),t.clip(),this._isFocused&&this._textWidth>s){var h=i-this._textWidth+s;this._scrollLeft||(this._scrollLeft=h)}else this._scrollLeft=i;if(t.fillText(r,this._scrollLeft,this._currentMeasure.top+o),this._isFocused){if(this._clickedCoordinate){var a=this._scrollLeft+this._textWidth-this._clickedCoordinate,l=0;this._cursorOffset=0;var u=0;do{this._cursorOffset&&(u=Math.abs(a-l)),this._cursorOffset++,l=t.measureText(r.substr(r.length-this._cursorOffset,this._cursorOffset)).width}while(l<a&&r.length>=this._cursorOffset);Math.abs(a-l)>u&&this._cursorOffset--,this._blinkIsEven=!1,this._clickedCoordinate=null}if(!this._blinkIsEven){var c=this.text.substr(this._text.length-this._cursorOffset),d=t.measureText(c).width,f=this._scrollLeft+this._textWidth-d;f<i?(this._scrollLeft+=i-f,f=i,this._markAsDirty()):f>i+s&&(this._scrollLeft+=i+s-f,f=i+s,this._markAsDirty()),this._isTextHighlightOn||t.fillRect(f,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,2,this._fontOffset.height)}if(clearTimeout(this._blinkTimeout),this._blinkTimeout=setTimeout(function(){e._blinkIsEven=!e._blinkIsEven,e._markAsDirty()},500),this._isTextHighlightOn){clearTimeout(this._blinkTimeout);var p=t.measureText(this.text.substring(this._startHighlightIndex)).width,g=this._scrollLeft+this._textWidth-p;this._highlightedText=this.text.substring(this._startHighlightIndex,this._endHighlightIndex);var b=t.measureText(this.text.substring(this._startHighlightIndex,this._endHighlightIndex)).width;g<i&&((b-=i-g)||(b=t.measureText(this.text.charAt(this.text.length-this._cursorOffset)).width),g=i),t.globalAlpha=this._highligherOpacity,t.fillStyle=this._textHighlightColor,t.fillRect(g,this._currentMeasure.top+(this._currentMeasure.height-this._fontOffset.height)/2,b,this._fontOffset.height),t.globalAlpha=1}}t.restore(),this._thickness&&(this._isFocused?this.focusedColor&&(t.strokeStyle=this.focusedColor):this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,t.strokeRect(this._currentMeasure.left+this._thickness/2,this._currentMeasure.top+this._thickness/2,this._currentMeasure.width-this._thickness,this._currentMeasure.height-this._thickness)),t.restore()},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this._clickedCoordinate=i.x,this._isTextHighlightOn=!1,this._highlightedText="",this._cursorIndex=-1,this._isPointerDown=!0,this._host._capturingControl[r]=this,this._host.focusedControl===this?(clearTimeout(this._blinkTimeout),this._markAsDirty(),!0):!!this._isEnabled&&(this._host.focusedControl=this,!0))},e.prototype._onPointerMove=function(e,i,r){this._host.focusedControl===this&&this._isPointerDown&&(this._clickedCoordinate=i.x,this._markAsDirty(),this._updateValueFromCursorIndex(this._cursorOffset)),t.prototype._onPointerMove.call(this,e,i,r)},e.prototype._onPointerUp=function(e,i,r,n,o){this._isPointerDown=!1,delete this._host._capturingControl[r],t.prototype._onPointerUp.call(this,e,i,r,n,o)},e.prototype._beforeRenderText=function(t){return t},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.onBlurObservable.clear(),this.onFocusObservable.clear(),this.onTextChangedObservable.clear(),this.onTextCopyObservable.clear(),this.onTextCutObservable.clear(),this.onTextPasteObservable.clear(),this.onTextHighlightObservable.clear(),this.onKeyboardEventProcessedObservable.clear()},e}(_),O=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._rowDefinitions=new Array,i._columnDefinitions=new Array,i._cells={},i._childControls=new Array,i}return n(e,t),Object.defineProperty(e.prototype,"columnCount",{get:function(){return this._columnDefinitions.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rowCount",{get:function(){return this._rowDefinitions.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"children",{get:function(){return this._childControls},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cells",{get:function(){return this._cells},enumerable:!0,configurable:!0}),e.prototype.getRowDefinition=function(t){return t<0||t>=this._rowDefinitions.length?null:this._rowDefinitions[t]},e.prototype.getColumnDefinition=function(t){return t<0||t>=this._columnDefinitions.length?null:this._columnDefinitions[t]},e.prototype.addRowDefinition=function(t,e){return void 0===e&&(e=!1),this._rowDefinitions.push(new a(t,e?a.UNITMODE_PIXEL:a.UNITMODE_PERCENTAGE)),this._markAsDirty(),this},e.prototype.addColumnDefinition=function(t,e){return void 0===e&&(e=!1),this._columnDefinitions.push(new a(t,e?a.UNITMODE_PIXEL:a.UNITMODE_PERCENTAGE)),this._markAsDirty(),this},e.prototype.setRowDefinition=function(t,e,i){if(void 0===i&&(i=!1),t<0||t>=this._rowDefinitions.length)return this;var r=this._rowDefinitions[t];return r&&r.isPixel===i&&r.internalValue===e?this:(this._rowDefinitions[t]=new a(e,i?a.UNITMODE_PIXEL:a.UNITMODE_PERCENTAGE),this._markAsDirty(),this)},e.prototype.setColumnDefinition=function(t,e,i){if(void 0===i&&(i=!1),t<0||t>=this._columnDefinitions.length)return this;var r=this._columnDefinitions[t];return r&&r.isPixel===i&&r.internalValue===e?this:(this._columnDefinitions[t]=new a(e,i?a.UNITMODE_PIXEL:a.UNITMODE_PERCENTAGE),this._markAsDirty(),this)},e.prototype.getChildrenAt=function(t,e){var i=this._cells[t+":"+e];return i?i.children:null},e.prototype.getChildCellInfo=function(t){return t._tag},e.prototype._removeCell=function(e,i){if(e){t.prototype.removeControl.call(this,e);for(var r=0,n=e.children;r<n.length;r++){var o=n[r],s=this._childControls.indexOf(o);-1!==s&&this._childControls.splice(s,1)}delete this._cells[i]}},e.prototype._offsetCell=function(t,e){if(this._cells[e]){this._cells[t]=this._cells[e];for(var i=0,r=this._cells[t].children;i<r.length;i++){r[i]._tag=t}delete this._cells[e]}},e.prototype.removeColumnDefinition=function(t){if(t<0||t>=this._columnDefinitions.length)return this;for(var e=0;e<this._rowDefinitions.length;e++){var i=e+":"+t,r=this._cells[i];this._removeCell(r,i)}for(e=0;e<this._rowDefinitions.length;e++)for(var n=t+1;n<this._columnDefinitions.length;n++){var o=e+":"+(n-1);i=e+":"+n;this._offsetCell(o,i)}return this._columnDefinitions.splice(t,1),this._markAsDirty(),this},e.prototype.removeRowDefinition=function(t){if(t<0||t>=this._rowDefinitions.length)return this;for(var e=0;e<this._columnDefinitions.length;e++){var i=t+":"+e,r=this._cells[i];this._removeCell(r,i)}for(e=0;e<this._columnDefinitions.length;e++)for(var n=t+1;n<this._rowDefinitions.length;n++){var o=n-1+":"+e;i=n+":"+e;this._offsetCell(o,i)}return this._rowDefinitions.splice(t,1),this._markAsDirty(),this},e.prototype.addControl=function(e,i,r){if(void 0===i&&(i=0),void 0===r&&(r=0),0===this._rowDefinitions.length&&this.addRowDefinition(1,!1),0===this._columnDefinitions.length&&this.addColumnDefinition(1,!1),-1!==this._childControls.indexOf(e))return h.Tools.Warn("Control (Name:"+e.name+", UniqueId:"+e.uniqueId+") is already associated with this grid. You must remove it before reattaching it"),this;var n=Math.min(i,this._rowDefinitions.length-1)+":"+Math.min(r,this._columnDefinitions.length-1),o=this._cells[n];return o||(o=new d(n),this._cells[n]=o,o.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,o.verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,t.prototype.addControl.call(this,o)),o.addControl(e),this._childControls.push(e),e._tag=n,e.parent=this,this._markAsDirty(),this},e.prototype.removeControl=function(t){var e=this._childControls.indexOf(t);-1!==e&&this._childControls.splice(e,1);var i=this._cells[t._tag];return i&&(i.removeControl(t),t._tag=null),this._markAsDirty(),this},e.prototype._getTypeName=function(){return"Grid"},e.prototype._getGridDefinitions=function(t){for(var e=[],i=[],r=[],n=[],o=this._currentMeasure.width,s=0,h=this._currentMeasure.height,a=0,l=0,u=0,c=this._rowDefinitions;u<c.length;u++){if((g=c[u]).isPixel)h-=p=g.getValue(this._host),i[l]=p;else a+=g.internalValue;l++}var _=0;l=0;for(var d=0,f=this._rowDefinitions;d<f.length;d++){var p,g=f[d];if(n.push(_),g.isPixel)_+=g.getValue(this._host);else _+=p=g.internalValue/a*h,i[l]=p;l++}l=0;for(var b=0,m=this._columnDefinitions;b<m.length;b++){if((g=m[b]).isPixel)o-=C=g.getValue(this._host),e[l]=C;else s+=g.internalValue;l++}var y=0;l=0;for(var v=0,O=this._columnDefinitions;v<O.length;v++){var C;g=O[v];if(r.push(y),g.isPixel)y+=g.getValue(this._host);else y+=C=g.internalValue/s*o,e[l]=C;l++}t(r,n,e,i)},e.prototype._additionalProcessing=function(e,i){var r=this;this._getGridDefinitions(function(t,e,i,n){for(var o in r._cells)if(r._cells.hasOwnProperty(o)){var s=o.split(":"),h=parseInt(s[0]),a=parseInt(s[1]),l=r._cells[o];l.left=t[a]+"px",l.top=e[h]+"px",l.width=i[a]+"px",l.height=n[h]+"px",l._left.ignoreAdaptiveScaling=!0,l._top.ignoreAdaptiveScaling=!0,l._width.ignoreAdaptiveScaling=!0,l._height.ignoreAdaptiveScaling=!0}}),t.prototype._additionalProcessing.call(this,e,i)},e.prototype._flagDescendantsAsMatrixDirty=function(){for(var t in this._cells){if(this._cells.hasOwnProperty(t))this._cells[t]._markMatrixAsDirty()}},e.prototype._renderHighlightSpecific=function(e){var i=this;t.prototype._renderHighlightSpecific.call(this,e),this._getGridDefinitions(function(t,r,n,o){for(var s=0;s<t.length;s++){var h=i._currentMeasure.left+t[s]+n[s];e.beginPath(),e.moveTo(h,i._currentMeasure.top),e.lineTo(h,i._currentMeasure.top+i._currentMeasure.height),e.stroke()}for(s=0;s<r.length;s++){var a=i._currentMeasure.top+r[s]+o[s];e.beginPath(),e.moveTo(i._currentMeasure.left,a),e.lineTo(i._currentMeasure.left+i._currentMeasure.width,a),e.stroke()}}),e.restore()},e.prototype.dispose=function(){t.prototype.dispose.call(this);for(var e=0,i=this._childControls;e<i.length;e++){i[e].dispose()}this._childControls=[]},e}(d),C=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._value=h.Color3.Red(),i._tmpColor=new h.Color3,i._pointerStartedOnSquare=!1,i._pointerStartedOnWheel=!1,i._squareLeft=0,i._squareTop=0,i._squareSize=0,i._h=360,i._s=1,i._v=1,i._lastPointerDownID=-1,i.onValueChangedObservable=new h.Observable,i._pointerIsDown=!1,i.value=new h.Color3(.88,.1,.1),i.size="200px",i.isPointerBlocker=!0,i}return n(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){this._value.equals(t)||(this._value.copyFrom(t),this._RGBtoHSV(this._value,this._tmpColor),this._h=this._tmpColor.r,this._s=Math.max(this._tmpColor.g,1e-5),this._v=Math.max(this._tmpColor.b,1e-5),this._markAsDirty(),this._value.r<=e._Epsilon&&(this._value.r=0),this._value.g<=e._Epsilon&&(this._value.g=0),this._value.b<=e._Epsilon&&(this._value.b=0),this._value.r>=1-e._Epsilon&&(this._value.r=1),this._value.g>=1-e._Epsilon&&(this._value.g=1),this._value.b>=1-e._Epsilon&&(this._value.b=1),this.onValueChangedObservable.notifyObservers(this._value))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width.toString(this._host)},set:function(t){this._width.toString(this._host)!==t&&this._width.fromString(t)&&(this._height.fromString(t),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height.toString(this._host)},set:function(t){this._height.toString(this._host)!==t&&this._height.fromString(t)&&(this._width.fromString(t),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this.width},set:function(t){this.width=t},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"ColorPicker"},e.prototype._preMeasure=function(t,e){t.width<t.height?this._currentMeasure.height=t.width:this._currentMeasure.width=t.height},e.prototype._updateSquareProps=function(){var t=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),e=2*(t-.2*t)/Math.sqrt(2),i=t-.5*e;this._squareLeft=this._currentMeasure.left+i,this._squareTop=this._currentMeasure.top+i,this._squareSize=e},e.prototype._drawGradientSquare=function(t,e,i,r,n,o){var s=o.createLinearGradient(e,i,r+e,i);s.addColorStop(0,"#fff"),s.addColorStop(1,"hsl("+t+", 100%, 50%)"),o.fillStyle=s,o.fillRect(e,i,r,n);var h=o.createLinearGradient(e,i,e,n+i);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(1,"#000"),o.fillStyle=h,o.fillRect(e,i,r,n)},e.prototype._drawCircle=function(t,e,i,r){r.beginPath(),r.arc(t,e,i+1,0,2*Math.PI,!1),r.lineWidth=3,r.strokeStyle="#333333",r.stroke(),r.beginPath(),r.arc(t,e,i,0,2*Math.PI,!1),r.lineWidth=3,r.strokeStyle="#ffffff",r.stroke()},e.prototype._createColorWheelCanvas=function(t,e){var i=document.createElement("canvas");i.width=2*t,i.height=2*t;for(var r=i.getContext("2d"),n=r.getImageData(0,0,2*t,2*t),o=n.data,s=this._tmpColor,h=t*t,a=t-e,l=a*a,u=-t;u<t;u++)for(var c=-t;c<t;c++){var _=u*u+c*c;if(!(_>h||_<l)){var d=Math.sqrt(_),f=Math.atan2(c,u);this._HSVtoRGB(180*f/Math.PI+180,d/t,1,s);var p=4*(u+t+2*(c+t)*t);o[p]=255*s.r,o[p+1]=255*s.g,o[p+2]=255*s.b;var g=.2;g=t<50?.2:t>150?.04:-.16*(t-50)/100+.2;var b=(d-a)/(t-a);o[p+3]=b<g?b/g*255:b>1-g?255*(1-(b-(1-g))/g):255}}return r.putImageData(n,0,0),i},e.prototype._RGBtoHSV=function(t,e){var i=t.r,r=t.g,n=t.b,o=Math.max(i,r,n),s=Math.min(i,r,n),h=0,a=0,l=o,u=o-s;0!==o&&(a=u/o),o!=s&&(o==i?(h=(r-n)/u,r<n&&(h+=6)):o==r?h=(n-i)/u+2:o==n&&(h=(i-r)/u+4),h*=60),e.r=h,e.g=a,e.b=l},e.prototype._HSVtoRGB=function(t,e,i,r){var n=i*e,o=t/60,s=n*(1-Math.abs(o%2-1)),h=0,a=0,l=0;o>=0&&o<=1?(h=n,a=s):o>=1&&o<=2?(h=s,a=n):o>=2&&o<=3?(a=n,l=s):o>=3&&o<=4?(a=s,l=n):o>=4&&o<=5?(h=s,l=n):o>=5&&o<=6&&(h=n,l=s);var u=i-n;r.set(h+u,a+u,l+u)},e.prototype._draw=function(t){t.save(),this._applyStates(t);var e=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),i=.2*e,r=this._currentMeasure.left,n=this._currentMeasure.top;this._colorWheelCanvas&&this._colorWheelCanvas.width==2*e||(this._colorWheelCanvas=this._createColorWheelCanvas(e,i)),this._updateSquareProps(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY,t.fillRect(this._squareLeft,this._squareTop,this._squareSize,this._squareSize)),t.drawImage(this._colorWheelCanvas,r,n),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._drawGradientSquare(this._h,this._squareLeft,this._squareTop,this._squareSize,this._squareSize,t);var o=this._squareLeft+this._squareSize*this._s,s=this._squareTop+this._squareSize*(1-this._v);this._drawCircle(o,s,.04*e,t);var h=e-.5*i;o=r+e+Math.cos((this._h-180)*Math.PI/180)*h,s=n+e+Math.sin((this._h-180)*Math.PI/180)*h,this._drawCircle(o,s,.35*i,t),t.restore()},e.prototype._updateValueFromPointer=function(t,i){if(this._pointerStartedOnWheel){var r=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),n=r+this._currentMeasure.left,o=r+this._currentMeasure.top;this._h=180*Math.atan2(i-o,t-n)/Math.PI+180}else this._pointerStartedOnSquare&&(this._updateSquareProps(),this._s=(t-this._squareLeft)/this._squareSize,this._v=1-(i-this._squareTop)/this._squareSize,this._s=Math.min(this._s,1),this._s=Math.max(this._s,e._Epsilon),this._v=Math.min(this._v,1),this._v=Math.max(this._v,e._Epsilon));this._HSVtoRGB(this._h,this._s,this._v,this._tmpColor),this.value=this._tmpColor},e.prototype._isPointOnSquare=function(t,e){this._updateSquareProps();var i=this._squareLeft,r=this._squareTop,n=this._squareSize;return t>=i&&t<=i+n&&e>=r&&e<=r+n},e.prototype._isPointOnWheel=function(t,e){var i=.5*Math.min(this._currentMeasure.width,this._currentMeasure.height),r=i-.2*i,n=t-(i+this._currentMeasure.left),o=e-(i+this._currentMeasure.top),s=n*n+o*o;return s<=i*i&&s>=r*r},e.prototype._onPointerDown=function(e,i,r,n){if(!t.prototype._onPointerDown.call(this,e,i,r,n))return!1;this._pointerIsDown=!0,this._pointerStartedOnSquare=!1,this._pointerStartedOnWheel=!1,this._invertTransformMatrix.transformCoordinates(i.x,i.y,this._transformedPosition);var o=this._transformedPosition.x,s=this._transformedPosition.y;return this._isPointOnSquare(o,s)?this._pointerStartedOnSquare=!0:this._isPointOnWheel(o,s)&&(this._pointerStartedOnWheel=!0),this._updateValueFromPointer(o,s),this._host._capturingControl[r]=this,this._lastPointerDownID=r,!0},e.prototype._onPointerMove=function(e,i,r){if(r==this._lastPointerDownID){this._invertTransformMatrix.transformCoordinates(i.x,i.y,this._transformedPosition);var n=this._transformedPosition.x,o=this._transformedPosition.y;this._pointerIsDown&&this._updateValueFromPointer(n,o),t.prototype._onPointerMove.call(this,e,i,r)}},e.prototype._onPointerUp=function(e,i,r,n,o){this._pointerIsDown=!1,delete this._host._capturingControl[r],t.prototype._onPointerUp.call(this,e,i,r,n,o)},e.ShowPickerDialogAsync=function(t,i){return new Promise(function(r,n){i.pickerWidth=i.pickerWidth||"640px",i.pickerHeight=i.pickerHeight||"400px",i.headerHeight=i.headerHeight||"35px",i.lastColor=i.lastColor||"#000000",i.swatchLimit=i.swatchLimit||20,i.numSwatchesPerLine=i.numSwatchesPerLine||10;var o,s,a,l,u,c,d,g,m,y,C,T,w,x,P,M,k,I,A,E=i.swatchLimit/i.numSwatchesPerLine,S=parseFloat(i.pickerWidth)/i.numSwatchesPerLine,D=Math.floor(.25*S),R=D*(i.numSwatchesPerLine+1),L=Math.floor((parseFloat(i.pickerWidth)-R)/i.numSwatchesPerLine),N=L*E+D*(E+1),B=(parseInt(i.pickerHeight)+N+Math.floor(.25*L)).toString()+"px",H="#c0c0c0",V="#535353",F="#414141",j="515151",W="#555555",z="#454545",G=h.Color3.FromHexString("#dddddd"),X=G.r+G.g+G.b,Y="#aaaaaa",U="#ffffff",K=["R","G","B"],q=!1;function Z(t,e){A=e;var i=t.toHexString();if(k.background=i,y.name!=A&&(y.text=Math.floor(255*t.r).toString()),C.name!=A&&(C.text=Math.floor(255*t.g).toString()),T.name!=A&&(T.text=Math.floor(255*t.b).toString()),w.name!=A&&(w.text=t.r.toString()),x.name!=A&&(x.text=t.g.toString()),P.name!=A&&(P.text=t.b.toString()),M.name!=A){var r=i.split("#");M.text=r[1]}m.name!=A&&(m.value=t)}function J(t,e){var i=t.text;if(/[^0-9]/g.test(i))t.text=I;else if(""!=i&&(Math.floor(parseInt(i))<0?i="0":Math.floor(parseInt(i))>255?i="255":isNaN(parseInt(i))&&(i="0")),A==t.name&&(I=i),""!=i){i=parseInt(i).toString(),t.text=i;var r=h.Color3.FromHexString(k.background);A==t.name&&Z("r"==e?new h.Color3(parseInt(i)/255,r.g,r.b):"g"==e?new h.Color3(r.r,parseInt(i)/255,r.b):new h.Color3(r.r,r.g,parseInt(i)/255),t.name)}}function Q(t,e){var i=t.text;if(/[^0-9\.]/g.test(i))t.text=I;else{""!=i&&"."!=i&&0!=parseFloat(i)&&(parseFloat(i)<0?i="0.0":parseFloat(i)>1?i="1.0":isNaN(parseFloat(i))&&(i="0.0")),A==t.name&&(I=i),""!=i&&"."!=i&&0!=parseFloat(i)?(i=parseFloat(i).toString(),t.text=i):i="0.0";var r=h.Color3.FromHexString(k.background);A==t.name&&Z("r"==e?new h.Color3(parseFloat(i),r.g,r.b):"g"==e?new h.Color3(r.r,parseFloat(i),r.b):new h.Color3(r.r,r.g,parseFloat(i)),t.name)}}function $(){if(i.savedColors&&i.savedColors[d]){if(q)var t="b";else t="";var e=b.CreateSimpleButton("Swatch_"+d,t);e.fontFamily="BabylonJSglyphs";var r=h.Color3.FromHexString(i.savedColors[d]),n=r.r+r.g+r.b;e.color=n>X?Y:U,e.fontSize=Math.floor(.7*L),e.textBlock.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,e.height=e.width=L.toString()+"px",e.background=i.savedColors[d],e.thickness=2;var o=d;return e.pointerDownAnimation=function(){e.thickness=4},e.pointerUpAnimation=function(){e.thickness=3},e.pointerEnterAnimation=function(){e.thickness=3},e.pointerOutAnimation=function(){e.thickness=2},e.onPointerClickObservable.add(function(){var t;q?(t=o,i.savedColors&&i.savedColors.splice(t,1),i.savedColors&&0==i.savedColors.length&&(it(!1),q=!1),et("",Nt)):i.savedColors&&Z(h.Color3.FromHexString(i.savedColors[o]),e.name)}),e}return null}function tt(t){if(void 0!==t&&(q=t),q){for(var e=0;e<g.children.length;e++){g.children[e].textBlock.text="b"}void 0!==a&&(a.textBlock.text="Done")}else{for(e=0;e<g.children.length;e++){g.children[e].textBlock.text=""}void 0!==a&&(a.textBlock.text="Edit")}}function et(t,e){if(i.savedColors){""!=t&&i.savedColors.push(t),d=0,g.clearControls();var r=Math.ceil(i.savedColors.length/i.numSwatchesPerLine);if(0==r)var n=0;else n=r+1;if(g.rowCount!=r+n){for(var o=g.rowCount,s=0;s<o;s++)g.removeRowDefinition(0);for(s=0;s<r+n;s++)s%2?g.addRowDefinition(L,!0):g.addRowDefinition(D,!0)}g.height=(L*r+n*D).toString()+"px";for(var h=1,a=1;h<r+n;h+=2,a++){if(i.savedColors.length>a*i.numSwatchesPerLine)var l=i.numSwatchesPerLine;else l=i.savedColors.length-(a-1)*i.numSwatchesPerLine;for(var u=Math.min(Math.max(l,0),i.numSwatchesPerLine),c=0,_=1;c<u;c++)if(!(c>i.numSwatchesPerLine)){var f=$();null!=f&&(g.addControl(f,h,_),_+=2,d++)}}i.savedColors.length>=i.swatchLimit?rt(e,!0):rt(e,!1)}}function it(t){t?((a=b.CreateSimpleButton("butEdit","Edit")).width=l,a.height=u,a.left=Math.floor(.1*parseInt(l)).toString()+"px",a.top=(-1*parseFloat(a.left)).toString()+"px",a.verticalAlignment=_.VERTICAL_ALIGNMENT_BOTTOM,a.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,a.thickness=2,a.color=H,a.fontSize=s,a.background=V,a.onPointerEnterObservable.add(function(){a.background=F}),a.onPointerOutObservable.add(function(){a.background=V}),a.pointerDownAnimation=function(){a.background=j},a.pointerUpAnimation=function(){a.background=F},a.onPointerClickObservable.add(function(){q=!q,tt()}),mt.addControl(a,1,0)):mt.removeControl(a)}function rt(t,e){e?(t.color=W,t.background=z):(t.color=H,t.background=V)}function nt(e){i.savedColors&&i.savedColors.length>0?r({savedColors:i.savedColors,pickedColor:e}):r({pickedColor:e}),t.removeControl(ot)}var ot=new O;if(ot.name="Dialog Container",ot.width=i.pickerWidth,i.savedColors){ot.height=B;var st=parseInt(i.pickerHeight)/parseInt(B);ot.addRowDefinition(st,!1),ot.addRowDefinition(1-st,!1)}else ot.height=i.pickerHeight,ot.addRowDefinition(1,!1);if(t.addControl(ot),i.savedColors){(g=new O).name="Swatch Drawer",g.verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,g.background=V,g.width=i.pickerWidth;var ht=i.savedColors.length/i.numSwatchesPerLine;if(0==ht)var at=0;else at=ht+1;g.height=(L*ht+at*D).toString()+"px",g.top=Math.floor(.25*L).toString()+"px";for(var lt=0;lt<2*Math.ceil(i.savedColors.length/i.numSwatchesPerLine)+1;lt++)lt%2!=0?g.addRowDefinition(L,!0):g.addRowDefinition(D,!0);for(lt=0;lt<2*i.numSwatchesPerLine+1;lt++)lt%2!=0?g.addColumnDefinition(L,!0):g.addColumnDefinition(D,!0);ot.addControl(g,1,0)}var ut=new O;ut.name="Picker Panel",ut.height=i.pickerHeight;var ct=parseInt(i.headerHeight)/parseInt(i.pickerHeight),_t=[ct,1-ct];ut.addRowDefinition(_t[0],!1),ut.addRowDefinition(_t[1],!1),ot.addControl(ut,0,0);var dt=new f;dt.name="Dialogue Header Bar",dt.background="#cccccc",dt.thickness=0,ut.addControl(dt,0,0);var ft=b.CreateSimpleButton("closeButton","a");ft.fontFamily="BabylonJSglyphs";var pt=h.Color3.FromHexString(dt.background);o=new h.Color3(1-pt.r,1-pt.g,1-pt.b),ft.color=o.toHexString(),ft.fontSize=Math.floor(.6*parseInt(i.headerHeight)),ft.textBlock.textVerticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,ft.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_RIGHT,ft.height=ft.width=i.headerHeight,ft.background=dt.background,ft.thickness=0,ft.pointerDownAnimation=function(){},ft.pointerUpAnimation=function(){ft.background=dt.background},ft.pointerEnterAnimation=function(){ft.color=dt.background,ft.background="red"},ft.pointerOutAnimation=function(){ft.color=o.toHexString(),ft.background=dt.background},ft.onPointerClickObservable.add(function(){nt(At.background)}),ut.addControl(ft,0,0);var gt=new O;gt.name="Dialogue Body",gt.background=V;var bt=[.4375,.5625];gt.addRowDefinition(1,!1),gt.addColumnDefinition(bt[0],!1),gt.addColumnDefinition(bt[1],!1),ut.addControl(gt,1,0);var mt=new O;mt.name="Picker Grid",mt.addRowDefinition(.85,!1),mt.addRowDefinition(.15,!1),gt.addControl(mt,0,0),(m=new e).name="GUI Color Picker",i.pickerHeight<i.pickerWidth?m.width=.89:m.height=.89,m.value=h.Color3.FromHexString(i.lastColor),m.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_CENTER,m.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,m.onPointerDownObservable.add(function(){A=m.name,I="",tt(!1)}),m.onValueChangedObservable.add(function(t){A==m.name&&Z(t,m.name)}),mt.addControl(m,0,0);var yt=new O;yt.name="Dialogue Right Half",yt.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT;var vt=[.514,.486];yt.addRowDefinition(vt[0],!1),yt.addRowDefinition(vt[1],!1),gt.addControl(yt,1,1);var Ot=new O;Ot.name="Swatches and Buttons";var Ct=[.417,.583];Ot.addRowDefinition(1,!1),Ot.addColumnDefinition(Ct[0],!1),Ot.addColumnDefinition(Ct[1],!1),yt.addControl(Ot,0,0);var Tt=new O;Tt.name="New and Current Swatches";var wt=[.04,.16,.64,.16];Tt.addRowDefinition(wt[0],!1),Tt.addRowDefinition(wt[1],!1),Tt.addRowDefinition(wt[2],!1),Tt.addRowDefinition(wt[3],!1),Ot.addControl(Tt,0,0);var xt=new O;xt.name="Active Swatches",xt.width=.67,xt.addRowDefinition(.5,!1),xt.addRowDefinition(.5,!1),Tt.addControl(xt,2,0);var Pt=Math.floor(parseInt(i.pickerWidth)*bt[1]*Ct[0]*.11),Mt=Math.floor(parseInt(i.pickerHeight)*_t[1]*vt[0]*wt[1]*.5);if(i.pickerWidth>i.pickerHeight)var kt=Mt;else kt=Pt;var It=new p;It.text="new",It.name="New Color Label",It.color=H,It.fontSize=kt,Tt.addControl(It,1,0),(k=new f).name="New Color Swatch",k.background=i.lastColor,k.thickness=0,xt.addControl(k,0,0);var At=b.CreateSimpleButton("currentSwatch","");At.background=i.lastColor,At.thickness=0,At.onPointerClickObservable.add(function(){Z(h.Color3.FromHexString(At.background),At.name),tt(!1)}),At.pointerDownAnimation=function(){},At.pointerUpAnimation=function(){},At.pointerEnterAnimation=function(){},At.pointerOutAnimation=function(){},xt.addControl(At,1,0);var Et=new f;Et.name="Swatch Outline",Et.width=.67,Et.thickness=2,Et.color="#404040",Et.isHitTestVisible=!1,Tt.addControl(Et,2,0);var St=new p;St.name="Current Color Label",St.text="current",St.color=H,St.fontSize=kt,Tt.addControl(St,3,0);var Dt=new O;Dt.name="Button Grid",Dt.height=.8;Dt.addRowDefinition(1/3,!1),Dt.addRowDefinition(1/3,!1),Dt.addRowDefinition(1/3,!1),Ot.addControl(Dt,0,1),l=Math.floor(parseInt(i.pickerWidth)*bt[1]*Ct[1]*.67).toString()+"px",u=Math.floor(parseInt(i.pickerHeight)*_t[1]*vt[0]*(parseFloat(Dt.height.toString())/100)*(1/3)*.7).toString()+"px",s=parseFloat(l)>parseFloat(u)?Math.floor(.45*parseFloat(u)):Math.floor(.11*parseFloat(l));var Rt=b.CreateSimpleButton("butOK","OK");Rt.width=l,Rt.height=u,Rt.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,Rt.thickness=2,Rt.color=H,Rt.fontSize=s,Rt.background=V,Rt.onPointerEnterObservable.add(function(){Rt.background=F}),Rt.onPointerOutObservable.add(function(){Rt.background=V}),Rt.pointerDownAnimation=function(){Rt.background=j},Rt.pointerUpAnimation=function(){Rt.background=F},Rt.onPointerClickObservable.add(function(){tt(!1),nt(k.background)}),Dt.addControl(Rt,0,0);var Lt=b.CreateSimpleButton("butCancel","Cancel");if(Lt.width=l,Lt.height=u,Lt.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,Lt.thickness=2,Lt.color=H,Lt.fontSize=s,Lt.background=V,Lt.onPointerEnterObservable.add(function(){Lt.background=F}),Lt.onPointerOutObservable.add(function(){Lt.background=V}),Lt.pointerDownAnimation=function(){Lt.background=j},Lt.pointerUpAnimation=function(){Lt.background=F},Lt.onPointerClickObservable.add(function(){tt(!1),nt(At.background)}),Dt.addControl(Lt,1,0),i.savedColors){var Nt=b.CreateSimpleButton("butSave","Save");Nt.width=l,Nt.height=u,Nt.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,Nt.thickness=2,Nt.fontSize=s,i.savedColors.length<i.swatchLimit?(Nt.color=H,Nt.background=V):rt(Nt,!0),Nt.onPointerEnterObservable.add(function(){i.savedColors&&i.savedColors.length<i.swatchLimit&&(Nt.background=F)}),Nt.onPointerOutObservable.add(function(){i.savedColors&&i.savedColors.length<i.swatchLimit&&(Nt.background=V)}),Nt.pointerDownAnimation=function(){i.savedColors&&i.savedColors.length<i.swatchLimit&&(Nt.background=j)},Nt.pointerUpAnimation=function(){i.savedColors&&i.savedColors.length<i.swatchLimit&&(Nt.background=F)},Nt.onPointerClickObservable.add(function(){i.savedColors&&(0==i.savedColors.length&&it(!0),i.savedColors.length<i.swatchLimit&&et(k.background,Nt),tt(!1))}),i.savedColors.length>0&&it(!0),Dt.addControl(Nt,2,0)}var Bt=new O;Bt.name="Dialog Lower Right",Bt.addRowDefinition(.02,!1),Bt.addRowDefinition(.63,!1),Bt.addRowDefinition(.21,!1),Bt.addRowDefinition(.14,!1),yt.addControl(Bt,1,0),c=h.Color3.FromHexString(i.lastColor);var Ht=new O;Ht.name="RGB Values",Ht.width=.82,Ht.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,Ht.addRowDefinition(1/3,!1),Ht.addRowDefinition(1/3,!1),Ht.addRowDefinition(1/3,!1),Ht.addColumnDefinition(.1,!1),Ht.addColumnDefinition(.2,!1),Ht.addColumnDefinition(.7,!1),Bt.addControl(Ht,1,0);for(lt=0;lt<K.length;lt++){(Vt=new p).text=K[lt],Vt.color=H,Vt.fontSize=s,Ht.addControl(Vt,lt,0)}(y=new v).width=.83,y.height=.72,y.name="rIntField",y.fontSize=s,y.text=(255*c.r).toString(),y.color="#f0f0f0",y.background="#454545",y.onFocusObservable.add(function(){A=y.name,I=y.text,tt(!1)}),y.onBlurObservable.add(function(){""==y.text&&(y.text="0"),J(y,"r"),A==y.name&&(A="")}),y.onTextChangedObservable.add(function(){A==y.name&&J(y,"r")}),Ht.addControl(y,0,1),(C=new v).width=.83,C.height=.72,C.name="gIntField",C.fontSize=s,C.text=(255*c.g).toString(),C.color="#f0f0f0",C.background="#454545",C.onFocusObservable.add(function(){A=C.name,I=C.text,tt(!1)}),C.onBlurObservable.add(function(){""==C.text&&(C.text="0"),J(C,"g"),A==C.name&&(A="")}),C.onTextChangedObservable.add(function(){A==C.name&&J(C,"g")}),Ht.addControl(C,1,1),(T=new v).width=.83,T.height=.72,T.name="bIntField",T.fontSize=s,T.text=(255*c.b).toString(),T.color="#f0f0f0",T.background="#454545",T.onFocusObservable.add(function(){A=T.name,I=T.text,tt(!1)}),T.onBlurObservable.add(function(){""==T.text&&(T.text="0"),J(T,"b"),A==T.name&&(A="")}),T.onTextChangedObservable.add(function(){A==T.name&&J(T,"b")}),Ht.addControl(T,2,1),(w=new v).width=.95,w.height=.72,w.name="rDecField",w.fontSize=s,w.text=c.r.toString(),w.color="#f0f0f0",w.background="#454545",w.onFocusObservable.add(function(){A=w.name,I=w.text,tt(!1)}),w.onBlurObservable.add(function(){0!=parseFloat(w.text)&&""!=w.text||(w.text="0",Q(w,"r")),A==w.name&&(A="")}),w.onTextChangedObservable.add(function(){A==w.name&&Q(w,"r")}),Ht.addControl(w,0,2),(x=new v).width=.95,x.height=.72,x.name="gDecField",x.fontSize=s,x.text=c.g.toString(),x.color="#f0f0f0",x.background="#454545",x.onFocusObservable.add(function(){A=x.name,I=x.text,tt(!1)}),x.onBlurObservable.add(function(){0!=parseFloat(x.text)&&""!=x.text||(x.text="0",Q(x,"g")),A==x.name&&(A="")}),x.onTextChangedObservable.add(function(){A==x.name&&Q(x,"g")}),Ht.addControl(x,1,2),(P=new v).width=.95,P.height=.72,P.name="bDecField",P.fontSize=s,P.text=c.b.toString(),P.color="#f0f0f0",P.background="#454545",P.onFocusObservable.add(function(){A=P.name,I=P.text,tt(!1)}),P.onBlurObservable.add(function(){0!=parseFloat(P.text)&&""!=P.text||(P.text="0",Q(P,"b")),A==P.name&&(A="")}),P.onTextChangedObservable.add(function(){A==P.name&&Q(P,"b")}),Ht.addControl(P,2,2);var Vt,Ft=new O;Ft.name="Hex Value",Ft.width=.82,Ft.addRowDefinition(1,!1),Ft.addColumnDefinition(.1,!1),Ft.addColumnDefinition(.9,!1),Bt.addControl(Ft,2,0),(Vt=new p).text="#",Vt.color=H,Vt.fontSize=s,Ft.addControl(Vt,0,0),(M=new v).width=.96,M.height=.72,M.name="hexField",M.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_CENTER,M.fontSize=s;var jt=i.lastColor.split("#");M.text=jt[1],M.color="#f0f0f0",M.background="#454545",M.onFocusObservable.add(function(){A=M.name,I=M.text,tt(!1)}),M.onBlurObservable.add(function(){if(3==M.text.length){var t=M.text.split("");M.text=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]}""==M.text&&(M.text="000000",Z(h.Color3.FromHexString(M.text),"b")),A==M.name&&(A="")}),M.onTextChangedObservable.add(function(){var t=M.text,e=/[^0-9A-F]/i.test(t);if((M.text.length>6||e)&&A==M.name)M.text=I;else{if(M.text.length<6)for(var i=6-M.text.length,r=0;r<i;r++)t="0"+t;if(3==M.text.length){var n=M.text.split("");t=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]}t="#"+t,A==M.name&&(I=M.text,Z(h.Color3.FromHexString(t),M.name))}}),Ft.addControl(M,0,1),i.savedColors&&i.savedColors.length>0&&et("",Nt)})},e._Epsilon=1e-6,e}(_),T=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thickness=1,i}return n(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Ellipse"},e.prototype._localDraw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),_.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._thickness/2,this._currentMeasure.height/2-this._thickness/2,t),this._background&&(t.fillStyle=this._background,t.fill()),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),this._thickness&&(this.color&&(t.strokeStyle=this.color),t.lineWidth=this._thickness,t.stroke()),t.restore()},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.width-=2*this._thickness,this._measureForChildren.height-=2*this._thickness,this._measureForChildren.left+=this._thickness,this._measureForChildren.top+=this._thickness},e.prototype._clipForChildren=function(t){_.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2,this._currentMeasure.height/2,t),t.clip()},e}(d),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype._beforeRenderText=function(t){for(var e="",i=0;i<t.length;i++)e+="•";return e},e}(v),x=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._lineWidth=1,i._x1=new a(0),i._y1=new a(0),i._x2=new a(0),i._y2=new a(0),i._dash=new Array,i.isHitTestVisible=!1,i._horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,i._verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,i}return n(e,t),Object.defineProperty(e.prototype,"dash",{get:function(){return this._dash},set:function(t){this._dash!==t&&(this._dash=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"connectedControl",{get:function(){return this._connectedControl},set:function(t){var e=this;this._connectedControl!==t&&(this._connectedControlDirtyObserver&&this._connectedControl&&(this._connectedControl.onDirtyObservable.remove(this._connectedControlDirtyObserver),this._connectedControlDirtyObserver=null),t&&(this._connectedControlDirtyObserver=t.onDirtyObservable.add(function(){return e._markAsDirty()})),this._connectedControl=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x1",{get:function(){return this._x1.toString(this._host)},set:function(t){this._x1.toString(this._host)!==t&&this._x1.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y1",{get:function(){return this._y1.toString(this._host)},set:function(t){this._y1.toString(this._host)!==t&&this._y1.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x2",{get:function(){return this._x2.toString(this._host)},set:function(t){this._x2.toString(this._host)!==t&&this._x2.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y2",{get:function(){return this._y2.toString(this._host)},set:function(t){this._y2.toString(this._host)!==t&&this._y2.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this._lineWidth},set:function(t){this._lineWidth!==t&&(this._lineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_effectiveX2",{get:function(){return(this._connectedControl?this._connectedControl.centerX:0)+this._x2.getValue(this._host)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_effectiveY2",{get:function(){return(this._connectedControl?this._connectedControl.centerY:0)+this._y2.getValue(this._host)},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Line"},e.prototype._draw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._applyStates(t),t.strokeStyle=this.color,t.lineWidth=this._lineWidth,t.setLineDash(this._dash),t.beginPath(),t.moveTo(this._cachedParentMeasure.left+this._x1.getValue(this._host),this._cachedParentMeasure.left+this._y1.getValue(this._host)),t.lineTo(this._cachedParentMeasure.left+this._effectiveX2,this._cachedParentMeasure.left+this._effectiveY2),t.stroke(),t.restore()},e.prototype._measure=function(){this._currentMeasure.width=Math.abs(this._x1.getValue(this._host)-this._effectiveX2)+this._lineWidth,this._currentMeasure.height=Math.abs(this._y1.getValue(this._host)-this._effectiveY2)+this._lineWidth},e.prototype._computeAlignment=function(t,e){this._currentMeasure.left=t.left+Math.min(this._x1.getValue(this._host),this._effectiveX2)-this._lineWidth/2,this._currentMeasure.top=t.top+Math.min(this._y1.getValue(this._host),this._effectiveY2)-this._lineWidth/2},e.prototype.moveToVector3=function(t,e,i){if(void 0===i&&(i=!1),this._host&&this.parent===this._host._rootContainer){var r=this._host._getGlobalViewport(e),n=h.Vector3.Project(t,h.Matrix.Identity(),e.getTransformMatrix(),r);this._moveToProjectedPosition(n,i),n.z<0||n.z>1?this.notRenderable=!0:this.notRenderable=!1}else h.Tools.Error("Cannot move a control to a vector3 if the control is not at root level")},e.prototype._moveToProjectedPosition=function(t,e){void 0===e&&(e=!1);var i=t.x+this._linkOffsetX.getValue(this._host)+"px",r=t.y+this._linkOffsetY.getValue(this._host)+"px";e?(this.x2=i,this.y2=r,this._x2.ignoreAdaptiveScaling=!0,this._y2.ignoreAdaptiveScaling=!0):(this.x1=i,this.y1=r,this._x1.ignoreAdaptiveScaling=!0,this._y1.ignoreAdaptiveScaling=!0)},e}(_),P=function(){function t(t){this._multiLine=t,this._x=new a(0),this._y=new a(0),this._point=new h.Vector2(0,0)}return Object.defineProperty(t.prototype,"x",{get:function(){return this._x.toString(this._multiLine._host)},set:function(t){this._x.toString(this._multiLine._host)!==t&&this._x.fromString(t)&&this._multiLine._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y.toString(this._multiLine._host)},set:function(t){this._y.toString(this._multiLine._host)!==t&&this._y.fromString(t)&&this._multiLine._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"control",{get:function(){return this._control},set:function(t){this._control!==t&&(this._control&&this._controlObserver&&(this._control.onDirtyObservable.remove(this._controlObserver),this._controlObserver=null),this._control=t,this._control&&(this._controlObserver=this._control.onDirtyObservable.add(this._multiLine.onPointUpdate)),this._multiLine._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mesh",{get:function(){return this._mesh},set:function(t){this._mesh!==t&&(this._mesh&&this._meshObserver&&this._mesh.getScene().onAfterCameraRenderObservable.remove(this._meshObserver),this._mesh=t,this._mesh&&(this._meshObserver=this._mesh.getScene().onAfterCameraRenderObservable.add(this._multiLine.onPointUpdate)),this._multiLine._markAsDirty())},enumerable:!0,configurable:!0}),t.prototype.resetLinks=function(){this.control=null,this.mesh=null},t.prototype.translate=function(){return this._point=this._translatePoint(),this._point},t.prototype._translatePoint=function(){if(null!=this._mesh)return this._multiLine._host.getProjectedPosition(this._mesh.getBoundingInfo().boundingSphere.center,this._mesh.getWorldMatrix());if(null!=this._control)return new h.Vector2(this._control.centerX,this._control.centerY);var t=this._multiLine._host,e=this._x.getValueInPixel(t,Number(t._canvas.width)),i=this._y.getValueInPixel(t,Number(t._canvas.height));return new h.Vector2(e,i)},t.prototype.dispose=function(){this.resetLinks()},t}(),M=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._lineWidth=1,i.onPointUpdate=function(){i._markAsDirty()},i.isHitTestVisible=!1,i._horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,i._verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,i._dash=[],i._points=[],i}return n(e,t),Object.defineProperty(e.prototype,"dash",{get:function(){return this._dash},set:function(t){this._dash!==t&&(this._dash=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype.getAt=function(t){return this._points[t]||(this._points[t]=new P(this)),this._points[t]},e.prototype.add=function(){for(var t=this,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return e.map(function(e){return t.push(e)})},e.prototype.push=function(t){var e=this.getAt(this._points.length);return null==t?e:(t instanceof h.AbstractMesh?e.mesh=t:t instanceof _?e.control=t:null!=t.x&&null!=t.y&&(e.x=t.x,e.y=t.y),e)},e.prototype.remove=function(t){var e;if(t instanceof P){if(-1===(e=this._points.indexOf(t)))return}else e=t;var i=this._points[e];i&&(i.dispose(),this._points.splice(e,1))},e.prototype.reset=function(){for(;this._points.length>0;)this.remove(this._points.length-1)},e.prototype.resetLinks=function(){this._points.forEach(function(t){null!=t&&t.resetLinks()})},Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this._lineWidth},set:function(t){this._lineWidth!==t&&(this._lineWidth=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"horizontalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalAlignment",{set:function(t){},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"MultiLine"},e.prototype._draw=function(t){t.save(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._applyStates(t),t.strokeStyle=this.color,t.lineWidth=this._lineWidth,t.setLineDash(this._dash),t.beginPath();var e=!0;this._points.forEach(function(i){i&&(e?(t.moveTo(i._point.x,i._point.y),e=!1):t.lineTo(i._point.x,i._point.y))}),t.stroke(),t.restore()},e.prototype._additionalProcessing=function(t,e){var i=this;this._minX=null,this._minY=null,this._maxX=null,this._maxY=null,this._points.forEach(function(t,e){t&&(t.translate(),(null==i._minX||t._point.x<i._minX)&&(i._minX=t._point.x),(null==i._minY||t._point.y<i._minY)&&(i._minY=t._point.y),(null==i._maxX||t._point.x>i._maxX)&&(i._maxX=t._point.x),(null==i._maxY||t._point.y>i._maxY)&&(i._maxY=t._point.y))}),null==this._minX&&(this._minX=0),null==this._minY&&(this._minY=0),null==this._maxX&&(this._maxX=0),null==this._maxY&&(this._maxY=0)},e.prototype._measure=function(){null!=this._minX&&null!=this._maxX&&null!=this._minY&&null!=this._maxY&&(this._currentMeasure.width=Math.abs(this._maxX-this._minX)+this._lineWidth,this._currentMeasure.height=Math.abs(this._maxY-this._minY)+this._lineWidth)},e.prototype._computeAlignment=function(t,e){null!=this._minX&&null!=this._minY&&(this._currentMeasure.left=this._minX-this._lineWidth/2,this._currentMeasure.top=this._minY-this._lineWidth/2)},e.prototype.dispose=function(){this.reset(),t.prototype.dispose.call(this)},e}(_),k=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._isChecked=!1,i._background="black",i._checkSizeRatio=.8,i._thickness=1,i.group="",i.onIsCheckedChangedObservable=new h.Observable,i.isPointerBlocker=!0,i}return n(e,t),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness!==t&&(this._thickness=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checkSizeRatio",{get:function(){return this._checkSizeRatio},set:function(t){t=Math.max(Math.min(1,t),0),this._checkSizeRatio!==t&&(this._checkSizeRatio=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isChecked",{get:function(){return this._isChecked},set:function(t){var e=this;this._isChecked!==t&&(this._isChecked=t,this._markAsDirty(),this.onIsCheckedChangedObservable.notifyObservers(t),this._isChecked&&this._host&&this._host.executeOnAllControls(function(t){if(t!==e&&void 0!==t.group){var i=t;i.group===e.group&&(i.isChecked=!1)}}))},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"RadioButton"},e.prototype._draw=function(t){t.save(),this._applyStates(t);var e=this._currentMeasure.width-this._thickness,i=this._currentMeasure.height-this._thickness;if((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),_.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,this._currentMeasure.width/2-this._thickness/2,this._currentMeasure.height/2-this._thickness/2,t),t.fillStyle=this._isEnabled?this._background:this._disabledColor,t.fill(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this.color,t.lineWidth=this._thickness,t.stroke(),this._isChecked){t.fillStyle=this._isEnabled?this.color:this._disabledColor;var r=e*this._checkSizeRatio,n=i*this._checkSizeRatio;_.drawEllipse(this._currentMeasure.left+this._currentMeasure.width/2,this._currentMeasure.top+this._currentMeasure.height/2,r/2-this._thickness/2,n/2-this._thickness/2,t),t.fill()}t.restore()},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this.isChecked||(this.isChecked=!0),!0)},e.AddRadioButtonWithHeader=function(t,i,r,n){var o=new m;o.isVertical=!1,o.height="30px";var s=new e;s.width="20px",s.height="20px",s.isChecked=r,s.color="green",s.group=i,s.onIsCheckedChangedObservable.add(function(t){return n(s,t)}),o.addControl(s);var h=new p;return h.text=t,h.width="180px",h.paddingLeft="5px",h.textHorizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,h.color="white",o.addControl(h),o},e}(_),I=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._thumbWidth=new a(20,a.UNITMODE_PIXEL,!1),i._minimum=0,i._maximum=100,i._value=50,i._isVertical=!1,i._barOffset=new a(5,a.UNITMODE_PIXEL,!1),i._isThumbClamped=!1,i._displayThumb=!0,i._step=0,i._lastPointerDownID=-1,i._effectiveBarOffset=0,i.onValueChangedObservable=new h.Observable,i._pointerIsDown=!1,i.isPointerBlocker=!0,i}return n(e,t),Object.defineProperty(e.prototype,"displayThumb",{get:function(){return this._displayThumb},set:function(t){this._displayThumb!==t&&(this._displayThumb=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this._step},set:function(t){this._step!==t&&(this._step=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barOffset",{get:function(){return this._barOffset.toString(this._host)},set:function(t){this._barOffset.toString(this._host)!==t&&this._barOffset.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barOffsetInPixels",{get:function(){return this._barOffset.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbWidth",{get:function(){return this._thumbWidth.toString(this._host)},set:function(t){this._thumbWidth.toString(this._host)!==t&&this._thumbWidth.fromString(t)&&this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbWidthInPixels",{get:function(){return this._thumbWidth.getValueInPixel(this._host,this._cachedParentMeasure.width)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minimum",{get:function(){return this._minimum},set:function(t){this._minimum!==t&&(this._minimum=t,this._markAsDirty(),this.value=Math.max(Math.min(this.value,this._maximum),this._minimum))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maximum",{get:function(){return this._maximum},set:function(t){this._maximum!==t&&(this._maximum=t,this._markAsDirty(),this.value=Math.max(Math.min(this.value,this._maximum),this._minimum))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){t=Math.max(Math.min(t,this._maximum),this._minimum),this._value!==t&&(this._value=t,this._markAsDirty(),this.onValueChangedObservable.notifyObservers(this._value))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){this._isVertical!==t&&(this._isVertical=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isThumbClamped",{get:function(){return this._isThumbClamped},set:function(t){this._isThumbClamped!==t&&(this._isThumbClamped=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"BaseSlider"},e.prototype._getThumbPosition=function(){return this.isVertical?(this.maximum-this.value)/(this.maximum-this.minimum)*this._backgroundBoxLength:(this.value-this.minimum)/(this.maximum-this.minimum)*this._backgroundBoxLength},e.prototype._getThumbThickness=function(t){var e=0;switch(t){case"circle":e=this._thumbWidth.isPixel?Math.max(this._thumbWidth.getValue(this._host),this._backgroundBoxThickness):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host);break;case"rectangle":e=this._thumbWidth.isPixel?Math.min(this._thumbWidth.getValue(this._host),this._backgroundBoxThickness):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host)}return e},e.prototype._prepareRenderingData=function(t){this._effectiveBarOffset=0,this._renderLeft=this._currentMeasure.left,this._renderTop=this._currentMeasure.top,this._renderWidth=this._currentMeasure.width,this._renderHeight=this._currentMeasure.height,this._backgroundBoxLength=Math.max(this._currentMeasure.width,this._currentMeasure.height),this._backgroundBoxThickness=Math.min(this._currentMeasure.width,this._currentMeasure.height),this._effectiveThumbThickness=this._getThumbThickness(t),this.displayThumb&&(this._backgroundBoxLength-=this._effectiveThumbThickness),this.isVertical&&this._currentMeasure.height<this._currentMeasure.width?console.error("Height should be greater than width"):(this._barOffset.isPixel?this._effectiveBarOffset=Math.min(this._barOffset.getValue(this._host),this._backgroundBoxThickness):this._effectiveBarOffset=this._backgroundBoxThickness*this._barOffset.getValue(this._host),this._backgroundBoxThickness-=2*this._effectiveBarOffset,this.isVertical?(this._renderLeft+=this._effectiveBarOffset,!this.isThumbClamped&&this.displayThumb&&(this._renderTop+=this._effectiveThumbThickness/2),this._renderHeight=this._backgroundBoxLength,this._renderWidth=this._backgroundBoxThickness):(this._renderTop+=this._effectiveBarOffset,!this.isThumbClamped&&this.displayThumb&&(this._renderLeft+=this._effectiveThumbThickness/2),this._renderHeight=this._backgroundBoxThickness,this._renderWidth=this._backgroundBoxLength))},e.prototype._updateValueFromPointer=function(t,e){var i;0!=this.rotation&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y),i=this._isVertical?this._minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this._maximum-this._minimum):this._minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this._maximum-this._minimum);var r=1/this._step|0;this.value=this._step?(i*r|0)/r:i},e.prototype._onPointerDown=function(e,i,r,n){return!!t.prototype._onPointerDown.call(this,e,i,r,n)&&(this._pointerIsDown=!0,this._updateValueFromPointer(i.x,i.y),this._host._capturingControl[r]=this,this._lastPointerDownID=r,!0)},e.prototype._onPointerMove=function(e,i,r){r==this._lastPointerDownID&&(this._pointerIsDown&&this._updateValueFromPointer(i.x,i.y),t.prototype._onPointerMove.call(this,e,i,r))},e.prototype._onPointerUp=function(e,i,r,n,o){this._pointerIsDown=!1,delete this._host._capturingControl[r],t.prototype._onPointerUp.call(this,e,i,r,n,o)},e}(_),A=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._background="black",i._borderColor="white",i._isThumbCircle=!1,i._displayValueBar=!0,i}return n(e,t),Object.defineProperty(e.prototype,"displayValueBar",{get:function(){return this._displayValueBar},set:function(t){this._displayValueBar!==t&&(this._displayValueBar=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._borderColor},set:function(t){this._borderColor!==t&&(this._borderColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isThumbCircle",{get:function(){return this._isThumbCircle},set:function(t){this._isThumbCircle!==t&&(this._isThumbCircle=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Slider"},e.prototype._draw=function(t){t.save(),this._applyStates(t),this._prepareRenderingData(this.isThumbCircle?"circle":"rectangle");var e=this._renderLeft,i=this._renderTop,r=this._renderWidth,n=this._renderHeight,o=0;this.isThumbClamped&&this.isThumbCircle?(this.isVertical?i+=this._effectiveThumbThickness/2:e+=this._effectiveThumbThickness/2,o=this._backgroundBoxThickness/2):o=(this._effectiveThumbThickness-this._effectiveBarOffset)/2,(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY);var s=this._getThumbPosition();t.fillStyle=this._background,this.isVertical?this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(e+this._backgroundBoxThickness/2,i,o,Math.PI,2*Math.PI),t.fill(),t.fillRect(e,i,r,n)):t.fillRect(e,i,r,n+this._effectiveThumbThickness):t.fillRect(e,i,r,n):this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(e+this._backgroundBoxLength,i+this._backgroundBoxThickness/2,o,0,2*Math.PI),t.fill(),t.fillRect(e,i,r,n)):t.fillRect(e,i,r+this._effectiveThumbThickness,n):t.fillRect(e,i,r,n),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.fillStyle=this.color,this._displayValueBar&&(this.isVertical?this.isThumbClamped?this.isThumbCircle?(t.beginPath(),t.arc(e+this._backgroundBoxThickness/2,i+this._backgroundBoxLength,o,0,2*Math.PI),t.fill(),t.fillRect(e,i+s,r,n-s)):t.fillRect(e,i+s,r,n-s+this._effectiveThumbThickness):t.fillRect(e,i+s,r,n-s):this.isThumbClamped&&this.isThumbCircle?(t.beginPath(),t.arc(e,i+this._backgroundBoxThickness/2,o,0,2*Math.PI),t.fill(),t.fillRect(e,i,s,n)):t.fillRect(e,i,s,n)),this.displayThumb&&((this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffsetX,t.shadowOffsetY=this.shadowOffsetY),this._isThumbCircle?(t.beginPath(),this.isVertical?t.arc(e+this._backgroundBoxThickness/2,i+s,o,0,2*Math.PI):t.arc(e+s,i+this._backgroundBoxThickness/2,o,0,2*Math.PI),t.fill(),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this._borderColor,t.stroke()):(this.isVertical?t.fillRect(e-this._effectiveBarOffset,this._currentMeasure.top+s,this._currentMeasure.width,this._effectiveThumbThickness):t.fillRect(this._currentMeasure.left+s,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height),(this.shadowBlur||this.shadowOffsetX||this.shadowOffsetY)&&(t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0),t.strokeStyle=this._borderColor,this.isVertical?t.strokeRect(e-this._effectiveBarOffset,this._currentMeasure.top+s,this._currentMeasure.width,this._effectiveThumbThickness):t.strokeRect(this._currentMeasure.left+s,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height))),t.restore()},e}(I),E=function(){function t(t){this.name=t,this._groupPanel=new m,this._selectors=new Array,this._groupPanel.verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,this._groupPanel.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,this._groupHeader=this._addGroupHeader(t)}return Object.defineProperty(t.prototype,"groupPanel",{get:function(){return this._groupPanel},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectors",{get:function(){return this._selectors},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"header",{get:function(){return this._groupHeader.text},set:function(t){"label"!==this._groupHeader.text&&(this._groupHeader.text=t)},enumerable:!0,configurable:!0}),t.prototype._addGroupHeader=function(t){var e=new p("groupHead",t);return e.width=.9,e.height="30px",e.textWrapping=!0,e.color="black",e.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,e.textHorizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,e.left="2px",this._groupPanel.addControl(e),e},t.prototype._getSelector=function(t){if(!(t<0||t>=this._selectors.length))return this._selectors[t]},t.prototype.removeSelector=function(t){t<0||t>=this._selectors.length||(this._groupPanel.removeControl(this._selectors[t]),this._selectors.splice(t,1))},t}(),S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.addCheckbox=function(t,e,i){void 0===e&&(e=function(t){}),void 0===i&&(i=!1);i=i||!1;var r=new y;r.width="20px",r.height="20px",r.color="#364249",r.background="#CCCCCC",r.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,r.onIsCheckedChangedObservable.add(function(t){e(t)});var n=_.AddHeader(r,t,"200px",{isHorizontal:!0,controlFirst:!0});n.height="30px",n.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,n.left="4px",this.groupPanel.addControl(n),this.selectors.push(n),r.isChecked=i,this.groupPanel.parent&&this.groupPanel.parent.parent&&(r.color=this.groupPanel.parent.parent.buttonColor,r.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[1].text=e},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[0].background=e},e}(E),D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._selectNb=0,e}return n(e,t),e.prototype.addRadio=function(t,e,i){void 0===e&&(e=function(t){}),void 0===i&&(i=!1);var r=this._selectNb++,n=new k;n.name=t,n.width="20px",n.height="20px",n.color="#364249",n.background="#CCCCCC",n.group=this.name,n.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,n.onIsCheckedChangedObservable.add(function(t){t&&e(r)});var o=_.AddHeader(n,t,"200px",{isHorizontal:!0,controlFirst:!0});o.height="30px",o.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,o.left="4px",this.groupPanel.addControl(o),this.selectors.push(o),n.isChecked=i,this.groupPanel.parent&&this.groupPanel.parent.parent&&(n.color=this.groupPanel.parent.parent.buttonColor,n.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[1].text=e},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[0].background=e},e}(E),R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.addSlider=function(t,e,i,r,n,o,s){void 0===e&&(e=function(t){}),void 0===i&&(i="Units"),void 0===r&&(r=0),void 0===n&&(n=0),void 0===o&&(o=0),void 0===s&&(s=function(t){return 0|t});var h=new A;h.name=i,h.value=o,h.minimum=r,h.maximum=n,h.width=.9,h.height="20px",h.color="#364249",h.background="#CCCCCC",h.borderColor="black",h.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,h.left="4px",h.paddingBottom="4px",h.onValueChangedObservable.add(function(t){h.parent.children[0].text=h.parent.children[0].name+": "+s(t)+" "+h.name,e(t)});var a=_.AddHeader(h,t+": "+s(o)+" "+i,"30px",{isHorizontal:!1,controlFirst:!1});a.height="60px",a.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,a.left="4px",a.children[0].name=t,this.groupPanel.addControl(a),this.selectors.push(a),this.groupPanel.parent&&this.groupPanel.parent.parent&&(h.color=this.groupPanel.parent.parent.buttonColor,h.background=this.groupPanel.parent.parent.buttonBackground)},e.prototype._setSelectorLabel=function(t,e){this.selectors[t].children[0].name=e,this.selectors[t].children[0].text=e+": "+this.selectors[t].children[1].value+" "+this.selectors[t].children[1].name},e.prototype._setSelectorLabelColor=function(t,e){this.selectors[t].children[0].color=e},e.prototype._setSelectorButtonColor=function(t,e){this.selectors[t].children[1].color=e},e.prototype._setSelectorButtonBackground=function(t,e){this.selectors[t].children[1].background=e},e}(E),L=function(t){function e(e,i){void 0===i&&(i=[]);var r=t.call(this,e)||this;if(r.name=e,r.groups=i,r._buttonColor="#364249",r._buttonBackground="#CCCCCC",r._headerColor="black",r._barColor="white",r._barHeight="2px",r._spacerHeight="20px",r._bars=new Array,r._groups=i,r.thickness=2,r._panel=new m,r._panel.verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,r._panel.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,r._panel.top=5,r._panel.left=5,r._panel.width=.95,i.length>0){for(var n=0;n<i.length-1;n++)r._panel.addControl(i[n].groupPanel),r._addSpacer();r._panel.addControl(i[i.length-1].groupPanel)}return r.addControl(r._panel),r}return n(e,t),e.prototype._getTypeName=function(){return"SelectionPanel"},Object.defineProperty(e.prototype,"headerColor",{get:function(){return this._headerColor},set:function(t){this._headerColor!==t&&(this._headerColor=t,this._setHeaderColor())},enumerable:!0,configurable:!0}),e.prototype._setHeaderColor=function(){for(var t=0;t<this._groups.length;t++)this._groups[t].groupPanel.children[0].color=this._headerColor},Object.defineProperty(e.prototype,"buttonColor",{get:function(){return this._buttonColor},set:function(t){this._buttonColor!==t&&(this._buttonColor=t,this._setbuttonColor())},enumerable:!0,configurable:!0}),e.prototype._setbuttonColor=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorButtonColor(e,this._buttonColor)},Object.defineProperty(e.prototype,"labelColor",{get:function(){return this._labelColor},set:function(t){this._labelColor!==t&&(this._labelColor=t,this._setLabelColor())},enumerable:!0,configurable:!0}),e.prototype._setLabelColor=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorLabelColor(e,this._labelColor)},Object.defineProperty(e.prototype,"buttonBackground",{get:function(){return this._buttonBackground},set:function(t){this._buttonBackground!==t&&(this._buttonBackground=t,this._setButtonBackground())},enumerable:!0,configurable:!0}),e.prototype._setButtonBackground=function(){for(var t=0;t<this._groups.length;t++)for(var e=0;e<this._groups[t].selectors.length;e++)this._groups[t]._setSelectorButtonBackground(e,this._buttonBackground)},Object.defineProperty(e.prototype,"barColor",{get:function(){return this._barColor},set:function(t){this._barColor!==t&&(this._barColor=t,this._setBarColor())},enumerable:!0,configurable:!0}),e.prototype._setBarColor=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].children[0].background=this._barColor},Object.defineProperty(e.prototype,"barHeight",{get:function(){return this._barHeight},set:function(t){this._barHeight!==t&&(this._barHeight=t,this._setBarHeight())},enumerable:!0,configurable:!0}),e.prototype._setBarHeight=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].children[0].height=this._barHeight},Object.defineProperty(e.prototype,"spacerHeight",{get:function(){return this._spacerHeight},set:function(t){this._spacerHeight!==t&&(this._spacerHeight=t,this._setSpacerHeight())},enumerable:!0,configurable:!0}),e.prototype._setSpacerHeight=function(){for(var t=0;t<this._bars.length;t++)this._bars[t].height=this._spacerHeight},e.prototype._addSpacer=function(){var t=new d;t.width=1,t.height=this._spacerHeight,t.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT;var e=new f;e.width=1,e.height=this._barHeight,e.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,e.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,e.background=this._barColor,e.color="transparent",t.addControl(e),this._panel.addControl(t),this._bars.push(t)},e.prototype.addGroup=function(t){this._groups.length>0&&this._addSpacer(),this._panel.addControl(t.groupPanel),this._groups.push(t),t.groupPanel.children[0].color=this._headerColor;for(var e=0;e<t.selectors.length;e++)t._setSelectorButtonColor(e,this._buttonColor),t._setSelectorButtonBackground(e,this._buttonBackground)},e.prototype.removeGroup=function(t){if(!(t<0||t>=this._groups.length)){var e=this._groups[t];this._panel.removeControl(e.groupPanel),this._groups.splice(t,1),t<this._bars.length&&(this._panel.removeControl(this._bars[t]),this._bars.splice(t,1))}},e.prototype.setHeaderName=function(t,e){e<0||e>=this._groups.length||(this._groups[e].groupPanel.children[0].text=t)},e.prototype.relabel=function(t,e,i){if(!(e<0||e>=this._groups.length)){var r=this._groups[e];i<0||i>=r.selectors.length||r._setSelectorLabel(i,t)}},e.prototype.removeFromGroupSelector=function(t,e){if(!(t<0||t>=this._groups.length)){var i=this._groups[t];e<0||e>=i.selectors.length||i.removeSelector(e)}},e.prototype.addToGroupCheckbox=function(t,e,i,r){(void 0===i&&(i=function(){}),void 0===r&&(r=!1),t<0||t>=this._groups.length)||this._groups[t].addCheckbox(e,i,r)},e.prototype.addToGroupRadio=function(t,e,i,r){(void 0===i&&(i=function(){}),void 0===r&&(r=!1),t<0||t>=this._groups.length)||this._groups[t].addRadio(e,i,r)},e.prototype.addToGroupSlider=function(t,e,i,r,n,o,s,h){(void 0===i&&(i=function(){}),void 0===r&&(r="Units"),void 0===n&&(n=0),void 0===o&&(o=0),void 0===s&&(s=0),void 0===h&&(h=function(t){return 0|t}),t<0||t>=this._groups.length)||this._groups[t].addSlider(e,i,r,n,o,s,h)},e}(f),N=function(t){function e(e){return t.call(this,e)||this}return n(e,t),e.prototype._getTypeName=function(){return"ScrollViewerWindow"},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._measureForChildren.left=this._currentMeasure.left,this._measureForChildren.top=this._currentMeasure.top,this._measureForChildren.width=e.width,this._measureForChildren.height=e.height},e.prototype._postMeasure=function(){for(var e=this.parentClientWidth,i=this.parentClientHeight,r=0,n=this.children;r<n.length;r++){var o=n[r];o.isVisible&&!o.notRenderable&&(o.horizontalAlignment===_.HORIZONTAL_ALIGNMENT_CENTER&&o._offsetLeft(this._currentMeasure.left-o._currentMeasure.left),o.verticalAlignment===_.VERTICAL_ALIGNMENT_CENTER&&o._offsetTop(this._currentMeasure.top-o._currentMeasure.top),e=Math.max(e,o._currentMeasure.left-this._currentMeasure.left+o._currentMeasure.width),i=Math.max(i,o._currentMeasure.top-this._currentMeasure.top+o._currentMeasure.height))}this._currentMeasure.width!==e&&(this._width.updateInPlace(e,a.UNITMODE_PIXEL),this._currentMeasure.width=e,this._rebuildLayout=!0,this._isDirty=!0),this._currentMeasure.height!==i&&(this._height.updateInPlace(i,a.UNITMODE_PIXEL),this._currentMeasure.height=i,this._rebuildLayout=!0,this._isDirty=!0),t.prototype._postMeasure.call(this)},e}(d),B=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._background="black",i._borderColor="white",i._thumbMeasure=new l(0,0,0,0),i}return n(e,t),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._borderColor},set:function(t){this._borderColor!==t&&(this._borderColor=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"Scrollbar"},e.prototype._getThumbThickness=function(){return this._thumbWidth.isPixel?this._thumbWidth.getValue(this._host):this._backgroundBoxThickness*this._thumbWidth.getValue(this._host)},e.prototype._draw=function(t){t.save(),this._applyStates(t),this._prepareRenderingData("rectangle");var e=this._renderLeft,i=this._getThumbPosition();t.fillStyle=this._background,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height),t.fillStyle=this.color,this.isVertical?(this._thumbMeasure.left=e-this._effectiveBarOffset,this._thumbMeasure.top=this._currentMeasure.top+i,this._thumbMeasure.width=this._currentMeasure.width,this._thumbMeasure.height=this._effectiveThumbThickness):(this._thumbMeasure.left=this._currentMeasure.left+i,this._thumbMeasure.top=this._currentMeasure.top,this._thumbMeasure.width=this._effectiveThumbThickness,this._thumbMeasure.height=this._currentMeasure.height),t.fillRect(this._thumbMeasure.left,this._thumbMeasure.top,this._thumbMeasure.width,this._thumbMeasure.height),t.restore()},e.prototype._updateValueFromPointer=function(t,e){0!=this.rotation&&(this._invertTransformMatrix.transformCoordinates(t,e,this._transformedPosition),t=this._transformedPosition.x,e=this._transformedPosition.y),this._first&&(this._first=!1,this._originX=t,this._originY=e,(t<this._thumbMeasure.left||t>this._thumbMeasure.left+this._thumbMeasure.width||e<this._thumbMeasure.top||e>this._thumbMeasure.top+this._thumbMeasure.height)&&(this.isVertical?this.value=this.minimum+(1-(e-this._currentMeasure.top)/this._currentMeasure.height)*(this.maximum-this.minimum):this.value=this.minimum+(t-this._currentMeasure.left)/this._currentMeasure.width*(this.maximum-this.minimum)));var i=0;i=this.isVertical?-(e-this._originY)/(this._currentMeasure.height-this._effectiveThumbThickness):(t-this._originX)/(this._currentMeasure.width-this._effectiveThumbThickness),this.value+=i*(this.maximum-this.minimum),this._originX=t,this._originY=e},e.prototype._onPointerDown=function(e,i,r,n){return this._first=!0,t.prototype._onPointerDown.call(this,e,i,r,n)},e}(I),H=function(t){function e(e){var i=t.call(this,e)||this;return i._barSize=20,i._pointerIsOver=!1,i._wheelPrecision=.05,i.onDirtyObservable.add(function(){i._horizontalBarSpace.color=i.color,i._verticalBarSpace.color=i.color,i._dragSpace.color=i.color}),i.onPointerEnterObservable.add(function(){i._pointerIsOver=!0}),i.onPointerOutObservable.add(function(){i._pointerIsOver=!1}),i._grid=new O,i._horizontalBar=new B,i._verticalBar=new B,i._window=new N,i._window.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,i._window.verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,i._grid.addColumnDefinition(1),i._grid.addColumnDefinition(0,!0),i._grid.addRowDefinition(1),i._grid.addRowDefinition(0,!0),t.prototype.addControl.call(i,i._grid),i._grid.addControl(i._window,0,0),i._verticalBar.paddingLeft=0,i._verticalBar.width="100%",i._verticalBar.height="100%",i._verticalBar.barOffset=0,i._verticalBar.value=0,i._verticalBar.maximum=1,i._verticalBar.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_CENTER,i._verticalBar.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,i._verticalBar.isVertical=!0,i._verticalBar.rotation=Math.PI,i._verticalBar.isVisible=!1,i._verticalBarSpace=new f,i._verticalBarSpace.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,i._verticalBarSpace.verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,i._verticalBarSpace.thickness=1,i._grid.addControl(i._verticalBarSpace,0,1),i._verticalBarSpace.addControl(i._verticalBar),i._verticalBar.onValueChangedObservable.add(function(t){i._window.top=t*i._endTop+"px"}),i._horizontalBar.paddingLeft=0,i._horizontalBar.width="100%",i._horizontalBar.height="100%",i._horizontalBar.barOffset=0,i._horizontalBar.value=0,i._horizontalBar.maximum=1,i._horizontalBar.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_CENTER,i._horizontalBar.verticalAlignment=_.VERTICAL_ALIGNMENT_CENTER,i._horizontalBar.isVisible=!1,i._horizontalBarSpace=new f,i._horizontalBarSpace.horizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,i._horizontalBarSpace.verticalAlignment=_.VERTICAL_ALIGNMENT_TOP,i._horizontalBarSpace.thickness=1,i._grid.addControl(i._horizontalBarSpace,1,0),i._horizontalBarSpace.addControl(i._horizontalBar),i._horizontalBar.onValueChangedObservable.add(function(t){i._window.left=t*i._endLeft+"px"}),i._dragSpace=new f,i._dragSpace.thickness=1,i._grid.addControl(i._dragSpace,1,1),i.barColor="grey",i.barBackground="transparent",i}return n(e,t),Object.defineProperty(e.prototype,"horizontalBar",{get:function(){return this._horizontalBar},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"verticalBar",{get:function(){return this._verticalBar},enumerable:!0,configurable:!0}),e.prototype.addControl=function(t){return t?(this._window.addControl(t),this):this},e.prototype.removeControl=function(t){return this._window.removeControl(t),this},Object.defineProperty(e.prototype,"children",{get:function(){return this._window.children},enumerable:!0,configurable:!0}),e.prototype._flagDescendantsAsMatrixDirty=function(){for(var t=0,e=this._children;t<e.length;t++){e[t]._markMatrixAsDirty()}},e.prototype.resetWindow=function(){this._window.width="100%",this._window.height="100%"},e.prototype._getTypeName=function(){return"ScrollViewer"},e.prototype._buildClientSizes=function(){this._window.parentClientWidth=this._currentMeasure.width-(this._verticalBar.isVisible?this._barSize:0)-2*this.thickness,this._window.parentClientHeight=this._currentMeasure.height-(this._horizontalBar.isVisible?this._barSize:0)-2*this.thickness,this._clientWidth=this._window.parentClientWidth,this._clientHeight=this._window.parentClientHeight},e.prototype._additionalProcessing=function(e,i){t.prototype._additionalProcessing.call(this,e,i),this._buildClientSizes()},e.prototype._postMeasure=function(){t.prototype._postMeasure.call(this),this._updateScroller()},Object.defineProperty(e.prototype,"wheelPrecision",{get:function(){return this._wheelPrecision},set:function(t){this._wheelPrecision!==t&&(t<0&&(t=0),t>1&&(t=1),this._wheelPrecision=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barColor",{get:function(){return this._barColor},set:function(t){this._barColor!==t&&(this._barColor=t,this._horizontalBar.color=t,this._verticalBar.color=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barSize",{get:function(){return this._barSize},set:function(t){this._barSize!==t&&(this._barSize=t,this._markAsDirty(),this._horizontalBar.isVisible&&this._grid.setRowDefinition(1,this._barSize,!0),this._verticalBar.isVisible&&this._grid.setColumnDefinition(1,this._barSize,!0))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"barBackground",{get:function(){return this._barBackground},set:function(t){this._barBackground!==t&&(this._barBackground=t,this._horizontalBar.background=t,this._verticalBar.background=t,this._dragSpace.background=t)},enumerable:!0,configurable:!0}),e.prototype._updateScroller=function(){var t=this._window._currentMeasure.width,e=this._window._currentMeasure.height;this._horizontalBar.isVisible&&t<=this._clientWidth?(this._grid.setRowDefinition(1,0,!0),this._horizontalBar.isVisible=!1,this._horizontalBar.value=0,this._rebuildLayout=!0):!this._horizontalBar.isVisible&&t>this._clientWidth&&(this._grid.setRowDefinition(1,this._barSize,!0),this._horizontalBar.isVisible=!0,this._rebuildLayout=!0),this._verticalBar.isVisible&&e<=this._clientHeight?(this._grid.setColumnDefinition(1,0,!0),this._verticalBar.isVisible=!1,this._verticalBar.value=0,this._rebuildLayout=!0):!this._verticalBar.isVisible&&e>this._clientHeight&&(this._grid.setColumnDefinition(1,this._barSize,!0),this._verticalBar.isVisible=!0,this._rebuildLayout=!0),this._buildClientSizes(),this._endLeft=this._clientWidth-t,this._endTop=this._clientHeight-e;var i=this._horizontalBar.value*this._endLeft+"px",r=this._verticalBar.value*this._endTop+"px";i!==this._window.left&&(this._window.left=i,this._rebuildLayout=!0),r!==this._window.top&&(this._window.top=r,this._rebuildLayout=!0);var n=this._clientWidth/t,o=this._clientHeight/e;this._horizontalBar.thumbWidth=this._clientWidth*n+"px",this._verticalBar.thumbWidth=this._clientHeight*o+"px"},e.prototype._link=function(e){t.prototype._link.call(this,e),this._attachWheel()},e.prototype._attachWheel=function(){var t=this;if(this._host&&!this._onPointerObserver){var e=this._host.getScene();this._onPointerObserver=e.onPointerObservable.add(function(e,i){t._pointerIsOver&&e.type===h.PointerEventTypes.POINTERWHEEL&&(1==t._verticalBar.isVisible&&(e.event.deltaY<0&&t._verticalBar.value>0?t._verticalBar.value-=t._wheelPrecision:e.event.deltaY>0&&t._verticalBar.value<t._verticalBar.maximum&&(t._verticalBar.value+=t._wheelPrecision)),1==t._horizontalBar.isVisible&&(e.event.deltaX<0&&t._horizontalBar.value<t._horizontalBar.maximum?t._horizontalBar.value+=t._wheelPrecision:e.event.deltaX>0&&t._horizontalBar.value>0&&(t._horizontalBar.value-=t._wheelPrecision)))})}},e.prototype._renderHighlightSpecific=function(e){this.isHighlighted&&(t.prototype._renderHighlightSpecific.call(this,e),this._grid._renderHighlightSpecific(e),e.restore())},e.prototype.dispose=function(){var e=this._host.getScene();e&&this._onPointerObserver&&(e.onPointerObservable.remove(this._onPointerObserver),this._onPointerObserver=null),t.prototype.dispose.call(this)},e}(f),V=function(){return function(){}}(),F=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onKeyPressObservable=new h.Observable,e.defaultButtonWidth="40px",e.defaultButtonHeight="40px",e.defaultButtonPaddingLeft="2px",e.defaultButtonPaddingRight="2px",e.defaultButtonPaddingTop="2px",e.defaultButtonPaddingBottom="2px",e.defaultButtonColor="#DDD",e.defaultButtonBackground="#070707",e.shiftButtonColor="#7799FF",e.selectedShiftThickness=1,e.shiftState=0,e._currentlyConnectedInputText=null,e._connectedInputTexts=[],e._onKeyPressObserver=null,e}return n(e,t),e.prototype._getTypeName=function(){return"VirtualKeyboard"},e.prototype._createKey=function(t,e){var i=this,r=b.CreateSimpleButton(t,t);return r.width=e&&e.width?e.width:this.defaultButtonWidth,r.height=e&&e.height?e.height:this.defaultButtonHeight,r.color=e&&e.color?e.color:this.defaultButtonColor,r.background=e&&e.background?e.background:this.defaultButtonBackground,r.paddingLeft=e&&e.paddingLeft?e.paddingLeft:this.defaultButtonPaddingLeft,r.paddingRight=e&&e.paddingRight?e.paddingRight:this.defaultButtonPaddingRight,r.paddingTop=e&&e.paddingTop?e.paddingTop:this.defaultButtonPaddingTop,r.paddingBottom=e&&e.paddingBottom?e.paddingBottom:this.defaultButtonPaddingBottom,r.thickness=0,r.isFocusInvisible=!0,r.shadowColor=this.shadowColor,r.shadowBlur=this.shadowBlur,r.shadowOffsetX=this.shadowOffsetX,r.shadowOffsetY=this.shadowOffsetY,r.onPointerUpObservable.add(function(){i.onKeyPressObservable.notifyObservers(t)}),r},e.prototype.addKeysRow=function(t,e){var i=new m;i.isVertical=!1,i.isFocusInvisible=!0;for(var r=null,n=0;n<t.length;n++){var o=null;e&&e.length===t.length&&(o=e[n]);var s=this._createKey(t[n],o);(!r||s.heightInPixels>r.heightInPixels)&&(r=s),i.addControl(s)}i.height=r?r.height:this.defaultButtonHeight,this.addControl(i)},e.prototype.applyShiftState=function(t){if(this.children)for(var e=0;e<this.children.length;e++){var i=this.children[e];if(i&&i.children)for(var r=i,n=0;n<r.children.length;n++){var o=r.children[n];if(o&&o.children[0]){var s=o.children[0];"⇧"===s.text&&(o.color=t?this.shiftButtonColor:this.defaultButtonColor,o.thickness=t>1?this.selectedShiftThickness:0),s.text=t>0?s.text.toUpperCase():s.text.toLowerCase()}}}},Object.defineProperty(e.prototype,"connectedInputText",{get:function(){return this._currentlyConnectedInputText},enumerable:!0,configurable:!0}),e.prototype.connect=function(t){var e=this;if(!this._connectedInputTexts.some(function(e){return e.input===t})){null===this._onKeyPressObserver&&(this._onKeyPressObserver=this.onKeyPressObservable.add(function(t){if(e._currentlyConnectedInputText){switch(e._currentlyConnectedInputText._host.focusedControl=e._currentlyConnectedInputText,t){case"⇧":return e.shiftState++,e.shiftState>2&&(e.shiftState=0),void e.applyShiftState(e.shiftState);case"←":return void e._currentlyConnectedInputText.processKey(8);case"↵":return void e._currentlyConnectedInputText.processKey(13)}e._currentlyConnectedInputText.processKey(-1,e.shiftState?t.toUpperCase():t),1===e.shiftState&&(e.shiftState=0,e.applyShiftState(e.shiftState))}})),this.isVisible=!1,this._currentlyConnectedInputText=t,t._connectedVirtualKeyboard=this;var i=t.onFocusObservable.add(function(){e._currentlyConnectedInputText=t,t._connectedVirtualKeyboard=e,e.isVisible=!0}),r=t.onBlurObservable.add(function(){t._connectedVirtualKeyboard=null,e._currentlyConnectedInputText=null,e.isVisible=!1});this._connectedInputTexts.push({input:t,onBlurObserver:r,onFocusObserver:i})}},e.prototype.disconnect=function(t){var e=this;if(t){var i=this._connectedInputTexts.filter(function(e){return e.input===t});1===i.length&&(this._removeConnectedInputObservables(i[0]),this._connectedInputTexts=this._connectedInputTexts.filter(function(e){return e.input!==t}),this._currentlyConnectedInputText===t&&(this._currentlyConnectedInputText=null))}else this._connectedInputTexts.forEach(function(t){e._removeConnectedInputObservables(t)}),this._connectedInputTexts=[];0===this._connectedInputTexts.length&&(this._currentlyConnectedInputText=null,this.onKeyPressObservable.remove(this._onKeyPressObserver),this._onKeyPressObserver=null)},e.prototype._removeConnectedInputObservables=function(t){t.input._connectedVirtualKeyboard=null,t.input.onFocusObservable.remove(t.onFocusObserver),t.input.onBlurObservable.remove(t.onBlurObserver)},e.prototype.dispose=function(){t.prototype.dispose.call(this),this.disconnect()},e.CreateDefaultLayout=function(t){var i=new e(t);return i.addKeysRow(["1","2","3","4","5","6","7","8","9","0","←"]),i.addKeysRow(["q","w","e","r","t","y","u","i","o","p"]),i.addKeysRow(["a","s","d","f","g","h","j","k","l",";","'","↵"]),i.addKeysRow(["⇧","z","x","c","v","b","n","m",",",".","/"]),i.addKeysRow([" "],[{width:"200px"}]),i},e}(m),j=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._cellWidth=20,i._cellHeight=20,i._minorLineTickness=1,i._minorLineColor="DarkGray",i._majorLineTickness=2,i._majorLineColor="White",i._majorLineFrequency=5,i._background="Black",i._displayMajorLines=!0,i._displayMinorLines=!0,i}return n(e,t),Object.defineProperty(e.prototype,"displayMinorLines",{get:function(){return this._displayMinorLines},set:function(t){this._displayMinorLines!==t&&(this._displayMinorLines=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayMajorLines",{get:function(){return this._displayMajorLines},set:function(t){this._displayMajorLines!==t&&(this._displayMajorLines=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellWidth",{get:function(){return this._cellWidth},set:function(t){this._cellWidth=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cellHeight",{get:function(){return this._cellHeight},set:function(t){this._cellHeight=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minorLineTickness",{get:function(){return this._minorLineTickness},set:function(t){this._minorLineTickness=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minorLineColor",{get:function(){return this._minorLineColor},set:function(t){this._minorLineColor=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineTickness",{get:function(){return this._majorLineTickness},set:function(t){this._majorLineTickness=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineColor",{get:function(){return this._majorLineColor},set:function(t){this._majorLineColor=t,this._markAsDirty()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"majorLineFrequency",{get:function(){return this._majorLineFrequency},set:function(t){this._majorLineFrequency=t,this._markAsDirty()},enumerable:!0,configurable:!0}),e.prototype._draw=function(t){if(t.save(),this._applyStates(t),this._isEnabled){this._background&&(t.fillStyle=this._background,t.fillRect(this._currentMeasure.left,this._currentMeasure.top,this._currentMeasure.width,this._currentMeasure.height));var e=this._currentMeasure.width/this._cellWidth,i=this._currentMeasure.height/this._cellHeight,r=this._currentMeasure.left+this._currentMeasure.width/2,n=this._currentMeasure.top+this._currentMeasure.height/2;if(this._displayMinorLines){t.strokeStyle=this._minorLineColor,t.lineWidth=this._minorLineTickness;for(var o=-e/2;o<e/2;o++){var s=r+o*this.cellWidth;t.beginPath(),t.moveTo(s,this._currentMeasure.top),t.lineTo(s,this._currentMeasure.top+this._currentMeasure.height),t.stroke()}for(var h=-i/2;h<i/2;h++){var a=n+h*this.cellHeight;t.beginPath(),t.moveTo(this._currentMeasure.left,a),t.lineTo(this._currentMeasure.left+this._currentMeasure.width,a),t.stroke()}}if(this._displayMajorLines){t.strokeStyle=this._majorLineColor,t.lineWidth=this._majorLineTickness;for(o=-e/2+this._majorLineFrequency;o<e/2;o+=this._majorLineFrequency){s=r+o*this.cellWidth;t.beginPath(),t.moveTo(s,this._currentMeasure.top),t.lineTo(s,this._currentMeasure.top+this._currentMeasure.height),t.stroke()}for(h=-i/2+this._majorLineFrequency;h<i/2;h+=this._majorLineFrequency){a=n+h*this.cellHeight;t.moveTo(this._currentMeasure.left,a),t.lineTo(this._currentMeasure.left+this._currentMeasure.width,a),t.closePath(),t.stroke()}}}t.restore()},e.prototype._getTypeName=function(){return"DisplayGrid"},e}(_),W=function(t){function e(e){var i=t.call(this,e)||this;return i.name=e,i._tempMeasure=new l(0,0,0,0),i}return n(e,t),Object.defineProperty(e.prototype,"displayThumb",{get:function(){return this._displayThumb&&null!=this.thumbImage},set:function(t){this._displayThumb!==t&&(this._displayThumb=t,this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundImage",{get:function(){return this._backgroundImage},set:function(t){var e=this;this._backgroundImage!==t&&(this._backgroundImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valueBarImage",{get:function(){return this._valueBarImage},set:function(t){var e=this;this._valueBarImage!==t&&(this._valueBarImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"thumbImage",{get:function(){return this._thumbImage},set:function(t){var e=this;this._thumbImage!==t&&(this._thumbImage=t,t&&!t.isLoaded&&t.onImageLoadedObservable.addOnce(function(){return e._markAsDirty()}),this._markAsDirty())},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"ImageBasedSlider"},e.prototype._draw=function(t){t.save(),this._applyStates(t),this._prepareRenderingData("rectangle");var e=this._getThumbPosition(),i=this._renderLeft,r=this._renderTop,n=this._renderWidth,o=this._renderHeight;this._backgroundImage&&(this._tempMeasure.copyFromFloats(i,r,n,o),this.isThumbClamped&&this.displayThumb&&(this.isVertical?this._tempMeasure.height+=this._effectiveThumbThickness:this._tempMeasure.width+=this._effectiveThumbThickness),this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure),this._backgroundImage._draw(t)),this._valueBarImage&&(this.isVertical?this.isThumbClamped&&this.displayThumb?this._tempMeasure.copyFromFloats(i,r+e,n,o-e+this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(i,r+e,n,o-e):this.isThumbClamped&&this.displayThumb?this._tempMeasure.copyFromFloats(i,r,e+this._effectiveThumbThickness/2,o):this._tempMeasure.copyFromFloats(i,r,e,o),this._valueBarImage._currentMeasure.copyFrom(this._tempMeasure),this._valueBarImage._draw(t)),this.displayThumb&&(this.isVertical?this._tempMeasure.copyFromFloats(i-this._effectiveBarOffset,this._currentMeasure.top+e,this._currentMeasure.width,this._effectiveThumbThickness):this._tempMeasure.copyFromFloats(this._currentMeasure.left+e,this._currentMeasure.top,this._effectiveThumbThickness,this._currentMeasure.height),this._thumbImage._currentMeasure.copyFrom(this._tempMeasure),this._thumbImage._draw(t)),t.restore()},e}(I);_.AddHeader=function(t,e,i,r){var n=new m("panel"),o=!r||r.isHorizontal,s=!r||r.controlFirst;n.isVertical=!o;var h=new p("header");return h.text=e,h.textHorizontalAlignment=_.HORIZONTAL_ALIGNMENT_LEFT,o?h.width=i:h.height=i,s?(n.addControl(t),n.addControl(h),h.paddingLeft="5px"):(n.addControl(h),n.addControl(t),h.paddingRight="5px"),h.shadowBlur=t.shadowBlur,h.shadowColor=t.shadowColor,h.shadowOffsetX=t.shadowOffsetX,h.shadowOffsetY=t.shadowOffsetY,n};var z=function(){function t(t){this._fontFamily="Arial",this._fontStyle="",this._fontWeight="",this._fontSize=new a(18,a.UNITMODE_PIXEL,!1),this.onChangedObservable=new h.Observable,this._host=t}return Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._fontSize.toString(this._host)},set:function(t){this._fontSize.toString(this._host)!==t&&this._fontSize.fromString(t)&&this.onChangedObservable.notifyObservers(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(t){this._fontFamily!==t&&(this._fontFamily=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.onChangedObservable.notifyObservers(this))},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.onChangedObservable.clear()},t}(),G=function(t){function e(e,i,r,n,o,s){void 0===i&&(i=0),void 0===r&&(r=0),void 0===o&&(o=!1),void 0===s&&(s=h.Texture.NEAREST_SAMPLINGMODE);var a=t.call(this,e,{width:i,height:r},n,o,s,h.Engine.TEXTUREFORMAT_RGBA)||this;return a._isDirty=!1,a._rootContainer=new d("root"),a._lastControlOver={},a._lastControlDown={},a._capturingControl={},a._linkedControls=new Array,a._isFullscreen=!1,a._fullscreenViewport=new h.Viewport(0,0,1,1),a._idealWidth=0,a._idealHeight=0,a._useSmallestIdeal=!1,a._renderAtIdealSize=!1,a._blockNextFocusCheck=!1,a._renderScale=1,a._cursorChanged=!1,a._clipboardData="",a.onClipboardObservable=new h.Observable,a.onControlPickedObservable=new h.Observable,a.onBeginLayoutObservable=new h.Observable,a.onEndLayoutObservable=new h.Observable,a.onBeginRenderObservable=new h.Observable,a.onEndRenderObservable=new h.Observable,a.premulAlpha=!1,a._useInvalidateRectOptimization=!0,a._invalidatedRectangle=null,a._clearMeasure=new l(0,0,0,0),a.onClipboardCopy=function(t){var e=t,i=new h.ClipboardInfo(h.ClipboardEventTypes.COPY,e);a.onClipboardObservable.notifyObservers(i),e.preventDefault()},a.onClipboardCut=function(t){var e=t,i=new h.ClipboardInfo(h.ClipboardEventTypes.CUT,e);a.onClipboardObservable.notifyObservers(i),e.preventDefault()},a.onClipboardPaste=function(t){var e=t,i=new h.ClipboardInfo(h.ClipboardEventTypes.PASTE,e);a.onClipboardObservable.notifyObservers(i),e.preventDefault()},(n=a.getScene())&&a._texture?(a._rootCanvas=n.getEngine().getRenderingCanvas(),a._renderObserver=n.onBeforeCameraRenderObservable.add(function(t){return a._checkUpdate(t)}),a._preKeyboardObserver=n.onPreKeyboardObservable.add(function(t){a._focusedControl&&(t.type===h.KeyboardEventTypes.KEYDOWN&&a._focusedControl.processKeyboard(t.event),t.skipOnPointerObservable=!0)}),a._rootContainer._link(a),a.hasAlpha=!0,i&&r||(a._resizeObserver=n.getEngine().onResizeObservable.add(function(){return a._onResize()}),a._onResize()),a._texture.isReady=!0,a):a}return n(e,t),Object.defineProperty(e.prototype,"renderScale",{get:function(){return this._renderScale},set:function(t){t!==this._renderScale&&(this._renderScale=t,this._onResize())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"background",{get:function(){return this._background},set:function(t){this._background!==t&&(this._background=t,this.markAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idealWidth",{get:function(){return this._idealWidth},set:function(t){this._idealWidth!==t&&(this._idealWidth=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idealHeight",{get:function(){return this._idealHeight},set:function(t){this._idealHeight!==t&&(this._idealHeight=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useSmallestIdeal",{get:function(){return this._useSmallestIdeal},set:function(t){this._useSmallestIdeal!==t&&(this._useSmallestIdeal=t,this.markAsDirty(),this._rootContainer._markAllAsDirty())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderAtIdealSize",{get:function(){return this._renderAtIdealSize},set:function(t){this._renderAtIdealSize!==t&&(this._renderAtIdealSize=t,this._onResize())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layer",{get:function(){return this._layerToDispose},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rootContainer",{get:function(){return this._rootContainer},enumerable:!0,configurable:!0}),e.prototype.getChildren=function(){return[this._rootContainer]},e.prototype.getDescendants=function(t,e){return this._rootContainer.getDescendants(t,e)},Object.defineProperty(e.prototype,"focusedControl",{get:function(){return this._focusedControl},set:function(t){this._focusedControl!=t&&(this._focusedControl&&this._focusedControl.onBlur(),t&&t.onFocus(),this._focusedControl=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isForeground",{get:function(){return!this.layer||!this.layer.isBackground},set:function(t){this.layer&&this.layer.isBackground!==!t&&(this.layer.isBackground=!t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"clipboardData",{get:function(){return this._clipboardData},set:function(t){this._clipboardData=t},enumerable:!0,configurable:!0}),e.prototype.getClassName=function(){return"AdvancedDynamicTexture"},e.prototype.executeOnAllControls=function(t,e){e||(e=this._rootContainer),t(e);for(var i=0,r=e.children;i<r.length;i++){var n=r[i];n.children?this.executeOnAllControls(t,n):t(n)}},Object.defineProperty(e.prototype,"useInvalidateRectOptimization",{get:function(){return this._useInvalidateRectOptimization},set:function(t){this._useInvalidateRectOptimization=t},enumerable:!0,configurable:!0}),e.prototype.invalidateRect=function(t,e,i,r){if(this._useInvalidateRectOptimization)if(this._invalidatedRectangle){var n=Math.ceil(Math.max(this._invalidatedRectangle.left+this._invalidatedRectangle.width-1,i)),o=Math.ceil(Math.max(this._invalidatedRectangle.top+this._invalidatedRectangle.height-1,r));this._invalidatedRectangle.left=Math.floor(Math.min(this._invalidatedRectangle.left,t)),this._invalidatedRectangle.top=Math.floor(Math.min(this._invalidatedRectangle.top,e)),this._invalidatedRectangle.width=n-this._invalidatedRectangle.left+1,this._invalidatedRectangle.height=o-this._invalidatedRectangle.top+1}else this._invalidatedRectangle=new l(t,e,i-t+1,r-e+1)},e.prototype.markAsDirty=function(){this._isDirty=!0},e.prototype.createStyle=function(){return new z(this)},e.prototype.addControl=function(t){return this._rootContainer.addControl(t),this},e.prototype.removeControl=function(t){return this._rootContainer.removeControl(t),this},e.prototype.dispose=function(){var e=this.getScene();e&&(this._rootCanvas=null,e.onBeforeCameraRenderObservable.remove(this._renderObserver),this._resizeObserver&&e.getEngine().onResizeObservable.remove(this._resizeObserver),this._pointerMoveObserver&&e.onPrePointerObservable.remove(this._pointerMoveObserver),this._pointerObserver&&e.onPointerObservable.remove(this._pointerObserver),this._preKeyboardObserver&&e.onPreKeyboardObservable.remove(this._preKeyboardObserver),this._canvasPointerOutObserver&&e.getEngine().onCanvasPointerOutObservable.remove(this._canvasPointerOutObserver),this._layerToDispose&&(this._layerToDispose.texture=null,this._layerToDispose.dispose(),this._layerToDispose=null),this._rootContainer.dispose(),this.onClipboardObservable.clear(),this.onControlPickedObservable.clear(),this.onBeginRenderObservable.clear(),this.onEndRenderObservable.clear(),this.onBeginLayoutObservable.clear(),this.onEndLayoutObservable.clear(),t.prototype.dispose.call(this))},e.prototype._onResize=function(){var t=this.getScene();if(t){var e=t.getEngine(),i=this.getSize(),r=e.getRenderWidth()*this._renderScale,n=e.getRenderHeight()*this._renderScale;this._renderAtIdealSize&&(this._idealWidth?(n=n*this._idealWidth/r,r=this._idealWidth):this._idealHeight&&(r=r*this._idealHeight/n,n=this._idealHeight)),i.width===r&&i.height===n||(this.scaleTo(r,n),this.markAsDirty(),(this._idealWidth||this._idealHeight)&&this._rootContainer._markAllAsDirty()),this.invalidateRect(0,0,i.width-1,i.height-1)}},e.prototype._getGlobalViewport=function(t){var e=t.getEngine();return this._fullscreenViewport.toGlobal(e.getRenderWidth(),e.getRenderHeight())},e.prototype.getProjectedPosition=function(t,e){var i=this.getScene();if(!i)return h.Vector2.Zero();var r=this._getGlobalViewport(i),n=h.Vector3.Project(t,e,i.getTransformMatrix(),r);return n.scaleInPlace(this.renderScale),new h.Vector2(n.x,n.y)},e.prototype._checkUpdate=function(t){if(!this._layerToDispose||0!=(t.layerMask&this._layerToDispose.layerMask)){if(this._isFullscreen&&this._linkedControls.length){var e=this.getScene();if(!e)return;for(var i=this._getGlobalViewport(e),r=0,n=this._linkedControls;r<n.length;r++){var o=n[r];if(o.isVisible){var s=o._linkedMesh;if(s&&!s.isDisposed()){var a=s.getBoundingInfo?s.getBoundingInfo().boundingSphere.center:s.getAbsolutePosition(),l=h.Vector3.Project(a,s.getWorldMatrix(),e.getTransformMatrix(),i);l.z<0||l.z>1?o.notRenderable=!0:(o.notRenderable=!1,l.scaleInPlace(this.renderScale),o._moveToProjectedPosition(l))}else h.Tools.SetImmediate(function(){o.linkWithMesh(null)})}}}(this._isDirty||this._rootContainer.isDirty)&&(this._isDirty=!1,this._render(),this.update(!0,this.premulAlpha))}},e.prototype._render=function(){var t=this.getSize(),e=t.width,i=t.height,r=this.getContext();r.font="18px Arial",r.strokeStyle="white",this.onBeginLayoutObservable.notifyObservers(this);var n=new l(0,0,e,i);this._rootContainer._layout(n,r),this.onEndLayoutObservable.notifyObservers(this),this._isDirty=!1,this._invalidatedRectangle?this._clearMeasure.copyFrom(this._invalidatedRectangle):this._clearMeasure.copyFromFloats(0,0,e,i),r.clearRect(this._clearMeasure.left,this._clearMeasure.top,this._clearMeasure.width,this._clearMeasure.height),this._background&&(r.save(),r.fillStyle=this._background,r.fillRect(this._clearMeasure.left,this._clearMeasure.top,this._clearMeasure.width,this._clearMeasure.height),r.restore()),this.onBeginRenderObservable.notifyObservers(this),this._rootContainer._render(r,this._invalidatedRectangle),this.onEndRenderObservable.notifyObservers(this),this._invalidatedRectangle=null},e.prototype._changeCursor=function(t){this._rootCanvas&&(this._rootCanvas.style.cursor=t,this._cursorChanged=!0)},e.prototype._registerLastControlDown=function(t,e){this._lastControlDown[e]=t,this.onControlPickedObservable.notifyObservers(t)},e.prototype._doPicking=function(t,e,i,r,n){var o=this.getScene();if(o){var s=o.getEngine(),a=this.getSize();if(this._isFullscreen){var l=(o.cameraToUseForPointers||o.activeCamera).viewport;t*=a.width/(s.getRenderWidth()*l.width),e*=a.height/(s.getRenderHeight()*l.height)}this._capturingControl[r]?this._capturingControl[r]._processObservables(i,t,e,r,n):(this._cursorChanged=!1,this._rootContainer._processPicking(t,e,i,r,n)||(this._changeCursor(""),i===h.PointerEventTypes.POINTERMOVE&&this._lastControlOver[r]&&(this._lastControlOver[r]._onPointerOut(this._lastControlOver[r]),delete this._lastControlOver[r])),this._cursorChanged||this._changeCursor(""),this._manageFocus())}},e.prototype._cleanControlAfterRemovalFromList=function(t,e){for(var i in t){if(t.hasOwnProperty(i))t[i]===e&&delete t[i]}},e.prototype._cleanControlAfterRemoval=function(t){this._cleanControlAfterRemovalFromList(this._lastControlDown,t),this._cleanControlAfterRemovalFromList(this._lastControlOver,t)},e.prototype.attach=function(){var t=this,e=this.getScene();if(e){var i=new h.Viewport(0,0,0,0);this._pointerMoveObserver=e.onPrePointerObservable.add(function(r,n){if(!e.isPointerCaptured(r.event.pointerId)&&(r.type===h.PointerEventTypes.POINTERMOVE||r.type===h.PointerEventTypes.POINTERUP||r.type===h.PointerEventTypes.POINTERDOWN)&&e){var o=e.cameraToUseForPointers||e.activeCamera,s=e.getEngine();o?o.viewport.toGlobalToRef(s.getRenderWidth(),s.getRenderHeight(),i):(i.x=0,i.y=0,i.width=s.getRenderWidth(),i.height=s.getRenderHeight());var a=e.pointerX/s.getHardwareScalingLevel()-i.x,l=e.pointerY/s.getHardwareScalingLevel()-(s.getRenderHeight()-i.y-i.height);t._shouldBlockPointer=!1,t._doPicking(a,l,r.type,r.event.pointerId||0,r.event.button),t._shouldBlockPointer&&(r.skipOnPointerObservable=t._shouldBlockPointer)}}),this._attachToOnPointerOut(e)}},e.prototype.registerClipboardEvents=function(){self.addEventListener("copy",this.onClipboardCopy,!1),self.addEventListener("cut",this.onClipboardCut,!1),self.addEventListener("paste",this.onClipboardPaste,!1)},e.prototype.unRegisterClipboardEvents=function(){self.removeEventListener("copy",this.onClipboardCopy),self.removeEventListener("cut",this.onClipboardCut),self.removeEventListener("paste",this.onClipboardPaste)},e.prototype.attachToMesh=function(t,e){var i=this;void 0===e&&(e=!0);var r=this.getScene();r&&(this._pointerObserver=r.onPointerObservable.add(function(e,r){if(e.type===h.PointerEventTypes.POINTERMOVE||e.type===h.PointerEventTypes.POINTERUP||e.type===h.PointerEventTypes.POINTERDOWN){var n=e.event.pointerId||0;if(e.pickInfo&&e.pickInfo.hit&&e.pickInfo.pickedMesh===t){var o=e.pickInfo.getTextureCoordinates();if(o){var s=i.getSize();i._doPicking(o.x*s.width,(1-o.y)*s.height,e.type,n,e.event.button)}}else if(e.type===h.PointerEventTypes.POINTERUP){if(i._lastControlDown[n]&&i._lastControlDown[n]._forcePointerUp(n),delete i._lastControlDown[n],i.focusedControl){var a=i.focusedControl.keepsFocusWith(),l=!0;if(a)for(var u=0,c=a;u<c.length;u++){var _=c[u];if(i!==_._host){var d=_._host;if(d._lastControlOver[n]&&d._lastControlOver[n].isAscendant(_)){l=!1;break}}}l&&(i.focusedControl=null)}}else e.type===h.PointerEventTypes.POINTERMOVE&&(i._lastControlOver[n]&&i._lastControlOver[n]._onPointerOut(i._lastControlOver[n],!0),delete i._lastControlOver[n])}}),t.enablePointerMoveEvents=e,this._attachToOnPointerOut(r))},e.prototype.moveFocusToControl=function(t){this.focusedControl=t,this._lastPickedControl=t,this._blockNextFocusCheck=!0},e.prototype._manageFocus=function(){if(this._blockNextFocusCheck)return this._blockNextFocusCheck=!1,void(this._lastPickedControl=this._focusedControl);if(this._focusedControl&&this._focusedControl!==this._lastPickedControl){if(this._lastPickedControl.isFocusInvisible)return;this.focusedControl=null}},e.prototype._attachToOnPointerOut=function(t){var e=this;this._canvasPointerOutObserver=t.getEngine().onCanvasPointerOutObservable.add(function(t){e._lastControlOver[t.pointerId]&&e._lastControlOver[t.pointerId]._onPointerOut(e._lastControlOver[t.pointerId]),delete e._lastControlOver[t.pointerId],e._lastControlDown[t.pointerId]&&e._lastControlDown[t.pointerId]!==e._capturingControl[t.pointerId]&&(e._lastControlDown[t.pointerId]._forcePointerUp(),delete e._lastControlDown[t.pointerId])})},e.CreateForMesh=function(t,i,r,n,o){void 0===i&&(i=1024),void 0===r&&(r=1024),void 0===n&&(n=!0),void 0===o&&(o=!1);var s=new e(t.name+" AdvancedDynamicTexture",i,r,t.getScene(),!0,h.Texture.TRILINEAR_SAMPLINGMODE),a=new h.StandardMaterial("AdvancedDynamicTextureMaterial",t.getScene());return a.backFaceCulling=!1,a.diffuseColor=h.Color3.Black(),a.specularColor=h.Color3.Black(),o?(a.diffuseTexture=s,a.emissiveTexture=s,s.hasAlpha=!0):(a.emissiveTexture=s,a.opacityTexture=s),t.material=a,s.attachToMesh(t,n),s},e.CreateFullscreenUI=function(t,i,r,n){void 0===i&&(i=!0),void 0===r&&(r=null),void 0===n&&(n=h.Texture.BILINEAR_SAMPLINGMODE);var o=new e(t,0,0,r,!1,n),s=new h.Layer(t+"_layer",null,r,!i);return s.texture=o,o._layerToDispose=s,o._isFullscreen=!0,o.attach(),o},e}(h.DynamicTexture),X=function(){function t(t){this.texture=t,this._captureRenderTime=!1,this._renderTime=new h.PerfCounter,this._captureLayoutTime=!1,this._layoutTime=new h.PerfCounter,this._onBeginRenderObserver=null,this._onEndRenderObserver=null,this._onBeginLayoutObserver=null,this._onEndLayoutObserver=null}return Object.defineProperty(t.prototype,"renderTimeCounter",{get:function(){return this._renderTime},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutTimeCounter",{get:function(){return this._layoutTime},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"captureRenderTime",{get:function(){return this._captureRenderTime},set:function(t){var e=this;t!==this._captureRenderTime&&(this._captureRenderTime=t,t?(this._onBeginRenderObserver=this.texture.onBeginRenderObservable.add(function(){e._renderTime.beginMonitoring()}),this._onEndRenderObserver=this.texture.onEndRenderObservable.add(function(){e._renderTime.endMonitoring(!0)})):(this.texture.onBeginRenderObservable.remove(this._onBeginRenderObserver),this._onBeginRenderObserver=null,this.texture.onEndRenderObservable.remove(this._onEndRenderObserver),this._onEndRenderObserver=null))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"captureLayoutTime",{get:function(){return this._captureLayoutTime},set:function(t){var e=this;t!==this._captureLayoutTime&&(this._captureLayoutTime=t,t?(this._onBeginLayoutObserver=this.texture.onBeginLayoutObservable.add(function(){e._layoutTime.beginMonitoring()}),this._onEndLayoutObserver=this.texture.onEndLayoutObservable.add(function(){e._layoutTime.endMonitoring(!0)})):(this.texture.onBeginLayoutObservable.remove(this._onBeginLayoutObserver),this._onBeginLayoutObserver=null,this.texture.onEndLayoutObservable.remove(this._onEndLayoutObserver),this._onEndLayoutObserver=null))},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.texture.onBeginRenderObservable.remove(this._onBeginRenderObserver),this._onBeginRenderObserver=null,this.texture.onEndRenderObservable.remove(this._onEndRenderObserver),this._onEndRenderObserver=null,this.texture.onBeginLayoutObservable.remove(this._onBeginLayoutObserver),this._onBeginLayoutObserver=null,this.texture.onEndLayoutObservable.remove(this._onEndLayoutObserver),this._onEndLayoutObserver=null,this.texture=null},t}(),Y=function(t){function e(e,i){void 0===i&&(i=0);var r=t.call(this,e.x,e.y,e.z)||this;return r.buttonIndex=i,r}return n(e,t),e}(h.Vector3),U=function(){function t(t){this.name=t,this._downCount=0,this._enterCount=-1,this._downPointerIds={},this._isVisible=!0,this.onPointerMoveObservable=new h.Observable,this.onPointerOutObservable=new h.Observable,this.onPointerDownObservable=new h.Observable,this.onPointerUpObservable=new h.Observable,this.onPointerClickObservable=new h.Observable,this.onPointerEnterObservable=new h.Observable,this._behaviors=new Array}return Object.defineProperty(t.prototype,"position",{get:function(){return this._node?this._node.position:h.Vector3.Zero()},set:function(t){this._node&&(this._node.position=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scaling",{get:function(){return this._node?this._node.scaling:new h.Vector3(1,1,1)},set:function(t){this._node&&(this._node.scaling=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"behaviors",{get:function(){return this._behaviors},enumerable:!0,configurable:!0}),t.prototype.addBehavior=function(t){var e=this;if(-1!==this._behaviors.indexOf(t))return this;t.init();var i=this._host.scene;return i.isLoading?i.onDataLoadedObservable.addOnce(function(){t.attach(e)}):t.attach(this),this._behaviors.push(t),this},t.prototype.removeBehavior=function(t){var e=this._behaviors.indexOf(t);return-1===e?this:(this._behaviors[e].detach(),this._behaviors.splice(e,1),this)},t.prototype.getBehaviorByName=function(t){for(var e=0,i=this._behaviors;e<i.length;e++){var r=i[e];if(r.name===t)return r}return null},Object.defineProperty(t.prototype,"isVisible",{get:function(){return this._isVisible},set:function(t){if(this._isVisible!==t){this._isVisible=t;var e=this.mesh;e&&e.setEnabled(t)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"typeName",{get:function(){return this._getTypeName()},enumerable:!0,configurable:!0}),t.prototype.getClassName=function(){return this._getTypeName()},t.prototype._getTypeName=function(){return"Control3D"},Object.defineProperty(t.prototype,"node",{get:function(){return this._node},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mesh",{get:function(){return this._node instanceof h.AbstractMesh?this._node:null},enumerable:!0,configurable:!0}),t.prototype.linkToTransformNode=function(t){return this._node&&(this._node.parent=t),this},t.prototype._prepareNode=function(t){if(!this._node){if(this._node=this._createNode(t),!this.node)return;this._node.metadata=this,this._node.position=this.position,this._node.scaling=this.scaling;var e=this.mesh;e&&(e.isPickable=!0,this._affectMaterial(e))}},t.prototype._createNode=function(t){return null},t.prototype._affectMaterial=function(t){t.material=null},t.prototype._onPointerMove=function(t,e){this.onPointerMoveObservable.notifyObservers(e,-1,t,this)},t.prototype._onPointerEnter=function(t){return!(this._enterCount>0)&&(-1===this._enterCount&&(this._enterCount=0),this._enterCount++,this.onPointerEnterObservable.notifyObservers(this,-1,t,this),this.pointerEnterAnimation&&this.pointerEnterAnimation(),!0)},t.prototype._onPointerOut=function(t){this._enterCount=0,this.onPointerOutObservable.notifyObservers(this,-1,t,this),this.pointerOutAnimation&&this.pointerOutAnimation()},t.prototype._onPointerDown=function(t,e,i,r){return 0!==this._downCount?(this._downCount++,!1):(this._downCount++,this._downPointerIds[i]=!0,this.onPointerDownObservable.notifyObservers(new Y(e,r),-1,t,this),this.pointerDownAnimation&&this.pointerDownAnimation(),!0)},t.prototype._onPointerUp=function(t,e,i,r,n){this._downCount--,delete this._downPointerIds[i],this._downCount<0?this._downCount=0:0==this._downCount&&(n&&(this._enterCount>0||-1===this._enterCount)&&this.onPointerClickObservable.notifyObservers(new Y(e,r),-1,t,this),this.onPointerUpObservable.notifyObservers(new Y(e,r),-1,t,this),this.pointerUpAnimation&&this.pointerUpAnimation())},t.prototype.forcePointerUp=function(t){if(void 0===t&&(t=null),null!==t)this._onPointerUp(this,h.Vector3.Zero(),t,0,!0);else{for(var e in this._downPointerIds)this._onPointerUp(this,h.Vector3.Zero(),+e,0,!0);this._downCount>0&&(this._downCount=1,this._onPointerUp(this,h.Vector3.Zero(),0,0,!0))}},t.prototype._processObservables=function(t,e,i,r){if(t===h.PointerEventTypes.POINTERMOVE){this._onPointerMove(this,e);var n=this._host._lastControlOver[i];return n&&n!==this&&n._onPointerOut(this),n!==this&&this._onPointerEnter(this),this._host._lastControlOver[i]=this,!0}return t===h.PointerEventTypes.POINTERDOWN?(this._onPointerDown(this,e,i,r),this._host._lastControlDown[i]=this,this._host._lastPickedControl=this,!0):t===h.PointerEventTypes.POINTERUP&&(this._host._lastControlDown[i]&&this._host._lastControlDown[i]._onPointerUp(this,e,i,r,!0),delete this._host._lastControlDown[i],!0)},t.prototype._disposeNode=function(){this._node&&(this._node.dispose(),this._node=null)},t.prototype.dispose=function(){this.onPointerDownObservable.clear(),this.onPointerEnterObservable.clear(),this.onPointerMoveObservable.clear(),this.onPointerOutObservable.clear(),this.onPointerUpObservable.clear(),this.onPointerClickObservable.clear(),this._disposeNode();for(var t=0,e=this._behaviors;t<e.length;t++){e[t].detach()}},t}(),K=function(t){function e(e){return t.call(this,e)||this}return n(e,t),e.prototype._getTypeName=function(){return"AbstractButton3D"},e.prototype._createNode=function(t){return new h.TransformNode("button"+this.name)},e}(U),q=function(t){function e(e){var i=t.call(this,e)||this;return i._contentResolution=512,i._contentScaleRatio=2,i.pointerEnterAnimation=function(){i.mesh&&(i._currentMaterial.emissiveColor=h.Color3.Red())},i.pointerOutAnimation=function(){i._currentMaterial.emissiveColor=h.Color3.Black()},i.pointerDownAnimation=function(){i.mesh&&i.mesh.scaling.scaleInPlace(.95)},i.pointerUpAnimation=function(){i.mesh&&i.mesh.scaling.scaleInPlace(1/.95)},i}return n(e,t),Object.defineProperty(e.prototype,"contentResolution",{get:function(){return this._contentResolution},set:function(t){this._contentResolution!==t&&(this._contentResolution=t,this._resetContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contentScaleRatio",{get:function(){return this._contentScaleRatio},set:function(t){this._contentScaleRatio!==t&&(this._contentScaleRatio=t,this._resetContent())},enumerable:!0,configurable:!0}),e.prototype._disposeFacadeTexture=function(){this._facadeTexture&&(this._facadeTexture.dispose(),this._facadeTexture=null)},e.prototype._resetContent=function(){this._disposeFacadeTexture(),this.content=this._content},Object.defineProperty(e.prototype,"content",{get:function(){return this._content},set:function(t){this._content=t,this._host&&this._host.utilityLayer&&(this._facadeTexture||(this._facadeTexture=new G("Facade",this._contentResolution,this._contentResolution,this._host.utilityLayer.utilityLayerScene,!0,h.Texture.TRILINEAR_SAMPLINGMODE),this._facadeTexture.rootContainer.scaleX=this._contentScaleRatio,this._facadeTexture.rootContainer.scaleY=this._contentScaleRatio,this._facadeTexture.premulAlpha=!0),this._facadeTexture.addControl(t),this._applyFacade(this._facadeTexture))},enumerable:!0,configurable:!0}),e.prototype._applyFacade=function(t){this._currentMaterial.emissiveTexture=t},e.prototype._getTypeName=function(){return"Button3D"},e.prototype._createNode=function(t){for(var e=new Array(6),i=0;i<6;i++)e[i]=new h.Vector4(0,0,0,0);return e[1]=new h.Vector4(0,0,1,1),h.BoxBuilder.CreateBox(this.name+"_rootMesh",{width:1,height:1,depth:.08,faceUV:e},t)},e.prototype._affectMaterial=function(t){var e=new h.StandardMaterial(this.name+"Material",t.getScene());e.specularColor=h.Color3.Black(),t.material=e,this._currentMaterial=e,this._resetContent()},e.prototype.dispose=function(){t.prototype.dispose.call(this),this._disposeFacadeTexture(),this._currentMaterial&&this._currentMaterial.dispose()},e}(K),Z=function(t){function e(e){var i=t.call(this,e)||this;return i._blockLayout=!1,i._children=new Array,i}return n(e,t),Object.defineProperty(e.prototype,"children",{get:function(){return this._children},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"blockLayout",{get:function(){return this._blockLayout},set:function(t){this._blockLayout!==t&&(this._blockLayout=t,this._blockLayout||this._arrangeChildren())},enumerable:!0,configurable:!0}),e.prototype.updateLayout=function(){return this._arrangeChildren(),this},e.prototype.containsControl=function(t){return-1!==this._children.indexOf(t)},e.prototype.addControl=function(t){return-1!==this._children.indexOf(t)?this:(t.parent=this,t._host=this._host,this._children.push(t),this._host.utilityLayer&&(t._prepareNode(this._host.utilityLayer.utilityLayerScene),t.node&&(t.node.parent=this.node),this.blockLayout||this._arrangeChildren()),this)},e.prototype._arrangeChildren=function(){},e.prototype._createNode=function(t){return new h.TransformNode("ContainerNode",t)},e.prototype.removeControl=function(t){var e=this._children.indexOf(t);return-1!==e&&(this._children.splice(e,1),t.parent=null,t._disposeNode()),this},e.prototype._getTypeName=function(){return"Container3D"},e.prototype.dispose=function(){for(var e=0,i=this._children;e<i.length;e++){i[e].dispose()}this._children=[],t.prototype.dispose.call(this)},e.UNSET_ORIENTATION=0,e.FACEORIGIN_ORIENTATION=1,e.FACEORIGINREVERSED_ORIENTATION=2,e.FACEFORWARD_ORIENTATION=3,e.FACEFORWARDREVERSED_ORIENTATION=4,e}(U),J=function(t){function e(){var e=t.call(this)||this;return e._columns=10,e._rows=0,e._rowThenColum=!0,e._orientation=Z.FACEORIGIN_ORIENTATION,e.margin=0,e}return n(e,t),Object.defineProperty(e.prototype,"orientation",{get:function(){return this._orientation},set:function(t){var e=this;this._orientation!==t&&(this._orientation=t,h.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"columns",{get:function(){return this._columns},set:function(t){var e=this;this._columns!==t&&(this._columns=t,this._rowThenColum=!0,h.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rows",{get:function(){return this._rows},set:function(t){var e=this;this._rows!==t&&(this._rows=t,this._rowThenColum=!1,h.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._arrangeChildren=function(){this._cellWidth=0,this._cellHeight=0;for(var t=0,e=0,i=0,r=h.Matrix.Invert(this.node.computeWorldMatrix(!0)),n=0,o=this._children;n<o.length;n++){if((m=o[n]).mesh){i++,m.mesh.computeWorldMatrix(!0);var s=m.mesh.getHierarchyBoundingVectors(),a=h.Tmp.Vector3[0],l=h.Tmp.Vector3[1];s.max.subtractToRef(s.min,l),l.scaleInPlace(.5),h.Vector3.TransformNormalToRef(l,r,a),this._cellWidth=Math.max(this._cellWidth,2*a.x),this._cellHeight=Math.max(this._cellHeight,2*a.y)}}this._cellWidth+=2*this.margin,this._cellHeight+=2*this.margin,this._rowThenColum?(e=this._columns,t=Math.ceil(i/this._columns)):(t=this._rows,e=Math.ceil(i/this._rows));var u=.5*e*this._cellWidth,c=.5*t*this._cellHeight,_=[],d=0;if(this._rowThenColum)for(var f=0;f<t;f++)for(var p=0;p<e&&(_.push(new h.Vector3(p*this._cellWidth-u+this._cellWidth/2,f*this._cellHeight-c+this._cellHeight/2,0)),!(++d>i));p++);else for(p=0;p<e;p++)for(f=0;f<t&&(_.push(new h.Vector3(p*this._cellWidth-u+this._cellWidth/2,f*this._cellHeight-c+this._cellHeight/2,0)),!(++d>i));f++);d=0;for(var g=0,b=this._children;g<b.length;g++){var m;(m=b[g]).mesh&&(this._mapGridNode(m,_[d]),d++)}this._finalProcessing()},e.prototype._finalProcessing=function(){},e}(Z),Q=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._radius=5,e}return n(e,t),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){var e=this;this._radius!==t&&(this._radius=t,h.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){var r=this._cylindricalMapping(e);switch(t.position=r,this.orientation){case Z.FACEORIGIN_ORIENTATION:i.lookAt(new h.Vector3(2*r.x,r.y,2*r.z));break;case Z.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new h.Vector3(-r.x,r.y,-r.z));break;case Z.FACEFORWARD_ORIENTATION:break;case Z.FACEFORWARDREVERSED_ORIENTATION:i.rotate(h.Axis.Y,Math.PI,h.Space.LOCAL)}}},e.prototype._cylindricalMapping=function(t){var e=new h.Vector3(0,t.y,this._radius),i=t.x/this._radius;return h.Matrix.RotationYawPitchRollToRef(i,0,0,h.Tmp.Matrix[0]),h.Vector3.TransformNormal(e,h.Tmp.Matrix[0])},e}(J),$="precision highp float;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 world;\nuniform mat4 viewProjection;\nvarying vec2 vUV;\n#ifdef BORDER\nvarying vec2 scaleInfo;\nuniform float borderWidth;\nuniform vec3 scaleFactor;\n#endif\n#ifdef HOVERLIGHT\nvarying vec3 worldPosition;\n#endif\nvoid main(void) {\nvUV=uv;\n#ifdef BORDER\nvec3 scale=scaleFactor;\nfloat minScale=min(min(scale.x,scale.y),scale.z);\nfloat maxScale=max(max(scale.x,scale.y),scale.z);\nfloat minOverMiddleScale=minScale/(scale.x+scale.y+scale.z-minScale-maxScale);\nfloat areaYZ=scale.y*scale.z;\nfloat areaXZ=scale.x*scale.z;\nfloat areaXY=scale.x*scale.y;\nfloat scaledBorderWidth=borderWidth;\nif (abs(normal.x) == 1.0)\n{\nscale.x=scale.y;\nscale.y=scale.z;\nif (areaYZ>areaXZ && areaYZ>areaXY)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nelse if (abs(normal.y) == 1.0)\n{\nscale.x=scale.z;\nif (areaXZ>areaXY && areaXZ>areaYZ)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nelse\n{\nif (areaXY>areaYZ && areaXY>areaXZ)\n{\nscaledBorderWidth*=minOverMiddleScale;\n}\n}\nfloat scaleRatio=min(scale.x,scale.y)/max(scale.x,scale.y);\nif (scale.x>scale.y)\n{\nscaleInfo.x=1.0-(scaledBorderWidth*scaleRatio);\nscaleInfo.y=1.0-scaledBorderWidth;\n}\nelse\n{\nscaleInfo.x=1.0-scaledBorderWidth;\nscaleInfo.y=1.0-(scaledBorderWidth*scaleRatio);\n}\n#endif\nvec4 worldPos=world*vec4(position,1.0);\n#ifdef HOVERLIGHT\nworldPosition=worldPos.xyz;\n#endif\ngl_Position=viewProjection*worldPos;\n}\n";h.Effect.ShadersStore.fluentVertexShader=$;var tt="precision highp float;\nvarying vec2 vUV;\nuniform vec4 albedoColor;\n#ifdef INNERGLOW\nuniform vec4 innerGlowColor;\n#endif\n#ifdef BORDER\nvarying vec2 scaleInfo;\nuniform float edgeSmoothingValue;\nuniform float borderMinValue;\n#endif\n#ifdef HOVERLIGHT\nvarying vec3 worldPosition;\nuniform vec3 hoverPosition;\nuniform vec4 hoverColor;\nuniform float hoverRadius;\n#endif\n#ifdef TEXTURE\nuniform sampler2D albedoSampler;\n#endif\nvoid main(void) {\nvec3 albedo=albedoColor.rgb;\nfloat alpha=albedoColor.a;\n#ifdef TEXTURE\nalbedo=texture2D(albedoSampler,vUV).rgb;\n#endif\n#ifdef HOVERLIGHT\nfloat pointToHover=(1.0-clamp(length(hoverPosition-worldPosition)/hoverRadius,0.,1.))*hoverColor.a;\nalbedo=clamp(albedo+hoverColor.rgb*pointToHover,0.,1.);\n#else\nfloat pointToHover=1.0;\n#endif\n#ifdef BORDER\nfloat borderPower=10.0;\nfloat inverseBorderPower=1.0/borderPower;\nvec3 borderColor=albedo*borderPower;\nvec2 distanceToEdge;\ndistanceToEdge.x=abs(vUV.x-0.5)*2.0;\ndistanceToEdge.y=abs(vUV.y-0.5)*2.0;\nfloat borderValue=max(smoothstep(scaleInfo.x-edgeSmoothingValue,scaleInfo.x+edgeSmoothingValue,distanceToEdge.x),\nsmoothstep(scaleInfo.y-edgeSmoothingValue,scaleInfo.y+edgeSmoothingValue,distanceToEdge.y));\nborderColor=borderColor*borderValue*max(borderMinValue*inverseBorderPower,pointToHover);\nalbedo+=borderColor;\nalpha=max(alpha,borderValue);\n#endif\n#ifdef INNERGLOW\n\nvec2 uvGlow=(vUV-vec2(0.5,0.5))*(innerGlowColor.a*2.0);\nuvGlow=uvGlow*uvGlow;\nuvGlow=uvGlow*uvGlow;\nalbedo+=mix(vec3(0.0,0.0,0.0),innerGlowColor.rgb,uvGlow.x+uvGlow.y);\n#endif\ngl_FragColor=vec4(albedo,alpha);\n}";h.Effect.ShadersStore.fluentPixelShader=tt;var et=function(t){function e(){var e=t.call(this)||this;return e.INNERGLOW=!1,e.BORDER=!1,e.HOVERLIGHT=!1,e.TEXTURE=!1,e.rebuild(),e}return n(e,t),e}(h.MaterialDefines),it=function(t){function e(e,i){var r=t.call(this,e,i)||this;return r.innerGlowColorIntensity=.5,r.innerGlowColor=new h.Color3(1,1,1),r.alpha=1,r.albedoColor=new h.Color3(.3,.35,.4),r.renderBorders=!1,r.borderWidth=.5,r.edgeSmoothingValue=.02,r.borderMinValue=.1,r.renderHoverLight=!1,r.hoverRadius=1,r.hoverColor=new h.Color4(.3,.3,.3,1),r.hoverPosition=h.Vector3.Zero(),r}return n(e,t),e.prototype.needAlphaBlending=function(){return 1!==this.alpha},e.prototype.needAlphaTesting=function(){return!1},e.prototype.getAlphaTestTexture=function(){return null},e.prototype.isReadyForSubMesh=function(t,e,i){if(this.isFrozen&&this._wasPreviouslyReady&&e.effect)return!0;e._materialDefines||(e._materialDefines=new et);var r=this.getScene(),n=e._materialDefines;if(!this.checkReadyOnEveryCall&&e.effect&&n._renderId===r.getRenderId())return!0;if(n._areTexturesDirty)if(n.INNERGLOW=this.innerGlowColorIntensity>0,n.BORDER=this.renderBorders,n.HOVERLIGHT=this.renderHoverLight,this._albedoTexture){if(!this._albedoTexture.isReadyOrNotBlocking())return!1;n.TEXTURE=!0}else n.TEXTURE=!1;var o=r.getEngine();if(n.isDirty){n.markAsProcessed(),r.resetCachedMaterial();var s=[h.VertexBuffer.PositionKind];s.push(h.VertexBuffer.NormalKind),s.push(h.VertexBuffer.UVKind);var a=["world","viewProjection","innerGlowColor","albedoColor","borderWidth","edgeSmoothingValue","scaleFactor","borderMinValue","hoverColor","hoverPosition","hoverRadius"],l=["albedoSampler"],u=new Array;h.MaterialHelper.PrepareUniformsAndSamplersList({uniformsNames:a,uniformBuffersNames:u,samplers:l,defines:n,maxSimultaneousLights:4});var c=n.toString();e.setEffect(r.getEngine().createEffect("fluent",{attributes:s,uniformsNames:a,uniformBuffersNames:u,samplers:l,defines:c,fallbacks:null,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},o))}return!(!e.effect||!e.effect.isReady())&&(n._renderId=r.getRenderId(),this._wasPreviouslyReady=!0,!0)},e.prototype.bindForSubMesh=function(t,e,i){var r=this.getScene(),n=i._materialDefines;if(n){var o=i.effect;o&&(this._activeEffect=o,this.bindOnlyWorldMatrix(t),this._activeEffect.setMatrix("viewProjection",r.getTransformMatrix()),this._mustRebind(r,o)&&(this._activeEffect.setColor4("albedoColor",this.albedoColor,this.alpha),n.INNERGLOW&&this._activeEffect.setColor4("innerGlowColor",this.innerGlowColor,this.innerGlowColorIntensity),n.BORDER&&(this._activeEffect.setFloat("borderWidth",this.borderWidth),this._activeEffect.setFloat("edgeSmoothingValue",this.edgeSmoothingValue),this._activeEffect.setFloat("borderMinValue",this.borderMinValue),e.getBoundingInfo().boundingBox.extendSize.multiplyToRef(e.scaling,h.Tmp.Vector3[0]),this._activeEffect.setVector3("scaleFactor",h.Tmp.Vector3[0])),n.HOVERLIGHT&&(this._activeEffect.setDirectColor4("hoverColor",this.hoverColor),this._activeEffect.setFloat("hoverRadius",this.hoverRadius),this._activeEffect.setVector3("hoverPosition",this.hoverPosition)),n.TEXTURE&&this._activeEffect.setTexture("albedoSampler",this._albedoTexture)),this._afterBind(e,this._activeEffect))}},e.prototype.getActiveTextures=function(){return t.prototype.getActiveTextures.call(this)},e.prototype.hasTexture=function(e){return!!t.prototype.hasTexture.call(this,e)},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e)},e.prototype.clone=function(t){var i=this;return h.SerializationHelper.Clone(function(){return new e(t,i.getScene())},this)},e.prototype.serialize=function(){var t=h.SerializationHelper.Serialize(this);return t.customType="BABYLON.GUI.FluentMaterial",t},e.prototype.getClassName=function(){return"FluentMaterial"},e.Parse=function(t,i,r){return h.SerializationHelper.Parse(function(){return new e(t.name,i)},t,i,r)},o([Object(h.serialize)(),Object(h.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"innerGlowColorIntensity",void 0),o([Object(h.serializeAsColor3)()],e.prototype,"innerGlowColor",void 0),o([Object(h.serialize)()],e.prototype,"alpha",void 0),o([Object(h.serializeAsColor3)()],e.prototype,"albedoColor",void 0),o([Object(h.serialize)(),Object(h.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"renderBorders",void 0),o([Object(h.serialize)()],e.prototype,"borderWidth",void 0),o([Object(h.serialize)()],e.prototype,"edgeSmoothingValue",void 0),o([Object(h.serialize)()],e.prototype,"borderMinValue",void 0),o([Object(h.serialize)(),Object(h.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"renderHoverLight",void 0),o([Object(h.serialize)()],e.prototype,"hoverRadius",void 0),o([Object(h.serializeAsColor4)()],e.prototype,"hoverColor",void 0),o([Object(h.serializeAsVector3)()],e.prototype,"hoverPosition",void 0),o([Object(h.serializeAsTexture)("albedoTexture")],e.prototype,"_albedoTexture",void 0),o([Object(h.expandToProperty)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"albedoTexture",void 0),e}(h.PushMaterial);h._TypeStore.RegisteredTypes["BABYLON.GUI.FluentMaterial"]=it;var rt=function(t){function e(e,i){void 0===i&&(i=!0);var r=t.call(this,e)||this;return r._shareMaterials=!0,r._shareMaterials=i,r.pointerEnterAnimation=function(){r.mesh&&r._frontPlate.setEnabled(!0)},r.pointerOutAnimation=function(){r.mesh&&r._frontPlate.setEnabled(!1)},r}return n(e,t),e.prototype._disposeTooltip=function(){this._tooltipFade=null,this._tooltipTextBlock&&this._tooltipTextBlock.dispose(),this._tooltipTexture&&this._tooltipTexture.dispose(),this._tooltipMesh&&this._tooltipMesh.dispose(),this.onPointerEnterObservable.remove(this._tooltipHoverObserver),this.onPointerOutObservable.remove(this._tooltipOutObserver)},Object.defineProperty(e.prototype,"tooltipText",{get:function(){return this._tooltipTextBlock?this._tooltipTextBlock.text:null},set:function(t){var e=this;if(t){if(!this._tooltipFade){this._tooltipMesh=h.PlaneBuilder.CreatePlane("",{size:1},this._backPlate._scene);var i=h.PlaneBuilder.CreatePlane("",{size:1,sideOrientation:h.Mesh.DOUBLESIDE},this._backPlate._scene),r=new h.StandardMaterial("",this._backPlate._scene);r.diffuseColor=h.Color3.FromHexString("#212121"),i.material=r,i.isPickable=!1,this._tooltipMesh.addChild(i),i.position.z=.05,this._tooltipMesh.scaling.y=1/3,this._tooltipMesh.position.y=.7,this._tooltipMesh.position.z=-.15,this._tooltipMesh.isPickable=!1,this._tooltipMesh.parent=this._backPlate,this._tooltipTexture=G.CreateForMesh(this._tooltipMesh),this._tooltipTextBlock=new p,this._tooltipTextBlock.scaleY=3,this._tooltipTextBlock.color="white",this._tooltipTextBlock.fontSize=130,this._tooltipTexture.addControl(this._tooltipTextBlock),this._tooltipFade=new h.FadeInOutBehavior,this._tooltipFade.delay=500,this._tooltipMesh.addBehavior(this._tooltipFade),this._tooltipHoverObserver=this.onPointerEnterObservable.add(function(){e._tooltipFade&&e._tooltipFade.fadeIn(!0)}),this._tooltipOutObserver=this.onPointerOutObservable.add(function(){e._tooltipFade&&e._tooltipFade.fadeIn(!1)})}this._tooltipTextBlock&&(this._tooltipTextBlock.text=t)}else this._disposeTooltip()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text!==t&&(this._text=t,this._rebuildContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageUrl",{get:function(){return this._imageUrl},set:function(t){this._imageUrl!==t&&(this._imageUrl=t,this._rebuildContent())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backMaterial",{get:function(){return this._backMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frontMaterial",{get:function(){return this._frontMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"plateMaterial",{get:function(){return this._plateMaterial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shareMaterials",{get:function(){return this._shareMaterials},enumerable:!0,configurable:!0}),e.prototype._getTypeName=function(){return"HolographicButton"},e.prototype._rebuildContent=function(){this._disposeFacadeTexture();var t=new m;if(t.isVertical=!0,this._imageUrl){var e=new g;e.source=this._imageUrl,e.paddingTop="40px",e.height="180px",e.width="100px",e.paddingBottom="40px",t.addControl(e)}if(this._text){var i=new p;i.text=this._text,i.color="white",i.height="30px",i.fontSize=24,t.addControl(i)}this._frontPlate&&(this.content=t)},e.prototype._createNode=function(e){return this._backPlate=h.BoxBuilder.CreateBox(this.name+"BackMesh",{width:1,height:1,depth:.08},e),this._frontPlate=h.BoxBuilder.CreateBox(this.name+"FrontMesh",{width:1,height:1,depth:.08},e),this._frontPlate.parent=this._backPlate,this._frontPlate.position.z=-.08,this._frontPlate.isPickable=!1,this._frontPlate.setEnabled(!1),this._textPlate=t.prototype._createNode.call(this,e),this._textPlate.parent=this._backPlate,this._textPlate.position.z=-.08,this._textPlate.isPickable=!1,this._backPlate},e.prototype._applyFacade=function(t){this._plateMaterial.emissiveTexture=t,this._plateMaterial.opacityTexture=t},e.prototype._createBackMaterial=function(t){var e=this;this._backMaterial=new it(this.name+"Back Material",t.getScene()),this._backMaterial.renderHoverLight=!0,this._pickedPointObserver=this._host.onPickedPointChangedObservable.add(function(t){t?(e._backMaterial.hoverPosition=t,e._backMaterial.hoverColor.a=1):e._backMaterial.hoverColor.a=0})},e.prototype._createFrontMaterial=function(t){this._frontMaterial=new it(this.name+"Front Material",t.getScene()),this._frontMaterial.innerGlowColorIntensity=0,this._frontMaterial.alpha=.5,this._frontMaterial.renderBorders=!0},e.prototype._createPlateMaterial=function(t){this._plateMaterial=new h.StandardMaterial(this.name+"Plate Material",t.getScene()),this._plateMaterial.specularColor=h.Color3.Black()},e.prototype._affectMaterial=function(t){this._shareMaterials?(this._host._sharedMaterials.backFluentMaterial?this._backMaterial=this._host._sharedMaterials.backFluentMaterial:(this._createBackMaterial(t),this._host._sharedMaterials.backFluentMaterial=this._backMaterial),this._host._sharedMaterials.frontFluentMaterial?this._frontMaterial=this._host._sharedMaterials.frontFluentMaterial:(this._createFrontMaterial(t),this._host._sharedMaterials.frontFluentMaterial=this._frontMaterial)):(this._createBackMaterial(t),this._createFrontMaterial(t)),this._createPlateMaterial(t),this._backPlate.material=this._backMaterial,this._frontPlate.material=this._frontMaterial,this._textPlate.material=this._plateMaterial,this._rebuildContent()},e.prototype.dispose=function(){t.prototype.dispose.call(this),this._disposeTooltip(),this.shareMaterials||(this._backMaterial.dispose(),this._frontMaterial.dispose(),this._plateMaterial.dispose(),this._pickedPointObserver&&(this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver),this._pickedPointObserver=null))},e}(q),nt=function(t){function e(e,i){var r=t.call(this,i)||this;return r._currentMesh=e,r.pointerEnterAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1.1)},r.pointerOutAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1/1.1)},r.pointerDownAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(.95)},r.pointerUpAnimation=function(){r.mesh&&r.mesh.scaling.scaleInPlace(1/.95)},r}return n(e,t),e.prototype._getTypeName=function(){return"MeshButton3D"},e.prototype._createNode=function(t){var e=this;return this._currentMesh.getChildMeshes().forEach(function(t){t.metadata=e}),this._currentMesh},e.prototype._affectMaterial=function(t){},e}(q),ot=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){t.position=e.clone();var r=h.Tmp.Vector3[0];switch(r.copyFrom(e),this.orientation){case Z.FACEORIGIN_ORIENTATION:case Z.FACEFORWARD_ORIENTATION:r.addInPlace(new h.Vector3(0,0,1)),i.lookAt(r);break;case Z.FACEFORWARDREVERSED_ORIENTATION:case Z.FACEORIGINREVERSED_ORIENTATION:r.addInPlace(new h.Vector3(0,0,-1)),i.lookAt(r)}}},e}(J),st=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._iteration=100,e}return n(e,t),Object.defineProperty(e.prototype,"iteration",{get:function(){return this._iteration},set:function(t){var e=this;this._iteration!==t&&(this._iteration=t,h.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh,r=this._scatterMapping(e);if(i){switch(this.orientation){case Z.FACEORIGIN_ORIENTATION:case Z.FACEFORWARD_ORIENTATION:i.lookAt(new h.Vector3(0,0,1));break;case Z.FACEFORWARDREVERSED_ORIENTATION:case Z.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new h.Vector3(0,0,-1))}t.position=r}},e.prototype._scatterMapping=function(t){return t.x=(1-2*Math.random())*this._cellWidth,t.y=(1-2*Math.random())*this._cellHeight,t},e.prototype._finalProcessing=function(){for(var t=[],e=0,i=this._children;e<i.length;e++){var r=i[e];r.mesh&&t.push(r.mesh)}for(var n=0;n<this._iteration;n++){t.sort(function(t,e){var i=t.position.lengthSquared(),r=e.position.lengthSquared();return i<r?1:i>r?-1:0});for(var o=Math.pow(this.margin,2),s=Math.max(this._cellWidth,this._cellHeight),a=h.Tmp.Vector2[0],l=h.Tmp.Vector3[0],u=0;u<t.length-1;u++)for(var c=u+1;c<t.length;c++)if(u!=c){t[c].position.subtractToRef(t[u].position,l),a.x=l.x,a.y=l.y;var _=s,d=a.lengthSquared()-o;(d-=Math.min(d,o))<Math.pow(_,2)&&(a.normalize(),l.scaleInPlace(.5*(_-Math.sqrt(d))),t[c].position.addInPlace(l),t[u].position.subtractInPlace(l))}}},e}(J),ht=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._radius=5,e}return n(e,t),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){var e=this;this._radius!==t&&(this._radius=t,h.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._mapGridNode=function(t,e){var i=t.mesh;if(i){var r=this._sphericalMapping(e);switch(t.position=r,this.orientation){case Z.FACEORIGIN_ORIENTATION:i.lookAt(new h.Vector3(2*r.x,2*r.y,2*r.z));break;case Z.FACEORIGINREVERSED_ORIENTATION:i.lookAt(new h.Vector3(-r.x,-r.y,-r.z));break;case Z.FACEFORWARD_ORIENTATION:break;case Z.FACEFORWARDREVERSED_ORIENTATION:i.rotate(h.Axis.Y,Math.PI,h.Space.LOCAL)}}},e.prototype._sphericalMapping=function(t){var e=new h.Vector3(0,0,this._radius),i=t.y/this._radius,r=-t.x/this._radius;return h.Matrix.RotationYawPitchRollToRef(r,i,0,h.Tmp.Matrix[0]),h.Vector3.TransformNormal(e,h.Tmp.Matrix[0])},e}(J),at=function(t){function e(e){void 0===e&&(e=!1);var i=t.call(this)||this;return i._isVertical=!1,i.margin=.1,i._isVertical=e,i}return n(e,t),Object.defineProperty(e.prototype,"isVertical",{get:function(){return this._isVertical},set:function(t){var e=this;this._isVertical!==t&&(this._isVertical=t,h.Tools.SetImmediate(function(){e._arrangeChildren()}))},enumerable:!0,configurable:!0}),e.prototype._arrangeChildren=function(){for(var t,e=0,i=0,r=0,n=[],o=h.Matrix.Invert(this.node.computeWorldMatrix(!0)),s=0,a=this._children;s<a.length;s++){if((f=a[s]).mesh){r++,f.mesh.computeWorldMatrix(!0),f.mesh.getWorldMatrix().multiplyToRef(o,h.Tmp.Matrix[0]);var l=f.mesh.getBoundingInfo().boundingBox,u=h.Vector3.TransformNormal(l.extendSize,h.Tmp.Matrix[0]);n.push(u),this._isVertical?i+=u.y:e+=u.x}}this._isVertical?i+=(r-1)*this.margin/2:e+=(r-1)*this.margin/2,t=this._isVertical?-i:-e;for(var c=0,_=0,d=this._children;_<d.length;_++){var f;if((f=d[_]).mesh){r--;u=n[c++];this._isVertical?(f.position.y=t+u.y,f.position.x=0,t+=2*u.y):(f.position.x=t+u.x,f.position.y=0,t+=2*u.x),t+=r>0?this.margin:0}}},e}(Z),lt=function(){function t(t){var e=this;this._lastControlOver={},this._lastControlDown={},this.onPickedPointChangedObservable=new h.Observable,this._sharedMaterials={},this._scene=t||h.EngineStore.LastCreatedScene,this._sceneDisposeObserver=this._scene.onDisposeObservable.add(function(){e._sceneDisposeObserver=null,e._utilityLayer=null,e.dispose()}),this._utilityLayer=new h.UtilityLayerRenderer(this._scene),this._utilityLayer.onlyCheckPointerDownEvents=!1,this._utilityLayer.pickUtilitySceneFirst=!1,this._utilityLayer.mainSceneTrackerPredicate=function(t){return t&&t.metadata&&t.metadata._node},this._rootContainer=new Z("RootContainer"),this._rootContainer._host=this;var i=this._utilityLayer.utilityLayerScene;this._pointerOutObserver=this._utilityLayer.onPointerOutObservable.add(function(t){e._handlePointerOut(t,!0)}),this._pointerObserver=i.onPointerObservable.add(function(t,i){e._doPicking(t)}),this._utilityLayer.utilityLayerScene.autoClear=!1,this._utilityLayer.utilityLayerScene.autoClearDepthAndStencil=!1,new h.HemisphericLight("hemi",h.Vector3.Up(),this._utilityLayer.utilityLayerScene)}return Object.defineProperty(t.prototype,"scene",{get:function(){return this._scene},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"utilityLayer",{get:function(){return this._utilityLayer},enumerable:!0,configurable:!0}),t.prototype._handlePointerOut=function(t,e){var i=this._lastControlOver[t];i&&(i._onPointerOut(i),delete this._lastControlOver[t]),e&&this._lastControlDown[t]&&(this._lastControlDown[t].forcePointerUp(),delete this._lastControlDown[t]),this.onPickedPointChangedObservable.notifyObservers(null)},t.prototype._doPicking=function(t){if(!this._utilityLayer||!this._utilityLayer.utilityLayerScene.activeCamera)return!1;var e=t.event,i=e.pointerId||0,r=e.button,n=t.pickInfo;if(!n||!n.hit)return this._handlePointerOut(i,t.type===h.PointerEventTypes.POINTERUP),!1;var o=n.pickedMesh.metadata;return n.pickedPoint&&this.onPickedPointChangedObservable.notifyObservers(n.pickedPoint),o._processObservables(t.type,n.pickedPoint,i,r)||t.type===h.PointerEventTypes.POINTERMOVE&&(this._lastControlOver[i]&&this._lastControlOver[i]._onPointerOut(this._lastControlOver[i]),delete this._lastControlOver[i]),t.type===h.PointerEventTypes.POINTERUP&&(this._lastControlDown[e.pointerId]&&(this._lastControlDown[e.pointerId].forcePointerUp(),delete this._lastControlDown[e.pointerId]),"touch"===e.pointerType&&this._handlePointerOut(i,!1)),!0},Object.defineProperty(t.prototype,"rootContainer",{get:function(){return this._rootContainer},enumerable:!0,configurable:!0}),t.prototype.containsControl=function(t){return this._rootContainer.containsControl(t)},t.prototype.addControl=function(t){return this._rootContainer.addControl(t),this},t.prototype.removeControl=function(t){return this._rootContainer.removeControl(t),this},t.prototype.dispose=function(){for(var t in this._rootContainer.dispose(),this._sharedMaterials)this._sharedMaterials.hasOwnProperty(t)&&this._sharedMaterials[t].dispose();this._sharedMaterials={},this._pointerOutObserver&&this._utilityLayer&&(this._utilityLayer.onPointerOutObservable.remove(this._pointerOutObserver),this._pointerOutObserver=null),this.onPickedPointChangedObservable.clear();var e=this._utilityLayer?this._utilityLayer.utilityLayerScene:null;e&&this._pointerObserver&&(e.onPointerObservable.remove(this._pointerObserver),this._pointerObserver=null),this._scene&&this._sceneDisposeObserver&&(this._scene.onDisposeObservable.remove(this._sceneDisposeObserver),this._sceneDisposeObserver=null),this._utilityLayer&&this._utilityLayer.dispose()},t}();i.d(e,"AdvancedDynamicTexture",function(){return G}),i.d(e,"AdvancedDynamicTextureInstrumentation",function(){return X}),i.d(e,"Vector2WithInfo",function(){return u}),i.d(e,"Matrix2D",function(){return c}),i.d(e,"Measure",function(){return l}),i.d(e,"MultiLinePoint",function(){return P}),i.d(e,"Style",function(){return z}),i.d(e,"ValueAndUnit",function(){return a}),i.d(e,"Button",function(){return b}),i.d(e,"Checkbox",function(){return y}),i.d(e,"ColorPicker",function(){return C}),i.d(e,"Container",function(){return d}),i.d(e,"Control",function(){return _}),i.d(e,"Ellipse",function(){return T}),i.d(e,"Grid",function(){return O}),i.d(e,"Image",function(){return g}),i.d(e,"InputText",function(){return v}),i.d(e,"InputPassword",function(){return w}),i.d(e,"Line",function(){return x}),i.d(e,"MultiLine",function(){return M}),i.d(e,"RadioButton",function(){return k}),i.d(e,"StackPanel",function(){return m}),i.d(e,"SelectorGroup",function(){return E}),i.d(e,"CheckboxGroup",function(){return S}),i.d(e,"RadioGroup",function(){return D}),i.d(e,"SliderGroup",function(){return R}),i.d(e,"SelectionPanel",function(){return L}),i.d(e,"ScrollViewer",function(){return H}),i.d(e,"TextWrapping",function(){return s}),i.d(e,"TextBlock",function(){return p}),i.d(e,"KeyPropertySet",function(){return V}),i.d(e,"VirtualKeyboard",function(){return F}),i.d(e,"Rectangle",function(){return f}),i.d(e,"DisplayGrid",function(){return j}),i.d(e,"BaseSlider",function(){return I}),i.d(e,"Slider",function(){return A}),i.d(e,"ImageBasedSlider",function(){return W}),i.d(e,"ScrollBar",function(){return B}),i.d(e,"name",function(){return"Statics"}),i.d(e,"GUI3DManager",function(){return lt}),i.d(e,"Vector3WithInfo",function(){return Y}),i.d(e,"AbstractButton3D",function(){return K}),i.d(e,"Button3D",function(){return q}),i.d(e,"Container3D",function(){return Z}),i.d(e,"Control3D",function(){return U}),i.d(e,"CylinderPanel",function(){return Q}),i.d(e,"HolographicButton",function(){return rt}),i.d(e,"MeshButton3D",function(){return nt}),i.d(e,"PlanePanel",function(){return ot}),i.d(e,"ScatterPanel",function(){return st}),i.d(e,"SpherePanel",function(){return ht}),i.d(e,"StackPanel3D",function(){return at}),i.d(e,"VolumeBasedPanel",function(){return J}),i.d(e,"FluentMaterialDefines",function(){return et}),i.d(e,"FluentMaterial",function(){return it})},function(t,e,i){"use strict";i.r(e),function(t){var r=i(1);i.d(e,"AdvancedDynamicTexture",function(){return r.AdvancedDynamicTexture}),i.d(e,"AdvancedDynamicTextureInstrumentation",function(){return r.AdvancedDynamicTextureInstrumentation}),i.d(e,"Vector2WithInfo",function(){return r.Vector2WithInfo}),i.d(e,"Matrix2D",function(){return r.Matrix2D}),i.d(e,"Measure",function(){return r.Measure}),i.d(e,"MultiLinePoint",function(){return r.MultiLinePoint}),i.d(e,"Style",function(){return r.Style}),i.d(e,"ValueAndUnit",function(){return r.ValueAndUnit}),i.d(e,"GUI3DManager",function(){return r.GUI3DManager}),i.d(e,"Vector3WithInfo",function(){return r.Vector3WithInfo}),i.d(e,"Button",function(){return r.Button}),i.d(e,"Checkbox",function(){return r.Checkbox}),i.d(e,"ColorPicker",function(){return r.ColorPicker}),i.d(e,"Container",function(){return r.Container}),i.d(e,"Control",function(){return r.Control}),i.d(e,"Ellipse",function(){return r.Ellipse}),i.d(e,"Grid",function(){return r.Grid}),i.d(e,"Image",function(){return r.Image}),i.d(e,"InputText",function(){return r.InputText}),i.d(e,"InputPassword",function(){return r.InputPassword}),i.d(e,"Line",function(){return r.Line}),i.d(e,"MultiLine",function(){return r.MultiLine}),i.d(e,"RadioButton",function(){return r.RadioButton}),i.d(e,"StackPanel",function(){return r.StackPanel}),i.d(e,"SelectorGroup",function(){return r.SelectorGroup}),i.d(e,"CheckboxGroup",function(){return r.CheckboxGroup}),i.d(e,"RadioGroup",function(){return r.RadioGroup}),i.d(e,"SliderGroup",function(){return r.SliderGroup}),i.d(e,"SelectionPanel",function(){return r.SelectionPanel}),i.d(e,"ScrollViewer",function(){return r.ScrollViewer}),i.d(e,"TextWrapping",function(){return r.TextWrapping}),i.d(e,"TextBlock",function(){return r.TextBlock}),i.d(e,"KeyPropertySet",function(){return r.KeyPropertySet}),i.d(e,"VirtualKeyboard",function(){return r.VirtualKeyboard}),i.d(e,"Rectangle",function(){return r.Rectangle}),i.d(e,"DisplayGrid",function(){return r.DisplayGrid}),i.d(e,"BaseSlider",function(){return r.BaseSlider}),i.d(e,"Slider",function(){return r.Slider}),i.d(e,"ImageBasedSlider",function(){return r.ImageBasedSlider}),i.d(e,"ScrollBar",function(){return r.ScrollBar}),i.d(e,"name",function(){return r.name}),i.d(e,"AbstractButton3D",function(){return r.AbstractButton3D}),i.d(e,"Button3D",function(){return r.Button3D}),i.d(e,"Container3D",function(){return r.Container3D}),i.d(e,"Control3D",function(){return r.Control3D}),i.d(e,"CylinderPanel",function(){return r.CylinderPanel}),i.d(e,"HolographicButton",function(){return r.HolographicButton}),i.d(e,"MeshButton3D",function(){return r.MeshButton3D}),i.d(e,"PlanePanel",function(){return r.PlanePanel}),i.d(e,"ScatterPanel",function(){return r.ScatterPanel}),i.d(e,"SpherePanel",function(){return r.SpherePanel}),i.d(e,"StackPanel3D",function(){return r.StackPanel3D}),i.d(e,"VolumeBasedPanel",function(){return r.VolumeBasedPanel}),i.d(e,"FluentMaterialDefines",function(){return r.FluentMaterialDefines}),i.d(e,"FluentMaterial",function(){return r.FluentMaterial});var n=void 0!==t?t:"undefined"!=typeof window?window:void 0;void 0!==n&&(n.BABYLON=n.BABYLON||{},n.BABYLON.GUI=r)}.call(this,i(3))},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i}])});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babylonjs/babylon.js":
/*!*******************************************!*\
  !*** ./node_modules/babylonjs/babylon.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=129)}([function(e,t,i){"use strict";i.d(t,"u",function(){return s}),i.d(t,"v",function(){return a}),i.d(t,"h",function(){return c}),i.d(t,"e",function(){return l}),i.d(t,"f",function(){return u}),i.d(t,"w",function(){return h}),i.d(t,"x",function(){return d}),i.d(t,"y",function(){return f}),i.d(t,"r",function(){return p}),i.d(t,"q",function(){return _}),i.d(t,"j",function(){return g}),i.d(t,"n",function(){return m}),i.d(t,"z",function(){return v}),i.d(t,"i",function(){return y}),i.d(t,"s",function(){return n}),i.d(t,"c",function(){return T}),i.d(t,"d",function(){return E}),i.d(t,"k",function(){return b}),i.d(t,"a",function(){return A}),i.d(t,"b",function(){return x}),i.d(t,"l",function(){return R}),i.d(t,"m",function(){return P}),i.d(t,"g",function(){return S}),i.d(t,"p",function(){return C}),i.d(t,"o",function(){return M}),i.d(t,"t",function(){return O});var n,r=i(34),o=i(12),s=1/2.2,a=2.2,c=.001,l=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.r=e,this.g=t,this.b=i}return e.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+"}"},e.prototype.getClassName=function(){return"Color3"},e.prototype.getHashCode=function(){var e=this.r||0;return e=397*(e=397*e^(this.g||0))^(this.b||0)},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,this},e.prototype.toColor4=function(e){return void 0===e&&(e=1),new u(this.r,this.g,this.b,e)},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toLuminance=function(){return.3*this.r+.59*this.g+.11*this.b},e.prototype.multiply=function(t){return new e(this.r*t.r,this.g*t.g,this.b*t.b)},e.prototype.multiplyToRef=function(e,t){return t.r=this.r*e.r,t.g=this.g*e.g,t.b=this.b*e.b,this},e.prototype.equals=function(e){return e&&this.r===e.r&&this.g===e.g&&this.b===e.b},e.prototype.equalsFloats=function(e,t,i){return this.r===e&&this.g===t&&this.b===i},e.prototype.scale=function(t){return new e(this.r*t,this.g*t,this.b*t)},e.prototype.scaleToRef=function(e,t){return t.r=this.r*e,t.g=this.g*e,t.b=this.b*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.r+=this.r*e,t.g+=this.g*e,t.b+=this.b*e,this},e.prototype.clampToRef=function(e,t,i){return void 0===e&&(e=0),void 0===t&&(t=1),i.r=o.a.Clamp(this.r,e,t),i.g=o.a.Clamp(this.g,e,t),i.b=o.a.Clamp(this.b,e,t),this},e.prototype.add=function(t){return new e(this.r+t.r,this.g+t.g,this.b+t.b)},e.prototype.addToRef=function(e,t){return t.r=this.r+e.r,t.g=this.g+e.g,t.b=this.b+e.b,this},e.prototype.subtract=function(t){return new e(this.r-t.r,this.g-t.g,this.b-t.b)},e.prototype.subtractToRef=function(e,t){return t.r=this.r-e.r,t.g=this.g-e.g,t.b=this.b-e.b,this},e.prototype.clone=function(){return new e(this.r,this.g,this.b)},e.prototype.copyFrom=function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},e.prototype.copyFromFloats=function(e,t,i){return this.r=e,this.g=t,this.b=i,this},e.prototype.set=function(e,t,i){return this.copyFromFloats(e,t,i)},e.prototype.toHexString=function(){var e=255*this.r|0,t=255*this.g|0,i=255*this.b|0;return"#"+o.a.ToHex(e)+o.a.ToHex(t)+o.a.ToHex(i)},e.prototype.toLinearSpace=function(){var t=new e;return this.toLinearSpaceToRef(t),t},e.prototype.toLinearSpaceToRef=function(e){return e.r=Math.pow(this.r,a),e.g=Math.pow(this.g,a),e.b=Math.pow(this.b,a),this},e.prototype.toGammaSpace=function(){var t=new e;return this.toGammaSpaceToRef(t),t},e.prototype.toGammaSpaceToRef=function(e){return e.r=Math.pow(this.r,s),e.g=Math.pow(this.g,s),e.b=Math.pow(this.b,s),this},e.FromHexString=function(t){if("#"!==t.substring(0,1)||7!==t.length)return new e(0,0,0);var i=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16);return e.FromInts(i,n,r)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2])},e.FromInts=function(t,i,n){return new e(t/255,i/255,n/255)},e.Lerp=function(t,i,n){var r=new e(0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.r=e.r+(t.r-e.r)*i,n.g=e.g+(t.g-e.g)*i,n.b=e.b+(t.b-e.b)*i},e.Red=function(){return new e(1,0,0)},e.Green=function(){return new e(0,1,0)},e.Blue=function(){return new e(0,0,1)},e.Black=function(){return new e(0,0,0)},Object.defineProperty(e,"BlackReadOnly",{get:function(){return e._BlackReadOnly},enumerable:!0,configurable:!0}),e.White=function(){return new e(1,1,1)},e.Purple=function(){return new e(.5,0,.5)},e.Magenta=function(){return new e(1,0,1)},e.Yellow=function(){return new e(1,1,0)},e.Gray=function(){return new e(.5,.5,.5)},e.Teal=function(){return new e(0,1,1)},e.Random=function(){return new e(Math.random(),Math.random(),Math.random())},e._BlackReadOnly=e.Black(),e}(),u=function(){function e(e,t,i,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=1),this.r=e,this.g=t,this.b=i,this.a=n}return e.prototype.addInPlace=function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this.a+=e.a,this},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e[t+3]=this.a,this},e.prototype.equals=function(e){return e&&this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a},e.prototype.add=function(t){return new e(this.r+t.r,this.g+t.g,this.b+t.b,this.a+t.a)},e.prototype.subtract=function(t){return new e(this.r-t.r,this.g-t.g,this.b-t.b,this.a-t.a)},e.prototype.subtractToRef=function(e,t){return t.r=this.r-e.r,t.g=this.g-e.g,t.b=this.b-e.b,t.a=this.a-e.a,this},e.prototype.scale=function(t){return new e(this.r*t,this.g*t,this.b*t,this.a*t)},e.prototype.scaleToRef=function(e,t){return t.r=this.r*e,t.g=this.g*e,t.b=this.b*e,t.a=this.a*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.r+=this.r*e,t.g+=this.g*e,t.b+=this.b*e,t.a+=this.a*e,this},e.prototype.clampToRef=function(e,t,i){return void 0===e&&(e=0),void 0===t&&(t=1),i.r=o.a.Clamp(this.r,e,t),i.g=o.a.Clamp(this.g,e,t),i.b=o.a.Clamp(this.b,e,t),i.a=o.a.Clamp(this.a,e,t),this},e.prototype.multiply=function(t){return new e(this.r*t.r,this.g*t.g,this.b*t.b,this.a*t.a)},e.prototype.multiplyToRef=function(e,t){return t.r=this.r*e.r,t.g=this.g*e.g,t.b=this.b*e.b,t.a=this.a*e.a,t},e.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+" A:"+this.a+"}"},e.prototype.getClassName=function(){return"Color4"},e.prototype.getHashCode=function(){var e=this.r||0;return e=397*(e=397*(e=397*e^(this.g||0))^(this.b||0))^(this.a||0)},e.prototype.clone=function(){return new e(this.r,this.g,this.b,this.a)},e.prototype.copyFrom=function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.r=e,this.g=t,this.b=i,this.a=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.toHexString=function(){var e=255*this.r|0,t=255*this.g|0,i=255*this.b|0,n=255*this.a|0;return"#"+o.a.ToHex(e)+o.a.ToHex(t)+o.a.ToHex(i)+o.a.ToHex(n)},e.prototype.toLinearSpace=function(){var t=new e;return this.toLinearSpaceToRef(t),t},e.prototype.toLinearSpaceToRef=function(e){return e.r=Math.pow(this.r,a),e.g=Math.pow(this.g,a),e.b=Math.pow(this.b,a),e.a=this.a,this},e.prototype.toGammaSpace=function(){var t=new e;return this.toGammaSpaceToRef(t),t},e.prototype.toGammaSpaceToRef=function(e){return e.r=Math.pow(this.r,s),e.g=Math.pow(this.g,s),e.b=Math.pow(this.b,s),e.a=this.a,this},e.FromHexString=function(t){if("#"!==t.substring(0,1)||9!==t.length)return new e(0,0,0,0);var i=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16),o=parseInt(t.substring(7,9),16);return e.FromInts(i,n,r,o)},e.Lerp=function(t,i,n){var r=new e(0,0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.r=e.r+(t.r-e.r)*i,n.g=e.g+(t.g-e.g)*i,n.b=e.b+(t.b-e.b)*i,n.a=e.a+(t.a-e.a)*i},e.FromColor3=function(t,i){return void 0===i&&(i=1),new e(t.r,t.g,t.b,i)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromInts=function(t,i,n,r){return new e(t/255,i/255,n/255,r/255)},e.CheckColors4=function(e,t){if(e.length===3*t){for(var i=[],n=0;n<e.length;n+=3){var r=n/3*4;i[r]=e[n],i[r+1]=e[n+1],i[r+2]=e[n+2],i[r+3]=1}return i}return e},e}(),h=function(){function e(e,t){void 0===e&&(e=0),void 0===t&&(t=0),this.x=e,this.y=t}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+"}"},e.prototype.getClassName=function(){return"Vector2"},e.prototype.getHashCode=function(){var e=this.x||0;return e=397*e^(this.y||0)},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,this},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this},e.prototype.copyFromFloats=function(e,t){return this.x=e,this.y=t,this},e.prototype.set=function(e,t){return this.copyFromFloats(e,t)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this},e.prototype.addVector3=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,this},e.prototype.multiplyByFloats=function(t,i){return new e(this.x*t,this.y*i)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.negate=function(){return new e(-this.x,-this.y)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this},e.prototype.scale=function(t){var i=new e(0,0);return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=c),e&&o.a.WithinEpsilon(this.x,e.x,t)&&o.a.WithinEpsilon(this.y,e.y,t)},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y},e.prototype.normalize=function(){var e=this.length();if(0===e)return this;var t=1/e;return this.x*=t,this.y*=t,this},e.prototype.clone=function(){return new e(this.x,this.y)},e.Zero=function(){return new e(0,0)},e.One=function(){return new e(1,1)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1]},e.CatmullRom=function(t,i,n,r,o){var s=o*o,a=o*s;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*s+(-t.x+3*i.x-3*n.x+r.x)*a),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*s+(-t.y+3*i.y-3*n.y+r.y)*a))},e.Clamp=function(t,i,n){var r=t.x;r=(r=r>n.x?n.x:r)<i.x?i.x:r;var o=t.y;return new e(r,o=(o=o>n.y?n.y:o)<i.y?i.y:o)},e.Hermite=function(t,i,n,r,o){var s=o*o,a=o*s,c=2*a-3*s+1,l=-2*a+3*s,u=a-2*s+o,h=a-s;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h)},e.Lerp=function(t,i,n){return new e(t.x+(i.x-t.x)*n,t.y+(i.y-t.y)*n)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y},e.Normalize=function(e){var t=e.clone();return t.normalize(),t},e.Minimize=function(t,i){return new e(t.x<i.x?t.x:i.x,t.y<i.y?t.y:i.y)},e.Maximize=function(t,i){return new e(t.x>i.x?t.x:i.x,t.y>i.y?t.y:i.y)},e.Transform=function(t,i){var n=e.Zero();return e.TransformToRef(t,i,n),n},e.TransformToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+n[12],o=e.x*n[1]+e.y*n[5]+n[13];i.x=r,i.y=o},e.PointInTriangle=function(e,t,i,n){var r=.5*(-i.y*n.x+t.y*(-i.x+n.x)+t.x*(i.y-n.y)+i.x*n.y),o=r<0?-1:1,s=(t.y*n.x-t.x*n.y+(n.y-t.y)*e.x+(t.x-n.x)*e.y)*o,a=(t.x*i.y-t.y*i.x+(t.y-i.y)*e.x+(i.x-t.x)*e.y)*o;return s>0&&a>0&&s+a<2*r*o},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.DistanceOfPointFromSegment=function(t,i,n){var r=e.DistanceSquared(i,n);if(0===r)return e.Distance(t,i);var o=n.subtract(i),s=Math.max(0,Math.min(1,e.Dot(t.subtract(i),o)/r)),a=i.add(o.multiplyByFloats(s,s));return e.Distance(t,a)},e}(),d=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.x=e,this.y=t,this.z=i}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+"}"},e.prototype.getClassName=function(){return"Vector3"},e.prototype.getHashCode=function(){var e=this.x||0;return e=397*(e=397*e^(this.y||0))^(this.z||0)},e.prototype.asArray=function(){var e=[];return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,this},e.prototype.toQuaternion=function(){return _.RotationYawPitchRoll(this.y,this.x,this.z)},e.prototype.addInPlace=function(e){return this.addInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.addInPlaceFromFloats=function(e,t,i){return this.x+=e,this.y+=t,this.z+=i,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.addToRef=function(e,t){return t.copyFromFloats(this.x+e.x,this.y+e.y,this.z+e.z)},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.subtractToRef=function(e,t){return this.subtractFromFloatsToRef(e.x,e.y,e.z,t)},e.prototype.subtractFromFloats=function(t,i,n){return new e(this.x-t,this.y-i,this.z-n)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n){return n.copyFromFloats(this.x-e,this.y-t,this.z-i)},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t)},e.prototype.scaleToRef=function(e,t){return t.copyFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.scaleAndAddToRef=function(e,t){return t.addInPlaceFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=c),e&&o.a.WithinEpsilon(this.x,e.x,t)&&o.a.WithinEpsilon(this.y,e.y,t)&&o.a.WithinEpsilon(this.z,e.z,t)},e.prototype.equalsToFloats=function(e,t,i){return this.x===e&&this.y===t&&this.z===i},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this},e.prototype.multiply=function(e){return this.multiplyByFloats(e.x,e.y,e.z)},e.prototype.multiplyToRef=function(e,t){return t.copyFromFloats(this.x*e.x,this.y*e.y,this.z*e.z)},e.prototype.multiplyByFloats=function(t,i,n){return new e(this.x*t,this.y*i,this.z*n)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z)},e.prototype.divideToRef=function(e,t){return t.copyFromFloats(this.x/e.x,this.y/e.y,this.z/e.z)},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return this.minimizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.maximizeInPlace=function(e){return this.maximizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.minimizeInPlaceFromFloats=function(e,t,i){return e<this.x&&(this.x=e),t<this.y&&(this.y=t),i<this.z&&(this.z=i),this},e.prototype.maximizeInPlaceFromFloats=function(e,t,i){return e>this.x&&(this.x=e),t>this.y&&(this.y=t),i>this.z&&(this.z=i),this},e.prototype.isNonUniformWithinEpsilon=function(e){var t=Math.abs(this.x),i=Math.abs(this.y);if(!o.a.WithinEpsilon(t,i,e))return!0;var n=Math.abs(this.z);return!o.a.WithinEpsilon(t,n,e)||!o.a.WithinEpsilon(i,n,e)},Object.defineProperty(e.prototype,"isNonUniform",{get:function(){var e=Math.abs(this.x),t=Math.abs(this.y);if(e!==t)return!0;var i=Math.abs(this.z);return e!==i||t!==i},enumerable:!0,configurable:!0}),e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.normalize=function(){return this.normalizeFromLength(this.length())},e.prototype.reorderInPlace=function(e){var t=this;return"xyz"===(e=e.toLowerCase())?this:(I.Vector3[0].copyFrom(this),["x","y","z"].forEach(function(i,n){t[i]=I.Vector3[0][e[n]]}),this)},e.prototype.rotateByQuaternionToRef=function(t,i){return t.toRotationMatrix(I.Matrix[0]),e.TransformCoordinatesToRef(this,I.Matrix[0],i),i},e.prototype.rotateByQuaternionAroundPointToRef=function(e,t,i){return this.subtractToRef(t,I.Vector3[0]),I.Vector3[0].rotateByQuaternionToRef(e,I.Vector3[0]),t.addToRef(I.Vector3[0],i),i},e.prototype.normalizeFromLength=function(e){return 0===e||1===e?this:this.scaleInPlace(1/e)},e.prototype.normalizeToNew=function(){var t=new e(0,0,0);return this.normalizeToRef(t),t},e.prototype.normalizeToRef=function(e){var t=this.length();return 0===t||1===t?e.copyFromFloats(this.x,this.y,this.z):this.scaleToRef(1/t,e)},e.prototype.clone=function(){return new e(this.x,this.y,this.z)},e.prototype.copyFrom=function(e){return this.copyFromFloats(e.x,e.y,e.z)},e.prototype.copyFromFloats=function(e,t,i){return this.x=e,this.y=t,this.z=i,this},e.prototype.set=function(e,t,i){return this.copyFromFloats(e,t,i)},e.prototype.setAll=function(e){return this.x=this.y=this.z=e,this},e.GetClipFactor=function(t,i,n,r){var o=e.Dot(t,n)-r;return o/(o-(e.Dot(i,n)-r))},e.GetAngleBetweenVectors=function(t,i,n){var r=t.normalizeToRef(I.Vector3[1]),o=i.normalizeToRef(I.Vector3[2]),s=e.Dot(r,o),a=I.Vector3[3];return e.CrossToRef(r,o,a),e.Dot(a,n)>0?Math.acos(s):-Math.acos(s)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2])},e.FromFloatArray=function(t,i){return e.FromArray(t,i)},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2]},e.FromFloatArrayToRef=function(t,i,n){return e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n){n.copyFromFloats(e,t,i)},e.Zero=function(){return new e(0,0,0)},e.One=function(){return new e(1,1,1)},e.Up=function(){return new e(0,1,0)},Object.defineProperty(e,"UpReadOnly",{get:function(){return e._UpReadOnly},enumerable:!0,configurable:!0}),e.Down=function(){return new e(0,-1,0)},e.Forward=function(){return new e(0,0,1)},e.Backward=function(){return new e(0,0,-1)},e.Right=function(){return new e(1,0,0)},e.Left=function(){return new e(-1,0,0)},e.TransformCoordinates=function(t,i){var n=e.Zero();return e.TransformCoordinatesToRef(t,i,n),n},e.TransformCoordinatesToRef=function(t,i,n){e.TransformCoordinatesFromFloatsToRef(t.x,t.y,t.z,i,n)},e.TransformCoordinatesFromFloatsToRef=function(e,t,i,n,r){var o=n.m,s=e*o[0]+t*o[4]+i*o[8]+o[12],a=e*o[1]+t*o[5]+i*o[9]+o[13],c=e*o[2]+t*o[6]+i*o[10]+o[14],l=1/(e*o[3]+t*o[7]+i*o[11]+o[15]);r.x=s*l,r.y=a*l,r.z=c*l},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){this.TransformNormalFromFloatsToRef(e.x,e.y,e.z,t,i)},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r){var o=n.m;r.x=e*o[0]+t*o[4]+i*o[8],r.y=e*o[1]+t*o[5]+i*o[9],r.z=e*o[2]+t*o[6]+i*o[10]},e.CatmullRom=function(t,i,n,r,o){var s=o*o,a=o*s;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*s+(-t.x+3*i.x-3*n.x+r.x)*a),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*s+(-t.y+3*i.y-3*n.y+r.y)*a),.5*(2*i.z+(-t.z+n.z)*o+(2*t.z-5*i.z+4*n.z-r.z)*s+(-t.z+3*i.z-3*n.z+r.z)*a))},e.Clamp=function(t,i,n){var r=new e;return e.ClampToRef(t,i,n,r),r},e.ClampToRef=function(e,t,i,n){var r=e.x;r=(r=r>i.x?i.x:r)<t.x?t.x:r;var o=e.y;o=(o=o>i.y?i.y:o)<t.y?t.y:o;var s=e.z;s=(s=s>i.z?i.z:s)<t.z?t.z:s,n.copyFromFloats(r,o,s)},e.Hermite=function(t,i,n,r,o){var s=o*o,a=o*s,c=2*a-3*s+1,l=-2*a+3*s,u=a-2*s+o,h=a-s;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h)},e.Lerp=function(t,i,n){var r=new e(0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.x=e.x+(t.x-e.x)*i,n.y=e.y+(t.y-e.y)*i,n.z=e.z+(t.z-e.z)*i},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z},e.Cross=function(t,i){var n=e.Zero();return e.CrossToRef(t,i,n),n},e.CrossToRef=function(e,t,i){var n=e.y*t.z-e.z*t.y,r=e.z*t.x-e.x*t.z,o=e.x*t.y-e.y*t.x;i.copyFromFloats(n,r,o)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){e.normalizeToRef(t)},e.Project=function(t,i,n,r){var o=r.width,s=r.height,a=r.x,c=r.y,l=I.Matrix[1];g.FromValuesToRef(o/2,0,0,0,0,-s/2,0,0,0,0,.5,0,a+o/2,s/2+c,.5,1,l);var u=I.Matrix[0];return i.multiplyToRef(n,u),u.multiplyToRef(l,u),e.TransformCoordinates(t,u)},e._UnprojectFromInvertedMatrixToRef=function(t,i,n){e.TransformCoordinatesToRef(t,i,n);var r=i.m,s=t.x*r[3]+t.y*r[7]+t.z*r[11]+r[15];o.a.WithinEpsilon(s,1)&&n.scaleInPlace(1/s)},e.UnprojectFromTransform=function(t,i,n,r,o){var s=I.Matrix[0];r.multiplyToRef(o,s),s.invert(),t.x=t.x/i*2-1,t.y=-(t.y/n*2-1);var a=new e;return e._UnprojectFromInvertedMatrixToRef(t,s,a),a},e.Unproject=function(t,i,n,r,o,s){var a=e.Zero();return e.UnprojectToRef(t,i,n,r,o,s,a),a},e.UnprojectToRef=function(t,i,n,r,o,s,a){e.UnprojectFloatsToRef(t.x,t.y,t.z,i,n,r,o,s,a)},e.UnprojectFloatsToRef=function(t,i,n,r,o,s,a,c,l){var u=I.Matrix[0];s.multiplyToRef(a,u),u.multiplyToRef(c,u),u.invert();var h=I.Vector3[0];h.x=t/r*2-1,h.y=-(i/o*2-1),h.z=2*n-1,e._UnprojectFromInvertedMatrixToRef(h,u,l)},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z;return i*i+n*n+r*r},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.RotationFromAxis=function(t,i,n){var r=e.Zero();return e.RotationFromAxisToRef(t,i,n,r),r},e.RotationFromAxisToRef=function(e,t,i,n){var r=I.Quaternion[0];_.RotationQuaternionFromAxisToRef(e,t,i,r),r.toEulerAnglesToRef(n)},e._UpReadOnly=e.Up(),e}(),f=function(){function e(e,t,i,n){this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Vector4"},e.prototype.getHashCode=function(){var e=this.x||0;return e=397*(e=397*(e=397*e^(this.y||0))^(this.z||0))^(this.w||0)},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,t.z=this.z+e.z,t.w=this.w+e.w,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z,t.w=this.w-e.w,this},e.prototype.subtractFromFloats=function(t,i,n,r){return new e(this.x-t,this.y-i,this.z-n,this.w-r)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n,r){return r.x=this.x-e,r.y=this.y-t,r.z=this.z-i,r.w=this.w-n,this},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z,-this.w)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=c),e&&o.a.WithinEpsilon(this.x,e.x,t)&&o.a.WithinEpsilon(this.y,e.y,t)&&o.a.WithinEpsilon(this.z,e.z,t)&&o.a.WithinEpsilon(this.w,e.w,t)},e.prototype.equalsToFloats=function(e,t,i,n){return this.x===e&&this.y===t&&this.z===i&&this.w===n},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y,this.z*t.z,this.w*t.w)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,t.z=this.z*e.z,t.w=this.w*e.w,this},e.prototype.multiplyByFloats=function(t,i,n,r){return new e(this.x*t,this.y*i,this.z*n,this.w*r)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z,this.w/t.w)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,t.z=this.z/e.z,t.w=this.w/e.w,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),e.z<this.z&&(this.z=e.z),e.w<this.w&&(this.w=e.w),this},e.prototype.maximizeInPlace=function(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),e.z>this.z&&(this.z=e.z),e.w>this.w&&(this.w=e.w),this},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z),Math.floor(this.w))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z),this.w-Math.floor(this.w))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},e.prototype.normalize=function(){var e=this.length();return 0===e?this:this.scaleInPlace(1/e)},e.prototype.toVector3=function(){return new d(this.x,this.y,this.z)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.setAll=function(e){return this.x=this.y=this.z=this.w=e,this},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2],i.w=e[t+3]},e.FromFloatArrayToRef=function(t,i,n){e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n,r){r.x=e,r.y=t,r.z=i,r.w=n},e.Zero=function(){return new e(0,0,0,0)},e.One=function(){return new e(1,1,1,1)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){t.copyFrom(e),t.normalize()},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z,o=e.w-t.w;return i*i+n*n+r*r+o*o},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+e.z*n[8],o=e.x*n[1]+e.y*n[5]+e.z*n[9],s=e.x*n[2]+e.y*n[6]+e.z*n[10];i.x=r,i.y=o,i.z=s,i.w=e.w},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r,o){var s=r.m;o.x=e*s[0]+t*s[4]+i*s[8],o.y=e*s[1]+t*s[5]+i*s[9],o.z=e*s[2]+t*s[6]+i*s[10],o.w=n},e.FromVector3=function(t,i){return void 0===i&&(i=0),new e(t.x,t.y,t.z,i)},e}(),p=function(){function e(e,t){this.width=e,this.height=t}return e.prototype.toString=function(){return"{W: "+this.width+", H: "+this.height+"}"},e.prototype.getClassName=function(){return"Size"},e.prototype.getHashCode=function(){var e=this.width||0;return e=397*e^(this.height||0)},e.prototype.copyFrom=function(e){this.width=e.width,this.height=e.height},e.prototype.copyFromFloats=function(e,t){return this.width=e,this.height=t,this},e.prototype.set=function(e,t){return this.copyFromFloats(e,t)},e.prototype.multiplyByFloats=function(t,i){return new e(this.width*t,this.height*i)},e.prototype.clone=function(){return new e(this.width,this.height)},e.prototype.equals=function(e){return!!e&&(this.width===e.width&&this.height===e.height)},Object.defineProperty(e.prototype,"surface",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),e.Zero=function(){return new e(0,0)},e.prototype.add=function(t){return new e(this.width+t.width,this.height+t.height)},e.prototype.subtract=function(t){return new e(this.width-t.width,this.height-t.height)},e.Lerp=function(t,i,n){return new e(t.width+(i.width-t.width)*n,t.height+(i.height-t.height)*n)},e}(),_=function(){function e(e,t,i,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Quaternion"},e.prototype.getHashCode=function(){var e=this.x||0;return e=397*(e=397*(e=397*e^(this.y||0))^(this.z||0))^(this.w||0)},e.prototype.asArray=function(){return[this.x,this.y,this.z,this.w]},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.multiply=function(t){var i=new e(0,0,0,1);return this.multiplyToRef(t,i),i},e.prototype.multiplyToRef=function(e,t){var i=this.x*e.w+this.y*e.z-this.z*e.y+this.w*e.x,n=-this.x*e.z+this.y*e.w+this.z*e.x+this.w*e.y,r=this.x*e.y-this.y*e.x+this.z*e.w+this.w*e.z,o=-this.x*e.x-this.y*e.y-this.z*e.z+this.w*e.w;return t.copyFromFloats(i,n,r,o),this},e.prototype.multiplyInPlace=function(e){return this.multiplyToRef(e,this),this},e.prototype.conjugateToRef=function(e){return e.copyFromFloats(-this.x,-this.y,-this.z,this.w),this},e.prototype.conjugateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.conjugate=function(){return new e(-this.x,-this.y,-this.z,this.w)},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.normalize=function(){var e=this.length();if(0===e)return this;var t=1/e;return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},e.prototype.toEulerAngles=function(e){void 0===e&&(e="YZX");var t=d.Zero();return this.toEulerAnglesToRef(t),t},e.prototype.toEulerAnglesToRef=function(e){var t=this.z,i=this.x,n=this.y,r=this.w,o=r*r,s=t*t,a=i*i,c=n*n,l=n*t-i*r;return l<-.4999999?(e.y=2*Math.atan2(n,r),e.x=Math.PI/2,e.z=0):l>.4999999?(e.y=2*Math.atan2(n,r),e.x=-Math.PI/2,e.z=0):(e.z=Math.atan2(2*(i*n+t*r),-s-a+c+o),e.x=Math.asin(-2*(t*n-i*r)),e.y=Math.atan2(2*(t*i+n*r),s-a-c+o)),this},e.prototype.toRotationMatrix=function(e){return g.FromQuaternionToRef(this,e),this},e.prototype.fromRotationMatrix=function(t){return e.FromRotationMatrixToRef(t,this),this},e.FromRotationMatrix=function(t){var i=new e;return e.FromRotationMatrixToRef(t,i),i},e.FromRotationMatrixToRef=function(e,t){var i,n=e.m,r=n[0],o=n[4],s=n[8],a=n[1],c=n[5],l=n[9],u=n[2],h=n[6],d=n[10],f=r+c+d;f>0?(i=.5/Math.sqrt(f+1),t.w=.25/i,t.x=(h-l)*i,t.y=(s-u)*i,t.z=(a-o)*i):r>c&&r>d?(i=2*Math.sqrt(1+r-c-d),t.w=(h-l)/i,t.x=.25*i,t.y=(o+a)/i,t.z=(s+u)/i):c>d?(i=2*Math.sqrt(1+c-r-d),t.w=(s-u)/i,t.x=(o+a)/i,t.y=.25*i,t.z=(l+h)/i):(i=2*Math.sqrt(1+d-r-c),t.w=(a-o)/i,t.x=(s+u)/i,t.y=(l+h)/i,t.z=.25*i)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w},e.AreClose=function(t,i){return e.Dot(t,i)>=0},e.Zero=function(){return new e(0,0,0,0)},e.Inverse=function(t){return new e(-t.x,-t.y,-t.z,t.w)},e.InverseToRef=function(e,t){return t.set(-e.x,-e.y,-e.z,e.w),t},e.Identity=function(){return new e(0,0,0,1)},e.IsIdentity=function(e){return e&&0===e.x&&0===e.y&&0===e.z&&1===e.w},e.RotationAxis=function(t,i){return e.RotationAxisToRef(t,i,new e)},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(t/2);return e.normalize(),i.w=Math.cos(t/2),i.x=e.x*n,i.y=e.y*n,i.z=e.z*n,i},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromEulerAngles=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerAnglesToRef=function(t,i,n,r){return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerVector=function(t){var i=new e;return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.FromEulerVectorToRef=function(t,i){return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){var r=.5*i,o=.5*t,s=.5*e,a=Math.sin(r),c=Math.cos(r),l=Math.sin(o),u=Math.cos(o),h=Math.sin(s),d=Math.cos(s);n.x=d*l*c+h*u*a,n.y=h*u*c-d*l*a,n.z=d*u*a-h*l*c,n.w=d*u*c+h*l*a},e.RotationAlphaBetaGamma=function(t,i,n){var r=new e;return e.RotationAlphaBetaGammaToRef(t,i,n,r),r},e.RotationAlphaBetaGammaToRef=function(e,t,i,n){var r=.5*(i+e),o=.5*(i-e),s=.5*t;n.x=Math.cos(o)*Math.sin(s),n.y=Math.sin(o)*Math.sin(s),n.z=Math.sin(r)*Math.cos(s),n.w=Math.cos(r)*Math.cos(s)},e.RotationQuaternionFromAxis=function(t,i,n){var r=new e(0,0,0,0);return e.RotationQuaternionFromAxisToRef(t,i,n,r),r},e.RotationQuaternionFromAxisToRef=function(t,i,n,r){var o=I.Matrix[0];g.FromXYZAxesToRef(t.normalize(),i.normalize(),n.normalize(),o),e.FromRotationMatrixToRef(o,r)},e.Slerp=function(t,i,n){var r=e.Identity();return e.SlerpToRef(t,i,n,r),r},e.SlerpToRef=function(e,t,i,n){var r,o,s=e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w,a=!1;if(s<0&&(a=!0,s=-s),s>.999999)o=1-i,r=a?-i:i;else{var c=Math.acos(s),l=1/Math.sin(c);o=Math.sin((1-i)*c)*l,r=a?-Math.sin(i*c)*l:Math.sin(i*c)*l}n.x=o*e.x+r*t.x,n.y=o*e.y+r*t.y,n.z=o*e.z+r*t.z,n.w=o*e.w+r*t.w},e.Hermite=function(t,i,n,r,o){var s=o*o,a=o*s,c=2*a-3*s+1,l=-2*a+3*s,u=a-2*s+o,h=a-s;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h,t.w*c+n.w*l+i.w*u+r.w*h)},e}(),g=function(){function e(){this._isIdentity=!1,this._isIdentityDirty=!0,this._isIdentity3x2=!0,this._isIdentity3x2Dirty=!0,this.updateFlag=-1,this._m=new Float32Array(16),this._updateIdentityStatus(!1)}return Object.defineProperty(e.prototype,"m",{get:function(){return this._m},enumerable:!0,configurable:!0}),e.prototype._markAsUpdated=function(){this.updateFlag=e._updateFlagSeed++,this._isIdentity=!1,this._isIdentity3x2=!1,this._isIdentityDirty=!0,this._isIdentity3x2Dirty=!0},e.prototype._updateIdentityStatus=function(t,i,n,r){void 0===i&&(i=!1),void 0===n&&(n=!1),void 0===r&&(r=!0),this.updateFlag=e._updateFlagSeed++,this._isIdentity=t,this._isIdentity3x2=t||n,this._isIdentityDirty=!this._isIdentity&&i,this._isIdentity3x2Dirty=!this._isIdentity3x2&&r},e.prototype.isIdentity=function(){if(this._isIdentityDirty){this._isIdentityDirty=!1;var e=this._m;this._isIdentity=1===e[0]&&0===e[1]&&0===e[2]&&0===e[3]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[7]&&0===e[8]&&0===e[9]&&1===e[10]&&0===e[11]&&0===e[12]&&0===e[13]&&0===e[14]&&1===e[15]}return this._isIdentity},e.prototype.isIdentityAs3x2=function(){return this._isIdentity3x2Dirty&&(this._isIdentity3x2Dirty=!1,1!==this._m[0]||1!==this._m[5]||1!==this._m[15]?this._isIdentity3x2=!1:0!==this._m[1]||0!==this._m[2]||0!==this._m[3]||0!==this._m[4]||0!==this._m[6]||0!==this._m[7]||0!==this._m[8]||0!==this._m[9]||0!==this._m[10]||0!==this._m[11]||0!==this._m[12]||0!==this._m[13]||0!==this._m[14]?this._isIdentity3x2=!1:this._isIdentity3x2=!0),this._isIdentity3x2},e.prototype.determinant=function(){if(!0===this._isIdentity)return 1;var e=this._m,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],s=e[5],a=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11],f=e[12],p=e[13],_=e[14],g=e[15],m=h*g-_*d,v=u*g-p*d,y=u*_-p*h,b=l*g-f*d,T=l*_-h*f,E=l*p-f*u;return t*+(s*m-a*v+c*y)+i*-(o*m-a*b+c*T)+n*+(o*v-s*b+c*E)+r*-(o*y-s*T+a*E)},e.prototype.toArray=function(){return this._m},e.prototype.asArray=function(){return this._m},e.prototype.invert=function(){return this.invertToRef(this),this},e.prototype.reset=function(){return e.FromValuesToRef(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,this),this._updateIdentityStatus(!1),this},e.prototype.add=function(t){var i=new e;return this.addToRef(t,i),i},e.prototype.addToRef=function(e,t){for(var i=this._m,n=t._m,r=e.m,o=0;o<16;o++)n[o]=i[o]+r[o];return t._markAsUpdated(),this},e.prototype.addToSelf=function(e){for(var t=this._m,i=e.m,n=0;n<16;n++)t[n]+=i[n];return this._markAsUpdated(),this},e.prototype.invertToRef=function(t){if(!0===this._isIdentity)return e.IdentityToRef(t),this;var i=this._m,n=i[0],r=i[1],o=i[2],s=i[3],a=i[4],c=i[5],l=i[6],u=i[7],h=i[8],d=i[9],f=i[10],p=i[11],_=i[12],g=i[13],m=i[14],v=i[15],y=f*v-m*p,b=d*v-g*p,T=d*m-g*f,E=h*v-_*p,A=h*m-f*_,x=h*g-_*d,R=+(c*y-l*b+u*T),P=-(a*y-l*E+u*A),S=+(a*b-c*E+u*x),C=-(a*T-c*A+l*x),M=n*R+r*P+o*S+s*C;if(0===M)return t.copyFrom(this),this;var O=1/M,I=l*v-m*u,D=c*v-g*u,L=c*m-g*l,w=a*v-_*u,F=a*m-_*l,N=a*g-_*c,B=l*p-f*u,U=c*p-d*u,V=c*f-d*l,G=a*p-h*u,k=a*f-h*l,z=a*d-h*c,j=-(r*y-o*b+s*T),H=+(n*y-o*E+s*A),W=-(n*b-r*E+s*x),X=+(n*T-r*A+o*x),Y=+(r*I-o*D+s*L),K=-(n*I-o*w+s*F),Q=+(n*D-r*w+s*N),q=-(n*L-r*F+o*N),Z=-(r*B-o*U+s*V),J=+(n*B-o*G+s*k),$=-(n*U-r*G+s*z),ee=+(n*V-r*k+o*z);return e.FromValuesToRef(R*O,j*O,Y*O,Z*O,P*O,H*O,K*O,J*O,S*O,W*O,Q*O,$*O,C*O,X*O,q*O,ee*O,t),this},e.prototype.addAtIndex=function(e,t){return this._m[e]+=t,this._markAsUpdated(),this},e.prototype.multiplyAtIndex=function(e,t){return this._m[e]*=t,this._markAsUpdated(),this},e.prototype.setTranslationFromFloats=function(e,t,i){return this._m[12]=e,this._m[13]=t,this._m[14]=i,this._markAsUpdated(),this},e.prototype.addTranslationFromFloats=function(e,t,i){return this._m[12]+=e,this._m[13]+=t,this._m[14]+=i,this._markAsUpdated(),this},e.prototype.setTranslation=function(e){return this.setTranslationFromFloats(e.x,e.y,e.z)},e.prototype.getTranslation=function(){return new d(this._m[12],this._m[13],this._m[14])},e.prototype.getTranslationToRef=function(e){return e.x=this._m[12],e.y=this._m[13],e.z=this._m[14],this},e.prototype.removeRotationAndScaling=function(){var t=this.m;return e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t[12],t[13],t[14],t[15],this),this._updateIdentityStatus(0===t[12]&&0===t[13]&&0===t[14]&&1===t[15]),this},e.prototype.multiply=function(t){var i=new e;return this.multiplyToRef(t,i),i},e.prototype.copyFrom=function(e){e.copyToArray(this._m);var t=e;return this._updateIdentityStatus(t._isIdentity,t._isIdentityDirty,t._isIdentity3x2,t._isIdentity3x2Dirty),this},e.prototype.copyToArray=function(e,t){void 0===t&&(t=0);for(var i=0;i<16;i++)e[t+i]=this._m[i];return this},e.prototype.multiplyToRef=function(e,t){return this._isIdentity?(t.copyFrom(e),this):e._isIdentity?(t.copyFrom(this),this):(this.multiplyToArray(e,t._m,0),t._markAsUpdated(),this)},e.prototype.multiplyToArray=function(e,t,i){var n=this._m,r=e.m,o=n[0],s=n[1],a=n[2],c=n[3],l=n[4],u=n[5],h=n[6],d=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],v=n[13],y=n[14],b=n[15],T=r[0],E=r[1],A=r[2],x=r[3],R=r[4],P=r[5],S=r[6],C=r[7],M=r[8],O=r[9],I=r[10],D=r[11],L=r[12],w=r[13],F=r[14],N=r[15];return t[i]=o*T+s*R+a*M+c*L,t[i+1]=o*E+s*P+a*O+c*w,t[i+2]=o*A+s*S+a*I+c*F,t[i+3]=o*x+s*C+a*D+c*N,t[i+4]=l*T+u*R+h*M+d*L,t[i+5]=l*E+u*P+h*O+d*w,t[i+6]=l*A+u*S+h*I+d*F,t[i+7]=l*x+u*C+h*D+d*N,t[i+8]=f*T+p*R+_*M+g*L,t[i+9]=f*E+p*P+_*O+g*w,t[i+10]=f*A+p*S+_*I+g*F,t[i+11]=f*x+p*C+_*D+g*N,t[i+12]=m*T+v*R+y*M+b*L,t[i+13]=m*E+v*P+y*O+b*w,t[i+14]=m*A+v*S+y*I+b*F,t[i+15]=m*x+v*C+y*D+b*N,this},e.prototype.equals=function(e){var t=e;if(!t)return!1;if((this._isIdentity||t._isIdentity)&&!this._isIdentityDirty&&!t._isIdentityDirty)return this._isIdentity&&t._isIdentity;var i=this.m,n=t.m;return i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]&&i[3]===n[3]&&i[4]===n[4]&&i[5]===n[5]&&i[6]===n[6]&&i[7]===n[7]&&i[8]===n[8]&&i[9]===n[9]&&i[10]===n[10]&&i[11]===n[11]&&i[12]===n[12]&&i[13]===n[13]&&i[14]===n[14]&&i[15]===n[15]},e.prototype.clone=function(){var t=new e;return t.copyFrom(this),t},e.prototype.getClassName=function(){return"Matrix"},e.prototype.getHashCode=function(){for(var e=this._m[0]||0,t=1;t<16;t++)e=397*e^(this._m[t]||0);return e},e.prototype.decompose=function(t,i,n){if(this._isIdentity)return n&&n.setAll(0),t&&t.setAll(1),i&&i.copyFromFloats(0,0,0,1),!0;var r=this._m;if(n&&n.copyFromFloats(r[12],r[13],r[14]),(t=t||I.Vector3[0]).x=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),t.y=Math.sqrt(r[4]*r[4]+r[5]*r[5]+r[6]*r[6]),t.z=Math.sqrt(r[8]*r[8]+r[9]*r[9]+r[10]*r[10]),this.determinant()<=0&&(t.y*=-1),0===t.x||0===t.y||0===t.z)return i&&i.copyFromFloats(0,0,0,1),!1;if(i){var o=1/t.x,s=1/t.y,a=1/t.z;e.FromValuesToRef(r[0]*o,r[1]*o,r[2]*o,0,r[4]*s,r[5]*s,r[6]*s,0,r[8]*a,r[9]*a,r[10]*a,0,0,0,0,1,I.Matrix[0]),_.FromRotationMatrixToRef(I.Matrix[0],i)}return!0},e.prototype.getRow=function(e){if(e<0||e>3)return null;var t=4*e;return new f(this._m[t+0],this._m[t+1],this._m[t+2],this._m[t+3])},e.prototype.setRow=function(e,t){return this.setRowFromFloats(e,t.x,t.y,t.z,t.w)},e.prototype.transpose=function(){return e.Transpose(this)},e.prototype.transposeToRef=function(t){return e.TransposeToRef(this,t),this},e.prototype.setRowFromFloats=function(e,t,i,n,r){if(e<0||e>3)return this;var o=4*e;return this._m[o+0]=t,this._m[o+1]=i,this._m[o+2]=n,this._m[o+3]=r,this._markAsUpdated(),this},e.prototype.scale=function(t){var i=new e;return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.scaleAndAddToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]+=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.toNormalMatrix=function(t){var i=I.Matrix[0];this.invertToRef(i),i.transposeToRef(t);var n=t._m;e.FromValuesToRef(n[0],n[1],n[2],0,n[4],n[5],n[6],0,n[8],n[9],n[10],0,0,0,0,1,t)},e.prototype.getRotationMatrix=function(){var t=new e;return this.getRotationMatrixToRef(t),t},e.prototype.getRotationMatrixToRef=function(t){var i=I.Vector3[0];if(!this.decompose(i))return e.IdentityToRef(t),this;var n=this._m,r=1/i.x,o=1/i.y,s=1/i.z;return e.FromValuesToRef(n[0]*r,n[1]*r,n[2]*r,0,n[4]*o,n[5]*o,n[6]*o,0,n[8]*s,n[9]*s,n[10]*s,0,0,0,0,1,t),this},e.prototype.toggleModelMatrixHandInPlace=function(){var e=this._m;e[2]*=-1,e[6]*=-1,e[8]*=-1,e[9]*=-1,e[14]*=-1,this._markAsUpdated()},e.prototype.toggleProjectionMatrixHandInPlace=function(){var e=this._m;e[8]*=-1,e[9]*=-1,e[10]*=-1,e[11]*=-1,this._markAsUpdated()},e.FromArray=function(t,i){void 0===i&&(i=0);var n=new e;return e.FromArrayToRef(t,i,n),n},e.FromArrayToRef=function(e,t,i){for(var n=0;n<16;n++)i._m[n]=e[n+t];i._markAsUpdated()},e.FromFloat32ArrayToRefScaled=function(e,t,i,n){for(var r=0;r<16;r++)n._m[r]=e[r+t]*i;n._markAsUpdated()},Object.defineProperty(e,"IdentityReadOnly",{get:function(){return e._identityReadOnly},enumerable:!0,configurable:!0}),e.FromValuesToRef=function(e,t,i,n,r,o,s,a,c,l,u,h,d,f,p,_,g){var m=g._m;m[0]=e,m[1]=t,m[2]=i,m[3]=n,m[4]=r,m[5]=o,m[6]=s,m[7]=a,m[8]=c,m[9]=l,m[10]=u,m[11]=h,m[12]=d,m[13]=f,m[14]=p,m[15]=_,g._markAsUpdated()},e.FromValues=function(t,i,n,r,o,s,a,c,l,u,h,d,f,p,_,g){var m=new e,v=m._m;return v[0]=t,v[1]=i,v[2]=n,v[3]=r,v[4]=o,v[5]=s,v[6]=a,v[7]=c,v[8]=l,v[9]=u,v[10]=h,v[11]=d,v[12]=f,v[13]=p,v[14]=_,v[15]=g,m._markAsUpdated(),m},e.Compose=function(t,i,n){var r=new e;return e.ComposeToRef(t,i,n,r),r},e.ComposeToRef=function(e,t,i,n){var r=n._m,o=t.x,s=t.y,a=t.z,c=t.w,l=o+o,u=s+s,h=a+a,d=o*l,f=o*u,p=o*h,_=s*u,g=s*h,m=a*h,v=c*l,y=c*u,b=c*h,T=e.x,E=e.y,A=e.z;r[0]=(1-(_+m))*T,r[1]=(f+b)*T,r[2]=(p-y)*T,r[3]=0,r[4]=(f-b)*E,r[5]=(1-(d+m))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(p+y)*A,r[9]=(g-v)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=i.x,r[13]=i.y,r[14]=i.z,r[15]=1,n._markAsUpdated()},e.Identity=function(){var t=e.FromValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return t._updateIdentityStatus(!0),t},e.IdentityToRef=function(t){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,t),t._updateIdentityStatus(!0)},e.Zero=function(){var t=e.FromValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return t._updateIdentityStatus(!1),t},e.RotationX=function(t){var i=new e;return e.RotationXToRef(t,i),i},e.Invert=function(t){var i=new e;return t.invertToRef(i),i},e.RotationXToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(1,0,0,0,0,r,n,0,0,-n,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationY=function(t){var i=new e;return e.RotationYToRef(t,i),i},e.RotationYToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,0,-n,0,0,1,0,0,n,0,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationZ=function(t){var i=new e;return e.RotationZToRef(t,i),i},e.RotationZToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,n,0,0,-n,r,0,0,0,0,1,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationAxis=function(t,i){var n=new e;return e.RotationAxisToRef(t,i,n),n},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(-t),r=Math.cos(-t),o=1-r;e.normalize();var s=i._m;s[0]=e.x*e.x*o+r,s[1]=e.x*e.y*o-e.z*n,s[2]=e.x*e.z*o+e.y*n,s[3]=0,s[4]=e.y*e.x*o+e.z*n,s[5]=e.y*e.y*o+r,s[6]=e.y*e.z*o-e.x*n,s[7]=0,s[8]=e.z*e.x*o-e.y*n,s[9]=e.z*e.y*o+e.x*n,s[10]=e.z*e.z*o+r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,i._markAsUpdated()},e.RotationAlignToRef=function(e,t,i){var n=d.Cross(t,e),r=d.Dot(t,e),o=1/(1+r),s=i._m;s[0]=n.x*n.x*o+r,s[1]=n.y*n.x*o-n.z,s[2]=n.z*n.x*o+n.y,s[3]=0,s[4]=n.x*n.y*o+n.z,s[5]=n.y*n.y*o+r,s[6]=n.z*n.y*o-n.x,s[7]=0,s[8]=n.x*n.z*o-n.y,s[9]=n.y*n.z*o+n.x,s[10]=n.z*n.z*o+r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,i._markAsUpdated()},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){_.RotationYawPitchRollToRef(e,t,i,I.Quaternion[0]),I.Quaternion[0].toRotationMatrix(n)},e.Scaling=function(t,i,n){var r=new e;return e.ScalingToRef(t,i,n,r),r},e.ScalingToRef=function(t,i,n,r){e.FromValuesToRef(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1,r),r._updateIdentityStatus(1===t&&1===i&&1===n)},e.Translation=function(t,i,n){var r=new e;return e.TranslationToRef(t,i,n,r),r},e.TranslationToRef=function(t,i,n,r){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t,i,n,1,r),r._updateIdentityStatus(0===t&&0===i&&0===n)},e.Lerp=function(t,i,n){var r=new e;return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){for(var r=n._m,o=e.m,s=t.m,a=0;a<16;a++)r[a]=o[a]*(1-i)+s[a]*i;n._markAsUpdated()},e.DecomposeLerp=function(t,i,n){var r=new e;return e.DecomposeLerpToRef(t,i,n,r),r},e.DecomposeLerpToRef=function(t,i,n,r){var o=I.Vector3[0],s=I.Quaternion[0],a=I.Vector3[1];t.decompose(o,s,a);var c=I.Vector3[2],l=I.Quaternion[1],u=I.Vector3[3];i.decompose(c,l,u);var h=I.Vector3[4];d.LerpToRef(o,c,n,h);var f=I.Quaternion[2];_.SlerpToRef(s,l,n,f);var p=I.Vector3[5];d.LerpToRef(a,u,n,p),e.ComposeToRef(h,f,p,r)},e.LookAtLH=function(t,i,n){var r=new e;return e.LookAtLHToRef(t,i,n,r),r},e.LookAtLHToRef=function(t,i,n,r){var o=I.Vector3[0],s=I.Vector3[1],a=I.Vector3[2];i.subtractToRef(t,a),a.normalize(),d.CrossToRef(n,a,o);var c=o.lengthSquared();0===c?o.x=1:o.normalizeFromLength(Math.sqrt(c)),d.CrossToRef(a,o,s),s.normalize();var l=-d.Dot(o,t),u=-d.Dot(s,t),h=-d.Dot(a,t);e.FromValuesToRef(o.x,s.x,a.x,0,o.y,s.y,a.y,0,o.z,s.z,a.z,0,l,u,h,1,r)},e.LookAtRH=function(t,i,n){var r=new e;return e.LookAtRHToRef(t,i,n,r),r},e.LookAtRHToRef=function(t,i,n,r){var o=I.Vector3[0],s=I.Vector3[1],a=I.Vector3[2];t.subtractToRef(i,a),a.normalize(),d.CrossToRef(n,a,o);var c=o.lengthSquared();0===c?o.x=1:o.normalizeFromLength(Math.sqrt(c)),d.CrossToRef(a,o,s),s.normalize();var l=-d.Dot(o,t),u=-d.Dot(s,t),h=-d.Dot(a,t);e.FromValuesToRef(o.x,s.x,a.x,0,o.y,s.y,a.y,0,o.z,s.z,a.z,0,l,u,h,1,r)},e.OrthoLH=function(t,i,n,r){var o=new e;return e.OrthoLHToRef(t,i,n,r,o),o},e.OrthoLHToRef=function(t,i,n,r,o){var s=2/t,a=2/i,c=2/(r-n),l=-(r+n)/(r-n);e.FromValuesToRef(s,0,0,0,0,a,0,0,0,0,c,0,0,0,l,1,o),o._updateIdentityStatus(1===s&&1===a&&1===c&&0===l)},e.OrthoOffCenterLH=function(t,i,n,r,o,s){var a=new e;return e.OrthoOffCenterLHToRef(t,i,n,r,o,s,a),a},e.OrthoOffCenterLHToRef=function(t,i,n,r,o,s,a){var c=2/(i-t),l=2/(r-n),u=2/(s-o),h=-(s+o)/(s-o),d=(t+i)/(t-i),f=(r+n)/(n-r);e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,u,0,d,f,h,1,a),a._markAsUpdated()},e.OrthoOffCenterRH=function(t,i,n,r,o,s){var a=new e;return e.OrthoOffCenterRHToRef(t,i,n,r,o,s,a),a},e.OrthoOffCenterRHToRef=function(t,i,n,r,o,s,a){e.OrthoOffCenterLHToRef(t,i,n,r,o,s,a),a._m[10]*=-1},e.PerspectiveLH=function(t,i,n,r){var o=new e,s=2*n/t,a=2*n/i,c=(r+n)/(r-n),l=-2*r*n/(r-n);return e.FromValuesToRef(s,0,0,0,0,a,0,0,0,0,c,1,0,0,l,0,o),o._updateIdentityStatus(!1),o},e.PerspectiveFovLH=function(t,i,n,r){var o=new e;return e.PerspectiveFovLHToRef(t,i,n,r,o),o},e.PerspectiveFovLHToRef=function(t,i,n,r,o,s){void 0===s&&(s=!0);var a=n,c=r,l=1/Math.tan(.5*t),u=s?l/i:l,h=s?l:l*i,d=(c+a)/(c-a),f=-2*c*a/(c-a);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovRH=function(t,i,n,r){var o=new e;return e.PerspectiveFovRHToRef(t,i,n,r,o),o},e.PerspectiveFovRHToRef=function(t,i,n,r,o,s){void 0===s&&(s=!0);var a=n,c=r,l=1/Math.tan(.5*t),u=s?l/i:l,h=s?l:l*i,d=-(c+a)/(c-a),f=-2*c*a/(c-a);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,-1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovWebVRToRef=function(e,t,i,n,r){void 0===r&&(r=!1);var o=r?-1:1,s=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),c=Math.tan(e.leftDegrees*Math.PI/180),l=Math.tan(e.rightDegrees*Math.PI/180),u=2/(c+l),h=2/(s+a),d=n._m;d[0]=u,d[1]=d[2]=d[3]=d[4]=0,d[5]=h,d[6]=d[7]=0,d[8]=(c-l)*u*.5,d[9]=-(s-a)*h*.5,d[10]=-i/(t-i),d[11]=1*o,d[12]=d[13]=d[15]=0,d[14]=-2*i*t/(i-t),n._markAsUpdated()},e.GetFinalMatrix=function(t,i,n,r,o,s){var a=t.width,c=t.height,l=t.x,u=t.y,h=e.FromValues(a/2,0,0,0,0,-c/2,0,0,0,0,s-o,0,l+a/2,c/2+u,o,1),d=I.Matrix[0];return i.multiplyToRef(n,d),d.multiplyToRef(r,d),d.multiply(h)},e.GetAsMatrix2x2=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[4],t[5]])},e.GetAsMatrix3x3=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[2],t[4],t[5],t[6],t[8],t[9],t[10]])},e.Transpose=function(t){var i=new e;return e.TransposeToRef(t,i),i},e.TransposeToRef=function(e,t){var i=t._m,n=e.m;i[0]=n[0],i[1]=n[4],i[2]=n[8],i[3]=n[12],i[4]=n[1],i[5]=n[5],i[6]=n[9],i[7]=n[13],i[8]=n[2],i[9]=n[6],i[10]=n[10],i[11]=n[14],i[12]=n[3],i[13]=n[7],i[14]=n[11],i[15]=n[15],t._updateIdentityStatus(e._isIdentity,e._isIdentityDirty)},e.Reflection=function(t){var i=new e;return e.ReflectionToRef(t,i),i},e.ReflectionToRef=function(t,i){t.normalize();var n=t.normal.x,r=t.normal.y,o=t.normal.z,s=-2*n,a=-2*r,c=-2*o;e.FromValuesToRef(s*n+1,a*n,c*n,0,s*r,a*r+1,c*r,0,s*o,a*o,c*o+1,0,s*t.d,a*t.d,c*t.d,1,i)},e.FromXYZAxesToRef=function(t,i,n,r){e.FromValuesToRef(t.x,t.y,t.z,0,i.x,i.y,i.z,0,n.x,n.y,n.z,0,0,0,0,1,r)},e.FromQuaternionToRef=function(e,t){var i=e.x*e.x,n=e.y*e.y,r=e.z*e.z,o=e.x*e.y,s=e.z*e.w,a=e.z*e.x,c=e.y*e.w,l=e.y*e.z,u=e.x*e.w;t._m[0]=1-2*(n+r),t._m[1]=2*(o+s),t._m[2]=2*(a-c),t._m[3]=0,t._m[4]=2*(o-s),t._m[5]=1-2*(r+i),t._m[6]=2*(l+u),t._m[7]=0,t._m[8]=2*(a+c),t._m[9]=2*(l-u),t._m[10]=1-2*(n+i),t._m[11]=0,t._m[12]=0,t._m[13]=0,t._m[14]=0,t._m[15]=1,t._markAsUpdated()},e._updateFlagSeed=0,e._identityReadOnly=e.Identity(),e}(),m=function(){function e(e,t,i,n){this.normal=new d(e,t,i),this.d=n}return e.prototype.asArray=function(){return[this.normal.x,this.normal.y,this.normal.z,this.d]},e.prototype.clone=function(){return new e(this.normal.x,this.normal.y,this.normal.z,this.d)},e.prototype.getClassName=function(){return"Plane"},e.prototype.getHashCode=function(){var e=this.normal.getHashCode();return e=397*e^(this.d||0)},e.prototype.normalize=function(){var e=Math.sqrt(this.normal.x*this.normal.x+this.normal.y*this.normal.y+this.normal.z*this.normal.z),t=0;return 0!==e&&(t=1/e),this.normal.x*=t,this.normal.y*=t,this.normal.z*=t,this.d*=t,this},e.prototype.transform=function(t){var i=I.Matrix[0];g.TransposeToRef(t,i);var n=i.m,r=this.normal.x,o=this.normal.y,s=this.normal.z,a=this.d;return new e(r*n[0]+o*n[1]+s*n[2]+a*n[3],r*n[4]+o*n[5]+s*n[6]+a*n[7],r*n[8]+o*n[9]+s*n[10]+a*n[11],r*n[12]+o*n[13]+s*n[14]+a*n[15])},e.prototype.dotCoordinate=function(e){return this.normal.x*e.x+this.normal.y*e.y+this.normal.z*e.z+this.d},e.prototype.copyFromPoints=function(e,t,i){var n,r=t.x-e.x,o=t.y-e.y,s=t.z-e.z,a=i.x-e.x,c=i.y-e.y,l=i.z-e.z,u=o*l-s*c,h=s*a-r*l,d=r*c-o*a,f=Math.sqrt(u*u+h*h+d*d);return n=0!==f?1/f:0,this.normal.x=u*n,this.normal.y=h*n,this.normal.z=d*n,this.d=-(this.normal.x*e.x+this.normal.y*e.y+this.normal.z*e.z),this},e.prototype.isFrontFacingTo=function(e,t){return d.Dot(this.normal,e)<=t},e.prototype.signedDistanceTo=function(e){return d.Dot(e,this.normal)+this.d},e.FromArray=function(t){return new e(t[0],t[1],t[2],t[3])},e.FromPoints=function(t,i,n){var r=new e(0,0,0,0);return r.copyFromPoints(t,i,n),r},e.FromPositionAndNormal=function(t,i){var n=new e(0,0,0,0);return i.normalize(),n.normal=i,n.d=-(i.x*t.x+i.y*t.y+i.z*t.z),n},e.SignedDistanceToPlaneFromPositionAndNormal=function(e,t,i){var n=-(t.x*e.x+t.y*e.y+t.z*e.z);return d.Dot(i,t)+n},e}(),v=function(){function e(e,t,i,n){this.x=e,this.y=t,this.width=i,this.height=n}return e.prototype.toGlobal=function(t,i){return new e(this.x*t,this.y*i,this.width*t,this.height*i)},e.prototype.toGlobalToRef=function(e,t,i){return i.x=this.x*e,i.y=this.y*t,i.width=this.width*e,i.height=this.height*t,this},e.prototype.clone=function(){return new e(this.x,this.y,this.width,this.height)},e}(),y=function(){function e(){}return e.GetPlanes=function(t){for(var i=[],n=0;n<6;n++)i.push(new m(0,0,0,0));return e.GetPlanesToRef(t,i),i},e.GetNearPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]+i[2],t.normal.y=i[7]+i[6],t.normal.z=i[11]+i[10],t.d=i[15]+i[14],t.normalize()},e.GetFarPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]-i[2],t.normal.y=i[7]-i[6],t.normal.z=i[11]-i[10],t.d=i[15]-i[14],t.normalize()},e.GetLeftPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]+i[0],t.normal.y=i[7]+i[4],t.normal.z=i[11]+i[8],t.d=i[15]+i[12],t.normalize()},e.GetRightPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]-i[0],t.normal.y=i[7]-i[4],t.normal.z=i[11]-i[8],t.d=i[15]-i[12],t.normalize()},e.GetTopPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]-i[1],t.normal.y=i[7]-i[5],t.normal.z=i[11]-i[9],t.d=i[15]-i[13],t.normalize()},e.GetBottomPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]+i[1],t.normal.y=i[7]+i[5],t.normal.z=i[11]+i[9],t.d=i[15]+i[13],t.normalize()},e.GetPlanesToRef=function(t,i){e.GetNearPlaneToRef(t,i[0]),e.GetFarPlaneToRef(t,i[1]),e.GetLeftPlaneToRef(t,i[2]),e.GetRightPlaneToRef(t,i[3]),e.GetTopPlaneToRef(t,i[4]),e.GetBottomPlaneToRef(t,i[5])},e}();!function(e){e[e.LOCAL=0]="LOCAL",e[e.WORLD=1]="WORLD",e[e.BONE=2]="BONE"}(n||(n={}));var b,T=function(){function e(){}return e.X=new d(1,0,0),e.Y=new d(0,1,0),e.Z=new d(0,0,1),e}(),E=function(){function e(){}return e.Interpolate=function(e,t,i,n,r){for(var o=1-3*n+3*t,s=3*n-6*t,a=3*t,c=e,l=0;l<5;l++){var u=c*c;c-=(o*(u*c)+s*u+a*c-e)*(1/(3*o*u+2*s*c+a)),c=Math.min(1,Math.max(0,c))}return 3*Math.pow(1-c,2)*c*i+3*(1-c)*Math.pow(c,2)*r+Math.pow(c,3)},e}();!function(e){e[e.CW=0]="CW",e[e.CCW=1]="CCW"}(b||(b={}));var A=function(){function e(e){this._radians=e,this._radians<0&&(this._radians+=2*Math.PI)}return e.prototype.degrees=function(){return 180*this._radians/Math.PI},e.prototype.radians=function(){return this._radians},e.BetweenTwoPoints=function(t,i){var n=i.subtract(t);return new e(Math.atan2(n.y,n.x))},e.FromRadians=function(t){return new e(t)},e.FromDegrees=function(t){return new e(t*Math.PI/180)},e}(),x=function(){return function(e,t,i){this.startPoint=e,this.midPoint=t,this.endPoint=i;var n=Math.pow(t.x,2)+Math.pow(t.y,2),r=(Math.pow(e.x,2)+Math.pow(e.y,2)-n)/2,o=(n-Math.pow(i.x,2)-Math.pow(i.y,2))/2,s=(e.x-t.x)*(t.y-i.y)-(t.x-i.x)*(e.y-t.y);this.centerPoint=new h((r*(t.y-i.y)-o*(e.y-t.y))/s,((e.x-t.x)*o-(t.x-i.x)*r)/s),this.radius=this.centerPoint.subtract(this.startPoint).length(),this.startAngle=A.BetweenTwoPoints(this.centerPoint,this.startPoint);var a=this.startAngle.degrees(),c=A.BetweenTwoPoints(this.centerPoint,this.midPoint).degrees(),l=A.BetweenTwoPoints(this.centerPoint,this.endPoint).degrees();c-a>180&&(c-=360),c-a<-180&&(c+=360),l-c>180&&(l-=360),l-c<-180&&(l+=360),this.orientation=c-a<0?b.CW:b.CCW,this.angle=A.FromDegrees(this.orientation===b.CW?a-l:l-a)}}(),R=function(){function e(e,t){this._points=new Array,this._length=0,this.closed=!1,this._points.push(new h(e,t))}return e.prototype.addLineTo=function(e,t){if(this.closed)return this;var i=new h(e,t),n=this._points[this._points.length-1];return this._points.push(i),this._length+=i.subtract(n).length(),this},e.prototype.addArcTo=function(e,t,i,n,r){if(void 0===r&&(r=36),this.closed)return this;var o=this._points[this._points.length-1],s=new h(e,t),a=new h(i,n),c=new x(o,s,a),l=c.angle.radians()/r;c.orientation===b.CW&&(l*=-1);for(var u=c.startAngle.radians()+l,d=0;d<r;d++){var f=Math.cos(u)*c.radius+c.centerPoint.x,p=Math.sin(u)*c.radius+c.centerPoint.y;this.addLineTo(f,p),u+=l}return this},e.prototype.close=function(){return this.closed=!0,this},e.prototype.length=function(){var e=this._length;if(!this.closed){var t=this._points[this._points.length-1];e+=this._points[0].subtract(t).length()}return e},e.prototype.getPoints=function(){return this._points},e.prototype.getPointAtLengthPosition=function(e){if(e<0||e>1)return h.Zero();for(var t=e*this.length(),i=0,n=0;n<this._points.length;n++){var r=(n+1)%this._points.length,o=this._points[n],s=this._points[r].subtract(o),a=s.length()+i;if(t>=i&&t<=a){var c=s.normalize(),l=t-i;return new h(o.x+c.x*l,o.y+c.y*l)}i=a}return h.Zero()},e.StartingAt=function(t,i){return new e(t,i)},e}(),P=function(){function e(e,t,i){void 0===t&&(t=null),this.path=e,this._curve=new Array,this._distances=new Array,this._tangents=new Array,this._normals=new Array,this._binormals=new Array;for(var n=0;n<e.length;n++)this._curve[n]=e[n].clone();this._raw=i||!1,this._compute(t)}return e.prototype.getCurve=function(){return this._curve},e.prototype.getTangents=function(){return this._tangents},e.prototype.getNormals=function(){return this._normals},e.prototype.getBinormals=function(){return this._binormals},e.prototype.getDistances=function(){return this._distances},e.prototype.update=function(e,t){void 0===t&&(t=null);for(var i=0;i<e.length;i++)this._curve[i].x=e[i].x,this._curve[i].y=e[i].y,this._curve[i].z=e[i].z;return this._compute(t),this},e.prototype._compute=function(e){var t=this._curve.length;this._tangents[0]=this._getFirstNonNullVector(0),this._raw||this._tangents[0].normalize(),this._tangents[t-1]=this._curve[t-1].subtract(this._curve[t-2]),this._raw||this._tangents[t-1].normalize();var i,n,r,o,s=this._tangents[0],a=this._normalVector(s,e);this._normals[0]=a,this._raw||this._normals[0].normalize(),this._binormals[0]=d.Cross(s,this._normals[0]),this._raw||this._binormals[0].normalize(),this._distances[0]=0;for(var c=1;c<t;c++)i=this._getLastNonNullVector(c),c<t-1&&(n=this._getFirstNonNullVector(c),this._tangents[c]=i.add(n),this._tangents[c].normalize()),this._distances[c]=this._distances[c-1]+i.length(),r=this._tangents[c],o=this._binormals[c-1],this._normals[c]=d.Cross(o,r),this._raw||this._normals[c].normalize(),this._binormals[c]=d.Cross(r,this._normals[c]),this._raw||this._binormals[c].normalize()},e.prototype._getFirstNonNullVector=function(e){for(var t=1,i=this._curve[e+t].subtract(this._curve[e]);0===i.length()&&e+t+1<this._curve.length;)t++,i=this._curve[e+t].subtract(this._curve[e]);return i},e.prototype._getLastNonNullVector=function(e){for(var t=1,i=this._curve[e].subtract(this._curve[e-t]);0===i.length()&&e>t+1;)t++,i=this._curve[e].subtract(this._curve[e-t]);return i},e.prototype._normalVector=function(e,t){var i,n,r=e.length();(0===r&&(r=1),null==t)?(n=o.a.WithinEpsilon(Math.abs(e.y)/r,1,c)?o.a.WithinEpsilon(Math.abs(e.x)/r,1,c)?o.a.WithinEpsilon(Math.abs(e.z)/r,1,c)?d.Zero():new d(0,0,1):new d(1,0,0):new d(0,-1,0),i=d.Cross(e,n)):(i=d.Cross(e,t),d.CrossToRef(i,e,i));return i.normalize(),i},e}(),S=function(){function e(e){this._length=0,this._points=e,this._length=this._computeLength(e)}return e.CreateQuadraticBezier=function(t,i,n,r){r=r>2?r:3;for(var o=new Array,s=function(e,t,i,n){return(1-e)*(1-e)*t+2*e*(1-e)*i+e*e*n},a=0;a<=r;a++)o.push(new d(s(a/r,t.x,i.x,n.x),s(a/r,t.y,i.y,n.y),s(a/r,t.z,i.z,n.z)));return new e(o)},e.CreateCubicBezier=function(t,i,n,r,o){o=o>3?o:4;for(var s=new Array,a=function(e,t,i,n,r){return(1-e)*(1-e)*(1-e)*t+3*e*(1-e)*(1-e)*i+3*e*e*(1-e)*n+e*e*e*r},c=0;c<=o;c++)s.push(new d(a(c/o,t.x,i.x,n.x,r.x),a(c/o,t.y,i.y,n.y,r.y),a(c/o,t.z,i.z,n.z,r.z)));return new e(s)},e.CreateHermiteSpline=function(t,i,n,r,o){for(var s=new Array,a=1/o,c=0;c<=o;c++)s.push(d.Hermite(t,i,n,r,c*a));return new e(s)},e.CreateCatmullRomSpline=function(t,i,n){var r=new Array,o=1/i,s=0;if(n){for(var a=t.length,c=0;c<a;c++){s=0;for(var l=0;l<i;l++)r.push(d.CatmullRom(t[c%a],t[(c+1)%a],t[(c+2)%a],t[(c+3)%a],s)),s+=o}r.push(r[0])}else{var u=new Array;u.push(t[0].clone()),Array.prototype.push.apply(u,t),u.push(t[t.length-1].clone());for(c=0;c<u.length-3;c++){s=0;for(l=0;l<i;l++)r.push(d.CatmullRom(u[c],u[c+1],u[c+2],u[c+3],s)),s+=o}c--,r.push(d.CatmullRom(u[c],u[c+1],u[c+2],u[c+3],s))}return new e(r)},e.prototype.getPoints=function(){return this._points},e.prototype.length=function(){return this._length},e.prototype.continue=function(t){for(var i=this._points[this._points.length-1],n=this._points.slice(),r=t.getPoints(),o=1;o<r.length;o++)n.push(r[o].subtract(r[0]).add(i));return new e(n)},e.prototype._computeLength=function(e){for(var t=0,i=1;i<e.length;i++)t+=e[i].subtract(e[i-1]).length();return t},e}(),C=function(){function e(e,t){void 0===e&&(e=d.Zero()),void 0===t&&(t=d.Up()),this.position=e,this.normal=t}return e.prototype.clone=function(){return new e(this.position.clone(),this.normal.clone())},e}(),M=function(){function e(e,t,i){void 0===e&&(e=d.Zero()),void 0===t&&(t=d.Up()),void 0===i&&(i=h.Zero()),this.position=e,this.normal=t,this.uv=i}return e.prototype.clone=function(){return new e(this.position.clone(),this.normal.clone(),this.uv.clone())},e}(),O=function(){function e(){}return e.Color3=r.a.BuildArray(3,l.Black),e.Color4=r.a.BuildArray(3,function(){return new u(0,0,0,0)}),e.Vector2=r.a.BuildArray(3,h.Zero),e.Vector3=r.a.BuildArray(13,d.Zero),e.Vector4=r.a.BuildArray(3,f.Zero),e.Quaternion=r.a.BuildArray(2,_.Zero),e.Matrix=r.a.BuildArray(8,g.Identity),e}(),I=function(){function e(){}return e.Vector3=r.a.BuildArray(6,d.Zero),e.Matrix=r.a.BuildArray(2,g.Identity),e.Quaternion=r.a.BuildArray(3,_.Zero),e}()},function(e,t,i){"use strict";i.d(t,"d",function(){return r}),i.d(t,"a",function(){return o}),i.d(t,"c",function(){return s}),i.d(t,"b",function(){return a}),i.d(t,"e",function(){return c});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

var width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ 0);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  (typeof self !== 'undefined') ? self : this,
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/geometry/icosahedron.ts":
/*!*************************************!*\
  !*** ./src/geometry/icosahedron.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var primitives_1 = __webpack_require__(/*! ./primitives */ "./src/geometry/primitives.ts");
// static class to generate an icosahedron
var Icosahedron = /** @class */ (function () {
    function Icosahedron() {
    }
    Icosahedron.generatePrimitives = function (radius, points, edges, faces) {
        // ensure given arrays can hold the required values
        if (points.length < 12)
            points.length = 12;
        if (edges.length < 30)
            edges.length = 30;
        if (faces.length < 20)
            faces.length = 20;
        // top point
        points[0] = new primitives_1.Point(0, 0, radius);
        // bottom point
        points[11] = new primitives_1.Point(0, 0, -radius);
        var latitudeAngle = Math.atan(0.5);
        var longitudeAngle = 0.628319; //36 degrees
        // top ring is the opposite side of a triangle with hypotenuse radius and angle latitudeAngle
        var topRingHeight = radius * Math.sin(latitudeAngle);
        var topRingRadius = radius * Math.cos(latitudeAngle);
        var i;
        //top ring [1 - 5]
        for (i = 0; i < 5; i++) {
            // add points 1 through 5
            points[1 + i] = new primitives_1.Point(topRingRadius * Math.cos(longitudeAngle * i * 2), topRingRadius * Math.sin(longitudeAngle * i * 2), topRingHeight);
        }
        //bottom ring [6 - 10]
        for (i = 0; i < 5; i++) {
            // add points 6 through 10
            points[6 + i] = new primitives_1.Point(topRingRadius * Math.cos(longitudeAngle * (i * 2 - 1)), topRingRadius * Math.sin(longitudeAngle * (i * 2 - 1)), -topRingHeight);
        }
        // NOTE: is a lot of repeated code, but trust me it's way more confusing
        // to do with for loops, since with the code laid out like you can quickly
        // lookup which edges connect which vertices and which edges are adjacent to which faces
        // add top edges connecting to top vertex
        edges[0] = new primitives_1.Edge(points, [0, 1]);
        edges[1] = new primitives_1.Edge(points, [0, 2]);
        edges[2] = new primitives_1.Edge(points, [0, 3]);
        edges[3] = new primitives_1.Edge(points, [0, 4]);
        edges[4] = new primitives_1.Edge(points, [0, 5]);
        // add top ring of edges
        edges[5] = new primitives_1.Edge(points, [1, 2]);
        edges[6] = new primitives_1.Edge(points, [2, 3]);
        edges[7] = new primitives_1.Edge(points, [3, 4]);
        edges[8] = new primitives_1.Edge(points, [4, 5]);
        edges[9] = new primitives_1.Edge(points, [5, 1]);
        // add middle zigzag edges
        edges[10] = new primitives_1.Edge(points, [6, 1]);
        edges[11] = new primitives_1.Edge(points, [1, 7]);
        edges[12] = new primitives_1.Edge(points, [7, 2]);
        edges[13] = new primitives_1.Edge(points, [2, 8]);
        edges[14] = new primitives_1.Edge(points, [8, 3]);
        edges[15] = new primitives_1.Edge(points, [3, 9]);
        edges[16] = new primitives_1.Edge(points, [9, 4]);
        edges[17] = new primitives_1.Edge(points, [4, 10]);
        edges[18] = new primitives_1.Edge(points, [10, 5]);
        edges[19] = new primitives_1.Edge(points, [5, 6]);
        // add bottom ring of edges
        edges[20] = new primitives_1.Edge(points, [6, 7]);
        edges[21] = new primitives_1.Edge(points, [7, 8]);
        edges[22] = new primitives_1.Edge(points, [8, 9]);
        edges[23] = new primitives_1.Edge(points, [9, 10]);
        edges[24] = new primitives_1.Edge(points, [10, 6]);
        // add bottom edges connecting to bottom vertex
        edges[25] = new primitives_1.Edge(points, [11, 6]);
        edges[26] = new primitives_1.Edge(points, [11, 7]);
        edges[27] = new primitives_1.Edge(points, [11, 8]);
        edges[28] = new primitives_1.Edge(points, [11, 9]);
        edges[29] = new primitives_1.Edge(points, [11, 10]);
        // top faces
        faces[0] = new primitives_1.Face(points, [2, 1, 0]);
        faces[1] = new primitives_1.Face(points, [3, 2, 0]);
        faces[2] = new primitives_1.Face(points, [4, 3, 0]);
        faces[3] = new primitives_1.Face(points, [5, 4, 0]);
        faces[4] = new primitives_1.Face(points, [1, 5, 0]);
        primitives_1.Face.linkFaceToEdges(0, 0, 1, 5, edges, faces);
        primitives_1.Face.linkFaceToEdges(1, 1, 2, 6, edges, faces);
        primitives_1.Face.linkFaceToEdges(2, 2, 3, 7, edges, faces);
        primitives_1.Face.linkFaceToEdges(3, 3, 4, 8, edges, faces);
        primitives_1.Face.linkFaceToEdges(4, 4, 0, 9, edges, faces);
        // ring faces
        faces[5] = new primitives_1.Face(points, [7, 6, 1]);
        faces[6] = new primitives_1.Face(points, [7, 1, 2]);
        faces[7] = new primitives_1.Face(points, [8, 7, 2]);
        faces[8] = new primitives_1.Face(points, [8, 2, 3]);
        faces[9] = new primitives_1.Face(points, [9, 8, 3]);
        faces[10] = new primitives_1.Face(points, [9, 3, 4]);
        faces[11] = new primitives_1.Face(points, [10, 9, 4]);
        faces[12] = new primitives_1.Face(points, [10, 4, 5]);
        faces[13] = new primitives_1.Face(points, [6, 10, 5]);
        faces[14] = new primitives_1.Face(points, [6, 5, 1]);
        primitives_1.Face.linkFaceToEdges(5, 20, 10, 11, edges, faces);
        primitives_1.Face.linkFaceToEdges(6, 5, 11, 12, edges, faces);
        primitives_1.Face.linkFaceToEdges(7, 21, 12, 13, edges, faces);
        primitives_1.Face.linkFaceToEdges(8, 6, 13, 14, edges, faces);
        primitives_1.Face.linkFaceToEdges(9, 22, 14, 15, edges, faces);
        primitives_1.Face.linkFaceToEdges(10, 7, 15, 16, edges, faces);
        primitives_1.Face.linkFaceToEdges(11, 23, 16, 17, edges, faces);
        primitives_1.Face.linkFaceToEdges(12, 8, 17, 18, edges, faces);
        primitives_1.Face.linkFaceToEdges(13, 24, 18, 19, edges, faces);
        primitives_1.Face.linkFaceToEdges(14, 9, 19, 10, edges, faces);
        // bottom faces
        faces[15] = new primitives_1.Face(points, [6, 7, 11]);
        faces[16] = new primitives_1.Face(points, [7, 8, 11]);
        faces[17] = new primitives_1.Face(points, [8, 9, 11]);
        faces[18] = new primitives_1.Face(points, [9, 10, 11]);
        faces[19] = new primitives_1.Face(points, [10, 6, 11]);
        primitives_1.Face.linkFaceToEdges(15, 25, 26, 20, edges, faces);
        primitives_1.Face.linkFaceToEdges(16, 26, 27, 21, edges, faces);
        primitives_1.Face.linkFaceToEdges(17, 27, 28, 22, edges, faces);
        primitives_1.Face.linkFaceToEdges(18, 28, 29, 23, edges, faces);
        primitives_1.Face.linkFaceToEdges(19, 29, 25, 24, edges, faces);
    };
    return Icosahedron;
}());
exports.Icosahedron = Icosahedron;
;


/***/ }),

/***/ "./src/geometry/icosphere.ts":
/*!***********************************!*\
  !*** ./src/geometry/icosphere.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var sphereLOD_1 = __webpack_require__(/*! ./sphereLOD */ "./src/geometry/sphereLOD.ts");
var Icosphere = /** @class */ (function () {
    // options allows for additional parameters to be passed to children of SphereLOD
    function Icosphere(options) {
        this._options = options;
        // initialize point array
        this._points = new Array(12);
        // initialize LOD at zero
        this._updateLOD(0);
    }
    Icosphere.prototype.getUpdatedLODMesh = function (LODLevel) {
        this._updateLOD(LODLevel);
        return this._LOD[LODLevel].meshData;
    };
    Icosphere.prototype._updateLOD = function (LODLevel) {
        if (this._LOD == undefined) {
            // generate LOD 0
            this._LOD = [new sphereLOD_1.SphereLOD(this._points, this._options)];
        }
        // generate each new LOD up to LODLevel from the last LODLevel
        // starting at LOD.length
        for (var i = this._LOD.length; i <= LODLevel; ++i) {
            this._LOD.push(new sphereLOD_1.SphereLOD(this._points, this._options, this._LOD[i - 1]));
        }
    };
    return Icosphere;
}());
exports.Icosphere = Icosphere;
;


/***/ }),

/***/ "./src/geometry/primitives.ts":
/*!************************************!*\
  !*** ./src/geometry/primitives.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(newX, newY, newZ) {
        this.x = newX;
        this.y = newY;
        this.z = newZ;
    }
    return Point;
}());
exports.Point = Point;
;
var Edge = /** @class */ (function () {
    function Edge(pointArray, pointIndices) {
        this._faces = new Array();
        if (pointIndices === undefined) {
            // if we don't have indices, create an edge from the points given
            this._points = pointArray;
        }
        else {
            // if we do have indices, create an edge from looking up the indices in the given array
            this._points = [pointArray[pointIndices[0]], pointArray[pointIndices[1]]];
        }
    }
    Edge.prototype.getPoint = function (index) {
        return this._points[index];
    };
    Edge.prototype.hasPoint = function (point) {
        return !(this._points.indexOf(point) === -1);
    };
    Edge.prototype.getFace = function (index) {
        return this._faces[index];
    };
    Edge.prototype.addFace = function (face) {
        this._faces.push(face);
    };
    Edge.prototype.getFaceArray = function () {
        return __spread(this._faces);
    };
    // returns true if this edge connects point0 and point1 in either direction
    Edge.prototype.connectsPoints = function (point0, point1) {
        return ((this._points[0] === point0 && this._points[1] === point1)
            || (this._points[0] === point1 && this._points[1] === point0));
    };
    // returns this edge's subEdge that connects point0 and point1
    // returns undefined if does not exist
    Edge.prototype.getSubEdgeBetween = function (point0, point1) {
        var e_1, _a;
        if (typeof this.subEdges === undefined)
            return undefined;
        try {
            for (var _b = __values(this.subEdges), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subEdge = _c.value;
                if (subEdge.connectsPoints(point0, point1))
                    return subEdge;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    };
    // returns this edge's subedge adjacent to given endpoint
    Edge.prototype.getSubEdgeAdjacentTo = function (point) {
        return this.getSubEdgeBetween(point, this.midpoint);
    };
    // get the face opposite the one given (assumes face given touches this edge)
    Edge.prototype.getFaceAdjacentTo = function (face) {
        return (face === this._faces[0]) ? this._faces[1] : this._faces[0];
    };
    // return the point that this edge shares with other,
    // else return undefined
    Edge.prototype.getSharedPoint = function (other) {
        var e_2, _a;
        try {
            for (var _b = __values(this._points), _c = _b.next(); !_c.done; _c = _b.next()) {
                var point = _c.value;
                if (other.hasPoint(point))
                    return point;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
    };
    return Edge;
}());
exports.Edge = Edge;
;
var Face = /** @class */ (function () {
    function Face(pointArray, pointIndices) {
        this._edges = new Array();
        if (pointIndices === undefined) {
            // if we don't have indices, create a face from the points given
            this._points = pointArray;
        }
        else {
            // if we do have indices, create a face from looking up the indices in the given array
            this._points = [
                pointArray[pointIndices[0]],
                pointArray[pointIndices[1]],
                pointArray[pointIndices[2]]
            ];
        }
        // set 'normal' uvs as the default
        var topUV = { u: 0.75, v: 1 };
        var leftUV = { u: 0.5, v: 0.5 };
        var rightUV = { u: 1, v: 0.5 };
        this._debugUVs = [topUV.u, topUV.v, leftUV.u, leftUV.v, rightUV.u, rightUV.v];
    }
    Face.prototype.getEdgeArray = function () {
        return __spread(this._edges);
    };
    Face.prototype.getPointArray = function () {
        return __spread(this._points);
    };
    // get all faces adjacent to this one
    Face.prototype.getAdjacentFaces = function () {
        var e_3, _a;
        var result = new Array();
        try {
            for (var _b = __values(this._edges), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edge = _c.value;
                result.push(edge.getFaceAdjacentTo(this));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    // returns UV coordinates for debugdraw
    Face.prototype.getDebugUVs = function () {
        return this._debugUVs;
    };
    Face.prototype.setDebugUVs = function (newUVs) {
        this._debugUVs = newUVs;
    };
    Face.prototype.getEdgesByPoints = function () {
        var e_4, _a;
        // label edge references by connecting points
        var edge01;
        var edge12;
        var edge20;
        try {
            // find edges by connecting points
            for (var _b = __values(this._edges), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edge = _c.value;
                // assign edge01 to the edge that connects between point0 and point1
                if (edge.connectsPoints(this._points[0], this._points[1]))
                    edge01 = edge;
                // assign edge12 to the edge that connects between point1 and point2
                if (edge.connectsPoints(this._points[1], this._points[2]))
                    edge12 = edge;
                // assign edge20 to the edge that connects between point2 and point0
                if (edge.connectsPoints(this._points[2], this._points[0]))
                    edge20 = edge;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return { edge01: edge01, edge12: edge12, edge20: edge20 };
    };
    Face.prototype.linkToEdges = function (edge0, edge1, edge2) {
        // give face a link to edges
        this._edges.push(edge0, edge1, edge2);
        // give edges links to face
        edge0.addFace(this);
        edge1.addFace(this);
        edge2.addFace(this);
    };
    // give face a reference to adjacent edges and vice versa
    // takes array indices rather than references
    Face.linkFaceToEdges = function (face, edge0, edge1, edge2, edges, faces) {
        // get references and call function with references
        faces[face].linkToEdges(edges[edge0], edges[edge1], edges[edge2]);
    };
    return Face;
}());
exports.Face = Face;
;


/***/ }),

/***/ "./src/geometry/sphereLOD.ts":
/*!***********************************!*\
  !*** ./src/geometry/sphereLOD.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var primitives_1 = __webpack_require__(/*! ./primitives */ "./src/geometry/primitives.ts");
var icosahedron_1 = __webpack_require__(/*! ./icosahedron */ "./src/geometry/icosahedron.ts");
var SphereLOD = /** @class */ (function () {
    // subdivide an existing LOD or create LOD 0
    function SphereLOD(pointsRef, options, priorLOD) {
        var e_1, _a, e_2, _b, _c;
        this.meshData = { vertices: [], indices: [], uvs: [] };
        // initialize variables
        this._initialize(pointsRef, options);
        if (priorLOD)
            // subdivide the prior LOD
            this._subdivide(priorLOD);
        else
            // generate LOD 0
            this._generate();
        // generate meshData for this LOD
        var i = 0;
        try {
            for (var _d = __values(this.faces), _e = _d.next(); !_e.done; _e = _d.next()) {
                var face = _e.value;
                try {
                    for (var _f = (e_2 = void 0, __values(face.getPointArray())), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var point = _g.value;
                        // add a unique vertex for each point of each face to allow UV mapping
                        this.meshData.vertices.push(point.x, point.y, point.z);
                        // add indices in the same order as we added the points
                        this.meshData.indices.push(i++);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                // add uvs for each face
                (_c = this.meshData.uvs).push.apply(_c, __spread(face.getDebugUVs()));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    SphereLOD.prototype._initialize = function (pointsRef, options) {
        this.radius = options.radius;
        // copy reference to master vertex array
        this.points = pointsRef;
        // create edge and face arrays for current LOD
        this.edges = new Array();
        this.faces = new Array();
    };
    SphereLOD.prototype._generate = function () {
        icosahedron_1.Icosahedron.generatePrimitives(this.radius, this.points, this.edges, this.faces);
    };
    // construct primitives from priorLOD
    SphereLOD.prototype._subdivide = function (priorLOD) {
        var _this = this;
        // iterate through edges to subdivide
        priorLOD.edges.forEach(function (edge) { return _this._subdivideEdge(edge); });
        // iterate through faces to subdivide
        priorLOD.faces.forEach(function (face) { return _this._subdivideFace(face); });
    };
    SphereLOD.prototype._subdivideEdge = function (edge) {
        // add a new point for each edge at the midpoint
        var point0 = edge.getPoint(0);
        var point1 = edge.getPoint(1);
        var midpoint = new primitives_1.Point(point0.x + (point1.x - point0.x) / 2, point0.y + (point1.y - point0.y) / 2, point0.z + (point1.z - point0.z) / 2);
        // shift the new point so it's radius from the origin
        var distToOrigin = Math.sqrt(midpoint.x * midpoint.x + midpoint.y * midpoint.y + midpoint.z * midpoint.z);
        var scaleFactor = this.radius / distToOrigin;
        midpoint.x *= scaleFactor;
        midpoint.y *= scaleFactor;
        midpoint.z *= scaleFactor;
        // add it to the master points array
        this.points.push(midpoint);
        // create new subdivided edges
        var subEdge0 = new primitives_1.Edge([point0, midpoint]);
        var subEdge1 = new primitives_1.Edge([point1, midpoint]);
        this.edges.push(subEdge0);
        this.edges.push(subEdge1);
        // add references to new submembers of this edge
        edge.midpoint = midpoint;
        edge.subEdges = [subEdge0, subEdge1];
    };
    SphereLOD.prototype._subdivideFace = function (face) {
        var _a, _b;
        var pointArray = face.getPointArray();
        // label edge references by connecting points
        var _c = face.getEdgesByPoints(), edge01 = _c.edge01, edge12 = _c.edge12, edge20 = _c.edge20;
        // label midpoints
        var midpoint01 = edge01.midpoint;
        var midpoint12 = edge12.midpoint;
        var midpoint20 = edge20.midpoint;
        // create new faces
        var newFaces = [
            new primitives_1.Face([pointArray[0], midpoint01, midpoint20]),
            new primitives_1.Face([pointArray[1], midpoint12, midpoint01]),
            new primitives_1.Face([pointArray[2], midpoint20, midpoint12]),
            new primitives_1.Face([midpoint01, midpoint12, midpoint20])
        ];
        (_a = this.faces).push.apply(_a, __spread(newFaces));
        // add new faces to subFaces
        face.subFaces = newFaces;
        // create new inside edges
        var midEdges = [
            new primitives_1.Edge([midpoint01, midpoint20]),
            new primitives_1.Edge([midpoint12, midpoint01]),
            new primitives_1.Edge([midpoint20, midpoint12])
        ];
        (_b = this.edges).push.apply(_b, __spread(midEdges));
        // link up faces and edges to allow further subdivision
        newFaces[0].linkToEdges(edge01.getSubEdgeAdjacentTo(pointArray[0]), edge20.getSubEdgeAdjacentTo(pointArray[0]), midEdges[0]);
        newFaces[1].linkToEdges(edge01.getSubEdgeAdjacentTo(pointArray[1]), edge12.getSubEdgeAdjacentTo(pointArray[1]), midEdges[1]);
        newFaces[2].linkToEdges(edge12.getSubEdgeAdjacentTo(pointArray[2]), edge20.getSubEdgeAdjacentTo(pointArray[2]), midEdges[2]);
        newFaces[3].linkToEdges(midEdges[0], midEdges[1], midEdges[2]);
    };
    return SphereLOD;
}());
exports.SphereLOD = SphereLOD;
;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var planet_1 = __webpack_require__(/*! ./planet */ "./src/planet.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var GUI = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var Game = /** @class */ (function () {
    function Game(canvasElement) {
        // Create canvas and engine.
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Game.prototype.createScene = function () {
        var _this = this;
        // Create a basic BJS Scene object.
        this._scene = new BABYLON.Scene(this._engine);
        // Create a camera, and set its position
        this._camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), this._scene);
        // Target the camera to scene origin.
        this._camera.setTarget(BABYLON.Vector3.Zero());
        // Attach the camera to the canvas.
        this._camera.attachControl(this._canvas, false);
        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        // create the GUI
        this._gui = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        var panel = new GUI.StackPanel();
        panel.width = "220px";
        panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        this._gui.addControl(panel);
        // create LOD control
        var headerLOD = new GUI.TextBlock();
        headerLOD.text = "LOD Level: 0";
        headerLOD.height = "30px";
        headerLOD.color = "black";
        panel.addControl(headerLOD);
        var slider = new GUI.Slider();
        slider.minimum = 0;
        slider.maximum = 6;
        slider.value = 0;
        slider.step = 1;
        slider.height = "20px";
        slider.width = "200px";
        slider.onValueChangedObservable.add(function (value) {
            headerLOD.text = "LOD Level: " + value;
            _this.updatePlanetLOD(value);
        });
        panel.addControl(slider);
        // create Seed control
        var header = new GUI.TextBlock();
        header.text = "Seed";
        header.height = "30px";
        header.color = "black";
        panel.addControl(header);
        var input = new GUI.InputText();
        input.height = "20px";
        input.width = "200px";
        input.text = "1000";
        input.color = "white";
        input.onFocusSelectAll = false;
        input.autoStretchWidth = false;
        input.onTextChangedObservable.add(function () {
            _this.updatePlanetSeed(Number(input.text));
        });
        panel.addControl(input);
        // make a planet
        this._planet = new planet_1.Planet(2, 1000, 0.3);
        this._icoMesh = new BABYLON.Mesh('planet', this._scene);
        // use debug texture for this thing
        this._icoMaterial = new BABYLON.StandardMaterial("mat", this._scene);
        this._icoMaterial.diffuseTexture = new BABYLON.Texture("../planetgen/PlanetgenDebug_color.png", this._scene);
        this._icoMesh.material = this._icoMaterial;
        // initialize _icoMesh
        this.updatePlanetLOD(0);
    };
    Game.prototype.doRender = function () {
        var _this = this;
        // Run the render loop.
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // The canvas/window resize event handler.
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    // regenerate planet with new seed
    Game.prototype.updatePlanetSeed = function (newSeed) {
        this._planet.changeSeed(newSeed);
        this.updatePlanetLOD(this._planet.getLODLevel());
    };
    // redraw _icosphere at the specified LOD
    Game.prototype.updatePlanetLOD = function (newLOD) {
        // update the mesh
        var result = this._planet.getUpdatedLODMesh(newLOD);
        var vertexData = new BABYLON.VertexData();
        vertexData.positions = result.vertices;
        vertexData.indices = result.indices;
        vertexData.uvs = result.uvs;
        vertexData.applyToMesh(this._icoMesh);
    };
    return Game;
}());
window.addEventListener('DOMContentLoaded', function () {
    // Create the game using the 'renderCanvas'.
    var game = new Game('renderCanvas');
    // Create the scene.
    game.createScene();
    // Start render loop.
    game.doRender();
});


/***/ }),

/***/ "./src/planet.ts":
/*!***********************!*\
  !*** ./src/planet.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var icosphere_1 = __webpack_require__(/*! ./geometry/icosphere */ "./src/geometry/icosphere.ts");
var tectonicLOD_1 = __webpack_require__(/*! ./tectonics/tectonicLOD */ "./src/tectonics/tectonicLOD.ts");
var Planet = /** @class */ (function (_super) {
    __extends(Planet, _super);
    function Planet(newRadius, newSeed, newNodeDensity) {
        return _super.call(this, { radius: newRadius, seed: newSeed, nodeDensity: newNodeDensity }) || this;
    }
    // set new seed and regenerate mesh
    Planet.prototype.changeSeed = function (newSeed) {
        this._options.seed = newSeed;
        var LODLevel = this._LOD.length - 1;
        this._LOD = undefined;
        this._updateLOD(LODLevel);
    };
    // get the set seed
    Planet.prototype.getSeed = function () {
        return this._options.seed;
    };
    // get the highest LOD level generated
    Planet.prototype.getLODLevel = function () {
        return this._LOD.length - 1;
    };
    Planet.prototype._updateLOD = function (LODLevel) {
        if (this._LOD == undefined) {
            // generate LOD 0
            this._LOD = [new tectonicLOD_1.TectonicLOD(this._points, this._options)];
        }
        // generate each new LOD up to LODLevel from the last LODLevel
        // starting at LOD.length
        for (var i = this._LOD.length; i <= LODLevel; ++i) {
            this._LOD.push(new tectonicLOD_1.TectonicLOD(this._points, this._options, this._LOD[i - 1]));
        }
    };
    return Planet;
}(icosphere_1.Icosphere));
exports.Planet = Planet;
;


/***/ }),

/***/ "./src/tectonics/faultLink.ts":
/*!************************************!*\
  !*** ./src/tectonics/faultLink.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
// links between two other FaultLinks to form a faultline
var FaultLink = /** @class */ (function () {
    function FaultLink(newLocation) {
        this.location = newLocation;
        this.connections = new Set();
    }
    // update the DrawType on this.location
    FaultLink.prototype.updateDrawType = function () {
        var _this = this;
        // find the edge indices on locations of this link's connections
        var topUV;
        var leftUV;
        var rightUV;
        // set uvs based on number and orientation of connections
        switch (this.connections.size) {
            case 3: // use the 'node' uvs
                topUV = { u: 0.25, v: 1 };
                leftUV = { u: 0, v: 0.5 };
                rightUV = { u: 0.5, v: 0.5 };
                this.location.setDebugUVs([topUV.u, topUV.v, leftUV.u, leftUV.v, rightUV.u, rightUV.v]);
                break;
            case 2: // use the 'link' uvs
                topUV = { u: 0.25, v: 0.5 };
                leftUV = { u: 0, v: 0 };
                rightUV = { u: 0.5, v: 0 };
                // find which point index is shared between the edges crossed by the two connections
                var edges = Array.from(__spread(this.connections), function (link) {
                    return _this.getEdgeAcrossConnectionTo(link);
                });
                var sharedPointIndex = void 0;
                if (edges.length == 2) {
                    sharedPointIndex = this.location.getPointArray().indexOf(edges[0].getSharedPoint(edges[1]));
                }
                else {
                    // this should not happen
                    console.log("Error: Some connection must not have an edge, unable to set debug UV");
                    return;
                }
                // this really should never happen
                if (sharedPointIndex == undefined) {
                    console.log("Error: point shared by connections does not exist or is not on the FaultLink's face ...");
                    console.log("... unable to set debug UVs");
                }
                // rotate the UVs so that topUV is at the sharedPointIndex
                var swapUV = void 0;
                switch (sharedPointIndex) {
                    case 0: // no need to rotate
                        break;
                    case 1: // rotate so that topUV is at leftUV
                        swapUV = leftUV;
                        leftUV = topUV;
                        topUV = rightUV;
                        rightUV = swapUV;
                        break;
                    case 2: // rotate so that topUV is at rightUV
                        swapUV = rightUV;
                        rightUV = topUV;
                        topUV = leftUV;
                        leftUV = swapUV;
                        break;
                    default: // this should also never happen
                        console.log("Somehow the sharedPointIndex is > 2. what.");
                }
                // set uvs to the proper rotated uvs
                this.location.setDebugUVs([topUV.u, topUV.v, leftUV.u, leftUV.v, rightUV.u, rightUV.v]);
                break;
            default: // this should never happen
                console.log("Error: FaultLink detected with " + this.connections.size + " connections. Should be 3 or 2.");
        }
    };
    // connect this link to another link
    FaultLink.prototype.linkTo = function (link) {
        this.connections.add(link);
        link.connections.add(this);
    };
    // get the edge between FaultLinks
    FaultLink.prototype.getEdgeAcrossConnectionTo = function (other) {
        var e_1, _a;
        try {
            for (var _b = __values(this.location.getEdgeArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edge = _c.value;
                if (edge.getFaceAdjacentTo(this.location) == other.location) {
                    return edge;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    };
    return FaultLink;
}());
exports.FaultLink = FaultLink;
;


/***/ }),

/***/ "./src/tectonics/tectonicLOD.ts":
/*!**************************************!*\
  !*** ./src/tectonics/tectonicLOD.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var faultLink_1 = __webpack_require__(/*! ../tectonics/faultLink */ "./src/tectonics/faultLink.ts");
var sphereLOD_1 = __webpack_require__(/*! ../geometry/sphereLOD */ "./src/geometry/sphereLOD.ts");
// allow for seeded rng
var seedrandom = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
var TectonicLOD = /** @class */ (function (_super) {
    __extends(TectonicLOD, _super);
    function TectonicLOD(pointsRef, options, priorLOD) {
        return _super.call(this, pointsRef, options, priorLOD) || this;
        // nothing goes here, we just override protected methods of sphereLOD instead
    }
    TectonicLOD.prototype._initialize = function (pointsRef, options) {
        _super.prototype._initialize.call(this, pointsRef, options);
        this.rng = seedrandom(options.seed);
        this.links = new Map();
        this.startingNodeDensity = options.nodeDensity;
    };
    // called if priorLOD is passed to the constructor
    // code in this function will be called in the super.constructor prior to mesh generation
    TectonicLOD.prototype._subdivide = function (priorLOD) {
        var _this = this;
        // subdivide mesh
        _super.prototype._subdivide.call(this, priorLOD);
        // initialize unpicked faces after subdividing mesh
        this.unpickedFaces = this.faces.slice();
        this.linkedEdges = new Array();
        // iterate though all super edges that connect two links
        priorLOD.linkedEdges.forEach(function (edge) {
            // pick a random edge for the fault to pass through
            var targetEdge = edge.subEdges[Math.round(_this.rng())];
            // create new FaultLinks at that edge
            var newLinks = new Array();
            targetEdge.getFaceArray().forEach(function (face) {
                // if link already exists, just link to it rather than creating a new one
                var existingLink = _this.links.get(face);
                var newLink = existingLink ? existingLink : new faultLink_1.FaultLink(face);
                newLinks.push(newLink);
                // add it to the links map if it we created a new link
                if (existingLink == undefined)
                    _this.links.set(face, newLink);
                // remove the face from unpicked faces
                _this.unpickedFaces.filter(function (unpickedFace) { return unpickedFace !== face; });
            });
            // link them to each other
            _this._connectLinks(newLinks[0], newLinks[1]);
        });
        // iterate through all super faces with any links on them
        priorLOD.links.forEach(function (superLink) {
            var e_1, _a;
            var superFace = superLink.location;
            // bridge between the faultlinks on this super face
            var linkFaceIndices = new Array();
            // each index corresponds to a specific subface relative to points and edges as constructed
            // essentially the index tells us where on the super face each subface is located
            for (var index = 0; index < superFace.subFaces.length; ++index) {
                // add the index of subFace to linkFaceIndices of it has a link on it
                if (_this.links.has(superFace.subFaces[index])) {
                    linkFaceIndices.push(index);
                }
            }
            // if there are 2 or 3 subfaces with links on them, they must connect through the center
            if ((linkFaceIndices.length == 2) || (linkFaceIndices.length == 3)) {
                // create center link
                var centerLink = new faultLink_1.FaultLink(superFace.subFaces[3]); // 3 is the index of the center subFace
                _this.links.set(superFace.subFaces[3], centerLink);
                try {
                    // link each of the links on this superFace to the centerLink
                    for (var linkFaceIndices_1 = __values(linkFaceIndices), linkFaceIndices_1_1 = linkFaceIndices_1.next(); !linkFaceIndices_1_1.done; linkFaceIndices_1_1 = linkFaceIndices_1.next()) {
                        var index = linkFaceIndices_1_1.value;
                        _this._connectLinks(_this.links.get(superFace.subFaces[index]), centerLink);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (linkFaceIndices_1_1 && !linkFaceIndices_1_1.done && (_a = linkFaceIndices_1["return"])) _a.call(linkFaceIndices_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            // if there is only one subface with links, it must already be connected off-face
            // and no new link creation is required
        });
        this._updateAllLinks();
    };
    // called if no priorLOD is passed to the constructor
    // code in this function will be called in the super.constructor prior to mesh generation
    TectonicLOD.prototype._generate = function () {
        var _this = this;
        // generate an icosahedron
        _super.prototype._generate.call(this);
        // initialize unpicked faces after generating mesh
        this.unpickedFaces = this.faces.slice();
        this.linkedEdges = new Array();
        // add starting nodes until we've reached startingNodeDensity
        while (this.links.size < (this.faces.length * this.startingNodeDensity)) {
            // pick a random face
            var pick = Math.floor(this.rng() * this.unpickedFaces.length);
            // create a new FaultLink at that face
            this.links.set(this.unpickedFaces[pick], new faultLink_1.FaultLink(this.unpickedFaces[pick]));
            // remove the selected face so we don't pick it again
            this.unpickedFaces.splice(pick, 1);
        }
        // iterate through initial nodes and ensure all adjacent faces have links
        this.links.forEach(function (link) {
            // if initial node, then it will have no connections
            if (link.connections.size == 0) {
                // iterate through adjacent faces
                link.location.getAdjacentFaces().forEach(function (face) {
                    // find the face in unpickedFaces, if not found, unpickedIndex = -1
                    var unpickedIndex = _this.unpickedFaces.indexOf(face);
                    if (unpickedIndex === -1) {
                        // face has already been picked, so link its node to this node
                        _this._connectLinks(_this.links.get(face), link);
                    }
                    else {
                        // face hasn't been picked so create a link there and link to it
                        var newLink = new faultLink_1.FaultLink(_this.unpickedFaces[unpickedIndex]);
                        _this.links.set(_this.unpickedFaces[unpickedIndex], newLink);
                        _this._connectLinks(newLink, link);
                        // and remove it from unpickedFaces
                        _this.unpickedFaces.splice(unpickedIndex, 1);
                    }
                });
            }
        });
        // iterate through all links and ensure they all have at least 2 connections
        this._expandAllLinks();
        this._updateAllLinks();
    };
    TectonicLOD.prototype._connectLinks = function (link0, link1) {
        // connect the links
        link0.linkTo(link1);
        // find the edge between them
        var edgeBetween = link0.getEdgeAcrossConnectionTo(link1);
        // add the edge between them to linkedEdges
        if (edgeBetween)
            this.linkedEdges.push(edgeBetween);
        else
            console.log("Error, tried to connect two links that don't share an edge");
    };
    // after links and mesh have been created, update the draw data on the faces appropriately
    TectonicLOD.prototype._updateAllLinks = function () {
        this.links.forEach(function (link) { return link.updateDrawType(); });
    };
    // iterate through all links and ensure they all have at least 2 connections
    TectonicLOD.prototype._expandAllLinks = function () {
        var e_2, _a;
        var _this = this;
        var _loop_1 = function (link) {
            if (link.connections.size < 2) {
                // get adjacent links to this link
                var possibleConnectionFaces = new Set(link.location.getAdjacentFaces());
                // remove the existing connection from possibleConnections
                var existingConnection = link.connections.values().next().value;
                possibleConnectionFaces["delete"](existingConnection.location);
                // pick a random connection to link to
                var targetFace_1 = Array.from(possibleConnectionFaces)[Math.round(this_1.rng())];
                // find the face in unpickedFaces, if not found, unpickedIndex = -1
                var unpickedIndex = this_1.unpickedFaces.indexOf(targetFace_1);
                if (unpickedIndex === -1) {
                    // face has already been picked, so link its link to this link
                    this_1.links.forEach(function (otherLink) { if (otherLink.location == targetFace_1)
                        _this._connectLinks(otherLink, link); });
                }
                else {
                    // create a new FaultLink at targetFace
                    var newLink = new faultLink_1.FaultLink(targetFace_1);
                    this_1.links.set(targetFace_1, newLink);
                    this_1._connectLinks(newLink, link);
                    // and remove it from unpickedFaces
                    this_1.unpickedFaces.splice(unpickedIndex, 1);
                }
            }
        };
        var this_1 = this;
        try {
            for (var _b = __values(this.links.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var link = _c.value;
                _loop_1(link);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return TectonicLOD;
}(sphereLOD_1.SphereLOD));
exports.TectonicLOD = TectonicLOD;
;


/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=planetgen.js.map