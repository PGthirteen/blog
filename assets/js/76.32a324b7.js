(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{521:function(e,s,t){"use strict";t.r(s);var a=t(0),v=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"js中fetch方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js中fetch方法"}},[e._v("#")]),e._v(" Js中fetch方法")]),e._v(" "),s("p",[s("code",[e._v("fetch()")]),e._v("方法定义在"),s("code",[e._v("Window")]),e._v("对象以及"),s("code",[e._v("WorkerGlobalScope")]),e._v("对象上，用于发起获取资源的请求，其返回一个"),s("code",[e._v("Promise")]),e._v("对象，这个"),s("code",[e._v("Promise")]),e._v("对象会在请求响应后被"),s("code",[e._v("resolve")]),e._v("，并传回"),s("code",[e._v("Response")]),e._v("对象。")]),e._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[e._v("#")]),e._v(" 描述")]),e._v(" "),s("p",[s("code",[e._v("Promise<Response> fetch(input[, init])")])]),e._v(" "),s("p",[s("code",[e._v("input")]),e._v(": 定义要获取的资源，其值可以是：")]),e._v(" "),s("ul",[s("li",[e._v("一个字符串，包含要获取资源的"),s("code",[e._v("URL")]),e._v("，一些浏览器会接受 "),s("code",[e._v("blob")]),e._v("和"),s("code",[e._v("data")]),e._v("作为"),s("code",[e._v("schemes")]),e._v("。")]),e._v(" "),s("li",[e._v("一个"),s("code",[e._v("Request")]),e._v("对象。")])]),e._v(" "),s("p",[s("code",[e._v("init")]),e._v(": 一个配置项对象，包括所有对请求的设置。可选的参数有：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("method")]),e._v(": 请求使用的方法，如"),s("code",[e._v("GET")]),e._v("、"),s("code",[e._v("POST")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("headers")]),e._v(": 请求的头信息，形式为"),s("code",[e._v("Headers")]),e._v("的对象或包含"),s("code",[e._v("ByteString")]),e._v("值的对象字面量。")]),e._v(" "),s("li",[s("code",[e._v("body")]),e._v(": 请求的"),s("code",[e._v("body")]),e._v("信息：可能是一个"),s("code",[e._v("Blob")]),e._v("、"),s("code",[e._v("BufferSource")]),e._v("、"),s("code",[e._v("FormData")]),e._v("、"),s("code",[e._v("URLSearchParams")]),e._v("或者"),s("code",[e._v("USVString")]),e._v("对象，注意"),s("code",[e._v("GET")]),e._v("或"),s("code",[e._v("HEAD")]),e._v("方法的请求不能包含"),s("code",[e._v("body")]),e._v("信息。")]),e._v(" "),s("li",[s("code",[e._v("mode")]),e._v(": 请求的模式，如"),s("code",[e._v("cors")]),e._v("、"),s("code",[e._v("no-cors")]),e._v("或者"),s("code",[e._v("same-origin")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("credentials")]),e._v(": 请求的"),s("code",[e._v("credentials")]),e._v("，如"),s("code",[e._v("omit")]),e._v("、"),s("code",[e._v("same-origin")]),e._v("或者"),s("code",[e._v("include")]),e._v("，为了在当前域名内自动发送"),s("code",[e._v("cookie")]),e._v("，必须提供这个选项。")]),e._v(" "),s("li",[s("code",[e._v("cache")]),e._v(": 请求的"),s("code",[e._v("cache")]),e._v("模式: "),s("code",[e._v("default")]),e._v("、"),s("code",[e._v("no-store")]),e._v("、"),s("code",[e._v("reload")]),e._v("、"),s("code",[e._v("no-cache")]),e._v("、"),s("code",[e._v("force-cache")]),e._v("或者"),s("code",[e._v("only-if-cached")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("redirect")]),e._v(": 可用的"),s("code",[e._v("redirect")]),e._v("模式: "),s("code",[e._v("follow")]),e._v("自动重定向，"),s("code",[e._v("error")]),e._v("如果产生重定向将自动终止并且抛出一个错误，或者"),s("code",[e._v("manual")]),e._v("手动处理重定向。")]),e._v(" "),s("li",[s("code",[e._v("referrer")]),e._v(": 一个"),s("code",[e._v("USVString")]),e._v("可以是"),s("code",[e._v("no-referrer")]),e._v("、"),s("code",[e._v("client")]),e._v("或一个"),s("code",[e._v("URL")]),e._v("，默认是 "),s("code",[e._v("client")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("referrerPolicy")]),e._v(": 指定了"),s("code",[e._v("HTTP")]),e._v("头部"),s("code",[e._v("referer")]),e._v("字段的值，可能为以下值之一： "),s("code",[e._v("no-referrer")]),e._v("、"),s("code",[e._v("no-referrer-when-downgrade")]),e._v("、"),s("code",[e._v("origin")]),e._v("、"),s("code",[e._v("origin-when-cross-origin")]),e._v("、"),s("code",[e._v("unsafe-url")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("integrity")]),e._v(": 包括请求的"),s("code",[e._v("subresource integrity")]),e._v("值，例如: "),s("code",[e._v("sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=")]),e._v("。")])]),e._v(" "),s("p",[e._v("返回一个"),s("code",[e._v("Promise")]),e._v("，"),s("code",[e._v("resolve")]),e._v("时回传"),s("code",[e._v("Response")]),e._v("对象。")]),e._v(" "),s("h2",{attrs:{id:"fetch与jquery-ajax区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch与jquery-ajax区别"}},[e._v("#")]),e._v(" fetch与jQuery.ajax区别")]),e._v(" "),s("ul",[s("li",[e._v("当接收到一个代表错误的"),s("code",[e._v("HTTP")]),e._v("状态码时，从"),s("code",[e._v("fetch()")]),e._v("返回的"),s("code",[e._v("Promise")]),e._v("不会被标记为 "),s("code",[e._v("reject")]),e._v("，即使响应的"),s("code",[e._v("HTTP")]),e._v("状态码是"),s("code",[e._v("404")]),e._v("或"),s("code",[e._v("500")]),e._v("，其会将"),s("code",[e._v("Promise")]),e._v("状态标记为 "),s("code",[e._v("resolve")]),e._v("，但是返回的"),s("code",[e._v("Promise")]),e._v("会将"),s("code",[e._v("resolve")]),e._v("的返回值的"),s("code",[e._v("ok")]),e._v("属性设置为"),s("code",[e._v("false")]),e._v("，仅当网络故障时或请求被阻止时，才会标记为"),s("code",[e._v("reject")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("fetch()")]),e._v("不会接受跨域"),s("code",[e._v("cookies")]),e._v("，你也不能使用"),s("code",[e._v("fetch()")]),e._v("建立起跨域会话，其他域的"),s("code",[e._v("Set-Cookie")]),e._v("头部字段将会被无视。")]),e._v(" "),s("li",[s("code",[e._v("fetch()")]),e._v("不会发送"),s("code",[e._v("cookies")]),e._v("，除非使用了"),s("code",[e._v("credentials")]),e._v("的初始化选项。")])]),e._v(" "),s("h2",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[e._v("#")]),e._v(" 实例")]),e._v(" "),s("h3",{attrs:{id:"发起请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发起请求"}},[e._v("#")]),e._v(" 发起请求")]),e._v(" "),s("p",[e._v("发起一个简单的资源请求，对于"),s("code",[e._v("fetch")]),e._v("请求返回一个"),s("code",[e._v("Promise")]),e._v("对象，这个"),s("code",[e._v("Promise")]),e._v("对象会在请求响应后被"),s("code",[e._v("resolve")]),e._v("，并传回"),s("code",[e._v("Response")]),e._v("对象。")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("res")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"设置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置参数"}},[e._v("#")]),e._v(" 设置参数")]),e._v(" "),s("p",[e._v("通过"),s("code",[e._v("init")]),e._v("配置对象设置参数，可以设置"),s("code",[e._v("method")]),e._v("、"),s("code",[e._v("headers")]),e._v("、"),s("code",[e._v("body")]),e._v("、"),s("code",[e._v("mode")]),e._v("、"),s("code",[e._v("credentials")]),e._v("、"),s("code",[e._v("cache")]),e._v("、"),s("code",[e._v("redirect")]),e._v("、"),s("code",[e._v("referrer")]),e._v("、"),s("code",[e._v("referrerPolicy")]),e._v("、"),s("code",[e._v("integrity")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"accept"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application/javascript"')]),e._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nheaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"accept"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application/xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nheaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"user-agent"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("headers")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("cache")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'no-cache'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("res")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("h4",{attrs:{id:"headers对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers对象"}},[e._v("#")]),e._v(" Headers对象")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Headers.append()")]),e._v(": 给现有的"),s("code",[e._v("header")]),e._v("添加一个值, 或者添加一个未存在的"),s("code",[e._v("header")]),e._v("并赋值。")]),e._v(" "),s("li",[s("code",[e._v("Headers.delete()")]),e._v(": 从"),s("code",[e._v("Headers")]),e._v("对象中删除指定"),s("code",[e._v("header")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("Headers.entries()")]),e._v(": 以迭代器的形式返回"),s("code",[e._v("Headers")]),e._v("对象中所有的键值对。")]),e._v(" "),s("li",[s("code",[e._v("Headers.get()")]),e._v(": 以"),s("code",[e._v("ByteString")]),e._v("的形式从"),s("code",[e._v("Headers")]),e._v("对象中返回指定header的全部值。")]),e._v(" "),s("li",[s("code",[e._v("Headers.has()")]),e._v(": 以布尔值的形式从"),s("code",[e._v("Headers")]),e._v("对象中返回是否存在指定的"),s("code",[e._v("header")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("Headers.keys()")]),e._v(": 以迭代器的形式返回"),s("code",[e._v("Headers")]),e._v("对象中所有存在的"),s("code",[e._v("header")]),e._v("名。")]),e._v(" "),s("li",[s("code",[e._v("Headers.set()")]),e._v(": 替换现有的"),s("code",[e._v("header")]),e._v("的值, 或者添加一个未存在的"),s("code",[e._v("header")]),e._v("并赋值。")]),e._v(" "),s("li",[s("code",[e._v("Headers.values()")]),e._v(": 以迭代器的形式返回"),s("code",[e._v("Headers")]),e._v("对象中所有存在的"),s("code",[e._v("header")]),e._v("的值。")])]),e._v(" "),s("h3",{attrs:{id:"响应处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应处理"}},[e._v("#")]),e._v(" 响应处理")]),e._v(" "),s("p",[e._v("通过"),s("code",[e._v("Response")]),e._v("对象对响应的数据作处理，包括获取响应状态以及响应体的处理等操作。")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("res")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("data")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h4",{attrs:{id:"response对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response对象"}},[e._v("#")]),e._v(" Response对象")]),e._v(" "),s("p",[s("code",[e._v("Response")]),e._v("对象的相关属性与方法：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Response.headers")]),e._v(": 只读，包含此"),s("code",[e._v("Response")]),e._v("所关联的"),s("code",[e._v("Headers")]),e._v("对象。")]),e._v(" "),s("li",[s("code",[e._v("Response.ok")]),e._v(": 只读，包含了一个布尔值，标示该"),s("code",[e._v("Response")]),e._v("成功，"),s("code",[e._v("HTTP")]),e._v("状态码的范围在 "),s("code",[e._v("200-299")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("Response.redirected")]),e._v(": 只读，表示该"),s("code",[e._v("Response")]),e._v("是否来自一个重定向，如果是的话，它的"),s("code",[e._v("URL")]),e._v("列表将会有多个条目。")]),e._v(" "),s("li",[s("code",[e._v("Response.status")]),e._v(": 只读，包含"),s("code",[e._v("Response")]),e._v("的状态码。")]),e._v(" "),s("li",[s("code",[e._v("Response.statusText")]),e._v(": 只读，包含了与该"),s("code",[e._v("Response")]),e._v("状态码一致的状态信息。")]),e._v(" "),s("li",[s("code",[e._v("Response.type")]),e._v(": 只读，包含"),s("code",[e._v("Response")]),e._v("的类型，例如"),s("code",[e._v("basic")]),e._v("、"),s("code",[e._v("cors")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("Response.url")]),e._v(": 只读，包含"),s("code",[e._v("Response")]),e._v("的"),s("code",[e._v("URL")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("Response.useFinalURL")]),e._v(": 包含了一个布尔值，来标示这是否是该"),s("code",[e._v("Response")]),e._v("的最终"),s("code",[e._v("URL")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("Response.clone()")]),e._v(": 创建一个"),s("code",[e._v("Response")]),e._v("对象的克隆。")]),e._v(" "),s("li",[s("code",[e._v("Response.error()")]),e._v(": 返回一个绑定了网络错误的新的"),s("code",[e._v("Response")]),e._v("对象。")]),e._v(" "),s("li",[s("code",[e._v("Response.redirect()")]),e._v(": 用另一个"),s("code",[e._v("URL")]),e._v("创建一个新的"),s("code",[e._v("Response")]),e._v("。")])]),e._v(" "),s("p",[s("code",[e._v("Response")]),e._v("实现了"),s("code",[e._v("Body")]),e._v("接口，相关属性与方法可以直接使用：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Body.body")]),e._v(": 只读，一个简单的"),s("code",[e._v("getter")]),e._v("，用于暴露一个"),s("code",[e._v("ReadableStream")]),e._v("类型的"),s("code",[e._v("body")]),e._v("内容。")]),e._v(" "),s("li",[s("code",[e._v("Body.bodyUsed")]),e._v(": 只读，包含了一个布尔值来标示该"),s("code",[e._v("Response")]),e._v("是否读取过"),s("code",[e._v("Body")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("Body.arrayBuffer()")]),e._v(": 读取"),s("code",[e._v("Response")]),e._v("对象并且将它设置为已读，并返回一个被解析为"),s("code",[e._v("ArrayBuffer")]),e._v("格式的"),s("code",[e._v("Promise")]),e._v("对象，"),s("code",[e._v("Responses")]),e._v("对象被设置为了"),s("code",[e._v("stream")]),e._v("的方式，所以它们只能被读取一次。")]),e._v(" "),s("li",[s("code",[e._v("Body.blob()")]),e._v(":\n读取"),s("code",[e._v("Response")]),e._v("对象并且将它设置为已读，并返回一个被解析为"),s("code",[e._v("Blob")]),e._v("格式的"),s("code",[e._v("Promise")]),e._v("对象。")]),e._v(" "),s("li",[s("code",[e._v("Body.formData()")]),e._v(":\n读取"),s("code",[e._v("Response")]),e._v("对象并且将它设置为已读，并返回一个被解析为"),s("code",[e._v("FormData")]),e._v("格式的"),s("code",[e._v("Promise")]),e._v("对象。")]),e._v(" "),s("li",[s("code",[e._v("Body.json()")]),e._v(":\n读取"),s("code",[e._v("Response")]),e._v("对象并且将它设置为已读，并返回一个被解析为"),s("code",[e._v("JSON")]),e._v("格式的"),s("code",[e._v("Promise")]),e._v("对象。")]),e._v(" "),s("li",[s("code",[e._v("Body.text()")]),e._v(":\n读取"),s("code",[e._v("Response")]),e._v("对象并且将它设置为已读，并返回一个被解析为"),s("code",[e._v("USVString")]),e._v("格式的"),s("code",[e._v("Promise")]),e._v("对象。")])]),e._v(" "),s("h2",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[e._v("#")]),e._v(" 每日一题")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://github.com/WindrunnerMax/EveryDay\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://segmentfault.com/a/1190000012740215\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/Headers\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/Response\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch\nhttps://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);