(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{623:function(s,t,a){"use strict";a.r(t);var e=a(0),v=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"v-html可能导致的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-html可能导致的问题"}},[s._v("#")]),s._v(" v-html可能导致的问题")]),s._v(" "),t("p",[t("code",[s._v("Vue")]),s._v("中的"),t("code",[s._v("v-html")]),s._v("指令用以更新元素的"),t("code",[s._v("innerHTML")]),s._v("，其内容按普通"),t("code",[s._v("HTML")]),s._v("插入，不会作为"),t("code",[s._v("Vue")]),s._v("模板进行编译，如果试图使用"),t("code",[s._v("v-html")]),s._v("组合模板，可以重新考虑是否通过使用组件来替代。")]),s._v(" "),t("h2",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),t("h3",{attrs:{id:"易导致xss攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#易导致xss攻击"}},[s._v("#")]),s._v(" 易导致XSS攻击")]),s._v(" "),t("p",[t("code",[s._v("v-html")]),s._v("指令最终调用的是"),t("code",[s._v("innerHTML")]),s._v("方法将指令的"),t("code",[s._v("value")]),s._v("插入到对应的元素里，这就是容易造成"),t("code",[s._v("xss")]),s._v("攻击漏洞的原因了。"),t("code",[s._v("Vue")]),s._v("在官网对于此也给出了温馨提示，在网站上动态渲染任意"),t("code",[s._v("HTML")]),s._v("是非常危险的，因为容易导致"),t("code",[s._v("XSS")]),s._v("攻击，只在可信内容上使用"),t("code",[s._v("v-html")]),s._v("，永不用在用户提交的内容上。"),t("br"),s._v("\n关于"),t("code",[s._v("XSS")]),s._v("，跨站脚本攻击"),t("code",[s._v("XSS")]),s._v("，是最普遍的"),t("code",[s._v("Web")]),s._v("应用安全漏洞。这类漏洞能够使得攻击者嵌入恶意脚本代码到正常用户会访问到的页面中，当正常用户访问该页面时，则可导致嵌入的恶意脚本代码的执行，从而达到恶意攻击用户的目的。当动态页面中插入的内容含有这些特殊字符如"),t("code",[s._v("<")]),s._v("时，用户浏览器会将其误认为是插入了"),t("code",[s._v("HTML")]),s._v("标签，当这些"),t("code",[s._v("HTML")]),s._v("标签引入了一段"),t("code",[s._v("JavaScript")]),s._v("脚本时，这些脚本程序就将会在用户浏览器中执行。当这些特殊字符不能被动态页面检查或检查出现失误时，就将会产生"),t("code",[s._v("XSS")]),s._v("漏洞。")]),s._v(" "),t("ul",[t("li",[s._v("反射型"),t("code",[s._v("XSS")]),s._v("： 攻击者事先制作好攻击链接,需要欺骗用户自己去点击链接才能触发"),t("code",[s._v("XSS")]),s._v("代码，所谓反射型"),t("code",[s._v("XSS")]),s._v("就是将恶意用户输入的"),t("code",[s._v("js")]),s._v("脚本，反射到浏览器执行。")]),s._v(" "),t("li",[s._v("存储型"),t("code",[s._v("XSS")]),s._v("：代码是存储在服务器中的，如在个人信息或发表文章等地方，加入代码，如果没有过滤或过滤不严，那么这些代码将储存到服务器中，每当有用户访问该页面的时候都会触发代码执行，这种"),t("code",[s._v("XSS")]),s._v("非常危险，容易造成蠕虫，大量盗窃"),t("code",[s._v("cookie")]),s._v("，也被称为持久型"),t("code",[s._v("XSS")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("DOM")]),s._v("型"),t("code",[s._v("XSS")]),s._v("：类似于反射型"),t("code",[s._v("XSS")]),s._v("，但这种"),t("code",[s._v("XSS")]),s._v("攻击的实现是通过对"),t("code",[s._v("DOM")]),s._v("树的修改而实现的。")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("// 直接将输入打印到页面，造成XSS // 反射型示例\n"),t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$XssReflex")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'i'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$XssReflex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 构造url，点击后就可以执行js代码 --\x3e")]),s._v("\nhttp://127.0.0.1/xss.php?i="),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run javascript"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"不作为模板编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不作为模板编译"}},[s._v("#")]),s._v(" 不作为模板编译")]),s._v(" "),t("p",[t("code",[s._v("v-html")]),s._v("更新的是直接使用元素的"),t("code",[s._v("innerHTML")]),s._v("方法，内容按普通"),t("code",[s._v("HTML")]),s._v("插入，不会作为"),t("code",[s._v("Vue")]),s._v("模板进行编译，如果试图使用"),t("code",[s._v("v-html")]),s._v("组合模板，可以重新考虑是否通过使用组件来替代。另外后端返回"),t("code",[s._v("<script>")]),s._v("标签中的代码是不会直接执行的，这是浏览器的策略，如果需要的话可以在"),t("code",[s._v("$nextTick")]),s._v("回调中动态创建"),t("code",[s._v("<script>")]),s._v("标签然后"),t("code",[s._v("src")]),s._v("引入代码"),t("code",[s._v("url")]),s._v("即可。")]),s._v(" "),t("h3",{attrs:{id:"scoped样式不能应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoped样式不能应用"}},[s._v("#")]),s._v(" scoped样式不能应用")]),s._v(" "),t("p",[s._v("在单文件组件里，"),t("code",[s._v("scoped")]),s._v("的样式不会应用在"),t("code",[s._v("v-html")]),s._v("内部，因为那部分"),t("code",[s._v("HTML")]),s._v("没有被"),t("code",[s._v("Vue")]),s._v("的模板编译器处理，如果你希望针对"),t("code",[s._v("v-html")]),s._v("的内容设置带作用域的"),t("code",[s._v("CSS")]),s._v("，你可以替换为"),t("code",[s._v("CSS Modules")]),s._v("或用一个额外的全局"),t("code",[s._v("<style>")]),s._v("元素手动设置类似"),t("code",[s._v("BEM")]),s._v("的作用域策略。此外提一下关于样式隔离的话，"),t("code",[s._v("Shadow DOM")]),s._v("也是个不错的解决方案。关于"),t("code",[s._v("CSS Modules")]),s._v("以及"),t("code",[s._v("BEM")]),s._v("命名规范可以参考下面的链接。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://zhuanlan.zhihu.com/p/72631379\nhttps://vue-loader.vuejs.org/zh/guide/css-modules.html\nhttps://www.ruanyifeng.com/blog/2016/06/css_modules.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"每日一题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[s._v("#")]),s._v(" 每日一题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/WindrunnerMax/EveryDay\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://cn.vuejs.org/v2/api/#v-html\nhttps://zhuanlan.zhihu.com/p/72631379\nhttps://juejin.cn/post/6844903918518927367\nhttps://www.cnblogs.com/ming1025/p/13091253.html\nhttps://www.ruanyifeng.com/blog/2017/04/css_in_js.html\nhttps://vue-loader.vuejs.org/zh/guide/css-modules.html\nhttps://www.ruanyifeng.com/blog/2016/06/css_modules.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);t.default=v.exports}}]);