
ASTy-ASTq
=========

Abstract Syntax Tree With Integrated Query Engine

<p/>
<img src="https://nodei.co/npm/asty-astq.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/asty-astq.png" alt=""/>

Installation
------------

#### Node environments (with NPM package manager):

```shell
$ npm install asty-astq
```

#### Browser environments (with Bower package manager):

```shell
$ bower install asty-astq
```

About
-----

ASTy-ASTq, as its name implies, is a combination of
the Abstract Syntax Tree (AST) Data Structure library
[ASTy](https://www.npmjs.com/package/asty) and the Anstract Syntax Tree
(AST) Query Engine Library [ASTq](https://www.npmjs.com/package/astq).
Technically ASTy-ASTq is a super-class of ASTy while it internally
integrates ASTq so that each ASTy node has an additional `query` method
available. The `query` method has the folowing signature (in TypeScript
notation):

    query(
        selector: String,
        params?: { [name: String]: [value: Any] },
        trace?: Boolean
    ): ASTYNode

In other words, the following ASTy-ASTq usage...

    var ASTY = require("asty-astq")

    var asty = new ASTY()
    var node = asty.create("Foo")

    var nodes = node.query("Foo", {}, true)

...is technically equivalent to the underlying ASTy plus ASTq usage onto
which ASTy-ASTq maps itself:

    var ASTY = require("asty")

    var asty = new ASTY()
    var node = asty.create("Foo")

    var ASTQ = require("astq")
    var astq = new ASTQ()
    astq.adapter({
        taste:            function (/* node */) { return true           },
        getParentNode:    function (node)       { return node.parent()  },
        getChildNodes:    function (node)       { return node.childs()  },
        getNodeType:      function (node)       { return node.type()    },
        getNodeAttrNames: function (node)       { return node.attrs()   },
        getNodeAttrValue: function (node, attr) { return node.get(attr) }
    })
    var nodes = astq.query(node, "Foo", {}, true)

License
-------

Copyright (c) 2014-2017 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

