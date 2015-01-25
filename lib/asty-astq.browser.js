/*
**  ASTy-ASTq -- Abstract Syntax Tree With Integrated Query Engine
**  Copyright (c) 2014-2015 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.ASTYASTQ=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";var _get=function e(t,r,n){var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var u=Object.getPrototypeOf(t);return null===u?void 0:e(u,r,n)}if("value"in o&&o.writable)return o.value;var i=o.get;return void 0===i?void 0:i.call(n)},_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},_prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},ASTY=_dereq_("asty"),ASTQ=_dereq_("astq"),ASTQAdapter=function(){function e(){}return _prototypeProperties(e,null,{taste:{value:function(){return!0},writable:!0,enumerable:!0,configurable:!0},getParentNode:{value:function(e){return e.parent()},writable:!0,enumerable:!0,configurable:!0},getChildNodes:{value:function(e){return e.childs()},writable:!0,enumerable:!0,configurable:!0},getNodeType:{value:function(e){return e.type()},writable:!0,enumerable:!0,configurable:!0},getNodeAttrNames:{value:function(e){return e.attrs()},writable:!0,enumerable:!0,configurable:!0},getNodeAttrValue:{value:function(e,t){return e.get(t)},writable:!0,enumerable:!0,configurable:!0}}),e}(),ASTYASTQ=function(e){function t(){if(!(this instanceof t))return new t;_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this);var e=new ASTQ;return e.adapter(new ASTQAdapter),this.extend({query:function(t,r,n){return e.query(this,t,r,n)}}),this}return _inherits(t,e),t}(ASTY);module.exports=ASTYASTQ;
},{"astq":"astq","asty":"asty"}]},{},[1])(1)
});


//# sourceMappingURL=asty-astq.browser.map