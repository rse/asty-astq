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
let ASTY = require("asty")
let ASTQ = require("astq")

/*  define an ASTq adapter for ASTy  */
let ASTQAdapter = class ASTQAdapter {
    taste            (/* node */) { return true           }
    getParentNode    (node)       { return node.parent()  }
    getChildNodes    (node)       { return node.childs()  }
    getNodeType      (node)       { return node.type()    }
    getNodeAttrNames (node)       { return node.attrs()   }
    getNodeAttrValue (node, attr) { return node.get(attr) }
}

/*  define an ASTy super class hooking up ASTq to ASTy  */
let ASTYASTQ = class ASTYASTQ extends ASTY {
    constructor () {
        /*  allow us to be called without "new"  */
        if (!(this instanceof ASTYASTQ))
            return new ASTYASTQ()

        /*  give ASTy super class a chance to initialize  */
        super()

        /*  create an ASTq instance, able to operate on ASTy  */
        let astq = new ASTQ()
        astq.adapter(new ASTQAdapter())

        /*  extend this ASTy instance with an ASTq query method  */
        this.extend({
            query (selector, params, trace) {
                return astq.query(this, selector, params, trace)
            }
        })
        return this
    }
}

/*  export us as an ASTy super class  */
module.exports = ASTYASTQ

