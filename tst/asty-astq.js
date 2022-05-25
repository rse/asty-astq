/*
**  ASTy-ASTq -- Abstract Syntax Tree With Integrated Query Engine
**  Copyright (c) 2014-2022 Dr. Ralf S. Engelschall <rse@engelschall.com>
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

/* global describe: false */
/* global it: false */

const chai = require("chai")
const expect = chai.expect
chai.config.includeStack = true

describe("ASTy-ASTq Library", function () {
    it("basic functionality", function () {
        const ASTYASTQ = require("../lib/asty-astq.node.js")
        const asty = new ASTYASTQ()
        const node = asty.create("foo")
        expect(node).to.be.a("object")
        expect(node).to.include.keys("T", "A", "C", "P")
        expect(node.T).to.be.equal("foo")
        expect(node).to.respondTo("type")
        expect(node).to.respondTo("dump")
    })
})

