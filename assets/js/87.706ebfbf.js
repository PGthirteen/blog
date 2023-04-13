(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{532:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"js捕获异常的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js捕获异常的方法"}},[s._v("#")]),s._v(" Js捕获异常的方法")]),s._v(" "),t("p",[t("code",[s._v("JavaScript")]),s._v("的异常主要使用"),t("code",[s._v("try catch finally")]),s._v("语句以及窗口对象"),t("code",[s._v("window")]),s._v("的"),t("code",[s._v("onerror")]),s._v("事件来捕获。")]),s._v(" "),t("h2",{attrs:{id:"try-catch-finally"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#try-catch-finally"}},[s._v("#")]),s._v(" try catch finally")]),s._v(" "),t("p",[t("code",[s._v("try catch finally")]),s._v("只能捕获运行时的错误，无法捕获语法错误，可以拿到出错的信息，堆栈，出错的文件、行号、列号。"),t("code",[s._v("try catch finally")]),s._v("语句标记要尝试的语句块，并指定一个出现异常时抛出的响应。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// try_statements")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TypeError")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// catch_statements")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catch_statements"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TypeError")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// handle this expected error")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"handle this expected error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// handle unexpected error")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"handle unexpected error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// finally_statements")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"finally_statements"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n    注：\n    [catch (e if e instanceof TypeError) { // 非标准\n       catch_statements\n    }]\n*/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("通过"),t("code",[s._v("Error")]),s._v("的构造器可以创建一个错误对象，当运行时错误产生时，"),t("code",[s._v("Error")]),s._v("的实例对象会被抛出，"),t("code",[s._v("Error")]),s._v("对象也可用于用户自定义的异常的基础对象，"),t("code",[s._v("Js")]),s._v("内建了几种标准错误类型：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("EvalError")]),s._v(": 创建一个"),t("code",[s._v("error")]),s._v("实例，表示错误的原因：与"),t("code",[s._v("eval()")]),s._v("有关。")]),s._v(" "),t("li",[t("code",[s._v("RangeError")]),s._v(": 创建一个"),t("code",[s._v("error")]),s._v("实例，表示错误的原因：数值变量或参数超出其有效范围。")]),s._v(" "),t("li",[t("code",[s._v("ReferenceError")]),s._v(": 创建一个"),t("code",[s._v("error")]),s._v("实例，表示错误的原因：无效引用。")]),s._v(" "),t("li",[t("code",[s._v("SyntaxError")]),s._v(": 创建一个"),t("code",[s._v("error")]),s._v("实例，表示错误的原因："),t("code",[s._v("eval()")]),s._v("在解析代码的过程中发生的语法错误。")]),s._v(" "),t("li",[t("code",[s._v("TypeError")]),s._v(": 创建一个"),t("code",[s._v("error")]),s._v("实例，表示错误的原因：变量或参数不属于有效类型。")]),s._v(" "),t("li",[t("code",[s._v("URIError")]),s._v(": 创建一个"),t("code",[s._v("error")]),s._v("实例，表示错误的原因：给"),t("code",[s._v("encodeURI()")]),s._v("或"),t("code",[s._v("decodeURl()")]),s._v("传递的参数无效。")])]),s._v(" "),t("h2",{attrs:{id:"window-onerror"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-onerror"}},[s._v("#")]),s._v(" window.onerror")]),s._v(" "),t("p",[t("code",[s._v("window.onerror")]),s._v("可以捕捉语法错误，也可以捕捉运行时错误，可以拿到出错的信息，堆栈，出错的文件、行号、列号，只要在当前"),t("code",[s._v("window")]),s._v("执行的"),t("code",[s._v("Js")]),s._v("脚本出错都会捕捉到，通过"),t("code",[s._v("window.onerror")]),s._v("可以实现前端的错误监控。出于安全方面的考虑，当加载自不同域的脚本中发生语法错误时，语法错误的细节将不会报告。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n    message：错误信息（字符串）。\n    source：发生错误的脚本URL（字符串）\n    lineno：发生错误的行号（数字）\n    colno：发生错误的列号（数字）\n    error：Error对象（对象）\n    若该函数返回true，则阻止执行默认事件处理函数。\n*/")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onerror")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lineno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" colno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// onerror_statements")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n    ErrorEvent类型的event包含有关事件和错误的所有信息。\n*/")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// onerror_statements")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"每日一题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://www.jianshu.com/p/307df0f8d3f0\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror\nhttps://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);