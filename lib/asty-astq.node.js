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
"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

/*  require both ASTy and ASTq  */
var ASTY = _dereq_("asty");
var ASTQ = _dereq_("astq");

/*  define an ASTq adapter for ASTy  */
var ASTQAdapter = (function () {
    function ASTQAdapter() {
        _classCallCheck(this, ASTQAdapter);
    }

    _prototypeProperties(ASTQAdapter, null, {
        taste: {
            value: function taste() {
                return true;
            },
            writable: true,
            configurable: true
        },
        getParentNode: {
            value: function getParentNode(node) {
                return node.parent();
            },
            writable: true,
            configurable: true
        },
        getChildNodes: {
            value: function getChildNodes(node) {
                return node.childs();
            },
            writable: true,
            configurable: true
        },
        getNodeType: {
            value: function getNodeType(node) {
                return node.type();
            },
            writable: true,
            configurable: true
        },
        getNodeAttrNames: {
            value: function getNodeAttrNames(node) {
                return node.attrs();
            },
            writable: true,
            configurable: true
        },
        getNodeAttrValue: {
            value: function getNodeAttrValue(node, attr) {
                return node.get(attr);
            },
            writable: true,
            configurable: true
        }
    });

    return ASTQAdapter;
})();

/*  define an ASTy super class hooking up ASTq to ASTy  */
var ASTYASTQ = (function (ASTY) {
    function ASTYASTQ() {
        _classCallCheck(this, ASTYASTQ);

        /*  allow us to be called without "new"  */
        if (!(this instanceof ASTYASTQ)) {
            return new ASTYASTQ();
        } /*  give ASTy super class a chance to initialize  */
        _get(Object.getPrototypeOf(ASTYASTQ.prototype), "constructor", this).call(this);

        /*  create an ASTq instance, able to operate on ASTy  */
        var astq = new ASTQ();
        astq.adapter(new ASTQAdapter());

        /*  extend this ASTy instance with an ASTq query method  */
        this.extend({
            query: function query(selector, params, trace) {
                return astq.query(this, selector, params, trace);
            }
        });
        return this;
    }

    _inherits(ASTYASTQ, ASTY);

    return ASTYASTQ;
})(ASTY);

/*  export us as an ASTy super class  */
module.exports = ASTYASTQ;
/* node */

},{"astq":"astq","asty":"asty"}]},{},[1])(1)
});